---
title: BimlFlex Settings Definition for AzureCopyMethod
description: Documentation of settings option within BimlFlex for AzureCopyMethod
tags: [BimlFlex, Reference]
---

# Copy Method

For the Copy Activity, specifies the Copy Method to use. Bulk Insert allows direct inserts to the target. PolyBase allows automatic staging in a Blob Container and loading through external tables and PolyBase to supported targets.

Notes:

* This setting is part of the *Azure Copy* settings category.
* The default value for this setting is `BulkInsert`.