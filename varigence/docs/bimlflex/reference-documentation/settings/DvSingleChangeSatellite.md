---
title: BimlFlex Settings Definition for DvSingleChangeSatellite
description: Documentation of settings option within BimlFlex for DvSingleChangeSatellite
tags: [BimlFlex, Reference]
---

# Single Change Satellite

Enable if loading into Data Vault and the Delta only has single changes to each key. 

This will provide optimized ELT loads, because it bypasses the row compression step and allow for a more optimized load process into the Satellite.

Notes:

* This setting is part of the *Data Vault* settings category.
* The default value for this setting is `N`.