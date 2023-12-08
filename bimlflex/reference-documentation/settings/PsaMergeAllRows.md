---
uid: bimlflex-app-reference-documentation-setting-PsaMergeAllRows
title: BimlFlex Settings Definition for PsaMergeAllRows
summary: Documentation of settings option within BimlFlex for PsaMergeAllRows
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Merge All Rows

The setting `Merge All Rows` is *only* used when the source is an `object` and the target is of the object type `Table`. Using this setup, when the target *also* has the `hash` option for the `RowHashType1` or `RowHashType2`, the Merge All Rows setting will replace the hash with a NULL value in the source-select of the merge statement.

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `N`.
