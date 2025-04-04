---
uid: bimlflex-continuous-integration-and-delivery
title: Continuous Integration and Delivery (CI/CD)
summary: Documentation providing considerations and approaches for CI/CD using BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Continuous Integration and Delivery

For effective management of the data solution, BimlFlex artifacts can be used in a CI/CD pipeline.

There are numerous approaches used for CI/CD and data solutions tend to have their special considerations compared to the more common web based or software development based CI/CD processes.

In this document the following approaches are discussed:

* Manual automation of build and deployment steps using command line scripts
* Automatic build and processing of changes through a build server pipeline

The manual scripted approach is a low-cost entry into automation, that it doesn't rely on configuring build servers or pipelines. It allows developers and testers to script and use the same process over and over again to build and deploy a solution.

The automated, build server-based approach takes a slightly different approach in that it builds an automatic deployment from the contents of a source control project.

For a data solution, it is not enough to make sure the data structures and data logistics processes that result from a build are properly deployed. While this is an important firs step, the dependencies and outcomes of the data itself _also_ needs to be taken into account. Compared to regular software development, the build and deployment in essence is half the work. Once the artifacts are in place, the data still needs to be adjusted to fit into the new structures and data logistics process will have to run to reflect the changes of the design in the data.

In short: a full deployment includes the build and deployment as well as an execution of the data logistics processes.

## Platform-specific CI/CD considerations

This documentation section covers the broader CI/CD concepts and approaches for implementing these with BimlFlex. Depending on the target data integration platform used, specific configurations may apply. These can be found in the following links:

* [BimlFlex CI/CD for SQL Server Integration Services (SSIS)](xref:bimlflex-ssis-continuous-integration-and-continuous-delivery).
* [BimlFlex CI/CD for Azure Data Factory (ADF)](xref:bimlflex-adf-continuous-integration-and-continuous-delivery).

## Build Automation

This section contains various examples and approaches to automate specific components that are required for the build process. These can be integrated into a build pipeline.

### Build approaches

In this section, the following approaches are discussed:

* Manual automation of build and deployment steps using command line scripts
* Automatic build and processing of changes through a build server pipeline

#### Manual / scripted approach

As part of the build process, BimlFlex will by default generate the SQL Server Data Tools (SSDT, or 'database') project that contains the SQL artifacts used for the project. In addition, all of the data logistics artifacts will be created for the target platforms. For example, SSIS packages, ADF ARM templates and JSON files or Stored Procedure scripts.

BimlFlex will also generate starter scripts for deployment that contain pre-populated connection settings based on the BimlFlex design metadata. These scripts are available in the `Deploy` directory that is part of the BimlStudio build output.

These scripts can be called, either directly or via another script, to build the resources such as the SSDT project, and deploy these to the designated target location.

#### Build server based approach

The automated, build server-based approach takes a slightly different approach in that it builds an automatic deployment from the contents of a source control repository. In this approach, the output artifacts are moved or copied to a source control repository (e.g. Git) from which a commit can trigger a build process.

## Special considerations when using Extension Points

Any Extension Points used in the project will need to be defined in the corresponding response or settings file. When an Extension Point file is added in BimlStudio, it is defined as part of the project in the .mst file.

BimlStudio automatically adds the included Extension Point file to the corresponding .resp and .bimlproj file.

Depending on the build engine used, add the references to the Extension Point files in the correct automated build settings file. Note that BimlStudio currently adds the references using absolute paths for the automatic files, but the references in the CI/CD build files can use a relative path so that they can work on dynamic build machines.

The above samples only use msbuild, and have dynamic references to all Extension Points that are present in the Extension Points folder.

## Silent Installation of BimlStudio

For build servers where the BimlStudio application should be installed by a process, use the silent feature installation option with all relevant features added to the `-InstallFeature` parameter.

The following example will install both the 64 and 32 bit versions of the BimlStudio Application and the BimlFlex custom components for SQL Server 2016. If you do not include the 'start /wait' prefix, the installer will appear to complete instantly while the installation runs in the background.

`start /wait BimlFlexDevSetup.exe -s -InstallFeature:BimlStudio_X64,BimlStudio_X86`

Feature options available to the installer:

* BimlStudio_X86
* BimlStudio_X64
* BIMLFLEXADDIN_X86
* BIMLFLEXADDIN_X64
* BIMLFLEXAPP_X86
* BIMLFLEXAPP_X64
* BIMLFLEXSSIS2008_X86
* BIMLFLEXSSIS2012_X86
* BIMLFLEXSSIS2014_X86
* BIMLFLEXSSIS2016_X86
* BIMLFLEXSSIS2017_X86
* BIMLFLEXSSIS2019_X86
* BIMLFLEXSSIS2022_X86
* BIMLFLEXSSIS2008_X64
* BIMLFLEXSSIS2012_X64
* BIMLFLEXSSIS2014_X64
* BIMLFLEXSSIS2016_X64
* BIMLFLEXSSIS2017_X64
* BIMLFLEXSSIS2019_X64
* BIMLFLEXSSIS2022_X64
* SNOWFLAKESSIS2016_X86
* SNOWFLAKESSIS2017_X86
* SNOWFLAKESSIS2019_X86
* SNOWFLAKESSIS2022_X86
* SNOWFLAKESSIS2016_X64
* SNOWFLAKESSIS2017_X64
* SNOWFLAKESSIS2019_X64
* SNOWFLAKESSIS2022_X64

Please note that the feature options are case sensitive.

Build servers would normally only require installation of the BimlStudio application for the automated build process. The generated artifacts would then be passed to a more static environment for the actual execution of the packages. Only installations where a person interacts with the application for metadata management would normally require the BimlFlex Applicationor the BimlFlex Excel Add-in.

Note that running this will not spawn any dialogs nor give any feedback. Verify the installation through the installation logs in the `%temp%` folder or through the `Apps and Features` list.

## Automated installation and upgrade of BimlFlex databases

For silent or automated installations and upgrades of BimlFlex and BimlCatalog databases, the following process can be used.

The installer does not currently support deployment of new, or upgrades to existing databases. The automated pipeline deployment is normally only used for the BimlCatalog database, as that is the database required for different environments. The BimlFlex database is a development-only resource and is normally maintained separately.

1. Extract the required pre-deployment script and database dacpac from the BimlStudio application. Use the `Debug Utilities` dialog in the BimlFlex Ribbon UI tab to extract the files to disk. Each database has a separate pre-deployment script for changes not supported by the dacpac process and a dacpac that is deployed through the Microsoft-provided `SqlPackage.exe` application.
1. Deploy the script and dacpac through the pipeline to the destination database server using functionality like the below script:

Deploys the BimlCatalog pre-deployment script and dacpac to the defined target database using `SqlCmd.exe` and `SqlPackage.exe`. These applications are required to be available to the deployment environment. They are deployed with Visual Studio and SQL Server and available for download through the reference links below.

* More information on SqlCmd.exe: [https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility](https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility)
* More information on SqlPackage.exe: [https://docs.microsoft.com/en-us/sql/tools/sqlpackage](https://docs.microsoft.com/en-us/sql/tools/sqlpackage)

Note that deploying the pre-deployment script only works when the database exists. The SqlPackage.exe process will create the database in the destination server the first time it is run if it doesn't already exist.

Sample File: `Deploy_Dacpac_BimlFlex.cmd`

```batch
@echo off
rem (c) Varigence 2022
rem https://varigence.com/BimlFlex
rem update the path to match the local installation

pushd %~dp0

SET "ServerName=localhost"
SET "DatabaseName=BimlCatalog"
SET "SqlCmdPath=%PROGRAMFILES%\Microsoft SQL Server\Client SDK\ODBC\170\Tools\Binn"
SET "SqlPackagePath=%PROGRAMFILES%\Microsoft SQL Server\140\DAC\bin"

"%SqlCmdPath%\SqlCmd.exe" -E -S %ServerName% -d %DatabaseName% -i "BimlCatalog_PreDacpac_Deployment.sql"
"%SqlPackagePath%\SqlPackage.exe" /TargetServerName:%ServerName% /TargetDatabaseName:%DatabaseName% /action:Publish /SourceFile:"BimlCatalog.dacpac"
```

## Automate the build

Once a build server is running it can either build files from sources or deploy compiled project files that have been checked in. Some questions for considering automating the Build:

* can build tools (such as BimlStudio/BimlFlex) be installed and licensed on the build server/agent
* can the build server access the BimlFlex metadata repository database

There are pros and cons to using a completely automated build

* Users can forget to compile the code or to check-in the compiled output which could mean that the code is up to date, but the output (ispac file) is not
* Having a central location where build errors are visible is key to responding rapidly to issues

Regardless of if the builds are automated and triggered on push or PR, scheduled or manually triggered, or if they are manually run without a CI server, the following steps are normally required. For a build server process these steps would be performed after the repository has been loaded from the source.
