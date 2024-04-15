---
uid: bimlflex-reference-documentation-setting-PsaDeltaSingleChange
title: BimlFlex Settings Definition for PsaDeltaSingleChange
summary: Documentation of settings option within BimlFlex for PsaDeltaSingleChange
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Delta Is Single Change

Enable this if loading into PSA and the delta only has single changes to each key. This will provide optimized ELT loads.

In this configuration, no record collapsing is applied because the assumption made is that there can only be one genuine change record for each natural key at a point in time.

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `N`.
