---
uid: bimlflex-app-reference-documentation-setting-AppendSchemaDm
title: BimlFlex Settings Definition for AppendSchemaDm
summary: Documentation of settings option within BimlFlex for AppendSchemaDm
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Append Schema

Determines whether the Schema name is appended to Object names in the Data Mart.

This setting affects the name of the object as it is used in data logistics processes. For example, using SSIS where simplified names can lead to name overlap. In this case, dim.sales and fact.sales would both be seen as "sales" which leads to name collision.

By using this setting the objects are created as separate entities because of their schema name (uniquefied).

Notes:

* This setting is part of the `Data Mart` settings category.
* The default value for this setting is `N`.
