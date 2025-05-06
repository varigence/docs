---
uid: kb-attempt-to-parse-the-expression-flex-to-bk-missing-failed
title: Attempt to Parse the Expression "FlexToBk_Missing" Failed
summary: "Errors occurred when trying to execute an SSIS package in Visual Studio: FlexToBk_Missing"
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
This is based on [Error Message with SSIS Package](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=1b0ed2be-a1dc-ee11-904c-7c1e5200bad8) \[remove before publication\]

**Problem** 

The user created a metadata solution in BimlFlex then built the SSIS packages in BimlStudio. Afterwards, they would attempt to execute the packages in Visual Studio, but the following errors caused the execution to fail:    

Error: Attempt to parse the expression "FlexToBk\_Missing" failed. The expression might contain an invalid token, an incomplete token, or an invalid element. It might not be well-formed, or might be missing part of a required element such as a parenthesis.  
Error: Cannot parse the expression "FlexToBk\_Missing". The expression was not valid, or there is an out-of-memory error.  
Error: The expression "FlexToBk\_Missing" on "DC - Add Derived Columns" is not valid.  
Error: "DC - Add Derived Columns 0" failed validation and returned validation status "VS\_ISBROKEN".

**Cause**

This is normally caused by an incorrect configuration of one of the FlexToBk expressions. In this case, the error was caused by the inclusion of a non-existent column in the Dataflow expression. In other words, the Dataflow expression for column dbo.Entities.Entity\_BK was configured as FlexToBk(@@rs, ObjectKey), when no column named dbo.Entities.ObjectKey had been defined. 

**Solution**

The are two options when encountering this error: either update the Dataflow expression to use a column that already exists, or add the missing column into the table. To continue the example from above, if dbo.Entities.ObjectKey doesn't exist but dbo.Entities.EntityKey does, the Dataflow Expression could be updated to FlexToBk(@@rs, EntityKey) or ObjectKey could be added to the dbo.Entities object. 

**Conclusion**

Unfortunately it would be difficult and computationally expensive for the application to attempt to validate all inputs entered into freeform text fields, so it must be left to the user to be sure that the items referenced by the expression exist. This error underscores the user's responsibility to carefully consider their metadata as they build their solution. Our tools provide significant guidance and validation, but it is incumbent on the user to enter correct information into the application. For our part, we are constantly working to improve error messages like the one that Visual Studio returned in this situation. In addition to more descriptive error messages, Varigence is developing new models of user interaction that eliminate some possibilities for input errors such as the one demonstrated here.