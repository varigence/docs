---
uid: bimlflex-release-notes-2021-r1
name: BimlFlex Release Notes 2021
summary: release notes for BimlFlex 2021
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up before upgrading.  
> Please email support@bimlflex.com with any installation or upgrade issues.

## BimlFlex 2021

Build 21.1.nnn.0, release date: dd mmmm yyyy

## Upgrade Procedure

BimlFlex 2021 is installed and upgraded using the **BimlFlex Developer Setup** executable. This is a single consolidated installer that will install or upgrade BimlFlex, BimlStudio and supporting technology.

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)
    This installer includes all parts of BimlFlex

* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)
  This installer includes the required runtime components for servers that will execute SSIS packages

## New Features and Improvements

### Business Modeling

The new BimlFlex Business Modeling feature enables the definition of an holistic information model that describes the business' data, avoiding bias from already existing systems and data. 

Traditionally, this process involves a team of IT and business representatives collaborating in a series of workshops to define the business' Core Business Concepts (CBC), how they are described and how they interact with each other.

Business Modeling within BimlFlex seeks to preserve the essence of this process: collaboration, discussion, and interaction, while simultaneously digitizing the team experience. 

Business Models can be created using predefined templates such as Ensemble Logical Modeling (ELM), or by defining a custom set of classifications and labels. For example, by defining types such as Subjects, People, Events or Places. These types of Business Model objects are represented as 'cards' on the model design board.

While working on a Business Model, these cards can be rearranged, detailed and updated on the model design board with minimal effort in a way that is similar to reorganizing Post-It notes on a whiteboard. Users can create, edit, and share their model design across the team. 

Defined Business Model objects, such as the new 'Business Entity' and 'Business Attribute' concepts can be mapped to source data sets so that a mapping between the incoming (source) data structures and the Business Model can be established. This further drives naming conventions, lineage and ultimately provides a lineage view of the source data and how this is forward-engineered into a deployable data solution.

### User Interface

* Major overhaul of the BimlFlex application, resulting in an increase of responsiveness across all areas as well as improvements in consistency, parity, and ease-of-use for visual editors: Data Vault Accelerator, Schema Diagram, and the new Business Modeling feature.
* Updated the tree view on all metadata editor screens, showing additional detail and more meaningful icons.
* Introduced an improved 'add' feature that streamlines the creation of new metadata such as Projects, Batches and Connections.
It is no longer necessary to navigate away if dependent objects are required, these can now be created directly as well.
* Archiving objects now correctly applies to all objects for which the respective object is the parent.
* Tooltips have been improved across the application, in line with the online reference documentation, and are visible when hovering over elements of the user interface.
* The Authentication Method is now hidden when the Connection String is configured to be retrieved from a Key Vault.
* Individual SQL overrides in the 'Query Overrides' section of an Object, such as 'From SQL' and 'Join SQL' are now disabled when using the 'Override SQL'  feature. This is because the Override SQL logic will take precedence in the code generation, when defined.
* Added improved input validation for all metadata editors.
* Added keyboard shortcut [Ctrl]+[S] to save content for all metadata editors.
* Added masking of sensitive fields for ADF.
* Added additional Azure authentication options to BimlFlex database access for BimlStudio, BimlFlex, and BimlFlex Excel-Add In.
* Updated names for column change types. `Type 1` is now called `Update` and `Type 2` is now called `Track History`.

### Data Vault Accelerator

* Increased performance for the display and visualization of large metadata sets.
* Improved initial auto layout generation and entity manipulation.
* Added new drag and drop settings, actions, and zoom functionality.
* Added context-aware actions, such as split/'revert split' Satellite, exclude from Data Vault, and toggle Record Source.
* Added 'BusinessEntities' and 'BusinessAttributes' data fields to integrate Business Modeling with the Accelerator.
* Improved 'Merge Links,' 'Revert Split Satellite,' 'Split Link,' and 'Exclude from Data Vault' context settings.
* Added Data Vault Accelerator Column Forms.

### Schema Diagram

* Increased performance for display and visualization of large sets of metadata.
* Improved initial auto layout generation and entity manipulation.
* Added new drag and drop settings, actions, and zoom functionality.
* Improved anchor point connection manipulation, making it easier to create references between data sets.

### Patterns and Code Generation

- Added pre- and post-processing Extension Points for Data Mart when using ADF and Synapse.
- Added a 'Pushdown Processing feature' at Project level to direct the generation, so that the code produced can be executed against the underlying connection. This is instead of data being loaded first before processing. This was previously managed on the Connection level.
- Added  as pause in the SSIS deployment Powershell (ps1) files to allow the SSIS catalog to ingest the projects without errors.
- Modified ELT code to spawn Stored Procedures for ELT Staging processes.
- Added additional validators to inform the user of invalid ETL configurations.
- Added a feature that, when deploying an SSIS solution, folders will be automatically created in SSISDB in case these do not yet exist.
- Added a SQL Server Data tools (SSDT) option that allows for disregarding certain project warnings.
- Added Incremental Delete Detection for flat files that contain data delta / differentials.
- Added support for self-referencing Link relationships when creating a Bridge table.
- Added configurable transaction wrappers for Hub and Link lookups in ELT loads for improved concurrency support with parallel loads.
- Added the ability for a multi-active (Link-)Satellite to reference a Link.
- Added support to optionally remove Business Keys from Link Satellites when using the Data Vault Accelerator.
- Added support for delete detection when using Data Type Mappings for Data Vault.

* Added Type 2 time-based Fact to Dimension lookups when using ELT code.

* Added Type 2 lookup examples in sample metadata sets.
* Removed the `Fixed` Change Type setting in a Dimensional Model context, because this was confusing with other available Change Types and not further used.

### Salesforce (SFDC) Connector

* Added support for a Salesforce Linked Service and Dataset. This feature is available using the REST API Connection Type for a Connection.
* Added a Salesforce metadata importer to the BimlFlex App.
* Added the following Salesforce metadata samples:
  * 42 - Synapse Salesforce ADF Solution
  * 43 - Synapse Salesforce SSIS Solution
* Added Salesforce Consumer Columns to 'Connections.'
* Ensured correctly populated Salesforce Linked Service Friendly Names.
* Ensured Salesforce-required fields present on appropriate Connection types.
* Ensured that the same naming standards are applied between the Consumer Key in the Salesforce REST API and the BimlFlex application.
* Ensured correct determination of Foreign Key information from the Salesforce child relationship property.
* Ensured that the 'Connection String Editor' is available for Salesforce.

### On-premises and Azure PostgreSQL Connector

* Added the PostgreSQL System Type.
* Added the Azure PostgreSQL Linked Service features.
* Added SSIS component 'Connection' using Intellisoft PostgreSQL OLEDB.
* Added 'Generate SQL' command for querying views, querying indexes, and querying column metadata.

### .net Core

* Added support for SSDT .net Core builds.
* Added support for generating project files that can be directly opened in Azure Data Studio using the database project extension.
* Added additional script options for build ps1 files for SSDT .net Core builds.

### Blob Storage

* BimlFlex file path name container now 'Source' for Blob storage.
* Added support for Flat File in Blob Storage 'Source'.
* Validator checks to ensure landing 'Connection' has Blob landing when using Azure Copy Command staging and logging.

## Bug Fixes

### SSIS

* Fixed a bug for SSIS deployment which caused a higher thread count than one to duplicate a RowSourceId in the output when used.
* Fixed a bug where setting a null value replacement for hashing was not correctly applied to the Integration Key hash using SSIS.
* Fixed a bug where Data Type Mappings were not correctly applied when using SSIS in conjunction with Synapse, leading to incorrect column mappings.
* Fixed a bug where the Business Key is truncated when using a timestamp (DateTime and DateTime2) using SSIS.
* Fixed the operation of the 'DisplaySchemaNameStg' setting so that it properly appends the schema name to the table and package names in SSIS, so that the object names are unique.

### Azure Data Factory (ADF)

* Fixed a bug where the 'RecordSourceFull' configuration was not working applied when using ADF Change Tracking.  
* The @@this expression is now correctly interpreted as the table name in the SELECT statement.

### Azure Synapse

* Fixed a bug where a Staged Query for Synapse uses the Model Override Name instead of the Column Name.

### ADONET

* Fixed a bug where the Connection String Builder automatically adds a provider to the connection string when creating ADO.NET connections.The provider is no longer added when defining an ADO.NET connection.

### COZYROC

* Fixed a bug where column names were not populated when using the COZYROC connector for Salesforce.

### BimlFlex Excel Metadata Editor Add-in

* Fixed a bug that caused objects to remain visible even though their parent Project was deleted.

### BimlFlex App

- Fixed a bug where the 'Search' feature in drop-down lists was not including the schema name of the object in its returned results. This led to not all objects being visible in the search results.

- Fixed a bug where the 'Duplicate' feature for an Object in the Connection screen would rename the Object that was duplicated.

- Fixed a bug where tri-state checkboxes, such as  'excluded' only allowed two selection states after the initial setting was modified. Now these can be set to indetermined also.

  Enabling or disabling the 'Cloud' toggle for a Connection will display or hide the Linked Service section without requiring a save.

- Fixed a bug where the 'Recent Connections' on the Dashboard did not order items by history.

- Fixed a bug on the Dashboard where the 'Apply Data Type Mappings' sometimes reported an 'SsisDataFlowExpression' error.

- Fixed the ordering of Column precision and scale.

- Ensured that 'UseMyExclusions' is correctly saved for a Connection.

- Ensured that 'UseMyConnectionStrings' persists the given connection string for a Connection.

- Fixed a bug where PSA code only compared Staging/PSA on Source Keys, not Business Keys.

- Ensured that Business Key column order was derived from Primary Key constraint and not column ordinal.

- Fixed a bug caused the settings 'Infer Link Hub' and 'Accelerate Hub Keys' to generate incorrect code when used together.

- Fixed a bug where the Data Vault setting 'Use Where Exist' did not generate the NOT EXIST statements properly in some cases.

- Fixed a bug where duplicating Extension Point files placed the duplicates in the wrong folder.

- Fixed a bug generating ghost/zero records when the datatype is too small.

- Fixed a bug that spawned an error message when the 'FlexRowChangeType' exists in the source.

- Fixed a bug where Data Mart RowChangeType in source.

- Fixed a bug where a Staged Query object with a RowChangeType configuration set to 'derived' uses @@this in Source select statement instead of the table name.

- Fixed a bug where Reload Project was failing when Source-to-Target-Mappings use a different name.

- Fixed a bug where new flat file objects were not selected in Objects Editor and immediately disappeared.

- Fixed a bug where deleting a parent object (Project) fails with database error.

- Fixed a bug where multiple metadata imports with different naming conventions duplicated the IK columns. Columns are now replaced with new naming convention.

- Fixed a bug where creating a new Batch did not enable [Use Orchestration] by default.

- Fixed a bug where 'Add Connection' and 'Add Column' were not working properly in the App in certain circumstances.

- Fixed a bug where some drop-down menus overflowed text contents outside the boundary of the drop down menu.

- Fixed a bug with incorrect passthrough of Boolean control changes to editor forms underneath the modal when adding an entity.

- Fixed a bug where blob storage staging for on-premises adds tables to model, but did not create staging/psa tables.

- Fixed a bug where setting the Auto Adjust Buffer Size did not work when using Visual Studio 2019.

- Fixed a bug related to the 'RowIsDeleted' configuration. This used the value 1 as default. This has been updated to use 0 as default value.

- Fixed a bug in the tree view that caused 'Add Object' to apply the 'Object Type' from the previously selected object.

- Fixed a bug where reference (`REF`) tables contained columns that were marked as excluded.

- Fixed a bug which prevented users to archive two or more objects at the same time.

- Fixed a bug causing BimlStudio to report errors when a Dynamics Linked Service Authentication Method AAD Service principal is selected.

- Fixed a bug that incorrectly applied zero records to PIT tables in certain scenarios.

### BimlCatalog

- Fixed a bug where BimlCatalog was required for all storage file Sources, even where unnecessary.
- Fixed a bug where adf.LogExecutionEnd did not respect UTC configuration.
- Fixed a bug where adf.LogExecutionStart for individual pipeline did not override default 1900-01-01 as 'effectivefromdate'.

### Dynamics

- Fixed a bug where BimlStudio reported unfound errors when Dynamics Linked Service Authentication Method "AAD Service Principal" was selected.


### Azure Data Factory

- Fixed a bug where LS-AccountKey for ADF Connection was incorrectly saved.
- Fixed a bug where 'DataFactoryName' was not being emitted to ARM templates.
- Fixed a bug where in ADF extract projects, if the LinkedService used is an Managed Instance, no load Stored Procedures were generated.

### Data Vault Accelerator

- Fixed a bug causing errors when combining Accelerate Link Satellite Keys and Delete Detection settings.
- Fixed a bug where tree view showed excluded items.
- Fixed a bug where HUB or LINK Object context menus were blank.
- Fixed a bug where target pane did not show all available Sources.
- Fixed a bug where 'RecordSource' was missing for Satellites.
- Fixed a bug where Entity names were uneditable in Edit Pane. 
- Fixed a bug where users were unable to edit Source entity.
- Fixed a bug where Column grid showed wrong headers.
- Fixed a bug where Column context menu actions "Navigate to Table" and "Edit Table" were missing.
- Fixed a bug where previewing and/or publishing model duplicated Columns.
- Fixed a bug where Link columns added to 'Source' were not set as 'derived'.
- Fixed a bug where "Remove Record Source" option was shown without actual Record Source.
- Renamed 'Exclude from DV' setting to 'Remove from Model'.
- Fixed a bug where Reference tables were created without Primary Key.
- Fixed a bug where Accelerator 'Publish' did not persist results.
- Fixed a bug where 'Save' in "Add Connection" field did not persist to the database.
- Fixed a bug where saving Connections cleared out Azure Key Vault details.
- Ensured that 'Add Column' persists to the database.
- Fixed a bug where users were unable to add column to new 'Object'.
- Fixed a bug where changing 'Object Type' did not save/refresh properly.
- Ensured Object caches are reset after 'Save'.

### Postgre SQL

* Fixed a bug that required the SSL property to be set for a  connection string. This is not enforced anymore.

### My SQL

* Fixed a bug where the metadata import reports on a login error, even though all credentials are provided. This was related to differences between MySQL versions, and is now correctly supported for current and recent versions of MySQL.

### OLEDB SQL Server

* Fixed a bug where the Linked Service properties for an OLEDB SQL Server were inverted.
