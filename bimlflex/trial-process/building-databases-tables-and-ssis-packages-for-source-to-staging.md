# Building Databases, Tables and SSIS packages for source to staging

## Supporting Videos

![Building Source to Staging](https://www.youtube.com/watch?v=j-ECD4-Yw1E?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- [Source to Staging Templates](../user-guide/source-to-staging-templates.md)

## Building Databases, Tables and SSIS packages for source to staging in BimlFlex

In BimlStudio, the BimlFlex project is able to create SQL DDL scripts to create databases and tables for the Data Warehouse. These can be run on the database server to create all artefacts required to run the trial process.

BimlFlex can also build out a Visual Studio SQL Server Data Tools (SSDT) Project with all database artefacts. This feature is enabled by default and this project can be used to deploy the databases and tables.

Once the tables are available it is possible to use the build process in BimlStudio to build the SSIS project and packages for the source to staging and persistent staging loads.

The creation and building of the initial source to staging will validate that all local configurations and build tools are in place and working as expected. it will also validate access to the database server used for the data warehouse.

The default build process assumes that Windows authentication is used to access the databases. Should SQL logins be needed the project needs to be configured with project parameters for connection strings. This is outside the scope of the Trial but [reference documentation is available here](../user-guide/deployment-guide.md)

## Detailed Steps

The following detailed steps walks through the creation of database scripts and building of the SSIS project:

### Refresh metadata

To start, click the `Refresh Metadata` button to make sure BimlFlex has the latest metadata

### Creating SQL DDL scripts to create databases and Tables

In BimlStudio, navigate to the `BimlFlex` tab. In the `Generate Scripts` dropdown, choose `Create Table Script`. BimlFlex will generate the database, schema and table create scripts. Copy the script or open the file in Microsoft SQL Server Management Studio and execute them on the target SQL Server.

### Building SSIS packages in BimlStudio

Once the tables are available it is possible to use the build process in BimlStudio to create the SSIS project and packages for the load process.

In BimlStudio, navigate to the `Build & Deploy` tab, choose the `32-bit` build option in the dropdown unless there is a local installation of 64 bit SQL Server and click the `Build` anvil and hammer icon.

### Opening and reviewing the SSIS project in Visual BimlStudio

The output folder for generated artefacts is configurable, the default location is a folder called `output` in the BimlFlex project location.

In the output folder there are multiple folders for the created artefacts. BimlFlex creates default SSIS projects to create databases, schemas and tables as well as expanded code for both Biml and SQL. The load project is located in a folder with the same name as the project name defined in the Metadata project sheet.

For the Trial this will be a folder called `EXT_AWLT`. Open the `EXT_AWLT_Project.dtproj` project file in Visual Studio 2015 to review the generated packages. To test the load, run the `EXT_AWLT_Batch.dtsx` SSIS package. This package will call the individual Table load packages and load the data from the source database to the staging and persistent staging databases in the Data Warehouse.
