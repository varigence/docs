---
uid: bimlflex-reference-documentation-setting-PsaDeltaDetectionSql
title: BimlFlex Settings Definition for PsaDeltaDetectionSql
summary: Documentation of settings option within BimlFlex for PsaDeltaDetectionSql
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Delta Detection in SQL

Determines if the delta detection applied when loading changes to the PSA uses a SQL procedure that runs on the Staging Area table, and not as part of the PSA pattern. 

This setting applies to SSIS output only, and only works when the `Disable Staging, Persist Only` setting is disabled. These settings are not compatible.

In this configuration, the process loads all data into the staging area and then runs a procedure that compares the data from the staging area with the PSA, calculates the data delta and then reloads this back into the staging table. The data is then loaded into the PSA using regular processing.

If this setting is disabled, the data logistics process will perform a lookup and evaluation in the data flow itself (in-stream).

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `N`.