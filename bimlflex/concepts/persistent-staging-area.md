---
uid: bimlflex-concepts-persistent-staging-area
title: BimlFlex persistent staging area concept
summary: Overview of the persistent staging area concept in BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Persistent Staging Area Concept

A `Persistent Staging Area` (PSA) is an optional area in the data solution design that records the transactions (events) that were received by the data solution over time. Much like an archive, it shows the changes in data in its original form and prior to any interpretation towards data integration or delivery.

The PSA provides a historised view of the data received from the operational systems, even if these systems themselves do not have this data anymore. With a PSA, it is possible to reload the upstream data solution from the original transactions - *replaying the history* of transactions into a potential different information model.

In BimlFlex, the PSA concept is referred to as an `ODS` - an Operational Data Store. These terms can mean many things to many people, but the underlying idea is that there are two forms on a PSA / ODS that BimlFlex supports:

1. Full history, which captures the incoming transactions as described above. And,
2. Current state, which only shows the most recent state of a given record.

A PSA is a good option to include in the overall design if you gradually build out your data solution. This is because it's possible to start collecting data, and building up a history of events, while considering what the target model should look like. Once the target model (information model, or business model) is sufficiently completed the available data can be loaded into this model. It is also possible to change your mind and tweak the target model, after which the PSA can provide the data to populate the updated model.

In BimlFlex, a PSA can be defined as a specific `Integration Stage` for a given `Connection`. This feature will inform BimlFlex that objects mapped to this connection require PSA functionality to be created.