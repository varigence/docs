---
uid: bimlflex-delete-detection
title: BimlFlex Delete Detection
---
# BimlFlex Delete Detection

BimlFlex provides a SQL source based delete detection mechanism that allows detection of hard deleted keys from the source system. This is used in addition to the normal loads of new and changed data from the source.

The Delete Detection is controlled by the `DeleteDetectionEnabled` Setting. The main setting is global and will be applied to all projects. It is also possible to override the global default for specific projects or objects. Either set the global to `Y` and exclude non-delete projects as needed or set the global to `N` and include the projects that will use delete detection.

Enabling delete detection will create new staging tables, by default named `<Schema>.<TableName>_DEL`. The name used is controlled by the following settings:

* `DeleteObjectNamePattern` default value: `@@this_DEL`. That concatenates the `@@this` code for the object name with the `_DEL` suffix
* `DeleteSchemaNamePattern` default value: `@@rs`. The `@@rs` code is the Record Source code from the connection

It also creates new load packages that queries the source for all keys.

The delete detection package will load all defined Source and Integration keys from the source into a cache file on the extract machine running the SSIS project. On subsequent runs the package compares the keys in the source with the keys in the cache. If a key is missing from the source compared to what is in the cache, it is identified as a deleted key. These deleted keys are inserted into a delete staging table in the staging database.



Once the deleted keys are in the staging table they can be further processed into the target architecture.

For an on-premises SQL Server installation running a persistent staging database and a Data Vault integration layer, this means adding a bespoke, Batch-based, post-processing Extension Point that creates the corresponding delete records in the persistent staging tables and Data Vault tables.

For file/blob-based target architectures, such as for Azure SQL Data Warehouse or Snowflake, a bespoke process is needed to create the corresponding load files for the deleted records.

The Configuration for deriving the Deletes, through the `RowChangeType` attribute, can be customized so that the delete information can be derived as needed. It is possible to reuse a source delete flag for sources that present this in the data set.
