---
uid: bimlflex-data-vault-implementation-integration-keys
title: Data Vault Hubs
summary: Overview of Data Vault Hubs
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Integration Keys (Business Key)

* BimlFlex uses the term **Integration Key** instead of **Business Key** for consistency across different data warehouse project types, including dimensional modeling.
* The scope of the key will determine how you configure the column.
  If the key is scoped per source system it is recommended to append the **Record Source** to the key ensuring a unique key.
  If the key is globally unique across the enterprise the record **Record Source** should be omitted.
* A concatenation of the key parts creating a single column for integration and optimize the performance of multi-column joins.
* The [*ACCELERATE HUB KEYS*](xref:bimlflex-app-reference-documentation-settings-index) setting will include the key parts in the Hub.
* The `FlexToBk( )` helper method can be used to concatenate keys using a comma-delimited list of columns across supported implementation technologies.
* The global parameter for *RECORD SOURCE* is `@@rs` referring to the originating source system, not source object, of the data can be added to the keys to make Integration Keys unique across sources.
* As an example, the metadata expression for the `Customer` will look like this `FlexToBk(@@rs,CustomerID)`
* BimlFlex provides an option to add the `@@rs` to all keys on import [*ADD RECORD SOURCE TO INTEGRATION KEY*](xref:bimlflex-app-reference-documentation-settings-index) and on the **Columns** tab for the **Objects** in the app.
* The column name is derived by combing the **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*APPEND INTEGRATION KEY*](xref:bimlflex-app-reference-documentation-settings-index) setting either before or after the name depending on the [*SUFFIX OR PREFIX COLUMN*](xref:bimlflex-app-reference-documentation-settings-index) setting.
* Deriving the value of the concatenated key depends on two settings.
  The [*HASH NULL VALUE REPLACEMENT*](xref:bimlflex-app-reference-documentation-settings-index) that is used as a null replacement and the [*INTEGRATION KEY TO UPPER*](xref:bimlflex-app-reference-documentation-settings-index) to specify if the derived value should be cast to `UPPER CASE` or left in its original case.
  When integrating case sensitive systems, this requires consideration.
* As an example, the above will be implemented as follows `UPPER(COALESCE(CustomerID, 'NVL'))`
* It is recommended to use a wide Unicode String datatype.
  Allow for new sources that might not adhere to the assumed datatype of the Hub Integration key.

## Integration Key Settings

Choose a tab below to view relevant setting descriptions or examples for Integration Keys.

[!include[Integration Key Metadata Settings List](_settings_integration_key.md)]

> [!NOTE]
> The `Model` **Setting Group** is only applied when first creating and Integration Key.  These **Settings** do not already impact generated Integration Keys.