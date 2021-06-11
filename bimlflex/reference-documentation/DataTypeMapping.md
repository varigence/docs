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
|`SqlSourceExpression` | |
|`SqlTargetExpression` | |
|`SqlTargetToString` | |
|`SqlTargetToDataType` | |
|`SsisDataflowExpression` | |
|`AdfDataflowExpression` | |
|`ColumnAlias` | |
|`ConvertSourceType` | |
|`IsMaster` | |
|`Description` | |
|`RowLastDeployed` | |

## References
  
| Property | Description |
| --------- | ----------- |
|`CustomerUID` | Reference to the Customer that this Data Type Mapping belongs to.|
|`VersionUID` | Reference to the Version that this Data Type Mapping belongs to.|
|`DataTypeId` | |
|`SystemTypeId` | |
|`ConnectionUID` | |
|`MappedToDataTypeUID` | |

