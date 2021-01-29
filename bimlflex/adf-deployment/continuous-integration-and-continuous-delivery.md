---
uid: bimlflex-adf-continuous-integration-and-continuous-delivery
title: BimlFlex Continuous Integration and Continuous Delivery
summary: Guide for CI/CD for Azure Data Factory using command line scripts and changes through a build server pipeline
product: BimlFlex
type: Walkthrough
---
# Continuous Integration and Continuous Delivery

The following guide is from tailored specifically for ADF.  For a details and considerations on implementing CI/CD in SSIS see the [BimlFlex Continuous Integration and Continuous Delivery](xref:bimlflex-ssis-continuous-integration-and-continuous-delivery).

One core feature in using the BimlFlex Data Warehouse Automation solution is that it can be used in a CI/CD pipeline.

There are numerous approaches used for CI/CD and Data Warehouses have their special considerations compared to the more common web based or software development based CI/CD processes.

In this document the following approaches are discussed:

* Manual automation of build and deployment steps using command line scripts
* Automatic build and processing of changes through a build server pipeline

The manual scripted approach is a low cost entry into automation in that it doesn't rely on setting up and configuring build servers or pipelines. It allows developers and testers to script and use the same process over and over again to build and deploy a solution.

The automated, build server-based approach takes a slightly different approach in that it builds an automatic deployment out of the contents of a source repository/source control project.

<!-- TODO: Revision and update needed for ADF.

## Special considerations for Data Warehousing Automation

For a data warehouse it is not enough to make sure the structures and processes are in place for the builds and deployments, it also needs to synchronize dependencies as well as take both existing database structures and data into account.

For a classic SQL Server Data Warehouse built with SSIS, the build process first needs to create all tables so that the SSIS packages can be built later. The SSIS build process also requires access to both the destination Data Warehouse tables as well as the source itself. This means utilizing online build servers and readily available automation processes for other solution types sometimes needs to be adjusted to fit specific Data Warehousing and ETL process requirements.

## Special considerations for SSIS

A special note is warranted for solution using SSIS. SSIS can only create packages when the referenced tables, both source and destination are available. As such, a 2-step approach is needed.

1. An initial build step that creates all required tables in the data warehouse database
1. A second step, running once the tables are available, that builds the SSIS packages. Note that this step also requires access to the sources

Once the packages are built they can be deployed to the SQL Server SSIS Catalog for execution

## Scripted approach

Manual creation of build steps

BimlFlex can locally build out the SQL Server based SSDT project that contains the SQL artifacts used for the project.

## Build server based approach

Microsoft's normal build command `MsBuild.exe` does currently not include the functionality to build out ispaq files from *.dtproj files directly. There are several options for building using Visual Studio through devenv.exe as well as creating custom tasks for MSBuild to allow it to build the ispac files.
As the Biml compiler builds the ispaq file as part of the normal project build it is possible to skip this entire step and directly use the generated ispaq file. This allows the build and integration process to work smoothly even in environments that doesn't allow custom installations and configurations.

## Automate Building

Once a build server is running it can either build files from sources or deploy compiled project files that have been checked in. Some questions for considering automating the Build:

* can build tools (such as BimlStudio/BimlFlex) be installed and licensed on the build server/agent
* can the build server access the BimlFlex metadata repository database

There are pros and cons to using a completely automated build

* Users can forget to compile the code or to check-in the compiled output which could mean that the code is up to date, but the output (ispac file) is not
* Having a central location where build errors are visible is key to responding rapidly to issues

Regardless of if the builds are automated and triggered on push or PR, scheduled or manually triggered, or if they are manually run without a CI server, the following steps are normally required. For a build server process these steps would be performed after the repository has been loaded from the source.

## Sample Automation process

Sample Automation process and sample scripts

1. Build the SQL Server SSDT database projects

The build process connects to the metadata instance and ejects the SSDT Projects. Note that there is a separate SSDT Project per database.

The build process uses a separate settings file as well as separate build configuration files to only build the required SSDT Project. This allows the developer to have the original settings files for normal development and assures that the automated process builds the expected result.

2. Compile the SSDT Projects

This step uses the generated SSDT Projects and compiles a Dacpac file. This Dacpac file can then be deployed to a database server.

Before the compilation it is sometimes necessary to consider changes and migrations. This example uses Dacpac's for database deployments. These are state-based and thus, only state aware. It is up to the developer to manage the journey from the last state to the new state, both for the schema and the existing data. The Dacpac deployment process provides some automated conflict resolution approaches but for complex changes it might require developer consideration.

The Dacpac build process uses the MSBuild.exe file to build the Dacpac file from the .sqlproj project file

>[!NOTE]
>Note that the default destination folder under the `output` folder is `SSDT\<CustomerUID>\<VersionName>\<DatabaseName>`. The build script needs to reference the correct project file for each database. The SSDT output folder is configurable in the settings.

The sample script loops through all databases in the defined list and builds them all.

3. Deploy the Dacpac to SQL Server

Once the Dacpac is created (including any custom, bespoke, migration logic) it can be deployed to the destination SQL Server.

The deployment step uses `SqlPackage.exe` to deploy the Dacpac to the specified destination SQL Server.

4. Build SSIS projects

When the tables are available in the destination database it is possible to build the SSIS projects.

The SSIS build uses the same process as step 1 with a separate settings file to build the desired SSIS projects.

5. Deploy ispaq file

Once the ispaq file is built it is possible to deploy it to a SSIS Catalog on an SSIS server.

When it has been deployed for the first time, use the Catalog environment feature to override relevant project parameters, such as connection strings, for the environment.

## Sample Scripts

Download link to sample files: [bimlflex-cicd-sample-files.zip](../user-guide/resources/bimlflex-cicd-sample-files.zip)

### Sample Script using MSBuild

location: project root folder  
filename: `_1.build_sql_msbuild.bat`

```batch
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call msbuild.exe with the specific resp file, use the path to a compatible, installed version of msbuild.exe

C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe @"SqlOnly.mst.resp"
```

### Sample Script for Dacpac build

location: project root folder  
filename: `_2.build_sql_Dacpac.bat`

```batch
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem set these to match your environment

SET "MsBuildVersion=15.0"
SET "VSVersion=2017\Enterprise"
SET "CustomerUID=Your-Customer-Guid-Here"
SET "VersionName=Version 1"
SET "DatabaseList=(BFX_STG,BFX_ODS)"

rem call MSBuild to build the Dacpac for the ssdt projects.
rem this loops through all databases specified in the DatabaseList variable array
rem note that the path to msbuild needs to be specified and match machine.

for %%i in %DatabaseList% do "%programfiles(x86)%\Microsoft Visual Studio\%VSVersion%\MSBuild\%MsBuildVersion%\Bin\MSBuild.exe" "%~dp0\\output\\SSDT\\%CustomerUID%\\%VersionName%\\%%i\\%%i.sqlproj"
```

### Sample Script to deploy Dacpac

location: project root folder  
filename: `_3.deploy_sql_Dacpac.bat`

```batch
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem set these to match your environment

SET "SqlServerVersionPath=140"
SET "CustomerUID=Your-Customer-Guid-Here"
SET "VersionName=Version 1"
SET "DatabaseList=(BFX_STG,BFX_ODS)"
SET "ServerName=localhost"

rem call SqlPackage.exe to deploy the Dacpacs to the SQL Server instance for the ssdt projects.
rem this loops through all databases specified in the DatabaseList variable array

for %%i in %DatabaseList% do "%programfiles(x86)%\Microsoft SQL Server\%SqlServerVersionPath%\DAC\bin\SqlPackage.exe" /Action:Publish /SourceFile:"output\\SSDT\\%CustomerUID%\\%VersionName%\\%%i\\bin\\Debug\\%%i.Dacpac" /TargetDatabaseName:%%i /TargetServerName:%ServerName%
```

## Sample File to build SSIS Packages with MSBuild

location: project root folder  
filename: `_4.build_ssis_msbuild.bat`

```batch
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call msbuild.exe with the specific resp file, use the path to a compatible, installed version of msbuild.exe

C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe @"SsisOnly.mst.resp"
```

## Deploy ispac file with SSIS Packages to SSIS Catalog

location: project root folder  
filename: `_5.deploy_ssis_ispac.bat`

```batch
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem set these to match your environment

SET "SqlServerVersionPath=140"
SET "ProjectList=(EXT_AWLT_SRC)"
SET "ServerName=localhost"
SET "SsisDbName=SSISDB"
SET "FolderName=BimlFlex-CICD-Demo"

rem create the folder in the SSISDB catalog if needed

sqlcmd -S %servername%  -d %ssisdbname% -Q "EXEC catalog.create_folder @folder_name = '%FolderName%';"

rem optionally call a script to create the environment and environment variables here

rem call isdeploymentwizard.exe to deploy the ispacs to the SQL Server SSIS Catalog instance for the SSIS projects.
rem this loops through all Projects specified in the ProjectList variable array

echo Start deploy of all projects
for %%i in %ProjectList% do (
  echo start process of %%i
  "%programfiles%\Microsoft SQL Server\%SqlServerVersionPath%\DTS\Binn\isdeploymentwizard.exe" /S /SP:"output\%%i\bin\%%i_Project.ispac" /DS:%ServerName% /DP:"/%SsisDbName%/%FolderName%/%%i_Project/"
)
echo End deploy of all projects

rem optionally call a script to map project variables to environment variables here
```

## Sample settings file for SQL Only builds

location: project root folder  
filename: `SqlOnly.bimlb.settings`

Update this file to reflect project settings and configurations

```json
[
    {
        "Namespace": "",
        "Name": "CustomerUID",
        "Value": "Your-Customer-Guid-Here"
    },
    {
        "Namespace": "",
        "Name": "Server",
        "Value": "."
    },
    {
        "Namespace": "",
        "Name": "Database",
        "Value": "BimlFlex"
    },
    {
        "Namespace": "",
        "Name": "Version",
        "Value": "Version 1"
    },
    {
        "Namespace": "",
        "Name": "Provider",
        "Value": "SQLNCLI11"
    },
    {
        "Namespace": "",
        "Name": "UseWindowsAuthentication",
        "Value": true
    },
    {
        "Namespace": "",
        "Name": "UserId",
        "Value": ""
    },
    {
        "Namespace": "",
        "Name": "Password",
        "Value": ""
    },
    {
        "Namespace": "",
        "Name": "RememberPassword",
        "Value": false
    },
    {
        "Namespace": "",
        "Name": "IsUserMode",
        "Value": false
    },
    {
        "Namespace": "",
        "Name": "ToggledOffFiles",
        "Value": "BimlScripts\\1.00.1-flx-src-stg-main.biml|BimlScripts\\1.00.2-flx-src-stg-delete.biml|BimlScripts\\1.20.1-flx-psa-stg-main.biml|BimlScripts\\1.70.1-flx-src-to-file-main.biml|BimlScripts\\1.80.1-flx-src-to-file-main-express.biml|BimlScripts\\2.20.1-flx-dv-source-main.biml|BimlScripts\\3.10.1-flx-dwh-main.biml|BimlScripts\\3.20.1-flx-mds-main.biml|BimlScripts\\3.50.1-flx-dwh-sql-main.biml|BimlScripts\\3.50.2-flx-dwh-source-sql-main.biml|BimlScripts\\_OutputFlatBiml.biml|BimlScripts\\_OutputFlatDDL.biml"
    }
]
```

## Sample settings file for SSIS Only builds

location: project root folder  
filename: `SsisOnly.bimlb.settings`

Update this file to reflect project settings and configurations

```json
[
    {
        "Namespace": "",
        "Name": "CustomerUID",
        "Value": "Your-Customer-Guid-Here"
    },
    {
        "Namespace": "",
        "Name": "Server",
        "Value": "."
    },
    {
        "Namespace": "",
        "Name": "Database",
        "Value": "BimlFlex"
    },
    {
        "Namespace": "",
        "Name": "Version",
        "Value": "Version 1"
    },
    {
        "Namespace": "",
        "Name": "Provider",
        "Value": "SQLNCLI11"
    },
    {
        "Namespace": "",
        "Name": "UseWindowsAuthentication",
        "Value": true
    },
    {
        "Namespace": "",
        "Name": "UserId",
        "Value": ""
    },
    {
        "Namespace": "",
        "Name": "Password",
        "Value": ""
    },
    {
        "Namespace": "",
        "Name": "RememberPassword",
        "Value": false
    },
    {
        "Namespace": "",
        "Name": "IsUserMode",
        "Value": false
    },
    {
        "Namespace": "",
        "Name": "ToggledOffFiles",
        "Value": "BimlScripts\\_OutputFlatBiml.biml|BimlScripts\\_OutputFlatDDL.biml|BimlScripts\\_OutputSsdtDDL.biml"
    }
]
```

## Sample SqlOnly.mst.ProjectView.bimlproj settings file

location: project root folder  
filename: `SqlOnly.mst.ProjectView.bimlproj`

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <PropertyGroup>
    <BuildDocumentation>False</BuildDocumentation>
    <DocumentationOutputPath>documentation</DocumentationOutputPath>
  </PropertyGroup>
  <ItemGroup Condition="true">
    <Templates Include="addedBiml\BimlScripts\ExtensionPoints\*.biml" />
    <BundleSettings Include="SqlOnly.bimlb.settings" />
  </ItemGroup>
  <Import Project="$(AssemblyPath)\Varigence.Biml.targets" Condition="true" />
</Project>
```

## Sample SqlOnly.mst.resp settings file

location: project root folder  
filename: `SqlOnly.mst.resp`

Remove the LicenseKey parameter to use the local registered user key

```resp
"SqlOnly.mst.ProjectView.bimlproj" /p:OutputPath="output" /p:SqlVersion=SqlServer2017 /p:SsasVersion=Ssas2017 /p:SsasTabularVersion=SsasTabular2017 /p:SsisVersion=Ssis2017 /p:SsisDeploymentModel=Project /p:DdlBuildMode="None" /p:WarnAsError=False /p:Warn=4 /p:CleanOutputFolder=False /p:EnableBimlFlex=True /p:TaskName=Varigence.Biml.Engine.MSBuild.BimlCompilerTask /p:AssemblyFile="C:\Program Files\Varigence\BimlStudio\5.0\BimlEngine.dll" /p:AssemblyPath="C:\Program Files\Varigence\BimlStudio\5.0" /p:LicenseKey="LicenseKeyHere"
```

## Sample SsisOnly.mst.ProjectView.bimlproj settings file

location: project root folder  
filename: `SsisOnly.mst.ProjectView.bimlproj`

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <PropertyGroup>
    <BuildDocumentation>False</BuildDocumentation>
    <DocumentationOutputPath>documentation</DocumentationOutputPath>
  </PropertyGroup>
  <ItemGroup Condition="true">
    <Templates Include="addedBiml\BimlScripts\ExtensionPoints\*.biml" />
    <BundleSettings Include="SsisOnly.bimlb.settings" />
  </ItemGroup>
  <Import Project="$(AssemblyPath)\Varigence.Biml.targets" Condition="true" />
</Project>
```

## Sample SsisOnly.mst.resp settings file

location: project root folder  
filename: `SsisOnly.mst.resp`

Remove the LicenseKey parameter to use the local registered user key

```resp
"SsisOnly.mst.ProjectView.bimlproj" /p:OutputPath="output" /p:SqlVersion=SqlServer2017 /p:SsasVersion=Ssas2017 /p:SsasTabularVersion=SsasTabular2017 /p:SsisVersion=Ssis2017 /p:SsisDeploymentModel=Project /p:DdlBuildMode="None" /p:WarnAsError=False /p:Warn=4 /p:CleanOutputFolder=False /p:EnableBimlFlex=True /p:TaskName=Varigence.Biml.Engine.MSBuild.BimlCompilerTask /p:AssemblyFile="C:\Program Files (x86)\Varigence\BimlStudio\5.0\BimlEngine.dll" /p:AssemblyPath="C:\Program Files (x86)\Varigence\BimlStudio\5.0" /p:LicenseKey="LicenseKeyHere"
```

## Special considerations when using Extension Points

Any Extension Points used in the project will need to be defined in the corresponding response or settings file. When an Extension Point file is added in BimlStudio it is defined as part of the project in the .mst file.

BimlStudio automatically adds the included Extension Point file to the corresponding .resp and .bimlproj file.

Depending on the build engine used, add the references to the Extension Point files in the correct automated build settings file. Note that BimlStudio currently adds the references using absolute paths for the automatic files, but the references in the ci/cd build files can use relative path so they work on dynamic build machines.

The above samples use msbuild only and has a dynamic reference to all Extension Points in the Extension Points folder.

## Silent Installation of BimlStudio

For build servers where the BimlStudio application should be installed by a process, use the silent feature installation option with all relevant features added to the `-InstallFeature` parameter.

The following example will install both the 64 and 32 bit versions of the BimlStudio Application and the BimlFlex custom components for SQL Server 2016. If you do not include the `start /wait` prefix, the installer will appear to complete instantly while the installation runs in the background.

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
* BIMLFLEXSSIS2008_X64
* BIMLFLEXSSIS2012_X64
* BIMLFLEXSSIS2014_X64
* BIMLFLEXSSIS2016_X64
* BIMLFLEXSSIS2017_X64
* BIMLFLEXSSIS2019_X64
* SNOWFLAKESSIS2016_X86
* SNOWFLAKESSIS2017_X86
* SNOWFLAKESSIS2019_X86
* SNOWFLAKESSIS2016_X64
* SNOWFLAKESSIS2017_X64
* SNOWFLAKESSIS2019_X64

Feature options are case sensitive.

Build servers would normally only require installation of the BimlStudio application for the automated build process. The generated artifacts would then be passed to a more static environment for the actual execution of the packages. Only installations where a person interacts with the application for metadata management would normally require the BimlFlex App or the BimlFlex Excel Add-in.

Note that running this will not spawn any dialogs nor give any feedback. Verify the installation through the installation logs in the `%temp%` folder or through the `Apps and Features` list.

## Automated Installation and Upgrade of BimlFlex and BimlCatalog databases

For silent or automated installations and upgrades of BimlFlex and BimlCatalog databases, use the following process.

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
rem (c) Varigence 2018
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
-->
