---
uid: bimlflex-app-reference-documentation-setting-DvSingleChangeSatellite
title: BimlFlex Settings Definition for DvSingleChangeSatellite
summary: Documentation of settings option within BimlFlex for DvSingleChangeSatellite
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Single Change Satellite

Set this to true if loading into Data Vault and the Delta only has single changes to each key. 

This will provide optimized ELT loads, because it bypasses the row compression step and allow for a more optimized load process into the Satellite.

Notes:

* This setting is part of the `Data Vault` settings category.
* The default value for this setting is `N`.
