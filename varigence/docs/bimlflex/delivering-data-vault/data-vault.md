---
sidebar_position: 10
title: Data Vault
description: Overview of implementing a Data Vault
tags: [BimlFlex, Conceptual]
---
# Data Vault

BimlFlex supports the design and deployment of a complete **Data Vault**. A 'Raw' Data Vault captures the initial data integration efforts that map the source data sets to the intended - more holistic - Data Vault model.

When loading the source data to the Data Vault, no *destructive transformations* are applied. This means that the meaning of the data is not fundamentally changed, but that the data is loaded in such as a way it will become easier to integrate it with other data sets. Even though the data may structurally be different from the source, this 'Raw' Data Vault still contains the data in its original meaning.

Conceptually, it should still be possible to reconstruct the original data from the Data Vault.

The Data Vault contains [**Hub**](./data-vault-concept-hub), [**Link**](./data-vault-concept-link) and [**Satellite**](./data-vault-concept-satellite) style entities, which all follow configurable Data Vault conventions that can be modified through [**Settings**](../metadata-editors/setting-editor) and [**Configurations**](../metadata-editors/configuration-editor).

The Data Vault records the original source data in the central Data Vault model so that it can be easily integrated with other data sources. As part of this process, the data is time-stamped, standardized and unique data solution keys are assigned to Hubs and Links.

The names of the objects and columns in the Data Vault are typically already business focused. Any technical names that may be part of the operational system are usually avoided in favor of an agreed term of definition. BimlFlex supports the process of defining these business-focused terms through the [**Business Modeling**](../metadata-editors/business-modeling) feature.

## Relationship to the Business Data Vault

A [**Business Data Vault**](./data-vault-business-data-vault) is a conceptual construct that separates the original, unchanged, data in the Data Vault from the data against which transformations have been applied.

The Business Data Vault uses these original data sets to apply an interpretation, which alters the meaning of the data. In other words, destructive transformations may be applied in the Business Data Vault.

In Data Vault, both the 'Raw' and 'Business' entities together _are_ the Data Vault model.

'Raw' and 'Business' Data Vault are similar in terms of technical structure. A 'Raw' Satellite will structurally look the same as a 'Business' Satellite, and both can reference the same Hub object.

However, there are loading dependencies between the 'Raw' and 'Business' Data Vault. This is because the 'Business' Data Vault objects typically receive their data from 'Raw' objects. And this means the 'Raw' objects need to be processed first before the 'Business' objects can be loaded.

## Development Workflow

### Model the Business - Agree on Terms and Definitions

A Data Vault is intended to be the integrated repository of an organization's data. However, things that mean the same may be called differently in individual operation systems. Each operational system supports one or more business processes for the company, but the way the resulting data is recorded often varies greatly. There are many reasons for this, and sometimes this can be addressed but not always.

In all cases, it is in the data solution that the resulting different data sets must be able to be aligned.

To make sure no bias from the original operational system creeps into the Data Vault model, it is recommended to start any new development by defining a **Business Model**. A Business Model provides a system-agnostic way of defining terms and definitions in a way that is clear and agreed for all involved parties.

 This can be done using the [**Business Modeling**](../metadata-editors/business-modeling) feature. The resulting  **Business Entities** and **Business Attributes** can be used to direct the way the Data Vault is created, and assists in ensuring a true holistic representation of the business is created.

### Creating a Data Vault in BimlFlex

In BimlFlex, a Data Vault is defined centrally. Data is loaded into the Data Vault as part of each individual source data set load process. This means that once a source data set is defined and mapped, the resulting data logistics processes to load the data from the source into the Data Vault are created as part of the same [**Batch**](../metadata-editors/batches).

This way, each data set, delta or differential will be loaded into the Data Vault as soon as possible and independent of loading processes for other data sources.

The BimlFlex recommended approach is to implement a separate process for each operational (source) system that loads data into the Data Vault. So, if you have a Data Vault that is loaded from three separate operational systems the result would be three separate batches, projects.

It is recommended to define a shared **Connection** that is dedicated for the Data Vault, and each project that loads data from a source will use this as the target.

For each data source, the following is recommended:

* Creating a separate **Batch**. A dedicated **Batch** can be defined for each operational system, so that the corresponding Data Vault objects are loaded together
* Creating a separate **Project**. The Data Vault is part of the **Project** that interfaces with the data source. The target connection is the regular Data Vault connection.

### Creating a Data Vault Object

When the project that is meant to process the source data has been defined, and the source metadata has been imported everything is in place to define the Data Vault. The next step is to actually define the Data Vault objects themselves.

BimlFlex provides the [**Data Vault Accelerator**](../metadata-editors/accelerator) for this. The Accelerator will define an initial Data Vault suggestion based on the structure of the selected source objects.

From here, the Data Vault can be fine-tuned into its target design and also mapped to the Business Model. For more information on this please refer to the [**Accelerator**](../metadata-editors/accelerator) and [**Business Modeling**](../metadata-editors/business-modeling) sections.
