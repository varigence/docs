---
uid: bimlflex-continuous-integration-and-continuous-delivery
title: BimlFlex Continuous Integration and Continuous Delivery
---
# Continuous Integration and Continuous Delivery

One core feature in using the BimlFlex Data Warehouse Automation solution is that it can be used in a CI/CD pipeline.

There are numerous approaches used for CI/CD and Data Warehouses have their special considerations compared to the more common web based or software development based CI/CD processes.

In this document the following approaches are discussed:

* Manual automation of build and deployment steps using command line scripts
* Automatic build and processing of changes through a build server pipeline

The manual scripted approach is a low cost entry into automation in that it doesn't rely on setting up and configuring build servers or pipelines. It allows developers and testers to script and use the same process over and over again to build and deploy a solution.

The automated, build server-based approach takes a slightly different approach in that it builds an automatic deployment out of the contents of a source repository/source control project.

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

Microsoft's normal build command MsBuild.exe does currently not include the functionality to build out ispaq files from *.dtproj files directly. There are several options for building using Visual Studio through devenv.exe as well as creating custom tasks for MSBuild to allow it to build the ispac files.
As the Biml compiler builds the ispaq file as part of the normal project build it is possible to skip this entire step and directly use the generated ispaq file. This allows the build and integration process to work smoothly even in environments that doesn't allow custom installations and configurations.

Note that this build command will create the ispac file in the `bin\Development` folder instead of the bin location used by the BimlStudio build described here.

## Automate Building

Once a CI server is running it can either build files from sources or deploy compiled project files that have been checked in. Some questions for considering automating the Build:

* can build tools (such as BimlFlex) be installed and licensed on the build server/agent
* can the build server access the BimlFlex metadata repository database

There are pros and cons to using a completely automated build

* Users can forget to compile the code or to check-in the compiled output which could mean that the code is up to date, but the output (ispac file) is not
* Having a central location where build errors are visible is key to responding rapidly to issues

Regardless of if the Builds are automated and triggered on push or PR, scheduled or manually triggered, or if they are manually run without a CI server the following steps are normally required. For a build server process these steps would be performed after the repository has been loaded from the source.

## Sample Automation process

Sample Automation process and sample scripts

Download link to sample files: [bimlflex-cicd-sample-files.zip](resources/bimlflex-cicd-sample-files.zip)

1. Build the SQL Server SSDT database projects

This step can either use the Biml Compiler or MSBuild to build the artifacts. It connects to the metadata instance and ejects the SSDT Projects. Note that there is an SSDT Project per database.

The build process uses a separate settings file as well as separate build configuration files to only build the required SSDT Project. This allows the developer to have the original settings files for normal development and makes sure the automated process builds the expected result. The Biml Compiler uses a different build settings file to the MSBuild approach.

2. Compile the SSDT Projects

This step uses the generated SSDT Projects and compiles a Dacpac file. This Dacpac file can then be deployed to a database server.

Before the compilation it is sometimes necessary to consider changes and migrations. This example uses Dacpac's for database deployments. These are state-based and thus, only state aware. It is up to the developer to manage the journey from the last state to the new state, both for the schema and the existing data. The Dacpac deployment process provides some automated conflict resolution approaches but for complex changes it might require developer consideration.

The Dacpac build process uses the MSBuild.exe file to build the Dacpac file from the .sqlproj project file

>[!NOTE]
>Note that the destination folder under the `output` folder is `SSDT\<CustomerUID>\<VersionName>\<DatabaseName>`. The build script needs to reference the correct project file for each database.

This sample script loops through all databases in the defined list and builds them all.

>[!NOTE]
>Note that the destination folder for the created Dacpac is different for this process compared to the Visual Studio based one. By default, Visual Studio ejects the Dacpac to a subfolder called `Development`

3. Deploy the Dacpac to SQL Server

Once the Dacpac is created (including any custom, bespoke, migration logic) it can be deployed to the destination SQL Server.

The deployment step uses SqlPackage.exe to deploy the Dacpac to the specified destination SQL Server.

## Sample Scripts

sample scripts with download links

### Sample Script using the Biml compiler

location: project root folder  
filename: `_1.build_sql_bimlc.bat`

```batchfile
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call the Biml Compiler with the specific resp file, use the path to the installed version of BimlStudio
rem 64 bit: %programfiles%
rem 32 bit: %programfiles(x86)%

"%programfiles%\Varigence\BimlStudio\5.0\bimlc.exe" @"SqlOnly.mst.bimlc.resp"
```

### Sample Script using MSBuild

location: project root folder  
filename: `_1.build_sql_msbuild.bat`

```batchfile
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

```batchfile
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

```batchfile
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

## Sample Script to build SSIS Project with Biml Compiler

location: project root folder  
filename: `_4.build_ssis_bimlc.bat`

```batchfile
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call the Biml Compiler with the specific resp file to build the SSIS projects

"%programfiles%\Varigence\BimlStudio\5.0\bimlc.exe" @"SsisOnly.mst.bimlc.resp"
```

## Sample File to build SSIS Packages with MSBuild

location: project root folder  
filename: `_4.build_ssis_msbuild.bat`

```batchfile
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call msbuild.exe with the specific resp file, use the path to a compatible, installed version of msbuild.exe

C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe @"SsisOnly.mst.resp"
```

## Optional Step to build ispac files

location: project root folder  
filename: `_5.build_ssis_ispaq.bat`

>[!NOTE]
>Note that the normal BimlStudio build creates the ispac file in the SSIS build step. This optional, separate, step requires a compatible version of Visual Studio capable of building ispac files.

```batchfile
@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem set these to match your environment

SET "ProjectList=(EXT_AWLT_SRC)"
SET "VisualStudioPath=Microsoft Visual Studio\2017\Enterprise"

rem build the ispac files from the SSIS Projects
rem this loops through all projects specified in the ProjectList variable array

for %%i in %ProjectList% do "%programfiles(x86)%\%VisualStudioPath%\Common7\IDE\devenv.com" "output\\%%i\\%%i_Project.dtproj" /rebuild
```

## Deploy ispac file with SSIS Packages to SSIS Catalog

location: project root folder  
filename: `_6.deploy_ssis_ispac.bat`

```batchfile
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

rem call isdeploymentwizard.exe to deploy the ispacs to the SQL Server SSIS Catalog instance for the SSIS projects.
rem this loops through all Projects specified in the ProjectList variable array

for %%i in %ProjectList% do "%programfiles(x86)%\Microsoft SQL Server\%SqlServerVersionPath%\DTS\Binn\isdeploymentwizard.exe" /S /SP:"output\%%i\bin\%%i_Project.ispac" /DS:%ServerName% /DP:"/%SsisDbName%/%FolderName%/%%i/"
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
        "Value": "BimlScripts\\0.01.0-flx-import-stg-tables.biml|BimlScripts\\0.02.0-flx-import-rdv-tables.biml|BimlScripts\\0.03.0-flx-import-dwh-tables.biml|BimlScripts\\0.04.0-flx-import-psa-tables.biml|BimlScripts\\1.20.1-flx-psa-stg-main.biml|BimlScripts\\1.70.1-flx-src-to-file-main.biml|BimlScripts\\1.80.1-flx-src-to-file-main-express.biml|BimlScripts\\2.20.1-flx-dv-source-main.biml|BimlScripts\\3.10.1-flx-dwh-main.biml|BimlScripts\\3.20.1-flx-mds-main.biml|BimlScripts\\3.50.1-flx-dwh-sql-main.biml|BimlScripts\\3.50.2-flx-dwh-source-sql-main.biml|BimlScripts\\_OutputFlatBiml.biml|BimlScripts\\_OutputFlatDDL.biml|BimlScripts\\_OutputSsdtDDL.biml"
    }
]
```

## Sample SqlOnly.mst.bimlc.resp settings file

location: project root folder  
filename: `SqlOnly.mst.bimlc.resp`

```bimlc.resp
--targetPath="output" --buildDocumentation- --docOutputPath="documentation" --bundleSetting="SqlOnly.bimlb.settings" --version=SqlServer2017 --version=Ssas2017 --version=SsasTabular2017 --version=Ssis2017 --ssisDeploymentModel=Project --ddlBuildMode=None --warnAsError=False --warn=4 --cleanOutputFolder=True --EnableBimlFlex=True
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
    <BundleSettings Include="SqlOnly.bimlb.settings" />
  </ItemGroup>
  <Import Project="$(AssemblyPath)\Varigence.Biml.targets" Condition="true" />
  <!-- 
  Any changes outside of the auto-generated ItemGroup and PropertyGroup tags 
  will be ignored by the Configuration designer.
  Any content within the auto-generated ItemGroup and PropertyGroup tags can be overwritten by the Configuration designer. 
  -->
</Project>
```

## Sample SqlOnly.mst.resp settings file

location: project root folder  
filename: `SqlOnly.mst.resp`

```resp
"SqlOnly.mst.ProjectView.bimlproj" /p:OutputPath="output" /p:SqlVersion=SqlServer2017 /p:SsasVersion=Ssas2017 /p:SsasTabularVersion=SsasTabular2017 /p:SsisVersion=Ssis2017 /p:SsisDeploymentModel=Project /p:DdlBuildMode="None" /p:WarnAsError=False /p:Warn=4 /p:CleanOutputFolder=False /p:EnableBimlFlex=True /p:TaskName=Varigence.Biml.Engine.MSBuild.BimlCompilerTask /p:AssemblyFile="C:\Program Files\Varigence\BimlStudio\5.0\BimlEngine.dll" /p:AssemblyPath="C:\Program Files\Varigence\BimlStudio\5.0"
```

## Sample SsisOnly.mst.bimlc.resp settings file

location: project root folder  
filename: `SsisOnly.mst.bimlc.resp`

```resp
--targetPath="output" --buildDocumentation- --docOutputPath="documentation" --bundleSetting="SsisOnly.bimlb.settings" --version=SqlServer2017 --version=Ssas2017 --version=SsasTabular2017 --version=Ssis2017 --ssisDeploymentModel=Project --ddlBuildMode="None" --warnAsError=False --warn=4 --cleanOutputFolder=True --EnableBimlFlex=True
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
    <BundleSettings Include="SsisOnly.bimlb.settings" />
  </ItemGroup>
  <Import Project="$(AssemblyPath)\Varigence.Biml.targets" Condition="true" />
  <!-- 
  Any changes outside of the auto-generated ItemGroup and PropertyGroup tags 
  will be ignored by the Configuration designer.
  Any content within the auto-generated ItemGroup and PropertyGroup tags can be overwritten by the Configuration designer. 
  -->
</Project>
```

## Sample SsisOnly.mst.resp settings file

location: project root folder  
filename: `SsisOnly.mst.resp`

```resp
"SsisOnly.mst.ProjectView.bimlproj" /p:OutputPath="output" /p:SqlVersion=SqlServer2017 /p:SsasVersion=Ssas2017 /p:SsasTabularVersion=SsasTabular2017 /p:SsisVersion=Ssis2017 /p:SsisDeploymentModel=Project /p:DdlBuildMode="None" /p:WarnAsError=False /p:Warn=4 /p:CleanOutputFolder=False /p:EnableBimlFlex=True /p:TaskName=Varigence.Biml.Engine.MSBuild.BimlCompilerTask /p:AssemblyFile="C:\Program Files (x86)\Varigence\BimlStudio\5.0\BimlEngine.dll" /p:AssemblyPath="C:\Program Files (x86)\Varigence\BimlStudio\5.0"
```
