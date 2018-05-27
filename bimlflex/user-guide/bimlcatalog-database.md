---
uid: bimlcatalog-database
title: BimlCatalog database
---
# BimlCatalog database

The BimlCatalog database contains the orchestration and run time information needed to properly load the data warehouse. It logs audit information and errors from processes and provides orchestration for batches in case failures occur mid load.

> [!IMPORTANT]
> The BimlCatalog database contains crucial data for the data warehouse auditing, logging and orchestration. It is important to back up, and maintain a strict disaster recovery policy for, this database.

The BimlCatalog is an open source project available at the [BimlCatalog GitHub repository](https://github.com/varigence/BimlCatalog)

## Parameter values

Any parameter variable values are stored in the configuration tables.

## Orchestration

All orchestration information is maintained within the BimlCatalog database tables.

## BimlCatalog Approach

The BimlCatalog database is open and queryable and can be interacted with by the data warehousing team.
It also provides an abstraction layer through Stored Procedures for interacting with the data.

## Reporting Views

For reporting there are views provided that simplifies querying information about the loads

## Dashboard

A Power BI Dashboard is [available in the repository](https://github.com/varigence/BimlCatalog/tree/master/BimlCatalogReporting/PowerBI) that displays an overview as well as more detailed information about the executions logged in the BimlCatalog database.