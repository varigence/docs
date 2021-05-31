---
uid: bimlflex-app-reference-documentation-setting-SsisBufferTempStoragePath
title: BimlFlex Settings Definition for SsisBufferTempStoragePath
summary: Documentation of settings option within BimlFlex for SsisBufferTempStoragePath
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Buffer Temp Storage Path

The Buffer Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory.

Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive.

If the data flows spill buffer data to disk, update this value to a location with enough space and speed for the load to succeed

Notes:
* This setting is part of the `SSIS` settings category.
