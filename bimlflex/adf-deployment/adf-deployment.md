---
uid: bimlflex-ssis-deployment-guide
title: BimlFlex SSIS Deployment Guide
---

# ADF Deployment Guide

<!-- TODO: Intro statement -->

## Initial Configuration

<!-- TODO: Intro statement -->

Before working with Synapse metadata you should ensure that your environment is configured to use Synapse as per the selected implementation architecture.  This section will walk you through the required software and system configurations you will need to connect BimlFlex to your Synapse environment.  

The recommended architecture is to extract the data to one (or multiple) flat files, zip, upload to blob storage and load the staging environment through use of an EXTERNAL TABLE and PolyBase.  The following sections covers the additional steps to configure your environment to use an PolyBase Architecture approach.

If not using the PolyBase Architecture, proceed to [Configuring BimlFlex Setting]

> [!TIP]
> For additional details on installing BimlFlex refer to the below guide:  
> BimlFlex Docs: [](xref:bimlflex-installing-bimlflex)  

### Installing an Integration Runtime (On-prem Data Source Only)

<!-- Show or reference the installation and configuration of an IR -->

<!-- Link to installation and configuration of IR guide (Microsoft Docs) -->

### Installing AzCopy (Blob Upload Only)

For workloads that leverage the Blob upload or PolyBase Architecture, BimlFlex creates the files locally and then uses AzCopy to upload the files.  AzCopy comes in different versions with different feature sets.  A general recommendation is to use the latest version and SAS tokens for access authentication.  Use the below guide to download and install AzCopy.  After instillation ensure the appropriate [AzCopy **Settings**](#azcopy-settings-polybase-architecture-only) are configured in BimlFlex.  

> [!TIP]
> AzCopy is a copy tool for Azure from Microsoft.  For additional details on installing AzCopy refer to the below guide:  
> Microsoft Docs: [Get started with AzCopy](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)  

### Creating a Storage Account (Blob Upload Only)

<!-- Show or reference the creation of a Storage Account -->

### Creating a Blob Container (Blob Upload Only)

<!-- Show or reference the creation of a Container -->

<!-- Create a Stage, Archive and Error Container -->

### Creating a Azure Key Vault (Existing AKV Only)

<!-- Show or reference the creation of a AKV in BimlFlex. -->

<!-- If AKV previously exists, Secrets need to be manually created -->

## Configuring a ADF Project

<!-- Highlight how you set a project to ADF (Template) -->

<!-- Reference all connections must be cloud connections -->

## Configuring a Landing Area

When using ADF to orchestrate data movement a `Landing Area` is required to ensure the data is in the same environment as the Target Warehouse Environment.  This is generally a *Connection Type* of `Azure Blob Storage` and *System Type* of `Flat File Delimited` but any of the supported *Connection Type* can be used.  In addition to the `Landing Area` it is also important that the **Settings* for an [Azure Blob Stage Container](#azure-blob-stage-container-settings-adf-only), [Azure Blob Archive Container](#azure-blob-archive-container-settings-adf-only), and [Azure Blob Error Container](#azure-blob-error-container-settings-adf-only) are populated correctly is using a Blob Upload or Polybase Architecture.  

> [!IMPORTANT]
> Ensure that all Azure Blob Container **Settings** are configured properly:  
> [Azure Blob Stage Container](#azure-blob-stage-container-settings)  
> [Azure Blob Archive Container](#azure-blob-archive-container-settings)  
> [Azure Blob Error Container](#azure-blob-error-container-settings)  

> [!TIP]
> Additional Resources:  
> Microsoft Docs: [Storage account overview](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)  
> Microsoft Docs: [Create an Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create)  
> Microsoft Docs: [Configure Azure Storage connection strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string)  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)  

## Configuring Cloud Connections

<!-- Intro.  Cloud = true.  Linked Services now available -->

### Linked Services

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
> For additional details on creating a Linked Service refer to the below guide:  
> BimlFlex Docs: [](xref:create-linked-service-connection)  

## Configuring BimlFlex Settings

<!-- Intro -->

### Azure Environment Settings

The following Azure **Settings** are used to configure general Azure environment information.  

### [Settings](#tab/azure-environment-settings)

| Setting Key             | Setting Description                                                          |
| ----------------------- | ---------------------------------------------------------------------------- |
| AzureDataFactoryName    | The default Data Factory Name to use                                         |
| AzureKeyVault           | The default Key Vault name to use for Linked Services                        |
| AzureIntegrationRuntime | The default Data Factory Integration Runtime name to use for Linked Services |
| AzureResourceGroup      | The default Azure Resource Group name to use                                 |
| AzureSubscriptionId     | The default Azure SubscriptionId to use                                      |

> [!NOTE]
> AzureIntegrationRuntime:  This is generally only used if connecting to an on-prem data source.  

### [Examples](#tab/azure-environment-settings-example)

| Setting Key             | Setting Description |
| ----------------------- | ------------------- |
| AzureDataFactoryName    | adf-bfx             |
| AzureKeyVault           | akv-bfx             |
| AzureIntegrationRuntime | ir-bfx-local        |
| AzureResourceGroup      | rg_BFX              |
| AzureSubscriptionId     | `<GUID>`            |

> [!NOTE]
> AzureIntegrationRuntime:  This is generally only used if connecting to an on-prem data source.  

***

<!-- Link to installation and configuration of IR guide -->

### Azure Orchestration Settings

The following Azure **Settings** are used to configure general Azure environment information.  

### [Settings](#tab/azure-orchestration-settings)

| Setting Key             | Setting Description                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| AzureFunctionBridgeKey  | The default Azure Function Bridge Key to use                                                                                  |
| AzureFunctionBridgeName | The default Azure Function Bridge Name to use                                                                                 |
| AzureStageOnExtract     | Should the Azure-based Extract and Load process run the stage process for the extracted data in the destination Azure Synapse |

### [Examples](#tab/azure-orchestration-settings-example)

| Setting Key          | Setting Description |
| -------------------- | ------------------- |
| AzureDataFactoryName | adf-bfx             |
| AzureKeyVault        | akv-bfx             |
| AzureResourceGroup   | rg_BFX              |
| AzureSubscriptionId  | `<GUID>`            |

***

### AzCopy Settings (Blob Upload Only)

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

### Azure Blob Stage Container Settings (Blob Upload or PolyBase Architecture Only)

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

### Azure Blob Archive Container Settings (Blob Upload or PolyBase Architecture Only)

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

### Azure Blob Error Container Settings (Blob Upload or PolyBase Architecture Only)

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

### Azure Function Bridge Settings (Snowflake Only)

An Azure Function Bridge is automatically created and added to the deployment when using Snowflake with an ADF orchestration.  All that is needed is setting the below values and the specified Azure Function Bridge will be generated and configured to allow execution against your Snowflake databases.  

### [Settings](#tab/afb-settings)

| Setting Key             | Setting Description                           |
| ----------------------- | --------------------------------------------- |
| AzureFunctionBridgeKey  | The default Azure Function Bridge Key to use  |
| AzureFunctionBridgeName | The default Azure Function Bridge Name to use |

### [Examples](#tab/afb-settings-examples)

| Setting Key             | Setting Description |
| ----------------------- | ------------------- |
| AzureFunctionBridgeKey  | ValueForKey         |
| AzureFunctionBridgeName | afb-bfx-snowflake   |

***

## Deploying Target Warehouse Environment

<!-- Clean up terminology.  Not always the case for Snowflake.  Ensure Synapse possibly needing manual EXT scripts still ran. -->

When deploying the target warehouse platform, BimlFlex will generate the required SQL scripts for the deployment of all the tables, stored procedures, and the Data Vault default inserts (Ghost Keys).  Once generated the scripts can be manually deployed to the required database.  

### Automated SSDT Deployment (PowerShell)

<!-- Clean up terminology.  Not always the case for Snowflake.  Ensure Synapse possibly needing manual EXT scripts still ran. -->

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

The below table has been provided as a quick reminder as to when a script should be generated.

| Script                           | Condition                                                                        |
| -------------------------------- | -------------------------------------------------------------------------------- |
| Create Table Script              | When using anything beside Synapse or Snowflake as the Target Warehouse Platform |
| PolyBase External Table Script   | When using PolyBase Architecture                                                 |
| Azure Synapse Table Script       | When using Synapse as Target Warehouse Platform                                  |
| Data Vault Default Insert Script | When using a Data Vault                                                          |
| Data Vault Procedure Script      | When using a SQL Based ELT Data Vault                                            |
| Data Mart Procedure Script       | When using a SQL Based ELT Data Mart                                             |
| Persistent Procedure Script      | When using a SQL Based ELT Staging Area w/ PSA                                   |
| Business Vault Procedure Script  | When using PIT or Bridge Tables                                                  |
| Snowflake Table Script           | When using Snowflake as Target Warehouse Platform                                |
| Snowflake Procedure Script       | When using Snowflake with SQL Based ELT as Target Warehouse Platform             |

> [!TIP]
> For additional details on generating DDL refer to the below guide:  
> BimlFlex Docs: [](xref:bimlflex-generating-ddl)  

#### Deploying SQL Scripts

Once BimlFlex generates the scripts they can be executed against the target database.  These can be deployed through copy/paste using a SQL Server Management Studio or by another script execution clients if so desired.

> [!TIP]
> For additional details on installing or using SSMS refer to the below guides:  
> Microsoft Docs: [Download SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)  
> Microsoft Docs: [What is SQL Server Management Studio (SSMS)?](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms)  

## Deploying Azure Artifacts

BimlFlex automatically generates the orchestration artifacts as part of the standard build process.  The actual artifacts generated depends on the method of orchestration that is used.  The below sections outline the various artifacts by orchestration methods.

### ADF Environment Artifacts

### Deploying ADF Environment and Orchestration

<!-- Have this guide focus on some actual steps not just reference another guide -->

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
> For additional details on generating deploying ADF packages refer to the below guides:  
> BimlFlex Docs: [](xref:bimlflex-adf-using-powershell)  
> BimlFlex Docs: [](xref:using-azure-portal)  
