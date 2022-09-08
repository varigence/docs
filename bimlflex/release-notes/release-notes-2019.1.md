---
uid: bimlflex-release-notes-2019
name: BimlFlex Release Notes 2019
---
# Release Notes 2019

> [!NOTE]
> Please note the current Release Notes are available here: [BimlFlex Release Notes](xref:bimlflex-release-notes-overview)

## BimlFlex 2019

Legacy Release Notes for BimlFlex 2019

## Build 5.0.64335.0, release date: 15 October 2019

* Add: The BimlFlex App now provides a connection string builder for connections. Click the edit icon in the connection string field to open
* Add: New setting `DvProcessOnStage` to process DV loads for the source file once the files are uploaded to staging. This allows the full end to end load from source to staging blob files to Data Vault to happen in one SSIS package. (only For Azure SQL Data Warehouse)
* Add: New setting `AzureCreateDummyFile` option to upload a placeholder file to blob storage. This allows PolyBase to function without issues when all data files are moved out of the staging area. (only For Azure SQL Data Warehouse)
* Add: New Extension Points `AzurePreArchiveStage` and `AzurePostArchiveStage` for extending the archive process in Azure SQL Data Warehouse loads.
* Update: additional support for binary data types for Hash Distribution Keys for Azure SQL Data Warehouse.
* Update: renamed setting `DmAppendExternal` to `AppendNameExternal`
* Add: new setting `AppendNameLanding` for ADF Copy flows.
* Add: additional support for Hash Distribution in Data Vault joins when performing end dating.
* Add: Additional metadata attributes for connection strings.
* Update: in certain scenarios, the Schema Diagram in the BimlFlex did not display any diagram. This has been addressed.
* Update: in certain scenarios, the Model Grouping drop-down in the BimlFlex App, Data Vault Accelerator did not apply the grouping as expected. This has been addressed.

download links to this build:

* [bimlflexdevsetup_5.0.64335.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64335.0.exe)
* [bimlflexruntimesetup_5.0.64335.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64335.0.exe)

## Build 5.0.64317.0, release date: 27 September 2019

* Update: An installation issue where some users experience a corrupted dependency file for BimlFlex App has been addressed

download links to this build:

* [bimlflexdevsetup_5.0.64317.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64317.0.exe)
* [bimlflexruntimesetup_5.0.64317.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64317.0.exe)

## Build 5.0.64313.0, release date: 26 September 2019

* Update: A scenario that could leave the BimlFlex App Accelerator empty in certain scenarios has been addressed
* Update: A scenario where the SSDT project was not using the correct template has been addressed
* Update: A scenario where PIT Stored Procedures produced unexpected results when no Satellites were selected has been addressed

download links to this build:

* [bimlflexdevsetup_5.0.64313.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64313.0.exe)
* [bimlflexruntimesetup_5.0.64313.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64313.0.exe)

## Build 5.0.64311.0, release date: 25 September 2019

* Add: BimlFlex can now generate Snowflake Stored Procedures to push down logic into the Snowflake engine. As Snowflake previously didn't support Stored Procedures, the BimlFlex process would instead run the required queries from the orchestration engine as needed. Use the `Generate Scripts` menu to create the Stored Procedures.
* Update: The BimlStudio `Generate Scripts` Menu option has a new option for `Snowflake Procedure Script`
* Add: New advanced targeting system for Extension Points. It is now possible to assign a target name for one or more entities and use that attribute as the Extension Point target. This is useful in scenarios where a single Extension Point should be used in multiple location. E.g. a Batch pre-processing Extension Point can be added to any number of Batches by setting the Extension Point target to an attribute associated with the Batches in Scope. Use the `ExtensionPointTarget` AttributeKey and assign the target name in the AttributeValue.
* Add: The BimlFlex App now supports touch mode in some UI interactions. Switch on Touch Mode in the BimlFlex App under settings to allow usage of touch gestures, such as double-tap instead of Ctrl+click.
* Update: Unicode file objects no longer complain about missing code page definitions for the object.
* Update: In certain scenarios the `AddRowHashKeyIndex` setting, which allows an additional Unique Constraint in the Staging Layer based on the Integration Key Hash, would create the constraint on the table without the RowEffectiveFrom column. This has been reviewed and the Constraint will now include both columns.
* Update: The Data Vault accelerator now supports removal of the Record Source name from Link Satellites through the Accelerator UI in the same was as for Hub Satellites.
* Update: The Data Vault accelerator now supports adding individual Source Keys to the Hub as a composite key. This feature is optional for scenarios where the Integration Key should be complimented with the individual key columns in their source formats.
* Update: The Data Vault Accelerator has been removed from the BimlStudio Ribbon UI. The updated Accelerator has features that can only be supported in the BimlFlex app. Use the BimlFlex app for all Data Vault Acceleration.
* Update: For certain ELT scenarios, the Link Satellite End Dating and Driving Key logic produced unexpected results. This has been addressed and updated logic for these scenarios is included in this version.
* Update: A scenario where ELT processing in Azure SQL Data Warehouse was using Replicated temporary tables has been updated to use Round Robin distribution for these temporary tables.
* Update: Adding the product key in the `msbuild` response file `*.mst.resp` using the `/p:LicenseKey="YourKeyHere"` now works as expected for automated build/build agent scenarios.
* Update: BimlFlex App Performance – Most column updates do not need to reload the columns dataset from the database.
* Add: BimlFlex App Notification Log
* Add: BimlFlex Export Metadata now available from the App Dashboard
* Update: BimlFlex App Graph layout improvements - Re-Layout dependent lists into top-level tabs with tab-context sensitive action buttons to prevent confusion
* Update: BimlFlex App - Show dependent entity counts on tabs
* Update: BimlFlex now use the wording `Locally` for Exclude and Connection String when `Use My Exclusions` and `Use My Connection Strings` are active for the session
* Add: BimlFlex App now supports printing layout graphs to an SVG image
* Update: BimlFlex App Now provides a `Navigate to` for Object and Column from graphs
* Update: BimlFlex App: Add `Ctrl+A` (Select All) shortcut key combination to allow select all graph tables (Move all selected with Shift+Mouse move)
* Update: BimlFlex App: The accelerator pane splitter is now draggable
* Update: BimlFlex App: Allow column ordinal sort in graphs using column drag-drop
* Update: BimlFlex App: Allow add references in graphs using column drag-drop
* Update: BimlFlex App: Allow `Ctrl+S` (Save) shortcut key combination on all metadata screens to save changes
* Update: BimlFlex App: Allow add and remove record source on Link Satellites
* Update: BimlFlex App: Metadata Import uses table chunking and provides better progress feedback.
* Update: BimlFlex App: Fix issue where deselecting on sub type in treeview deselects all
* Update: BimlFlex App: updates to error notifications from SQL with more helpful information
* Update: BimlFlex App: Default version selection on customer change now use the `IsCurrent` flag
* Update: BimlFlex App: Updated to prevent Object.Columns.Object circular references
* Update: SSDT Project - An issue where, in some scenarios, the SSDT project generated table definitions with duplicate references to the RowEffectiveFrom metadata column has been resolved

download links to this build:

* [bimlflexdevsetup_5.0.64311.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64311.0.exe)
* [bimlflexruntimesetup_5.0.64311.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64311.0.exe)

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

* Update: CI/CD and command line builds require an update to the response files to work with BimlFlex. Please see [BimlFlex Continuous Integration and Continuous Delivery](xref:bimlflex-ssis-continuous-integration-and-continuous-delivery) for new template samples
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

Varigence provides remote support to accommodate this upgrade for any affected customer under current support and maintenance, please contact support@bimlflex.com for more information.

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

More information on the hashing approach for SQL compatible hashing can be found here: [Hashing in BimlFlex](xref:bimlflex-data-vault-hashing)

* Update: the `IsAltBusinessKey` metadata entity has been renamed to `IsSourceKey` to better reflect the meaning. This metadata attribute reflects the source Primary Key definition and is used for persistent staging tables when the defined Primary Key is not persisted. This is a common scenario for Data Vault modeling. For Data Vault, the Business Key is also defined as the Primary Key for each source object. This column is normally not persisted. The columns marked as `IsSourceKey` will be used as the Primary Keys for the Persistent table in this scenario.
* Update: the `SourceErrorHandling` Extension Point is now included in the placeholder information in the preview expanded BimlScript for packages. The `inputPath` variable being passed to the Extension Point and exemplified in the sample code as: `<InputPath OutputPathName="<#=inputPath #>" />` has been updated to include the `.Output` part of the Path specification. Existing usage of the Extension Point that previously added this syntax manually can now be simplified. The behavior now match the expected syntax of the sample code.
* Add: additional settings for controlling BimlFlex behavior:
  * `ConvertGuidToString` - This controls if a source column of type Guid/Uniqueidentifier should be automatically converted to String or not. For legacy reasons this was automatically performed. The current generation of BimlFlex, SSIS and SQL Server can accommodate Guid columns into the data warehouse, so for implementations that would like to reuse the Guid data type can set this setting to no, `N`
  * `AzureAllowPolybase` - Should the Azure SQL Data warehouse process use PolyBase
  * `AzureStageOnExtract` - Should the Azure SQL Data warehouse process create a staging table and stage data directly to this table rather than go through the PolyBase, external table process. This setting replaces the `AzureCreateStageTables` setting
  * `AzureExternalFileConversion` - Should the External Tables used to access files in blob storage apply the string manipulation conversions used to accommodate shortcomings in PolyBase.
* Update: The rename of the `SsisExpression` attribute to `SsisDataFlowExpression` was not updated for all custom attributes when the change was introduced. This database update to the BimlFlex database includes an update to any existing custom attribute to the new format.
* Update: an issue with missing references for modeling scenarios with multiple Data Vault projects and where a Hub was referenced in a separate project with a separate Satellite load has been addressed.
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
