---
uid: bimlflex-app-reference-documentation-setting-SsisBLOBTempStoragePath
title: BimlFlex Settings Definition for SsisBLOBTempStoragePath
summary: Documentation of settings option within BimlFlex for SsisBLOBTempStoragePath
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# BLOB Temp Storage Path

The Blob Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory.

Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive.

If the data flows spill Blobs to disk, update this value to a location with enough space and speed for the load to succeed

Notes:

* This setting is part of the *SSIS* settings category.

