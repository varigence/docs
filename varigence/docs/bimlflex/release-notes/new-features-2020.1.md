---
sidebar_position: 9
title: BimlFlex 2020 R1 New Features
---
# New Features in BimlFlex 2020

## Feature Highlights

* Expanded support for Azure Data Factory
* Data Mappings visualizations and editor for BimlFlex App
* BimlCatalog Operational Reporting in BimlFlex App
* Additional Extension Points for bespoke processing requirements
* Additional automation script creation for build and deployment
* Support for Microsoft Dynamics CRM as source in Azure Data Factory projects

### Expanded support for Azure Data Factory

BimlFlex now has full support for Azure Data Factory (ADF) workflows for Azure Synapse, Azure SQL DB and Snowflake target data warehouses.

This includes full support to build Azure ARM templates for direct deployment of the pipelines to Azure as well as json file generation for individual deployments and deployment through the ADF DevOps git integration.

More information on ADF here: [ADF Deployment Overview](adf-deployment-overview)

### Data Mappings visualizations and editor for BimlFlex App

The BimlFlex App now supports Source to target data mapping visualizations and direct metadata manipulation. This allows easy visualization of the source to target mappings on a column level.

More information on the BimlFlex app here: [Metadata Editors Overview](metadata-editors-overview)

### BimlCatalog Operational Reporting in BimlFlex App

The BimlFlex app has been updated with BimlCatalog Operational Reporting capabilities.

These reports allow direct access to the logging in the BimlCatalog from the app and help with both development and operational insights

More information on operational reporting here: [BimlFlex Operational Reports](bimlflex-operational-reports)

### Additional Extension Points for bespoke processing requirements

Several new Extension Points have been added to BimlFlex.

Many are targeting SQL Script processing, allowing better flexibility for cloud implementations and ADF workflows.

### Additional automation script creation for build and deployment

BimlStudio now creates additional build and deploy scripts for easy automation.

When building a project, the output folder now contains the following two new folders with the new artifacts:

* `Build`
    Automated build scripts and settings.  
    Separate build script for SSDT projects for scenarios like SSIS where there is a dependency on tables before build
* `Deploy`
    PowerShell scripts for building SSDT Projects and deploying SSDT and SSIS Projects

#### Support for Microsoft Dynamics CRM as source in Azure Data Factory projects

New Feature: BimlFlex support for cloud and On-Premises Microsoft Dynamics CRM sources for Azure Data Factory projects.

This allows direct metadata import from Dynamics CRM into the BimlFlex metadata through the Metadata Import function in the BimlFlex App. Modeling and metadata management is performed as needed and the pipelines to load the data from the source is part of the created Azure Data Factory pipeline
