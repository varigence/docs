---
uid: bimlflex-release-notes
name: BimlFlex Release Notes
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up before upgrading.  
> Please email support@bimlflex.com with any installation or upgrade issues.

## BimlFlex 2020

BimlFlex 2020 is installed and upgraded through a single, consolidated, role-based installer.

### Latest Release

Build 5.0.64590.0, release date: 31 March 2020

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)  
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)  
    This installer includes the required runtime components for servers that will execute SSIS packages

## Build 5.0.64590.0, release date: 31 March 2020

### Feature Highlights

* Expanded support for Azure Data Factory
* Data Mappings visualizations and editor for BimlFlex App
* BimlCatalog Operational Reporting in BimlFlex App
* Restructure BimlCatalog to allow for more agnostic logging
* Additional Extension Points for additional management of bespoke processing requirements
* Additional support script creation

#### Expanded support for Azure Data Factory

BimlFlex now has full support for Azure Data Factory (ADF) workflows for Azure Synapse, Azure SQL DB and Snowflake target data warehouses.

This includes full support to build Azure ARM templates for direct deployment of the pipelines to Azure as well as json file generation for individual deployments and deployment through the ADF devops git integration.

More information on ADF here: @bimlflex-adf-overview

#### Data Mappings visualizations and editor for BimlFlex App

The BimlFlex App now supports Source to target data mapping visualizations and direct metadata manipulation. This allows easy visualization of the source to target mappings on a column level.

More informmation on the BimlFlex app here: @bimlflex-app-introduction

#### BimlCatalog Operational Reporting in BimlFlex App

The BimlFlex app has been updated with BimlCatalog Operational Reporting capabilities.

These reports allow direct access to the logging in the BimlCatalog from the app and help with both development and operational insights

More information on operational reporting here: @bimlflex-operational-reporting

#### Changes to BimlCatalog

The BimlCatalog schema has been updated with agnostic table names.

Reporting views and Stored Procedures are unchanged.

ADF Stored Procedures have been updated to better support logging and orchestration.

More information on the BimlCatalog here: @bimlflex-bimlcatalog

#### Additional Extension Points for additional management of bespoke processing requirements

Several new Extension Points have been added to BimlFlex.

Many are targetting SQL Script processing, allowing better flexibility for cloud implementations and ADF workflows.

#### Additional support script creation

BimlStudio now creates additional build and deploy scripts for easy automation.

When building a project, the output folder now contains the following two new folders with the new artifacts:

* `Build`
    Automated build scripts and settings.  
    Separate build script for SSDT projects for scenarios like SSIS where there is a dependency on tables before build
* `Deploy`
    PowerShell scripts for building SSDT Projects and deploying SSDT and SSIS Projects

#### Additional Release Notes

* Add: New Project settings dialog in BimlStudio. This allows easier access to control Build target and method as well as local project configurations.
* Update: The default build versions for new projects have been updated to SQL Server 2017
* Add: Support for SQL Server 2019 SSIS custom components. All custom components are now available in a SQL Server 2019 compatible version.
* Add: Support for COSYROC Excel+ Source component. Ingest data from an Excel source file using this new component. More information in the dedicated Excel source documentation here @bimlflex-source-excel-plus
* Add: Additional support for archiving files in Azure Data Lake Storage (Azure Blob storage with hierarchical namespaces). A new utility app is available to communicate with the blob storage in a supported format while awaiting similar support in AzCopy
* Add: New Setting: `SingleRowDelta` - for sources where it is known that there is only a single row per key per delta load so that the load process is optimized and row compression is not done
* New Extension Points: `RdvPreProcessSql`, `RdvPostProcessSql` allows injection of SQL logic in the RDV load SQL Stored Procedures.

> [!NOTE]
> change in behavior for Settings descriptions
> The descriptions for all settings for all metadata customers will now be updated to the template descriptions on each update. Previously BimlFlex would maintain any custom descriptions. As the descriptions are updated as new features are added they must be maintained to properly reflect the current BimlFlex functionality. This is a change in behavior. If custom descriptions are maintained, please retain them outside the settings table before performing the update.

download links to this build:

* [bimlflexdevsetup_5.0.64590.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64590.0.exe)
* [bimlflexruntimesetup_5.0.64590.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64590.0.exe)

Legacy Release Notes:

* @bimlflex-release-notes-2019
* @bimlflex-release-notes-2018
