---
uid: bimlflex-database
title: BimlFlex metadata database
---
# BimlFlex metadata database

The BimlFlex database contains the metadata required to build out data warehousing processes through BimlFlex.

> [!IMPORTANT]
> The BimlFlex database contains crucial data for the data warehouse automation process. It is important to back up, and maintain a strict disaster recovery policy for, this database.

The database is used by BimlFlex and BimlStudio to model and build the data warehouse and support the automation. Modelers, analysts and data warehouse team members use the BimlFlex modelling front end to interact with the metadata. BimlStudio access the metadata and provides the development and build experience for creating data warehouse artefacts.

## Customers and Versions

All metadata is stored on a per Customer, per Version basis.

## Entities

All entities are stored in the app tables within the database. These tables correspond to the data shown in the modelling front end.

## Source to Target mappings

All source to target mappings are stored for columns in the database.

## Archive

All changes are stored in the archive tables.

## Snapshots

All metadata for a version can be stored through the snapshot feature and saved for later recall when needed.
