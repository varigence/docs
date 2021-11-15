---
uid: bimlflex-app-reference-documentation-setting-IntegrationKeyToUpper
title: BimlFlex Settings Definition for IntegrationKeyToUpper
summary: Documentation of settings option within BimlFlex for IntegrationKeyToUpper
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Integration Key To Upper

Determines if strings in the Integration Key will be upper-cased automatically.

This is recommended and allows the standard SQL Server case insensitive collation to ingest business keys from multiple sources using different casings to be added to Hubs and treated as the same key without issues.

Notes:

* This setting is part of the `Core` settings category.
* The default value for this setting is `Y`.
