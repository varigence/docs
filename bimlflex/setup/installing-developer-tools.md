---
uid: bimlflex-setup-developer-installation
title: BimlFlex Developer Installation
summary: Documentation on how to install BimlFlex through a developer installation file
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# Developer Installation

<!-- TODO Legacy, to be deleted -->

Developer installations provide the complete modeling, developer, and artifact generation environment for building BimlFlex solutions.

## Installation Media

Varigence provides a single consolidated installer for all BimlFlex components:

* `BimlFlexDevSetup(_OptionalVersion).exe`

The current installer is available through the [BimlFlex Release Notes](xref:bimlflex-release-notes) page

## BimlFlex Setup Installation Wizard

Running the installer launches the BimlFlex installation wizard

Start by agreeing to the End User License Agreement

The installer will check for a license, enter your license key if needed

### Author and Maintain Metadata

**BimlFlex 2020 Excel Add-in**

Install the bitness corresponding to the local installation of Excel.

**BimlFlex 2020 Metadata Entry**

Install the 64-bit version if you are on a 64-bit operating system

### Build Solution

**Install BimlStudio**

Install both 32-bit and 64-bit versions.

To be able to build out packages in 64-bit mode, the corresponding 64 bit SSIS components need to be available (e.g. through a local SQL Server installation).

If only the 32 bit SSDT BI/Visual Studio development tools are installed, BimlStudio will only be able to build out packages in 32-bit mode.

To be able to run the 64-bit BimlStudio version and still build successfully in 32-bit mode, install both BimlStudio versions and choose to build 32-bit from the 64-bit version if needed.

### Run Solution

BimlFlex provides custom SSIS components that are used in SSIS implementations.

Install the versions matching your environment and expected targets. For Snowflake targets, install both the BimlFlex SSIS Components 2020 and the BimlFlex Snowflake SSIS Components 2020 for your SSIS and SQL Server version.

IF the installer can't find the installed versions, click the **View Unavailable Features** option and right-click the required version and choose **Force Install** to force the installation

### Install or Upgrade BimlFlex Databases

BimlFlex uses 2 databases

* BimlFlex database  
    Used to store Metadata for the solution
* BimlCatalog  
    Used to store audit information, runtime logging, and parameter values

## Uninstallation

If the Application require uninstallation, use the standard "Uninstall a Program" option in Control Panel > Programs > Programs and Features.
