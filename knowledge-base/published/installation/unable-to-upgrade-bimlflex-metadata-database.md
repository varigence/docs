---
uid: kb-unable-to-upgrade-bimlflex-metadata-database
title: Unable to Upgrade BimlFlex Metadata Database (2022 R2)
summary: How to resolve the "Could Not Deploy Package" error when updating the BimlFlex database
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue 

When attempting to upgrade the BimlFlex Metadata Database, the following error is encountered:  
  
\*\*\* Could not deploy package.

...more lines...

Error SQL72014: .Net SqlClient Data Provider: Msg 1505, Level 16, State 1, Line 1 The CREATE UNIQUE INDEX statement terminated because a duplicate key was found for the object name 'vsto.BusinessEntityTypes' and the index name 'UIX\_vstoBusinessEntityTypes'. The duplicate key value is (00000000-0000-0000-0000-000000000000, Version 1, 00000000-0000-0000-0000-000000000000, <NULL>).  
Error SQL72045: Script execution error. The executed script:  
CREATE UNIQUE NONCLUSTERED INDEX \[UIX\_vstoBusinessEntityTypes\]  
ON \[vsto\].\[BusinessEntityTypes\](\[CustomerUID\] ASC, \[VersionName\] ASC, \[ChangeSet\] DESC, \[BusinessEntityType\] ASC);  
 

# Resolution

This error has been identified a known issue with the upgrade scripts, specifically when used against a Business Modeling table. A simple SQL script will resolve the issue.  
 

# Process

This error is most commonly observed when upgrading to BimlFlex version 22.1.124.0. Running the following SQL statement on the BimlFlex Metadata Database will allow the DACPAC to deploy successfully:   
  
DELETE FROM \[vsto\].\[BusinessEntityTypes\] WHERE \[CustomerUID\] = '00000000-0000-0000-0000-000000000000'  
  
The above statement will only remove some system-created metadata ( CustomerUID = '...000' ) that is causing the issue.  
  
If the above script does not resolve the issue, please contact [Varigence Support](mailto:support@varigence.com) for further assistance.