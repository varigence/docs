---
uid: bimlflex-trial-creating-and-configuring-a-bimlflex-project
title: Creating and configuring a BimlFlex project
---
# Creating and configuring a BimlFlex project

## Supporting Videos

![Creating and Configuring a BimlFlex Project](https://www.youtube.com/watch?v=7zt7CmFjDZk?rel=0&autoplay=0)

## Create and configure the BimlFlex project

The BimlFlex project is comprised of the project files on disk, that BimlStudio interacts with, and the metadata, stored in the BimlFlex Metadata Repository database.

The project has a connection defined to the Metadata Repository to use. The default database name is BimlFlex, and that database was created using BimlStudio in the previous step.

The first time the project is opened it needs to be configured for the SQL Server version and SSIS deployment method used.

Once the project is configured it is ready to be used for data modeling and Data Warehouse generation.

## Detailed Steps

The following detailed steps walks through the creation of a BimlFlex project.

### Prerequisites

The previous steps in the trial process needs to have been completed. This includes:

* The latest versions of BimlStudio and the BimlFlex App are installed
* The BimlFlex metadata database has been created

### Start the BimlFlex App

* Configure the BimlFlex App to connect to the BimlFlex database
* Create a Metadata Customer and Version in the configuration pane
* Load Sample Metadata for the SQL Server starting point

### Start BimlStudio

When BimlStudio is started there is an option to create a new BimlFlex project.

### Create BimlFlex Project

Click the Create BimlFlex project button to create a new project. Enter a valid location for the project and name it `BimlFlex Trial Project`.

Click the `Open Bundle` icon in the BimlFlex ribbon if it is not opened. Review the connection and login information to the BimlFlex metadata database. It should point to the BimlFlex database and the Customer and Version created above.

### Configure BimlStudio to build for correct SQL Server SSIS version

In the BimlStudio `File` menu, click `Project Settings` to display the BimlStudio project settings and properties.

Update the SQL Server version settings to build out to the correct SQL Server and SSIS version.

For the `DDL Build Mode` setting, change the default `SsisPackages` to `None`. BimlStudio normally creates SSIS Projects and packages to create all databases, schemas and tables by default. Since BimlFlex uses either the Generate Scripts function or the separately created SSDT Project, these automatically generated projects are not needed.

Click the `Save All` button or menu option to save the metadata and project settings.

### Restart BimlStudio

BimlStudio needs to be restarted once the customer metadata settings and SSIS configuration has been updated. Once restarted, the configurations are active in BimlStudio.