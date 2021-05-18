---
uid: bimlflex-data-vault-concept-bridge
title: Data Vault Bridge tables
summary: Overview of Data Vault Bridge tables
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Data Vault Bridge tables in BimlFlex

The `Bridge` table is a combination of primary keys and business keys spread across multiple Hubs and Links.
They can be thought of as "base level Fact Tables".
They provide a snapshot of key structures and are generally not temporal in nature.
That said, because Bridge Tables live within the Information Mart logical construct, they can also house computed fields, or temporality.