## Deployment through the SSIS Deployment Wizard

For a walkthrough of creating a BimlFlex solution that targets ADF, review the [Synapse ADF Implementation Guide](../implementation-guides/synapse-implementation-introduction.md).

You have generated your Azure Data Factory (ADF) assets, and are ready to deploy. This document will discuss deployment using ARM templates within the Azure Portal. For information on how to deploy using powershell, review our [Powershell Deployment Guide](using-powershell.md).

## Navigate to your Data Factory

1. Go to the [Azure Portal](https://portal.azure.com).

1. Navigate to [Deploy a custom template](https://portal.azure.com/#create/Microsoft.Template).
    <br/>
<img 
    src="images/deploy-a-custom-template.png" 
    class="border-image image-width-100" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

1. Click **Build your own temple in the editor**
    <br/>
<img 
    src="images/build-your-own-template.png"
    class="border-image image-width-100"  
    style="border: 1px solid #CCC;"  
    title="Apply Data Type Mappings Dialog Box"  
/>

1. Click **Load File**
   <br/>
<img 
    src="images/load-template.png" 
    class="border-image image-width-100" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

1. Navigate, within your output folder, to:

      ` ...\output\DataFactories\<Setting.AzureDataFactoryName>\arm_template.json`


> [!NOTE]
   > The default value for <Setting.AzureDataFactoryName> is **BimlFlex**

1. Click **Save**.

1. Click **Edit parameters**.
       <br/>
<img 
    src="images/edit-parameters.png" 
    class="border-image image-width-100" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

1. Click **Load File**.
  <br/>
<img 
    src="images/load-param-file.png" 
    class="border-image image-width-100" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>
    > [!NOTE]
    > Remember the value for the **keyVaultName**.  We will need to update BimlFlex with this value after deployment.

1. Navigate to:
    
     `...\output\DataFactories\\<Setting.AzureDataFactoryName>\arm_template_parameters.json`

1. Click **Save**.

1. Choose **Resource Group**.

1. Review and agree to the terms and conditions.

1. Click **Purchase**.

1. Wait for deployment to complete.

Once deployment has completed, you can go to your resource group, and verify that your Data Factory was created and is deployed.

   >[!NOTE]
   > Your Data Factory will be either be named `ADF-<HashKey>` or it will use the `Settings.AzureDataFactoryName`. 

You have now successfully deployed your ADF assets using the Azure Portal. You can start your pipeline(s) inside of the ADF authoring tool.