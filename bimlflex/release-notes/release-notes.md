---
uid: bimlflex-release-notes
name: BimlFlex Release Notes
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up prior to upgrading.  
> Please email bimlflex-support@varigence.com with any installation or upgrade issues

## BimlFlex 2019

BimlFlex 2019 is installed and upgraded through a single, consolidated, role-based installer.

### Latest Release

Build 5.0.64277.0, release date: 03 September 2019

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)  
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)  
    This installer include the required runtime components for servers that will execute SSIS packages

## Build 5.0.vnext.0, release date: nn September 2019

* Add: New advanced targeting system for Extension Points. It is now possible to assign a target name for one or more entities and use that attribute as the Extension Point target. This is useful in scenarios where a single Extension Point should be used in multiple location. E.g. a Batch pre-processing Extension Point can be added to any number of Batches by setting the Extension Point target to an attribute associated with the Batches in Scope. Use the `ExtensionPointTarget` AttributeKey and assign the target name in the AttributeValue.
* Add: The BimlFlex App now supports touch mode in some UI interactions. Switch on Touch Mode in the BimlFlex App under settings to allow usage of touch gestures, such as double-tap instead of Ctrl+click.
* Update: Unicode file objects no longer complain about missing code page definitions for the object.
* Update: In certain scenarios the `AddRowHashKeyIndex` setting, which allows an additional Unique Constraint in the Staging Layer based on the Integration Key Hash, would create the constraint on the table without the RowEffectiveFrom column. This has been reviewed and the Constraint will now include both columns.
* Update: The Data Vault accelerator now supports removal of the Record Source name from Link Satellites through the Accelerator UI in the same was as for Hub Satellites.
* Update: The Data Vault accelerator now supports adding individual Source Keys to the Hub as a composite key. This feature is optional for scenarios where the Integration Key should be complimented with the individual key columns in their source formats.
* Update: The Data Vault Accelerator has been removed from the BimlStudio Ribbon UI. The updated Accelerator has features that can only be supported in the BimlFlex app. Use the BimlFlex app for all Data Vault Acceleration.
* Update: For certain ELT scenarios, the Link Satellite End Dating and Driving Key logic produced unexpected results. This has been addressed and updated logic for these scenarios is included in this version.
* Update: A scenario where ELT processing in Azure SQL Data Warehouse was using Replicated temporary tables has been updated to use Round Robin distribution for these temporary tables.
* Update: Adding the product key in the msbuild response file `*.mst.resp` using the `/p:LicenseKey="YourKeyHere"` now works as expected for automated build/build agent scenarios.
* Update: BimlFlex App Performance – Most column updates do not need to reload the columns dataset from the database.
* Add: BimlFlex App Notification Log
* Add: BimlFlex Export Metadata now available from the App Dashboard
* Update: BimlFlex App Graph layout improvements - Re-Layout dependent lists into top-level tabs with tab-context sensitive action buttons to prevent confusion
* Update: BimlFlex App - Show dependent entity counts on tabs
* Update: BimlFlex now use the wording `Locally` for Exclude and Connection String when `Use My Exclusions` and `Use My Connection Strings` are active for the session
* Add: BimlFlex App now supports printing layout graphs to an SVG image
* Update: BimlFlex App Now provides a `Navigate to` for Object and Column from graphs
* Update: BimlFlex App: Add Ctrl+A shortcut key combination to allow select all graph tables (Move all selected with Shift+Mouse move)
* Update: BimlFlex App: The accelerator pane splitter is now draggable
* Update: BimlFlex App: Allow column ordinal sort in graphs using column drag-drop
* Update: BimlFlex App: Allow add references in graphs using column drag-drop
* Update: BimlFlex App: Allow Ctrl+S (Save) on all metadata screens
* Update: BimlFlex App: Allow add and remove record source on Link Satellites
* Update: BimlFlex App: Metadata Import uses table chunking and provides better progress feedback.
* Update: BimlFlex App: Fix issue where deselecting on sub type in Tree View deselects all
* Update: BimlFlex App: updates to error notifications from SQL with more helpful information
* Update: BimlFlex App: Default version selection on customer change now use the `IsCurrent` flag
* Update: BimlFlex App: Updated to prevent Object.Columns.Object circular references

download links to this build:

* [bimlflexdevsetup_5.0.vnext.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.vnext.0.exe)
* [bimlflexruntimesetup_5.0.vnext.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.vnext.0.exe)

## Build 5.0.64277.0, release date: 03 September 2019

* Update: to the `wcf.GetModelColumns` BimlFlex database Stored Procedure where an unexpected behavior occurred in certain scenarios
* Update: The Point In Time process has been updated with additional logic to accommodate certain scenarios.
* Update: In certain scenarios, column in the LSK keys were emitted in the wrong order, leading to unexpected hash values.
* Update: In certain scenarios, an update to SQL Server Data Tools led to errors from the BimlFlex Custom SSIS Components. This release resolves this with updated custom components.
* Update: Changing Customer in the BimlFlex App now defaults to the first active version for that Customer.
* Update: database delimiter characters are now added to all temporary tables used. In certain scenarios, some object names could lead to invalid names being used for temporary processing tables.

download links to this build:

* [bimlflexdevsetup_5.0.64277.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64277.0.exe)
* [bimlflexruntimesetup_5.0.64277.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64277.0.exe)

## Build 5.0.64268.0, release date: 26 August 2019

* Add: Additional Setting: `PersistHistory`. This setting allows overrides of the Persist History setting of the connection on an object level.
* Update: Addressed an issue where the ELT PSA load pattern misinterpreted the RowChangeType in certain scenarios.
* Update: Cloning objects with OverrideExisting set to true sometimes left orphan columns in the target object. These are now deleted as expected.
* Update: Blob storage files will now have empty lines trimmed from created files. PolyBase does not support empty lines in data files and this update will allow systems generating non-compatible files to work without additional processing

download links to this build:

* [bimlflexdevsetup_5.0.64268.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64268.0.exe)
* [bimlflexruntimesetup_5.0.64268.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64268.0.exe)

## Build 5.0.64261.0, release date: 16 August 2019

Release highlights:

The modeler installer and license has been consolidated into the full developer setup.

New Point In Time functionality allows the definition of business effectivity date columns that will be used to build the timelines for context information.

This is illustrated and demonstrated in the following video:

![Point In Time with Business Effectivity Date -center](https://www.youtube.com/watch?v=nL5nVtESFtM?rel=0&autoplay=0 "Point In Time with Business Effectivity Date")

Release Notes:

* Add: New Point in Time, PIT, Data Vault capability. It is now possible to build the PIT tables across a user-defined business affectivity date. Please review the video linked above for more information.
* Add: the `SelectBySql` has additional functionality to allow adding a pre-SELECT statement for query-flavors that require it. E.g. adding a table/lock hint before the select. When the `SelectBySql` only contains a statement like `TOP 100` it will be injected between the select and the first column. When it contains a full statement like `LOCKING ROW FOR ACCESS SELECT TOP 100` it will replace the select statement with the full text from the `SelectBySql` attribute.
* Add: a new Extension Point for replacing the whole Data Flow Task for file-based extracts is available. This is useful if another tool is used to extract the data to the local file, and the BimlFlex process only needs to convert, zip and upload that file. A typical use-case is when a source system has a native file dump utility that has higher performance than accessing the data through OLEDB or ODBC interfaces and no additional Data Flow logic is required for the extract.
* Add: AzCopy v.10 no upload file check. AzCopy v.10 will fail if the upload command specifies a file mask that doesn't contain files. This could happen if the source query returned no rows. The updated pattern checks if there are files to process before continuing.
* Add: Additional Setting: `GlobalDefaultDate`. This is the default date used for unknowns and start-of-time dates in BimlFlex.
* Update: The Teradata Sql Extract pattern has been updated to better represent the way Teradata formats result sets and manages characters.
* Add: Additional setting: `ApplyExtractConversionInDataFlow`. This allows the character and format conversion for Azure SQL Data Warehouse and blob storage normally done in the SQL Query to be done in the Data Flow using SSIS transformations. This can potentially assist in extracting from sources where the query transformation cause performance issues.
* Add: Metadata import from Teradata ODBC sources now work as expected
* Update: A scenario where the Delete Detection feature in combination with the Data Type Mappings feature would sometimes result in a build error message related to a column not being found has been addressed.

download links to this build:

* [bimlflexdevsetup_5.0.64261.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64261.0.exe)
* [bimlflexruntimesetup_5.0.64261.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64261.0.exe)

## Build 5.0.64252.0, release date: 01 August 2019

* Update: the BimlFlex app now works on machines without Internet connectivity and online resources (such as icons/glyph fonts) are now cached locally
* Update: in certain scenarios the HDK for satellites were not hashed using the same pattern as previous versions. This has been addressed

download links to this build:

* [bimlflexdevsetup_5.0.64252.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64252.0.exe)
* [bimlflexmodelsetup_5.0.64252.0.exe](https://varigence.com/downloads/bimlflexmodelsetup_5.0.64252.0.exe)
* [bimlflexruntimesetup_5.0.64252.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64252.0.exe)

## BimlFlex 2019.2 - Build 5.0.64246, release date: 31 July 2019

BimlFlex 2019.2 is a service release that fixes identified issues as well as introduces a set of new and improved features.

* Update: BimlStudio performance enhancements for metadata operations. BimlStudio should now refresh and perform better with large metadata sets.
* Update: BimlFlex App - Selectively load only changed Objects and Columns using LastModified date for better performance
* Update: BimlFlex App - Fix `Show Exclusions` logic for `Use My Exclusions`
* Add: BimlFlex App - Notification Log
* Update: BimlFlex App - Prevent Refresh and Collapse menu bar buttons from overlapping
* Add: BimlFlex App - allow users to copy validation messages to clipboard
* Update: BimlFlex App - Accelerator should not error when the selected table references tables that are excluded or deleted, but should ignore the references
* Update: BimlFlex App - Add button on setup screen to refresh customers from selected database
* Add: BimlFlex App - Add Toast success messages to all the actions on the dashboard
* Update: BimlFlex App - Prevent version going out of sync when changing customer
* Update: BimlFlex App - Database communication command timeout set to 10 minutes
* Add: Support for AzCopy v.10
* Add: Support for using SAS Tokens for AzCopy access control for both legacy AzCopy versions and AzCopy v.10
* Update: A scenario where ModelOverrideName introduced issues in Snowflake Staging was addressed
* Update: additional support for CDC sources to snowflake has been added
* Update: The BimlFlex App UI for metadata import now correctly uses `@@rs` casing for Record Source codes
* Update: Additional source support for Teradata to Azure SQL Data Warehouse workloads with PolyBase conversion support
* Add: Pre- and Post-processing tasks Extension Points for Source to File load processes
* Add: Support to derive `RowRecordSource` in RDV load process for Azure SQL Data Warehouse
* Update: a scenario where Hash distribution keys were not derived correctly for ELT code for Point In Time constructs was addressed
* Add: Additional support for Teradata ODBC-based metadata import
* Add: Support to better define the SSDT project output folder used for Builds. The setting `SsdtOutputPath` allows defining an output path such as: `@@OutputPath\SSDT\@@CustomerUid\@@VersionName`
* Add: Better support for row compression when using SSIS and binary hashing. The more comprehensive compare function allows comparing binary values. For performance reasons, consider using the ELT option for Data Vault loads rather than ETL/Data Flows in SSIS.

### Support for in-database staging and persistent staging

BimlFlex now allows the load of data through Blob storage files into Azure Data Warehouse staging and persistent staging. This allows data to be stored and archived both in database and in blob storage. This new, dual functionality also adds additional settings and features for automatic archiving of blob files.

* `AzureArchiveStage`
    Should the extract and load process also archive blob storage files after they have been loaded into staging. This uses AzCopy v.10 to move blob files from the defined destination/staging container to the defined archive container. AzCopy v.10 requires use of SAS Tokens for access control

### Support for AzCopy v.10

Adding support for the latest version of AzCopy introduces settings to control the new AzCopy functionality:

* AzureDestStorageSasToken, AzureSourceStorageSasToken, AzureArchiveStorageSasToken
    The SasToken to use for access to the Blob storage location
* AzCopySetEnvironmentVariables
    Should the SSIS extract packages set the concurrency and log location environmental variables used by AzCopy v.10. Setting these globally outside BimlFlex allows these values to be reused by the AzCopy process without setting them in the packages. Legacy versions of AzCopy uses command parameters for these settings.
* AzCopyVersion
    The Version of AzCopy in use as an integer. Use `5` or `8` for legacy versions and `10` for the v.10 version
* AzCopyUseSasToken
    Should the AzCopy command use the Account Key or SAS Token for storage access. v10 does not support key authentication so this is only applied for legacy versions.
* AzCopyCreateContainer
    Should the v10 AzCopy create the destination container if it does not exist. The legacy version would always create missing containers while the v10 version expected them to already be available. Set this to `Y` to inject an extra step to create the container if it is missing. This is included for backwards compatibility, the recommendation is to pre-create the containers and allow the jobs to upload without this additional step.
* AzureBlobStorageDomain
    Use `blob.core.windows.net` for classical blob storage or `dfs.core.windows.net` for Azure Data Lake Storage Gen2 targets (with hierarchical namespace)
* AzureArchive

More information on AzCopy and access to download v.10 on this Microsoft page: [https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)

download links to this build:

* [bimlflexdevsetup_5.0.64246.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64246.0.exe)
* [bimlflexmodelsetup_5.0.64246.0.exe](https://varigence.com/downloads/bimlflexmodelsetup_5.0.64246.0.exe)
* [bimlflexruntimesetup_5.0.64246.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64246.0.exe)

## BimlFlex 2019.1 - Build 5.0.64213.0, release date: 13 June 2019

* Add: Metadata import from Snowflake
* Update: wording in installer to better convey the database install and upgrade capabilities
* Update: in certain scenarios, certain operations would be slower than expected in BimlStudio. This has been addressed and performance has been normalized.
* Add: Support for Data Type Mappings to use expression for target type conversions, `SqlTargetToString` and `SqlTargetToDataType`, has been added
* Update: A scenario where Link Satellite hash keys were hashed incorrectly has been addressed
* Update: A performance enhancement in LSAT loads has been introduced for ELT processes
* Update: A scenario where model override names were used in the initial set of temporary staging objects has been updated to allow consistent naming behavior
* Update: A scenario where the PSA Primary keys were derived incorrectly for Multi Active Satellite source objects has been addressed.
* Update: the Data Vault accelerator now respects existing changes to Data Vault when accelerating from source objects targeting these entities
* Update: Schema Diagram and Accelerator UI now displays refresh button in the menu bar and exposes the show columns/show data types in a drop down for better productivity
* Update: The BimlFlex App no longer display spell checking on text areas
* Update: BimlFlex app now has a separate pane for the getting started entries on the dashboard
* Update: A scenario where the load parameter value for `ParameterSqlExpression` expression was ignored has been addressed
* Update: A scenario where Data Vault reference tables were not properly loaded in on-premises ELT code has been addressed
* Update: A scenario where the reload from PSA project was not displayed for on-premises ELT solutions has been addressed and this project is now included by default with both ELT and ETL patterns
* Update: A scenario where the snapshot and snapshot rollback function would result in errors has been addressed

## BimlFlex 2019 Version 64108

* Update: CI/CD and command line builds require an update to the response files to work with BimlFlex. Please see @bimlflex-continuous-integration-and-continuous-delivery for new template samples
* Update: Some scenarios in the graphical Data Vault Accelerator has been updated to better align with user expectation

## Bundle 64106

* Update: The Bundle used in projects is now centralized to the compiler location. For normal usage this means projects will use the bundle in the `%PROGRMFILES%\Varigence\BimlStudio\5.0\` location. The installer experience has been simplified and there is no Bundle upgrade process. This aims to simplify the version experience and allow the development process to always use the current Bundle. Note that the Bundle Upgrade step has been removed from the installer. Note that even through existing projects will have a Bundle file in the local folder, BimlStudio will use the centrally located Bundle.
* Update: A scenario where an ANSI-compatible delete statement was used in Azure SQL Data Warehouse PIT processing procedures has been updated to instead use Azure SQL Data warehouse optimized syntax.
* Update: A scenario where some DROP statements for temporary tables in ELT code weren't included has been addressed and all temporary tables are now dropped before and after use.
* Update: The BimlFlex App UX now allows filters to be applied to the Connections column in the Columns page
* Update: The BimlFlex App sometimes did not show a global validation warning for Model Reference information on columns used in references in Data Vault.

## Bundle 64029

* Add: All new installer experience. The BimlStudio and BimlFlex as well as all components are now available to install through a single installer. This allows upgrades to existing installations as well as databases and projects
* Add: Full support for BimlFlex App. Use the BimlFlex App to manage metadata and to perform Data Vault Acceleration
* Add: Support for BimlStudio 2019
* Update: Data Vault Acceleration is now performed through the BimlFlex App for maximum convenience
* Update: BimlFlex Excel Add-in is supported for legacy installations, but usage of the BimlFlex App is recommended for all users
* Update: BimlFlex Excel Add-in support for Entity Archive action has been simplified to only selected entities
* UpdateL BimlFlex App now provides Import Metadata functionality, this was previously provided through the Excel Add-in
* Update: BimlStudio no longer includes integrated upgrade features, all upgrades to applications, components, databases, bundle files are performed through the separate consolidated installer
* Update: A new IsInitialLoad check query is used that aims to provide better performance for larger PSA tables

## Bundle 63921

> [!IMPORTANT]
> This version introduces updated Bridge logic that accommodates more complex Bridge scenarios. This can result in breaking changes to column naming for existing implementations. Please review the breaking change note below.

### Breaking Change to Bridge behavior

A Bridge table is a Data Vault performance construct that allows joining multiple Data Vault entities together. This simplifies the follow on queries, resulting in less complex code and improved performance.

This Bundle version introduces support for multiple references to the same Hub from multiple Links. This added functionality necessitate a change in the column naming convention to accommodate the multiple references. The previous implementation ignored additional references to the same Hub whereas the new implementation allows them and names the references using a defined naming convention. Any existing implementation affected by this scenario will have additional columns introduced as a result of the new feature.

If a current project is affected by this behavior the upgrade will necessitate the following steps to remediate the impact:

1. Back up everything, in case there is a need to revert to a previous version
1. Update any custom logic, Bridge Extension Points and parameters to accommodate new format
1. Drop the existing Bridge tables
1. Create Bridge tables using new format
1. Recreate the ELT load procedures and packages and run them to populate the new Bridge table with data using the new names
1. Review any views and queries that rely on the Bridge tables and update them to accommodate the new column names

Bridge table changes illustrated:

Bridge Attributes Metadata:

| Connection | Object                        | ColumnName | AttributeKey | AttributeValue            | AttributeProperty |
| ---------- | ----------------------------- | ---------- | ------------ | ------------------------- | ----------------- |
| DWH        | rdv.HUB_AccountsPayableConfig |            | CreateBridge | BRG_AccountsPayableConfig | AddKey |
| DWH        | rdv.HUB_AccountsPayableLog    |            | CreateBridge | BRG_AccountsPayableConfig | AddKey |
| DWH        | rdv.HUB_Department            |            | CreateBridge | BRG_AccountsPayableConfig | AddKey |
| DWH        | rdv.HUB_Venue                 |            | CreateBridge | BRG_AccountsPayableConfig | IsPrimaryHub,AddKey |
| DWH        | rdv.LNK_AccountsPayableConfig |            | CreateBridge | BRG_AccountsPayableConfig | |
| DWH        | rdv.LNK_AccountsPayableLog    |            | CreateBridge | BRG_AccountsPayableConfig | |

Here, both included Links link to both the Department and Venue Hubs. The primary Hub is the Venue Hub so the Department is now included twice in the Bridge table, once for each Link reference.

Before:

```sql
CREATE TABLE [rdv].[BRG_AccountsPayableConfig](
    [BRG_AccountsPayableConfig_SK] varchar(40) NOT NULL
,    [Venue_SK] varchar(40) NOT NULL
,    [Venue_BK] nvarchar(100) NOT NULL
,    [FlexRowEffectiveFromDate] datetime2(7) NOT NULL
,    [LNK_AccountsPayableConfig_SK] varchar(40) NOT NULL
,    [HUB_AccountsPayableConfig_AccountsPayableConfig_SK] varchar(40) NOT NULL
,    [HUB_Department_Department_SK] varchar(40) NOT NULL
,    [LNK_AccountsPayableLog_SK] varchar(40) NOT NULL
,    [HUB_AccountsPayableLog_AccountsPayableLog_SK] varchar(40) NOT NULL
)
    WITH (CLUSTERED COLUMNSTORE INDEX, DISTRIBUTION = HASH([Venue_SK]))
```

After:

```sql
CREATE TABLE [rdv].[BRG_AccountsPayableConfig](
    [BRG_AccountsPayableConfig_SK] varchar(40) NOT NULL
,    [Venue_SK] varchar(40) NOT NULL
,    [Venue_BK] nvarchar(100) NOT NULL
,    [FlexRowEffectiveFromDate] datetime2(7) NOT NULL
,    [LNK_AccountsPayableConfig_SK] varchar(40) NOT NULL
,    [LNK_AccountsPayableConfig_L1_AccountsPayableConfig_SK] varchar(40) NOT NULL
,    [LNK_AccountsPayableConfig_L1_Department_SK] varchar(40) NOT NULL
,    [LNK_AccountsPayableLog_SK] varchar(40) NOT NULL
,    [LNK_AccountsPayableLog_L2_AccountsPayableLog_SK] varchar(40) NOT NULL
,    [LNK_AccountsPayableLog_L2_Department_SK] varchar(40) NOT NULL
)
    WITH(CLUSTERED COLUMNSTORE INDEX, DISTRIBUTION = HASH([Venue_SK]))
```

Varigence provides remote support to accommodate this upgrade for any affected customer under current support and maintenance, please contact bimlflex-support@varigence.com for more information.

## Bundle 63827

* Update: The default values for settings that include file locations have been updated from `C:\Varigence` to `C:\BimlFlex`. This includes the following settings:
  * `ArchivePath`, new default: `C:\BimlFlex\Archive`
  * `ConfigurationPath` `C:\BimlFlex\Configurations`
  * `ExportPath`, new default: `C:\BimlFlex\Export`
  * `ImportPath`, new default: `C:\BimlFlex\Import`
  * `LookupCachePath`, new default: `C:\BimlFlex\Cache`
  * `RootPath`, new default: `C:\BimlFlex`
* Update: A scenario where an on-premise SSIS process was used and end-dating was activated but the `IsCurrent` indicator was not in use could lead to an error in the end-dating script. This is now behaving as expected regardless of the configuration for `IsCurrent`
* Update: A scenario where the same ModelGrouping was reused for multiple relationships would result in a repeat of that name in the Link has been addressed and the link name is now created as expected by the Data Vault Accelerator.
* Add: ADF now supports Azure Key Vault Linked services through an additional Extension Point. Add Azure Key Vault Linked Services through this Extension Point and reference them in other Linked Services as attributes.
* Add: ADF now supports Oracle sources that use Key Vault Secrets for connection strings. When this is configured the Key Vault Secret will replace the connection string defined in the connection metadata.
* Update: The `Business Key` metadata concept has been renamed to `Integration Key` to better describe the meaning. The metadata column `IsBusinessKey` is now named `IsIntegrationKey`. This is in line with the previous, similar, change to the `IsSourceKey` column. The Integration Key is used in modeling to define a single, agnostic, key used for integration across source systems. This is commonly used in both Data Vault and Data Mart modeling for defining Hubs and table grains etc. Any bespoke code references require updating to refer to the new name.
* Update: A scenario where the merge for loads using the delete detection pattern would result in an incorrect join column mapping has been resolved.
* Update: The BimlFlex Excel About > Help link has been updated to point to the current documentation web site.
* Add: `DvPitLagDays` and `DvBridgeLagDays` settings that allow for Overriding the number of days the `Point In Time` and `Bridge` process should go back and look for changes to reprocess.
* Update: `Point In Time` code to correctly end date records. It is recommended to truncate the PIT tables and executing the newly generated code to apply the new logic on existing tables.
* Added `Extract DACPAC Folder` button to the `Debug Utility`. This allows the user to get the `Dacpac` folder from the bundle and save it where they please. This folder contains the database definitions and pre-deployment scripts and can be used in pipeline deployments of BimlFlex database updates. (This is a companion feature in BimlStudio 2019)

> [!NOTE]
> The following metadata columns have been renamed and any bespoke code referring to them require corresponding updates
>
> * `IsBusinessKey` is now called `IsIntegrationKey`
> * `IsAltBusinessKey` is now called `IsSourceKey`

* Update: The `[ssis].[LogExecutionEnd]` and `[ssis].[LogExecutionError]` stored procedures in BimlCatalog has been updated with additional logic to minimize the risk for deadlocks in certain scenarios.
* Update: the dynamic hashing used in the custom components have additional configurations available to make the resulting SQL compatible hashing easier to match using `HASHBYTES()` scripts in SQL. For implementations currently using the SQL compatible hashing setting the hash values for full row hashes will be calculated using the new approach and changes to existing rows might be identified due to the updated hashing pattern.
* Update: The setting `HashLongStrings` has been removed from the settings as the `HASHBYTES('Algorithm', @input)` input limit of 8000 bytes has been removed from Azure SQL Data Warehouse. This legacy setting allowed larger columns to be compared outside of the row hash, working around the limitation. This change will default to always add all columns to the row hash for comparisons regardless of data type size. For existing implementations where this was used, the row hash will potentially be updated and result in additional rows added to the relevant destination table with the same contents and different hash values.
* Add: The `AddRowHashKeyIndex` setting has been added to allow the automatic creation of index on staging tables to potentially increase the performance of Satellite loads.
* Update: A BimlFlex database scenario where a legacy default would affect the database upgrade process has been addressed.
* Update: The `ConcatenatorBusinessKey` setting has been renamed `StringConcatenator` to better reflect the fact that it is used in hash concatenation, not just Business Key string concatenation.
* Update: A scenario where the Data Mart load pattern added an unnecessary conversion in the Data Flow for smart keys (keys that don't need lookups) has been addressed. Only keys that are used in lookups are converted when needed.
* Add: BimlFlex now supports modeling scenarios where multiple Data Vault load projects share common elements such as a core Hub object.

More information on the hashing approach for SQL compatible hashing can be found here: @bimlflex-hashing-overview

* Update: the `IsAltBusinessKey` metadata entity has been renamed to `IsSourceKey` to better reflect the meaning. This metadata attribute reflects the source Primary Key definition and is used for persistent staging tables when the defined Primary Key is not persisted. This is a common scenario for Data Vault modelling. For Data Vault, the Business Key is also defined as the Primary Key for each source object. This column is normally not persisted. The columns marked as `IsSourceKey` will be used as the Primary Keys for the Persistent table in this scenario.
* Update: the `SourceErrorHandling` Extension Point is now included in the placeholder information in the preview expanded BimlScript for packages. The `inputPath` variable being passed to the Extension Point and exemplified in the sample code as: `<InputPath OutputPathName="<#=inputPath #>" />` has been updated to include the `.Output` part of the Path specification. Existing usage of the Extension Point that previously added this syntax manually can now be simplified. The behavior now match the expected syntax of the sample code.
* Add: additional settings for controlling BimlFlex behavior:
  * `ConvertGuidToString` - This controls if a source column of type Guid/Uniqueidentifier should be automatically converted to String or not. For legacy reasons this was automatically performed. The current generation of BimlFlex, SSIS and SQL Server can accommodate Guid columns into the data warehouse, so for implementations that would like to reuse the Guid data type can set this setting to no, `N`
  * `AzureAllowPolybase` - Should the Azure SQL Data warehouse process use PolyBase
  * `AzureStageOnExtract` - Should the Azure SQL Data warehouse process create a staging table and stage data directly to this table rather than go through the PolyBase, external table process. This setting replaces the `AzureCreateStageTables` setting
  * `AzureExternalFileConversion` - Should the External Tables used to access files in blob storage apply the string manipulation conversions used to accommodate shortcomings in PolyBase.
* Update: The rename of the `SsisExpression` attribute to `SsisDataFlowExpression` was not updated for all custom attributes when the change was introduced. This database update to the BimlFlex database includes an update to any existing custom attribute to the new format.
* Update: an issue with missing references for modelling scenarios with multiple Data Vault projects and where a Hub was referenced in a separate project with a separate Satellite load has been addressed.
* Add: Additional Extension Points for the Delete Detection pattern has been added
  * `DeleteInitializeRawFileDataflowOverride`
  * `DeleteDetectDataflowOverride`
  * `DeleteDetectRawFileOverride`
  These are available to override the default behavior for parts of the Delete Detection process when needed.
* BimlCatalog Updates: The BimlCatalog orchestration stored procedures `ssis.LogExecutionEnd` and  `ssis.LogExecutionError` has been updated to better support the abort closing of legacy runs. Previously the orchestration might get stuck in a state where a previously failed run caused all future runs to assume they should abort. The updated procedures will properly close any legacy run as aborted when a new run ends or errors.
* Update: The Documentation > Preview > Database Schema Diagram will now also display the Data Vault Preview schema.
* Update: to the Data Vault Publisher. Previously some scenarios would result in the Publish failing due to the updated metadata model entity names.
* Add: the inclusion of a missing c# code file reference that resulted in a missing file error in certain scenarios.
* Update: ADF source to staging for projects that include an Azure SQL Data Warehouse destination now has the option to load directly to staging tables. The table scripts are included in the Azure SQLDW table create script function and includes both staging and persistent staging tables. The load process includes both the required copy activity for the source to staging and the persistence script to update the PSA. ADF staging table creation is controlled by the `AzureCreateStageTables` setting.
* Update: Fix a scenario where the Data Vault Publisher wouldn't take the new Expression columns into account.

This Bundle introduces additional metadata attributes for columns and configurations that is planned to be used in the Azure Data Factory patters, such as `AdfDataFlowExpression`. It also renames the `SsisExpression` attribute to `SsisDataFlowExpression`. The Excel plugin, the Bundle as well as the database all need to be updated to accommodate this update.

> [!NOTE]
> Any existing code or override expression that use SSIS expression need to be updated to use the new naming convention `SsisDataflowExpression` instead of `SsisExpression`. This is commonly used in Attribute overrides for audit columns, such as `RowEffectiveFromDate_SsisDataflowExpression`. An update is included in the new version of the database, however for scenarios that aren't picked up by that update, a manual update of bespoke expressions are required.

* Update: Salesforce source query parameter to use UTC format instead of the provided local time default value. Previously, due to the different ways datetimes are presented by the Salesforce interface there were scenarios where the process used local and UTC times inconsistently.
* Add: TargetPreProcess and TargetPostProcess to Data Vault and Data Mart Dataflow to accommodate Source and Target table parameters
* Update: Move the CDC Get MAX Lsn up in Dataflow to better accommodate changes during InitialLoad.
* Add: MaximumInsertCommitSize, BatchSize, CheckConstraints to the Source - Staging template for OLEDB Destination
* Update: accommodate a scenario where duplicate Business Keys could be present in Reference tables in the Data Vault ELT pattern
* Update: InitializeOverride ExtensionPoint to include Batch inheritance

New Feature: The SSIS Custom components and corresponding settings have been updated to support additional hashing algorithms as well as both string and binary hash representations. The following Hash algorithms are now valid options for the Settings Key `HashAlgorithm`:

* `MD5`
* `SHA1`
* `SHA2_256`
* `SHA2_512`

Changing the Hash algorithm will also automatically change the data types used for the columns.

The Settings Key `HashBinary` (`Y`/`N`) controls if the hash should be represented in the database as a string or as a binary value. A binary value will normally use half the space of the string representation.

* Add: Support for additional hashing algorithms as well as option for string or binary hash representation. This update requires updated SSIS Custom Components, see above.
* Update: A scenario where the SSDT project was generated without a valid project definition was addressed and it is now possible to review the project settings for the generated SSDT projects in Visual Studio 2017 without issues.
* Update: A scenario where LSAT DV cache keys were invalid for Driving Key relationships was addressed.

* Update: the Package Variable Extension Point now overrides MDS system variables as expected. It is possible to address the following MDS-specific system variables: `MdsBatchTag`, `MdsVersionName`, `MdsLogFlag`, `MdsImportType`
* Update: superfluous file cache entities are no longer created for Delete detection objects when both the `PsaUseCacheLookup` and `DeleteDetectionEnabled` settings are set to `Y`
* Update: The `RowChangeType` column is now included in the Row Hash for ELT load processing. This allows easy change detection for rows where only the Change Type indicator has been changed.
* Add: Support for column dependency resolution for Business Key columns in delete detection load packages. Dependent columns are now identified and added to the delete detection packages as Derived Column transformations.
* Update: SSIS Custom Components now has updated support for a range of configurable hashing options, including MD5, SHA1, SHA256, SHA512 for both binary hash values and string representations.
* Add: Support for the ADF Integration template artifact generation. Use the `ADF Source -> Target` Project Integration Template to define an ADF project. The ADF process currently supports SQL-based sources to either Azure Blob Storage or Azure Data Lake Storage file destinations

## BimlFlex 2018

legacy BimlFlex 2018 release notes below

## Bundle 63502

> [!IMPORTANT]
> The 63502 Bundle version requires that the BimlStudio 2018 R3 release is installed first.
>
> Please download and upgrade from the following links:
>
> * BimlStudio: [https://www.varigence.com/downloads/bimlstudiosetup.exe](https://www.varigence.com/downloads/bimlstudiosetup.exe)
> * BimlFlex: [https://www.varigence.com/downloads/bimlflexsetup.exe](https://www.varigence.com/downloads/bimlflexsetup.exe)

* Add: new setting for controlling file loads from subfolders. The setting `SsisProcessSubfolders` is available in the Settings sheet. This controls if the SSIS flat file source load process should iterate through subfolders when loading files or not. The default setting `N` match the existing behavior. Update this setting to `Y` to allow the load process to load all matching files from the defined folder and all subfolders.
* Add: Support for custom connection managers. Use an Extension Point to define a custom connection using Biml and use a source override to completely customize the source load process. A new System Type `Custom System` has been added that can be used with the `Custom Component` Connection Type. Use the `Connection Override` Extension Point from the `Connection` Extension Points Ribbon area to override the connection using Biml.
* Add: Support for Excel file source connections. A new System Type `Excel` has been added that can be used with the `File` Connection Type. Using Excel sources in SSIS has several BimlFlex-unrelated dependencies. The correct Excel-compatible drivers for the SSIS and SQL Server version in use needs to be available and the SSIS Package execution normally needs to be run in 32-bit mode.
* Add support for multiple Link `ModelGroupings` on a ModelSource Hub objects columns. It is now possible to add several Link groupings for a source table of type Hub. This allows the modeler to define multiple Unit Of Work groupings from a single Hub candidate source table.
* Update: the Azure blob storage file processing now works with uncompressed files. Use the Setting `ZipOutputFile` to control compression of the generated file for blob storage and Azure SQL Data Warehouse. Note that the external table definition needs to match the compression used by the files in the external location.
* Update: A Hash Distribution Key optimization was added to the Link Satellite load process for Azure SQL Data Warehouse ELT loads. This should improve performance for Link Satellite loads where Hash Distribution is used.
* Update: the ELT Data Mart Batch process now implements parameterized connections as expected. Using a Project Parameter and a Connection string override will now spawn SSIS packages with the expected connection parameterization implemented.
* Update: A scenario where Azure SQL ELT load Stored Procedures were used together with replicated tables would result in references to hash distribution keys was addressed. ELT Load Stored Procedures are now properly created for loads from replicated tables.
* Update: a CDC source scenario where multiple LSN were mapped to the same timestamp for the could result in key collisions on load. A change in the load query takes this scenario in to account and creates unique timestamps for all CDC records for a given time, regardless of the associated LSN.
* Update: A feature update added an additional parameter to the exposed BimlFlex `GetSqlToBk()` function. This additional parameter allows the creation function to cascade through references. This affected existing Extension Points using the function. A backwards-compatible version of the function has been added in this Bundle.
* Update: Added support for related tables where the related table has `ExcludeFromBuild` set to `Y`. Previously the exclusion would potentially result in validation errors if the references were defined across projects. This update will allow cross-project references of Hubs to be able to build links without separate Hub load packages also being included.
* Add: support for XmlEscaping in the Metadata Instance for DataItem names. It is, however, not recommended to use `&`, `>`, `<`, `%` characters in Metadata Entity Names.
* Update: names generated for the Script transformation for file conversion and zipping for Azure Blob storage destinations had a superfluous space. The names have been updated from `SCT - Convert  and Zip <Name> File` to `SCT - Convert and Zip <Name> File`
* Add: `DROP TABLE` statements to all ELT Stored Procedures to ensure minimum temp space usage in cases automated clean up fails to release temporary resources.
* Update: RowCount for file source objects are now logged on a per source file basis in the BimlCatalog. This allows separate row counts to be persisted in the BimlCatalog. Previously the row counts for files were transient and only the last file was persisted.
* Add: support for Point In Time and Bridge tables for Snowflake
* Update: ZipArchive functionality now zips files as expected in source file ETL SSIS packages

> [!NOTE]
> An update to the CDC source mechanism has been implemented in this Bundle. This requires both the Bundle and the BimlFlex database to be updated.  
> A scenario where multiple LSN numbers were mapped to the same completion time and where multiple updates to the same key was captured across these LSN's could lead to key collisions. This update allows any number of updates across a given transaction datetime. The derived individual `FlexRowEffectiveFrom` datetime values are now also being derived in DateTime2(7) increments instead of the SQL Server CDC-process native DateTime resolution. This will minimize the risk for updates to the same key across LSN datetimes to result in key collisions. Note that BimlFlex captures all changes to keys and assign unique `RowEffectiveFrom` values to each row. In a scenario where there are more changes introduced than there are time units available the load might fail due to Key collisions.

The Updated `RowEffectiveFromDate_SsisExpression` attribute value for default CDC load projects is now:

```ssis
@[User::IsInitialLoad] ? @[User::ParentBatchStartTime] : DATEADD("ns",([__$rownumber] - 1) * 100, (DT_DBTIMESTAMP2, 7) [__$start_dt])
```

The updated CDC Source query format now match the below:

```sql
SELECT
    <SourceColumns>
    ,CONVERT(VARCHAR(256), [__$start_lsn],1) AS [__$start_lsn]
    ,CONVERT(VARCHAR(27), CONVERT(DATETIME2, sys.fn_cdc_map_lsn_to_time([__$start_lsn])), 121) AS [__$start_dt]
    ,CONVERT(INT, [__$operation]) AS [__$operation]
    ,ROW_NUMBER()
        OVER (
            PARTITION BY <KeyDefinition>, CONVERT(DATETIME, sys.fn_cdc_map_lsn_to_time([__$start_lsn]))
            ORDER BY [__$start_lsn], [__$seqval]
        ) AS [__$rownumber]
FROM
    [cdc].[fn_cdc_get_all_changes_<capture_instance>](<start_lsn>,<end_lsn>, 'all')
```

## Bundle 63408

* Add: new validator to check Data Mart objects and projects. For a Data Mart load the mapped objects needs to be in the same project. If table/view `sourceForFactTable` has source to target mappings to load to `FactTable` then both these objects needs to be part of the same project (such as project `Load_DataMart`). This is enforced to ensure that multiple load processes are properly separated in BimlFlex.
* Update: to the end dating logic for SSIS PSA loads to allow multiple loaded updates to be end dated efficiently.
* Update: added additional Batch logic to separate multiple Batches in projects with multiple sources into separate Batch packages for Azure SQL Data Warehouse loads. The new Batch name will include the Connection Record Source (`BFX_LOAD_RDV_Batch` -> `BFX_LOAD_RDV_AWLT_Batch`). This allows multiple sources to be maintained within the same Project/Batch metadata even if there are object name duplications.

## Bundle 63403

* Update: Fix issue with `UPPER()` logic in `DataVault` SSIS to accommodate nested `FlexToBk()` columns, especially on Link Reference columns.
* Update: Fix inline file source column conversion when using `ColumnAlias`, `SsisExpression` with `DatatypeMapping`.
* Add: Configure batch name to include `AppendBatchName` configuration to front of `ELT` SQL batches to allow additional naming convention.

## Bundle 63328

* Update: an issue in the BimlFlex database resulting in errors when pushing projects when `Use My Exclusions` was set has been fixed.
* Update: Removed superfluous `n` from SQLDW stored procedure.
* Update: Fix `UPPER()` from `SsisExpression` when Link hash key is derived from `FlexToBk()`.

## Bundle 63318

* Update: The BimlFlex database sample metadata created connections with the character `N` in the provider field. This is not a valid provider for the sample metadata and has been removed in this build. Any existing projects based on the sample metadata with this character as provider should be updated and the `N` removed.

## Bundle 63317

> [!WARNING]
> This bundle require a BimlStudio build greater than `Build 5.0.63175.0` and updated BimlCatalog and BimlFlex databases.

* Add: `ModelGrouping` to DataVault Accelerator. Please read this blog post for more information: [Agile Data Vault Acceleration](https://www.varigence.com/Blog/Post/84)
* Add: Support for Data Vault `Same As` and `Hierarchy` Links in the `ModelObjectType`, including the ability to specify naming convention in the Settings using `DvAppendSameAsLink` and `DvAppendHierarchyLink`
* Add: Support for `Snowflake` SRC - STG - PSA including an SSIS Custom Task. This is work in progress and we are working with a customer in a private preview. This is in `BETA` at the moment and not for production use.
* Add: `GROUP BY` clause to `Hub` and `Link` lookups to return unique list when used with `ApplyLookupFilterRdv = "Y"`
* Add: Functionality to support file source in line expressions. You can now use `SsisExpression` like `REPLACENULL(RAW_@@this, "")` with `ColumnAlias` set to `RAW_@@this` and `DataTypeMapping` like `String(20)`
* Add: Extension Points `StagingTargetPipeline`, `SourceFileArchiveOverride` and `SourceErrorHandling` to provide greater flexibility when loading flat files
* Add: static package ID's to all generated SSIS packages. The package id is normally generated dynamically by the SSIS build process. By adding a static ID it is easier to track actual changes to packages.
* Update: Remove `RowHash` from `Change Data Capture` and `Change Tracking` staging tables to reduce table size
* Update: Extension Point `DwhSourceOverride` and `RdvSourceOverride` to allow additional flexibility to the Data Mart and Data Vault process.
* Update: Extension Point `DwhTargetPipelinePre`, `DwhTargetPipelinePost`, `RdvTargetPipelinePre` and `RdvTargetPipelinePost` to allow additional flexibility to the Data Mart and Data Vault process.
* Update: Extension Point `DwhType2Pipeline` to allow additional flexibility to the Data Mart process.
* Update: Extension Point `DwhType1Pipeline` to allow additional flexibility to the Data Mart process.
* Update: Extension Point `DwhInsertPipeline` to allow additional flexibility to the Data Mart process.
* Add: Extension Points to provide additional flexibility. `StagingTargetPipeline`, `PersistentTargetPipeline`, `StagingInitialTargetPipeline` and `PersistentInitialTargetPipeline`
* Add: Extension Points target `@@global` to `PackageVariable` and `BatchVariable`
* Add: Extension Point `DataFlowProperties` and allowing `@@global` target
* Update: Fix `Change Data Capture` Data Vault Satellite load with `RowChangeType` for `Deletes`
* Update: Fix Error in Batch when multiple sources are mapped to the same target using ELT stored procedures.
* Add: Static DTSID to all connection managers based on the `[ConnectionUID]`
* Add: `UseGETUTCDATE` configuration to BimlCatalog. This allows configuration of orchestration times to be specified in UTC time zone or the local time zone of the database.
* Update: the `ExcludeFromBuild` and `ExcludeFromValidation` has been removed from the `Connections` and `Projects` metadata.
* Update: a scenario in the BimlFlex Excel metadata management tool where filtered rows were included in selection when archiving, refreshing and cloning selection has been updated to the expected behavior
* Update: a scenario where the BimlFlex Metadata Importer was not importing when current selection was outside the Objects and Columns table has been updated to the expected behavior
* Update: the BimlFlex Excel metadata management tool is now applying Cell format `TEXT` to Default columns so that contents identified as dates are not reformatted to internal Excel numbers
* Update: remove redundant Import Options for BimlFlex metadata import
* Update: add additional logic to `TableFilter` and `SchemaFilter` in metadata import to ensure updates are managed as expected
* Add: additional `Clone Table` target object type options to the Excel metadata management tool
* Add: support for `Proper_Case` in naming conventions in the Excel metadata management tool import metadata options

> [!Note]
> Behavior change - this bundle delegates the model object type definition task to the modeler. Review the destination logical model and the source system relationships and update the `ModelObjectType` definition of object based on that. Previous releases used technical analysis of the source to prepopulate choices other than Hub.

> [!WARNING]
> Breaking change in feature.
> Update: Rename Object Extension Point `Connection` to `PackageAddConnection`. Please search your project for `extensionpoint="Connection"` and replace it with `extensionpoint="PackageAddConnection"`

## Bundle 63217

* Update: Fixed an LSAT IsDrivingKey Source select issue for multiple Driving Key columns not being a proper comma separated list
* Update: Data Vault accelerator now uses the `RowHashKey` configuration data type for relevant columns
* Update: Point In Time and Bridge tables now use their specified schema
* Update: `ExcludeFromBuild` flag now does not affect or exclude target objects
* Update: Support for BDV and Data Mart dimension smart keys when the Primary Key is not defined as an identity column. For scenarios where the Dimension Primary Key is not an identity column, derive the smart key in to the fact load and the process will use this key without doing a dimension surrogate key lookup.
* Add: Configuration for constraint mode for database layers that will toggle table references: `ConstraintModeStg`, `ConstraintModeDv`, `ConstraintModeDm` to allow control of the creation of constraint for tables. Valid choices are: `DoNotCreate`, `CreateAndNoCheck` and `CreateAndCheck`

## Bundle 63130

* Add: additional configuration `AppendLoadFromPsaName` to allow control of the Batch and package name for the Reinitialization project (previous name prefix `INIT_FROM_PSA_`)
* Add: additional configuration `DeleteSchemaNamePattern` to allow control of the Delete table suffix (previous name `DEL`)
* Add: additional support for `ModelOverride` names during staging
* Update: Fixed an issue with the Delta DataFlow pipeline when the `RowSourceId` column was excluded from the solution
* Add: support to the Data Vault Accelerator to Infer HUB if necessary when accelerating across sources. It is still recommended to have a self-contained set of Data Vault entities from each source, but for models where a source table references a Hub candidate from another source the accelerator will now derive the external Hub when needed
* Update: Fixed a Data Vault REF table lookup join and a SQLDW SAT join when custom distribution is defined

## Bundle 63108

* Update: Accommodate safe file names for Salesforce tables ending with double underscore
* Add: BimlCatalog Connection to SQL Batch to enable support for Extension Points
* Update: ChangeTracking updated to support `SourceSql` variable and expressions
* Update: Change Hub and Link lookups to use target delimiters instead of source delimiters.
* Add: support for `CustomAttribute` with a `SettingValue` at Project level
* Remove: Link Satellite as a `ModelObjectType`. This is currently not a supported source object type in the Data Vault Accelerator
* Update: DateTimeOffset Scale when used with `DataTypeMappings` and the Data Vault Accelerator

## Bundle 63026

Update: Data Vault `REF` primary key now includes the `EffectiveFromDate` column
Update: PSA INIT loads no longer derive Data Type mappings again
Update: `IsInitialLoad` precedence constraint updated.
Add: Support for `SourceProperty` by Batch
Update: Derived Hubs from Links (to same Hub) no longer use same BK for second hub

## Bundle 63018

* Update: added additional `CAST(@@this AS INT)` to `DataTypeMappings` for `Boolean`, `Byte` and `SByte` `SqlExpression`. This allows a more natural interpretation of `true`/`false` values etc. into Integer values. The default behavior in an SSIS data type transformation is to interpret `true` as `-1`. This added default cast allows `true` to be stored as `1` instead.
* Add: support for Delete tables using Create Table Script function
* Update: Fixed an issue in the `IsInitialLoad` check in Data Vault ELT stored procedures
* Add: validators to check that `SAT` reference a `HUB` and `LSAT` reference a `LINK` to eliminate null object reference errors
* Add: BimlCatalog: 2 new views `rpt.CurrentExecutions` and `rpt.LatestBatchExecutions` to provide quick overview of current executing packages and the last five batches

## Bundle 63013

> [!WARNING]
> Breaking change in feature.
> The 63013 Bundle introduces a new feature that requires the BimlFlex database to be updated to the same version.

* Add: New Feature: support for Transient ChangeType. This can be used for columns that are used in the pipeline and excluded from the target and hashing.
* Add: `NoOfContainers` configuration to `Batch` allowing specification of the max number of Sequence Containers included per batch.
* Add: New Feature: support for [Microsoft SQL Server Change Tracking](https://docs.microsoft.com/en-us/sql/relational-databases/track-changes/about-change-tracking-sql-server) as Source Type.
* Add: support for ODBC based SQL ELT patterns to support calling of future Snowflake templates.
* Add: additional support to specify `AzureExternalFileFormat` as a Setting
* Update: fix lookup on PSA for insert-only PSA scenarios, in some configurations the lookup still used the `RowEffectiveToDate` for the lookup
* Update: some scenarios where a `WhereSql` metadata clause was added, an empty sequence container would also be added to the generated package
* Update: Optimize `SRC` to `STG` with `PSA` to allow for insert only `PSA` and `PSA` without `STG`.

## Bundle 63001

* Add: `FlexToBk()` support for DateTime with milliseconds
* Update: Change HUB lookup to reference staged BK and not derive FlexToBk again

## Bundle 62931

* Add: validator for Alternate Derived Column that `SqlExpression`, `SsisExpression` and `ColumnAlias` must all be specified
* Update: parameters for Data Mart loads to use SourceTable parameters
* Add: Option for global, non-named LinkSatellites using `srs` (Sans Record Source) as `ModelGrouping`
* Update: Fix PSA reload logic to accommodate Variables in `SsisExpressions`
* Add: support to add parameter to source queries using `SourceParameter`

## Bundle 62925

* Update: PSA Merge SQL Statement now raises an error on transaction rollback for audit and logging
* Update: Lookup join from DV Satellites and Link Satellites now filter better on existing records
* Add: SSIS Delay Validation on Connections

## Bundle 62907

* Add: support for `ParentProject` targets in `CustomAttributes`
* Update: BimlFlex Utility to update new local application data folder location for template Bundle
* Add: Batch for re-initialization of all PSA to Staging packages
* Add: Validator for Self-referencing Business Keys
* Add: validator for BimlCatalog connection for `ADONET` and `MSSQL/SQL Server` properties
* Add: support for SQL Server 2017 for custom Script components
* Add: initial support for integrated source Delete detection

## Bundle 62901

* Add: support for `ExcludeFromBuild` objects when using the Data Vault Accelerator
* Update: BimlFlex now exclude creation of external tables when `ExcludeFromBuild` is set to `Y`
* Add: `ObjectInherit` support for BatchVariable Extension Point
* Add: `LookupJoin` Extension Point for `WHERE` clause inclusion

## Bundle 62823

* Add: logic to convert `TEXT` and `NTEXT` Source columns to corresponding `VARCHAR` for Blob storage loads to accommodate PolyBase
* Add: Validator to ensure Target Dimensions has a separate Business Key and Primary Key defined
* Add: a `CDATA` wrapper to comments and descriptions to accommodate xml control characters. In certain scenarios some characters would introduce issues in the BimlStudio parsing of contents.

## Bundle 62817

* Update: Satellite record compression to correctly identify initial rows. In certain scenarios an additional row was being created in Satellite loads. Record compression now works across these scenarios.
* Update: a configuration scenario where PSA updates were incorrectly identified as having the `IsCurrent` flag present for end dating even if it was switched off in the Configuration.

## Bundle 62809

* Bundle version number realignment
* Add: integrated Support for COZYROC Salesforce source SSIS custom component
* Add: support for Hash Distribution Keys in Inferred Hubs for Azure SQL Data Warehouse optimization.
* Add: Parent Batch requirement for nested projects. Existing Projects with a master Project without a Batch specified will need to be updated to include the main Batch.
* Add: `FromSql` metadata definition to support additional query logic, including hints like `WITH (NOLOCK)`

## Bundle 80329

* Add: New feature: Control if the Data Vault Accelerator should create Link Satellites for generated Links. New setting `DvAccelerateLinkSatellite` has been added to the `Settings` sheet. This controls if Link Satellites should be accelerated. Breaking change This feature has a default value of `N`, meaning no Link Satellites will be accelerated unless it is updated to `Y`. Overrides can be created using attribute `SettingValue` definitions for individual source tables.

> [!WARNING]
> The default setting for `DvAccelerateLinkSatellite` is `N`.
>
> Existing projects using Link Satellites should update it to `Y` to maintain behavior

## Bundle 80325

* Add: update `CREATE DATABASE` default statements for generated SQL scripts to create databases with `Recovery Model` set to `Simple`
* New: support for global Extension Point for Project Parameters. This Project Parameter will be added to all Projects

Use Extension Point `ProjectParameter` with target `@@global`:

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" target="@@global" #>
<Parameter Name="YourParameterName" DataType="String" IsRequired="true">DefaultParameterValue</Parameter>
```

## Bundle 80321

* Fix: Issue with loading ELT into Data Vault for External Tables
* Update: Split `Use My ConnectionStrings` and `Use My Exclusions` in BimlStudio and BimlFlex Excel Add-in configuration
* New: Add `SsisAnnotations` to all packages
* Update: Change RowCount object name for Data Vault loads to reference destination rather than source object
* Update: Fix behavior for Azure DW ELT not deriving BK columns
* Update: Fix behavior for SSIS Connection Managers for Azure DW connections
* Fix: an issue where `wcf.SetCloneVersion` did not correctly manage `ClonedFromUID`
* Update: Allow SSDT project to build when no tables are defined
* Update: Add warning validation for projects without defined target
* Update: Add support for `AutoAdjustBufferSize` SSIS setting for supported SSIS versions
* Add: support for SQL Server 2017 custom SSIS components
* Add: support for `SelectBySql` for `DISTINCT, TOP n` scenarios
* Add: support for `OrderBySql` for `ORDER BY Column` scenarios

## Bundle 80305

* Fix: Data Vault templates for SQL to load LSAT correctly
* New: Add `Quick Parse` option for BimlStudio options to only load placeholder objects when modelling
* Fix: A scenario where end dating of Satellites did not behave as expected
* Update: Optimization to SQL templates
* New: Add concurrency configuration to `AzCopy`
* New: Refactor Data Vault patterns to exclude end dating code when `EnableEndDateRdv` setting is set to `"N"`

## Bundle 80223

* Performance update to BimlFlex to use local cache when no changes to metadata
* Performance update to minify Biml files in cache
* Fix: Remove IsNullable warning for External Tables
* Fix: Remove double underscores from certain name generations

## Bundle 80216

* Fix: Orchestration truncate statements now exclude database name in statement
* Fix: Synchronized LNK and LSAT Hashes for ELT loads for on-premises SQL Server
* Fix: Added Execution Id parameter to SSIS calls to Stored Procedures for ELT loads for on-premises SQL Server

## Bundle 80213

* New: Use `Page` compression for tables as default
* New: Added velocity profiling for PSA tables
* Fix: Connect PreDataFlow for FlatFile sources
* Fix: Added support to derive LSK columns when needed for external tables

## Bundle 80212

* Fix: Update to Same As Link to derive both Hub sides
* Add `CONVERT` to SourceQuery to accommodate SQL Server and PolyBase Maximum DMS row size limitations
* Fix: Removed Link Surrogate Keys from External Table definitions
* Added initial support to auto-generate SSDT projects for all SQL artifacts

## Bundle 80207

* Change: Change PIT stored procedure to only use SAT FromDate to support insert only Data Vault
* Fix: Adding support for Same As Links in the Data Vault Accelerator
* Fix: Adding support for Azure Blob Storage for Connections to support both Azure SQLDW and Azure SQL VM
* Fix: Satellite Driving Key Lookups and Condensing Script
* Fix: Change BimlFlexUtility to remove temp folder before and after app runs. This is to avoid cached bundle from being deployed.
* Fix: PSA Source query to exclude source `JoinSql` and `GroupBySql`
* Fix: Link Degenerate Keys to map to Link and not LSAT
* Change: Remove dependency to define IsDerived on the Columns Table
* Change: Repoint DB2 import to use the SYSIBM tables instead of the SYSCAT tables.
* Change: BimlCatalog SetConfigVariable to handle additional "NULL" default dates '1899-12-31', '1900-01-01', '0000-01-01'

## Bundle 80118

* Update Snapshot capture to database and add-in
* Update add-in to default IsNotPersistent for derived BusinessKeys on Import Metadata
* Change file compression to limit in memory compression to 2GB. Larger files will be compressed using FileStream to accommodate .Net limit
* Change `__Utility` sheet in add-in dynamic. Note this will raise Excel warning "Microsoft Excel will permanently delete this sheet...". Click Delete button and continue.

## Bundle 80112

* Added Welcome documentation screen to BimlFlex Utility Application
* Added Release Notes screen to BimlFlex Utility Application

## Bundle 80109

* Added Set Parameter for SQL based stored procedures
* Added support for Azure Blob Storage based staging
* Update to optimize Azure SQL Data Warehouse generated code

## Bundle 71204

* Added additional logic to handle the `ParameterColumnExpression` with `ExecuteSqlOnSource`
* Update to rdv helper functions for Multi Active Key End Dating
* Update to accommodate a scenario where a Satellite exist with a Link and no Hub. This should not happen, but can  if the Data Vault is modelled incorrectly
* Update to `SqlDwSatEndDate` to update `RowIsCurrent`
* Added `BusinessKeyQualifiedName`, `BusinessKeyName`, `PrimaryKeyQualifiedName` and `PrimaryKeyName` to `TableObject`
* Update to PSA parameters for Azure SQL Data Warehouse and Satellite End Dates
* Update to check is initial load before Data Flow Task for dimension and fact SSIS loads
* Add Ordering to the Data Vault Accelerator

## Bundle 71116

* Update to End Dating of Multi Active Satellites
* Updates to row condensing script to accommodate change type if existing in data stream
* Refactor Data Mart Azure Data Warehouse Type 1 SQL logic and enable `SolveOrder` in SQL Batch
* Update to Data Type Mappings for `AnsiStringFixedLength` default mapping
* Add `User.DeleteImportFile` to variables passed to file archive script
* Add Parameters to Stored Procedure Data Mart scripts

## Bundle 71108

* Update to `RowChangeType` definition in Type 1 Azure SQL Data Warehouse code
* Refactor of `BEGIN CATCH` to re-use error Variables
* Added `DataVaultProvider` class for optimization of Data Vault Azure SQL Data Warehouse code
* Remove `IsInitialLoad` project parameter dependency. `IsInitialLoad` is now automatically set by querying the PSA for existing rows
* Updates to dependencies in the SQL create scripts
* Updates to Create Table Script
* Updates to references in Data Vault Accelerator Publish function
* Internal Replacing of Tables classes with `TableObject` class
* Update to INIT from PSA table name when STG and PSA database is the same database
* Rename rdv flatten files to correct case
* Refactor Azure SQL Data Warehouse `DataMart` class to correctly End Date Type 2 Dimensions
* Added setting to Delete Import File without archiving

## Bundle 71027

* Update to Initialize Object name in `StagingTable` and `PersistentStaging` class
* Update to `MultiActiveKey` column transformation `TargetColumn` alias
* Update to configurations for PSA merge statement
* Update to Data Vault Accelerator for duplicate indexes being previewed

## Bundle 71025

* Added additional classes for Staging and Persistent Staging tables to simplify creation of Extension Points

## Bundle 71023

* Update to `SourceTable` and `TargetTable` classes

## Bundle 71020

* Update to LSAT Data Vault Accelerator and SQL Scripts
* Added `SourceTable`, `TargetTable` and `TableConfiguration` classes to simplify Extension Points

## Bundle 71016

* Added option to choose between SSIS optimized Hashing or SQL compatible Hashing in the configurations
* Added `[ ]` delimiters in SSIS to accommodate lookup columns that contain spaces
* Added `sourceIntegrationStage` variable to all Biml templates
* Update to Data Mart Inferred Member support for columns with spaces and when no dimensions are to be inferred
* Update to SSAS placeholder files for adding Analysis services Extension Points

## Bundle 71011

* Updated BimlFlex Utility Application to optionally redact Azure settings when exporting metadata
* Added logic for SSIS Expressions to be applied to files prior to data conversion
* Update to Data Vault Accelerator to add references to existing HUB if it already exists
* Update to BimlFlex Utility Application to allow filtering on Customer when creating a metadata export
* Update to BimlFlex Utility Application to allow automatic zipping of metadata export files
* Update to BimlFlex utility Application to always show changes to Connection Strings
* Update to accommodate issue with `ModelOverride` names in lookups and Data Vault Accelerator
* Update to Data Vault Accelerator logic to reuse existing Hubs when `ExcludeFromBuild` is set
* Update to indexes for PSA tables when `MultiActive` keys are used
* Potentially breaking change to SSIS Hashing Custom component. Use hashing compatible with Azure SQL Data Warehouse and other SQL based CHECKSUMS and HASHBYTES functions. When updating to using SQL compatible Hashing, all pre-existing Data Vault surrogate keys will need to be updated and rehashed from the Business Key

## Bundle 70918

* Update to accommodate an issue with Duplicate Multi Active keys being created as Unique Keys
* Replaced `\r\n` with `\n` to simplify the Deploy Table Script
* Added logic to exclude any derived columns missing SSIS expressions for SSIS builds.
* Update to the Prefix/Suffix Logic in `GetSourceObjectName`
* Rename `UseColumnModelOverride` to `StageWithColumnModelOverride` in the configuration
* Rename `UseObjectModelOverride` to `StageWithObjectModelOverride` in the configuration

## Bundle 70913

* Update to Infer Hub lookup to use correct business key and error column
* Update to Lookup join to better accommodate differences between Sat and Lsat
* Update to Azure SQL Data Warehouse code where Decimal conversion could swap scale and precision
* Update to formatting of Point In Time Stored Procedures
* Update to `ExcludeFromBuild` when using `ObjectInheritance` to include the table for modelling
* Update to precedence constraints for File to Azure SQL Data Warehouse template
* Added support for ODBC parameterized queries as Expressions
* Updates to Object Model Overrides for Staging Layer

## Bundle 70912

* Updates to remove the need to emit Staging objects when using PolyBase and Azure SQL Data Warehouse projects
* Added optional `ProtectionLevel` to `CustomAttributes` to enable ability to compile for `EncryptSensitiveWithUserKey`
* Updates to BimlCatalog Orchestration to use Project Name when logging to accommodate duplicate package names
* Added `ApplyLookupFilterRdv` to filter SSIS lookups by joining to the Staging layer. This minimizes memory usage for lookup components. This cross database join functionality requires the databases to be co-located or the tables to be in the same database
* Added Lookup Filter for Surrogate Key Dimensional `LookupSql`
* Added Foreign Key Lookups for dimension surrogate key lookups
* Updates to `RowCount` SSIS Custom Component logic to add aggregate columns for source queries
* Added `RowCountSum` to the Metadata model and Add-in drop down for `CustomAttributes`
* Added validator to check that multiple source columns from a single source table aren't mapped to the same destination column

## Bundle 70906

* Updates to Satellite End Dating to use correct table alias

## Bundle 70905

* Breaking changes to the following Extension Points:
  * `LookupSql`
  * `LookupJoin`
  * `LookupParameter`
  * `LookupCache`

They now require `sourceTable` and `destinationTable` definitions

* Connection of RDV lookups to sourceTable

## Bundle 70904

* Added `MakeFileSafe` to accommodate `#` in table names for Oracle sources
* Added multi file import and load to PolyBase load pattern.
* Updates to UTF-8 Conversion
* Removal of 7-zip dependency. Zipping component will now use embedded compression features to gzip files

## Bundle 70829

* Updates to BimlFlex configurations, now split into configurations and settings tables
* Updates to Custom SSIS Component signing

## Bundle 70824

* Added `CreateSql` and `OverrideSql` functionality to both database and Extension Points to support custom SQL DDL object creation and custom SQL source queries
* BimlFlex Utility Application updated to support optional redaction of connection strings in metadata exports

## Bundle 70822

* Update to UTF-8 conversion to support extended characters previously resulting in overflows

## Bundle 70821

* Updates to support non-BimlFlex packages added to the BimlStudio project
* Updates to Primary Keys to support Heaps when loading files
* Updates to Mapped Source functionality to only hash mapped and/or derived columns
* Updates to `GetConfigurations` for Persistent Staging during SQL ELT
* Updates to SQL ELT Data Mart code for Azure SQL Data Warehouse
* Updates to Link lookups for Business Keys to match new Link Satellite process
* Additional Source Connection Validator added

## Bundle 70818

* Updates to Azure SQL Data Warehouse Hash Distribution keys for Persistent Staging
* Updates to LSAT Driving Key behavior for multiple Keys
* BimlFlex Utility Application updated with redaction of SQL login passwords
* Added Extension Point process for Blob Storage archiving using PowerShell
* Updated BimlFlex Utility Application to support deployment to Azure SQL Database
* Updates to Persistent Staging lookups when Staging and Persistent Staging are co-located in the same database

## Bundle 70807

* Updates to SQL Server CDC load functions
* Refactor of Data Mart process to create Type 1 and Type 2 Stored Procedures
* Updated formatting in BimlFlex Utility Application

## Bundle 70724 and earlier

### BimlFlex general

* Added metadata model validators to the bundle
* Added initial support for toggle-able output of flat Biml and DDL for entire BimlFlex solution on build
* Added `BimlFlexJsonImporter` to import customer metadata.
* Added Json MetadataDump and add DebugUserSettings to allow Varigence BimlFlex Support to simulate a user project
* Fixed an issue with `IsNotPersistent` logic
* Added `BimlCatalogWrapper` project for OpenSource
* Added support for same name for STG/PSA database
* Fixed an issue with Flat File template
* Fixed an issue with `IsInitialLoad` and Add Inferred Hubs from Sat and Links
* Fixed an issue with PSA Merge Alias for PrimaryKey Join
* Fixed an issue for PSA and `IsNotPersistent`

### Metadata Management

* Added AllowCustomInput to the DropDowns that should be optional
* Added Delete entities with selection and update mdv procs.
* Fixed an issue with FlexToBk with `@@rs` length and Validators for `ObjectInheritance`
* Added support for multiple Multi-Active keys (MAK keys)
* Added Table CDC Object Types for SQL Server CDC Source objects
* Added modelling Support for Multi Active Satellites and Customer columns to MDV

### Infer Hub functionality

* Added functionality to infer loading of Hubs from Link source tables
* Added check for InferHub configuration into SQL procedure creation

### Table creation scripts

* Fixed `CreateSql` script to include Schema and PSA where in some instances they would be missing
* Fixed `OverrideSql` check for PSA INIT to ensure that the `OverrideSql` is not applied twice

### Data Type management

* Added extended support for some SQL Datatypes such as Geometry and Geography
* Fixed CustomTypes in BimlDataType

### Data Vault Accelerator

* Added Custom Type logic to Data Vault Accelerator
* Enable SchemaGraph documentation and Fix DV publish with saved user settings
* Fixed issue with DV Accelerator publish using stale but cached metadata database credentials

### Extension Points

* Added `PreSql` and `PostSql` Extension Points. This allows for easier custom definitions for SQL scripts, such as for injecting compression definitions into table create scripts
* Fixed issue with PIT Extension Point for `LagSql`

### DataTypeMappings

* Added functionality to map data types into Staging and RDV. This enables expansion of data types to accommodate future source system changes
* Added Stored Procedure `wcf.SetApplyDataTypeMappings` to support DataTypeMappings
* Fixed DataTypeMappings when target columns exist
* Fixed DataType mappings for Source to Stage adding Data Conversion and Error Handling
* Added additional variables and fix data type mappings.

### Oracle Rdb support

* Add initial support for Oracle Rdb
* Add IgnoreSchema for Oracle Rdb integration
* Add logic to exclude schema name from source queries for Oracle Rdb

### SSIS

* Updates to Custom Components DLL names. Existing installations using legacy names should consider an upgrade to new names.
* Adding check for Sat cache directory and clean up
* Fix PSA INIT load Source thread
* Fixed `SsisExpression` for LSK columns to correctly use `@@rs`
* Added SQL Server CDC source component

### Azure SQL Data Warehouse

* Fixed issue with `SqlExpression` for SQLDW

### File to Staging

* Added File archiving to File to Stage Template

## BimlFlex Utility

### Initial Release of separate BimlFlex Support Utility Application

* Has latest database definitions and BimlFlex Bundle files embedded

### Supports the following functions

* Deploy BimlFlex metadata database to SQL Server
* Deploy BimlCatalog orchestration database to SQL Server
* Copy BimlFlex Bundle file to installation folders. Search for and replace BimlFlex Bundle files in project folders
* Read metadata for a Customer/Version from BimlFlex database and save to file for easy submission to Varigence BimlFlex Support team for issue resolution
