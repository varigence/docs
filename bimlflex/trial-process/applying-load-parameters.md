# Applying Load Parameters

## Supporting Videos

![Applying Load Parameters -center](https://www.youtube.com/watch?v=tbjsHVV-HfU?rel=0&autoplay=0 "Applying Load Parameters")

## Supporting BimlFlex Documentation

- @bimlflex-metadata-parameters

## Adding Parameters

How to derive a valid delta is an important steps in the analysis of a source system. The delta is the set of changes that has happened in the source since the last load into the Data Warehouse. Instead of loading every row from the source every time, only loading the delta allows the minimum amount of data to be processed by the extract mechanism.

For some sources there are change deltas presented for easy consumption, others have Change Data Capture (CDC) or Change Tracking (CT) enabled. Some sources have no concept of change tracking so the data warehouse architect needs to analyze change patterns and derive an alternate change detection or delta sourcing approach.

One common approach is to use a high watermark column that serve as a parameter for loading. The columns max value after each load is stored in the parameters table in the BimlCatalog and that value is used as a query parameter on the next load.

BimlFlex has direct support for parameter management, and can either use a simple single value for sources where the new value can be easily derived (such as for a database destination), or it can support source windowing by querying both the from and to values directly from the source for blob storage destinations.

The load process can use any number of parameters and the get and set process can be tweaked to match the sourcing requirements through the Extension Points feature.

For the trial, a high watermark load parameter is used. The AdventureWorks LT source system has been analyzed and the `ModifiedDate` column has been determined to be trustworthy enough to be used as a high watermark column. Table loads can use this column as a parameter to only get changed data since last load.

Add the following metadata to the Parameters sheet to add load parameters to the SalesOrderDetail and SalesOrderHeader source tables.

| Connection       | Object                   | ColumnName   | ParameterName  | ParameterOperator | ParameterDefault | ParameterDataType | ParameterSql |
| ---------------- | ------------------------ | ------------ | -------------- | ----------------- | ---------------- | ----------------- | ------------ |
| AdventureWorksLT | SalesLT.SalesOrderDetail | ModifiedDate | LastLoadedDate | >                 | '1900-01-01      | String            | MAX(@@this)  |
| AdventureWorksLT | SalesLT.SalesOrderHeader | ModifiedDate | LastLoadedDate | >                 | '1900-01-01      | String            | MAX(@@this)  |

The parameters are defined per source object and source column name. The Parameter Name is used in the parameter management as the descriptive name. The default value is used when there is no existing value stored, such as the first time the data is loaded. As Excel can automatically interpret a date string and store it in its internal representation the default is added to Excel using the string identifier `'` first. The `ParameterSql` is the query that will be run on the Staging table after the load completes to identify the next load from parameter value. The `@@this` shortcut refers to the current `ColumnName`.

The extract packages are expanded with the required get and set parameter tasks and the source queries are expanded with the required `WHERE` SQL syntax to only load data that changed since last load.

As the parameters are stored in the `[ssis].[ConfigVariable]` table in the BimlCatalog database it is necessary to reset these if a new initial load is performed, such as after rebuilding the persistent staging tables. If the tables are emptied and the load parameter is kept, a load will not load any of the existing source data to the staging tables.
