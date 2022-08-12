---
uid: bimlflex-connection-header
title: Connections
summary: Overview of the BimlFlex Connection concept.
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
BimlFlex [**Connections**](xref:bimlflex-connection-editor) provide the information required to connect to data sources. They also acts as containers for [**Objects**](xref:bimlflex-object-editor), which are the definitions in metadata for files and tables. Objects can be imported using the [**Import Metadata**](xref:bimlflex-concepts-importing-metadata) feature. This is especially useful for connections that will act as sources for loading data into the data solution.

Connections are used in [**Projects**](xref:bimlflex-project-editor) to direct BimlFlex in generating the data logistics processes for the intended flow of data.

A connection definition includes the configuration of the [**Integration Stages**](xref:bimlflex-connection-editor#integration-stages) which will classify the connection for its role in the architecture. For example, to define a connection as a data source, Data Vault or Data Mart.

For connections that are configured for Cloud Computing, additional configuration options will be made available to support generating the connection as a Linked Service in Azure Data Factory (ADF).

A new BimlFlex solution always starts with defining connections to your data sources and targets depending on your intended data solution architecture. The design work commences by importing the objects for the source connection (configurated with a `Source System` integration stage).

Connections are created and modified using the [**Connection Editor**](xref:bimlflex-connection-editor) in the [BimlFlex App](xref:metadata-editors-overview).
