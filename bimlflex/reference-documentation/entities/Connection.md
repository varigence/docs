---
uid: bimlflex-app-reference-documentation-Connections
title: BimlFlex App Definition for Connections
summary: Documentation of functionality within BimlFlex for Connections
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Connections

The BimlFlex [Connections](configuration editor) provide the information required to connect to data sources. Connections are also used as containers for objects and allow setting overrides. Additionally, Connections contain metadata to identify the integration stage along with data logistics execution settings.

## Overview
  
| Property | Description |
| --------- | ----------- |
|Name | The name of the Connection. This must be unique for the selected Customer.|
|ConnectionString | Connection string to be used by this connection to access the data. Please note that this connection string will be parsed at build time (in BimlStudio) if the underlying platform requires testing for object existence (e.g. using SSIS). For Cloud Connections, this connectin string is only used to import and update design metadata. A separate runtime connection for Cloud Connections is specified in BimlFlex under the Linked Service.|
|Catalog | The database name that the connection points to. For an Excel file connection this will be the worksheet name. If you work in an environment where the production database is named differently to other environments, it is recommended using the production name. For example, using AdventureWorks (Production) instead of AdventureWorks_DEV (Development).|
|RecordSource | A name or abbreviation that uniquely identifies the source of the data. This is a mandatory field for Connections with an Integration Stage of Source System. The Record Source is defined as an Ansi String of lentgh 10 data type by default, but this can be changed to any value in the Configurations screen. BimlFlex will notify the user if a length is entered that exceeds that of the defined datatype in the Configuration. The Record Source value is used throughout the BimlFlex implementation as additional data points and to support auditability. It also is used within conventions such as creation of schema- and table names. Because of this, it is often easiest to use an abbreviation and adhere to standard database object naming - e.g. no spaces and commas.|
|FilePath | The path where the files are located, in the case of a File Connection. The Biml templates will use this attribute in a &lt;ForEachFileLoop&gt; to load all files in this path / directory and that match the File Pattern.|
|FilePattern | The pattern, or wildcard, that can be used to identify which files will be loaded in the case of a File Connection. For example *.csv.|
|PersistHistory | For a Connection with the Integration Stage of Source System, this setting manages history tracking in the Persistent Staging Area (PSA) corresponding to the Connection. This requires a Persistent Staging Connection to be defined in the Project that uses the Source Connection. If this setting is disabled (but a PSA connection is configured), the PSA database only maintains the most recent change (state). This way, the PSA becomes an Operational Data Store (ODS) containing only the most recently received data but no history. Having a current-state only PSA can be useful to provide as an ODS, and can be delivered quickly using the source metadata.|
|UseTemporalTables | |
|NoOfThreads | The number of threads a data logistics process can use to split the workload at runtime using the selected connection. The default is 1. The amount of threads can be redefined at the object level. When using SSIS, this attribute is only used in the SRC – STG template with the Balance Data Distributor to allow for greater parallelism. Only define a value greater than zero if the server has enough CPU and Memory to accommodate additional threads.|
|ExcludeFromModel | |
|DataSource | Name of the server the Connection points to. This is usually omitted as a separate configuration because defining this in the Connection String is sufficient.|
|AuthenticationMethod | Indicator which Authentication Method will be used for the selected Connection.|
|UserName | The user name which is to be used in the Connection, in case Authentication Method (Named User) is selected.|
|Password | The password which is to be used in the Connection, in case Authentication Method (Named User) is selected.|
|Provider | The type of connection provider used for this connection. When using ADO.NET connections other than SQL Server this is a required field.|
|Description | Free-format additional documentation about the Connection.|
|IsCloudEnabled | Determines whether the Connection is cloud enabled for use with Azure Data Factory.|
|LS_Type | |
|LS_ConnectVia_IntegrationRuntime | The name of the Azure Data Factory (ADF) Integration Runtime (IR) that is used to access the Linked Service. This must be already preconfigured / available in ADF.|
|LS_ConnectionString | Specifies the Connection String that contains information necessary to connect to the Azure Data Factory Linked Service.|
|LS_ConnectionStringKVS_SecretName | Specifies the Name of the Key Vault Secret that contains the Connection String.|
|LS_ConnectionStringKVS_SecretVersion | Specifies the Version of the Key Vault Secret that contains the Connection String. If omitted, the most recent version is used.|
|LS_PasswordKVS_SecretName | Specifies the name of the Key Vault Secret to use for the password.|
|LS_PasswordKVS_SecretVersion | Specifies the Version of the Key Vault Secret for the password. If omitted, the most recent version is used.|
|LS_ServicePrincipalId | The Id of the client credential required to access the Linked Service.|
|LS_ServicePrincipalKey | The key required to access the Linked Service.|
|LS_ServicePrincipalKeyKVS_SecretName | Specifies the name of the Key Vault Secret to use.|
|LS_ServicePrincipalKeyKVS_SecretVersion | Specifies the Version of the Key Vault Secret for the Service Principal. If omitted, the most recent version is used.|
|LS_Tenant | Domain or Tenant Id that hosts the application.|
|LS_Username | Specifies the User Name when not using Windows Authentication.|
|LS_Password | Specifies the Password when not using Windows Authentication.|
|LS_AuthenticationMethod | Specifies the authentication method for the Azure Data Factory Linked Service.|
|LS_AccountKey | |
|LS_AccountKeyKVS_SecretName | Specifies the Name of the Key Vault Secret that contains the Account Key.|
|LS_AccountKeyKVS_SecretVersion | Specifies the Version of the Key Vault Secret that contains the Account Key. If omitted, the most recent version is used.|
|LS_Db | The name of the database to connect to.|
|LS_Credential | Specifies the credential portion of the connection string. This is done in a key/value format that is also driver-specific.|
|LS_CredentialKVS_SecretName | Specifies the Name of the Key Vault Secret that contains the Credential.|
|LS_CredentialKVS_SecretVersion | Specifies the Version of the Key Vault Secret that contains the Credential. If omitted, the most recent version is used.|
|LS_AuthenticationType | Apecifies the type of authentication that is used for accessing the ODBC data store. The supported types are Basic and Anonymous.|
|LS_Server | Specifies the name of the Server that the Azure Data Factory Linked Service will connect to.|
|LS_CredStringKVS_SecretName | Specifies the Name of the Key Vault Secret that contains the Credential String.|
|LS_CredStringKVS_SecretVersion | Specifies the Version of the Key Vault Secret that contains the Credential String. If omitted, the most recent version is used.|
|LS_EncryptedCredential | Specifies the encrypted credential that will be used to authenticate the Azure Data Factory Linked Service.|
|LS_SasUri | Specifies the Shared Access Signature URI that contains information necessary to connect to the Azure Data Factory Linked Service.|
|LS_SasUriKVS_SecretName | Specifies the Name of the Key Vault Secret that contains the Shared Access Signature (SAS) URI.|
|LS_SasUriKVS_SecretVersion | Specifies the Version of the Key Vault Secret that contains the Shared Access Signature (SAS) URI. If omitted, the most recent version is used.|
|LS_SasTokenKVS_SecretName | Specifies the Name of the Key Vault Secret that contains the Shared Access Signature (SAS) Token.|
|LS_SasTokenKVS_SecretVersion | Specifies the Version of the Key Vault Secret that contains the Shared Access Signature (SAS) Token. If omitted, the most recent version is used.|
|LS_Endpoint | URL that hosts the Azure Blob Storage.|
|LS_Url | |
|LS_DeploymentType | Specifies the type of Dynamics instance that will be used. Permitted values are Online and OnPremisesWithIfd.|
|LS_Organization | Specifies the name of the organization for the Dynamics CRM instance.|
|LS_Host | Specifies the Host Name for on-premise Dynamics CRM instances.|
|LS_ServiceUri | Specifies the address of the Dynamics instance. Typically in the form of: https://adfdynamics.crm.dynamics.com.|
|LS_Port | Specifies the port for on-premise Dynamics CRM instances. If omitted then port 443 will be used.|
|LS_SecurityToken | Specifies the Security Token to use for authentication.|
|LS_SecurityTokenKVS_SecretName | Specifies the Name of the Key Vault Secret that contains the Security Token.|
|LS_SecurityTokenKVS_SecretVersion | Specifies the Version of the Key Vault Secret that contains the Security Token. If omitted, the most recent version is used.|
|LS_ApiVersion | |
|SFDC_Url | |
|SFDC_ApiVersion | |
|SFDC_ConsumerKey | |
|SFDC_ConsumerSecret | |

## References
  
| Property | Description |
| --------- | ----------- |
|CustomerUID | Reference to the Customer that this Connection belongs to.|
|VersionUID | Reference to the Version that this Connection belongs to.|
|ConnectionTypeId | Defines the technical way the Connection will operate. This list will mirror the different types of Connections that can be defined in Biml.|
|SystemTypeId | Defines the technical System Type (e.g. SQL Server, Azure, Synapse) of the Connections. Depending on the System Type, the relevant source and target components will be chosen.|
|IntegrationStageId | The Integration Stage defines how a Connection can be used in the architecture. This is an important property of a Project as it is used to determine what template is applied to its related Objects. This information is also interpreted in the Project configuration, as it drives the possible stages for the Project. For example - if a Connection is defined with a Source System Integration Stage, and this connection is used as the source connection for a Project then this will provide different options for data processing than if the project source connection will be a Raw Data Vault stage.|
|OleDbConnectionUID | Define an OLEDB Connection for ADONET connections to enable the Execute SQL Tasks.|
|AdoNetConnectionUID | Define an ADONET Connection for OLEDB connections to enable the execution of script components to infer Dimension Keys for late-arriving or missing Dimension Keys.|
|LandingConnectionUID | Define a file landing Connection to use with cloud data movement workflows. This will normally be an Azure Blob Storage or an Azure Data Lake connection.|
|LS_ConnectionStringKVS_UID | The reference to the Azure Key Vault Linked Service that contains the Connection String secret.|
|LS_PasswordKVS_UID | The reference to the Azure Key Vault Linked Service that contains the password secret.|
|LS_ServicePrincipalKeyKVS_UID | The reference to the Azure Key Vault Linked Service that contains the Service Principal secret.|
|LS_AccountKeyKVS_UID | The reference to the Azure Key Vault Linked Service that contains the Account Key secret.|
|LS_CredentialKVS_UID | The reference to the Azure Key Vault Linked Service that contains the Credential secret.|
|LS_CredStringKVS_UID | The reference to the Azure Key Vault Linked Service that contains the Credential String secret.|
|LS_SasUriKVS_UID | The reference to the Azure Key Vault Linked Service that contains the Shared Access Signature (SAS) URI secret.|
|LS_SasTokenKVS_UID | The reference to the Azure Key Vault Linked Service that contains the Shared Access Signature (SAS) Token secret.|
|LS_SecurityTokenKVS_UID | The reference to the Azure Key Vault Linked Service that contains the Security Token secret.|

