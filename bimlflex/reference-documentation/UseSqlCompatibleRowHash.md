---
uid: bimlflex-app-reference-documentation-setting-UseSqlCompatibleRowHash
title: BimlFlex Settings Definition for UseSqlCompatibleRowHash
summary: Documentation of settings option within BimlFlex for UseSqlCompatibleRowHash
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Use SQL Compatible Row Hash

Determines whether the SSIS custom inline [hashing](xref:bimlflex-concepts-hashing) component for Full Row Hashing use a hashing approach compatible with the SQL Server "HASHBYTES()" function.

The default is false for backward compatibility however we recommend setting this to true for new projects to make it forward compatible with cloud deployments

Notes:
* This setting is part of the `Core` settings category.
 * The default value for this setting is `N`.