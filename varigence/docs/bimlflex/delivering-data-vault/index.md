---
sidebar_position: 1
title: Overview
description: Overview of Data Vault concepts as implemented in BimlFlex
tags: [BimlFlex, Conceptual]
---
# Designing and delivering a Data Vault with BimlFlex

Data Vault provides an easy-to-explain and flexible way to tackle complex issues for bringing data together, and BimlFlex is optimized to deliver data solutions that have adopted this approach.

The Data Vault design and development can be done quickly and efficiently, using the BimlFlex [Data Vault Accelerator](../metadata-editors/accelerator).

This guide assumes the BimlFlex product has been installed, configured and that the sample source metadata is ready to be modeled.



:::note

More information on getting started with BimlFlex:

* [BimlFlex Getting Started Intro Videos](../getting-started/intro-videos)
* [BimlFlex Setup Overview](../installation)

:::


## Data Vault Essentials

* [A brief introduction of Data Vault](./data-vault-introduction)
* [Data Vault Hubs](./data-vault-concept-hub) - the Core Business Concept
* [Data Vault Links](./data-vault-concept-link) - the Natural Business Relationship
* [Data Vault Satellites](./data-vault-concept-satellite) - the Context entity containing descriptive information
* [Data Vault](./data-vault) and [Business Data Vault](./data-vault-business-data-vault)
* [Point-in-Time tables](./data-vault-implementation-pit)
* [Bridge tables](./data-vault-implementation-bridge)
* [Reference Data](./data-vault-concept-reference-data)

## BimlFlex Concepts for Data Vault

BimlFlex provides various ways to implement data solutions that utilize concepts from Data Vault methodology:

* [BimlFlex best practices for Data Vault](./data-vault-best-practices)
* [Integration Key Concept](./data-vault-concept-integration-keys)
* [Using hashing for Data Vault](./hashing-in-data-vault)
* [Driving Keys in BimlFlex](./driving-keys-in-data-vault)
* [BimlFlex solution templates for Data Vault](./index)
* [Zero records](./data-vault-concept-zero-records)

## Delivering Data

BimlFlex allows the creation of a Dimensional Model (Data Mart) from metadata. This can be based on existing objects, such as Satellites, Point-In-Time or Bridge objects, or views added as a separation-of-concern layer on top of the 'Raw' and 'Business' Data Vault constructs.

* [Business Data Vault](./data-vault-business-data-vault)
* [Facts and Dimensions on Data vault](./data-vault-dimensional-model)

## Recommendations for implementing Data Vault on Microsoft Azure Synapse Analytics

* [Implementing Data Vault on Synapse](./microsoft-best-practice-data-vault)
