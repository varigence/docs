---
uid: bimlflex-trial-process-creating-and-configuring-a-bimlflex-project
title: Creating and configuring a BimlFlex project
---

# Creating and configuring a BimlFlex project

## Supporting Videos

![Creating and Configuring a BimlFlex Project](https://www.youtube.com/watch?v=XuYbHbju9Go?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- [Initial Setup and Configuration](../user-guide/initial-setup-and-configuration.md)

## Create and configure the BimlFlex project

The BimlFlex project is comprised of the project files on disk that BimlStudio interacts with and the metadata stored in the BimlFlex Metadata Repository database.

The project has a connection defined to the Metadata Repository to use. The default database name is BimlFlex and that database was created using BimlStudio or the BimlFlex utility application in the previous step.

The first time the project is opened it needs to be configured for the SQL Server version used and SSIS deployment method.

Once the project is configured it is ready to be used for data modelling and Data Warehouse generation.

## Detailed Steps

The following detailed steps walks through the creation of a BimlFlex project.

### Prerequisites

The previous steps in the trial process needs to have been completed. This includes:

- The latest version of BimlStudio and BimlFlex are installed.

### Start BimlStudio

When BimlStudio is started there is an option to create a new BimlFlex project.

### Create BimlFlex Project

Click the Create BimlFlex project button to create a new project. Enter a valid location for the project and name it `BimlFlex Trial Project`.

### Create BimlFlex databases

Create the BimlFlex and BimlCatalog databases by clicking the `Setup BimlFlex Databases` in the Bundle page.

Specify connection strings and names for the databases and click `Deploy`.

### Review Metadata Connection

Review the connection and login information to the BimlFlex metadata database. It should point to the BimlFlex database.

### Create Metadata Customer

In the BimlFlex configuration, create a new Customer and name it `BimlFlex Trial Project`

### Configure BimlStudio to build for Sal Server 2016 SSIS

Right-click the project name `BimlFlex Trial Project.mst` in the logical view and choose properties to display the BimlStudio project properties. Update the SQL Server version setting to build out to the correct SQL Server version.

For the `DDL Build Mode` setting, change the default `SsisPackages` to `None`. BimlStudio normally creates SSIS Projects and packages to create all databases, schemas and tables by default. Since BimlFlex uses either the Generate Scripts function or the separately created SSDT Project, these automatically generated projects are not needed.

Click the `Save All` button or menu option to save the metadata and project settings.

### Restart BimlStudio

BimlStudio needs to be restarted once the customer metadata settings and SSIS configuration has been updated. When restarted the configurations are active in BimlStudio.

### Open and configure BimlFlex Excel Metadata Editor

Once BimlStudio has restarted, navigate to the BimlFlex Tab and click the `Excel Metadata Editor` button to start the Excel Metadata Editor.

If this is the first time the BimlFlex Excel Metadata Editor is opened, enter the license key in the activation dialog. The trial license key is included in the trial information email.

Once opened, configure the metadata connection to point to the Trial Project. Click the `Metadata Connection` button in the BimlFlex ribbon UI and enter the connection information to the BimlFlex metadata database. Specify the Customer and Version created above.

Click the `Get All Entities` button in the BimlFlex ribbon to query the repository for the latest metadata set. The first time a request is sent to an empty customer BimlFlex allows creation of sample metadata. Click `Create Sample` to create the sample metadata.

Review the sample metadata in the `Connections`, `Batches` and `Projects` sheets.

Save the Excel file to save the connection information for next time.