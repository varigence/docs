---
uid: bimlflex-snowflake-implementation
title: Snowflake Implementation
---

# Snowflake Overview

Snowflake is a cloud data warehouse platform provided by Snowflake Computing Inc.  BimlFlex supports Snowflake as both a source and a target data warehouse platform and provides load patterns that use the BimlFlex metadata to create the required ETL and ELT for loading a Data Warehouse in Snowflake.  BimlFlex uses Snowflake's best practice approaches to loading and managing the Snowflake data warehouse.  This includes using the BimlFlex optimal load pattern for Snowflake to extract the data and land it in the Snowflake stage, then use the Snowflake COPY command to process the data.  

> [!TIP]
> Additional Resources:  
> [Snowflake Website](https://www.snowflake.com/)  
> [Snowflake Documentation](https://docs.snowflake.com/)  

## Initial Configuration

Before working with Snowflake metadata you should ensure that your environment is configured to use Snowflake appropriately.  This section will walk you through the required software, configures and system configurations you will need to connect BimlFlex to your Snowflake environment.

### Installing and Configuring SnowSQL (SSIS Only)

When using SSIS Orchestration, BimlFlex uses a [Snowflake Custom SSIS Component](#bimlflex-snowflake-custom-ssis-components-ssis-only) that leverages SnowSQL and the SnowSQL `config` file to connect and move data.  This requires that SnowSQL be installed and the appropriate connection created on the server executing the SSIS packages.  Follow the below link for instructions on how to install SnowSQL.

> [!TIP]
> For help installing SnowSQL refer to the associated Snowflake documentation below:  
> Snowflake Docs: [Installing SnowSQL](https://docs.snowflake.com/en/user-guide/snowsql-install-config.html)  

Once SnowSQL is installed a connection needs tob be created in the specified `config` file.  The location may vary from depending on the installation but the default location for Windows is `%USERPROFILE%\.snowsql\`.  Open the file with any text editor and insert a connection following the template below.

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
> For help finding the associated values or config SnowSQL refer to the associated Snowflake documentation below:  
> Snowflake Docs: [Logging into Snowflake](https://docs.snowflake.com/en/user-guide/connecting.html)  
> Snowflake Docs: [Configuring SnowSQL](https://docs.snowflake.com/en/user-guide/snowsql-config.html)  

<!-- This section is not needed at this point as BimlFlex currently only uses the `.snowsql\config` file to connect.
### Installing and Configuring a Snowflake ODBC DSN (SSIS Only)

> [!TIP]
> Additional Resources:  
> Snowflake Docs: [ODBC Driver](https://docs.snowflake.com/en/user-guide/odbc.html)
> Snowflake Docs: [Installing and Configuring the ODBC Driver for Windows](https://docs.snowflake.com/en/user-guide/odbc-windows.html)
> Microsoft Docs: [ODBC Data Source Administrator](https://docs.microsoft.com/en-us/sql/odbc/admin/odbc-data-source-administrator)
-->

### BimlFlex Snowflake Custom SSIS Components (SSIS Only)

The Snowflake load process uses a separate custom SSIS component to provide a solid query management experience in SSIS.  The components are installed and upgraded through the BimlFlex developer installation or the separate runtime installation for custom components.  

> [!NOTE]
> If the components were not installed on initial installation they can be installed at a later date by re-running the installer.  The following guide for help installing BimlFlex and Custom:  
> BimlFlex Docs: [](xref:bimlflex-installing-bimlflex)

## Configuring BimlFlex Settings

BimlFlex uses **Settings** to adapt to specific requirements for file locations, naming conventions, data conventions etc.  Align these settings with the organizations best practices and environmental requirements.

### Snowflake Orchestration Settings

<!-- TODO: Intro. -->

### [Settings](#tab/snowflake-orchestration-settings)

| Setting Key            | Setting Description                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------- |
| SnowflakeAutoSuspend   | Should the Snowflake database Auto Suspend (`Y`, `N`)                               |
| SnowflakeFileFormat    | The Snowflake file format to use                                                    |
| SnowflakeRemoveStage   | Should the Snowflake stage be removed prior to loading the new stage file           |
| SnowflakeScaleDown     | Should the Snowflake processing scale down the Snowflake database at end (`Y`, `N`) |
| SnowflakeScaleDownSize | What size should the process scale the Snowflake database down to                   |
| SnowflakeScaleUp       | Should the Snowflake processing scale up the Snowflake database at start (`Y`, `N`) |
| SnowflakeScaleUpSize   | What size should the process scale the Snowflake database up to                     |

### [Examples](#tab/snowflake-orchestration-settings-example)

| Setting Key            | Setting Description                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SnowflakeAutoSuspend   | Y                                                                                                                                                                                                                              |
| SnowflakeFileFormat    | CREATE FILE FORMAT IF NOT EXISTS "PUBLIC".NOHEADER_PIPE_CSV_FORMAT COMPRESSION = 'GZIP' ESCAPE_UNENCLOSED_FIELD = NONE FIELD_DELIMITER = '\|' RECORD_DELIMITER = '\\n' SKIP_HEADER = 0 TRIM_SPACE = FALSE NULL_IF = ('\\\\N'); |
| SnowflakeRemoveStage   | Y                                                                                                                                                                                                                              |
| SnowflakeScaleDown     | Y                                                                                                                                                                                                                              |
| SnowflakeScaleDownSize | XSMALL                                                                                                                                                                                                                         |
| SnowflakeScaleUp       | Y                                                                                                                                                                                                                              |
| SnowflakeScaleUpSize   | MEDIUM                                                                                                                                                                                                                         |

***

### Snowflake Stage Settings

The following Snowflake **Settings** are you to configure the values to be used to connect to the Snowflake Stage environment.

### [Settings](#tab/snowflake-stage-settings)

| Setting Key        | Setting Description                 |
| ------------------ | ----------------------------------- |
| SnowflakeAccount   | The Snowflake account name to use   |
| SnowflakeDatabase  | The Snowflake database name to use  |
| SnowflakePassword  | The Snowflake password to use       |
| SnowflakeRegion    | The Snowflake region to use         |
| SnowflakeSchema    | The Snowflake schema name to use    |
| SnowflakeUser      | The Snowflake user name to use      |
| SnowflakeWarehouse | The Snowflake warehouse name to use |

### [Examples](#tab/snowflake-stage-settings-example)

| Setting Key        | Setting Description |
| ------------------ | ------------------- |
| SnowflakeAccount   | xy12345             |
| SnowflakeDatabase  | bfx_sfl             |
| SnowflakePassword  | P@$$Word            |
| SnowflakeRegion    | west-us-2.azure     |
| SnowflakeSchema    | public              |
| SnowflakeUser      | MyUser              |
| SnowflakeWarehouse | compute_wh          |

***

### Snowflake SnowSQL Settings (SSIS Only)

The SnowSQL **Settings** deal with the configuration of SnowSQL.  These will only need to be configured if SSIS orchestration is used.  Requires [SnowSQL installed and configured](#installing-and-configuring-snowsql-ssis-only).

### [Settings](#tab/snowsql-settings)

| Setting Key       | Setting Description                                                         |
| ----------------- | --------------------------------------------------------------------------- |
| SnowSqlConfig     | Location of the Snowflake SnowSQL configuration file                        |
| SnowSqlConnection | The Snowflake SnowSQL connection to use                                     |
| SnowSqlPath       | The path to the local installation of the Snowflake SnowSQL CLI Client tool |

### [Examples](#tab/snowsql-settings-example)

| Setting Key       | Setting Description                  |
| ----------------- | ------------------------------------ |
| SnowSqlConfig     | %USERPROFILE%\\.snowsql\\config      |
| SnowSqlConnection | bimlflex_db                          |
| SnowSqlPath       | C:\\Program Files\\Snowflake SnowSQL |

***

### Azure Environment Settings (ADF Only)

<!-- TODO: Intro. -->

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

<!-- TODO: Intro. -->

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
> For details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)

***

### Azure Blob Archive Container Settings (ADF Only)

<!-- TODO: Intro. -->

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
> For details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)

***

### Azure Blob Error Container Settings (ADF Only)

<!-- TODO: Intro. -->

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
> For details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)

***

### Azure Function Bridge Settings (ADF Only)

<!-- TODO: Intro.  Explain that if using ADF an AFB will need to be created as ADF does not have a native connector. -->

<!-- TODO: Link to 'Configuring an Azure Function Bridge' Article or create it here.  Only Snowflake requires it for now but we plan on leveraging it for other features later on so it may make sense to create its own article and link to it. -->

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

## Configuring Connections

This section outlines any specific considerations needed when configuring BimlFlex to use Snowflake across the various **Integration Stages**.  

It is highly recommended that if you are using Snowflake for more than one *Integration Stage* that you host them all in a single database and leverage the use of schemas for separation if needed.  The generated DDL does not currently support `USE DATABASE` or `USE WAREHOUSE` statements.  Deployment would require either 'Cherry Picking' the correct tables for each database or using **Generate Script Options** and scoping to a specific *Integration Stage* before each generation of the scripts.

### Connection Type

Currently BimlFlex only supports the *Connection Type* of `ODBC SQL Based ELT` for Snowflake a **Connection** when Snowflake is being used as the target data warehouse platform.  When configuring a Snowflake *Integration Stage* of `Source System` set the *Connection Type* to `ODBC`.  

### Connection String

The [Snowflake Custom SSIS Component](#bimlflex-snowflake-custom-ssis-components-ssis-only) uses the connection information specified in the `.SnowSQL\config` file to connect.  See the [Snowflake SnowSQL Settings](#snowflake-snowsql-settings-ssis-only) section for instructions on how to specify the file and connection to use.  

BimlFlex only uses the *Connection String* field to generate an associated Connection Manager in SSIS.  The associated Connection Manager will be created in SSIS using the inputted *Connection String* but will not be used during any of the generated SSIS orchestration.  

### [SSIS Connection String](#tab/snowflake-connection-string-ssis)

```cmd
Dsn={DSN Name};Uid={User Name};Pwd={Password};Database={Database Name};
```

### [Example](#tab/snowflake-connection-string-ssis-example)

```cmd
Dsn=Snowflake_DSN;Uid=MyUser;Pwd=P@$$Word;Database=bfx_sfl;
```

> [!IMPORTANT]
> Then Connection Manager will also require the appropriate ODBC driver to be installed and a DSN created.  Refer to the below guides for additional details:  
> Snowflake Docs: [ODBC Driver](https://docs.snowflake.com/en/user-guide/odbc.html)
> Snowflake Docs: [Installing and Configuring the ODBC Driver for Windows](https://docs.snowflake.com/en/user-guide/odbc-windows.html)
> Microsoft Docs: [ODBC Data Source Administrator](https://docs.microsoft.com/en-us/sql/odbc/admin/odbc-data-source-administrator)

***

> [!TIP]
> For additional details on creating a **Connection** refer to the below guide:
> BimlFlex Docs: [](xref:connections)

### Linked Services (ADF Only)

Azure Data Factory does not support Snowflake as a Linked Service so BimlFlex uses an [Azure Function Bridge](#azure-function-bridge-settings-adf-only) to close the gap.  The Azure Function Bridge will use the Linked Service configured in BimlFlex to determine the appropriate connection method to use.  When using an *Azure Key Vault* use the below example to assist with the creation of a connection string to be used as the the secret value.  If using a *Connection String* version of a Linked Service fill out the required fields.

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
> BimlFlex Docs: [](xref:create-linked-service-connection)  
> BimlFlex Docs: [](xref:linked-service-snowflake)  

### Integration Stage

### [Source System](#tab/snowflake-src)

<!-- TODO: Intro.   -->

- *Connection Type* = `ODBC`  
- *System Type* = `Snowflake Data Warehouse`  

### [Landing Area](#tab/snowflake-lnd)

**ADF ONLY**:

<!-- TODO: Intro.  Explain a LND connection is only used for ADF.  Explain that Snowflake is not supported as a LND connection itself, and only one of the supported system types can be used for a LND. -->

<!-- TODO: Link to `Creating a LND Connection` or `Creating a LND Area` Article. -->

<!-- TODO: Ensure  `Creating a LND Connection` or `Creating a LND Area` Article has a link to `Configuring an Azure Blob Connection` Article. -->

<!-- TODO: Ensure  `Creating a LND Connection` or `Creating a LND Area` Article has a link to `Configuring an Azure Blob Linked Service` Article. -->

<!-- TODO: Ensure `Configuring an Azure Blob` has a Link to Microsoft creating a Storage Account Article. -->

<!-- TODO: Ensure `Configuring an Azure Blob` has a Link to Microsoft creating a Container Article. -->

<!-- TODO: Ensure `Configuring an Azure Blob` has a Link to Microsoft creating a SAS Key. -->

<!-- TODO: Ensure `Configuring an Azure Blob` has a Link to Microsoft Getting a Blob Connection String. -->

### [Staging Area](#tab/snowflake-stg)

<!-- TODO: Intro.   -->

- *Connection Type* = `ODBC SQL Based ELT`  
- *System Type* = `Snowflake Data Warehouse`  

### [Persistent Staging Area](#tab/snowflake-psa)

<!-- TODO: Intro.   -->

<!-- TODO: Outline field values unique to a Snowflake PSA Connection.  [Integration Stage] = `Persistent Staging Area`.  [Connection Type] = `ODBC SQL Based ELT`.  [System Type] = `Snowflake Data Warehouse`.  Reference requiring the SRC to have [Persist History] = `true` to be used. -->

- *Connection Type* = `ODBC SQL Based ELT`  
- *System Type* = `Snowflake Data Warehouse`  

### [Raw Data Vault](#tab/snowflake-rdv)

<!-- TODO: Intro.   -->

- *Connection Type* = `ODBC SQL Based ELT`  
- *System Type* = `Snowflake Data Warehouse`  

### [Data Mart](#tab/snowflake-dm)

<!-- TODO: Intro.   -->

- *Connection Type* = `ODBC SQL Based ELT`  
- *System Type* = `Snowflake Data Warehouse`  

***

## Deploying Environment

<!-- TODO: H2 Intro.  Explain that environment must be deployed manually and consists of generating the SnowSQL in BimlStudio and then executing the resulting scripts. -->

> [!IMPORTANT]
> It is highly recommended that if you are using Snowflake for more than one *Integration Stage* that you host them all in a single database and leverage the use of schemas for separation if needed.  The generated DDL does not currently support `USE DATABASE` or `USE WAREHOUSE` statements.  Deployment would require either 'Cherry Picking' the correct tables for each database or using **Generate Script Options** and scoping to a specific *Integration Stage* before each generation of the scripts.

### Generating SnowSQL Scripts

<!-- TODO: Intro.  Highlight that `Snowflake Table Script` and `Snowflake Procedure Script` are required and that `x Procedure Script` and `Create Table Script` are not used for Snowflake.  `Data Vault Default Insert Script` is still needed if using a Data Vault. -->

<!-- TODO: Link to `Generating DDL` Article. -->

[](xref:bimlflex-generating-ddl)

### Deploying SnowSQL Scripts

<!-- TODO: Intro.  Outline that it is a simple copy/paste process. -->

<!-- TODO: Link to Snowflake `Connecting to Snowflake` Article. -->

<!-- TODO: Link to Snowflake `Executing SQL` Article. -->

<!-- TODO: Link to Snowflake `Web Interface Walk-through` Article. -->

## Deploying Orchestration

<!-- TODO: H2 Intro.  Explain that orchestration can be executed either by SSIS or ADF.  Remind that if using SSIS the required custom components are required and if using ADF that both the Azure Function Bridge is set correctly and LND configured appropriately. -->

### SSIS Packages (SSIS Only)

<!-- TODO: Intro.  No different than standard SSIS deployment methods.  Reminder that each of the following easier to forget links needs to be completed for SSIS to work. -->

<!-- TODO: Anchor: Configuring SnowSql -->

<!-- TODO: Link official documentation on configuring the file. -->

<!-- TODO: Anchor: Configuring DSN -->

<!-- TODO: Link official Microsoft documentation on configuring a DSN. -->

<!-- TODO: Anchor: Installing SSIS Components -->

[](xref:bimlflex-ssis-using-powershell)

[](xref:bimlflex-ssis-deployment-using-deployment-wizard)

### ADF Environment (ADF Only)

<!-- TODO: Intro.  No different than standard ADF deployment methods.  Reminder that each of the following easier to forget links needs to be completed for ADF to work. -->

<!-- TODO: Anchor: Azure Function Bridge -->

<!-- TODO: Link to 'Configuring an Azure Function Bridge' Article -->

<!-- TODO: Anchor: Configuring Settings -->

<!-- TODO: Anchor: Linked Services -->

<!-- TODO: Link to `Configuring Azure Key Vault Secrets` Article. -->

<!-- TODO: Anchor: Landing Area -->

<!-- TODO: Link to `Creating a LND Connection` or `Creating a LND Area` Article. -->

[](xref:bimlflex-adf-using-powershell)

[](xref:using-azure-portal)
