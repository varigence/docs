---
uid: bimlflex-reference-documentation-setting-DisableStgPsaOnly
title: BimlFlex Settings Definition for DisableStgPsaOnly
summary: Documentation of settings option within BimlFlex for DisableStgPsaOnly
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Disable Stage, Persist Only

Enable this to skip the staging layer and only persist changes directly in the PSA.

This setting applies to SSIS output only, and only works when the `Delta Detection in SQL` setting is disabled. These settings are not compatible.

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `N`.