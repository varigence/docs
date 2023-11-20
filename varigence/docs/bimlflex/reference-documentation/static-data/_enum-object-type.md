---
title: Object Types
description: Documentation of the management of metadata values
tags: [BimlFlex, Reference]
---
<!--
Object Types
Header not included because it is used in different ways
-->
**Object Types** are configured using the [**Object Editor**](bimlflex-object-editor) and drive the behavior and purpose of the **Object** for the design and code generation process. The available object types are dependent on the way the **Connection** is used in a BimlFlex **Project**. Depending on the connection's **Integration Stage** and **System Type** some options may, or may not be, available.

| Change Type            | Code | Description | Allowed for Integration Stage | Allowed for System Type |
| ---------------------- | ---- | ----------- | ----------------------------- | ----------------------- |
| Bridge                 | BRG  | Defines the object as a Data Vault Bridge entity.  | Business Data Vault, Data Vault | All |
| Dimension              | DIM  | Defines the object as a Dimension Table in a Dimensional Model / Data Mart. | Data Mart | All |
| Exclude in Accelerator | EXC  | Flags an object to not be included in the Data Vault Accelerator. | Source System | All |
| Fact                   | FCT  | Defines the object as a Fact Table in a Dimensional Model / Data Mart. | Data Mart | All |
| Flat File              | FIL  | Determines that the object is a flat file.  | File Export, Source System | Avro Format, Binary Format, Delimited Format, JSON Format, ORC Format, Parquet Format, Ragged Right Format , XML Format |
| Hierarchy Link         | HAL |  |  |  |
| Hub | HUB | Defines the object as a Data Vault Hub entity. | Business Data Vault, Data Vault | All |
| Ignore | IGN | Setting an object to `Ignore` will remove it from any processing and/or visualisation in BimlFlex. No Staging Area or Persistent Staging Area objects will be derived. | All | All |
| Json | JSON | Determines that the object is a flat file in JSON format. Only applies when used for a REST API connection. | Source System | Rest Service |
| Link | LNK | Defines the object as a Data Vault Link entity. | Business Data Vault, Data Vault | All |
| Link Satellite | LSAT | Defines the object as a Data Vault Link-Satellite entity. | Business Data Vault, Data Vault | All |
| Point In Time | PIT | Defines the object as a Data Vault Point-In-Time (PIT) entity. | Business Data Vault, Data Vault | All |
| Reference | REF | Determines that this object will be generated as a stand-alone historized table in a Data Vault context. | Business Data Vault, Data Vault | All |
| Reference Satellite | RSAT | Determines that this object will be generated as a stand-alone (unconnected) Satellite in a Data Vault context. | Business Data Vault, aw Data Vault | All |
| Satellite | SAT | Defines the object as a Data Vault Satellite entity. | Business Data Vault, Data Vault | All |
| Stored Procedure | SP | For source objects only, determines the the object is a stored procedure whose output must be ingested into the data solution by BimlFlex. | Source System | Azure SQL Database, Azure Synapse, Microsoft SQL Server |
| Staged Query | STQ | Defines the object as an object that is derived from other existing objects. This will be treated as a data source, but no Staging Area and/or Persistent Staging Area components will be generated. For more details, please refer to the [Staged Query Concept](bimlflex-concepts-staged-query). | Source System | Azure SQL Database, Azure Synapse, Microsoft SQL Server, Snowflake Data Warehouse |
| Table | TBL | This is the default object type in BimlFlex. A `Table` property for the object means that no specific behaviour is applied by the BimlFlex code generation processes. | Business Data Vault, Landing Area, Master Data Services, Persistent Staging Area, Data Vault, Source System, Staging Area | Azure Synapse, COZYROC Excel File, COZYROC Salesforce, DB2, Dynamics CRM, Microsoft SQL Server, MySql, Oracle, Oracle RDB, PostgreSQL, Salesforce, Salesforce Marketing Cloud, Salesforce Service Cloud, Snowflake Data Warehouse, Sybase, Teradata |
| CDC All | TCA | Determines that the object is configured for Change Data Capture, querying the full history of available changes. BimlFlex will generate specific code to query the object.  | Source System | Microsoft SQL Server |
| CDC Last | TCL | Determines that the object is configured for Change Data Capture, but only retrieves the last value every time data is loaded. BimlFlex will generate specific code to query the object.  | Source System | Microsoft SQL Server |
| Change Tracking | TCT | Determines that the object is configured for Change Tracking. BimlFlex will generate specific code to query the object. | Source System | Microsoft SQL Server |
<!--
Removed because very likely obsolete or unsupported:
| View | TBV | | Target Staging Area | Azure Synapse, COZYROC Excel File, COZYROC Salesforce, DB2, Dynamics CRM, Microsoft SQL Server, MySql, Oracle, Oracle RDB, PostgreSQL, Salesforce, Salesforce Marketing Cloud, Salesforce Service Cloud, Snowflake Data Warehouse, Sybase, Teradata |
-->
<!--

Query to review / generate:

-- Integration Stages
WITH ObjectTypeIntegrationStage AS
(
SELECT [Name] as [Object Type], Code, value AS IntegrationStageId
FROM meta.ObjectType  
    CROSS APPLY STRING_SPLIT(EligibleIntegrationStages, ',') 
WHERE IsEnabled=1
),
IntegrationStages AS
(
SELECT [Object Type], ObjectTypeIntegrationStage.Code, ct.[Name] AS [Integration Stage] 
FROM ObjectTypeIntegrationStage
LEFT JOIN meta.IntegrationStage ct on ObjectTypeIntegrationStage.IntegrationStageId = ct.Id 
),
ObjectIntegrationStagesPivoted AS
(
SELECT 
  IntegrationStages.[Object Type]
, IntegrationStages.Code
, COALESCE(STRING_AGG([Integration Stage], ', ') WITHIN GROUP (ORDER BY [Integration Stage] ASC),'') AS [Eligible Integration Stages]
FROM IntegrationStages
GROUP BY IntegrationStages.[Object Type], IntegrationStages.Code
),
-- System Types
ObjectTypeSystemType AS
(
SELECT [Name] as [Object Type], Code, value AS SystemTypeId
FROM meta.ObjectType  
    OUTER APPLY STRING_SPLIT(EligibleSystemTypes, ',') 
WHERE IsEnabled=1
),
SystemTypes AS
(
SELECT [Object Type], ObjectTypeSystemType.Code, ct.[Name] AS [System Type] 
FROM ObjectTypeSystemType
LEFT JOIN meta.SystemType ct on ObjectTypeSystemType.SystemTypeId = ct.Id 
),
ObjectSystemTypesPivoted AS
(
SELECT 
  SystemTypes.[Object Type]
, COALESCE(STRING_AGG([System Type], ', ') WITHIN GROUP (ORDER BY [System Type] ASC),'') AS [Eligible System Types]
FROM SystemTypes
GROUP BY SystemTypes.[Object Type]
)
-- Combining
SELECT 
 '| ' + obis.[Object Type] + 
' | ' + obis.[Code] +
' | ' + --Description
' | ' + [Eligible Integration Stages] +
' | ' + [Eligible System Types] +
' |' 
FROM ObjectIntegrationStagesPivoted obis
JOIN ObjectSystemTypesPivoted obst ON obis.[Object Type] = obst.[Object Type]-->
