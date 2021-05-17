---
uid: bimlflex-data-vault-concept-bridge
title: Data Vault PIT and Bridge tables
summary: Overview of Data Vault supporting constructs
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Data Vault Point-in-Time and Bridge tables in BimlFlex

## Point in Time

`Point in Time` and `Bridge` Tables is a System Driven Satellite.
It is comprised of primary key values and business key values from a single Hub, and that Hubs' surrounding Satellites.
It may also be comprised of a single Link and that Links' surrounding Satellites.
It is a snapshot table populated with snapshot-based records of keys and key structures.
It provides equal-join capacities to view based Dimensions and view based Facts.
It is built for the performance of the queries in getting data out of the Raw Data Vault.
They are based on the principles of Join Indexes as written by Teradata, only the point-in-time structures can be implemented on ANY platform.
Because Point-in-Time tables live within the Information Mart logical construct they can also, house computed fields, or additional temporality (such as begin and end dates that have been computed for business purposes).

## Bridge

The Bridge Table is a combination of primary keys and business keys spread across multiple Hubs and Links.
They can be thought of as "base level Fact Tables".
They provide a snapshot of key structures and are generally not temporal in nature.
That said, because Bridge Tables live within the Information Mart logical construct, they can also house computed fields, or temporality.