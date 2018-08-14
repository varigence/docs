# Setting up AdventureWorks LT source database

## Supporting Videos

![Setting up AdventureWorksLT](https://www.youtube.com/watch?v=QmUDBc0CfiU?rel=0&autoplay=0)

## Supporting Documentation

- [Microsoft SQL Server Samples](https://github.com/Microsoft/sql-server-samples)

## Setting up AdventureWorks LT

The trial process uses the `AdventureWorks 2012 LT` database as source. This Microsoft sample database is available for download from GitHub:

[AdventureWorks 2012 releases on GitHub](https://github.com/Microsoft/sql-server-samples/releases/tag/adventureworks2012)

Download the data file and attach it to the SQL Server engine through Management Studio to make it available for the trial process. If you have or download a backup file, use Management Studio to restore the database from file.

## Detailed Steps

### Attaching a .mdf data file

1. Download the .mdf SQL Server database file.
1. Copy it to the database file location used by the SQL Server engine.
1. Use Management Studio to attach the database file to the instance.

### Restoring a .bak file/database backup

1. Download the .bak file to a location accessible from the SQL Server engine
1. Use Management Studio or other tool to perform the restore.