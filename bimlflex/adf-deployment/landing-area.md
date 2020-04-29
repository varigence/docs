---
uid: bimlflex-adf-landing-area
name: Configure Azure Data Factory Landing Area
---
# BimlFlex - Configure Azure Data Factory Landing Area

A BimlFlex Azure Data Factory project will use a landing area to land data extracted from sources. This can be in database, or in Blob storage. The data is then read from the landing area into the Target Data warehouse using ELT.

![BimlFlex - Configure Azure Data Factory Landing Area](https://www.youtube.com/watch?v=fYA4yTPe4ao?rel=0&autoplay=0 "BimlFlex - Configure Azure Data Factory Landing Area")

This video walks through the steps of, and considerations for, creating and configuring the landing connection.

* Start with a sample metadata set. This video uses the 01 - MSSQL Starting Point, which includes connections for a sample on-premises SSIS data warehouse as well as Batch and Project definitions
* Archive the BFX_RDV and BFX_DM Project and Batches to minimize the amount of additional metadata that is visible in the app
* Update the EXT_AWLT_SRC extract project to have the target set to the staging area connection, BFX_STG
* Archive the BFX_RDV and BFX_DM connections
* Navigate to the Connections page, create a Landing connection by duplicating the BFX_STG connection
    Name the new connection BFX_LND  
    Update the Integration Stage for the Connection to Landing Area
* Enable the connection for ADF use by switching on the Cloud setting  
    Enabling the connection for Cloud exposes the Linked Services configuration for the connection
* Update the connection to use the BFX_LDN connection as the landing connection
* Configure the Linked Service to use the appropriate configuration  
    The video uses a pre-created Azure Key Vault to store the connection string information for the connections  
    Add the Azure Key Vault as a configuration for the Linked Service  
    Define the secret that the Linked Service should use as the connection string  
    Reuse the Key Vault and secret configuration for each of the connections
* Reconfigure the EXT_AWLT_SRC Project to generate ADF artifacts instead of SSIS projects by updating the Integration Template used

The metadata is now configured for Azure Data Factory and the required landing connection

> [!NOTE]
> The BimlFlex 2020 release currently supports table based landing areas for Azure Synapse and Azure SQL Database and Blob/file based landing with Snowflake targets
