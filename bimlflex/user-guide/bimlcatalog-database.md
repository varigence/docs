# The BimlCatalog database

The BimlCatalog database contains the orchestration and run time information needed to properly load the data warehouse. It logs audit information and errors from processes and provides orchestration for batches in case failures occur mid load.

The BimlCatalog is an open soure project availalbe at the [BimlCatalog GitHub repository](https://github.com/varigence/BimlCatalog)

## Parameter vaules

Any parameter variable values are stored in the configuration tables.

## BimlCatalog Approach

The catalog database is open and queryable and can be interacted with by the data warehousing team.
It also provides an abstraction layer through Stored Procedures for interacting with the data.

## Reporting Views

For reporting there are views provided that simplifies querying information about the loads

## Dashboard

A Power BI Dashboard is availble in the repository that displays an overview as well as more detailed information about the executions logged in the BimlCatalog database.