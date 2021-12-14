---
uid: bimlflex-data-vault-concept-satellite
title: Data Vault Satellites
summary: Overview of Data Vault Satellites
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Satellites

Satellites in Data Vault are the `Context` entities, that provide descriptive information (properties, attributes) for [Core Business Concepts](xref:bimlflex-data-vault-concept-hub) and [Natural Business Relationships](xref:bimlflex-data-vault-concept-link).

A Satellite is connected to either a Hub or a Link and maintain descriptive information about the Hub or Link. Satellites are the bearer of all descriptive attributes, context information and time-slice history in the Data Vault model.

An example is the effectiveness of a relationship, when a link is created from a relationship between two entities in the source it will create two Hub rows and a Link row (if some of the Hub records already exist those existing rows will be reused). The Link Satellite tracking effectiveness will have a row added that describes when the event was first discovered from the source. Should the source remove the relationship, the Link Satellite will be closed off by adding a new row with a deleted indicator describing the delete event.

Another example is the management of descriptive attributes. For a Product stored in the Product Hub there will be Satellites storing the information about the Product. Should the List Price be changed in the source, the Satellite will have another row added with this new data and the old record for the old price will be kept in its separate row. If End Dating is used then the old row will be end dated.

## Implementation of the Satellite concept in BimlFlex

Data Vault Satellites:

* Satellites contain all descriptive information and deltas, tracking change over time.
* Satellites are always directly related to a `Hub` or a `Link`.
* Multiple satellites can point to one `Hub` or `Link` based on be multiple sources or split by the rate of change or subject area.
* Satellites can only be attached to a single parent either a `Hub` or `Link`.
* Satellite Split or Merge Actions.
  A Satellite may be split or merged at any time, as long as **no historical value** is lost, and **no historical audit trail** is lost.
  See the Data Vault Implementation Standards for rules and processes around how-to execute a split or merge.
  For BimlFlex implementations that use a Persistent Staging area, the ability to reload a satellite after a split or merge allows for agile remodeling as needed.
* Sub-Sequence (Optional).
  A Satellite may contain a sub-sequence identifier or and ordering identifier as part of the primary key for uniqueness.
  Sub-sequence can be a microsecond counter added to the EffectiveFromDate, or an ordering attribute (as in the case of a multi-active Satellite record)

Satellites can be attached to either a Hub or a Link, to differentiate the Satellites attached to Links are called Link Satellites and prefixed with LSAT compared to Hub Satellites that uses SAT.

The Satellite concept is the same for both entity types. The columns and load patterns are the same. They both track changes over time. The common use for the Hub Satellite is to track descriptive attributes and their changes over time and the effectiveness of the Hub. When a Product gets deleted from the source system it will not be removed from the Hub, it will have a row in the Satellite added, indicating that the status of the Product is now deleted.

Link Satellites most common use case is to track effectiveness of the relationship. The Link Satellite can also have attributes.

The source data for the sample model contains descriptive attributes for both Product and Product Category. There are no descriptive attributes for the Link relationships so the Link Satellites will only track effectiveness of the relationships.

Acceleration of Link Satellites is a configurable Setting in BimlFlex.

The required Source Object metadata is already in the metadata model, the Satellites attributes are read from the same source as the Hub. The destination Satellite tables/entities are added by adding the names and setting the Object Type to Satellite or Link Satellite

The default naming convention uses the same name for the Satellite as the Hub or Link it is attached to with an additional suffix indicating the source system. It is recommended to use a consistent naming convention for all artifacts. The suffix naming suggests that additional Satellites can be added to the Hubs from other sources. The BimlFlex Accelerator uses the Record Source from the Connection as the default Suffix.

Only under specific circumstances is it recommended to load data into the same Satellite from multiple different sources and even then it is always possible to still load to separate destinations. The Data Vault model supports an unlimited number of Satellites attached to Hubs and Links, this should be embraced in the modeling so that the agility and flexibility to integrate changes and new sources are maximized.

Naming conventions, Attribute Splitting, exclusions and Suffix inclusion are all configurable from the Accelerator and in the Source Metadata

## Driving Keys

Data Vault Links represent many to many relationships. Any Hub entity in Data Vault can therefore have multiple active relationships to other entities through Links.

If there is a Foreign Key relationship between two entities in the source, or if there is application logic that manages opening and closing of relationships in mapping tables, that same behavior might need to be maintained in the Data Vault.

Driving Keys are documented in more detail here: [Data Vault Driving Keys](xref:bimlflex-data-vault-driving-keys)

## Multi Active Satellites

Multi Active Satellites are satellites with an additional key attribute meaning multiple versions/groups of the Satellite can be active/valid at a given time. This is used when there are no other straightforward ways to model a situation with multiple active records at the same time.

BimlFlex support Multi Active Columns that indicate multiple rows are active at the same time and Multi Active Sets that indicate sets of rows being active at the same time.

Multi Active Satellites are created by adding a Multi Active Key to the Satellite definition. Set the Change Type of the column to Multi-Active Key and set the column as primary Key together with the Integration Key.

Multi Active Satellites break the formal Data Vault design and modeling pattern and it is recommended to use the default patterns if possible. An extra Hub roleplaying the Multi Active attribute can possibly be added to the UOW/Link to implement a similar behavior.

For sources that have multiple changes to the same row at the same time it is easier to define the order and override the `RowEffectiveFromDate` value to reflect that order instead of implementing Multi Activeness.

## Business Satellites

A Business Vault Satellite may contain system generated, or aggregated, attributes as a result of soft rule calculations.

## Multi-Active Satellite

A Satellite where multiple active records are possible for a `Hub` or `Link` at any given point in time.

### Row Based Multi-Activeness

* Changes are tracked based on the key of the `Hub` or `Link` and the `Multi Active Row` column.
* The column that makes the data unique.
  Update the *CHANGE TYPE* to `Multi Active Row` and set the *PRIMARY KEY* to `true` for the column.
* `Multi Active Row` **Column** must be immutable and cannot be changed in the source.
* An example is an entity with multiple active types, like a customer with addresses like `Home`, `Shipping` and `Billing`
* When there is a known set of multi-active types, it is recommended to model these into separate satellites.

### Set Based Multi-Activeness

* Changes are tracked based on a set of changes based on a defined `Multi Active Set` column.
* Used when data are provided in sets, like multiple files.
    An example is an entity with a set of children, and every new set supersedes the previous.

## Link Effectivity Satellite

* Track effectivity of a Link based on the **Driving Key**.
* A **Driving Key** is indicated in BimlFlex by setting the **Column** *CHANGE TYPE* on

> [!TIP]
> For additional details on **Driving Keys** refer to the below articles:
>
> * BimlFlex Docs: [Data Vault Driving Keys](xref:bimlflex-data-vault-driving-keys)

## Satellite System Column Configuration

* [Load Date Time Stamp](xref:bimlflex-data-vault-best-practices#roweffectivefromdate)
* [Record Source](xref:bimlflex-data-vault-best-practices#record-source)
* [Audit Id](xref:bimlflex-data-vault-best-practices#audit-id)

### Satellite Settings

Choose a tab below to view relevant setting descriptions or examples for Links.

[!include[Satellite Metadata Settings List](_settings_satellite.md)]
