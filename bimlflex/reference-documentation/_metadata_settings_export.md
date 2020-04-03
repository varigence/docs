### AzCopy

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| AzCopyCapMbps                            | AzCopy v.10 transfer speed cap in Mbps |
| AzCopyConcurrency                        | Specify the number of concurrent AzCopy operations to start. For AzCopy Pre v.10 versions this is always included as a parameter in the command call. For AzCopy v.10 this is optionally set to the AZCOPY_CONCURRENCY_VALUE environmental variable. To reuse the current environment variable without setting it for each object, leave this blank when using AzCopy v.10 |
| AzCopyCreateContainer                    | Should the pipeline include a step to create the destination container. Legacy AzCopy versions create this automatically, v.10 fails when the target container is missing. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads. |
| AzCopyEnabled                            | Should the generated files be uploaded using `AzCopy` as part of the SSIS Packages. Disable if the solution uses an alternative file management process |
| AzCopyLogLevel                           | The log level for AzCopy v.10 logs. Available log levels are: NONE, DEBUG, INFO, WARNING, ERROR, PANIC, and FATAL |
| AzCopyLogLocation                        | Sets the log location for AzCopy v.10 log files to the AZCOPY_LOG_LOCATION environment variable |
| AzCopyPath                               | The file path to the local installation of the `AzCopy` Command. If installed in a non-default location, update this setting to match |
| AzCopySetEnvironmentVariables            | Should the environment variables controlling AzCopy v.10 be set before each object is loaded. Only valid for AzCopy v.10. Set these control variables to the desired values outside of BimlFlex when not setting this in the load packages |
| AzCopyUseSasToken                        | Should AzCopy use a SAS Token for access. This is the only supported authentication mechanism for AzCopy v.10 (10). For legacy versions (5/8) you can use Account Key or SAS Token. |
| AzCopyVersion                            | The AzCopy version used. This should match the AzCopy command found in the AzCopyPath setting. Use a numeric like 8 or 10 as values to specify version |

### Azure

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| AzureArchiveStorageAccountKey            | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureArchiveStorageAccountName           | The Azure Blob Storage Account Name to use for archiving data as files in blob storage. This is the default archive destination for the staging to archive file move process for BimlFlex solutions using Azure SQL Data Warehouse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureArchiveStorageSasToken              | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureBlobStorageDomain                   | The AzCopy domain to use. Classic blob storage uses `blob.core.windows.net` Azure Data Lake Storage Gen2 targets (with hierarchical namespace) uses `dfs.core.windows.net` |
| AzureCreateDummyFile                     | Should the Staging package copy a placeholder.dummy file to accomodate the PolyBase limitation when no files exist. |
| AzureCreateExternalOnStage               | Should the Staging package `DROP` and `CREATE EXTERNAL TABLE` before running the Staging Stored Procedure |
| AzureDataFactoryName                     | The default Data Factory Name to use |
| AzureDestContainerName                   | The Container Name to use for the destination process. This should be indicative of the purpose of the contents, such as `Staging` |
| AzureDestStorageAccountKey               | A Storage access key to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureDestStorageAccountName              | The Azure Blob Storage Account Name to use for staging data as files in blob storage. This is the default destination for the source to staging file upload process for BimlFlex solutions using Azure SQL Data Warehouse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureDestStorageSasToken                 | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureExternalFileConversion              | The default extraction process for source to Blob-storage files applies several conversations as default to create files supported by PolyBase. This setting allows control of this conversion process |
| AzureExternalFileFormat                  | The External File Format definition to use |
| AzureFunctionBridgeKey                   |  |
| AzureFunctionBridgeName                  |  |
| AzureIntegrationRuntime                  | The default Data Factory Integration Runtime to use for Linked Services |
| AzureKeyVault                            | The default Key Vault to use for Linked Services |
| AzurePolybaseSettings                    |  |
| AzureResourceGroup                       |  |
| AzureSourceContainerName                 | The Container Name to use for the source process. This should be indicative of the purpose of the contents, such as `Source` |
| AzureSourceStorageAccountKey             | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureSourceStorageAccountName            | The Azure Blob Storage Account Name to use for using files in blob storage as a source. This is the default source for non-standard load process for BimlFlex solutions using Azure SQL Data Warehouse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureSourceStorageSasToken               | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureStageOnExtract                      | PLACEHOLDER for future functionality: Should the Azure-based Extract and Load process stage the extracted data in the destination Data Warehouse |
| AzureSubscriptionId                      |  |
| AzureAllowPolybase                       | PLACEHOLDER for future functionality: Should the Azure Data Factory copy command use PolyBase or load directly to destination Data Warehouse |
| AzureArchiveContainerName                | The Container Name to use for the archive process. This should be indicative of the purpose of the contents, such as `Archive` |
| AzureArchiveStage                        | Should the staged blob files be moved to the defined archive container once load has completed. This will use AzCopy v.10 commands so requires AzCopy v.10 and SAS Tokens for access |

### Core

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| 7ZipPath                                 | The location of the 7-zip executable for zip operations requiring 7-zip |
| ConfigurationPath                        | The folder where SSIS configuration files are stored. Only used for non-project configuration scenarios, such as with SQL Server 2008 r2 |
| ConstraintModeDm                         | The table reference constraint mode to apply for the Data Mart database (`DoNotCreate`, `CreateAndNoCheck`, `CreateAndCheck`) |
| ConstraintModeDv                         | The table reference constraint mode to apply for the Data Vault database (`DoNotCreate`, `CreateAndNoCheck`, `CreateAndCheck`) |
| ConstraintModeStg                        | The table reference constraint mode to apply for the Staging tables in BimlStudio for diagram previewing. (`DoNotCreate`, `CreateAndNoCheck`, `CreateAndCheck`). NOTE: That the constraints will not be add the the table create scripts. |
| ConvertGuidToString                      | Should source column of type `Guid`/`UniqueIdentifier` be converted to Strings automatically |
| DeleteImportFile                         | Should imported files be deleted after processing. |
| ExportPath                               | The default export path for file exports |
| GlobalDefaultDate                        |  |
| HashAlgorithm                            | The hashing algorithm to use. (`MD5`/`SHA1`/`SHA2_256`/`SHA2_512`) |
| HashBinary                               | Should the generated hash value be stored as a binary representation rather than a string representation |
| HashIntegrationKey                       | Should the Integration Key be hashed. This is done automatically for any project where the destination connection integration stage is Raw Data Vault as it is a requirement for a Data Vault load. For other load process designs the hashing is optional and controlled by this flag as well as the hashing configuration in the configuration sheet |
| ImportPath                               | The default import path for file imports |
| IntegrationKeyNullValue                  | What replacement value should be used for Null values in Integration Keys |
| IntegrationKeyToUpper                    | Should strings in the Integration Key be upper cased. This is recommended and allows the standard SQL Server case insensitive collation to ingest business keys from multiple sources using different casings to be added to Hubs and treated as the same key without issues. |
| KeyEndsWith                              | The strings that BimlFlex interprets as key identifier. For a source table with a ProductCategoryId that links to a ProductCategory table, BimlFlex will create a Model Reference called ProductCategory as name |
| LookupAddFilterTable                     | PLACEHOLDER for future functionality |
| LookupCachePath                          | The default path for Cache files used in lookups |
| LookupTablePattern                       | The table naming pattern for the Lookup Table |
| SsdtOutputPath                           | The folder where SSDT database projects are created. Use @@OutputPath for the default BimlStudio output folder, @@CustomerUid for the current Customer UID and @@VersionName for the current Version Name |
| StringConcatenator                       | The string value used in concatenating Integration Keys and Hash values. Defaults to `~`. For a source column with an `SsisDataflowExpression` using the `FlexToBk(@@rs,ProductId,OtherAttribute)` expression the resulting string Integration Key would be similar to `AWLT~680~XYZ`, concatenating the record source of the connection, the ProductId column value and the OtherAttribute column value |
| UseBimlCatalog                           | Should BimlFlex use the BimlCatalog database for logging, auditing and config variables. Disabling this also disable all dependent functionality |
| UseSqlCompatibleHash                     | Should the inline hashing component use a hashing approach compatible with the SQL Server `HASHBYTES()` function. This is recommended so that the hashed values can be recreated using standard SQL queries when needed. |
| UseSqlCompatibleRowHash                  | Should the inline hashing component for PSA Full Row Hash use a hashing approach compatible with the SQL Server `HASHBYTES()` function. The default is `N` for backward compatibility however we recommend `Y` for new projects to make it forward compatible with cloud deployments. |
| ZipArchiveImport                         | Should imported files be compressed when they are archived. |
| ZipOutputFile                            | Should the created output file be zipped |
| RootPath                                 | The default root path for any other BimlFlex related file operations |
| ArchiveImport                            | Should imported files be archived after processing. |
| ArchivePath                              | The default path for file archive operations |

### DataMart

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| DisplayDatabaseNameDm                    | Should the Database name be included in names for objects in the Data Mart |
| DisplaySchemaNameDm                      | Should the Schema name be included in names for objects in the Data Mart |
| DmAppendDim                              | The string to append for dimension object names |
| DmAppendFact                             | The string to append for Fact names |
| DmAppendStaging                          | The string to append for the Data Mart staging object names |
| DmInferDim                               | Should the Data Mart process infer Dimension Members |
| DmStageOnInitialLoad                     | During the initial load you might not want to write the data to the Staging tables and just directly to the Dimension or Fact.   If you change the setting to `N` it will not also stage the data, however if you have any post process code that use the staging table you will need to take this into consideration. |
| AppendSchemaDm                           | Should the Schema name be appended to objects in the Data Mart |
| ApplyLookupFilterDm                      | Should the check for existing rows in the Data Mart load apply a filter condition joining the source table to the destination table to optimize memory usage. Use if source and destination is co-located in the same database or if cross database joins are possible |

### DataVault

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| DisplayDatabaseNameRdv                   | Should the database name be displayed in the Raw Data Vault |
| DisplaySchemaNameRdv                     | Should the schema name be displayed in the Raw Data Vault |
| DvAppendHub                              | The string to append for Hub names |
| DvAppendLink                             | The string to append for Link names |
| DvAppendLinkSatellite                    | The string to append for Link Satellite names |
| DvAppendPointInTime                      | The string to append for Point In Time names |
| DvAppendReference                        | The string to append for reference table names |
| DvAppendSameAsLink                       | The string to append to Same As Link names |
| DvAppendSatellite                        | The string to append for Satellite names |
| DvBridgeLagDays                          | Specify the number of days the Bridge process should go back and look for changes to reprocess |
| DvDefaultSchema                          | The default schema to use for the Raw Data Vault |
| DvDeriveStagedQuery                      | Should the StagedQuery objects be derived in the in the Data Vault source query or inherited. |
| DvEndDateSatellite                       | Should end dating processing be applied to the RDV Satellites |
| DvInferLinkHub                           | Should the Data Vault load from a staging table also load all secondary hubs that are part of any Link loads. For scenarios where the referenced table loads all keys as part of the same process it is normally possible to defer that load to the separate table.  Sample Scenario:  A source to staging to Data Vault load is done on the `Product` and `ProductCategory` tables from AdventureWorksLT.  The Product table populates the HUB_Product table. The ProductCategory table populates the HUB_ProductCategory table.  The Product table contains a FK constraint to the Product Category and the ProductCategoryId column in the Product table refers to the category a product is in.  The normal Link load would use the Product BK and the Product Category BK defined in the Product source table metadata to load the Link. It would not load any data in to the HUB_ProductCategory as that is being loaded from the ProductCategory source table.  As this is a database source it is probably safe to assume the referential integrity in the source means all ProductCategory BK data in the Product table is also in the ProductCategory table. As such it is unnecessary to load that data twice.  For other sources it might be necessary to load the HUB table from both sources, either due to late arriving data, missing data or as a prudent safety measure to ensure it is possible to inner join Link and Hubs without losing rows.  Setting the `DvInferLinkHub` to `Y` will allow the Product to populate the ProductCategory Hub as part of that source table load. |
| DvPitLagDays                             | Specify the number of days the Point In Time process should go back and look for changes to reprocess |
| DvPointInTimeDefault                     | PLACEHOLDER for future functionality: Apply Defaults in Point In Time tables |
| DvPreviewSchema                          | The schema name to use for the Data Vault Accelerator preview objects |
| DvProcessOnStage                         | Should the Data Vault stored procedure be called after the Extract has been applied. For Azure projects this must be combined with AzureStageOnExtract |
| DvSingleChangeSatellite                  |  |
| DvUseCacheLookup                         | Enables using the file based cache lookup feature of SSIS for lookups.  Cache files will be created as part of the SSIS process and used for the lookups. In-memory lookups generally perform better and require more available memory |
| DvUseHashKeys                            | PLACEHOLDER for future functionality: Should the Data Vault use Hash Keys or Natural Keys. |
| DvUseSequenceKeys                        | PLACEHOLDER for future functionality: Should the Data Vault use Sequence Identifier Keys instead of Hash Keys for Surrogate keys. |
| DvUseVirtualHub                          | PLACEHOLDER for future functionality: When the Data Vault use Natural Keys instead for Hash Keys should we also not have physical Hubs. |
| DvAccelerateHubKeys                      | PLACEHOLDER for future functionality: |
| DvAccelerateLinkKeys                     |  |
| DvAccelerateLinkSatellite                | Should the accelerator create Link Satellites for effectiveness and attributes from source metadata. |
| DvAccelerateLinkSatelliteKeys            | PLACEHOLDER for future functionality: Should the accelerator add the Integration Key to the Link Satellites for effectiveness. |
| DvAppendBridge                           | The string to append for Bridge names |
| DvAppendHierarchyLink                    | The string to append to Hierarchy Link names |
| AppendSchemaRdv                          | Appends the Schema to the accelerated Data Vault objects, for the source table `SalesLT.Product` the Hub accelerated would be named `HUB_SalesLT_Product` rather than the default `HUB_Product` |
| AppendSurrogateKey                       | The string to append for Surrogate/Hash Key column names |
| ApplyDataTypeMappingRdv                  | Should the Data Type Mappings be applied to the Raw Data Vault. The Data Type Mappings function allow expansion of data types. This setting controls if these expanded data types are applied to the Data Vault |
| ApplyLookupFilterRdv                     | Should the check for existing rows in the staging to Data Vault load apply a filter condition joining the staging table to the destination Data Vault table to optimize memory usage. Use if staging and Data Vault is co-located in the same database or if cross database joins are possible |

### Naming

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| AppendBatchName                          | The string to append to Batch name |
| AppendDomain                             | PLACEHOLDER for future functionality |
| AppendIntegrationKey                     | The string to append to Integration Keys |
| AppendLoadFromPsaName                    | The string to append to Load From PSA process name |
| AppendProcedureName                      | The string to append to procedure name |
| StageWithColumnModelOverride             | When defining a Model Override name for a column, setting this to `Y` will use the override name as the staging column name |
| StageWithObjectModelOverride             | When defining a Model Override name for an object, setting this to `Y` will use the override name as the staging table name |
| SuffixOrPrefixColumn                     | The `SuffixOrPrefixColumn` key defines the behavior when defining column names. Use Suffix or Prefix to define if the column identifiers are added after or before the column names in the solution.  `S` for Suffix will generate `Entity_BK`  `P` for Prefix Will generate `BK_Entity` |
| SuffixOrPrefixObject                     | The `SuffixOrPrefixObject` key defines the behavior when naming objects.  Use Suffix or Prefix to define if the object identifiers are added before or after the object names in the solution.  `S` for Suffix Will generate `Entity_HUB`  `P` for Prefix Will generate `HUB_Entity` |
| UseRecordSourceAsAppend                  | Specifies if the record source should be appended to the object name. |
| UseRecordSourceAsSchema                  | Should the Record Source be used as the schema name for staging and persistent staging tables.  Example: Source table `SalesLT.Product` from the AdventureWorks LT source is staged in table `AWLT.Product`. This groups all source tables from each source together in a separate schema. |

### Operations

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| SnapshotRetentionPeriod                  |  |
| ArchiveRetentionPeriod                   |  |

### Orchestration

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| EnableRollbackPsa                        | Should the orchestration engine rollback (delete) committed changes to the PSA when failed loads are detected |
| EnableRollbackRdv                        | Should the orchestration engine rollback (delete) committed changes to the RDV when failed loads are detected |
| EnableRollbackStg                        | Should the orchestration engine rollback (delete) committed changes to the Staging database when failed loads are detected |

### Snowflake

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| SnowflakeAccount                         | The Snowflake account name to use |
| SnowflakeAutoSuspend                     | Should the Snowflake database Auto Suspend (`Y`, `N`) |
| SnowflakeDatabase                        | The Snowflake database name to use |
| SnowflakeFileFormat                      | The Snowflake file format to use |
| SnowflakePassword                        | The Snowflake password to use |
| SnowflakeRegion                          | The Snowflake region to use |
| SnowflakeRemoveStage                     | Should the Snowflake stage be removed prior to loading the new stage file |
| SnowflakeScaleDown                       | Should the Snowflake processing scale down the Snowflake database at end (`Y`, `N`) |
| SnowflakeScaleDownSize                   | What size should the process scale the Snowflake database down to |
| SnowflakeScaleUp                         | Should the Snowflake processing scale up the Snowflake database at start (`Y`, `N`) |
| SnowflakeScaleUpSize                     | What size should the process scale the Snowflake database up to |
| SnowflakeSchema                          | The Snowflake schema name to use |
| SnowflakeUser                            | The Snowflake user name to use |
| SnowflakeWarehouse                       | The Snowflake warehouse name to use |
| SnowSqlConfig                            | Location of the Snowflake SnowSQL configuration file |
| SnowSqlConnection                        | The Snowflake SnowSQL connection to use |
| SnowSqlPath                              | The path to the local installation of the Snowflake SnowSQL CLI Client tool |

### Ssis

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| SsisAutoAdjustBufferSize                 | SSIS Auto Adjust Buffer Size configuration for supported SQL Server versions |
| SsisBLOBTempStoragePath                  | The Blob Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill Blobs to disk, update this value to a location with enough space and speed for the load to succeed |
| SsisBufferTempStoragePath                | The Buffer Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill buffer data to disk, update this value to a location with enough space and speed for the load to succeed |
| SsisCheckConstraints                     | SSIS Destination configuration for checking constraints. Defaults to `False` as that is recommended for data warehouse destinations |
| SsisCommandTimeout                       | SSIS Command Timeout to use. Override the value here to change the default SSIS behavior |
| SsisDb                                   |  |
| SsisEngineThreads                        | Max number of SSIS engine threads to employ. Override the value here to change the default SSIS behavior |
| SsisFolder                               |  |
| SsisMaxConcurrentExecutables             | Max number of concurrent SSIS executables to employ. Override the value here to change the default SSIS behavior |
| SsisMaximumInsertCommitSize              | SSIS Data Flow configuration for Maximum Insert Commit Size for supported destinations. Override the value here to change the default SSIS behavior |
| SsisProcessSubfolders                    | Should a flat file source loop load files in subfolders of the specified source folder |
| SsisRowsPerBatch                         | SSIS Data Flow configuration for Rows Per Batch for supported destinations. Override the value here to change the default SSIS behavior |
| SsisServer                               |  |
| SsisValidateExternalMetadata             | Should generated SSIS packages validate external metadata |
| SsisDefaultBufferMaxRows                 | SSIS Data Flow configuration for Default Buffer Max Rows for supported destinations. Override the value here to change the default SSIS behavior |
| SsisDefaultBufferSize                    | SSIS Data Flow configuration for Default Buffer Size for supported destinations. Override the value here to change the default SSIS behavior |
| SsisDelayValidation                      | Should generated SSIS packages use delayed validation for metadata validation |

### Staging

| Setting Key                              | Setting Description                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| AddRowHashKeyIndex                       | Set to `Y` to add a unique, non-clustered constraint on the RowHashKey and EffectiveFromDate columns in staging tables |
| AppendNameExternal                       | The string to append for External tables when deploying using PolyBase |
| AppendNameLanding                        | The string to append for Landing tables when deploying using Azure Data Factory Copy directly to Database. |
| DeleteDetectionApplyPsa                  | Use default process to insert any detected deletes into the Pesistent table. This can be overriden by the using the DeleteDetectionApplyPsa ExtensionPoint. |
| DeleteDetectionApplyRdv                  | Use default process to insert any detected deletes into the Data Vault Satellite tables. This can be overriden by the using the DeleteDetectionApplyRdv ExtensionPoint. |
| DeleteDetectionEnabled                   | Should BimlFlex apply a separate key load pattern that will enable detection of hard deletes in the source. |
| DeleteObjectNamePattern                  | The name to use for the Delete objects when using Delete detection. `@@this_DEL` will us the current object name (table name) and append `_DEL` at the end. Update this to use a specific naming convention for delete tables. |
| DeleteSchemaNamePattern                  | The name to use for the Delete objects schema when using Delete detection. `@@rs` uses the Record Source of the connection as schema. (This is the same default behavior as for the Staging tables). Update this to use a specific schema for delete tables. |
| DisableStgPsaOnly                        | Set to `Y` to disable the staging layer and only persist changes to the PSA layer directly. |
| DisplayDatabaseNameStg                   | Controls if the source database name should be included in the generated SSIS package name.  E.g. the default `EXT_AWLT_Customer` package name would be named `EXT_AWLT_AdventureWorksLT2012_Customer` when set to `Y` |
| DisplaySchemaNameStg                     | Controls if the source schema name should be included in the generated SSIS package name.  E.g. the default `EXT_AWLT_Customer` package name would be named `EXT_AWLT_SalesLT_Customer` when set to `Y` |
| EnableEndDatePsa                         | Set to `Y` to enable end dating of rows in the PSA. This will allow timelines to be maintained in the PSA area. Using end dating is a more expensive load process but allows queries to directly reuse complete effective from and to dates for each row. Disable this to use an insert-only approach for the PSA for optimized load performance |
| ExtractFileEncoding                      | Has the extracted file a different encoding than the standard Unicode produced by BimlFlex source to file process. This setting will be ignored if the standard extract process is used and not overriden by an extension point. Valid choices are `ASCII`, `BigEndianUnicode`, `UTF32`, `UTF7`, `UTF8`, `Unicode` |
| ExtractFileSplitSize                     | Should the exctracted files be split into multiple files of this size. Applied if the file is larger than 2x this size. Use 0 to not split files. Size in MB |
| ObjectNamePattern                        | Specific override behavior for the object name for staging tables etc. Use short codes such as `@@this` and `@@rs` for easy access to the BimlFlex object model |
| PersistHistory                           | Provide an option to override the PersistHistory defined at a connection level for more granular control. |
| PsaDeltaDetectionSql                     |  |
| PsaDeltaLateArriving                     |  |
| PsaDeltaSingleChange                     |  |
| PsaDeltaStageAllRows                     |  |
| PsaEltDeltaIsDerived                     | Set this to Y if loading into PSA and the Delta has already been derived in the file. This will provide faster and simplified ELT loads. |
| SchemaNamePattern                        | Specific override behavior for the schema name for staging tables etc. Use short codes such as `@@this` and `@@rs` for easy access to the BimlFlex object model |
| SelectBlobRowOrderBy                     |  |
| SelectStageRowDistinct                   | Should the SELECT to STAGE table use the ROW_NUMBER based on the defined KEY or us a DISTINCT based on the full row including the HASH. |
| SsisExpressUseUTF8DataConversion         | Should SSIS Express-based extract packages apply UTF8 data conversion |
| StageBypassPsaChecks                     | Set to `Y` to bypass all Persistent Lookup and Checks and apply all records to Staging and Persistent Staging tables. |
| ZipExtractFileInMemory                   | Should the file zip process run in-memory or through file streams. Files larger than 2 GB are always zipped through file streams |
| PsaMergeAllRows                          |  |
| PsaTruncateIfHasRows                     | Should the PSA table be truncated if it already has rows loaded. For normal PSA behavior this should be set to `N`. for specific requirements where previously loaded rows should be discarded, set this to `Y` |
| PsaUseCacheLookup                        | Should the PSA lookup cache the data to disk in SSIS. Use this if it is not possible to use the normal lookup behavior due to memory constraints |
| AppendRecordSource                       | Should the Record Source Code from the connection be appended to the staging object name. This code is normally used as the schema name but can be tweaked to match a specific naming convention |
| AppendSchemaPsa                          | The string to add to the PSA objects when Staging and Persistent Staging are co-located in the same database |
| AppendSchemaStg                          | Should the source Schema be appended to the object name in the staging layer. The default naming convention is to name tables using the Record Source and object name. The AdventureWorks LT Source table `SalesLT.Product` is normally staged in the `AWLT.Product` table. For sources with multiple schemas, enable this to distinguish between tables. For the product table the new staging table name would be `AWLT.SalesLT_Product` |
| ApplyDataTypeMappingStg                  | Should the Data Type mappings that are applied to source tables be used in the Staging and Persistent Staging databases. As the Data Type mapping function is normally used to accommodate changes in the source this setting should normally be set to `Y` |
| ApplyExtractConversionInDataFlow         | Should SSIS extracts to file use extract data conversion for target files in the Data Flow instead of in the source select statement |