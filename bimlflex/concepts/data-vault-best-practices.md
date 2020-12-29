---
uid: bimlflex-data-best-practices
title: BimlFlex Data Vault Best Practices
summary: Documentation for Data Vault best practices within BimlFlex, including settings for hash key and algorithms, integration keys, and data vault entity management
---

# BimlFlex Data Vault Best Practices

## Abstract

This document consolidates and outlines the various Data Vault implementation best practices and explains how to configure BimlFlex to achieve the desired outcomes.

> [!NOTE]
> This document is intended to supplement other, published Data Vault standards.
> Varigence provides a course that combines your preferred Data Vault approach with implementation guides using BimlFlex.

## Data Vault Core Constructs

### Business Model

Before diving into the Data Vault standards and implementation, we recommend creating a high-level model of your business or at least the business area in scope.
A recommended approach is the Business Ontology, as discussed in [The Elephant in the Fridge](https://www.amazon.com.au/Elephant-Fridge-Success-Building-Business-Centered/dp/1634624890) by John Giles, or [Ensemble Logical Model](http://dvstandards.com/) as taught by Genesee Academy.

Create a map, model or diagram of core business concepts and relationships before using the BimlFlex accelerator to transform the source into a Data Vault.
Build a conceptual model based on business processes using business terminology.
Exercise caution, especially the `technical` teams, to not base the model on any existing source system.
At this stage, do not concern yourself with how you will make the source data fit into this model, rather focus on the model and make sure it is an accurate representation of your business.

Mapping source systems to your `Business Entities` can be a challenge.
However, the BimlFlex Accelerator simplifies the process by applying standard Data Vault patterns.

> [!IMPORTANT]
> It is highly recommended to have a `Business Entities` in place before using the `Data Vault Accelerator` for optimal results.

<!-- We are adding additional support to create `Business Models` in an upcoming version of BimlFlex. -->

#### Hash Key

* A [hash](#hash-algorithm) of the [Integration Key](#integration-key-business-key).
* Not a compulsory field for `Data Vault` however currently compulsory in BimlFlex.
  We will support a no hash implementation option in all our ELT (SQL) templates.

#### Hash Algorithm

* Support all major hash algorithms with `SHA1` as the default.
Implement other available options by changing the `HashAlgorithm` setting to one of the following values 
  * `MD5`
  * `SHA1`
  * `SHA2_256`
  * `SHA2_512`.
* Previous SSIS versions of BimlFlex created a different hash for Unicode characters.
  The `UseSqlCompatibleHash` and `UseSqlCompatibleRowHash` settings provides for backward compatibility.
  They should be set to `Y` for new implementations.
* Support for `binary` and `text` hash representation depending on your requirements and can be configured by changing the `HashBinary` setting.
  It is recommended to use binary hashing.
  With Binary hashing the hash value is stored in its native binary form, requiring half the storage space compared to the hexadecimal string representation.
* Performance setting: `AddRowHashKeyIndex` will add an index to the `Staging` table on the `RowHashKey` to optimize the Hub ETL SSIS packages.

#### Hash Collision

When using hash values to represent the value of something else, an alternate key or a row checksum, there is a small risk that two source values generate the same hash value.
This would result in a hash collision.

When two keys hash to the same target hash a potential effect could be that only the first would be loaded to the Data Vault Hub, with the first key value.
Attributes that relate to the second key would be confused and co-located.

Row hashing is used to detect changes in rows, all the attributes are combined into a single hash value, commonly referred to as a `HashDiff`, when that value changes there is a change in one or more of the attributes, when it is the same the rows are the same.
If a collision occur here, the new version of the row (with the new changes) would not be persisted in the target as it would not be identified as a change.

A way to accommodate hash collision risk is to do a reverse hash and combine this with the original hash, which is a configuration option in BimlFlex for the SSIS templates, however this will have an impact on load times.

Another way is to do reconciliation checks in the Target data warehouse.
For targets that don't enforce constraints, such as Synapse and Snowflake, the hash values are inserted in the target regardless of collisions.
BimlFlex can be extended to create custom reconciliation queries to allow reports and analytics on key/hash comparisons.
For targets that do enforce the constraints, the collision will result in a potential hard failure, allowing the scenario to be analyzed and accommodated.
An option for remediation is to increase the hash length, if a collision happens using SHA1, upgrade to use SHA2_256 or SHA2_512 that have longer key length and less risk for hash collisions.

#### Hash Settings

|SettingKey                          |SettingValue           |
|------------------------------------|-----------------------|
| DvUseHashKeys                      | `Y`                   |
| HashBinary                         | `Y`                   |
| HashAlgorithm                      | `SHA1`                |
| UseSqlCompatibleHash               | `Y`                   |
| UseSqlCompatibleRowHash            | `N`                   |
| AddRowHashKeyIndex                 | `Y`                   |  

#### Integration Key (Business Key)

* BimlFlex uses the term `Integration Key` instead of `Business Key` for consistency across different data warehouse project types, including dimensional modeling.
* The scope of the key will determine how you configure the column.
  If the key is scoped per source system it is recommended to append the `RecordSource` to the key ensuring a unique key.
  If the key is globally unique across the enterprise the record `RecordSource` should be omitted.
* A concatenation of the key parts creating a single column for integration and optimize the performance of multi-column joins.
* In an upcoming release will add the `DvAccelerateHubKeys` setting to also include the key parts in the Hub.
* The `FlexToBk` helper method can be used to concatenate keys using a comma-delimited list of columns across supported implementation technologies.
* The global parameter for RecordSource is `@@rs` referring to the originating source system, not source object, of the data can be added to the keys to make IntegrationKeys unique across sources.
* As an example, the metadata expression for the `Customer` will look like this `FlexToBk(@@rs,CustomerID)`
* BimlFlex provides an option to add the `@@rs` to all keys on import `Add Record Source (@@rs) To Integration Key` and on the `Columns` tab for the `Objects` in the app.
* The column name is derived by combing the `Object.ModelOverrideName` if specified otherwise the `Object.ObjectName` and the `AppendIntegrationKey` setting either before or after the name depending on the `SuffixOrPrefixColumn` setting.
* Deriving the value of the concatenated key depends on two settings.
  The `IntegrationKeyNullValue` that is used as a null replacement and the `IntegrationKeyToUpper` to specify if the derived value should be cast to `UPPER CASE` or left in its original case.
  When integrating case sensitive systems, this requires consideration.
* As an example, the above will be implemented as follows `UPPER(COALESCE(CustomerID, 'NVL'))`
* It is recommended to use a wide Unicode String datatype.
  Allow for new sources that might not adhere to the assumed datatype of the Hub Integration key.

#### Integration Key Settings

| SettingKey                         | SettingValue          |
|------------------------------------|-----------------------|
| AppendIntegrationKey               | `BK`                  |
| SuffixOrPrefixColumn               | `P`                   |
| IntegrationKeyNullValue            | `NVL`                 |
| IntegrationKeyToUpper              | `Y`                   |  

## Data Vault Entities

### Hubs

* Consist of a distinct list of [Integration Key](#integration-key-business-key) of the `Core Business Concept`.
* BimlFlex makes use of a concatenated key to simplify implementation and allows for single key integration and is required when choosing a `Data Vault` implementation without using Hash Keys.
* In an upcoming version, there will be an option `DvUseHashKeys`.
  Integrate without a `HASH` which is very efficient for modern data warehouse solutions like [Snowflake](https://www.snowflake.com/) and [Azure Synapse](https://azure.microsoft.com/en-us/services/synapse-analytics/).

> [!IMPORTANT]
> Hubs are the core building block of the Data Vault and should reflect the **Core Business Concept** (CBC).
> The implementation team should identify and map Hubs to the **Business Model** as a priority.

#### Stub Hubs

* A Hub created as a placeholder when a related **CBC** that is not in scope for the current iteration.
* The `InferHub` setting will ensure the `IntegrationKey` are always loaded enabling future expansion.
* There is no `ObjectType` to define a `Stub Hub` as it is just a Hub.

#### Hub Naming Convention

* Prefix or Suffix with one of the following recommendations `HUB`, `H`, `HB`.
* The Hub name will be derived by combing the `Object.ModelOverrideName` if specified otherwise the `Object.ObjectName` and the `DvAppendHub` Setting.

### Hub System Column Configuration

* [Load Date Time Stamp](#load-date-time-stamp)
* [Record Source](#record-source)
* [Audit Id](#audit-id)

### Links

* Distinct or Unique set of relationships between the involved Hubs.
* Links are many to many relationships.
* Two or more Hubs are required to build a Link, except the Hierarchy and Same-As Links which are self-referencing and the accelerator will generate a two way Link for every reference when the `ModelObjectType` is defined as a `Hub`
* Combining multiple Links in the accelerator can be achieved by dragging one on top of another and entering the new Link name.
* The accelerator will generate a Link with all reference columns when the `ModelObjectType` is defined as a `Link`.
* Links similar to Hubs do not have a start and end date attributes and relationship effectivity should be tracked in a Satellite referred to as a `Link Satellite`.

#### Link Key Columns

* The `Link Primary Key` is a `hash` of the concatenated `Integration Keys` of all participating `Hubs`.
  The order of the participating hub determines the concatenation order.
  Changing the order or re-acceleration may create a different hash.
* The Link Unique Key is the hash key of all participating hubs.
* The key column names will inherit the source column name removing the key suffix specified in the list `KeyEndsWith` setting.
  This setting can be altered if your system suffix keys with a different value like `NM`,`CD`, etc.
  The result is stored in the `ModelReference` and can be altered if required.
  This provides flexibility when a Link reference the same Hub twice and therefore will need roleplaying names.

#### Hierarchical Link

* A `Link` that is used to specify a recursive or hierarchy relationship
* Specifying a ModelObjectType of Hierarchy Link (HAL) on the source object is provided for, however, the result is a Link as there is no functional or structural difference.

#### Same-As Link

* A `Link` is used to specify a relationship between similar or the same Hub members.
* Specifying a ModelObjectType of Same-As Link (SAL) on the source object is provided for, however, the result is a Link as there is no functional or structural difference.
* Additional matching attributes that describe the relationship like similarity and matching confidence should be stored in an attached Link Satellite.

#### Non-Historized or Transaction Links

* A `Link` containing immutable data that is never updated or changed.
  Along with the key columns referencing Hubs, it can include additional association or degenerate keys.
* It is recommended not to have Effectivity Link Satellites for this type of Link as they do not change over time.

> [!NOTE]
> BimlFlex handles all links the same from a model acceleration and automation perspective.

#### Link Naming Convention

* Prefix or Suffix with one of the following recommendations `LNK`, `L`, `LINK`.
* Links can be accelerated from multiple `ModelObjectTypes` and can be placed into two categories.
* **1. Model Object Type** `Hub`
  * The Link name will be derived by combing the `Object.ModelOverrideShortName` or `Object.ModelOverrideName` if specified otherwise the `Object.ObjectName` and the `DvAppendLink` setting.
  * This is best explained with an example.
    Let's say we imported a table called `GeneralLedger` that has a relationship to `ChartOfAccounts` and the `DvAppendLink` setting is `L`.
    The default name for the Link will be `L_GeneralLedger_ChartOfAccounts`.
    Link names can get quite long so the `Object.ModelOverrideShortName` can be used to shorten the left-hand portion of the name.
    If we change this to `GL` the name will now be `L_GL_ChartOfAccounts` and can e even further shortened by changing the `ModelReference` of relationship column.
    If we also change this to `COA` the will now be `L_GL_COA`.
  * The pattern for the name is as follows `DvAppendLinkDerivedObjectNameModelReference` *or* `DerivedObjectNameModelReferenceDvAppendLink`
* **2. Model Object Type** `Link` **-** `Hierarchy Link` **-** `Same As Link`
  * The Link name will be derived by combing the `Object.ModelOverrideName` if specified otherwise the `Object.ObjectName` and the `DvAppendLink` setting.
  * The pattern for the name is as follows `DvAppendLinkDerivedObjectName` *or* `DerivedObjectNameDvAppendLink`

### Link System Column Configuration

* [Load Date Time Stamp](#load-date-time-stamp)
* [Record Source](#record-source)
* [Audit Id](#audit-id)

### Satellites

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

#### Business Satellites

A Business Vault Satellite may contain system generated, or aggregated, attributes as a result of soft rule calculations.

#### Multi-Active Satellite

A Satellite where multiple active records are possible for a `Hub` or `Link` at any given point in time.

##### Row Based Multi-Activeness

* Changes are tracked based on the key of the `Hub` or `Link` and the `Multi Active Row` column.
* The column that makes the data unique.
  Update the `ChangeType` to `Multi Active Row` and set the `IsPrimaryKey` to true for the column.
* `Multi Active Row` column must be immutable and cannot be changed in the source.
* An example is an entity with multiple active types, like a customer with addresses like `Home`, `Shipping` and `Billing`
* When there is a known set of multi-active types, it is recommended to model these into separate satellites.

##### Set Based Multi-Activeness

* Changes are tracked based on a set of changes based on a defined `Multi Active Set` column.
* Used when data are provided in sets, like multiple files.
    An example is an entity with a set of children, and every new set supersedes the previous.

#### Link Effectivity Satellite

* Track effectivity of a Link based on the `Driving Key`.

### Satellite System Column Configuration

* [Load Date Time Stamp](#load-date-time-stamp)
* [Record Source](#record-source)
* [Audit Id](#audit-id)

### Reference Tables

Reference Tables Reference tables are a logical collection of code and description lookup structures.
They utilize natural business keys and are constructed from standard Hub, Link, and Satellite entities.
Resolution occurs through queries at run time.
They do not a house nor require foreign keys.
In general, the codes (natural keys) are found housed in the Satellites as they typically describe other keys or other relationships.

### Point in Time

`Point in Time` and `Bridge` Tables is a System Driven Satellite.
It is comprised of primary key values and business key values from a single Hub, and that Hubs' surrounding Satellites.
It may also be comprised of a single Link and that Links' surrounding Satellites.
It is a snapshot table populated with snapshot-based records of keys and key structures.
It provides equal-join capacities to view based Dimensions and view based Facts.
It is built for the performance of the queries in getting data out of the Raw Data Vault.
They are based on the principles of Join Indexes as written by Teradata, only the point-in-time structures can be implemented on ANY platform.
Because Point-in-Time tables live within the Information Mart logical construct they can also, house computed fields, or additional temporality (such as begin and end dates that have been computed for business purposes).
The Bridge Table is a combination of primary keys and business keys spread across multiple Hubs and Links.
They can be thought of as "base level Fact Tables".
They provide a snapshot of key structures and are generally not temporal in nature.
That said, because Bridge Tables live within the Information Mart logical construct, they can also house computed fields, or temporality.

### Bridge

Sequence ID Date Stamps Load Date Time Stamps Occurrence Numbers Sub Sequence Hash Keys L, LINK, LNK STG SAL, SALNK, SLNK B, BRDG, BRG BL, BLNK, BLINK V VF,
VFCT D, DIM SQN, SEQ DS, DT LDTS, LDDTS, LDTM OCC, OCNUM, ONUM SSQN, SSQ, SUBSQN, HK, HashKey, HKEY Entity Type Prefix or Suffix Hub H, HUB, HB Satellite S, SAT
Hierarchical Links HL, HLNK, HLINK Point-in-Time PIT, PT Business Hub BH, BHUB Business Satellite BS, BSAT, BST View Dimension VDIM, VD Fact FCT, FACT, F
Report Collection RPT, RC

## Data Vault System Columns

* BimlFlex implements all system columns using `Configurations` and a matrix allowing users options for granular configuration.
* It is possible to override the global configuration for specific projects or objects using `Custom Attributes`.

### Load Date Time Stamp

* ConfigurationKey `RowEffectiveFromDate`.
  The `ConfigurationValue` can be renamed based on your naming conventions.
* This is optional, but recommended value if supported by your target platform.
* Not part of the Hub primary key.
* The default name is `FlexRowEffectiveFromDate` and the recommended name is `DWH_LOAD_DT` changed to conform to your naming standards.

### Record Source

* ConfigurationKey `RowRecordSource`.
  The `ConfigurationValue` can be renamed based on your naming conventions.
* Use the `RecordSource` value defined on the source connection.
* The default name is `FlexRowRecordSource` and the recommended name is `DWH_RSRC` changed to conform to your naming standards.
<!-- * TODO Add Setting Override to implement a fully qualified object name. -->

### Audit Id

* ConfigurationKey `RowAuditId`.
  The ConfigurationValue can be renamed based on your naming conventions.
