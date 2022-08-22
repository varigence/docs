---
uid: bimlflex-training-content
title: BimlFlex Training Content
summary: Guide on working with BimlFlex. Meant to be generated as hand-out.
---
# BimlFlex Training Manual

This guide provides an end-to-end overview of the BimlFlex design process.

The guide covers the components that make up the BimlFlex ecosystem, and how to interact with them. The essential concepts are also covered in detail. These are necessary to get the initial data solution up and running.

Detailed modeling and customization to cater for specific requirements are outlined in the customization sections at the end of this guide.

[!include[Components](../getting-started/bimlflex-components-overview.md)]

# Essential Concepts

## Dashboard

[!include[Dashboard](../metadata-editors/_incl-header-dashboard.md)]

## Customers

[!include[Customers](../concepts/_incl-header-customer.md)]

## Versions

[!include[Versions](../concepts/_incl-header-version.md)]

[!include[Versions](../metadata-editors/_incl-header-version.md)]

## BimlFlex App

[!include[BimlFlex](../metadata-editors/_incl-header-bimlflex-app.md)]

# Connections, Batches and Projects

## Connections

[!include[Connections](../metadata-editors/_incl-header-connection.md)]

## Batches

[!include[Batches](../metadata-editors/_incl-header-batch.md)]

## Projects

[!include[Projects](../metadata-editors/_incl-header-project.md)]

# Solution Design

Once the high level architecture in terms of connections, projects and batches has been defined, a detailed and custom design can be implemented. The design process starts with the imported metadata and provides an initial foundation of the solution, including a Staging Area, Persistent Staging Area (PSA - if configured) and initial technical Data Vault model (if configured).

In BimlFlex, subsequent design decision for the physical model are saved against the source object. This means that during the design process, the source object is enriched with further details that allow downstream (target) objects to be generated as well as the data logistics processes to populate these.

This section covers the main design features that BimlFlex provides.

## Business Modeling

[!include[BusinessModeling](../metadata-editors/_incl-header-business-modeling.md)]

## Importing Metadata

[!include[Versions](../concepts/_incl-header-metadata-import.md)]

## Data Vault Accelerator

[!include[Accelerator](../metadata-editors/_incl-header-accelerator.md)]

## Schema Diagram

[!include[SchemaDiagram](../metadata-editors/_incl-header-schema-diagram.md)]

## Object Editor

[!include[Objects](../metadata-editors/_incl-header-object.md)]

# Advanced Customization

No data solution can be completely delivered by only using generic patterns. Customization of certain areas in the solution will be needed to cater for situation-specific edge cases that are unique to your environment, requirements and challenges.

BimlFlex offers a wide array of customization mechanisms that allow specific tweaking of the solution at a very detailed level.

## Configurations

[!include[Configurations](../metadata-editors/_incl-header-configuration.md)]

## Settings

[!include[Settings](../metadata-editors/_incl-header-setting.md)]

## Parameters

[!include[Parameters](../metadata-editors/_incl-header-parameter.md)]

## Attributes

[!include[Attributes](../metadata-editors/_incl-header-attribute.md)]

## Extension Points

[!include[ExtensionPoints](../concepts/_incl-header-extension-point.md)]

# Notable Features

Besides the support for bringing together disparate data sets into an integrated model for data delivery, BimlFlex provides a number of features intended to complete the data solution.

## Delete Detection

[!include[DeleteDetection](../concepts/_incl-header-delete-detection.md)]

# Getting Started With BimlFlex

So far, a comprehensive overview of BimlFlex has been provided. The next step is to configure the BimlFlex ecosystem and get started with any of the existing sample projects - or by creating your own.

The following resources have been made available for this:

* [Configuring BimlFlex](xref:bimlflex-getting-started-initial-configuration)
* [Sample Solutions](xref:bimlflex-sample-metadata)