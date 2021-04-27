---
uid: bimlflex-data-vault-best-practices
title: BimlFlex Data Vault Best Practices
summary: Documentation for Data Vault best practices within BimlFlex, including settings for hash key and algorithms, integration keys, and data vault entity management
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# BimlFlex Best Practices For Data Vault

This document consolidates and outlines the various best practices on Data Vault implementation using BimlFlex.

> [!NOTE]
> This document is intended to supplement other, published, Data Vault standards.
> Varigence provides a course that combines your preferred Data Vault approach with implementation guides using BimlFlex.

## Information Modeling

### Define the Business Model

Before diving into the Data Vault standards and implementation, we recommend creating a high-level model of your business or at least the business area in scope.

Build a conceptual model based on business processes using business terminology.
Exercise caution, especially the `technical` teams, to not base the model on any existing source system.
At this stage, do not concern yourself with how you will make the source data fit into this model, rather focus on the model and make sure it is an accurate representation of your business.

A recommended approach is the Business Ontology, as discussed in [The Elephant in the Fridge](https://www.amazon.com.au/Elephant-Fridge-Success-Building-Business-Centered/dp/1634624890) by John Giles, or [Ensemble Logical Model](http://dvstandards.com/) as taught by Genesee Academy.

Create a map, model or diagram of the [Core Business Concepts](xref:bimlflex-data-vault-concept-hub), [Natural Business Relationships](xref:bimlflex-data-vault-concept-link) and any supporting [Context Data](xref:bimlflex-data-vault-concept-satellite) before using the BimlFlex accelerator to transform the source into a Data Vault. The accelerator provides a starting point, and a way to quickly configure a target model. But it still must be aligned and tweaked to fit the business model.

Mapping source systems to your `Business Entities` can be a challenge. However, the BimlFlex Accelerator simplifies the process by applying standard Data Vault patterns.

> [!IMPORTANT]
> It is highly recommended to have a `Business Entities` in place before using the `Data Vault Accelerator` for optimal results.

## Data Vault System Columns

* BimlFlex implements all system columns using **Configurations** and a matrix allowing users options for granular configuration.
* It is possible to override the global configuration for specific projects or objects using **Custom Attributes**.

### Load Date Time Stamp

* ConfigurationKey `RowEffectiveFromDate`.
  The *CONFIGURATION VALUE* can be renamed based on your naming conventions.
* This is optional, but recommended value if supported by your target platform.
* Not part of the Hub primary key.
* The default name is `FlexRowEffectiveFromDate` and the recommended name is `DWH_LOAD_DT` changed to conform to your naming standards.

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
