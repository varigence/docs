---
title: Business Data Vault
description: Overview of implementing a Business Data Vault based on a Data Vault
tags: [BimlFlex, Conceptual]
---
# Business Data Vault

A Business Data Vault is a conceptual construct that separates the original, unchanged, data from the data against which transformations have been applied. When defining a Data Vault, a typical approach is to map the source data sets as closely as possible to the intended target Data Vault model without changing the meaning of the data.

In Data Vault terminology, this is referred to as avoiding any 'destructive' transformations. Even though the data may structurally be different from the source, this 'Raw' Data Vault still contains the data in its original meaning.

The Business Data Vault uses these original data sets to apply an interpretation, which alters the meaning of the data.

In Data Vault, both the 'Raw' and 'Business' entities together _are_ the Data Vault model.

This way, a **Core Business Concept** can be described by both 'Raw' and 'Business' Data Vault objects. The 'Raw' objects provide the original context, and the 'Business' objects provide an interpretation.

## Similarities and Differences

'Raw' and 'Business' Data Vault are similar in terms of technical structure. A 'Raw' Satellite will structurally look the same as a 'Business' Satellite, and both can reference the same Hub object.

However, there are loading dependencies between the 'Raw' and 'Business' Data Vault. This is because the 'Business' Data Vault objects typically receive their data from 'Raw' objects. And this means the 'Raw' objects need to be processed first before the 'Business' objects can be loaded.

## Creating a Business Data Vault Process in BimlFlex

Because of the loading dependencies, it is recommended to define a Business Data Vault as its own separate area. This means:

* Creating a separate **Batch**
* Creating a separate **Project**
* Creating a separate **Connection**

The BimlFlex recommended approach is to implement the above for each operational (source) system that provides the 'Raw' objects used. So, if you have a Data Vault that is loaded from three separate operational systems and all require Business Data Vault objects the result would be three separate batches, projects and connections.

### Batch

A dedicated **Batch** can be defined for each operational system, so that the corresponding Business Data Vault objects are processed together - or at least when the Data Vault for the required underlying objects has been completed.

It is recommended to use a meaningful naming convention for the batch name, which can be used for the related project and connection also. For example 'derived', or 'bdv'.

### Connection

A **Connection** that is dedicated for the Business Data Vault is recommended to be created. Ideally, there is a separate connection for each operational system. This maintains a logical separation of activities and concepts.

If required, a separate **Record Source** can be defined to highlight that data in upstream processes is sourced from a Business Data Vault object.

In BimlFlex, and because the data ultimately is still loaded to the Data Vault model, the Business Data Vault connection is treated as a source system. Therefore, the connection needs to have the **Integration Stage** of `Source System`. Depending on the intended approach and technology a **Landing Connection** also needs to be defined to stage the results before processing.

### Project

The Business Data Vault **Project** is used to define the way the data will be processed. Typically, this will be done using the same **Integration Template** as the way the data is initially loaded into the 'Raw' Data Vault.

Since the process to load the data into the Business Data Vault is conceptually occurring inside the Data Vault, there is no need for a **Stage Connection** and **Persistent Stage Connection**.

The only information required is to define the **Source Connection** and the **Target Connection**. The source connection is the Business Data Vault connection, and the target connection is the regular Data Vault connection.

## Creating a Business Data Vault Object in BimlFlex

At this point, the fundamental process to populate Business Data Vault objects is in place. The next step is to actually define the objects themselves.

BimlFlex requires an existing object or view to be used as source, and this works the same way as any other data sources is mapped to the Data Vault - using the [**Accelerator**](bimlflex-data-vault-accelerator).

The most common approach is to define a view or procedure that acts as the data source. In BimlFlex, you can create an object in the Business Data Vault connection and use the **Source Create SQL** property to capture the view in metadata. The **Columns** are either imported or manually added as with any other data source.

The Accelerator can be used to map the source to the required Data Vault objects as per usual.
