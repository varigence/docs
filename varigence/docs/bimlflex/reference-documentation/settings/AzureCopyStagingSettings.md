---
title: BimlFlex Settings Definition for AzureCopyStagingSettings
description: Documentation of settings option within BimlFlex for AzureCopyStagingSettings
tags: [BimlFlex, Reference]
---

# Staging Settings

The staging settings to use when enabling Staging for the Copy Activity. Use `@@this` to automatically use the Linked Service associated with the PolyBase Landing connection.

Notes:

* This setting is part of the *Azure Copy* settings category.
* The default value for this setting is `LinkedServiceName="@@this" EnableCompression="false" Path="staging"`.
