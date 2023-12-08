---
title: Data Types
description: Documentation of the management of metadata values
tags: [BimlFlex, Reference]
---
<!--
Data Types
Header not included because it is used in different ways
-->
**Data Types** are the allowed values that can be used to specify **Columns** in BimlFlex.

| Data Type             | Description                                                           |
| --------------------- | --------------------------------------------------------------------- |
| AnsiString            | ANSI string.                                                          |
| AnsiStringFixedLength | Fixed length ANSI string.                                             |
| Binary                | Binary data column.                                                   |
| Boolean               | Boolean, Bit or True/False.                                           |
| Byte                  | Unsigned tiny integer.                                                |
| Currency              | Money or currency.                                                    |
| Date                  | Date only.                                                            |
| DateTime              | Date and time.                                                        |
| DateTime2             | Variable precision date and time. Increased precision over DateTime.  |
| DateTimeOffset        | Data and time with time zone offset.                                  |
| Decimal               | Fixed precision and scale numbers.                                    |
| Double                | Float or Double.                                                      |
| Guid                  | Unique identifier or GUID.                                            |
| Int16                 | Small integer.                                                        |
| Int32                 | Integer.                                                              |
| Int64                 | Big integer.                                                          |
| Object                | Object.  Used for complex data types.                                 |
| SByte                 | Tiny integer.                                                         |
| Single                | Real or Single.                                                       |
| String                | Unicode String.                                                       |
| StringFixedLength     | Fixed Length Unicode String.                                          |
| Time                  | Time only.                                                            |
| UInt16                | Unsigned small integer.                                               |
| UInt32                | Unsigned integer.                                                     |
| UInt64                | Unsigned big integer.                                                 |
| VarNumeric            | Variable numeric                                                      |
| Xml                   | XML formatted data.                                                   |
| HierarchyId           | SQL Server HierarchyId data type.                                     |
| Geometry              | SQL Server geometry data type.                                        |
| Geography             | SQL Server geography data type.                                       |
| SmallMoney            | Small money.                                                          |
| Variant               | Variant. Non explicit data type.                                      |



:::note

For information on how these map to SQL Server, Synapse and Snowflake data types see associated link below.  
BimlFlex Documentation: [BimlFlex Data Type Conversions](../data-type-conversions).

:::

