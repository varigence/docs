---
uid: bimlflex-data-vault-introduction
title: A brief introduction on Data Vault
summary: Positioning of Data Vault methodology in the data world
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

## An overview of Data Vault methodology

BimlFlex fully supports Data Vault methodology end-to-end. Data Vault methodology, however, covers a broad variety of topics concepts and ideas - some of which can be interpreted or implemented in different ways.

With BimlFlex, it is possible to deliver a Data Vault solution conform many of these interpretations. To get the best outcome, these concepts need to be fully understood so that the right settings and conventions can be applied for your Data Vault. This introduction section provides a first high level overview of Data Vault methodology.

## What is Data Vault?

The Data Vault is defined as a **detail oriented**, **historical tracking** and **uniquely linked** set of **normalized tables** that support one or more functional areas of business. It is a hybrid data modeling approach encompassing the best of breed between 3rd normal form (3NF) and star schema (Dimensional), both of which are traditional techniques to design Data Warehouse platforms.

The concept is officially titled as the 'Common Foundational Integration Modeling Architecture', but is more widely known under the name Data Vault.

The keywords 'detail oriented', 'historical tracking','uniquely linked' and 'normalized' are examples of the technique being geared towards Data Warehouse use-cases.

* Detail oriented aims at the principle of storing data at the lowest available level of detail (grain / granularity)
* Historical tracking supports the concept that all changes that occur should be captured (tracked) in the Data Warehouse
* Uniquely linked refers to the modeling of relationships as they (logically) are between business concepts
* Normalized aims at the separation between core business concepts and keys (Hubs) and contextual data (Satellites)

These are very similar to the well-known Data Warehouse definitions of 'subject-oriented', 'integrated', 'time-variant' and 'non-volatile' as defined by Bill Inmon. Data Vault is a Data Warehouse approach, and the technique fully adheres to this more generic definition.

Data Vault was first published in 2002 by Dan Linstedt in The Data Warehouse Newsletter (TDAN) with of five articles covering
the data modeling fundamentals. These articles can be found [here](http://tdan.com/data-vault-series-1-data-vault-overview/5054).

During its lifecycle, the technique has evolved and updated standards were released in 2013 as part of Data Vault 2.0. (DV2.0). These days Data Vault, and especially DV2.0, has evolved into a broader methodology centered around the original hub-and-spoke Data Vault modeling technique but also covering integration with concepts such as Six Sigma, CMM and Agile. The move from original Data Vault to DV2.0 has also defined better data integration (Extract, Transform and Load or ETL) patterns and standards which allow for a more straightforward and better defined implementation.

Especially the relationship with Agile is often mentioned; hub-and-spoke type approaches allow for incremental extension of the solution which is an excellent fit with Agile frameworks such as Disciplined Agile Delivery (DAD).

Data Vault belongs to the family of hybrid modeling approaches that can be classified as **Ensemble Logical Models** (ELM) - also known as Ensemble Modeling Patterns (EMP) which also include Head and Version modeling, Anchor modeling, Focal Point modeling and various related ways of thinking.

From this family of similar approaches, Data Vault is the most popular and adopted globally. The shared characteristic of these techniques is to focus the information (data) modeling around the definition of core business concepts, and to 'separate concerns'.

As a summary:

* Data Vault Models are hub-and-spoke, and built entirely using Hub (concepts), Link (relationship) and Satellites (context) entities
* Data Vault Hubs and Links contain no descriptive attributes
* Satellites contain all descriptive attributes (all context, details, time slices, etc.)
* Data Vault Hubs contain no Foreign Keys/relationships
* Satellites contain one-and-only-one Foreign Key/relationship (for the Hub or Link to which it is attached)
* All relationships represented in a Data Vault are manifest through Link Tables
* Satellites can attach directly to one-and-only-one Hub or Link
* Data Vault Hubs and Links all use a Sequence ID or Hash for a Primary Key
