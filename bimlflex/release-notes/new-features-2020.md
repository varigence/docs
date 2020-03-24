---
uid: bimlflex-2020-new-features
name: New Features in BimlFlex 2020
---
# New Features in BimlFlex 2020

## Feature Highlights

* Expanded support for Azure Data Factory
* Data Mappings visualizations and editor for BimlFlex App
* BimlCatalog Operational Reporting in BimlFlex App
* Additional Extension Points for additional management of bespoke processing requirements
* Additional support script creation

### Expanded support for Azure Data Factory

BimlFlex now has full support for Azure Data Factory (ADF) workflows for Azure Synapse, Azure SQL DB and Snowflake target data warehouses.

This includes full support to build Azure ARM templates for direct deployment of the pipelines to Azure as well as json file generation for individual deployments and deployment through the ADF devops git integration.

More information on ADF here: @bimlflex-adf-overview

### Data Mappings visualizations and editor for BimlFlex App

The BimlFlex App now supports Source to target data mapping visualizations and direct metadata manipulation. This allows easy visualization of the source to target mappings on a column level.

More informmation on the BimlFlex app here: @bimlflex-app-introduction

### BimlCatalog Operational Reporting in BimlFlex App

The BimlFlex app has been updated with BimlCatalog Operational Reporting capabilities.

These reports allow direct access to the logging in the BimlCatalog from the app and help with both development and operational insights

More information on operational reporting here: @bimlflex-operational-reporting

### Additional Extension Points for additional management of bespoke processing requirements

Several new Extension Points have been added to BimlFlex.

Many are targetting SQL Script processing, allowing better flexibility for cloud implementations and ADF workflows.

### Additional support script creation

BimlStudio now creates additional build and deploy scripts for easy automation.

When building a project, the output folder now contains the following two new folders with the new artifacts:

* `Build`
    Automated build scripts and settings.  
    Separate build script for SSDT projects for scenarios like SSIS where there is a dependency on tables before build
* `Deploy`
    PowerShell scripts for building SSDT Projects and deploying SSDT and SSIS Projects
