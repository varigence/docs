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

A **Configuration** can be quickly added from [**Configuration Editor**](xref:configurations).
If a field supports and override it will have clickable button with the following icon (<img class="icon-inline" src="../metadata-editors/images/svg-icons/attributes.svg" /><!--![Overriding Possible Icon -icon-inline](../metadata-editors/images/svg-icons/attributes.svg "Overriding Possible Icon")-->).

![Overriding Possible](images\bfx-configuration-override-support.png "Overriding Possible")

Clicking this button will open a **Add Attribute Dialog Box** that is populated with the required *ATTRIBUTE* value.

![Initial Add Attributes Dialog](images\bfx-configuration-add-attribute-start.png "Initial Add Attributes Dialog")

Next the level of the **Configuration Override** needs to be set by assigning *ATTRIBUTE TYPE* (and any supporting fields if required).

Enter the value to be used as the **Configuration Override** in the *ATTRIBUTE VALUE* field.

![Final Add Attributes Dialog](images\bfx-configuration-add-attribute-end.png "Final Add Attributes Dialog")

> [!IMPORTANT]
> Don't forget to click the **Save Button** (<img class="icon-inline" src="../metadata-editors/images/svg-icons/save.svg" /><!--(![Save Icon -icon-inline](../metadata-editors/images/svg-icons/save.svg "Save Icon")-->) to record the changes.
>

### [Advanced Method](#tab/configuration-override-advanced)

The following method is classified as advanced due to the *ATTRIBUTE* field needing to be manually entered.
The advanced method is not recommended to be used unless the user is completely familiar with the `{ConfigurationKey}_{FieldName}` naming pattern.

When using any entity editor that support the **Attributes Tab** the **Add** (<img class="icon-inline" src="../metadata-editors/images/svg-icons/add.svg" /><!--![Add Icon -icon-inline](../metadata-editors/images/svg-icons/add.svg "Add Icon")-->) button can be used to create an **Attribute**.

![Initial Add Attribute From Project](images\bfx-configuration-add-attribute-project.png "Initial Add Attribute From Project")

Clicking that **Add** button will populate the *ATTRIBUTE TYPE* (and required associated fields) for the context of the currently selected entity.

![Initial Add Attributes Dialog From Project](images\bfx-configuration-add-attribute-project-initial.png "Initial Add Attributes Dialog From Project")

The specific **Configuration Override** desired will have to be manually entered into the *ATTRIBUTE* field.
Though they do not appear as selectable values, it can still be manually entered without error.

> [!NOTE]
> The `{ConfigurationKey}_{FieldName}` naming pattern used by to identify the **Configuration Override** will not populate in the selection box of allowed values.
>
> Not all combinations of `{ConfigurationKey}_{FieldName}` combinations are supported in all versions.
> Use care when manually entering in values and when it doubt, use the standard method for **Configuration Override** entry.
>

***

## Checking if an Override Exists

A **Configuration Override** is persisted as a unique type of **Attribute**.
Any location in BimlFlex that would list out the associated **Attributes** will also list the **Configuration Overrides** along with the **Standard Attributes**.

It is recommended that when specifically looking for a **Configuration Override** that the the **Configuration Editor** is used.
This will give a complete view of all **Configuration Overrides** for a specific **Configuration**.

Examples are given below that represents how a **Configuration Override** would be shown across the **Attributes Tab**.
Overrides have been defined at each supported level to better communicate which **Configuration Override** will appear in each associated entity editor.

> [!NOTE]
> A **Configuration Override** can be identified as and **Attribute** with a `{ConfigurationKey}_{FieldName}` naming pattern.
> Outside of the **Configuration Editor** this will have to be manaully identified as they will be displayed alongside **Standard Attributes**.
>
> The value assigned to the override is entered into the *ATTRIBUTE VALUE* field.
> This is different from a **Standard Attribute** which follows a different pattern.
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

### [All Attributes](#tab/existing-override-attributes)

![Overrides by Attribute](images\bfx-configuration-view-by-attribute.png "Overrides by Attribute")

***

> [!NOTE]
> The values used in the screenshots in tabs above are show for example only.
> They do not represent valid code or recommended practice.

## Example Scenarios

To better communicate the use of **Configuration Overrides** in practice, the functional scenarios below have been provided.
These cover a few real world examples that require the use of a **Configuration Override** along with the steps required to implement them.

### Overriding Type 2 Logic

> **Scenario**
> The business has another source handling the management of effectivity dates for a specific dimension.
>
> These effectivity dates should be used in place of standard `RowStartDate`, `RowEndDate` and `RowIsCurrent` **Configurations**.
>
> This is a scenario that only applies to a single dimension and all other dimensions with a Type 2 **Column** should use the standard pattern of terminating effectivity on load of the dimension.
>

<!-- TODO: Text: Explain that the following configuration overrides BimlFlex Type 2 logic and outsources the calculation. -->
<!-- TODO: Text: Walk through configuring the view. -->
<!-- TODO: Text: Show required overrides. -->
<!-- TODO: Text: Show data set before and after load into Dimension. -->

### One Time Historic Load

> **Scenario**
> The business is migrating creation and maintenance of an existing Type 2 Dimension to an identical one to be maintained in BimlFlex.
>
> Historic data for the dimensional attributes should be preserved, though the specific Surrogate Key values do not need to be maintained and can be regenerated.
>
> Once historic data is loaded the standard pattern of terminating effectivity on load should be applied.
>

<!-- TODO: Text: Reference the prior scenario step for step and then do the following after load: -->
<!-- TODO: Text: Removed/delete the Configuration Overrides. -->
<!-- TODO: Text: ALTER VIEW to point to not historic/live source. -->
<!-- TODO: Text: Show starting historic load before and after (same as above).  -->
<!-- TODO: Text: Show dataset of incoming new change from live system and dimension after.  -->
