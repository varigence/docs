---
uid: bimlflex-azure-data-warehouse
title: Azure Data Warehouse
---
# Introduction to Data Warehousing using Azure Data Warehouse

TODO: Coming Soon

## Sample setup script for external tables

The Azure SQL Data Warehouse requires a:

* master key
    This needs to be defined so that the credentials can be created
* a credential
    This should map to the blob storage used so that the external table can access the external data
    The sample below uses a database scoped credential with a Azure Blob storage access key
* an external data source that uses the same name as the external table definition in BimlFlex
    This is defined in the Extension Point for the external table definition for PolyBase
    The data source should point to the same account and folder as the staging definition in the BimlFlex settings.
* An external File Format definition that match the configuration in BimlFlex.
    For a standard setup using compressed files the sample will work as is.

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
    USE_TYPE_DEFAULT = True),
    DATA_COMPRESSION = N'org.apache.hadoop.io.compress.GzipCodec')
GO
```
