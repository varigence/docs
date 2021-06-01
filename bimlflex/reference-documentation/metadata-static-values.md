---
uid: bimlflex-metadata-static-values
title: BimlFlex Metadata Entity Static Values
summary: Documentation of the management of metadata values
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

## Metadata Static Types

BimlFlex has a number of internal static types that can also be referred to as nn enumeration type or an enum that define a set of constants.

### AttributeTypes

| Code | Value |
| ---- | ----- |
| COL | Column |
| OBJ | Object |
| PRJ | Project |
| CON | Connection |
| CUS | Customer |
| BAT | Batch |

### ChangeTypes

| Code | Value |
| ---- | ----- |
| CHG | Type 1 |
| HST | Type 2 |
| FIX | Fixed |
| KEY | Key |
| MAK | Multi Active Key |
| IGN | Ignore |
| EXC | Exclude DV |
| REF | Link Reference |
| CDC | Change Data Capture |
| ALT | Alternate |
| HDK | Hash Distribution |
| DGA | Link Degenerate |
| TRS | Transient |

### ConfigurationAttributes

| Code | Value |
| ---- | ----- |
| IGN | Ignore |
| DER | Derived |
| SRC | Source |
| DEF | Default |
| TGT | Target |
| HSH | Hash |

### ConnectionTypes

| Code | Value |
| ---- | ----- |
| OLEDB | OLEDB |
| ADONET | ADONET |
| FILE | FILE |
| ODBC | ODBC |
| TD | TERADATA |
| ORA | ORACLE |
| PDW | Microsoft APS |
| AZB | Azure Blob Storage |
| AZDLS | Azure Data Lake Store |
| SFLSTG | Snowflake Stage |
| AZLS | Analysis Linked Service |
| AST | Analysis Services Tabular |
| ASM | Analysis Services Multi Dimensional |
| MDS | Microsoft MDS |
| OLESQL | OLEDB SQL Based ELT |
| ADOSQL | ADONET SQL Based ELT |
| ODBCSQL | ODBC SQL Based ELT |
| OLECDC | OLEDB CDC |
| CUSTOM | Custom Component |

### DataTypes

| Code | Value |
| ---- | ----- |
| AnsiString | AnsiString |
| AnsiStringFixedLength | AnsiStringFixedLength |
| Binary | Binary |
| Boolean | Boolean |
| Byte | Byte |
| Currency | Currency |
| Date | Date |
| DateTime | DateTime |
| DateTime2 | DateTime2 |
| DateTimeOffset | DateTimeOffset |
| Decimal | Decimal |
| Double | Double |
| Guid | Guid |
| Int16 | Int16 |
| Int32 | Int32 |
| Int64 | Int64 |
| Object | Object |
| SByte | SByte |
| Single | Single |
| String | String |
| StringFixedLength | StringFixedLength |
| Time | Time |
| UInt16 | UInt16 |
| UInt32 | UInt32 |
| UInt64 | UInt64 |
| VarNumeric | VarNumeric |
| Xml | Xml |
| hierarchyid | HierarchyId |
| geometry | Geometry |
| geography | Geography |
| smallmoney | SmallMoney |

### ParameterDataTypes

| Code | Value |
| ---- | ----- |
| Boolean | Boolean |
| Byte | Byte |
| Char | Char |
| DateTime | DateTime |
| DBNull | DBNull |
| Decimal | Decimal |
| Double | Double |
| Empty | Empty |
| Int16 | Int16 |
| Int32 | Int32 |
| Int64 | Int64 |
| Object | Object |
| SByte | SByte |
| Single | Single |
| String | String |

### IntegrationStages

| Code | Value |
| ---- | ----- |
| SRC | Source |
| STG | Staging |
| PSA | Persistent Staging |
| INT | Intermediate |
| DWH | Data Warehouse |
| RDV | Raw Data Vault |
| BDV | Business Data Vault |
| DM | Data Mart |
| MDS | Master Data Services |
| EXP | File Export |

### IntegrationTemplates

| Code | Value |
| ---- | ----- |
| S2T_SSIS | SSIS: Source -> Target |
| S2T_ADF | ADF: Source -> Target |
| S2FIL | SSIS: Source -> File Extract |
| S2ZIP | SSIS: Source -> Zip File Extract |

### ObjectTypes

| Code | Value |
| ---- | ----- |
| TBL | Table |
| TBV | View |
| DIM | Dimension |
| DMV | Dimension View |
| FCT | Fact |
| FCV | Fact View |
| SAT | Satellite |
| LNK | Link |
| HUB | Hub |
| LSAT | Link Satellite |
| REF | Reference |
| PIT | Point In Time |
| BRG | Bridge |
| RSAT | Reference Satellite |
| FIL | Flat File |
| EXT | External |
| TCA | CDC All |
| TCL | CDC Last |
| TCT | Change Tracking |

### ModelObjectTypes

| Code | Value |
| ---- | ----- |
| HUB | Hub |
| LNK | Link |
| SAT | Satellite |
| SAL | Same As Link |
| HAL | Hierarchy Link |
| REF | Reference |
| RSAT | Reference Satellite |
| IGN | Ignore |
| EXC | Exclude DV |

### PrecedenceConstraints

| Code | Value |
| ---- | ----- |
| Success | Success |
| Completion | Completion |

### SystemTypes

| Code | Value |
| ---- | ----- |
| FF_DEL | File Delimited |
| FF_RAG | File Ragged Right |
| MSSQL | SQL Server |
| ORA | Oracle |
| DB2 | DB2 |
| EXCEL | Excel |
| MYSQL | MySql |
| TD | Teradata |
| SQLDW | Azure SQLDW |
| SQLDB | Azure SQLDB |
| PDW | SQL Server PDW |
| SFLDW | Snowflake DW |
| PGR | PostgreSQL |
| ORARDB | Oracle RDB |
| CRSFDC | COZYROC Salesforce |
| CUSTOM | Custom System |
| LS_AMWS | AmazonMarketplaceWebService |
| LS_AR | AmazonRedshift |
| LS_AS3 | AmazonS3 |
| LS_AZB | AzureBatch |
| LS_AZBS | AzureBlobStorage |
| LS_AZCD | AzureCosmosDb |
| LS_AZCDMD | AzureCosmosDbMongoDb |
| LS_AZD | AzureDatabricks |
| LS_AZDLA | AzureDataLakeAnalytics |
| LS_AZDLSG1 | AzureDataLakeStoreGen1 |
| LS_AZDLSG2 | AzureDataLakeStoreGen2 |
| LS_AZKV | AzureKeyVault |
| LS_AZMYSQL | AzureMySql |
| LS_AZPGRSQL | AzurePostgreSql |
| LS_AZSI | AzureSearchIndex |
| LS_AZSQLDB | AzureSqlDatabase |
| LS_AZSQLDW | AzureSqlDataWarehouse |
| LS_AZTS | AzureTableStorage |
| LS_CASSANDRA | Cassandra |
| LS_CONCUR | Concur |
| LS_COUCHBASE | Couchbase |
| LS_DB2 | Db2 |
| LS_DRILL | Drill |
| LS_DYNAX | DynamicsAx |
| LS_DYNCRM | DynamicsCrm |
| LS_ELOQUA | Eloqua |
| LS_FS | FileServer |
| LS_FTP | Ftp |
| LS_GAW | GoogleAdWords |
| LS_GBQ | GoogleBigQuery |
| LS_GREENPLUM | Greenplum |
| LS_HBASE | HBase |
| LS_HDFS | Hdfs |
| LS_HDI | HdInsight |
| LS_HDIB | HdInsightBase |
| LS_HDIOD | HdInsightOnDemand |
| LS_HIVE | Hive |
| LS_HTTP | Http |
| LS_HUBSPOT | Hubspot |
| LS_IMPALA | Impala |
| LS_JIRA | Jira |
| LS_ML | MachineLearning |
| LS_MAGNETO | Magneto |
| LS_MARIADB | MariaDb |
| LS_MARKETO | Marketo |
| LS_MONGODB | MongoDb |
| LS_MYSQL | MySql |
| LS_NETEZZA | Netezza |
| LS_ODATA | OData |
| LS_ODBC | Odbc |
| LS_O365 | Office365 |
| LS_ORACLE | Oracle |
| LS_ORASC | OracleServiceCloud |
| LS_PAYPAL | Paypal |
| LS_PHOENIX | Phoenix |
| LS_PGRSQL | PostgreSql |
| LS_PRESTO | Presto |
| LS_QB | QuickBooks |
| LS_RESPONSYS | Responsys |
| LS_SALESFORCE | Salesforce |
| LS_SFMC | SalesforceMarketingCloud |
| LS_SAPBW | SapBusinessWarehouse |
| LS_SAPCFC | SapCloudForCustomer |
| LS_SAPECC | SapEcc |
| LS_SAPH | SapHana |
| LS_SNOW | ServiceNow |
| LS_SFTP | Sftp |
| LS_SHOPIFY | Shopify |
| LS_SPARK | Spark |
| LS_MSSQL | SqlServer |
| LS_SQUARE | Square |
| LS_SYBASE | Sybase |
| LS_TERADATA | Teradata |
| LS_VERTICA | Vertica |
| LS_WT | WebTable |
| LS_XERO | Xero |
| LS_ZOHO | Zoho |

### FlatFileTypes

| Code | Value |
| ---- | ----- |
| Delimited | Delimited |
| FixedWidth | FixedWidth |
| RaggedRight | RaggedRight |

### Delimiters

| Code | Value |
| ---- | ----- |
| CRLF | CRLF |
| CR | CR |
| LF | LF |
| Semicolon | Semicolon |
| Comma | Comma |
| Tab | Tab |
| VerticalBar | VerticalBar |
| UnitSeparator | UnitSeparator |
| LF | LF |

### Booleans

| Code | Value |
| ---- | ----- |
| Y | Y |
| N | N |

### AttributeKeys

| Code | Value |
| ---- | ----- |
| SettingValue | SettingValue |
| IsDrivingKey | IsDrivingKey |
| CreateBridge | CreateBridge |
| CreatePIT | CreatePIT |
| DistributeRoundRobin | DistributeRoundRobin |
| DistributeReplicate | DistributeReplicate |
| RowStoreIndex | RowStoreIndex |
| RowCountSum | RowCountSum |
| ProtectionLevel | ProtectionLevel |
| SqlStartDelimiter | SqlStartDelimiter |
| SqlEndDelimiter | SqlEndDelimiter |
| SqlIgnoreSchema | SqlIgnoreSchema |
| SqlHashPattern | SqlHashPattern |
| SqlConcatenatePattern | SqlConcatenatePattern |
| SqlStringExtractPattern | SqlStringExtractPattern |
| SqlStringLoadPattern | SqlStringLoadPattern |
| SqlDateExtractPattern | SqlDateExtractPattern |
| SqlDateLoadPattern | SqlDateLoadPattern |
| SqlStringDataType | SqlStringDataType |
| SqlAnsiStringDataType | SqlAnsiStringDataType |

### AttributeValues

| Code | Value |
| ---- | ----- |
| EncryptSensitiveWithUserKey | EncryptSensitiveWithUserKey |

### AttributeProperties

| Code | Value |
| ---- | ----- |
| IsPrimaryHub,AddKey | IsPrimaryHub,AddKey |
| IsPrimaryHub | IsPrimaryHub |
| AddKey | AddKey |