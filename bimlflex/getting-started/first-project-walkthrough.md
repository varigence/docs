---
uid: first-project-walkthrough
title: First Project Walkthrough
---
# First Project Walkthrough

## Summary

The Getting Started with BimlFlex is an end to end, step by step guide to building a Data Warehouse using BimlFlex.

![BimlFlex End to End Walkthrough -center](https://www.youtube.com/watch?v=6BgkXqjDtvY?rel=0&autoplay=0 "BimlFlex End to End Walkthrough")

The getting started documentation implements an on-premises installation and uses a local installation of BimlFlex and BimlStudio for development. While BimlFlex supports SQL Server 2008-2017, the examples here use SQL Server 2017 for hosting databases, uses SSIS for the load process and uses the Microsoft AdventureWorksLT sample database as a source.

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

[Download](https://varigence.com/downloads/bimlflexdevsetup.exe) and install the BimlFlex developer environment to get started.

This installer includes all the required components for a BimlFlex implementation.

## BimlFlex and BimlStudio Applications

The installer includes the BimlFlex App and BimlStudio as well as SSIS Custom components and database definitions.

* Install BimlStudio, both 32-bit and 64-bit versions
* Install the BimlFlex App, both 32-bit and 64-bit versions
* Install the BimlFlex Excel add-in with a bitness matching the installed Excel version
* Install all custom components

## BimlFlex databases

The installer allows the creation of the required databases. During installation, create the BimlFlex and BimlCatalog databases on the data warehouse SQL Server.

* BimlFlex - metadata repository database
* BimlCatalog - orchestration and audit/logging repository database

## Creating the BimlFlex and BimlStudio project

![Create and configure the BimlFlex project -center](https://www.youtube.com/watch?v=7zt7CmFjDZk?rel=0&autoplay=0 "Create and configure the BimlFlex project")

Once the installation is completed and the databases are available, it is time to create the metadata customer/project that will be used in the getting started process. Once the project is available it is time to load some sample metadata to get started.

Building tables, scripts and packages is done through BimlStudio, the development environment for BimlFlex. The BimlFlex project is a combination of project files on disk and project metadata stored in the BimlFlex metadata database. Start BimlStudio and create a BimlFlex project. Connect the project to the metadata database and the newly created metadata customer/project.

## Load Sample Metadata

The BimlFlex App includes ready-made sample metadata that can be loaded into the project.

## Import of source metadata

![Importing Source Metadata -center](https://www.youtube.com/watch?v=ClMJcZPdSks?rel=0&autoplay=0 "Importing Source Metadata")

Source metadata management and modeling is done through the BimlFlex App. It makes it easy to import the AdventureWorksLT source into the metadata repository.

## Data Vault Acceleration

![Data Vault Acceleration -center](https://www.youtube.com/watch?v=w1UTANpF_ug?rel=0&autoplay=0 "Data Vault Acceleration")

Graphical, agile data vault modelling and acceleration is done through the BimlFlex App. This allows the modeler to create the expected Data Vault model with ease.

## Build the Data Vault Project

![Build the Data Vault Project -center](https://www.youtube.com/watch?v=qYu8pwqgAm0?rel=0&autoplay=0 "Build the Data Vault Project")

Once the metadata meets the data warehouse requirements it is time to use BimlStudio to build the databases, tables, scripts and load packages for the Data Warehouse process. This includes creating the required scripts and building the required SSIS packages.

## Applying Load Parameters

![Applying Load Parameters -center](https://www.youtube.com/watch?v=7GwiIC5vbs8?rel=0&autoplay=0 "Applying Load Parameters")

To load only new data every time the load process is run, add load parameters where needed. The Load Parameter function in BimlFlex allows easy adding of high watermark load parameters to the sourcing process.

## Business Data Vault Model

![Business Data Vault Model -center](https://www.youtube.com/watch?v=JZT8rDBMhmI?rel=0&autoplay=0 "Business Data Vault Model")

The Point in Time and Bridge table structures are used in Data Vault to make the Data Vault easier to query and to improve query performance.

## Dimensional Model

![Implementing Data Vault to Data Mart Model -center](https://www.youtube.com/watch?v=UKq-libt3xg?rel=0&autoplay=0 "Implementing Data Vault to Data Mart Model")

The Dimensional model is built on top of the Raw and Business Data Vault model. By using a view-based abstraction layer between the tables and the Data Mart load it is possible to more easily accommodate future changes and optimize the sources for the Dimensions and Facts.

The Facts and Dimensions are created from the source views through the cloning feature. This allows rapid and agile creation of the destination tables and the source to target mappings required.

Once the Dimensions and Facts are created, it is possible to create the relationships between the Fact Integration Keys and the Dimensions for Dimension lookups.

Once the model is completed it is time to create the complete load process through BimlStudio.
