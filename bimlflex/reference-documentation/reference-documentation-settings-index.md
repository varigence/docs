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
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
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
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Data Factory Name](xref:bimlflex-app-reference-documentation-setting-AzureDataFactoryName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Data Factory name to use.|
|[Subscription Id](xref:bimlflex-app-reference-documentation-setting-AzureSubscriptionId) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Subscription Id to use.|
|[Resource Group](xref:bimlflex-app-reference-documentation-setting-AzureResourceGroup) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Resource Group name to use.|
|[Key Vault](xref:bimlflex-app-reference-documentation-setting-AzureKeyVault) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Key Vault name to use for Linked Services.|
|[Integration Runtime Name](xref:bimlflex-app-reference-documentation-setting-AzureIntegrationRuntime) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Data Factory Self Hosted Integration Runtime name to use for Linked Services.|
|[Integration Runtime Is Shared](xref:bimlflex-app-reference-documentation-setting-AzureIntegrationRuntimeIsShared) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Is the referenced Self Hosted Integration Runtime shared from another Data Factory?|
|[Linked Resource Id](xref:bimlflex-app-reference-documentation-setting-AzureIntegrationRuntimeResourceId) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Resource Id for the referenced Self Hosted Integration Runtime Linked Service that is shared to this Data Factory.|
|[Function Bridge Name](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Function Bridge Name to use.|
|[Function Bridge Key](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The default Azure Function Bridge Key to use for authentication between the Azure Data Factory and the Azure Function App.|
|[Use Function Bridge Key Vault](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeUseKeyVault) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Azure Function Bridge uses the Azure Key Vault specified in the AzureFunctionBridgeKeyVault settings.|
|[Function Bridge Key Vault Name](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKeyVaultName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The name of the Azure Key Vault used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled.|
|[Function Bridge Key Vault Secret](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKeyVaultSecret) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The name of the Azure Key Vault secret used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled.|
|[Function Bridge Key Vault Secret Version](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeKeyVaultSecretVersion) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|An optional Azure Key Vault secret version used by Azure Data Factory to access the function key for the Azure Function Bridge when the "AzureFunctionBridgeUseKeyVault" setting is enabled. If not specified, the current version of the secret will be used.|
|[File Compression Codec](xref:bimlflex-app-reference-documentation-setting-AzureFileCompressionCodec) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The compression type (Codec) to use for the Azure Data Factory File Dataset.|
|[File Compression Level](xref:bimlflex-app-reference-documentation-setting-AzureFileCompressionLevel) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The compression level to apply for the Azure Data Factory target File Dataset.|
|[File Encoding Name](xref:bimlflex-app-reference-documentation-setting-AzureFileEncodingName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The File Encoding Name for the Azure Data Factory target File Dataset.|
|[File Null Value](xref:bimlflex-app-reference-documentation-setting-AzureFileNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Null value definition to use for the Azure Data Factory target File Dataset.|
|[Archive Stage](xref:bimlflex-app-reference-documentation-setting-AzureArchiveStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the staged Blob Storage files are moved to the defined archive container, once processing has completed. This will use AzCopy v.10 commands, so requires AzCopy v.10 and SAS Tokens for access.|
|[Stage On Extract](xref:bimlflex-app-reference-documentation-setting-AzureStageOnExtract) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Azure-based Extract and Load process runs the stage process for the extracted data in the destination Azure Synapse.|
|[Create Dummy File](xref:bimlflex-app-reference-documentation-setting-AzureCreateDummyFile) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the Staging package copy a "placeholder.dummy" file to accommodate the PolyBase limitation when no files exist.|
|[Create External On Stage](xref:bimlflex-app-reference-documentation-setting-AzureCreateExternalOnStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the Staging process "DROP" and "CREATE EXTERNAL TABLE" before running the Staging Stored Procedure.|
|[External File Conversion](xref:bimlflex-app-reference-documentation-setting-AzureExternalFileConversion) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|By default, the extraction process from a source to blob storage applies several conversions to create files that are supported by PolyBase. This setting allows control of this conversion process.|
|[Deployment Container](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentContainer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Storage Container to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment Account Name](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentAccountName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Storage Account name to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment Account Key](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentAccountKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Storage Access Key to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment SAS Token](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentSasToken) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The Storage Access SAS Token to use when accessing Blob Storage for linked ARM template deployment.|
|[Emit Powershell Environment Checks](xref:bimlflex-app-reference-documentation-setting-AzureDeploymentEmitPowerShellCheck) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the PowerShell deployment files include environment verification by calling Get-InstalledModule -Name Az.|

## Azure Copy
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Retry Attempts](xref:bimlflex-app-reference-documentation-setting-AzureCopyRetryAttempts) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Maximum number of retry attempts for Azure Copy.|
|[Retry Interval](xref:bimlflex-app-reference-documentation-setting-AzureCopyRetryInterval) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The number of seconds between each retry attempt for Azure Copy.|
|[Timeout](xref:bimlflex-app-reference-documentation-setting-AzureCopyTimeout) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Maximum amount of time the Azure Copy Activity can run. Default is 7 days. Format is in D.HH:MM:SS.|
|[Secure Input](xref:bimlflex-app-reference-documentation-setting-AzureCopySecureInput) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|When enabled, input from the activity will not be captured in ADF logging.|
|[Secure Output](xref:bimlflex-app-reference-documentation-setting-AzureCopySecureOutput) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|When enabled, output from the activity will not be captured in ADF logging.|
|[Data Integration Units](xref:bimlflex-app-reference-documentation-setting-AzureCopyDataIntegrationUnits) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specify the powerfulness of the copy executor. Value can be 2-256. When you choose "Auto", the Data Factory dynamically applies the optimal DIU setting based on your source-sink pair and data pattern.|
|[Degree of Copy Parallelism](xref:bimlflex-app-reference-documentation-setting-AzureCopyParallelCopies) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|For the Copy Activity, specifies the degree of parallelism that data loading should use.|
|[Data Consistency Verification](xref:bimlflex-app-reference-documentation-setting-AzureCopyValidateDataConsistency) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Copy Activity validates data consistency for supported sources and sinks.|
|[Copy Method](xref:bimlflex-app-reference-documentation-setting-AzureCopyMethod) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|For the Copy Activity, specifies the Copy Method to use. Bulk Insert allows direct inserts to the target. PolyBase allows automatic staging in a Blob Container and loading through external tables and PolyBase to supported targets.|
|[PolyBase Settings](xref:bimlflex-app-reference-documentation-setting-AzurePolybaseSettings) |![Text Datatype](images/svg-icons/biml.svg "Biml Datatype")|The default Azure PolyBase settings to use when using the Copy Method "PolyBase" and enabling Staging for the Copy Activity.|
|[Enable Staging](xref:bimlflex-app-reference-documentation-setting-AzureCopyEnableStaging) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Azure Data Factory Copy Activity uses Staging. Use this together with Copy Method "PolyBase" to load data to PolyBase supported targets.|
|[Staging Settings](xref:bimlflex-app-reference-documentation-setting-AzureCopyStagingSettings) |![Text Datatype](images/svg-icons/biml.svg "Biml Datatype")|The staging settings to use when enabling Staging for the Copy Activity. Use "@@this" to automatically use the Linked Service associated with the PolyBase Landing connection.|
|[Enable Logging](xref:bimlflex-app-reference-documentation-setting-AzureCopyEnableLogging) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Copy Command uses logging.|
|[Log Settings](xref:bimlflex-app-reference-documentation-setting-AzureCopyLogSettings) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The settings for the logging in the Copy Activity, when logging is enabled. Use "@@this" to automatically use the Linked Service associated with the PolyBase Landing connection.|

## Azure Storage
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Archive Container](xref:bimlflex-app-reference-documentation-setting-AzureArchiveContainer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Archive Account Name](xref:bimlflex-app-reference-documentation-setting-AzureArchiveAccountName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Archive Account Key](xref:bimlflex-app-reference-documentation-setting-AzureArchiveAccountKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Archive SAS Token](xref:bimlflex-app-reference-documentation-setting-AzureArchiveSasToken) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Error Container](xref:bimlflex-app-reference-documentation-setting-AzureErrorContainer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Error Account Name](xref:bimlflex-app-reference-documentation-setting-AzureErrorAccountName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Error Account Key](xref:bimlflex-app-reference-documentation-setting-AzureErrorAccountKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Error SAS Token](xref:bimlflex-app-reference-documentation-setting-AzureErrorSasToken) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Stage Container](xref:bimlflex-app-reference-documentation-setting-AzureStageContainer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Stage Account Name](xref:bimlflex-app-reference-documentation-setting-AzureStageAccountName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Stage Account Key](xref:bimlflex-app-reference-documentation-setting-AzureStageAccountKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Stage SAS Token](xref:bimlflex-app-reference-documentation-setting-AzureStageSasToken) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Blob Storage Domain](xref:bimlflex-app-reference-documentation-setting-AzureBlobStorageDomain) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[External File Format](xref:bimlflex-app-reference-documentation-setting-AzureExternalFileFormat) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||

## Core
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Lookup Add Filter Table](xref:bimlflex-app-reference-documentation-setting-LookupAddFilterTable) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Add SQL Comments](xref:bimlflex-app-reference-documentation-setting-AddSqlComments) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether descriptive comments are added to the SQL ELT code.|
|[Global Default Date](xref:bimlflex-app-reference-documentation-setting-GlobalDefaultDate) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Convert GUID To String](xref:bimlflex-app-reference-documentation-setting-ConvertGuidToString) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use BimlCatalog](xref:bimlflex-app-reference-documentation-setting-UseBimlCatalog) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Hash Null Value Replacement](xref:bimlflex-app-reference-documentation-setting-HashNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[SSIS Hash Null Value Replacement](xref:bimlflex-app-reference-documentation-setting-SsisHashNullValue) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Integration Key To Upper](xref:bimlflex-app-reference-documentation-setting-IntegrationKeyToUpper) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Lookup Table Pattern](xref:bimlflex-app-reference-documentation-setting-LookupTablePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[String Concatenator](xref:bimlflex-app-reference-documentation-setting-StringConcatenator) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Hash Algorithm](xref:bimlflex-app-reference-documentation-setting-HashAlgorithm) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Hash Binary](xref:bimlflex-app-reference-documentation-setting-HashBinary) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Hash Integration Key](xref:bimlflex-app-reference-documentation-setting-HashIntegrationKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use SQL Compatible Hash](xref:bimlflex-app-reference-documentation-setting-UseSqlCompatibleHash) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use SQL Compatible Row Hash](xref:bimlflex-app-reference-documentation-setting-UseSqlCompatibleRowHash) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Cast Boolean to True False for Hash](xref:bimlflex-app-reference-documentation-setting-UseTrueFalseForBoolean) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Root Path](xref:bimlflex-app-reference-documentation-setting-RootPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Archive Path](xref:bimlflex-app-reference-documentation-setting-ArchivePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Export Path](xref:bimlflex-app-reference-documentation-setting-ExportPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Import Path](xref:bimlflex-app-reference-documentation-setting-ImportPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Lookup Cache Path](xref:bimlflex-app-reference-documentation-setting-LookupCachePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Configuration Path](xref:bimlflex-app-reference-documentation-setting-ConfigurationPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[7 Zip Path](xref:bimlflex-app-reference-documentation-setting-7ZipPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Archive Import](xref:bimlflex-app-reference-documentation-setting-ArchiveImport) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Zip Archive Import](xref:bimlflex-app-reference-documentation-setting-ZipArchiveImport) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Zip Output File](xref:bimlflex-app-reference-documentation-setting-ZipOutputFile) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determine whether the created output file is zipped.|
|[Zip Extract File In Memory](xref:bimlflex-app-reference-documentation-setting-ZipExtractFileInMemory) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||

## Data Mart
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Dimension](xref:bimlflex-app-reference-documentation-setting-DmAppendDim) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Dimension object names.|
|[Append Fact](xref:bimlflex-app-reference-documentation-setting-DmAppendFact) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Fact object names.|
|[Append Staging](xref:bimlflex-app-reference-documentation-setting-DmAppendStaging) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to the Data Mart staging object names.|
|[Infer Dimension Members](xref:bimlflex-app-reference-documentation-setting-DmInferDim) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Data Mart process infers Dimension Members.|
|[Stage On Initial Load](xref:bimlflex-app-reference-documentation-setting-DmStageOnInitialLoad) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Apply Lookup Filter](xref:bimlflex-app-reference-documentation-setting-ApplyLookupFilterDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Display Database Name](xref:bimlflex-app-reference-documentation-setting-DisplayDatabaseNameDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Database name is included in Data Mart object names.|
|[Display Schema Name](xref:bimlflex-app-reference-documentation-setting-DisplaySchemaNameDm) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Schema name is included in Data Mart object names.|

## Data Vault
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Derive Staged Query](xref:bimlflex-app-reference-documentation-setting-DvDeriveStagedQuery) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Point In Time Default](xref:bimlflex-app-reference-documentation-setting-DvPointInTimeDefault) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use Sequence Keys](xref:bimlflex-app-reference-documentation-setting-DvUseSequenceKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use Virtual Hub](xref:bimlflex-app-reference-documentation-setting-DvUseVirtualHub) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use Hash Keys](xref:bimlflex-app-reference-documentation-setting-DvUseHashKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Data Vault uses Hash Keys, alternatively Natural Keys can be used by disabling this setting.|
|[Accelerate Link Satellite](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkSatellite) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator creates Link Satellites from source metadata, containing attributes and effectivess attributes.|
|[Accelerate Link Satellite Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkSatelliteKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator adds the Integration Key to Link Satellites.|
|[Append Link Satellite Record Source](xref:bimlflex-app-reference-documentation-setting-DvAppendLinkSatelliteRecordSource) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator appends the Record Source to the Link Satellite name.|
|[Accelerate Hub Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateHubKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator adds source key columns to the Hub in addition to the Integration Key.|
|[Accelerate Link Keys](xref:bimlflex-app-reference-documentation-setting-DvAccelerateLinkKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator adds source key columns to the Link in addition to the Integration Key.|
|[Apply Data Type Mapping RDV](xref:bimlflex-app-reference-documentation-setting-ApplyDataTypeMappingRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Data Type Mappings are applied to the Raw Data Vault. The Data Type Mappings function allow expansion of data types.|
|[Stage Reduce Link Keys](xref:bimlflex-app-reference-documentation-setting-StageReduceLinkKeys) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable this to reduce additional Link hash keys in the staging table.|
|[Accelerate Two Way Links](xref:bimlflex-app-reference-documentation-setting-DvAccelerateTwoWayLinks) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the BimlFlex Accelerator splits all Links into Two-Way Links. Otherwise, it will combine all Non Nullable references into a single Link or Unit of Work.|
|[Process On Stage](xref:bimlflex-app-reference-documentation-setting-DvProcessOnStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Infer Link Hub](xref:bimlflex-app-reference-documentation-setting-DvInferLinkHub) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Data Vault process loads all involved Hubs when a Link table is loaded, independent of Hub loads from referenced tables. Enabling this setting will force BimlFlex to always load all corresponding Hub tables when a Link is loaded from a given source, even though this could be redundant because the Hub information may be provided by referenced tables.This applies to scenarios where the source system reliably manages referential integrity.|
|[Apply Lookup Filter RDV](xref:bimlflex-app-reference-documentation-setting-ApplyLookupFilterRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[End Date Satellite](xref:bimlflex-app-reference-documentation-setting-DvEndDateSatellite) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether end dating is applied to the Raw Data Vault Satellites.|
|[Single Change Satellite](xref:bimlflex-app-reference-documentation-setting-DvSingleChangeSatellite) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[ELT Delta Is Derived](xref:bimlflex-app-reference-documentation-setting-DvEltDeltaIsDerived) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use Cache Lookup](xref:bimlflex-app-reference-documentation-setting-DvUseCacheLookup) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Bridge Lag Days](xref:bimlflex-app-reference-documentation-setting-DvBridgeLagDays) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specify the number of days the Bridge process should go back and look for changes to reprocess.|
|[Pit Lag Days](xref:bimlflex-app-reference-documentation-setting-DvPitLagDays) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|Specify the number of days the Point-In-Time process should go back and look for changes to reprocess.|

## Data Vault Naming
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Hub](xref:bimlflex-app-reference-documentation-setting-DvAppendHub) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Hub names.|
|[Append Link](xref:bimlflex-app-reference-documentation-setting-DvAppendLink) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Link names.|
|[Append Link Satellite](xref:bimlflex-app-reference-documentation-setting-DvAppendLinkSatellite) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Satellite](xref:bimlflex-app-reference-documentation-setting-DvAppendSatellite) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Point In Time](xref:bimlflex-app-reference-documentation-setting-DvAppendPointInTime) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Bridge](xref:bimlflex-app-reference-documentation-setting-DvAppendBridge) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to Bridge names.|
|[Append Surrogate Key](xref:bimlflex-app-reference-documentation-setting-AppendSurrogateKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Default Schema](xref:bimlflex-app-reference-documentation-setting-DvDefaultSchema) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Preview Schema](xref:bimlflex-app-reference-documentation-setting-DvPreviewSchema) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Reference](xref:bimlflex-app-reference-documentation-setting-DvAppendReference) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Hierarchy Link](xref:bimlflex-app-reference-documentation-setting-DvAppendHierarchyLink) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Same As Link](xref:bimlflex-app-reference-documentation-setting-DvAppendSameAsLink) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Display Database Name](xref:bimlflex-app-reference-documentation-setting-DisplayDatabaseNameRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Display Schema Name](xref:bimlflex-app-reference-documentation-setting-DisplaySchemaNameRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||

## Delete Detection
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Enable Delete Detection](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionEnabled) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Apply Delete Detection PSA](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionApplyPsa) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Apply Delete Detection RDV](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionApplyRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||

## Model
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Apply Naming Convention](xref:bimlflex-app-reference-documentation-setting-ApplyNamingConvention) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Infer Integration Key From](xref:bimlflex-app-reference-documentation-setting-InferIntegrationKeyFrom) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Retain Existing Metadata](xref:bimlflex-app-reference-documentation-setting-RetainExistingMetadata) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Pad Integration Key](xref:bimlflex-app-reference-documentation-setting-PadIntegrationKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Integration Key](xref:bimlflex-app-reference-documentation-setting-AppendIntegrationKey) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Key Ends With](xref:bimlflex-app-reference-documentation-setting-KeyEndsWith) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Add Record Source To Integration Key](xref:bimlflex-app-reference-documentation-setting-AddRecordSourceToIntegrationKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Change References To Integration Key](xref:bimlflex-app-reference-documentation-setting-ChangeReferencesToIntegrationKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Import Views](xref:bimlflex-app-reference-documentation-setting-ImportViews) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||

## Naming
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Suffix Or Prefix Column](xref:bimlflex-app-reference-documentation-setting-SuffixOrPrefixColumn) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Domain](xref:bimlflex-app-reference-documentation-setting-AppendDomain) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Suffix Or Prefix Object](xref:bimlflex-app-reference-documentation-setting-SuffixOrPrefixObject) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Procedure Name](xref:bimlflex-app-reference-documentation-setting-AppendProcedureName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Batch Name](xref:bimlflex-app-reference-documentation-setting-AppendBatchName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Append Load From Psa Name](xref:bimlflex-app-reference-documentation-setting-AppendLoadFromPsaName) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Stage Column With Business Name](xref:bimlflex-app-reference-documentation-setting-StageColumnWithBusinessName) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Stage Object With Business Name](xref:bimlflex-app-reference-documentation-setting-StageObjectWithBusinessName) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use Record Source As Append](xref:bimlflex-app-reference-documentation-setting-UseRecordSourceAsAppend) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use Record Source As Schema](xref:bimlflex-app-reference-documentation-setting-UseRecordSourceAsSchema) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||

## Operations
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Archive Retention Period](xref:bimlflex-app-reference-documentation-setting-ArchiveRetentionPeriod) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The archive data retention period to use for the BimlFlex database cleanup process.|
|[Snapshot Retention Period](xref:bimlflex-app-reference-documentation-setting-SnapshotRetentionPeriod) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The snapshot data retention period to use for the BimlFlex database cleanup process.|

## Orchestration
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Constraint Mode STG](xref:bimlflex-app-reference-documentation-setting-ConstraintModeStg) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Constraint Mode DV](xref:bimlflex-app-reference-documentation-setting-ConstraintModeDv) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Constraint Mode DM](xref:bimlflex-app-reference-documentation-setting-ConstraintModeDm) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Rollback STG](xref:bimlflex-app-reference-documentation-setting-EnableRollbackStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Rollback PSA](xref:bimlflex-app-reference-documentation-setting-EnableRollbackPsa) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Rollback DV](xref:bimlflex-app-reference-documentation-setting-EnableRollbackRdv) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||

## Snowflake
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Account](xref:bimlflex-app-reference-documentation-setting-SnowflakeAccount) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Region](xref:bimlflex-app-reference-documentation-setting-SnowflakeRegion) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Warehouse](xref:bimlflex-app-reference-documentation-setting-SnowflakeWarehouse) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Database](xref:bimlflex-app-reference-documentation-setting-SnowflakeDatabase) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Schema](xref:bimlflex-app-reference-documentation-setting-SnowflakeSchema) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Password](xref:bimlflex-app-reference-documentation-setting-SnowflakePassword) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[User](xref:bimlflex-app-reference-documentation-setting-SnowflakeUser) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[SnowSQL Config](xref:bimlflex-app-reference-documentation-setting-SnowSqlConfig) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[SnowSQL Path](xref:bimlflex-app-reference-documentation-setting-SnowSqlPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[SnowSQL Connection](xref:bimlflex-app-reference-documentation-setting-SnowSqlConnection) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[File Format](xref:bimlflex-app-reference-documentation-setting-SnowflakeFileFormat) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Remove Stage](xref:bimlflex-app-reference-documentation-setting-SnowflakeRemoveStage) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Auto Suspend](xref:bimlflex-app-reference-documentation-setting-SnowflakeAutoSuspend) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Scale Up](xref:bimlflex-app-reference-documentation-setting-SnowflakeScaleUp) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Scale Up Size](xref:bimlflex-app-reference-documentation-setting-SnowflakeScaleUpSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Scale Down](xref:bimlflex-app-reference-documentation-setting-SnowflakeScaleDown) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Scale Down Size](xref:bimlflex-app-reference-documentation-setting-SnowflakeScaleDownSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Output Path](xref:bimlflex-app-reference-documentation-setting-SnowDtOutputPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||

## SSDT
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Include Master Key](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeMasterKey) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Default Master Key](xref:bimlflex-app-reference-documentation-setting-SsdtDefaultMasterKey) |![Text Datatype](images/svg-icons/sql.svg "SQL Datatype")||
|[Include Credential](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeCredential) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Default Credential](xref:bimlflex-app-reference-documentation-setting-SsdtDefaultCredential) |![Text Datatype](images/svg-icons/sql.svg "SQL Datatype")||
|[Include External Data Source](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeExternalDataSource) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Default External Data Source](xref:bimlflex-app-reference-documentation-setting-SsdtDefaultExternalDataSource) |![Text Datatype](images/svg-icons/sql.svg "SQL Datatype")||
|[Include External File Format](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeExternalFileFormat) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Default External File Format](xref:bimlflex-app-reference-documentation-setting-SsdtDefaultExternalFileFormat) |![Text Datatype](images/svg-icons/sql.svg "SQL Datatype")||
|[Output Path](xref:bimlflex-app-reference-documentation-setting-SsdtOutputPath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Include External Tables](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeExternalTables) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Overwrite External Table Defaults](xref:bimlflex-app-reference-documentation-setting-SsdtOverwriteExternalTableDefaults) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Include .NET Core Project Support](xref:bimlflex-app-reference-documentation-setting-SsdtIncludeNetCoreSupport) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||

## SSIS
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Server](xref:bimlflex-app-reference-documentation-setting-SsisServer) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[SSISDB](xref:bimlflex-app-reference-documentation-setting-SsisDb) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Folder](xref:bimlflex-app-reference-documentation-setting-SsisFolder) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[BLOB Temp Storage Path](xref:bimlflex-app-reference-documentation-setting-SsisBLOBTempStoragePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Buffer Temp Storage Path](xref:bimlflex-app-reference-documentation-setting-SsisBufferTempStoragePath) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Command Timeout](xref:bimlflex-app-reference-documentation-setting-SsisCommandTimeout) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Auto Adjust Buffer Size](xref:bimlflex-app-reference-documentation-setting-SsisAutoAdjustBufferSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Check Constraints](xref:bimlflex-app-reference-documentation-setting-SsisCheckConstraints) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Default Buffer Max Rows](xref:bimlflex-app-reference-documentation-setting-SsisDefaultBufferMaxRows) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Default Buffer Size](xref:bimlflex-app-reference-documentation-setting-SsisDefaultBufferSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Delay Validation](xref:bimlflex-app-reference-documentation-setting-SsisDelayValidation) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Engine Threads](xref:bimlflex-app-reference-documentation-setting-SsisEngineThreads) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Max Concurrent Executables](xref:bimlflex-app-reference-documentation-setting-SsisMaxConcurrentExecutables) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Maximum Insert Commit Size](xref:bimlflex-app-reference-documentation-setting-SsisMaximumInsertCommitSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Process Subfolders](xref:bimlflex-app-reference-documentation-setting-SsisProcessSubfolders) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Rows Per Batch](xref:bimlflex-app-reference-documentation-setting-SsisRowsPerBatch) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Validate External Metadata](xref:bimlflex-app-reference-documentation-setting-SsisValidateExternalMetadata) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||

## Staging
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Persist History](xref:bimlflex-app-reference-documentation-setting-PersistHistory) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Apply Data Type Mapping Stg](xref:bimlflex-app-reference-documentation-setting-ApplyDataTypeMappingStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Delete Import File](xref:bimlflex-app-reference-documentation-setting-DeleteImportFile) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether imported files are deleted after processing.|
|[Add Row Hash Key Index](xref:bimlflex-app-reference-documentation-setting-AddRowHashKeyIndex) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Extract File Encoding](xref:bimlflex-app-reference-documentation-setting-ExtractFileEncoding) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Extract File Split Size](xref:bimlflex-app-reference-documentation-setting-ExtractFileSplitSize) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Apply Extract Conversion In Data Flow](xref:bimlflex-app-reference-documentation-setting-ApplyExtractConversionInDataFlow) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use UTF8 Data Conversion](xref:bimlflex-app-reference-documentation-setting-SsisExpressUseUTF8DataConversion) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||
|[Use TRY_CAST Conversion](xref:bimlflex-app-reference-documentation-setting-UseTryCastConversion) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the SELECT to STAGE table uses TRY_CAST and TRY_CONVERT.|
|[Select Blob Row Order By](xref:bimlflex-app-reference-documentation-setting-SelectBlobRowOrderBy) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Select Stage Row Distinct](xref:bimlflex-app-reference-documentation-setting-SelectStageRowDistinct) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")||

## Staging Naming
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Name External](xref:bimlflex-app-reference-documentation-setting-AppendNameExternal) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to append to External tables when using PolyBase.|
|[Append Name Landing](xref:bimlflex-app-reference-documentation-setting-AppendNameLanding) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Schema Name Pattern](xref:bimlflex-app-reference-documentation-setting-SchemaNamePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Object Name Pattern](xref:bimlflex-app-reference-documentation-setting-ObjectNamePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Delete Object Name Pattern](xref:bimlflex-app-reference-documentation-setting-DeleteObjectNamePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")||
|[Delete Schema Name Pattern](xref:bimlflex-app-reference-documentation-setting-DeleteSchemaNamePattern) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The name to use for the Delete objects schema when using Delete detection|
|[Append Record Source](xref:bimlflex-app-reference-documentation-setting-AppendRecordSource) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the Record Source Code from the connection is appended to the staging object name.|
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the source Schema is appended to the object name in the staging layer.|
|[Display Database Name](xref:bimlflex-app-reference-documentation-setting-DisplayDatabaseNameStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Controls if the source database name should be included in the generated SSIS package name|
|[Display Schema Name](xref:bimlflex-app-reference-documentation-setting-DisplaySchemaNameStg) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Controls if the source schema name should be included in the generated SSIS package name.|

## Staging Persistent
  
|  <div style="width:175px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Schema](xref:bimlflex-app-reference-documentation-setting-AppendSchemaPsa) |![Text Datatype](images/svg-icons/text.svg "Text Datatype")|The string to add to the PSA objects when Staging and Persistent Staging are co-located in the same database.|
|[Enable End Date](xref:bimlflex-app-reference-documentation-setting-EnableEndDatePsa) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Apply end dating in the PSA. This will allow timelines to be maintained in the PSA. Disable this to configure an insert-only approach for the PSA for optimized load performance.|
|[Bypass Persistent Checks](xref:bimlflex-app-reference-documentation-setting-StageBypassPsaChecks) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable this to bypass lookups, and directly apply all records to the Staging and Persistent Staging tables.|
|[Use Cache Lookup](xref:bimlflex-app-reference-documentation-setting-PsaUseCacheLookup) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the PSA lookup caches the data to disk when using SSIS. Use this if it is not possible to use the normal in-memory lookup behavior due to memory constraints.|
|[Disable Stage, Persist Only](xref:bimlflex-app-reference-documentation-setting-DisableStgPsaOnly) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable this to disable the staging layer and only persist changes to the PSA.|
|[Delta Collapse Rows](xref:bimlflex-app-reference-documentation-setting-PsaDeltaCollapseRows) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the PSA Processing apply row collapsing logic.|
|[Delta Detection in SQL](xref:bimlflex-app-reference-documentation-setting-PsaDeltaDetectionSql) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Should the delta detection for the PSA load use SQL.|
|[Delta Is Late Arriving](xref:bimlflex-app-reference-documentation-setting-PsaDeltaLateArriving) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Does the PSA load include late arriving deltas.|
|[Delta Is Single Change](xref:bimlflex-app-reference-documentation-setting-PsaDeltaSingleChange) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Enable this if loading into PSA and the delta only has single changes to each key. This will provide optimized ELT loads.|
|[Delta Stage All Rows](xref:bimlflex-app-reference-documentation-setting-PsaDeltaStageAllRows) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the delta process stages all rows. Otherwise, the process will compress row changes into distinct change rows - removing full row duplicates.|
|[Delta Is Derived](xref:bimlflex-app-reference-documentation-setting-PsaEltDeltaIsDerived) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines if a PSA table already receives a data delta. Enable this if loading into PSA and the delta has already been derived earlier.|
|[Merge All Rows](xref:bimlflex-app-reference-documentation-setting-PsaMergeAllRows) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the PSA load merges all rows into the destination.|
|[Truncate PSA If Has Rows](xref:bimlflex-app-reference-documentation-setting-PsaTruncateIfHasRows) |![Text Datatype](images/svg-icons/boolean.svg "Boolean Datatype")|Determines whether the PSA table should be truncated if it already contains records. This should be disabled for normal PSA behavior. Enable this for specific requirements where previously loaded rows should be discarded.|
