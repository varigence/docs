---
title: BimlFlex Settings Definition for AzCopyConcurrency
description: Documentation of settings option within BimlFlex for AzCopyConcurrency
tags: [BimlFlex, Reference]
---

# Concurrency

Specify the number of concurrent AzCopy operations to start.

For legacy AzCopy versions, this is always included as a parameter in the command call.

For AzCopy v.10 this is optionally set to the AZCOPY_CONCURRENCY_VALUE environmental variable.

To reuse the current environment variable without setting this value for each object, leave this blank when using AzCopy v.10.

Notes:

* This setting is part of the *AzCopy* settings category.
* The default value for this setting is `2`.
