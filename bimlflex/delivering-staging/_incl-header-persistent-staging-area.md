---
uid: bimlflex-persistent-staging-area-header
title: BimlFlex Persistent Staging Area (PSA)
summary: Overview of the Persistent Staging Area (PSA) for BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

A `Persistent Staging Area` (PSA) is an optional area in the data solution design that records the transactions (events) that were received by the data solution over time. Much like an archive, it shows the changes in data in its original form and prior to any interpretation towards data integration or delivery.

The PSA provides a historized view of the data received from the operational systems ('source'), even if these systems themselves do not have this data anymore. With a PSA, it is possible to reload the upstream data solution from the original transactions - *replaying the history* of transactions into a potentially different information model.

The PSA tables or files have the same structure as the source they receive the data from, with a few additions to enable storing multiple version of the data based on the source primary key. Generally speaking, the PSA is a copy of the source table that can store its history.
