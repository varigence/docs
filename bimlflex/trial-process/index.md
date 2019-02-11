---
uid: bimlflex-trial-process
title: BimlFlex Trial Process
---
# BimlFlex Trial Process Overview

## Summary

The BimlFlex trial process is a guide through building a Data Warehouse using BimlFlex. The trial uses the Microsoft sample database AdventureWorks LT as a source. It allows the creation of an end to end load process for a 2 or 3 layer data warehouse. A 2 layer process being Source to Staging to Dimensional and a 3 layer process being Source to Staging to Data Vault to Dimensional.

@bimlflex-user-guide

## Trial Prerequisites

The trial is an on-premises installation and uses a local installation of BimlFlex and BimlStudio for development. It requires SQL Server 2016 for hosting databases and uses SSIS for the ETL process.

The trial supports 2 architectures:

* a 2 layer approach with staging and Data Mart layer
* a 3 layer approach with staging, Data Vault and Data Mart layer.

both architectures uses a staging layer with both a transient staging database and a persistent staging (archive) database. both architectures have an analyst-facing dimensional model. The addition of the Data Vault layer illustrates how BimlFlex allows the acceleration and creation of an integration layer that allows cross-system integration on business keys.

For the trial the following is needed:

* SQL Server 2016 installation with SQL Server engine and SSIS/Integration services
* Windows-based development machine for local installation of BimlStudio and BimlFlex
* Excel 2013-2016 for managing and modelling metadata
* Visual Studio 2015 with SSDT and SSIS components
* SQL Server Management Studio for managing databases and running SQL Scripts

## Trial process and documentation

The trial consists of the following steps:

### Setup and installation of BimlStudio and BimlFlex

The installation and setup of the BimlFlex environment includes downloading the required applications, installing and activating them on a development machine. This process readies the environment for the trial process.

The following installations are required apart from the prerequisite Microsoft SQL and SSIS development installations.

1. [Installing BimlStudio](installing-bimlstudio.md)
1. [Installing BimlFlex](installing-bimlflex.md)
1. [Installing SSIS Components](installing-custom-SSIS-components.md)

### Setup databases

The database setup phase creates the databases required for BimlFlex:

1. BimlFlex, metadata repository
1. BimlCatalog, orchestration and audit/logging repository

### Upgrade databases and BimlFlex Bundle version

BimlStudio has an integrated, online feature to upgrade BimlFlex projects and databases to the latest version

* @bimlflex-trial-upgrading-a-bimlflex-project

#### Creating a BimlFlex project

The BimlFlex project is based on BimlStudio and is a combination of project files on disk and project metadata stored in the BimlFlex metadata database.

* [Creating and Configuring a BimlFlex Project](creating-and-configuring-a-bimlflex-project.md)

#### Creating the scaffolding metadata

The first time an empty project is used it allows the creation of sample metadata. This is the base of the trial process.

* [Creating the Sample Metadata](creating-the-scaffolding-metadata.md)

#### Import of source metadata

Source metadata management and modelling is done through the BimlFlex Excel based modelling tool. it allows import of the AdventureWorks LT database source into the metadata repository and modelling of the metadata to prepare it for a data mart dimensional model or a Data Vault based integration layer.

* [Setting up AdventureWorksLT Source Database](setting-up-adventureworkslt2012-source-database.md)
* [Importing Source Metadata](importing-source-metadata.md)

#### Building databases, tables and SSIS packages for Source to Staging

Once the metadata from the source has been added to the BimlFlex metadata repository it is possible to use BimlFlex to build the required Staging, Persistent Staging databases and tables as well as generating the SSIS project to load the Source Data to the data warehouse. Trialing this at this stage allows the validation that the end to end process for SSIS works as expected.

* [Building Source to Staging](building-databases-tables-and-SSIS-packages-for-source-to-staging.md)

#### Configuration of BimlFlex

The BimlFlex framework behavior is controlled by a comprehensive set of configurations. This section walks through the configurations and highlights the options available.

* [Configuration of BimlFlex](configurations-and-settings-in-bimlflex.md)

#### Modelling of source metadata

Most automation features in BimlFlex are built on modelling the metadata to provide the Data Warehouse required. BimlFlex allows a number of modelling approaches and scenarios to easily build the Data Warehouse to the specification desired. The trial illustrates this by applying modelling to the source metadata. Depending on the architecture chosen the staging layer is prepared for either Data Vault loads or data mart loads the configuration and structures of the staging area will differ slightly. Data Vault uses pre-processing to add hashed keys in to the staging layer.

* [Modeling of Source Metadata](modeling-of-source-metadata.md)
* [Applying Data Type Mappings](applying-data-type-mappings.md)
* [Building Business Keys for Data Vault](building-business-keys-for-data-vault.md)

### Data Vault Architecture

#### Creating a Data Vault based integration layer

BimlFlex supports acceleration of Data Vault constructs from business keys and relationships in the source metadata. based on the model a comprehensive Raw Data Vault layer can be created with ease.

* [Accelerating the Raw Data Vault Layer](accelerating-the-raw-data-vault-layer.md)

#### Adding Business Data Vault performance constructs

The Point in Time and Bridge table structures are used in Data Vault to make the Data Vault easier to query and to improve query performance.

* [Adding Business Data Vault](adding-business-data-vault-performance-constructs.md)

#### Dimensional Model

Based on the PIT and Bridge tables in the Data Vault layer, a set of Fact and Dimensional views are created that are used to populate a dimensional model in a Data Mart.

* [Dimensional Model](dimensional-model.md)

### 2 Layer Dimensional Model Architecture

#### Creating a 2 layer Dimensional Model

The Data Mart layer for a 2 layer architecture reads Facts and Dimensions directly from the staging layer. A set of abstraction views are used to apply business logic and expose the staging layer to the presentation layer. These views are used to populate a dimensional model in a Data Mart.

* [Dimensional Model](dimensional-model.md)

#### Using prepared trial metadata

Metadata for all stages has been prepared and is available to load into the project at any time using the metadata archiving process. There is a trial customer in the BimlFlex database that has archived snapshots available for all stages in the trial process. It is possible to either follow along with the videos and documentation and create the metadata or simply load the metadata at a given point in the process to review the metadata and build the tables and SSIS packages.

* [Using Trial Snapshot Metadata](using-prepared-trial-metadata.md)
