---
title: Connection Types
description: Documentation of the management of metadata values
tags: [BimlFlex, Reference]
---
<!--
Connection Types
Header not included because it is used in different ways
-->
**Connection Types** are configured using the [**Connection Editor**](bimlflex-connection-editor) to define what kind of data source or target is connected to.

| Connection Type     | Code | Description | Applies To |
| ------------------- | ---- | ----------- | ---------- |
| ADONET                | ADONET | An ADO.NET connection is used to connect to the data.                                  | Any Connection.|
| Azure Blob Storage    | AZB    | A connection to an Azure Blob Storage Account.                                         | Connections with a `Source System`, `Landing Area`, or `Staging Area` integration stage.|
| Azure Data Lake Store | AZDLS  | A connection to Azure Data Lake Storage Account.                                       | Any Connection except if defined with integration stage `Data Warehouse`.|
| Custom Component      | CUSTOM | A connection to a custom component data source (COZYROC). This is limited to connections that are used in **Projects** that have a `SQL Server Integration Services (SSIS)` integration template. | Connections with a `Source System` integration stage. |
| FILE                  | FILE   | A connection to a file.                                                                | Connections with a `Source System` integration stage. |
| FTP                   | FTP    | An FTP connection is used to connect to the data source.                               | Connections with a `Source System` integration stage.|
| Microsoft MDS         | MDS    | A connection to Microsoft's Master Data Services (MDS).                                | Connections with a `Master Data Services` integration stage.|
| ODBC                  | ODBC   | An ODBC connection is used to connect to the data.                                     | Any Connections except ones with a `Landing Area` integration stage. Allowable **System Types** will be limited depending on the integration stage applied.|
| OLEDB                 | OLEDB  | An Object Linking and Embedding (OLE DB) connection is used to connect to the data.    | Any Connection. For connections with a `Source System` there will be additional **System Types** available.|
| ORACLE                | ORA    | A connection to a Teradata data source.                                                | Connections with a `Source System` integration stage.|
| REST                  | REST   | A connection to a Rest API endpoint.                                                   | Connections with a `Source System` integration stage.|
| Script Source         | SCSRC  | A connection to a script task data source. This is limited to connections that are used in **Projects** that have a `SQL Server Integration Services (SSIS)` integration template. | Connections with a `Source System` integration stage. |
| SFTP                  | SFTP   | An secure FTP (SFTP) connection is used to connect to the data.                        | Connections with a `Source System` integration stage.|
| TERADATA              | TD     | A connection to a Teradata data source.                                                | Connections with a `Source System` integration stage.|
