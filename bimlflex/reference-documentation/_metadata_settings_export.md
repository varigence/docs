## AzCopy

All AzCopy related **Settings**.

### Paths (AzCopy)

All **Settings** in the Paths section.

#### [Description](#tab/azcopy-paths-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Path | The file path to the local installation of the "AzCopy" Command. If installed in a non-default location, update this setting to match |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Log Location | Sets the log location for AzCopy v.10 log files to the AZCOPY_LOG_LOCATION environment variable |

#### [Default Values](#tab/azcopy-paths-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Path | C:\Program Files (x86)\Microsoft SDKs\Azure\AzCopy |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Log Location | C:\BimlFlex\Export\Log |

***

### Settings (AzCopy)

All **Settings** in the Settings section.

#### [Description](#tab/azcopy-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Version | The AzCopy version used. This should match the AzCopy command found in the AzCopyPath setting. Use a numeric like 8 or 10 as values to specify version |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Log Level | The log level for AzCopy v.10 logs. Available log levels are: "NONE", "DEBUG", "INFO", "WARNING", "ERROR", "PANIC", and "FATAL" |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Cap Mbps | AzCopy v.10 transfer speed cap in Mbps |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Concurrency | Specify the number of concurrent AzCopy operations to start. For legacy AzCopy versions, this is always included as a parameter in the command call. For AzCopy v.10 this is optionally set to the AZCOPY_CONCURRENCY_VALUE environmental variable. To reuse the current environment variable without setting it for each object, leave this blank when using AzCopy v.10 |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use AzCopy | Should the generated files be uploaded using "AzCopy" as part of the SSIS Packages. Disable if the solution uses an alternative file management process |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Create Container | Should the pipeline include a step to create the destination container. Legacy AzCopy versions create this automatically, v.10 fails when the target container is missing. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Set Environment Variables | Should the environment variables controlling AzCopy v.10 be set before each object is loaded. Only valid for AzCopy v.10. Set these control variables to the desired values outside of BimlFlex when not setting this in the load packages |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use SAS Token | Should AzCopy use a SAS Token for access. This is the only supported authentication mechanism for AzCopy v.10 (10). For legacy versions (5/8) you can use Account Key or SAS Token |

#### [Default Values](#tab/azcopy-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Version | 8 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Log Level | NONE |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Cap Mbps |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Concurrency | 2 |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use AzCopy | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Create Container | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Set Environment Variables | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use SAS Token | `false` |

***

## Azure

All Azure related **Settings**.

### Data Factory (Azure)

All **Settings** in the Data Factory section.

#### [Description](#tab/azure-datafactory-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Data Factory Name | The default Data Factory Name to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Subscription Id | The default Azure SubscriptionId to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Resource Group | The default Azure Resource Group name to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Key Vault | The default Key Vault name to use for Linked Services |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | PolyBase Settings | The default Azure PolyBase settings to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Integration Runtime | The default Data Factory Integration Runtime name to use for Linked Services |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Allow PolyBase Staging | Should the Azure Data Factory copy command use PolyBase staging or load directly to destination Azure Synapse |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Staging Settings | Any Azure Data Factory Staging settings to apply to ADF Copy activities |

#### [Default Values](#tab/azure-datafactory-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Data Factory Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Subscription Id |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Resource Group |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Key Vault |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | PolyBase Settings | <PolyBaseSettings RejectType="Value" RejectValue="0" UseTypeDefault="true" /> |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Integration Runtime |  |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Allow PolyBase Staging | `false` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Staging Settings | EnableStaging="true" ParallelCopies="8" DataIntegrationUnits="8" |

***

### Data Factory Function Bridge (Azure)

All **Settings** in the Data Factory Function Bridge section.

#### [Description](#tab/azure-datafactoryfunctionbridge-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Name | The default Azure Function Bridge Name to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Key | The default Azure Function Bridge Key to use for authentication between the Azure Data Factory and the Azure Function App |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Function Bridge Key Vault | Should the Azure Function Bridge use the Azure Key Vault specified in the AzureFunctionBridgeKeyVault settings or instantiate the Linked Service with the Key directly in the Data Factory using default settings |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Key Vault Name | The name of the Azure Key Vault used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Key Vault Secret | The name of the Azure Key Vault secret used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Key Vault Secret Version | An optional Azure Key Vault secret version used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled. If not specified, the current version of the secret will be used |

#### [Default Values](#tab/azure-datafactoryfunctionbridge-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Key |  |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Function Bridge Key Vault | `false` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Key Vault Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Key Vault Secret |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Function Bridge Key Vault Secret Version |  |

***

### Deployment (Azure)

All **Settings** in the Deployment section.

#### [Description](#tab/azure-deployment-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Deployment Container | The Storage container to use when accessing Blob storage for linked ARM template deployment |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Deployment Account Name | The Storage Account name to use when accessing Blob storage for linked ARM template deployment |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Deployment Account Key | The Storage access key to use when accessing Blob storage for linked ARM template deployment |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Deployment SAS Token | The Storage access SAS Token to use when accessing Blob storage for linked ARM template deployment |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Emit Powershell Environment Checks | Should the PowerShell deployment files include verification of Get-InstalledModule -Name Az environment |

#### [Default Values](#tab/azure-deployment-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Deployment Container | deployment |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Deployment Account Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Deployment Account Key |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Deployment SAS Token |  |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Emit Powershell Environment Checks | `true` |

***

### File Settings (Azure)

All **Settings** in the File Settings section.

#### [Description](#tab/azure-filesettings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Compression Codec | The Compression type (Codec) to use for the Azure Data Factory File Dataset |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Compression Level | The Compression level to apply for the Azure Data Factory File Dataset |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Encoding Name | The File Encoding Name for the Azure Data Factory File Dataset |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Null Value | The Null value definition to use for the Azure Data Factory File Dataset |

#### [Default Values](#tab/azure-filesettings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Compression Codec |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Compression Level |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Encoding Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Null Value |  |

***

### Staging (Azure)

All **Settings** in the Staging section.

#### [Description](#tab/azure-staging-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Archive Stage | Should the staged blob files be moved to the defined archive container once load has completed. This will use AzCopy v.10 commands so requires AzCopy v.10 and SAS Tokens for access |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage On Extract | Should the Azure-based Extract and Load process run the stage process for the extracted data in the destination Azure Synapse |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Create Dummy File | Should the Staging package copy a "placeholder.dummy" file to accomodate the PolyBase limitation when no files exist |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Create External On Stage | Should the Staging package "DROP" and "CREATE EXTERNAL TABLE" before running the Staging Stored Procedure |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | External File Conversion | The default extraction process for source to Blob-storage files applies several conversions as default to create files supported by PolyBase. This setting allows control of this conversion process |

#### [Default Values](#tab/azure-staging-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Archive Stage | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage On Extract | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Create Dummy File | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Create External On Stage | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | External File Conversion | `true` |

***

## Azure Storage

All Azure Storage related **Settings**.

### Processing (Azure Storage)

All **Settings** in the Processing section.

#### [Description](#tab/azurestorage-processing-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Container | The Container Name to use for the archive process. This should be indicative of the purpose of the contents, such as "archive" |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Account Name | The Azure Blob Storage Account Name to use for archiving data as files in blob storage. This is the default archive destination for the staging to archive file move process for BimlFlex solutions using Azure Synapse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Account Key | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive SAS Token | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Error Container | The Container Name to use for the Error process. This should be indicative of the purpose of the contents, such as "error" |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Error Account Name | The Azure Blob Storage Account Name to use for error files in blob storage. This is the default Error location for BimlFlex solutions using Azure Synapse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Error Account Key | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Error SAS Token | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Stage Container | The Container Name to use for the staging process. This should be indicative of the purpose of the contents, such as "staging" |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Stage Account Name | The Azure Blob Storage Account Name to use for staging data as files in blob storage. This is the default destination for the source to staging file upload process for BimlFlex solutions using Azure Synapse as destination.  The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Stage Account Key | A Storage access key to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Stage SAS Token | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |

#### [Default Values](#tab/azurestorage-processing-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Container | archive |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Account Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Account Key |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive SAS Token |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Error Container | error |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Error Account Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Error Account Key |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Error SAS Token |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Stage Container | staging |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Stage Account Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Stage Account Key |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Stage SAS Token |  |

***

### Settings (Azure Storage)

All **Settings** in the Settings section.

#### [Description](#tab/azurestorage-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Blob Storage Domain | The AzCopy domain to use. Classic blob storage uses "blob.core.windows.net" Azure Data Lake Storage Gen2 targets (with hierarchical namespace) uses "dfs.core.windows.net" |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | External File Format | The default External File Format definition to use |

#### [Default Values](#tab/azurestorage-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Blob Storage Domain | blob.core.windows.net |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | External File Format | WITH (LOCATION = '@@this/' , DATA_SOURCE = dwhload_storage , FILE_FORMAT = pipe_zip_format) |

***

## Core

All Core related **Settings**.

### Defaults (Core)

All **Settings** in the Defaults section.

#### [Description](#tab/core-defaults-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Global Default Date | The global default date to use for timelines |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Convert GUID To String | Should source column of type "GUID"/"UniqueIdentifier" be converted to Strings automatically |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use BimlCatalog | Should BimlFlex use the BimlCatalog database for logging, auditing and config variables. Disabling this also disable all dependent functionality |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Hash Null Value Replacement | The Null value replacement to be used when hashing |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Integration Key To Upper | Should strings in the Integration Key be uppercased. This is recommended and allows the standard SQL Server case insensitive collation to ingest business keys from multiple sources using different casings to be added to Hubs and treated as the same key without issues |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | String Concatenator | The string value used in concatenating Integration Keys and Hash values. Defaults to "~". For a source column with an "SsisDataflowExpression" using the "FlexToBk(@@rs,ProductId,OtherAttribute)" expression the resulting string Integration Key would be similar to "AWLT~680~XYZ", concatenating the record source of the connection, the ProductId column value and the OtherAttribute column value |

#### [Default Values](#tab/core-defaults-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Global Default Date | 0001-01-01 |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Convert GUID To String | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use BimlCatalog | `true` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Hash Null Value Replacement | NVL |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Integration Key To Upper | `true` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | String Concatenator | ~ |

***

### Hash (Core)

All **Settings** in the Hash section.

#### [Description](#tab/core-hash-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Hash Algorithm | The hashing algorithm to use. ("MD5"/"SHA1"/"SHA2_256"/"SHA2_512") [[Go To Permitted Values]](#tab/core-hash-permitted-hashalgorithm) |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Hash Binary | Should the generated hash value be stored as a binary representation rather than a string representation |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Hash Integration Key | Should the Integration Key be hashed. This is done automatically for any project where the destination connection integration stage is Raw Data Vault as it is a requirement for a Data Vault load. For other load process designs the hashing is optional and controlled by this flag as well as the hashing configuration in the configuration sheet |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use SQL Compatible Hash | Should the SSIS inline hashing component use a hashing approach compatible with the SQL Server "HASHBYTES()" function. This is recommended so that the hashed values can be recreated using standard SQL queries when needed |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use SQL Compatible Row Hash | Should the SSIS inline hashing component for Full Row Hashing use a hashing approach compatible with the SQL Server "HASHBYTES()" function. The default is false for backward compatibility however we recommend true for new projects to make it forward compatible with cloud deployments |

#### [Default Values](#tab/core-hash-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Hash Algorithm | SHA1 |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Hash Binary | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Hash Integration Key | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use SQL Compatible Hash | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use SQL Compatible Row Hash | `false` |

***

#### Hash Permitted Values (Core)

All **Settings** with a permitted values list and their permitted values.

##### [Select A Setting](#tab/core-hash-permitted-select)

Click the desired tab to view a list of permitted values.

##### [Hash Algorithm](#tab/core-hash-permitted-hashalgorithm)

| Value |
| ----- |
| MD5 |
| SHA1 (SHA-1) |
| SHA2_256 (SHA-2 256, SHA256) |
| SHA2_512 (SHA-2 512, SHA512) |

***

### Paths (Core)

All **Settings** in the Paths section.

#### [Description](#tab/core-paths-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Root Path | The default root path for any other BimlFlex related file operations |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Path | The default path for file archive operations |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Export Path | The default export path for file exports |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Import Path | The default import path for file imports |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Lookup Cache Path | The default path for Cache files used in lookups |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Configuration Path | The folder where SSIS configuration files are stored. Used for non-project configuration scenarios, such as with SQL Server 2008r2 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | 7 Zip Path | The location of the 7-zip executable for zip operations requiring 7-zip |

#### [Default Values](#tab/core-paths-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Root Path | C:\BimlFlex |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Path | C:\BimlFlex\Archive |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Export Path | C:\BimlFlex\Export |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Import Path | C:\BimlFlex\Import |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Lookup Cache Path | C:\BimlFlex\Cache |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Configuration Path | C:\BimlFlex\Configurations |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | 7 Zip Path | C:\Program Files\7-Zip |

***

### Settings (Core)

All **Settings** in the Settings section.

#### [Description](#tab/core-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Archive Import | Should imported files be archived after processing |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Zip Archive Import | Should imported files be compressed when they are archived |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Zip Output File | Should the created output file be zipped |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Zip Extract File In Memory | Should the file zip process run in-memory or through file streams. Files larger than 2 GB are always zipped through file streams |

#### [Default Values](#tab/core-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Archive Import | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Zip Archive Import | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Zip Output File | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Zip Extract File In Memory | `true` |

***

## Data Mart

All Data Mart related **Settings**.

### Naming (Data Mart)

All **Settings** in the Naming section.

#### [Description](#tab/datamart-naming-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Dimension | The string to append to dimension object names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Fact | The string to append to Fact names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Staging | The string to append to the Data Mart staging object names |

#### [Default Values](#tab/datamart-naming-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Dimension | DIM |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Fact | FACT |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Staging | STAGE |

***

### Settings (Data Mart)

All **Settings** in the Settings section.

#### [Description](#tab/datamart-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Infer Dimension Members | Should the Data Mart process infer Dimension Members |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage On Initial Load | Should the Data Mart stage process run on initial load. Disable this to not stage on initial load. Any post process code that use the staging table contents will need to take this into consideration |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Schema | Should the Schema name be appended to objects in the Data Mart |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Lookup Filter | Should the check for existing rows in the Data Mart load apply a filter condition joining the source table to the destination table to optimize memory usage. Use if source and destination are co-located in the same database or if cross-database joins are possible |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Database Name | Should the Database name be included in names for objects in the Data Mart |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Schema Name | Should the Schema name be included in names for objects in the Data Mart |

#### [Default Values](#tab/datamart-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Infer Dimension Members | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage On Initial Load | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Schema | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Lookup Filter | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Database Name | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Schema Name | `false` |

***

## Data Vault

All Data Vault related **Settings**.

### Accelerator (Data Vault)

All **Settings** in the Accelerator section.

#### [Description](#tab/datavault-accelerator-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Hash Keys | Should the Data Vault use Hash Keys or Natural Keys |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Accelerate Link Satellite | Should the accelerator create Link Satellites for effectiveness and attributes from source metadata |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Accelerate Link Satellite Keys | Should the accelerator add the Integration Key to the Link Satellites for effectiveness |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Link Satellite Record Source | Should the Accelerator append the RecordSource to the Link Satellite name |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Accelerate Hub Keys | Should the Accelerator add source key columns to the Hub in addition to the Integration Key |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Accelerate Link Keys | Should the Accelerator add source key columns to the Link in addition to the Integration Key |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Data Type Mapping RDV | Should the Data Type Mappings be applied to the Raw Data Vault. The Data Type Mappings function allow expansion of data types. This setting controls if these expanded data types are applied to the Data Vault |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage Reduce Link Keys | Enable this to reduce additional Link hash keys in the staging table |

#### [Default Values](#tab/datavault-accelerator-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Hash Keys | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Accelerate Link Satellite | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Accelerate Link Satellite Keys | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Link Satellite Record Source | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Accelerate Hub Keys | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Accelerate Link Keys | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Data Type Mapping RDV | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage Reduce Link Keys | `false` |

***

### Process (Data Vault)

All **Settings** in the Process section.

#### [Description](#tab/datavault-process-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Process On Stage | Should the Data Vault stored procedure be called after the Extract has been applied. For Azure projects this must be combined with "AzureStageOnExtract" |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Infer Link Hub | Should the Data Vault load from a staging table also load all secondary hubs that are part of any Link loads. For scenarios where the referenced table loads all keys as part of the same process it is normally possible to defer that load to the separate table.  Sample Scenario:  A source to staging to Data Vault load is done on the "Product" and "ProductCategory" tables from AdventureWorksLT.  The Product table populates the HUB_Product table. The ProductCategory table populates the HUB_ProductCategory table.  The Product table contains a FK constraint to the Product Category and the ProductCategoryId column in the Product table refers to the category a product is in.  The normal Link load would use the Product BK and the Product Category BK defined in the Product source table metadata to load the Link. It would not load any data in to the HUB_ProductCategory as that is being loaded from the ProductCategory source table.  As this is a database source it is probably safe to assume the referential integrity in the source means all ProductCategory BK data in the Product table is also in the ProductCategory table. As such it is unnecessary to load that data twice.  For other sources it might be necessary to load the HUB table from both sources, either due to late arriving data, missing data or as a prudent safety measure to ensure it is possible to inner join Link and Hubs without losing rows.  Setting the "DvInferLinkHub" to true will allow the Product to populate the ProductCategory Hub as part of that source table load |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Lookup Filter RDV | Should the check for existing rows in the staging to Data Vault load apply a filter condition joining the staging table to the destination Data Vault table to optimize memory usage. Use if staging and Data Vault is co-located in the same database or if cross database joins are possible |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | End Date Satellite | Should end dating processing be applied to the RDV Satellites |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Single Change Satellite | Set this to true if loading into Data Vault and the Delta only has single changes to each key. This will provide optimized ELT loads |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | ELT Delta Is Derived | Set this to true if loading into Data Vault and the Delta has already been derived. This will provide optimized ELT loads for scenarios like streams or insert only transaction source tables |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Cache Lookup | Enables using the file based cache lookup feature of SSIS for lookups.  Cache files will be created as part of the SSIS process and used for the lookups. In-memory lookups generally perform better and require more available memory |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Bridge Lag Days | Specify the number of days the Bridge process should go back and look for changes to reprocess |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Pit Lag Days | Specify the number of days the Point In Time process should go back and look for changes to reprocess |

#### [Default Values](#tab/datavault-process-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Process On Stage | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Infer Link Hub | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Lookup Filter RDV | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | End Date Satellite | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Single Change Satellite | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | ELT Delta Is Derived | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Cache Lookup | `false` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Bridge Lag Days | 1 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Pit Lag Days | 1 |

***

## Data Vault Naming

All Data Vault Naming related **Settings**.

### Naming (Data Vault Naming)

All **Settings** in the Naming section.

#### [Description](#tab/datavaultnaming-naming-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Hub | The string to append to Hub names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Link | The string to append to Link names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Link Satellite | The string to append to Link Satellite names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Satellite | The string to append to Satellite names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Point In Time | The string to append to Point In Time names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Bridge | The string to append to Bridge names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Surrogate Key | The string to append to Surrogate/Hash Key column names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Default Schema | The default schema to use for the Raw Data Vault |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Preview Schema | The schema name to use for the Data Vault Accelerator preview objects |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Reference | The string to append to Reference table names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Hierarchy Link | The string to append to Hierarchical Link names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Same As Link | The string to append to Same As Link names |

#### [Default Values](#tab/datavaultnaming-naming-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Hub | HUB |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Link | LNK |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Link Satellite | LSAT |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Satellite | SAT |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Point In Time | PIT |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Bridge | BRG |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Surrogate Key | SK |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Default Schema | rdv |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Preview Schema | pdv |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Reference | REF |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Hierarchy Link | HAL |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Same As Link | SAL |

***

### Settings (Data Vault Naming)

All **Settings** in the Settings section.

#### [Description](#tab/datavaultnaming-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Schema | Should the schema be appended to the accelerated Data Vault object names. For the source table "SalesLT.Product" the Hub accelerated would be named "HUB_SalesLT_Product" rather than the default "HUB_Product" |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Database Name | Should the database name be displayed in the Raw Data Vault |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Schema Name | Should the schema name be displayed in the Raw Data Vault |

#### [Default Values](#tab/datavaultnaming-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Schema | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Database Name | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Schema Name | `false` |

***

## Delete Detection

All Delete Detection related **Settings**.

### Apply Delete Detection (Delete Detection)

All **Settings** in the Apply Delete Detection section.

#### [Description](#tab/deletedetection-applydeletedetection-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Delete Detection PSA | Use default process to insert detected deletes into the Persistent table. This can be overriden by the "DeleteDetectionApplyPsa" Extension Point. Use this together with the "DeleteDetectionEnabled" Setting |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Delete Detection RDV | Use default process to insert detected deletes into the Data Vault Satellite tables. This can be overriden by the "DeleteDetectionApplyRdv" Extension Point. Use this together with the "DeleteDetectionEnabled" Setting |

#### [Default Values](#tab/deletedetection-applydeletedetection-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Delete Detection PSA | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Delete Detection RDV | `true` |

***

### Delete Detection (Delete Detection)

All **Settings** in the Delete Detection section.

#### [Description](#tab/deletedetection-deletedetection-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Enable Delete Detection | Should BimlFlex apply a separate key load pattern that will enable detection of hard deletes in the source. Use this together with the "DeleteDetectionApplyRdv" and "DeleteDetectionApplyPsa" Settings |

#### [Default Values](#tab/deletedetection-deletedetection-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Enable Delete Detection | `false` |

***

## Model

All Model related **Settings**.

### Settings (Model)

All **Settings** in the Settings section.

#### [Description](#tab/model-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Apply Naming Convention | Naming convention to use for objects and columns. Case sensitive options are "None", "PascalCase", "camelCase", "Proper_Case", "Proper Case", "UPPER_CASE" and "lower_case" [[Go To Permitted Values]](#tab/model-settings-permitted-applynamingconvention) |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Infer Integration Key From | Where to infer the Integration Key from. Case sensitive options are "None", "PrimaryKey", "UniqueKey", "FirstColumn", "IdentityColumn" and "ColumnName::[NameOfColumn]". When specifying "ColumnName", a name needs to be added in the Import Metadata screen or specify "ColumnName::UID" to auto populate the column name field with "UID" |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Retain Existing Metadata | What existing Metadata should be retained when doing an import of existing data. Should be specified as a comma-separated list. Options are "Data Types", "Column Orders", "References", and "All Other". I.e. specify "Column Orders, All Other" without double quotes |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Pad Integration Key | Number of Characters to pad the Integration Key to |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Integration Key | The string to append to Integration Keys |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Key Ends With | The strings that BimlFlex interprets as key identifiers. For a source table with a column "ProductCategoryId" that links to a ProductCategory table, BimlFlex will create a Model Reference called "ProductCategory" as name |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Add Record Source To Integration Key | Import Metadata will add "@@rs" to Integration Keys if true |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Change References To Integration Key | Should Import Metadata add derived Integration Keys from source references or use source columns for references |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Import Views | Should Views be imported when importing Metadata |

#### [Default Values](#tab/model-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Apply Naming Convention | None |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Infer Integration Key From | PrimaryKey |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Retain Existing Metadata | All Other |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Pad Integration Key | 100 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Integration Key | BK |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Key Ends With | Id,Code,No,Key |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Add Record Source To Integration Key | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Change References To Integration Key | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Import Views | `true` |

***

#### Settings Permitted Values (Model)

All **Settings** with a permitted values list and their permitted values.

##### [Select A Setting](#tab/model-settings-permitted-select)

Click the desired tab to view a list of permitted values.

##### [Apply Naming Convention](#tab/model-settings-permitted-applynamingconvention)

| Value |
| ----- |
| None |
| PascalCase |
| camelCase |
| Proper_Case |
| Proper Case |
| UPPER_CASE |
| lower_case |

***

## Naming

All Naming related **Settings**.

### Naming (Naming)

All **Settings** in the Naming section.

#### [Description](#tab/naming-naming-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Suffix Or Prefix Column | The "SuffixOrPrefixColumn" key defines the behavior when defining column names. Use Suffix or Prefix to define if the column identifiers are added after or before the column names in the solution.  "S" for Suffix will generate "Entity_BK"  "P" for Prefix Will generate "BK_Entity" [[Go To Permitted Values]](#tab/naming-naming-permitted-suffixorprefixcolumn) |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Suffix Or Prefix Object | The "SuffixOrPrefixObject" key defines the behavior when naming objects.  Use Suffix or Prefix to define if the object identifiers are added before or after the object names in the solution.  "S" for Suffix Will generate "Entity_HUB"  "P" for Prefix Will generate "HUB_Entity" [[Go To Permitted Values]](#tab/naming-naming-permitted-suffixorprefixobject) |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Procedure Name | The string to append to procedure names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Batch Name | The string to append to Batch names |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Load From Psa Name | The string to append to the Load From PSA process name |

#### [Default Values](#tab/naming-naming-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Suffix Or Prefix Column | S |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Suffix Or Prefix Object | P |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Procedure Name | flex_ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Batch Name |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Load From Psa Name | INIT_FROM_PSA_ |

***

#### Naming Permitted Values (Naming)

All **Settings** with a permitted values list and their permitted values.

##### [Select A Setting](#tab/naming-naming-permitted-select)

Click the desired tab to view a list of permitted values.

##### [Suffix Or Prefix Column](#tab/naming-naming-permitted-suffixorprefixcolumn)

| Value |
| ----- |
| Suffix |
| Prefix |

##### [Suffix Or Prefix Object](#tab/naming-naming-permitted-suffixorprefixobject)

| Value |
| ----- |
| Suffix |
| Prefix |

***

### Settings (Naming)

All **Settings** in the Settings section.

#### [Description](#tab/naming-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage With Column Model Override | When defining a Model Override name for a column, setting this to true will use the override name as the staging column name |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage With Object Model Override | When defining a Model Override name for an object, setting this to true will use the override name as the staging table name |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Record Source As Append | Specifies if the record source should be appended to object names |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Record Source As Schema | Should the Record Source be used as the schema name for staging and persistent staging tables.  Example: Source table "SalesLT.Product" from the AdventureWorksLT source is staged in table "AWLT.Product". This groups source tables from sources in separate schemas |

#### [Default Values](#tab/naming-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage With Column Model Override | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Stage With Object Model Override | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Record Source As Append | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Record Source As Schema | `true` |

***

## Operations

All Operations related **Settings**.

### Settings (Operations)

All **Settings** in the Settings section.

#### [Description](#tab/operations-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Retention Period | The Archive data retention period to use for the BimlFlex database cleanup process |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Snapshot Retention Period | The Snapshot data retention period to use for the BimlFlex database cleanup process |

#### [Default Values](#tab/operations-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Archive Retention Period | 30 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Snapshot Retention Period | 60 |

***

## Orchestration

All Orchestration related **Settings**.

### Constraints (Orchestration)

All **Settings** in the Constraints section.

#### [Description](#tab/orchestration-constraints-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Constraint Mode STG | The table reference constraint mode to apply for the STG (Staging) tables in BimlStudio for diagram previewing. ("DoNotCreate", "CreateAndNoCheck", "CreateAndCheck"). NOTE: That the constraints will not be add the the table create scripts [[Go To Permitted Values]](#tab/orchestration-constraints-permitted-constraintmodestg) |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Constraint Mode DV | The table reference constraint mode to apply for the DV (Data Vault) database ("DoNotCreate", "CreateAndNoCheck", "CreateAndCheck") [[Go To Permitted Values]](#tab/orchestration-constraints-permitted-constraintmodedv) |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Constraint Mode DM | The table reference constraint mode to apply for the DM (Data Mart) database ("DoNotCreate", "CreateAndNoCheck", "CreateAndCheck") [[Go To Permitted Values]](#tab/orchestration-constraints-permitted-constraintmodedm) |

#### [Default Values](#tab/orchestration-constraints-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Constraint Mode STG | DoNotCreate |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Constraint Mode DV | DoNotCreate |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Constraint Mode DM | DoNotCreate |

***

#### Constraints Permitted Values (Orchestration)

All **Settings** with a permitted values list and their permitted values.

##### [Select A Setting](#tab/orchestration-constraints-permitted-select)

Click the desired tab to view a list of permitted values.

##### [Constraint Mode DM](#tab/orchestration-constraints-permitted-constraintmodedm)

| Value |
| ----- |
| CreateAndCheck |
| CreateAndNoCheck |
| DoNotCreate |

##### [Constraint Mode DV](#tab/orchestration-constraints-permitted-constraintmodedv)

| Value |
| ----- |
| CreateAndCheck |
| CreateAndNoCheck |
| DoNotCreate |

##### [Constraint Mode STG](#tab/orchestration-constraints-permitted-constraintmodestg)

| Value |
| ----- |
| CreateAndCheck |
| CreateAndNoCheck |
| DoNotCreate |

***

### Rollback (Orchestration)

All **Settings** in the Rollback section.

#### [Description](#tab/orchestration-rollback-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Rollback STG | Should the Batch orchestration engine rollback (delete) committed changes to the STG (Staging) database when failed loads are detected |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Rollback PSA | Should the Batch orchestration engine rollback (delete) committed changes to the PSA (Persistent Staging) database when failed loads are detected |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Rollback DV | Should the Batch orchestration engine rollback (delete) committed changes to the RDV (Data Vault) database when failed loads are detected |

#### [Default Values](#tab/orchestration-rollback-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Rollback STG | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Rollback PSA | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Rollback DV | `false` |

***

## Snowflake

All Snowflake related **Settings**.

### Connection (Snowflake)

All **Settings** in the Connection section.

#### [Description](#tab/snowflake-connection-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Account | The Snowflake account name to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Region | The Snowflake region to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Warehouse | The Snowflake warehouse name to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Database | The Snowflake database name to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Schema | The Snowflake schema name to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Password | The Snowflake password to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | User | The Snowflake user name to use |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | SnowSQL Config | Location of the Snowflake SnowSQL configuration file |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | SnowSQL Path | The path to the local installation of the Snowflake SnowSQL CLI Client tool |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | SnowSQL Connection | The Snowflake SnowSQL connection to use |

#### [Default Values](#tab/snowflake-connection-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Account |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Region |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Warehouse |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Database |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Schema |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Password |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | User |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | SnowSQL Config | %USERPROFILE%\.snowsql\config |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | SnowSQL Path | C:\Program Files\Snowflake SnowSQL |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | SnowSQL Connection | bimlflex_db |

***

### Process (Snowflake)

All **Settings** in the Process section.

#### [Description](#tab/snowflake-process-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Format | The Snowflake file format to use |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Remove Stage | Should the Snowflake stage be removed prior to loading the new stage file |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Auto Suspend | Should the Snowflake database Auto Suspend |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Scale Up | Should the Snowflake processing scale up the Snowflake Warehouse at the start of the Batch |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Scale Up Size | What size should the Snowflake Warehouse be scale up to [[Go To Permitted Values]](#tab/snowflake-process-permitted-scaleupsize) |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Scale Down | Should the Snowflake processing scale down the Snowflake Warehouse at end of the Batch |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Scale Down Size | What size should the Snowflake Warehouse be scale down to [[Go To Permitted Values]](#tab/snowflake-process-permitted-scaledownsize) |

#### [Default Values](#tab/snowflake-process-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | File Format | CREATE FILE FORMAT IF NOT EXISTS "PUBLIC".NOHEADER_PIPE_CSV_FORMAT COMPRESSION = 'GZIP' ESCAPE_UNENCLOSED_FIELD = NONE FIELD_DELIMITER = '|' RECORD_DELIMITER = '\n' SKIP_HEADER = 0 TRIM_SPACE = FALSE NULL_IF = ('\\N'); |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Remove Stage | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Auto Suspend | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Scale Up | `true` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Scale Up Size | MEDIUM |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Scale Down | `true` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Scale Down Size | XSMALL |

***

#### Process Permitted Values (Snowflake)

All **Settings** with a permitted values list and their permitted values.

##### [Select A Setting](#tab/snowflake-process-permitted-select)

Click the desired tab to view a list of permitted values.

##### [Scale Down Size](#tab/snowflake-process-permitted-scaledownsize)

| Value |
| ----- |
| XSMALL |
| SMALL |
| MEDIUM |
| LARGE |
| XLARGE |
| XXLARGE |
| XXXLARGE |
| X4LARGE |

##### [Scale Up Size](#tab/snowflake-process-permitted-scaleupsize)

| Value |
| ----- |
| XSMALL |
| SMALL |
| MEDIUM |
| LARGE |
| XLARGE |
| XXLARGE |
| XXXLARGE |
| X4LARGE |

***

### Snowflake Data Tools (Snowflake)

All **Settings** in the Snowflake Data Tools section.

#### [Description](#tab/snowflake-snowflakedatatools-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Output Path | The folder where SnowDT database files are created. Use @@OutputPath for the default BimlStudio output folder, @@CustomerUid for the current Customer UID and @@VersionName for the current Version Name |

#### [Default Values](#tab/snowflake-snowflakedatatools-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Output Path | @@OutputPath\SnowDT\@@CustomerUid\@@VersionName |

***

## SSDT

All SSDT related **Settings**.

### Paths (SSDT)

All **Settings** in the Paths section.

#### [Description](#tab/ssdt-paths-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Output Path | The folder where SSDT database projects are created. Use @@OutputPath for the default BimlStudio output folder, @@CustomerUid for the current Customer UID and @@VersionName for the current Version Name |

#### [Default Values](#tab/ssdt-paths-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Output Path | @@OutputPath\SSDT\@@CustomerUid\@@VersionName |

***

### Synapse SSDT Artifacts (SSDT)

All **Settings** in the Synapse SSDT Artifacts section.

#### [Description](#tab/ssdt-synapsessdtartifacts-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include External Tables | Should External Tables be included in the SSDT Project |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Overwrite External Table Defaults | Should existing external table-related files be overwritten. Disable this if the values for Credentials, Data Sources, External Table Formats have been manually updated in the SSDT project to keep the build from overwriting these files |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include Master Key | Should the Master Key statement be include in the SSDT Project. Depends on "SsdtIncludeExternalTables" being enabled |
| ![SQL Datatype](images\svg-icons\sql.svg "SQL Datatype") | Default Master Key | The default Master Key SQL Statement to use |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include Credential | Should the Credential statement be include in the SSDT Project. Depends on "SsdtIncludeExternalTables" being enabled |
| ![SQL Datatype](images\svg-icons\sql.svg "SQL Datatype") | Default Credential | The default Credential SQL Statement to use |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include External Data Source | Should the External Data Source statement be include in the SSDT Project. Depends on "SsdtIncludeExternalTables" being enabled |
| ![SQL Datatype](images\svg-icons\sql.svg "SQL Datatype") | Default External Data Source | The default External Data Source SQL Statement to use |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include External File Format | Should the External File Format statement be include in the SSDT Project. Depends on "SsdtIncludeExternalTables" being enabled |
| ![SQL Datatype](images\svg-icons\sql.svg "SQL Datatype") | Default External File Format | The default External File Format SQL Statement to use |

#### [Default Values](#tab/ssdt-synapsessdtartifacts-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include External Tables | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Overwrite External Table Defaults | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include Master Key | `false` |
| ![SQL Datatype](images\svg-icons\sql.svg "SQL Datatype") | Default Master Key | CREATE MASTER KEY    ENCRYPTION BY PASSWORD ='<Strong Password>'; |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include Credential | `false` |
| ![SQL Datatype](images\svg-icons\sql.svg "SQL Datatype") | Default Credential | CREATE DATABASE SCOPED CREDENTIAL [bimlflex]  WITH    IDENTITY = 'bimlflex',    SECRET = '<Storage Key>'; |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include External Data Source | `false` |
| ![SQL Datatype](images\svg-icons\sql.svg "SQL Datatype") | Default External Data Source | CREATE EXTERNAL DATA SOURCE [dwhload_storage]    WITH (      LOCATION = N'wasbs://staging@<accountname>.blob.core.windows.net'      , TYPE = HADOOP      , CREDENTIAL = [bimlflex]    ); |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Include External File Format | `false` |
| ![SQL Datatype](images\svg-icons\sql.svg "SQL Datatype") | Default External File Format | CREATE EXTERNAL FILE FORMAT [pipe_zip_format]    WITH (      FORMAT_TYPE = DELIMITEDTEXT,      FORMAT_OPTIONS (        FIELD_TERMINATOR = N'|',        USE_TYPE_DEFAULT = FALSE      ),      DATA_COMPRESSION = N'org.apache.hadoop.io.compress.GzipCodec'    ); |

***

## SSIS

All SSIS related **Settings**.

### SSIS Catalog Settings (SSIS)

All **Settings** in the SSIS Catalog Settings section.

#### [Description](#tab/ssis-ssiscatalogsettings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Server | The SSIS Server name to use for generated deployment script files |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | SSISDB | The SSISDB database name to use for generated deployment script files |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Folder | The SSIS Catalog folder name to use for generated deployment script files |

#### [Default Values](#tab/ssis-ssiscatalogsettings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Server | localhost |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | SSISDB | SSISDB |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Folder | @@this |

***

### SSIS Settings (SSIS)

All **Settings** in the SSIS Settings section.

#### [Description](#tab/ssis-ssissettings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | BLOB Temp Storage Path | The Blob Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill Blobs to disk, update this value to a location with enough space and speed for the load to succeed |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Buffer Temp Storage Path | The Buffer Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill buffer data to disk, update this value to a location with enough space and speed for the load to succeed |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Command Timeout | SSIS Command Timeout to use. Override the value here to change the default SSIS behavior |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Auto Adjust Buffer Size | SSIS Auto Adjust Buffer Size configuration for supported SQL Server versions |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Check Constraints | SSIS Destination configuration for checking constraints. Defaults to "False", as that is recommended for data warehouse destinations |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Default Buffer Max Rows | SSIS Data Flow configuration for Default Buffer Max Rows for supported destinations. Override the value here to change the default SSIS behavior |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Default Buffer Size | SSIS Data Flow configuration for Default Buffer Size for supported destinations. Override the value here to change the default SSIS behavior |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Delay Validation | Should generated SSIS packages use delayed validation for metadata validation |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Engine Threads | Max number of SSIS engine threads to employ. Override the value here to change the default SSIS behavior |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Max Concurrent Executables | Max number of concurrent SSIS executables to employ. Override the value here to change the default SSIS behavior |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Maximum Insert Commit Size | SSIS Data Flow configuration for Maximum Insert Commit Size for supported destinations. Override the value here to change the default SSIS behavior |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Process Subfolders | Should a flat file source loop load files in subfolders of the specified source folder |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Rows Per Batch | SSIS Data Flow configuration for Rows Per Batch for supported destinations. Override the value here to change the default SSIS behavior |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Validate External Metadata | Should generated SSIS packages validate external metadata |

#### [Default Values](#tab/ssis-ssissettings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | BLOB Temp Storage Path |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Buffer Temp Storage Path |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Command Timeout | 0 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Auto Adjust Buffer Size | true |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Check Constraints | false |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Default Buffer Max Rows | 10000 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Default Buffer Size | 10485760 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Delay Validation | true |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Engine Threads | 10 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Max Concurrent Executables | -1 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Maximum Insert Commit Size | 2147483647 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Process Subfolders | false |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Rows Per Batch | 500000 |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Validate External Metadata | true |

***

## Staging

All Staging related **Settings**.

### Settings (Staging)

All **Settings** in the Settings section.

#### [Description](#tab/staging-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Persist History | Provides an option to override the Connection level attribute "PersistHistory" for more granular control |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Data Type Mapping Stg | Should the Data Type mappings that are applied to source tables be used in the Staging and Persistent Staging databases. As the Data Type mapping function is normally used to accommodate changes in the source this setting should normally be enabled |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delete Import File | Should imported files be deleted after processing |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Add Row Hash Key Index | Enable to add a unique, non-clustered constraint on the RowHashKey and EffectiveFromDate columns in staging tables |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Extract File Encoding | Has the extracted file a different encoding than the standard Unicode produced by BimlFlex source to file process. This setting will be ignored if the standard extract process is used and not overriden by an extension point. Valid choices are "ASCII", "BigEndianUnicode", "UTF32", "UTF7", "UTF8", "Unicode" |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Extract File Split Size | Should the extracted files be split into multiple files of this size. Applied if the file is larger than 2x this size. Use 0 to not split files. Size in MB |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use UTF8 Data Conversion | Should SSIS Express-based extract packages apply UTF8 data conversion |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use TRY_CAST Conversion | Should the SELECT to STAGE table use the TRY_CAST and TRY_CONVERT  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Select Blob Row Order By | Row Order definition to use for Blob source queries |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Select Stage Row Distinct | Should the SELECT to STAGE table use the ROW_NUMBER based on the defined KEY or us a DISTINCT based on the full row including the HASH |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Extract Conversion In Data Flow | Should SSIS extracts to file use extract data conversion for target files in the SSIS Data Flow instead of in the source select statement |

#### [Default Values](#tab/staging-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Persist History |  |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Data Type Mapping Stg | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delete Import File | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Add Row Hash Key Index | `false` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Extract File Encoding | Unicode |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Extract File Split Size | 0 |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use UTF8 Data Conversion | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use TRY_CAST Conversion | `false` |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Select Blob Row Order By | ASC |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Select Stage Row Distinct | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Apply Extract Conversion In Data Flow | `false` |

***

## Staging Naming

All Staging Naming related **Settings**.

### Naming (Staging Naming)

All **Settings** in the Naming section.

#### [Description](#tab/stagingnaming-naming-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Name External | The string to append to External tables when deploying using PolyBase |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Name Landing | The string to append to Landing tables when deploying using Azure Data Factory Copy directly to Database |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Schema Name Pattern | Specific override behavior for the schema name for staging tables and other database assets |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Object Name Pattern | Specific override behavior for the object name for staging tables |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Delete Object Name Pattern | The name to use for the Delete objects when using Delete detection. "@@this_DEL" will us the current object name (table name) and append "_DEL" at the end. Update this to use a specific naming convention for delete tables |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Delete Schema Name Pattern | The name to use for the Delete objects schema when using Delete detection. "@@rs" uses the Record Source of the connection as schema. (This is the same default behavior as for the Staging tables). Update this to use a specific schema for delete tables |

#### [Default Values](#tab/stagingnaming-naming-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Name External | ext |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Name Landing | land |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Schema Name Pattern |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Object Name Pattern |  |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Delete Object Name Pattern | @@this_DEL |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Delete Schema Name Pattern | @@rs |

***

### Settings (Staging Naming)

All **Settings** in the Settings section.

#### [Description](#tab/stagingnaming-settings-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Record Source | Should the Record Source Code from the connection be appended to the staging object name. This code is normally used as the schema name |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Schema | Should the source Schema be appended to the object name in the staging layer. The default naming convention is to name tables using the Record Source and object name. The AdventureWorksLT Source table "SalesLT.Product" is normally staged in the "AWLT.Product" table. For sources with multiple schemas, enable this to distinguish between tables. For the product table the new staging table name would be "AWLT.SalesLT_Product" |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Database Name | Controls if the source database name should be included in the generated SSIS package name.  E.g. the default "EXT_AWLT_Customer" package name would be named "EXT_AWLT_AdventureWorksLT2012_Customer" when enabled |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Schema Name | Controls if the source schema name should be included in the generated SSIS package name.  E.g. the default "EXT_AWLT_Customer" package name would be named "EXT_AWLT_SalesLT_Customer" when enabled |

#### [Default Values](#tab/stagingnaming-settings-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Record Source | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Append Schema | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Database Name | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Display Schema Name | `false` |

***

## Staging Persistent

All Staging Persistent related **Settings**.

### Defaults (Staging Persistent)

All **Settings** in the Defaults section.

#### [Description](#tab/stagingpersistent-defaults-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Schema | The string to add to the PSA objects when Staging and Persistent Staging are co-located in the same database |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Enable End Date | Enable to activate end dating of rows in the PSA. This will allow timelines to be maintained in the PSA area. Using end dating is a more expensive load process but allows queries to directly reuse complete effective from and to dates for each row. Disable this to use an insert-only approach for the PSA for optimized load performance |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Bypass Persistent Checks | Enable this to bypass all Persistent Lookup and Checks and apply all records to Staging and Persistent Staging tables |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Cache Lookup | Should the PSA lookup cache the data to disk in SSIS. Use this if it is not possible to use the normal in-memory lookup behavior due to memory constraints |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Disable Stage, Persist Only | Enable this to disable the staging layer and only persist changes to the PSA layer |

#### [Default Values](#tab/stagingpersistent-defaults-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Text Datatype](images\svg-icons\text.svg "Text Datatype") | Append Schema | ods |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Enable End Date | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Bypass Persistent Checks | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Use Cache Lookup | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Disable Stage, Persist Only | `false` |

***

### ELT (Staging Persistent)

All **Settings** in the ELT section.

#### [Description](#tab/stagingpersistent-elt-description)

| Type | Setting | Description |
| ---- | ------- | ----------- |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Collapse Rows | Should the PSA Processing apply row collapsing logic |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Detection in SQL | Should the delta detection for the PSA load use SQL |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Is Late Arriving | Does the PSA load include late arriving deltas |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Is Single Change | Enable this if loading into PSA and the delta only has single changes to each key. This will provide optimized ELT loads |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Stage All Rows | Should the Delta process stage all rows or compress rowchanges |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Is Derived | Enable this if loading into PSA and the delta has already been derived in the file. This will provide optimized ELT loads |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Merge All Rows | Should the PSA load merge all rows into the destination |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Truncate PSA If Has Rows | Should the PSA table be truncated if it already has rows loaded. For normal PSA behavior this should be disabled. Enable this for specific requirements where previously loaded rows should be discarded |

#### [Default Values](#tab/stagingpersistent-elt-default)

| Type | Setting | Default Value |
| ---- | ------- | ------------ |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Collapse Rows | `true` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Detection in SQL | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Is Late Arriving | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Is Single Change | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Stage All Rows | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Delta Is Derived | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Merge All Rows | `false` |
| ![Boolean Datatype](images\svg-icons\boolean.svg "Boolean Datatype") | Truncate PSA If Has Rows | `false` |

***
