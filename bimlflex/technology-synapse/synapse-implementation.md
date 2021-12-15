---
uid: bimlflex-synapse-implementation
title: Synapse Implementations
summary: Documentation on how to configure Azure Synapse as Source and a target data warehouse for both SSIS and ADF implementation within BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Microsoft Azure Synapse Overview

<!-- TODO: Intro: Speak briefly to what Azure Synapse is. -->

<!-- TODO: TIP: Link to Microsoft Synapse Documentation -->

## Orchestration Method

BimlFlex supports Microsoft Azure Synapse across both SQL Server Integration Services (SSIS) and Azure Data Factory (ADF).

SSIS and ADF both have different constraints and do not always have a 1-to-1 correlation when it comes to features.
Due to the different constraints imposed on SSIS and ADF the implementation and architectural pattern will differ between the two.
Additional concerns enter the picture when dealing with a cloud data source vs an on-premises data source.

This guide was designed to take these varying conditions in mind.
Use the tabs below to have a targeted guide on setting up Azure Synapse for the desired orchestration method.

### [SSIS](#tab/ssis-orchestration)

This page is currently configured for SQL Server Integration Services (SSIS).

### [ADF](#tab/adf-orchestration)

This page is currently configured for Azure Data Factory (ADF).

***

<!-- ## High Level Architecture

### [SSIS Architecture](#tab/architecture/ssis-orchestration)

TODO: SSIS Architecture Diagram

### [ADF Architecture](#tab/architecture/adf-orchestration)

TODO: ADF Architecture Diagram

*** -->

## Assumptions and Prerequisites

This guide will operate of a few base assumptions which are listed directly below for your selected Orchestration Method.

### [SSIS](#tab/prerequisite/ssis-orchestration)

- **Software**
  - [AzCopy installed (v10 recommended)](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10 "Microsoft Docs: Get started with AzCopy")
- **Knowledge**
  - General knowledge of familiarity with [Azure](https://azure.microsoft.com/en-us/overview/what-is-azure/ "Microsoft: What is Azure?")
- **Existing Environment**
  - [Azure Subscription](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription "Microsoft Docs: Create an additional Azure subscription")
  - [Azure Resource Group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal "Microsoft Docs: Manage Azure Resource Manager resource groups by using the Azure portal")
  - [Azure Blob Storage or Data Lake Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create "Microsoft Docs: Create a storage account")
  - [Azure Synapse Analytics Instance](https://docs.microsoft.com/en-us/azure/synapse-analytics/overview-what-is "Microsoft Docs: What is Azure Synapse Analytics?")
  - [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/ "Microsoft Docs: Azure Key Vault")

### [ADF](#tab/prerequisite/adf-orchestration)

- **Software**
  - No additional software required.
- **Knowledge**
  - General knowledge of familiarity with [Azure](https://azure.microsoft.com/en-us/overview/what-is-azure/ "Microsoft: What is Azure?")
- **Existing Environment**
  - [Azure Subscription](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription "Microsoft Docs: Create an additional Azure subscription")
  - [Azure Resource Group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal "Microsoft Docs: Manage Azure Resource Manager resource groups by using the Azure portal")
  - [Azure Blob Storage or Data Lake Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create "Microsoft Docs: Create a storage account")
  - [Azure Synapse Analytics Instance](https://docs.microsoft.com/en-us/azure/synapse-analytics/overview-what-is "Microsoft Docs: What is Azure Synapse Analytics?")
  - [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/ "Microsoft Docs: Azure Key Vault")

***

## Configuring an Azure Synapse Connection

Although largely similar, there are a few nuances when configuration a connection for the separate *INTEGRATION STAGES*.

The below tabs show the available *INTEGRATION STAGES* for the selection orchestration method.
Select a tab to view field descriptions and an example configuration for a **Connection** using an available *INTEGRATION STAGE*.

A **BimlFlex Connection** is configured by logical role.
If the same physical database is to participate in multiple **Integration Stages** then a **BimlFlex Connection** will need to be configured for each.

When using Azure Synapse as the **Target Warehouse Environment** it is recommended`*` that you use the same database for storage and separate the layers via schema and naming conventions.

> `*`: Unless specific organizational or architectural concerns are preventing such.

This may result in the **Staging Area**, **Persistent Staging Area**, **Raw Data Vault** and **Data Mart** all pointing to the same database.

<!-- TODO: Create a Staged Query guide and link to it. -->

### Connection Details

Below is the details further details on a the specific **Connection**.

The first table will highlight specific configurations details concerning the selected orchestration method.
These may be a mandatory settings or an alternate use for a shared field.
These focus more on "how" the **Connection** is used.

> [!TIP]
> For additional details on creating a **Connection** refer to the below guide:
>
> - BimlFlex Docs: [Connections](configuration editor)  

> ### [SSIS](#tab/ssis-orchestration)
>
> This page is currently configured for SQL Server Integration Services (SSIS).
>
> ### [ADF](#tab/adf-orchestration)
>
> This page is currently configured for Azure Data Factory (ADF).
>
> ***

#### [SSIS Specific](#tab/orchestration-specific/ssis-orchestration)

| Field             | Description                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| Cloud             | `false`                                                                                                          |
| Connection Type   | { OLEDB , ADONET , Script Source }                                                                               |
| Connection String | Used to connect to the database in SSIS, as the deploy target for the PowerShell Scripts and to import metadata. |
| Threads           | Amount of threads available to create in SSIS.  Use `0` for no limit.                                            |

#### [ADF Specific](#tab/orchestration-specific/adf-orchestration)

| Field                 | Description                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------- |
| Cloud                 | `true`                                                                                      |
| Connection Type`*`    | { OLEDB SQL Based ELT`*` , ADONET SQL Based ELT`*` , Script Source }                        |
| Connection String`**` | Only used as the deploy target for the PowerShell Scripts and to import metadata.           |
| Threads               | This is not used in ADF.                                                                    |
| Landing Connection    | Only used with a `Source System`.  Designates the connection to use for the `Landing Area`. |

> [!IMPORTANT]
>
> - Connection Type`*`: When configuration a `Source System` the non-ELT base types are used.
>   - `Source System` is the only exception to this.  All other *INTEGRATION STAGES* should use the ELT variant.
>   - This is also called out in detail on the below configurations.
> - Connection String`**`: When using ADF the *CONNECTION STRING* is only used to import the metadata withing the tool.
>   - The connection strings used for ADF are managed in the Linked Service.
>   - See [Configuring a Linked Service Connection](xref:create-linked-service-connection) for more details.

***

The following table highlights configurations details concerning the selected *INTEGRATION STAGE*.
These focus on the "what" and "where" of the data source.

### [Source System (SRC)](#tab/src)

Viewing configuration for a **Source System**.

### [Landing Area (LND)](#tab/lnd/adf-orchestration)

Viewing configuration for a **Landing Area**.

### [PolyBase Connection (PLY)](#tab/ply/adf-orchestration)

Viewing configuration for a **PolyBase Connection**.

### [Staging Area (STG)](#tab/stg)

Viewing configuration for a **Staging Area**.

### [Persistent Staging Area (PSA)](#tab/psa)

Viewing configuration for a **Persistent Staging Area**.

### [Raw Data Vault (RDV)](#tab/rdv)

Viewing configuration for a **Raw Data Vault**.

### [Data Mart (DM)](#tab/dm)

Viewing configuration for a **Data Mart**.

***

#### [Description](#tab/connection-description/src)

| Field              | Description                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Connection         | Name of the **Connection**.  Must be unique.                                                                                       |
| Integration Stage  | Source System                                                                                                                      |
| Connection Type    | { OLEDB , ADONET , Script Source }                                                                                                 |
| System Type        | Azure Synapse                                                                                                                      |
| Description        | An optional description for the **Connection**                                                                                     |
| Connection String  | Connection String to the connect to the Database                                                                                   |
| Catalog            | Name of the Database                                                                                                               |
| Record Source      | Value to use for **Objects** from this records source.  Required for Data Vault.                                                   |
| Persist History`*` | `true`: store history in the *PERSISTENT STAGE CONNECTION*; `false`: store only latest change in the *PERSISTENT STAGE CONNECTION* |

> [!IMPORTANT]
>
> - Persist History`*`: Requires a **Project** that with a *PERSISTENT STAGE CONNECTION* to use.
>   - If not *PERSISTENT STAGE CONNECTION* is present this checkbox will not impact the **Project**.

> [!TIP]
> When using ADF an additional **Landing Area** will need to be configured.
>
> For additional details on how create a Landing Area Connection refer to the following guide:
>
> - BimlFlex Docs: [Configure Azure Data Factory Landing Area](xref:bimlflex-adf-landing-area)


#### [Example](#tab/connection-example/src)

| Field              | Description                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Connection         | AWLT_SRC                                                                                                                          |
| Integration Stage  | Source System                                                                                                                     |
| Connection Type    | OLEDB                                                                                                                             |
| System Type        | Azure Synapse                                                                                                                     |
| Description        | Connection to an Azure Synapse Source System.                                                                                     |
| Connection String  | Data Source=mysqlserver.database.windows.net,1433;Initial Catalog=BFX_DW;Provider=SQLNCLI11.1;User ID=userName;Password=P@$$Word; |
| Catalog            | AdventureWorksLT2012                                                                                                              |
| Record Source      | awlt                                                                                                                              |
| Persist History`*` | `true`                                                                                                                            |

#### [Description](#tab/connection-description/lnd)

| Field               | Description                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| Connection          | Name of the **Connection**.  Must be unique.                                                                    |
| Integration Stage   | Landing Area                                                                                                    |
| Connection Type     | { OLEDB SQL Based ELT , ADONET SQL Based ELT , Script Source }                                                  |
| System Type         | Azure Synapse                                                                                                   |
| Description         | An optional description for the **Connection**                                                                  |
| Connection String   | Only used to Import Metadata in BimlFlex.  Connection String to the connect to the Database.                    |
| Catalog             | Name of the Database (Ensure this matches the `Initial Catalog` in your connection string)                      |
| PolyBase Connection | Optional: When using PolyBase Staged Copy, the **Connection** holding the Azure Storage Account Linked Service. |

> [!TIP]
> When using Azure Synapse this should be configured to the same Database as the primary target warehouse.
>
> This can be configured to be landed directly into an Azure Synapse table or into Blob Storage and then use PolyBase to Stage.
>
> See the PolyBase Connection tab for more details.

#### [Example](#tab/connection-example/lnd)

| Field               | Description                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | BFX_LND                                                                                                                           |
| Integration Stage   | Landing Area                                                                                                                      |
| Connection Type     | OLEDB SQL Based ELT                                                                                                               |
| System Type         | Azure Synapse                                                                                                                     |
| Description         | Connection to an Azure Synapse Landing Area                                                                                       |
| Connection String   | Data Source=mysqlserver.database.windows.net,1433;Initial Catalog=BFX_DW;Provider=SQLNCLI11.1;User ID=userName;Password=P@$$Word; |
| Catalog             | BFX_DW                                                                                                                            |
| PolyBase Connection | BFX_POLY (Configured for PolyBase Staging)                                                                                        |

#### [Description](#tab/connection-description/ply)

| Field               | Description                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| Connection          | Name of the **Connection**.  Must be unique.                                                 |
| Integration Stage   | Landing Area                                                                                 |
| Connection Type     | { Azure Blob Storage , Azure Data Lake Store }                                               |
| System Type         | Parquet Format                                                                               |
| Description         | An optional description for the **Connection**                                               |
| Connection String   | Only used to Import Metadata in BimlFlex.  Connection String to the connect to the Database. |
| Catalog             | Name of the Database (Ensure this matches the `Initial Catalog` in your connection string)   |
| PolyBase Connection | {Empty}                                                                                      |

> [!TIP]
> This is used in conjunction with a **Landing Area** to indicate the location to use for a PolyBase load.
>
> For additional details on how create a Landing Area Connection refer to the following guide:
>
> - BimlFlex Docs: [Configure Azure Data Factory Landing Area](xref:bimlflex-adf-landing-area)

#### [Example](#tab/connection-example/ply)

| Field               | Description                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | BFX_POLY                                                                                                                          |
| Integration Stage   | Landing Area                                                                                                                      |
| Connection Type     | OLEDB SQL Based ELT                                                                                                               |
| System Type         | Azure Synapse                                                                                                                     |
| Description         | Connection for PolyBase Staging                                                                                                   |
| Connection String   | Data Source=mysqlserver.database.windows.net,1433;Initial Catalog=BFX_DW;Provider=SQLNCLI11.1;User ID=userName;Password=P@$$Word; |
| Catalog             | BFX_DW                                                                                                                            |
| PolyBase Connection | {Empty}                                                                                                                           |

#### [Description](#tab/connection-description/stg)

| Field             | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Connection        | Name of the **Connection**.  Must be unique.                                                 |
| Integration Stage | Staging Area                                                                                 |
| Connection Type   | { OLEDB SQL Based ELT , ADONET SQL Based ELT , Script Source }                               |
| System Type       | Azure Synapse                                                                                |
| Description       | An optional description for the **Connection**                                               |
| Connection String | Only used to Import Metadata in BimlFlex.  Connection String to the connect to the Database. |
| Catalog           | Name of the Database (Ensure this matches the `Initial Catalog` in your connection string)   |

#### [Example](#tab/connection-example/stg)

| Field             | Description                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | BFX_STG                                                                                                                           |
| Integration Stage | Staging Area                                                                                                                      |
| Connection Type   | OLEDB SQL Based ELT                                                                                                               |
| System Type       | Azure Synapse                                                                                                                     |
| Description       | Connection to an Azure Synapse Staging Area                                                                                       |
| Connection String | Data Source=mysqlserver.database.windows.net,1433;Initial Catalog=BFX_DW;Provider=SQLNCLI11.1;User ID=userName;Password=P@$$Word; |
| Catalog           | BFX_DW                                                                                                                            |

#### [Description](#tab/connection-description/psa)

| Field             | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Connection        | Name of the **Connection**.  Must be unique.                                                 |
| Integration Stage | Persistent Staging Area                                                                      |
| Connection Type   | { OLEDB SQL Based ELT , ADONET SQL Based ELT , Script Source }                               |
| System Type       | Azure Synapse                                                                                |
| Description       | An optional description for the **Connection**                                               |
| Connection String | Only used to Import Metadata in BimlFlex.  Connection String to the connect to the Database. |
| Catalog           | Name of the Database (Ensure this matches the `Initial Catalog` in your connection string)   |

#### [Example](#tab/connection-example/psa)

| Field             | Description                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | BFX_ODS                                                                                                                           |
| Integration Stage | Persistent Staging Area                                                                                                           |
| Connection Type   | OLEDB SQL Based ELT                                                                                                               |
| System Type       | Azure Synapse                                                                                                                     |
| Description       | Connection to an Azure Synapse Persistent Staging Area                                                                            |
| Connection String | Data Source=mysqlserver.database.windows.net,1433;Initial Catalog=BFX_DW;Provider=SQLNCLI11.1;User ID=userName;Password=P@$$Word; |
| Catalog           | BFX_DW                                                                                                                            |

#### [Description](#tab/connection-description/rdv)

| Field             | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Connection        | Name of the **Connection**.  Must be unique.                                                 |
| Integration Stage | Raw Data Vault                                                                               |
| Connection Type   | { OLEDB SQL Based ELT , ADONET SQL Based ELT , Script Source }                               |
| System Type       | Azure Synapse                                                                                |
| Description       | An optional description for the **Connection**                                               |
| Connection String | Only used to Import Metadata in BimlFlex.  Connection String to the connect to the Database. |
| Catalog           | Name of the Database (Ensure this matches the `Initial Catalog` in your connection string)   |

#### [Example](#tab/connection-example/rdv)

| Field             | Description                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | BFX_DM                                                                                                                            |
| Integration Stage | Raw Data Vault                                                                                                                    |
| Connection Type   | OLEDB SQL Based ELT                                                                                                               |
| System Type       | Azure Synapse                                                                                                                     |
| Description       | Connection to an Azure Synapse Raw Data Vault                                                                                     |
| Connection String | Data Source=mysqlserver.database.windows.net,1433;Initial Catalog=BFX_DW;Provider=SQLNCLI11.1;User ID=userName;Password=P@$$Word; |
| Catalog           | BFX_DW                                                                                                                            |

#### [Description](#tab/connection-description/dm)

| Field             | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Connection        | Name of the **Connection**.  Must be unique.                                                 |
| Integration Stage | Data Mart                                                                                    |
| Connection Type   | { OLEDB SQL Based ELT , ADONET SQL Based ELT , Script Source }                               |
| System Type       | Azure Synapse                                                                                |
| Description       | An optional description for the **Connection**                                               |
| Connection String | Only used to Import Metadata in BimlFlex.  Connection String to the connect to the Database. |
| Catalog           | Name of the Database (Ensure this matches the `Initial Catalog` in your connection string)   |

#### [Example](#tab/connection-example/dm)

| Field             | Description                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | BFX_DM                                                                                                                            |
| Integration Stage | Data Mart                                                                                                                         |
| Connection Type   | OLEDB SQL Based ELT                                                                                                               |
| System Type       | Azure Synapse                                                                                                                     |
| Description       | Connection to an Azure Synapse Data Mart                                                                                          |
| Connection String | Data Source=mysqlserver.database.windows.net,1433;Initial Catalog=BFX_DW;Provider=SQLNCLI11.1;User ID=userName;Password=P@$$Word; |
| Catalog           | BFX_DW                                                                                                                            |

***

## Configuring an Azure Synapse Linked Service

Linked Services are used in Azure Data Factory to define a data source.

To configure a **Linked Service** select a **Connection** and `enable` the *CLOUD* selector at the top.

> ### [SSIS](#tab/ssis-orchestration)
>
> This page is currently configured for SQL Server Integration Services (SSIS).
>
> ### [ADF](#tab/adf-orchestration)
>
> This page is currently configured for Azure Data Factory (ADF).
>
> ***

### ADF Linked Service

There are no special caveats when configuring an Azure Synapse Linked Service.
For details on configuration, please refer to the links below.

> [!TIP]
> For additional details on creating a Linked Service refer to the below guides:
>
> - BimlFlex Docs: [Configuring a Linked Service Connection](xref:create-linked-service-connection)
> - BimlFlex Docs: [Configuring an ADF Linked Service Connection for Azure SQL Data Warehouse](xref:linked-service-adf-sql-datawarehouse)

#### [Linked Service: N/A](#tab/ls-connection-na/ssis-orchestration)

Linked Services are not configured when using SSIS.

#### [Configuration Notes](#tab/ls-description/adf-orchestration)

When configuring an AKV Secret for Connection String be aware that it is different from the **Connection** *CONNECTION STRING* field.

If not already done, the AKV Secret must been manual configured and use syntax slightly different than the *CONNECTION STRING* field.
A pattern and example can be found below.

Pattern: `Data Source=<server name>.database.windows.net,<port>;Initial Catalog=<database>;User ID=<user>;Password=<password>;`

Example: `Data Source=bfxserver.database.windows.net,1433;Initial Catalog=bfx_sqldw;User ID=MyUser;Password=P@$$Word;`

> [!IMPORTANT]
> Connection Strings for Linked Services DO NOT support the `Provider` keyword.

> [!TIP]
> If the **Linked Service** configuration is not showing up, ensure that *CLOUD* is `enabled` on the selected **Connection**.

***

## Configuring Settings

BimlFlex **Settings** are used for environment details and orchestration configurations.

The below **Settings** only need to be configured when using Azure Synapse as the **Target Warehouse Environment**.

> ### [SSIS](#tab/ssis-orchestration)
>
> This page is currently configured for SQL Server Integration Services (SSIS).
>
> ### [ADF](#tab/adf-orchestration)
>
> This page is currently configured for Azure Data Factory (ADF).
>
> ***

### Mandatory Settings

The following **Settings** are required when working with Azure Synapse regardless of the orchestration method.

- [Staging Naming\Naming](xref:bimlflex-app-reference-documentation-settings-index)
  - Configures the naming convention for `External Tables` and `Landing Tables`

### [SSIS](#tab/settings-orchestration/ssis-orchestration)

- [AzCopy\Paths](xref:bimlflex-app-reference-documentation-settings-index)
  - Configures location of AzCopy and Log Location
- [AzCopy\Settings](xref:bimlflex-app-reference-documentation-settings-index)
  - General AzCopy Settings
- [Azure Storage\Processing](xref:bimlflex-app-reference-documentation-settings-index)
  - Configures the names Accounts, Container Names and Keys/Tokens to be used with the Blob destination for AzCopy
- [SSDT\Synapse SSDT Artifacts](xref:bimlflex-app-reference-documentation-settings-index)
  - Configures the inclusion and configuration of the `External Tables`, `Master Key`, `Credential`, `External Data Source` and `External File Format`

### [ADF](#tab/settings-orchestration/adf-orchestration)

- [Azure\Data Factory](xref:bimlflex-app-reference-documentation-settings-index)
  - Configures the *DATA FACTORY NAME*, *SUBSCRIPTION ID*, and *RESOURCE GROUP*
  - Optional configurations for an existing *KEY VAULT* or *INTEGRATION RUNTIME*
- (*OPTIONAL*) [Azure\Deployment](xref:bimlflex-app-reference-documentation-settings-index)
  - Only required if using an ADF Linked Template Deployment
  - Configures the name of the Account, Container and Key/Token to be used with the Linked Template Deployment
- [Azure Storage\Processing](xref:bimlflex-app-reference-documentation-settings-index)
  - Configures the names Accounts, Container Names and Keys/Tokens to be used with the Blob destination for AzCopy

### [PolyBase Staging](#tab/settings-polybase/adf-orchestration)

These below **Settings** are only required when using PolyBase Staging in ADF.

- All Settings in the ADF tab
- [Azure Copy\Copy Method](xref:bimlflex-app-reference-documentation-settings-index)
  - Configures the *COPY METHOD* and *POLYBASE SETTINGS*
- [Azure Copy\Advanced Settings](xref:bimlflex-app-reference-documentation-settings-index)
  - Enables and configures PolyBase Staging and Logging

***

## Building the Project

In order to generate any assets the BimlFlex project will need to be built.
This process is identical to the standard build process and can be referenced in the guides below.

Prior to building the project ensure that the following steps is completed:

- [Configure Settings](#configuring-settings).

> [!TIP]
> For additional details on PowerShell deployment refer to the below guide:
>
> - BimlFlex Docs: [BimlFlex Interactive Build](xref:bimlflex-interactive-build)
> - BimlFlex Docs: [Building Using the Command Line](xref:bimlflex-command-line-build)

## Database Deployment

BimlFlex will generate the required SQL scripts for the deployment of all the tables, stored procedures, and the Data Vault default inserts (Ghost Keys).
Once generated the scripts can be deployed to the required database.

Prior to deploying the **Target Warehouse Environment** ensure that the following steps are completed:

- [Build the Project](#building-the-project).
- [Configure Settings](#configuring-settings).

> ### [SSIS](#tab/ssis-orchestration)
>
> This page is currently configured for SQL Server Integration Services (SSIS).
>
> ### [ADF](#tab/adf-orchestration)
>
> This page is currently configured for Azure Data Factory (ADF).
>
> ***

### [PowerShell](#tab/deployment-powershell/ssis-orchestration)

A part of the Build process, BimlStudio will generate a SQL Server Data Tools (SSDT) project for the Synapse target warehouse platform.
By default a SSDT deployment file named `ssdt-deploy.<DatabaseName>.ps1` is created and placed in the `...\<Output Folder>\Deploy\` folder for each database in the target warehouse environment.

The SSDT project will have all the required tables, stored procedures and Data Vault default inserts required for the project.
Through use of [SSDT\Synapse SSDT Artifacts Settings](xref:bimlflex-app-reference-documentation-settings-index) EXTERNAL TABLES can be included or excluded in this deployment file.
These files are commonly excluded due to PolyBase requiring a file to exist in the blob storage prior to the creation of the EXTERNAL TABLE.

> [!IMPORTANT]
> It is HIGHLY recommended that the Synapse server in created manually in Azure prior to executing the `ssdt-deploy` PowerShell script.
> The generated SSDT project does not contain any configuration information for Azure settings and will be created with whatever default Microsoft is currently using for *Performance Level*.

Aside from the possible inclusion of the EXTERNAL TABLE scripts, the process is identical to a standard SQL Server deployment.

> [!TIP]
> For additional details on PowerShell deployment refer to the below guide:
>
> BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-ssis-using-powershell)

### [PowerShell](#tab/deployment-powershell/adf-orchestration)

A part of the Build process, BimlStudio will generate a SQL Server Data Tools (SSDT) project for the Synapse target warehouse platform.
By default a SSDT deployment file named `ssdt-deploy.<DatabaseName>.ps1` is created and placed in the `...\<Output Folder>\Deploy\` folder for each database in the target warehouse environment.

The SSDT project will have all the required tables, stored procedures and Data Vault default inserts required for the project.

> [!IMPORTANT]
> It is HIGHLY recommended that the Synapse server in created manually in Azure prior to executing the `ssdt-deploy` PowerShell script.
> The generated SSDT project does not contain any configuration information for Azure settings and will be created with whatever default Microsoft is currently using for *Performance Level*.

> [!TIP]
> For additional details on PowerShell deployment refer to the below guide:
>
>   - BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-ssis-using-powershell)

### [Generated DDL](#tab/deployment-ddl)

Generating Azure Synapse DDL scripts are similar to a standard SQL Server deployment using **Generate Scripts** in BimlStudio with a few exceptions.
Azure Synapse tables are required to be created by `Azure Synapse Table Script` instead of the use of `Create Table Script`.
`Create Table Script` is not needed for a Azure Synapse target warehouse environment.
Additionally if using the PolyBase Architecture, the `PolyBase External Table Script` will need to be ran to generate the CREATE EXTERNAL TABLE scripts.

> [!NOTE]
> Ensure you configure the below settings is using the `PolyBase External Table Script`:
>
> - [SSDT\Synapse SSDT Artifacts](xref:bimlflex-app-reference-documentation-settings-index)

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
>
> - BimlFlex Docs: [BimlFlex Generating DDL](xref:bimlflex-generating-ddl)  

Once BimlFlex generates the scripts they can be executed against the target database.
These can be deployed through copy/paste using a SQL Server Management Studio or by another script execution clients if so desired.

> [!TIP]
> For additional details on installing or using SSMS refer to the below guides:  
> Microsoft Docs: [Download SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)  
> Microsoft Docs: [What is SQL Server Management Studio (SSMS)?](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms)  

***

## Deploying Orchestration

BimlFlex automatically generates the orchestration artifacts as part of the standard build process.
The actual artifacts generated depends on the method of orchestration that is used.
The below sections outline the various artifacts by orchestration methods.

Prior to deploying the orchestration ensure that the following steps are completed:

- [Build the Project](#building-the-project).
- [Configure Settings](#configuring-settings).
- [Deploy Target Warehouse Environment](#database-deployment).

> ### [SSIS](#tab/ssis-orchestration)
>
> This page is currently configured for SQL Server Integration Services (SSIS).
>
> ### [ADF](#tab/adf-orchestration)
>
> This page is currently configured for Azure Data Factory (ADF).
>
> ***

### [SSIS Project](#tab/orchestration/ssis-orchestration)

Deploying SSIS orchestration while using Azure Synapse as a target platform is no different a standard SSIS deployment using BimlFlex.
Refer to the below guides for common deployment methods.

> [!TIP]
> For additional details on generating deploying SSIS packages refer to the below guides:
>
> -BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-ssis-using-powershell)
> -BimlFlex Docs: [Deployment Through the SSIS Deployment Wizard](xref:bimlflex-ssis-deployment-wizard)

### [Azure Resources](#tab/orchestration/adf-orchestration)

The process of deploying the Azure Resources itself remains unchanged.

> [!TIP]
> For additional details on generating deploying ADF artifacts refer to the below guides:
>
> - BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-adf-using-powershell)  
> - BimlFlex Docs: [Deployment Through the Azure Portal](xref:using-azure-portal)  
