---
uid: bimlflex-release-notes
name: BimlFlex Release Notes
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up prior to upgrading
> Please email bimlflex-support@varigence.com with any installation or upgrade issues

## BimlFlex 2019

> [!IMPORTANT]
> BimlFlex 2019 is installed and upgraded through a consolidated installer, allowing new installations and upgrades to be completely managed through a single experience.
> This includes upgrading existing databases and projects
>
> Please download the 2019 release from the following link:
>
> * Consolidated installer: [https://www.varigence.com/downloads/bimlflexdevsetup.exe](https://www.varigence.com/downloads/bimlflexdevsetup.exe)

## Bundle 64029

* Add: Full support for BimlFlex App. Use the BimlFlex App to manage metadata and to perform Data Vault Acceleration
* Add: Support for BimlStudio 2019
* Update: Data Vault Acceleration is now performed through the BimlFlex App for maximum convenience
* Update: BimlFlex Excel Add-in is supported for legacy installations, but usage of the BimlFlex App is recommended for all users
* Update: BimlFlex Excel Add-in support for Entity Archive action has been simplified to only selected entities
* Update: BimlStudio no longer includes integrated upgrade features, all upgrades to applications, components, databases, bundle files are performed through the separate consolidated installer

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
