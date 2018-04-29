# SSIS Custom Components

Custom Ssis components are used for ETL load processes. These components simplify the data processing and allows the BimlFlex generated packages to more easily load data.

The following components are included:

| Component          | Function                             |
| ------------------ | -------------------------------------- |
| AuditRow           | Logs Audit information to the BimlCatalog database |
| ErrorDescription   | Logs Error Descriptions to the BimlCatalog database |
| Hash               | Provides hashing of datastream columns |
| HashDual           | Proides dual hashing of columns to minimise collision risk |
| HashSql            | Provides Hashing using Sql hashbytes compatible encoding |
| RowCount           | counts rows and logs to the BimlCatalog database |

The components are delivered as a Sql Server version specific file installation that needs to be deployed to any computer running or building BimlFlex Ssis packages.
The installation is provided as a script file for easy installation automation for Sql servers.
The components work in conjunction with the BimlCatalog orchestration and runtime database to store audit and error information.

## Installation

Installation of the custom components are provided through a script file that embeds the custom components Ssis dll into the Sql server folders as well as the GAC

## Icons

The following Icons are used for the custom components

### Audit Row

<img src="images/bimlflex_v5_cc_auditrow.ico" alt="AuditRow Icon" width="10%"/>

### Error Description

<img src="images/bimlflex_v5_cc_errordescription.ico" alt="ErrorDescription Icon" width="10%"/>

### Hash

<img src="images/bimlflex_v5_cc_hash.ico" alt="Hash Icon" width="10%"/>

### Hash Dual

<img src="images/bimlflex_v5_cc_hashdual.ico" alt="HashDual Icon" width="10%"/>

### Hash Sql

<img src="images/bimlflex_v5_cc_hashsql.ico" alt="HashSql Icon" width="10%"/>

### Row Count

<img src="images/bimlflex_v5_cc_RowCount.ico" alt="RowCount Icon" width="10%"/>
