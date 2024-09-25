---
uid: bimlflex-reference-documentation-setting-PsaDeltaStageAllRows
title: BimlFlex Settings Definition for PsaDeltaStageAllRows
summary: Documentation of settings option within BimlFlex for PsaDeltaStageAllRows
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Delta Stage All Rows

Enables delta process to stage all rows. When disabled, it compresses row changes into distinct rows by discarding full-row duplicates, retaining only the first row of sequential timestamps with identical values.

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `N`.