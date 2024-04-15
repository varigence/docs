---
uid: bimlflex-find-version
title: Find the BimlFlex versions installed
summary: Documentation on how to find installed versions of BimlFlex, BimlStudio, and BimlFlex Excel Add-In
---

# Find the BimlFlex versions installed

The BimlFlex framework consists of several different applications and components.

When upgrading it is important to maintain a consistent set of compatible versions across all installed components.

This page details all components and how to see their respective versions.

When reviewing the installed versions, it is expected that all developers and all components use the same version. Using different versions for different components is not supported.

## BimlStudio

Open BimlStudio and navigate to File > Account.

The Product Information displayed includes the Build, normally in the format `22.1.nnnn.0`

## BimlFlex Excel Add-in

Open a BimlFlex Excel file and navigate to the BimlFlex ribbon UI. Click the About icon.

The Product Information displayed includes the Build, normally in the format `22.1.nnnn.0`

## BimlFlex App

Open the BimlFlex Applicationand open the settings side pane by clicking the settings cog in the top toolbar.

The Version id displayed at the bottom of the pane, normally in the format `22.1.nnnn.0`.

## BimlFlex Bundle file

The `BimlFlex.bimlb` file contains the BimlFlex logic framework and database definitions and is found in the BimlStudio installation folders and in the `%localappdata%\Varigence` folder for downloaded updates. It is also maintained in each project folder for BimlFlex projects.

Open the project in BimlStudio.

Navigate to the BimlFlex ribbon UI. Click the `Open Bundle` button to display the Bundle settings page. This page has the Bundle version in the top right hand corner, normally in the format `v22.1.nnnn.0`

## BimlFlex Database

Execute the `dbo.GetVersion` Stored Procedure in the BimlFlex Database. This will return the version of the database (server) itself into which the BimlFlex database has been installed, so not the version of the repository schema.

The results will include a row with the VersionNumber specified for the database, normally in the format `22.1.nnnn`

sample script:

```sql
USE BimlFlex
GO
EXEC dbo.GetVersion
```

## BimlCatalog orchestration and audit database

execute the `dbo.GetVersion` Stored Procedure in the BimlCatalog database.

The results will include a row with the VersionNumber specified for the database, normally in the format `22.1.nnnn`

sample script:

```sql
USE BimlCatalog
GO
EXEC dbo.GetVersion
```

## BimlFlex Custom SSIS Components

The BimlFlex SSIS Custom Components are installed in the SQL Server/SQL Server Data Tools installation folders as well as in the Windows Global Assembly Cache. Due to the way SSIS manages custom components, updates are maintaining the same version number. The components are backwards compatible and will only require an update when new features are introduced in the components. Store a copy of the installed components along with the download date to maintain the version. Apply new versions when installing new updates to keep the components up to date.

sample script to validate installed components for a specific version in the GAC:

```batch
gacutil.exe -l Varigence.Ssis.2017
```

sample script to list all installed components in the GAC:

```batch
gacutil.exe -l
```
