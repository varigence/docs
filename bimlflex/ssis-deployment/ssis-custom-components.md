---
uid: bimlflex-ssis-custom-components
title: BimlFlex SSIS Custom Components
---
# SSIS Custom Components

The BimlFlex custom SSIS components are used for ETL load processes in SSIS packages. These components simplify the data processing and allows the BimlFlex generated packages to more easily process data.

This installation is required for SQL/SSIS Servers that run BimlFlex created packages. These custom components are also required for opening and running the generated packages in Visual Studio.

## Installation Media

The Varigence BimlFlex Custom SSIS Components are part of the BimlFlex installation and can be installed either from the BimlFlex installer or the BimlFlex runtime installer.

The latest installer is available here: [](xref:bimlflex-release-notes)

## Local Installation

Run the installer on the SSIS Server and install the custom components version matching the SSIS Server version and target architecture.

For Snowflake targets, install both the BimlFlex SSIS Components 2020 and the BimlFlex Snowflake SSIS Components 2020 for your SSIS and SQL Server version.

> [!NOTE]
> Only run one of the installers. For minimal installation on a server, only install the components from the Runtime installer

## Adding BimlFlex custom SSIS components to Azure Integration Runtime

The Azure Integrated Runtime allows deployment and running of SSIS packages in the Azure cloud environment.

The BimlFlex custom SSIS components are required for the BimlFlex packages to execute and they are deployed to the Runtime As part of the Azure Integration Runtime setup.

More information about the custom configuration step is available in the Azure documentation: [https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup)

### Sample main.cmd file

In the container, the main.cmd file provides the entry point to the custom configuration setup. Add all required custom setup information in this file, including other drivers, applications and functions that are required by the SSIS packages.

Extract the required custom components as required for the scripted installation and add them to the installation location.

Add the installation steps to the main.cmd as illustrated below:

```cmd
@echo off

rem SQL Server 2016
xcopy /F /Y Varigence.Ssis.2016.dll "%ProgramFiles%\Microsoft SQL Server\130\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2016.dll "%ProgramFiles(x86)%\Microsoft SQL Server\130\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2016.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for SQL Server 2016.

rem SQL Server 2017
xcopy /F /Y Varigence.Ssis.2017.dll "%ProgramFiles%\Microsoft SQL Server\140\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2017.dll "%ProgramFiles(x86)%\Microsoft SQL Server\140\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2017.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for SQL Server 2017.

rem SQL Server 2019
xcopy /F /Y Varigence.Ssis.2019.dll "%ProgramFiles%\Microsoft SQL Server\150\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2019.dll "%ProgramFiles(x86)%\Microsoft SQL Server\150\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2019.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for SQL Server 2019.
```

Once the runtime is configured to deploy the custom components it is possible to deploy and validate a project without warnings or errors relating to the custom components.

## Uninstallation

Use the add remove programs to uninstall the Varigence BimlFlex Custom SSIS Components.

## Custom Components for SQL Server

The following components are included in the SSIS custom components for SQL Server:

| Component              | Function                                                             |
| ---------------------- | -------------------------------------------------------------------- |
| Biml Error Description | Logs Error Descriptions to the BimlCatalog database                  |
| Biml Hash              | Provides hashing of data stream columns                              |
| Biml Hash Dual         | Provides dual hashing of columns to minimize collision risk          |
| Biml Hash Dynamic      | Provides dynamic hashing of columns based on component configuration |
| Biml Hash Sql          | Provides Hashing using SQL `HASHBYTES()` compatible encoding         |
| Biml Row Audit         | Logs Audit information to the BimlCatalog database                   |
| Biml Row Count         | counts rows and logs to the BimlCatalog database                     |

The components are delivered as a SQL Server version specific file installation that needs to be deployed to any computer running or building BimlFlex SSIS packages.
The installation is provided as a script file for easy installation automation for SQL servers.
The components work in conjunction with the BimlCatalog orchestration and runtime database to store audit and error information.
