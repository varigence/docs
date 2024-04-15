---
uid: bimlflex-reference-documentation-setting-ApplyLookupFilterDv
title: BimlFlex Settings Definition for ApplyLookupFilterDv
summary: Documentation of settings option within BimlFlex for ApplyLookupFilterDv
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Apply Lookup Filter DV

For Staging-to-Data Vault processes, determines if the SSIS Lookup checks for existing rows by applying a filter condition joining the staging table to the destination table. 

This is to optimize memory usage. Use if staging and Data Vault is co-located in the same database or if cross database joins are possible.

Notes:

* This setting is part of the *Data Vault* settings category.
* The default value for this setting is `Y`.
