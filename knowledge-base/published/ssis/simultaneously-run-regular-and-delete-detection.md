---
uid: kb-simultaneously-run-regular-and-delete-detection
title: Simultaneously Run Regular and Delete Detection for SSIS Flat File Import with Archiving Enabled
summary: How to simultaneously run regular SSIS flat file import processes and delete detection when file archiving has been enabled
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue

Users experience errors when executing SSIS Delete Detection packages, because these are unable to locate the flat file to process. The flat file is expected to be there, but it is not, and the package reports failure.   
 

# Cause

When enabling the file archiving setting in BimlFlex, the regular SSIS flat file import package will move (archive) the file to the designated archive location after the package run has been successfully completed. However, if Delete Detection is also enabled, and this package/process is run after the regular process then the delete detection can't find the file.   
 

# Resolution

This issue can be resolved by changing the order in which the processes run.    
   
BimlFlex does not generate a 'master batch' (or equivalent) and passes this over to the user to schedule. If the delete batch runs before the regular batch, there is no issue with the Delete Detection package locating the necessary file.   
 

# Conclusion

Changing the order in which the processes run is the easiest way to resolve any errors caused by combining the Archiving and Delete Detection features for SSIS.