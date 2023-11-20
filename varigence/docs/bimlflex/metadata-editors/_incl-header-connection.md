---
title: Connections
description: Overview of the BimlFlex Connection concept.
tags: [BimlFlex, Reference]
---
BimlFlex [**Connections**](bimlflex-connection-editor) provide the information required to connect to data sources. They also acts as containers for [**Objects**](bimlflex-object-editor), which are the definitions in metadata for files and tables. Objects can be imported using the [**Import Metadata**](bimlflex-concepts-importing-metadata) feature. This is especially useful for connections that will act as sources for loading data into the data solution.

Connections are used in [**Projects**](bimlflex-project-editor) to direct BimlFlex in generating the data logistics processes for the intended flow of data.

A connection definition includes the configuration of the [**Integration Stages**](xref:bimlflex-connection-editor#integration-stages) which will classify the connection for its role in the architecture. For example, to define a connection as a data source, Data Vault, or Data Mart.

For connections that are configured for Cloud Computing, additional configuration options will be made available to support generating the connection as a Linked Service in Azure Data Factory (ADF).

A new BimlFlex solution always starts with defining connections to your data sources and targets depending on your intended data solution architecture. The design work commences by importing the objects for the source connection (configured with a `Source System` integration stage).

Connections are created and modified using the [**Connection Editor**](bimlflex-connection-editor) in the [BimlFlex App](metadata-editors-overview).

BimlFlex supports platforms such as SQL Server, Azure Synapse and Snowflake for the data solution, but can connect to many different data sources.
