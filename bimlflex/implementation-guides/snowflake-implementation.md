---
uid: bimlflex-snowflake-implementation
title: Snowflake Implementation
---

# Snowflake Overview

Snowflake is a cloud data warehouse platform provided by Snowflake Computing Inc.  BimlFlex supports Snowflake as a target data warehouse platform and provides load patterns that use the BimlFlex metadata to create the required ETL and ELT for loading a Data Warehouse in Snowflake.  BimlFlex uses Snowflake best practice approaches to loading and managing the Snowflake data warehouse.  This includes using the BimlFlex optimal load pattern for Snowflake to extract the data and land it in Snowflake stage, then use the Snowflake COPY command to process the data.  BimlFlex uses SQL Server SSIS packages for extraction of source data and orchestration. BimlFlex provides a custom SSIS component for loading data into Snowflake using SSIS. This allows the processing and logic in the generated packages to be easier to manage.

## Snowflake Implementation

<!-- TODO: Review -->

Implementation details on using Snowflake as destination data warehouse

## Snowflake-specific settings

The following settings directly relate to the Snowflake implementation.

The other configurations and settings are still relevant for the architecture and implementation of the project.

**Grouping: Snowflake**

| Setting Key | Description | Initial Value |
| ----------- | ----------- | ------------- |
| SnowflakeAccount       | The Snowflake account name to use. |  |
| SnowflakeAutoSuspend   | Should the Snowflake database Auto Suspend ("Y", "N"). | Y |
| SnowflakeDatabase      | The Snowflake database name to use |  |
| SnowflakeFileFormat    | The Snowflake file format to use. | CREATE FILE FORMAT IF NOT EXISTS "PUBLIC".NOHEADER_PIPE_CSV_FORMAT COMPRESSION = 'GZIP' FIELD_DELIMITER = '|' RECORD_DELIMITER = '\n' SKIP_HEADER = 0 TRIM_SPACE = FALSE NULL_IF = ('\\N'); |
| SnowflakePassword      | The Snowflake password to use. |  |
| SnowflakeRegion        | The Snowflake region to use. |  |
| SnowflakeRemoveStage   | Should the Snowflake stage be removed prior to loading the new stage file. | Y |
| SnowflakeScaleDown     | Should the Snowflake processing scale down the Snowflake database at end (`Y`, `N`). | Y |
| SnowflakeScaleDownSize | What size should the process scale the Snowflake database down to. | XSMALL |
| SnowflakeScaleUp       | Should the Snowflake processing scale up the Snowflake database at start (`Y`, `N`). | Y |
| SnowflakeScaleUpSize   | What size should the process scale the Snowflake database up to. | MEDIUM |
| SnowflakeSchema        | The Snowflake schema name to use. | public |
| SnowflakeUser          | The Snowflake user name to use. |  |
| SnowflakeWarehouse     | The Snowflake warehouse name to use | compute_wh |
| SnowSqlConfig          | Location of the Snowflake SnowSQL configuration file. | %USERPROFILE%\.snowsql\config |
| SnowSqlConnection      | The Snowflake SnowSQL connection to use. | bimlflex_db |
| SnowSqlPath            | The path to the local installation of the Snowflake SnowSQL CLI Client tool. | C:\Program Files\Snowflake SnowSQL |

## Snowflake custom SSIS Components

The Snowflake load process uses a custom SSIS component to provide a solid query experience in SSIS.

Use the BimlFlex installer to install the required Custom components. The latest version is available to download here: [](xref:bimlflex-release-notes)

<!-- TODO: Snowflake specific deployment steps. -->
<!--

## Sample project metadata

For a sample project loading data from a SQL Server with a AdventureWorksLT source database, use the following sample configuration as a starting point

### Connections

The Data warehouse connections to Snowflake are all defined as `OLEDB` Connections and `Snowflake DW` Systems

| Connection | ConnectionString | Catalog | ConnectionType | SystemType | IntegrationStage | RecordSource | FilePath | FilePattern | PersistHistory |
| ---------- | ---------------- | ------- | -------------- | ---------- | ---------------- | ------------ | -------- | ----------- | -------------- |

| AdventureWorksLT | Data Source=.;Initial Catalog=AdventureWorksLT2012;Provider=SQLNCLI11.1;Integrated Security=SSPI; | AdventureWorksLT2012 | OLEDB  | SQL Server   | Source             | AWLT | | | Y |
| BFX_DM           | Data Source=.;Initial Catalog=BFX_DM;Provider=SQLNCLI11;Integrated Security=SSPI;                 | BFX_DM               | OLEDB  | Snowflake DW | Data Mart          | | | | |
| BFX_ODS          | Data Source=.;Initial Catalog=BFX_ODS;Provider=SQLNCLI11;Integrated Security=SSPI;                | BFX_ODS              | OLEDB  | Snowflake DW | Persistent Staging | | | | |
| BFX_RDV          | Data Source=.;Initial Catalog=BFX_RDV;Provider=SQLNCLI11;Integrated Security=SSPI;                | BFX_RDV              | OLEDB  | Snowflake DW | Raw Data Vault     | | | | |
| BFX_STG          | Data Source=.;Initial Catalog=BFX_STG;Provider=SQLNCLI11;Integrated Security=SSPI;                | BFX_STG              | OLEDB  | Snowflake DW | Staging            | | | | |
| BimlCatalog      | Data Source=.;Initial Catalog=BimlCatalog;Integrated Security=True;                               | BimlCatalog          | ADONET | SQL Server   | Data Warehouse     | | | | |

### Objects and Columns

The source objects are imported the same way as other implementation patterns

### Data Vault and Data Mart

The Data Vault is accelerated the same way and the Data Mart is created in the same way as other implementation patterns

-->
