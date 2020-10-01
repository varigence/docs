---
uid: bimlflex-upgrade-and-testing
title: Upgrade and Testing Process
---
# Upgrade and Testing Process

BimlFlex comes in a consolidated installer that contains the following components that are upgraded when a later version is installed:

* BimlStudio Application
* BimlFlex component of BimlStudio
* The BimlFlex App
* The BimlFlex Excel Add-in
* BimlFlex Metadata database
* BimlCatalog Orchestration database
* BimlFlex Custom SSIS Components for SQL Server
* BimlFlex Custom SSIS Components for Snowflake

## Downloading BimlFlex from the Varigence website

The current installer is available through the [BimlFlex Release Notes](xref:bimlflex-release-notes) page

## Preparation for upgrading existing projects

Current projects with existing Extension Point script files and existing metadata needs planning and consideration before upgrading.

A new version of BimlFlex and its components can include both fixes and new functionality. This is detailed in the [BimlFlex Release Notes](xref:bimlflex-release-notes) that accompany the new version.

### 1. Database Backups

Backup the existing BimlFlex metadata and BimlCatalog catalog databases so that they can be rolled back if needed

### 2. Build expanded code files

To verify that the upgrade implements new functionality as expected and that no unforeseen effects are affecting the new version, build expanded code files for Biml and SQL for all projects.

The expanded code is automatically enabled in the Bundle Options for a BimlFlex project.

The following options control creation:

* Build Flat Biml File
* Build DDL Script File

Creating the expanded code files for each project both before and after upgrading allows for comparisons of the before and after states.

### 3. Backup project files

The BimlStudio project and the Extension Point files and any other local file contents that have been created should be backed up to a backup location so that a copy of the pre-upgrade project is available if needed.

### 4. Upgrade Applications, Custom Components and Databases through the installer

All installations and upgrades are performed through the installer.

* Upgrade all installed applications
* Upgrade the Custom Components
* Upgrade the BimlFlex database
    BimlFlex uses a metadata database for all metadata. This database needs to be updated through the installer. Add all BimlFlex databases to the upgrade step to allow the installer to upgrade them to the new version
* Upgrade the BimlCatalog databases
    BimlFlex uses an orchestration database for all orchestration, logging and auditing. This database needs to be updated through the installer. Add all BimlCatalog databases to the upgrade step to allow the installer to upgrade them to the new version

More information: [Installing BimlFlex](xref:bimlflex-installing-bimlflex)

### Reviewing the upgraded versions

Once the applications, databases and Bundle files have been updated it is time to open the project in BimlStudio. Once the project has opened and downloaded, metadata applied, the BimlFlex solution is ready for testing.

1. Review any errors or warnings
    There might have been updates to the logic applied by the Bundle. Review any error or warning messages in BimlStudio and review the [BimlFlex Release Notes](xref:bimlflex-release-notes) to see if any metadata or Extension Point behavior has changed.
1. Recreate the Biml and SQL Scripts
    Rebuild all projects and compare the Expanded Code files to their previous versions using a merge/file compare tool.
1. Test build and run
    Test the build once the new project is verified as generating Biml with expected functionality.
    Run the new builds and validate both logs and data to verify behavior in the development and test environments before upgrading production environments.

### Resolving issues

If there are unexpected behavior or issues with the upgrade, follow the guidelines in the [BimlFlex Support Process](xref:bimlflex-support-process) to log a support ticket with the BimlFlex Support team at Varigence.
