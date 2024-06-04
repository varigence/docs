---
uid: bimlflex-data-vault-integration-keys-and-relationships
title: BimlFlex Integration Keys and Relationships
summary: Data Vault management of integration keys, relationships, business keys, examples, and how to accelerate in the Data Vault Accelerator
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Integration Keys

The Enterprise-Wide Business Key (EWBK) is a core concept in Data Vault modeling. It allows the modeler to focus on defining entities and relationships based on the business process focused keys, rather than the technical keys from the operational (source) system. This allows easier cross-system integration in the Data Vault.

While defining an EWBK is the design goal for a Data Vault model, it is rare to find these directly available in existing source systems.

BimlFlex uses the concept [**Integration Key**](xref:bimlflex-concept-integration-keys) instead of **Business Key** for consistency across different Data Warehouse project types, including Dimensional Modeling.

> [!NOTE]
> The [**Integration Key**](xref:bimlflex-concept-integration-keys) is a core concept for BimlFlex. It is explained in more detail in the [Concepts section](xref:bimlflex-concepts-overview).

The **Integration Key** concept is a pragmatic design feature in BimlFlex, which supports both the definition of a true Enterprise-Wide Business Key as well as making it easier to allow cross-system integration where this key cannot be easily defined.

**Integration Keys** prevents false-positive matches that may occur when relating data sets between systems, and allows for a later matching process using Same-As Links (`SAL`).

Once **Integration Keys** are defined and available it is possible to match entities using rules or Master Data Management.

> [!TIP]
> Watch the Webinar on [building Integration Keys for Data Vault](https://www.youtube.com/watch?v=frzWIAW-Mhs?rel=0&autoplay=0). The video contains an overview of the Business Key and introduces the **Integration Key** concept.

## Surrogate Keys

By default, BimlFlex will 'hash' the **Integration Key** value to  be used as a **Surrogate Key** column. The **Surrogate Key** will act as the Primary Key for a Hub and Link Objects, and be part of the Primary Key for Satellite Objects.

Because of this, the **Surrogate Key** will be used in Data Vault Foreign Key references if referential integrity is configured.

The Data Type and applied hashing algorithm are configurable through the BimlFlex Settings. The default used by BimlFlex is to use the `SHA1` algorithm and store this value as Binary value.

## Integration Key Settings for Data Vault

BimlFlex offers many [**Settings**](xref:bimlflex-setting-editor) to manage how the integration key will be used in the solution. Choose a tab below to view relevant setting descriptions or examples for integration keys.

[!include[Integration Key Metadata Settings List](_settings_integration_key.md)]

> [!NOTE]
> The `Model` **Setting Group** is only applied when first creating and Integration Key.  These [**Settings**](xref:bimlflex-setting-editor) do not already impact generated Integration Keys.

* The [*Accelerate Hub Keys*](xref:bimlflex-reference-documentation-settings-index) setting will include the key parts in the Hub.
* BimlFlex provides an option to add the `@@rs` to all keys on import [*Add Record Source to Integration Key*](xref:bimlflex-reference-documentation-settings-index) and on the **Columns** tab for the **Objects** in the app.
* The column name is derived by combing the **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*Append Integration Key*](xref:bimlflex-reference-documentation-settings-index) setting either before or after the name depending on the [*Suffix or Prefix Column*](xref:bimlflex-reference-documentation-settings-index) setting.
* Deriving the value of the concatenated key depends on two settings.
  The [*Hash NULL Value Replacement*](xref:bimlflex-reference-documentation-settings-index) that is used as a null replacement and the [*Integration Key To Upper**](xref:bimlflex-reference-documentation-settings-index) to specify if the derived value should be cast to `UPPER CASE` or left in its original case.
  When integrating case sensitive systems, this requires consideration.
* As an example, the above will be implemented as follows `UPPER(COALESCE(CustomerID, 'NVL'))`
* It is recommended to use a wide Unicode String datatype.
  Allow for new sources that might not adhere to the assumed datatype of the Hub Integration key.
