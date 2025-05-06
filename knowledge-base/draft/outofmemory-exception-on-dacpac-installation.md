---
uid: kb-outofmemory-exception-on-dacpac-installation
title: OutOfMemoryException on DACPAC Installation for BimlFlex 2022R3
summary: Some users report receiving an OutOfMemoryException when trying to upgrade the database with the installer.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
Support Case for Reference [https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&forceUCI=1&pagetype=entityrecord&etn=incident&id=cb0adcba-c2d4-ee11-92bd-6045bdba570a](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&forceUCI=1&pagetype=entityrecord&etn=incident&id=cb0adcba-c2d4-ee11-92bd-6045bdba570a)

**Issue**

After using the installer to upgrade to BimlFlex 22.3.193 and specifically choosing to upgrade the databases as part of that process, the user is still warned that they need to upgrade the databases.  
  
**Cause**  
  
There is an error message in the log that indicates the database upgrade process failed because of a system.OutOfMemory exception, even though the user's hardware meets the minimum specifications required for the version that they tried to install. A root cause for this error has not been determined because our support team is not able to reproduce the error, but we believe it is either isolated to specific installer builds or related to the user's environment.   
  
**Resolution**

This can be resolved by deleting the old database and installing the upgraded version from the newly-installed BimlStudio. Please be careful to make a backup of the old database before deleting it in case you should need to return to it. You should also export any metadata you intend to use for development in the future, since deleting the database will also destroy all the data contained within.  
  
**Conclusion**

Please make a report to [support@varigence.com](mailto:support@varigence.com) so our team can attempt to establish a pattern for this error and develop a remedy. Remember to include the current version, previous version (if upgrading) or that you are a new customer, operating system version, and system hardware specifications (unless you are using the installer on a virtual cloud machine).