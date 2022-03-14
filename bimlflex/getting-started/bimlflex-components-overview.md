---
uid: bimlflex-components-overview
title: BimlFlex Databases Overview
summary: Overview of the BimlFlex databases, with reference to the BimlFlex- and BimlCatalog database
---
# Components of BimlFlex

This section provides a brief overview of the components that make up the BimlFlex solution:

* Metadata Editors - the [BimlFlex App](xref:metadata-editors-overview) and the supporting [Excel Add-In](xref:bimlflex-excel-add-in)
* BimlFlex Database
* BimlCatalog Database
* BimlStudio

## Metadata Editors

BimlFlex provides different ways to enter, review and otherwise interact with the design metadata. The BimlFlex App provides a modern Graphical User Interface (GUI) to design and manage your data solution.

The BimlFlex App connects to the [BimlFlex Database](xref:bimlflex-setup-metadata-database-installation), the metadata repository, and allows management of the metadata through a user-friendly experience.

For users that prefer working with Microsoft Office an Excel Add-In is available that can connect to the BimlFlex Database. This is installed as part of the main BimlFlex App installation.

For more information on the Metadata Editors,please refer to:

* [BimlFlex App Guide](xref:metadata-editors-overview)
* [Excel Add-In Guide](xref:bimlflex-excel-add-in)
* [Installation instructions for both the BimlFlex App and Excel Add-In](xref:bimlflex-setup-installing-bimlflex)

## BimlFlex Database

The BimlFlex Database contains the metadata required to build out Data Warehouse processes using BimlFlex. Use the BimlFlex App or Excel Add-In to manage the BimlFlex metadata.

* [BimlFlex Database Overview](xref:bimlflex-setup-metadata-database-installation)
* [Installing the BimlFlex Database](xref:bimlflex-setup-metadata-database-installation).

## BimlCatalog Database

The BimlCatalog Database contains the orchestration and run time information needed to properly load the Data Warehouse. Audit information and errors from processes are logged in this database. The BimlCatalog is also used to provide orchestration direction for batches in case failures occur mid load.

* [BimlCatalog Database Overview](xref:bimlflex-setup-bimlcatalog-database-installation)

The BimlCatalog Database is created through the BimlFlex installer, or through the Setup BimlFlex menu option in the BimlFlex Ribbon UI in BimlStudio.

## BimlStudio

BimlStudio is the Integrated Development Environment (IDE) that Varigence provides to write, manage and compile BimlScript. BimlStudio is a stand-alone software product that can be licensed separately from BimlFlex, and allows users to create their own frameworks using Biml.

BimlFlex also requires BimlStudio as part of its ecosystem. BimlStudio can be configured to connect to the metadata repository, the BimlFlex Database, and preview the expected outputs.

Using the BimlStudio IDE it is also possible to define additional logic or overrides in BimlScript syntax, in the form of Extension Points. If the many options, settings and configurations in BimlFlex is not enough, Extension Points enable the user to access the full Biml language to customize the data solution.

Finally, BimlStudio is the place where the Build process is performed. This will compile the metadata into output artifacts that can be deployed to the target environments.

* [BimlStudio Documentation](xref:bimlstudio-user-guide)
* [Using BimlStudio for BimlFlex Build and Deployment](xref:bimlflex-build-solution-overview)
* [Creating Extension Points](xref:bimlflex-concepts-extension-points)
