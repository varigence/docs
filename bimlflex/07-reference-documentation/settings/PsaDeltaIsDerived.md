---
uid: bimlflex-reference-documentation-setting-PsaDeltaIsDerived
title: BimlFlex Settings Definition for PsaDeltaIsDerived
summary: Documentation of settings option within BimlFlex for PsaDeltaIsDerived
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Delta Is Derived

Determines if a PSA table already receives a data delta. Enable this if loading into PSA and the delta has already been derived earlier. This will provide optimized ELT loads because no lookups are necessary.

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `N`.