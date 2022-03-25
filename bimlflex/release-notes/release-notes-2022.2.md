---
uid: bimlflex-release-notes-2022-r2
name: BimlFlex Release Notes 2022 R2
summary: Release Notes for BimlFlex 2022 R2
---

# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up before upgrading.  
> Please email support@bimlflex.com with any installation or upgrade issues.

## BimlFlex 2022 R2

BimlFlex 2022 R2 is installed and upgraded through a single consolidated installer.

## Latest Release

Build 22.2.xx.x, release date: DD MMM YYYY

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)  
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)  
    This installer includes the required runtime components for servers that will execute SSIS packages

## 2022 R1 New Features

* Added support for Azure Data Factory (Scott said "all the ADF stuff would be a new feature, but I don't quite know how to phrase that)

## BimlFlex 2022 R2 - Added Support

### Various New Support

* Added the automatic installation of `vcredist` to application installer.
* Added MFA support to application installer for dacpac deployment.
* Added support for Extension Points to target implicitly named **Batches**, such as the RDV Individual Batches for separate record sources.
* Added [archive] tables to all Execution and Audit tables to improve performance and reduce deadlocks.
* Reconfigured metadata samples 41 (Synapse Dynamics ADF Solution) and 43 (Synapse Salesforce SSIS Solution) to have functional high water mark parameters.
* Added a Staged Query ELT feature, allowing in-database Staging-to-PSA processes without needing to use an external engine.
* Added validation warnings on pushdown processing when Azure SQL connections in a **Project** that have `pushdown` checked have different databases.

### Connection Editor

* Ensured that all Connection Editor validators available in the BimlStudio validation framework are also available in the BimlFlex application.
* Changed the styling of ADF tabs for Connection String and Azure Key Vault, to better convey "one or the other" selection.

### Business Modeling

* Added data entry validators on Business Attribute Editor when known impossible combinations of fields were present.

### Azure Data Factory (ADF)

* Added support for 'StageWithModelOverrideName' for ADF for **Objects** and **Columns**.
* 'StageWithBusinessName' now correctly uses 'Business Name' at **Object** and **Column** level, if corresponding setting is checked.
* Added feature to allow ADF Post Copy Extension Point to sit between main process and a 'Set Parameter' (or any other activity) if available.
* Added feature to connect ADF Post Copy Extension Point to subsequent Activities, if present.

### Mapping Data Flows  

* Added a 'Landing' step to Mapping Data Flows templates when direct connection was not supported.
* Added configurable container locations, including: using a directory path to be used in the container or introducing the file path control as used in flat file connections.
* Added the ability to differentiate PSA/ODS **Object** name from STG **Object** name.
* Added **Parameter** support for inline processes.
* Disabled reference column validation for **Objects** that belong to a Project with the Integration Stage 'Mapping Data Flow'.

### SSIS

* Added a setting to use 'UseCustomComponents' that will remove all SSIS Custom Components from all SSIS templates.
* Added SSIS Data Flow properties to Extension Points for FELC properties.
* Added "Setting" for continue on failure that changes Error Handling.

## BimlFlex 2022 R2 - Bug Fixes

### Various Application Fixes

* Fixed an issue where certain tooltips would not display when hovering over control.
* Fixed a bug where saving items would generate a constraint error in the VSTO tables due to the AddSet{Entity} web service being called multiple times.
* Fixed a bug where imported metadata did not use local connection strings when called to use local connection strings.
* Fixed an issue with BimlScript generation of the Dynamics 'ServicePrincipalCredentialKVS' tag body.
* Fixed null reference exception (NRE) when accessing missing fields in metadata .json.
* Fixed a bug where 'Use My Exclusions' were unable to exclude the following entities, when marked as excluded in the base metadata: **Column**, **Connection**, **Object**, **Project**.
* Fixed a binding error in BimlStudio and the BimlFlex Excel add-in.
* Removed superfluous options from within the BimlFlex Bundle options.
* Disabled Data Views Integration template in the BimlFlex database.
* Fixed a bug where the Function App lists soft-deleted blobs, causing copy to fail. The listing will now only include and copy actual files.
* Fixed a bug where Data Type Mappings were not applied to Delete landing tables.
* Fixed a bug where parameters for the Data Mart were generating the 'GET' tasks but not the 'SET' tasks.
* Fixed a bug regarding the mismanagement of the CLOB datatype.
* Fixed application-wide instances of navigation icon(s) overlapping column text.
* Fixed a bug that produced an incorrect error message when creating a new Customer and Version in the BimlCatalog.
* Changed the 'Snapshot' feature to include everything, including 'excluded' or 'deleted' items to allow users to create a snapshop, and then after a rollback, include the excluded items again.

### Data Lineage Editor

* Fixed a bug where removing a relationship or reference prevented the ability to save.

### Data Vault Accelerator

* Fixed a bug where the logic for naming an Implicit Link unintentionally changed between 2021 R1 and 2022 R1. 'Business Subject' on the relationship building column defines the full LInk table name
* Fixed a bug that replicated a Source Object in the side panel when updating the Business Name.

### Schema Diagram

* Fixed a bug where creating a relationship to a non-IK column drew a line, but did nothing else.
* Fixed a bug where columns that could not be used to create a reference were allowed to be connected.
* Fixed a bug where selecting 'Show Related' from the context menu would only show outgoing relationships.

### Connection Editor

* Fixed a bug where 'GetSettingValue' was not being checked.
* Fixed a bug where clicking "refresh" in the toolbar did not prompt a check for unsaved changes.
* Fixed a bug where changing Customer or Version in the toolbar did not prompt a check for unsaved changes.

* Fixed a bug where when selecting 'DB2' as 'System Type' did not generate any Linked Service Type selections.
* Fixed a bug that when modifying a **Connection** by adding a Azure Key Vault, cleared all existing **Connection** fields.

* Fixed a bug where 'Test Connection' would erroneously fail, despite successfully importing metadata.
* Fixed issues with the Connection String Builder dialog where connection strings were not interpreted correctly.
* Fixed a bug where Connection String Builder dialog used saved values instead of the selected values.
* Fixed a bug in the Connection String Builder where the 'Test' button only tested connections to the SqlClient library, but failed for all other types of database systems.

* Fixed a bug where a Landing Connection was able to incorrectly select itself as a 'Polybase Connection'.
* Fixed a bug where '[+] New Connection' did not prepopulate the Integration Stage.
* Fixed a bug where 'Add New Connection' from the Project Add Form did not show newly created connections.
* Fixed a bug where saving a record would change or reset the view from the current tree view nav selection.

* Fixed a bug when switching between Linked Service Connection String and Azure Key Vault set form "guard" even when no change was made.

### Project Editor

* Fixed a bug where 'GetSettingValue' was not being checked in Project Editor.
* Fixed a bug where 'Add Connection' from 'Project Add Form' did not display newly created connection.

### ADF

* Fixed a bug where ADF sub-batch Parameters default vaules were not generated correctly.
* Resolved an issue when calls made from ADF to Snowflake result in a timeout and process failure. This code is now allowed to take as long as it needs without failing.

### Salesforce

* Fixed a bug where where the application indicated "Import metadata successful," but in reality, import failed.
* Fixed metadata import error/success messages for Salesforce.

### SSIS

* Fixed a bug where SSIS Delete File processing was not using Process Subfolder settings for delete file load.

### ADO.NET

* Fixed a bug where 'GetClientDatabaseList()' did not work for ADO.NET connections.

## Download Links to this Build

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)
    This installer includes the required runtime components for servers that will execute SSIS packages
