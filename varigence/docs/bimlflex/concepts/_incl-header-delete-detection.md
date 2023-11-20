---
title: Delete Detection
description: Overview of the BimlFlex Delete Detection approach.
tags: [BimlFlex, Reference]
---
To be able to provide an accurate representation of the data in the data solution, it is often necessary to capture when data was physically removed from the operational systems that act as data sources.

BimlFlex provides a SQL-based [**Delete Detection**](bimlflex-concepts-delete-detection) mechanism that allows detection of deleted keys / records from the data sources, as well as various possibilities to configure this with native or 3rd party solutions.

This applies to 'hard deletes' where the records have physically been removed from the original system, as opposed to end-dating. In the data solution, the event of deletion can be stored as a 'soft' or 'logical' delete. Even though this data may not be visible in the original data source anymore, there is still a record of its existence (and removal thereof) in the data solution.

This information can be valuable in determining the correct state of the data for delivery.

The deleted information is derived by comparing the rows available in the source with the current set of active rows in the target PSA. Implementing and loading a queryable PSA is therefore a requirement for the default delete detection process.

Certain data sources might be able to deliver deleted rows, such as the [SQL Server Change Data Capture (CDC)](https://docs.microsoft.com/en-us/sql/relational-databases/track-changes/about-change-data-capture-sql-server) feature. In a scenario like this, when a source delivers records with a deleted state, it is possible to directly load these records from into the staging area, persistent staging area and Data Vault and reuse the source delete state without comparing against the existing PSA.

The delete detection feature is used in addition to the regular processing of new and changed data from the data source. Enabling delete detection will generate dedicated processes that can run separate from any of the regular data loading processes. This allows an end to end processing pipeline for deletes.

The delete detection processes will load all defined Source- and Integration Keys from the source data into a delete table that corresponds to the **Object** for which the delete detection applies. The delete table will be used to compare the incoming source data with. If a key is missing from the source compared to what is in the delete object, it is identified as a *deleted key*.

The delete detection is controlled by manipulating the following **Settings** in the [Delete Detection Settings Group](xref:bimlflex-app-reference-documentation-settings-index#delete-detection):

* [Enable Delete Detection](bimlflex-app-reference-documentation-setting-DeleteDetectionEnabled)
* [Apply Delete Detection on the Persistent Staging Area](bimlflex-app-reference-documentation-setting-DeleteDetectionApplyPsa)
* [Apply Delete Detection on the Data Vault](bimlflex-app-reference-documentation-setting-DeleteDetectionApplyDv)

The **Enable Delete Detection** setting is global and will be applied to all **Projects**. The supporting PSA and Data Vault settings (Apply Delete Detection PSA, Apply Delete Detection DV) provide means to insert the detected deletes (if any) into each specific area, or not.

It is possible to override the global default for specific **Projects** or **Objects**. This can be implementing using [**Setting Overrides**](xref:bimlflex-setting-editor#setting-overrides). Any defined overrides will disregard the global settings and apply to the specific scope that the override has been defined for.
