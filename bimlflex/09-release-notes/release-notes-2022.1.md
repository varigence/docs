---
uid: bimlflex-release-notes-2022-r1
name: BimlFlex Release Notes 2022 R1
summary: Release Notes for BimlFlex 2022 R1
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up before upgrading.  
> Please email support@bimlflex.com with any installation or upgrade issues.

## BimlFlex 2022 R1

BimlFlex 2022 R1 is installed and upgraded through a single consolidated installer.

## Latest Patched Release

Build 22.1.124.0, release date: 28 Feb 2022

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup_22.1.124.0.exe)  
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup_22.1.124.0.exe)  
    This installer includes the required runtime components for servers that will execute SSIS packages

## Original Release

Build 22.1.87.0, release date: 22 Dec 2021

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup_22.1.87.0.exe)  
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup_22.1.87.0.exe)  
    This installer includes the required runtime components for servers that will execute SSIS packages

## 2022 R1 New Features

* New feature: Business Modeling
* Added support for Salesforce connector
* Added support for Azure PostgreSQL connector
* User Interface Improvements for all BimlFlex Visual Editors
* Preview of Azure Data Factory Mapping Data Flows

Additional information here: [BimlFlex 2022 R1 New Features](xref:bimlflex-2022-r1-new-features)

### Salesforce (SFDC)

* Added Salesforce (SFDC) metadata importer to BimlFlex application.
* Added the following Salesforce Metadata Samples:
    * 42 - Synapse Salesforce ADF Solution
    * 43 - Synapse Salesforce SSIS Solution
* Added support for SFDC Linked Service, `Source` connection via REST API, and as dataset.
* Added SFDC Consumer Columns to **Connections**.
* Added *PrimaryKey* information for data fields.
* Added *ApiName* property.
* Ensured correctly populated Salesforce Linked Service Friendly Names.
* Ensured Salesforce required fields presence on appropriate Connection types.
* Ensured same naming standard for Consumer Key from Salesforce REST API and BimlFlex application.
* Ensured correct determination of Foreign Key information from child relationship property.
* Ensured *Connection String Editor* is available for Salesforce.

### On-premises and Azure PostgreSQL

* Added Azure `PostgreSQL Source.`
* Added deployable Azure PostgreSQL Linked Service.
* Added SSIS component Connection using Intellisoft PostgreSQL OLEDB.
* Added *Generate SQL* command for querying views, querying indexes, and querying column metadata.
* Updated the BimlFlex App metadata import support to be more robust, including ensuring that SSL property of `connectionstring` was not required.

### UI Improvements

* Major overhaul of the BimlFlex application, resulting in an increase of responsiveness across all areas, as well as improvements in consistency, parity, and ease-of-use for visual editors: Data Vault Accelerator, Schema Diagram, and the new Business Modeling feature.
* Updated the treeview on all metadata editor screens, showing additional detail and more meaningful icons.
* Introduced an improved `Add` feature that streamlines the creation of new metadata such as **Projects**, **Batches** and **Connections**.
It is no longer necessary to navigate away if dependent objects are required, as these can now be created directly.
* Archiving objects now correctly applies to all objects for which the respective object is the parent.
* Tooltips have been improved across the application, in line with the online reference documentation, and are visible when hovering over elements of the user interface.

### Data Vault Accelerator (Added Support)

* Increased performance for the display and visualization of large metadata sets.
* Improved initial auto layout generation and entity manipulation.
* Added new drag and drop settings, actions, and zoom functionality.
* Added context-aware actions, such as `split`/`revert split Satellite`, `exclude from Data Vault`, and `toggle Record Source`.
* Added *Business Entities* and *Business Attributes* data fields to integrate Business Modeling with Data Vault Accelerator.
* Improved `Merge Links`, `Revert Split Satellite`, `Split Link`, and `Exclude from Data Vault` context settings.
* Added Data Vault Accelerator Column Forms.

### Schema Diagram

* Increased performance for the display and visualization of large metadata sets.
* Improved initial auto layout generation and entity manipulation.
* Added new drag and drop settings, actions, and zoom functionality.
* Improved anchor point connection manipulation.

## BimlFlex 2022 R1 - Added Support

### Various New Support

* Added a Pushdown Processing feature at **Project** level to direct the generation, so that the code produced can be executed against the underlying connection. This is instead of being loaded and then processed. This was previously managed on the **Connection** level.
* Added `Pause` in SSIS Deploy ps1 files to allow the SSIS catalog to ingest the projects without errors.
* Added validator support for ETL configurations.
* Modified ELT code to spawn Stored Procedures for ELT Staging process.
* Added a feature that, when deploying an SSIS solution, will automatically create folders in SSISDB in case these do not yet exist.
* Added SSDT Option to disregard certain warnings from projects.
* Added Incremental Delete Detection for delta flat files.
* Added additional Azure authentication options to BimlFlex database access for BimlStudio, BimlFlex, and BimlFlex Excel-Add In.
* Added support for self-referencing relationships from a Link when creating a Bridge table.
* Added configurable transaction wrappers for Hub and Link lookups in ELT loads for improved concurrency support with parallel loads.
* Added ability to allow a multi-active (Link-)Satellite to reference a Link.
* Added support to optionally remove Business Keys from Link Satellites when using the Data Vault Accelerator.
* Added support for delete detection when using Data Type Mappings for Data Vault.
* Added improved input validation for all metadata editors.
* Added keyboard shortcut [Ctrl]+[S] to Save form for all metadata editors.

### Slowly Changing Dimensions

* Added type 2 time-based fact to dimension lookups for ELT code.
* Added type 2 lookup for sample metadata sets.
* Removed the `Fixed` ChangeType setting.
* Updated names for column change types. `Type 1` is now `Update` and `Type 2` is now `Track History`.

### .net Core

* Added support for SSDT .net Core builds.
* Added support for generating project files that can be directly opened in Azure Data Studio using the database project extension.
* Added additional script options to build ps1 files for SSDT .net Core builds.

### Blob Storage

* BimlFlex file path name container now `Source` for Blob storage.
* Added support for Flat File in Blob Storage `Source`.
* Validator checks to ensure landing Connection has Blob landing when using Azure Copy Command staging and logging.

## BimlFlex 2022 R1 - Bug Fixes

### SSIS

* Fixed a bug for SSIS deployment which caused a higher thread count than one to duplicate a RowSourceId in the output when used.
* Fixed a bug where setting a null value replacement for hashing was not correctly applied to the Integration Key hash using SSIS.
* Fixed a bug where Data Type Mappings were not correctly applied when using SSIS in conjunction with Synapse, leading to incorrect column mappings.
* Fixed a bug where the Business Key was truncated when using a timestamp (DateTime and DateTime2) using SSIS.
* Fixed the operation of the *DisplaySchemaNameStg* setting so that it properly appends the schema name to the table and package names in SSIS, so that the object names are unique.

### Azure Data Factory (ADF)

* Fixed a bug where the `RecordSourceFull` configuration was not working applied when using ADF Change Tracking.  
    * The @@this expression is now correctly interpreted as the table name in the SELECT statement.
* Added 'PatternValidation' to ADF *SecretName* fields.
* Added pre- and post-processing Extension Points for Data Mart for ADF and Synapse.
* Added pre-processing Extension Points for ADF/Synapse Data Marts.
* Fixed a bug where the Linked Service AccountKey for ADF Connection was incorrectly saved.
* Fixed a bug where `DataFactoryName` was not being emitted to ARM templates.
* Fixed a bug where in ADF extract projects, if the LinkedService used is an Managed Instance, no load Stored Procedures were generated.

### Azure Synapse

* Fixed a bug where a Staged Query for Synapse used the Model Override Name instead of the Column Name.

### ADF Mapping Data Flows (Preview)

* Added support for Link Satellites using Data Flow Mappings.
* Fixed a bug where Output was empty for Sinks where none were configured in the Data Flow.
* Fixed an issue with Link Key evaluation for Mapping Data Flows.

### ADONET

* Fixed a bug where the Connection String Builder automatically added a provider to the connection string when creating ADO.NET connections. The provider is no longer added when defining an ADO.NET connection.

### COZYROC

* Fixed a bug where column names were not populated when using the COZYROC connector for Salesforce.

### Microsoft Dynamics

* Fixed a bug where BimlStudio reported unfound errors when Dynamics Linked Service Authentication Method `AAD Service Principal` was selected.

### My SQL

* Updated the BimlFlex App metadata import support to be more robust.

### OLEDB SQL Server

* Fixed a bug where cloud OLEDB SQL Server Linked Service properties were inverted.

### Data Vault Accelerator (Bug Fixes)

* Fixed a bug causing errors when combining Accelerate Link Satellite Keys and Delete Detection settings.
* Fixed a bug where treeview showed excluded items.
* Fixed a bug where HUB or LINK Object context menus were blank.
* Fixed a bug where target pane did not show all available Sources.
* Fixed a bug where `RecordSource` was missing for Satellites.
* Fixed a bug where Entity names were uneditable in Edit Pane.
* Fixed a bug where users were unable to edit Source entity.
* Fixed a bug where Column grid showed wrong headers.
* Fixed a bug where Column context menu actions `Navigate to Table` and `Edit Table` were missing.
* Fixed a bug where previewing and/or publishing model duplicated Columns.
* Fixed a bug where Link columns added to `Source` were not set as `derived`.
* Fixed a bug where `Remove Record Source` option was shown without actual Record Source.
* Renamed `Exclude from DV` setting to `Remove from Model`.
* Fixed a bug where Reference tables were created without Primary Key.
* Fixed a bug where Accelerator `Publish` did not persist results.
* Fixed a bug where `Save` in *Add Connection* field did not persist to the database.
* Fixed a bug where saving Connections cleared out Azure Key Vault details.
* Ensured that `Add Column` persists to the database.
* Fixed a bug where users were unable to add column to new **Object**.
* Fixed a bug where changing `Object Type` did not save/refresh properly.
* Ensured Object caches are reset after `Save`.

### BimlFlex Excel Metadata Editor Add-in

* Fixed a bug that caused objects to remain visible even though their parent Project was deleted.

### BimlFlex Application Bug Fixes

* Fixed a bug that caused the settings `Infer Link Hub` and `Accelerate Hub Keys` to generate incorrect code when used together.
* Fixed a bug where the Data Vault setting `Use Where Exist` did not generate the NOT EXIST statements properly in some cases.
* Fixed a bug where duplicating Extension Point files placed the duplicates in the wrong folder.
* Fixed a bug generating ghost/zero records when the datatype is too small.
* Fixed a bug when FlexRowChangeType existed in DWH source.
* Fixed a bug where Data Mart RowChangeType existed in source.
* Fixed a bug where a Staged Query object with a RowChangeType configuration set to `derived` used @@this in Source SELECT statement, instead of the table name.
* Fixed a bug where Reload Project was failing when Source-to-Target-Mappings used a different name.
* Fixed a bug where new flat file objects were not selected in Object Editor and immediately disappeared.
* Fixed a bug where deleting a parent object (Project) failed with database error.
* Fixed a bug where multiple metadata imports with different naming conventions duplicated the IK columns. Columns are now replaced with new naming convention.
* Fixed a bug where creating a new Batch did not enable [Use Orchestration] by default.
* Fixed a bug where `Add Connection` and `Add Column` were not working properly in the App in certain circumstances.
* Fixed a bug where some drop-down menus overflowed text contents outside the boundary of the drop down menu.
* Fixed a bug with incorrect passthrough of Boolean control changes to editor forms underneath the modal when adding an entity.
* Fixed a bug where blob storage staging for on-premises adds tables to model, but did not create staging/psa tables.
* Fixed a bug where setting the Auto Adjust Buffer Size did not work when using Visual Studio 2019.
* Fixed a bug related to the `RowIsDeleted` configuration. This used the value 1 as default. This has been updated to use 0 as default value.
* Fixed a bug in the treeview that caused `Add Object` to apply the `Object Type` from the previously selected object.
* Fixed a bug where reference (`REF`) tables contained columns that were marked as excluded.
* Fixed a bug which prevented users to archive two or more objects at the same time.
* Fixed a bug causing BimlStudio to report errors when a Dynamics Linked Service Authentication Method AAD Service principal is selected.
* Fixed a bug that incorrectly applied zero records to PIT tables in certain scenarios.
* Fixed a bug where *Search* was not including `SchemaQualifiedName`.
* Fixed a bug where `Duplicate Object` renamed existing **Object**.
* Fixed a bug where tri-state checkboxes only allowed two-state selection.
* Ensured that **Object** and **Column** entityTypes use **Connection** as a *rootEntityType*.
* Ensured that authentication is hidden when KeyVaultString is configured for `connectionstring`.
* Disabled individual SQL statement overrides when using the `override SQL` command.
* Ensured that disabling *Cloud* toggle disables LinkedService UI before **Save** is clicked.
* Ensured that enabling *Cloud* toggle enables LinkedService UI before **Save** is clicked.
* Fixed a bug where toggling *Cloud* toggled entity on base form but not in `Add Connection` dialog.
* Fixed a bug where Dashboard *Recent Connections* did not order items by history.
* Fixed a bug on the Dashboard where when `Apply Data Type Mappings` was selected, gave error "Invalid column name 'SsisDataflowExpression'."
* Fixed ordering of column precision and scale.
* Ensured that `UseMyExclusions` saves in Connection Form on Save.
* Ensured `UseMyConnectionStrings` persists connection string.
* Fixed a bug where PSA code only compared Staging/PSA on Source Keys, not Business Keys.
* Ensured that Business Key column order was derived from Primary Key constraint and not column ordinal.

## Download Links to this Build

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)
    This installer includes the required runtime components for servers that will execute SSIS packages
