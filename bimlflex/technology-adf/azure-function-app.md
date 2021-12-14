---
uid: bfx-azure-function-app
name: The BimlFlex utility Azure Function App
Summary: The BimlFlex generated Azure Function App provides bridge features to support file operations and queries on Snowflake
varigenceProduct:eProduct: BimlFlex
varigenceArticleType: Conceptual
---

# BimlFlex Azure Function App

For scenarios where there is no direct support for functinoality in the Azure Data Factory feature set, BimlFlex uses an included Azure Function App as a bridge to provide the missing functionality.

## Bridge Functionality

This Azure Function App provides the following bridging functionality

* File processing features  
    used to provide features such as moving a file in Blob storage from a staging location to an archive location
* Snowflake Query support features  
    used to provide the ability to run queries and call Stored Procedures on a Snowflake target data warehouse

Configuration of this Azure Function App is provided in the metadata. If no metadata is provided, the ARM template will include generated names. These generated names will change on each build. To properly define the Azure Function Name and its corresponding Azure resource names, populate the metadata with the desired definitions.

Deployment of this Azure Function is provided in the generated ARM templates. The function has a corresponding Linked Service in the Data Factory

## Deployed Azure Resources

The following Azure resources are deployed as part of the Azure Function App deployment when deployed through the BimlFlex ARM template:

* Azure Function App  
    Named according to the Function Bridge Name attribute in the metadata Settings > Azure > Data Function Bridge > Function Bridge Name. This name is globally unique.
* Applications Insights  
    Named according to the Function Bridge Name with '-AI' appended
* App Service plan  
    Named according to the Function Bridge Name with '-WF' appended
* Blob storage account
    Named according to the Function Bridge Name, all lowercase letters/numbers, no other characters included

In the deployed Data Factory there will be a Linked Service to the Azure Function, poiinting to the defined function App URL and using the defined authentication mechanism. This Linked Service is used by the Pipelines when it needs activities that are not supported out-of-the-box in Azure Data Factory.

## Related Metadata Attributes

The name and behaviour of the Azure Function App is defined in the 

| Attribute Name | Description |
| -------------- | ----------- |
| Function Bridge Name | The default Azure Function Bridge Name to use. |
| Function Bridge Key | The default Azure Function Bridge Key to use for authentication between the Azure Data Factory and the Azure Function App. |
| Use Function Bridge Key Vault | Determines if the Azure Function Bridge uses the Azure Key Vault specified in the "Azure Function Bridge Key Vault Name" setting. Alternatively, the Azure Function Bridge can instantiate the Linked Service with the Key directly in the Data Factory using the default settings. |
| Function Bridge Key Vault Name | The name of the Azure Key Vault used by Azure Data Factory to access the function key for the Azure Function Bridge when the "Azure Function Bridge Use Key Vault" setting is enabled. |
| Function Bridge Key Vault Secret | The name of the Azure Key Vault secret used by Azure Data Factory to access the function key for the Azure Function Bridge when the "Azure Function Bridge Use Key Vault" setting is enabled. |
| Function Bridge Key Vault Secret Version | An optional Azure Key Vault secret version used by Azure Data Factory to access the function key for the Azure Function Bridge when the "Azure Function Bridge Use Key Vault" setting is enabled. If not specified, the current version of the secret will be used. |
