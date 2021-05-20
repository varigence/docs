---
uid: bimlflex-data-vault-implementation-link
title: Data Vault Links
summary: Overview of Data Vault Links
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Data Vault Links in BimlFlex

Data Vault Links:

* Distinct or Unique set of relationships between the involved Hubs.
* Links are many to many relationships.
* Two or more Hubs are required to build a Link, except the Hierarchy and Same-As Links which are self-referencing and the accelerator will generate a two way Link for every reference when the *MODEL OBJECT TYPE* is defined as a `Hub`
* Combining multiple Links in the accelerator can be achieved by dragging one on top of another and entering the new Link name.
* The accelerator will generate a Link with all reference columns when the *MODEL OBJECT TYPE* is defined as a `Link`.
* Links, similar to Hubs, do not have a start and end date attributes and relationship effectivity should be tracked in a Satellite referred to as a `Link Satellite`.

## Link Key Columns

* The Link Primary Key is a `hash` of the concatenated **Integration Keys** of all participating Hubs.
  The order of the participating hub determines the concatenation order.
  Changing the order or re-acceleration may create a different hash.
* The Link Unique Key is the hash key of all participating hubs.
* The key column names will inherit the source column name removing the key suffix specified in the list [*KEY ENDS WITH*](xref:bimlflex-metadata-settings#settings-model) **Setting**.
  This setting can be altered if your system suffix keys with a different value like `NM`,`CD`, etc.
  The result is stored in the *MODEL REFERENCE* and can be altered if required.
  This provides flexibility when a Link reference the same Hub twice and therefore will need roleplaying names.

## Hierarchical Link

* A `Link` that is used to specify a recursive or hierarchy relationship
* Specifying a *MODEL OBJECT TYPE* of `Hierarchy Link` (HAL) on the source object is provided for, however, the result is a Link as there is no functional or structural difference.

## Same-As Link

* A `Link` is used to specify a relationship between similar or the same Hub members.
* Specifying a *MODEL OBJECT TYPE* of `Same-As Link` (SAL) on the source object is provided for, however, the result is a Link as there is no functional or structural difference.
* Additional matching attributes that describe the relationship like similarity and matching confidence should be stored in an attached Link Satellite.

## Non-Historized or Transaction Links

* A `Link` containing immutable data that is never updated or changed.
  Along with the key columns referencing Hubs, it can include additional association or degenerate keys.
* It is recommended not to have Effectivity Link Satellites for this type of Link as they do not change over time.

> [!NOTE]
> BimlFlex handles all links the same from a model acceleration and automation perspective.

## Link Naming Convention

* Prefix or Suffix with one of the following recommendations `LNK`, `L`, `LINK`.
* Links can be accelerated from multiple *MODEL OBJECT TYPES* and can be placed into two categories.
* **1. Model Object Type** `Hub`
  * The Link name will be derived by combing the **Object** *MODEL OVERRIDE SHORT NAME* or **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*APPEND LINK*](xref:bimlflex-metadata-settings#naming-data-vault-naming) **Setting**.
  * This is best explained with an example.
    Let's say we imported a table called `GeneralLedger` that has a relationship to `ChartOfAccounts` and the [*APPEND LINK*](xref:bimlflex-metadata-settings#naming-data-vault-naming) **Setting** is `L`.
    The default name for the Link will be `L_GeneralLedger_ChartOfAccounts`.
    Link names can get quite long so the **Object** *MODEL OVERRIDE SHORT NAME* can be used to shorten the left-hand portion of the name.
    If we change this to `GL` the name will now be `L_GL_ChartOfAccounts` and can be even further shortened by changing the *MODEL REFERENCE* of relationship column.
    If we also change this to `COA` the will now be `L_GL_COA`.
  * The pattern for the name is as follows:
    * *APPEND LINK* + `{Derived Object Name}` + *MODEL REFERENCE* **or** `{Derived Object Name}` + *MODEL REFERENCE* + *APPEND LINK*
      * `{Derived Object Name}` = (In order) *MODEL OVERRIDE SHORT NAME* **or** *MODEL OVERRIDE NAME* **or** *OBJECT NAME*
* **2. Model Object Type** `Link` **-** `Hierarchy Link` **-** `Same As Link`
  * The Link name will be derived by combing the **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*APPEND LINK*](xref:bimlflex-metadata-settings#naming-data-vault-naming) **Setting**.
  * The pattern for the name is as follows:
    * *APPEND LINK* + `{Derived Object Name}` **or** `{Derived Object Name}` + *APPEND LINK*
      * `{Derived Object Name}` = (In order) *MODEL OVERRIDE SHORT NAME* **or** *MODEL OVERRIDE NAME* **or** *OBJECT NAME*

## Link System Column Configuration

* [Load Date Time Stamp](xref:bimlflex-data-vault-best-practices#load-date-time-stamp)
* [Record Source](xref:bimlflex-data-vault-best-practices#record-source)
* [Audit Id](xref:bimlflex-data-vault-best-practices#audit-id)

### Link Settings

Choose a tab below to view relevant setting descriptions or examples for Links.

[!include[Link Metadata Settings List](_settings_link.md)]
