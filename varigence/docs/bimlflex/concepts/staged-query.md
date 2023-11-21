---
sidebar_position: 9
title: Staged Queries
description: Overview of the Staged Query concept in BimlFlex
tags: [BimlFlex, Conceptual]
---
# BimlFlex Staged Query Concept

A **Staged Query** is a database query that is used to create a specific representation of data, so that this can be used in the BimlFlex framework as a 'source' object. A staged query is a specific **Object Type**, defined at **Object** level when creating, or modifying, a staged query object.

In principle, staged queries can be applied to any architecture where there is a need to create separate data logistics processes for subsets of the data.

However, the most common use case applies specifically to Data Vault architectures.

For example, a staged query can be used when the source data needs to be manipulated before it is loaded into the Data Vault. It may be necessary to join multiple objects to provide the right data for the Data Vault load.

Or, it may be that a source object needs to be mapped to multiple (target) Data Vault entities. At object level, BimlFlex allows for a single mapping from the source to the target. If more than one mapping from the source to the target is required, staged queries can be used to direct the [Accelerator](bimlflex-data-vault-accelerator) to create additional Data Vault objects.

>[!NOTE]
> The `Staged Query` object type will direct the framework to skip any Staging and/or Persistent Staging steps in the generated patterns, because the involved data would have been staged and/or persisted through other source objects already.