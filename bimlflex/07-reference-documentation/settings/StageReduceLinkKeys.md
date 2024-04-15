---
uid: bimlflex-reference-documentation-setting-StageReduceLinkKeys
title: BimlFlex Settings Definition for StageReduceLinkKeys
summary: Documentation of settings option within BimlFlex for StageReduceLinkKeys
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Reduce Link Keys in Staging

If you load multiple Link tables from a single source, it may happen that the same Hub Surrogate Key is created multiple times. While this is supported by BimlFlex it may be requires to reduce the number of keys that are created.

Enable this to reduce additional Link hash keys in the staging table. With this disabled, each hash key used in Links will be individually created. With this enabled, hash keys in the staging table will be reused when possible.

Notes:

* This setting is part of the *Data Vault* settings category.
* The default value for this setting is `N`.