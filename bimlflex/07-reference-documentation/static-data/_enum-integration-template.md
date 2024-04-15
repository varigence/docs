---
uid: bimlflex-metadata-static-values-integration-templates
title: Integration Templates
summary: Documentation of the management of metadata values
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
<!--
Integration Template
Header not included because it is used in different ways
-->
An **Integration Template** in BimlFlex drives which code generation patterns are applied to the design metadata. In other words, the Integration Template defines *how* the output will be generated. An integration template is set for a **Project**, and all data logistics defined in this project will be generated for the selected template.

BimlFlex supports SQL Server Integration Services (SSIS), Azure Data Factory (ADF) Execute Pipelines and Mapping Data Flows as runtime integration engines, and depending on specific [**Connection**](xref:bimlflex-connection-editor) properties also generates SQL-based Stored Procedures.

The following integration templates are supported in BimlFlex:

| Integration Template                     | Code | Description                                                                                        |
| ---------------------------------------- | -----| -------------------------------------------------------------------------------------------------- |
| SQL Server Integration Services (SSIS)   | SSIS | Deliver the data logistics for the project in SQL Server Integration Services (SSIS). If **Pushdown Processing** is enabled, SSIS will orchestrate the data logistics, but the processing will mostly occur on the data platform using Stored Procedures. If pushdown processing is disabled, most the processing will be done in SSIS Data Flows. |
| Azure Data Factory (ADF)                 | ADF  | Deliver the data logistics for the project using Execute Pipelines. This will generate Execute Pipelines that use a Copy Activity to ingest the data from the source, and Stored Procedures to process the data further. |
| Azure Mapping Data Flows (ADF)           | DFL  | Deliver the data logistics using Azure Data Factory Mapping Data Flows ('data flows'). Processes will be run in data flows using inline processing, not Stored Procedures.|
| SSIS: File Extract                       | S2FIL| Use SSIS to extract data to file.|
| SSIS: Zip File Extract                   | S2ZIP| Use SSIS to extract data to a zip file.|
