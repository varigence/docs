---
uid: bimlflex-reference-documentation-setting-AzureArchiveStage
title: BimlFlex Settings Definition for AzureArchiveStage
summary: Documentation of settings option within BimlFlex for AzureArchiveStage
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Archive Stage

Determines if the staged Blob Storage files are moved to the defined archive container, once processing is completed. This will use AzCopy v.10 commands, so requires AzCopy v.10 and SAS Tokens for access.

Notes:

* This setting is part of the *Azure* settings category.
* The default value for this setting is `N`.