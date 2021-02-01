---
uid: bimlflex-analyst-installation
title: Analyst Installation
summary: Documentation providing analyst installations for the Excel-based metadata editor environment for building BimlFlex solutions
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# Analyst installation

<!-- TODO: Delete as Analyst installation is no longer relevant -->
Analyst installations provide an Excel-based metadata editor environment for defining the metadata required to build BimlFlex solutions.

Other Installation Types are:

* [BimlFlex Developer Installation](xref:bimlflex-developer-installation)
* [SSIS Server Installation](xref:bimlflex-ssis-deployment-ssis-server-install)

## Installation Media

Varigence provides a single BimlFlex metadata installer:

* `BimlFlexSetup_(Version).exe`

The BimlFlexSetup Installation file contains the BimlFlex Excel Add-in.

## Excel Version

The BimlFlex Excel Add-in installation needs to match the installed version of Excel.

To find the installed version and its bitness, open an Excel spreadsheet, click File, Account and About Excel. The version specification includes either 32-bit or 64-bit.

![Excel Version -center -70%](images/bimlflex-ss-v5-excel-bitness.png "Excel Version")

For more information, [review Microsoft's information here](https://support.office.com/en-us/article/About-Office-What-version-of-Office-am-I-using-932788B8-A3CE-44BF-BB09-E334518B8B19)

## BimlFlex Setup Installation Wizard

The BimlFlex Setup Installation file contains the BimlFlex Excel Add-in.

Run the BimlFlex installation and choose what options to install. Only a single version of the Excel Add-in matching the installed bitness of Excel should be installed.

Analysts only need to have the BimlFlex metadata functionality installed to interact with metadata through Excel. If building and BimlStudio project management is required, follow the steps in the Developer installation guide.

![Installation -center](images/bimlflex-ss-v5-bimlflex-installer-install.png "Installation")

## Uninstallation

If the Applications require uninstallation, they can be uninstalled from the normal "Uninstall a Program" option in Control Panel, Programs, Programs and Features.
