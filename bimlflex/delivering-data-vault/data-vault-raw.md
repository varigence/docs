---
uid: bimlflex-data-vault-raw
title: Raw Data Vault
summary: Overview of implementing a Raw Data Vault
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Raw Data Vault

BimlFlex supports the design and deployment of a complete **Raw Data Vault**. A 'Raw' Data Vault captures the initial data integration efforts that map the source data sets to the intended - more holistic - Data Vault model.

When loading the source data to the Raw Data Vault, no *destructive transformations* are applied. This means that the meaning of the data is not fundamentally changed, but that the data is loaded in such as a way it will become easier to integrate it with other data sets. Even though the data may structurally be different from the source, this 'Raw' Data Vault still contains the data in its original meaning.

Conceptually, it should still be possible to reconstruct the original data from the Raw Data Vault.

The Raw Data Vault contains [**Hub**](xref:bimlflex-data-vault-concept-hub), [**Link**](xref:bimlflex-data-vault-concept-link) and [**Satellite**](xref:bimlflex-data-vault-concept-satellite) style entities, which all follow configurable Data Vault conventions that can be modified through [**Settings**](xref:bimlflex-settings) and [**Configurations**](xref:bimlflex-configurations).

The Raw Data Vault records the original source data in the central Data Vault model so that it can be easily integrated with other data sources. As part of this process, the data is time-stamped, standardized and unique data solution keys are assigned to Hubs and Links.

The names of the objects and columns in the Raw Data Vault are typically already business focused. Any technical names that may be part of the operational system are usually avoided in favor of an agreed term of definition. BimlFlex supports the process of defining these business-focused terms through the [**Business Modeling**](xref:bimlflex-business-modeling) feature.

## Relationship to the Business Data Vault

A [**Business Data Vault**](xref:bimlflex-data-vault-business-data-vault) is a conceptual construct that separates the original, unchanged, data in the Raw Data Vault from the data against which transformations have been applied.

The Business Data Vault uses these original data sets to apply an interpretation, which alters the meaning of the data. In other words, destructive transformations may be applied in the Business Data Vault.

In Data Vault, both the 'Raw' and 'Business' entities together _are_ the Data Vault model.

'Raw' and 'Business' Data Vault are similar in terms of technical structure. A 'Raw' Satellite will structurally look the same as a 'Business' Satellite, and both can reference the same Hub object.

However, there are loading dependencies between the 'Raw' and 'Business' Data Vault. This is because the 'Business' Data Vault objects typically receive their data from 'Raw' objects. And this means the 'Raw' objects need to be processed first before the 'Business' objects can be loaded.

## Development Workflow

### Model the Business - Agree on Terms and Definitions

A Data Vault is intended to be the integrated repository of an organization's data. However, things that mean the same may be called differently in individual operation systems. Each operational system supports one or more business processes for the company, but the way the resulting data is recorded often varies greatly. There are many reasons for this, and sometimes this can be addressed but not always.

In all cases, it is in the data solution that the resulting different data sets must be able to be aligned.

To make sure no bias from the original operational system creeps into the Data Vault model, it is recommended to start any new development by defining a **Business Model**. A Business Model provides a system-agnostic way of defining terms and definitions in a way that is clear and agreed for all involved parties.

 This can be done using the [**Business Modeling**](xref:bimlflex-business-modeling) feature. The resulting  **Business Entities** and **Business Attributes** can be used to direct the way the Data Vault is created, and assists in ensuring a true holistic representation of the business is created.

### Creating a Raw Data Vault in BimlFlex

In BimlFlex, a Raw Data Vault is defined centrally. Data is loaded into the Raw Data Vault as part of each individual source data set load process. This means that once a source data set is defined and mapped, the resulting data logistics processes to load the data from the source into the Raw Data Vault are created as part of the same [**Batch**](xref:bimlflex-batch-editor).

This way, each data set, delta or differential will be loaded into the Raw Data Vault as soon as possible and independent of loading processes for other data sources.

The BimlFlex recommended approach is to implement a separate process for each operational (source) system that loads data into the Raw Data Vault. So, if you have a Data Vault that is loaded from three separate operational systems the result would be three separate batches, projects.

It is recommended to define a shared **Connection** that is dedicated for the Raw Data Vault, and each project that loads data from a source will use this as the target.

For each data source, the following is recommended:

* Creating a separate **Batch**. A dedicated **Batch** can be defined for each operational system, so that the corresponding Raw Data Vault objects are loaded together
* Creating a separate **Project**. The Raw Data Vault is part of the **Project** that interfaces with the data source. The target connection is the regular Data Vault connection.

### Creating a Raw Data Vault Object

When the project that is meant to process the source data has been defined, and the source metadata has been imported everything is in place to define the Raw Data Vault. The next step is to actually define the Raw Data Vault objects themselves.

BimlFlex provides the [**Data Vault Accelerator**](xref:bimlflex-data-vault-accelerator) for this. The Accelerator will define an initial Raw Data Vault suggestion based on the structure of the selected source objects.

From here, the Data Vault can be fine-tuned into its target design and also mapped to the Business Model. For more information on this please refer to the [**Accelerator**](xref:bimlflex-data-vault-accelerator) and [**Business Modeling**](xref:bimlflex-business-modeling) sections.