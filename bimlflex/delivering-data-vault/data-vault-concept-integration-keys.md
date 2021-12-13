---
uid: bimlflex-data-vault-integration-keys-and-relationships
title: BimlFlex Integration Keys and Relationships
summary: Data Vault management of integration keys, relationships, business keys, examples, and how to accelerate in the Data Vault Accelerator
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Integration Keys

The Business Key is a core concept in Data Vault modeling. It allows the modeler to focus on defining entities and relationships based on the business process focused keys, rather than the technical keys from the operational (source) system. This allows easier cross-system integration in the Data Vault.

While defining an Enterprise-Wide Business Key is the design goal for a Data Vault model, it is rare to find these directly available in existing source systems.

BimlFlex uses the term **Integration Key** instead of **Business Key** for consistency across different Data Warehouse project types, including Dimensional Modeling.

The **Integration Key** concept is a pragmatic design feature in BimlFlex, which supports both the definition of a true Enterprise-Wide Business Key as well as making it easier to allow cross-system integration where this key cannot be easily defined.

**Integration Keys** prevents false-positive matches that may occur when relating data sets between systems, and allows for a later matching process using Same-As Links (`SAL`).

Once **Integration Keys** are defined and available it is possible to match entities using rules or Master Data Management.

> [!TIP]
> Watch the Webinar on [building Integration Keys for Data Vault](https://www.youtube.com/watch?v=frzWIAW-Mhs?rel=0&autoplay=0). The video contains an overview of the Business Key and introduces the **Integration Key** concept.

## Defining an Integration Key

The BimlFlex development workflow supports the modeler in importing metadata from various locations and automatically deriving **Integration Keys** and relationships based on the identified references. Depending on the specifics of the imported metadata, the modeler may want to manually add additional **Integration Keys** and relationships to the design.

The scope of the **Integration Key** is determined by how you configure the column.

* If the key is scoped per operational system it is recommended to append the **Record Source** to the key ensuring a unique key
* If the key is globally unique across the enterprise the record **Record Source** should be omitted

The global parameters for the **Record Source** is `@@rs`. This value refers to the system the data originates from, as defined in the **Connection** in the **Record Source** control.

The modeler van modify these definitions at any point in the development lifecycle.

In some cases, the **Integration Key** may include multiple columns. For example if the original key in the imported metadata was a composite key. The **Integration Key** will be a concatenation of the key parts, creating a single column for integration and optimize the performance of multi-column joins.

In the BimlFlex metadata, the **Integration Key** will be defined using the `FlexToBk( )` function. This is an internal convention that BimlFlex uses to translate multiple columns and values into a single concatenated key.

As an example, the metadata expression for the 'Customer' will look like this `FlexToBk(@@rs,CustomerID)`. This indicates that the **Integration Key** will be a concatenation of the **Record Source** and the 'CustomerID' column value.

## Practical example of Integration Key matching or collisions

When different sources use the same keys or codes that have the same values but different meanings they are not possible to directly use as Integration Keys since that will implicitly match records that don't match the same business entity. BimlFlex allows the modeler to add the connection record source code to the key so that they uniquely identify the entity. This is done using the BimlFlex function `FlexToBk()` where BimlFlex automatically builds a concatenated string representation of the Integration Key from source fields and codes. In the case of a source having a ProductID key, the expression `FlexToBk(@@rs, ProductID)` will build a unique key for the Data Vault.

BimlFlex implements a single key modeling approach. Any Integration Key in the Data Warehouse is a single string representation of any source attribute. For keys with multiple parts they are concatenated using the configurable concatenator character using the `FlexToBk()` function. This allows any source system using any configuration to populate the Core Business Concept with values. As this is the only way to guarantee future integration with unknown sources it is enforced throughout BimlFlex. All attributes that are used to build the Integration Key are also by default stored in their source formats in the default Satellites.

## Object Relationships and Metadata References

References are used by BimlFlex to accelerate and build Links for Data Vault. They allow relationships to be defined in metadata. A column defined in the metadata can reference another objects Primary Key. These are used by BimlFlex to accelerate and build Links for Data Vault implementations.

A reference can only refer to another tables Primary Key. The Data Vault accelerator only builds a Data Vault based on the Integration Keys. In BimlFlex this means that the metadata uses the Integration Key column as both the Primary Key definition and the Integration Key definition for an Object.

The Import Metadata dialog can create Integration Keys and redefine the source relationships to Integration Keys relationships automatically. It is also possible to create and define them manually using the `Create Integration Key` function and the `Reference Table` and `Reference Column Name` fields.

## Preview and Accelerate Data Vault

Once the Integration Keys and relationships are defined in the metadata for the source system it is possible to use the Data Vault Accelerator in BimlFlex to preview and build the Data Vault.

Define the Accelerator options and preview the Data Vault to review the resulting model. refine the metadata and update the preview for any required tweaks and publish the metadata once it matches the required destination logical model.

## Surrogate Keys

By default, BimlFlex will 'hash' the **Integration Key** value to  be used as a **Surrogate Key** column. The **Surrogate Key** will act as the Primary Key for a Hub and Link Objects, and be part of the Primary Key for Satellite Objects.

Because of this, the **Surrogate Key** will be used in Data Vault Foreign Key references if referential integrity is configured.

The Data Type and applied Hashing Algorithm are configurable through the BimlFlex Settings. The default used by BimlFlex is to use the `SHA1` algorithm and store this value as Binary value.

## Integration Key Settings

Choose a tab below to view relevant setting descriptions or examples for Integration Keys.

[!include[Integration Key Metadata Settings List](_settings_integration_key.md)]

> [!NOTE]
> The `Model` **Setting Group** is only applied when first creating and Integration Key.  These **Settings** do not already impact generated Integration Keys.

* The [*ACCELERATE HUB KEYS*](xref:bimlflex-app-reference-documentation-settings-index) setting will include the key parts in the Hub.
* BimlFlex provides an option to add the `@@rs` to all keys on import [*ADD RECORD SOURCE TO INTEGRATION KEY*](xref:bimlflex-app-reference-documentation-settings-index) and on the **Columns** tab for the **Objects** in the app.
* The column name is derived by combing the **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*APPEND INTEGRATION KEY*](xref:bimlflex-app-reference-documentation-settings-index) setting either before or after the name depending on the [*SUFFIX OR PREFIX COLUMN*](xref:bimlflex-app-reference-documentation-settings-index) setting.
* Deriving the value of the concatenated key depends on two settings.
  The [*HASH NULL VALUE REPLACEMENT*](xref:bimlflex-app-reference-documentation-settings-index) that is used as a null replacement and the [*INTEGRATION KEY TO UPPER*](xref:bimlflex-app-reference-documentation-settings-index) to specify if the derived value should be cast to `UPPER CASE` or left in its original case.
  When integrating case sensitive systems, this requires consideration.
* As an example, the above will be implemented as follows `UPPER(COALESCE(CustomerID, 'NVL'))`
* It is recommended to use a wide Unicode String datatype.
  Allow for new sources that might not adhere to the assumed datatype of the Hub Integration key.
