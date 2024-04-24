---
uid: bimlflex-data-vault-concept-reference-data
title: Data Vault reference data
summary: Overview of Data Vault handling of reference data
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Data Vault Reference Data in BimlFlex

Reference Tables Reference tables are a logical collection of code and description lookup structures.
They utilize natural business keys and are constructed from standard Hub, Link, and Satellite entities.

Resolution occurs through queries at run time.

They do not house nor require foreign keys.

In general, the codes (natural keys) are found housed in the Satellites as they typically describe other keys or other relationships.
