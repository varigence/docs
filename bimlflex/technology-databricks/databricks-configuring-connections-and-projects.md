---
uid: bimlflex-databricks-configuring-connections-and-projects
title: Configuring Connections and Projects for BimlFlex Databricks Solution
summary: Configuring Connections and Projects for BimlFlex Databricks Solution
---
# Configuring Connections and Projects for BimlFlex Databricks Solution

## Introduction
This guide provides a comprehensive walkthrough for setting up BimlFlex with Databricks, focusing on configuring connections and projects for a robust data integration solution. It covers initial setup, connection configurations, and project settings to leverage Azure Data Factory and Databricks effectively.

## Initial Setup
1. **Open BimlFlex**: Start by opening the BimlFlex application.
2. **Load Sample Metadata**: Load the provided sample metadata, which is initially set up as an SQL server solution.

## Configuring Connections
### Source Connection
1. **Default Source**: Initially, a connection to the Adventure Works database is set up.
2. **Add Sources**: You can add additional sources such as flat files, FTP, SFTP, REST APIs.

### Staging and Persistent Connections
1. **Data Integration Layers**: Typically includes staging, persistent staging, Data Vault, and data mart connections.
2. **Data Vault Configuration**: If using Data Vault, retain the BFX DV Connection; otherwise, archive it.

### Cloud Configuration
1. **Enabling Cloud**: Enable for cloud and change Linked Service Type to Azure SQL database, using Key Vault for configuration.

### Landing Area Configuration
1. **Create Landing Connection**: Click 'Add' to create a new connection named BFX LND.
2. **Specify Parameters**: Set integration stage to landing area and connection type to Azure Data Lake Store.
3. **Data Format**: Choose to land data in Parquet format.

### Persistent Landing Connection
1. **Duplicate Landing Connection**: Create a persistent landing connection by duplicating the BFX LND connection.
2. **Adjust Settings**: Change the name (e.g., P LND) and set the Integration Stage to Persistent Landing Area.

### Additional Connection Configurations
1. **Staging Connection**: Change Connection Type to ODBC and System Type to Databricks.
2. **Operational Datastore**: Follow similar steps for persistent staging connections.
3. **Data Vault and Data Mart**: Configure these connections if necessary, altering the Connection Type to ODBC and System Type to Databricks.

## Configuring Projects for Azure Data Factory and Databricks
1. **Select Project**: In the projects section, choose the project to configure.
2. **Change Integration Stage**: Switch the Integration Stage to Databricks to utilize Azure Data Factory for orchestration.
3. **Set Landing and Compute Connections**: Select the appropriate Landing and Compute connections.
4. **Configure Data Processing**: Set up the process for extracting and landing data, staging, and processing into Data Vault or data mart.

### Data Vault and Data Mart Setup
1. **Data Vault Implementation**: If using Data Vault, configure the Data Vault project accordingly.
2. **Data Mart Configuration**: Similarly, set up the data mart project for Databricks integration.

### Additional Configurations
1. **Import Metadata**: From any source, import the metadata for integration.
2. **Data Vault Modeling**: Utilize the Accelerator for modeling entities in Data Vault.

## Additional Samples and Configurations
- **Sample Projects**: Explore pre-configured BimlFlex projects for Databricks and Data Vault integration.
- **REST API and Data Lake Integration**: Learn to integrate data using REST API connections and data already landed in the data lake.
- **Pushdown Extract Feature**: Utilize this feature for efficient data integration.

## Conclusion
This guide provides the essential steps to configure a BimlFlex project with Databricks integration, leveraging Azure Data Factory for efficient data orchestration and integration. For detailed explanations and additional configurations, refer to the BimlFlex documentation and sample projects.