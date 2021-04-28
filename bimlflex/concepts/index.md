---
uid: bimlflex-concepts-overview
title: Overview of main BimlFlex concepts
summary: Overview of BimlFlex concepts including importing metadata, templates, integration keys, load parameters, and delete detection
---
# BimlFlex Concepts Overview

This section covers various concepts that are important to understand when working with BimlFlex.

## Customers and Multi-Tenancy

BimlFlex provides an effective multi-tenant configuration to allow working with different models, even within a single organisation. This the *Customer* concept.

* [The BimlFlex Customer Concept](xref:bimlflex-concepts-customer)
* [Managing Versions in BimlFlex](xref:bimlflex-concepts-versions)

## Importing Metadata

The primary source BimlFlex uses to generate Data Warehousing and Business Intelligence assets is metadata. Metadata is most commonly in the form of objects with corresponding attributes.

Although it is relatively straightforward to define individual metadata objects, it can take considerable time and effort to create, update and maintain the number of objects that would typically be involved in an enterprise data solution.

BimlFlex provides an import tool which is accessible from the Connections and Projects screens, which can connect to a database source and manage the metadata BimlFlex uses.

* [Importing Metadata to BimlFlex](xref:bimlflex-concepts-importing-metadata)

## Hashing

Hashing is the term used for one-way encryption which can be implemented by applying a selected encryption algorithm. BimlFlex provides various approaches for implementing hashing techniques for the data solution.

* [Using hashing in BimlFlex](xref:bimlflex-concepts-hashing)

## Load Parameters

BimlFlex provides a number of standard out-of-the-box parameters, as well as the functionality to create your own. Parameters can be used in many ways - for example for managing data load windows, orchestration and standardised or default values.

* [BimlFlex Parameters](xref:bbimlflex-concepts-metadata-parameters)

## Extension points

Extension points are one of the key ways BimlFlex provides customisation to cater for specific scenarios. While the standard templates cover most real-world scenarios, there may be a specific tweak that would improve certain edge cases. These modifications can be defined using extension points, that allow for custom logic to be added to a template at various points in the process.

* [Extension Points](xref:bimlflex-concepts-extension-points)

## Delete Detection

To be able to provide an accurate representation of the data in the Data Warehouse, it is often necessary to capture when data was physically removed from the operational systems that act as data sources.

BimlFlex provides a SQL source based delete detection mechanism that allows detection of deleted keys / records from the data sources, as well as various possibilities to configure this with native or 3rd party solutions.

This applies to 'hard deletes' where the record has been removed from the original system, as opposed to end-dating. In the data solution, the event of deletion can be stored as a 'soft' or 'logical' delete. This information can be valuable in determining the correct state of the data for delivery.

* [BimlFlex Delete Detection](xref:bimlflex-concepts-delete-detection)

## Orchestration

Data can be loaded in the the data solution using different scheduling approaches. For example, data can be loaded and processed in batches that run daily or multiple times each day - or data can be loaded in a continuous fashion. In all cases, the BimlFlex templates cater for the orchestration of this so that data is processed in the right order.

* [Orchestration in BimlFlex](xref:bimlflex-concepts-orchestration)
