---
uid: bimlflex-reference-documentation-setting-DatabricksUseTemporaryViews
title: BimlFlex Settings Definition for DatabricksUseTemporaryViews
summary: Documentation of settings option within BimlFlex for DatabricksUseTemporaryViews
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Use Temporary Views

When enabled, notebooks will use the `CREATE OR REPLACE TEMPORARY VIEW` SQL statement to store data in memory for quicker access, rather than the `CREATE TABLE IF NOT EXISTS` statement which stores data on disk. Using temporary views can improve performance but will lose the data if the session ends.

Notes:

* This setting is part of the *Databricks* settings category.
* The default value for this setting is `Y`.