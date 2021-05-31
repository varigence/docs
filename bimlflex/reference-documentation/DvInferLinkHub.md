---
uid: bimlflex-app-reference-documentation-setting-DvInferLinkHub
title: BimlFlex Settings Definition for DvInferLinkHub
summary: Documentation of settings option within BimlFlex for DvInferLinkHub
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Infer Link Hub

Determines whether the Data Vault process loads all involved Hubs when a Link table is loaded, independent of Hub loads from referenced tables. Enabling this setting will force BimlFlex to always load all corresponding Hub tables when a Link is loaded from a given source, even though this could be redundant because the Hub information may be provided by referenced tables.This applies to scenarios where the source system reliably manages referential integrity. Because it can be guaranteed the Hub data will be provided by another table, it can be considered to defer Hub processing to the separate table.

Sample Scenario:

A source to staging to Data Vault load is done on the "Product" and "ProductCategory" tables from AdventureWorksLT.

The Product table populates the HUB_Product table. The ProductCategory table populates the HUB_ProductCategory table.

The Product table contains a FK constraint to the Product Category, and therefore contains a ProductCategoryId column.

The normal Link process would use the Product BK and the Product Category BK from the Product source table to load the Link. It would not load any data in to the HUB_ProductCategory as will be loaded from the ProductCategory table.

In this case, because the source is a database, it can be assumed that the referential integrity is guaranteed. In other words, all ProductCategory BK data in the Product table is also expected in the ProductCategory table. In this scenario additional data processing can optionally be avoided.

For other sources it might be necessary to load the HUB table from both sources, either due to late arriving data, missing data or timing issues.

Setting the "DvInferLinkHub" to true will allow the Product to populate the ProductCategory Hub as part of that source table load.

Notes:
* This setting is part of the `Data Vault` settings category.
 * The default value for this setting is `N`.