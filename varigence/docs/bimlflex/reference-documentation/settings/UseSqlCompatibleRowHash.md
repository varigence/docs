---
title: BimlFlex Settings Definition for UseSqlCompatibleRowHash
description: Documentation of settings option within BimlFlex for UseSqlCompatibleRowHash
tags: [BimlFlex, Reference]
---

# Use SQL Compatible Row Hash

Determines if the SSIS custom inline [hashing](../../concepts/hashing) component for Full Row Hashing use a hashing approach compatible with the SQL Server `HASHBYTES()` function.

The default is false for backward compatibility however we recommend setting this to true for new projects to make it forward compatible with cloud deployments

Notes:

* This setting is part of the *Core* settings category.
* The default value for this setting is `N`.
