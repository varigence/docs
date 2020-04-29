---
uid: bimlflex-synapse-implementation
title: Synapse Implementations
---

# Microsoft Azure Synapse Overview

BimlFlex supports Microsoft Azure Synapse as Source and a target data warehouse platform for both SSIS and ADF implementations.  

## Initial Configuration

Before working with Synapse metadata you should ensure that your environment is configured to use Synapse as per the selected implementation architecture.  This section will walk you through the required software and system configurations you will need to connect BimlFlex to your Synapse environment.  

The recommended architecture is to extract the data to one (or multiple) flat files, zip, upload to blob storage and load the staging environment through use of an EXTERNAL TABLE and PolyBase.  The following sections covers the additional steps to configure your environment to use an PolyBase Architecture approach.

If not using the PolyBase Architecture, proceed to [Configuring BimlFlex Setting]

> [!TIP]
> For additional details on installing BimlFlex refer to the below guide:  
> BimlFlex Docs: [](xref:bimlflex-installing-bimlflex)  

### Installing AzCopy (PolyBase Architecture Only)

For workloads that leverage the PolyBase Architecture, BimlFlex creates the files locally and then uses AzCopy to upload the files.  AzCopy comes in different versions with different feature sets.  A general recommendation is to use the latest version and SAS tokens for access authentication.  Use the below guide to download and install AzCopy.  After instillation ensure the appropriate [AzCopy **Settings**](#azcopy-settings-polybase-architecture-only) are configured in BimlFlex.  

> [!TIP]
> AzCopy is a copy tool for Azure from Microsoft.  For additional details on installing AzCopy refer to the below guide:  
> Microsoft Docs: [Get started with AzCopy](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)  

### Configuring Synapse (PolyBase Architecture Only)

Synapse will need some database objects created before PolyBase can be used to leverage an EXTERNAL TABLE.  This involves the creation of a MASTER KEY, DATABASE SCOPED CREDENTIAL, EXTERNAL DATA SOURCE and an EXTERNAL FILE FORMAT.  Refer to the below sections as needed to create the missing objects.  

#### Creating a Master Key

This needs to be defined once in the Synapse environment so that the credentials can be created.

### [Template](#tab/create-master-key)

```sql
CREATE MASTER KEY
    ENCRYPTION BY PASSWORD ='<Password>';
GO
```

### [Example](#tab/create-master-key-example)

```sql
CREATE MASTER KEY
    ENCRYPTION BY PASSWORD = 'B!mlFl3x!';
GO
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
CREATE DATABASE SCOPED CREDENTIAL [<BimlFlex Credential Name>]
WITH
    IDENTITY = '<Identity>',
    SECRET = '<Secret>';
GO
```

### [SAS Example](#tab/create-database-scoped-credential-example)

```sql
CREATE DATABASE SCOPED CREDENTIAL [bimlflex]
WITH
    IDENTITY = 'bimlflex-sas',
    SECRET = '<SAS Token>';
GO
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
        , CREDENTIAL = [<BimlFlex Credential>]
    );
GO
```

### [Example](#tab/create-external-data-source-example)

```sql
CREATE EXTERNAL DATA SOURCE [dwhload_storage]
    WITH (
        LOCATION = N'wasbs://bfx-staging@bfxstorage.blob.core.windows.net'
        , TYPE = HADOOP
        , CREDENTIAL = [bimlflex]
    );
GO
```

> [!NOTE]
> `dwhload_storage` is the default DATA_SOURCE used in the `AzureExternalFileFormat` [PolyBase **Setting**](#azure-polybase-settings-polybase-architecture-only).

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
GO
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
GO
```

> [!NOTE]
> `pipe_zip_format` is the default FILE_FORMAT used in the `AzureExternalFileFormat` [PolyBase **Setting**](#azure-polybase-settings-polybase-architecture-only).

***

> [!TIP]
> For additional details on creating an external file format refer to the below guide:  
> Microsoft Docs: [CREATE EXTERNAL FILE FORMAT (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-external-file-format-transact-sql)  

## Configuring BimlFlex Settings

### AzCopy Settings (PolyBase Architecture Only)

The following AzCopy **Settings** are used to configure how AzCopy is used.  

### [Settings](#tab/azcopy-settings)

| Setting Key                   | Setting Description                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AzCopyCapMbps                 | AzCopy v.10 transfer speed cap in Mbps.                                                                                                                  |
| AzCopyConcurrency             | Specify the number of concurrent AzCopy operations to start                                                                                              |
| AzCopyCreateContainer         | Should the pipeline include a step to create the destination container.                                                                                  |
| AzCopyEnabled                 | Should the generated files be uploaded using `AzCopy` as part of the SSIS Packages. Disable if the solution uses an alternative file management process. |
| AzCopyLogLevel                | The log level for AzCopy v.10 logs. Available log levels are: NONE, DEBUG, INFO, WARNING, ERROR, PANIC, and FATAL.                                       |
| AzCopyLogLocation             | Sets the log location for AzCopy v.10 log files to the AZCOPY_LOG_LOCATION environment variable.                                                         |
| AzCopyPath                    | The file path to the local installation of the `AzCopy` Command. If installed in a non-default location, update this setting to match.                   |
| AzCopySetEnvironmentVariables | Should the environment variables controlling AzCopy v.10 be set before each object is loaded.                                                            |
| AzCopyUseSasToken             | Should AzCopy use a SAS Token for access.                                                                                                                |
| AzCopyVersion                 | The AzCopy version used. This should match the AzCopy command found in the AzCopyPath setting. Use a numeric like 8 or 10 as values to specify version.  |

> [!NOTE]
> AzCopyCapMbps:  For legacy AzCopy versions, this is always included as a parameter in the command call. For AzCopy v.10 this is optionally set to the AZCOPY_CONCURRENCY_VALUE environmental variable. To reuse the current environment variable without setting it for each object, leave this blank when using AzCopy v.10.  
>  
> AzCopyCreateContainer: Legacy AzCopy versions create this automatically, v.10 fails when the target container is missing. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads.  
>  
> AzCopySetEnvironmentVariables: Only valid for AzCopy v.10. Set these control variables to the desired values outside of BimlFlex when not setting this in the load packages.  
>  
> AzCopyUseSasToken: This is the only supported authentication mechanism for AzCopy v.10 (10). For legacy versions (5/8) you can use Account Key or SAS Token.  

### [Examples](#tab/azcopy-settings-example)

| Setting Key                   | Setting Description       |
| ----------------------------- | ------------------------- |
| AzCopyCapMbps                 | 100                       |
| AzCopyConcurrency             | 2                         |
| AzCopyCreateContainer         | N                         |
| AzCopyEnabled                 | Y                         |
| AzCopyLogLevel                | NONE                      |
| AzCopyLogLocation             | C:\\BimlFlex\\Export\\Log |
| AzCopyPath                    | C:\\BimlFlex\\AzCopy      |
| AzCopySetEnvironmentVariables | N                         |
| AzCopyUseSasToken             | N                         |
| AzCopyVersion                 | 10                        |

> [!NOTE]
> AzCopyCapMbps:  For legacy AzCopy versions, this is always included as a parameter in the command call. For AzCopy v.10 this is optionally set to the AZCOPY_CONCURRENCY_VALUE environmental variable. To reuse the current environment variable without setting it for each object, leave this blank when using AzCopy v.10.  
>  
> AzCopyCreateContainer: Legacy AzCopy versions create this automatically, v.10 fails when the target container is missing. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads.  
>  
> AzCopySetEnvironmentVariables: Only valid for AzCopy v.10. Set these control variables to the desired values outside of BimlFlex when not setting this in the load packages.  
>  
> AzCopyUseSasToken: This is the only supported authentication mechanism for AzCopy v.10 (10). For legacy versions (5/8) you can use Account Key or SAS Token.  

***

> [!TIP]
> For additional details about AzCopy refer to the below guide:  
> Microsoft Docs: [Configure, optimize, and troubleshoot AzCopy](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-configure)  

### Azure PolyBase Settings (PolyBase Architecture Only)

The following AzCopy **Settings** are used to configure the use of PolyBase and EXTERNAL TABLES.  

### [Settings](#tab/azure-external-table-settings)

| Setting Key                 | Setting Description                                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| AzureAllowPolybase          | Should the Azure Data Factory copy command use PolyBase or load directly to destination Azure Synapse.               |
| AzureBlobStorageDomain      | The AzCopy domain to use.                                                                                            |
| AzureCreateDummyFile        | Should the Staging package copy a placeholder.dummy file to accommodate the PolyBase limitation when no files exist. |
| AzureCreateExternalOnStage  | Should the Staging package `DROP` and `CREATE EXTERNAL TABLE` before running the Staging Stored Procedure.           |
| AzureExternalFileConversion | Should the extraction process for source to Blob-storage files applies default conversions.                          |
| AzureExternalFileFormat     | The default External File Format definition to use.                                                                  |
| AzurePolybaseSettings       | The default Azure PolyBase settings to use.                                                                          |
| AzureStageOnExtract         | Should the Azure-based Extract and Load process run the stage process in the  Azure Synapse destination.             |

### [Examples](#tab/azure-external-table-settings-example)

| Setting Key                 | Setting Description                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| AzureAllowPolybase          | Y                                                                                           |
| AzureBlobStorageDomain      | blob.core.windows.net                                                                       |
| AzureCreateDummyFile        | N                                                                                           |
| AzureCreateExternalOnStage  | N                                                                                           |
| AzureExternalFileConversion | Y                                                                                           |
| AzureExternalFileFormat     | WITH (LOCATION = '@@this/' , DATA_SOURCE = dwhload_storage , FILE_FORMAT = pipe_zip_format) |
| AzurePolybaseSettings       | <PolyBaseSettings RejectType="Value" RejectValue="0", UseTypeDefault="true" />              |
| AzureStageOnExtract         | Y                                                                                           |

> [!NOTE]
> AzureBlobStorageDomain:  Classic blob storage uses `blob.core.windows.net` Azure Data Lake Storage Gen2 targets (with hierarchical namespace) use `dfs.core.windows.net`.  

***

> [!NOTE]
> AzureExternalFileFormat: Ensure the following [EXTERNAL DATA SOURCE](#creating-a-external-data-source) and [EXTERNAL FILE FORMAT](#creating-a-external-file-format) are aligned with this setting correctly.

### SSIS Environment Settings (SSIS Only)

The following SSIS **Settings** are used to configure general SSIS environment information.  

### [Settings](#tab/ssis-environment-settings)

| Setting Key | Setting Description                                            |
| ----------- | -------------------------------------------------------------- |
| SsisDb      | The SSISDB database name to use                                |
| SsisFolder  | The SSIS Catalog folder name to use for generated Script files |
| SsisServer  | The SSIS Server name to use for generated Script files         |

### [Examples](#tab/ssis-environment-settings-example)

| Setting Key | Setting Description |
| ----------- | ------------------- |
| SsisDb      | SSISDB              |
| SsisFolder  | @@this              |
| SsisServer  | localhost           |

> [!NOTE]
> SsisDb: `SSISDB` is Microsoft default.  This is rarely changed.  
>  
> SsisFolder: `@@this` in calling context in the name of the **Project**.

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

| Field               | Supported Values                                                                                                                              | Guide                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Integration Stage   | Source System, Landing Area, Staging Area, Persistent Staging Area, Raw Data Vault, Data Mart                                                 | [Details](#integration-stage)        |
| Connection Type     | OLEDB\*, OLEDB SQL Based ELT\*                                                                                                                | [Details](#connection-type)          |
| System Type         | Azure Synapse                                                                                                                                 | [Details](#system-type)              |
| Connection String   | `Data Source=<server name>.database.windows.net,<port>;Initial Catalog=<database>;User ID=<user>;Password=<password>;Provider=SQLNCLI11.1;`\* | [Details](#connection-string)        |
| Linked Service Type | Azure Synapse Analytics (SQL DW) (ADF Only)                                                                                                   | [Details](#linked-services-adf-only) |

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

A part of the Build process, BimlStudio will generate a SQL Server Data Tools (SSDT) project for the Synapse target warehouse platform.  By default a SSDT deployment file named `ssdt-deploy.<DatabaseName>.ps1` is created and placed in the `...\<Output Folder>\Deploy\` folder for each database in the target warehouse environment.  

The SSDT project will have all the required tables, stored procedures and Data Vault default inserts required for the project.  Through use of [Azure PolyBase Settings](#azure-polybase-settings-polybase-architecture-only) EXTERNAL TABLES can be included or excluded in this deployment file.  These files are commonly excluded due to PolyBase requiring a file to exist in the blob storage prior to the creation of the EXTERNAL TABLE.  

> [!IMPORTANT]
> It is HIGHLY recommended that the Synapse server in created manually in Azure prior to executing the `ssdt-deploy` PowerShell script.  The generated SSDT project does not contain any configuration information for Azure settings and will be created with whatever default Microsoft is currently using for *Performance Level*.  

Aside from the possible inclusion of the EXTERNAL TABLE scripts, the process is identical to a standard SQL Server deployment.

> [!TIP]
> For additional details on PowerShell deployment refer to the below guide:  
> BimlFlex Docs: [](xref:bimlflex-interactive-build)
> BimlFlex Docs: [](xref:bimlflex-command-line-build)
> BimlFlex Docs: [](xref:bimlflex-ssis-using-powershell)

### Manual Script Deployment (SSMS)

In addition to generating automated deployment scripts BimlFlex also allows for targeted creation of DDL.  Follow the below sections for steps on to how to generate and deploy the artifacts manually.  

#### Generating SQL Scripts

Generating Azure Synapse DDL scripts are similar to a standard SQL Server deployment using **Generate Scripts** in BimlStudio with a few exceptions.  Azure Synapse tables are required to be created by `Azure Synapse Table Script` instead of the use of `Create Table Script`.  `Create Table Script` is not needed for a Azure Synapse target warehouse environment.  Additionally if using the PolyBase Architecture, the `PolyBase External Table Script` will need to be ran to generate the CREATE EXTERNAL TABLE scripts.

> [!NOTE]
> Ensure you configure the below settings is using the `PolyBase External Table Script`:  
> [Azure PolyBase Settings](#azure-polybase-settings-polybase-architecture-only)  

The below table has been provided as a quick reminder as to when a script should be generated.

| Script                           | Condition                                       |
| -------------------------------- | ----------------------------------------------- |
| PolyBase External Table Script   | When using PolyBase Architecture                |
| Azure Synapse Table Script       | When using Synapse as Target Warehouse Platform |
| Data Vault Default Insert Script | When using a Data Vault                         |
| Data Vault Procedure Script      | When using a SQL Based ELT Data Vault           |
| Data Mart Procedure Script       | When using a SQL Based ELT Data Mart            |
| Persistent Procedure Script      | When using a SQL Based ELT Staging Area w/ PSA  |
| Business Vault Procedure Script  | When using PIT or Bridge Tables                 |

> [!TIP]
> For additional details on generating DDL refer to the below guide:  
> BimlFlex Docs: [](xref:bimlflex-generating-ddl)  

#### Deploying SQL Scripts

Once BimlFlex generates the scripts they can be executed against the target database.  These can be deployed through copy/paste using a SQL Server Management Studio or by another script execution clients if so desired.

> [!TIP]
> For additional details on installing or using SSMS refer to the below guides:  
> Microsoft Docs: [Download SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)  
> Microsoft Docs: [What is SQL Server Management Studio (SSMS)?](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms)  

### Azure Environment (ADF Only)

The ADF Environment is deployed along with the orchestration.  For more details please refer to: [ADF Environment and Orchestration](#adf-environment-and-orchestration-adf-only)  

## Deploying Orchestration

BimlFlex automatically generates the orchestration artifacts as part of the standard build process.  The actual artifacts generated depends on the method of orchestration that is used.  The below sections outline the various artifacts by orchestration methods.

### SSIS Packages (SSIS Only)

Deploying SSIS orchestration while using Azure Synapse as a target platform is no different a standard SSIS deployment using BimlFlex.  Refer to the below guides for common deployment methods.  

Ensure these commonly missed steps are performed:  

- [Install AzCopy (PolyBase Architecture Only)](#installing-azcopy-polybase-architecture-only)  
- [Configuring Synapse (PolyBase Architecture Only)](#configuring-synapse-polybase-architecture-only)  
- [AzCopy Settings](#azcopy-settings-polybase-architecture-only)  
- [Azure PolyBase Settings](#azure-polybase-settings-polybase-architecture-only)  
- [SSIS Environment Settings](#ssis-environment-settings-ssis-only)  
- [Target Warehouse Environment Deployed (Required for SSIS Validation)](#deploying-target-warehouse-environment)

> [!TIP]
> For additional details on generating deploying SSIS packages refer to the below guides:  
> BimlFlex Docs: [](xref:bimlflex-ssis-using-powershell)  
> BimlFlex Docs: [](xref:bimlflex-ssis-deployment-wizard)  

### ADF Environment and Orchestration (ADF Only)

The process of deploying the Azure environment and ADF orchestration itself remains unchanged.  

Ensure these commonly missed steps are performed:  

- [Configuring Synapse (PolyBase Architecture Only)](#configuring-synapse-polybase-architecture-only)  
- [Azure PolyBase Settings](#azure-polybase-settings-polybase-architecture-only)  
- [Linked Service Configured and Secrets Entered](#linked-services-adf-only)  
- [Azure Environment Settings](#azure-environment-settings-adf-only)  
- [Azure Blob Stage Container Settings](#azure-blob-stage-container-settings-adf-only)
- [Azure Blob Archive Container Settings](#azure-blob-archive-container-settings-adf-only)
- [Azure Blob Error Container Settings](#azure-blob-error-container-settings-adf-only)

> [!TIP]
> For additional details on generating deploying ADF artifacts refer to the below guides:  
> BimlFlex Docs: [](xref:bimlflex-adf-using-powershell)  
> BimlFlex Docs: [](xref:using-azure-portal)  
