---
uid: bimlflex-app-reference-documentation-settings-index
title: BimlFlex App reference Documentation for Settings
summary: Documentation on metadata and framework settings within BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
# BimlFlex Settings Reference Documentation

This document outlines the metadata and framework **Settings** available in BimlFlex.

These settings drive the behavior of the BimlFlex product.

By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc.

Align these settings with the organizations best practices and environmental requirements.

> [!NOTE]
> For additional information about using **Settings** in BimlFlex, please refer to the [Settings Editor](xref:bimlflex-settings) documentation.

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
|[Create Container](xref:bimlflex-app-reference-documentation-setting-AzCopyCreateContainer) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the pipeline includes a step to create the destination container. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads.|
|[Set Environment Variables](xref:bimlflex-app-reference-documentation-setting-AzCopySetEnvironmentVariables) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the environment variables controlling AzCopy v.10 are set before each object is loaded.|
|[Use SAS Token](xref:bimlflex-app-reference-documentation-setting-AzCopyUseSasToken) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if AzCopy uses a SAS Token for access. This is the only supported authentication mechanism for AzCopy v.10.|

## Azure
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Data Factory Name](xref:bimlflex-app-reference-documentation-setting-AzureDataFactoryName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Data Factory name to use.|
|[Subscription Id](xref:bimlflex-app-reference-documentation-setting-AzureSubscriptionId) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Subscription Id to use.|
|[Resource Group](xref:bimlflex-app-reference-documentation-setting-AzureResourceGroup) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Resource Group name to use.|
|[Key Vault](xref:bimlflex-app-reference-documentation-setting-AzureKeyVault) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Key Vault name to use for Linked Services.|
|[Function Bridge Name](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Function Bridge Name to use.|
|[Function Bridge Key](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Function Bridge Key to use for authentication between the Azure Data Factory and the Azure Function App.|
|[Use Function Bridge Key Vault](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeUseKeyVault) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Azure Function Bridge uses the Azure Key Vault specified in the AzureFunctionBridgeKeyVault settings.|
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
|[Emit Powershell Environment Checks](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentEmitPowerShellCheck) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the PowerShell deployment files include environment verification by calling Get-InstalledModule -Name Az.|
|[File Compression Codec](xref:bimlflex-app-reference-documentation-setting-AzureFileCompressionCodec) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The compression type (Codec) to use for the Azure Data Factory File Dataset.|
|[File Compression Level](xref:bimlflex-app-reference-documentation-setting-AzureFileCompressionLevel) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The compression level to apply for the Azure Data Factory target File Dataset.|
|[File Encoding Name](xref:bimlflex-app-reference-documentation-setting-AzureFileEncodingName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The File Encoding Name for the Azure Data Factory target File Dataset.|
|[File Null Value](xref:bimlflex-app-reference-documentation-setting-AzureFileNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Null value definition to use for the Azure Data Factory target File Dataset.|
|[Archive Stage](xref:bimlflex-app-reference-documentation-setting-AzureArchiveStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the staged Blob Storage files are moved to the defined archive container, once processing is completed. This will use AzCopy v.10 commands, so requires AzCopy v.10 and SAS Tokens for access.|
|[Stage On Extract](xref:bimlflex-app-reference-documentation-setting-AzureStageOnExtract) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Azure-based Extract and Load process runs the stage process for the extracted data in the destination Azure Synapse.|
|[Create Dummy File](xref:bimlflex-app-reference-documentation-setting-AzureCreateDummyFile) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the Staging package copy a "placeholder.dummy" file to accommodate the PolyBase limitation when no files exist.|
|[Create External On Stage](xref:bimlflex-app-reference-documentation-setting-AzureCreateExternalOnStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the Staging process "DROP" and "CREATE EXTERNAL TABLE" before running the Staging Stored Procedure.|
|[External File Conversion](xref:bimlflex-app-reference-documentation-setting-AzureExternalFileConversion) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|By default, the extraction process from a source to blob storage applies several conversions to create files that are supported by PolyBase. This setting allows control of this conversion process.|
|[Distribute Round Robin Temporary Tables](xref:bimlflex-app-reference-documentation-setting-AzureRoundRobinTemporaryTables) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable to use Round Robin distribution in Azure Synapose temporary tables instead of the default Hash distribution.|
|[Archive Landing Files](xref:bimlflex-app-reference-documentation-setting-AzureArchiveLandingFiles) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the landed files are moved to the defined archive container, once processing is completed.|
|[OnError Landing Files](xref:bimlflex-app-reference-documentation-setting-AzureOnErrorLandingFiles) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the landed files are moved to the defined error container on error, once processing is completed.|
|[Delete Landing Files](xref:bimlflex-app-reference-documentation-setting-AzureDeleteLandingFiles) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the landed files are deleted once processing is completed.|

## Azure Copy
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Enable Staging](xref:bimlflex-app-reference-documentation-setting-AzureCopyEnableStaging) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Azure Data Factory Copy Activity uses Staging. Use this together with Copy Method "PolyBase" to load data to PolyBase supported targets.|
|[Staging Settings](xref:bimlflex-app-reference-documentation-setting-AzureCopyStagingSettings) |![Text Datatype](images/svg-icons/biml.svg "Biml Datatype")|The staging settings to use when enabling Staging for the Copy Activity. Use "@@this" to automatically use the Linked Service associated with the PolyBase Landing connection.|
|[Enable Logging](xref:bimlflex-app-reference-documentation-setting-AzureCopyEnableLogging) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable to use logging in the Azure Data Factory Copy Command.|
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
|[Data Consistency Verification](xref:bimlflex-app-reference-documentation-setting-AzureCopyValidateDataConsistency) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Copy Activity validates data consistency for supported sources and sinks.|

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
|[Folder Naming Convention](xref:bimlflex-app-reference-documentation-setting-AzureFolderNamingConvention) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Naming convention to use for Azure Storage Folders.|
|[File Naming Convention](xref:bimlflex-app-reference-documentation-setting-AzureFileNamingConvention) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Naming convention to use for Azure Storage Files.|

## Core
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Add SQL Defaults](xref:bimlflex-app-reference-documentation-setting-AddSqlDefaults) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable to add SQL Default constraints to tables created. SQL Defaults are always added to staging layer tables.|
|[Global Default Date](xref:bimlflex-app-reference-documentation-setting-GlobalDefaultDate) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The global default date to use for timelines.|
|[Convert GUID To String](xref:bimlflex-app-reference-documentation-setting-ConvertGuidToString) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if a source column of type "GUID"/"UniqueIdentifier" is automatically converted to a String data type.|
|[Use BimlCatalog](xref:bimlflex-app-reference-documentation-setting-UseBimlCatalog) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if BimlFlex uses the BimlCatalog database for logging, auditing and configuration variables.|
|[Use Custom Components](xref:bimlflex-app-reference-documentation-setting-UseCustomComponents) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if BimlFlex uses the Ssis Custom Components to log RowCounts and Generate Hash Keys.|
|[Hash Null Value Replacement](xref:bimlflex-app-reference-documentation-setting-HashNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Null value replacement to be used when hashing.|
|[SSIS Hash Null Value Replacement](xref:bimlflex-app-reference-documentation-setting-SsisHashNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Null value replacement to be used when hashing using the Varigence BimlFlex SSIS Custom component.|
|[SSIS Convert Date To String With Scale](xref:bimlflex-app-reference-documentation-setting-SsisConvertDateWithScale) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Used to control the converted DateTime in the FlexToBk to ensure compatability with the SQL code.|
|[Use SSIS Compatable Date Format](xref:bimlflex-app-reference-documentation-setting-UseSsisCompatableDateFormat) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Used to control the converted DateTime in the FlexToBk to ensure compatability with the SQL code.|
|[Integration Key To Upper](xref:bimlflex-app-reference-documentation-setting-IntegrationKeyToUpper) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if strings in the Integration Key will be upper-cased automatically.|
|[Lookup Table Pattern](xref:bimlflex-app-reference-documentation-setting-LookupTablePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The table naming pattern for the Lookup Table.|
|[String Concatenator](xref:bimlflex-app-reference-documentation-setting-StringConcatenator) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string value used in concatenating Integration Keys and Hash values (sanding element). Defaults to "~".|
|[Hash Algorithm](xref:bimlflex-app-reference-documentation-setting-HashAlgorithm) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The hashing algorithm to use. ("MD5"/"SHA1"/"SHA2_256"/"SHA2_512").|
|[Hash Binary](xref:bimlflex-app-reference-documentation-setting-HashBinary) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the generated hash value is stored as a binary representation or as a string representation.|
|[Hash Integration Key](xref:bimlflex-app-reference-documentation-setting-HashIntegrationKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Integration Key is hashed.|
|[Use SQL Compatible Hash](xref:bimlflex-app-reference-documentation-setting-UseSqlCompatibleHash) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the SSIS custom inline hashing component use a hashing approach compatible with the SQL Server "HASHBYTES()" function.|
|[Use SQL Compatible Row Hash](xref:bimlflex-app-reference-documentation-setting-UseSqlCompatibleRowHash) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the SSIS custom inline hashing component for Full Row Hashing use a hashing approach compatible with the SQL Server "HASHBYTES()" function.|
|[Cast Boolean to True False for Hash](xref:bimlflex-app-reference-documentation-setting-UseTrueFalseForBoolean) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the SQL inline hashing function for MSSQL, SQLDB and Synapse converts BIT (Boolean) values to True/False instead of 1/0.|
|[Root Path](xref:bimlflex-app-reference-documentation-setting-RootPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default root path for any other BimlFlex related file operations.|
|[Archive Path](xref:bimlflex-app-reference-documentation-setting-ArchivePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default path for file archive operations.|
|[Export Path](xref:bimlflex-app-reference-documentation-setting-ExportPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default export path for file exports.|
|[Import Path](xref:bimlflex-app-reference-documentation-setting-ImportPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default import path for file imports.|
|[Lookup Cache Path](xref:bimlflex-app-reference-documentation-setting-LookupCachePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default path for Cache files used in lookups.|
|[Configuration Path](xref:bimlflex-app-reference-documentation-setting-ConfigurationPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The folder where SSIS configuration files are stored.|
|[7 Zip Path](xref:bimlflex-app-reference-documentation-setting-7ZipPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The location of the 7-zip executable for zip operations requiring 7-zip.|
|[Archive Import](xref:bimlflex-app-reference-documentation-setting-ArchiveImport) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if imported files are archived after processing.|
|[Zip Archive Import](xref:bimlflex-app-reference-documentation-setting-ZipArchiveImport) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if imported files are compressed when they are archived.|
|[Zip Output File](xref:bimlflex-app-reference-documentation-setting-ZipOutputFile) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determine if the created output file is zipped.|
|[Zip Extract File In Memory](xref:bimlflex-app-reference-documentation-setting-ZipExtractFileInMemory) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the file zip process runs in-memory or through file streams. Files larger than 2 GB are always zipped through file streams.|

## Data Mart
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Dimension](xref:bimlflex-app-reference-documentation-setting-DmAppendDim) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Dimension object names.|
|[Append Fact](xref:bimlflex-app-reference-documentation-setting-DmAppendFact) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Fact object names.|
|[Append Staging](xref:bimlflex-app-reference-documentation-setting-DmAppendStaging) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to the Data Mart staging object names.|
|[Infer Dimension Members](xref:bimlflex-app-reference-documentation-setting-DmInferDim) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Data Mart process infers Dimension Members.|
|[Stage On Initial Load](xref:bimlflex-app-reference-documentation-setting-DmStageOnInitialLoad) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Data Mart stage process executes as part of an initial load.|
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Schema name is appended to Object names in the Data Mart.|
|[Apply Lookup Filter](xref:bimlflex-app-reference-documentation-setting-ApplyLookupFilterDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the SSIS Lookup checks for existing rows and applies a filter condition when joining the source table to the destination table. This applies to Data Mart processing and aims to optimize memory usage.|
|[Display Database Name](xref:bimlflex-app-reference-documentation-setting-DisplayDatabaseNameDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Database name is included in Data Mart object names.|
|[Display Schema Name](xref:bimlflex-app-reference-documentation-setting-DisplaySchemaNameDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Schema name is included in Data Mart object names.|

## Data Vault
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Use Hash Keys](xref:bimlflex-app-reference-documentation-setting-DvUseHashKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Data Vault uses Hash Keys. Alternatively, Natural Keys can be used by disabling this setting.|
|[Accelerate Link Satellite](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkSatellite) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator creates Link Satellites from source metadata, containing attributes and effectivess attributes.|
|[Accelerate Link Satellite Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkSatelliteKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator adds the Integration Key to Link Satellites.|
|[Append Link Satellite Record Source](xref:bimlflex-app-reference-documentation-setting-DvAppendLinkSatelliteRecordSource) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator appends the Record Source to the Link Satellite name.|
|[Accelerate Hub Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateHubKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator adds source key columns to the Hub in addition to the Integration Key.|
|[Accelerate Link Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator adds source key columns to the Link in addition to the Integration Key.|
|[Accelerate Link Integration Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkIntegrationKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Accelerate Correct Key Names](xref:bimlflex-app-reference-documentation-setting-DvAccelerateCorrectKeyNames) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the Accelerator correct Integration Key names based on the Object Business Name|
|[Apply Data Type Mapping RDV](xref:bimlflex-app-reference-documentation-setting-ApplyDataTypeMappingRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Data Type Mappings are applied to the Raw Data Vault. The Data Type Mappings function allow expansion of data types.|
|[Naming Convention](xref:bimlflex-app-reference-documentation-setting-DvNamingConvention) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Naming convention to use for Data Vault Accelerator.|
|[Stage Reduce Link Keys](xref:bimlflex-app-reference-documentation-setting-StageReduceLinkKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable this to reduce additional Link hash keys in the staging table.|
|[Accelerate Show Columns](xref:bimlflex-app-reference-documentation-setting-DvAccelerateShowColumns) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable to set the default Accelerator view to show all Columns.|
|[Accelerate Show Expanded](xref:bimlflex-app-reference-documentation-setting-DvAccelerateShowExpanded) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable to set the default Accelerator view to show the Expanded view (Hubs, Links and Satellites) instead of the Data Vault Backbone (Only Hubs and Links).|
|[Process On Stage](xref:bimlflex-app-reference-documentation-setting-DvProcessOnStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Data Vault stored procedure is called after the Extract has been done. For Azure projects this must be combined with "AzureStageOnExtract".|
|[Infer Link Hub](xref:bimlflex-app-reference-documentation-setting-DvInferLinkHub) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Data Vault process loads all involved Hubs when a Link table is loaded, independent of Hub loads from referenced tables. Enabling this setting will force BimlFlex to always load all corresponding Hub tables when a Link is loaded from a given source, even though this could be redundant because the Hub information may be provided by referenced tables.This applies to scenarios where the source system reliably manages referential integrity.|
|[Apply Lookup Filter RDV](xref:bimlflex-app-reference-documentation-setting-ApplyLookupFilterRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|For Staging-to-Data Vault processes, determines if the SSIS Lookup checks for existing rows by applying a filter condition joining the staging table to the destination table. This is to optimize memory usage.|
|[End Date Satellite](xref:bimlflex-app-reference-documentation-setting-DvEndDateSatellite) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if end dating is applied to the Raw Data Vault Satellites.|
|[Single Change Satellite](xref:bimlflex-app-reference-documentation-setting-DvSingleChangeSatellite) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable if loading into Data Vault and the Delta only has single changes to each key. This will provide optimized ELT loads.|
|[ELT Delta Is Derived](xref:bimlflex-app-reference-documentation-setting-DvEltDeltaIsDerived) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable if loading into Data Vault and the Delta has already been derived. This will provide optimized ELT loads for scenarios like streams or insert only transaction source tables.|
|[Use Cache Lookup](xref:bimlflex-app-reference-documentation-setting-DvUseCacheLookup) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enables using the file based cache lookup feature of SSIS (for lookups).|
|[Use Transactions](xref:bimlflex-app-reference-documentation-setting-DvUseTransactions) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable to wrap Data Vault ELT load processes in transaction statements.|
|[Use Where Exists](xref:bimlflex-app-reference-documentation-setting-DvUseWhereExists) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable to use WHERE EXISTS type SQL statements instead of LEFT JOIN type statements for lookups in ELT processing.|
|[Pushdown Parallel Processing](xref:bimlflex-app-reference-documentation-setting-DvParallelProcessing) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Stage Surrogate Keys](xref:bimlflex-app-reference-documentation-setting-DvStageSurrogateKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Bridge Lag Days](xref:bimlflex-app-reference-documentation-setting-DvBridgeLagDays) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specify the number of days the Bridge process should go back and look for changes to reprocess.|
|[Pit Lag Days](xref:bimlflex-app-reference-documentation-setting-DvPitLagDays) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specify the number of days the Point-In-Time process should go back and look for changes to reprocess.|

## Data Vault Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Hub](xref:bimlflex-app-reference-documentation-setting-DvAppendHub) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Hub names.|
|[Append Link](xref:bimlflex-app-reference-documentation-setting-DvAppendLink) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Link names.|
|[Append Link Satellite](xref:bimlflex-app-reference-documentation-setting-DvAppendLinkSatellite) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Link Satellite names.|
|[Append Satellite](xref:bimlflex-app-reference-documentation-setting-DvAppendSatellite) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|he string to append to Satellite names.|
|[Append Point In Time](xref:bimlflex-app-reference-documentation-setting-DvAppendPointInTime) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Point In Time table names.|
|[Append Bridge](xref:bimlflex-app-reference-documentation-setting-DvAppendBridge) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Bridge table names.|
|[Append Surrogate Key](xref:bimlflex-app-reference-documentation-setting-AppendSurrogateKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Surrogate/Hash Key column names.|
|[Default Schema](xref:bimlflex-app-reference-documentation-setting-DvDefaultSchema) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default schema to use for the Raw Data Vault.|
|[Prefix Surrogate Key](xref:bimlflex-app-reference-documentation-setting-DvPrefixSurrogateKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Should we prefix the Hubs and Links Surrogate Keys.|
|[Append Reference](xref:bimlflex-app-reference-documentation-setting-DvAppendReference) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Reference table names.|
|[Append Hierarchy Link](xref:bimlflex-app-reference-documentation-setting-DvAppendHierarchyLink) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Hierarchical Link names.|
|[Append Same As Link](xref:bimlflex-app-reference-documentation-setting-DvAppendSameAsLink) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Same-As Link names.|
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the schema is appended to the names of accelerated Data Vault object.|
|[Display Database Name](xref:bimlflex-app-reference-documentation-setting-DisplayDatabaseNameRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the database name is displayed in the Raw Data Vault.|
|[Display Schema Name](xref:bimlflex-app-reference-documentation-setting-DisplaySchemaNameRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the schema name is displayed in the Raw Data Vault|

## Delete Detection
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Apply Delete Detection PSA](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionApplyPsa) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Use the default process to insert detected deletes into the Persistent Staging Area table.|
|[Apply Delete Detection RDV](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionApplyRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Use the default process to insert detected deletes into the Data Vault Satellite tables.|
|[Enable Delete Detection](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionEnabled) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if BimlFlex applies a separate key load pattern that will enable detection of hard deletes in the source|

## Model
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Naming Convention](xref:bimlflex-app-reference-documentation-setting-BmNamingConvention) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Use Short Names for Hubs](xref:bimlflex-app-reference-documentation-setting-BmUseShortNames) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Apply Naming Convention](xref:bimlflex-app-reference-documentation-setting-ApplyNamingConvention) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Naming convention to use for objects and columns.|
|[Infer Integration Key From](xref:bimlflex-app-reference-documentation-setting-InferIntegrationKeyFrom) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The convention to infer the `Integration Key` from. Case sensitive options are "None", "PrimaryKey", "UniqueKey", "FirstColumn", "IdentityColumn" and "ColumnName::[NameOfColumn]".|
|[Retain Existing Metadata](xref:bimlflex-app-reference-documentation-setting-RetainExistingMetadata) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Comma-separated list that contains the existing Metadata that should be retained when doing an import of existing data.|
|[Pad Integration Key](xref:bimlflex-app-reference-documentation-setting-PadIntegrationKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Number of Characters to pad the Integration Key to.|
|[Append Integration Key](xref:bimlflex-app-reference-documentation-setting-AppendIntegrationKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Integration Keys.|
|[Key Ends With](xref:bimlflex-app-reference-documentation-setting-KeyEndsWith) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The strings that BimlFlex interprets as key identifiers.|
|[Add Record Source To Integration Key](xref:bimlflex-app-reference-documentation-setting-AddRecordSourceToIntegrationKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Import Metadata will add "@@rs" to Integration Keys if true.|
|[Change References To Integration Key](xref:bimlflex-app-reference-documentation-setting-ChangeReferencesToIntegrationKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Import Metadata feature adds derived Integration Keys based on source references, or use source columns for references.|
|[Import Views](xref:bimlflex-app-reference-documentation-setting-ImportViews) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if database Views are imported when importing Metadata.|
|[Integration Key Concatenation Order](xref:bimlflex-app-reference-documentation-setting-IntegrationKeyConcatenationOrder) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Determines the column order in the derived Integration Key.|

## Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Suffix Or Prefix Column](xref:bimlflex-app-reference-documentation-setting-SuffixOrPrefixColumn) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The "SuffixOrPrefixColumn" key defines the behavior when defining column names.|
|[Suffix Or Prefix Object](xref:bimlflex-app-reference-documentation-setting-SuffixOrPrefixObject) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The "SuffixOrPrefixObject" key defines the behavior when naming objects.|
|[Append Procedure Name](xref:bimlflex-app-reference-documentation-setting-AppendProcedureName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to procedure names.|
|[Append Batch Name](xref:bimlflex-app-reference-documentation-setting-AppendBatchName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Batch names.|
|[Append Load From Psa Name](xref:bimlflex-app-reference-documentation-setting-AppendLoadFromPsaName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to the Load From PSA process name.|
|[Stage Column With Business Name](xref:bimlflex-app-reference-documentation-setting-StageColumnWithBusinessName) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|When defining a Business Name for an Column in the Business Overrides section, setting this to true will use the Business Name as the staging column name.|
|[Stage Object With Business Name](xref:bimlflex-app-reference-documentation-setting-StageObjectWithBusinessName) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|When defining a Business Name for an Object in the Business Overrides section, setting this to true will use the Business Name as the staging table name.|
|[Use Record Source As Append](xref:bimlflex-app-reference-documentation-setting-UseRecordSourceAsAppend) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Specifies if the record source should be appended to object names|
|[Use Record Source As Schema](xref:bimlflex-app-reference-documentation-setting-UseRecordSourceAsSchema) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the `Record Source` is used as the schema name for Staging and Persistent Staging Area tables.|

## Operations
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Archive Retention Period](xref:bimlflex-app-reference-documentation-setting-ArchiveRetentionPeriod) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The archive data retention period to use for the BimlFlex database cleanup process.|
|[Snapshot Retention Period](xref:bimlflex-app-reference-documentation-setting-SnapshotRetentionPeriod) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The snapshot data retention period to use for the BimlFlex database cleanup process.|

## Orchestration
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Constraint Mode STG](xref:bimlflex-app-reference-documentation-setting-ConstraintModeStg) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The table reference constraint mode to apply for the STG (Staging) tables in BimlStudio for diagram previewing. Allowed values are "DoNotCreate", "CreateAndNoCheck" and "CreateAndCheck".|
|[Constraint Mode DV](xref:bimlflex-app-reference-documentation-setting-ConstraintModeDv) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The table reference constraint mode to apply for the Data Vault database. Allowed values are "DoNotCreate", "CreateAndNoCheck" and "CreateAndCheck".|
|[Constraint Mode DM](xref:bimlflex-app-reference-documentation-setting-ConstraintModeDm) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The table reference constraint mode to apply for the Data Mart database. Allowed values are "DoNotCreate", "CreateAndNoCheck" and "CreateAndCheck".|
|[Rollback STG](xref:bimlflex-app-reference-documentation-setting-EnableRollbackStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Batch orchestration engine rolls back (delete) committed changes to the Staging database in case of a failed process.|
|[Rollback PSA](xref:bimlflex-app-reference-documentation-setting-EnableRollbackPsa) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Batch orchestration engine rolls back (deletes) committed changes to the Persistent Staging database in case of a failed process.|
|[Rollback DV](xref:bimlflex-app-reference-documentation-setting-EnableRollbackRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Batch orchestration engine rolls back (deletes) committed changes to the Data Vault database in case of a failed process.|

## Snowflake
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Account](xref:bimlflex-app-reference-documentation-setting-SnowflakeAccount) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake account name to use.|
|[Region](xref:bimlflex-app-reference-documentation-setting-SnowflakeRegion) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake region to use.|
|[Warehouse](xref:bimlflex-app-reference-documentation-setting-SnowflakeWarehouse) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake warehouse name to use.|
|[Database](xref:bimlflex-app-reference-documentation-setting-SnowflakeDatabase) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake database name to use.|
|[Schema](xref:bimlflex-app-reference-documentation-setting-SnowflakeSchema) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake schema name to use.|
|[Password](xref:bimlflex-app-reference-documentation-setting-SnowflakePassword) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake password to use.|
|[User](xref:bimlflex-app-reference-documentation-setting-SnowflakeUser) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake user name to use.|
|[SnowSQL Config](xref:bimlflex-app-reference-documentation-setting-SnowSqlConfig) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Location of the Snowflake SnowSQL configuration file.|
|[SnowSQL Path](xref:bimlflex-app-reference-documentation-setting-SnowSqlPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The path to the local installation of the Snowflake SnowSQL CLI Client tool.|
|[SnowSQL Connection](xref:bimlflex-app-reference-documentation-setting-SnowSqlConnection) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake SnowSQL connection to use.|
|[File Format](xref:bimlflex-app-reference-documentation-setting-SnowflakeFileFormat) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Snowflake file format to use.|
|[Remove Stage](xref:bimlflex-app-reference-documentation-setting-SnowflakeRemoveStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Snowflake stage is removed prior to loading the new stage file.|
|[Auto Suspend](xref:bimlflex-app-reference-documentation-setting-SnowflakeAutoSuspend) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines where the Snowflake database can Auto Suspend.|
|[Scale Up](xref:bimlflex-app-reference-documentation-setting-SnowflakeScaleUp) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Snowflake processing should scale up the Snowflake Warehouse at the start of the Batch.|
|[Scale Up Size](xref:bimlflex-app-reference-documentation-setting-SnowflakeScaleUpSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The size the Snowflake Warehouse can be scaled up to.|
|[Scale Down](xref:bimlflex-app-reference-documentation-setting-SnowflakeScaleDown) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Snowflake processing should scale down the Snowflake Warehouse at end of the Batch.|
|[Scale Down Size](xref:bimlflex-app-reference-documentation-setting-SnowflakeScaleDownSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The size the Snowflake Warehouse can be scaled down to.|
|[Output Path](xref:bimlflex-app-reference-documentation-setting-SnowDtOutputPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The folder where SnowDT database files are created.|

## SSDT
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Include .NET Core Project Support](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeNetCoreSupport) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if SSDT Project files and build script files are created with .NET Core support.|
|[.NET Core Targets Path](xref:bimlflex-app-reference-documentation-setting-NetCoreTargetsPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The folder where the .NET Core Target and build support files are located.|
|[Output Path](xref:bimlflex-app-reference-documentation-setting-SsdtOutputPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The folder where SSDT database projects are created.|
|[Suppress TSql Build Warnings](xref:bimlflex-app-reference-documentation-setting-SsdtSuppressTSqlWarnings) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Suppress TSql Build Warnings.|
|[Include External Tables](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeExternalTables) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if External Tables are included in the generated SSDT Project.|
|[Overwrite External Table Defaults](xref:bimlflex-app-reference-documentation-setting-SsdtOverwriteExternalTableDefaults) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if existing external table-related files are overwritten.|
|[Include Master Key](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeMasterKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Master Key statement is includes in the SSDT Project.|
|[Default Master Key](xref:bimlflex-app-reference-documentation-setting-SsdtDefaultMasterKey) |![Text Datatype](images/svg-icons/sql.svg "SQL Datatype")|The default Master Key SQL Statement to use.|
|[Include Credential](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeCredential) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Credential statement is included in the SSDT Project.|
|[Default Credential](xref:bimlflex-app-reference-documentation-setting-SsdtDefaultCredential) |![Text Datatype](images/svg-icons/sql.svg "SQL Datatype")|The default Credential SQL Statement to use.|
|[Include External Data Source](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeExternalDataSource) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|etermines if the External Data Source statement is included in the SSDT Project.|
|[Default External Data Source](xref:bimlflex-app-reference-documentation-setting-SsdtDefaultExternalDataSource) |![Text Datatype](images/svg-icons/sql.svg "SQL Datatype")|The default External Data Source SQL Statement to use.|
|[Include External File Format](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeExternalFileFormat) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the External File Format statement is included in the generated SSDT Project.|
|[Default External File Format](xref:bimlflex-app-reference-documentation-setting-SsdtDefaultExternalFileFormat) |![Text Datatype](images/svg-icons/sql.svg "SQL Datatype")|The default External File Format SQL Statement to use.|

## SSIS
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Server](xref:bimlflex-app-reference-documentation-setting-SsisServer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The SSIS Server name to use for generated deployment script files.|
|[SSISDB](xref:bimlflex-app-reference-documentation-setting-SsisDb) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The SSISDB database name to use for generated deployment script files.|
|[Folder](xref:bimlflex-app-reference-documentation-setting-SsisFolder) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The SSIS Catalog folder name to use for generated deployment script files.|
|[Create Folder](xref:bimlflex-app-reference-documentation-setting-SsisCreateFolder) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Add Create SSIS Catalog Folder in SSIS deployment script files.|
|[SqlCmd Override](xref:bimlflex-app-reference-documentation-setting-SqlCmdOverride) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Override the `sqlcmd` connection in the Create SSIS Catalog folder in the deployment script.|
|[BLOB Temp Storage Path](xref:bimlflex-app-reference-documentation-setting-SsisBLOBTempStoragePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Blob Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory.|
|[Buffer Temp Storage Path](xref:bimlflex-app-reference-documentation-setting-SsisBufferTempStoragePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Buffer Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory.|
|[Command Timeout](xref:bimlflex-app-reference-documentation-setting-SsisCommandTimeout) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|SSIS Command Timeout to use. Override the value here to change the default SSIS behavior.|
|[Auto Adjust Buffer Size](xref:bimlflex-app-reference-documentation-setting-SsisAutoAdjustBufferSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|SSIS Auto Adjust Buffer Size configuration for supported SQL Server versions.|
|[Check Constraints](xref:bimlflex-app-reference-documentation-setting-SsisCheckConstraints) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|SSIS Destination configuration for checking constraints. Defaults to "False", as that is recommended for data warehouse destinations.|
|[Default Buffer Max Rows](xref:bimlflex-app-reference-documentation-setting-SsisDefaultBufferMaxRows) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|SSIS Data Flow configuration for Default Buffer Max Rows for supported destinations.|
|[Default Buffer Size](xref:bimlflex-app-reference-documentation-setting-SsisDefaultBufferSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|SSIS Data Flow configuration for Default Buffer Size for supported destinations.|
|[Delay Validation](xref:bimlflex-app-reference-documentation-setting-SsisDelayValidation) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Determines if generated SSIS packages use delayed validation for metadata validation.|
|[Engine Threads](xref:bimlflex-app-reference-documentation-setting-SsisEngineThreads) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Maximum number of SSIS engine threads to employ.|
|[Max Concurrent Executables](xref:bimlflex-app-reference-documentation-setting-SsisMaxConcurrentExecutables) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Maximum number of concurrent SSIS executables to employ.|
|[Maximum Insert Commit Size](xref:bimlflex-app-reference-documentation-setting-SsisMaximumInsertCommitSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|SSIS Data Flow configuration for Maximum Insert Commit Size for supported destinations.|
|[Process Subfolders](xref:bimlflex-app-reference-documentation-setting-SsisProcessSubfolders) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Determines if a flat file source loop loads files in subfolders, of the specified source folder.|
|[Rows Per Batch](xref:bimlflex-app-reference-documentation-setting-SsisRowsPerBatch) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|SSIS Data Flow configuration for Rows Per Batch for supported destinations.|
|[Validate External Metadata](xref:bimlflex-app-reference-documentation-setting-SsisValidateExternalMetadata) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Determines if generated SSIS packages validate external metadata.|

## Staging
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Persist History](xref:bimlflex-app-reference-documentation-setting-PersistHistory) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Provides an option to override the Connection level attribute "PersistHistory" for more granular control.|
|[Apply Data Type Mapping Stg](xref:bimlflex-app-reference-documentation-setting-ApplyDataTypeMappingStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Data Type Mappings that are applied to source tables are used in the Staging and Persistent Staging databases.|
|[Delete Import File](xref:bimlflex-app-reference-documentation-setting-DeleteImportFile) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if imported files are deleted after processing.|
|[Add Row Hash Key Index](xref:bimlflex-app-reference-documentation-setting-AddRowHashKeyIndex) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable to add a unique, non-clustered constraint on the FlexRowHashKey and EffectiveFromDate columns in staging tables.|
|[Extract File Encoding](xref:bimlflex-app-reference-documentation-setting-ExtractFileEncoding) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|For an extracted file, specify a different encoding than the standard Unicode as produced by the BimlFlex source to file process. Valid choices are "ASCII", "BigEndianUnicode", "UTF32", "UTF7", "UTF8", "Unicode".|
|[Extract File Split Size](xref:bimlflex-app-reference-documentation-setting-ExtractFileSplitSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The file size to split extracted files into multiple files for.|
|[Use UTF8 Data Conversion](xref:bimlflex-app-reference-documentation-setting-SsisExpressUseUTF8DataConversion) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if SSIS Express-based extract packages apply UTF8 data conversion.|
|[Use TRY_CAST Conversion](xref:bimlflex-app-reference-documentation-setting-UseTryCastConversion) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the select-to-stage tables uses TRY_CAST and TRY_CONVERT.|
|[Select Blob Row Order By](xref:bimlflex-app-reference-documentation-setting-SelectBlobRowOrderBy) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Row Order definition to use for Blob source queries.|
|[Select Stage Row Distinct](xref:bimlflex-app-reference-documentation-setting-SelectStageRowDistinct) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the select-to-stage tables apply a row number function based on the defined key, or us a distinct based on the full row including the HASH.|
|[Apply Extract Conversion In Data Flow](xref:bimlflex-app-reference-documentation-setting-ApplyExtractConversionInDataflow) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if SSIS extracts-to-file apply data conversion for target files in the SSIS Data Flow instead of in the source select statement.|

## Staging Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Name External](xref:bimlflex-app-reference-documentation-setting-AppendNameExternal) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to External tables when using PolyBase.|
|[Append Name Landing](xref:bimlflex-app-reference-documentation-setting-AppendNameLanding) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Landing tables when deploying using Azure Data Factory Copy directly to the database.|
|[Schema Name Pattern](xref:bimlflex-app-reference-documentation-setting-SchemaNamePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specific override behavior for the schema name for staging tables and other database assets.|
|[Object Name Pattern](xref:bimlflex-app-reference-documentation-setting-ObjectNamePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specific override behavior for the object name for staging tables.|
|[Delete Object Name Pattern](xref:bimlflex-app-reference-documentation-setting-DeleteObjectNamePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The name to use for the Delete Objects when using Delete Detection.|
|[Delete Schema Name Pattern](xref:bimlflex-app-reference-documentation-setting-DeleteSchemaNamePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The name to use for the Delete objects schema when using Delete detection.|
|[Append Record Source](xref:bimlflex-app-reference-documentation-setting-AppendRecordSource) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the Record Source Code from the connection is appended to the staging object name.|
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the source Schema is appended to the object name in the staging layer.|
|[Display Database Name](xref:bimlflex-app-reference-documentation-setting-DisplayDatabaseNameStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Controls if the source database name should be included in the generated SSIS package name.|
|[Display Schema Name](xref:bimlflex-app-reference-documentation-setting-DisplaySchemaNameStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Controls if the source schema name should be included in the generated SSIS package name.|

## Staging Persistent
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaPsa) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to add to the PSA objects when Staging and Persistent Staging are co-located in the same database.|
|[Temporal Table Pattern Name](xref:bimlflex-app-reference-documentation-setting-PsaTemporalTableName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to add to the Temporal PSA objects when Staging and Persistent Staging are co-located in the same database.|
|[Enable End Date](xref:bimlflex-app-reference-documentation-setting-EnableEndDatePsa) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Apply end dating in the PSA. This will allow timelines to be maintained in the PSA. Disable this to configure an insert-only approach for the PSA for optimized load performance.|
|[Bypass Persistent Checks](xref:bimlflex-app-reference-documentation-setting-StageBypassPsaChecks) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable this to bypass lookups, and directly applies all records to the Staging and Persistent Staging tables.|
|[Use Cache Lookup](xref:bimlflex-app-reference-documentation-setting-PsaUseCacheLookup) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the PSA lookup caches the data to disk when using SSIS. Use this if it is not possible to use the normal in-memory lookup behavior due to memory constraints.|
|[Disable Stage, Persist Only](xref:bimlflex-app-reference-documentation-setting-DisableStgPsaOnly) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable this to skip the staging layer and only persist changes directly in the PSA. This applies to SSIS output only.|
|[Delta Collapse Rows](xref:bimlflex-app-reference-documentation-setting-PsaDeltaCollapseRows) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the PSA Processing apply row collapsing logic.|
|[Delta Detection in SQL](xref:bimlflex-app-reference-documentation-setting-PsaDeltaDetectionSql) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the delta detection applied when loading changes to the PSA uses a SQL procedure that runs on the Staging Area table, and not as part of the PSA pattern.|
|[Delta Is Late Arriving](xref:bimlflex-app-reference-documentation-setting-PsaDeltaLateArriving) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Does the PSA load include late arriving deltas.|
|[Delta Is Single Change](xref:bimlflex-app-reference-documentation-setting-PsaDeltaSingleChange) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable this if loading into PSA and the delta only has single changes to each key. This will provide optimized ELT loads.|
|[Delta Stage All Rows](xref:bimlflex-app-reference-documentation-setting-PsaDeltaStageAllRows) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the delta process stages all rows. Otherwise, the process will compress row changes into distinct change rows - removing full row duplicates.|
|[Delta Is Derived](xref:bimlflex-app-reference-documentation-setting-PsaEltDeltaIsDerived) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if a PSA table already receives a data delta. Enable this if loading into PSA and the delta has already been derived earlier.|
|[Merge All Rows](xref:bimlflex-app-reference-documentation-setting-PsaMergeAllRows) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|The Merge All Rows setting will replace the hash (Row Hash Type 1 and Row Hash Type 2) with a NULL value in the source-select of the merge statement. Only applies in the specific case when the source is an "Object" and the target is a "Table".|
|[Truncate PSA If Has Rows](xref:bimlflex-app-reference-documentation-setting-PsaTruncateIfHasRows) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if the PSA table should be truncated if it already contains records. This should be disabled for normal PSA behavior. Enable this for specific requirements where previously loaded rows should be discarded.|
