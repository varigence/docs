# Building Databases, Tables and SSIS packages for source to staging

## Supporting Videos

![Building Source to Staging](https://www.youtube.com/watch?v=j-ECD4-Yw1E?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- [Source to Staging Templates](../user-guide/source-to-staging-templates.md)

## Building Databases, Tables and SSIS packages for source to staging in BimlFlex

In BimlStudio, the BimlFlex project is able to create SQL DDL scripts to create databases and tables for the Data Warehouse. These can be run on the database server to create all artefacts required to run the trial process.

BimlFlex can also build out a Visual Studio SQL Server Data Tools (SSDT) Project with all database artefacts. This feature is enabled by default and this project can be used to deploy the databases and tables.

Once the tables are available in the data warehouse database server it is possible to use the build process in BimlStudio. This will build the SSIS projects and packages for the source to staging and persistent staging loads.

The creation and building of the initial source to staging will validate that all local configurations and build tools are in place and working as expected. it will also validate access to the database server used for the data warehouse.

The default build process assumes that Windows authentication is used to access the databases. Should SQL authentication and logins be needed, the project needs to be configured with project parameters for connection strings. This is outside the scope of the trial, but [reference documentation is available here](../user-guide/deployment-guide.md)

The output window in BimlStudio will show the build process and will also detail any errors. Should there be an issue in the build, review the output window and troubleshoot based on the first error message.

Some common build failure scenarios:

- BimlStudio can not connect to the source database to validate the query. Review the connection information for the source and validate that the current user credentials can connect to the server.
- BimlStudio can not connect to the persistent staging database to validate the lookup query for existing rows. Verify that the PSA (and all other) database and tables have been created and that they are available to the current user.
- A client without the 64-bit SSIS components is building using 64-bit configuration setting. Change the bitness in the `Build & Deploy` ribbon tab to 32-bit.
- BimlStudio is configured to build using an SSIS version not available locally. Verify that the project is configured for the correct SSIS version and that the corresponding SSDT BI tools has been installed locally.

## Detailed Steps

The following detailed steps walks through the creation of database scripts and building of the SSIS project:

### Refresh metadata

To start, click the `Refresh Metadata` button to make sure BimlFlex has the latest metadata

### Creating SQL DDL scripts to create databases and Tables

In BimlStudio, navigate to the `BimlFlex` tab. In the `Generate Scripts` dropdown, choose `Create Table Script`. BimlFlex will generate the database, schema and table create scripts. Copy the script or open the file in Microsoft SQL Server Management Studio and execute them on the target SQL Server.

### Building SSIS packages in BimlStudio

Once the tables are available it is possible to use the build process in BimlStudio to create the SSIS project and packages for the load process.

In BimlStudio, navigate to the `Build & Deploy` tab, choose the `32-bit` build option in the dropdown unless there is a local installation of 64 bit SQL Server SSIS components and click the `Build` hammer and anvil icon.

### Opening and reviewing the SSIS project in Visual BimlStudio

The output folder for generated artefacts is configurable, the default location is a folder called `output` in the BimlFlex project location.

In the output folder there are multiple folders for the created artefacts. BimlFlex creates default SSIS projects to create databases, schemas and tables as well as expanded code for both Biml and SQL. The load project is located in a folder with the same name as the project name defined in the Metadata project sheet.

For the trial, this will be a folder called `EXT_AWLT`. Open the `EXT_AWLT_Project.dtproj` project file in a compatible version of Visual Studio to review the generated packages. To test the load, run the `EXT_AWLT_Batch.dtsx` SSIS package. This package will call the individual Table load packages and load the data from the source database to the staging and persistent staging databases in the Data Warehouse.

Once the SSIS package execution is completed, the staging and persistent staging tables will contain data.

### Reviewing the SSDT Project

BimlFlex also builds a SSDT database project by default. In the output folder there is a SSDT folder. In this folder there is a folder named after the unique identifier for the customer (guid). In this folder is a folder for the current version. In the version folder there are separate projects for each database included in the BimlFlex solution. Each of these projects will have all SQL artefacts included. This project can be used to deploy and manage the database pipeline instead of the Script generation feature in BimlStudio.