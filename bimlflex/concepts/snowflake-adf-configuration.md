---
uid: snowflake-adf-configuration
name: Configure Snowflake and Azure Data Factory
---

# Configure Snowflake and Azure Data Factory

Azure Data Factory Copy activity has added a `Copy (Preview)` option that will allow Snowflake bulk loading similar to Polybase for Azure Sypase. 
When that becomes available we will enhance our templates to include it as an option. 


## Configure a Landing Area By Example

![Azure Data Factory Landing Pattern](images/diagram-adf-landing-pattern.png "Azure Data Factory Landing Pattern")

> [!TIP]
> For additional details on ADF or the Copy activity refer to the below guides:  
> Microsoft Docs: [Azure Data Factory documentation](https://docs.microsoft.com/en-us/azure/data-factory/)  
> Microsoft Docs: [Copy activity in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/copy-activity-overview)  

The following video walks through the common steps and considerations for creating and configuring the landing connection.
This example uses sample metadata to configure an appropriate Landing Area for a [Table Based Configuration](#table-based-configuration).

For addition details of alternate configurations refer to the [Detailed Configuration](#detailed-configuration) section.

![BimlFlex - How to Configure Azure Data Factory Landing Area](https://www.youtube.com/watch?v=czmK6R2Y-9c?rel=0&autoplay=0 "BimlFlex - How to Configure Azure Data Factory Landing Area")

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

