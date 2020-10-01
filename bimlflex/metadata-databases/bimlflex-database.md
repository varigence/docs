---
uid: bimlflex-database
title: BimlFlex metadata database
---
# BimlFlex metadata database

The database is used by BimlFlex and BimlStudio to model and build the data warehouse, and to support the automation.

Modelers, analysts and data warehouse team members use the BimlFlex App to model and interact with the metadata. This metadata is written to a metadata database, the BimlFlex database. BimlStudio then accesses the metadata by querying the database to provide the development and build experience for creating data warehouse artifacts.

> [!IMPORTANT]
> The BimlFlex database contains crucial data for the data warehouse automation process. It is important to back up, and maintain a strict disaster recovery policy for, this database.

## Deploying the BimlFlex Database

The database is created through the BimlFlex installer or through the `Setup BimlFlex` menu option in the BimlFlex Ribbon UI in BimlStudio.

* See the Installation Guide: [Installing BimlFlex](xref:bimlflex-installing-bimlflex) for deploying the database
* See this guide for information regarding how to deploy after installation: [BimlFlex Metadata Database Installation](xref:bimlflex-metadata-database-installation)

## BimlFlex Database contents

### Customers and Versions

Metadata is stored on a per Customer, per Version basis. This allows different projects to use the same database, and provides a convenient way to manage different versions of the metadata.

### Entities

All entities are stored in the app tables within the database. There are a [number of different entity types](xref:bimlflex-metadata-entity-definitions) that are stored in the BimlFlex database.  Some examples are: Connections, Objects, Projects, and Columns.

### Source to Target mappings

The database stores records for all source column to target column mappings that are used in the solution.

### Archive

BimlFlex provides archive tables to log historical changes to the metadata. The BimlFlex database also contains preloaded trial metadata in the archive tables. It is possible to restore the trial metadata from any point in the trial process and start from there.

### Snapshots

All metadata for a version can be stored through the snapshot feature and saved for later recall when needed.

## Maintaining the BimlFlex Database

The BimlFlex database contain important metadata for the automation solution. It is important that the database is maintained and backed up.
