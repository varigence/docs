---
uid: linked-service-adf-sql-database
title: Configuring an ADF Linked Service Connection for Azure SQL Database
summary: Documentation on how to configure ADF Linked Service Connection for Azure SQL Database with required fields, connection strings, and links to additional information
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# Configuring an ADF Linked Service Connection for Azure SQL Database

> [!NOTE]
> For information on how to enable a connection for use with linked services, see [Configuring a Linked Service Connection](xref:create-linked-service-connection).

[//]: # (TODO List of stages, connection types, and system types that can use Azure SQL Database)

After selecting `Azure SQL Database` from the Linked Service Type dropdown, the form required for creating an Azure SQL Database Linked Service will appear.

![Azure SQL Database Linked Service Form](../../static/img/bimlflex-ss-app-connections-adf-sql-database-form.png "Azure SQL Database Linked Service Form")

## Required Fields

The required fields are:

+ [Connect via Integration Runtime](#connect-via-integration-runtime)
+ [Connection String](#connection-string) (or [Azure Key Vault](xref:create-linked-service-connection))
  + Fully Qualified Domain Name
  + Database Name
+ [Authentication Method](#authentication-method)

Required for [SQL Authentication](#sql-authentication):

+ User Name
+ Password (or [Azure Key Vault](xref:create-linked-service-connection))

Required for [Service Principal Authentication](#service-principal):

+ Service Principal ID (Application ID)
+ Service Principal Key (Application Key) (or [Azure Key Vault](xref:create-linked-service-connection))
+ Tenant (Tenant ID)

Optional fields are:

+ [Additional Connection String Properties](#additional-connection-string-properties)

### Connect via Integration Runtime

Connect via Integration Runtime is required for an Azure SQL Database Linked Service connection.
The default value is `AutoResolveIntegrationRuntime`.
To use a custom runtime, type the name into the editable dropdown or select from the Azure Integration Runtimes saved in BimlFlex settings.
When a custom value is saved in the linked service form, it will be added to the custom integration runtimes.
The custom values that appear in this dropdown can be maintained in Settings under Azure - AzureIntegrationRuntime.

### Connection String

A connection to an Azure SQL Database linked service requires a connection string.
The required properties for the connection string are Fully Qualified Domain Name, Database Name, User Name, and Password.
The Linked Service connection form will provide text boxes for these values and will use them to construct the connections string.

> [!NOTE]
> It is suggested that [Azure Key Vault](linked-service-azure-key-vault.md) be used in place of manually entering Connection String details.

### Authentication Method

The Azure SQL Database Linked Service connection can use SQL Authentication, Managed Identity, or Service Principal.
When a key vault is used in place of a Connection String, SQL Authentication details should be stored in the Connection String key vault and will not be required in the BimlFlex form.
If [Managed Identity](#managed-identity) is used, no authentication will be required in the BimlFlex Linked Service form.
For [Service Principal Authentication](#service-principal), Service Principal ID, Tenant, and Service Principal Key are required.

### SQL Authentication

User Name and Password will be required by the Linked Service form for SQL Authentication except when using Azure Key Vault in place of a manually entering a Connection String.
When using User Name and Password with SQL Authentication they will be included in the Connection String.

> [!NOTE]
> It is suggested that [Azure Key Vault](linked-service-azure-key-vault.md) be used in place of manually entering the Password.

### Managed Identity

To use Managed Identities for authentication with Azure SQL Database, they must be set up in Azure as described in the [Microsoft documentation for Azure SQL Database Managed Identities](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-sql-database#managed-identity).
When using Managed Identities, no other authentication details are required.

### Service Principal

![Service Principal](../../static/img/bimlflex-ss-app-connections-adf-sql-database-service-principal.png "Service Principal")

To use Service Principal authentication, an Azure Active Directory application must be set up in your Azure portal as described in the [Microsoft documentation for SQL Database Service Principal Authentication](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-sql-database#service-principal-authentication).
The Service Principal (Application) ID, Service Principal (Application) Key, and Tenant ID will be required in the SQL Database Linked Service form.

> [!NOTE]
> It is suggested that [Azure Key Vault](linked-service-azure-key-vault.md) be used in place of a Service Principal Key.

### Additional Connection String Properties

Any additional properties entered here will be included in the Connection String.
These properties should be entered the same way you want them to appear in the connection string and separated by a semicolon, e.g. `key=value;secondKey=secondValue`.

Values entered in the Additional Connection String Properties textbox will be maintained when changing linked service types.
If a required property from one service type does not have a corresponding text box in the newly selected linked service type, it will appear as an additional property.

## Azure Data Factory Linked Service Additional Information

For additional information on ADF SQL Database Linked Service and its connection requirements see the [Azure Data Factory SQL Database Connector documentation](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-sql-database).
