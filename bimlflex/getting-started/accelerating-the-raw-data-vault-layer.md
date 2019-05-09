---
uid: bimlflex-trial-accelerating-the-raw-data-vault-layer
title: Accelerating the Raw Data Vault Layer
---
# Build the Data Vault

![Build the Data Vault -center](https://www.youtube.com/watch?v=qYu8pwqgAm0?rel=0&autoplay=0 "Build the Data Vault")

BimlFlex provides a Graphical Data Vault Accelerator that creates Data Vault objects from the defined source metadata.

Data Vault acceleration is recommended to be performed once the Enterprise Logical Model, the source data model and corresponding Data Vault model has been created.

The Data Vault acceleration uses the source metadata and its defined relationships to create a Raw Data Vault layer. Based on this metadata, BimlFlex will automatically create the required Data Vault structures and the source to target mappings in the metadata repository.

The BimlFlex App provides a graphical accelerator allowing the modeler to create and tweak the required Data Vault model out of the source model.

When the preview matches the model expectations, it is published to the metadata repository.

The new Data Vault objects can be reviewed in the Objects page. The source objects have Source to Target Mappings applied to load the Data Vault.

Once the metadata has been refreshed in BimlStudio, it can be built and implemented, or further refined.

Since the staging table structures have been updated, and new Data Vault tables have been added, regenerate the `create table` scripts and run them on the database server.

Rebuild the SSIS Projects from BimlStudio.

The Data Vault load project is a separate project to the Source to Staging Project, with its own Batch package. First open and run the Source to staging Batch - since the tables have been recreated, they first need to be loaded with data from the source. Once there is data in the staging tables, run the Data Vault Load batch in the Data Vault load project. The source table data will be loaded to the Data Vault tables and once completed the Data Vault layer is populated with the source data.

## Detailed Steps

The following detailed steps walks through the acceleration of the Raw Data Vault Layer through the BimlFlex App:

### Configuring the Accelerator

Open the BimlFlex App and open the `Accelerator` page in the `Modeling` Area

Configure the acceleration scope by selecting Record Sources and any applied groupings. Select the objects that should be in scope for the Acceleration.

### Previewing the Acceleration result

In the right hand side of the Accelerator window the Data Vault model is previewed.

Review the previewed model and compare it with the Enterprise Logical Model.

Use the graphical functionality to split Satellites and combine Link tables to new Unit of Work.

The trial process introduced a 3-way link for the `ProductModelProductDescription` source. The `LNK_ProductModelProductDescription` will have 3 Hubs attached, including the derived `HUB_Culture`. The trial also included 3 Satellites for the `HUB_Product`.

### Publishing the Acceleration result

Once the preview model meets requirements, publish the results to the Metadata Repository by clicking the publish button.

The BimlFlex App is automatically updated with the new metadata and the Objects and Columns pages are now populated with the accelerated objects. The existing source metadata has been updated with target tables and columns representing the source to target mappings of the data from the source to the Data Vault layer.

### Building the new solution

Refresh the metadata in BimlStudio once the preview objects are published to the repository. The logical view in BimlStudio is updated to reflect the new metadata. In the `Relational` node the new Data Vault tables are visible. In the `Data Integration`, `Integration Services` node the new project, batch and load packages are visible.

To enable the build of the new project, start by creating the tables.

Use the `Generate Scripts`, `Create Table Script` function to generate the required create table script.

The new Data Vault tables and database are included. The existing Staging tables are updated to include any derived keys needed for Link relationships. By default, these keys are not persisted, so the Persistent Staging tables will be the same.

Execute the new create table script to drop and create all tables.

Once the tables are available, build the SSIS projects using BimlStudio's `Build` function. Note that the Data Vault Load project is in a separate Project to the Source to staging project.

The Data Vault keys are derived in to the staging area so the existing Source to Staging packages have been rebuilt and updated to derive them as needed. Since new data is required and the tables have been recreated, rerun the source to staging project by executing the `EXT_AWLT_Batch.dtsx` package. This will populate the staging tables with data for the Data Vault load.

Open the Data Vault load project in a compatible version of Visual Studio and review the packages. Execute the `LOAD_BFX_RDV_Batch.dtsx` package to load the Data Vault from the staging tables. Once completed, the Data Vault will contain data.

Review the loaded data in the Data Vault.