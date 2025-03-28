---
uid: bimlflex-databricks-configuration-overview
title: Databricks Implementation
summary: Overview of implementing Databricks using Azure Data Factory within BimlFlex, with installation guide, templates, and examples
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Preparing BimlFlex for Databricks

Before working with Databricks metadata, you should ensure that your environment is configured to use Databricks appropriately. This section will walk you through the required software and system configurations you will need to connect BimlFlex to your Databricks environment.

## Installing and Configuring SnowSQL (SSIS Only)

When using an SSIS [Integration Template](xref:bimlflex-metadata-static-values#integration-templates), BimlFlex uses a [Databricks Custom SSIS Component](#bimlflex-databricks-custom-ssis-components) that leverages SnowSQL and the SnowSQL `config` file to connect and move data.

This requires that SnowSQL be installed and the appropriate connection created on the server executing the SSIS packages.

Follow the below link for instructions on how to install SnowSQL.

> [!TIP]
> For additional details on installing SnowSQL refer to the following Databricks Docs guides:
>
> * [Installing SnowSQL](https://docs.databricks.com/en/user-guide/snowsql-install-config.html).
> * [Logging into Databricks](https://docs.databricks.com/en/user-guide/connecting.html)  
> * [Configuring SnowSQL](https://docs.databricks.com/en/user-guide/snowsql-config.html)

Once SnowSQL is installed, a connection needs to be created in the specified `config` file. The location may vary from depending on the installation but the default location for Windows is `%USERPROFILE%\.snowsql\`.

Open the file with any text editor and insert a connection following the template below.

### [Template](#tab/snowsql-connection-template)

```cmd
# BimlFlex Connection Template
[connections.<ConnectionName>]
accountname = <DatabricksAccount>
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

## BimlFlex Databricks Custom SSIS Components

The Databricks load process uses a custom SSIS component to provide a robust query management experience in SSIS. The required components are installed and upgraded through the BimlFlex developer installation, or by using the separate runtime installation for custom components.

> [!NOTE]
> If the components were not installed on initial installation they can be installed at a later date by re-running the installer.
> For additional details on installing BimlFlex and Custom Components refer to the [BimlFlex installation guide](xref:bimlflex-setup-installing-bimlflex).

## Installing and Configuring a Databricks ODBC DSN

The ODBC driver is only required if using SSIS orchestration to connect to a Databricks `Source System`, or using the [**Metadata Importer**](xref:bimlflex-concepts-importing-metadata) to bring Databricks metadata into the BimlFlex framework when Databricks data sources are part of the solution.

> [!TIP]
> For additional details on installing and configuring and ODBC driver and DSN, refer to the below Databricks Docs guides:  
>
> * [ODBC Driver](https://docs.databricks.com/en/user-guide/odbc.html)  
> * [Installing and Configuring the ODBC Driver for Windows](https://docs.databricks.com/en/user-guide/odbc-windows.html)  

## Configuring BimlFlex for Databricks

BimlFlex uses [**Settings**](xref:bimlflex-setting-editor) to adapt to specific requirements for file locations, naming conventions, data conventions etc.

Align these settings with the organizations best practices and environmental requirements.

### Databricks Settings

The following Databricks [**Databricks-specific settings**](xref:bimlflex-reference-documentation-settings-index#databricks) are used to configure overall orchestration options for Databricks.

These settings define the connectivity configuration from BimlFlex to Databricks, and are used in the resulting data solution when deployed to the target environment. For example, these settings are used to define the Linked Service and file locations.

> [!IMPORTANT]
> Please configure and review the above settings carefully, as they are essential for correct connectivity to Databricks in the compiled data solution.

### Azure Storage Processing Settings (ADF Only)

The following Azure [**Settings**](xref:bimlflex-setting-editor) are used to configure the blob destinations. This is mandatory when using Databricks.

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
> For additional details, please refer to the following Microsoft guide on [creating an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas).

***

## Configuring a Databricks Connection

This section outlines any specific considerations needed when configuring BimlFlex to use Databricks across the various **Integration Stages**.

| Field               | Supported Values                                                                  | Guide                                |
| ------------------- | --------------------------------------------------------------------------------- | ------------------------------------ |
| Integration Stage   | Source System\*, Staging Area, Persistent Staging Area, Data Vault, Data Mart | [Details](#integration-stage)        |
| Connection Type     | ODBC\*, ODBC SQL Based ELT\*                                                      | [Details](#connection-type)          |
| System Type         | Databricks Data Warehouse                                                          | [Details](#system-type)              |
| Connection String   | Dsn=`{DSN Name}`;Uid=`{User Name}`;Pwd=`{Password}`;Database=`{Database Name}`;\*         | [Details](#connection-string)        |
| Linked Service Type | Databricks (ADF Only)                                                              | [Details](#linked-services-adf-only) |

### Integration Stage

BimlFlex provides support for the use of Databricks as both a target warehouse platform and as a `Source System`. It is highly recommended to use a single database that when using Databricks as a target warehouse platform.

Naming patterns and schemas can be used for separation as needed.

The generated DDL does not currently support `USE DATABASE` or `USE WAREHOUSE` statements.

Deployment would require either 'Cherry Picking' the correct tables for each database or using **Generate Script Options** and scoping to a specific *Integration Stage* before each generation of the scripts.

### Landing Area (ADF Only)

Databricks is not currently supported as a `Landing Area` but a Landing Area is required when using ADF to orchestrate data movement.

The recommendation is for the `Landing Area` to be a *Connection Type* of `Azure Blob Storage` and *System Type* of `Flat File Delimited`.

In addition to the `Landing Area` it is also important that the **Settings* for an [Azure Blob Stage Container](#azure-storage-processing-settings-adf-only), [Azure Blob Archive Container](#azure-storage-processing-settings-adf-only), and [Azure Blob Error Container](#azure-storage-processing-settings-adf-only) are populated correctly.

> [!IMPORTANT]
> Ensure that all Azure Blob Container **Settings** are configured properly:
>
> * [Azure Blob Stage Container](#azure-storage-processing-settings-adf-only)
> * [Azure Blob Archive Container](#azure-storage-processing-settings-adf-only)  
> * [Azure Blob Error Container](#azure-storage-processing-settings-adf-only)

> [!TIP]
> Additional resources are available on the Microsoft Docs sections:
>
> * [Storage account overview](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)  
> * [Create an Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create)  
> * [Configure Azure Storage connection strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string)  
> * [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)

### Connection Type

Currently BimlFlex only supports the *Connection Type* of `ODBC` for a Databricks **Connection** when being used as the target data warehouse platform. When configuring a Databricks *Integration Stage* of `Source System`, please set the *Connection Type* to `ODBC`.

### System Type

The *System Type* should always be `Databricks Data Warehouse` for any Databricks **Connection**.

### Connection String

The [Databricks Custom SSIS Component](#bimlflex-databricks-custom-ssis-components) uses the connection information specified in the `.SnowSQL\config` file to connect. See the [Databricks SnowSQL Settings](#installing-and-configuring-snowsql-ssis-only) section for instructions on how to specify the file and connection to use.

BimlFlex only uses the *Connection String* field to generate an associated Connection Manager in SSIS. The associated Connection Manager will be created in SSIS using the inputted *Connection String* but will not be used during any of the generated SSIS orchestration.

> [!NOTE]
> This guide only covers *Connection String* which is only used by SSIS orchestration. For details on configuring the values of a Connection String Secret see the ADF Connection String Example in [Linked Services Section](#linked-services-adf-only).

### [SSIS Connection String](#tab/databricks-connection-string-ssis)

```cmd
Dsn=`{DSN Name}`;Uid=`{User Name}`;Pwd=`{Password}`;Database=`{Database Name}`;
```

### [Example](#tab/databricks-connection-string-ssis-example)

```cmd
Dsn=Databricks_DSN;Uid=MyUser;Pwd=P@$$Word;Database=bfx_sfl;
```

> [!IMPORTANT]
> Then Connection Manager will also require the appropriate ODBC driver to be installed and a DSN created.  For additional details refer to the below guides:
>
> Databricks Docs: [ODBC Driver](https://docs.databricks.com/en/user-guide/odbc.html)  
> Databricks Docs: [Installing and Configuring the ODBC Driver for Windows](https://docs.databricks.com/en/user-guide/odbc-windows.html)  
> Microsoft Docs: [ODBC Data Source Administrator](https://docs.microsoft.com/en-us/sql/odbc/admin/odbc-data-source-administrator)

***

> [!TIP]
> For additional details on creating a **Connection** refer to the below guide:  
>
> * [Connections](xref:bimlflex-connection-editor)

### Linked Services (ADF Only)

The Azure Function Bridge will use the Linked Service configured in BimlFlex to determine the appropriate connection method to use.

When using an *Azure Key Vault* use the below example to assist with the creation of a connection string to be used as the the secret value.

If using a *Connection String* version of a Linked Service fill out the required fields.

### [ADF Connection String](#tab/databricks-connection-string-adf)

```cmd
host=`{Server Address}`;account=`{Account Name}`;user=`{User Name}`;password=`{Password}`;db=`{Database Name}`;schema=`{Schema Name}`;warehouse=`{Warehouse Name}`;
```

### [Example](#tab/databricks-connection-string-adf-example)

```cmd
host=xy12345.west-us-2.azure.databrickscomputing.com;account=xy12345;user=MyUser;password=P@$$Word;db=bfx_sfl;schema=public;warehouse=compute_wh;
```

***

> [!TIP]
> For additional details on creating a Linked Service refer to the below guides:  
>
> * [Configuring a Linked Service Connection](xref:create-linked-service-connection)  
> * [Configuring a Linked Service Connection for Databricks Data Warehouse](xref:linked-service-databricks)

## Deploying the target Warehouse Environment

When Databricks is used as the target warehouse platform, BimlFlex will generate the required SnowSQL script for the deployment of all the tables, stored procedures, and the Data Vault default inserts (Ghost Keys).

Once generated the scripts can be manually deployed to the required database.

### Generating SnowSQL Scripts

Using Databricks as the target warehouse platform requires the generation of the `Databricks Table Script` and `Databricks Procedure Script` options when using **Generate Scripts** in BimlStudio. Additionally if Data Vault is being used the standard `Data Vault Default Insert Script` can be used to generate the required Ghost Keys.

> [!TIP]
> For additional details on generating DDL refer to the [BimlFlex DDL generation guide](xref:bimlflex-generating-ddl).

### Deploying SnowSQL Scripts

Once BimlFlex generates the scripts they can be executed against the target database.
These can be deployed through copy/paste using a Databricks Worksheet or by a SnowSQL command if desired.

> [!IMPORTANT]
> Ensure you are using the appropriate WAREHOUSE and DATABASE when executing the SnowSQL scripts. The scripts do not contain a `USE DATABASE` or `USE WAREHOUSE` clause and depend on the user executing the script to have select the appropriate values.

> [!TIP]
> For additional details on using the SnowSQL CLI or Worksheets refer to the below Databricks Docs guides:
>
> * [Using SnowSQL](https://docs.databricks.com/en/user-guide/snowsql-use.html)  
> * [Using Worksheets for Queries](https://docs.databricks.com/en/user-guide/ui-worksheet.html)

## Orchestration

BimlFlex automatically generates the orchestration artifacts as part of the standard build process. The actual artifacts generated depends on the **Integration Stage** that is configured for the **Project**.

### SSIS Packages

Deploying SSIS orchestration while using Databricks as a target platform is no different from a standard SSIS deployment using BimlFlex. Please refer to the below guides for common deployment approaches.

Ensure these commonly missed steps are performed:

* [Install and Configure SnowSQL](#installing-and-configuring-snowsql-ssis-only)  
* [Install and Configure Databricks ODBC DSN](#installing-and-configuring-a-databricks-odbc-dsn)
* [Install Databricks SSIS Custom Components](#bimlflex-databricks-custom-ssis-components)
* [Configure and review the generic SSIS environment settings](xref:bimlflex-setting-editor)

> [!TIP]
> For additional details on generating deploying SSIS packages refer to the below guides:  
>
> * [Deployment Through PowerShell](xref:bimlflex-ssis-using-powershell)  
> * [Deployment Through the SSIS Deployment Wizard](xref:bimlflex-ssis-deployment-wizard)

### ADF Environment and Orchestration

There is no difference in the process of deploying the Azure environment and ADF orchestration compared to any other target infrastructure in BimlFlex.

As a final check, please ensure the following configurations were made:

* [Create a Landing Area](#landing-area-adf-only)  
* [Provide a configured Linked Service with Secrets entered](#linked-services-adf-only)  
* [Configure and review the generic Azure and Azure Data Factory environment settings](xref:bimlflex-setting-editor)
* [Azure Blob Stage Container Settings](#azure-storage-processing-settings-adf-only)  
* [Azure Blob Archive Container Settings](#azure-storage-processing-settings-adf-only)  
* [Azure Blob Error Container Settings](#azure-storage-processing-settings-adf-only)

> [!TIP]
> For additional details on generating deploying ADF artifacts refer to the below guides:
>
> * [Deployment Through PowerShell](xref:bimlflex-adf-using-powershell)  
> * [Deployment Through the Azure Portal](xref:using-azure-portal)
