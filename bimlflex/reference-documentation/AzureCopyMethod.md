---
uid: bimlflex-app-reference-documentation-setting-AzureCopyMethod
title: BimlFlex Settings Definition for AzureCopyMethod
summary: Documentation of settings option within BimlFlex for AzureCopyMethod
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Copy Method

For the Copy Activity, specifies the Copy Method to use. Bulk Insert allows direct inserts to the target. PolyBase allows automatic staging in a Blob Container and loading through external tables and PolyBase to supported targets.

Notes:

* This setting is part of the `Azure Copy` settings category.
* The default value for this setting is `BulkInsert`.