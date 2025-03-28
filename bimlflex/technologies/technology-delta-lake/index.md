---
uid: bimlflex-technology-delta-lake
title: Delta Lake
summary: Delta Lake
---

# Delta Lake

Delta Lake is an open-source storage layer that can be used ‘on top off’ a Data Lake, in this case Azure Data Lake Gen2. Delta Lake provides transaction control (Atomicity, Consistency, Isolation and Durability, or 'ACID') features to the Data Lake.

This approach supports a 'Lake House' style architecture, which offers opportunities to work with various kinds of data in a single environment. For example, combining semi- and unstructured data or batch- and streaming processing. This means various use-cases can be supported by a single infrastructure.

Microsoft has made Delta Lake connectors available for Azure Data Factory (ADF) pipelines and Mapping Data Flows (or simply ‘Data Flows’. Using these connectors, you can use your Data Lake to 'act' as a typical relational database for delivering your target models while at the same time use the lake for other use-cases.

There are many ways to do this. Fundamentally, there is a split between where the data resides (storage) and where the processing takes place (compute). The technologies used for each of these components defines the technical architecture to a large extent.

For example, you can use an existing Databricks cluster to store files in the local storage or *mount* a file or directory from the Data Lake or other file storage provider. You can also use connectors to access Data Lake files from Databricks so that other data sources (including Data Lake) can be made available without necessarily using the local storage.

When connecting to the cluster via ADF (Linked Service) you can run queries against this existing cluster and its tables using the Delta Lake layer. The cluster will do the compute, and the result can be written to a sink as defined in ADF. Delta Lake will manage transaction control.

The Data Lake is fundamentally a file-based environment, but the transaction controls that Delta Lake provides allow it to be used as a relational database to some extent.

Data Flows provides an additional approach for using the Delta Lake. Data Flows can use integration runtimes for the compute without requiring a separate cluster that hosts the actual Delta Lake storage layer. This is the *inline* feature, and makes it possible to configure an Azure Storage Account (Azure Data Lake Gen2) and use the Delta Lake features without any further configuration.

To summarize:

* ADF Pipelines can connect to *existing* Databricks clusters using an 'Azure Databricks Delta Lake' Linked Service. This way queries can be run against the Delta Lake, but only when a cluster is available. Queries cannot be run against the Data Lake directly, a cluster is always needed
* Data Flows can connect to Data Lakes directly and interact with these as if they were databases using inline processing through the Delta Lake connector. This does not support querying so all transformations need to be specified in the data flow

## Use Cases

* [Delta Vault](xref:bimlflex-technology-delta-vault), a full BimlFlex-generated [Data Vault](xref:bimlflex-data-vault-index) that runs on Delta Lake
