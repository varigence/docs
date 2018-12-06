---
uid: bimlflex-developer-installation
title: BimlFlex Developer Installation
---
# Developer Installation

Developer installations provide the complete developer and SSIS generation environment for building BimlFlex solutions.

Other Installation Types are:

* @bimlflex-analyst-installation
* @bimlflex-server-installation

## Installation Media

Varigence provides two installers:

1. `BimlStudioSetup_(Version).exe`
1. `BimlFlexSetup_(Version).exe`

## BimlStudio Setup Installation Wizard

The BimlStudio Setup installation file contains the BimlStudio application.

Run the BimlStudio installation and choose what options to install.

To be able to build out packages in 64 bit mode, the corresponding 64 bit SSIS components needs to be available (e.g. through a local SQL Server installation). If only the 32 bit SSDT BI/Visual Studio development tools are installed, BimlStudio will only be able to build out packages in 32 bit mode. To be able to run the 64 bit BimlStudio version and still build successfully in 32 bit mode, install both BimlStudio versions and choose to build 32 bit from the 64 bit version.

![Installation -center](images/bimlflex-ss-v5-bimlstudio-installer-install.png "Installation")

## BimlFlex Setup Installation Wizard

The BimlFlex Setup Installation file contains the BimlFlex Excel add-in.

Run the BimlFlex installation and choose what options to install.

Developers need to have both BimlStudio and the BimlFlex components installed.

![Installation -center](images/bimlflex-ss-v5-bimlflex-installer-install.png "Installation")

## SSIS Components

The Varigence Custom SSIS Components are required for building and testing the SSIS Packages for developers opening the generated SSIS packages in Visual Studio and for running the packages on an SSIS Server.

The SSIS Custom components are installed separately, [read about the installation here](ssis-custom-components.md)

## Uninstallation

If the Application require uninstallation, they can use the standard "Uninstall a Program" option in Control Panel, Programs, Programs and Features.