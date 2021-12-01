---
uid: bimlflex-app-reference-documentation-setting-UseSqlCompatibleHash
title: BimlFlex Settings Definition for UseSqlCompatibleHash
summary: Documentation of settings option within BimlFlex for UseSqlCompatibleHash
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Use SQL Compatible Hash

Determines if the SSIS custom inline [hashing](xref:bimlflex-concepts-hashing) component use a hashing approach compatible with the SQL Server "HASHBYTES()" function.

This is recommended so that the hashed values can be recreated using standard SQL queries when needed.

Notes:

* This setting is part of the `Core` settings category.
* The default value for this setting is `Y`.
