---
uid: bimlflex-database
title: BimlFlex metadata database
---
# BimlFlex metadata database

The BimlFlex database contains the metadata required to build out data warehousing processes through BimlFlex.

> [!IMPORTANT]
> The BimlFlex database contains crucial data for the data warehouse automation process. It is important to back up, and maintain a strict disaster recovery policy for, this database.

The database is used by BimlFlex and BimlStudio to model and build the data warehouse and support the automation. Modelers, analysts and data warehouse team members use the BimlFlex modeling front end to interact with the metadata. This metadata is written to a metadata database, the BimlFlex database. BimlStudio then accesses the metadata by querying the database and then provides the development and build experience for creating data warehouse artifacts.

## What is stored in the BimlFlex Database?
### Customers and Versions

Metadata is typically stored on a per Customer, per Version basis. This allows different customers to use the same database, and provides the users with a convenient way to manage different versions of the metadata. 

### Entities

All entities are stored in the app tables within the database. There are a [number of different entity types](../reference-documentation/metadata-entity-definitions.md) that are tracked by the BimlFlex database.  Some examples of the tracked entities are Connections, Objects, Projects, and Columns.

### Source to Target mappings

The database stores records for all source column to target column mappings that are used in the solution.

### Archive

BimlFlex provides archive tables to log historical changes to the metadata. The BimlFlex database also contains preloaded trial metadata in the archive tables. It is possible to restore the trial metadata from any point in the trial process and start from there.

### Snapshots

All metadata for a version can be stored through the snapshot feature and saved for later recall when needed. 


## Setting Up the BimlFlex Database

See this guide for information regarding how to [setup the BimlFlex metadata database](../setup/metadata-database-install.md).