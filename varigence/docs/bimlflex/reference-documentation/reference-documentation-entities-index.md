---
title: BimlFlex App Reference Documentation
description: Documentation of components and properties for all editors within BimlFlex 
tags: [BimlFlex, Reference]
---

# BimlFlex App Reference Documentation

The BimlFlex App allows for easy-to-use management of the design metadata. This is complemented by the BimlFlex Excel Add-in. In both cases, the metadata is persisted in the BimlFlex metadata database.

A metadata model describes what will be used to store the metadata that is subsequently authored by end users. It can be thought of as a database schema and provides the ability to create a general purpose Entity/Relationship model.
Below is an outline of the properties and relationships for each entity type.

## Overview
  
| <div style="width:150px">BimlFlex Entity</div> | Description |
| --------- | ----------- |
|[Batches](bimlflex-app-reference-documentation-Batches) | Batches organise the data logistics workload. They are used by Projects to manage the order of execution, and a Project must be associated to a Batch.|
|[Columns](bimlflex-app-reference-documentation-Columns) | The Columns screen allows for managing the individual components for an Object, for example the attributes of a database table. Columns define the detailed information to transform and map data from source to target.|
|[Configurations](bimlflex-app-reference-documentation-Configurations) | Configurations are custom attributes which can be used to drive the behaviour of BimlFlex, and the output it generates.|
|[Connections](bimlflex-app-reference-documentation-Connections) | Connections provide the information required to connect to data sources.|
|[Customers](bimlflex-app-reference-documentation-Customers) | Customers are top-level groupings of metadata and models, and allow for a flexible way to configure functional areas for a data solution.|
|[DataTypeMappings](bimlflex-app-reference-documentation-DataTypeMappings) | Data Type Mappings provide the ability to automatically map Data Types from a source system to a more standardized data type.|
|[Objects](bimlflex-app-reference-documentation-Objects) | Objects in BimlFlex are the data stores that can be used as source or target for data logistics.|
|[Parameters](bimlflex-app-reference-documentation-Parameters) | Parameters are customizable values that can be set throughout the solution.|
|[Projects](bimlflex-app-reference-documentation-Projects) | Connections define the data logistics workload. They specify the primary orchestration engine (e.g. ADF) and the Connections for the involved the sources and targets.|
|[Versions](bimlflex-app-reference-documentation-Versions) | Versions support management of changes in metadata over time.|
