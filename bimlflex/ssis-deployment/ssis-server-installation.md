---
uid: bimlflex-server-installation
title: Server Installation
---
# Server Installation

For SSIS Server installations, the Varigence Custom SSIS components used in BimlFlex generated SSIS packages are required to be available on the server.

This installation is required for SQL/SSIS Servers that run BimlFlex created packages. These custom components are also required for opening and running the generated packages in Visual Studio.

Other Installation Types are:

* [Developer](developer-installation.md)
* [Analyst](analyst-installation.md)

## Installation Media

The Varigence BimlFlex custom SSIS Components are part of the BimlCatalog open source project and components and code are available for download from the [Varigence BimlCatalog GitHub repository](https://github.com/varigence/BimlCatalog)

Varigence provides a batch file installer for the components suitable for deployments to servers. The installer is packaged in SQL server version-dependent zip.

Direct download links:

* [SQL Server 2008 R2](https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip)
* [SQL Server 2012](https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip)
* [SQL Server 2014](https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip)
* [SQL Server 2016](https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip)
* [SQL Server 2017](https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip)

## Batch file based deployment

Use the provided script file to deploy the Custom SSIS Components to the server.

## Uninstallation

Use the provided script file to uninstall the Custom SSIS Components to the server.
