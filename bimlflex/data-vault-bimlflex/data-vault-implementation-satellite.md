---
uid: bimlflex-data-vault-implementation-satellite
title: Data Vault Satellites
summary: Overview of Data Vault Satellites
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Data Vault Satellites in BimlFlex

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

* [Load Date Time Stamp](xref:bimlflex-data-vault-best-practices#load-date-time-stamp)
* [Record Source](xref:bimlflex-data-vault-best-practices#record-source)
* [Audit Id](xref:bimlflex-data-vault-best-practices#audit-id)

### Satellite Settings

Choose a tab below to view relevant setting descriptions or examples for Links.

[!include[Satellite Metadata Settings List](_settings_satellite.md)]
