---
uid: bimlflex-reference-documentation-setting-DvProcessOnStage
title: BimlFlex Settings Definition for DvProcessOnStage
summary: Documentation of settings option within BimlFlex for DvProcessOnStage
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Process On Stage

Determines if the Data Vault stored procedure be called after the source extract to staging process has been completed.

For Azure projects. this must be combined with `AzureStageOnExtract`.

This allows the load from source to Data Vault to be performed by the extract package or pipeline.

If not using this then the Data Vault is loaded through a separate load project.

Notes:

* This setting is part of the *Data Vault* settings category.
* The default value for this setting is `N`.