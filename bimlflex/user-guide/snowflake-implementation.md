---
uid: bimlflex-snowflake-implementation
title: Snowflake Implementation
---
# Snowflake Implementation

Placeholder for details on using Snowflake as destination data warehouse

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

Download and install the version matching the SQL Server SSIS version used:

* SQL Server 2016 SSIS: [https://varigence.com/downloads/varigence.ssis.snowflake.2016.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.snowflake.2016.xcopyinstall.zip)
* SQL Server 2017 SSIS: [https://varigence.com/downloads/varigence.ssis.snowflake.2017.xcopyinstall.zip](https://varigence.com/downloads/varigence.ssis.snowflake.2017.xcopyinstall.zip)

## Installation

Installation of the custom components are provided through a script file that copies the custom components SSIS `.dll` file into the required SQL Server folders as well as to the Windows Global Assembly Cache (GAC).

This script approach allows the custom components to be installed on an Azure Integration Runtime.

Information on using custom components in Azure Integration Runtime can be found here: @bimlflex-adding-ssis-custom-components-to-azure-integration-runtime