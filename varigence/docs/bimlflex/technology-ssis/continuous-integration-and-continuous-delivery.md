---
sidebar_position: 10
title: Continuous Delivery (CI/CD)
description: Documentation providing consideration and approaches to continue integration and continuous delivery within BimlFlex
tags: [BimlFlex, Walkthrough]
---
# Continuous Integration and Continuous Delivery
:::note


> The following guide is from tailored specifically for SSIS.  
> For a details and considerations on implementing CI/CD in ADF see the [BimlFlex CI/CD for ADF](bimlflex-adf-continuous-integration-and-continuous-delivery).
> A generic platform-independent overview of CI/CD concepts is available in the more generic [CI/CD section](bimlflex-continuous-integration-and-delivery).

:::


## Special considerations for SSIS

### Referenced tables

For a SQL Server Data Warehouse built with SSIS, the build process first needs to create all tables, so that the SSIS packages can be built later. The SSIS build process requires access to both the destination Data Warehouse tables, as well as the data sources. For a build to be successful, the process must be able to directly connect to the physical structures.

This means utilizing online build servers and readily available automation processes for other solution types sometimes need to be adjusted to fit specific Data Warehousing and ETL process requirements.

Because SSIS can only create packages when all referenced tables, both source and destination, are available a two-step approach is needed.

1. An initial build step that creates all required tables in the target database
1. A second step, running once the tables are available, that builds the SSIS packages. Note that this step also requires access to the data sources

Once the packages are built, they can be deployed to the SQL Server SSIS Catalog or file storage for execution.

### Ispac files

Microsoft's normal build command `MsBuild.exe` does currently not include the functionality to build out ispac files from *.dtproj files directly. There are several options for building using Visual Studio through devenv.exe as well as creating custom tasks for MSBuild to allow it to build the ispac files.

As the Biml compiler builds the ispac file as part of the normal project build it is possible to skip this entire step and directly use the generated ispac file. This allows the build and integration process to work smoothly even in environments that doesn't allow custom installations and configurations.

## Sample automation process for SSIS

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

5. Deploy ispac file

Once the ispac file is built it is possible to deploy it to a SSIS Catalog on an SSIS server.

When it has been deployed for the first time, use the Catalog environment feature to override relevant project parameters, such as connection strings, for the environment.

### Sample script using MSBuild

location: project root folder  
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

```batch
@echo off
rem (c) Varigence 2022
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call msbuild.exe with the specific resp file, use the path to a compatible, installed version of msbuild.exe

C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe @"SqlOnly.mst.resp"
```

### Sample script for Dacpac build

location: project root folder  
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

```batch
@echo off
rem (c) Varigence 2022
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

### Sample script to deploy Dacpac

location: project root folder  
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

```batch
@echo off
rem (c) Varigence 2022
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
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

```batch
@echo off
rem (c) Varigence 2022
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call msbuild.exe with the specific resp file, use the path to a compatible, installed version of msbuild.exe

C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe @"SsisOnly.mst.resp"
```

## Deploy ispac file with SSIS packages to the SSIS Catalog

location: project root folder  
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

```batch
@echo off
rem (c) Varigence 2022
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
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

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
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

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
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

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
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

Remove the LicenseKey parameter to use the local registered user key

```resp
"SqlOnly.mst.ProjectView.bimlproj" /p:OutputPath="output" /p:SqlVersion=SqlServer2017 /p:SsasVersion=Ssas2017 /p:SsasTabularVersion=SsasTabular2017 /p:SsisVersion=Ssis2017 /p:SsisDeploymentModel=Project /p:DdlBuildMode="None" /p:WarnAsError=False /p:Warn=4 /p:CleanOutputFolder=False /p:EnableBimlFlex=True /p:TaskName=Varigence.Biml.Engine.MSBuild.BimlCompilerTask /p:AssemblyFile="C:\Program Files\Varigence\BimlStudio\5.0\BimlEngine.dll" /p:AssemblyPath="C:\Program Files\Varigence\BimlStudio\5.0" /p:LicenseKey="LicenseKeyHere"
```

## Sample SsisOnly.mst.ProjectView.bimlproj settings file

location: project root folder  
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

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
filesidebar_position: 10
title: Continuous Delivery (CI/CD)

Remove the LicenseKey parameter to use the local registered user key

```resp
"SsisOnly.mst.ProjectView.bimlproj" /p:OutputPath="output" /p:SqlVersion=SqlServer2017 /p:SsasVersion=Ssas2017 /p:SsasTabularVersion=SsasTabular2017 /p:SsisVersion=Ssis2017 /p:SsisDeploymentModel=Project /p:DdlBuildMode="None" /p:WarnAsError=False /p:Warn=4 /p:CleanOutputFolder=False /p:EnableBimlFlex=True /p:TaskName=Varigence.Biml.Engine.MSBuild.BimlCompilerTask /p:AssemblyFile="C:\Program Files (x86)\Varigence\BimlStudio\5.0\BimlEngine.dll" /p:AssemblyPath="C:\Program Files (x86)\Varigence\BimlStudio\5.0" /p:LicenseKey="LicenseKeyHere"
```
