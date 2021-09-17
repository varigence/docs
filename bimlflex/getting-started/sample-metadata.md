---
uid: bimlflex-getting-started-sample-metadata
title: Load Sample Metadata
summary: Guidance on loading sample metadata into BimlFlex with sample sets and configuration sets
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# Load Sample Metadata and Default Configurations

![Load Sample Metadata](https://www.youtube.com/watch?v=2rL853XpST4?rel=0&autoplay=0 "Load Sample Metadata")

There are several sets of sample metadata and configurations provided through the BimlFlex App.

In the BimlFlex App, use the Actions pane on the home page to load sample metadata to the current metadata customer.

The BimlFlex getting started guide starts with the `01 - MSSQL Starting Point` sample metadata loaded. This includes sample Connections, Batches and Projects to load data from the AdventureWorksLT source database.

## Sample Metadata sets

* **01 - MSSQL Starting Point**  
    A sample starting point for Microsoft SQL Server on-premises and SSIS loads. Contains sample Connections, Batches and Projects. Use this starting point to import metadata from AdventureWorksLT and build the solution
* **02 - MSSQL After Import**  
    A sample starting point for Microsoft SQL Server on-premises and SSIS loads. Contains sample Connections, Batches, Projects, and AdventureWorksLT source metadata objects
* **03 - MSSQL DataMart ETL SSIS Solution**  
    Microsoft SQL Server on-premises Target, SSIS ETL architecture and Data Mart sample metadata. The ETL pattern uses SSIS Data Flows to execute load logic
* **04 - MSSQL DataVault ETL SSIS Solution**  
    Microsoft SQL Server on-premises Target, SSIS ETL architecture and full Data Vault and Data Mart sample metadata. The ETL pattern uses SSIS Data Flows to execute load logic
* **05 - MSSQL DataVault ELT SSIS Solution**  
    Microsoft SQL Server on-premises Target, SSIS ELT and full Data Vault and Data Mart sample metadata. The ELT pattern uses stored procedures to execute load logic
* **06 - MSSQL DataMart SSIS Solution**  
    Microsoft SQL Server on-premises Target, SSIS and Data Mart sample metadata
* **07 - MSSQL DataVault ADF Solution**  
    Microsoft SQL Server on-premises Target, ADF and full Data Vault and Data Mart sample metadata
* **08 - MSSQL DataMart ADF Solution**  
    Microsoft SQL Server on-premises Target, ADF and Data Mart sample metadata
* **15 - Synapse DataVault SSIS Solution**  
    Microsoft Azure Synapse Target, SSIS and full Data Vault and Data Mart sample metadata
* **16 - Synapse DataMart SSIS Solution**  
    Microsoft Azure Synapse Target, SSIS and Data Mart sample metadata
* **17 - Synapse DataVault ADF Solution**  
    Microsoft Azure Synapse Target, ADF and full Data Vault and Data Mart sample metadata
* **18 - Synapse DataMart ADF Solution**  
    Microsoft Azure Synapse Target, ADF Data Mart sample metadata
* **19 - Synapse Change Tracking ADF Solution**  
    Microsoft Azure Synapse Target, ADF, Change Tracking source sample metadata
* **25 - Snowflake DataVault SSIS Solution**  
    Snowflake Target, SSIS and full Data Vault and Data Mart sample metadata
* **26 - Snowflake DataMart SSIS Solution**  
    Snowflake Target, SSIS and Data Mart sample metadata
* **27 - Snowflake DataVault ADF Solution**  
    Snowflake Target, ADF and full Data Vault and Data Mart sample metadata
* **28 - Snowflake DataMart ADF Solution**  
    Snowflake Target, ADF and Data Mart sample metadata
* **37 - SQLDB DataVault ADF Solution**  
    Microsoft Azure SQL Database Target, ADF and full Data Vault and Data Mart sample metadata
* **38 - SQLDB DataMart ADF Solution**  
    Microsoft Azure SQL Database Target, ADF and Data Mart sample metadata
* **41 - Synapse Dynamics ADF Solution**  
    Microsoft Azure Synapse Target, ADF and Dynamics CRM source sample metadata
* **42 - Synapse Salesforce ADF Solution**
    Using a Salesforce Rest API connection to a Azure Synapse Database Target with ELT stored procedures for transformations and Azure Data Factory for orchestration.
* **43 - Synapse Salesforce SSIS Solution**
    Using a Salesforce Rest API connection to a Azure Synapse Database Target with ELT stored procedures for transformations and SQL Server Integration Services for orchestration.
* **51 - File MSSQL DataVault ELT SSIS Solution**  
    Microsoft SQL Server on-premises Target, SSIS and full Data Vault from File source sample metadata
* **52 - File Synapse DataVault ELT SSIS Solution**  
    Microsoft Azure Synapse Target, SSIS and full Data Vault from File source sample metadata
* **53 - File Snowflake DataVault ELT SSIS Solution**  
    Snowflake Target, SSIS and full Data Vault from File source sample metadata
* **54 - File MSSQL DataVault ELT ADF Solution**  
    Microsoft SQL Server on-premises Target, ADF and full Data Vault from File source sample metadata
* **55 - File Synapse DataVault ELT ADF Solution**  
    Microsoft Azure Synapse Target, ADF and full Data Vault from File source sample metadata
* **56 - File Snowflake DataVault ELT ADF Solution**  
    Snowflake Target, ADF and full Data Vault from File source sample metadata
* **57 - File SQLDB DataVault ELT ADF Solution**  
    Microsoft Azure SQL Database Target, ADF and full Data Vault from File source sample metadata
<!--
* **61 - Delta Lake ADF DataVault DataFlow Solution**
* **62 - Delta Lake ADF DataMart DataFlow Solution**
-->

## Sample Default Configuration sets

* **04 - MSSQL DataVault ETL SSIS Solution**  
    Microsoft SQL Server on-premises SSIS configuration for ETL loads
* **05 - MSSQL DataVault ELT SSIS Solution**  
    Microsoft SQL Server on-premises SSIS configuration for ELT loads
* **07 - MSSQL DataVault ADF Solution**  
    Microsoft SQL Server on-premises ADF configuration
* **15 - Synapse DataVault SSIS Solution**  
    Microsoft Azure Synapse SSIS configuration
* **17 - Synapse DataVault ADF Solution**  
    Microsoft Azure Synapse ADF configuration
* **25 - Snowflake DataVault SSIS Solution**  
    Snowflake Data Vault SSIS configuration
* **27 - Snowflake DataVault ADF Solution**  
    Snowflake Data Vault SSIS configuration
* **37 - SQLDB DataVault ADF Solution**  
    Azure SQL Database Data Vault ADF configuration

Next Step: [Importing Source Metadata](xref:bimlflex-getting-started-importing-source-metadata)
