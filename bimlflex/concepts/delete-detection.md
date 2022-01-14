---
uid: bimlflex-concepts-delete-detection
title: BimlFlex Delete Detection
summary: Documentation on BimlFlex delete detection mechanism for detection of hard deleted keys from a source system
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Delete Detection

To be able to provide an accurate representation of the data in the Data Warehouse, it is often necessary to capture when data was physically removed from the operational systems that act as data sources.

BimlFlex provides a SQL-based delete detection mechanism that allows detection of deleted keys / records from the data sources, as well as various possibilities to configure this with native or 3rd party solutions.

This applies to 'hard deletes' where the records have physically been removed from the original system, as opposed to end-dating. In the data solution, the event of deletion can be stored as a 'soft' or 'logical' delete. Even though this data may not be visible in the original data source anymore, there is still a record of its existence (and removal thereof) in the data solution.

This information can be valuable in determining the correct state of the data for delivery.

## BimlFlex Features for Delete Detection

The **Delete Detection** feature is used in addition to the normal loads of new and changed data from the data source.

The delete detection is controlled by manipulating the following **Settings** in the [Delete Detection Settings Group](xref:bimlflex-app-reference-documentation-settings-index#delete-detection):

* [Enable Delete Detection](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionEnabled)
* [Apply Delete Detection on the Persistent Staging Area](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionApplyPsa)
* [Apply Delete Detection on the Raw Data Vault](xref:bimlflex-app-reference-documentation-setting-DeleteDetectionApplyRdv)

The **Enable Delete Detection** setting is global and will be applied to all **Projects**. The supporting PSA and Raw Data Vault settings provide means to insert the detected deletes (if any) into each specific area, or not.

It is possible to override the global default for specific **Projects** or **Objects**. This can be implementing using [**Setting Overrides**](xref:bimlflex-settings#setting-overrides). Any defined overrides will disregard the global settings and apply to the specific scope that the override has been defined for.

## Implementing Delete Detection

Either set the global to `Y` and exclude non-delete projects as needed or set the global to `N` and include the projects/Entities that will use delete detection.

The **DeleteDetectionApply** Settings add post-processing for the detected deletes into the PSA tables and Data Vault Satellites. This allows an end to end processing pipeline for deletes. These steps use SQL post-processing for the target tables and inserts the deleted records.

Enabling delete detection will create new staging tables, by default named `<RecordSourceAsSchema>.<TableName>_DEL`.

The name used is controlled by the following settings:

* `DeleteObjectNamePattern` default value: `@@this_DEL`. That concatenates the `@@this` code for the object name with the `_DEL` suffix
* `DeleteSchemaNamePattern` default value: `@@rs`. The `@@rs` code is the Record Source code from the connection

The Delete Detection process create new load packages that queries the source for all key columns and Integration Key dependent columns.

The delete detection package will load all defined Source and Integration keys from the source into a cache file on the extract machine running the SSIS project. On subsequent runs the package compares the keys in the source with the keys in the cache. If a key is missing from the source compared to what is in the cache, it is identified as a deleted key. These deleted keys are inserted into the delete staging table in the staging database.

The cache files are by default located at:

`C:\BimlFlex\Export\<Name>.raw`

**Note: Make sure `C:\BimlFlex\Export\` folder exists.**

Delete row information is derived through the `RowChangeType` Configuration attribute.

This flag can be customized so that the delete information can be derived as needed. It is possible to reuse a source delete flag for sources that present this in the data set when delete status is known from the source.
