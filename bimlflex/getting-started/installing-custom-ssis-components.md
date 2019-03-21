---
uid: bimlflex-trial-installing-custom-ssis-components
title: Installing BimlFlex Custom SSIS Components
---
# Installing BimlFlex Custom SSIS Components

## Supporting Videos

![Installing the SSIS Components -center](https://www.youtube.com/watch?v=7R8gj7ItqH8?rel=0&autoplay=0 "Installing the SSIS Components")

## Supporting BimlFlex Documentation

* @bimlflex-server-installation

## Installing Custom SSIS Components

BimlFlex uses a set of custom SSIS components in the data processing to enable additional functionality. The components are part of the open source [BimlCatalog project available on GitHub](https://github.com/varigence/BimlCatalog).

The components are SQL Server version specific and the installed version must match the SQL Server SSIS version used.

Download links:

* SQL Server 2008r2: [https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip)
* SQL Server 2012: [https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip)
* SQL Server 2014: [https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip)
* SQL Server 2016: [https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip)
* SQL Server 2017: [https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip)

The components are installed through the included `install.bat` file

## Snowflake custom SSIS Components

The Snowflake load process uses a separate, custom SSIS component to provide a solid query management experience in SSIS.

Download and install the version matching the SQL Server SSIS version used:

* Snowflake for SQL Server 2016 SSIS: [https://varigence.com/downloads/varigence.ssis.snowflake.2016.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.snowflake.2016.xcopyinstall.zip)
* Snowflake for SQL Server 2017 SSIS: [https://varigence.com/downloads/varigence.ssis.snowflake.2017.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.snowflake.2017.xcopyinstall.zip)

## Azure SSIS Integration Runtime

The Azure Integrated Runtime allows deployment and running of SSIS packages in the Azure cloud environment as part of the Azure Data Factory feature set.

The BimlFlex custom SSIS components are deployed to the Runtime as part of the Azure Integration Runtime customized setup.

Refer to the Azure documentation for more information and sample setup scripts: [https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup)

Once the runtime is configured to deploy the custom components it is possible to validate and run a valid project using the custom components.

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

### Downloading the components

Download the components zip file using the links above, through the links in the trial email, or through the BimlCatalog repository and store the file locally.

### Unpack the file

Once downloaded, unpack the zip file contents to a convenient location.

### Running the installation batch file

Run the `install.bat` file with administrator privileges. This will install the custom components into the required locations.

As the installation copies the components to the program files and global assembly cache it needs to run using elevated privileges.

### Manual installation

For manual installation, replicate the file `copy` and `gacutil` commands for the installation target:

```batch
copy "Varigence.Ssis.2017.dll" "C:\Program Files (x86)\Microsoft SQL Server\140\DTS\PipelineComponents\" /Y
copy "Varigence.Ssis.2017.dll" "C:\Program Files\Microsoft SQL Server\140\DTS\PipelineComponents\" /Y
gacutil /if "Varigence.Ssis.2017.dll"
```

replace the filename and destination with the correct version for the target environment and SQL Server version

### Manual uninstallation

For manual uninstallation, replicate the file `delete` and `gacutil` commands for the uninstallation target:

```batch
del "C:\Program Files (x86)\Microsoft SQL Server\140\DTS\PipelineComponents\Varigence.Ssis.2017.dll" /F
del "C:\Program Files\Microsoft SQL Server\140\DTS\PipelineComponents\Varigence.Ssis.2017.dll" /F
gacutil /uf "Varigence.Ssis.2017"
```

replace the file and folder names with the correct names for the target environment and SQL Server version so they match the installed components.