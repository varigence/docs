---
uid: bimlflex-data-vault-index
title: Data Vault and BimlFlex
summary: Overview of Data Vault concepts as implemented in BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Designing and delivering a Data Vault with BimlFlex

Data Vault provides an easy-to-explain and flexible way to tackle complex issues for bringing data together, and BimlFlex is optimized to deliver data solutions that have adopted this approach.

The Data Vault design and development can be done quickly and efficiently, using the BimlFlex [Data Vault Accelerator](xref:bimlflex-data-vault-accelerator).

This guide assumes the BimlFlex product has been installed, configured and that the sample source metadata is ready to be modeled.

> [!NOTE]
> More information on getting started with BimlFlex:
>
> * [BimlFlex Getting Started Intro Videos](xref:bimlflex-getting-started-intro-videos)
> * [BimlFlex Setup Overview](xref:bimlflex-setup-overview)

## Data Vault Essentials

* [A brief introduction of Data Vault](xref:bimlflex-data-vault-introduction)
* [Data Vault Hubs](xref:bimlflex-data-vault-concept-hub) - the Core Business Concept
* [Data Vault Links](xref:bimlflex-data-vault-concept-link) - the Natural Business Relationship
* [Data Vault Satellites](xref:bimlflex-data-vault-concept-satellite) - the Context entity containing descriptive information
* [Data Vault](xref:bimlflex-data-vault) and [Business Data Vault](xref:bimlflex-data-vault-business-data-vault)
* [Point-in-Time tables](xref:bimlflex-data-vault-concept-pit)
* [Bridge tables](xref:bimlflex-data-vault-concept-bridge)
* [Reference Data](xref:bimlflex-data-vault-concept-reference-data)

## BimlFlex Concepts for Data Vault

BimlFlex provides various ways to implement data solutions that utilize concepts from Data Vault methodology:

* [BimlFlex best practices for Data Vault](xref:bimlflex-data-vault-best-practices)
* [Integration Key Concept](xref:bimlflex-data-vault-integration-keys-and-relationships)
* [Using hashing for Data Vault](xref:bimlflex-data-vault-hashing)
* [Driving Keys in BimlFlex](xref:bimlflex-data-vault-driving-keys)
* [BimlFlex solution templates for Data Vault](xref:bimlflex-data-vault-index)
* [Zero records](xref:bimlflex-data-vault-concept-zero-records)

## Delivering Data

BimlFlex allows the creation of a Dimensional Model (Data Mart) from metadata. This can be based on existing objects, such as Satellites, Point-In-Time or Bridge objects, or views added as a separation-of-concern layer on top of the 'Raw' and 'Business' Data Vault constructs.

* [Business Data Vault](xref:bimlflex-data-vault-business-data-vault)
* [Facts and Dimensions on Data vault](xref:bimlflex-data-vault-dimensional-model)

## Recommendations for implementing Data Vault on Microsoft Azure Synapse Analytics

* [Implementing Data Vault on Synapse](xref:bimlflex-data-vault-best-practices-for-deploying-data-vault-on-azure-synapse)
