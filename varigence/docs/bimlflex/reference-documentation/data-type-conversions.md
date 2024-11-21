---
sidebar_position: 7
title: Data Type Conversions
description: Documentation providing data type conversations between BimlFlex data types and SQL Server data types
tags: [BimlFlex, Reference]
---

# BimlFlex Data Type Conversions

BimlFlex uses a separate collection of data types that closely mirror .NET data types with a few additions to provide better support in modeling.  This allows for easy, hassle free development as the modeler no longer has to worry about what systems support what data types.

Included below are the mapping guidelines used by BimlFlex in order to ensure a consistent data type environment across the multiple platforms that are supported.

## General Mappings

The general mappings are the base guidelines that are followed when generating DDL from the contained BimlFlex metadata.  Choose the target platform to see how a BimlFlex data type maps to a target data type.

## [SQL Server](#tab/tabid-1)

### String  

| BimlFlex Data Type              | SQL Server Data Type         |
| ------------------------------- | ---------------------------- |
| AnsiStringFixedLength(`length`) | char(`length`)               |
| AnsiString(`length`)            | varchar(`length`)            |
| StringFixedLength(`length`)     | nchar(`length`)              |
| String(`length`)                | nvarchar(`length`)           |

### Number  

| BimlFlex Data Type              | SQL Server Data Type         |
| ------------------------------- | ---------------------------- |
| smallmoney                      | smallmoney                   |
| Currency                        | money                        |
| Boolean                         | bit                          |
| Byte                            | tinyint                      |
| SByte                           | smallint                     |
| Int16                           | smallint                     |
| UInt16                          | smallint                     |
| Int32                           | int                          |
| UInt32                          | int                          |
| Int64                           | bigint                       |
| Uint64                          | bigint                       |
| Decimal(`precision`,`scale`)    | decimal(`precision`,`scale`) |
| VarNumeric(`precision`,`scale`) | decimal(`precision`,`scale`) |
| Single(`precision`)             | float(`precision`)           |
| Double(`precision`)             | float(`precision`)           |

### Time  

| BimlFlex Data Type              | SQL Server Data Type         |
| ------------------------------- | ---------------------------- |
| Time(`precision`)               | time(`precision`)            |
| Date                            | date                         |
| DateTime(`precision`)           | datetime(`precision`)        |
| DateTime2(`precision`)          | datetime2(`precision`)       |
| DateTimeOffset(`precision`)     | datetimeoffset(`precision`)  |

### Other  

| BimlFlex Data Type              | SQL Server Data Type         |
| ------------------------------- | ---------------------------- |
| geometry                        | geometry                     |
| geography                       | geography                    |
| hierarchyid                     | hierarchyid                  |
| Xml                             | nvarchar(`length`)           |
| Binary(`length`)                | varbinary(`length`)          |
| Guid                            | uniqueidentifier             |
| Object                          | sql_variant                  |

## [Azure Synapse](#tab/tabid-2)

### String  

| BimlFlex Data Type              | Synapse Data Type            |
| ------------------------------- | ---------------------------- |
| AnsiStringFixedLength(`length`) | char(`length`)               |
| AnsiString(`length`)            | varchar(`length`)            |
| StringFixedLength(`length`)     | nchar(`length`)              |
| String(`length`)                | nvarchar(`length`)           |

### Number  

| BimlFlex Data Type              | Synapse Data Type            |
| ------------------------------- | ---------------------------- |
| smallmoney                      | smallmoney                   |
| Currency                        | money                        |
| Boolean                         | bit                          |
| Byte                            | tinyint                      |
| SByte                           | smallint                     |
| Int16                           | smallint                     |
| UInt16                          | smallint                     |
| Int32                           | int                          |
| UInt32                          | int                          |
| Int64                           | bigint                       |
| Uint64                          | bigint                       |
| Decimal(`precision`,`scale`)    | decimal(`precision`,`scale`) |
| VarNumeric(`precision`,`scale`) | decimal(`precision`,`scale`) |
| Single(`precision`)             | float(`precision`)           |
| Double(`precision`)             | float(`precision`)           |

### Time  

| BimlFlex Data Type              | Synapse Data Type            |
| ------------------------------- | ---------------------------- |
| Time(`precision`)               | time(`precision`)            |
| Date                            | date                         |
| DateTime(`precision`)           | datetime(`precision`)        |
| DateTime2(`precision`)          | datetime2(`precision`)       |
| DateTimeOffset(`precision`)     | datetimeoffset(`precision`)  |

### Other  

| BimlFlex Data Type              | Synapse Data Type            |
| ------------------------------- | ---------------------------- |
| geometry                        | varbinary(8000)              |
| geography                       | varbinary(8000)              |
| hierarchyid                     | varbinary(8000)              |
| Xml                             | varbinary(8000)              |
| Binary(`length`)                | varbinary(`length`)          |
| Guid                            | varchar(50)                  |
| Object                          | sql_variant                  |

## [Snowflake](#tab/tabid-3)

### String  

| BimlFlex Data Type              | Snowflake Data Type          |
| ------------------------------- | ---------------------------- |
| AnsiStringFixedLength(`length`) | char(`length`)               |
| AnsiString(`length`)            | varchar(`length`)            |
| StringFixedLength(`length`)     | char(`length`)               |
| String(`length`)                | varchar(`length`)            |

### Number  

| BimlFlex Data Type              | Snowflake Data Type          |
| ------------------------------- | ---------------------------- |
| smallmoney                      | decimal(19,4)                |
| Currency                        | decimal(19,4)                |
| Boolean                         | boolean                      |
| Byte                            | tinyint                      |
| SByte                           | smallint                     |
| Int16                           | smallint                     |
| UInt16                          | smallint                     |
| Int32                           | int                          |
| UInt32                          | int                          |
| Int64                           | bigint                       |
| Uint64                          | bigint                       |
| Decimal(`precision`,`scale`)    | decimal(`precision`,`scale`) |
| VarNumeric(`precision`,`scale`) | decimal(`precision`,`scale`) |
| Single(`precision`)             | float(`precision`)           |
| Double(`precision`)             | float(`precision`)           |

### Time  

| BimlFlex Data Type              | Snowflake Data Type          |
| ------------------------------- | ---------------------------- |
| Time(`precision`)               | time(`precision`)            |
| Date                            | date                         |
| DateTime(`precision`)           | datetime(`precision`)        |
| DateTime2(`precision`)          | timestamp(`precision`)       |
| DateTimeOffset(`precision`)     | timestamp_tz(`precision`)    |

### Other  

| BimlFlex Data Type              | Snowflake Data Type          |
| ------------------------------- | ---------------------------- |
| geometry                        | varbinary(8388608)           |
| geography                       | varbinary(8388608)           |
| hierarchyid                     | varbinary(8388608)           |
| Xml                             | varchar(`length`)            |
| Binary(`length`)                | varbinary(`length`)          |
| Guid                            | varchar(50)                  |
| Object                          | varbinary(8388608)           |

## [Databricks](#tab/tabid-4)

### String

| BimlFlex Data Type             | Databricks SQL Data Type |
| ------------------------------ | ------------------------ |
| geometry                       | STRING                   | 
| geography                      | STRING                   | 
| hierarchyid                    | STRING                   | 
| AnsiString                     | STRING                   | 
| AnsiStringFixedLength          | STRING                   | 
| String                         | STRING                   | 
| StringFixedLength              | STRING                   | 
| Xml                            | STRING                   | 

### Number

| BimlFlex Data Type             | Databricks SQL Data Type |
| ------------------------------ | ------------------------ |
| smallmoney                     | DOUBLE                   | 
| Currency                       | DOUBLE                   | 
| Single                         | DOUBLE                   | 
| Double                         | DOUBLE                   | 
| SByte                          | TINYINT                  | 
| Byte                           | TINYINT                  | 
| Int16                          | SMALLINT                 | 
| UInt16                         | SMALLINT                 | 
| Int32                          | INT                      | 
| UInt32                         | INT                      | 
| Int64                          | BIGINT                   | 
| UInt64                         | BIGINT                   | 
| Decimal (`precision`, `scale`) | DECIMAL (`precision`, `scale`) | 

### Time

| BimlFlex Data Type             | Databricks SQL Data Type |
| ------------------------------ | ------------------------ |
| Time                           | TIMESTAMP                | 
| Date                           | DATE                     | 
| DateTime                       | TIMESTAMP                | 
| DateTime2                      | TIMESTAMP                | 
| DateTimeOffset                 | TIMESTAMP                | 

### Other

| BimlFlex Data Type             | Databricks SQL Data Type |
| ------------------------------ | ------------------------ |
| Binary                         | BINARY                   | 
| Boolean                        | BOOLEAN                  | 
| Guid                           | STRING                   | 
| Object                         | Custom                   | 



:::note
 
A blank column indicates no change in logic vs the **SQL Server Data Type**.

:::


***

## Implicit Conversions

In a few cases BimlFlex will implicitly convert a source data type into another data type.  These are applied to the lesser used or infrequently supported data types to ensure a healthy and operational data mart.  These cases are highlighted below.  

| BimlFlex Data Type | SQL Server Data Type | Synapse Data Type | Snowflake Data Type |
| ------------------ | -------------------- | ----------------- | ------------------- |
| geometry           |                      | varbinary(8000)   | varbinary(8388608)  |
| geography          |                      | varbinary(8000)   | varbinary(8388608)  |
| hierarchyid        |                      | varbinary(8000)   | varbinary(8388608)  |
| smallmoney         |                      | varbinary(8000)   | decimal(19,4)       |
| Guid               | **nvarchar(50)**\*   | nvarchar(50)      | varchar(50)         |
| Xml                | nvarchar(`length`)   | varbinary(8000)   | varchar(`length`)   |



:::note

A blank column indicates no change in logic vs the **BimlFlex Data Type**.  
 
\*: Default logic for SQL Server is to use a `uniqueidentifier` data type for Guid columns.  
The column will only use a `nvarchar(50)` data type if the `CovertGuidToString` setting in the **Settings Editor** is set to `Y`.

:::


## Default Logic

In cases where required metadata is omitted or values exceed certain thresholds BimlFlex will adjust some data types.  The below table outlines the rules used.  All sources use the *Default* column in the table below except for Snowflake which does not support a `MAX` identifier.  The values used for Snowflake are annotated in the *Snowflake* column.

| Condition                 | Default                | Snowflake          |
| ------------------------- | ---------------------- | ------------------ |
| char(8000`+`)             | char(MAX)              | char(16777216)     |
| nchar(4000`+`)            | nchar(MAX)             | char(16777216)     |
| varchar(8000`+`)          | varchar(MAX)           | varchar(16777216)  |
| nvarchar(4000`+`)         | nvarchar(MAX)          | varchar(16777216)  |
| varbinary(8000`+`)        | varbinary(MAX)         | varbinary(8388608) |
| decimal(0`-`,`scale`)     | decimal(18,`scale`)    |                    |
| decimal(`precision`,`--`) | decimal(`precision`,0) |                    |
| double(`--`)              | float(53)              |                    |
| single(`--`)              | float(24)              |                    |
| time(`--`)                | time(7)                |                    |
| datetime2(`--`)           | datetime2(7)           | timestamp(7)       |
| datetimeoffset(`--`)      | datetimeoffset(7)      | timestamp_tz(7)    |



:::note
 
A blank column indicates no change in logic vs the *Default*.  
`+` Indicates any number greater or equal to.  
`-` Indicates any number lower than or equal to.  
`--` Indicates an unassigned value.  

:::

