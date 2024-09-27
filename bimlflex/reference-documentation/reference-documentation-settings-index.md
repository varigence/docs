---
uid: bimlflex-reference-documentation-settings-index
title: BimlFlex Application reference Documentation for Settings
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
> For additional information about using **Settings** in BimlFlex, please refer to the [Settings Editor](xref:bimlflex-setting-editor) documentation.

## AzCopy
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Path](xref:bimlflex-reference-documentation-setting-AzCopyPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The file path to the local installation of the `AzCopy` Command.|
|[Log Location](xref:bimlflex-reference-documentation-setting-AzCopyLogLocation) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Sets the log location for AzCopy v.10 log files to the AZCOPY_LOG_LOCATION environment variable.|
|[Version](xref:bimlflex-reference-documentation-setting-AzCopyVersion) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The AzCopy version used. This should match the AzCopy command found in the AzCopyPath setting. Use a numeric such as 8 or 10 as values to specify the AzCopy version.|
|[Log Level](xref:bimlflex-reference-documentation-setting-AzCopyLogLevel) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The log level for AzCopy v.10 logs. Available log levels are: `NONE`, `DEBUG`, `INFO`, `WARNING`, `ERROR`, `PANIC`, and `FATAL`|
|[Cap Mbps](xref:bimlflex-reference-documentation-setting-AzCopyCapMbps) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The AzCopy v.10 transfer speed cap in Mbps.|
|[Concurrency](xref:bimlflex-reference-documentation-setting-AzCopyConcurrency) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specify the number of concurrent AzCopy operations to start. To reuse the current environment variable without setting this value for each object, leave this blank when using AzCopy v.10.|
|[Use AzCopy](xref:bimlflex-reference-documentation-setting-AzCopyEnabled) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Should the generated files be uploaded using `AzCopy` as part of the SSIS Packages. Disable if the solution uses an alternative file management process.|
|[Create Container](xref:bimlflex-reference-documentation-setting-AzCopyCreateContainer) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the pipeline includes a step to create the destination container. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads.|
|[Set Environment Variables](xref:bimlflex-reference-documentation-setting-AzCopySetEnvironmentVariables) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the environment variables controlling AzCopy v.10 are set before each object is loaded.|
|[Use SAS Token](xref:bimlflex-reference-documentation-setting-AzCopyUseSasToken) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if AzCopy uses a SAS Token for access. This is the only supported authentication mechanism for AzCopy v.10.|

## Azure
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Data Factory Name](xref:bimlflex-reference-documentation-setting-AzureDataFactoryName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default Azure Data Factory name to use.|
|[Data Factory Location](xref:bimlflex-reference-documentation-setting-AzureDataFactoryLocation) |![Text Datatype](../static/svg/text.svg "Text Datatype")|This refers to the geographical location where the Azure Data Factory instance and its associated data operations are hosted.|
|[Subscription Id](xref:bimlflex-reference-documentation-setting-AzureSubscriptionId) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default Azure Subscription Id to use.|
|[Resource Group](xref:bimlflex-reference-documentation-setting-AzureResourceGroup) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default Azure Resource Group name to use.|
|[Key Vault](xref:bimlflex-reference-documentation-setting-AzureKeyVault) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default Azure Key Vault name to use for Linked Services.|
|[ActivityLimit](xref:bimlflex-reference-documentation-setting-AzureDataFactoryActivityLimit) |![Text Datatype](../static/svg/numeric.svg "Numeric Datatype")|Use this setting to increase the number of activities in a single pipeline to up to 80, enabling more parallel calls, especially beneficial for batch pipelines. This enhancement helps optimize performance and efficiency by allowing more concurrent activities within a single data processing workflow.|
|[Integration Runtime Name](xref:bimlflex-reference-documentation-setting-AzureIntegrationRuntime) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default Azure Data Factory Self Hosted Integration Runtime name to use for Linked Services.|
|[Integration Runtime Is Shared](xref:bimlflex-reference-documentation-setting-AzureIntegrationRuntimeIsShared) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Is the referenced Self Hosted Integration Runtime shared from another Data Factory?|
|[Linked Resource Id](xref:bimlflex-reference-documentation-setting-AzureIntegrationRuntimeResourceId) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Resource Id for the referenced Self Hosted Integration Runtime Linked Service that is shared to this Data Factory.|
|[Deployment Container](xref:bimlflex-reference-documentation-setting-AzureDeploymentContainer) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Storage Container to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment Account Name](xref:bimlflex-reference-documentation-setting-AzureDeploymentAccountName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Storage Account name to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment Account Key](xref:bimlflex-reference-documentation-setting-AzureDeploymentAccountKey) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Storage Access Key to use when accessing Blob Storage for linked ARM template deployment.|
|[Deployment SAS Token](xref:bimlflex-reference-documentation-setting-AzureDeploymentSasToken) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Storage Access SAS Token to use when accessing Blob Storage for linked ARM template deployment.|
|[Emit Powershell Environment Checks](xref:bimlflex-reference-documentation-setting-AzureDeploymentEmitPowerShellCheck) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the PowerShell deployment files include environment verification by calling Get-InstalledModule -Name Az.|
|[File Compression Codec](xref:bimlflex-reference-documentation-setting-AzureFileCompressionCodec) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The compression type (Codec) to use for the Azure Data Factory File Dataset.|
|[File Compression Level](xref:bimlflex-reference-documentation-setting-AzureFileCompressionLevel) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The compression level to apply for the Azure Data Factory target File Dataset.|
|[File Encoding Name](xref:bimlflex-reference-documentation-setting-AzureFileEncodingName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The File Encoding Name for the Azure Data Factory target File Dataset.|
|[File Null Value](xref:bimlflex-reference-documentation-setting-AzureFileNullValue) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Null value definition to use for the Azure Data Factory target File Dataset.|
|[Archive Landing Files](xref:bimlflex-reference-documentation-setting-AzureArchiveLandingFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the landed files are moved to the defined archive container, once processing is completed.|
|[OnError Landing Files](xref:bimlflex-reference-documentation-setting-AzureOnErrorLandingFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the landed files are moved to the defined error container on error, once processing is completed.|
|[Delete Landing Files](xref:bimlflex-reference-documentation-setting-AzureDeleteLandingFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the landed files are deleted once processing is completed.|
|[Archive Source Files](xref:bimlflex-reference-documentation-setting-AzureArchiveSourceFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the source files are moved to the defined archive container, once processing is completed.|
|[OnError Source Files](xref:bimlflex-reference-documentation-setting-AzureOnErrorSourceFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the source files are moved to the defined error container on error, once processing is completed.|
|[Delete Source Files](xref:bimlflex-reference-documentation-setting-AzureDeleteSourceFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the source files are deleted once processing is completed.|
|[Archive Stage](xref:bimlflex-reference-documentation-setting-AzureArchiveStage) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the staged Blob Storage files are moved to the defined archive container, once processing is completed. This will use AzCopy v.10 commands, so requires AzCopy v.10 and SAS Tokens for access.|
|[Stage On Extract](xref:bimlflex-reference-documentation-setting-AzureStageOnExtract) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Azure-based Extract and Load process runs the stage process for the extracted data in the destination database.|
|[Create Dummy File](xref:bimlflex-reference-documentation-setting-AzureCreateDummyFile) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Should the Staging package copy a `placeholder.dummy` file to accommodate the PolyBase limitation when no files exist.|
|[Create External On Stage](xref:bimlflex-reference-documentation-setting-AzureCreateExternalOnStage) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Should the Staging process `DROP` and `CREATE EXTERNAL TABLE` before running the Staging Stored Procedure.|
|[External File Conversion](xref:bimlflex-reference-documentation-setting-AzureExternalFileConversion) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|By default, the extraction process from a source to blob storage applies several conversions to create files that are supported the target storage type. This setting allows control of this conversion process.|
|[Distribute Round Robin Temporary Tables](xref:bimlflex-reference-documentation-setting-AzureRoundRobinTemporaryTables) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to use Round Robin distribution in Azure Synapose temporary tables instead of the default Hash distribution.|

## Azure Copy
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Enable Staging](xref:bimlflex-reference-documentation-setting-AzureCopyEnableStaging) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Azure Data Factory Copy Activity uses Staging. Use this together with Copy Method `PolyBase` to load data to PolyBase supported targets.|
|[Staging Settings](xref:bimlflex-reference-documentation-setting-AzureCopyStagingSettings) |![Text Datatype](../static/svg/biml.svg "Biml Datatype")|The staging settings to use when enabling Staging for the Copy Activity. Use `@@this` to automatically use the Linked Service associated with the PolyBase Landing connection.|
|[Enable Logging](xref:bimlflex-reference-documentation-setting-AzureCopyEnableLogging) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to use logging in the Azure Data Factory Copy Activity.|
|[Log Settings](xref:bimlflex-reference-documentation-setting-AzureCopyLogSettings) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The settings for the logging in the Copy Activity, when logging is enabled. Use `@@this` to automatically use the Linked Service associated with the PolyBase Landing connection.|
|[Copy Method](xref:bimlflex-reference-documentation-setting-AzureCopyMethod) |![Text Datatype](../static/svg/text.svg "Text Datatype")|For the Copy Activity, specifies the Copy Method to use. Bulk Insert allows direct inserts to the target. PolyBase allows automatic staging in a Blob Container and loading through external tables and PolyBase to supported targets.|
|[PolyBase Settings](xref:bimlflex-reference-documentation-setting-AzurePolybaseSettings) |![Text Datatype](../static/svg/biml.svg "Biml Datatype")|The default Azure PolyBase settings to use when using the Copy Method `PolyBase` and enabling Staging for the Copy Activity.|
|[Copy Behavior](xref:bimlflex-reference-documentation-setting-AzureCopyBehavior) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Copy Behavior in Azure Copy Activity sets the method of data transfer from source to destination, especially when existing data files are present at the destination.|
|[Source Settings](xref:bimlflex-reference-documentation-setting-AzureCopySourceSettings) |![Text Datatype](../static/svg/biml.svg "Biml Datatype")|Adjust how data is read, controlling query timeout, partitioning for parallel reads, and fault tolerance. Enhances control and optimization of data extraction.|
|[Is Recursive](xref:bimlflex-reference-documentation-setting-AzureCopyIsRecursive) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines whether or not the Copy Activity should recurse into sub-folders of the specified source directory when reading files.|
|[Retry Attempts](xref:bimlflex-reference-documentation-setting-AzureCopyRetryAttempts) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Maximum number of retry attempts for Azure Copy Activity.|
|[Retry Interval](xref:bimlflex-reference-documentation-setting-AzureCopyRetryInterval) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The number of seconds between each retry attempt for Azure Copy Activity.|
|[Timeout](xref:bimlflex-reference-documentation-setting-AzureCopyTimeout) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Maximum amount of time the Azure Copy Activity can run. Default is 7 days. Format is in D.HH:MM:SS.|
|[Secure Input](xref:bimlflex-reference-documentation-setting-AzureCopySecureInput) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When enabled, input from the Azure Copy Activity will not be captured in Azure Data Factory logging.|
|[Secure Output](xref:bimlflex-reference-documentation-setting-AzureCopySecureOutput) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When enabled, output from the Azure Copy Activity will not be captured in Azure Data Factory logging.|
|[Data Integration Units](xref:bimlflex-reference-documentation-setting-AzureCopyDataIntegrationUnits) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specify the powerfulness of the Azure Copy Activity executor. Value can be 2-256. When you choose `Auto`, the Data Factory dynamically applies the optimal DIU setting based on your source-sink pair and data pattern.|
|[Degree of Copy Parallelism](xref:bimlflex-reference-documentation-setting-AzureCopyParallelCopies) |![Text Datatype](../static/svg/text.svg "Text Datatype")|For the Azure Copy Activity, specifies the degree of parallelism that data loading should use.|
|[Data Consistency Verification](xref:bimlflex-reference-documentation-setting-AzureCopyValidateDataConsistency) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Azure Copy Activity validates data consistency for supported sources and sinks.|

## Azure Storage
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Archive Container](xref:bimlflex-reference-documentation-setting-AzureArchiveContainer) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Container Name to use for the archive process. This should be indicative of the purpose of the contents, such as `archive`.|
|[Archive Account Name](xref:bimlflex-reference-documentation-setting-AzureArchiveAccountName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Azure Blob Storage Account Name to use for archiving data as files in blob storage,|
|[Archive Account Key](xref:bimlflex-reference-documentation-setting-AzureArchiveAccountKey) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The storage Access Key to use when accessing the Blob storage.|
|[Archive SAS Token](xref:bimlflex-reference-documentation-setting-AzureArchiveSasToken) |![Text Datatype](../static/svg/text.svg "Text Datatype")|A storage access SAS Token to use when accessing the Blob storage.|
|[Error Container](xref:bimlflex-reference-documentation-setting-AzureErrorContainer) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Container Name to use for the error process.|
|[Error Account Name](xref:bimlflex-reference-documentation-setting-AzureErrorAccountName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Azure Blob Storage Account Name to use for error files in blob storage.|
|[Error Account Key](xref:bimlflex-reference-documentation-setting-AzureErrorAccountKey) |![Text Datatype](../static/svg/text.svg "Text Datatype")|A storage Access Key to use when accessing the error file Blob storage.|
|[Error SAS Token](xref:bimlflex-reference-documentation-setting-AzureErrorSasToken) |![Text Datatype](../static/svg/text.svg "Text Datatype")|A storage access SAS Token to use when accessing the error file Blob storage.|
|[Stage Container](xref:bimlflex-reference-documentation-setting-AzureStageContainer) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Container Name to use for the staging process.|
|[Stage Account Name](xref:bimlflex-reference-documentation-setting-AzureStageAccountName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Azure Blob Storage Account Name to use for staging data as files in blob storage.|
|[Stage Account Key](xref:bimlflex-reference-documentation-setting-AzureStageAccountKey) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The storage Access Key to use when accessing the staging Blob storage.|
|[Stage SAS Token](xref:bimlflex-reference-documentation-setting-AzureStageSasToken) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The storage access SAS Token to use when accessing the staging Blob storage.|
|[Blob Storage Domain](xref:bimlflex-reference-documentation-setting-AzureBlobStorageDomain) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The AzCopy domain to use.|
|[External File Format](xref:bimlflex-reference-documentation-setting-AzureExternalFileFormat) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default External File Format definition to use.|
|[Folder Naming Convention](xref:bimlflex-reference-documentation-setting-AzureFolderNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Naming convention to use for Azure Storage Folders.|
|[File Naming Convention](xref:bimlflex-reference-documentation-setting-AzureFileNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Naming convention to use for Azure Storage Files.|

## Core
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Add SQL Defaults](xref:bimlflex-reference-documentation-setting-AddSqlDefaults) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to add SQL Default constraints to tables created. SQL Defaults are always added to staging layer tables.|
|[Global Default Date](xref:bimlflex-reference-documentation-setting-GlobalDefaultDate) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The global default date to use for timelines. Please note that this value does not override the RowEffectiveFromDate.|
|[Convert GUID To String](xref:bimlflex-reference-documentation-setting-ConvertGuidToString) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if a source column of type `GUID`/`UniqueIdentifier` is automatically converted to a String data type.|
|[Use BimlCatalog](xref:bimlflex-reference-documentation-setting-UseBimlCatalog) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if BimlFlex uses the BimlCatalog database for logging, auditing and configuration variables.|
|[Use Custom Components](xref:bimlflex-reference-documentation-setting-UseCustomComponents) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if BimlFlex uses the Ssis Custom Components to log RowCounts and Generate Hash Keys.|
|[Lookup Table Pattern](xref:bimlflex-reference-documentation-setting-LookupTablePattern) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The table naming pattern for the Lookup Table.|
|[Integration Key To Upper](xref:bimlflex-reference-documentation-setting-IntegrationKeyToUpper) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if strings in the Integration Key will be upper-cased automatically.|
|[String Concatenator](xref:bimlflex-reference-documentation-setting-StringConcatenator) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string value used in concatenating Integration Keys and Hash values (sanding element). Defaults to `~`.|
|[System Column Placement](xref:bimlflex-reference-documentation-setting-SystemColumnPlacement) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Control the placement of system columns relative to the defined table columns based on configurations. Choose whether system columns should be added before or after the table columns.|
|[Root Path](xref:bimlflex-reference-documentation-setting-RootPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default root path for any other BimlFlex related file operations.|
|[Archive Path](xref:bimlflex-reference-documentation-setting-ArchivePath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default path for file archive operations.|
|[Export Path](xref:bimlflex-reference-documentation-setting-ExportPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default export path for file exports.|
|[Import Path](xref:bimlflex-reference-documentation-setting-ImportPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default import path for file imports.|
|[Lookup Cache Path](xref:bimlflex-reference-documentation-setting-LookupCachePath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default path for Cache files used in lookups.|
|[Configuration Path](xref:bimlflex-reference-documentation-setting-ConfigurationPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The folder where SSIS configuration files are stored.|
|[7 Zip Path](xref:bimlflex-reference-documentation-setting-7ZipPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The location of the 7-zip executable for zip operations requiring 7-zip.|
|[Hash Algorithm](xref:bimlflex-reference-documentation-setting-HashAlgorithm) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The hashing algorithm to use. (`MD5`/`SHA1`/`SHA2_256`/`SHA2_512`).|
|[Hash Binary](xref:bimlflex-reference-documentation-setting-HashBinary) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the generated hash value is stored as a binary representation or as a string representation.|
|[Hash Integration Key](xref:bimlflex-reference-documentation-setting-HashIntegrationKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Integration Key is hashed.|
|[Use SQL Compatible Hash](xref:bimlflex-reference-documentation-setting-UseSqlCompatibleHash) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the SSIS custom inline hashing component use a hashing approach compatible with the SQL Server `HASHBYTES()` function.|
|[Use SQL Compatible Row Hash](xref:bimlflex-reference-documentation-setting-UseSqlCompatibleRowHash) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the SSIS custom inline hashing component for Full Row Hashing use a hashing approach compatible with the SQL Server `HASHBYTES()` function.|
|[Cast Boolean to True False](xref:bimlflex-reference-documentation-setting-UseTrueFalseForBoolean) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the SQL inline hashing function for MSSQL, SQLDB and Synapse converts BIT (Boolean) values to True/False instead of 1/0.|
|[Hash Null Value Replacement](xref:bimlflex-reference-documentation-setting-HashNullValue) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Null value replacement to be used when hashing.|
|[SSIS Hash Null Value Replacement](xref:bimlflex-reference-documentation-setting-SsisHashNullValue) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Null value replacement to be used when hashing using the Varigence BimlFlex SSIS Custom component.|
|[Use User Null Assignment](xref:bimlflex-reference-documentation-setting-UseUserNullAssignment) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Specifies whether all non-key columns should be set as nullable or if their nullability is determined by user-defined input. It's advised against setting columns as non-nullable, as this may result in data load failures.|
|[Hide Secondary Exclusions](xref:bimlflex-reference-documentation-setting-HideSecondaryExclusions) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Global toggle to hide secondary metadata in BimlStudio due to specific projects or objects being excluded or unmapped.|
|[Archive Import](xref:bimlflex-reference-documentation-setting-ArchiveImport) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if imported files are archived after processing.|
|[Zip Archive Import](xref:bimlflex-reference-documentation-setting-ZipArchiveImport) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if imported files are compressed when they are archived.|
|[Zip Output File](xref:bimlflex-reference-documentation-setting-ZipOutputFile) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determine if the created output file is zipped.|
|[Zip Extract File In Memory](xref:bimlflex-reference-documentation-setting-ZipExtractFileInMemory) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the file zip process runs in-memory or through file streams. Files larger than 2 GB are always zipped through file streams.|

## Data Mart
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Dimension](xref:bimlflex-reference-documentation-setting-DmAppendDim) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Dimension object names.|
|[Append Fact](xref:bimlflex-reference-documentation-setting-DmAppendFact) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Fact object names.|
|[Append Staging](xref:bimlflex-reference-documentation-setting-DmAppendStaging) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to the Data Mart staging object names.|
|[Append Identity](xref:bimlflex-reference-documentation-setting-DmAppendIdentity) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to the object name when cloning and checking the `Add Identity Column` option.|
|[Infer Dimension Members](xref:bimlflex-reference-documentation-setting-DmInferDim) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Data Mart process infers Dimension Members.|
|[Stage On Initial Load](xref:bimlflex-reference-documentation-setting-DmStageOnInitialLoad) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Data Mart stage process executes as part of an initial load.|
|[Apply Lookup Filter](xref:bimlflex-reference-documentation-setting-ApplyLookupFilterDm) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the SSIS Lookup checks for existing rows and applies a filter condition when joining the source table to the destination table. This applies to Data Mart processing and aims to optimize memory usage.|
|[Display Database Name](xref:bimlflex-reference-documentation-setting-DisplayDatabaseNameDm) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Database name is included in Data Mart object names.|
|[Display Schema Name](xref:bimlflex-reference-documentation-setting-DisplaySchemaNameDm) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Schema name is included in Data Mart object names.|
|[Constraint Mode](xref:bimlflex-reference-documentation-setting-ConstraintModeDm) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The table reference constraint mode to apply for the Data Mart database. Allowed values are `DoNotCreate`, `CreateAndNoCheck` and `CreateAndCheck`.|

## Data Vault
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Derive Staged Object](xref:bimlflex-reference-documentation-setting-DvDeriveStagedObject) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")||
|[Use Hash Keys](xref:bimlflex-reference-documentation-setting-DvUseHashKeys) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Data Vault uses Hash Keys. Alternatively, Natural Keys can be used by disabling this setting.|
|[Accelerate Link Satellite](xref:bimlflex-reference-documentation-setting-DvAccelerateLinkSatellite) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator creates Link Satellites from source metadata, containing attributes and effectivess attributes.|
|[Accelerate Link Integration Keys](xref:bimlflex-reference-documentation-setting-DvAccelerateLinkIntegrationKeys) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")||
|[Apply Data Type Mapping DV](xref:bimlflex-reference-documentation-setting-ApplyDataTypeMappingDv) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Data Type Mappings are applied to the Data Vault. The Data Type Mappings function allow expansion of data types.|
|[Naming Convention](xref:bimlflex-reference-documentation-setting-DvNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Naming convention to use for Data Vault Accelerator.|
|[Column Naming Convention](xref:bimlflex-reference-documentation-setting-DvColumnNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Naming convention for Columns to use for Data Vault Accelerator.|
|[Accelerate Hub Keys](xref:bimlflex-reference-documentation-setting-DvAccelerateHubKeys) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator adds source key columns to the Hub in addition to the Integration Key.|
|[Accelerate Link Keys](xref:bimlflex-reference-documentation-setting-DvAccelerateLinkKeys) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator adds source key columns to the Link in addition to the Integration Key.|
|[Accelerate Link Satellite Keys](xref:bimlflex-reference-documentation-setting-DvAccelerateLinkSatelliteKeys) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the BimlFlex Accelerator adds the Integration Key to Link Satellites.|
|[Accelerate Correct Key Names](xref:bimlflex-reference-documentation-setting-DvAccelerateCorrectKeyNames) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Should the Accelerator correct Integration Key names based on the Object Business Name|
|[Accelerate Show Columns](xref:bimlflex-reference-documentation-setting-DvAccelerateShowColumns) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to set the default Accelerator view to show all Columns.|
|[Accelerate Show Expanded](xref:bimlflex-reference-documentation-setting-DvAccelerateShowExpanded) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to set the default Accelerator view to show the Expanded view (Hubs, Links and Satellites) instead of the Data Vault Backbone (Only Hubs and Links).|
|[Reduce Link Keys in Staging](xref:bimlflex-reference-documentation-setting-StageReduceLinkKeys) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this to reduce additional Link hash keys in the staging table.|
|[Infer Link Hub](xref:bimlflex-reference-documentation-setting-DvInferLinkHub) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Data Vault process loads all involved Hubs when a Link table is loaded, independent of Hub loads from referenced tables. Enabling this setting will force BimlFlex to always load all corresponding Hub tables when a Link is loaded from a given source, even though this could be redundant because the Hub information may be provided by referenced tables.This applies to scenarios where the source system reliably manages referential integrity.|
|[Process On Stage](xref:bimlflex-reference-documentation-setting-DvProcessOnStage) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Data Vault stored procedure is called after the Extract has been done. For Azure projects this must be combined with `AzureStageOnExtract`.|
|[Uniform Change Type](xref:bimlflex-reference-documentation-setting-DvUniformChangeType) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|On enabling, all source inserts and updates are treated alike. If `RowChangeType` is the only difference, no new record is added, preventing duplication and preserving attribute history.|
|[Apply Lookup Filter DV](xref:bimlflex-reference-documentation-setting-ApplyLookupFilterDv) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|For Staging-to-Data Vault processes, determines if the SSIS Lookup checks for existing rows by applying a filter condition joining the staging table to the destination table. This is to optimize memory usage.|
|[End Date Satellite](xref:bimlflex-reference-documentation-setting-DvEndDateSatellite) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if end dating is applied to the Data Vault Satellites.|
|[Delta Collapse Rows](xref:bimlflex-reference-documentation-setting-DvDeltaCollapseRows) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to keep only the initial row in Satellite sequences of identical values, discarding later timestamped duplicates.|
|[ELT Delta Is Derived](xref:bimlflex-reference-documentation-setting-DvDeltaIsDerived) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable if loading into Data Vault and the Delta has already been derived. This will provide optimized ELT loads for scenarios like streams or insert only transaction source tables.|
|[Use Cache Lookup](xref:bimlflex-reference-documentation-setting-DvUseCacheLookup) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enables using the file based cache lookup feature of SSIS (for lookups).|
|[Use Transactions](xref:bimlflex-reference-documentation-setting-DvUseTransactions) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to wrap Data Vault ELT load processes in transaction statements.|
|[Use Where Exists](xref:bimlflex-reference-documentation-setting-DvUseWhereExists) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to use WHERE EXISTS type SQL statements instead of LEFT JOIN type statements for lookups in ELT processing.|
|[Pushdown Parallel Processing](xref:bimlflex-reference-documentation-setting-DvParallelProcessing) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")||
|[Stage Surrogate Keys](xref:bimlflex-reference-documentation-setting-DvStageSurrogateKeys) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")||
|[Insert Script With Table](xref:bimlflex-reference-documentation-setting-DvInsertScriptWithTable) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When enabled, this setting ensures that the default insert script is retained and bundled together with the `CREATE TABLE` file. This is useful if you wish to keep the initial data insertion logic intact alongside the table structure.|
|[Create Satellite Views](xref:bimlflex-reference-documentation-setting-DvCreateSatelliteViews) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Generate easy-to-use DataVault satellite views that include effectivity timelines and current statuses, making it simpler to analyze your data over time.|
|[Prefix View Name](xref:bimlflex-reference-documentation-setting-DvPrefixViewName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Prefix for `Current` (CURR) and `Effectivity` (EFDT) satellite views.|
|[Current View Suffix](xref:bimlflex-reference-documentation-setting-DvCurrentViewSuffix) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Prefix for `Current` satellite views, default is `_CURR`|
|[Effectivity View Suffix](xref:bimlflex-reference-documentation-setting-DvEffectivityViewSuffix) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Prefix for `Effectivity` satellite views, default is `_EFDT`|
|[Add Zero Keys](xref:bimlflex-reference-documentation-setting-DvAddZeroKeys) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to automatically use a Zero Key for Link Keys when the key column is empty. This ensures that all records are linked, even if some key data is missing.|
|[Zero Key Expression](xref:bimlflex-reference-documentation-setting-DvZeroKeyExpression) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Override the default SQL expression to generate Zero keys in Data Vault insert scripts. Use with caution: altering this expression may affect data consistency.|
|[Bridge Lag Days](xref:bimlflex-reference-documentation-setting-DvBridgeLagDays) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specify the number of days the Bridge process should go back and look for changes to reprocess.|
|[Bridge Add Surrogate Key](xref:bimlflex-reference-documentation-setting-DvBridgeAddSurrogateKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enables the use of a concatenated surrogate key in the Bridge table, comprising the Link keys.|
|[Pit Lag Days](xref:bimlflex-reference-documentation-setting-DvPitLagDays) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specify the number of days the Point-In-Time process should go back and look for changes to reprocess.|
|[Pit Add Surrogate Key](xref:bimlflex-reference-documentation-setting-DvPitAddSurrogateKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enables the use of a concatenated surrogate key in the PointInTime table, comprising the Hub key and the RowEffectiveFromDate.|
|[Constraint Mode](xref:bimlflex-reference-documentation-setting-ConstraintModeDv) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The table reference constraint mode to apply for the Data Vault database. Allowed values are `DoNotCreate`, `CreateAndNoCheck` and `CreateAndCheck`.|
|[Enable Rollback](xref:bimlflex-reference-documentation-setting-EnableRollbackDv) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|For SSIS Only. Determines if the Batch orchestration engine rolls back (deletes) committed changes to the Data Vault database in case of a failed process.|

## Data Vault Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Hub](xref:bimlflex-reference-documentation-setting-DvAppendHub) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Hub names.|
|[Append Link](xref:bimlflex-reference-documentation-setting-DvAppendLink) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Link names.|
|[Append Link Satellite](xref:bimlflex-reference-documentation-setting-DvAppendLinkSatellite) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Link Satellite names.|
|[Append Satellite](xref:bimlflex-reference-documentation-setting-DvAppendSatellite) |![Text Datatype](../static/svg/text.svg "Text Datatype")|he string to append to Satellite names.|
|[Append Point In Time](xref:bimlflex-reference-documentation-setting-DvAppendPointInTime) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Point In Time table names.|
|[Append Bridge](xref:bimlflex-reference-documentation-setting-DvAppendBridge) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Bridge table names.|
|[Default Schema](xref:bimlflex-reference-documentation-setting-DvDefaultSchema) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The default schema to use for the Data Vault in the Accelerator.|
|[Append Surrogate Key](xref:bimlflex-reference-documentation-setting-AppendSurrogateKey) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Surrogate/Hash Key column names.|
|[Prefix Surrogate Key](xref:bimlflex-reference-documentation-setting-DvPrefixSurrogateKey) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Should we prefix the Hubs and Links Surrogate Keys.|
|[Append Reference](xref:bimlflex-reference-documentation-setting-DvAppendReference) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Reference table names.|
|[Append Hierarchy Link](xref:bimlflex-reference-documentation-setting-DvAppendHierarchyLink) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Hierarchical Link names.|
|[Append Same As Link](xref:bimlflex-reference-documentation-setting-DvAppendSameAsLink) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Same-As Link names.|
|[Schema Hub](xref:bimlflex-reference-documentation-setting-DvSchemaHub) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Override the Default Schema used in the Accelerator for Hub tables.|
|[Schema Link](xref:bimlflex-reference-documentation-setting-DvSchemaLink) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Override the Default Schema used in the Accelerator for Link tables.|
|[Schema Link Satellite](xref:bimlflex-reference-documentation-setting-DvSchemaLinkSatellite) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Override the Default Schema used in the Accelerator for Link Satellite tables.|
|[Schema Satellite](xref:bimlflex-reference-documentation-setting-DvSchemaSatellite) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Override the Default Schema used in the Accelerator for Satellite tables.|
|[Schema Point In Time](xref:bimlflex-reference-documentation-setting-DvSchemaPointInTime) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Override the Default Schema used in the `Create Point In Time` dialog.|
|[Schema Bridge](xref:bimlflex-reference-documentation-setting-DvSchemaBridge) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Override the Default Schema used in the `Create Bridge` dialog.|
|[Display Database Name](xref:bimlflex-reference-documentation-setting-DisplayDatabaseNameDv) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the database name is displayed in the Data Vault.|
|[Display Schema Name](xref:bimlflex-reference-documentation-setting-DisplaySchemaNameDv) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the schema name is displayed in the Data Vault|

## Databricks
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Retry Attempts](xref:bimlflex-reference-documentation-setting-DatabricksActivityRetryAttempts) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Number of retry attempts specifies how many times the Data Factory service will attempt to re-run the Databricks Notebook Activity in case of failure.|
|[Retry Interval](xref:bimlflex-reference-documentation-setting-DatabricksActivityRetryInterval) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Retry Interval specifies the amount of time to wait before attempting to retry a failed Databricks Notebook Activity. The interval is defined in seconds. A value of 0 indicates no retries will be attempted. Recommended value is between 30 to 600 seconds for most use-cases.|
|[Timeout](xref:bimlflex-reference-documentation-setting-DatabricksActivityTimeout) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Maximum amount of time that the Azure Data Factory will wait for the Databricks Notebook Activity to complete can run. Default is 12 hours days. Format is in D.HH:MM:SS.|
|[Secure Input](xref:bimlflex-reference-documentation-setting-DatabricksActivitySecureInput) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this option to protect sensitive data passed into the Databricks Notebook. When this setting is enabled, the input values will be masked and not visible in logs or metadata. This is recommended for passing confidential or sensitive information.|
|[Secure Output](xref:bimlflex-reference-documentation-setting-DatabricksActivitySecureOutput) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When enabled, the output of this Databricks Notebook Activity will be securely stored and not visible in activity logs, ensuring sensitive data is protected. Disabling this option may expose sensitive output data in logs.|
|[Build Output Path](xref:bimlflex-reference-documentation-setting-DatabricksOutputPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The folder where Databricks files are created upon build.|
|[Repository Name](xref:bimlflex-reference-documentation-setting-DatabricksRepositoryName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The name of the Repository where the Databricks files are located for runtime.|
|[Notebook Path](xref:bimlflex-reference-documentation-setting-DatabricksNotebookPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The folder where the Databricks files are located for runtime.|
|[Append Notebook Name](xref:bimlflex-reference-documentation-setting-DatabricksAppendNotebookName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to identified generated Databricks Notebooks.|
|[Add Sql Comments](xref:bimlflex-reference-documentation-setting-DatabricksAddSqlComments) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this option to include user-defined metadata as SQL comments in your `CREATE TABLE` scripts.|
|[Add Sql Tags](xref:bimlflex-reference-documentation-setting-DatabricksAddSqlTags) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this option to include user-defined business metadata as SQL tags in your `CREATE TABLE` scripts.|
|[Use Unity Catalog](xref:bimlflex-reference-documentation-setting-DatabricksUseUnityCatalog) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Specifies if the table create scripts should use `Unity Catalog` or the `LOCATION` clause.|
|[Use Managed Tables](xref:bimlflex-reference-documentation-setting-DatabricksUseManagedTables) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Specifies if the table create scripts should use `Unity Catalog` or the `LOCATION` clause.|
|[Use Global Parameters](xref:bimlflex-reference-documentation-setting-DatabricksUseGlobalParameters) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Specifies if the Azure Data Factory will call Databricks Notebooks using Global Parameters.|
|[Use Copy Into](xref:bimlflex-reference-documentation-setting-DatabricksUseCopyInto) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When enabled, notebooks will use `COPY INTO` to read files instaed of `CREATE OR REPLACE TEMPORARY VIEW` SQL syntax.|
|[Use Temporary Views](xref:bimlflex-reference-documentation-setting-DatabricksUseTemporaryViews) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When enabled, notebooks will use the `CREATE OR REPLACE TEMPORARY VIEW` SQL statement to store data in memory for quicker access, rather than the `CREATE TABLE IF NOT EXISTS` statement which stores data on disk.|
|[Use Liquid Clustering](xref:bimlflex-reference-documentation-setting-DatabricksUseLiquidClustering) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When enable Delta Lake liquid clustering to replace traditional table partitioning and ZORDER for simplified data layout and optimized query performance.|
|[Add Create Catalog](xref:bimlflex-reference-documentation-setting-DatabricksAddCreateCatalog) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Specifies if the table create scripts should include the `CREATE CATALOG IF NOT EXISTS` statement.|
|[Add Truncate Notebooks](xref:bimlflex-reference-documentation-setting-DatabricksAddTruncateNotebooks) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to generate notebooks that will truncate all existing tables in the workspace. Recommended for development environments only.|
|[Add Drop Notebooks](xref:bimlflex-reference-documentation-setting-DatabricksAddDropNotebooks) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to generate notebooks that will drop all existing tables in the workspace. Recommended for development environments only.|
|[Table Properties](xref:bimlflex-reference-documentation-setting-DatabricksTableProperties) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specifies the table properties to be used for creating tables in Databricks using the CREATE TABLE statement.|
|[Read Files Options](xref:bimlflex-reference-documentation-setting-DatabricksReadFilesOptions) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Customize `READ_FILES` options for the file operation. The default is READ_FILES (mergeSchema => 'true').|
|[Copy Options](xref:bimlflex-reference-documentation-setting-DatabricksCopyOptions) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Customize `COPY_OPTION` for the COPY INTO operation. The default is COPY_OPTIONS ('mergeSchema' = 'true').|
|[Display Time Zone](xref:bimlflex-reference-documentation-setting-DatabricksDisplayTimeZone) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Sets the time zone for displaying timestamps in notebooks. This setting does not alter the original data but converts displayed timestamps to the chosen time zone for easier interpretation.|
|[Data Time Zone](xref:bimlflex-reference-documentation-setting-DatabricksDataTimeZone) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Sets the time zone for loading timestamps in notebooks. This setting does not alter the original data but converts timestamps to the chosen time zone.|

## Delete Detection
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Enable Delete Detection](xref:bimlflex-reference-documentation-setting-DeleteDetectionEnabled) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if BimlFlex applies a separate key load pattern that will enable detection of hard deletes in the source|
|[Process On Stage](xref:bimlflex-reference-documentation-setting-DeleteDetectionOnStage) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Delete Detection batch should be called after the source extract to staging process has been completed.|
|[Apply Delete Detection PSA](xref:bimlflex-reference-documentation-setting-DeleteDetectionApplyPsa) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Use the default process to insert detected deletes into the Persistent Staging Area table.|
|[Apply Delete Detection DV](xref:bimlflex-reference-documentation-setting-DeleteDetectionApplyDv) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Use the default process to insert detected deletes into the Data Vault Satellite tables.|
|[Archive Detection Files](xref:bimlflex-reference-documentation-setting-DeleteDetectionArchiveFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the delete detection files are moved to the defined archive container, once processing is completed.|
|[OnError Detection Files](xref:bimlflex-reference-documentation-setting-DeleteDetectionOnErrorFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the delete detection files are moved to the defined error container on error, once processing is completed.|
|[Delete Detection Files](xref:bimlflex-reference-documentation-setting-DeleteDetectionDeleteFiles) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the delete detection files are deleted once processing is completed.|

## Model
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Entity Naming Convention](xref:bimlflex-reference-documentation-setting-BmEntityNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specifies the naming convention used for entities in your business model. Choose from predefined conventions like PascalCase, camelCase, UPPER_CASE, lower_case, etc.|
|[Entity Technical Naming Convention](xref:bimlflex-reference-documentation-setting-BmEntityTechnicalNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specifies the technical naming convention used for entities in your business model. Choose from predefined conventions like PascalCase, camelCase, UPPER_CASE, lower_case, etc.|
|[Attribute Naming Convention](xref:bimlflex-reference-documentation-setting-BmAttributeNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specifies the naming convention used for attributes in your business model. Choose from predefined conventions like PascalCase, camelCase, UPPER_CASE, lower_case, etc.|
|[Attribute Technical Naming Convention](xref:bimlflex-reference-documentation-setting-BmAttributeTechnicalNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specifies the technical naming convention used for attributes in your business model. Choose from predefined conventions like PascalCase, camelCase, UPPER_CASE, lower_case, etc.|
|[Use Short Names for Hubs](xref:bimlflex-reference-documentation-setting-BmUseShortNames) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")||
|[Apply Naming Convention](xref:bimlflex-reference-documentation-setting-ApplyNamingConvention) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Naming convention to use for objects and columns.|
|[Infer Integration Key From](xref:bimlflex-reference-documentation-setting-InferIntegrationKeyFrom) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The convention to infer the `Integration Key` from. Case sensitive options are `None`, `PrimaryKey`, `UniqueKey`, `FirstColumn`, `IdentityColumn` and `ColumnName::[NameOfColumn]`.|
|[Apply Data Type Mappings](xref:bimlflex-reference-documentation-setting-ApplyDataTypeMappings) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Apply Data Type Mappings to Imported Objects.|
|[Pad Integration Key](xref:bimlflex-reference-documentation-setting-PadIntegrationKey) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Number of Characters to pad the Integration Key to.|
|[Append Integration Key](xref:bimlflex-reference-documentation-setting-AppendIntegrationKey) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Integration Keys.|
|[Key Ends With](xref:bimlflex-reference-documentation-setting-KeyEndsWith) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The strings that BimlFlex interprets as key identifiers.|
|[Add Record Source To Integration Key](xref:bimlflex-reference-documentation-setting-AddRecordSourceToIntegrationKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Import Metadata will add `@@rs` to Integration Keys if true.|
|[Change References To Integration Key](xref:bimlflex-reference-documentation-setting-ChangeReferencesToIntegrationKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Import Metadata feature adds derived Integration Keys based on source references, or use source columns for references.|
|[Import Views](xref:bimlflex-reference-documentation-setting-ImportViews) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if database Views are imported when importing Metadata.|
|[Integration Key Concatenation Order](xref:bimlflex-reference-documentation-setting-IntegrationKeyConcatenationOrder) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Determines the column order in the derived Integration Key.|
|[FlexToBk on IntegrationKey](xref:bimlflex-reference-documentation-setting-ValidateFlexToBkOnIntegrationKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this setting to verify that all source objects define the `FlexToBk` expression for their integration keys.|
|[FlexToBk on Reference](xref:bimlflex-reference-documentation-setting-ValidateFlexToBkOnReferenceKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this setting to verify that all source objects define the `FlexToBk` expression for their reference keys.|
|[FlexToBk on Reference](xref:bimlflex-reference-documentation-setting-ValidateFlexToBkOnReferenceKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this setting to verify that all source objects define the `FlexToBk` expression for their reference keys.|
|[@@rs on FlexToBk](xref:bimlflex-reference-documentation-setting-ValidateRecordSourceOnFlexToBk) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this setting to verify that all keys using the FlexToBk expression include the @@rs parameter for source objects.|

## Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Suffix Or Prefix Column](xref:bimlflex-reference-documentation-setting-SuffixOrPrefixColumn) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The `SuffixOrPrefixColumn` key defines the behavior when defining column names.|
|[Suffix Or Prefix Object](xref:bimlflex-reference-documentation-setting-SuffixOrPrefixObject) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The `SuffixOrPrefixObject` key defines the behavior when naming objects.|
|[Append Procedure Name](xref:bimlflex-reference-documentation-setting-AppendProcedureName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to procedure names.|
|[Append Batch Name](xref:bimlflex-reference-documentation-setting-AppendBatchName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Batch names.|
|[Append Load From Psa Name](xref:bimlflex-reference-documentation-setting-AppendLoadFromPsaName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to the Load From PSA process name.|
|[Stage Column With Business Name](xref:bimlflex-reference-documentation-setting-StageColumnWithBusinessName) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When defining a Business Name for an Column in the Business Overrides section, setting this to true will use the Business Name as the staging column name.|
|[Stage Object With Business Name](xref:bimlflex-reference-documentation-setting-StageObjectWithBusinessName) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When defining a Business Name for an Object in the Business Overrides section, setting this to true will use the Business Name as the staging table name.|
|[Use Record Source As Append](xref:bimlflex-reference-documentation-setting-UseRecordSourceAsAppend) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Specifies if the record source should be appended to object names|
|[Use Record Source As Schema](xref:bimlflex-reference-documentation-setting-UseRecordSourceAsSchema) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the `Record Source` is used as the schema name for Staging and Persistent Staging Area tables.|

## Operations
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Archive Retention Period (Days)](xref:bimlflex-reference-documentation-setting-ArchiveRetentionPeriod) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The archive data retention period in days to use for the BimlFlex database cleanup process.|
|[Snapshot Retention Period (Days)](xref:bimlflex-reference-documentation-setting-SnapshotRetentionPeriod) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The snapshot data retention period in days to use for the BimlFlex database cleanup process.|

## Orchestration
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |

## Snowflake
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Account](xref:bimlflex-reference-documentation-setting-SnowflakeAccount) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake account name to use.|
|[Region](xref:bimlflex-reference-documentation-setting-SnowflakeRegion) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake region to use.|
|[Warehouse](xref:bimlflex-reference-documentation-setting-SnowflakeWarehouse) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake warehouse name to use.|
|[Database](xref:bimlflex-reference-documentation-setting-SnowflakeDatabase) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake database name to use.|
|[Schema](xref:bimlflex-reference-documentation-setting-SnowflakeSchema) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake schema name to use.|
|[Password](xref:bimlflex-reference-documentation-setting-SnowflakePassword) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake password to use.|
|[User](xref:bimlflex-reference-documentation-setting-SnowflakeUser) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake user name to use.|
|[SnowSQL Config](xref:bimlflex-reference-documentation-setting-SnowSqlConfig) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Location of the Snowflake SnowSQL configuration file.|
|[SnowSQL Path](xref:bimlflex-reference-documentation-setting-SnowSqlPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The path to the local installation of the Snowflake SnowSQL CLI Client tool.|
|[SnowSQL Connection](xref:bimlflex-reference-documentation-setting-SnowSqlConnection) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake SnowSQL connection to use.|
|[File Format](xref:bimlflex-reference-documentation-setting-SnowflakeFileFormat) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Snowflake file format to use.|
|[Execute As](xref:bimlflex-reference-documentation-setting-SnowflakeExecuteAs) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Choose how to execute commands in Snowflake: as the `CALLER` initiating the operation or as the `OWNER` of the object being accessed.|
|[Remove Stage](xref:bimlflex-reference-documentation-setting-SnowflakeRemoveStage) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Snowflake stage is removed prior to loading the new stage file.|
|[Auto Suspend](xref:bimlflex-reference-documentation-setting-SnowflakeAutoSuspend) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines where the Snowflake database can Auto Suspend.|
|[Scale Up](xref:bimlflex-reference-documentation-setting-SnowflakeScaleUp) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Snowflake processing should scale up the Snowflake Warehouse at the start of the Batch.|
|[Scale Up Size](xref:bimlflex-reference-documentation-setting-SnowflakeScaleUpSize) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The size the Snowflake Warehouse can be scaled up to.|
|[Scale Down](xref:bimlflex-reference-documentation-setting-SnowflakeScaleDown) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Snowflake processing should scale down the Snowflake Warehouse at end of the Batch.|
|[Scale Down Size](xref:bimlflex-reference-documentation-setting-SnowflakeScaleDownSize) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The size the Snowflake Warehouse can be scaled down to.|
|[Output Path](xref:bimlflex-reference-documentation-setting-SnowDtOutputPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The folder where SnowDT database files are created.|
|[Clean Output Path](xref:bimlflex-reference-documentation-setting-SnowDtCleanOutputPath) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Specifies whether the output folder for the SnowDT (Snowflake Data Tools) project should be cleared during the build process.|
|[Add Sql Comments](xref:bimlflex-reference-documentation-setting-SnowflakeAddSqlComments) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this option to include user-defined metadata as SQL comments in your `CREATE TABLE` scripts.|
|[Use Database References](xref:bimlflex-reference-documentation-setting-SnowflakeUseDatabaseReferences) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable the use of database variables for compatability with SchemaChange for dynamic cross-database interactions, enhancing modularity and eliminating the need to hardcode database names.|
|[Database Variable](xref:bimlflex-reference-documentation-setting-SnowflakeDatabaseVariable) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The database variable  for compatability with SchemaChange for dynamic cross-database interactions, enhancing modularity and eliminating the need to hardcode database names.|
|[Create Table](xref:bimlflex-reference-documentation-setting-SnowflakeCreateTableSql) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The syntax to be used for the Snowflake `CREATE TABLE` DDL. It enables the use of `CREATE OR REPLACE` and `CREATE OR ALTER` syntax options, when supported by the Snowflake environment.|

## SSDT
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Include .NET Core Project Support](xref:bimlflex-reference-documentation-setting-SsdtIncludeNetCoreSupport) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if SSDT Project files and build script files are created with .NET Core support.|
|[.NET Core Targets Path](xref:bimlflex-reference-documentation-setting-NetCoreTargetsPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The folder where the .NET Core Target and build support files are located.|
|[Suppress TSql Warnings](xref:bimlflex-reference-documentation-setting-SsdtSuppressTSqlWarnings) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Suppress TSql Build Warnings.|
|[Use Database References](xref:bimlflex-reference-documentation-setting-SsdtUseDatabaseReferences) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|SSDT (SQL Server Data Tools) database projects will be able to use database variables, which allows for more dynamic cross-database interactions. This facilitates modularity and eliminates the need to hardcode database names.|
|[Solution Name](xref:bimlflex-reference-documentation-setting-SsdtSolutionName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The SSDT Solution Name used when `Use Database References` when the 'Use Database References' feature is enabled. This name can help in better organization and identification of the project within your development environment.|
|[Output Path](xref:bimlflex-reference-documentation-setting-SsdtOutputPath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The folder where SSDT database projects are created.|
|[Clean Output Path](xref:bimlflex-reference-documentation-setting-SsdtCleanOutputPath) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Specifies whether the output folder for the SSDT (SQL Server Data Tools) project should be cleared during the build process.|
|[Visual Studio Version](xref:bimlflex-reference-documentation-setting-SsdtVisualStudioVersion) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The setting allows you to specify which version of Visual Studio you are using or targeting for your project.|
|[Include External Tables](xref:bimlflex-reference-documentation-setting-SsdtIncludeExternalTables) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if External Tables are included in the generated SSDT Project.|
|[Overwrite External Table Defaults](xref:bimlflex-reference-documentation-setting-SsdtOverwriteExternalTableDefaults) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if existing external table-related files are overwritten.|
|[Include Master Key](xref:bimlflex-reference-documentation-setting-SsdtIncludeMasterKey) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Master Key statement is includes in the SSDT Project.|
|[Default Master Key](xref:bimlflex-reference-documentation-setting-SsdtDefaultMasterKey) |![Text Datatype](../static/svg/sql.svg "SQL Datatype")|The default Master Key SQL Statement to use.|
|[Include Credential](xref:bimlflex-reference-documentation-setting-SsdtIncludeCredential) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Credential statement is included in the SSDT Project.|
|[Default Credential](xref:bimlflex-reference-documentation-setting-SsdtDefaultCredential) |![Text Datatype](../static/svg/sql.svg "SQL Datatype")|The default Credential SQL Statement to use.|
|[Include External Data Source](xref:bimlflex-reference-documentation-setting-SsdtIncludeExternalDataSource) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|etermines if the External Data Source statement is included in the SSDT Project.|
|[Default External Data Source](xref:bimlflex-reference-documentation-setting-SsdtDefaultExternalDataSource) |![Text Datatype](../static/svg/sql.svg "SQL Datatype")|The default External Data Source SQL Statement to use.|
|[Include External File Format](xref:bimlflex-reference-documentation-setting-SsdtIncludeExternalFileFormat) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the External File Format statement is included in the generated SSDT Project.|
|[Default External File Format](xref:bimlflex-reference-documentation-setting-SsdtDefaultExternalFileFormat) |![Text Datatype](../static/svg/sql.svg "SQL Datatype")|The default External File Format SQL Statement to use.|

## SSIS
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Convert Date To String With Scale](xref:bimlflex-reference-documentation-setting-SsisConvertDateWithScale) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Used to control the converted DateTime in the FlexToBk to ensure compatability with the SQL code.|
|[Use Compatable Date Format](xref:bimlflex-reference-documentation-setting-UseSsisCompatableDateFormat) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Used to control the converted DateTime in the FlexToBk to ensure compatability with the SQL code.|
|[Server](xref:bimlflex-reference-documentation-setting-SsisServer) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The SSIS Server name to use for generated deployment script files.|
|[SSISDB](xref:bimlflex-reference-documentation-setting-SsisDb) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The SSISDB database name to use for generated deployment script files.|
|[Folder](xref:bimlflex-reference-documentation-setting-SsisFolder) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The SSIS Catalog folder name to use for generated deployment script files.|
|[Create Folder](xref:bimlflex-reference-documentation-setting-SsisCreateFolder) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Add Create SSIS Catalog Folder in SSIS deployment script files.|
|[SqlCmd Override](xref:bimlflex-reference-documentation-setting-SqlCmdOverride) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Override the `sqlcmd` connection in the Create SSIS Catalog folder in the deployment script.|
|[BLOB Temp Storage Path](xref:bimlflex-reference-documentation-setting-SsisBLOBTempStoragePath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Blob Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory.|
|[Buffer Temp Storage Path](xref:bimlflex-reference-documentation-setting-SsisBufferTempStoragePath) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The Buffer Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory.|
|[Command Timeout](xref:bimlflex-reference-documentation-setting-SsisCommandTimeout) |![Text Datatype](../static/svg/text.svg "Text Datatype")|SSIS Command Timeout to use. Override the value here to change the default SSIS behavior.|
|[Auto Adjust Buffer Size](xref:bimlflex-reference-documentation-setting-SsisAutoAdjustBufferSize) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|SSIS Auto Adjust Buffer Size configuration for supported SQL Server versions.|
|[Check Constraints](xref:bimlflex-reference-documentation-setting-SsisCheckConstraints) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|SSIS Destination configuration for checking constraints. Defaults to `False`, as that is recommended for data warehouse destinations.|
|[Default Buffer Max Rows](xref:bimlflex-reference-documentation-setting-SsisDefaultBufferMaxRows) |![Text Datatype](../static/svg/text.svg "Text Datatype")|SSIS Data Flow configuration for Default Buffer Max Rows for supported destinations.|
|[Default Buffer Size](xref:bimlflex-reference-documentation-setting-SsisDefaultBufferSize) |![Text Datatype](../static/svg/text.svg "Text Datatype")|SSIS Data Flow configuration for Default Buffer Size for supported destinations.|
|[Delay Validation](xref:bimlflex-reference-documentation-setting-SsisDelayValidation) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if generated SSIS packages use delayed validation for metadata validation.|
|[Engine Threads](xref:bimlflex-reference-documentation-setting-SsisEngineThreads) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Maximum number of SSIS engine threads to employ.|
|[Max Concurrent Executables](xref:bimlflex-reference-documentation-setting-SsisMaxConcurrentExecutables) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Maximum number of concurrent SSIS executables to employ.|
|[Maximum Insert Commit Size](xref:bimlflex-reference-documentation-setting-SsisMaximumInsertCommitSize) |![Text Datatype](../static/svg/text.svg "Text Datatype")|SSIS Data Flow configuration for Maximum Insert Commit Size for supported destinations.|
|[Process Subfolders](xref:bimlflex-reference-documentation-setting-SsisProcessSubfolders) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if a flat file source loop loads files in subfolders, of the specified source folder.|
|[Rows Per Batch](xref:bimlflex-reference-documentation-setting-SsisRowsPerBatch) |![Text Datatype](../static/svg/text.svg "Text Datatype")|SSIS Data Flow configuration for Rows Per Batch for supported destinations.|
|[Validate External Metadata](xref:bimlflex-reference-documentation-setting-SsisValidateExternalMetadata) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if generated SSIS packages validate external metadata.|
|[Use UTF8 Data Conversion](xref:bimlflex-reference-documentation-setting-SsisExpressUseUTF8DataConversion) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if SSIS Express-based extract packages apply UTF8 data conversion.|

## Staging
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Constraint Mode](xref:bimlflex-reference-documentation-setting-ConstraintModeStg) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The table reference constraint mode to apply for the STG (Staging) tables in BimlStudio for diagram previewing. Allowed values are `DoNotCreate`, `CreateAndNoCheck` and `CreateAndCheck`.|
|[Persist History](xref:bimlflex-reference-documentation-setting-PersistHistory) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Provides an option to override the Connection level attribute `PersistHistory` for more granular control.|
|[Apply Data Type Mappings](xref:bimlflex-reference-documentation-setting-ApplyDataTypeMappingStg) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Data Type Mappings that are applied to source tables are used in the Staging and Persistent Staging databases.|
|[Configurations](xref:bimlflex-reference-documentation-setting-StagedObjectConfigurations) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Choose how to handle the StagingAttribute for each object. Options include `Derived`, `Source`, and `Inherit`. This setting allows you to override the default behavior for greater customization.|
|[Delete Import File](xref:bimlflex-reference-documentation-setting-DeleteImportFile) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if imported files are deleted after processing.|
|[Use TRY_CAST Conversion](xref:bimlflex-reference-documentation-setting-UseTryCastConversion) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the select-to-stage tables uses TRY_CAST and TRY_CONVERT.|
|[Add Row Hash Key Index](xref:bimlflex-reference-documentation-setting-AddRowHashKeyIndex) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to add a unique, non-clustered constraint on the FlexRowHashKey and EffectiveFromDate columns in staging tables.|
|[Select Blob Row Order By](xref:bimlflex-reference-documentation-setting-SelectBlobRowOrderBy) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Row Order definition to use for Blob source queries.|
|[Select Stage Row Distinct](xref:bimlflex-reference-documentation-setting-SelectStageRowDistinct) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the select-to-stage tables apply a row number function based on the defined key, or us a distinct based on the full row including the HASH.|
|[Apply Extract Conversion In Data Flow](xref:bimlflex-reference-documentation-setting-ApplyExtractConversionInDataflow) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if SSIS extracts-to-file apply data conversion for target files in the SSIS Data Flow instead of in the source select statement.|
|[Extract File Encoding](xref:bimlflex-reference-documentation-setting-ExtractFileEncoding) |![Text Datatype](../static/svg/text.svg "Text Datatype")|For an extracted file, specify a different encoding than the standard Unicode as produced by the BimlFlex source to file process. Valid choices are `ASCII`, `BigEndianUnicode`, `UTF32`, `UTF7`, `UTF8`, `Unicode`.|
|[Extract File Split Size](xref:bimlflex-reference-documentation-setting-ExtractFileSplitSize) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The file size to split extracted files into multiple files for.|
|[Create Persistent View](xref:bimlflex-reference-documentation-setting-StgCreatePersistentView) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enables the creation of SQL Views to query data from the Persistent Staging Area (PSA), simulating Staging Tables. This feature facilitates full reload processing of your Data Vault tables.|
|[Prefix Persistent View](xref:bimlflex-reference-documentation-setting-StgPrefixPersistentView) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Prefix for Persistent views, simulating Staging tables.|
|[Row Hash Persistent View](xref:bimlflex-reference-documentation-setting-StgRowHashPersistentView) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|When enabled, the RowHash will be included in the Persistent views. Note: This may reduce performance during Data Vault table reloads.|

## Staging Naming
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Append Name External](xref:bimlflex-reference-documentation-setting-AppendNameExternal) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to External tables when using PolyBase.|
|[Append Name Landing](xref:bimlflex-reference-documentation-setting-AppendNameLanding) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to append to Landing tables when deploying using Azure Data Factory Copy directly to the database.|
|[Schema Name Pattern](xref:bimlflex-reference-documentation-setting-SchemaNamePattern) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specific override behavior for the schema name for staging tables and other database assets.|
|[Object Name Pattern](xref:bimlflex-reference-documentation-setting-ObjectNamePattern) |![Text Datatype](../static/svg/text.svg "Text Datatype")|Specific override behavior for the object name for staging tables.|
|[Delete Object Name Pattern](xref:bimlflex-reference-documentation-setting-DeleteObjectNamePattern) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The name to use for the Delete Objects when using Delete Detection.|
|[Delete Schema Name Pattern](xref:bimlflex-reference-documentation-setting-DeleteSchemaNamePattern) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The name to use for the Delete objects schema when using Delete detection.|
|[Append Record Source](xref:bimlflex-reference-documentation-setting-AppendRecordSource) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the Record Source Code from the connection is appended to the staging object name.|
|[Append Schema](xref:bimlflex-reference-documentation-setting-AppendSchemaStg) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the source Schema is appended to the object name in the staging layer.|
|[Display Database Name](xref:bimlflex-reference-documentation-setting-DisplayDatabaseNameStg) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Controls if the source database name should be included in the generated SSIS package name.|
|[Display Schema Name](xref:bimlflex-reference-documentation-setting-DisplaySchemaNameStg) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Controls if the source schema name should be included in the generated SSIS package name.|

## Staging Persistent
  
|  <div style="width:200px">Setting</div>  | <div style="width:30px">Type</div> | Description |
| ---- | ------- | ----------- |
|[Rollback STG](xref:bimlflex-reference-documentation-setting-EnableRollbackStg) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|For SSIS Only. Determines if the Batch orchestration engine rolls back (delete) committed changes to the Staging database in case of a failed process.|
|[Rollback PSA](xref:bimlflex-reference-documentation-setting-EnableRollbackPsa) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|For SSIS Only. Determines if the Batch orchestration engine rolls back (deletes) committed changes to the Persistent Staging database in case of a failed process.|
|[Append Schema](xref:bimlflex-reference-documentation-setting-AppendSchemaPsa) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to add to the PSA objects when Staging and Persistent Staging are co-located in the same database.|
|[Temporal Table Pattern Name](xref:bimlflex-reference-documentation-setting-PsaTemporalTableName) |![Text Datatype](../static/svg/text.svg "Text Datatype")|The string to add to the Temporal PSA objects when Staging and Persistent Staging are co-located in the same database.|
|[Enable End Date](xref:bimlflex-reference-documentation-setting-EnableEndDatePsa) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Apply end dating in the PSA. This will allow timelines to be maintained in the PSA. Disable this to configure an insert-only approach for the PSA for optimized load performance.|
|[Bypass Persistent Checks](xref:bimlflex-reference-documentation-setting-StageBypassPsaChecks) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this to bypass lookups, and directly applies all records to the Staging and Persistent Staging tables.|
|[Use Cache Lookup](xref:bimlflex-reference-documentation-setting-PsaUseCacheLookup) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the PSA lookup caches the data to disk when using SSIS. Use this if it is not possible to use the normal in-memory lookup behavior due to memory constraints.|
|[Disable Stage, Persist Only](xref:bimlflex-reference-documentation-setting-DisableStgPsaOnly) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this to skip the staging layer and only persist changes directly in the PSA. This applies to SSIS output only.|
|[Delta Use Hash Diff](xref:bimlflex-reference-documentation-setting-PsaDeltaUseHashDiff) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this option to use Hash Diff comparisons for Change Data Capture and Change Tracking sources. This method provides a more robust way to identify and capture only the changes, but may increase load time.|
|[Delta Detection in SQL](xref:bimlflex-reference-documentation-setting-PsaDeltaDetectionSql) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if the delta detection applied when loading changes to the PSA uses a SQL procedure that runs on the Staging Area table, and not as part of the PSA pattern.|
|[Delta Is Late Arriving](xref:bimlflex-reference-documentation-setting-PsaDeltaLateArriving) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Does the PSA load include late arriving deltas.|
|[Delta Stage All Rows](xref:bimlflex-reference-documentation-setting-PsaDeltaStageAllRows) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Toggle to control whether to stage every row or compress by removing duplicate rows with the same values.|
|[Delta Is Derived](xref:bimlflex-reference-documentation-setting-PsaDeltaIsDerived) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Determines if a PSA table already receives a data delta. Enable this if loading into PSA and the delta has already been derived earlier.|
|[Merge All Rows](xref:bimlflex-reference-documentation-setting-PsaMergeAllRows) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable this setting to merge all data from a manually mapped source to a PSA table target, bypassing delta detection with rowhash diff comparison.|
|[Truncate If Source Has Rows](xref:bimlflex-reference-documentation-setting-PsaTruncateIfHasRows) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Checks if the Persistent Staging Area (PSA) should be truncated if there is source data pending processing. Currently, this feature is not supported in Databricks and Snowflake environments.|
|[Delta Collapse Rows](xref:bimlflex-reference-documentation-setting-PsaDeltaCollapseRows) |![Text Datatype](../static/svg/boolean.svg "Boolean Datatype")|Enable to keep only the initial row in sequences of identical values, discarding later timestamped duplicates.|
