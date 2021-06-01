---
uid: bimlflex-app-reference-documentation-setting-AzureCopyLogSettings
title: BimlFlex Settings Definition for AzureCopyLogSettings
summary: Documentation of settings option within BimlFlex for AzureCopyLogSettings
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Log Settings

The settings for the logging in the Copy Activity, when logging is enabled. Use "@@this" to automatically use the Linked Service associated with the PolyBase Landing connection.

Notes:
* This setting is part of the `Azure Copy` settings category.
* The default value for this setting is `LinkedServiceName="@@this" LogLevel="Warning" Path="log"`.