---
uid: bimlflex-adf-continuous-integration-and-continuous-delivery
title: BimlFlex Continuous Integration and Continuous Delivery
summary: Guide for CI/CD for Azure Data Factory using command line scripts and changes through a build server pipeline
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Continuous Integration and Continuous Delivery

> [!NOTE]
> The following guide is from tailored specifically for Azure Data Factory.  
> For a details and considerations on implementing CI/CD in SSIS see the [BimlFlex CI/CD for SSIS](xref:bimlflex-ssis-continuous-integration-and-continuous-delivery).
> A generic platform-independent overview of CI/CD concepts is available in the more generic [CI/CD section](xref:bimlflex-continuous-integration-and-delivery).

## Special considerations for Azure Data Factory

As part of the BimlStudio build process, BimlFlex will provide all artefacts to deploy data logistics to Azure Data Factory (ADF). These are located in the configured `output` directory for the BimlStudio project.

The output directory will contain a `deploy` directory that contains Powershell scripts that automatically deploy the contents to Azure Data Factory.

The output directory also contains the ARM templates, as well as individual JSON files for each artifacts, that can be used to automate deployment.

## Manual deployment using Azure Data Factory

ADF supports manual uploading of contents specified in Azure Resource Manager (ARM) templates / files. This can be done using the ARM upload feature. Additional information [is provided by Microsoft](https://docs.microsoft.com/en-us/azure/data-factory/quickstart-create-data-factory-resource-manager-template).

## Deploying to a Git-configured Azure Data Factory

Another approach is to [connect ADF to an Azure Git repository](https://docs.microsoft.com/en-us/azure/data-factory/source-control). This is a feature that Microsoft provides as part of ADF, and can be used to directly link the data factory to a Git repository.

This means that any artifacts that are committed will be made visible in the data factory.

The JSON files that BimlFlex generates can be moved or copied into the directory that contains the Git repository. For this, the following directories must be copied:

* `dataset`
* `linkedService`
* `pipeline`

All three directories are located in the /output/DataFactories/`{datafactory name}`/multipleJsonFiles/ directory.

The copy (or move) step from the BimlStudio output directory to the Git repository, and subsequence commits, can be automated as part of the build pipeline. For example, by using a script modified from the below example:

Sample File: `CopyOutputFiles.ps1`

```batch
# (c) Varigence 2022
# https://varigence.com/BimlFlex
# Update the path to match the local installation

$sourceRoot = "<>\output\"
$destinationRoot = "<Git repository>\"
$dataFactoryName = "<data factory name>"
$databaseProjectName = "<database project name>"

Remove-Item -Path $destinationRoot\DataFactories\$dataFactoryName\dataset\ -Force -Recurse
Remove-Item -Path $destinationRoot\DataFactories\$dataFactoryName\linkedservice\ -Force -Recurse
Remove-Item -Path $destinationRoot\DataFactories\$dataFactoryName\pipeline\ -Force -Recurse

Copy-Item -Path $sourceRoot\DataFactories\$dataFactoryName\multipleJsonFiles\linkedservice -Recurse -Destination $destinationRoot\DataFactories\$dataFactoryName\ -Container -Force
Copy-Item -Path $sourceRoot\DataFactories\$dataFactoryName\multipleJsonFiles\dataset -Recurse -Destination $destinationRoot\DataFactories\$dataFactoryName\ -Container -Force
Copy-Item -Path $sourceRoot\DataFactories\$dataFactoryName\multipleJsonFiles\pipeline -Recurse -Destination $destinationRoot\DataFactories\$dataFactoryName\ -Container -Force

Remove-Item -Path $destinationRoot\DatabaseProjects\$databaseProjectName\ -Force -Recurse
Copy-Item -Path $sourceRoot\SSDT\Current\$databaseProjectName\ -Filter "*.*" -Recurse -Destination $destinationRoot\DatabaseProjects\ -Container -Force
```

> [!NOTE]
> In the example above, the SSDT project is also copied. This is because the entire database project (structure) can also be built and deployed using build pipelines. The recommended approach is to keep these artifacts in the same Git repository.