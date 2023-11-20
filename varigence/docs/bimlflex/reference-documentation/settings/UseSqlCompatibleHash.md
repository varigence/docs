---
title: BimlFlex Settings Definition for UseSqlCompatibleHash
description: Documentation of settings option within BimlFlex for UseSqlCompatibleHash
tags: [BimlFlex, Reference]
---

# Use SQL Compatible Hash

Determines if the SSIS custom inline [hashing](bimlflex-concepts-hashing) component use a hashing approach compatible with the SQL Server "HASHBYTES()" function.

This is recommended so that the hashed values can be recreated using standard SQL queries when needed.

Notes:

* This setting is part of the *Core* settings category.
* The default value for this setting is `Y`.
