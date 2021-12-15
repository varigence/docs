---
uid: bimlflex-snowflake-implementation
title: Snowflake Implementation
summary: Overview of implementing Snowflake using Azure Data Factory within BimlFlex, with installation guide, templates, and examples
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Initial Configuration

Before working with Snowflake metadata you should ensure that your environment is configured to use Snowflake appropriately.
This section will walk you through the required software and system configurations you will need to connect BimlFlex to your Snowflake environment.

### Implement Snowflake using Azure Data Factory

> [!NOTE]
> The example is intended to follow the guide for [Creating a Landing Area](xref:bimlflex-adf-landing-area#configure-a-landing-area-by-example).

The following video walks through the common steps and considerations for deploying an Azure Data Factory for Snowflake.

![BimlFlex - Implement Snowflake using Azure Data Factory](https://www.youtube.com/watch?v=COGIHSjAdSg?rel=0&autoplay=0 "BimlFlex - Implement Snowflake using Azure Data Factory")

> [!NOTE]
> Additional BimlFlex documentation regarding the implementation of Snowflake in Azure Data Factory can be referenced [here](xref:bimlflex-snowflake-implementation)

### Installing and Configuring SnowSQL (SSIS Only)

When using SSIS Orchestration, BimlFlex uses a [Snowflake Custom SSIS Component](#bimlflex-snowflake-custom-ssis-components-ssis-only) that leverages SnowSQL and the SnowSQL `config` file to connect and move data.
This requires that SnowSQL be installed and the appropriate connection created on the server executing the SSIS packages.
Follow the below link for instructions on how to install SnowSQL.

> [!TIP]
> For additional details on installing SnowSQL refer to the below guide:  
> Snowflake Docs: [Installing SnowSQL](https://docs.snowflake.com/en/user-guide/snowsql-install-config.html)

Once SnowSQL is installed a connection needs to be created in the specified `config` file.
The location may vary from depending on the installation but the default location for Windows is `%USERPROFILE%\.snowsql\`.
Open the file with any text editor and insert a connection following the template below.

### [Template](#tab/snowsql-connection-template)

```cmd
# BimlFlex Connection Template
[connections.<ConnectionName>]
accountname = <SnowflakeAccount>
username = <UserName>
password = <Password>
dbname = <DatabaseName>
schemaname = <SchemaName>
warehousename = <WarehouseName>
region = <Region>
```

### [Example](#tab/snowsql-connection-example)

```cmd
# BimlFlex Connection Example
[connections.bimlflex_db]
accountname = xy12345
username = MyUser
password = P@$$Word
dbname = bfx_sfl
schemaname = public
warehousename = compute_wh
region = west-us-2.azure
```

***

> [!TIP]
> For additional details on finding the associated values or configuring SnowSQL refer to the below guides:  
> Snowflake Docs: [Logging into Snowflake](https://docs.snowflake.com/en/user-guide/connecting.html)  
> Snowflake Docs: [Configuring SnowSQL](https://docs.snowflake.com/en/user-guide/snowsql-config.html)

### Installing and Configuring a Snowflake ODBC DSN (Importing Metadata and SSIS Only)

The ODBC driver is only required if using SSIS orchestration to connect to a Snowflake `Source System`.
Currently Snowflake is not supported as a `Source System` when using ADF orchestration.

> [!TIP]
> For additional details on installing and configuring and ODBC driver and DSN refer to the below guides:  
> Snowflake Docs: [ODBC Driver](https://docs.snowflake.com/en/user-guide/odbc.html)  
> Snowflake Docs: [Installing and Configuring the ODBC Driver for Windows](https://docs.snowflake.com/en/user-guide/odbc-windows.html)  
> Microsoft Docs: [ODBC Data Source Administrator](https://docs.microsoft.com/en-us/sql/odbc/admin/odbc-data-source-administrator)

### BimlFlex Snowflake Custom SSIS Components (SSIS Only)

The Snowflake load process uses a separate custom SSIS component to provide a solid query management experience in SSIS.
The components are installed and upgraded through the BimlFlex developer installation or the separate runtime installation for custom components.

> [!NOTE]
> If the components were not installed on initial installation they can be installed at a later date by re-running the installer.
> For additional details on installing BimlFlex and Custom Components refer to the below guide:
> BimlFlex Docs: [Installing BimlFlex](xref:bimlflex-setup-installing-bimlflex)

## Configuring BimlFlex Settings

BimlFlex uses **Settings** to adapt to specific requirements for file locations, naming conventions, data conventions etc.
Align these settings with the organizations best practices and environmental requirements.

### Snowflake Process Settings

The following Snowflake **Settings** are used to configure overall orchestration options for Snowflake **Connections**.

### [Settings](#tab/snowflake-process-settings)

| Setting         | Setting Description                                                                 |
| --------------- | ----------------------------------------------------------------------------------- |
| File Format     | The Snowflake file format to use                                                    |
| Remove Stage    | Should the Snowflake stage be removed prior to loading the new stage file           |
| Auto Suspend    | Should the Snowflake database Auto Suspend (`Y`, `N`)                               |
| Scale Up        | Should the Snowflake processing scale up the Snowflake database at start (`Y`, `N`) |
| Scale Up Size   | What size should the process scale the Snowflake database up to                     |
| Scale Down      | Should the Snowflake processing scale down the Snowflake database at end (`Y`, `N`) |
| Scale Down Size | What size should the process scale the Snowflake database down to                   |

### [Examples](#tab/snowflake-process-settings-example)

| Setting Key     | Setting Description                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| File Format     | CREATE FILE FORMAT IF NOT EXISTS "PUBLIC".NOHEADER_PIPE_CSV_FORMAT COMPRESSION = 'GZIP' ESCAPE_UNENCLOSED_FIELD = NONE FIELD_DELIMITER = '\|' RECORD_DELIMITER = '\\n' SKIP_HEADER = 0 TRIM_SPACE = FALSE NULL_IF = ('\\\\N'); |
| Remove Stage    | `true`                                                                                                                                                                                                                         |
| Auto Suspend    | `true`                                                                                                                                                                                                                         |
| Scale Up        | `true`                                                                                                                                                                                                                         |
| Scale Up Size   | MEDIUM                                                                                                                                                                                                                         |
| Scale Down      | `true`                                                                                                                                                                                                                         |
| Scale Down Size | XSMALL                                                                                                                                                                                                                         |

***

### Snowflake Connection Settings

The following Snowflake **Settings** are used to configure the values to be used to connect to the Snowflake Stage environment.
The SnowSQL settings require [SnowSQL installed and configured](#installing-and-configuring-snowsql-ssis-only).

### [Settings](#tab/snowflake-connection-settings)

| Setting Key        | Setting Description                                                         |
| ------------------ | --------------------------------------------------------------------------- |
| Account            | The Snowflake account name to use                                           |
| Region             | The Snowflake region to use                                                 |
| Warehouse          | The Snowflake warehouse name to use                                         |
| Database           | The Snowflake database name to use                                          |
| Schema             | The Snowflake schema name to use                                            |
| Password           | The Snowflake password to use                                               |
| User               | The Snowflake user name to use                                              |
| SnowSQL Config     | Location of the Snowflake SnowSQL configuration file                        |
| SnowSQL Path       | The path to the local installation of the Snowflake SnowSQL CLI Client tool |
| SnowSQL Connection | The Snowflake SnowSQL connection to use                                     |

### [Examples](#tab/snowflake-connection-settings-example)

| Setting Key        | Setting Description                  |
| ------------------ | ------------------------------------ |
| Account            | xy12345                              |
| Region             | west-us-2.azure                      |
| Warehouse          | compute_wh                           |
| Database           | bfx_sfl                              |
| Schema             | public                               |
| Password           | P@$$Word                             |
| User               | MyUser                               |
| SnowSQL Config     | %USERPROFILE%\\.snowsql\\config      |
| SnowSQL Connection | bimlflex_db                          |
| SnowSQL Path       | C:\\Program Files\\Snowflake SnowSQL |

***

### Snowflake Snowflake Data Tools Settings

The following Snowflake **Settings** are used to configure the Snowflake Data Tools project.

### [Settings](#tab/snowflake-snowdt-settings)

| Setting Key | Setting Description                                |
| ----------- | -------------------------------------------------- |
| Output Path | The folder where SnowDT database files are created |

### [Examples](#tab/snowflake-snowdt-settings-example)

| Setting Key | Setting Description               |
| ----------- | --------------------------------- |
| Output Path | @@OutputPath\SnowDT\@@VersionName |

***

### SSIS Catalog Settings (SSIS Only)

The following SSIS **Settings** are used to configure general SSIS environment information.

### [Settings](#tab/ssis-catalog-settings)

| Setting Key | Setting Description                                            |
| ----------- | -------------------------------------------------------------- |
| Server      | The SSIS Server name to use for generated Script files         |
| SSISDB      | The SSISDB database name to use                                |
| SsisFolder  | The SSIS Catalog folder name to use for generated Script files |

### [Examples](#tab/ssis-catalog-settings-example)

| Setting Key | Setting Description |
| ----------- | ------------------- |
| Server      | localhost           |
| SSISDB      | SSISDB              |
| SsisFolder  | @@this              |

> [!NOTE]
> SsisDb: `SSISDB` is Microsoft default.  This is rarely changed.  
>  
> SsisFolder: `@@this` in calling context in the name of the **Project**.

***

### Azure Data Factory Settings (ADF Only)

The following Azure **Settings** are used to configure general Azure environment information.

### [Settings](#tab/azure-datafactory-settings)

| Setting Key       | Setting Description                                   |
| ----------------- | ----------------------------------------------------- |
| Data Factory Name | The default Data Factory Name to use                  |
| Subscription ID   | The default Azure SubscriptionId to use               |
| Resource Group    | The default Azure Resource Group name to use          |
| Key Vault         | The default Key Vault name to use for Linked Services |

### [Examples](#tab/azure-datafactory-settings-example)

| Setting Key       | Setting Description |
| ----------------- | ------------------- |
| Data Factory Name | bfx-df              |
| Subscription ID   | `<GUID>`            |
| Resource Group    | bfx-rg              |
| Key Vault         | bfx-kv              |

***

### Azure Data Factory Function Bridge Settings (ADF Only)

An Azure Function Bridge is automatically created and added to the deployment when using Snowflake with an ADF orchestration.
All that is needed is setting the below values and the specified Azure Function Bridge will be generated and configured to allow execution against your Snowflake databases.

### [Settings](#tab/afb-settings)

| Setting Key                              | Setting Description                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------------------- |
| Function Bridge Name                     | The default Function Bridge Name to use                                            |
| Function Bridge Key                      | The default Function Bridge Key to use                                             |
| Use Function Bridge Key                  | Should the Function Bridge use the *KEY VAULT* or the below **Settings**           |
| Function Bridge Key Vault Name           | Name of the Function Bridge Key Vault Name if `Use Function Bridge Key` is enabled |
| Function Bridge Key Vault Secret         | Name of the Function Bridge Secret if `Use Function Bridge Key` is enabled         |
| Function Bridge Key Vault Secret Version | Optional secret version to use if `Use Function Bridge Key` is enabled             |

### [Examples](#tab/afb-settings-examples)

| Setting Key                              | Setting Description |
| ---------------------------------------- | ------------------- |
| Function Bridge Name                     | afb-bfx-snowflake   |
| Function Bridge Key                      | `<ValueForKey>`     |
| Use Function Bridge Key                  | `false`             |
| Function Bridge Key Vault Name           | afb-bfx-akv         |
| Function Bridge Key Vault Secret         | afb-secret          |
| Function Bridge Key Vault Secret Version |                     |

***

### Azure Storage Processing Settings (ADF Only)

The following Azure **Settings** are used to configure the blob destinations.
This is required when using Snowflake.

### [Settings](#tab/azure-storage-processing-settings)

| Setting Key          | Setting Description                                                                    |
| -------------------- | -------------------------------------------------------------------------------------- |
| Archive Container    | The Container Name to use for the archive process                                      |
| Archive Account Name | The Azure Blob Storage Account Name to use for archiving data as files in blob storage |
| Archive Account Key  | A Storage access key to use when accessing the Blob storage                            |
| Archive SAS Token    | A Storage access SAS Token to use when accessing the Blob storage                      |
| Error Container      | The Container Name to use for the Error process                                        |
| Error Account Name   | The Azure Blob Storage Account Name to use for error files in blob storage             |
| Error Account Key    | A Storage access key to use when accessing the Blob storage                            |
| Error SAS Token      | A Storage access SAS Token to use when accessing the Blob storage                      |
| Stage Container      | The Container Name to use for the staging process                                      |
| Stage Account Name   | The Azure Blob Storage Account Name to use for staging data as files in blob storage   |
| Stage Account Key    | A Storage access key to use when accessing the Blob storage                            |
| Stage SAS Token      | A Storage access SAS Token to use when accessing the Blob storage                      |
| Blob Storage Domain  | The AzCopy domain to use                                                               |

### [Examples](#tab/azure-storage-processing-settings-example)

| Setting Key          | Setting Description     |
| -------------------- | ----------------------- |
| Archive Container    | archive                 |
| Archive Account Name | bfxblobaccount          |
| Archive Account Key  | `<StorageAccountKey>`== |
| Archive SAS Token    | ?`<SasToken>`           |
| Error Container      | error                   |
| Error Account Name   | bfxblobaccount          |
| Error Account Key    | `<StorageAccountKey>`== |
| Error SAS Token      | ?`<SasToken>`           |
| Stage Container      | stage                   |
| Stage Account Name   | bfxblobaccount          |
| Stage Account Key    | `<StorageAccountKey>`== |
| Stage SAS Token      | ?`<SasToken>`           |
| Blob Storage Domain  | blob.core.windows.net   |

> [!TIP]
> For additional details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)

***

## Configuring a Connection

This section outlines any specific considerations needed when configuring BimlFlex to use Snowflake across the various **Integration Stages**.

| Field               | Supported Values                                                                  | Guide                                |
| ------------------- | --------------------------------------------------------------------------------- | ------------------------------------ |
| Integration Stage   | Source System\*, Staging Area, Persistent Staging Area, Raw Data Vault, Data Mart | [Details](#integration-stage)        |
| Connection Type     | ODBC\*, ODBC SQL Based ELT\*                                                      | [Details](#connection-type)          |
| System Type         | Snowflake Data Warehouse                                                          | [Details](#system-type)              |
| Connection String   | Dsn={DSN Name};Uid={User Name};Pwd={Password};Database={Database Name};\*         | [Details](#connection-string)        |
| Linked Service Type | Snowflake (ADF Only)                                                              | [Details](#linked-services-adf-only) |

> [!NOTE]
> \*: See details for notes.

### Integration Stage

BimlFlex provides support for the use of Snowflake as both a target warehouse platform and as a `Source System`.
It is highly recommended that when using Snowflake as a target warehouse platform that a single database is used.
Naming patterns and schemas can be used for separation as needed.
The generated DDL does not currently support `USE DATABASE` or `USE WAREHOUSE` statements.
Deployment would require either 'Cherry Picking' the correct tables for each database or using **Generate Script Options** and scoping to a specific *Integration Stage* before each generation of the scripts.

#### Source System

BimlFlex supports Snowflake as a `Source System` for SSIS orchestration.
When using ADF orchestration Snowflake only has limited support via the use of Staged Query **Objects** due to lack of 1st party connector support in ADF.

#### Landing Area (ADF Only)

Snowflake is not currently supported as a `Landing Area` but a Landing Area is required when using ADF to orchestrate data movement.
The recommendation is for the `Landing Area` to be a *Connection Type* of `Azure Blob Storage` and *System Type* of `Flat File Delimited`.
In addition to the `Landing Area` it is also important that the **Settings* for an [Azure Blob Stage Container](#azure-storage-processing-settings-adf-only), [Azure Blob Archive Container](#azure-storage-processing-settings-adf-only), and [Azure Blob Error Container](#azure-storage-processing-settings-adf-only) are populated correctly.

> [!IMPORTANT]
> Ensure that all Azure Blob Container **Settings** are configured properly:  
> [Azure Blob Stage Container](#azure-storage-processing-settings-adf-only)  
> [Azure Blob Archive Container](#azure-storage-processing-settings-adf-only)  
> [Azure Blob Error Container](#azure-storage-processing-settings-adf-only)

> [!TIP]
> Additional Resources:  
> Microsoft Docs: [Storage account overview](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)  
> Microsoft Docs: [Create an Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create)  
> Microsoft Docs: [Configure Azure Storage connection strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string)  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)

#### Persistent Staging Area

When using a `Persistent Staging Area` a `Source System` is required to have the *Persist History* box checked to have data persisted.

### Connection Type

Currently BimlFlex only supports the *Connection Type* of `ODBC SQL Based ELT` for a Snowflake **Connection** when being used as the target data warehouse platform.
When configuring a Snowflake *Integration Stage* of `Source System` set the *Connection Type* to `ODBC`.

### System Type

*System Type* should always be `Snowflake Data Warehouse` for any Snowflake **Connection**.

### Connection String

The [Snowflake Custom SSIS Component](#bimlflex-snowflake-custom-ssis-components-ssis-only) uses the connection information specified in the `.SnowSQL\config` file to connect.
See the [Snowflake SnowSQL Settings](#installing-and-configuring-snowsql-ssis-only) section for instructions on how to specify the file and connection to use.

BimlFlex only uses the *Connection String* field to generate an associated Connection Manager in SSIS.
The associated Connection Manager will be created in SSIS using the inputted *Connection String* but will not be used during any of the generated SSIS orchestration.

> [!NOTE]
> This guide only covers *Connection String* which is only used by SSIS orchestration.  For details on configuring the values of a Connection String Secret see the ADF Connection String Example in [Linked Services Section](#linked-services-adf-only).

### [SSIS Connection String](#tab/snowflake-connection-string-ssis)

```cmd
Dsn={DSN Name};Uid={User Name};Pwd={Password};Database={Database Name};
```

### [Example](#tab/snowflake-connection-string-ssis-example)

```cmd
Dsn=Snowflake_DSN;Uid=MyUser;Pwd=P@$$Word;Database=bfx_sfl;
```

> [!IMPORTANT]
> Then Connection Manager will also require the appropriate ODBC driver to be installed and a DSN created.  For additional details refer to the below guides:  
> Snowflake Docs: [ODBC Driver](https://docs.snowflake.com/en/user-guide/odbc.html)  
> Snowflake Docs: [Installing and Configuring the ODBC Driver for Windows](https://docs.snowflake.com/en/user-guide/odbc-windows.html)  
> Microsoft Docs: [ODBC Data Source Administrator](https://docs.microsoft.com/en-us/sql/odbc/admin/odbc-data-source-administrator)

***

> [!TIP]
> For additional details on creating a **Connection** refer to the below guide:  
> BimlFlex Docs: [Connections](xref:bimlflex-connection-editor)

### Linked Services (ADF Only)

Azure Data Factory does not support Snowflake as a Linked Service so BimlFlex uses an [Azure Function Bridge](#azure-data-factory-function-bridge-settings-adf-only) to close the gap.
The Azure Function Bridge will use the Linked Service configured in BimlFlex to determine the appropriate connection method to use.

When using an *Azure Key Vault* use the below example to assist with the creation of a connection string to be used as the the secret value.
If using a *Connection String* version of a Linked Service fill out the required fields.

### [ADF Connection String](#tab/snowflake-connection-string-adf)

```cmd
host={Server Address};account={Account Name};user={User Name};password={Password};db={Database Name};schema={Schema Name};warehouse={Warehouse Name};
```

### [Example](#tab/snowflake-connection-string-adf-example)

```cmd
host=xy12345.west-us-2.azure.snowflakecomputing.com;account=xy12345;user=MyUser;password=P@$$Word;db=bfx_sfl;schema=public;warehouse=compute_wh;
```

***

> [!TIP]
> For additional details on creating a Linked Service refer to the below guides:  
> BimlFlex Docs: [Configuring a Linked Service Connection](xref:create-linked-service-connection)  
> BimlFlex Docs: [Configuring a Linked Service Connection for Snowflake Data Warehouse](xref:linked-service-snowflake)

## Deploying Target Warehouse Environment

When Snowflake is used as the target warehouse platform, BimlFlex will generate the required SnowSQL script for the deployment of all the tables, stored procedures, and the Data Vault default inserts (Ghost Keys).
Once generated the scripts can be manually deployed to the required database.

### Generating SnowSQL Scripts

Using Snowflake as the target warehouse platform requires the generation of the `Snowflake Table Script` and `Snowflake Procedure Script` options when using **Generate Scripts** in BimlStudio.
Additionally if Data Vault is being used the standard `Data Vault Default Insert Script` can be used to generate the required Ghost Keys.

> [!TIP]
> For additional details on generating DDL refer to the below guide:  
> BimlFlex Docs: [BimlFlex Generating DDL](xref:bimlflex-generating-ddl)

### Deploying SnowSQL Scripts

Once BimlFlex generates the scripts they can be executed against the target database.
These can be deployed through copy/paste using a Snowflake Worksheet or by a SnowSQL command if desired.

> [!IMPORTANT]
> Ensure you are using the appropriate WAREHOUSE and DATABASE when executing the SnowSQL scripts.  The scripts do not have a `USE DATABASE` or `USE WAREHOUSE` clause and depend on the user executing the script to have select the appropriate values.

> [!TIP]
> For additional details on using the SnowSQL CLI or Worksheets refer to the below guides:  
> Snowflake Docs: [Using SnowSQL](https://docs.snowflake.com/en/user-guide/snowsql-use.html)  
> Snowflake Docs: [Using Worksheets for Queries](https://docs.snowflake.com/en/user-guide/ui-worksheet.html)

### Azure Environment (ADF Only)

The ADF Environment is deployed along with the orchestration.
For more details please refer to: [ADF Environment and Orchestration](#adf-environment-and-orchestration-adf-only)

## Deploying Orchestration

BimlFlex automatically generates the orchestration artifacts as part of the standard build process.
The actual artifacts generated depends on the method of orchestration that is used.
The below sections outline the various artifacts by orchestration methods.

### SSIS Packages (SSIS Only)

Deploying SSIS orchestration while using Snowflake as a target platform is no different a standard SSIS deployment using BimlFlex.
Refer to the below guides for common deployment methods.

Ensure these commonly missed steps are performed:

- [Install and Configure SnowSQL](#installing-and-configuring-snowsql-ssis-only)  
- [Install and Configure Snowflake ODBC DSN](#installing-and-configuring-a-snowflake-odbc-dsn-importing-metadata-and-ssis-only)
- [Install Snowflake SSIS Custom Components](#bimlflex-snowflake-custom-ssis-components-ssis-only)
- [SSIS Environment Settings](#ssis-catalog-settings-ssis-only)

> [!TIP]
> For additional details on generating deploying SSIS packages refer to the below guides:  
> BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-ssis-using-powershell)  
> BimlFlex Docs: [Deployment Through the SSIS Deployment Wizard](xref:bimlflex-ssis-deployment-wizard)

### ADF Environment and Orchestration (ADF Only)

In addition to the common Azure artifacts, an Azure Function Bridge is also created and deployed to allow the use of Snowflake inside ADF as a target warehouse platform.
The process of deploying the Azure environment and ADF orchestration itself remains unchanged.

Ensure these commonly missed steps are performed:

- [Landing Area Created](#landing-area-adf-only)  
- [Linked Service Configured and Secrets Entered](#linked-services-adf-only)  
- [Azure Environment Settings](#azure-data-factory-settings-adf-only)  
- [Azure Function Bridge Settings](#azure-data-factory-function-bridge-settings-adf-only)  
- [Azure Blob Stage Container Settings](#azure-storage-processing-settings-adf-only)  
- [Azure Blob Archive Container Settings](#azure-storage-processing-settings-adf-only)  
- [Azure Blob Error Container Settings](#azure-storage-processing-settings-adf-only)

> [!TIP]
> For additional details on generating deploying ADF artifacts refer to the below guides:  
> BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-adf-using-powershell)  
> BimlFlex Docs: [Deployment Through the Azure Portal](xref:using-azure-portal)
