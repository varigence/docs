# SSIS Custom Components

Custom SSIS components are used for ETL load processes. These components simplify the data processing and allows the BimlFlex generated packages to more easily load data.

The components and their source code are available in the [Varigence BimlCatalog GitHub repository](https://github.com/varigence/BimlCatalog)

The following components are included:

| Component          | Function                             |
| ------------------ | -------------------------------------- |
| AuditRow           | Logs Audit information to the BimlCatalog database |
| ErrorDescription   | Logs Error Descriptions to the BimlCatalog database |
| Hash               | Provides hashing of data stream columns |
| HashDual           | Provides dual hashing of columns to minimize collision risk |
| HashSql            | Provides Hashing using SQL `HASHBYTES()` compatible encoding |
| RowCount           | counts rows and logs to the BimlCatalog database |

The components are delivered as a SQL Server version specific file installation that needs to be deployed to any computer running or building BimlFlex SSIS packages.
The installation is provided as a script file for easy installation automation for SQL servers.
The components work in conjunction with the BimlCatalog orchestration and runtime database to store audit and error information.

## Installation

Installation of the custom components are provided through a script file that embeds the custom components SSIS .dll into the required SQL Server folders as well as the GAC

## Icons

The following Icons are used for the custom components

### Audit Row

<img src="images/bimlflex-v5-cc-auditrow.ico" alt="AuditRow Icon" width="10%"/>

### Error Description

<img src="images/bimlflex-v5-cc-errordescription.ico" alt="ErrorDescription Icon" width="10%"/>

### Hash

<img src="images/bimlflex-v5-cc-hash.ico" alt="Hash Icon" width="10%"/>

### Hash Dual

<img src="images/bimlflex-v5-cc-hashdual.ico" alt="HashDual Icon" width="10%"/>

### Hash SQL

<img src="images/bimlflex-v5-cc-hashsql.ico" alt="HashSql Icon" width="10%"/>

### Row Count

<img src="images/bimlflex-v5-cc-RowCount.ico" alt="RowCount Icon" width="10%"/>
