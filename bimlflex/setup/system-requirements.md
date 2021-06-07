---
uid: bimlflex-setup-software-and-hardware-requirements
title: BimlFlex Software and Hardware requirements
summary: Documentation on software and hardware requirements for installing BimlStudio, BimlFlex, BimlFlex Excel Add-In, and related databases
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# Software and Hardware Requirements

## BimlStudio

* Internet access (required for installing and running the application)
* Network access for the BimlFlex database
* Same requirements as recommended for the Windows version in use [(For Windows 10: https://www.microsoft.com/en-us/windows/windows-10-specifications)](https://www.microsoft.com/en-au/windows/windows-10-specifications)
* Same requirements as approved for the Visual Studio version and edition in use [(For Visual Studio 2015: https://www.visualstudio.com/en-us/productinfo/vs2015-sysrequirements-vs)](https://www.visualstudio.com/en-us/productinfo/vs2015-sysrequirements-vs)
* BimlStudio supports Visual Studio 2010, 2012, 2013, 2015, 2017 and 2019. The version of [SQL Server Data Tools](https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt) (SSDT BI) and Visual Studio used depends on the SQL Server version used for the SSIS Server
* A valid Varigence BimlFlex Product key is required for use.
* Available memory to hold the model
* Available processing power to process the model

## BimlFlex App

* Internet access (required for installing and running the application)
* Network access for BimlFlex database access
* Same requirements as the Windows version in use [(For Windows 10: https://www.microsoft.com/en-us/windows/windows-10-specifications)](https://www.microsoft.com/en-us/windows/windows-10-specifications)
* Available memory to hold the model
* Available processing power to process the model

## BimlFlex Excel Add-in

* Internet access (required for installing and running the application)
* Network access for BimlFlex database access
* Same minimum requirements as the Windows version in use [(For Windows 10: https://www.microsoft.com/en-us/windows/windows-10-specifications)](https://www.microsoft.com/en-us/windows/windows-10-specifications)
* Same requirements as  the Excel version and edition in use [(For Excel 2016: https://products.office.com/en-us/office-system-requirements)](https://products.office.com/en-us/office-system-requirements)
* The current Excel Add-in supports Excel 2013, 2016 and Excel for Office 365, 32 or 64-bit versions
* A Valid Microsoft Excel license is required for use. This license is not provided through, or included in, BimlFlex.
* A valid Varigence BimlFlex Product key is required for use
* Available memory to hold the model
* Available processing power to process the model

## Databases

* Requires a supported SQL Server version
* Same requirements as the SQL Server environment it is running in [(For SQL Server 2016 Enterprise Edition: https://msdn.microsoft.com/en-us/library/ms143506.aspx)](https://msdn.microsoft.com/en-us/library/ms143506.aspx)
* Available CPU, Memory and disk space to host and process the BimlFlex databases as well as the DW databases

## Server installation

The base requirements for installing Microsoft SQL Server can be found here: [https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server)

The SSIS Server where SQL Server SSIS is used to execute SSIS packages requires the installation of the Varigence SSIS Custom Components using either the Varigence BimlFlex Developer installer or BimlFlex Runtime installer.

The SQL Server where the Data Warehouse databases are deployed requires no specific installations or configurations. The developers and analysts must have adequate access to building the Data Warehouse.

The SQL Server where the BimlFlex metadata databases are deployed requires no specific installations or configurations. It is required that the developers and analysts have adequate access to work with the metadata and target databases.

## Database requirements

### BimlFlex

The BimlFlex environment requires a metadata database installed/configured and available on SQL Server.

All developers and analysts using either BimlStudio, the BimlFlex app or the Excel-based metadata management plugin need access to and rights to the metadata database. These access rights can be defined through AD accounts or SQL Logins.

The database must be backed up as required in case of database server failures or for rollback requirements

More information: [BimlFlex metadata database](xref:bimlflex-components-metadata-database)

### BimlCatalog

BimlFlex also requires an orchestration database for all orchestration, logging, and auditing to be installed/configured and available on SQL Server.

For installations and configurations using SSIS with package deployment methods (such as SQL Server 2008R2), there is also a requirement for an SSIS logging table. This is integrated into the BimlCatalog database.

The database must be backed up as required in case of database server failures or for rollback requirements

More information: [BimlCatalog database](xref:bimlflex-components-bimlcatalog-database)
