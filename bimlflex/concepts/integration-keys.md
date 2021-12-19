---
uid: bimlflex-concept-integration-keys
title: BimlFlex Integration Keys
summary: Explanation of the Integration Keys concept, what it is and why it matters
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Integration Keys

The **Integration Key** concept is a pragmatic design feature in BimlFlex, that both supports the definition of a true Enterprise-Wide Business Key (EWBK) as well as making it easier to allow cross-system integration where a true EWBK cannot be easily defined.

In short, defining **Integration Keys** allows modelers to define their own relationships between data sets. BimlFlex will use these relationships to generate data integration code.

BimlFlex implements a single-key modeling approach. Any **Integration Key** in the solution is a single string representation of one or more (source) values.

> [!NOTE]
> The when designing a Data Vault solution, the **Integration Key** assumes the role of the Business Key concept by default. This is explained in more detail in the [Data Vault](xref:bimlflex-data-vault-index) sections.

## Defining an Integration Key

The BimlFlex development workflow supports the modeler in importing metadata from various locations, and automatically deriving integration keys and relationships based on the identified references. Depending on the details of the imported metadata, the modeler may want to manually add additional **Integration Keys** and relationships to the design.

An integration key is represented as an additional **Column** in the corresponding **Object**. The scope of the integration key is determined by how you configure this column.

* If the key is scoped per operational system, it is recommended to append the **Record Source** to the key to ensure uniqueness
* If the key is globally unique across the data sets, the record **Record Source** can be omitted

The global parameter for the **Record Source** is `@@rs`. This value refers to the system the data originates from, as defined in the **Connection** in the `Record Source` field.

The modeler can modify these definitions at any point in the development lifecycle.

In some cases, the integration key may include multiple columns. For example if the original source Primary Key in the imported metadata was a composite key. The integration key will be a concatenation of the individual key parts, creating a single column for integration and optimize the performance of what would otherwise be multi-column joins.

In the BimlFlex metadata, the integration key is defined using the `FlexToBk( )` function. This is an internal convention that BimlFlex uses to translate multiple columns and values into a single concatenated key.

As an example, the metadata expression for the 'Customer' will look like this `FlexToBk(@@rs,CustomerID)`. This indicates that the **Integration Key** will be a concatenation of the **Record Source** and the 'CustomerID' column value.

## A Practical Example of Integration Key Matching or Collision

When different data sources use keys or codes that have the same values but different meanings compared to other data sets, care must be taken to directly use these as Integration Keys. This is because having the exact same definition will implicitly match records that don't match the same business concept.

BimlFlex allows the modeler to add the **Connection** record source code to the key, so that they together can uniquely identify the business concept. This is done using the BimlFlex function `FlexToBk()` where BimlFlex automatically builds a concatenated string representation of the Integration Key from source fields and codes.

In the case of a source having a ProductID key, the expression `FlexToBk(@@rs, ProductID)` will produce a unique key that will be unique compared to a 'ProductID' originating from a different data source.

## Object Relationships and Metadata References

Integration keys allow relationships to be defined in metadata. A column can reference another object's Primary Key. In BimlFlex, the object's Primary Key by default is also an integration key. But this is not necessarily the case, and depends on the chosen design approach.

These keys and references are used by BimlFlex to accelerate and build [Data Vault](xref:bimlflex-data-vault-index) objects when using the [**Accelerator**](xref:bimlflex-data-vault-accelerator).

These are used by BimlFlex to accelerate and build Hub and Link entities for Data Vault implementations.

A reference column can only refer to another table's Primary Key. The Data Vault **Accelerator** only builds a Data Vault based on the Integration Keys. In BimlFlex this means that the metadata uses the integration key column as both the Primary Key definition and the integration key definition for an object.

The **Import Metadata Dialog** can create integration keys and defines the references between integration keys automatically using the source key references. It is also possible to create and define integration key references manually using the `Create Integration Key` function and the `Reference Table` and `Reference Column Name` fields.

This can be done in the [**Object Editor**](xref:bimlflex-object-editor) and the [**Schema Diagram**](xref:bimlflex-schema-diagram).

## Relationship to Surrogate Keys

By default, BimlFlex will 'hash' the **Integration Key** value to be used as a **Surrogate Key** column in [Data Vault](xref:bimlflex-data-vault-index). The **Surrogate Key** will act as the Primary Key for a Hub, and will be part of the Primary Key for Link and Satellite objects.

Because of this, the **Surrogate Key** will be used in Data Vault Foreign Key references, if referential integrity is configured.

The Data Type and applied hashing algorithm are configurable through the BimlFlex [**Settings**](xref:bimlflex-settings). The default used by BimlFlex is to use the `SHA1` algorithm and store this value as Binary value.
