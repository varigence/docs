---
uid: bimlflex-app-reference-documentation-setting-ApplyLookupFilterDm
title: BimlFlex Settings Definition for ApplyLookupFilterDm
summary: Documentation of settings option within BimlFlex for ApplyLookupFilterDm
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Apply Lookup Filter

Should the SSIS Lookup check for existing rows in the Data Mart load apply a filter condition joining the source table to the destination table to optimize memory usage.

Use if source and destination are co-located in the same database or if cross-database joins are possible

Notes:
* This setting is part of the `Data Mart` settings category.
 * The default value for this setting is `Y`.