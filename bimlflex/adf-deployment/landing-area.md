---
uid: bimlflex-adf-landing-area
name: Configure Azure Data Factory Landing Area
---

# Configure Azure Data Factory Landing Area

The Azure Data Factory Copy activity currently does not allow for transformations during the copying of the data.
Therefore, BimlFlex uses a Landing Area that is accessible by SQL Based ELT stored procedures in the Staging Area.
This allows for the data to be directly accessed by the code to perform any necessary transformations needed.
The Azure Data Factory pipeline can then use the Copy activity to move the data to the Staging Area efficiently.

The general architecture is below with the Landing Area in the middle supporting either a Database or Files.

<!-- TODO:  Add more notes about Landing Area.  Volatility/persistence.  Settings.  Etc. -->

![-border-image](images/diagram-adf-landing-pattern.png "Azure Data Factory Landing Pattern")

> [!TIP]
> For additional details on ADF or the Copy activity refer to the below guides:  
> Microsoft Docs: [Azure Data Factory documentation](https://docs.microsoft.com/en-us/azure/data-factory/)  
> Microsoft Docs: [Copy activity in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/copy-activity-overview)  

## Configure a Landing Area By Example

The following video walks through the common steps and considerations for creating and configuring the landing connection.
This example uses sample metadata to configure an appropriate Landing Area for a [Table Based Configuration](#table-based-configuration).

For addition details of alternate configurations refer to the [Detailed Configuration](#detailed-configuration) section.

![BimlFlex - Configure Azure Data Factory Landing Area](https://www.youtube.com/watch?v=fYA4yTPe4ao?rel=0&autoplay=0 "BimlFlex - Configure Azure Data Factory Landing Area")

### High Level Steps

* Start with a sample metadata set. This video uses the 01 - MSSQL Starting Point, which includes connections for a sample on-premises SSIS data warehouse as well as Batch and Project definitions
* Archive the BFX_RDV and BFX_DM Project and Batches to minimize the amount of additional metadata that is visible in the app
* Update the EXT_AWLT_SRC extract project to have the target set to the staging area connection, BFX_STG
* Archive the BFX_RDV and BFX_DM connections
* Navigate to the Connections page, create a Landing connection by duplicating the BFX_STG connection
  * Name the new connection BFX_LND
  * Update the Integration Stage for the Connection to Landing Area
* Enable the connection for ADF use by switching on the Cloud setting  
  * Enabling the connection for Cloud exposes the Linked Services configuration for the connection
* Update the source connection to use the BFX_LND connection as the landing connection
* Configure the Linked Service to use the appropriate configuration  
  * The video uses a pre-created Azure Key Vault to store the connection string information for the connections  
  * Add the Azure Key Vault as a configuration for the Linked Service  
  * Define the secret that the Linked Service should use as the connection string  
  * Reuse the Key Vault and secret configuration for each of the connections
* Reconfigure the EXT_AWLT_SRC Project to generate ADF artifacts instead of SSIS projects by updating the Integration Template used

### Importing Metadata

The example uses the `01 - MSSQL Starting Point` metadata to generate Source System and Staging Area **Connections**.

> [!TIP]
> For additional details on Importing Samples and Metadata refer to the below guides:  
> BimlFlex Docs: [](xref:bimlflex-getting-started-sample-metadata)  
> BimlFlex Docs: [](xref:bimlflex-getting-started-importing-source-metadata)  

In order to proceed a Source System **Connection** and Staging Area **Connection** is needed.

> [!NOTE]
> The example could be followed along with using any supported Source System and any Stage Area that supports a [Table Based Configuration](#table-based-configuration) for the Landing Area (Microsoft SQL Server, Azure Synapse).

### Cleaning (Illustration and Example Only)

The video archives multiple BimlFlex Entities to illustrate the minimal configuration needed to implement and configure a Landing Area.
These are optional steps to streamline and minimize configuration.

> [!WARNING]
> Do not archive any BimlFlex Entities if following along with your own metadata.

### Create a Landing Connection

When using a [Table Based Configuration](#table-based-configuration) the Landing Area and Staging Area should share the same connection details.
The easiest way to achieve this is by duplicating the Staging Area **Connection**, naming it appropriately and updating the *Integration Stage* to `Landing Area`.

> [!NOTE]
> In this configuration, the Landing Area is a *conceptual separation* via naming practice only.
> Ensure that the *Catalog* and *Connection String* are identical between the Staging Area and Landing Area.

### Enable and Populate Linked Services

Azure Data Factory requires the use of Linked Services and are configured separately on each connection once enabled.
For each **Connection** that will be used by the ADF process the *Cloud* field is required to be set to `true` to expose the configuration for the **Linked Service**.

> [!NOTE]
> Ensure that the *Catalog* and *Connection String* are identical between the Staging Area and Landing Area.

The video uses a pre-created Azure Key Vault to manage the complete connection string through use of a Secret.  
With familiarly of Azure Key Vaults and the deployment environment, the Linked Services can be configured to suit individual sensitive information management practices.

> [!TIP]
> For additional details on Linked Services, Azure Key Vaults and Sensitive Information Management refer to the below guides:  
> BimlFlex Docs: [](xref:create-linked-service-connection)  
> BimlFlex Docs: [](xref:linked-service-azure-key-vault)  
> BimlFlex Docs: [](xref:sensitive-info-management)  
> Microsoft Docs: [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/)
> Microsoft Docs: [About keys, secrets, and certificates](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates)

### Configure Project for Azure Data Factory Orchestration

The last step is to configure the BimlFlex **Project** to use the *Integration Template* of `ADF: Source -> Target`.
This step is performed last to ensure there are no validation errors when saving the **Project**.

> [!NOTE]
> The `ADF: Source -> Target` *Integration Template* requires all **Connections** to have *Cloud* set to `true`.

The metadata is now configured to stage data via a Landing Area using Azure Data Factory.

## Detailed Configuration

Depending to the *System Type* of the Staging Area, the Landing Area can be configured as either a group of database tables or a blob storage.
The below table for outlines the supported Landing Area configurations for each supported Staging Area.

| Staging Area System Type      | Connection Type     | Table Based | Blob Storage |
| ----------------------------- | ------------------- | ----------- | ------------ |
| Azure Synapse                 | OLEDB SQL Based ELT | Yes         | No           |
| Microsoft SQL Server (Server) | OLEDB SQL Based ELT | Yes         | No           |
| Microsoft SQL Server (Azure)  | OLEDB SQL Based ELT | Yes         | No           |
| Snowflake Data Warehouse      | ODBC SQL Based ELT  | No          | Yes          |

<!-- Not supported in ADF yet
> [!NOTE]
> **\***: Azure Synapses requires a [PolyBase Architecture](xref:bimlflex-synapse-implementation) when configured to use Blob Storage.  
>  
> *Connection Type*: BimlFlex requires a `SQL Based ELT` for all ADF projects.  
-->

### Table Based Configuration

It is important to note that although the Landing Area is configured as a separate BimlFlex **Connection**, in a Table Based Configuration it should be considered the same database as the Staging Area.
As such the Landing Area does not deploy separately, and instead deploys with the Staging Area.

> [!IMPORTANT]
> A Table Based Configuration requires the Landing Area to be in the same database as the Staging Area.  Ensure the *Connection String*, *Catalog* and applicable *ADF Linked Service* configurations are identical to the Staging Area **Connection**.

When using a Table Based Configuration, the Landing Area is a group of tables *conceptually separated* through use of naming practice.
By default the Landing Area tables will have a `land_` prefix appended to all landing tables.

> [!NOTE]
> The prefix appended to landing tables can be configured by updating the `AppendNameLanding` BimlFlex **Setting**.
> The default configuration is `land`.

### Blob Storage Configuration

A Blob Storage Configuration requires a Blob Container for Staging, Archive and Error.
These Blob Containers can be hosted inside a single Azure Storage Account or a unique account for each.
Once the Azure artifacts are created, the appropriate settings for each account will need to be populated.

#### Azure Blob Stage Container Settings (Blob Upload or PolyBase Architecture Only)

The following Azure **Settings** are used to configure the blob destinations.

#### [Settings Pattern](#tab/azure-container-settings)

| Setting Key                       | Setting Description                                                            |
| --------------------------------- | ------------------------------------------------------------------------------ |
| Azure`<ContainerType>`Container   | The Container Name to use for the designated process.                          |
| Azure`<ContainerType>`AccountKey  | A Storage access key to use when accessing the Blob storage.                   |
| Azure`<ContainerType>`AccountName | The Azure Blob Storage Account Name to use for when accessing in blob storage. |
| Azure`<ContainerType>`SasToken    | A Storage access SAS Token to use when accessing the Blob storage.             |

> [!NOTE]
> Only an AccountKey or SasToken is needed, but not both.
> Both options are provided to support any specific environment needs.

#### [Stage Example](#tab/azure-stage-container-settings-example)

| Setting Key           | Setting Description |
| --------------------- | ------------------- |
| AzureStageContainer   | stage               |
| AzureStageAccountKey  |                     |
| AzureStageAccountName | bfxblobaccount      |
| AzureStageSasToken    | ?`<SasToken>`       |

> [!TIP]
> For additional details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)  

#### [Archive Example](#tab/azure-archive-container-settings-example)

| Setting Key             | Setting Description |
| ----------------------- | ------------------- |
| AzureArchiveContainer   | archive             |
| AzureArchiveAccountKey  |                     |
| AzureArchiveAccountName | bfxblobaccount      |
| AzureArchiveSasToken    | ?`<SasToken>`       |

> [!TIP]
> For additional details on how to generate a SAS Token refer to the following guide:  
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)  

#### [Error Example](#tab/azure-error-container-settings-example)

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

> [!TIP]
> For additional details on Blob Storage refer to the below guides:  
> BimlFlex Docs: [](xref:bimlflex-adf-deployment-guide#blob-storage-configured-landing-area)  
> Microsoft Docs: [Create an Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create)
> Microsoft Docs: [Manage storage account access keys](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage)
> Microsoft Docs: [Create an account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas)  
> Microsoft Docs: [Quickstart: Upload, download, and list blobs with the Azure portal](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)
