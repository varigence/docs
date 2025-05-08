---
uid: kb-using-azure-blob-files-with-an-on-prem-ssis-solution
title: Using Azure Blob Files with an On-Prem SSIS Solution
summary: Provides a scenario in which you can download flat files from Azure Blob Storage for use in an on-prem SSIS solution.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
Adapted from case: [Case: Support Case (Core): Supported SSIS-Azure Blob Storage - Dynamics 365](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=4f673637-6dd0-ee11-9078-7c1e5200bad8) \[remove before publication\]

**Problem**

The user would like to ingest flat files from Azure Blob Storage for use in an on-prem SSIS solution. They are having trouble because BimlFlex and BimlStudio don't have built-in support for this, so they are looking for guidance.

**Cause** 

Varigence tools don't have built-in support for downloading from Blob storage when using on-prem SSIS because the SSIS Azure Extension Components for Azure Blob have had performance and reliability issues for customers in the past.   

**Solution** 

Until it is appropriate to include the SSIS Azure Extension Components for Azure Blob with our software, we recommend implementation of an extension point that downloads the files from the Blob, then processes them as standard local flat files. Specifically, we recommend using the Microsoft AzCopy utility via an ExecuteProcess task.  The snippet below can be used as a starting point, but at minimum the target and AzCopy arguments will need to be adapted to the user's environment before this can be used.  We recommend that you test the AzCopy independent from BimlFlex and SSIS processing.   
 

**<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreProcess" target="" #>  
<#@ template designerbimlpath="Biml/Packages/Package/Tasks" #>  
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>**

**<!-- This can be any anything defined within the SSIS Control Flow. -->  
<#   CustomOutput.ObjectInherit = false; #>  
<#  var azCopyPath = @"C:\\BimlFlex\\AzCopy\\azcopy.exe";  
  
     var filePath = @"C:\\BimlFlex\\Source";  
  
  var azureContainer = "[https://mystorageaccount.blob.core.windows.net/mycontainer/myBlobDirectory";](https://mystorageaccount.blob.core.windows.net/mycontainer/myBlobDirectory%22; "https://mystorageaccount.blob.core.windows.net/mycontainer/myblobdirectory%22;")  
  
  var azureSasToken = "?sv=2024-02-01######################################";  
  
#>  
<ExecuteProcess Name="AZ - Copy Source Files" Executable="<#=azCopyPath#>" WorkingDirectory="<#=filePath#>" WindowStyle="Hidden" DelayValidation="true" Timeout="0" StandardErrorVariableName="User.ProcessStandardError" StandardOutputVariableName="User.ProcessStandardOutput">  
<Expressions>  
<Expression ExternalProperty="Arguments">"copy '<#=azureContainer#><#=azureSasToken#>' '<#=filePath#>'</Expression>  
</Expressions>  
</ExecuteProcess>**

**Conclusion**

We are looking forward to adding support for Azure Blob files into our SSIS offerings, but at present the tools are not reliable enough to include in BimlFlex and BimlStudio software. In the meantime, if Blob source files must be used, we recommend implementing an ADF process or using the download-and-ingest procedure outlined above.