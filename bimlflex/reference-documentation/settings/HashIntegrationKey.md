---
uid: bimlflex-app-reference-documentation-setting-HashIntegrationKey
title: BimlFlex Settings Definition for HashIntegrationKey
summary: Documentation of settings option within BimlFlex for HashIntegrationKey
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Hash Integration Key

Determines whether the Integration Key is [hashed](xref:bimlflex-concepts-hashing).This is done automatically for any project where the destination connection integration stage is Raw Data Vault as it is a requirement for a Data Vault load.

For other load process designs the hashing is optional and controlled by this flag as well as the hashing configuration in the configuration sheet.

Notes:

* This setting is part of the `Core` settings category.
* The default value for this setting is `N`.
