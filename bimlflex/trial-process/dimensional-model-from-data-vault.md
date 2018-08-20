---
uid: bimlflex-dimensional-model-from-data-vault
title: BimlFlex Dimensional Model from Data Vault
---
# Dimensional Model from Data Vault

## Supporting Videos

TODO: Coming Soon

## Supporting BimlFlex Documentation

@bimlflex-user-guide

## Implementing a Dimensional Model from Data Vault

### Overview

The dimensional model, Data Mart, is optimized for analytical tools, end user queries and the building models for Analysis Services cubes and tabular models.

This type of layer has many names, Information Mart, Data Mart, Kimball Model, Dimensional Model, Reporting Layer, Semantic Layer. They can be either Raw, without business rules applied or refined with any number of filters, rules and data processing steps applied. BimlFlex allows the rapid creation of any of these constructs by applying a metadata driven modelling and generation process.

This article describes the creation of a classical dimensional model on top of the Data Vault and PIT/BRG constructs.

It follows the general dimensional approach of building Fact tables that contain metrics and connections to Dimension members and Dimension tables that contain descriptive attributes.

While the Raw Data Vault is loaded with uninterpreted data, the Dimensional model normally require that a set of Business rules are applied to the data so that it is fit for the required analytical purpose. In the process of creating the end to end solution it is common to also create raw versions of these artefacts that are used to refine the business rules used to create the final model.

In this process a set of Fact and Dimensional views are created based on the PIT and Bridge tables in the Data Vault layer. These are used to populate a dimensional model in a data mart as a presentation/reporting layer.

Querying the Data Vault layer is made easier by utilizing the PIT and Bridge tables. To also include relevant contextual data it is necessary to join from these constructs to any Satellite that contains effectiveness information as well as the metrics or attributes needed. By using the time slice information in the Satellites the relevant record for the event date time is added to the dimensional model.

### Architecture

The Dimensional model is created in the BimlFlex metadata in the form of a source to target mappings set of objects and columns. The source is generally implemented as a view on top of the existing Data Vault constructs. This includes tables from the Raw Data Vault, Business Vault constructs, Point In Time and Bridge tables and any extra required interpretation views and abstraction views that are required to feed the dimensional model.

For the BimlFlex trial, a set of views are created and used as the source for the dimensional model. These views can contain any number of business rules that are required for the Dimension and Fact table loads. In a production scenario the layered loads generally starts from the Raw Data Vault tables, implements a set of Business Data Vault constructs such as Satellites with Business Rules applied and Same As Links, implements a set of Point In Time and Bridge constructs and lastly manages a set of abstraction views that the dimensional model reads from.

### Querying the PIT and BRG tables

Once the Point In Time and Bridge tables are created it is possible to query them. For a dimension destination the query normally gathers all attributes for an entity over time, with some attributes as type 1 change tracking and some as type 2. A fact source normally identifies an event that is stored in a Link Satellite or a Hub Satellite. The event is normally defined by an event date time, such as the time a sale took place. This date time is then used to identify any additional attributes across the Satellites and their timelines.

Sample Dimension Query:

```sql
-- (c) Varigence 2018
-- Sample Dimension source view on top of PIT and Satellites

-- create schema if required
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'rdvsrc') EXEC ('CREATE SCHEMA [rdvsrc] AUTHORIZATION [dbo]')
GO

-- purge existing view
IF EXISTS (SELECT * from sys.objects WHERE object_id = OBJECT_ID(N'[rdvsrc].[DimProduct]') AND type IN (N'U'))
DROP VIEW [rdvsrc].[DimProduct]
GO

-- create source view
CREATE VIEW [rdvsrc].[DimProduct] AS

    SELECT  p.PIT_Product_SK AS ProductKey ,
            p.Product_SK AS ProductSKey ,
            p.Product_BK AS ProductBKey ,

            -- Record effectiveness is derived from the Point In Time table. Use these for the Fact table lookup
            p.FlexRowEffectiveFromDate ,
            p.FlexRowEffectiveToDate ,

            --pick an approach for the Record Source if it is needed in the Dimensional Model
            COALESCE(sp.[FlexRowRecordSource], spp.[FlexRowRecordSource], 'Unknown') AS [RecordSource] ,

            -- derives the latest date time any satellite was updated.
            (SELECT MAX(LastUpdateDate)
                FROM (VALUES (sp.[FlexRowEffectiveFromDate]),(spp.[FlexRowEffectiveFromDate])) AS UpdateDate(LastUpdateDate))
            AS LastModified,

            -- add all required attributes from linked sattelites
            sp.[Name],
            sp.ProductNumber,
            sp.Color,
            spp.ListPrice

    FROM    rdv.PIT_Product p

            -- Left Join to include rows where Satellites have no data for a given Core Business Concept
            -- Join on the specific Surrogate key and the identified timeslice EffectiveFromdate for the Satellite
            LEFT OUTER JOIN [rdv].[SAT_Product_AWLT] sp ON p.SAT_Product_AWLT_Product_SK = sp.Product_SK
            AND p.SAT_Product_AWLT_FlexRowEffectiveFromDate = sp.[FlexRowEffectiveFromDate]

            LEFT OUTER JOIN [rdv].[SAT_Product_Price_AWLT] spp ON p.SAT_Product_AWLT_Product_SK = spp.Product_SK
            AND p.SAT_Product_AWLT_FlexRowEffectiveFromDate = spp.[FlexRowEffectiveFromDate];
GO

-- SELECT * FROM [rdvsrc].[DimProduct]
```

Sample Fact Query:

```sql
TODO: Add sample fact query
```

## Detailed Steps

The following detailed steps walks through the creation of the Dimensional Model from Data Vault

### Creating the source views for the dimensional model

The views used as sources for the dimensional model can either be managed and source controlled through the BimlFlex metadata or through the SQL Server Data Tools project for the databases. Use the approach most compatible with the deployment pipeline used.

TODO: add content

### Creating the dimensional model source metadata

Once the views are defined, import the metadata from these views using the Metadata Import Wizard in the BimlFlex Excel metadata management tool.

TODO: add content

### Mapping the model metadata

The metadata imported from the views will not have any relationships defined as these are not provided by the views. Add the source relationships between the fact table source and the dimension source objects.

TODO: add content

### Creating the destination metadata through the Clone Table feature

BimlFlex provides a `Clone Table` metadata creation tool for creating the destination dimension and fact tables.

![Clone Table -center -50%](../user-guide/images/bimlflex-ss-v5-clone-table.png "Clone Table")

select the source object in the objects sheet and click the `Clone Table` button in the ribbon. Choose the object type (Fact or Dimension), define a destination schema and table name and choose to add an Identity Column to the destination. Checking the `Add Target Column Mappings` will populate the source to target column mappings between the source and destination objects.

TODO: add content

### Building the dimensional model SQL artefacts

With the metadata defined in the Excel metadata management tool, refresh the metadata in BimlStudio and create the SQL Artefacts as normal through the `Create Table Script`. The source views and destination tables will be included in the script.

Should the source view be managed through SSDT, deploy them as normal.

### Building the dimensional model SSIS load project

Once the metadata is complete and refreshed in the BimlStudio project and the tables and source views are available it is possible to build the load project. This is built, tested and deployed in the same way as the already created source extraction and Data Vault load projects.

Once the Batch package has been run the dimensional model in the Data Mart will be available for querying.
