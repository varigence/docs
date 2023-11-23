---
sidebar_position: 7
title: Bridge
description: Overview of Data Vault Bridge tables
tags: [BimlFlex, Conceptual]
---
# Data Vault Bridge tables in BimlFlex

The `Bridge` table is a combination of primary keys and business keys spread across multiple [Hub](./data-vault-concept-hub) and [Link](./data-vault-concept-link) tables.

Similar to [Point-In-Time](./data-vault-implementation-pit) tables, Bridge tables are constructs that intent to simplify querying from the Data Vault model and boost performance. A Bridge table can be useful if certain Hub and Link joins are used often in queries.

Since Hub and Link tables only capture business- and data warehouse (surrogate) keys, a Bridge tables provide a snapshot of key structures and does not store historical information. In other words, they are not temporal in nature as for example [Satellites](./data-vault-concept-satellite) are.

A Bridge table, in its simplest form, is driven from a Link table. This means the starting point is the Link table, and relating Hubs are joined from there. The Bridge table will contain the surrogate key of the Link table, and the business keys and from the corresponding Hub tables.



:::note

Bridge tables are incrementally updated when new data becomes available in the Data Vault tables that support them.

:::


![Bridge example](/img/bimlflex/bridge-example.png "Bridge example")

Using a Bridge table, contextual data from Satellites can be directly joined to a single table instead of the many joins that are otherwise needed. The Bridge only contains keys to prevent executing the same join query many times, so it does not contain historical data. To understand the history of changes for any Satellite that is joined to the Bridge table it is also an option to build a PIT table using the Bridge.

There are some important notes to clarify on the structure of the Bridge table in BimlFlex, and these are numbered in the example:

1. Each Bridge table contains a [`zero record`](./data-vault-concept-zero-records), which provides an 'unknown' record that replaces to any NULL value.
1. Each Bridge record receives a surrogate key that uniquely identifies a row in the Bridge table. This is purely for identification purposes.
1. The load date / time stamp used (`FlexRowEffectiveFromDate` in BimlFlex) is derived from the involved Hub and Link tables. When loading the Bridge table, BimlFlex will reuse the lowest (earliest) value from the tables that are in scope. This value contains the earliest moment in time a relationship between Core Business Concepts could be established.
