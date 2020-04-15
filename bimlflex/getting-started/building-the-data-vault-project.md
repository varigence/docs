---
uid: bimlflex-getting-started-building-the-data-vault-project
title: Building Databases, Tables and SSIS packages for source to staging
---
# Building Databases, Tables and SSIS packages for source to staging

## Supporting Videos

![Building Databases, Tables and SSIS packages for source to staging](https://www.youtube.com/watch?v=a4-dgVcpE2o?rel=0&autoplay=0 "Building Databases, Tables and SSIS packages for source to staging")

## Building Databases, Tables and SSIS packages for source to staging in BimlFlex

In BimlStudio, the BimlFlex project is able to create SQL DDL scripts to create databases and tables for the Data Warehouse. These can be run on the database server to create all artifacts required to run the getting started process. This is an agile way to create tables while developing.

BimlFlex also builds Visual Studio SQL Server Data Tools (SSDT) Projects for all databases and artifacts. This feature is enabled by default and these projects can be used to deploy the databases and tables. This approach can be integrated into a deployment pipeline for continuous integration, continuous deployment scenarios.

Once the tables are available in the data warehouse database server, it is possible to use the build process in BimlStudio. This will build the SSIS projects and packages for the source to staging and persistent staging loads.

The creation and building of the initial source to staging will validate that all local configurations and build tools are in place and working as expected. it will also validate access to the database server used for the data warehouse.

The output window in BimlStudio will show the build process and will also detail any errors. Should there be an issue in the build, review the output window and troubleshoot based on the first error message.

Some common build failure scenarios:

* BimlStudio can not connect to the source database to validate the query. Review the connection information for the source and validate that the current user credentials can connect to the server.
* BimlStudio can not connect to the persistent staging database to validate the lookup query for existing rows. Verify that the PSA (and all other) database and tables have been created and that they are available to the current user.
* A client without the 64-bit SSIS components is building using 64-bit configuration setting. Change the bitness in the `Build & Deploy` ribbon tab to 32-bit.
* BimlStudio is configured to build using an SSIS version not available locally. Verify that the project is configured for the correct SSIS version and that the corresponding SSDT BI tools have been installed locally.

## Detailed Steps

The following detailed steps walk through the creation of database scripts and building of the SSIS project:

### Refresh metadata

To start, click the `Refresh Metadata` button to make sure BimlStudio has the latest metadata from the database

### Creating SQL DDL scripts to create databases and tables

In BimlStudio, navigate to the `BimlFlex` tab. In the `Generate Scripts` dropdown, choose `Create Table Script`. BimlFlex will generate the database, schema and table create scripts. Copy the script or open the generated file in Microsoft SQL Server Management Studio and execute them on the target SQL Server. This will create all Data Warehouse databases and tables for the process and allow the SSIS packages to be created.

### Building SSIS packages in BimlStudio

Once the tables are available it is possible to use the build process in BimlStudio to create the SSIS project and packages for the load process

In BimlStudio, navigate to the `Build & Deploy` tab, choose the `32-bit` build option in the dropdown unless there is a local installation of 64 bit SQL Server SSIS components and click `Build`

### Opening and reviewing the SSIS project in Visual BimlStudio

The output folder for generated artifacts is configurable, the default location is a folder called `output` in the BimlFlex project location.

In the output folder, there are multiple folders for all the created artifacts.

BimlFlex creates folders for SSIS projects, expanded code for both Biml and SQL as well as SSDT projects for all databases.

The load project is located in a folder called `EXT_AWLT`, the same name as the project name defined for the Metadata project.

Open the `EXT_AWLT_Project.dtproj` project file in a compatible version of Visual Studio to review the generated packages. To test the load, run the `EXT_AWLT_Batch.dtsx` SSIS package. This package will call the individual Table load packages and load the data from the source database to the staging and persistent staging databases in the Data Warehouse.

Once the SSIS package execution is completed, the staging and persistent staging tables will contain data.

### Reviewing the SSDT Project

BimlFlex also builds an SSDT database project for each database by default.

The default location for this is under the Project output folder in `SSDT\CustomerUID\VersionName\DatabaseName\`

These projects can be used to deploy and manage the database pipeline instead of using the Script generation feature in BimlStudio.

The default output folder for these SSDT projects can be changed through the `SsdtOutputPath` Setting

Next Step: [](xref:bimlflex-getting-started-applying-load-parameters)
