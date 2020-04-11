---
uid: bimlflex-snowflake-implementation
title: Snowflake Implementation
---
# Snowflake Implementation

<!-- TODO: Review -->

Implementation details on using Snowflake as destination data warehouse

## Snowflake-specific settings

The following settings directly relate to the Snowflake implementation.

The other configurations and settings are still relevant for the architecture and implementation of the project.

| SettingKey | SettingValue | SettingDataType | SettingDefault | SettingDisplayGrouping | SettingDisplayOrder | Description |
| ---------- | ------------ | --------------- | -------------- | ---------------------- | ------------------- | ----------- |
| SnowSqlConfig          | `%USERPROFILE%\.snowsql\config` | | | Snowflake | 1 | |
| SnowSqlConnection      | `bimlflex_db` |  |  | Snowflake | 2 | |
| SnowSqlPath            | C`:\Program Files\Snowflake SnowSQL` | | | Snowflake | 3 | The path to the local installation of the Snowflake SnowSQL CLI Client tool |
| SnowflakeAccount       | | | | Snowflake | 4 | The Snowflake account name to use |
| SnowflakeUser          | | | | Snowflake | 5 | The Snowflake user name to use |
| SnowflakePassword      | | | | Snowflake | 6 | The Snowflake password to use |
| SnowflakeDatabase      | | | | Snowflake | 7 | The Snowflake database name to use |
| SnowflakeSchema        | | | | Snowflake | 8 | The Snowflake schema name to use |
| SnowflakeWarehouse     | | | | Snowflake | 9 | The Snowflake warehouse name to use |
| SnowflakeRegion        | | | | Snowflake | 10 | The Snowflake region to use |
| SnowflakeScaleUp       | `Y` | | | Snowflake | 11 | |
| SnowflakeScaleUpSize   | `MEDIUM` | | | Snowflake | 12 | |
| SnowflakeScaleDown     | `Y` | | | Snowflake | 13 | |
| SnowflakeScaleDownSize | `XSMALL` | | | Snowflake | 14 | |
| SnowflakeAutoSuspend   | `Y` | | | Snowflake | 15 | |
| SnowflakeFileFormat    | `CREATE FILE FORMAT IF NOT EXISTS "PUBLIC".NOHEADER_PIPE_CSV_FORMAT COMPRESSION = 'GZIP' FIELD_DELIMITER = '|' RECORD_DELIMITER = '\n' SKIP_HEADER = 0 TRIM_SPACE = FALSE NULL_IF = ('\\N');` | | | Snowflake | 16 | |

## Snowflake custom SSIS Components

The Snowflake load process uses a custom SSIS component to provide a solid query experience in SSIS.

Use the BimlFlex installer to install the required Custom components. The latest version is available to download here: [](xref:bimlflex-release-notes)

## Sample project metadata

For a sample project loading data from a SQL Server with a AdventureWorksLT source database, use the following sample configuration as a starting point

### Connections

The Data warehouse connections to Snowflake are all defined as `OLEDB` Connections and `Snowflake DW` Systems

| Connection       | ConnectionString                                                                                  | Catalog | ConnectionType | SystemType | IntegrationStage | RecordSource | FilePath | FilePattern | PersistHistory |
| ---------------- | ------------------------------------------------------------------------------------------------- | -------------------- | ------ | ------------ | ------------------ | --- | -------- | ----------- | -------------- |
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
