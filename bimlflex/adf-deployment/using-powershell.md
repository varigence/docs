## Deployment Through Powershell

For a walkthrough of creating a BimlFlex solution that targets ADF, review the [Synapse ADF Implementation Guide](../implementation-guides/synapse-implementation-introduction.md).

You have generated your Azure Data Factory (ADF) assets, and are ready to deploy. This document will discuss deployment using ARM templates by using powershell. For information on how to deploy using the Azure Portal, review our [Azure Portal Deployment Guide](using-azure-portal.md).

## Prerequisites

You need to ensure that you have your **arm_template.json** and **arm_template_parameters.json** files in your project's output folder. The path will look like this: 
` ...\output\DataFactories\\<Setting.AzureDataFactoryName>\arm_template.json`
   >[!NOTE]
   > The default value for <Setting.AzureDataFactoryName> is **BimlFlex**.

Unless you use the Azure Cloud Shell to deploy templates, then you also need to [install Azure PowerShell](https://docs.microsoft.com/en-us/powershell/azure/get-started-azureps) and [connect to Azure](https://docs.microsoft.com/en-us/powershell/module/az.accounts/connect-azaccount).

## Deploying with Powershell

In order to deploy your ARM template to your resource group, you need to use the following command:

```powershell
New-AzResourceGroupDeployment -Name <Name> -ResourceGroupName <YourResourceGroupName> -TemplateFile <arm_template.json path> -TemplateParameterFile <arm_template_parameters.json path>.json
```
|Property|Description|
|-|-|
|Name|The name of your deployment.|
|ResourceGroupName| The resource group that you would like to deploy the ADF assets to.|
|TemplateFile| The arm_template.json file path that we obtained earlier.|
|TemplateParameterFile| The arm_template_parameter.json file path that we obtained earlier.

Once you run this command you will see output similar to:

```
DeploymentName          : MyBimlFlexAdfDeployment
ResourceGroupName       : BimlFlexResourceGroup
ProvisioningState       : Succeeded
Timestamp               : 3/2/2020 10:52:29 AM
Mode                    : Incremental
TemplateLink            : 
Parameters              : 
                          Name                   Type                       Value     
                          =====================  =========================  ==========
                          dataFactoryName        String                     <data factory name>
                          dataFactoryLocation    String                     East US   
                          storageAccountName     String                     <storage account name>
                          storageAccountKey      SecureString                    
                          
Outputs                 : 
DeploymentDebugLogLevel : 
```

You have now successfully deployed your ADF assets using the Azure Portal. You can start your pipeline(s) and verify your deployment inside of the ADF authoring tool.