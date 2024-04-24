---
uid: bimlflex-reference-documentation-setting-DvZeroKeyExpression
title: BimlFlex Settings Definition for DvZeroKeyExpression
summary: Documentation of settings option within BimlFlex for DvZeroKeyExpression
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Zero Key Expression

Override the default SQL expression to generate Zero keys in Data Vault insert scripts. Use with caution: altering this expression may affect data consistency.

Notes:

* This setting is part of the *Data Vault* settings category.
* The default value for this setting is `@@this`.