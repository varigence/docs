---
uid: bfx-azure-function-bridge
name: The BimlFlex utility Azure Function Bridge
Summary: The BimlFlex generated Azure Function Bridge provides bridge features to support file operations and to support calls to unsupported technology or services.
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Azure Function Bridge

For scenarios where there is no direct support for functionality in the Azure Data Factory feature set, BimlFlex uses an included Azure Function Bridge ('Function Bridge') as a means to provide the missing functionality.

## Functionality

The Function Bridge provides the following functionality:

* File processing features used to provide functionality, such as moving a file in Blob storage from a staging location to an archive location
* Call queries or procedures on platforms that are not (yet) natively supported by Azure Data Factory in exception cases

The configuration of the Function Bridge is managed in the BimlFlex App, in the [`Function Bridge Name` Setting](xref:bimlflex-app-reference-documentation-setting-AzureFunctionBridgeName). This includes the name of the intended Function Bridge resource in Azure. If this information is not provided, the ARM template will include generated names.

Because generated names will change on each build, which is likely to create redundant resources in the Azure Resource Group. It is recommended to properly define the `Function Bridge Name`. This, and other supporting settings are available in the [`Azure` Settings Group](xref:bimlflex-app-reference-documentation-settings-index#azure).

Deployment of the Function Bridge is automatically provided by the ARM templates that BimlFlex generates. The Function Bridge will have a corresponding Linked Service in the Azure Data Factory that has been defined for the Project.

## Azure Resources

The following Azure resources are deployed as part of the Function Bridge deployment, when deployed through the BimlFlex ARM template:

* Azure Function, which will be named according to the specified `Function Bridge Name`. This name must be globally unique
* Applications Insights, named according to the `Function Bridge Name` with '-AI' appended
* App Service plan, named according to the F`Function Bridge Name` with '-WF' appended
* Blob storage account, Named according to the `Function Bridge Name`, but converted to lowercase letters/numbers, excluding any other characters to conform to Storage Account resource naming requirements

In the deployed Data Factory, there will be a Linked Service to the Azure Function that acts as the Function Bridge. This Azure Function will point to the defined Function Bridge URL using the defined authentication mechanism. The Linked Service is used by the ADF pipelines when activities are required that are not supported out-of-the-box in Azure Data Factory. This will be fully managed by the BimlFlex patterns.
