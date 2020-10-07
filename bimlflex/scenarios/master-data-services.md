---
uid: bimlflex-master-data-services
title: BimlFlex Microsoft SQL Server Master Data Services (MDS) integration
summary: Documentation on integrating Microsoft SQL Server Master Data Services within BimlFlex with sample models, sample metadata, and schema types
---
# Microsoft SQL Server Master Data Services (MDS) integration

Microsoft SQL Server Master Data Services (MDS) is an enterprise data management tool included in the Enterprise Edition of SQL Server.

For an overview of MDS, review the Microsoft documentation here: [https://docs.microsoft.com/en-us/sql/master-data-services/master-data-services-overview-mds](https://docs.microsoft.com/en-us/sql/master-data-services/master-data-services-overview-mds)

## Models

MDS uses models to maintain master entities in a SQL database. The models contain entities and these entities can have relationships.
For administrators and Data Stewards there are two main ways to interact with the data

* Web based user interface
* Plugin based Excel user interface

The web based UI also provides management of the models and system.

The MDS Excel plugin works similar to the BimlFlex Excel plugin. The steward connects to a model and entity and gets data into Excel, manipulates it and publishes it back.

It is possible to stage data into MDS by loading source data into staging and persistent staging tables and exposing that data as the source for MDS. It is also possible to load directly from source to MDS. Once the MDS process is finished the data can be exposed through MDS export views and imported from MDS into the EDW through BimlFlex.

It is possible to architect the MDS management process in several different ways. This document demonstrates one way of loading data into MDS and one way of loading data from MDS export views into Staging tables for the data warehouse. Adjusting the patterns used can provide options to support other workflows and processes.

Considering the risk for naming confusion as data is loaded from staging to staging and into MDS and into EDW it is recommended to explicitly name processes to indicate the full flow if data. `Import into MDS from source` and `Import into EDW from MDS` both convey more information than `MDS Import`.

## Sample Model

This document uses the Model and Model Category part of the AdventureWorksLT 2012 database as the source of the MDS model data. A reporting workflow requires the data and relationship to be loaded in to MDS. Data Stewards manually manipulate attributes and relationships in MDS for further use in the organization, including in the EDW.
MDS for SQL Server includes its own sample models, including a model for AdventureWorks Products. It is possible to ruse the approach from this document to integrate into the sample models. This document uses a separate model with 2 separate entities

Log in through the web interface as an MDS administrator to create a model called ProductDemo
2 entities are needed for the new model:

* Product
* Category

For the optional staging tables name this demo uses a `ModelName_EntityName` naming convention to manage names. For larger implementations with multiple models and entities this approach will make it easy to know what table goes to what model/entity when staging.
Our Product and Category entities have the following staging tables created:

* `Stg.ProductDemo_Product_Leaf`
* `Stg.ProductDemo_Category_Leaf`

Each entity need the following attributes created:

Product

* Color
* Category

Category

* Parent Category

The name and code attributes created by default in MDS is reused for the Name and code/key fields in the source entities.

The Product, Category and Category, Parent Category entities are entity based relationships to the Category Entity

Once the Model and the 2 entities are available the staging tables can be reviewed in SQL Server Management Studio.
The default naming convention for the puts the model entity staging tables in the MasterDataServices database, in schema stg and uses the defined names with `_Leaf` suffixed.

## Required metadata for import into MDS

The sourcing from somewhere into the MDS staging tables require metadata for both the source and the destination. The BimlFlex metadata import function can import the table and column definitions so that the process can be mapped.

This document uses separate views for the staging tables for the product and category tables as the source. The loading of source data from the AdventureWorksLT source into Staging and Persistent Staging is considered a separate process. For a Business Data Vault implementation, the source could be a view created from the existing Raw Data Vault that exposes the required information needed in MDS. To make the source to staging and MDS processes separate and independent the MDS source views can read from staging or persistent staging. This will allow the sourcing process to be run independently and the MDS import to be complete without taking any delta loads from source into account.

The metadata setup assumes the source to staging load of the AdventureWorksLT Source is completed and maintained in a separate project.

The source of Product and Category data will be custom views created in the staging database. These views can rename, align data types and provide the right granularity for the MDS load.

The sources are created in their own schema:

```sql
CREATE SCHEMA [MDS_SRC];
GO
```

### The Product source view

```sql
CREATE VIEW [MDS_SRC].[Product]
AS
  SELECT DISTINCT
    CONVERT(NVARCHAR(250), p.Name) AS [Name] ,
    CONVERT(NVARCHAR(250), p.ProductNumber) AS [Code] ,
    CONVERT(NVARCHAR(100), p.Color) AS [Color] ,
    CONVERT(NVARCHAR(100), pc.Name) AS [Category]
  FROM [BFX_ODS].AWLT.Product p
  LEFT JOIN BFX_ODS.AWLT.ProductCategory pc ON p.ProductCategoryID = pc.ProductCategoryID;
GO
```

### The Product Category source view

```sql
CREATE VIEW [MDS_SRC].[Category]
AS
  SELECT DISTINCT
    CONVERT(NVARCHAR(250), pc.Name) AS [Name] ,
    CONVERT(NVARCHAR(250), pc.Name) AS [Code] ,
    CONVERT(NVARCHAR(250), ppc.Name) AS [Parent Category]
  FROM [BFX_ODS].AWLT.ProductCategory pc
  LEFT JOIN BFX_ODS.AWLT.ProductCategory ppc ON pc.ParentProductCategoryID = ppc.ProductCategoryID;
```

Note that these views are for demonstration purposes. Change management, effectiveness, deletions etc. require additional consideration.

## Connections

The existing `BFX_STG` staging connection can be reused for the MDS source views.
A new connection to the MDS staging destination tables is added as an entry in the Connections Tab.

The new connection is called MasterDataServices and maps to the MasterDataServices database that the MDS instance has been configured to use. The new MDS destination connection uses the IntegrationStage attribute `Master Data Services` to indicate the use to BimlFlex.

The load from source staging table to MDS staging table is defined in its own batch.

The batch is included in its own project

The object tab will include the source tables/views used for loading into MDS and the destination staging tables in MDS.

For all objects the full set of column metadata will have been imported into the Columns sheet.

Some columns are not required from the MDS tables. They can be ignored or removed in the metadata sheet.

Depending on the source structure, not all columns will be mapped from source to MDS. This document uses prepared views that are aligned with the MDS destination. In an implementation project the master data modeling sessions would form the base for model design and attribute mappings.
The entity load from source to MDS can also use different approaches to updates/changes to existing attributes. In most implementation scenarios, there will be some cases where an entity (identified by the code used) will only be loaded from source once. Other entities will be reloaded and updated with new attributes from source. It is important to decide how this process will be implemented as both the data management process and the technical implementation will be different depending on the requirements. In general, if the attributes are manually maintained in MDS there is no point in updating them from source ever again. Only the attributes maintained in source should be reloaded and updated.

The source to target mappings of attributes from the source table to the destination MDS staging table is done in the columns tab in the Excel metadata editor. For the product entity, the name column is mapped to the name MDS standard column, the product number is mapped to the code (in this case the product number has been identified as the Integration Key to be used for managing the products in MDS). The color column is mapped to the color destination staging column. The Category reference is to the code value from the Category entity. As the Code will be the name the source needs a join from the Product to the ProductCategory table to include the category name instead of the id number that is the technical key form the source.

For the Product Category, the name is mapped to the code column and name column. The Parent Category will reference the Code column (the name, as that has been identified as the Integration Key for the Category). Since the source only has the technical key here it is also required to join the Category source with itself to get the parent category name. The AdventureWorksLT source enforces a unique category name meaning it is possible to use it for the code column. For sources where names can be repeated in the hierarchy another approach would be necessary.

The joins to derive this extra data are added either to the Objects tab for the 2 source to staging tables in the sourcing project. This would enforce the joins in the source query and add the expanded data in the staging and persisted staging tables. That builds a dependency between the projects where a clean separation of concern might be better. The example views will join the data in persistent staging instead. Another option is to enforce the joins in the source by exposing data through prepared views. This moves the dependency on proper modeling all the way to the source and would require additional considerations.

Once the source data views are created and imported into the metadata the mapping between the source and destination can be done.
