---
uid: bimlflex-adf-deployment-guide
title: BimlFlex ADF Deployment Guide
summary: Guide to assist with Azure Data Factory project creation, deployment, and standard configurations
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Azure Data Factory Deployment Guide

<!-- TODO: Intro

BimlFlex accelerates the creation of Azure Data Factory orchestration project.

BimlFlex streamlines the creation of an Azure Data Factory.

The Data Factory can be configured to integrate with an existing Azure artifacts or .

Data Factory and integrate with existing Azure artifacts.

BimlFlex can accelerate the creation of a Azure Data Factory.

By only using metadata BimlFlex allows for automated ADF generation.

Quick and easy

rapid deployment

Existing Environment for best results

-->

> [!NOTE]
> Azure Data Factory is only one of the options for orchestrating your data warehouse environment.
> To learn more about another option see the [SQL Server Integration Services Deployment Guide](xref:bimlflex-ssis-deployment-guide).

## Deploying an Azure Data Factory By Example

> [!NOTE]
> The example is intended to follow the guide for [Creating a Landing Area](xref:bimlflex-adf-landing-area#configure-a-landing-area-by-example).

The following video walks through the common steps and considerations for deploying an Azure Data Factory for a Staging Area.

![BimlFlex - How to Build and Deploy Azure Data Factory](https://www.youtube.com/watch?v=McTmpAzJW6c?rel=0&autoplay=0 "BimlFlex - How to Build and Deploy Azure Data Factory")

The general architecture of the generated Azure Data Factory is below.

![Azure Data Factory Landing Pattern](images/diagram-adf-landing-pattern.png "Azure Data Factory Landing Pattern")

### High Level Steps

The following steps are required though not highlighted in the video as they were completed in the previous video on [Configuring an Azure Data Factory Landing Area](https://www.youtube.com/watch?v=fYA4yTPe4ao?rel=0&autoplay=0 "BimlFlex - Configure Azure Data Factory Landing Area").

* Configure a Landing Area **Connection**
* Configure **Linked Services** for each **Connection** used by Azure Data Factory
  * If a Source System, Assign the Landing Area **Connection** as the *LANDING CONNECTION*
  * Enable *CLOUD*
  * Populate the **Linked Service** as required
* Update the BimlFlex **Project** to use *INTEGRATION TEMPLATE* of `ADF: Source -> Target`

The following are the steps outlined in the video.

* Import metadata from Source System
* Build the Solution (Example uses BimlStudio)
* Deploy the Solution (Example uses PowerShell)

### Importing Metadata

The example uses imported metadata from the tables included in [AdventureWorksLT2012 database](https://github.com/Microsoft/sql-server-samples/releases/tag/adventureworks).

> [!TIP]
> For additional details on Importing Samples and Metadata refer to the below guides:
>
> * BimlFlex Docs: [Load Sample Metadata](xref:bimlflex-getting-started-sample-metadata)
> * BimlFlex Docs: [Importing Source Metadata](xref:bimlflex-getting-started-importing-source-metadata)
> * Microsoft Docs: [AdventureWorks installation and configuration](https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure)

In order to generate the Staging Area, metadata for **Objects** from a Source System will be needed.

> [!NOTE]
> The example could be followed along with using metadata from any supported Source System.

### Building the Solution

Once the required metadata has been imported and configured the next step is to build the solution to generate the deployable artifacts.
Once a [BimlStudio project is setup](xref:bimlflex-setup-bimlstudio-project), this can be done simply by click the **Build** shortcut button.

![Build Shortcut](../build-solution/images/toolbarbuild.png "Build Shortcut")

Alternatively the **Build & Deploy** tab can be selected to click the **Build** button.

![Build Button](../build-solution/images/mainbuild.png "Build Button")

> [!TIP]
> For additional details on Building a Solution refer to the below guides:
>
> * BimlFlex Docs: [BimlFlex - Setup BimlStudio Project](xref:bimlflex-setup-bimlstudio-project)
> * BimlFlex Docs: [BimlFlex Generating DDL](xref:bimlflex-generating-ddl)
> * BimlFlex Docs: [BimlFlex Interactive Build](xref:bimlflex-interactive-build)
> * BimlFlex Docs: [Building Using the Command Line](xref:bimlflex-command-line-build)
> * BimlFlex Docs: [BimlFlex Continuous Integration and Continuous Delivery](xref:bimlflex-adf-continuous-integration-and-continuous-delivery)

The process outlined is know as an [Interactive Build](xref:bimlflex-interactive-build), but a [Command Line Build](xref:bimlflex-command-line-build) can also be configured to assist with automation and a [Continuous Integration/Continuous Delivery](xref:bimlflex-adf-continuous-integration-and-continuous-delivery) framework.

### Deploy the Solution

As part of the the build process, BimlFlex will output artifacts and name them using the `<Output Folder>` and `<Data Factory Name>`.

> [!NOTE]
> *Output Folder*: The default output folder is `<Project Working Directory>\output\`.
> This can be configured under the BimlStudio project properties under **Build**, *Output Path*.
>  
> *Data Factory Name*: Uses the `AzureDataFactoryName` **Setting**, or `BimlFlex` if the *Setting* is blank.

A PowerShell script named `adf-deploy.<Data Factory Name>.ps1` will be output to the `<Output Folder>\Deploy\` folder to assist with deployment.
BimlFlex will automatically input the [Azure Environment Settings](#adf-settings) if populated or these can be entered manually prior to script execution.
All variables and artifacts should be reviewed prior to the execution of the script as executing the script will generate billable Azure artifacts.

> [!IMPORTANT]
> **Ensure the script and JSON artifacts are reviewed prior to deployment.**
> The PowerShell script will create the Azure resources specified within the JSON files.
> In addition, the script will overwrite an existing object in Azure with the one currently defined JSON values if it already exists.

Though [PowerShell](xref:bimlflex-adf-using-powershell) is used in the example, the [Azure Portal](xref:using-azure-portal) can also be used.
This method uses the `arm_template.json` and `arm_template_parameters.json` files found in the `<Output Folder>\DataFactories\<Data Factory Name>\` directory.
These files are aggregate of the entire Azure environment generated by BimlFlex.

> [!TIP]
> For additional details on deploying your Azure Data Factory refer to the below guides:
>
> * BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-adf-using-powershell)  
> * BimlFlex Docs: [Deployment Through the Azure Portal](xref:using-azure-portal)  

BimlFlex will also output the JSON for each artifact individually should they be required for additional deployment methodologies.
These are found inside the `<Output Folder>\DataFactories\<Data Factory Name>\<Artifact Type>` directories named `<Object Name>.json`.

### Wrapping Up

That concludes the deployment of an Azure Data Factory.
If not already done, the Staging Area database would also need to be completed prior to execution of any Azure Pipelines.
Additional steps for this, and the other Integration Stages can be found in the [Deploying the Target Warehouse Environment](#deploying-target-warehouse-environment) section below.

If accessing an on-premise data source, an [Integration Runtime](#on-premise-data-source) will also need to be configured.

The example uses an Azure Key Vault with pre-configured Secrets.
Refer to [Azure Key Vault and Secrets](#azure-key-vault-and-secrets) for details on configurations.

Additional reading is provided under the [Detailed Configuration](#detailed-configuration) to highlight initial environment requirements, alternate configurations and optional settings.

## Detailed Configuration

In addition to the scenario given the example, BimlFlex support multiple Integration Stages and Target Warehouse Platforms.
The following sections outline the specific considerations when Azure Data Factory across various architectures and platforms.
Although features are highlight that are [Azure Synapse](xref:bimlflex-synapse-implementation) or [Snowflake](xref:bimlflex-snowflake-implementation) specific, the following articles are only designed to highlight the Azure Data Factory implications.
The referenced implementation guides should still be consulted prior to deploying an Azure Data Factory using either platform.

> [!TIP]
> For additional details on Target Warehouse Platforms refer to the below guides:
>
> * BimlFlex Docs: [Synapse Implementations](xref:bimlflex-synapse-implementation)
> * BimlFlex Docs: [Snowflake Implementation with ADF](xref:bimlflex-snowflake-implementation)  

### Configuring a Landing Area

When using ADF to orchestrate data movement a Landing Area is required to ensure the data is in the same environment as the Target Warehouse Environment.
This subject is covered in depth in the separate [Configure Azure Data Factory Landing Area](xref:bimlflex-adf-landing-area) guide.

### Configuring a ADF Project

In order to configure the **Project** for Azure Data Factory, simple set the *Integration Template* to `ADF: Source -> Target`.
BimlFlex requires that all **Connections** used be enabled for *Cloud*, **ADF Linked Service** configured.
If the **Connections** is not already, *Connection Type* needs to be set to `OLEDB SQL Based ELT` (or `ODBC SQL Based ELT` for Snowflake).

> [!NOTE]
> All **Projects** required a *Batch* and at minimum a *Source Connection* and *Target Connection*.

#### Converting a SSIS Project

BimlFlex allows for a rapid transition from an SSIS orchestration to an Azure Data Factory orchestration by applying the above settings.
Key points of consideration though are any existing *SSIS Dataflow Expressions* across **Configurations**, **Settings** and **Data Type Mappings**.

Azure Data Factory has a separate Expression Language from SSIS and as such requires separate logic and configuration.

### Initial Configuration

There are some environments that will require some additional setup outside of the configuration and installation of BimlFlex.
The scenarios where configuration will need to be configured outside of the BimlFlex/BimlStudio environment are listed below.

* On-premise Data Source
* Blob Storage Configured Landed Area

<!-- PolyBase not yet supported

- PolyBase Architecture (Synapse)\*\*

-->

<!-- PolyBase not yet supported

>  
> **\*\***: In addition to PolyBase Architecture notes also follow guidelines for a Blob Storage Configured Landing Area.

-->

#### On-Premises Data Source

An on-premises data source will require the installation and configuration of an Self-Hosted Integration Runtime in order for the Azure Data Factory to have access to the data.
The following guides are provided for additional reference material and configuration details.

> [!TIP]
> For additional details on installing and configuring and Integration Runtime refer to the below guides:
>
> * Microsoft Docs: [Integration runtime in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/concepts-integration-runtime)
> * Microsoft Docs: [Create and configure a self-hosted integration runtime](https://docs.microsoft.com/en-us/azure/data-factory/create-self-hosted-integration-runtime)

<!-- SIR not yet supported

> Microsoft Docs: [Create a shared self-hosted integration runtime in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/create-shared-self-hosted-integration-runtime-powershell)  

-->

Once an Self-Hosted Integration Runtime is configured, it will need to be added to BimlFlex.

This can be done by populating the BimlFlex `AzureIntegrationRuntime` **Setting**.

![AzureIntegrationRuntime Setting Example](images/bimflex-setting-azureintegrationruntime.png "AzureIntegrationRuntime Setting Example")

The value will then be available in the **ADF Linked Service** as an option under the *Connect Via Integration Runtime* dropdown.

![Linked Service Integration Runtime Example](images/bimflex-linked-service-connect-via-integration-runtime-example.png "Linked Service Integration Runtime Example")

If additional values are needed, they can be entered into the field as needed.

> [!WARNING]
> BimlFlex does not currently support a Shared Integration Runtime through automation.
> If a Shared Integration Runtime is required it will have to be manually assigned after build.

#### Blob Storage Configured Landing Area

Outside of configuring the appropriate settings for the [Blob Containers](#adf-settings), the appropriate Azure artifacts will first need to be created.

##### Creating a Storage Account

Before a Blob Container can be created an Azure Storage Account needs to be created to host it.
The minimum requirement is one Azure Storage Account.
Depending on the needs of the environment though, as many as one Azure Storage Account per Blob Container can be created.

> [!TIP]
> For additional details on creating Azure Storage Account refer to the below guide:  
> Microsoft Docs: [Create an Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create)

##### Creating a Blob Container

The Blob Container will be where the actual blob files are landed.
A separate container will need to be created for the staging (initial landing), archive (destination after a successful stage) and error (destination after a failed stage).

> [!TIP]
> For additional details on creating a Blob Container refer to the below guide:  
> Microsoft Docs: [Quickstart: Upload, download, and list blobs with the Azure portal](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)

### Azure Key Vault and Secrets

An important part of handling sensitive information in Azure is the use and management of an Azure Key Vault.
BimlFlex supports both the dynamic creation of the required Azure Key Vault or the ability to reference existing Azure Key Vaults.

#### BimlFlex Auto-generated Key Vault

With an *AKV Linked Service* set to `BimlFlex Autogenerated KeyVault`, BimlFlex will automatically generate an Azure Key Vault named from the `AzureKeyVault` **Setting**.
BimlFlex will automatically assign the Access Policies needed by the Azure Data Factory so it can access the required Secrets.
In addition, required Secrets will also be created and populated with a value of `xxx`.

> [!WARNING]
> The `AzureKeyVault` **Setting** along with an *AKV Linked Service* set to `BimlFlex Autogenerated KeyVault` will clear out any Access Policies or Secrets defined through BimlFlex.
> If additional Access Policies were defined, such as User Principal access, or additional Secrets created they will not persist after redeployment.
> The configured values in specified Secrets will however persist.

The following is the minimum needed Access Policy for a User Principal needs in order to update the Secrets.

| Access Policy | Object         | Key Permissions | Secret Permissions | Certificate Permissions |
| ------------- | -------------- | --------------- | ------------------ | ----------------------- |
| User          | User Principal |                 | List, Set          |                         |

> [!TIP]
> For additional details on Azure Key Vaults and Sensitive Information Management refer to the below guides:
>
> * BimlFlex Docs: [Using Azure Key Vaults for Connection settings](xref:linked-service-azure-key-vault)
> * BimlFlex Docs: [Sensitive Information Management in Azure Data Factory](xref:sensitive-info-management)

#### Existing Azure Key Vault

BimlFlex currently only support permission assignment and Secret creation when auto generating an Azure Key Vault.

When using an existing Azure Key Vault, all Secrets inputted into BimlFlex will have to be manually created and populated.

The generated Azure Data Factory will required the following permissions granted in order to access the required Secrets.

A User Principal will also need the minimum Access Policy to update required Secrets.

When using Azure Synapse Analytics Workspace and its integrated pipelines, assign access rights to the Synapse Workspace Application.

| Access Policy | Object                                       | Key Permissions | Secret Permissions | Certificate Permissions |
| ------------- | -------------------------------------------- | --------------- | ------------------ | ----------------------- |
| Application   | Data Factory / <br/> Azure Synapse Workspace |                 | Get, List          |                         |
| User          | User Principal                               |                 | List, Set          |                         |

> [!TIP]
> For additional details on managing Azure Key Vaults refer to the below guides:  
> Microsoft Docs: [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/)
> Microsoft Docs: [About keys, secrets, and certificates](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates)

#### Connection String Secrets

When using an Azure Key Vault to handle a connection string, the following example can be used to assist with the creation.

> [!NOTE]
> Provider is not supported in the ADF connection string.  Ensure it is not present in the Secret.

### [ADF Connection String](#tab/connection-string-adf)

```cmd
# SQL Server (On-Premise)
Data Source=<server name>;Initial Catalog=<database>;User ID=<user>;Password=<password>;

# SQL Server Azure or Azure Synapse
Data Source=<server name>.database.windows.net,<port>;Initial Catalog=<database>;User ID=<user>;Password=<password>;

# Snowflake
host={Server Address};account={Account Name};user={User Name};password={Password};db={Database Name};schema={Schema Name};warehouse={Warehouse Name};

# Blob Container
DefaultEndpointsProtocol=https;AccountName={Storage Account};AccountKey={Storage Account Key};EndpointSuffix=core.windows.net
```

### [SQL On-Premise Example](#tab/connection-string-adf-mssql-example)

```cmd
Data Source=localhost;Initial Catalog=AdventureWorksLT2012;User ID=MyUser;Password=P@$$Word;
```

### [SQL Azure / Synapse Example](#tab/connection-string-adf-sqldb-example)

```cmd
Data Source=bfxserver.database.windows.net,1433;Initial Catalog=bfx_sqldw;User ID=MyUser;Password=P@$$Word;
```

### [Snowflake Example](#tab/connection-string-adf-sfl-example)

```cmd
host=xy12345.west-us-2.azure.snowflakecomputing.com;account=xy12345;user=MyUser;password=P@$$Word;db=bfx_sfl;schema=public;warehouse=compute_wh;
```

### [Blob Container Example](#tab/connection-string-adf-blob-example)

```cmd
DefaultEndpointsProtocol=https;AccountName=bfxstaging;AccountKey={Storage Account Key}==;EndpointSuffix=core.windows.net
```

***

## Configuring BimlFlex Settings

BimlFlex **Settings** are used for environment details and orchestration configurations.

### ADF Settings

The following **Settings** are required when working with Azure Data Factory regardless of Source System or **Target Warehouse Environment**.

* [Azure\Data Factory](xref:bimlflex-metadata-settings#data-factory-azure)
  * Configures the *DATA FACTORY NAME*, *SUBSCRIPTION ID*, and *RESOURCE GROUP*
  * Optional configurations for an existing *KEY VAULT* or *INTEGRATION RUNTIME*
* [Staging Naming\Naming](xref:bimlflex-metadata-settings#naming-staging-naming)
  * Configures the naming convention for `External Tables` and `Landing Tables`

### [Using Linked Template Deployment](#tab/settings-linked-template)

These below **Settings** are only required when using a Linked Template ARM Deployment in ADF.

* [Azure\Deployment](xref:bimlflex-metadata-settings#deployment-azure)
  * Configures the name of the Account, Container and Key/Token to be used with the Linked Template Deployment

### [Using Blob Storage](#tab/settings-blob-storage)

These below **Settings** are only required when using Blob Storage in ADF.

* [Azure Storage\Processing](xref:bimlflex-metadata-settings#processing-azure-storage)
  * Configures the Accounts, Container Names and Keys/Tokens to be used with the Blob destination for AzCopy

### [Using PolyBase Staging](#tab/settings-polybase)

These below **Settings** are only required when using PolyBase Staging in ADF.

* [Azure Storage\Processing](xref:bimlflex-metadata-settings#processing-azure-storage)
  * Configures the Accounts, Container Names and Keys/Tokens to be used with the Blob destination for AzCopy
* [Azure Copy\Copy Method](xref:bimlflex-metadata-settings#copy-method-azure-copy)
  * Configures the *COPY METHOD* and *POLYBASE SETTINGS*
* [Azure Copy\Advanced Settings](xref:bimlflex-metadata-settings#settings-azure-copy)
  * Enables and configures PolyBase Staging and Logging

### [Using Snowflake](#tab/settings-snowflake)

These below **Settings** are only required when using Snowflake as a **Target Warehouse Platform** in ADF.

* [Azure\Data Factory Function Bridge](xref:bimlflex-metadata-settings#data-factory-function-bridge-azure)
  * Configures the details around using an Azure Function Bridge to connect to Snowflake
* [Snowflake\Connection](xref:bimlflex-metadata-settings#connection-snowflake)
  * Configures the *ACCOUNT*, *REGION*, *WAREHOUSE* and other Snowflake connection details
  * Also configures the location of the *SNOWSQL CONFIG* file and **SNOWSQL PATH** where SnowSQL is installed
* [Snowflake\Process](xref:bimlflex-metadata-settings#process-snowflake)
  * Configures features such as Auto Scaling Up/Down, *FILE FORMAT* and the optional removal of staging files
* [Snowflake\Snowflake Data Tools](xref:bimlflex-metadata-settings#snowflake-data-tools-snowflake)
  * Configures the *OUTPUT PATH* for the SnowDT Project

***

## Building the Project

Once the required metadata has been imported and configured the next step is to build the solution to generate the deployable artifacts.
Once a [BimlStudio project is setup](xref:bimlflex-setup-bimlstudio-project), this can be done simply by click the **Build** shortcut button.

![Build Shortcut](../build-solution/images/toolbarbuild.png "Build Shortcut")

Alternatively the **Build & Deploy** tab can be selected to click the **Build** button.

![Build Button](../build-solution/images/mainbuild.png "Build Button")

> [!TIP]
> For additional details on Building a Solution refer to the below guides:
>
> * BimlFlex Docs: [BimlFlex - Setup BimlStudio Project](xref:bimlflex-setup-bimlstudio-project)
> * BimlFlex Docs: [BimlFlex Generating DDL](xref:bimlflex-generating-ddl)
> * BimlFlex Docs: [BimlFlex Interactive Build](xref:bimlflex-interactive-build)
> * BimlFlex Docs: [Building Using the Command Line](xref:bimlflex-command-line-build)
> * BimlFlex Docs: [BimlFlex Continuous Integration and Continuous Delivery](xref:bimlflex-adf-continuous-integration-and-continuous-delivery)

The process outlined is know as an [Interactive Build](xref:bimlflex-interactive-build), but a [Command Line Build](xref:bimlflex-command-line-build) can also be configured to assist with automation and a [Continuous Integration/Continuous Delivery](xref:bimlflex-adf-continuous-integration-and-continuous-delivery) framework.

## Deploying Target Warehouse Environment

BimlFlex will generate the required SQL scripts for the deployment of all the tables, stored procedures, and the Data Vault default inserts (Ghost Keys).
Once generated the scripts can be deployed to the required database.

Any one of the following methods can be used to deploy the **Target Warehouse Environment**.

### [PowerShell (Microsoft SQL Based Only)](#tab/database-powershell)

A part of the Build process, BimlStudio will generate a SQL Server Data Tools (SSDT) project for a Microsoft SQL **Target Warehouse Platform**.
By default a SSDT deployment file named `ssdt-deploy.<DatabaseName>.ps1` is created and placed in the `...\<Output Folder>\Deploy\` folder for each database in the target warehouse environment.

The SSDT project will have all the required tables, stored procedures and Data Vault default inserts required for the project.

> [!IMPORTANT]
> It is HIGHLY recommended when targeting a Azure SQL Database or Synapse Database that it is created manually in Azure prior to executing the `ssdt-deploy` PowerShell script.
> The generated SSDT project does not contain any configuration information for the Azure settings.
> This will result in the database being created with whatever defaults Microsoft is currently using, including a potentially higher than necessary *Performance Level*.

Alternatively the generated SSDT project can be used to create a deployment script or generate a DACPAC that can be deployed like a normal Data-tier Application package.

> [!TIP]
> For additional details on PowerShell deployment refer to the below guide:
>
> * BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-adf-using-powershell)
> * Microsoft Docs: [SQL Server Data Tools](https://docs.microsoft.com/en-us/sql/ssdt/sql-server-data-tools)
> * Microsoft Docs: [Data-tier Applications](https://docs.microsoft.com/en-us/sql/relational-databases/data-tier-applications/data-tier-applications)
> * Microsoft Docs: [SqlPackage.exe](https://docs.microsoft.com/en-us/sql/tools/sqlpackage)

### [SnowDT (Snowflake Only)](#tab/database-snowdt)

A part of the Build process, BimlStudio will generate a SnowDT folder for your **Target Warehouse Platform**.

By default this is created and placed in the `...\<Output Folder>\SnowDT\` folder.

Each object will have a script containing the DDL for individual object creation.

The directory structure is outlined below.

* **File Location and Structure:**
* `{Output Folder}`\\SnowDT\\
  * `{Version Name}`\\ **<== Incremental, for each built version**
  * Current\\ **<== Only Current Version build**
    * `{Database Name}`\\
      * `{Schema Name}`\\
        * Stored Procedures\\`{schema}`.`{object}`.sql **<== Stored Procedures Scripts**
        * Tables\\`{schema}`.`{object}`.sql  **<== Table Scripts**
      * Script.PostDeployment1.sql **<== Default Inserts**

> [!TIP]
> The location and name of the SnowDT folder can be configured with the **Setting** in the `Snowflake` group name *OUTPUT PATH*.

#### [DDL (Manual)](#tab/database-ddl-manual)

DDL Scripts for the Database Artifacts can be generated manually.

The below table has been provided as a quick reminder as to when a script should be generated.

| Script                           | Condition                                       |
| -------------------------------- | ----------------------------------------------- |
| PolyBase External Table Script   | When using SSIS PolyBase Architecture           |
| Azure Synapse Table Script       | When using Synapse as Target Warehouse Platform |
| Data Vault Default Insert Script | When using a Data Vault                         |
| Data Vault Procedure Script      | When using a SQL Based ELT Data Vault           |
| Data Mart Procedure Script       | When using a SQL Based ELT Data Mart            |
| Persistent Procedure Script      | When using a SQL Based ELT Staging Area w/ PSA  |
| Business Vault Procedure Script  | When using PIT or Bridge Tables                 |
| Snowflake Table Script           | When using Snowflake.  Table DDL.               |
| Snowflake Procedure Script       | When using Snowflake.  Procedure/ELT Logic.     |

> [!TIP]
> For additional details on generating DDL refer to the below guide:
>
> * BimlFlex Docs: [BimlFlex Generating DDL](xref:bimlflex-generating-ddl)  

Once BimlFlex generates the scripts they can be executed against the target database.

These can be deployed through copy/paste using a SQL Server Management Studio, or by another script execution client, if so desired.

Any SQL client capable of executing DDL, such as Visual Studio Code or Azure Data Studio could also be used if preferred.

> [!TIP]
> For additional details on executing SQL see the below guides:
>
> * Microsoft Docs: [Download SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)  
> * Microsoft Docs: [What is SQL Server Management Studio (SSMS)?](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms)  
> * Snowflake Docs: [Using SnowSQL](https://docs.snowflake.com/en/user-guide/snowsql-use.html)  
> * Snowflake Docs: [Using Worksheets for Queries](https://docs.snowflake.com/en/user-guide/ui-worksheet.html)  

***

## Deploying Orchestration

BimlFlex automatically generates the orchestration artifacts as part of the standard build process.

When using ADF this correlates to the generation of the required ARM Template and parameter files for the Azure Artifacts used in the orchestration process.

When requiring a Azure Function Bridge, such as with a Snowflake Deployment, these artifacts will automatically be generated and included.

> [!NOTE]
> The files included are only generated objects.
> If an existing Azure Key Vault is specified, no Azure artifact will be created.

In addition, BimlFlex will also generate a JSON file for each Azure artifact should a process require the individual objects to be source controlled.

Any one of the following methods can be used to deploy the orchestration.

### [PowerShell - ARM Template](#tab/orchestration-powershell-arm)

As part of the the build process, BimlFlex will output artifacts and name them using the `<Output Folder>` and `<Data Factory Name>`.

> [!NOTE]
> *Output Folder*: The default output folder is `<Project Working Directory>\output\`.
> This can be configured under the BimlStudio project properties under **Build**, *Output Path*.
>  
> *Data Factory Name*: Uses the `AzureDataFactoryName` **Setting**, or `BimlFlex` if the *Setting* is blank.

A PowerShell script named `adf-deploy.<Data Factory Name>.ps1` will be output to the `<Output Folder>\Deploy\` folder to assist with deployment.

BimlFlex will automatically input the [Azure Environment Settings](#adf-settings) if populated or these can be entered manually prior to script execution.

All variables and artifacts should be reviewed prior to the execution of the script as executing the script will generate billable Azure artifacts.

> [!IMPORTANT]
> **Ensure the script and JSON artifacts are reviewed prior to deployment.**
> The PowerShell script will create the Azure resources specified within the JSON files.  
> In addition, the script will overwrite an existing object in Azure with the one currently defined JSON values if it already exists.

* **File Location and Structure:**
* `{Output Folder}`\\DataFactories\\`{Data Factory Name}`\\
  * arm_template.json **<== Standard ARM Template File**
  * arm_template_parameters.json **<== Standard ARM Template Parameter File**

> [!TIP]
> For additional details on deploying ADF packages refer to the below guide:
>
> * BimlFlex Docs: [Deployment Through PowerShell](xref:bimlflex-adf-using-powershell)

<!-- ### [PowerShell - ARM Linked Templates](#tab/orchestration-powershell-linked)

TODO: Automatic ARM Linked Template Deployment

* **File Location and Structure:**
* `{Output Folder}`\\DataFactories\\`{Data Factory Name}`\\
  * linkedTemplates\\ **<== Linked Template Files**
    * ArmTemplate_`{n}`.json **<== Linked Template Artifacts (Multiple)**
    * ArmTemplate_master.json **<== Mater Linked Template File**
    * ArmTemplateParameters_master.json **<== Parameters File for Linked Template** 
-->

### [Azure Portal - ARM Template](#tab/orchestration-manual-arm)

Though [PowerShell](xref:bimlflex-adf-using-powershell) is used in the example, the [Azure Portal](xref:using-azure-portal) can also be used.

This method uses the `arm_template.json` and `arm_template_parameters.json` files found in the `<Output Folder>\DataFactories\<Data Factory Name>\` directory.
These files are aggregate of the entire Azure environment generated by BimlFlex.

* **File Location and Structure:**
* `{Output Folder}`\\DataFactories\\`{Data Factory Name}`\\
  * arm_template.json **<== Standard ARM Template File**
  * arm_template_parameters.json **<== Standard ARM Template Parameter File**

> [!TIP]
> For additional details on deploying ADF packages refer to the below guide:
>
> * BimlFlex Docs: [Deployment Through the Azure Portal](xref:using-azure-portal)  

#### [Individual JSON Artifacts](#tab/orchestration-json)

Although not technically a deployment method, BimlFlex will also output the JSON for each artifact individually should they be required for additional deployment methodologies.
These are found inside the `<Output Folder>\DataFactories\{Data Factory Name}\{Artifact Type}` directories named `{Object Name}.json`.

Full file structure can be found below:

* **File Location and Structure:**
* `{Output Folder}`\\DataFactories\\`{Data Factory Name}`\\multipleJsonFiles\ **<== Folder Container Individual JSON Artifacts**
  * dataset\\`{Dataset Name}`.json
  * factory\\`{Data Factory Name}`.json
  * integrationRuntime\\`{Integration Runtime Name}`.json
  * linkedService\\`{Linked Service Name}`.json
  * pipeline\\`{Pipeline Name}`.json
  * other\\
    * `{Function Bridge App}`.json **<== Function Bridge Artifact**
    * `{Insight Component}`.json **<== Function Bridge Artifact**
    * `{Function Key}`.json **<== Function Bridge Artifact**
    * `{Storage Account}`.json **<== Function Bridge Artifact**
    * `{Web Server Farm}`.json **<== Function Bridge Artifact**
    * `{Key Vault Access Policy}`.json

***
