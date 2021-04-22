---
uid: bimlflex-components-overview
title: BimlFlex Metadata Databases Overview
summary: Overview of the BimlFlex metadata databases overview with reference to BimlFlex database and BimlCatalog database
---
# Components of BimlFlex

This section provides a brief overview of the components that make up the BimlFlex solution:

* BimlFlex Application
* BimlFlex Metadata Repository Database
* BimlCatalog Database
* BimlFlex Excel Plug-In

## Overview

The BimlFlex App connects to the BimlFlex metadata repository and allows management of the metadata through a user-friendly experience. Use the BimlFlex App to manage the BimlFlex metadata.

## BimlFlex Metadata Repository Database

The BimlFlex database contains the metadata required to build out data warehousing processes through BimlFlex.

* [The BimlFlex Metadata Repository database](xref:bimlflex-components-metadata-database)
* [Installation details for the Metadata Repository](xref:bimlflex-setup-metadata-database-installation).

## BimlCatalog Database

The BimlCatalog database contains the orchestration and run time information needed to properly load the data warehouse. It logs audit information and errors from processes and provides orchestration for batches in case failures occur mid load.

* [The BimlCatalog database](xref:bimlflex-components-bimlcatalog-database)

The BimlCatalog database is created through the BimlFlex installer, or through the Setup BimlFlex menu option in the BimlFlex Ribbon UI in BimlStudio.

## SSIS Server

>[!NOTE]
>[Installation details for the SSIS Server can be found through this link](xref:bimlflex-setup-ssis-server-install).

## Excel Plug-In

BimlFlex provides different ways to enter, review and otherwise interact with the design metadata. For users that prefer working with Microsoft Office an Excel plug-in is available that can connect to the metadata repository.

This is installed as part of the main BimlFlex application install.
