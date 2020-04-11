---
uid: bimlflex-metadata-database-installation
title: BimlFlex Metadata Database Installation
---
# BimlFlex Metadata Database Installation

BimlFlex data warehouse automation metadata is stored in the BimlFlex metadata database

More information: [](xref:bimlflex-database)

Operational data, audit information and logging data is stored in the BimlCatalog Database

More information: [](xref:bimlcatalog-database)

## Open the Project

The BimlFlex database can be installed as part of the normal installation process.

More information [](xref:bimlflex-installing-bimlflex)

It is also possible to install the databases from the BimlFlex project in BimlStudio.

In order to setup the databases, first create a [BimlFlex project for BimlStudio](xref:bimlflex-setup-bimlstudio-project)

When the BimlFlex project is opened in BimlStudio, the metadata database setup option is available in the BimlFlex Ribbon.

![Setup BimlFlex Button -border-image](images/metadata-database-setup-btn.png "Setup BimlFlex Button")

## Setting the Connection String

Set up the databases through the **Setup BimlFlex** dialog

![Setup BimlFlex Dialog Box -border-image](images/metadata-database-setup-dialog.png "Setup BimlFlex Dialog Box")

Configure the connection string to point to the database instance where the database should be created

> [!NOTE]
> Change the name of the databases from their defaults, **BimlFlex** and **BimlCatalog**, as needed

## Deployment

Click **Deploy** to deploy the databases

![Deploying BimlFlex Databases -border-image](images/installing-text.png "Deploying BimlFlex Databases")

Once setup completes, configure the BimlFlex Project and BimlFlex App metadata connections to use the new **BimlFlex** database. Configure The project and the Operational Reporting to use the **BimlCatalog** database
