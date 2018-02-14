# BimlFlex trial process overview

## Summary
The BimlFlex trial process is a guide through building a Data Warehouse using BimlFlex. The trial uses the Microsoft sample database AdventureWorks LT as a source. It allows the creation of an end to end load process for a 2 or 3 layer data warehouse. A 2 layer process being Source to Staging to Dimensional and a 3 layer process being Source to Staging to Data Vault to Dimensional. 

You can find Supporting BimlFlex [documentation here.](https://varigence.com/Documentation/BimlFlex)

## Trial Prerequisites

The trial is an on-premises installation and uses a local installation of BimlFlex and BimlStudio for development. It requires Sql Server 2016 for hosting databases and uses Ssis for the ETL process.

The trial supports 2 architectures:

- a 2 layer approach with staging and a data mart layer
- a 3 layer approach with a staging, data vault and a data mart layer.

both architectures uses a staging layer with both a transient staging database and a persistent staging (archive) database. both architectures have an analyst-facing dimensional model. The addition of the Data Vault layer illustrates how BimlFlex allows the acceleration and creation of an integration layer that allows cross-system integration on business keys.

For the trial the following is needed:

- Sql Server 2016 installation with Sql Server engine and Ssis/Integration services
- Windows-based development machine for local installation of BimlStudio and BimlFlex
- Excel 2013-2016 for managing and modelling metadata
- Visual Studio 2015 with SSDT and Ssis components
- Sql Server Management Studio for managing databases and running Sql Scripts

## Trial process and documentation

The trial consists of the following steps:

**Setup and installation of BimlStudio and BimlFlex**

The installation and setup of the BimlFlex environment includes downloading the required applications, installing and activating them on a development machine. This process readies the environment for the trial process.

The following installations are required apart from the prerequisite Microsoft Sql and Ssis development installations.

1. [Installing BimlStudio](https://varigence.com/Documentation/BimlFlex/Article/Installing+BimlStudio)
2. [Installing BimlFlex](https://varigence.com/Documentation/BimlFlex/Article/Installing+BimlFlex)
3. [Installing SSIS Components](https://varigence.com/Documentation/BimlFlex/Article/Installing+SSIS+Components)

**Configuration of databases and updates using the utility application**

The Configuration phase creates and sets up the databases required for BimlFlex:

1. BimlFlex, metadata repository
2. BimlCatalog, orchestration and audit/logging repository

as well as updates the master BimlFlex Bundle file used in the BimlFlex projects in BimlStudio

[Update and Configure BimlFlex](https://varigence.com/Documentation/BimlFlex/Article/Update+and+Configure+BimlFlex)

**Creating a BimlFlex project**

The BimlFlex project is based on BimlStudio and is a combination of project files on disk and project metadata stored in the BimlFlex metadata database.

[Creating and Configuring a BimlFlex Project](https://varigence.com/Documentation/BimlFlex/Article/Creating+and+Configuring+a+BimlFlex+Project)

**Creating the scaffolding metadata**

The first time an empty project is used it allows the creation of sample metadata. This is the base of the trial process.

[Creating the Sample Metadata](https://varigence.com/Documentation/BimlFlex/Article/Creating+the+Scaffolding+Metadata)

**Import of source metadata**

Source metadata management and modelling is done through the BimlFlex Excel based modelling tool. it allows import of the AdventureWorks LT database source into the metadata repository and modelling of the metadata to prepare it for a data mart dimensional model or a Data Vault based integration layer.

[Setting up AdventureWorksLT Source Database](https://varigence.com/Documentation/BimlFlex/Article/Setting+up+AdventureWorksLT+Source+Database)
[Importing Source Metadata](https://varigence.com/Documentation/BimlFlex/Article/Importing+Source+Metadata)

**Building databases, tables and Ssis packages for Source to Staging**

Once the metadata from the source has been added to the BimlFlex metadata repository it is possible to use BimlFlex to build the required Staging, Persistent Staging databases and tables as well as generating the Ssis project to load the Source Data to the data warehouse. Trialing this at this stage allows the validation that the end to end process for Ssis works as expected.

[Building Source to Staging](https://varigence.com/Documentation/BimlFlex/Article/Building+Source+to+Staging)

**Configuration of BimlFlex**

The BimlFlex framework behavior is controlled by a comprehensive set of configurations. This section walks through the configurations and highlights the options available.

[Configuration of BimlFlex](https://varigence.com/Documentation/BimlFlex/Article/Configuration+of+BimlFlex)


**Modelling of source metadata**

Most automation features in BimlFlex are built on modelling the metadata to provide the Data Warehouse required. BimlFlex allows a number of modelling approaches and scenarios to easily build the Data Warehouse to the specification desired. The trial illustrates this by applying modelling to the source metadata. Depending on the architecture chosen the staging layer is prepared for either Data Vault loads or data mart loads the configuration and structures of the staging area will differ slightly. Data Vault uses preprocessing to add hashed keys in to the staging layer.

[Modelling of Source Metadata](https://varigence.com/Documentation/BimlFlex/Article/Modelling+of+Source+Metadata)
[Applying Data Type Mappings](https://varigence.com/Documentation/BimlFlex/Article/Applying+Data+Type+Mappings)
[Building Business Keys for Data Vault](https://varigence.com/Documentation/BimlFlex/Article/Building+Business+Keys+for+Data+Vault)

**Data Vault Architecture**

**Creating a Data Vault based integration layer**

BimlFlex supports acceleration of Data Vault constructs from business keys and relationships in the source metadata. based on the model a comprehensive Raw Data Vault layer can be created with ease.

[Accelerating the Raw Data Vault Layer](https://varigence.com/Documentation/BimlFlex/Article/Accelerating+the+Raw+Data+Vault+Layer)

**Adding Business Data Vault performance constructs**

The Point in Time and Bridge table structures are used in Data Vault to make the Data Vault easier to query and to improve query performance.

- Point in Time, PIT tables are used to create timelines for all changes in all or some Satellites attached to a business entity in a Hub.
- Bridge tables are used to link business entities in Hubs through their link tables into easy to query constructs.

[Adding Business Data Vault](https://varigence.com/Documentation/BimlFlex/Article/Adding+Business+Data+Vault)

**Dimensional Model from Data Vault**

Based on the PIT and Bridge tables in the Data Vault layer a set of Fact and Dimensional views are created that are used to populate a dimensional model in a data mart in the presentation layer.

[Dimensional Model from Data Vault](https://varigence.com/Documentation/BimlFlex/Article/Dimensional+Model+from+Data+Vault)

**2 Layer Dimensional Model Architecture**

**Creating a 2 layer Dimensional Model**

The data mart layer for a 2 layer architecture reads facts and dimensions directly from the staging layer. A set of abstraction views are used to apply business logic and expose the staging layer to the presentation layer. These views are used to populate a dimensional model in a data mart in the presentation layer.

[Creating a Dimensional Layer](https://varigence.com/Documentation/BimlFlex/Article/Creating+a+Dimensional+Layer)

**Using prepared trial metadata**

Metadata for all stages has been prepared and is available to load into the project at any time using the metadata archiving process. There is a trial customer in the BimlFlex database that has archived snapshots available for all stages in the trial process. It is possible to either follow along with the videos and documentation and create the metadata or simply load the metadata at a given point in the process to review the metadata and build the tables and Ssis packages.

[Using Trial Snapshot Metadata](https://varigence.com/Documentation/BimlFlex/Article/Using+Trial+Snapshot+Metadata)
