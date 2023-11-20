---
title: BimlFlex Settings Definition for AzureArchiveStage
description: Documentation of settings option within BimlFlex for AzureArchiveStage
tags: [BimlFlex, Reference]
---

# Archive Stage

Determines if the staged Blob Storage files are moved to the defined archive container, once processing is completed. This will use AzCopy v.10 commands, so requires AzCopy v.10 and SAS Tokens for access.

Notes:

* This setting is part of the *Azure* settings category.
* The default value for this setting is `N`.
