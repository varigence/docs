---
uid: using-powershell
title: Deployment Through the Azure Portal
---
# Deployment Through the Azure Portal

For a walk-through of creating a BimlFlex solution that targets ADF, review the [Synapse ADF Implementation Guide](../implementation-guides/synapse-implementation-introduction.md).

Once the Azure Data Factory (ADF) artifacts are generated the next step in the process is to deploy them.  Recommended practice is to use the automated deployment process outline in the [Powershell Deployment Guide](using-powershell.md) however all assets are provided for a manual deployment via the [Azure Portal].  This document will discusses a manual deployment of the ARM templates using the Azure Portal.

[//]: # (TODO: Add a [!NOTE] and link a Microsoft Docs article for the Azure Portal.  Refer to `using-powershell.md` for an example of this pattern.  Also ensure you add the link to the reference of Azure Portal in the paragraph above.)

[//]: # (What will follow is a series of suggestions for converting this document to a style closer to what everything else is using.  The technical article this was migrated from has many steps that don't need to be explicitly called out as bullet point items and could be casually referenced in a paragraph explaining the step or in the intro block.  Additionally the headers should break into concepts or sections that either highlight a change in process, train of thought or to communicate what BimlFlex helps with or fits in.  A lot of these steps are Azure related and easily batched together.)

[//]: # (## Template Editor)

[//]: # (TODO: Call out the steps to navigate to the editor here.)

[//]: # (## Loading the ARM Template and Parameters)

[//]: # (TODO: Discuss steps to load the file.  Highlight file location here.)

[//]: # (## Confirm, Purchase and Deploy)

[//]: # (TODO: Outline what is being created and to review the scripts for created artifacts.  Close the article out here.)

## Navigate to your Data Factory

1. Go to the [Azure Portal](https://portal.azure.com).

1. Navigate to [Deploy a custom template](https://portal.azure.com/#create/Microsoft.Template).
    <br/>
<img 
    src="images/deploy-a-custom-template.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

1. Click **Build your own temple in the editor**
    <br/>
<img 
    src="images/build-your-own-template.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

1. Click **Load File**
   <br/>
<img 
    src="images/load-template.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

1. Navigate, within your output folder, to:

      ` ...\output\DataFactories\<Setting.AzureDataFactoryName>\arm_template.json`


   > [!NOTE]
   > If there is no value specified **BimlFlex** will be used for the folder name.  It is important to note though that the actual ADF Data Factory Name will be a something like `ADF-<RandomHashValue>`.  It is recommended that you populate the configure your `Settings` and input an [AzureDataFactoryName] prior to building your ADF.

1. Click **Save**.

1. Click **Edit parameters**.
       <br/>
<img 
    src="images/edit-parameters.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

1. Click **Load File**.
  <br/>
<img 
    src="images/load-param-file.png" 
    class="border-image" 
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

The deployment of the ADF assets using the [Azure Portal] should now be successful.  Navigating to the Data Factory and opening the [ADF Authoring Tool] should now show the Pipeline(s) available to be tested and verified as needed.

>[!NOTE]
> Your Data Factory will be either be named `ADF-<HashKey>` or it will use the `Settings.AzureDataFactoryName`. 
