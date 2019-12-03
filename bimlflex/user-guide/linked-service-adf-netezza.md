---
uid: linked-service-adf-sql-server
title: Configuring an ADF Linked Service Connection for SQL Server
---
# Configuring an ADF Linked Service Connection for SQL Server

> [!NOTE]
> For information on how to enable a connection for linked services, see [Configuring a Linked Service Connection](create-linked-service-connection.md).

[//]: # (TODO List of stages, connection types, and system types that can use SQL Server)

After selecting `Sql Server` from the Linked Service Type dropdown, the form required for creating a Sql Server Linked Service will appear.

![Sql Server Linked Service Form -center -50%](images/bimlflex-ss-app-connections-adf-sql-server-form.png "Sql Server Linked Service Form")

### Required Fields

The required fields are:

+ [Connect via Integration Runtime](#connect-via-integration-runtime)
+ [Connection String](#connection-string) (or [Azure Key Vault](create-linked-service-connection.md#azure-data-factory-linked-services-and-azure-key-vault))
  + Server Name
  + Database Name
+ [Authentication Method](#authentication-method)
+ [User Name](#user-name)
+ [Password](#password) (or [Azure Key Vault](create-linked-service-connection.md#azure-data-factory-linked-services-and-azure-key-vault))

Optional fields are:

+ [Additional Connection String Properties](#additional-connection-string-properties)

#### Connect via Integration Runtime

Connect via Integration Runtime is required for a Sql Server Linked Service connection. The default value is `AutoResolveIntgrationRuntime`. To use a custom runtime, type the name into the editable dropdown or select from the Azure Integration Runtimes saved in BimlFlex settings. The custom values that appear in this dropdown can be maintained in Settings under Azure - AzureIntegrationRuntime.

#### Connection String

A connection to a Sql Server linked service requires a connection string. The required properties for the connection string are Server Name, Database Name, User Name, and Password. The Linked Service connection form will provide text boxes for these values and will use them to construct the connections string.

> [!TIP]
> It is suggested that Azure Key Vault be used in place of manually entering Connection String details.

#### Authentication Method

The Sql Server Linked Service connection can use Sql Authentication or Windows Authentication. When a key vault is used in place of a connection string, Sql Authentication details should be stored in the connection string key vault and will not be required in the BimlFlex form. If Windows Authentication is used, User Name and Password are still required.

#### User Name

User Name is will be used by the Linked Service form for Sql Authentication or Windows Authentican with the Sql Server Linked Service. User Name is required - except when using Sql Authentication with Azure Key Vault in place of a manually entering a Connection String.

#### Password

Password will be used by the Linked Service form for Sql Authentication or Windows Authentican with the Sql Server Linked Service. Password is required - except when using Sql Authentication with Azure Key Vault in place of a manually entering a Connection String.

> [!TIP]
> It is suggested that Azure Key Vault be used in place of manually entering the password.

#### Additional Connection String Properties

Any additional properties entered here will be included in the Connection String. These properties should be entered the same way you want them to appear in the connection string and separated by a semicolon, e.g. `key=value;secondKey=secondValue`.

Values entered in the Additional Connection String Properties textbox will be maintained when changing linked service types. If a required property from one service type does not have a corresponding text box in the newly selected linked service type, it will appear as an additional propertie.

### Azure Data Factory Linked Services Additional Information

For additional information on ADF Linked Service types and their connection requirements see the [Azure Data Factory Sql Server Connector documentation](https://docs.microsoft.com/en-us/azure/data-factory/connector-sql-server).
