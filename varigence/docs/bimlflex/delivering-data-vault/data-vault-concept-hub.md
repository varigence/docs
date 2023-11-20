---
title: Data Vault Hubs
description: Overview of Data Vault Hubs
tags: [BimlFlex, Conceptual]
---
# Hubs

A Hub in Data Vault is the representation of a **Core Business Concept**. These are the main 'things' that are important to an organisation. In the Data Vault model, the Hub serves as integration point when merging together disparate data sets.

**Core Business Concepts** are related to other ones through [**Natural Business Relationships**](bimlflex-data-vault-concept-link) (Links) and are described using [**Context**](bimlflex-data-vault-concept-satellite) (Satellites) entities.

Any Hub entity in Data Vault can therefore have multiple active relationships to other entities through [Links](bimlflex-data-vault-concept-link).

Each Hub maintains a distinct list of [**Integration Keys**](bimlflex-data-vault-integration-keys-and-relationships) that represent unique instances of the identified concept.

## A Business Focused Approach for Data Integration

To be able to integrate data across systems and versions, the actual business terms used should be identified and used where possible to name Hubs and the corresponding Integration Key column.

In BimlFlex, this is supported through the [**Business Modeling**](bimlflex-business-modeling) feature. [**Business Modeling**](bimlflex-business-modeling) supports an interactive workshop-style modeling of the involved processes and terminology, so that the right business terms can be defined.

The resulting Business Entities can be mapped to Data Vault Hubs in the [**Object Editor**](bimlflex-object-editor) or the Data Vault [**Accelerator**](bimlflex-data-vault-accelerator).

The Hub should accommodate all incoming data without judging, therefore it is recommended to use the most forgiving data type available.

For the Integration Key, it is recommended to use a wide Unicode (nvarchar) datatype. This accommodates data coming from many sources. This configuration allows data to be integrated that might not adhere to the earlier assumed datatype of the Integration Key.
:::danger


> Hubs are the core building block of the Data Vault and should reflect the **Core Business Concept** (CBC).
> The implementation team is recommended to identify and map Hubs to the **Business Model** as a priority.

:::


## Implementation of the Hub Concept in BimlFlex

The Hub contains the distinct set of Integration Keys from the source data set. It is an insert-only table. Any effectiveness or descriptive attributes are tracked in attached Satellites.

A Hub is defined in the metadata editor as a collection of source-to-target mappings at column level from one or more data sources to the target Hub Object.

There are two ways to define a Hub in BimlFlex:

1. Accelerating a Hub
1. Manually defining a Hub

### Accelerating a Hub Object

The easiest and quickest way to define a new Hub is to define one based on source metadata using the Data Vault [**Accelerator**](bimlflex-data-vault-accelerator).

This way, the target Hub Object and source-to-target mappings that facilitate the loading process are added automatically. If required, this can be updated by modifying Accelerator settings or manually updating the Hub Object.

For more information, please refer to the [**Accelerator**](bimlflex-data-vault-accelerator) documentation.

#### Hub Naming Convention

The name of the Hub, and how this will be derived in the **Accelerator**, is managed through a number of **Settings**:

* The [*Append Hub*](bimlflex-app-reference-documentation-setting-DvAppendHub) setting in the *Data Vault Naming* setting category contains the label which will be added to a new Hub **Object**, for example 'HUB'
* Whether the above label will be added as a `Prefix` or `Suffix` is managed in the [*Suffix or Prefix Object*](bimlflex-app-reference-documentation-setting-SuffixOrPrefixObject) setting which is found in the *Naming* setting category

Varigence recommends to use `HUB`, or just `H` as the convention to name the Hub in the *Append Hub* setting. The value `HUB` is the default.

The Hub name will be derived from the *Business Entity* or *Business Name* of the source object. If both the *Business Entity* and *Business Name* are set then the *Business Entity* value will take precedence.

Otherwise, the *Object Name* from the source object will be used to name the target Hub.

#### Inferred Hubs

In cases where the source object directly maps to a Link, or when additional **Integration Keys** are defined, the Accelerator will display a placeholder Hub.
:::note


> There isn't an **Object Type** to define a `Stub Hub`. It is just a `Hub`.

:::


### Manually defining a Hub Object

To manually create a Hub in BimlFlex, an **Object** first needs to be defined in the **Connection** that represents the Data Vault.

![Defining a new Hub Object](images/hub-manual-create-object.png "Defining a new Hub Object")

Using the [**Object Editor**](bimlflex-object-editor), a new **Object** with the Object Type `Hub` can be created.

Once the **Object** is available, the relevant **Columns** can be added. In order to generate the correct data integration code, the **Columns** must match the conventions of the solution.

By default, a Hub Object contains at least two **Columns**: a [**Surrogate Key**](xref:bimlflex-data-vault-integration-keys-and-relationships#surrogate-keys) and an **Integration Key**. Other columns can be either added or configured using the [**Configurations**](xref:bimlflex-data-vault-concept-hub#hub-column-configuration).

### Manually adding Hub Mappings

When the new Hub object has been defined, it can be mapped to from the source objects. In BimlFlex, the source-to-target mappings are defined against as part of the source object using the **Object Editor**.

In BimlFlex, you define a 'main' source object to be the central data set that populates the Hub directly. This is configured by creating a **Column Mapping** from the designated **Integration Key** in the source object to its counterpart in the Hub. The mapping is done to the Hub **Integration Key**, not to the **Surrogate Key** because the latter is derived from the **Integration Key**.

As an example, in the screenshot below the 'SalesLT.Product' object is mapped to the 'Hub_Example' object by mapping the source **Integration Key** to the target (Hub) **Integration Key** which is called 'Example_BK'.

![Creating a Hub Mapping](images/hub-manual-create-mapping.png "Creating a Hub Mapping")

Hub objects can be loaded from multiple source objects, but this does not necessarily has to be mapped for all of them. If there are references defined between the source objects using **Integration Keys**, and these references are pointing to a source object that loads a Hub then all source objects can load that Hub.

This is controlled using the The [*Infer Link Hub*](bimlflex-app-reference-documentation-setting-DvInferLinkHub) setting in the *Data Vault* setting category. By default, this will be disabled and BimlFlex will manage the order of load dependency to avoid Referential Integrity issues.

## Hub Column Configuration

By default, BimlFlex will add the following **Columns** to a Hub. These are not visible in the **Object** details, and do not need to be manually added.

* [Load Date Time Stamp](xref:bimlflex-data-vault-best-practices#roweffectivefromdate)
* [Record Source](xref:bimlflex-data-vault-best-practices#record-source)
* [Audit Id](xref:bimlflex-data-vault-best-practices#audit-id)

Columns such as these are defined in the BimlFlex [**Configurations**](bimlflex-configuration-editor). The **Configurations** screen in the BimlFlex App enables modelers to define which **Columns** apply to certain **Object Types**. For a **Column** to be added to the Hub, the **Configuration** will need to be configured so that the *Hub Attribute* is set to be `Derived`.

If additional standard **Columns** are required for the Hub, then these are recommended to be implemented as **Configurations**.

## Integration Key Definition

BimlFlex makes use of a concatenated key to simplify implementation and allows for single key integration and is required when choosing a Data Vault implementation without using Hash Keys.

The [*Use Hash Keys*](bimlflex-app-reference-documentation-settings-index) setting can be used to toggle between using a hashed or natural **Integration Key**. Integrate without a `Hash` which is very efficient for modern data warehouse solutions like [Snowflake](https://www.snowflake.com/) and [Azure Synapse](https://azure.microsoft.com/en-us/services/synapse-analytics/).

The Hub Integration key needs to accommodate data from existing sources as well as being able to accommodate changes in the existing sources and new sources added later.

The CBC/EWBK represented by the Hub is designed to integrate multiple systems. To support this, it is most common to use  Unicode string representation. The key length need to accommodate any reasonable Integration key that can be foreseen.

The default key length generated by BimlFlex using the Data Vault Accelerator is String/NVARCHAR(100).

BimlFlex uses a single Integration Key column to allow source agnostic integration. BimlFlex provides the `FlexToBk()` expression to allow easy construction of the Integration Key from multiple source columns and data types.

Using the Infer Integration Key setting in the metadata importer will add the Integration Key to the source table as a new column. It uses the `FlexToBk(ProductID)` custom SSIS Expression to build the Integration key. The default settings will concatenate the columns together with tilde `~` as the default concatenation character. The `Product_BK` only has a single column mapped. Adding additional columns to the expression will result in a single key with the columns concatenated.

`FlexToBk(ProductID)` will generate Product_BK column data from the ID only (example: `680`)

`FlexToBk(Name,ProductNumber)` will generate Product_BK column data from the Name concatenated with the ProductNumber (example: `HL Road Frame - Black, 58~FR-R92B-58`) with the concatenation character as separator (the `~`)

`FlexToBk(@@rs,ProductID)` will generate Product_BK column data from the Connection Record Source and the ID (example: `awlt~680`)

### Keys with Multiple Columns

Some Hub designs require multiple source key columns to define the Hub through the Integration Key. Sources with key overlap might need a system or source string added, multiple source keys might need to be combined to form a distinct Hub Integration key.
:::note


> Deriving the Integration keys for the CBC/EWBK's is one of the more important design exercises in modeling the Data Vault. This guide does not include details on the required analysis and design process.

:::


For these columns, BimlFlex concatenates them into a single string and separates them with the configured separator `~` as described above.

## Hub Settings

Choose a tab below to view relevant setting descriptions or examples for Hubs.

[!include[Hub Metadata Settings List](_settings_hub.md)]
