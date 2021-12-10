---
uid: bimlflex-data-vault-concept-hub
title: Data Vault Hubs
summary: Overview of Data Vault Hubs
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Hubs

A Hub in Data Vault is the representation of a **Core Business Concept**. These are the main 'things' that are important to an organisation. **Core Business Concepts** are related to other ones through [**Natural Business Relationships**](xref:bimlflex-data-vault-concept-link) and are described using [**Context**](xref:bimlflex-data-vault-concept-satellite) entities.

Any Hub entity in Data Vault can therefore have multiple active relationships to other entities through [Links](xref:bimlflex-data-vault-concept-link).

A Hub maintains a distinct list of **Integration Keys**.

The Integration key and the Hub table, as well as the source and source to target mapping, are defined in the metadata repository.

To be able to integrate data across systems and versions the actual Business terms used should be identified and used as Integration Keys for the Hubs where possible.

For the Integration key, it is recommended to use a wide Unicode / nvarchar datatype. This accommodates most data coming from any source. It also allows new sources to be integrated that might not adhere to the earlier assumed datatype of the Hub Integration key. The hub should accommodate all incoming data without judging, therefore it is recommended to use the most forgiving data type available.

BimlFlex uses a single Integration Key column to allow source agnostic integration. BimlFlex provides the FlexToBk() expression to allow easy construction of the Integration Key from multiple source columns and data types.

Descriptive attributes about the Integration key stored in the Hub are stored in the attached Satellites.

## Implementation of the Hub concept in BimlFlex

The Hub is the distinct set of Integration keys from the source. It is an insert-only table. Any effectiveness or descriptive attributes are tracked in attached Satellites.

The required metadata for a Hub is stored in the objects and columns data sets in the metadata editor. For the Source to Target Mapping the source and the target table and columns need to be defined and mapped.

The Hub is Accelerated from Source Metadata and added to the Metadata set through the Data Vault Accelerator in the BimlFlex App. The Source To Target Mappings are automatically added to facilitate the load of the target Data Vault.

Data Vault Hubs:

* Consist of a distinct list of [**Integration Keys**](xref:bimlflex-data-vault-implementation-integration-keys#integration-keys-business-key) of the **Core Business Concept**.
* BimlFlex makes use of a concatenated key to simplify implementation and allows for single key integration and is required when choosing a Data Vault implementation without using Hash Keys.
* The **Setting** [*USE HASH KEYS*](xref:bimlflex-app-reference-documentation-settings-index) can be used to toggle between using a hashed or natural **Integration Key**.
  Integrate without a `HASH` which is very efficient for modern data warehouse solutions like [Snowflake](https://www.snowflake.com/) and [Azure Synapse](https://azure.microsoft.com/en-us/services/synapse-analytics/).

> [!IMPORTANT]
> Hubs are the core building block of the Data Vault and should reflect the **Core Business Concept** (CBC).
> The implementation team should identify and map Hubs to the **Business Model** as a priority.

## Stub Hubs

* A Hub created as a placeholder when a related **CBC** that is not in scope for the current iteration.
* The [*INFER LINK HUB*](xref:bimlflex-app-reference-documentation-settings-index) setting will ensure the **Integration Keys** are always loaded enabling future expansion.

> [!NOTE]
> There isn't an *OBJECT TYPE* to define a `Stub Hub` as it is just a `Hub`.

## Hub Naming Convention

* Prefix or Suffix with one of the following recommendations `HUB`, `H`, `HB`.
* The Hub name will be derived by combing the **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*APPEND HUB*](xref:bimlflex-app-reference-documentation-settings-index) **Setting**.

## Hub System Column Configuration

* [Load Date Time Stamp](xref:bimlflex-data-vault-best-practices#load-date-time-stamp)
* [Record Source](xref:bimlflex-data-vault-best-practices#record-source)
* [Audit Id](xref:bimlflex-data-vault-best-practices#audit-id)

## Hub Settings

Choose a tab below to view relevant setting descriptions or examples for Hubs.

[!include[Hub Metadata Settings List](_settings_hub.md)]

## Integration Key Definition

The Hub Integration key needs to accommodate data from existing sources as well as being able to accommodate changes in the existing sources and new sources added later.

The CBC/EWBK represented by the Hub is designed to integrate multiple systems. To support this, it is most common to use  Unicode string representation. The key length need to accommodate any reasonable Integration key that can be foreseen.

The default key length generated by BimlFlex using the Data Vault Accelerator is String/NVARCHAR(100).

Using the Infer Integration Key setting in the metadata importer will add the Integration Key to the source table as a new column. It uses the `FlexToBk(ProductID)` custom SSIS Expression to build the Integration key. The default settings will concatenate the columns together with tilde `~` as the default concatenation character. The `Product_BK` only has a single column mapped. Adding additional columns to the expression will result in a single key with the columns concatenated.

`FlexToBk(ProductID)` will generate Product_BK column data from the ID only (example: `680`)

`FlexToBk(Name,ProductNumber)` will generate Product_BK column data from the Name concatenated with the ProductNumber (example: `HL Road Frame - Black, 58~FR-R92B-58`) with the concatenation character as separator (the `~`)

`FlexToBk(@@rs,ProductID)` will generate Product_BK column data from the Connection Record Source and the ID (example: `awlt~680`)

### Multiple key columns

Some Hub designs require multiple source key columns to define the Hub through the Integration Key. Sources with key overlap might need a system or source string added, multiple source keys might need to be combined to form a distinct Hub Integration key.

> [!NOTE]
> Deriving the Integration keys for the CBC/EWBK's is one of the more important design exercises in modeling the Data Vault. This guide does not include details on the required analysis and design process.

For these columns, BimlFlex concatenates them into a single string and separates them with the configured separator `~` as described above.
