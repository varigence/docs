---
uid: bimlflex-app-reference-documentation-setting-ApplyLookupFilterRdv
title: BimlFlex Settings Definition for ApplyLookupFilterRdv
summary: Documentation of settings option within BimlFlex for ApplyLookupFilterRdv
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Apply Lookup Filter RDV

Should the SSIS Lookup check for existing rows in the staging to Data Vault load apply a filter condition joining the staging table to the destination Data Vault table to optimize memory usage. Use if staging and Data Vault is co-located in the same database or if cross database joins are possible.

Notes:
* This setting is part of the `Data Vault` settings category.
 * The default value for this setting is `Y`.