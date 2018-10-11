# Configuring the BimlFlex Environment

## Supporting Videos

![tba](https://www.youtube.com/watch?v= tba ?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- @bimlflex-initial-setup-and-configuration

## Configuring the BimlFlex databases

Once the applications are installed, the BimlFlex environment needs to be configured.

BimlFlex uses a metadata database (BimlFlex) and an orchestration database (BimlCatalog). These needs to be created and made available to developers so that the application can interact with them.

### BimlFlex Metadata Database

More information: @bimlflex-database

The BimlFlex database contains all metadata required to build the data warehouse and the load process artefacts. It is accessed by the developers and modelers when designing and building the data warehouse. A standard installation has a single BimlFlex metadata database for all projects and all metadata.

### BimlCatalog Orchestration and Audit Log Database

More information: @bimlcatalog-database

The BimlCatalog database contains parameter values, logging and audit information. A separate version of this database is normally deployed per environment. This allows the same packages to be run across the environments and they will store all audit, log and parameter data separate to each other.

## Deploying the Databases

For the BimlFlex development and build process to work and the BimlFlex project to be able to store the metadata, these databases needs to be created. These are created from the BimlFlex ribbon UI in BimlStudio. To access this UI, a valid BimlFlex project is required.

Please refer to @bimlflex-trial-process-creating-and-configuring-a-bimlflex-project for more information on creating the project.

Once the project is opened in BimlStudio, use the `Setup BimlFlex` button in the Administration group in the BimlFlex Ribbon UI to create the databases. Change the connection string to match your environment and click `Deploy` to create the databases.

## User rights for developers

The BimlFlex database store all metadata for the data warehouse. The BimlFlex Excel Metadata Management application uses stored procedures to interact with the data. Each developer will need to use either a SQL Login or a Windows account to access the database. Each developer login will need to be able to run the stored procedures to work with BimlFlex.

## Database updates

The database definitions are updated regularly. Use the `Upgrade Assets` button in the BimlFlex ribbon UI to download any BimlFlex updates before creating the databases. The upgrade process will also update any created database to the latest version as part of the upgrade process.

More information on the upgrade process can be found here: @bimlflex-upgrade