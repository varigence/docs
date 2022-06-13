---
uid: bimlflex-app-reference-documentation-Parameters
title: BimlFlex App Definition for Parameters
summary: Documentation of functionality within BimlFlex for Parameters
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Parameters

In BimlFlex, [**Parameters**](xref:bimlflex-concepts-metadata-parameters) are customizable values that can be set throughout the solution.
	BimlFlex provides a number of standard out-of-the-box Parameters, as well as the functionality to create your own. Parameters can be used in many ways - for example for managing data load windows, orchestration and standardised or default values.

## Overview
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Parameter Name | The name of the selected parameter.|
|Parameter Operator | The operator to be used when retrieving the Parameter value. Example is `>=` that will translate to the where clause as `[ParameterName] >= ?`.|
|Parameter Default | The default value that the Parameter contains the first time the process is executed. An example would be for a numeric field `0` and a date `1900-01-01`|
|Parameter Data Type | The data type for a Parameter being used in the data logistics processes. Here you should enter the data type using the following format DATATYPENAME|
|Parameter SQL | An aggregate that we want to use when retrieving our parameter value after the load expressed using SQL. The placeholder `@@this` is replaced with the parameter name and inserted into the SQL aggregation. Eg: `MAX(@@this)` and `CONVERT(VARCHAR(19), MAX(@@this), 120)` for dates.|
|Parameter To Name | This attribute specifies the name of the Parameter being used in the data logistics process. Use this attribute to define a from and to variable on a Column.|
|Parameter To Operator | This attribute define an operator to be used in combination with ParameterToName.|
|Execute SQL on Source | Specify if the `ParameterSql` should be executed against the source Connection to retrieve the next load value.|
|Parameter Column Expression | The definition for a Parameter to override the ColumnName. Sometimes we need to use a column that was joined from another table to determine change like the LastModifiedDate. Normally this table join will use an alias and we can then override the WHERE clause here. EG. e.[LastModifiedDate] or e.@@this.|
|Parameter SQL Expression | In this column, we can define more complex scenarios like `(ISNULL(@@this, GETDATE()) > ? OR ISNULL(@@this, GETDATE()) <= ?)`.|
|Parameter Override | A definition for an override of the default Parameter definition for SSIS. This will override the ? in the WHERE [ColumnName] = ? clause.|
|Parameter Ordinal | When multiple Parameters are defined for the same Object, the Parameter Ordinal directs the order in which they are applied in a SQL statement.|
|Description | Optional parameter description, to capture free-format notes.|
|Project Parameter | Enabling Is Project Parameter will generate this parameter as an SSIS Project Parameter.|
|Not Persisted | Enabling Is Not Persisted will ensure that this parameter is not to be persisted in [BimlCatalog].[ssis].[ConfigVariable] table.|

## References
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this Parameter belongs to.|
|Version | Reference to the Version that this Parameter belongs to.|
|Connection | Every parameter refer to an object that refers to its connection.|
|Object | Every parameter must refer to an Object.|
|Column | Parameters may refer to a specific Column.|

