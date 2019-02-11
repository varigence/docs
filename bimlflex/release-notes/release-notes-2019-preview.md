---
uid: bimlflex-2019-preview-release-notes
name: BimlFlex 2019 Preview Release Notes
---
# BimlFlex 2019 Preview Release Notes

> [!NOTE]
> Please make sure databases and projects have been backed up prior to upgrading or applying any updates.
> Please email bimlflex-support@varigence.com should you experience any issues while upgrading.

> [!IMPORTANT]
> The 2019 Preview release allows users to preview the upcoming BimlFlex and BimlStudio 2019 release. Apply the preview release in a testing or development environment.

## BimlFlex 2019 Preview

The preview release has preview versions of BimlStudio and the BimlFlex App and the BimlFlex Excel Add-in.

The preview release has updated versions of the SSIS Custom components.

> [!NOTE]
> 2019 Preview release downloads
>
> * BimlFlex App 2019 preview: [https://varigence.com/downloads/download/bimlflexsetup_preview_2019.exe](https://varigence.com/download/bimlflexsetup_preview_2019.exe)
> * BimlFlex Excel Add-in 2019 Preview: [https://varigence.com/downloads/download/bimlflexaddinsetup_preview_2019.exe](https://varigence.com/download/bimlflexaddinsetup_preview_2019.exe)
> * BimlStudio 2019 Preview: [https://varigence.com/download/bimlstudiosetup_preview_2019.exe](https://varigence.com/download/bimlstudiosetup_preview_2019.exe)

> [!NOTE]
> The preview release contain features that require an update to the BimlFlex SSIS Custom Components.
> Please download and install the current custom components for the corresponding SQL Server version:
>
> * SQL Server 2008r2: [https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip)
> * SQL Server 2012: [https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip)
> * SQL Server 2014: [https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip)
> * SQL Server 2016: [https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip)
> * SQL Server 2017: [https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip)

## Upgrading to the Preview

The process to upgrade to the preview release consists of the following steps:

1. Download and install the BimlFlex App preview
1. Download and install the BimlFlex Excel Add-in preview
1. Download and install the BimlStudio preview
1. Download and install the correct version of the SSIS Custom components matching the SQL Server version in use
1. Upgrade databases and Bundles to the Cumulative Upgrade Bundle version. Open the existing project, click the `Upgrade Assets` menu item, change the channel to the `Cumulative Channel`. More information on the channel choice is available here: @bimlflex-upgrade#upgrade-to-cumulative-update-or-beta-release
1. Restart BimlStudio and reopen the project

## Preview Features

* Add: The BimlFlex App is available in preview, this app allows metadata management similar to the Excel Add-in, less the dependency on Excel. More information on the BimlFlex App is available here: @bimlflex-app-overview
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