---
sidebar_position: 2
title: BimlFlex Components
description: Overview of the components of the BimlFlex ecosystem, with reference to the BimlFlex- and BimlCatalog database
---
# Components of BimlFlex

BimlFlex comprises of various components to deliver data solutions:

* Metadata Editors - the [BimlFlex App](../metadata-editors) and the supporting [Excel Add-In](../metadata-editors/excel-add-in)
* BimlFlex Database
* BimlCatalog Database
* BimlStudio

## Metadata Editors

BimlFlex provides different ways to enter, review and otherwise interact with the design metadata. The BimlFlex App provides a modern Graphical User Interface (GUI) to design and manage your data solution.

The [BimlFlex App](../metadata-editors) connects to the [BimlFlex database](../installation/installing-metadata-database), the design metadata repository, and allows management of the metadata through a user-friendly experience.

For users that prefer working with Microsoft Office, an Excel Add-In is available that can also connect to the BimlFlex database. The Excel Add-In is installed as part of the main BimlFlex installation.

For more information on the Metadata Editors,please refer to:

* The [BimlFlex App](../metadata-editors) guide
* The [Excel Add-In](../metadata-editors/excel-add-in) guide
* [Installation instructions for both the BimlFlex App and Excel Add-In](../installation/installing-bimlflex)

## BimlFlex Database

The [BimlFlex database](../installation/installing-metadata-database) contains the metadata required to build out data solution processes using BimlFlex. Use the BimlFlex App or Excel Add-In to manage the BimlFlex metadata.

The BimlFlex database is a SQL Server database that is a mandatory component to work with BimlFlex. The BimlFlex database is the repository for design metadata and all [**Customers**](../concepts/customer), [**Versions**](../concepts/versions), settings and configurations.

The database can be queried for custom documentation, reporting and generally understanding what happens behind the scenes. However, changing values directly in the database may cause unforeseen consequences so please consider caution when directly interacting with the metadata repository database.

## BimlCatalog Database

The [BimlCatalog database](../installation/installing-bimlcatalog-database) contains the orchestration and runtime information needed to properly load the data solution. Audit information and errors from processes are logged in this database. The BimlCatalog is also used to provide orchestration direction for batches in case failures occur during data processing.

The BimlCatalog Database is created through the BimlFlex installer, or through the Setup BimlFlex menu option in the BimlFlex Ribbon UI in BimlStudio.

Varigence also provides a public repository on Github - the [BimlFlex Community](https://github.com/varigence/BimlFlex-Community) repository. This open-source repository contains various useful scripts and queries to interact with both the BimlFlex database as well as the BimlCatalog. Specifically for the BimlCatalog database reporting artifacts are available here.

## BimlStudio

[BimlStudio](xref:bimlstudio-user-guide) is the Integrated Development Environment (IDE) that Varigence provides to write, manage and compile BimlScript. BimlStudio is a stand-alone software product that can be licensed separately from BimlFlex, and allows users to create their own frameworks using Biml, but it is included in the BimlFlex license.

BimlFlex requires BimlStudio as part of its ecosystem. BimlStudio can be configured to connect to the metadata repository, the BimlFlex Database, and preview the expected outputs.

Using the BimlStudio IDE it is also possible to define additional logic or overrides in BimlScript syntax, in the form of [**Extension Points**](../concepts/extension-points). If the many options, settings and configurations in BimlFlex is not enough, Extension Points enable the user to access the full Biml language to customize the data solution.

Finally, BimlStudio is the place where the [**Build Process**](../build-and-deployment) is performed. This will compile the metadata into output artifacts that can be deployed to the target environments.
