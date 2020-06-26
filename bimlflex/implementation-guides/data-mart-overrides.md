---
uid: bimlflex-data-mart-overrides
title: Data Mart Configurations and Overrides
---

# BimlFlex Configurations and the Data Mart

BimlFlex **Configurations** are used to apply and drive default behavior across multiple data architecture concepts.
At a high level, **Configuration** values control where/when they get applied and how they are calculated.

> [!TIP]
> For additional details on managing **Configuration**, **Attributes** and **Configuration Overrides** refer to the below guides:
>
> BimlFlex Docs: [](xref:configurations)
>
> BimlFlex Docs: [](xref:bimlflex-metadata-configurations)
>
> BimlFlex Docs: [](xref:attributes)
>

## Common Configurations

The below tabs outline common **Configurations** used in the Data Mart along with recommended field values.
These are the recommendations only if choosing to enable the **Configuration(s)** and if no prior standard is in place.
These can be adjusted to fit an organization's specific data standards.

### [Description](#tab/configuration-description)

| Configuration      | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| RowStartDate       | Defines the start of time definition for a row in the data warehouse.   |
| RowEndDate         | Defines the end of time definition for a row in the data warehouse.     |
| RowIsCurrent       | Flag to set if the row is current.                                      |
| RowIsInferred `*`  | Flag to set if the row is inferred.                                     |
| RowHashType1 `**`  | Defines the expression used to derive a row hash for type 1 attributes. |
| RowHashType2 `***` | Defines the expression used to derive a row hash for type 2 attributes. |

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

| Configuration      | SQL Source Expression               | SSIS Dataflow Expression          |
| ------------------ | ----------------------------------- | --------------------------------- |
| RowStartDate       | GETDATE()                           | (DT_DBTIMESTAMP2, 7)GETDATE()     |
| RowEndDate         | CONVERT(DATETIME2(7), '9999-12-31') | (DT_DBTIMESTAMP2, 7)"9999-12-31") |
| RowIsCurrent       | CONVERT(BIT, 1)                     | true                              |
| RowIsInferred `*`  | CONVERT(BIT, 0)                     | false                             |
| RowHashType1 `**`  |                                     | [vck@@this1]                      |
| RowHashType2 `***` |                                     | [vck@@this1]                      |

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

## Setting a Configuration for the Data Mart

All **Configurations** are global and set in the [**Configuration Editor**](xref:configurations).
These can be enabled and disable for each data architecture concept.

> [!WARNING]
> **Configurations** are global, so be aware of prior configurations before changing any of the mentioned values.
> Some **Configurations**, such as `RowIsCurrent`, may already be being used by the Staging or Data Vault Integration Stages.
> Any changes to a field value will impact all Integration Stages where the **Configuration** is enabled.
> If logic needs to be different between Integration Layers consider a project level [**Configuration Override**](#overriding-configurations).
>

### Enabling A Configuration

In order for a **Configuration** to be applied the associated *{Concept} ATTRIBUTE* will need to be configured.
For the Data Mart this is either the *DIM ATTRIBUTE* or *FACT ATTRIBUTE* fields for a Dimension or Fact respectively.

#### [Example Image](#tab/configuration-example-image)

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

## Overriding Configurations

When a scenarios requires differing/conflicting **Configurations**, a **Configuration Override** can be applied.
A **Configuration Override** can be configured at the **Connection**, **Batch**, **Project** or **Object** level.
**Configurations** are applied at an object level so a column level override is not applicable/supported.

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

> [!NOTE]
> A **Configuration Override** is persisted as a unique type of **Attribute**.
> The *ATTRIBUTE* field uses a `{ConfigurationKey}_{FieldName}` naming pattern to identify the **Configuration Override**.
> The value to be used as the override is then entered into the *ATTRIBUTE VALUE* field.
>
> This is different from a **Standard Attribute** and should not be confused or mistaken as improperly entered **Attribute**.
>

### [By Configuration](#tab/existing-override)

![Overrides by Configuration](images\bfx-configuration-view-by-configuration.png "Overrides by Configuration")

### [By Connection](#tab/existing-override-connection)

![Overrides by Connection](images\bfx-configuration-view-by-connection.png "Overrides by Connection")

### [By Batch](#tab/existing-override-batch)

![Overrides by Batch](images\bfx-configuration-view-by-batch.png "Overrides by Batch")

### [By Project](#tab/existing-override-project)

![Overrides by Project](images\bfx-configuration-view-by-project.png "Overrides by Project")

### [By Object](#tab/existing-override-object)

![Overrides by Object](images\bfx-configuration-view-by-object.png "Overrides by Object")

### [All Attributes](#tab/existing-override-object)

![Overrides by Attribute](images\bfx-configuration-view-by-attribute.png "Overrides by Attribute")

***

> [!NOTE]
> The values used in the screenshots in tabs above are show for example only.
> They do not represent valid code or recommended practice.

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
