---
uid: bimlflex-metadata-parameters
title: BimlFlex Parameters
summary: Documentation for parameters for load queries added in Parameters section or as Extension Points in BimlFlex
---

# Parameters

Parameters for load queries are added either as metadata in the Parameters sheet or via Extension Points. For high watermark delta loads and similar simple parameters adding the Parameter to the metadata will generate and include all required logic to the load process.

Extension Points can be added for more complex parameters that require custom logic.

Parameters added to a project, batch package or regular package can be used as any other SSIS parameter. BimlFlex applies standard practices for using parameters but supports any custom use of added parameters.

## Basic Parameters

The most common scenario is to add parameters to a source query or add parameters that hold details about the particular BI solution. The approach used for these scenarios are different.

When the parameter metadata is entered into BimlFlex Excel Add-in, BimlFlex uses the `[BimlCatalog]` database to manage parameterized source queries. Parameters are persisted in `[BimlCatalog].[bfx].[ConfigVariable]` and logged to `[BimlCatalog].[bfx].[AuditLog]`.

Here is an example of a parameter being stored in the `BimlCatalog` database in the `[bfx].[ConfigVariable]` table.

| SystemName | ObjectName                            | VariableName | VariableValue | ExecutionID |
| ---------- | ------------------------------------- | ------------ | ------------- | ----------- |
| AW_SRC     | AW_SRC.Sales.SalesPerson.ModifiedDate | LastLoadDate | 20/09/2015    | 109         |

## Parameters in BimlFlex

When a parameter is added to an object in BimlFlex, the metadata will be managed within BimlFlex and used to generate all the required components to track and update the value defined. Below demonstrates how a data parameter has been incorporated into a source to target loading package. Note that this load starts and ends with sequence containers that are specifically for managing this new parameter.

<!-- TODO: Review everything above. -->

### [SSIS Architecture](#tab/parameter-architecture-ssis)

![Parameters ETL Pattern](images/bfx-parameters-architecture-ssis.png "Parameters ETL Pattern") -->

Using the above process, a package that tracks the maximum ID as a parameter can be rerun any number of times. Each time BimlFlex will store the maximum value and update it as it increases over time.

The process starts before the main container. The first control flow task looks up any relevant parameters. LookupParameter is used to check the catalog table `[BimlCatalog].[bfx].[ConfigVariable]` for the parameter that matches the current object being loaded.

The parameter value will be injected in to the source query in the normal data flow as a `WHERE` clause using the specified logic from the metadata.

After the load the Set Parameters tasks will get the new value for the parameter and update the `[BimlCatalog].[bfx].[ConfigVariable]` table.

<!-- TODO: Reword above paragraph and align with ADF tone. -->

### [ADF Architecture](#tab/parameter-architecture-adf)

<!-- TODO: Take picture of ADF Archtecture -->
<!-- ![Parameters ETL Pattern](images/bfx-parameters-architecture-adf.png "Parameters ETL Pattern") -->

Activities are added to the beginning of the pipeline that retrieve the last value and the next value to be recorded after execution completes.

The initial Lookup Activity (`LKP_{Parameter}`) is used to check the BimlCatalog table `[bfx].[ConfigVariable]` for `[VariableName]` record labeled as the *PARAMETER* (`LastLoadDate`) value.
The retrieved `[VariableValue]` value is then used to define the starting range`*` for the Source Query.

The other Lookup Activity (`LKP_{ParameterToName}`) is used to query the Source System.
This uses the *PARAMETER SQL* against the *COLUMN* and stores the value in the pipeline as the *PARAMETER TO NAME* (`NextLoadDate`).

These values are then injected into the `WHERE CLAUSE` to limit values that are then returned from the Source System.

> [!NOTE]
> `*`: While the terms "starting range" and "ending range" have been used here, the actual comparison used is defined by the *OPERATOR* or *PARAMETER TO OPERATOR* fields respectively.
>
> Query Pattern: `[COLUMN]` `[OPERATOR]` `[PARAMETER]` AND `[COLUMN]` `[PARAMETER TO OPERATOR]` `[PARAMETER TO]`
>
> Example: `[SalesLT].[ModifiedDate]` > `LastLoadDate` AND `[SalesLT].[ModifiedDate]` <= `NextLoadDate`

The ending SQL Server Stored Procedure Activity (`LOG_{Parameter}`) is then used to persist the value retrieved by the *PARAMETER TO NAME* (`NextLoadDate`) into the BimlCatalog table `[bfx].[ConfigVariable]`.

***

## Creating Parameters in BimlFlex

Parameters can be added in BimlFlex through the **Parameters Editor**, accessible from the BimlFlex main menu.

> [!NOTE]
> For information on the **Parameters Editor** and its usage refer to the below guide:
>
> * BimlFlex Docs: [Parameters Editor](xref:parameters)

To add a new parameters, click the `+` button in the tree view menu.

![BimlFlex - Parameters Editor](images/bfx-parameters-editor.png "BmilFlex - Parameters Editor")

On this screen, toplevel configurations to **Connection**, **Object**, **Column** may be selected from dropdown menus.
Additional settings relating to the same parameter are maintained below, on the same page.
Fields highlighted in red are required to save the Parameter.
<!-- TODO: Rewrite -->

### Base Parameter

The Base Parameter settings are the core fields that are required for Package/Pipeline level Parameter.
With the exception of *PARAMETER SQL*, these are all Source System agnostic.
This means configuration of the base **Parameter** itself remains the same across Source Systems.
<!-- TODO: More detail -->

#### [Description](#tab/parameter-base)

|Field|Description|
|-|-|
| Connection | The **Connection** this parameter is associated with. Parameters can be associated with Connections, Objects and Columns.  Must be an existing **Connection**. |
| Object | The **Object** this parameter is associated with.  Must be an existing **Object**. |
| Column | The **Column** this parameter is associated with.  Must be an existing **Column**. |
| Parameter | The name of the parameter. |
| Operator | This defines the operator used in the `WHERE` clause in the source select query. For a high watermark load pattern, the `>` is commonly used to load data with a higher value than the last time. |
| Default | The parameter load value to use for the first load. |
| Datatype | The Data Type to use for the parameter. For Dates, this is commonly defined as `String` as SSIS sometimes finds it easier to deal with string representations.  Must be a valid [Data Type](#data-types). |
| Parameter SQL | The SQL Query to use to derive the new parameter value, commonly used to get the max value from the loaded data and use that as the from parameter value in the next load. |
| Parameter Ordinal | (Optional) The order of the parameter. |
| Description | (Optional) Free text description. |
<!-- TODO: More detail -->

#### [Example](#tab/parameter-base-example)

|Field|Description|
|-|-|
| Connection | AWLT_SRC |
| Object | SalesLT.Address |
| Column | ModifiedDate |
| Parameter | LastLoadDate |
| Operator | > |
| Default | 1900-01-01 |
| Datatype | String |
| Parameter SQL | See [Parameter SQL](#parameter-sql) for examples|
| Parameter Ordinal |  |
| Description |  |
<!-- TODO: More detail -->

***

### Parameter SQL

Although the field is named *PARAMETER SQL*, it is easier to this of this field as a Parameter *QUERY*.
In a SQL based Source System this will correlate to a SQL Statement that is appended to the the `WHERE` clause
<!-- TODO: More detail -->

#### [T-SQL (Microsoft)](#tab/parameter-sql-tsql)

<!-- TODO: More detail -->

#### [SnowSQL](#tab/parameter-sql-snowsql)

<!-- TODO: More detail -->

#### [Oracle](#tab/parameter-sql-oracle)

<!-- TODO: More detail -->

#### [Dynamics](#tab/parameter-sql-dynamics)

<!-- TODO: More detail -->

<!-- TODO: Call out Dynamics 3 types of behaviors -->

***

### Window Parameter

**Window Parameters** are configured to load between two points.
<!-- TODO: More detail -->

#### [Description](#tab/parameter-window)

|Field|Description|
|-|-|
| Parameter To Name | Useful for windowed loads or when it is not possible to derive the new parameter from the destination. When loading to Blob files it is not possible to query the created file to get the new parameter value, so this allows the from and to to be derived and applied in the source query using only the source data.  Cannot be same as Parameter Name. |
| Parameter To Operator | The Parameter To Operator - see above. |
<!-- TODO: More detail -->

#### [Example](#tab/parameter-window-example)

|Field|Description|
|-|-|
| Parameter To Name | NextLoadDate |
| Parameter To Operator | <= |
<!-- TODO: More detail -->

***

> [!IMPORTANT]
> These, along with `Execute SQL On Source`, are required fields when configuring a **Parameter** for ADF.

### Parameter Overrides

The override fields require more advanced usage.
They are provided to either apply alternate workarounds or replace the automate code generation with a manual text.
<!-- TODO: More detail -->

#### [Description](#tab/parameter-override)

|Field|Description|
|-|-|
| Execute SQL On Source | Execute SQL On Source - Whether to execute the SQL on the source. |
| Column Expression | Used to override the column part of the WHERE clause in the source query to tweak the column expression. Useful when extra logic is required for the filter. |
| Parameter SQL Expression | The Parameter SQL Expression. |
| Parameter Override | Used to override the parameter part of the WHERE clause in the source query to tweak the column expression. Useful when extra logic is required for the filter. |
| Not Persisted | Whether the parameter should be persisted to `BimlCatalog.bfx.ConfigVariable` |
| Project Parameter | Project level Parameters that are commonly available in all packages in the project. |
<!-- TODO: More detail -->

#### [Example](#tab/parameter-override-example)

|Field|Description|
|-|-|
| Execute SQL On Source | `true` |
| Column Expression |  |
| Parameter SQL Expression |  |
| Parameter Override |  |
| Not Persisted | `false` |
| Project Parameter | `false` |
<!-- TODO: More detail -->

***

> [!IMPORTANT]
> `Execute SQL On Source`, along with `Parameter To Name` and `Parameter To Operator`, are required fields when configuring a **Parameter** for ADF.

<!-- TODO: Review everything below. -->
## Defining and overriding the parameter behavior

There are several metadata fields to manage load parameters.

### Parameter Operator

This defines the operator used in the `WHERE` clause in the source select query. For a high watermark load pattern, the `>` is commonly used to load data with a higher value than the last time.

### Parameter Default

The parameter load value to use the first time the load happens, when there is no existing parameter value stored in the BimlCatalog database. For high watermark scenarios this is commonly a valid value guaranteed to be lower than any existing data, such as `1900-01-01` for dates. When adding dates in Excel, use the text-defining prefix so the data is kept as text rather than transformed into Excels internal date format, `'1900-01-01`.

### Parameter Data Type

The Data Type to use for the parameter. For Dates, this is commonly defined as `String` as SSIS sometimes finds it easier to deal with string representations.

### ParameterSql

The SQL Query to use to derive the new parameter value, commonly used to get the max value from the loaded data and use that as the from parameter value in the next load.

sample metadata definition to get the max column value in date format

```sql
MAX(CONVERT(VARCHAR(10), @@this, 121))
```

### ParameterToName, ParameterToOperator, ExecuteSqlOnSource

Useful for windowed loads or when it is not possible to derive the new parameter from the destination. When loading to Blob files it is not possible to query the created file to get the new parameter value, so this allows the from and to to be derived and applied in the source query using only the source data.

### ParameterColumnExpression

Used to override the column part of the WHERE clause in the source query to tweak the column expression. Useful when extra logic is required for the filter.

Example expression

```sql
COALESCE(ModifiedDate, CreatedDate)
```

### ParameterOverride

Used to override the parameter part of the WHERE clause in the source query to tweak the column expression. Useful when extra logic is required for the filter.

Example expression

```sql
DATEADD(dd, -3, ?)
```

## Parameters in Extension Points

Extension Point-based parameters are available for more complex scenarios where the logic needed for the flow and parameter isn't easily injected through the normal parameter process.

It also supports specifying Project level Parameters that are commonly available in all packages in the project.

### Extension Point Project Parameters

Add Extension Points in BimlStudio.

More information: [BimlFlex Extension Points](xref:bimlflex-extension-points)

![Create Project Parameter](../user-guide/images/bimlflex-ss-v5-extension-points-create-project-parameter.png "Create Project Parameter")

The newly created file contains some sample scripts:

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" target="ProjectName" #>

<Parameter Name="ServerName" DataType="String" IsRequired="true">localhost</Parameter>
<Parameter Name="UserName" DataType="String" IsRequired="true">varigence</Parameter>
<Parameter Name="UserPassword" DataType="String" IsRequired="true">P@ssw0rd!</Parameter>
```

The directives are required for the Extension Point. An additional attribute for the target of the Extension Point needs to be specified. For a project parameter it is the name of the project it targets.

Once the Project Parameter is defined through the Extension Point it can be reused throughout the project in either metadata or additional Extension Points as needed.

### Extension Point Package Parameters

Package Parameters only affect the individual package it targets. Package parameters can be used when a single package requires bespoke logic that doesn't fit the existing parameter logic. These parameters can be used for any logic and might not need to be persisted in the BimlCatalog database.

Add Extension Points in BimlStudio

![Create Package Parameter](../user-guide/images/bimlflex-ss-v5-extension-points-create-package-parameter.png "Create Package Parameter")

The newly created file contains some sample scripts:

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageVariable" target="ObjectName"#>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<#* CustomOutput.ObjectInherit = true; *#>
<Variable Name="TenantCode" DataType="String">UNK</Variable>
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```

The directives are required for the Extension Point. An additional attribute for the target of the Extension Point needs to be specified. For a package parameter it is the name of the package it targets.

Once the Package Parameter is defined through the Extension Point it can be reused throughout the Package in either metadata or additional Extension Points as needed.
