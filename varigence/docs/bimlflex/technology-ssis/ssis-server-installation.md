---
title: SSIS Server Installation
description: Documentation regarding SSIS Server Installation for custom SSIS components used in BimlFlex
tags: [BimlFlex, Walkthrough]
---
# Server Installation

For SSIS Server installations, the Varigence Custom SSIS components used in BimlFlex generated SSIS packages are required to be available on the server.

This installation is required for SQL/SSIS Servers that run BimlFlex created packages. These custom components are also required for opening and running the generated packages in Visual Studio.

## Installation Media

The Varigence BimlFlex Custom SSIS Components are part of the BimlFlex installation and can be installed either from the BimlFlex installer or the BimlFlex runtime installer.

Direct download links:

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)  
    This installer includes all parts of BimlFlex, including the custom components
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)  
    This installer includes the required runtime components for servers that will execute SSIS packages

## Installation

Run the installer on the SSIS Server and install the custom components version matching the SSIS Server version and target architecture.

Install the versions matching your environment and expected targets. For Snowflake targets, install both the BimlFlex SSIS Components 2020 and the BimlFlex Snowflake SSIS Components 2020 for your SSIS and SQL Server version.
:::note


> Only run one of the installers. For minimal installation on a server, only install the components from the Runtime installer

:::


## Uninstallation

Use the add remove programs to uninstall the Varigence BimlFlex Custom SSIS Components to the server.
