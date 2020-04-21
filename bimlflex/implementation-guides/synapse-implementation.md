---
uid: bimlflex-synapse-implementation
title: Synapse Implementations
---

# Microsoft Azure Synapse Overview

BimlFlex supports Microsoft Azure Synapse as Source and a target data warehouse platform for both SSIS and ADF implementations.  

## Initial Configuration

Before working with Synapse metadata you should ensure that your environment is configured to use Synapse as per the selected implementation architecture.  This section will walk you through the required software and system configurations you will need to connect BimlFlex to your Synapse environment.  

The recommended architecture is to extract the data to one (or multiple) flat files, zip, upload to blob storage and load the staging environment through use of an EXTERNAL TABLE.  The following sections covers the additional steps to configure your environment to use an External Table Architecture approach.

If not using the External Table Architecture, proceed to [Configuring BimlFlex Setting]

> [!TIP]
> For additional details on installing BimlFlex refer to the below guide:  
> BimlFlex Docs: [](xref:bimlflex-installing-bimlflex)  

### Installing AzCopy (External Table Architecture Only)

For workloads that leverage the external table architecture, BimlFlex creates the files locally and then use AzCopy to upload the files.  Use the below guide to download and install AzCopy.  AzCopy comes in different versions with different feature sets. A general recommendation is to use the latest version and SAS tokens for access authentication.  After instillation ensure the appropriate **Settings** are configured in BimlFlex.  

<!-- TODO: Link to AzCopy Settings -->

> [!TIP]
> AzCopy is a copy tool for Azure from Microsoft.  For additional details on installing AzCopy refer to the below guide:  
> Microsoft Docs: [Get started with AzCopy](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)  

### Configuring Synapse (External Table Architecture Only)

Synapse will need configured for the use of an EXTERNAL TABLE.  This involves the creation of a MASTER KEY, DATABASE SCOPED CREDENTIAL, EXTERNAL DATA SOURCE and an EXTERNAL FILE FORMAT before BimlFlex can execute the EXTERNAL TABLE creation scripts.

#### Creating a Master Key

This needs to be defined once in the Synapse environment so that the credentials can be created.

### [Template](#tab/create-master-key)

```sql
CREATE MASTER KEY
    ENCRYPTION BY PASSWORD ='<Password>';
GO;
```

### [Example](#tab/create-master-key-example)

```sql
CREATE MASTER KEY
    ENCRYPTION BY PASSWORD = 'B!mlFl3x!';
GO;
```

***

> [!TIP]
> For additional details on creating a master key refer to the below guides:  
> Microsoft Docs: [Create a Database Master Key](https://docs.microsoft.com/en-us/sql/relational-databases/security/encryption/create-a-database-master-key)  
> Microsoft Docs: [CREATE MASTER KEY (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-master-key-transact-sql)  

#### Creating a Database Scoped Credential

This should map to the blob storage used so that the external table can access the external data.   It is recommended that you use a SAS Token if you are able to.  

### [Template](#tab/create-database-scoped-credential)

```sql
CREATE DATABASE SCOPED CREDENTIAL [<Credential Name>]
WITH
    IDENTITY = '<Identity>',
    SECRET = '<Secret>';
GO;
```

### [SAS Example](#tab/create-database-scoped-credential-example)

```sql
CREATE DATABASE SCOPED CREDENTIAL [bimlflex]
WITH
    IDENTITY = 'bimlflex-sas',
    SECRET = '<SAS Token>';
GO;
```

> [!NOTE]
> When using a SAS Token, ensure you remove the `?` if it was appended to your key.

***

> [!TIP]
> For additional details on creating a database scope credential refer to the below guides:  
> Microsoft Docs: [CREATE DATABASE SCOPED CREDENTIAL (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-database-scoped-credential-transact-sql)  
> Microsoft Docs: [Configure Azure Storage connection strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string)  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)  

#### Creating a External Data Source

The data source should be named as the DATA_SOURCE on the BimlFlex **Setting** `AzureExternalFileFormat`.

### [Template](#tab/create-external-data-source)

```sql
CREATE EXTERNAL DATA SOURCE [<Data Source Name>]
    WITH (
        LOCATION = N'wasbs://<Azure Staging Container>@<Azure Storage Account>.blob.core.windows.net'
        , TYPE = HADOOP
        , CREDENTIAL = [<Prior Database Scoped Credential>]
    );
GO;
```

### [Example](#tab/create-external-data-source-example)

```sql
CREATE EXTERNAL DATA SOURCE [dwhload_storage]
    WITH (
        LOCATION = N'wasbs://staging@bfxstorage.blob.core.windows.net'
        , TYPE = HADOOP
        , CREDENTIAL = [bimlflex]
    );
GO;
```

***

> [!TIP]
> For additional details on creating an external data source refer to the below guide:  
> Microsoft Docs: [CREATE EXTERNAL DATA SOURCE (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-external-data-source-transact-sql)  

#### Creating a External File Format

The data source should be named as the FILE_FORMAT on the BimlFlex **Setting** `AzureExternalFileFormat`.  For a standard setup using compressed files, the example will work as-is.

### [Template](#tab/create-external-file-format)

```sql
CREATE EXTERNAL FILE FORMAT [<External File Format Name>]
    WITH (
        FORMAT_TYPE = DELIMITEDTEXT,
        FORMAT_OPTIONS (
            FIELD_TERMINATOR = N'|',
            USE_TYPE_DEFAULT = FALSE
        ),
        DATA_COMPRESSION = N'org.apache.hadoop.io.compress.GzipCodec'
    );
GO;
```

### [Example](#tab/create-external-file-format-example)

```sql
CREATE EXTERNAL FILE FORMAT [pipe_zip_format]
    WITH (
        FORMAT_TYPE = DELIMITEDTEXT,
        FORMAT_OPTIONS (
            FIELD_TERMINATOR = N'|',
            USE_TYPE_DEFAULT = FALSE
        ),
        DATA_COMPRESSION = N'org.apache.hadoop.io.compress.GzipCodec'
    );
GO;
```

***

> [!TIP]
> For additional details on creating an external file format refer to the below guide:  
> Microsoft Docs: [CREATE EXTERNAL FILE FORMAT (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-external-file-format-transact-sql)  

## Configuring BimlFlex Settings

### AzCopy Settings (External Table Architecture Only)

<!-- TODO: Intro -->

### [Settings](#tab/azcopy-settings)

| Setting Key                   | Setting Description                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AzCopyCapMbps                 | AzCopy v.10 transfer speed cap in Mbps                                                                                                                                                                                                                                                                                                                                    |
| AzCopyConcurrency             | Specify the number of concurrent AzCopy operations to start. For legacy AzCopy versions, this is always included as a parameter in the command call. For AzCopy v.10 this is optionally set to the AZCOPY_CONCURRENCY_VALUE environmental variable. To reuse the current environment variable without setting it for each object, leave this blank when using AzCopy v.10 |
| AzCopyCreateContainer         | Should the pipeline include a step to create the destination container. Legacy AzCopy versions create this automatically, v.10 fails when the target container is missing. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads.                                                                             |
| AzCopyEnabled                 | Should the generated files be uploaded using `AzCopy` as part of the SSIS Packages. Disable if the solution uses an alternative file management process                                                                                                                                                                                                                   |
| AzCopyLogLevel                | The log level for AzCopy v.10 logs. Available log levels are: NONE, DEBUG, INFO, WARNING, ERROR, PANIC, and FATAL                                                                                                                                                                                                                                                         |
| AzCopyLogLocation             | Sets the log location for AzCopy v.10 log files to the AZCOPY_LOG_LOCATION environment variable                                                                                                                                                                                                                                                                           |
| AzCopyPath                    | The file path to the local installation of the `AzCopy` Command. If installed in a non-default location, update this setting to match                                                                                                                                                                                                                                     |
| AzCopySetEnvironmentVariables | Should the environment variables controlling AzCopy v.10 be set before each object is loaded. Only valid for AzCopy v.10. Set these control variables to the desired values outside of BimlFlex when not setting this in the load packages                                                                                                                                |
| AzCopyUseSasToken             | Should AzCopy use a SAS Token for access. This is the only supported authentication mechanism for AzCopy v.10 (10). For legacy versions (5/8) you can use Account Key or SAS Token.                                                                                                                                                                                       |
| AzCopyVersion                 | The AzCopy version used. This should match the AzCopy command found in the AzCopyPath setting. Use a numeric like 8 or 10 as values to specify version                                                                                                                                                                                                                    |

### [Examples](#tab/azcopy-settings-example)

<!-- TODO: Populate Examples -->

| Setting Key                   | Setting Description |
| ----------------------------- | ------------------- |
| AzCopyCapMbps                 |                     |
| AzCopyConcurrency             |                     |
| AzCopyCreateContainer         |                     |
| AzCopyEnabled                 |                     |
| AzCopyLogLevel                |                     |
| AzCopyLogLocation             |                     |
| AzCopyPath                    |                     |
| AzCopySetEnvironmentVariables |                     |
| AzCopyUseSasToken             |                     |
| AzCopyVersion                 |                     |

***

### Azure External Table Settings (External Table Architecture Only)

<!-- TODO: Intro -->

### [Settings](#tab/azure-external-table-settings)

| Setting Key                 | Setting Description                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| AzureBlobStorageDomain      | The AzCopy domain to use.                                                                                 |
| AzureCreateExternalOnStage  | Should the Staging package `DROP` and `CREATE EXTERNAL TABLE` before running the Staging Stored Procedure |
| AzureExternalFileConversion | Should the extraction process for source to Blob-storage files applies default conversions.               |
| AzureExternalFileFormat     | The default External File Format definition to use                                                        |
| AzureStageOnExtract         | Should the Azure-based Extract and Load process run the stage process in the  Azure Synapse destination   |

### [Examples](#tab/azure-external-table-settings-example)

| Setting Key                 | Setting Description                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| AzureBlobStorageDomain      | blob.core.windows.net                                                                       |
| AzureCreateExternalOnStage  | Y                                                                                           |
| AzureExternalFileConversion | Y                                                                                           |
| AzureExternalFileFormat     | WITH (LOCATION = '@@this/' , DATA_SOURCE = dwhload_storage , FILE_FORMAT = pipe_zip_format) |
| AzureStageOnExtract         | T                                                                                           |

> [!NOTE]
> AzureBlobStorageDomain:  Classic blob storage uses `blob.core.windows.net` Azure Data Lake Storage Gen2 targets (with hierarchical namespace) use `dfs.core.windows.net`.  

***

### Azure PolyBase Settings (PolyBase Only)

<!-- TODO: Intro -->

### [Settings](#tab/azure-polybase-settings)

| Setting Key           | Setting Description                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| AzureAllowPolybase    | Should the Azure Data Factory copy command use PolyBase or load directly to destination Azure Synapse                |
| AzureCreateDummyFile  | Should the Staging package copy a placeholder.dummy file to accommodate the PolyBase limitation when no files exist. |
| AzurePolybaseSettings | The default Azure PolyBase settings to use                                                                           |

### [Examples](#tab/azure-polybase-settings-example)

| Setting Key           | Setting Description                                                            |
| --------------------- | ------------------------------------------------------------------------------ |
| AzureAllowPolybase    | Y                                                                              |
| AzureCreateDummyFile  | Y                                                                              |
| AzurePolybaseSettings | <PolyBaseSettings RejectType="Value" RejectValue="0", UseTypeDefault="true" /> |

***

### Azure Environment Settings (ADF Only)

The following Azure **Settings** are used to configure general Azure environment information.  

### [Settings](#tab/azure-environment-settings)

| Setting Key          | Setting Description                                   |
| -------------------- | ----------------------------------------------------- |
| AzureDataFactoryName | The default Data Factory Name to use                  |
| AzureKeyVault        | The default Key Vault name to use for Linked Services |
| AzureResourceGroup   | The default Azure Resource Group name to use          |
| AzureSubscriptionId  | The default Azure SubscriptionId to use               |

### [Examples](#tab/azure-environment-settings-example)

| Setting Key          | Setting Description |
| -------------------- | ------------------- |
| AzureDataFactoryName | adf-bfx             |
| AzureKeyVault        | akv-bfx             |
| AzureResourceGroup   | rg_BFX              |
| AzureSubscriptionId  | `<GUID>`            |

***

### Azure Blob Stage Container Settings (ADF Only)

The following Azure **Settings** are used to configure the blob staging destination.  

### [Settings](#tab/azure-stage-container-settings)

| Setting Key           | Setting Description                                                                   |
| --------------------- | ------------------------------------------------------------------------------------- |
| AzureStageContainer   | The Container Name to use for the staging process.                                    |
| AzureStageAccountKey  | A Storage access key to use when accessing the Blob storage.                          |
| AzureStageAccountName | The Azure Blob Storage Account Name to use for staging data as files in blob storage. |
| AzureStageSasToken    | A Storage access SAS Token to use when accessing the Blob storage.                    |

### [Examples](#tab/azure-stage-container-settings-example)

| Setting Key           | Setting Description |
| --------------------- | ------------------- |
| AzureStageContainer   | stage               |
| AzureStageAccountKey  |                     |
| AzureStageAccountName | bfxblobaccount      |
| AzureStageSasToken    | ?`<SasToken>`       |

> [!TIP]
> For additional details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)  

***

### Azure Blob Archive Container Settings (ADF Only)

The following Azure **Settings** are used to configure the blob archive destination.  

### [Settings](#tab/azure-archive-container-settings)

| Setting Key             | Setting Description                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------- |
| AzureArchiveContainer   | The Container Name to use for the archive process.                                      |
| AzureArchiveAccountKey  | A Storage access key to use when accessing the Blob storage.                            |
| AzureArchiveAccountName | The Azure Blob Storage Account Name to use for archiving data as files in blob storage. |
| AzureArchiveSasToken    | A Storage access SAS Token to use when accessing the Blob storage.                      |

### [Examples](#tab/azure-archive-container-settings-example)

| Setting Key             | Setting Description |
| ----------------------- | ------------------- |
| AzureArchiveContainer   | archive             |
| AzureArchiveAccountKey  |                     |
| AzureArchiveAccountName | bfxblobaccount      |
| AzureArchiveSasToken    | ?`<SasToken>`       |

> [!TIP]
> For additional details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)  

***

### Azure Blob Error Container Settings (ADF Only)

The following Azure **Settings** are used to configure the blob error destination.  

### [Settings](#tab/azure-error-container-settings)

| Setting Key           | Setting Description                                                         |
| --------------------- | --------------------------------------------------------------------------- |
| AzureErrorContainer   | The Container Name to use for the Error process.                            |
| AzureErrorAccountKey  | A Storage access key to use when accessing the Blob storage.                |
| AzureErrorAccountName | The Azure Blob Storage Account Name to use for error files in blob storage. |
| AzureErrorSasToken    | A Storage access SAS Token to use when accessing the Blob storage.          |

### [Examples](#tab/azure-error-container-settings-example)

| Setting Key           | Setting Description |
| --------------------- | ------------------- |
| AzureErrorContainer   | error               |
| AzureErrorAccountKey  |                     |
| AzureErrorAccountName | bfxblobaccount      |
| AzureErrorSasToken    | ?`<SasToken>`       |

> [!TIP]
> For additional details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)  

***

## Configuring a Connection

This section outlines any specific considerations needed when configuring BimlFlex to use Azure Synapse across the various **Integration Stages**.  

| Field               | Supported Values                                                                                                                            | Guide                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Integration Stage   | Source System, Landing Area, Staging Area, Persistent Staging Area, Raw Data Vault, Data Mart                                               | [Details](#integration-stage)        |
| Connection Type     | OLEDB\*, OLEDB SQL Based ELT\*                                                                                                              | [Details](#connection-type)          |
| System Type         | Azure Synapse                                                                                                                               | [Details](#system-type)              |
| Connection String   | `Data Source=<server name>.database.windows.net,<port>;Initial Catalog=<database>;User ID=<user>;Password=<password>;Provider=SQLNCLI11.1;`\* | [Details](#connection-string)        |
| Linked Service Type | Azure Synapse Analytics (SQL DW) (ADF Only)                                                                                                 | [Details](#linked-services-adf-only) |

> [!NOTE]
> \*: See details for notes.  

### Integration Stage

BimlFlex provides support for the use of Azure Synapse as both a target warehouse platform and as a `Source System`.  It is highly recommended that when using Azure Synapse as a target warehouse platform that a single database is used.  Naming patterns and schemas can be used for separation as needed.  

#### Persistent Staging Area

When using a `Persistent Staging Area` a `Source System` is required to have the *Persist History* box checked to have data persisted.  

### Connection Type

Currently BimlFlex only supports the *Connection Type* of `OLEDB SQL Based ELT` for an Azure Synapse **Connection** when being used as the target data warehouse platform.  When configuring a Azure Synapse *Integration Stage* of `Source System` set the *Connection Type* to `OLEDB`.  

### System Type

*System Type* should always be `Azure Synapse` for any Azure Synapse **Connection**.  

### Connection String

BimlFlex only uses the *Connection String* field to generate an associated Connection Manager in SSIS.  The associated Connection Manager will be created in SSIS using the inputted *Connection String* but will not be used in ADF.  

> [!NOTE]
> This guide only covers *Connection String* which is only used by SSIS orchestration.  For details on configuring the values of a Connection String Secret see the ADF Connection String Example in [Linked Services Section](#linked-services-adf-only).  

### [SSIS Connection String](#tab/synapse-connection-string-ssis)

```cmd
Data Source=<server name>.database.windows.net,<port>;Initial Catalog=<database>;User ID=<user>;Password=<password>;Provider=SQLNCLI11.1; 
```

### [Example](#tab/synapse-connection-string-ssis-example)

```cmd
Data Source=bfxserver.database.windows.net,1433;Initial Catalog=bfx_sqldw;User ID=MyUser;Password=P@$$Word;Provider=SQLNCLI11.1;
```

***

> [!TIP]
> For additional details on creating a **Connection** refer to the below guide:  
> BimlFlex Docs: [](xref:connections)  

### Linked Services (ADF Only)

When using an *Azure Key Vault* use the below example to assist with the creation of a connection string to be used as the the secret value.  If using a *Connection String* version of a Linked Service fill out the required fields.  

### [ADF Connection String](#tab/synapse-connection-string-adf)

```cmd
Data Source=<server name>.database.windows.net,<port>;Initial Catalog=<database>;User ID=<user>;Password=<password>;
```

### [Example](#tab/synapse-connection-string-adf-example)

```cmd
Data Source=bfxserver.database.windows.net,1433;Initial Catalog=bfx_sqldw;User ID=MyUser;Password=P@$$Word;
```

***

> [!TIP]
> For additional details on creating a Linked Service refer to the below guides:  
> BimlFlex Docs: [](xref:create-linked-service-connection)  
> BimlFlex Docs: [](xref:linked-service-adf-sql-datawarehouse)  

## Deploying Target Warehouse Environment

When Azure Synapse is used as the target warehouse platform, BimlFlex will generate the required SQL scripts for the deployment of all the tables, stored procedures, and the Data Vault default inserts (Ghost Keys).  Once generated the scripts can be manually deployed to the required database.  

### Automated SSDT Deployment (PowerShell)

### Manual Script Deployment (SSMS)

#### Generating SQL Scripts

<!-- TODO: List out specific scripts for Azure Synapse. -->

<!--
Using Azure Synapse as the target warehouse platform requires the generation of the `x Script` options when using **Generate Scripts** in BimlStudio.  Additionally if Data Vault is being used the standard `Data Vault Default Insert Script` can be used to generate the required Ghost Keys.  
-->

> [!TIP]
> For additional details on generating DDL refer to the below guide:  
> BimlFlex Docs: [](xref:bimlflex-generating-ddl)  

#### Deploying SQL Scripts

Once BimlFlex generates the scripts they can be executed against the target database.  These can be deployed through copy/paste using a SQL Server Management Studio or by another script execution clients if so desired.

<!-- TODO: Link to SSMS Guides -->

### Azure Environment (ADF Only)

The ADF Environment is deployed along with the orchestration.  For more details please refer to: [ADF Environment and Orchestration](#adf-environment-and-orchestration-adf-only)  

## Deploying Orchestration

BimlFlex automatically generates the orchestration artifacts as part of the standard build process.  The actual artifacts generated depends on the method of orchestration that is used.  The below sections outline the various artifacts by orchestration methods.

### SSIS Packages (SSIS Only)

Deploying SSIS orchestration while using Azure Synapse as a target platform is no different a standard SSIS deployment using BimlFlex.  Refer to the below guides for common deployment methods.  

Ensure these commonly missed steps are performed:  

- [Install AzCopy (External Table Architecture)](#installing-azcopy-external-table-architecture-only)  
- [Configuring Synapse (External Table Architecture Only)](#configuring-synapse-external-table-architecture-only)  

<!-- TODO: Double check all proper sections listed -->

> [!TIP]
> For additional details on generating deploying SSIS packages refer to the below guides:  
> BimlFlex Docs: [](xref:bimlflex-ssis-using-powershell)  
> BimlFlex Docs: [](xref:bimlflex-ssis-deployment-using-deployment-wizard)  


### ADF Environment and Orchestration (ADF Only)

The process of deploying the Azure environment and ADF orchestration itself remains unchanged.  

Ensure these commonly missed steps are performed:  

<!-- TODO: Double check all proper sections listed -->

- [Linked Service Configured and Secrets Entered](#linked-services-adf-only)  
- [Azure Environment Settings](#azure-environment-settings-adf-only)  

> [!TIP]
> For additional details on generating deploying SSIS packages refer to the below guides:  
> BimlFlex Docs: [](xref:bimlflex-adf-using-powershell)  
> BimlFlex Docs: [](xref:using-azure-portal)  
