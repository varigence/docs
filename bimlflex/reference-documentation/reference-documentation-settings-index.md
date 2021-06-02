---
uid: bimlflex-app-reference-documentation-settings-index
title: BimlFlex App reference Documentation for Settings
summary: Documentation on metadata and framework settings within BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
# BimlFlex Settings Reference Documentation

This document outlines the metadata and framework `settings` available in BimlFlex.

These settings drive the behavior of the BimlFlex product.

By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc.

Align these settings with the organizations best practices and environmental requirements.

> [!NOTE]
> For additional details on using the **Settings Editor** in BimlFlex refer to [Installing BimlFlex](xref:settings).

## AzCopy
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Path](xref:bimlflex-app-reference-documentation-setting-AzCopyPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The file path to the local installation of the "AzCopy" Command.|
|[Log Location](xref:bimlflex-app-reference-documentation-setting-AzCopyLogLocation) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Sets the log location for AzCopy v.10 log files to the AZCOPY_LOG_LOCATION environment variable.|
|[Version](xref:bimlflex-app-reference-documentation-setting-AzCopyVersion) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The AzCopy version used. This should match the AzCopy command found in the AzCopyPath setting. Use a numeric such as 8 or 10 as values to specify the AzCopy version.|
|[Log Level](xref:bimlflex-app-reference-documentation-setting-AzCopyLogLevel) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The log level for AzCopy v.10 logs. Available log levels are: "NONE", "DEBUG", "INFO", "WARNING", "ERROR", "PANIC", and "FATAL"|
|[Cap Mbps](xref:bimlflex-app-reference-documentation-setting-AzCopyCapMbps) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The AzCopy v.10 transfer speed cap in Mbps.|
|[Concurrency](xref:bimlflex-app-reference-documentation-setting-AzCopyConcurrency) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specify the number of concurrent AzCopy operations to start. To reuse the current environment variable without setting this value for each object, leave this blank when using AzCopy v.10.|
|[Use AzCopy](xref:bimlflex-app-reference-documentation-setting-AzCopyEnabled) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the generated files be uploaded using "AzCopy" as part of the SSIS Packages. Disable if the solution uses an alternative file management process.|
|[Create Container](xref:bimlflex-app-reference-documentation-setting-AzCopyCreateContainer) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the pipeline includes a step to create the destination container. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads.|
|[Set Environment Variables](xref:bimlflex-app-reference-documentation-setting-AzCopySetEnvironmentVariables) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the environment variables controlling AzCopy v.10 are set before each object is loaded.|
|[Use SAS Token](xref:bimlflex-app-reference-documentation-setting-AzCopyUseSasToken) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether AzCopy used a SAS Token for access. This is the only supported authentication mechanism for AzCopy v.10.|

## Azure
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Data Factory Name](xref:bimlflex-app-reference-documentation-setting-AzureDataFactoryName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Data Factory name to use.|
|[Subscription Id](xref:bimlflex-app-reference-documentation-setting-AzureSubscriptionId) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Subscription Id to use.|
|[Resource Group](xref:bimlflex-app-reference-documentation-setting-AzureResourceGroup) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Resource Group name to use.|
|[Key Vault](xref:bimlflex-app-reference-documentation-setting-AzureKeyVault) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Key Vault name to use for Linked Services.|
|[Function Bridge Name](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Function Bridge Name to use.|
|[Function Bridge Key](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Function Bridge Key to use for authentication between the Azure Data Factory and the Azure Function App.|
|[Use Function Bridge Key Vault](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeUseKeyVault) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Azure Function Bridge uses the Azure Key Vault specified in the AzureFunctionBridgeKeyVault settings.|
|[Function Bridge Key Vault Name](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKeyVaultName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The name of the Azure Key Vault used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled.|
|[Function Bridge Key Vault Secret](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKeyVaultSecret) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The name of the Azure Key Vault secret used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled.|
|[Function Bridge Key Vault Secret Version](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKeyVaultSecretVersion) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|An optional Azure Key Vault secret version used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled. If not specified, the current version of the secret will be used.|
|[Integration Runtime Name](xref:bimlflex-app-reference-documentation-setting-AzureIntegrationRuntime) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Data Factory Self Hosted Integration Runtime name to use for Linked Services.|
|[Integration Runtime Is Shared](xref:bimlflex-app-reference-documentation-setting-AzureIntegrationRuntimeIsShared) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Is the referenced Self Hosted Integration Runtime shared from another Data Factory?|
|[Linked Resource Id](xref:bimlflex-app-reference-documentation-setting-AzureIntegrationRuntimeResourceId) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Resource Id for the referenced Self Hosted Integration Runtime Linked Service that is shared to this Data Factory.|
|[Deployment Container](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentContainer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Storage Container to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment Account Name](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentAccountName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Storage Account name to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment Account Key](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentAccountKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Storage Access Key to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment SAS Token](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentSasToken) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Storage Access SAS Token to use when accessing Blob Storage for linked ARM template deployment.|
|[Emit Powershell Environment Checks](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentEmitPowerShellCheck) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the PowerShell deployment files include environment verification by calling Get-InstalledModule -Name Az.|
|[File Compression Codec](xref:bimlflex-app-reference-documentation-setting-AzureFileCompressionCodec) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The compression type (Codec) to use for the Azure Data Factory File Dataset.|
|[File Compression Level](xref:bimlflex-app-reference-documentation-setting-AzureFileCompressionLevel) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The compression level to apply for the Azure Data Factory target File Dataset.|
|[File Encoding Name](xref:bimlflex-app-reference-documentation-setting-AzureFileEncodingName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The File Encoding Name for the Azure Data Factory target File Dataset.|
|[File Null Value](xref:bimlflex-app-reference-documentation-setting-AzureFileNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Null value definition to use for the Azure Data Factory target File Dataset.|
|[Archive Stage](xref:bimlflex-app-reference-documentation-setting-AzureArchiveStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the staged Blob Storage files are moved to the defined archive container, once processing has completed. This will use AzCopy v.10 commands, so requires AzCopy v.10 and SAS Tokens for access.|
|[Stage On Extract](xref:bimlflex-app-reference-documentation-setting-AzureStageOnExtract) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Azure-based Extract and Load process runs the stage process for the extracted data in the destination Azure Synapse.|
|[Create Dummy File](xref:bimlflex-app-reference-documentation-setting-AzureCreateDummyFile) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the Staging package copy a "placeholder.dummy" file to accommodate the PolyBase limitation when no files exist.|
|[Create External On Stage](xref:bimlflex-app-reference-documentation-setting-AzureCreateExternalOnStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the Staging process "DROP" and "CREATE EXTERNAL TABLE" before running the Staging Stored Procedure.|
|[External File Conversion](xref:bimlflex-app-reference-documentation-setting-AzureExternalFileConversion) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|By default, the extraction process from a source to blob storage applies several conversions to create files that are supported by PolyBase. This setting allows control of this conversion process.|

## Azure Copy
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Enable Staging](xref:bimlflex-app-reference-documentation-setting-AzureCopyEnableStaging) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Azure Data Factory Copy Activity uses Staging. Use this together with Copy Method "PolyBase" to load data to PolyBase supported targets.|
|[Staging Settings](xref:bimlflex-app-reference-documentation-setting-AzureCopyStagingSettings) |![Text Datatype](images/svg-icons/biml.svg "Biml Datatype")|The staging settings to use when enabling Staging for the Copy Activity. Use "@@this" to automatically use the Linked Service associated with the PolyBase Landing connection.|
|[Enable Logging](xref:bimlflex-app-reference-documentation-setting-AzureCopyEnableLogging) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Copy Command uses logging.|
|[Log Settings](xref:bimlflex-app-reference-documentation-setting-AzureCopyLogSettings) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The settings for the logging in the Copy Activity, when logging is enabled. Use "@@this" to automatically use the Linked Service associated with the PolyBase Landing connection.|
|[Copy Method](xref:bimlflex-app-reference-documentation-setting-AzureCopyMethod) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|For the Copy Activity, specifies the Copy Method to use. Bulk Insert allows direct inserts to the target. PolyBase allows automatic staging in a Blob Container and loading through external tables and PolyBase to supported targets.|
|[PolyBase Settings](xref:bimlflex-app-reference-documentation-setting-AzurePolybaseSettings) |![Text Datatype](images/svg-icons/biml.svg "Biml Datatype")|The default Azure PolyBase settings to use when using the Copy Method "PolyBase" and enabling Staging for the Copy Activity.|
|[Retry Attempts](xref:bimlflex-app-reference-documentation-setting-AzureCopyRetryAttempts) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Maximum number of retry attempts for Azure Copy.|
|[Retry Interval](xref:bimlflex-app-reference-documentation-setting-AzureCopyRetryInterval) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The number of seconds between each retry attempt for Azure Copy.|
|[Timeout](xref:bimlflex-app-reference-documentation-setting-AzureCopyTimeout) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Maximum amount of time the Azure Copy Activity can run. Default is 7 days. Format is in D.HH:MM:SS.|
|[Secure Input](xref:bimlflex-app-reference-documentation-setting-AzureCopySecureInput) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|When enabled, input from the activity will not be captured in ADF logging.|
|[Secure Output](xref:bimlflex-app-reference-documentation-setting-AzureCopySecureOutput) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|When enabled, output from the activity will not be captured in ADF logging.|
|[Data Integration Units](xref:bimlflex-app-reference-documentation-setting-AzureCopyDataIntegrationUnits) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specify the powerfulness of the copy executor. Value can be 2-256. When you choose "Auto", the Data Factory dynamically applies the optimal DIU setting based on your source-sink pair and data pattern.|
|[Degree of Copy Parallelism](xref:bimlflex-app-reference-documentation-setting-AzureCopyParallelCopies) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|For the Copy Activity, specifies the degree of parallelism that data loading should use.|
|[Data Consistency Verification](xref:bimlflex-app-reference-documentation-setting-AzureCopyValidateDataConsistency) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Copy Activity validates data consistency for supported sources and sinks.|

## Azure Storage
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Archive Container](xref:bimlflex-app-reference-documentation-setting-AzureArchiveContainer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Container Name to use for the archive process. This should be indicative of the purpose of the contents, such as "archive".|
|[Archive Account Name](xref:bimlflex-app-reference-documentation-setting-AzureArchiveAccountName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Azure Blob Storage Account Name to use for archiving data as files in blob storage,|
|[Archive Account Key](xref:bimlflex-app-reference-documentation-setting-AzureArchiveAccountKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The storage Access Key to use when accessing the Blob storage.|
|[Archive SAS Token](xref:bimlflex-app-reference-documentation-setting-AzureArchiveSasToken) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|A storage access SAS Token to use when accessing the Blob storage.|
|[Error Container](xref:bimlflex-app-reference-documentation-setting-AzureErrorContainer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Container Name to use for the error process.|
|[Error Account Name](xref:bimlflex-app-reference-documentation-setting-AzureErrorAccountName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Azure Blob Storage Account Name to use for error files in blob storage.|
|[Error Account Key](xref:bimlflex-app-reference-documentation-setting-AzureErrorAccountKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|A storage Access Key to use when accessing the error file Blob storage.|
|[Error SAS Token](xref:bimlflex-app-reference-documentation-setting-AzureErrorSasToken) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|A storage access SAS Token to use when accessing the error file Blob storage.|
|[Stage Container](xref:bimlflex-app-reference-documentation-setting-AzureStageContainer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Container Name to use for the staging process.|
|[Stage Account Name](xref:bimlflex-app-reference-documentation-setting-AzureStageAccountName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Azure Blob Storage Account Name to use for staging data as files in blob storage.|
|[Stage Account Key](xref:bimlflex-app-reference-documentation-setting-AzureStageAccountKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The storage Access Key to use when accessing the staging Blob storage.|
|[Stage SAS Token](xref:bimlflex-app-reference-documentation-setting-AzureStageSasToken) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The storage access SAS Token to use when accessing the staging Blob storage.|
|[Blob Storage Domain](xref:bimlflex-app-reference-documentation-setting-AzureBlobStorageDomain) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The AzCopy domain to use.|
|[External File Format](xref:bimlflex-app-reference-documentation-setting-AzureExternalFileFormat) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default External File Format definition to use.|

## Core
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Add SQL Comments](xref:bimlflex-app-reference-documentation-setting-AddSqlComments) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether descriptive comments are added to the SQL ELT code.|
|[Global Default Date](xref:bimlflex-app-reference-documentation-setting-GlobalDefaultDate) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The global default date to use for timelines.|
|[Convert GUID To String](xref:bimlflex-app-reference-documentation-setting-ConvertGuidToString) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether a source column of type "GUID"/"UniqueIdentifier" is automatically converted to a String data type.|
|[Use BimlCatalog](xref:bimlflex-app-reference-documentation-setting-UseBimlCatalog) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether BimlFlex uses the BimlCatalog database for logging, auditing and configuration variables.|
|[Hash Null Value Replacement](xref:bimlflex-app-reference-documentation-setting-HashNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Null value replacement to be used when hashing.|
|[SSIS Hash Null Value Replacement](xref:bimlflex-app-reference-documentation-setting-SsisHashNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Null value replacement to be used when hashing using the Varigence BimlFlex SSIS Custom component.|
|[Integration Key To Upper](xref:bimlflex-app-reference-documentation-setting-IntegrationKeyToUpper) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether strings in the Integration Key will be upper-cased automatically.|
|[Lookup Table Pattern](xref:bimlflex-app-reference-documentation-setting-LookupTablePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The table naming pattern for the Lookup Table.|
|[String Concatenator](xref:bimlflex-app-reference-documentation-setting-StringConcatenator) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string value used in concatenating Integration Keys and Hash values (sanding element). Defaults to "~".|
|[Hash Algorithm](xref:bimlflex-app-reference-documentation-setting-HashAlgorithm) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The hashing algorithm to use. ("MD5"/"SHA1"/"SHA2_256"/"SHA2_512").|
|[Hash Binary](xref:bimlflex-app-reference-documentation-setting-HashBinary) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the generated hash value is stored as a binary representation, as opposed to a string representation.|
|[Hash Integration Key](xref:bimlflex-app-reference-documentation-setting-HashIntegrationKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Integration Key is hashed.|
|[Use SQL Compatible Hash](xref:bimlflex-app-reference-documentation-setting-UseSqlCompatibleHash) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the SSIS custom inline hashing component use a hashing approach compatible with the SQL Server "HASHBYTES()" function.|
|[Use SQL Compatible Row Hash](xref:bimlflex-app-reference-documentation-setting-UseSqlCompatibleRowHash) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the SSIS custom inline hashing component for Full Row Hashing use a hashing approach compatible with the SQL Server "HASHBYTES()" function.|
|[Cast Boolean to True False for Hash](xref:bimlflex-app-reference-documentation-setting-UseTrueFalseForBoolean) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the SQL inline hashing function for MSSQL, SQLDB and Synapse converts BIT (Boolean) values to True/False instead of 1/0.|
|[Root Path](xref:bimlflex-app-reference-documentation-setting-RootPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default root path for any other BimlFlex related file operations.|
|[Archive Path](xref:bimlflex-app-reference-documentation-setting-ArchivePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default path for file archive operations.|
|[Export Path](xref:bimlflex-app-reference-documentation-setting-ExportPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default export path for file exports.|
|[Import Path](xref:bimlflex-app-reference-documentation-setting-ImportPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default import path for file imports.|
|[Lookup Cache Path](xref:bimlflex-app-reference-documentation-setting-LookupCachePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default path for Cache files used in lookups.|
|[Configuration Path](xref:bimlflex-app-reference-documentation-setting-ConfigurationPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The folder where SSIS configuration files are stored.|
|[7 Zip Path](xref:bimlflex-app-reference-documentation-setting-7ZipPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The location of the 7-zip executable for zip operations requiring 7-zip.|
|[Archive Import](xref:bimlflex-app-reference-documentation-setting-ArchiveImport) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether imported files are archived after processing.|
|[Zip Archive Import](xref:bimlflex-app-reference-documentation-setting-ZipArchiveImport) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether imported files are compressed when they are archived.|
|[Zip Output File](xref:bimlflex-app-reference-documentation-setting-ZipOutputFile) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determine whether the created output file is zipped.|
|[Zip Extract File In Memory](xref:bimlflex-app-reference-documentation-setting-ZipExtractFileInMemory) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the file zip process runs in-memory or through file streams. Files larger than 2 GB are always zipped through file streams.|

## Data Mart
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Dimension](xref:bimlflex-app-reference-documentation-setting-DmAppendDim) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Dimension object names.|
|[Append Fact](xref:bimlflex-app-reference-documentation-setting-DmAppendFact) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Fact object names.|
|[Append Staging](xref:bimlflex-app-reference-documentation-setting-DmAppendStaging) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to the Data Mart staging object names.|
|[Infer Dimension Members](xref:bimlflex-app-reference-documentation-setting-DmInferDim) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Data Mart process infers Dimension Members.|
|[Stage On Initial Load](xref:bimlflex-app-reference-documentation-setting-DmStageOnInitialLoad) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Data Mart stage process executes as part of an initial load.|
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Schema name is appended to Object names in the Data Mart.|
|[Apply Lookup Filter](xref:bimlflex-app-reference-documentation-setting-ApplyLookupFilterDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the SSIS Lookup checks for existing rows and applies a filter condition when joining the source table to the destination table. This applies to Data Mart processing and aims to optimize memory usage.|
|[Display Database Name](xref:bimlflex-app-reference-documentation-setting-DisplayDatabaseNameDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Database name is included in Data Mart object names.|
|[Display Schema Name](xref:bimlflex-app-reference-documentation-setting-DisplaySchemaNameDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Schema name is included in Data Mart object names.|

## Data Vault
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Use Hash Keys](xref:bimlflex-app-reference-documentation-setting-DvUseHashKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Data Vault uses Hash Keys, alternatively Natural Keys can be used by disabling this setting.|
|[Accelerate Link Satellite](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkSatellite) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator creates Link Satellites from source metadata, containing attributes and effectivess attributes.|
|[Accelerate Link Satellite Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkSatelliteKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator adds the Integration Key to Link Satellites.|
|[Append Link Satellite Record Source](xref:bimlflex-app-reference-documentation-setting-DvAppendLinkSatelliteRecordSource) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator appends the Record Source to the Link Satellite name.|
|[Accelerate Hub Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateHubKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator adds source key columns to the Hub in addition to the Integration Key.|
|[Accelerate Link Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator adds source key columns to the Link in addition to the Integration Key.|
|[Apply Data Type Mapping RDV](xref:bimlflex-app-reference-documentation-setting-ApplyDataTypeMappingRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Data Type Mappings are applied to the Raw Data Vault. The Data Type Mappings function allow expansion of data types.|

## Data Vault Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Delete Detection
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Model
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Operations
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Orchestration
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Snowflake
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## SSDT
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## SSIS
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Staging
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Staging Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Staging Persistent
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
