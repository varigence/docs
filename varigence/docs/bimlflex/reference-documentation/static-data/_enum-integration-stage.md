---
title: Integration Stages
description: Documentation of the management of metadata values
tags: [BimlFlex, Reference]
---
<!--
Integration Stages
Header not included because it is used in different ways
-->
The **Integration Stage** is a **Connection** property that defines and drives how a connection is used in the architecture. The integration stage is an important classification for a connection, because it is used by BimlFlex to direct what code is generated, and what further options are available - including **Connection Types** and corresponding **System Types** and even down to the **Change Types** at **Column** level.

The following integration stages are available:

| Integration Stage   | Code | Description | Applies To |
| ------------------- | ---- | ----------- | ---------- |
| Business Data Vault     | BDV  | This layer represents the data following the application of the soft business rules that may be required. | Any connection. Selecting this integration stage will limit the available connection types and system types to BimlFlex supported target platforms. |
| Data Mart               | DM   | A subset of data stored within the data warehouse, for the needs of a specific team, section or department within the enterprise. | Any connection. Selecting this integration stage will limit the available connection types and system types to BimlFlex supported target platforms. The allowed change types at column level will also be scope to support Dimensional Modeling. |
| Data Warehouse          | DWH  | The connection type dedicated for the [BimlCatalog](bimlflex-components-overview). A connection with the `Data Warehouse` integration stage can not be used in project definitions. | BimlCatalog connections only.|
| File Export             | EXP  | A file or series of files that contain a subset of the data in a Data Warehouse.                                                  | Connections used in projects that have been configured with an **Integration Template** of `SQL Server Integration Services (SSIS)` only. |
| Landing Area            | LND  | A Landing Area connection is only applicable to Cloud Enabled Connections, to identify the location where data needs to be 'landed' before being loaded into the cloud database. | Any connection. Selecting this integration stage will limit the available connection types and system types to BimlFlex supported target platforms. |
| Master Data Services    | MDS  | Microsoft's solution for handling "master" data within an enterprise using SQL Server.                                            | Connections used in projects that have been configured with an **Integration Template** of `SQL Server Integration Services (SSIS)` only. |
| Persistent Staging Area | PSA  | A staging area where history is kept and changed data capture (CDC) is managed for all source attributes.                         | Any connection. Selecting this integration stage will limit the available connection types and system types to BimlFlex supported target platforms.|
| Data Vault          | DV  | A uniquely linked set of normalized tables that support one or more functional areas of business and provides historical tracking.| Any connection. Selecting this integration stage will limit the available connection types and system types to BimlFlex supported target platforms.|
| Source System           | SRC  | A data source that is being extracted, with the intent to be processed into the BimlFlex data integration environment.  | Any connection. |
| Staging Area            | STG  | A temporary storage area between the source systems and a data warehouse.                                                         | Any connection. Selecting this integration stage will limit the available connection types and system types to BimlFlex supported target platforms.|
| Target Staging Area     | TSA  | Only used in SSIS DataWarehouse and Data Mart templates.                                                                          | Connections used in projects that have been configured with an **Integration Template** of `SQL Server Integration Services (SSIS)` only.|
