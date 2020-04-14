---
uid: bimlflex-data-type-conversions
title: BimlFlex Data Type Conversions
---

# BimlFlex Data Type Conversions

BimlFlex uses a separate collection of data types that closely mirror .NET data types with a few additions to provide better support in modeling.  This allows for easy, hassle free development as the modeler no longer has to worry about what systems support what data types.

Included below are the mapping guidelines used by BimlFlex in order to ensure a consistent data type environment across the multiple platforms that are supported.

## General Mappings

The general mappings are the base guidelines that are followed when generating DDL from the contained BimlFlex metadata.  Choose the target platform to see how a BimlFlex data type maps to a target data type.

## [SQL Server](#tab/tabid-1)

| BimlFlex Data Type              | SQL Server Data Type         |
| ------------------------------- | ---------------------------- |
| geometry                        | geometry                     |
| geography                       | geography                    |
| hierarchyid                     | hierarchyid                  |
| smallmoney                      | smallmoney                   |
| AnsiString(`length`)            | varchar(`length`)            |
| Binary(`length`)                | varbinary(`length`)          |
| Byte                            | tinyint                      |
| Boolean                         | bit                          |
| Currency                        | money                        |
| Date                            | date                         |
| DateTime(`precision`)           | datetime(`precision`)        |
| Decimal(`precision`,`scale`)    | decimal(`precision`,`scale`) |
| VarNumeric(`precision`,`scale`) | decimal(`precision`,`scale`) |
| Double(`precision`)             | float(`precision`)           |
| Guid                            | uniqueidentifier             |
| Int16                           | smallint                     |
| Int32                           | int                          |
| Int64                           | bigint                       |
| Object                          | sql_variant                  |
| SByte                           | smallint                     |
| Single(`precision`)             | float(`precision`)           |
| String(`length`)                | nvarchar(`length`)           |
| Time(`precision`)               | time(`precision`)            |
| UInt16                          | smallint                     |
| UInt32                          | int                          |
| Uint64                          | bigint                       |
| AnsiStringFixedLength(`length`) | char(`length`)               |
| StringFixedLength(`length`)     | nchar(`length`)              |
| Xml                             | nvarchar(`length`)           |
| DateTime2(`precision`)          | datetime2(`precision`)       |
| DateTimeOffset(`precision`)     | datetimeoffset(`precision`)  |

## [Azure Synapse](#tab/tabid-2)

| BimlFlex Data Type              | Synapse Data Type            |
| ------------------------------- | ---------------------------- |
| geometry                        | varbinary(8000)              |
| geography                       | varbinary(8000)              |
| hierarchyid                     | varbinary(8000)              |
| smallmoney                      | varbinary(8000)              |
| AnsiString(`length`)            | varchar(`length`)            |
| Binary(`length`)                | varbinary(`length`)          |
| Byte                            | tinyint                      |
| Boolean                         | bit                          |
| Currency                        | money                        |
| Date                            | date                         |
| DateTime(`precision`)           | datetime(`precision`)        |
| Decimal(`precision`,`scale`)    | decimal(`precision`,`scale`) |
| VarNumeric(`precision`,`scale`) | decimal(`precision`,`scale`) |
| Double(`precision`)             | float(`precision`)           |
| Guid                            | varchar(50)                  |
| Int16                           | smallint                     |
| Int32                           | int                          |
| Int64                           | bigint                       |
| Object                          | sql_variant                  |
| SByte                           | smallint                     |
| Single(`precision`)             | float(`precision`)           |
| String(`length`)                | nvarchar(`length`)           |
| Time(`precision`)               | time(`precision`)            |
| UInt16                          | smallint                     |
| UInt32                          | int                          |
| Uint64                          | bigint                       |
| AnsiStringFixedLength(`length`) | char(`length`)               |
| StringFixedLength(`length`)     | nchar(`length`)              |
| Xml                             | varbinary(8000)              |
| DateTime2(`precision`)          | datetime2(`precision`)       |
| DateTimeOffset(`precision`)     | datetimeoffset(`precision`)  |

## [Snowflake](#tab/tabid-3)

| BimlFlex Data Type              | Snowflake Data Type          |
| ------------------------------- | ---------------------------- |
| geometry                        | varbinary(8388608)           |
| geography                       | varbinary(8388608)           |
| hierarchyid                     | varbinary(8388608)           |
| smallmoney                      | decimal(19,4)                |
| AnsiString(`length`)            | varchar(`length`)            |
| Binary(`length`)                | varbinary(`length`)          |
| Byte                            | tinyint                      |
| Boolean                         | boolean                      |
| Currency                        | decimal(19,4)                |
| Date                            | date                         |
| DateTime(`precision`)           | datetime(`precision`)        |
| Decimal(`precision`,`scale`)    | decimal(`precision`,`scale`) |
| VarNumeric(`precision`,`scale`) | decimal(`precision`,`scale`) |
| Double(`precision`)             | float(`precision`)           |
| Guid                            | varchar(50)                  |
| Int16                           | smallint                     |
| Int32                           | int                          |
| Int64                           | bigint                       |
| Object                          | varbinary(8388608)           |
| SByte                           | smallint                     |
| Single(`precision`)             | float(`precision`)           |
| String(`length`)                | varchar(`length`)            |
| Time(`precision`)               | time(`precision`)            |
| UInt16                          | smallint                     |
| UInt32                          | int                          |
| Uint64                          | bigint                       |
| AnsiStringFixedLength(`length`) | char(`length`)               |
| StringFixedLength(`length`)     | char(`length`)               |
| Xml                             | varchar(`length`)            |
| DateTime2(`precision`)          | timestamp(`precision`)       |
| DateTimeOffset(`precision`)     | timestamp_tz(`precision`)    |

## [Full List](#tab/tabid-4)

| BimlFlex Data Type              | SQL Server Data Type         | Synapse Data Type | Snowflake Data Type       |
| ------------------------------- | ---------------------------- | ----------------- | ------------------------- |
| geometry                        | geometry                     | varbinary(8000)   | varbinary(8388608)        |
| geography                       | geography                    | varbinary(8000)   | varbinary(8388608)        |
| hierarchyid                     | hierarchyid                  | varbinary(8000)   | varbinary(8388608)        |
| smallmoney                      | smallmoney                   | varbinary(8000)   | decimal(19,4)             |
| AnsiString(`length`)            | varchar(`length`)            |                   |                           |
| Binary(`length`)                | varbinary(`length`)          |                   |                           |
| Byte                            | tinyint                      |                   |                           |
| Boolean                         | bit                          |                   | boolean                   |
| Currency                        | money                        |                   | decimal(19,4)             |
| Date                            | date                         |                   |                           |
| DateTime(`precision`)           | datetime(`precision`)        |                   |                           |
| Decimal(`precision`,`scale`)    | decimal(`precision`,`scale`) |                   |                           |
| VarNumeric(`precision`,`scale`) | decimal(`precision`,`scale`) |                   |                           |
| Double(`precision`)             | float(`precision`)           |                   |                           |
| Guid                            | uniqueidentifier             | nvarchar(50)      | varchar(50)               |
| Int16                           | smallint                     |                   |                           |
| Int32                           | int                          |                   |                           |
| Int64                           | bigint                       |                   |                           |
| Object                          | sql_variant                  |                   | varbinary(8388608)        |
| SByte                           | smallint                     |                   |                           |
| Single(`precision`)             | float(`precision`)           |                   |                           |
| String(`length`)                | nvarchar(`length`)           |                   | varchar(`length`)         |
| Time(`precision`)               | time(`precision`)            |                   |                           |
| UInt16                          | smallint                     |                   |                           |
| UInt32                          | int                          |                   |                           |
| Uint64                          | bigint                       |                   |                           |
| AnsiStringFixedLength(`length`) | char(`length`)               |                   |                           |
| StringFixedLength(`length`)     | nchar(`length`)              |                   | char(`length`)            |
| Xml                             | nvarchar(`length`)           |                   | varchar(`length`)         |
| DateTime2(`precision`)          | datetime2(`precision`)       |                   | timestamp(`precision`)    |
| DateTimeOffset(`precision`)     | datetimeoffset(`precision`)  |                   | timestamp_tz(`precision`) |

> [!NOTE]  
> A blank column indicates no change in logic vs the **SQL Server Data Type**.

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

> [!NOTE]
> A blank column indicates no change in logic vs the **SQL Server Data Type**.  
>  
> \*: Default logic for SQL Server is to use a `uniqueidentifier` data type for Guid columns.  
> The column will only use a `nvarchar(50)` data type if the `CovertGuidToString` setting in the **Settings Editor** is set to `Y`.

<!--

## Default Logic

[//]: # (TODO: Descriptive Paragraph)

[//]: # (TODO: Update and clarify below table.)

| Condition            | Default           |
| -------------------- | ----------------- |
| AnsiString(8000`+`)  | varchar(MAX)      |
| varbinary(8000`+`)   | varbinary(MAX)    |
| decimal(1`-`,x)      | decimal(18,x)     |
| decimal(x,0`-`)      | decimal(x,0)      |
| double(0`-`)         | float(53)         |
| single(0`-`)         | float(24)         |
| nvarchar(4000`+`)    | nvarchar(MAX)     |
| time(0`-`)           | time(7)           |
| char(8000`+`)        | varchar(MAX)      |
| nchar(4000`+`)       | nvarchar(MAX)     |
| datetime2(0`-`)      | datetime2(7)      |
| datetimeoffset(0`-`) | datetimeoffset(7) |

-->
