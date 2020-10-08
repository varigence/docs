---
uid: bfx-arm-templates
name: Handling ARM Templates within BimlFlex
Summary: Description of ARM Template emission within BimlFlex based on Azure size restriction(s)
---

# Handling ARM Templates within BimlFlex

BimlFlex harnesses the power of ARM templates to allow teams to automate deployments using an agile development method to repeatedly deploy reliable infrastructure to the cloud.

## ARM Templates

Azure Resource Manager (ARM) Templates are the preferred way of deploying infrastructure-as-code to Azure.
ARM Templates define objects, data types, names, and properties within a JSON file which is then understood by the ARM API.
The template uses declarative syntax to indicate what is to be deployed without having to first write an entire sequence of programming commands.
Within the ARM template, resources are deployed and properties for resources are also specified.

ARM templates generated by BimlFlex will deploy all elements of a users Data Factory, including pipelines, linked services, datasets, and triggers.

## ARM Template Limitations

Microsoft has provided a detailed account of ARM Template best practices [here](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-best-practices).

The most significant ARM template limitation in reference to BimlFlex is the overall size of the final state template being less than 4MB.

## BimlFlex Handling of ARM Templates

When deploying a project BimlFlex emits a single ARM template which may or may not have exceed 4MB.
To adhere Microsoft best practice standards for ARM Template limitations, BimlFlex will now also emit a linked template folder (to the root folder of the project) containing individual files for individual data sets and dependency paths for the files within.

File 0 has no dependency.  
File 1 depends on File 0.  
File 2 depends on File 0 and File 1.  
File 3 ...  

BimlFlex ensures that if a file has a dependency the preceding file will have been deployed before or at the same time as the file that relies on it.

BimlFlex will also emit a Powershell script for deploying the linked templates.
Users will be required to provide additional variables within the Powershell script, such as: storage account name, storage account container name, and storage account key, among others.

ARM templates will need to be uploaded separately into Blob storage, and then referenced individually by the URL in the master template when deployed.

> [!NOTE]
> In addition to the Best Practices document above, Microsoft has published documentation on the creation, editing, and deployment of ARM templates, referenced [here](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/quickstart-create-templates-use-the-portal).