---
title: BimlFlex Data Vault Best Practices
description: Documentation for Data Vault best practices within BimlFlex, including settings for hash key and algorithms, integration keys, and data vault entity management
tags: [BimlFlex, Conceptual]
---

# BimlFlex Best Practices For Data Vault

This document consolidates and outlines the various best practices on Data Vault implementation using BimlFlex.
:::note


> This document is intended to supplement other, published, Data Vault standards.

:::


## Information Modeling

### Define the Business Model

Before diving into the Data Vault standards and implementation we recommend creating a high-level model of your business, or at least for the business area in scope. This is a conceptual model based on business processes, using business terminology. BimlFlex provides the [**Business Modeling**](bimlflex-business-modeling) feature to support creating this.

The intent of the business modelling feature is to maintain a holistic view on the business processes, and define a model that avoids bias that may be caused by how existing operational systems are implemented.

At this stage, the focus is recommended to be on the module and making sure it is an accurate representation of the business. Defining how the source data will fit into this model will be done in subsequent steps.

A recommended approach is the Business Ontology, as discussed in [The Elephant in the Fridge](https://www.amazon.com.au/Elephant-Fridge-Success-Building-Business-Centered/dp/1634624890) by John Giles, or [Ensemble Logical Model](http://dvstandards.com/) as taught by Genesee Academy.

Using [**Business Modeling](bimlflex-business-modeling) you can create a map, model or diagram of the [Core Business Concepts](bimlflex-data-vault-concept-hub), [Natural Business Relationships](bimlflex-data-vault-concept-link) and any supporting [Context Data](bimlflex-data-vault-concept-satellite). These can be used by the BimlFlex [**Accelerator**](bimlflex-data-vault-accelerator) to transform the source data into a Data Vault model.

The Accelerator provides a starting point, a way to quickly configure an initial target Data Vault model. But it still must be aligned and tweaked to fit the business model.
:::danger


> It is highly recommended to have your Business Entities in place before using the Data Vault **Accelerator** for optimal results.

:::


## Recommended Data Vault Columns

BimlFlex implements all standard system columns using [**Configurations**](bimlflex-configuration-editor). The **Configurations** feature allows the definition of specific columns that only apply to certain types of objects.

For a more granular configuration, it is possible to override the global configuration using **Custom Attributes** so that certain configurations only for specific projects or objects.

The following is a list of default columns that specifically apply to Data Vault methodology:

### RowEffectiveFromDate

The `RowEffectiveFromDate` aligns to the Load Date Time Stamp (LDTS) in Data Vault methodology. The LDTS conceptually represents the moment the record is loaded in the Data Warehouse, the time of arrival. It is typically used to represent the 'technical timeline' in a bi-temporal context.

In BimlFlex, this is represented using the [`RowEffectiveFromDate`](xref:bimlflex-metadata-configurations#roweffectivefromdate) configuration.

By default, this configuration is applied to every Data Vault object by BimlFlex. But only for Satellite objects it will be part of the Primary Key definition.

### Record Source



* ConfigurationKey `RowRecordSource`.
  The *CONFIGURATION VALUE* can be renamed based on your naming conventions.
* Use the **Connection** *RECORD SOURCE* value defined on the source connection.
* The default name is `FlexRowRecordSource` and the recommended name is `DWH_RSRC` changed to conform to your naming standards.
<!-- * TODO Add Setting Override to implement a fully qualified object name. -->

### Audit Id

* ConfigurationKey `RowAuditId`.
  The *CONFIGURATION VALUE* can be renamed based on your naming conventions.

<!-- Sequence ID Date Stamps Load Date Time Stamps Occurrence Numbers Sub Sequence Hash Keys L, LINK, LNK STG SAL, SALNK, SLNK B, BRDG, BRG BL, BLNK, BLINK V VF, VFCT D, DIM SQN, SEQ DS, DT LDTS, LDDTS, LDTM OCC, OCNUM, ONUM SSQN, SSQ, SUBSQN, HK, HashKey, HKEY Entity Type Prefix or Suffix Hub H, HUB, HB Satellite S, SAT Hierarchical Links HL, HLNK, HLINK Point-in-Time PIT, PT Business Hub BH, BHUB Business Satellite BS, BSAT, BST View Dimension VDIM, VD Fact FCT, FACT, F Report Collection RPT, RC -->
