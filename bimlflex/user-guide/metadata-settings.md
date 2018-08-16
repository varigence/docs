---
uid: bimlflex-metadata-settings
title: Settings
---
# Metadata and framework settings in BimlFlex

This document outlines the metadata and framework settings available in BimlFlex.

These settings drive the behavior of the BimlFlex product.

By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc.

The settings defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors. Align these settings with the organizations best practices and environmental requirements.

The settings are available in the Settings sheet in the BimlFlex Excel metadata management tool.

![Settings Sheet -center -50%](images/bimlflex-ss-v5-excel-settings-sheet.png "Settings Sheet")

## Metadata column overview

| Key | Value |
| --- | ----- |
| SettingKey             | the setting Key, the internal key BimlFlex refers to, cannot be changed |
| SettingValue           | the configured value, can be updated to support a different design pattern or behavior when needed |
| SettingDatatype        | the data type the Setting Value uses. Needs to be a valid data type definition |
| SettingDefault         | the default value, where applicable|
| SettingDisplayGrouping | BimlFlex internal grouping |
| SettingDisplayOrder    | BimlFlex internal ordering |
| Description            | An optional description. The settings are described in this document |
| IsDeleted              | Flag to set if a setting should be considered deleted. Unused Settings should be left as is and not be deleted |

## Standard Settings

| SettingKey                            | SettingValue | SettingDataType | SettingDefault | SettingDisplayGrouping | SettingDisplayOrder | Description |
| ------------------------------------- | ------------ | --------------- | -------------- | ---------------------- | ------------------- | ----------- |
| AzureDestStorageAccountName           |  |  |  | Azure | 1 |  |
| AzureDestStorageAccountKey            |  |  |  | Azure | 2 |  |
| AzureDestContainerName                |  |  |  | Azure | 3 |  |
| AzureSourceStorageAccountName         |  |  |  | Azure | 4 |  |
| AzureSourceStorageAccountKey          |  |  |  | Azure | 5 |  |
| AzureSourceContainerName              |  |  |  | Azure | 6 |  |
| AzureArchiveStorageAccountName        |  |  |  | Azure | 7 |  |
| AzureArchiveStorageAccountKey         |  |  |  | Azure | 8 |  |
| AzureArchiveContainerName             |  |  |  | Azure | 9 |  |
| AzCopyPath                            | `C:\Program Files (x86)\Microsoft SDKs\Azure\AzCopy` |  |  | Azure | 20 |  |
| AzCopyConcurrency                     | `2` |  |  | Azure | 21 |  |
| AzCopyEnabled                         | `Y` |  |  | Azure | 22 |  |
| AzureExternalFileFormat               |  |  |  | Azure | 23 |  |
| DmAppendDim                           | `DIM` |  |  | DataMart | 1 |  |
| DmAppendExternal                      | `EXT` |  |  | DataMart | 2 |  |
| DmAppendFact                          | `FACT` |  |  | DataMart | 3 |  |
| DmInferDim                            | `N` |  |  | DataMart | 4 |  |
| DisplayDatabaseNameDm                 | `N` |  |  | DataMart | 5 |  |
| DisplaySchemaNameDm                   | `N` |  |  | DataMart | 6 |  |
| AppendSchemaDm                        | `N` |  |  | DataMart | 7 |  |
| DmAppendStaging                       | `STAGE` |  |  | DataMart | 8 |  |
| ApplyLookupFilterDm                   | `Y` |  |  | DataMart | 9 |  |
| DvAppendBridge                        | `BRD` |  |  | DataVault | 1 |  |
| DvAppendHub                           | `HUB` |  |  | DataVault | 2 |  |
| DvAppendLink                          | `LNK` |  |  | DataVault | 3 |  |
| DvAppendLinkSatellite                 | `LSAT` |  |  | DataVault | 4 |  |
| DisplayDatabaseNameRdv                | `N` |  |  | DataVault | 5 |  |
| DisplaySchemaNameRdv                  | `N` |  |  | DataVault | 6 |  |
| AppendSchemaRdv                       | `N` |  |  | DataVault | 7 |  |
| DvInferLinkHub                        | `N` |  |  | DataVault | 8 |  |
| DvUseCacheLookup                      | `N` |  |  | DataVault | 11 |  |
| DvPreviewSchema                       | `pdv` |  |  | DataVault | 12 |  |
| DvAppendPointInTime                   | `PIT` |  |  | DataVault | 13 |  |
| DvDefaultSchema                       | `rdv` |  |  | DataVault | 14 |  |
| DvAppendReference                     | `REF` |  |  | DataVault | 15 |  |
| DvAppendSatellite                     | `SAT` |  |  | DataVault | 16 |  |
| AppendSurrogateKey                    | `SK` | DataType="AnsiString" Length="40" |  | DataVault | 18 |  |
| ApplyDataTypeMappingRdv               | `Y` |  |  | DataVault | 19 |  |
| ApplyLookupFilterRdv                  | `Y` |  |  | DataVault | 20 |  |
| DvUseSequenceKeys                     | `N` | DataType="Int32" |  | DataVault | 21 |  |
| DvUseHubKeyedInstances                | `N` |  |  | DataVault | 22 |  |
| DvAccelerateLinkSatellite             | `N` |  |  | DataVault | 23 |  |
| DvAccelerateLinkEffectiveSatellite    | `Y` |  |  | DataVault | 24 |  |
| ConcatenatorBusinessKey               | `~` |  |  | Main | 1 |  |
| 7ZipPath                              | `C:\Program Files\7-Zip` |  |  | Main | 4 |  |
| ArchivePath                           | `C:\Varigence\Archive` |  |  | Main | 5 |  |
| RootPath                              | `C:\Varigence\BimlFlex` |  |  | Main | 10 |  |
| LookupCachePath                       | `C:\Varigence\Cache` |  |  | Main | 11 |  |
| ExportPath                            | `C:\Varigence\Export` |  |  | Main | 12 |  |
| ImportPath                            | `C:\Varigence\Import` |  |  | Main | 13 |  |
| ConfigurationPath                     | `C:\Varigence\Configurations` |  |  | Main | 14 |  |
| KeyEndsWith                           | `Id,Code,No,Key` |  |  | Main | 15 |  |
| LookupTablePattern                    | `lkp.@@this` |  |  | Main | 20 |  |
| HashBusinessKey                       | `N` |  |  | Main | 21 |  |
| LookupAddFilterTable                  | `N` |  |  | Main | 22 |  |
| BusinessKeyNullValue                  | `NVL` |  |  | Main | 23 |  |
| BusinessKeyToUpper                    | `Y` |  |  | Main | 24 |  |
| UseSqlCompatibleHash                  | `Y` |  |  | Main | 25 |  |
| ArchiveImport                         | `Y` |  |  | Main | 30 |  |
| ZipArchiveImport                      | `Y` |  |  | Main | 31 |  |
| DeleteImportFile                      | `N` |  |  | Main | 32 |  |
| UseBimlCatalog                        | `Y` |  |  | Main | 33 |  |
| HashAlgorithm                         | `SHA1` |  |  | Main | 34 |  |
| HashBinary                            | `N` |  |  | Main | 35 |  |
| HashLongStrings                       | `Y` |  |  | Main | 36 |  |
| ZipOutputFile                         | `Y` |  |  | Main | 38 |  |
| AppendBusinessKey                     | `BK` | DataType="AnsiString" Length="40" |  | NameConvention | 1 |  |
| StageWithColumnModelOverride          | `N` |  |  | NameConvention | 2 |  |
| StageWithObjectModelOverride          | `N` |  |  | NameConvention | 3 |  |
| UseRecordSourceAsAppend               | `N` |  |  | NameConvention | 4 |  |
| AppendDomain                          | `N` |  |  | NameConvention | 5 |  |
| SuffixOrPrefixObject                  | `P` |  |  | NameConvention | 6 |  |
| SuffixOrPrefixColumn                  | `S` |  |  | NameConvention | 7 |  |
| UseRecordSourceAsSchema               | `Y` |  |  | NameConvention | 8 |  |
| AppendProcedureName                   | `flex_` |  |  | NameConvention | 9 |  |
| EnableRollbackRdv                     | `N` |  |  | Orchestration | 1 |  |
| EnableRollbackStg                     | `N` |  |  | Orchestration | 2 |  |
| EnableRollbackPsa                     | `N` |  |  | Orchestration | 3 |  |
| EnableEndDateRdv                      | `N` |  |  | Orchestration | 4 |  |
| SnowflakeConfigFile                   | `%USERPROFILE%\.snowsql\config` |  |  | Snowflake | 1 |  |
| SnowflakeConnection                   | `bimlflex_db` |  |  | Snowflake | 2 |  |
| SnowSqlPath                           | `C:\Program Files\Snowflake SnowSQL` |  |  | Snowflake | 3 |  |
| SsisBufferTempStoragePath             |  |  |  | Ssis | 1 |  |
| SsisBLOBTempStoragePath               |  |  |  | Ssis | 2 |  |
| SsisCommandTimeout                    | `0` |  |  | Ssis | 3 |  |
| SsisMaxConcurrentExecutables          | `-1` |  |  | Ssis | 4 |  |
| SsisEngineThreads                     | `10` |  |  | Ssis | 5 |  |
| SsisDefaultBufferMaxRows              | `10000` |  |  | Ssis | 6 |  |
| SsisDefaultBufferSize                 | `10485760` |  |  | Ssis | 7 |  |
| SsisMaximumInsertCommitSize           | `2147483647` |  |  | Ssis | 8 |  |
| SsisRowsPerBatch                      | `500000` |  |  | Ssis | 9 |  |
| SsisCheckConstraints                  | `false` |  |  | Ssis | 10 |  |
| SsisAutoAdjustBufferSize              | `true` |  |  | Ssis | 11 |  |
| SsisDelayValidation                   | `true` |  |  | Ssis | 12 |  |
| SsisValidateExternalMetadata          | `true` |  |  | Ssis | 13 |  |
| ObjectNamePattern                     |  |  |  | Staging | 1 |  |
| SchemaNamePattern                     |  |  |  | Staging | 2 |  |
| DisplayDatabaseNameStg                | `N` |  |  | Staging | 3 |  |
| DisplaySchemaNameStg                  | `N` |  |  | Staging | 4 |  |
| AppendRecordSource                    | `N` |  |  | Staging | 5 |  |
| AppendSchemaStg                       | `N` |  |  | Staging | 6 |  |
| AppendSchemaPsa                       | `ods` |  |  | Staging | 7 |  |
| ApplyDataTypeMappingStg               | `Y` |  |  | Staging | 8 |  |
| PsaUseCacheLookup                     | `N` |  |  | Staging | 9 |  |
| PsaTruncateIfHasRows                  | `N` |  |  | Staging | 10 |  |
| PsaMergeAllRows                       | `N` |  |  | Staging | 11 |  |
| EnableEndDatePsa                      | `N` |  |  | Staging | 12 |  |
| DisableStgPsaOnly                     | `N` |  |  | Staging | 15 |  |
| DeleteDetectionEnabled                | `N` |  |  | Staging | 20 |  |
| DeleteObjectNamePattern               | ``@@this_DEL` |  |  | Staging | 21 |  |
| DeleteSchemaNamePattern               | `@@rs` |  |  | Staging | 22 |  |

## Detailed Description of Settings

The following lists the settings and their impact on the behavior of the solution

## Azure

Azure specific settings

### AzureDestStorageAccountName

The Azure Blob Storage Account Name to use for staging data as files in blob storage. This is the default destination for the source to staging file upload process for BimlFlex solutions using Azure SQL Data Warehouse as destination.

The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade.

### AzureDestStorageAccountKey

A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata.

### AzureDestContainerName

The Container Name to use for the destination process. This should be indicative of the purpose of the contents, such as `Staging`

### AzureSourceStorageAccountName

The Azure Blob Storage Account Name to use for using files in blob storage as a source. This is the default source for non-standard load process for BimlFlex solutions using Azure SQL Data Warehouse as destination.

The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade.

### AzureSourceStorageAccountKey

A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata.

### AzureSourceContainerName

The Container Name to use for the source process. This should be indicative of the purpose of the contents, such as `Source`

### AzureArchiveStorageAccountName

The Azure Blob Storage Account Name to use for archiving data as files in blob storage. This is the default archive destination for the staging to archive file move process for BimlFlex solutions using Azure SQL Data Warehouse as destination.

The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade.

### AzureArchiveStorageAccountKey

A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata.

### AzureArchiveContainerName

The Container Name to use for the archive process. This should be indicative of the purpose of the contents, such as `Archive`

### AzCopyPath

The file path to the local installation of the `AzCopy` Command. If installed in a non-default location, update this setting to match.

### AzCopyConcurrency

Specify the number of concurrent copy operations to start

### AzCopyEnabled

Should the generated files be uploaded using `AzCopy` as part of the SSIS Packages. Disable if the solution uses an alternative file management process.

### AzureExternalFileFormat

The External File Format definition to use.

## DataMart

Data Mart specific settings

### DmAppendDim

The string to append for dimension object names.

### DmAppendExternal

The string to append for External object names.

### DmAppendFact

The string to append for Fact names.

### DmInferDim

TODO: Add description

### DisplayDatabaseNameDm

TODO: Add description

### DisplaySchemaNameDm

TODO: Add description

### AppendSchemaDm

TODO: Add description

### DmAppendStaging

The string to append for the Data Mart staging object names.

### ApplyLookupFilterDm

Should the check for existing rows in the Data Mart load apply a filter condition joining the source table to the destination table to optimize memory usage. Use if source and destination is co-located in the same database or if cross database joins are possible.

## DataVault

Data Vault specific settings

### DvAppendBridge

The string to append for Bridge names.

### DvAppendHub

The string to append for Hub names.

### DvAppendLink

The string to append for Link names.

### DvAppendLinkSatellite

The string to append for Link Satellite names.

### DisplayDatabaseNameRdv

TODO: Add description

### DisplaySchemaNameRdv

TODO: Add description

### AppendSchemaRdv

TODO: Add description

### DvInferLinkHub

Should the Data Vault load from a staging table also load all secondary hubs that are part of any Link loads. For scenarios where the referenced table loads all keys as part of the same process it is normally possible to defer that load to the separate table.

Sample Scenario:

A source to staging to Data Vault load is done on the `Product` and `ProductCategory` tables from AdventureWorksLT.

The Product table populates the HUB_Product table. The ProductCategory table populates the HUB_ProductCategory table.
The Product table contains a FK constraint to the Product Category and the ProductCategoryId column in the Product table refers to the category a product is in.

The normal Link load would use the Product BK and the Product Category BK defined in the Product source table metadata to load the Link. It would not load any data in to the HUB_ProductCategory as that is being loaded from the ProductCategory source table.

As this is a database source it is probably safe to assume the referential integrity in the source means all ProductCategory BK data in the Product table is also in the ProductCategory table. As such it is unnecessary to load that data twice.

For other sources it might be necessary to load the HUB table from both sources, either due to late arriving data, missing data or as a prudent safety measure to ensure it is possible to inner join Link and Hubs without losing rows.

Setting the `DvInferLinkHub` to `Y` will allow the Product to populate the ProductCategory Hub as part of that source table load.

### DvUseCacheLookup

Allows using the file based cache lookup feature of SSIS for lookups.

### DvPreviewSchema

The schema name to use for the Data Vault Accelerator preview objects.

### DvAppendPointInTime

The string to append for Point In Time names.

### DvDefaultSchema

The default schema to use for the Raw Data Vault.

### DvAppendReference

The string to append for reference table names.

### DvAppendSatellite

The string to append for Satellite names.

### AppendSurrogateKey

The string to append for Surrogate Key column names.

### ApplyDataTypeMappingRdv

Should the Data Type Mappings be applied in to the Raw Data Vault. The [Data Type Mappings function](data-type-mappings.md) allow expansion of data types. This setting controls if these expanded data types are applied to the Data Vault.

### ApplyLookupFilterRdv

Should the check for existing rows in the staging to Data Vault load apply a filter condition joining the staging table to the destination Data Vault table to optimize memory usage. Use if staging and Data Vault is co-located in the same database or if cross database joins are possible.

### DvUseSequenceKeys

Should the Data Vault use Sequence Identifier Keys instead of Hash Keys for Surrogate keys.

*Note: Future Option*

### DvUseHubKeyedInstances

Should the Accelerator create Hub Keyed Instances to represent relationships rather than Link Satellites. 

*Note: Future Option*

### DvAccelerateLinkSatellite

Should the accelerator create Link Satellites for effectiveness and attributes from source metadata.

### DvAccelerateLinkEffectiveSatellite

Should the accelerator create effectiveness tracking Link Satellites (without attributes) for link relationships.

*Note: Future Option*

## Main

Generic settings

### ConcatenatorBusinessKey

The string value used in concatenating Business Keys. Defaults to `~`. For a source column with an `SsisExpression` using the `FlexToBk(@@rs,ProductId,OtherAttribute)` expression the resulting string Business Key would be similar to `AWLT~680~XYZ`, concatenating the record source of the connection, the ProductId column value and the OtherAttribute column value.

### 7ZipPath

The location of the 7-zip executable for zip operations requiring 7-zip.

### ArchivePath

The default path for file archive operations.

### RootPath

The default root path for any other BimlFlex related file operations.

### LookupCachePath

The default path for Cache files used in lookups.

### ExportPath

The default export path for file exports.

### ImportPath

The default import path for file imports.

### ConfigurationPath

The folder where SSIS configuration files are stored. Only used for non-project configuration scenarios, such as with SQL Server 2008 r2.

### KeyEndsWith

The strings that BimlFlex interprets as key identifier. For a source table with a ProductCategoryId that links to a ProductCategory table, BimlFlex will create a Model Reference called ProductCategory as name.

### LookupTablePattern

The table naming pattern for the Lookup Table.

### HashBusinessKey

Should the Business Key be hashed. This is done automatically for any project where the destination connection integration stage is Raw Data Vault as it is a requirement for a Data Vault load. For other load process designs the hashing is optional and controlled by this flag as well as the hashing configuration in the configuration sheet.

### LookupAddFilterTable

TODO: Add description

### BusinessKeyNullValue

What replacement value should be used for Null values in Business Keys.

### BusinessKeyToUpper

Should strings in the Business Key be upper cased. This is recommended and allows the standard SQL Server case insensitive collation to ingest business keys from multiple sources using different casings to be added to Hubs and treated as the same key without issues.

### UseSqlCompatibleHash

Should the inline hashing component use a hashing approach compatible with the SQL Server `HASHBYTES()` function. This is recommended so that the hashed values can be recreated using standard SQL queries when needed.

### ArchiveImport

Should imported files be archived after processing.

### ZipArchiveImport

Should imported files be compressed when they are archived.

### DeleteImportFile

Should imported files be deleted after processing.

### UseBimlCatalog

Should BimlFlex use the BimlCatalog database for logging, auditing and config variables. Disabling this also disable all dependent functionality.

### HashAlgorithm

The hashing algorithm to use.

BimlFlex currently only support SHA1. This setting is for future use.

### HashBinary

Should the generated hash value be stored as a binary representation rather than a string representation.

BimlFlex currently only support string representation. This setting is for future use.

### HashLongStrings

SQL Server 2014 and earlier has a limitation of 8000 bytes as input to the `HASHBYTES()` function. This setting allows BimlFlex to work around this limitation to support hashing long strings for older versions of SQL Server.

### ZipOutputFile

Should the created output file be zipped.

## NameConvention

Naming convention specific settings

### AppendBusinessKey

The string to append to Business Keys.

### StageWithColumnModelOverride

when defining a Model Override name for a column, setting this to `Y` will use the override name as the staging column name

### StageWithObjectModelOverride

when defining a Model Override name for an object, setting this to `Y` will use the override name as the staging table name

### UseRecordSourceAsAppend

The `UseRecordSourceAsAppend` Key specifies if the record source should be appended to the object name.

### AppendDomain

TODO: Add explanation

### SuffixOrPrefixObject

The `SuffixOrPrefixObject` key defines the behavior when naming objects.

Use Suffix or Prefix to define if the object identifiers are added before or after the object names in the solution.

`S` for Suffix Will generate `Entity_HUB`
`P` for Prefix Will generate `HUB_Entity`

### SuffixOrPrefixColumn

The `SuffixOrPrefixColumn` key defines the behavior when defining column names. Use Suffix or Prefix to define if the column identifiers are added after or before the column names in the solution.

`S` for Suffix will generate `Entity_BK`
`P` for Prefix Will generate `BK_Entity`

### UseRecordSourceAsSchema

Should the Record Source be used as the schema name for staging and persistent staging tables.

Example: Source table `SalesLT.Product` from the AdventureWorks LT source is staged in table `AWLT.Product`. This groups all source tables from each source together in a separate schema.

### AppendProcedureName

## Orchestration

Orchestration specific settings

### EnableRollbackRdv

Should the orchestration engine rollback committed changes to the RDV when failed loads are detected.

### EnableRollbackStg

Should the orchestration engine rollback committed changes to the Staging database when failed loads are detected.

### EnableRollbackPsa

Should the orchestration engine rollback committed changes to the PSA when failed loads are detected.

### EnableEndDateRdv

## Snowflake

Snowflake specific settings

### SnowflakeConfigFile

The location of the Snowflake configuration file.

More information: [https://docs.snowflake.net/manuals/user-guide/snowsql-config.html#snowsql-config-file](https://docs.snowflake.net/manuals/user-guide/snowsql-config.html#snowsql-config-file)

### SnowflakeConnection

The named connection name for the Snowflake connection for SnowSQL.

More information: [https://docs.snowflake.net/manuals/user-guide/snowsql-start.html#using-named-connections](https://docs.snowflake.net/manuals/user-guide/snowsql-start.html#using-named-connections)

### SnowSqlPath

The path to the local installation of the Snowflake SnowSQL CLI Client tool.

More information: [https://docs.snowflake.net/manuals/user-guide/snowsql.html](https://docs.snowflake.net/manuals/user-guide/snowsql.html)

## Ssis

SSIS specific settings

### SsisBufferTempStoragePath

The Buffer Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill buffer data to disk, update this value to a location with enough space and speed for the load to succeed.

### SsisBLOBTempStoragePath

The Blob Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill Blobs to disk, update this value to a location with enough space and speed for the load to succeed.

### SsisCommandTimeout

SSIS Command Timeout to use. Override the value here to change the default SSIS behavior.

### SsisMaxConcurrentExecutables

Max number of concurrent SSIS executables to employ. Override the value here to change the default SSIS behavior.

### SsisEngineThreads

Max number of SSIS engine threads to employ. Override the value here to change the default SSIS behavior.

### SsisDefaultBufferMaxRows

SSIS Data Flow configuration for Default Buffer Max Rows for supported destinations. Override the value here to change the default SSIS behavior.

### SsisDefaultBufferSize

SSIS Data Flow configuration for Default Buffer Size for supported destinations. Override the value here to change the default SSIS behavior.

### SsisMaximumInsertCommitSize

SSIS Data Flow configuration for Maximum Insert Commit Size for supported destinations. Override the value here to change the default SSIS behavior.

### SsisRowsPerBatch

SSIS Data Flow configuration for Rows Per Batch for supported destinations. Override the value here to change the default SSIS behavior.

### SsisCheckConstraints

SSIS Destination configuration for checking constraints. Defaults to `False` as that is recommended for data warehouse destinations.

### SsisAutoAdjustBufferSize

SSIS Auto Adjust Buffer Size configuration for supported SQL Server versions.

### SsisDelayValidation

Should generated SSI packages use delayed validation for metadata validation.

### SsisValidateExternalMetadata

Should generated SSI packages validate external metadata.

## Staging

Staging specific settings

### ObjectNamePattern

Specific override behavior for the object name for staging tables etc. Use short codes such as `@@this` and `@@rs` for easy access to the BimlFlex object model.

### SchemaNamePattern

Specific override behavior for the schema name for staging tables etc. Use short codes such as `@@this` and `@@rs` for easy access to the BimlFlex object model.

### DisplayDatabaseNameStg

Controls if the source database name should be included in the generated SSIS package name.
E.g. the default `EXT_AWLT_Customer` package name would be named `EXT_AWLT_AdventureWorksLT2012_Customer` when set to `Y`

### DisplaySchemaNameStg

Controls if the source schema name should be included in the generated SSIS package name.
E.g. the default `EXT_AWLT_Customer` package name would be named `EXT_AWLT_SalesLT_Customer` when set to `Y`

### AppendRecordSource

Should the Record Source Code from the connection be appended to the staging object name. This code is normally used as the schema name but can be tweaked to match a specific naming convention.

### AppendSchemaStg

Should the source Schema be appended to the object name in the staging layer. The default naming convention is to name tables using the Record Source and object name. The AdventureWorks LT Source table `SalesLT.Product` is normally staged in the `AWLT.Product` table. For sources with multiple schemas, enable this to distinguish between tables. For the product table the new staging table name would be `AWLT.SalesLT_Product`

### AppendSchemaPsa

The naming convention to add to the PSA objects when Staging and Persistent Staging are co-located in the same database.

### ApplyDataTypeMappingStg

Should the Data Type mappings that are applied to source tables be used in the Staging and Persistent Staging databases. As the Data Type mapping function is normally used to accommodate changes in the source this setting should normally be set to `Y`

### PsaUseCacheLookup

Should the PSA lookup cache the data to disk in SSIS. Use this if it is not possible to use the normal lookup behavior due to memory constraints.

### PsaTruncateIfHasRows

Should the PSA table be truncated if it already has rows loaded. For normal PSA behavior this should be set to `N`. for specific requirements where previously loaded rows should be discarded, set this to `Y`

### PsaMergeAllRows

TODO: Add description

### EnableEndDatePsa

Set to `Y` to enable end dating of rows in the PSA. This will allow timelines to be maintained in the PSA area. Using end dating is a more expensive load process but allows queries to directly reuse complete effective from and to dates for each row. Disable this to use an insert-only approach for the PSA for optimized load performance.

### DisableStgPsaOnly

Set to `Y` to disable the staging layer and only persist changes to the PSA layer directly.

### DeleteDetectionEnabled

Should BimlFlex apply a separate key load pattern that will enable detection of hard deletes in the source.

### DeleteObjectNamePattern

the name to use for the Delete objects when using Delete detection. `@@this_DEL` will us the current object name (table name) and append `_DEL` at the end. Update this to use a specific naming convention for delete tables.

### DeleteSchemaNamePattern

The name to use for the Delete objects schema when using Delete detection. `@@rs` uses the Record Source of the connection as schema. (This is the same default behavior as for the Staging tables). Update this to use a specific schema for delete tables.