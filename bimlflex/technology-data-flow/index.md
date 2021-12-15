---
uid: bimlflex-technology-mapping-data-flow
title: 
summary:  
---

# BimlFlex for Azure Mapping Data Flows

In Microsoft Azure, the Mapping Data Flows ('Data Flows') feature of Azure Data Factory (ADF) is the visual data integration solution. It can be positioned as the cloud data integration alternative that predominantly supports the 'Extract-Transform-Load' (ETL) paradigm.

In some ways Data Flows fulfils a role that is similar to the one SQL Server Integration Services (SSIS) has been playing for (predominantly) on-premise use-cases for many years.

ADF Pipelines and Activities tend to be better suited for approaches where the code is executed on the underlying platform. This is sometimes referred to as 'Extract-Load-Transform' (ELT) or 'pushdown' processing.

However, depending on the technologies involved (Platforms, Datasets, Connectors) it is also possible to use Data Flows for pushdown. In BimlFlex, the Data Flows implementation mainly focused on ETL processing and using ADF Pipelines for pushdown processing and orchestration.

One of the advantages of using Data Flows, aside from the visual representation of the data logistics, is the ability to use inline Sources and Sinks (targets). Inline datasets allow direct access to many types of data sources without a dedicated connector object (dataset). They are especially useful when the underlying structure may evolve.

Also, and especially in data lake scenarios, they offer a way to manage where the compute takes place without requiring additional compute clusters.

