---
uid: bimlflex-software-and-hardware-requirements
title: BimlFlex Software and Hardware requirements
---
# Software and Hardware minimum requirements

## BimlStudio

* Internet Access (required for installing and running the application)
* Same requirements as recommended for the Windows version in use [(For Windows 10: https://www.microsoft.com/en-au/windows/windows-10-specifications)](https://www.microsoft.com/en-au/windows/windows-10-specifications)
* Same requirements as approved for the Visual Studio version and edition in use [(For Visual Studio 2015: https://www.visualstudio.com/en-us/productinfo/vs2015-sysrequirements-vs)](https://www.visualstudio.com/en-us/productinfo/vs2015-sysrequirements-vs)
* BimlStudio supports Visual Studio 2010, 2012, 2013, 2015. The version of [SQL Server Data Tools](https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt) (SSDT BI) and Visual Studio used depends on the SQL Server version used for the SSIS Server
* A valid Varigence BimlStudio Product key is required for use.

## BimlFlex Excel Plugin

* Internet Access (required for installing and running the application)
* Same minimum requirements as the Windows version in use [(For Windows 10: https://www.microsoft.com/en-au/windows/windows-10-specifications)](https://www.microsoft.com/en-au/windows/windows-10-specifications)
* Same requirements as  the Excel version and edition in use [(For Excel 2016: https://products.office.com/en-au/office-system-requirements)](https://products.office.com/en-au/office-system-requirements)
* The current plugin supports Excel 2013 and 2016, 32 or 64-bit versions
* A valid Varigence BimlFlex Product key is required for use

## Databases

* Requires a supported SQL Server version
* Same requirements as the SQL Server environment it is running in [(For SQL Server 2016 Enterprise Edition: https://msdn.microsoft.com/en-us/library/ms143506.aspx)](https://msdn.microsoft.com/en-us/library/ms143506.aspx)
* CPU, Memory and disk space to host the BimlFlex databases as well as the DW databases

## Developer installation

A developer installation is assumed to be either on a development database server with SQL Server installed or a client Windows installation (local or hosted) where the developer will use both BimlStudio, BimlFlex Excel Metadata editor, Visual Studio SSDT BI and SQL Server Management Studio to develop the Data Warehouse solution.

The developer installation required full development licensing including both BimlStudio and BimlFlex for each developer.

Considering the recurring requirement to be able to run all these applications at once it is recommended that the machine used is high-powered.

The developer also needs internet access for license key validations as well as network access to all required databases. This normally includes source systems, BimlFlex databases, Data Warehouse databases. All BimlFlex work requires access to the BimlFlex metadata database.

[More information on the Developer Installation can be found here](developer-installation.md)

## Analyst Installation

An Analyst installation is assumed to be on a client Windows installation where the Analyst uses BimlFlex Excel Metadata editor to prepare the required metadata and source to target mappings so that the destination Data Warehouse aligns with the necessary business requirements.

It is the Analysis job to translate the system of origin schema and data into the target models such as Raw and Business Data Vaults and presentation layer. This typically requires access to modeling and analysis tools such as SQL Server Management Studio. Some modeling can be done without access to source/destination databases, but it is recommended to maintain access to the origin and target databases for analyst work. All BimlFlex work required access to the BimlFlex metadata database.

[More information on the Analyst Installation can be found here](analyst-installation.md)

## Server installation

The base requirements for installing Microsoft SQL Server can be found here: [https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server)

The SSIS Server where SQL Server SSIS is used to execute SSIS packages requires the installation of the Varigence SSIS Custom Components using the Varigence Product Suite installer.

The Varigence SSIS Components can also be installed using the XCOPY scripts provide by contacting BimlFlex support.

The SQL Server where the Data Warehouse databases are deployed requires no specific installations or configurations. It is necessary that the developers and analysts have adequate access to building the Data Warehouse.

The SQL Server where the BimlFlex metadata databases are deployed requires no specific installations or configurations. It is required that the developers and analysts have adequate access to work with the metadata and target databases.

[More information on the Server installation can be found here](server-installation.md)

## Database requirements

### BimlFlex

The BimlFlex environment requires a metadata database installed/configured and available on SQL Server.

All developers and analysts using either BimlStudio or the Excel-based metadata management plugin need access to and rights to the metadata database. These access rights can be defined through AD accounts or SQL Logins.

### BimlCatalog

BimlFlex also requires an orchestration database for all orchestration, logging and auditing to be installed/configured and available on SQL Server.

For installations and configurations using SSIS with package deployment methods (such as SQL Server 2008R2) there is also a requirement for an SSIS logging table. This is integrated into the BimlCatalog database.