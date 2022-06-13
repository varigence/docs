---
uid: bimlflex-app-reference-documentation-DataTypeMappings
title: BimlFlex App Definition for DataTypeMappings
summary: Documentation of functionality within BimlFlex for DataTypeMappings
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# DataTypeMappings

The [**Data Type Mapping**](xref:bimlflex-data-type-mappings) concept provide the ability to automatically map Data Types from a source system to a more standardized data type. This can be either a conversion of the Data Type entirely, such as a `int` to a `bigint`, the expansion of an existing Data Type, such as `nvarchar(13)` to `nvarchar(20)`, or the combination of both, such as `char(1)` to `nvarchar(10).

## Overview
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Name | The name of the selected data type mapping.|
|Length | This value specifies the length parameter for the Column data type. Set to -1 to indicate MAX length.<br><br>This property applies only to column types that support a length specification, such as String and Binary types.|
|Precision | This value specifies the precision parameter for the Column data type. Precision is the number of digits stored for a numeric value. This property applies only to column types that support precision, such as Decimal.|
|Scale | This value specifies the scale parameter for the Column data type. Scale is the number of digits to the right of the decimal point in a numeric value. This property applies only to column types that support precision, such as Decimal.|
|Ordinal | This value specifies the length parameter for the column type associated with this Column. Set to -1 to indicate MAX length.<br><br>This property applies only to column types that support a length specification, such as String and Binary types.|
|Default Value | The default value the Column should receive if no data is provided.|
|SQL Source Expression | SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements. Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|SQL Target Expression | SQL expression for this column is used to extend target queries. Generally used for source type casting and case statements. Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|SQL Target String | SQL expression that can be used to override conversion extend target queries. Generally used for source type casting and case statements. Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|SQL Target Data Type | SQL expression that can be used to override conversion extend target queries. Generally used for source type casting and case statements. Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|SSIS Dataflow Expression | This value specifies the expression used to calculate the value of the derived column. The SSIS expression syntax is used. Utilize the same syntax as the Derived Column.|
|ADF Dataflow Expression | This value specifies the expression used to calculate the value of the derived column. The ADF Dataflow expression syntax is used. Utilize the same syntax as the Derived Column.|
|Column Alias | Alias for the column. Generally used in conjunction with SqlSourceExpression.|
|Convert Source Type | Enable the conversion to occur against the source data type.|
|Master | Enable to allow the value to be mapped to.|
|Description | The column described in business context. Often referred to as business metadata.|

## References
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this Data Type Mapping belongs to.|
|Version | Reference to the Version that this Data Type Mapping belongs to.|
|Data Type | This value specifies the type of the data stored in this column using the unified type system. Additional logic is required to cater for data types with a CustomType like `[hierarchyid]`. Below is a list of the current possible Data Types.|
|System Type | Defines the mappings system type. Depending on the type the relevant source mapping will be chosen. Below is a list of the current possible SystemTypes. For a full up to date list please refer to the [meta].[SystemType] table in the [BimlFlex] database.|
|Connection | Some Datatype Mappings can target a specific connection.|
|Mapped Data Type | This value specifies the type of the data stored in this column using the unified type system. Additional logic is required to cater for data types with a CustomType like `[hierarchyid]`. Below is a list of the current possible Data Types.|

