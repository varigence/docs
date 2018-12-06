---
categories: [BimlFlex]
layout: post
published: false
summary: This BimlFlex webinar looks at integrating BimlFlex with Microsoft SQL Server MDS and the load process into MDS
tags: [BimlFlex, MDS]
title: BimlFlex 2018 - Integrating with MDS - Load to MDS
---
# BimlFlex - Integrating with MDS - Load to MDS

## BimlFlex 2018 - Integrating with MDS - Load to MDS

This BimlFlex webinar looks at integrating BimlFlex with Microsoft SQL Server MDS and the load process into MDS.

### Preparing the MDS Model

The video starts with a creation of a Master Data Services Model for the Product management. The Model contains a Product Entity that in turn contains attributes.
The creation of the Entity also creates an MDS staging table in the MDS database. To read data out of MDS a subscription view is created. This view is also used by the load process to check for existing records.

### Creating the BimlFlex metadata.

In BimlFlex, the metadata is managed through a central repository. The management of this metadata is done through an Excel front end. This allows for modelling and management of metadata, source to target mappings and more. The example in the video uses a direct connection from source to destination, loading MDS straight from the AdventureWorks LT source system. A common approach is for the MDS loads to be integrated into the Data warehouse loads. Using either a source view on top of the Data Warehouse or a staging table that is part of a source system load as the source for the MDS load. 

For the load to MDS the MDS connection is specified as `Master Data Services` in the `IntegrationStage` column.

A Batch for the load process is created. In the example it is named `LOAD_AWLT_TO_MDS` to also illustrate the direction of data.

A Project for the load process is created. In the example it is named `LOAD_AWLT_TO_MDS` to also illustrate the direction of data. It uses the AdventureWorks connection as the source and the MDS as target. It uses the created Batch for the batch grouping.

For the objects there are 2 tables specified. The source `SalesLT.Product` table and the MDS staging, destination table `stg.Product_Leaf`.

The required columns for the destination model is specified to match the entity in MDS and any required transformation or derivations are added. The source columns are mapped to the destination columns.

### Build solution in BimlStudio

Once the model is completed it is time to open the solution in BimlStudio and build out all required artefacts. BimlStudio reads all the metadata from the BimlFlex metadata repository and provides generation of an SSIS Project for the MDS load. Once the builds are completed the solution can be opened and run in Visual Studio or it can be passed to a continuous build, continuous deployment pipeline.

Opening the Project in Visual Studio illustrates the load process. The project includes a batch that calls all individual entity loads, in this case the single Product load process. The Product load process loads from the source, does a lookup to check for existing records and loads the data to the MDS staging table. The package then starts the MDS ingestion process that loads the data from the staging table to the entity.

Once the load is completed the loaded data can be reviewed in the model explorer.

### Additional steps

For housekeeping and to manage earlier versions of MDS it is possible to create a preprocessing step to truncate all MDS staging tables. For SQL Server 2016 and later this can be automated through MDS. For earlier versions, these tables should be maintained so that they don't get filled up with old data.

As a post process it is possible to start the MDS Model validation process. This validates the model and applies any defined business rules.

The model load is now completed. The model is ready for data steward management and the subscription view is ready to be ingested into the data warehouse as a separate source.

## Watch BimlFlex 2018 - Integrating with MDS - Load to MDS

![BimlFlex - Master Data Services Integration](https://www.youtube.com/watch?v=r8Uc9XObmyg?rel=0&autoplay=0)
