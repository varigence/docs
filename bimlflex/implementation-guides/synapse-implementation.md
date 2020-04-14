---
uid: bimlflex-synapse-implementation
title: Synapse Implementations
---

# Microsoft Azure Synapse Overview

<!-- TODO: Add contents -->

BimlFlex supports Microsoft Azure Synapse as a target data warehouse platform for both SSIS and ADF implementations.

Certain architectures, such as uploads of data through SSIS, require additional local configurations in the Synapse environment. This includes configurations of file formats and connections to external data in blob storage through external tables.

## Sample setup script for external tables

The Azure Synapse requires:

* Master key
    This needs to be defined once in the Synapse environment so that the credentials can be created
* Credential
    This should map to the blob storage used so that the external table can access the external data
    The sample below uses a database scoped credential with an Azure Blob storage access key
* External data source that uses the same name as the external table definition in BimlFlex
    This is defined in the Extension Point for the external table definition for PolyBase
    The data source should point to the same account and folder as the staging definition in the BimlFlex settings.
* External File Format definition that matches the configuration in BimlFlex.
    For a standard setup using compressed files, the sample will work as-is.

```sql
CREATE MASTER KEY;
GO

CREATE DATABASE SCOPED CREDENTIAL [bimlflex]
WITH
    IDENTITY = 'bimlflex',
    SECRET = '<Access Key for Azure Blob Storage>=='
GO

CREATE EXTERNAL DATA SOURCE [dwhload_storage]
    WITH (TYPE = HADOOP, LOCATION = N'wasbs://<blob container staging>@<account name>.blob.core.windows.net',
    CREDENTIAL = [bimlflex])
GO

CREATE EXTERNAL FILE FORMAT [pipe_zip_format]
    WITH (FORMAT_TYPE = DELIMITEDTEXT, FORMAT_OPTIONS (FIELD_TERMINATOR = N'|',
    USE_TYPE_DEFAULT = FALSE),
    DATA_COMPRESSION = N'org.apache.hadoop.io.compress.GzipCodec')
GO
```

## Using AzCopy with BimlFlex

For workloads that upload data to blob storage using SSIS, BimlFlex creates files locally and then use AzCopy to upload the files.

AzCopy is a copy tool for Azure from Microsoft. More general information on AzCopy can be found here: [https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)

AzCopy comes in different versions with different feature sets. A general recommendation is to use the latest version and SAS tokens for access authentication.

## AzCopy-related Settings

The following BimlFlex Settings are relevant to control the AzCopy functionality:

### AzureDestStorageAccountName  

The Destination Account name to use. This is the first part of the URL used, such as in accountname.blob.core.windows.net

### AzureDestStorageAccountKey

The Account Key used with legacy versions of AzCopy. Consider using a SAS Token instead. AzCopy v.10 does not support authentication using Account Keys

### AzureDestStorageSasToken

The SasToken to use for access to the Blob storage location

### AzureDestContainerName

The Container name used for the data transfers, this is the first level structure in the account and normally named after the role the container plays, such as `staging` for staged data or `archive` for archived data  

The same settings are repeated for settings for source and archive storage:

* AzureSourceStorageAccountName
* AzureSourceStorageAccountKey
* AzureSourceStorageSasToken
* AzureSourceContainerName
* AzureArchiveStorageAccountName
* AzureArchiveStorageAccountKey
* AzureArchiveStorageSasToken
* AzureArchiveContainerName

### AzCopyConcurrency

The AzCopy concurrency to use. For legacy versions, this is specified in the command and for v.10 this is specified in an environmental variable. AzCopy v.10 sets the concurrency specification in the `AZCOPY_CONCURRENCY_VALUE` environment variable using `setx.exe`. The current default for machines with less than 5 CPU's is 32. Set this to a number that delivers optimal performance for the local environment

### AzLogLocation

The AzCopy log location for AzCopy to log to. For legacy versions, this is specified in the command and for v.10 this is specified in an environmental variable. AzCopy v.10 sets the log location in the `AZCOPY_LOG_LOCATION` environment variable using `setx.exe`. Note that sensitive information, such as the Sas Token used, can be logged in these log files

### AzCopyPath

The path to the AzCopy command that should be used

### AzCopyEnabled

Should the SSIS Package use AzCopy at all to upload the files? Disable this if you use another transfer mechanism

### AzCopyVersion

The Version of AzCopy in use as an integer. Use `5` or `8` for legacy versions and `10` for the v.10 version

### AzCopyUseSasToken

Should the AzCopy command use the Account Key or SAS Token for storage access? v.10 does not support account key authentication so this is only applied for legacy versions.

### AzCopyCreateContainer

Should the v.10 AzCopy create the destination container if it does not exist? The legacy version would always create missing containers while the v.10 version expected them to already be available. Set this to `Y` to inject an extra step to create the container if it is missing. This is included for backward compatibility, the recommendation is to pre-create the containers and allow the jobs to upload without this additional step.

### AzureBlobStorageDomain

`blob.core.windows.net` for classical blob storage or `dfs.core.windows.net` for Azure Data Lake Storage Gen2 targets (with hierarchical namespace)

### AzureArchiveStage

Should the extract and load process also archive blob storage files after they have been loaded into staging. This uses AzCopy v.10 to move blob files from the defined destination/staging container to the defined archive container. AzCopy v.10 requires the use of SAS Tokens for access control
