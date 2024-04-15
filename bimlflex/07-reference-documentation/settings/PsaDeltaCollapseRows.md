---
uid: bimlflex-reference-documentation-setting-PsaDeltaCollapseRows
title: BimlFlex Settings Definition for PsaDeltaCollapseRows
summary: Documentation of settings option within BimlFlex for PsaDeltaCollapseRows
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Delta Collapse Rows

FUTURE PLACEHOLDER: Should the PSA Processing apply row collapsing logic.

Assuming the FlexRowEffectiveDateTime for a given set of rows is sequential but different, but the row values (checksum) is the same for these rows only the first row is retained.

This row contains the actual change, and any subsequent rows in this set will be discarded as full-row duplicates even though the timestamp is different.

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `Y`.