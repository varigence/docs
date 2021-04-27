---
uid: bimlflex-components-overview
title: BimlFlex Databases Overview
summary: Overview of the BimlFlex databases, with reference to the BimlFlex- and BimlCatalog database
---
# Components of BimlFlex

This section provides a brief overview of the components that make up the BimlFlex solution:

* BimlFlex App
* BimlFlex Database
* BimlCatalog Database
* BimlFlex Excel Add-In

## BimlFlex App

The BimlFlex App connects to the [BimlFlex Database](xref:bimlflex-components-metadata-database), the metadata repository, and allows management of the metadata through a user-friendly experience. Use the BimlFlex App to manage the BimlFlex metadata.

For more information on the BimlFlex App please refer to:

* [BimlFlex App Guide](xref:metadata-editors-overview)

## BimlFlex Database

The BimlFlex Database contains the metadata required to build out data warehousing processes through BimlFlex.

* [The BimlFlex Database](xref:bimlflex-components-metadata-database)
* [Installation details for the BimlFlex Database](xref:bimlflex-setup-metadata-database-installation).

## BimlCatalog Database

The BimlCatalog Database contains the orchestration and run time information needed to properly load the data warehouse. It logs audit information and errors from processes and provides orchestration for batches in case failures occur mid load.

* [The BimlCatalog Database](xref:bimlflex-components-bimlcatalog-database)

The BimlCatalog Database is created through the BimlFlex installer, or through the Setup BimlFlex menu option in the BimlFlex Ribbon UI in BimlStudio.

## SSIS Server

>[!NOTE]
>[Installation details for the SSIS Server can be found through this link](xref:bimlflex-setup-ssis-server-install).

## BimlFlex Excel Add-In

BimlFlex provides different ways to enter, review and otherwise interact with the design metadata. For users that prefer working with Microsoft Office an Excel add-in is available that can connect to the BimlFlex Database.

This is installed as part of the main BimlFlex App installation.
