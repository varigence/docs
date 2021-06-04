---
uid: bimlflex-concepts-overview
title: Overview of main BimlFlex concepts
summary: Overview of BimlFlex concepts including importing metadata, templates, integration keys, load parameters, and delete detection
---
# BimlFlex Concepts Overview

This section covers various concepts that are important to understand when working with BimlFlex.

## Customers and Multi-Tenancy

BimlFlex provides an effective multi-tenant configuration to allow working with different models, even within a single organization. This is referred to as the *Customer* concept. 

More information on this and related concept is provided in the following links:

* [The BimlFlex Customer Concept](xref:bimlflex-concepts-customer)
* [Managing Versions in BimlFlex](xref:bimlflex-concepts-version)

## Working with Design Metadata

The primary source BimlFlex uses to generate Data Warehousing and Business Intelligence assets is metadata. Metadata is most commonly in the form of objects with corresponding attributes.

Although it is relatively straightforward to define individual metadata objects, it can take considerable time and effort to create, update and maintain the number of objects that would typically be involved in an enterprise data solution.

BimlFlex provides an import tool which is accessible from the Connections and Projects screens, which can connect to a database source and manage the metadata BimlFlex uses. The following links provide more information about managing design metadata: 

* [Importing Metadata to BimlFlex](xref:bimlflex-concepts-importing-metadata)
* [The BimlFlex Database](xref:bimlflex-components-metadata-database)

## Data Solution Concepts

A data solution comprises of a number of concepts, technologies and decisions around information modeling and solution design. This section provides an overview of essential concepts that are part of these considerations, and how BimlFlex supports them.

### Architecture

Data solutions come in many shapes and forms, and BimlFlex aims to provide maximum configurability on the overall architecture of the solution. The following concepts are relevant for this:

* [The Persistent Staging Area](xref:bimlflex-concepts-persistent-staging-area)

### Delivery

Irrespective of the design of the data solution architecture, there are many options to make sure the design is delivered the way it is intended.

* [Using Hashing in BimlFlex](xref:bimlflex-concepts-hashing)
* [Working with BimlFlex Parameters](xref:bimlflex-concepts-metadata-parameters)
* [Define Custom Behavior Using Extension Points](xref:bimlflex-concepts-extension-points)
* [BimlFlex Delete Detection](xref:bimlflex-concepts-delete-detection)
* [Orchestration in BimlFlex](xref:bimlflex-concepts-orchestration)
