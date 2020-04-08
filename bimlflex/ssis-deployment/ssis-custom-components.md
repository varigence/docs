---
uid: bimlflex-ssis-custom-components
title: BimlFlex SSIS Custom Components
---
# SSIS Custom Components

The BimlFlex custom SSIS components are used for ETL load processes in SSIS packages. These components simplify the data processing and allows the BimlFlex generated packages to more easily process data.

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

> [!NOTE]
> Only run one of the installers. For minimal installation on a server, only install the components from the Runtime installer

Information on using custom components in the Azure Integration RunTime can be found here: @bimlflex-adding-ssis-custom-components-to-azure-integration-runtime

## Uninstallation

Use the add remove programs to uninstall the Varigence BimlFlex Custom SSIS Components to the server.

## Custom Components for SQL Server

The following components are included in the SSIS custom components for SQL Server:

| Component              | Function                                                             |
| ---------------------- | -------------------------------------------------------------------- |
| Biml Error Description | Logs Error Descriptions to the BimlCatalog database                  |
| Biml Hash              | Provides hashing of data stream columns                              |
| Biml Hash Dual         | Provides dual hashing of columns to minimize collision risk          |
| Biml Hash Dynamic      | Provides dynamic hashing of columns based on component configuration |
| Biml Hash Sql          | Provides Hashing using SQL `HASHBYTES()` compatible encoding         |
| Biml Row Audit         | Logs Audit information to the BimlCatalog database                   |
| Biml Row Count         | counts rows and logs to the BimlCatalog database                     |

The components are delivered as a SQL Server version specific file installation that needs to be deployed to any computer running or building BimlFlex SSIS packages.
The installation is provided as a script file for easy installation automation for SQL servers.
The components work in conjunction with the BimlCatalog orchestration and runtime database to store audit and error information.

## Icons

The following Icons are used for the custom components

### Audit Row

<img src="../user-guide/images/bimlflex-v5-cc-auditrow.ico" alt="AuditRow Icon" width="10%"/>

### Error Description

<img src="../user-guide/images/bimlflex-v5-cc-errordescription.ico" alt="ErrorDescription Icon" width="10%"/>

### Hash / Hash Dynamic

<img src="../user-guide/images/bimlflex-v5-cc-hash.ico" alt="Hash Icon" width="10%"/>

### Hash Dual

<img src="../user-guide/images/bimlflex-v5-cc-hashdual.ico" alt="HashDual Icon" width="10%"/>

### Hash SQL

<img src="../user-guide/images/bimlflex-v5-cc-hashsql.ico" alt="HashSql Icon" width="10%"/>

### Row Count

<img src="../user-guide/images/bimlflex-v5-cc-RowCount.ico" alt="RowCount Icon" width="10%"/>
