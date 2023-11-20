---
title: System Types
description: Documentation of the management of metadata values
tags: [BimlFlex, Reference]
---
<!--
System Types
Header not included because it is used in different ways
-->
**System Types** are configured using the [**Connection Editor**](bimlflex-connection-editor) to define what kind of data source or target is connected to as part of the **Connection Type** configuration.

| System Type                | Code    | Description                                                                            | Supported by Connection Type |
| -------------------------- | ------- | -------------------------------------------------------------------------------------- | ---------------------------- |
| Avro Format                | AVRO    | Avro is a binary, compressed, file format. Only supported for Azure Data Factory. | Azure Blob Storage, Azure Data Lake Store, FILE, FTP, SFTP |
| Azure Synapse              | SQLDW   | Azure Synapse Analytics database (Formerly Azure SQL Data Warehouse).     | ADONET, OLEDB |
| Binary Format              | BIN     | Binary storage file. Only supported for Azure Data Factory. | Azure Blob Storage, Azure Data Lake Store, FILE, FTP, SFTP |
| COZYROC Excel File         | CREXCEL | Excel File using COZYROC SSIS Components. | Custom Component |
| COZYROC Salesforce         | CRSFDC  | Salesforce API using COZYROC SSIS Components. | Custom Component |
| DB2                        | DB2     | IBM DB2 database.   | ADONET, ODBC, OLEDB |
| Delta Lake                 | DELTA   | Delta Lake Storage Layer. | Azure Data Lake Store |
| Dynamics CRM               | DYNCRM  | API that can connect to Microsoft Dynamics data sources. | Rest API |
| Delimited Format           | FF_DEL  | Flat File with Delimiters.   | Azure Blob Storage, Azure Data Lake Store, FILE, FTP, SFTP |
| Ragged Right Format        | FF_RAG  | Flat File with Ragged Right formatting. | FILE |
| JSON Format                | JSON    | JSON file format. Only supported for Azure Data Factory. | Azure Blob Storage, Azure Data Lake Store, FILE, FTP, SFTP |
| Microsoft SQL Server       | MSSQL   | Microsoft SQL Server database. Can be configured for on-premise, also accessible via a Self-Hosted Integration Runtime. Also can be configured for cloud computing as a Managed Instance or Azure SQL database. This is done in the Linked Service configuration for the connection. | ADONET, Microsoft MDS, OLEDB |
| MySql                      | MYSQL   | MySQL database.   | ADONET, ODBC, OLEDB |
| Oracle                     | ORA     | Oracle database. | ADONET, ODBC, OLEDB, ORACLE |
| Oracle RDB                 | ORARDB  | Oracle RDB Database. Discontinued product line from Oracle. Separate from there current database product. | ADONET, ODBC, OLEDB, ORACLE |
| ORC Format                 | ORC     | ORC file format. Only supported for Azure Data Factory. | Azure Blob Storage, Azure Data Lake Store, FILE, FTP, SFTP |
| Parquet Format             | PARQ    | Parquet file format. Only supported for Azure Data Factory. | Azure Blob Storage, Azure Data Lake Store, FILE, FTP, SFTP |
| PostgreSQL                 | PGR     | PostgreSQL database.  | OLEDB |
| Rest Service               | REST    | Configurable REST API connector. | Rest API |
| Salesforce                 | SFDC    | API to connect to the generic Salesforce tenant.  | Rest API |
| Salesforce Marketing Cloud | SFDCMC  | API to connect to the Salesforce Marketing Cloud.  | Rest AP |
| Salesforce Service Cloud   | SFDCSC  | API to connect to the Salesforce Service Cloud. | Rest API |
| Snowflake Data Warehouse   | SFLDW   | Snowflake database.  | ODBC |
| Sybase                     | SYBASE  | Sybase database.    | ADONET, ODBC, OLEDB |
| Teradata                   | TD      | Teradata database.   | ADONET, ODBC, OLEDB, TERADATA |
| XML Format                 | XML     | XML file format. | Azure Blob Storage, Azure Data Lake Store, FILE, FTP, SFTP |
<!--
Query to produce table - note that it has been manually modified to remove known unsupported combinations:

WITH MyCTE AS
(
SELECT [Name] as [System Type], Code, value AS ConnectionTypeId
FROM meta.SystemType  
    CROSS APPLY STRING_SPLIT(EligibleConnectionTypes, ',')
WHERE IsEnabled=1
),
ConnectionType AS
(
SELECT [System Type], MyCTE.Code, ct.[Name] AS [Connection Type] FROM MyCTE
JOIN meta.ConnectionType ct on MyCTE.ConnectionTypeId = ct.Id 
WHERE ct.IsEnabled=1
)
SELECT 
 '| ' + [System Type] + 
' | ' + [Code] +
' | ' + --Description
' | ' + STRING_AGG([Connection Type], ', ') WITHIN GROUP (ORDER BY [Connection Type] ASC) +
' |' 
FROM ConnectionType
WHERE [System Type] != 'Azure Key Vault'
GROUP BY [System Type], [Code]
-->