---
uid: bimlflex-ssis-custom-components
title: BimlFlex SSIS Custom Components
---
# SSIS Custom Components

The BimlFlex custom SSIS components are used for ETL load processes in SSIS packages. These components simplify the data processing and allows the BimlFlex generated packages to more easily process data.

The components are available for download here:

* SQL Server 2008r2: [https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2008.xcopyinstall.zip)
* SQL Server 2012: [https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2012.xcopyinstall.zip)
* SQL Server 2014: [https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2014.xcopyinstall.zip)
* SQL Server 2016: [https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2016.xcopyinstall.zip)
* SQL Server 2017: [https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.2017.xcopyinstall.zip)

The following components are included:

| Component              | Function                               |
| ---------------------- | -------------------------------------- |
| Biml Error Description | Logs Error Descriptions to the BimlCatalog database |
| Biml Hash              | Provides hashing of data stream columns |
| Biml Hash Dual         | Provides dual hashing of columns to minimize collision risk |
| Biml Hash Dynamic      | Provides dynamic hashing of columns based on component configuration |
| Biml Hash Sql          | Provides Hashing using SQL `HASHBYTES()` compatible encoding |
| Biml Row Audit         | Logs Audit information to the BimlCatalog database |
| Biml Row Count         | counts rows and logs to the BimlCatalog database |

The components are delivered as a SQL Server version specific file installation that needs to be deployed to any computer running or building BimlFlex SSIS packages.
The installation is provided as a script file for easy installation automation for SQL servers.
The components work in conjunction with the BimlCatalog orchestration and runtime database to store audit and error information.

## Installation

Installation of the custom components are provided through a script file that embeds the custom components SSIS .dll into the required SQL Server folders as well as the GAC. This script approach allows the custom components to be installed on an Azure Integration Runtime.

Information on using custom components in the Azure Integration RunTime can be found here: @bimlflex-adding-ssis-custom-components-to-azure-integration-runtime

## Icons

The following Icons are used for the custom components

### Audit Row

<img src="images/bimlflex-v5-cc-auditrow.ico" alt="AuditRow Icon" width="10%"/>

### Error Description

<img src="images/bimlflex-v5-cc-errordescription.ico" alt="ErrorDescription Icon" width="10%"/>

### Hash / Hash Dynamic

<img src="images/bimlflex-v5-cc-hash.ico" alt="Hash Icon" width="10%"/>

### Hash Dual

<img src="images/bimlflex-v5-cc-hashdual.ico" alt="HashDual Icon" width="10%"/>

### Hash SQL

<img src="images/bimlflex-v5-cc-hashsql.ico" alt="HashSql Icon" width="10%"/>

### Row Count

<img src="images/bimlflex-v5-cc-RowCount.ico" alt="RowCount Icon" width="10%"/>
