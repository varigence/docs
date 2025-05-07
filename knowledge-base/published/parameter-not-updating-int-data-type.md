---
uid: kb-parameter-not-updating-int-data-type
title: Parameter Not Updating ('INT' Data Type)
summary: Providing documentation for common known issue regarding INT data type failure
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue 

After executing a load, the \`\[bfx\].\[ConfigVariable\]\` table does UPDATE the \`\[VariableValue\]\` or \`\[PreviousValue\]\` columns.  
 

# Cause

This issue presents itself when the follow are all true:  
 

*   Parameter is an int or decimal datatype
    
*   Parameter already has an entry in \[bfx\].\[ConfigVariable\]
    
*   The current \[VariableValue\] can be evaluated as a date
    
    *   Specifically if ISDATE( \[VariableValue\] ) = 1 on SQL Server
        
*   The value being loaded does CAN NOT be evaluated as a date
    
    *   Specifically if ISDATE( \[VariableValue\] ) = 0 on SQL Server  
         
        

# Resolution

As of the BimlFlex 2021 release, this issue can be circumvented via manual database update statement.    
  
A _DATATYPEOVERRIDE_ column has been placed in the \`\[bfx\].\[ConfigVariable\]\` table in the **BimlCatalog.** If there is an affected **Parameter**, this value can be manually updated to \`int\` or \`decimal\` to prevent incorrectly flagging a value as a 'date'.  
  
Additional documentation can be found here: [Load Parameters](xref:bimlflex-concepts-metadata-parameters)