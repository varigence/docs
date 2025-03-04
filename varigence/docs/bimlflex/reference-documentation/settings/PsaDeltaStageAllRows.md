---
title: BimlFlex Settings Definition for PsaDeltaStageAllRows
description: Documentation of settings option within BimlFlex for PsaDeltaStageAllRows
tags: [BimlFlex, Reference]
---

# Delta Stage All Rows

Determines if the delta process stages all rows. Otherwise, the process will compress row changes into distinct change rows - removing full row duplicates.

Assuming the FlexRowEffectiveDateTime for a given set of rows is sequential but different, but the row values (checksum) is the same for these rows only the first row is retained.

This row contains the actual change, and any subsequent rows in this set will be discarded as full-row duplicates even though the timestamp is different.

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `N`.
