---
uid: bimlflex-synapse-configurations
title: Synapse Configurations
---
# Introduction to Data Warehousing using Microsoft Azure Synapse

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
