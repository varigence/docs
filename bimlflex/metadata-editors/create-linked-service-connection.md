---
uid: create-linked-service-connection
title: Configuring a Linked Service Connection
---
# Configuring a Linked Service Connection

[//]: # (TODO: Include a summary of Linked Service purpose and use in connections)

**Connections** can be enabled to work with cloud based linked services.

### Enable Connection for Cloud Services

In the **Connections Editor**, click  Add in the top left of the screen or select an existing connection to edit.

![Connections Editor Menu -center][connections-module-list]

In the **Details tab** of the Connections Editor, select the *Integration Stage*, *Connection Type*, and *System Type* for your connection. If the configuration provided is compatible with a linked service then a *Cloud* setting will appear in the action bar.

![Connection Details Tab -center -50%][connections-details-tab]

After toggling the *Cloud* setting, a tab for Linked Services will appear at the bottom of the form and any available linked services will appear in the *Linked Service Types dropdown*. Select a `Linked Service Type` to configure it.

![Linked Service Dropdown -center -50%][connections-linked-service-dropdown]

### Configuring the Linked Service Connection

The linked service form is modeled after the selected `Linked Service Type` and allows for input of all required data points needed to make the linked service connection. Any additional data points can be entered in the additional properties field. This form will maintain the values that are entered if the Linked Service Type is changed.

#### Supported Linked Services

The linked services that are currently supported are listed below. Select a linked service type for information on filling out the Linked Service form.

+ [Azure Blob Storage](linked-service-adf-blob-storage.md)
+ [Azure My SQL](linked-service-adf-azure-mysql.md)
+ [Azure PostgreSQL](linked-service-adf-azure-postgresql.md)
+ [Azure SQL Database](linked-service-adf-sql-database.md)
+ [Azure SQL Database Managed Instance (Azure SQL MI)](linked-service-adf-sqlmi.md)
+ [Azure Synapse Analytics (Azure SQL Data Warehouse)](linked-service-adf-sql-data-warehouse.md)
+ [Data Lake Gen 2](linked-service-adf-datalake-gen-2.md)
+ [MySQL](linked-service-adf-mysql.md)
+ [Oracle](linked-service-adf-sql-server.md)
+ [PostgreSQL](linked-service-adf-sql-server.md)
+ [Snowflake](linked-service-snowflake.md)
+ [SQL Server](linked-service-adf-sql-server.md)
+ [Teradata](linked-service-adf-teradata.md)

[connections-module-list]: images/bimlflex-ss-app-connections-menu-list.png "Connections Module Menu"
[connections-details-tab]: images/bimlflex-ss-app-connections-details-tab.png "Connection Details Tab"
[connections-linked-service-dropdown]: images/bimlflex-ss-app-connections-cloud-linked-service-select-blank-highlighted.png "Linked Service Type Dropdown"
[akv]: images/bimlflex-ss-app-connections-akv.png "Azure Key Vault"
[akv-dd]: images/bimlflex-ss-app-connections-akv-dd.png "Azure Key Vault Drop Down"
