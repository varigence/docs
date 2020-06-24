---
uid: bimlflex-data-mart-overrides
title: Data Mart Configurations and Overrides
---

# BimlFlex Configurations and the Data Mart

**Configurations** are used by BimlFlex to apply and drive default behavior across varying data architecture concepts.
At a high level, these will control what concepts they get applied to and how they are calculated or retrieved.

> [!TIP]
> For additional details on managing **Configuration**, **Attributes** and **Configuration Overrides** refer to the below guides:
>
> BimlFlex Docs: [](xref:configurations)
>
> BimlFlex Docs: [](xref:bimlflex-metadata-configurations)
>
> BimlFlex Docs: [](xref:attributes)
>

## Setting a Configuration for the Data Mart

Regardless of what Integration Stage you are configuring, all **Configurations** are set in the [**Configuration Editor**](xref:configurations).

### Enabling A Configuration

In order for a **Configuration** to be applied the associated *{Concept} ATTRIBUTE* will need to be configured.
For the Data Mart this is either the *DIM ATTRIBUTE* or *FACT ATTRIBUTE* fields.

#### [Example Image](#tab/snowsql-connection-template)

![Enabling A Configuration for Dimensions](images\bfx-configuration-enable-example.png "Enabling A Configuration for Dimensions")

#### [Attribute Value List](#tab/configuration-attribute-values)

| Value   | Description                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------ |
| Ignore  | Do not add this **Configuration** to the applied Concept.                                              |
| Default | Calculate using the value in the *CONFIGURATION DEFAULT* field.                                        |
| Derived | Calculate using the value in the *SQL SOURCE EXPRESSION* `*` or *SSIS DATAFLOW EXPRESSION* `**` field. |
| Hash    | Apply hashing logic to the applicable columns.                                                         |
| Source  | Retrieve from a column in the Source with the same name as the *CONFIGURATION VALUE*.                  |
| Target  | Retrieve from a column in the Target with the same name as the *CONFIGURATION VALUE*.                  |

> [!NOTE]
> \*: When using a `SQL Based ELT` **Connection**.
>
> \*\*: When using a **Project** *INTEGRATION TEMPLATE* of `SSIS: Source -> Target` and NOT using a `SQL Based ELT` **Connection**.

***

> [!IMPORTANT]
> The `RowIsInferred` **Configuration** will not be used unless the `DmInferDim` **Setting** is enabled.
>
> When enabling the `DmInferDim` **Setting** ensure that the `RowIsInferred` **Configuration** is also enable for *DIM ATTRIBUTE*.
>

Once enabled, the associated **Configuration** will be applied to every instance of the associated concept, unless there is an associated **Setting** preventing this.
If required, a [**Configuration Override**](#configuring-an-override) can be applied at either a **Connection**, **Batch**, **Project** or **Object** level.

> [!TIP]
> For additional details on **Configurations** and their definitions refer to the below guide:
>
> BimlFlex Docs: [](xref:configurations)
>
> BimlFlex Docs: [](xref:bimlflex-metadata-configurations)
>

## Applicable Configurations

The below tables outline common **Configurations** used in the Data Mart and which ones have associated **Settings**.


### [Description](#tab/configuration-description)

| Configuration      | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| RowStartDate       | Defines the start of time definition for a row in the data warehouse.                              |
| RowEndDate         | Defines the end of time definition for a row in the data warehouse.                                |
| RowIsCurrent       | Flag to set if the row was inferred                                                                |
| RowIsInferred `*`  | Flag to set if the row was inferred.                                                               |
| RowHashType1 `**`  | Defines the expression used to derive a row hash for type 1 attributes in a destination dimension. |
| RowHashType2 `***` | Defines the expression used to derive a row hash for type 2 attributes in a destination dimension. |

### [Value](#tab/configuration-value)

| Configuration      | Value (Column Name) |
| ------------------ | ------------------- |
| RowStartDate       | FlexRowStartDate    |
| RowEndDate         | FlexRowEndDate      |
| RowIsCurrent       | FlexRowIsCurrent    |
| RowIsInferred `*`  | FlexRowIsInferred   |
| RowHashType1 `**`  | FlexRowHashType1    |
| RowHashType2 `***` | FlexRowHashType2    |

### [Data Type](#tab/configuration-data-type)

| Configuration      | Data Type                      |
| ------------------ | ------------------------------ |
| RowStartDate       | DataType="DateTime2" Scale="7" |
| RowEndDate         | DataType="DateTime2" Scale="7" |
| RowIsCurrent       | DataType="Boolean"             |
| RowIsInferred `*`  | DataType="Boolean"             |
| RowHashType1 `**`  | DataType="Binary" Length="20"  |
| RowHashType2 `***` | DataType="Binary" Length="20"  |

### [Default](#tab/configuration-default)

| Configuration      | Default      | Implied Conversion                         |
| ------------------ | ------------ | ------------------------------------------ |
| RowStartDate       | '1900-01-01' | `1900-01-01 00:00:00.000000`               |
| RowEndDate         | '9999-12-31' | `9999-12-31 00:00:00.000000`               |
| RowIsCurrent       | 1            |                                            |
| RowIsInferred `*`  | 0            |                                            |
| RowHashType1 `**`  | 0            | `0x00000000000000000000000000000000000000` |
| RowHashType2 `***` | 0            | `0x00000000000000000000000000000000000000` |

### [Expression](#tab/configuration-expression)

| Configuration      | SQL Source Expression                               | SSIS Dataflow Expression                      |
| ------------------ | --------------------------------------------------- | --------------------------------------------- |
| RowStartDate       | GETDATE()                                           | (DT_DBTIMESTAMP2, 7)GETDATE()                 |
| RowEndDate         | CONVERT(DATETIME2(7), '9999-12-31 00:00:00.000000') | (DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000" |
| RowIsCurrent       | CONVERT(BIT, 1)                                     | true                                          |
| RowIsInferred `*`  | CONVERT(BIT, 0)                                     | false                                         |
| RowHashType1 `**`  |                                                     | [vck@@this1]                                  |
| RowHashType2 `***` |                                                     | [vck@@this1]                                  |

### [Attributes](#tab/configuration-concept-attributes)

| Configuration      | Dim Attribute | Fact Attribute |
| ------------------ | ------------- | -------------- |
| RowStartDate       | Derived       | Ignore         |
| RowEndDate         | Derived       | Ignore         |
| RowIsCurrent       | Derived       | Ignore         |
| RowIsInferred `*`  | Derived       | Ignore         |
| RowHashType1 `**`  | Hash          | Hash           |
| RowHashType2 `***` | Hash          | Ignore         |

***

> [!NOTE]
> \*: Requires the **Setting** `DmInferDim` to be enabled prior to use.
>
> \*\*: Only used if there is a **Column** with a *CHANGE TYPE* of `Type 1` in the **Object**.
>
> \*\*\*: Only used if there is a **Column** with a *CHANGE TYPE* of `Type 2` in the **Object**.
>


## Overriding Configurations


<!-- TODO: Text: Exceptions are needed at times.  Base configurations are the standard and overrides are an exception. -->
<!-- TODO: Text: A **Configuration Override** is a sub-type of an **Attribute**.  Explain usage pattern: {Config}_{Setting}. -->

### [Standard Method](#tab/configuration-override)

<!-- TODO: Text: Outline steps of setting from **Configuration Editor** -->

### [Advanced Method](#tab/configuration-override-advanced)

<!-- TODO: Text: Warn user that it is not recommended. -->
<!-- TODO: Text: Explain usage pattern: Key = {Config}_{Setting} and Value = {New Value} -->

***

## Checking if an Override Exists

There are various areas within BimlFlex where you can view any existing **Configuration Override**.
When wanting to get a global view of what exists, the **Configuration Editor** is recommended as it will give you a complete view of all **Configuration Overrides** for a specific **Configuration**.
Optional methods are also provided below to highlight where you can view a **Configuration Override** in other areas of navigation.

### [From Configurations](#tab/existing-override)

<!-- TODO: Text: Best place to see if one exists anywhere. -->

### [From Connection](#tab/existing-override-connection)

<!-- TODO: Text: All **Objects** using the **Connection**. -->

### [From Batch](#tab/existing-override-batch)

<!-- TODO: Text: **Batch** level overrides. -->

### [From Project](#tab/existing-override-project)

<!-- TODO: Text: **Project** level overrides. -->

### [From Object](#tab/existing-override-object)

<!-- TODO: Text: **Project** level overrides. -->

### [From Column](#tab/existing-override-column)

<!-- TODO: Text: Not supported for **Configurations**. -->

***

## Example Scenarios

<!-- TODO: Text: Intro calling out that we will be going through some use can scenarios -->

### Overriding Type 2 Logic

<!-- TODO: Text: Set the scenario that you have a complex Type 2 configuration and can not use the standard delta pattern. -->
<!-- TODO: Text: Explain that the following configuration overrides BimlFlex Type 2 logic and outsources the calculation. -->
<!-- TODO: Text: Walk through configuring the view. -->
<!-- TODO: Text: Show required overrides. -->
<!-- TODO: Text: Show data set before and after load into Dimension. -->

### One Time Historic Load

<!-- TODO: Text: Set the scenario that you have a history from another source and want to migrate to BimlFlex. -->
<!-- TODO: Text: Reference the prior scenario step for step and then do the following after load: -->
<!-- TODO: Text: Removed/delete the Configuration Overrides. -->
<!-- TODO: Text: ALTER VIEW to point to not historic/live source. -->
<!-- TODO: Text: Show starting historic load before and after (same as above).  -->
<!-- TODO: Text: Show dataset of incoming new change from live system and dimension after.  -->
