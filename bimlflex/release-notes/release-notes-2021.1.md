---
uid: bimlflex-release-notes-2021-r1
name: BimlFlex Release Notes 2021 R1
summary: release notes for BimlFlex 2021 R1
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up before upgrading.
> Please email support@bimlflex.com with any installation or upgrade issues.

## BimlFlex 2021 R1

BimlFlex 2021 R1 is installed and upgraded through a single consolidated installer.

## Latest Release

Build 21.1.nnn.0, release date: dd mmmm yyyy

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)
    This installer includes the required runtime components for servers that will execute SSIS packages

<!--
As far as CJS understands, there are no breaking / possibly breaking changes to add in for 2021 R1. 
-->

## Breaking Changes

### Placeholder 1

placeholder contents

## Possible Breaking Changes

### Placeholder 1

placeholder contents

## 2021 R1 New Features

* New feature: Business Modelling
* Added support for Salesforce connector
* Added support for Azure PostgreSQL connector
* User Interface Improvements for all BimlFlex Visual Editors
* Preview of Azure Data Factory Mapping Data Flows

Additional information on New Features here: [BimlFlex 2021 R1 New Features](xref:new-features-2021.1)

### Salesforce (SFDC)

* Added Salesforce (SFDC) metadata importer to BimlFlex application.
* Added Metadata Samples 42 (ADF) and Sample 43 (SSIS).
* Added support for SFDC Linked Service, 'Source' connection, and as dataset.
* Added 'Connection' to SFDC via REST API.
* Added SFDC Consumer Columns to 'Connections.'
* Added 'PrimaryKey' information for data fields.
* Added create sample scripts.
* Added table list ordering.
* Added ApiName property instead of label for table list.
* Added 'Sort' for Column order of entities.
* Ensured correctly populated SFDC Linked Service Friendly Names.
* Ensured SFDC required fields present on appropriate Connection types.
* Ensured same naming standard for Consumer Key from SFDC REST API and BimlFlex application.
* Ensured correct determination of Foreign Key information from child relationship property.
* Ensured 'Connection String Editor' is available in application when necessary.

### On-prem and Azure PostgreSQL

* Added Azure PostgreSQL 'Source'.
* Added deployable Azure PostgreSQL Linked Service.
* Added SSIS component 'Connection' using Intellisoft PostgreSQL OLEDB.
* Added 'Generate SQL' for querying views, querying indexes, and querying column metadata.

### UI Improvements

* Major overhaul of the BimlFlex application, resulting in an increase of responsiveness across all areas as well as improvements in consistency and ease-of-use for all visual editors.
This covers the Data Vault Accelerator, the Schema Diagram and the new Business Modelling feature. Parity of visual editor behaviors and layout for: Schema Diagram, Data Vault Accelerator (DVA), as well as the new Business Modeling feature.
* Updated the treeview on all metadata editor screens, showing additional detail and more meaningful icons.
* Introduced an improved 'add' feature that streamlines the creation of new metadata such as Projects, Batches and Connections.
It is no longer necessary to navigate away if dependent objects are required, these can now be created directly as well.
* Archiving objects now correctly applies this to all objects for which the respective object is the parent.
* Tooltips have been improved across the application, in line with the online reference documentation, and are visible when hovering over elements of the user interface.

### Data Vault Accelerator

* Increased performance for the display and visualization of large metadata sets.
* Improved initial auto layout generation and entity manipulation.
* Added new drag and drop settings, bulk actions, and zoom functionality.
* Added context-aware actions, such as split/unsplit Satellite, exclude from Data Vault, and toggling Record Source.
* Added 'BusinessEntities' and 'BusinessAttributes' data fields to integrate Business Modelling with the Accelerator.
* Fixed 'MergeLinks,' 'Revert Split Satellite,' 'Split Link,' and 'Exclude from Data Vault' context settings.
* Added Data Vault Accelerator Column Forms.

### Schema Diagram

* Increased performance for the display and visualization of large sets of metadata.
* Improved initial auto layout generation and entity manipulation.
* Added new drag and drop settings, bulk actions, and zoom functionality.
* Improved anchor point connection manipulation.

## 2021 R1 Added Support

### Various New Support

* Added a Pushdown Processing feature at Project level to direct the generation, so that code is produced that can execute against the underlying connection. This is as opposed to being loaded and then processed.
* Added 'Pause' in SSIS Deploy ps1 files
* Added validator support for ETL configurations.
* Modified ELT code to spawn Stored Procedures for ELT Staging process.
* Added a feature that, when deploying an SSIS solution, automatically create folders in SSISDB in case these do not yet exist.
* Added SSDT Option to include database references in solution.
* Added Incremental Delete Detection for delta flat files.
* Added additional Azure authentication options to BimlFlex database access for BimlStudio, BimlFlex, and BimlFlex Excel-Add In.
* Added support for self-referencing relationships from a Link when creating a Bridge table.
* Added configurable table lock for Hub and Link lookups in ELT loads for improved concurrency support with parallel loads
* Added ability to allow a multi-active (Link-)Satellite to reference a Link.
* Added support to optionally remove Business Keys from Link Satellites.
* Added support for delete detection when using Data Type Mappings for Data Vault. This was failing due to inconsistent application of Column names

### Slowly Changing Dimensions

* Added type 2 lookup for sample metadata testing.
* Added type 2 time-based lookups in ELT code.
* Removed the 'Fixed ChangeType' setting and replaced with 'Type 1' to Update and 'Type 2' to Track History.

### .net Core

* Added support for SSDT .net Core builds.
* Added additional script options for build ps1 files for SSDT .net Core builds.

### Blob Storage

* BimlFlex file path name container now 'Source' for Blob storage.
* Added support for Flat File in Blob Storage 'Source'.
* Validator checks to ensure landing 'Connection' has Blob landing when using Azure Copy Command staging and logging.

## 2021 R1 Bug Fixes

### SSIS

* Fixed a bug for SSIS deployment which caused a higher thread count than one to duplicate a RowSourceId in the output when used.
* Fixed a bug where setting a null value replacement for hashing was not correctly applied to the business key hash using SSIS.
* Fixed a bug where Data Type Mappings were not correctly applied when using SSIS in conjunction with Synapse, leading to incorrect column mappings.
* Fixed a bug where the Business Key is truncated when using a timestamp (DateTime and DateTime2) using SSIS.
* Fixed the operation of the 'DisplaySchemaNameStg' setting so that it properly appends the schema name to the table and package names in SSIS, so that the object names are unique.

### Azure Data Factory (ADF)

* Fixed a bug where the 'RecordSourceFull' configuration was not working applied when using ADF Change Tracking.
The @@this expression is now correctly interpreted as the table name in the SELECT statement.

### Azure Synapse

* Fixed a bug where a Staged Query for Synapse uses the Model Override Name instead of the Column Name.

### ADONET

* Fixed a bug where the Connection String Builder automatically adds a provider to the connection string when creating ADO.NET connections.The provider is no longer added when defining an ADO.NET connection.

### COZYROC

* Fixed a bug where column names were not populated when using the COZYROC connector for Salesforce.

### BimlFlex Excel Metadata Editor Add-in

* Fixed a bug that caused objects to remain visible even though their parent Project was deleted.

### BimlFlex Application Bug Fixes

* Fixed a bug caused the settings 'Infer Link Hub' and 'Accelerate Hub Keys' to generate incorrect code when used together.
* Fixed a bug where the Data Vault setting 'Use Where Exist' did not generate the NOT EXIST statements properly in some cases.
* Fixed a bug where duplicating Extension Point files placed the duplicates in the wrong folder.
* Fixed a bug generating ghost/zero records when the datatype is too small.
* Fixed a bug when FlexRowChangeType exists in DWH source.
* Fixed a bug where Data Mart RowChangeType in source.
* Fixed a bug where a Staged Query object with a RowChangeType configuration set to 'derived' uses @@this in Source select statement instead of the table name.
* Fixed a bug where Reload Project was failing when Source-to-Target-Mappings use a different name
* Fixed a bug where new flat file objects were not selected in Objects Editor and immediately disppaeared.
* Fixed a bug where deleting a parent object (Project) fails with database error.
* Fixed a bug where multiple metadata imports with different naming conventions dupliced the IK columns. Columns are now replaced with new naming convention.
* Fixed a bug where creating a new Batch did not enable [Use Orchestration] by default
* Fixed a bug where 'Add Connection' and 'Add Column' were not working properly in the App in certain circumstances.
* Fixed a bug where some drop-down menus overflowed text contents outside the boundary of the drop down menu.
* Fixed a bug with incorrect passthrough of boolean control changes to editor forms underneath the modal when adding an entity
* Fixed a bug where blob storage staging for on-prem adds tables to model, but did not create staging/psa tables
* Fixed a bug where setting the Auto Adjust Buffer Size did not work when using Visual Studio 2019.
* Fixed a bug related to the 'RowIsDeleted' configuration. This used the value 0 as default. This has been updated to use 1 as default value.
* Fixed a bug in the treeview that caused 'Add Object' to apply the 'Object Type' from the previously selected object.
* Fixed a bug where reference ('REF') tables contained columns that were marked as excluded.
* Fixed a bug which prevented users to archive two or more objects at the same time.
* Fixed a bug causing BimlStudio to report errors when a Dynamics Linked Service Authentication Method AAD Service primpal is selected.
* Fixed a bug that incorrectly applied zero records to PIT tables in certain scenarios.

## Download Links to this Build

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)
    This installer includes the required runtime components for servers that will execute SSIS packages