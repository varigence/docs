---
title: BimlFlex Settings Definition for AzCopyCreateContainer
description: Documentation of settings option within BimlFlex for AzCopyCreateContainer
tags: [BimlFlex, Reference]
---

# Create Container

Determines if the pipeline include a step to create the destination container. Legacy AzCopy versions create this automatically, v.10 fails when the target container is missing. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads.

Notes:

* This setting is part of the *AzCopy* settings category.
* The default value for this setting is `N`.
