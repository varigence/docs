---
uid: bimlflex-reference-documentation-entities-index
title: BimlFlex Reference Documentation
summary: Documentation of components and properties for all editors within BimlFlex 
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# BimlFlex Reference Documentation

The BimlFlex Application allows for easy-to-use management of the design metadata. This is complemented by the BimlFlex Excel Add-in. In both cases, the metadata is persisted in the BimlFlex metadata database.

A metadata model describes what will be used to store the metadata that is subsequently authored by end users. It can be thought of as a database schema and provides the ability to create a general purpose Entity/Relationship model.
Below is an outline of the properties and relationships for each entity type.

## Overview
  
| <div style="width:150px">BimlFlex Entity</div> | Description |
| --------- | ----------- |
|[Batches](xref:bimlflex-reference-documentation-batch-entity) | Batches organise the data logistics workload. They are used by Projects to manage the order of execution, and a Project must be associated to a Batch.|
|[Columns](xref:bimlflex-reference-documentation-column-entity) | The Columns screen allows for managing the individual components for an Object, for example the attributes of a database table. Columns define the detailed information to transform and map data from source to target.|
|[Configurations](xref:bimlflex-reference-documentation-configuration-entity) | Configurations are custom attributes which can be used to drive the behaviour of BimlFlex, and the output it generates.|
|[Connections](xref:bimlflex-reference-documentation-connection-entity) | Connections provide the information required to connect to data sources.|
|[Customers](xref:bimlflex-reference-documentation-customer-entity) | Customers are top-level groupings of metadata and models, and allow for a flexible way to configure functional areas for a data solution.|
|[DataTypeMappings](xref:bimlflex-reference-documentation-datatypemapping-entity) | Data Type Mappings provide the ability to automatically map Data Types from a source system to a more standardized data type.|
|[Objects](xref:bimlflex-reference-documentation-object-entity) | Objects in BimlFlex are the data stores that can be used as source or target for data logistics.|
|[Parameters](xref:bimlflex-reference-documentation-parameter-entity) | Parameters are customizable values that can be set throughout the solution.|
|[Projects](xref:bimlflex-reference-documentation-project-entity) | Connections define the data logistics workload. They specify the primary orchestration engine (e.g. ADF) and the Connections for the involved the sources and targets.|
|[Versions](xref:bimlflex-reference-documentation-version-entity) | Versions support management of changes in metadata over time.|
