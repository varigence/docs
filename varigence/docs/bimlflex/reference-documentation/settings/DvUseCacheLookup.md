---
title: BimlFlex Settings Definition for DvUseCacheLookup
description: Documentation of settings option within BimlFlex for DvUseCacheLookup
tags: [BimlFlex, Reference]
---

# Use Cache Lookup

Enables using the file based cache lookup feature of SSIS (for lookups).

Cache files will be created as part of the SSIS process and used for the lookups. In-memory lookups generally perform better and require more available memory

Notes:

* This setting is part of the *Data Vault* settings category.
* The default value for this setting is `N`.