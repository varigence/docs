---
uid: bimlflex-data-vault-implementation-hub
title: Data Vault Hubs
summary: Overview of Data Vault Hubs
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Data Vault Hubs in BimlFlex

Data Vault Hubs:

* Consist of a distinct list of [**Integration Keys**](#integration-key-business-key) of the **Core Business Concept**.
* BimlFlex makes use of a concatenated key to simplify implementation and allows for single key integration and is required when choosing a Data Vault implementation without using Hash Keys.
* The **Setting** [*USE HASH KEYS*](xref:bimlflex-metadata-settings#accelerator-data-vault) can be used to toggle between using a hashed or natural **Integration Key**.
  Integrate without a `HASH` which is very efficient for modern data warehouse solutions like [Snowflake](https://www.snowflake.com/) and [Azure Synapse](https://azure.microsoft.com/en-us/services/synapse-analytics/).

> [!IMPORTANT]
> Hubs are the core building block of the Data Vault and should reflect the **Core Business Concept** (CBC).
> The implementation team should identify and map Hubs to the **Business Model** as a priority.

## Stub Hubs

* A Hub created as a placeholder when a related **CBC** that is not in scope for the current iteration.
* The [*INFER LINK HUB*](xref:bimlflex-metadata-settings#process-data-vault) setting will ensure the **Integration Keys** are always loaded enabling future expansion.

> [!NOTE]
> There isn't an *OBJECT TYPE* to define a `Stub Hub` as it is just a `Hub`.

## Hub Naming Convention

* Prefix or Suffix with one of the following recommendations `HUB`, `H`, `HB`.
* The Hub name will be derived by combing the **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*APPEND HUB*](xref:bimlflex-metadata-settings#naming-data-vault-naming) **Setting**.

## Hub System Column Configuration

* [Load Date Time Stamp](#load-date-time-stamp)
* [Record Source](#record-source)
* [Audit Id](#audit-id)

## Hub Settings

Choose a tab below to view relevant setting descriptions or examples for Hubs.

[!include[Hub Metadata Settings List](_settings_hub.md)]