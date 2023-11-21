---
sidebar_position: 5
title: Using SQL Server Data Tools (SSDT)
description: BimlFlex and SQL Server Data Tools documentation for guidance on database management and automation of deployment processes and source control mechanisms
tags: [BimlFlex, Walkthrough]
---

# BimlFlex-generated SQL Server Data Tools Project

BimlFlex generates a SQL Server Data Tools (SSDT) project on build that includes all database artifacts.

The SSDT Project is a Visual Studio project that has a representation of a database. It is possible to use the schema compare function to compare the code with a target database, and it is possible to publish the project to a target database server, allowing easy creation or updates to the target schema.

By utilizing the SSDT project for database management it is possible to automate the deployment process and to source control the database using Azure DevOps or similar source control mechanisms.

## Prerequisites

The SSDT Project support is included in the Visual Studio 2019 data storage and processing workload, available in the Visual Studio Enterprise installer. For earlier versions of Visual Studio it is a separate download and installation.

## Building the SSDT Project

The SSDT Project is built as part of the BimlStudio build process for BimlFlex projects. Run a build and the SSDT Project tis built to the SSDT folder in the build output location.

For convenience, the build creates a separate project from the current metadata in a folder called current. An additional, separate version of the SSDT project is built out to the location specified by the setting `SsdtOutputPath` setting. This defaults to the following location:

output folder\SSDT\Customer UID\Version Name\

Update the setting to direct the build to a different output location as needed.

In the output locations, a separate SSDT Project is created per target database used. SSDT Projects are managed on a per-database level.

## Opening the SSDT Project

Navigate to the output folder and open the `.sqlproj` file using Visual Studio.

## Publishing the SSDT Project

There are several ways to update a target from the SSDT Project:

* Use the Visual Studio build and publish functionality to update a target database from the SSDT Project
* Use the Schema Compare function in Visual Studio to interactively synchronize the schema between project and database
* Use the automatically created deployment script in the Deploy output folder to automatically update the target from the SSDT project

## External Table dependency objects

External Tables for on-premises SQL Server and Synapse is used by some load processes and architectures. These external table definitions have dependencies on additional artifacts that need to be present or managed in the SSDT Project.

BimlFlex provides an optional build process for these entities. The following settings control if they are included in the build, as well as their default values:

| Setting                            | Default Value | Description |
| ---------------------------------- | ------------- | ----------- |
| SsdtIncludeExternalTables          | N             | Should External Tables be included in the SSDT Project |
| SsdtIncludeMasterKey               | N             | Should the Master Key statement be include in the SSDT Project. Depends on "SsdtIncludeExternalTables" = "Y" |
| SsdtIncludeCredential              | N             | Should the Credential statement be include in the SSDT Project. Depends on "SsdtIncludeExternalTables" = "Y" |
| SsdtIncludeExternalDataSource      | N             | Should the External Data Source statement be include in the SSDT Project. Depends on "SsdtIncludeExternalTables" = "Y" |
| SsdtIncludeExternalFileFormat      | N             | Should the External File Format statement be include in the SSDT Project. Depends on "SsdtIncludeExternalTables" = "Y" |
| SsdtOverwriteExternalTableDefaults | N             | Should existing external table-related files be overwritten. If the values for Credentials, Data Sources, External Table Formats have been manually updated in the SSDT project, set this to "N" to keep the build from overwriting these files |
| SsdtDefaultMasterKey               | See below     | The default Master Key SQL Statement to use |
| SsdtDefaultCredential              | See below     | The default Credential SQL Statement to use |
| SsdtDefaultExternalDataSource      | See below     | The default External Data Source SQL Statement to use |
| SsdtDefaultExternalFileFormat      | See below     | The default External File Format SQL Statement to use |

### Default Create Scripts

SsdtDefaultMasterKey

```sql
CREATE MASTER KEY
    ENCRYPTION BY PASSWORD ='<Strong Password>'
```

SsdtDefaultCredential

```sql
CREATE DATABASE SCOPED CREDENTIAL [bimlflex]
WITH
    IDENTITY = 'bimlflex',
    SECRET = '<Storage Key>';
```

SsdtDefaultExternalDataSource

```sql
CREATE EXTERNAL DATA SOURCE [dwhload_storage]
    WITH (
        LOCATION = N'wasbs://staging@<accountname>.blob.core.windows.net'
        , TYPE = HADOOP
        , CREDENTIAL = [bimlflex]
    );
```

SsdtDefaultExternalFileFormat

```sql
CREATE EXTERNAL FILE FORMAT [pipe_zip_format]
    WITH (
        FORMAT_TYPE = DELIMITEDTEXT,
        FORMAT_OPTIONS (
            FIELD_TERMINATOR = N'|',
            USE_TYPE_DEFAULT = FALSE
        ),
        DATA_COMPRESSION = N'org.apache.hadoop.io.compress.GzipCodec'
    );
```

>[!TIP]
>
> For additional information on Microsoft SQL Server Data Tools, see:
>
> * Visual Studio documentation: [SQL Server Data Tools for Visual Studio](https://visualstudio.microsoft.com/vs/features/ssdt/)
> * Microsoft Docs Documentation: [SQL Server Data Tools](https://docs.microsoft.com/en-us/sql/ssdt/sql-server-data-tools?view=sql-server-ver15)
