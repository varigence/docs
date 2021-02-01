---
uid: bimlflex-trial-installing-custom-ssis-components
title: Installing BimlFlex Custom SSIS Components
summary: Guidance on how to install BimlFlex custom SSIS components with Snowflake and Azure assistance
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# Installing BimlFlex Custom SSIS Components

<!-- TODO: Delete as covered in setup and other page now -->

## Supporting Videos

![Installing the SSIS Components -center](https://www.youtube.com/watch?v=7R8gj7ItqH8?rel=0&autoplay=0 "Installing the SSIS Components")

## Supporting BimlFlex Documentation

* [SSIS Server Installation](xref:bimlflex-ssis-deployment-ssis-server-install)

## Installing Custom SSIS Components

BimlFlex uses a set of custom SSIS components in the data processing to enable additional functionality. 

The components are SQL Server version specific and the installed version must match the SQL Server SSIS version used.

The components are installed and upgraded through the BimlFlex developer installation or through the separate runtime installation for custom components.

## Snowflake custom SSIS Components

The Snowflake load process uses a separate, custom SSIS component to provide a solid query management experience in SSIS.

The components are installed and upgraded through the BimlFlex developer installation or through the separate runtime installation for custom components.

## Azure SSIS Integration Runtime

The Azure Integration Runtime allows deployment and running of SSIS packages in the Azure cloud environment as part of the Azure Data Factory feature set.

The BimlFlex custom SSIS components are deployed to the Runtime as part of the Azure Integration Runtime customized setup.

Refer to the Azure documentation for more information and sample setup scripts: [https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup)

Once the runtime is configured to deploy the custom components it is possible to validate and run a valid project using the custom components.

extract the current dll files from your installation and copy them to a compatible blob storage location and use an installation script to install the components in the Azure Integration Runtime

Sample installation script contents:

```batch
@echo off

rem SQL Server 2016
xcopy /F /Y Varigence.Ssis.2016.dll "%ProgramFiles%\Microsoft SQL Server\130\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2016.dll "%ProgramFiles(x86)%\Microsoft SQL Server\130\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2016.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for 2016.

rem SQL Server 2017
xcopy /F /Y Varigence.Ssis.2017.dll "%ProgramFiles%\Microsoft SQL Server\140\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2017.dll "%ProgramFiles(x86)%\Microsoft SQL Server\140\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2017.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for 2017.
```

## Detailed Steps

The following detailed steps walks through the installation of the custom SSIS components required for BimlFlex SSIS packages

### Downloading the installer

Download the BimlFlex developer or components installer.

### Running the installation

Run the downloaded installation.
