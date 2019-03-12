---
uid: bimlflex-metadata-settings
title: BimlFlex Settings
---
# Metadata and framework settings

This document outlines the metadata and framework settings available in BimlFlex.

These settings drive the behavior of the BimlFlex product.

By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc.

The settings defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors. Align these settings with the organizations best practices and environmental requirements.

The settings are available in the Settings sheet in the BimlFlex Excel metadata management tool.

![Settings Sheet -center -50%](images/bimlflex-ss-v5-excel-settings-sheet.png "Settings Sheet")

## Metadata column overview

| Key                    | Value |
| ---------------------- | ----- |
| SettingKey             | the setting Key, the internal key BimlFlex refers to, cannot be changed. Is used in bespoke code |
| SettingValue           | the configured value, can be updated to support a different design pattern or behavior when needed |
| SettingDatatype        | the data type the Setting Value uses. Needs to be a valid data type definition |
| SettingDefault         | the default value, where applicable |
| SettingDisplayGrouping | BimlFlex internal grouping |
| SettingDisplayOrder    | BimlFlex internal ordering |
| Description            | Description of the setting. Settings have default descriptions |
| IsDeleted              | Flag to set if a setting should be considered deleted. Unused Settings should be left as is and not be deleted |

## Standard Settings

| SettingKey                            | SettingValue | SettingDataType | SettingDefault | SettingDisplayGrouping | SettingDisplayOrder | Description |
| ------------------------------------- | ------------ | --------------- | -------------- | ---------------------- | ------------------- | ----------- |
| AzureDestStorageAccountName           |  |  |  | Azure | 1 | The Azure Blob Storage Account Name to use for staging data as files in blob storage. This is the default destination for the source to staging file upload process for BimlFlex solutions using Azure SQL Data Warehouse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureDestStorageAccountKey            |  |  |  | Azure | 2 | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureDestContainerName                |  |  |  | Azure | 3 | The Container Name to use for the destination process. This should be indicative of the purpose of the contents, such as `Staging` |
| AzureSourceStorageAccountName         |  |  |  | Azure | 4 | The Azure Blob Storage Account Name to use for using files in blob storage as a source. This is the default source for non-standard load process for BimlFlex solutions using Azure SQL Data Warehouse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureSourceStorageAccountKey          |  |  |  | Azure | 5 | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureSourceContainerName              |  |  |  | Azure | 6 | The Container Name to use for the source process. This should be indicative of the purpose of the contents, such as `Source` |
| AzureArchiveStorageAccountName        |  |  |  | Azure | 7 | The Azure Blob Storage Account Name to use for archiving data as files in blob storage. This is the default archive destination for the staging to archive file move process for BimlFlex solutions using Azure SQL Data Warehouse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureArchiveStorageAccountKey         |  |  |  | Azure | 8 | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureArchiveContainerName             |  |  |  | Azure | 9 | The Container Name to use for the archive process. This should be indicative of the purpose of the contents, such as `Archive` |
| AzureAllowPolybase                    | `N` |  |  | Azure | 10 | PLACEHOLDER: Should the Azure-based Extract and Load process use PolyBase or load directly to destination Data Warehouse |
| AzureStageOnExtract                   | `Y` |  |  | Azure | 11 | PLACEHOLDER: Should the Azure-based Extract and Load process stage the extracted data in the destination Data Warehouse |
| AzureExternalFileConversion           | `Y` |  |  | Azure | 12 | The default extraction process for source to Blob-storage files applies several conversations as default to create files supported by PolyBase. This setting allows control of this conversion process |
| AzCopyPath                            | `C:\Program Files (x86)\Microsoft SDKs\Azure\AzCopy` |  |  | Azure | 20 | The file path to the local installation of the `AzCopy` Command. If installed in a non-default location, update this setting to match |
| AzCopyConcurrency                     | `2` |  |  | Azure | 21 | Specify the number of concurrent AzCopy operations to start |
| AzCopyEnabled                         | `Y` |  |  | Azure | 22 | Should the generated files be uploaded using `AzCopy` as part of the SSIS Packages. Disable if the solution uses an alternative file management process |
| AzureExternalFileFormat               |  |  |  | Azure | 23 | The External File Format definition to use |
| AzureDataFactoryName                  |  |  |  | Azure | 31 | The default Data Factory Name to use |
| AzureIntegrationRuntime               |  |  |  | Azure | 32 | The default Data Factory Integration Runtime to use for Linked Services |
| AzureKeyVault                         |  |  |  | Azure | 33 | The default Key Vault to use for Linked Services |
| DmAppendDim                           | `DIM` |  |  | DataMart | 1 | The string to append for dimension object names |
| DmAppendExternal                      | `EXT` |  |  | DataMart | 2 | The string to append for External object names |
| DmAppendFact                          | `FACT` |  |  | DataMart | 3 | The string to append for Fact names |
| DmInferDim                            | `N` |  |  | DataMart | 4 | Should the Data Mart process infer Dimension Members |
| DisplayDatabaseNameDm                 | `N` |  |  | DataMart | 5 | Should the Database name be included in names for objects in the Data Mart |
| DisplaySchemaNameDm                   | `N` |  |  | DataMart | 6 | Should the Schema name be included in names for objects in the Data Mart |
| AppendSchemaDm                        | `N` |  |  | DataMart | 7 | Should the Schema name be appended to objects in the Data Mart |
| DmAppendStaging                       | `STAGE` |  |  | DataMart | 8 | The string to append for the Data Mart staging object names |
| ApplyLookupFilterDm                   | `Y` |  |  | DataMart | 9 | Should the check for existing rows in the Data Mart load apply a filter condition joining the source table to the destination table to optimize memory usage. Use if source and destination is co-located in the same database or if cross database joins are possible |
| DvAppendBridge                        | `BRD` |  |  | DataVault | 1 | The string to append for Bridge names |
| DvAppendHub                           | `HUB` |  |  | DataVault | 2 | The string to append for Hub names |
| DvAppendLink                          | `LNK` |  |  | DataVault | 3 | The string to append for Link names |
| DvAppendSameAsLink                    | `SAL` |  |  | DataVault | 4 | The string to append to Same As Link names |
| DvAppendHierarchyLink                 | `HAL` |  |  | DataVault | 5 | The string to append to Hierarchy Link names |
| DvAppendLinkSatellite                 | `LSAT` |  |  | DataVault | 6 | The string to append for Link Satellite names |
| DisplayDatabaseNameRdv                | `N` |  |  | DataVault | 7 | Should the database name be displayed in the Raw Data Vault |
| DisplaySchemaNameRdv                  | `N` |  |  | DataVault | 8 | Should the schema name be displayed in the Raw Data Vault |
| AppendSchemaRdv                       | `N` |  |  | DataVault | 9 | Appends the Schema to the accelerated Data Vault objects, for the source table `SalesLT.Product` the Hub accelerated would be named `HUB_SalesLT_Product` rather than the default `HUB_Product` |
| DvInferLinkHub                        | `N` |  |  | DataVault | 10 | Should the Data Vault load from a staging table also load all secondary hubs that are part of any Link loads. For scenarios where the referenced table loads all keys as part of the same process it is normally possible to defer that load to the separate table.  Sample Scenario:  A source to staging to Data Vault load is done on the `Product` and `ProductCategory` tables from AdventureWorksLT.  The Product table populates the HUB_Product table. The ProductCategory table populates the HUB_ProductCategory table.  The Product table contains a FK constraint to the Product Category and the ProductCategoryId column in the Product table refers to the category a product is in.  The normal Link load would use the Product BK and the Product Category BK defined in the Product source table metadata to load the Link. It would not load any data in to the HUB_ProductCategory as that is being loaded from the ProductCategory source table.  As this is a database source it is probably safe to assume the re |
| DvUseCacheLookup                      | `N` |  |  | DataVault | 11 | Enables using the file based cache lookup feature of SSIS for lookups.  Cache files will be created as part of the SSIS process and used for the lookups. In-memory lookups generally perform better and require more available memory |
| DvPreviewSchema                       | `pdv` |  |  | DataVault | 12 | The schema name to use for the Data Vault Accelerator preview objects |
| DvAppendPointInTime                   | `PIT` |  |  | DataVault | 13 | The string to append for Point In Time names |
| DvDefaultSchema                       | `rdv` |  |  | DataVault | 14 | The default schema to use for the Raw Data Vault |
| DvAppendReference                     | `REF` |  |  | DataVault | 15 | The string to append for reference table names |
| DvAppendSatellite                     | `SAT` |  |  | DataVault | 16 | The string to append for Satellite names |
| AppendSurrogateKey                    | `SK` | `DataType="AnsiString" Length="40"` |  | DataVault | 18 | The string to append for Surrogate/Hash Key column names |
| ApplyDataTypeMappingRdv               | `Y` |  |  | DataVault | 19 | Should the Data Type Mappings be applied to the Raw Data Vault. The Data Type Mappings function allow expansion of data types. This setting controls if these expanded data types are applied to the Data Vault |
| ApplyLookupFilterRdv                  | `Y` |  |  | DataVault | 20 | Should the check for existing rows in the staging to Data Vault load apply a filter condition joining the staging table to the destination Data Vault table to optimize memory usage. Use if staging and Data Vault is co-located in the same database or if cross database joins are possible |
| DvUseSequenceKeys                     | `N` | `DataType="Int32"` |  | DataVault | 21 | PLACEHOLDER for future functionality: Should the Data Vault use Sequence Identifier Keys instead of Hash Keys for Surrogate keys. |
| DvUseHubKeyedInstances                | `N` |  |  | DataVault | 22 | PLACEHOLDER for future functionality: Should the Accelerator create Hub Keyed Instances to represent relationships rather than Link Satellites. |
| DvAccelerateLinkSatellite             | `N` |  |  | DataVault | 23 | Should the accelerator create Link Satellites for effectiveness and attributes from source metadata |
| DvAccelerateLinkEffectiveSatellite    | `Y` |  |  | DataVault | 24 | PLACEHOLDER for future functionality: Should the accelerator create effectiveness tracking Link Satellites (without attributes) for link relationships |
| DvPitLagDays                          | `1` |  |  | DataVault | 30 | Specify the number of days the Point In Time process should go back and look for changes to reprocess |
| DvBridgeLagDays                       | `1` |  |  | DataVault | 31 | Specify the number of days the Bridge process should go back and look for changes to reprocess |
| StringConcatenator                    | `~` |  |  | Main | 1 | The string value used in concatenating Integration Keys and Hash values. Defaults to `~`. For a source column with an `SsisDataflowExpression` using the `FlexToBk(@@rs,ProductId,OtherAttribute)` expression the resulting string Integration Key would be similar to `AWLT~680~XYZ`, concatenating the record source of the connection, the ProductId column value and the OtherAttribute column value |
| 7ZipPath                              | `C:\Program Files\7-Zip` |  |  | Main | 4 | The location of the 7-zip executable for zip operations requiring 7-zip |
| ArchivePath                           | `C:\BimlFlex\Archive` |  |  | Main | 5 | The default path for file archive operations |
| RootPath                              | `C:\BimlFlex` |  |  | Main | 10 | The default root path for any other BimlFlex related file operations |
| LookupCachePath                       | `C:\BimlFlex\Cache` |  |  | Main | 11 | The default path for Cache files used in lookups |
| ExportPath                            | `C:\BimlFlex\Export` |  |  | Main | 12 | The default export path for file exports |
| ImportPath                            | `C:\BimlFlex\Import` |  |  | Main | 13 | The default import path for file imports |
| ConfigurationPath                     | `C:\BimlFlex\Configurations` |  |  | Main | 14 | The folder where SSIS configuration files are stored. Only used for non-project configuration scenarios, such as with SQL Server 2008 r2 |
| KeyEndsWith                           | `Id,Code,No,Key` |  |  | Main | 15 | The strings that BimlFlex interprets as key identifier. For a source table with a ProductCategoryId that links to a ProductCategory table, BimlFlex will create a Model Reference called ProductCategory as name |
| LookupTablePattern                    | `lkp.@@this` |  |  | Main | 20 | The table naming pattern for the Lookup Table |
| HashIntegrationKey                    | `N` |  |  | Main | 21 | Should the Integration Key be hashed. This is done automatically for any project where the destination connection integration stage is Raw Data Vault as it is a requirement for a Data Vault load. For other load process designs the hashing is optional and controlled by this flag as well as the hashing configuration in the configuration sheet |
| LookupAddFilterTable                  | `N` |  |  | Main | 22 | PLACEHOLDER for future functionality |
| IntegrationKeyNullValue               | `NVL` |  |  | Main | 23 | What replacement value should be used for Null values in Integration Keys |
| IntegrationKeyToUpper                 | `Y` |  |  | Main | 24 | Should strings in the Integration Key be upper cased. This is recommended and allows the standard SQL Server case insensitive collation to ingest business keys from multiple sources using different casings to be added to Hubs and treated as the same key without issues. |
| UseSqlCompatibleHash                  | `Y` |  |  | Main | 25 | Should the inline hashing component use a hashing approach compatible with the SQL Server `HASHBYTES()` function. This is recommended so that the hashed values can be recreated using standard SQL queries when needed. |
| UseSqlCompatibleRowHash               | `N` |  |  | Main | 26 | Should the inline hashing component for PSA Full Row Hash use a hashing approach compatible with the SQL Server `HASHBYTES()` function. The default is `N` for backward compatibility however we recommend `Y` for new projects to make it forward compatible with cloud deployments. |
| ArchiveImport                         | `Y` |  |  | Main | 30 | Should imported files be archived after processing. |
| ZipArchiveImport                      | `Y` |  |  | Main | 31 | Should imported files be compressed when they are archived. |
| DeleteImportFile                      | `N` |  |  | Main | 32 | Should imported files be deleted after processing. |
| UseBimlCatalog                        | `Y` |  |  | Main | 33 | Should BimlFlex use the BimlCatalog database for logging, auditing and config variables. Disabling this also disable all dependent functionality |
| HashAlgorithm                         | `SHA1` |  |  | Main | 34 | The hashing algorithm to use. (`MD5`/`SHA1`/`SHA2_256`/`SHA2_512`) |
| HashBinary                            | `N` |  |  | Main | 35 | Should the generated hash value be stored as a binary representation rather than a string representation |
| ZipOutputFile                         | `Y` |  |  | Main | 38 | Should the created output file be zipped |
| ConvertGuidToString                   | `Y` |  |  | Main | 40 | Should source column of type `Guid`/`UniqueIdentifier` be converted to Strings automatically |
| ConstraintModeStg                     | `DoNotCreate` |  |  | Main | 50 | The table reference constraint mode to apply for the Staging database (`DoNotCreate`, `CreateAndNoCheck`, `CreateAndCheck`) |
| ConstraintModeDv                      | `DoNotCreate` |  |  | Main | 51 | The table reference constraint mode to apply for the Data Vault database (`DoNotCreate`, `CreateAndNoCheck`, `CreateAndCheck`) |
| ConstraintModeDm                      | `DoNotCreate` |  |  | Main | 52 | The table reference constraint mode to apply for the Data Mart database (`DoNotCreate`, `CreateAndNoCheck`, `CreateAndCheck`) |
| AppendIntegrationKey                  | `BK` | `DataType="AnsiString" Length="40"` |  | NameConvention | 1 | The string to append to Integration Keys |
| StageWithColumnModelOverride          | `N` |  |  | NameConvention | 2 | when defining a Model Override name for a column, setting this to `Y` will use the override name as the staging column name |
| StageWithObjectModelOverride          | `N` |  |  | NameConvention | 3 | when defining a Model Override name for an object, setting this to `Y` will use the override name as the staging table name |
| UseRecordSourceAsAppend               | `N` |  |  | NameConvention | 4 | Specifies if the record source should be appended to the object name. |
| AppendDomain                          | `N` |  |  | NameConvention | 5 | PLACEHOLDER for future functionality |
| SuffixOrPrefixObject                  | `P` |  |  | NameConvention | 6 | The `SuffixOrPrefixObject` key defines the behavior when naming objects.  Use Suffix or Prefix to define if the object identifiers are added before or after the object names in the solution.  `S` for Suffix Will generate `Entity_HUB`  `P` for Prefix Will generate `HUB_Entity` |
| SuffixOrPrefixColumn                  | `S` |  |  | NameConvention | 7 | The `SuffixOrPrefixColumn` key defines the behavior when defining column names. Use Suffix or Prefix to define if the column identifiers are added after or before the column names in the solution.  `S` for Suffix will generate `Entity_BK`  `P` for Prefix Will generate `BK_Entity` |
| UseRecordSourceAsSchema               | `Y` |  |  | NameConvention | 8 | Should the Record Source be used as the schema name for staging and persistent staging tables.  Example: Source table `SalesLT.Product` from the AdventureWorks LT source is staged in table `AWLT.Product`. This groups all source tables from each source together in a separate schema. |
| AppendProcedureName                   | `flex_` |  |  | NameConvention | 9 | The string to append to procedure name |
| AppendBatchName                       |  |  |  | NameConvention | 10 | The string to append to Batch name |
| AppendLoadFromPsaName                 | `INIT_FROM_PSA_` |  |  | NameConvention | 11 | The string to append to Load From PSA process name |
| EnableRollbackRdv                     | `N` |  |  | Orchestration | 1 | Should the orchestration engine rollback (delete) committed changes to the RDV when failed loads are detected |
| EnableRollbackStg                     | `N` |  |  | Orchestration | 2 | Should the orchestration engine rollback (delete) committed changes to the Staging database when failed loads are detected |
| EnableRollbackPsa                     | `N` |  |  | Orchestration | 3 | Should the orchestration engine rollback (delete) committed changes to the PSA when failed loads are detected |
| EnableEndDateRdv                      | `N` |  |  | Orchestration | 4 | Should end dating processing be applied to the RDV. |
| SnowSqlConfig                         | `%USERPROFILE%\.snowsql\config` |  |  | Snowflake | 1 | Location of the Snowflake SnowSQL configuration file |
| SnowSqlConnection                     | `bimlflex_db` |  |  | Snowflake | 2 | The Snowflake SnowSQL connection to use |
| SnowSqlPath                           | `C:\Program Files\Snowflake SnowSQL` |  |  | Snowflake | 3 | The path to the local installation of the Snowflake SnowSQL CLI Client tool |
| SnowflakeAccount                      |  |  |  | Snowflake | 10 | The Snowflake account name to use |
| SnowflakeUser                         |  |  |  | Snowflake | 11 | The Snowflake user name to use |
| SnowflakePassword                     |  |  |  | Snowflake | 12 | The Snowflake password to use |
| SnowflakeDatabase                     |  |  |  | Snowflake | 13 | The Snowflake database name to use |
| SnowflakeSchema                       |  |  |  | Snowflake | 14 | The Snowflake schema name to use |
| SnowflakeWarehouse                    |  |  |  | Snowflake | 15 | The Snowflake warehouse name to use |
| SnowflakeRegion                       |  |  |  | Snowflake | 16 | The Snowflake region to use |
| SnowflakeScaleUp                      | `Y` |  |  | Snowflake | 20 | Should the Snowflake processing scale up the Snowflake database at start (`Y`, `N`) |
| SnowflakeScaleUpSize                  | `MEDIUM` |  |  | Snowflake | 21 | What size should the process scale the Snowflake database up to |
| SnowflakeScaleDown                    | `Y` |  |  | Snowflake | 22 | Should the Snowflake processing scale down the Snowflake database at end (`Y`, `N`) |
| SnowflakeScaleDownSize                | `XSMALL` |  |  | Snowflake | 23 | What size should the process scale the Snowflake database down to |
| SnowflakeAutoSuspend                  | `Y` |  |  | Snowflake | 24 | Should the Snowflake database Auto Suspend (`Y`, `N`) |
| SnowflakeFileFormat                   | `CREATE FILE FORMAT IF NOT EXISTS "PUBLIC".NOHEADER_PIPE_CSV_FORMAT COMPRESSION = 'GZIP' ESCAPE_UNENCLOSED_FIELD = NONE FIELD_DELIMITER = '|' RECORD_DELIMITER = '\n' SKIP_HEADER = 0 TRIM_SPACE = FALSE NULL_IF = ('\\N');` |  |  | Snowflake | 25 | The Snowflake file format to use |
| SsisBufferTempStoragePath             |  |  |  | Ssis | 1 | The Buffer Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill buffer data to disk, update this value to a location with enough space and speed for the load to succeed |
| SsisBLOBTempStoragePath               |  |  |  | Ssis | 2 | The Blob Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill Blobs to disk, update this value to a location with enough space and speed for the load to succeed |
| SsisCommandTimeout                    | `0` |  |  | Ssis | 3 | SSIS Command Timeout to use. Override the value here to change the default SSIS behavior |
| SsisMaxConcurrentExecutables          | `-1` |  |  | Ssis | 4 | Max number of concurrent SSIS executables to employ. Override the value here to change the default SSIS behavior |
| SsisEngineThreads                     | `10` |  |  | Ssis | 5 | Max number of SSIS engine threads to employ. Override the value here to change the default SSIS behavior |
| SsisDefaultBufferMaxRows              | `10000` |  |  | Ssis | 6 | SSIS Data Flow configuration for Default Buffer Max Rows for supported destinations. Override the value here to change the default SSIS behavior |
| SsisDefaultBufferSize                 | `10485760` |  |  | Ssis | 7 | SSIS Data Flow configuration for Default Buffer Size for supported destinations. Override the value here to change the default SSIS behavior |
| SsisMaximumInsertCommitSize           | `2147483647` |  |  | Ssis | 8 | SSIS Data Flow configuration for Maximum Insert Commit Size for supported destinations. Override the value here to change the default SSIS behavior |
| SsisRowsPerBatch                      | `500000` |  |  | Ssis | 9 | SSIS Data Flow configuration for Rows Per Batch for supported destinations. Override the value here to change the default SSIS behavior |
| SsisCheckConstraints                  | `false` |  |  | Ssis | 10 | SSIS Destination configuration for checking constraints. Defaults to `False` as that is recommended for data warehouse destinations |
| SsisAutoAdjustBufferSize              | `true` |  |  | Ssis | 11 | SSIS Auto Adjust Buffer Size configuration for supported SQL Server versions |
| SsisDelayValidation                   | `true` |  |  | Ssis | 12 | Should generated SSIS packages use delayed validation for metadata validation |
| SsisValidateExternalMetadata          | `true` |  |  | Ssis | 13 | Should generated SSIS packages validate external metadata |
| SsisProcessSubfolders                 | `false` |  |  | Ssis | 20 | Should a flat file source loop load files in subfolders of the specified source folder |
| ObjectNamePattern                     |  |  |  | Staging | 1 | Specific override behavior for the object name for staging tables etc. Use short codes such as `@@this` and `@@rs` for easy access to the BimlFlex object model |
| SchemaNamePattern                     |  |  |  | Staging | 2 | Specific override behavior for the schema name for staging tables etc. Use short codes such as `@@this` and `@@rs` for easy access to the BimlFlex object model |
| DisplayDatabaseNameStg                | `N` |  |  | Staging | 3 | Controls if the source database name should be included in the generated SSIS package name.  E.g. the default `EXT_AWLT_Customer` package name would be named `EXT_AWLT_AdventureWorksLT2012_Customer` when set to `Y` |
| DisplaySchemaNameStg                  | `N` |  |  | Staging | 4 | Controls if the source schema name should be included in the generated SSIS package name.  E.g. the default `EXT_AWLT_Customer` package name would be named `EXT_AWLT_SalesLT_Customer` when set to `Y` |
| AppendRecordSource                    | `N` |  |  | Staging | 5 | Should the Record Source Code from the connection be appended to the staging object name. This code is normally used as the schema name but can be tweaked to match a specific naming convention |
| AppendSchemaStg                       | `N` |  |  | Staging | 6 | Should the source Schema be appended to the object name in the staging layer. The default naming convention is to name tables using the Record Source and object name. The AdventureWorks LT Source table `SalesLT.Product` is normally staged in the `AWLT.Product` table. For sources with multiple schemas, enable this to distinguish between tables. For the product table the new staging table name would be `AWLT.SalesLT_Product` |
| AppendSchemaPsa                       | `ods` |  |  | Staging | 7 | The string to add to the PSA objects when Staging and Persistent Staging are co-located in the same database |
| ApplyDataTypeMappingStg               | `Y` |  |  | Staging | 8 | Should the Data Type mappings that are applied to source tables be used in the Staging and Persistent Staging databases. As the Data Type mapping function is normally used to accommodate changes in the source this setting should normally be set to `Y` |
| PsaUseCacheLookup                     | `N` |  |  | Staging | 9 | Should the PSA lookup cache the data to disk in SSIS. Use this if it is not possible to use the normal lookup behavior due to memory constraints |
| PsaTruncateIfHasRows                  | `N` |  |  | Staging | 11 | Should the PSA table be truncated if it already has rows loaded. For normal PSA behavior this should be set to `N`. for specific requirements where previously loaded rows should be discarded, set this to `Y` |
| PsaMergeAllRows                       | `N` |  |  | Staging | 12 |  |
| EnableEndDatePsa                      | `N` |  |  | Staging | 13 | Set to `Y` to enable end dating of rows in the PSA. This will allow timelines to be maintained in the PSA area. Using end dating is a more expensive load process but allows queries to directly reuse complete effective from and to dates for each row. Disable this to use an insert-only approach for the PSA for optimized load performance |
| DisableStgPsaOnly                     | `N` |  |  | Staging | 15 | Set to `Y` to disable the staging layer and only persist changes to the PSA layer directly. |
| AddRowHashKeyIndex                    | `N` |  |  | Staging | 16 | Set to `Y` to add a unique, non-clustered constraint on the RowHashKey and EffectiveFromDate columns in staging tables |
| DeleteDetectionEnabled                | `N` |  |  | Staging | 20 | Should BimlFlex apply a separate key load pattern that will enable detection of hard deletes in the source. |
| DeleteObjectNamePattern               | `@@this_DEL` |  |  | Staging | 21 | The name to use for the Delete objects when using Delete detection. `@@this_DEL` will us the current object name (table name) and append `_DEL` at the end. Update this to use a specific naming convention for delete tables. |
| DeleteSchemaNamePattern               | `@@rs` |  |  | Staging | 22 | The name to use for the Delete objects schema when using Delete detection. `@@rs` uses the Record Source of the connection as schema. (This is the same default behavior as for the Staging tables). Update this to use a specific schema for delete tables. |
| SelectBlobRowOrderBy                  | `ASC` |  |  | Staging | 23 |  |
