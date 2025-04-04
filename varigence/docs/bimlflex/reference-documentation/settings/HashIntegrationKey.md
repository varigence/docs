---
title: BimlFlex Settings Definition for HashIntegrationKey
description: Documentation of settings option within BimlFlex for HashIntegrationKey
tags: [BimlFlex, Reference]
---

# Hash Integration Key

Determines if the Integration Key is [hashed](../../concepts/hashing). This is done automatically for any project where the destination connection integration stage is Data Vault as it is a requirement for a Data Vault load.

For other load process designs the hashing is optional and controlled by this flag as well as the hashing configuration in the configuration sheet.

Notes:

* This setting is part of the *Core* settings category.
* The default value for this setting is `N`.
