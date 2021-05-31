---
uid: bimlflex-app-reference-documentation-setting-ApplyLookupFilterRdv
title: BimlFlex Settings Definition for ApplyLookupFilterRdv
summary: Documentation of settings option within BimlFlex for ApplyLookupFilterRdv
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Apply Lookup Filter RDV

For Staging-to-Data Vault processes, determines whether the SSIS Lookup checks for existing rows by applying a filter condition joining the staging table to the destination table. This is to optimize memory usage. Use if staging and Data Vault is co-located in the same database or if cross database joins are possible.

Notes:
* This setting is part of the `Data Vault` settings category.
 * The default value for this setting is `Y`.