---
uid: bimlflex-cumulative-update-bundle-release-notes
name: BimlFlex Cumulative Update Bundle Release Notes
---
# Cumulative Update Bundle Release Notes

The Cumulative Update Bundle channel is available as an option in the Upgrade Assets Bundle in BimlStudio 2018 R3 and later. Use this to apply the latest updates and fixes before they are included in public Bundle updates.

> [!NOTE]
> Please make sure you have a backup of your database and projects prior to upgrading or applying any updates. We also recommend that your project and bundles are checked into your source control.
> Please email bimlflex-support@varigence.com should you experience any issues while upgrading.

> [!IMPORTANT]
> The Cumulative Update Bundle channel allows users to apply fixes to identified issues. Apply updates in a testing or development environment before committing to a production environment. Only apply the Cumulative Update if there are identified issues that have been documented as addressed in these release notes.

## Bundle vNext

> [!IMPORTANT]
> This Bundle contains updates that require an update to the BimlFlex Excel plug-in.
> Please download and install build 63TBA or later:
> * BimlFlex: [https://varigence.com/downloads/bimlflexsetup_5.0.63TBA.0.exe](https://varigence.com/downloads/bimlflexsetup_5.0.63TBA.0.exe)

* Update: the `IsAltBusinessKey` metadata entity has been renamed to `IsSourceKey` to better reflect the meaning. This metadata attribute reflects the source Primary Key definition and is used for persistent staging tables when the defined Primary Key is not persisted. This is a common scenario for Data Vault modelling. For Data Vault, the Business Key is also defined as the Primary Key for each source object. This column is normally not persisted. The columns marked as `IsSourceKey` will be used as the Primary Keys for the Persistent table in this scenario.
* Update: the `SourceErrorHandling` Extension Point is now included in the placeholder information in the preview expanded BimlScript for packages. The `inputPath` variable being passed to the Extension Point and exemplified in the sample code as: `<InputPath OutputPathName="<#=inputPath #>" />` has been updated to include the `.Output` part of the Path specification. Existing usage of the Extension Point that previously added this syntax manually can now be simplified. The behavior now match the expected syntax of the sample code.
* Add: additional settings for controlling BimlFlex behavior:
  * `ConvertGuidToString` - This controls if a source column of type Guid/Uniqueidentifier should be automatically converted to String or not. For legacy reasons this was automatically performed. The current generation of BimlFlex, SSIS and SQL Server can accommodate Guid columns into the data warehouse, so for implementations that would like to reuse the Guid data type can set this setting to no, `N`
  * `AzureAllowPolybase` - Should the Azure SQL Data warehouse process use PolyBase
  * `AzureStageOnExtract` - Should the Azure SQL Data warehouse process create a staging table and stage data directly to this table rather than go through the PolyBase, external table process. This setting replaces the `AzureCreateStageTables` setting
  * `AzureExternalFileConversion` - Should the External Tables used to access files in blob storage apply the string manipulation conversions used to accommodate shortcomings in PolyBase.

## Bundle 63714

* Update: an issue with missing references for modelling scenarios with multiple Data Vault projects and where a Hub was referenced in a separate project with a separate Satellite load has been addressed.
* Add: Additional Extension Points for the Delete Detection pattern has been added
  * `DeleteInitializeRawFileDataflowOverride`
  * `DeleteDetectDataflowOverride`
  * `DeleteDetectRawFileOverride`
  These are available to override the default behavior for parts of the Delete Detection process when needed.
* BimlCatalog Updates: The BimlCatalog orchestration stored procedures `ssis.LogExecutionEnd` and  `ssis.LogExecutionError` has been updated to better support the abort closing of legacy runs. Previously the orchestration might get stuck in a state where a previously failed run caused all future runs to assume they should abort. The updated procedures will properly close any legacy run as aborted when a new run ends or errors.
* Update: The Documentation > Preview > Database Schema Diagram will now also display the Data Vault Preview schema.

## Bundle 63707

* Update: to the Data Vault Publisher. Previously some scenarios would result in the Publish failing due to the updated metadata model entity names.
* Add: the inclusion of a missing c# code file reference that resulted in a missing file error in certain scenarios.
* Update: ADF source to staging for projects that include an Azure SQL Data Warehouse destination now has the option to load directly to staging tables. The table scripts are included in the Azure SQLDW table create script function and includes both staging and persistent staging tables. The load process includes both the required copy activity for the source to staging and the persistence script to update the PSA. ADF staging table creation is controlled by the `AzureCreateStageTables` setting.
* Update: Fix a scenario where the Data Vault Publisher wouldn't take the new Expression columns into account.

## Bundle 63704

> [!IMPORTANT]
> This Bundle introduces placeholder metadata entities for Azure Data Factory and requires an update to the BimlFlex Excel plug-in. Please download and install build 63513 or later
> * BimlFlex: [https://varigence.com/downloads/bimlflexsetup_5.0.63513.0.exe](https://varigence.com/downloads/bimlflexsetup_5.0.63513.0.exe)

This Bundle introduces additional metadata attributes for columns and configurations that is planned to be used in the Azure Data Factory patters, such as `AdfDataFlowExpression`. It also renames the `SsisExpression` attribute to `SsisDataFlowExpression`. The Excel plugin, the Bundle as well as the database all need to be updated to accommodate this update.

> [!NOTE]
> Any existing code or override expression that use SSIS expression need to be updated to use the new naming convention `SsisDataflowExpression` instead of `SsisExpression`. This is commonly used in Attribute overrides for audit columns, such as `RowEffectiveFromDate_SsisDataflowExpression`. An update is included in the new version of the database, however for scenarios that aren't picked up by that update, a manual update of bespoke expressions are required.

* Update: Salesforce source query parameter to use UTC format instead of the provided local time default value. Previously, due to the different ways datetimes are presented by the Salesforce interface there were scenarios where the process used local and UTC times inconsistently.
* Add: TargetPreProcess and TargetPostProcess to Data Vault and Data Mart Dataflow to accommodate Source and Target table parameters
* Update: Move the CDC Get MAX Lsn up in Dataflow to better accommodate changes during InitialLoad.
* Add: MaximumInsertCommitSize, BatchSize, CheckConstraints to the Source - Staging template for OLEDB Destination
* Update: accommodate a scenario where duplicate Business Keys could be present in Reference tables in the Data Vault ELT pattern
* Update: InitializeOverride ExtensionPoint to include Batch inheritance

## Bundle 63604

New Feature: The SSIS Custom components and corresponding settings have been updated to support additional hashing algorithms as well as both string and binary hash representations. The following Hash algorithms are now valid options for the Settings Key `HashAlgorithm`:

* `MD5`
* `SHA1`
* `SHA2_256`
* `SHA2_512`

Changing the Hash algorithm will also automatically change the data types used for the columns.

The Settings Key `HashBinary` (`Y`/`N`) controls if the hash should be represented in the database as a string or as a binary value. A binary value will normally use half the space of the string representation.

These hashing features are included in the latest SSIS Custom Components available for download here:

* [https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip)
* [https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip)
* [https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip)
* [https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip)
* [https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip)

Other updates:

* Add: Support for additional hashing algorithms as well as option for string or binary hash representation. This update requires updated SSIS Custom Components, see above.
* Update: A scenario where the SSDT project was generated without a valid project definition was addressed and it is now possible to review the project settings for the generated SSDT projects in Visual Studio 2017 without issues.
* Update: A scenario where LSAT DV cache keys were invalid for Driving Key relationships was addressed.

## Bundle 63528

* Update: the Package Variable Extension Point now overrides MDS system variables as expected. It is possible to address the following MDS-specific system variables: `MdsBatchTag`, `MdsVersionName`, `MdsLogFlag`, `MdsImportType`
* Update: superfluous file cache entities are no longer created for Delete detection objects when both the `PsaUseCacheLookup` and `DeleteDetectionEnabled` settings are set to `Y`
* Update: The `RowChangeType` column is now included in the Row Hash for ELT load processing. This allows easy change detection for rows where only the Change Type indicator has been changed.
* Add: Support for column dependency resolution for Business Key columns in delete detection load packages. Dependent columns are now identified and added to the delete detection packages as Derived Column transformations.
* Update: SSIS Custom Components now has updated support for a range of configurable hashing options, including MD5, SHA1, SHA256, SHA512 for both binary hash values and string representations.

## Bundle 63516

* Add: Support for the ADF Integration template artefact generation. Use the `ADF Source -> Target` Project Integration Template to define an ADF project. The ADF process currently supports SQL-based sources to either Azure Blob Storage or Azure Data Lake Storage file destinations