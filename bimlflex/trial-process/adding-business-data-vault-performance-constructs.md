---
uid: bimlflex-trial-adding-business-data-vault-performance-constructs
title: Adding Business Data Vault Performance Constructs
---
# Adding Business Data Vault Performance Constructs

## Supporting Videos

TODO: Coming Soon

## Supporting BimlFlex Documentation

- [Data Mart Templates](../user-guide/data-mart-templates.md)

## Adding Business Data Vault performance constructs

The `Point in Time` and `Bridge` structures are used in Data Vault to make the Data Vault easier to query and to improve query performance.

For insert-only Data Vault solutions, the Point in Time (PIT) tables provides a convenient way to recreate timelines and end date records so that timeline-sensitive queries are easier to create.

The Bridge (BRG) constructs allows multiple Links surrounding a Hub to be combined in one table, minimizing the required joins.

- Point in Time, PIT, tables are used to create timelines for all changes in all or some Satellites attached to a business entity in a Hub
- Bridge tables are used to link business entities in Hubs through their link tables into easy to query constructs

BimlFlex implements these artefacts using tables for storage, Stored Procedures for loading and SSIS packages for orchestration.

The PIT and Bridge objects are created in the attributes sheet in the Excel metadata editor.

## Detailed Steps

The following detailed steps walks through adding Business Data Vault performance constructs

### Adding Point in Time table metadata

Use the attributes sheet to add the required metadata for a PIT object. Add the following to add a PIT Table for the Product Hub and all its surrounding Satellites

| Project | Batch | Connection | Object            | ColumnName | AttributeKey | AttributeValue |
| ------- | ----- | ---------- | ------            | ---------- | ------------ | -------------- |
|         |       | `BFX_RDV`  | `rdv.HUB_Product` |            | `CreatePIT`  | `PIT_Product`  |

For a PIT definition where only the Hub is included, BimlFlex will automatically include all surrounding Satellites in the current metadata set. For scenarios where only a subset of the Satellites are to be included, add additional rows for each Satellite with the same Attribute Key (`CreatePIT`) and Attribute Value (the name of the PIT table).

| Project | Batch | Connection | Object            | ColumnName | AttributeKey | AttributeValue |
| ------- | ----- | ---------- | ------            | ---------- | ------------ | -------------- |
|         |       | `BFX_RDV`  | `rdv.HUB_Product` |            | `CreatePIT`  | `PIT_Product`  |
|         |       | `BFX_RDV`  | `rdv.SAT_Product_AWLT` |            | `CreatePIT`  | `PIT_Product`  |
|         |       | `BFX_RDV`  | `rdv.SAT_Product_Price_AWLT` |            | `CreatePIT`  | `PIT_Product`  |

The sample above would need to reflect actual satellites to produce the expected PIT table. In this case the SalesLT.Product source table has been split in to two Satellites by applying the `Price` name in the `ModelGrouping` column for the `StandardCost` and `ListPrice` source columns. This allows the more rapidly changing price attributes to be stored in a separate Satellite. This PIT construct allows easy querying across them.

### Adding Bridge table Metadata

Use the attributes sheet to add the required metadata for a BRG object. The Bridge construct has additional values in the Attribute Property column. This specifies the origin Hub for the Link and also if it should include the keys from these Hubs.

| Project | Batch | Connection | Object            | ColumnName | AttributeKey | AttributeValue | AttributeProperty |
| ------- | ----- | ---------- | ------            | ---------- | ------------ | -------------- | ------------------|
|         |       | `BFX_RDV`  | `rdv.HUB_Product` |            | `CreateBridge`  | `BRG_Product` | `IsPrimaryHub,AddKey` |
|         |       | `BFX_RDV`  | `rdv.HUB_ProductCategory` |            | `CreateBridge`  | `BRG_Product` | `AddKey` |
|         |       | `BFX_RDV`  | `rdv.HUB_ProductModel` |            | `CreateBridge`  | `BRG_Product` | `AddKey` |
|         |       | `BFX_RDV`  | `rdv.LNK_Product_ProductCategory` |            | `CreateBridge`  | `BRG_Product` | |
|         |       | `BFX_RDV`  | `rdv.LNK_Product_ProductModel` |            | `CreateBridge`  | `BRG_Product` | |

The current BimlFlex Bridge implementation allows the Bridge to start from the most granular Hub. The Bridge table has a unique constraint on the main Hub Business Key. This allows easy management of the Bridge granularity and enforces a single row filter on the starting point of the Bridge. It also means the Hub that is defined as `IsPrimaryHub` needs to be the most granular in the resulting Bridge table.

The created `BRG_Product` Bridge table allows querying the Product information and its Category and Model information through a single table compared to the 5 table join necessary when querying the Hub and Link tables.

> ![NOTE]
> Note that the Bridge table needs to be joined to any Link Satellites tracking effectiveness of relationships as well as any relevant Satellite to provide effectiveness and validity contexts for the query.
> More information on interpreting the BRG and PIT constructs are available here: @bimlflex-dimensional-model-from-data-vault

### Building PIT and BRG Tables

Once the attributes sheet is populated with the required metadata, the PIT and BRG objects will be added by BimlFlex to the Objects sheet. Click the `Get All Entities` button to reload the metadata and review the objects in the Objects sheet.

The PIT and BRG Tables are included in the `Generate Scripts` function in BimlFlex. They are also included in the generated SSDT project for the Data Vault database.

### Creating PIT and BRG Stored Procedures

Use the `Generate Scripts`, `Business Vault Procedure Script` option in BimlStudio to create the DDL for the PIT and BRG procedures. They are also included in the generated SSDT project for the Data Vault database.

These stored procedures needs to be created in the Data Vault database.

### Building the PIT and BRG load packages

Once the metadata for the PIT and BRG objects is available in BimlStudio there are also Batches generated for executing the PIT and BRG stored procedures. These batches are included in the Data Vault project and allows easy scheduling and orchestration of the Stored Procedure execution.