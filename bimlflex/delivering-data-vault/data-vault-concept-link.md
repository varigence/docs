---
uid: bimlflex-data-vault-concept-link
title: Data Vault Links
summary: Overview of Data Vault Links
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Links

A Link in Data Vault is the representation of a `Natural Business Relationship`. 

These are the relationships between [Core Business Concepts](xref:bimlflex-data-vault-concept-hub). Similar to a Core Business Concept, they can also be described using [Context](xref:bimlflex-data-vault-concept-satellite) entities - in this case describing the relationship.

Links maintain relationships between two or more Hubs. The Link is also a distinct set of all occurrences of the combination of hubs ever seen. These relationships have their effectiveness maintained through (Link) Satellites or derived from related Hub Satellites.

Some Links need to emulate the Foreign Key constraints in their source, this is managed by defining **Driving Keys** for the Link Satellite.

The Link forms the base for the **Unit of Work**, UOW. The UOW defines the required granularity to properly identify the relationship; the UOW forms the grain of the relationship.

The Link Entity is the distinct set of relationships between the involved Hubs. Like the Hub, it is an insert-only table and any effectiveness or attributes should be tracked in a connected Link Satellite or derived from a connected Hub's Satellite.

Two or more Hubs are required to build a Link. The Product source table used for the Hub has a relationship to the Product Category table, representing the category of a product. The Product Category relationship will require a Hub for the Link to be built. The Product Category table also has a self-referencing hierarchy through the parent category. This provides an interesting scenario as that Link will reference the same Hub twice and will therefore need roleplaying names.

Links are built from the metadata of, and loaded from, a single source table. If there is a requirement to add data or attributes from related tables, they have to be joined into the source table in the source metadata. This can be either through the source to staging process, through a separate staging process on the Persistent Staging Layer, or through the Staged Query load concept.

It is recommended that sources provide all the required metadata for relationships between entities to be built using the identified Integration keys.

This guide uses the technical Ids from the source as keys.

The default naming convention used by the Accelerator is to create the Link name as the relationship between the Hubs. This works well in the Product to ProductCategory example scenario. For Links with more Hubs attached the name can be adjusted through the Metadata to use a different convention.

The Source tables need the Link keys for reference. The default naming convention uses `LSK_Entity_Entity_SK` naming style. The source tables have the keys for the Links added as well as the Hub keys for the relationships. The LSK column has the Link table as target table specified.

As before the Hub have a BK and an SK column.

All relationships from the source table to related tables, such as the ProductCategoryId column in the Product Table, should be represented through modeled Integration Key columns similar to the main Integration Key for the Table. The Metadata Import derive this when possible. For the Product source table the relationship to the ProductCategory has been implemented in the derived Column ProductCategory_BK. This column has a reference to the Integration Key Column ProductCategory_BK in the ProductCategory Object.

The Link Data Vault entries have a Link SK as well as an entry for each participating Hub. The entries for the participating Hubs have an entry in the `ReferenceTable` and `ReferenceColumnName` to identify the Hubs.

Building the solution from this metadata will generate two load packages in the Data Vault project, one each for the source tables. In each package will be loads for the Hub and the Link.

## Implementation of the Link concept in BimlFlex

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
* The key column names will inherit the source column name removing the key suffix specified in the list [*KEY ENDS WITH*](xref:bimlflex-app-reference-documentation-settings-index) **Setting**.
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
  * The Link name will be derived by combing the **Object** *MODEL OVERRIDE SHORT NAME* or **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*APPEND LINK*](xref:bimlflex-app-reference-documentation-settings-index) **Setting**.
  * This is best explained with an example.
    Let's say we imported a table called `GeneralLedger` that has a relationship to `ChartOfAccounts` and the [*APPEND LINK*](xref:bimlflex-app-reference-documentation-settings-index) **Setting** is `L`.
    The default name for the Link will be `L_GeneralLedger_ChartOfAccounts`.
    Link names can get quite long so the **Object** *MODEL OVERRIDE SHORT NAME* can be used to shorten the left-hand portion of the name.
    If we change this to `GL` the name will now be `L_GL_ChartOfAccounts` and can be even further shortened by changing the *MODEL REFERENCE* of relationship column.
    If we also change this to `COA` the will now be `L_GL_COA`.
  * The pattern for the name is as follows:
    * *APPEND LINK* + `{Derived Object Name}` + *MODEL REFERENCE* **or** `{Derived Object Name}` + *MODEL REFERENCE* + *APPEND LINK*
      * `{Derived Object Name}` = (In order) *MODEL OVERRIDE SHORT NAME* **or** *MODEL OVERRIDE NAME* **or** *OBJECT NAME*
* **2. Model Object Type** `Link` **-** `Hierarchy Link` **-** `Same As Link`
  * The Link name will be derived by combing the **Object** *MODEL OVERRIDE NAME* if specified otherwise the **Object** *OBJECT NAME* and the [*APPEND LINK*](xref:bimlflex-app-reference-documentation-settings-index) **Setting**.
  * The pattern for the name is as follows:
    * *APPEND LINK* + `{Derived Object Name}` **or** `{Derived Object Name}` + *APPEND LINK*
      * `{Derived Object Name}` = (In order) *MODEL OVERRIDE SHORT NAME* **or** *MODEL OVERRIDE NAME* **or** *OBJECT NAME*

## Link System Column Configuration

* [Load Date Time Stamp](xref:bimlflex-data-vault-best-practices#roweffectivefromdate)
* [Record Source](xref:bimlflex-data-vault-best-practices#record-source)
* [Audit Id](xref:bimlflex-data-vault-best-practices#audit-id)

### Link Settings

Choose a tab below to view relevant setting descriptions or examples for Links.

[!include[Link Metadata Settings List](_settings_link.md)]