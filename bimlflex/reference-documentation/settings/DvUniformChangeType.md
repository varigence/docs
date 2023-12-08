---
uid: bimlflex-app-reference-documentation-setting-DvUniformChangeType
title: BimlFlex Settings Definition for DvUniformChangeType
summary: Documentation of settings option within BimlFlex for DvUniformChangeType
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Uniform Change Type

When enabled, this setting ensures uniform handling of all source inserts and updates. Specifically, if the only difference between records is the `RowChangeType`, a new record won't be inserted. This prevents unnecessary duplication and maintains a cleaner history of attribute changes.

Notes:

* This setting is part of the *Data Vault* settings category.
* The default value for this setting is `N`.
