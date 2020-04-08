---
uid: bimlflex-getting-started-first-project-walkthrough
title: First Project Walkthrough
---
# First Project Walkthrough

## Summary

The Getting Started with BimlFlex is an end to end, step by step guide to building a Data Warehouse using BimlFlex.

![BimlFlex End to End Walkthrough -center](https://www.youtube.com/watch?v=6BgkXqjDtvY?rel=0&autoplay=0 "BimlFlex End to End Walkthrough")

The getting started documentation implements an on-premises installation and uses a local installation of BimlFlex and BimlStudio for development.

BimlFlex supports SQL Server 2008-2019 as well as Azure Synapse and Snowflake and both SQL Server Integration Services and Azure Data Factory. The examples here use SQL Server 2017 for hosting databases, uses SSIS for the load process and uses the Microsoft AdventureWorksLT sample database as a source.

The getting started process demonstrates a 3 layer approach with staging, Data Vault and Data Mart layer.

This uses a staging layer with both a transient staging database and a persistent staging (archive) database. The Data Vault layer illustrates how BimlFlex allows agile acceleration of an integration layer for modern data warehousing. For easy reporting and analytics the architecture is completed with an analyst-facing dimensional model.

The following is needed:

* Windows-based development machine for local installation of BimlStudio and BimlFlex
* SQL Server 2017 with SQL Server engine and SSIS/Integration services
* Visual Studio 2017 with SSDT and SSIS components
* SQL Server Management Studio or similar for managing databases and running SQL Scripts
* Excel 2013 or later, if the Excel Metadata management add-in is used

## Installation of BimlFlex

![Installing BimlFlex -center](https://www.youtube.com/watch?v=nnv5XnqbhvI?rel=0&autoplay=0 "Installing BimlFlex")

More information: @bimlflex-getting-started-installing-bimlflex

Download the latest installer from here: @bimlflex-release-notes

## BimlFlex and BimlStudio Applications

The installer includes the BimlFlex App and BimlStudio as well as SSIS Custom components and database definitions.

* Install BimlStudio, both 32-bit and 64-bit versions
* Install the BimlFlex App, both 32-bit and 64-bit versions
* Install the BimlFlex Excel add-in with a bitness matching the installed Excel version
* Install all custom components

## BimlFlex databases

The installer allows the creation of the required databases.

During installation, create the BimlFlex and BimlCatalog databases on the data warehouse SQL Server.

* BimlFlex - metadata repository database.  
    More information: @bimlflex-database
* BimlCatalog - orchestration and audit/logging repository database.  
    More information: @bimlcatalog-database

## Creating the BimlFlex and BimlStudio project

![Create and configure the BimlFlex project -center](https://www.youtube.com/watch?v=7zt7CmFjDZk?rel=0&autoplay=0 "Create and configure the BimlFlex project")

Once the installation is completed and the databases are available, it is time to create the metadata customer/project that will be used in the getting started process. Once the project is available it is time to load some sample metadata to get started.

More information: @bimlflex-getting-started-creating-and-configuring-a-bimlflex-project

## Setting up the AdventureWorksLT source database

![Setting up the AdventureWorksLT source database -center](https://www.youtube.com/watch?v=_XW_tqP_4lo?rel=0&autoplay=0 "Setting up the AdventureWorksLT source database")

Once the installation is completed and the databases are available, it is time to create the metadata customer/project that will be used in the getting started process. Once the project is available it is time to load some sample metadata to get started.

More information: @bimlflex-getting-started-setting-up-adventureworkslt2012-source-database

## Load Sample Metadata

![Load Sample Metadata -center](https://www.youtube.com/watch?v=2rL853XpST4?rel=0&autoplay=0 "Load Sample Metadata")

The BimlFlex App includes ready-made sample metadata that can be loaded into the project.

More information: @bimlflex-getting-started-load-sample-metadata

## Import of source metadata

![Importing Source Metadata -center](https://www.youtube.com/watch?v=ClMJcZPdSks?rel=0&autoplay=0 "Importing Source Metadata")

Source metadata management and modeling is done through the BimlFlex App. It makes it easy to import the AdventureWorksLT source into the metadata repository.

More information: @bimlflex-getting-started-importing-source-metadata

## Data Vault Acceleration

![Data Vault Acceleration -center](https://www.youtube.com/watch?v=w1UTANpF_ug?rel=0&autoplay=0 "Data Vault Acceleration")

Graphical, agile data vault modeling and acceleration is done through the BimlFlex App. This allows the modeler to create the target Data Vault model with ease.

More information: @bimlflex-getting-started-accelerating-the-raw-data-vault-layer

## Build the Data Vault Project

![Build the Data Vault Project -center](https://www.youtube.com/watch?v=qYu8pwqgAm0?rel=0&autoplay=0 "Build the Data Vault Project")

Once the metadata meets the data warehouse requirements it is time to use BimlStudio to build the databases, tables, scripts and load packages for the Data Warehouse process. This includes creating the table and load scripts and building SSIS packages.

More information: @bimlflex-getting-started-building-databases-tables-and-ssis-packages-for-source-to-staging

## Applying Load Parameters

![Applying Load Parameters -center](https://www.youtube.com/watch?v=7GwiIC5vbs8?rel=0&autoplay=0 "Applying Load Parameters")

To load only new data every time the load process is run, add load parameters where needed. The Load Parameter function in BimlFlex allows easy adding of high watermark load parameters to the sourcing process.

more information: @bimlflex-getting-started-applying-load-parameters

## Business Data Vault Model

![Business Data Vault Model -center](https://www.youtube.com/watch?v=JZT8rDBMhmI?rel=0&autoplay=0 "Business Data Vault Model")

The Point in Time and Bridge table structures are used in Data Vault to make the Data Vault easier to query and to improve query performance.

more information: @bimlflex-getting-started-adding-business-data-vault-performance-constructs

## Dimensional Model

![Implementing Data Vault to Data Mart Model -center](https://www.youtube.com/watch?v=UKq-libt3xg?rel=0&autoplay=0 "Implementing Data Vault to Data Mart Model")

The Dimensional model is built on top of the Raw and Business Data Vault model. By using a view-based abstraction layer between the tables and the Data Mart load it is possible to more easily accommodate future changes and optimize the sources for the Dimensions and Facts.

more information: @bimlflex-getting-started-dimensional-model
