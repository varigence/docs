---
uid: bimlflex-upgrade-and-testing
title: Upgrade and Testing Process
---
# Upgrade and Testing Process

BimlFlex is built on BimlStudio and contains the following components that are of interest when upgrading to a later version:

* BimlStudio Application
* BimlFlex component of BimlStudio
* The BimlFlex App
* Optional BimlFlex Excel Add-in
* BimlFlex Bundle file
* BimlFlex Metadata database
* BimlCatalog Orchestration database
* BimlFlex Custom SSIS Components
* The BimlFlex framework is distributed as a single, combined installer for developer environments
* BimlFlex components are also distributed as a single, separate installer for certain workloads, such as for analysts and servers
* The BimlFlex databases are upgraded through the installer
* The BimlFlex Custom SSIS Components are integrated in the installer and are also available as an archive file that contains the component .dll and a .bat file installer for Azure installations

## Downloading BimlFlex from the Varigence website

The current version of the combined BimlFlex installer is available for [download here](https://varigence.com/downloads/bimlflexdevsetup.exe).

## Preparation for upgrading existing projects

Current projects with existing Extension Point script files and existing metadata needs planning and consideration before upgrading.

A new version of BimlFlex and its components can include both fixes and new functionality. This is detailed in the @bimlflex-release-notes that accompany the new version.

### 1. Do database backups

Do backups of the existing metadata and catalog databases so that they can be rolled back if needed

### 2. Build expanded code files

To verify that the upgrade implements new functionality as expected and that no unforeseen effects are affecting the new version, build expanded code files for Biml and SQL for all projects.

The expanded code is automatically enabled in the Bundle Options for a new project. The `Build Flat Biml File` and `Build DDL Script File` options control the creation. By creating the 2 files for each project before and after upgrading it is easy to validate all changes.

### 3. Backup project files

The BimlStudio project and the Custom Extension Point files and any other local file contents that have been created should be backed up to a backup location so that a copy of the pre-upgrade project is available if needed.

### 4. Upgrade Applications, components, Bundle and Databases through the installer

All installations and upgrades are performed through the installer.

* Upgrade all installed applications

* Upgrade all existing projects
    BimlFlex uses a Bundle file for the data warehouse logic. These files are located in the project folder and upgraded through the installer. All projects that require upgrading needs to be added to the upgrade step in the installer.

* Upgrade the BimlFlex database
    BimlFlex uses a metadata database for all metadata. This database needs to be updated through the installer. Add all BimlFlex databases to the upgrade step to allow the installer to upgrade them to the correct version

* Upgrade the BimlCatalog databases
    BimlFlex uses an orchestration database for all orchestration, logging and auditing. This database needs to be updated through the installer. Add all BimlCatalog databases to the upgrade step to allow the installer to upgrade them to the correct version

### Reviewing the upgraded versions

Once the applications, databases and Bundle files have been updated it is time to open the project in BimlStudio. Once the project has opened and downloaded, metadata applied, the BimlFlex solution is ready for testing.

1. review any errors or warnings
    There might have been updates to the logic applied by the Bundle. Review any error or warning messages in BimlStudio and review the release notes to see if any metadata or Extension Point behavior has changed.
1. recreate the Biml and SQL Scripts
    Rebuild all projects and compare the ExpandedCode files to their previous versions using a merge/file compare tool.
1. test build and run
    Test the build once the new project is verified as generating Biml with expected functionality.
    Run the new builds and validate both logs and data to verify behavior in the development and test environments before upgrading production runs.

### Resolving issues

If there are unexpected behavior or issues with the upgrade, follow the guidelines in the @bimlflex-support-process to log a support ticket with the BimlFlex Support team at Varigence.