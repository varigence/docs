---
uid: bimlflex-data-vault-introduction
title: A brief introduction on Data Vault
summary: Positioning of Data Vault methodology in the data world
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

## An overview of Data Vault methodology

The Data Vault is defined as a **detail oriented**, **historical tracking** and **uniquely linked** set of **normalised tables** that support one or more functional areas of business. It is a hybrid data modelling approach encompassing the best of breed between 3rd normal
form (3NF) and star schema (Dimensional), both of which are traditional techniques to design Data Warehouse platforms.

The concept is officially titled as the 'Common Foundational Integration Modelling Architecture', but is more widely known under the
name Data Vault.

The keywords ‘detail oriented’, ‘historical tracking’, ‘uniquely linked’ and ‘normalised’ are examples of the technique being geared
towards Data Warehouse use-cases.

* Detail oriented aims at the principle of storing data at the lowest available level of detail (grain / granularity)
* Historical tracking supports the concept that all changes that occur should be captured (tracked) in the Data Warehouse
* Uniquely linked refers to the modelling of relationships as they (logically) are between business concepts
* Normalised aims at the separation between core business concepts and keys (Hubs) and contextual data (Satellites)

These are very similar to the well-known Data Warehouse definitions of 'subject-oriented', 'integrated', 'time-variant' and 'nonvolatile' as defined by Bill Inmon. Data Vault is a Data Warehouse approach, and the technique fully adheres to this more generic
definition.

Data Vault was first published in 2002 by Dan Linstedt in The Data Warehouse Newsletter (TDAN) with of five articles covering
the data modelling fundamentals. These articles can be found [here](http://tdan.com/data-vault-series-1-data-vault-overview/5054).

During its lifecycle, the technique has evolved and updated standards were released in 2013 as part of Data Vault 2.0. (DV2.0). These days Data Vault, and especially DV2.0, has evolved into a broader methodology centered around the original hub-andspoke Data Vault modelling technique but also covering integration with concepts such as Six Sigma, CMM and Agile. The move from original Data Vault to DV2.0 has also defined better data integration (Extract, Transform and Load or ETL) patterns and standards which allow for a more straightforward and better defined implementation.

Especially the relationship with Agile is often mentioned; hub-and-spoke type approaches allow for incremental extension of the solution which is an excellent fit with Agile frameworks such as Disciplined Agile Delivery (DAD).

Data Vault belongs to the family of hybrid modelling approaches that can be classified as **Ensemble Logical Models** (ELM) - also known as Ensemble Modelling Patterns (EMP) which also include Head and Version modelling, Anchor modelling, Focal Point modelling and various related ways of thinking.

From this family of similar approaches, Data Vault is the most popular and adopted globally. The shared characteristic of these techniques is to focus the information (data) modelling around the definition of core business concepts, and to 'separate concerns'.
