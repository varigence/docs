---
uid: bimlflex-app-reference-documentation-Parameters
title: BimlFlex App Definition for Parameters
summary: Documentation of functionality within BimlFlex for Parameters
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Parameters

[**Parameters**](xref:bimlflex-concepts-metadata-parameters) in BimlFlex are used to managed load windows. For high water mark delta loading and similar simple parameters such as filters, adding a parameter to the design will include all required logic to the generated data logistics processes.

## Overview
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Parameter Name | The name of the selected parameter.|
|Parameter Operator | The operator that is to be used when retrieving the parameter value. Example is `>=` that will translate to the WHERE clause as `[ParameterName] >= <value>`.|
|Parameter Default | The default value that the parameter will be se to the first time the process is executed. An example would be for a numeric field `0` and a date `1900-01-01`.|
|Parameter Data Type | The data type for a parameter being used in the data logistics processes. Here you should enter the data type using the following format DATATYPENAME.|
|Parameter SQL | The query that will be used to lookup the parameter value from the source connection. The placeholder `@@this` is supported in this field. This will be replaced with the parameter name (To Name) and inserted into the SQL statement. Eg: `MAX(@@this)` and `CONVERT(VARCHAR(19), MAX(@@this), 120)` for dates.|
|Parameter To Name | This attribute specifies the name of the parameter being used in the data logistics process. Use this attribute to define a from- and to variable on a column.|
|Parameter To Operator | The operator to be used in combination with the `Parameter To Name`.|
|Execute SQL on Source | Specify if the `ParameterSql` should be executed against the source connection to retrieve the next parameter value.|
|Parameter To Expression | Override the `To Expression` for the Set Variable Activity used in Azure Data Factory to evaluate the `To Parameter` value.|
|Parameter Column Expression | Overrides the column name in the query that will be used to retrieve the next parameter value. If not provided, the column name as defined for the parameter will be used in the query. Sometimes a column is required that needs to be joined from another table.|
|Parameter SQL Expression | Specific parameter SQL can be inserted directly into the source selection query, for example in an ADF Copy Activity. This will not generate lookups and commit parameter values to the BimlCatalog. Using this feature, more complex scenarios like `(ISNULL(@@this, SYSDATETIME()) > <value> OR ISNULL(@@this, SYSDATETIME()) <= <value>)` can be supported.|
|Parameter From Sql | Override the FROM clause in the SQL query that is used to lookup the parameter value from the source connection. If not provided, the object name will be used.|
|Parameter Where Sql | Override the WHERE clause in the SQL query that is used to lookup the parameter value from the source connection. If not provided, the object name will be used.|
|Parameter Override | A definition for an override of the default parameter definition for SSIS. This will override the ? in the WHERE [ColumnName] = ? clause.|
|Parameter Ordinal | When multiple parameters are defined for the same object, the parameter ordinal directs the order in which they are applied in a SQL statement.|
|Description | Optional parameter description, to capture free-format notes.|
|Project Parameter | Enabling `Is Project` will generate this parameter as an SSIS Project Parameter.|
|Not Persisted | Enabling Is Not Persisted will ensure that this parameter is not to be persisted in [BimlCatalog].[ssis].[ConfigVariable] table.|

## References
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this Parameter belongs to.|
|Version | Reference to the Version that this Parameter belongs to.|
|Connection | The connection limits/shows the available objects and columns for which the parameter can be defined.|
|Object | Every parameter must refer to an object.|
|Column | Parameters may refer to a specific column.|

