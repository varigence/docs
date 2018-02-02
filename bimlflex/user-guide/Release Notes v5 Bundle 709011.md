### BimlFlex

Release Notes for BimlFlex Bundle version 70911

**BimlFlex general**

* Added SourceConnection validator to projects


**Metadata Management**

* Fixed a potential object reference issue when Staging and Persistent Staging were colocated in same database 
* Updated behavior for Metadata configuration management to split legacy configurations into cpnfigurations and settings for easier framework behavioural management 

**Data Vault**

* Updated End Dating behavior for Driving Key Link Satellites. New behavior will now end date previous Link Satellite records based on the Driving Key relationship changes
* Updated behavior for Link Satellites with multiple Driving Keys 

**Table creation scripts**

* Added support to Heaps for Primary Keys when loading files

**Data Type management**

* Added UTF8 management for extended control character sets and limitations in SSIS behavior

**Extension Points**

* Fixed issue in reinitialisation by removing SourceProperty Extension Point from PSA reload
* Added CreateSql and OverrideSql to Database a

**Data Mart**

* Updated ELT templates for Data Mart loads 
* Updated Dimensional Load support for Type1/Type2 attributes in Data Mart loads
* Updated behavior for hashing to accomodate mapped/derived columns better 

**Oracle Rdb support**

* Added functionality to accomodate tables with # in name

**Sql Server CDC Source**

* Updates to CDC sourcing behaviour to streamline initial load sqitchover for large source tables
* Added optimisation to CDC load existing record checks. Process now fully uses CDC mechanism for change management. 

**SSIS**

* Update to Custom Components, consolidated components to single DLL. Existing installations using legacy DLL's and legacy names needs to update to run packages generated from new version
* Fixed an issue when a non-BimlFlex package is added to the project
* Breaking change update to management of Ssis lookup components for existing record checks. New behavior implements optional, automated full Sql joins from Staging layer (through cross database joins when needed) to limit records used in lookup when using Ssis lookup-based patterns

**Azure SQL Data Warehouse**

* Fixed issue with external tables
* Removed source column mappings for Azure SQL Data Warehouse queries
* Added sample post processing archiving process for Azure blob contents
* Fixed an issue with Hash Distribution Keys in Persistent Staging
* Added performance feature to split source files for parallel load into Azure SQL Data Warehouse for Polybase sources.  

**Documentation**

* Moved reference documentation from Bundle to the varigence.com web site at https://varigence.com/Documentation/BimlFlex/Metadata and https://varigence.com/Documentation/BimlFlex/ExtensionPoints. 

### BimlFlex Utility

**70911 Release of separate BimlFlex Support Utility Application**

* Added option to obfuscate connectionstrings when dumping metadata
* Updated process for dacpac deployment to Azure SQL Databases
