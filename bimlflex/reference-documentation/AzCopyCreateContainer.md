---
uid: bimlflex-app-reference-documentation-setting-AzCopyCreateContainer
title: BimlFlex Settings Definition for AzCopyCreateContainer
summary: Documentation of settings option within BimlFlex for AzCopyCreateContainer
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Create Container

Determines whether the pipeline include a step to create the destination container. Legacy AzCopy versions create this automatically, v.10 fails when the target container is missing. Only enable this when needed, such as to allow load scenarios where the target container is removed between loads.

Notes:
* This setting is part of the `AzCopy` settings category.
* The default value for this setting is `N`.