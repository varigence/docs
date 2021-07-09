---
uid: bimlflex-app-reference-documentation-DataTypeMappings
title: BimlFlex App Definition for DataTypeMappings
summary: Documentation of functionality within BimlFlex for DataTypeMappings
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# DataTypeMappings

The [`Data Type Mapping`](xref:bimlflex-data-type-mappings) concept provide the ability to automatically map Data Types from a source system to a more standardized data type. This can be either a conversion of the Data Type entirely, such as a `int` to a `bigint`, the expansion of an existing Data Type, such as `nvarchar(13)` to `nvarchar(20)`, or the combination of both, such as `char(1)` to `nvarchar(10).

## Overview
  
| Property | Description |
| --------- | ----------- |
|`Name` | The name of the selected data type mapping.|
|`Length` | |
|`Precision` | |
|`Scale` | |
|`Ordinal` | |
|`DefaultValue` | |
|`SqlSourceExpression` | SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements. Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|`SqlTargetExpression` | SQL expression for this column is used to extend target queries. Generally used for source type casting and case statements. Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|`SqlTargetToString` | SQL expression that can be used to override conversion extend target queries. Generally used for source type casting and case statements. Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|`SqlTargetToDataType` | SQL expression that can be used to override conversion extend target queries. Generally used for source type casting and case statements. Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|`SsisDataflowExpression` | This value specifies the expression used to calculate the value of the derived column. The SSIS expression syntax is used. Utilize the same syntax as the Derived Column.|
|`AdfDataflowExpression` | This value specifies the expression used to calculate the value of the derived column. The ADF Dataflow expression syntax is used. Utilize the same syntax as the Derived Column.|
|`ColumnAlias` | Alias for the column. Generally used in conjunction with SqlSourceExpression.|
|`ConvertSourceType` | |
|`IsMaster` | `Y` if the value in this column can be mapped to.|
|`Description` | The column described in business context. Often referred to as business metadata.|
|`RowLastDeployed` | |

## References
  
| Property | Description |
| --------- | ----------- |
|`CustomerUID` | Reference to the Customer that this Data Type Mapping belongs to.|
|`VersionUID` | Reference to the Version that this Data Type Mapping belongs to.|
|`DataTypeId` | This value specifies the type of the data stored in this column using the unified type system. Additional logic is required to cater for data types with a CustomType like `[hierarchyid]`. Below is a list of the current possible Data Types.|
|`SystemTypeId` | Defines the mappings system type. Depending on the type the relevant source mapping will be chosen. Below is a list of the current possible SystemTypes. For a full up to date list please refer to the [meta].[SystemType] table in the [BimlFlex] database.|
|`ConnectionUID` | Some Datatype Mappings can target a specific connection.|
|`MappedToDataTypeUID` | This value specifies the type of the data stored in this column using the unified type system. Additional logic is required to cater for data types with a CustomType like `[hierarchyid]`. Below is a list of the current possible Data Types.|

