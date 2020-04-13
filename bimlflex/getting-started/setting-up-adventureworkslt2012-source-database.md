---
uid: bimlflex-getting-started-setting-up-adventureworkslt2012-source-database
title: Setting up the AdventureWorksLT source database
---
# Setting up the AdventureWorksLT source database

## Supporting Videos

![Setting up the AdventureWorksLT source database -center](https://www.youtube.com/watch?v=_XW_tqP_4lo?rel=0&autoplay=0 "Setting up the AdventureWorksLT source database")

## Supporting Documentation

* [Microsoft SQL Server Samples](https://github.com/Microsoft/sql-server-samples)

## Setting up AdventureWorksLT

The getting started process uses the `AdventureWorksLT2012` database as a source system.

This Microsoft sample database is available for download from GitHub:

[AdventureWorks releases on GitHub](https://github.com/Microsoft/sql-server-samples/releases/tag/adventureworks)

Download the SQL Server backup file and restore it to the SQL Server engine through Management Studio.

## Detailed Steps

1. Download the [AdventureWorksLT2012.bak](https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorksLT2012.bak) SQL Server database backup file
1. Move it to a location accessible from the database server
1. Use Microsoft SQL Server Management Studio, or a similar tool or script, to restore the database
1. Configure read access for the client account used. The metadata import reads the metadata views from the source.
1. Validate that the database is available from the client
