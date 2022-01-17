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

Enabling delete detection will generate dedicated processes that can run separate from any of the regular data loading processes. This allows an end to end processing pipeline for deletes.

The delete detection processes will load all defined Source- and Integration Keys from the source data set into a deleted table that corresponds to the object that the delete detection is applied for. This table (for ADF) or cache (for SSIS) will be used to compare the incoming source data with. If a key is missing from the source compared to what is in the delete object, it is identified as a *deleted key*.

## Implementing Delete Detection

### Enabling Delete Detection

At a high level, Delete Detection can be implemented in two ways:

* Enabling the **Enable Delete Detection** (global), and *exclude* **Projects** and / or **Objects** using the **Overrides**. Or alternatively,
* Disabling the **Enable Delete Detection** setting and *include* the **Projects** and / or **Objects** that should have delete detection applied

### Naming Conventions

Enabling delete detection will create new Staging Area tables. By default, these will be named as `<RecordSourceAsSchema>.<TableName>_DEL`.

The name used is controlled by the following settings. These settings are part of the [**Staging Naming**](xref:bimlflex-app-reference-documentation-settings-index#staging-naming) settings group.

* The [**Delete Object Name Pattern**](xref:bimlflex-app-reference-documentation-setting-DeleteObjectNamePattern) setting. The default value: `@@this_DEL`. This will concatenates the **Object** name, using the `@@this` shorthand code with the `_DEL` suffix
* The [**Delete Schema Name Pattern**](xref:bimlflex-app-reference-documentation-setting-DeleteSchemaNamePattern). The default value is `@@rs`. The `@@rs` code is the Record Source as defined in the **Connection** to which the object belongs

### Directing Specific Delete Behavior

Detailed delete specifications can be defined [**Row Change Type**](xrefe:bimlflex-metadata-configurations#RowChangeType) **Configuration**.

This configuration can be customized so that the delete information can be derived as needed. For example, it is possible to reuse a source delete flag for data sets that provide this status information. In other cases, the way the delete record is recorded can be defined.

The Row Change Type works the same way as any other [**Configuration**](xref:bimlflex-configurations) in BimlFlex, and to an extent this is configurable in BimlFlex. The defaults are:

* `I` for a newly detected key / record. This is the default value for the Row Change Type, and can be configured
* `U` for a detected update related to an existing key / record
* `D` for a detected delete

By default, the **Row Change Type** is not applied to any specific area. When global settings to enable delete detection are used, the configuration can be defined to apply to certain areas of the solution.

If specific objects are configured for delete detection these will need to be accompanied by a specific **Row Change Type** configuration.

### SSIS Specific

The Delete Detection process create additional load packages that query the source data set for all key columns and Integration Key dependent columns.

The delete detection package will load all defined Source and Integration keys from the source into a cache file on the machine that is running the SSIS project. On subsequent runs, the package compares the keys in the source with the keys in the cache. If a key is missing from the source compared to what is in the cache, it is identified as a *deleted key*. These deleted keys are inserted into the corresponding delete Staging Area table.

The cache files are by default located at:

`C:\BimlFlex\Export\<Name>.raw`

**Note: Make sure `C:\BimlFlex\Export\` folder exists.**
