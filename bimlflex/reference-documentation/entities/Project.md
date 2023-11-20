---
uid: bimlflex-app-reference-documentation-Projects
title: BimlFlex App Definition for Projects
summary: Documentation of functionality within BimlFlex for Projects
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Projects

The BimlFlex [**Project**](xref:bimlflex-project-editor) concept defines a data logistics workload.<br/><br/>Projects specify the primary orchestration engine (SSIS or ADF) and define the [**Connections**](xref:bimlflex-connection-editor) for the Source to Target pipeline.

## Overview
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Name | The name of the Project. The Project Name must be unique for the selected Customer.|
|Pushdown Processing | Only applies to SSIS Integration Templates, and only when the target is an SQL Server database (either on-premise, or made accessible via a self-hosted integration runtime), Managed Instance, or an Azure SQL database. Enabling Pushdown Processing will direct BimlFlex to generate the data logistics processes as Stored Procedures that are executed in the database, as opposed to be generated as SSIS packages. Packages would still be created, but only to orchestrate the Stored Procedures. Note that for Azure SQL Project Connections, all Azure SQL Connections must have the same database configured. This is because Azure SQL does not support cross-database queries.|
|Pushdown Extraction | When enabled, allows the source data extract to load the data using pushdown to the engine, such as using a SQL Query in SQL Server instead of using a Data Flow in SSIS or a Copy Activity in ADF. This only works when the source data is queryable from the target platform.|
|Exclude from Model | Enabled Exclude from Model will exclude the project from the BimlFlex solution, but still keep it available.|
|Display Folder | Display Folder is used for grouping Projects and their Pipelines.|
|Description | Free-format additional documentation about the Project.|

## References
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this Project belongs to.|
|Version | Reference to the Version that this Project belongs to.|
|Parent Project | The name of the Project that is the (logical) parent of the selected Project. This can be used to create hierarchies of Projects, which can be useful to organise certain workloads. For example, this can be applied when there are many Projects that each require a specific Connection to a single dataset or file, or a small selection thereof. In this scenario, each Project can be associated to a logical group using the Parent Project. This is often the case for flat-file solutions, because each file requires a separate connection.|
|Source Connection | Defines the Connection that Project will to retrieve data from. Specifying the Source Connection for a Project is mandatory.|
|Stage Connection | Defines the Connection that Project will use to stage intermediate results. A Staging Connection is only required when the Source Connection for the Project is of the Source System Integration Stage. Specifying the Stage Connection for a Project is mandatory in this scenario.|
|Persistent Stage Connection | Defines the Connection that Project will use for the Persistent Staging Area. A Persistent Stage Connection is only required when the Source Connection for the Project is of the Source System Integration Stage. Specifying the Persistent Stage Connection for a Project is mandatory in this scenario. The Persist History option will record all detected changes in the specified Connection.|
|Target Stage Connection | Defines the Target Stage Connection. This can also be thought of as an intermediate data staging Connection for a Data Vault or Dimensional model. This is used to mirror the target and facilitate bulk updates using a Merge statement. This is mandatory for all Dimensional and Data Vault models.|
|Target Connection | Defines the Target Connection for the Objects mapped to the Project. The Target Connection is mandatory. When a Project loads data from a Source Staging to a Staging Area only, the target Connection can be set the same as the Stage Connection.|
|Batch | This Batch that the selected Project belongs to. Batches are used to organize and create separation between different Projects in the solution.|
|Integration Template | The Integration Template will define how the code will be generate for the selected Project. This can be in native technology (e.g. SSIS, ADF) or optimised for execution on the underlying technical architecture using code or procedures.|

