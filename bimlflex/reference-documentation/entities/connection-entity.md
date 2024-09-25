---
uid: bimlflex-reference-documentation-connection-entity
title: BimlFlex Definition for Connections
summary: Documentation of functionality within BimlFlex for Connections
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Connections

The BimlFlex [**Connections**](xref:bimlflex-connection-editor) provide the information required to connect to data sources. Connections are also used as containers for objects and allow setting overrides. Additionally, Connections contain metadata to identify the integration stage along with data logistics execution settings.

## Overview
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Name | The name of the Connection. This must be unique for the selected Customer.|
|Connection String | Connection string to be used by this connection to access the data. Please note that this connection string will be parsed at build time (in BimlStudio) if the underlying platform requires testing for object existence (e.g. using SSIS). For Cloud Connections, this connectin string is only used to import and update design metadata. A separate runtime connection for Cloud Connections is specified in BimlFlex under the Linked Service.|
|Catalog | The database name that the connection points to. For an Excel file connection this will be the worksheet name. If you work in an environment where the production database is named differently to other environments, it is recommended using the production name. For example, using AdventureWorks (Production) instead of AdventureWorks_DEV (Development).|
|Record Source | A name or abbreviation that uniquely identifies the source of the data. This is a mandatory field for Connections with an Integration Stage of `Source System`. The Record Source is defined as an Ansi String of lentgh 10 data type by default, but this can be changed to any value in the Configurations screen. BimlFlex will notify the user if a length is entered that exceeds that of the defined datatype in the Configuration. The Record Source value is used throughout the BimlFlex implementation as additional data points and to support auditability. It also is used within conventions such as creation of schema- and table names. Because of this, it is often easiest to use an abbreviation and adhere to standard database object naming - e.g. no spaces and commas.|
|File Path | The path where the files are located. Only applies to a Connection that has the Connection Type of File. The Biml templates will use this attribute in a &lt;ForEachFileLoop&gt; to load all files in this path / directory and that match the File Pattern.|
|File Pattern | The pattern, or wildcard, that can be used to identify which files will be loaded. For example *.csv. Only applies to a Connection that has the Connection Type of `File`.|
|External Location | The external storage location associated with the connection.|
|Persist History | For a Connection with the Integration Stage of Source System, this setting manages history tracking in the Persistent Staging Area (PSA) corresponding to the Connection. This requires a Persistent Staging Connection to be defined in the Project that uses the Source Connection. If this setting is disabled (but a PSA connection is configured), the PSA database only maintains the most recent change (state). This way, the PSA becomes an Operational Data Store (ODS) containing only the most recently received data but no history. Having a current-state only PSA can be useful to provide as an ODS, and can be delivered quickly using the source metadata.|
|Use Temporal Tables | Temporal tables (also known as system-versioned temporal tables) supports providing data as it was at an historical point in time, rather than only showing the data available at the current point in time. By enabling Temporal Tables in BimlFlex, the Objects belonging to the selected Connection will be created using Temporal Table syntax. This enables data to be be queried at a specific point-in-time following the supported SQL Server syntax. In BimlFlex, this is only supported for Persistent Staging Area connections, and only applies to SQL Server database (either on-premise, or made accessible via a self-hosted integration runtime), Managed Instance, or Azure SQL databases.|
|Threads | The number of threads a data logistics process can use to split the workload at runtime using the selected connection. The default is 1. The amount of threads can be redefined at the object level. When using SSIS, this attribute is only used in the SRC – STG template with the Balance Data Distributor to allow for greater parallelism. Only define a value greater than zero if the server has enough CPU and Memory to accommodate additional threads.|
|Exclude from Model | Hide the Connection from the model. Can still be seen if the user has Show Excluded enabled.|
|Display Folder | Display Folder is used for grouping Connections and their Datasets.|
|Data Source | Name of the server the Connection points to. This is usually omitted as a separate configuration because defining this in the Connection String is sufficient.|
|Authentication Method | Indicator which Authentication Method will be used for the selected Connection.|
|User Name | The user name which is to be used in the Connection, in case Authentication Method (Named User) is selected.|
|Password | The password which is to be used in the Connection, in case Authentication Method (Named User) is selected.|
|Provider | The type of connection provider used for this connection. When using ADO.NET connections other than SQL Server this is a required field.|
|Description | Free-format additional documentation about the Connection.|
|Cloud Enabled | Determines whether the Connection is cloud enabled for use with Azure Data Factory.|
|Linked Service Type | The type of Linked Service that will be generated for ADF, e.g. the connector used. For example Data Lake Gen2, SQL Server, or Azure Synapse Analytics.|
|Connect via Integration Runtime | The name of the Azure Data Factory (ADF) Integration Runtime (IR) that is used to access the Linked Service. This must be already preconfigured / available in ADF.|
|Linked Service Connection String | Specifies the Connection String that contains information necessary to connect to the Azure Data Factory Linked Service.|
|Linked Service Connection String Key Vault Secret Name | Specifies the name of the Key Vault Secret that contains the Connection String.|
|Linked Service Connection String Key Vault Secret Version | Specifies the Version of the Key Vault Secret that contains the Connection String. If omitted, the most recent version is used.|
|Linked Service Password Key Vault Secret Name | Specifies the name of the Key Vault Secret to use for the password.|
|Linked Service Password Key Vault Secret Version | Specifies the Version of the Key Vault Secret for the password. If omitted, the most recent version is used.|
|Service Principal Id | The Id of the client credential required to access the Linked Service.|
|Service Principal Key | The key required to access the Linked Service.|
|Linked Service Principal Key Vault Secret Name | Specifies the name of the Key Vault Secret to use.|
|Linked Service Principal Key Vault Secret Version | Specifies the Version of the Key Vault Secret for the Service Principal. If omitted, the most recent version is used.|
|Tenant | Domain or Tenant Id that hosts the application.|
|Linked Service User Name | Specifies the User Name when not using Windows Authentication.|
|Linked Service Password | Specifies the Password when not using Windows Authentication.|
|Linked Service Authentication Method | Specifies the authentication method for the Azure Data Factory Linked Service.|
|Storage Account Key | The acccess key used to authenticate to the specified storage account name or endpoint.|
|Linked Service Account Key Vault Secret Name | Specifies the name of the Key Vault Secret that contains the Account Key.|
|Linked Service Account Key Vault Secret Version | Specifies the Version of the Key Vault Secret that contains the Account Key. If omitted, the most recent version is used.|
|Database Name | The name of the database to connect to using the Linked Service.|
|Linked Service Credential | Specifies the credential portion of the connection string. This is done in a key/value format that is also driver-specific.|
|Linked Service Credential Key Vault Secret Name | Specifies the Name of the Key Vault Secret that contains the Credential.|
|Linked Service Credential Key Vault Secret Version | Specifies the Version of the Key Vault Secret that contains the Credential. If omitted, the most recent version is used.|
|Authentication Type | Apecifies the type of authentication that is used for accessing the ODBC data store. The supported types are Basic and Anonymous.|
|Server Name | Specifies the name of the Server that the Azure Data Factory Linked Service will connect to.|
|Linked Service Credential String Key Vault Secret Name | Specifies the Name of the Key Vault Secret that contains the Credential String.|
|Linked Service Credential String Key Vault Secret Version | Specifies the Version of the Key Vault Secret that contains the Credential String. If omitted, the most recent version is used.|
|Linked Service Encryped Credential | Specifies the encrypted credential that will be used to authenticate the Azure Data Factory Linked Service.|
|SAS URL | Specifies the Shared Access Signature URI that contains information necessary to connect to the Azure Data Factory Linked Service.|
|Linked Service SAS URI Key Vault Secret Name | Specifies the Name of the Key Vault Secret that contains the Shared Access Signature (SAS) URI.|
|Linked Service SAS URI Key Vault Secret Version | Specifies the Version of the Key Vault Secret that contains the Shared Access Signature (SAS) URI. If omitted, the most recent version is used.|
|Linked Service SAS Token Key Vault Secret Name | Specifies the Name of the Key Vault Secret that contains the Shared Access Signature (SAS) Token.|
|Linked Service SAS Token Key Vault Secret Version | Specifies the Version of the Azure Key Vault (AKV) Secret that contains the Shared Access Signature (SAS) Token. If omitted, the most recent version is used.|
|Endpoint Suffix | URL that hosts the Azure Blob Storage.|
|Linked Service Url | Specify the URL of the instance, API or endpoint to connect to (e.g. https://login.salesforce.com for Salesforce).|
|Linked Service Deployment Type | Specifies the type of Dynamics instance that will be used. Permitted values are Online and OnPremisesWithIfd.|
|Organization Name | Specifies the name of the organization for the Dynamics CRM instance.|
|Host | Specifies the Host Name for on-premise Dynamics CRM instances.|
|Service Uri | Specifies the address of the Dynamics instance. Typically in the form of: https://adfdynamics.crm.dynamics.com.|
|Port | Specifies the port for on-premise Dynamics CRM instances. If omitted then port 443 will be used.|
|Enable SSL | Enable Secure Socket Layer (SSL) as a property for the generated Linked Service.|
|Enable Server Certificate Validation | Enable the validation of the security certificate as a property for the generated Linked Service.|
|SSH Host Key Validation | Skip the Host Key Valiation for the generated Linked Service.|
|SSH Host Key Finger-print | Ensure that the Host Key Fingerprint is applied as property for Linked Service SSH connections.|
|Linked Service Passphrase | The passphrase to be used for the Linked Service.|
|Linked Service Pass Phrase Key Vault Secret Name | Specifies the Name of the Key Vault Secret that contains the Pass Phrase.|
|Linked Service Pass Phrase Key Vault Secret Version | Specifies the Version of the Key Vault Secret that contains the Pass Phrase. If omitted, the most recent version is used.|
|Private Key Type | The type of the private key used in this connection.|
|Private Key Content | The way the Private Key information is provided for the Linked Service.|
|Linked Service PrivateKey Content Key Vault Secret Name | Specifies the Name of the Key Vault Secret that contains the PrivateKey Content.|
|Linked Service PrivateKey Content Key Vault Secret Version | Specifies the Version of the Key Vault Secret that contains the PrivateKey Content. If omitted, the most recent version is used.|
|Linked Service Private Key Path | The location of the Private Key for the Linked Service.|
|Security Token | Specifies the Security Token to use for authentication.|
|Linked Service Security Token Key Vault Secret Name | Specifies the Name of the Key Vault Secret that contains the Security Token.|
|Linked Service Security Token Key Vault Secret Version | Specifies the Version of the Key Vault Secret that contains the Security Token. If omitted, the most recent version is used.|
|Linked Service Salesforce API Version | For Salesforce Connections only. Specify the Salesforce REST/Bulk API version to use, e.g. 52.0.|
|Access Token | The access token for connecting to Databricks.|
|Databricks Access Token KVS Secret Name | The name of the Key Vault Secret containing the Databricks access token.|
|Databricks Access Token KVS Secret Version | The version of the Key Vault Secret containing the Databricks access token.|
|Workspace Resource ID | The resource identifier for the Databricks Workspace.|
|Existing Cluster ID | The identifier for an existing Databricks cluster that this connection uses.|
|Existing Pool ID | The identifier for a Databricks instance pool.|
|Cluster Version | The version of Databricks runtime for a new cluster.|
|Cluster Node Type | The node type for a new Databricks cluster.|
|Worker Option | Configuration options for creating a new Databricks cluster.|
|Workers | Specifies the number of worker nodes in the Databricks cluster.|
|Cluster Spark Config | Configuration settings for the Spark session on the Databricks cluster.|
|Cluster Spark Environment Variables | Environment variables for the Spark session on the Databricks cluster.|
|Cluster Custom Tags | Custom tags associated with the Databricks cluster.|
|Databricks Init Scripts | Scripts to run when the Databricks cluster is initialized.|
|Cluster Log Dbfs Destination | Destination path where the logs of Databricks cluster are stored.|
|Salesforce Service Url | For Salesforce Connections only, this is the URL or endpoint to connect to the Salesforce service.|
|API Version | For Salesforce Connections only. Specify the Salesforce REST/Bulk API version to use, e.g. 52.0.|
|Consumer Key | For Salesforce Connections only, the consumer key is used to authenticate to Salesforce together with the consumer secret.|
|Consumer Secret | For Salesforce Connections only, the consumer secret is used to authenticate to Salesforce together with the consumer key.|

## References
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this Connection belongs to.|
|Version | Reference to the Version that this Connection belongs to.|
|Connection Type | Defines the technical way the Connection will operate. This list will mirror the different types of Connections that can be defined in Biml.|
|System Type | Defines the technical System Type (e.g. SQL Server, Azure, Synapse) of the Connection.|
|Integration Stage | The Integration Stage defines how a Connection can be used in the architecture. This is an important property of a Connection as it is used to determine what template is applied to its related Objects. This information is also interpreted in the Project configuration, as it drives the possible stages for the Project. For example - if a Connection is defined with a Source System Integration Stage, and this connection is used as the source connection for a Project then this will provide different options for data processing than if the project source connection will be a Raw Data Vault stage.|
|OLEDB Connection | Define an OLEDB Connection for ADONET connections to enable the Execute SQL Tasks.|
|ADONET Connection | Define an ADONET Connection for OLEDB connections to enable the execution of script components to infer Dimension Keys for late-arriving or missing Dimension Keys.|
|Linked Service Connection String Key Vault | The reference to the Azure Key Vault Linked Service that contains the Connection String secret.|
|Linked Service Password Key Vault | The reference to the Azure Key Vault Linked Service that contains the password secret.|
|Linked Service Principal Key Vault | The reference to the Azure Key Vault Linked Service that contains the Service Principal secret.|
|Linked Service Account Key Vault | The reference to the Azure Key Vault Linked Service that contains the Account Key secret.|
|Linked Service Credential Key Vault | The reference to the Azure Key Vault Linked Service that contains the Credential secret.|
|Linked Service Credential String Key Vault | The reference to the Azure Key Vault Linked Service that contains the Credential String secret.|
|Linked Service SAS URI Key Vault | The reference to the Azure Key Vault (AKV) Linked Service that contains the Shared Access Signature (SAS) URI secret.|
|Linked Service SAS Token Key Vault | The reference to the Azure Key Vault Linked Service that contains the Shared Access Signature (SAS) Token secret.|
|Passphrase KVS User ID | The unique identifier for the Key Vault Secret associated with the passphrase.|
|Private Key Content KVS User ID | The unique identifier for the Key Vault Secret associated with the private key content.|
|Linked Service Security Token Key Vault | The reference to the Azure Key Vault Linked Service that contains the Security Token secret.|
|Databricks Access Token KVS User ID | The unique identifier for the Key Vault Secret associated with the Databricks access token.|

