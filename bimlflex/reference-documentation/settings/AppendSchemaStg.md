---
uid: bimlflex-app-reference-documentation-setting-AppendSchemaStg
title: BimlFlex Settings Definition for AppendSchemaStg
summary: Documentation of settings option within BimlFlex for AppendSchemaStg
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Append Schema

Determines if the source Schema is appended to the object name in the staging layer. The default naming convention is to name tables using the Record Source and object name. The AdventureWorksLT Source table `SalesLT.Product` is normally staged in the `AWLT.Product` table. For sources with multiple schemas, enable this to distinguish between tables. For the product table the new staging table name would be `AWLT.SalesLT_Product`

Notes:

* This setting is part of the *Staging Naming* settings category.
* The default value for this setting is `N`.
