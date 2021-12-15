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
  
| Property | Description |
| --------- | ----------- |
|ParameterName | The name of the selected parameter.|
|ParameterOperator | This attribute define a operator to be used when retrieving our parameter value. Example is `>=` that will translate to the where clause as `[ParameterName] >= ?`|
|ParameterDefault | Here you can define the default value that the parameter contains the first time the package is executed. Example would be for a numeric field `0` and a date `1900-01-01`|
|ParameterDataType | Here we define the data type for a parameter being used in the solution packages. Here you should enter the data type using the following format DATATYPENAME|
|ParameterSql | In this column, we define an aggregate that we want to use when retrieving our parameter value after the load. The placeholder `@@this` is replaced with the parameter name and inserted into the SQL aggregation. Eg: `MAX(@@this)` and `CONVERT(VARCHAR(19), MAX(@@this), 120)` for dates.|
|ParameterToName | This attribute specify the name of the parameter being used in the package. Use this attribute to define a from and to variable on a column.|
|ParameterToOperator | This attribute define an operator to be used in combination with ParameterToName|
|ExecuteSqlOnSource | Specify if the `ParameterSql` should be executed on the source connection to retrieve the next load value.|
|ParameterColumnExpression | In this column, we can define an override to be used instead of the ColumnName. Sometimes we need to use a column that was joined from another table to determine change like the LastModifiedDate. Normally this table join will use an alias and we can then override the WHERE clause here. EG. e.[LastModifiedDate] or e.@@this.|
|ParameterSqlExpression | In this column, we can define more complex scenarios like `(ISNULL(@@this, GETDATE()) > ? OR ISNULL(@@this, GETDATE()) <= ?)`.|
|ParameterOverride | In this column we define an override for the default parameter definition. It will override the ? in the following clause to whatever was defined. `WHERE [ColumnName] = ?`.|
|ParameterOrdinal | If we are defining multiple parameters for the same object, we use this column to choose the order in which they are applied in SQL statements.|
|Description | Optional metadata to provide a description.|
|IsProjectParameter | |
|IsNotPersisted | `Y` if this parameter is not to be persisted in [BimlCatalog].[ssis].[ConfigVariable] table.|

## References
  
| Property | Description |
| --------- | ----------- |
|CustomerUID | Reference to the Customer that this Parameter belongs to.|
|VersionUID | Reference to the Version that this Parameter belongs to.|
|ConnectionUID | Every parameter refer to an object that refers to its connection.|
|ObjectUID | Every parameter refer to an object.|
|ColumnUID | Some parameters refer to an column.|

