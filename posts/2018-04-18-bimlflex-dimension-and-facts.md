---
categories: [BimlFlex]
layout: post
published: false
summary: This BimlFlex webinar looks at Dimensional Modelling and the Dimensional data warehouse
tags: [BimlFlex]
title: BimlFlex 2018 - Dimensions and Facts
---
# BimlFlex - Dimension and Facts

## BimlFlex 2018 - Dimensions and Facts

This BimlFlex webinar looks at Dimensional Modelling and the Dimensional data warehouse.

The video starts with a short overview of the Dimensional Modelling approach.
This highlights that the dimensional warehouse is targeted for, and optimized for, end user querying.
It uses dimensions to provide context and facts and measures to provide analytical measures.
The dimensional warehouse is denormalised and optimized for analysis, in contrast to 3NF or Data Vault modelling approaches, who are more optimized towards data warehousing. Most classical BI analysis and reporting tools are geared towards easily reading the data from a dimensional model.

![BimlFlex solution architecture](https://varigencecom.blob.core.windows.net/blogimages/bimlflex-architecture.png)

### Choosing the architecture

In the BimlFlex architecture it is possible to chose between using Microsoft Azure cloud based data warehousing or on-premises data warehousing for SQL Server.
The Microsoft Azure Cloud based approach uses Polybase and blob storage of files as the ingestion mechanism for loads. This uses an ELT approach to load the data into the data warehouse. The data can be extracted using SSIS from traditional source. The data warehousing solution ban be either Azure SQL Data Warehouse or SQL Server 2016 and newer, commonly running in a VM in Azure.
The on-premises approach uses either traditional loads through an SSIS based ETL process or a ELT based process into a classical installation of SQL Server.

Regardless of the ultimate destination, the BimlFlex modelling approach and the required metadata is the same and it is possible to easily migrate a solution from an on-premises approach to a cloud based approach. For organizations reviewing the cloud as the future platform for data warehousing this means it is possible to use the on-premises approach today and move to the cloud down the line without having to recreate the data warehousing solution.

In BimlFlex, the metadata is managed through a central repository. The management of this metadata is done through an Excel front end. This allows for modelling and management of metadata, source to target mappings and more.

### Importing source metadata

The dimensional model approach uses a direct source to target load model. It connects to and reads the data from a source or a prepared layer out of a data warehouse to populate the facts and dimensions. In this demo we connect to and read the metadata out of a set of views that has been prepared in the WideWorldImporters source system to represent the source for the dimensional data warehouse.

### Model the dimensional data warehouse

For imported metadata objects, it is possible to use the BimlFlex cloning function to create the destination dimension and facts. For identity-based surrogate keys in the data warehouse the cloning mechanism can add a column to use so that the end result directly follow the classical dimensional model. The cloning creates the full target structure as well as the source to target mappings for all source columns.

Once the metadata is imported and all destinations are created it is time to define the relationships between the Facts and Dimensions. These references allows BimlFlex to create the lookups from the fact load to the connected dimensions.

For dimensional attributes it is also possible to define the change types. each dimensional attribute column can be defined as either Type 1 or Type 2. This allows BimlFlex to create either pure Type 1 dimensions, pure type 2 dimensions or mixed, type 6, dimensions.

### Build solution in BimlStudio

Once the model is completed it is time to open the solution in BimlStudio and build out all required artefacts. BimlStudio reads all the metadata from the BimlFlex metadata repository and provides generation of all SQL scripts as well as SSIS and SSDT Project generation for all parts of the data warehousing solution. Once the builds are completed the solution can be opened and run in Visual Studio or it can be passed to a continuous build, continuous deployment pipeline.

### Using On-premises SQL Server

For an on-premises solution the generated artefacts will be SQL table scripts and projects for the database and SSIS Projects with data flows for loading the data from the source database views to the data warehouse.

### Using Cloud based Azure SQL Data Warehouse

To repoint the data warehouse to use an Azure SQL Data Warehouse, the only change needed is:

* Update the `ConnectionString` to point to the Azure SQL Data Warehouse
* Update the Connection Type to `OLEDB SQL Based ELT` rather than the on-premises use of `OLEDB`
* Update the System Type to `Azure SQLDW`.

For Azure SQL Data Warehouse there are additional features available, such as splitting and compressing the export files for optimized load across the chosen data warehouse configuration.

Once the changes are done, the BimlStudio project will provide all required artefacts for implementing the data warehouse on Azure SQL Data warehouse. This includes packages for extracting data from the source database into flat file, the mechanism to move them to Azure Blob Storage, the External Table definitions to expose the data from the files to the data warehouse and the ELT load Stored Procedures that loads the facts and dimensions with the data from the files. For convenience and orchestration help there are also an SSIS project with a package that calls all the load Stored Procedures in the right order.  

## Watch BimlFlex 2018 - Dimensions and Facts

![10 BimlFlex Dimensions and Facts](https://www.youtube.com/watch?v=KrYDpU0EeW8?rel=0&autoplay=0)
