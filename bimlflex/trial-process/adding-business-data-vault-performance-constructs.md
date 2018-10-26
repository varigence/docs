---
uid: bimlflex-trial-adding-business-data-vault-performance-constructs
title: Adding Business Data Vault Performance Constructs
---
# Adding Business Data Vault Performance Constructs

## Supporting Videos

![Adding Business Data Vault Performance Constructs cCenter](https://www.youtube.com/watch?v=   ?rel=0&autoplay=0 "Adding Business Data Vault Performance Constructs")

## Supporting BimlFlex Documentation

* @bimlflex-data-mart-templates

## Adding Business Data Vault performance constructs

The `Point in Time` (PIT) and `Bridge` (BRG) structures are used in Data Vault to make the Data Vault easier to query and to improve query performance.

For insert-only Data Vault solutions, the Point in Time constructs provides a convenient way to recreate timelines and end date records so that timeline-sensitive queries are easier to create. This is useful when a Hub has multiple Satellites attached and there is a requirement to query data from several of these Satellites for an event datetime.

> [!NOTE]
> Example:
> A Sales Order has a sale event date time, when the sale occurred. The customer involved is identified through a link to the Customer Hub. The Customer has a Satellite with demographic information as well as Satellites for marketing and promotions, geographic/address information and loyalty status. All these satellites would have individual timelines and finding the relevant rows from each table for the sale event time can result in a complex query. The Point In Time table would pre-calculate these time lines so that the query becomes more straightforward.

The Bridge constructs allows multiple Links surrounding a Hub to be combined in one table, minimizing the required joins.

* Point in Time, PIT, tables are used to create timelines for all changes in all or some Satellites attached to a business entity in a Hub
* Bridge, BRG, tables are used to link business entities in Hubs, through their link tables, into easy to query constructs

> [!NOTE]
> Example:
> A Sales Order Core Business Concept is stored in a Hub. This has several separate Link table relationships to Customer, Shipping Address, Billing Address, Product, Marketing Campaign, Store Hubs etc. A query to gather attributes from multiple attached Satellites from the linked entities would need to join from main Hub to Link to related Hub to Satellite or Point In Time table for each related entity. This rapidly becomes a large number of joins. The Bridge table pre-calculate the joins and allows for more straightforward queries.

BimlFlex implements these artefacts using tables for data storage, Stored Procedures for loading and SSIS packages for orchestration.

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

In the trial process the `SalesLT.Product` source table has been split into three Satellites by applying the `Price` and `Thumbnail` names in the `ModelGrouping` column for the relevant source columns. This allows the more rapidly changing price attributes and the larger Thumbnail data to be stored in separate Satellites. This PIT construct allows easy querying across the included Satellites.

For the trial process, apply single row PIT attribute entries for the Product and Customer entities:

| Project | Batch | Connection | Object             | ColumnName | AttributeKey | AttributeValue |
| ------- | ----- | ---------- | ------------------ | ---------- | ------------ | -------------- |
|         |       | `BFX_RDV`  | `rdv.HUB_Customer` |            | `CreatePIT`  | `PIT_Customer` |
|         |       | `BFX_RDV`  | `rdv.HUB_Product`  |            | `CreatePIT`  | `PIT_Product`  |

### Adding Bridge table Metadata

Use the attributes sheet to add the required metadata for a BRG object. The Bridge construct has additional values in the Attribute Property column. This specifies the origin Hub for the Link and also if it should include the keys from these Hubs.

In the trial process, Bridge tables are added for the Product and the Sales Order entities:

| Project | Batch | Connection | Object                              | ColumnName | AttributeKey   | AttributeValue   | AttributeProperty |
| ------- | ----- | ---------- | ----------------------------------- | ---------- | -------------- | ---------------- | ------------------|
|         |       | `BFX_RDV`  | `rdv.HUB_Product`                   |            | `CreateBridge` | `BRG_Product`    | `IsPrimaryHub,AddKey` |
|         |       | `BFX_RDV`  | `rdv.HUB_ProductCategory`           |            | `CreateBridge` | `BRG_Product`    | `AddKey` |
|         |       | `BFX_RDV`  | `rdv.HUB_ProductModel`              |            | `CreateBridge` | `BRG_Product`    | `AddKey` |
|         |       | `BFX_RDV`  | `rdv.LNK_Product_ProductCategory`   |            | `CreateBridge` | `BRG_Product`    | |
|         |       | `BFX_RDV`  | `rdv.LNK_Product_ProductModel`      |            | `CreateBridge` | `BRG_Product`    | |
|         |       | `BFX_RDV`  | `rdv.HUB_Address`                   |            | `CreateBridge` | `BRG_SalesOrder` | `AddKey` |
|         |       | `BFX_RDV`  | `rdv.HUB_Customer`                  |            | `CreateBridge` | `BRG_SalesOrder` | `AddKey` |
|         |       | `BFX_RDV`  | `rdv.HUB_SalesOrder`                |            | `CreateBridge` | `BRG_SalesOrder` | `IsPrimaryHub,AddKey` |
|         |       | `BFX_RDV`  | `rdv.HUB_SalesOrderLine`            |            | `CreateBridge` | `BRG_SalesOrder` | `AddKey` |
|         |       | `BFX_RDV`  | `rdv.LNK_SalesOrder_BillToAddress`  |            | `CreateBridge` | `BRG_SalesOrder` | |
|         |       | `BFX_RDV`  | `rdv.LNK_SalesOrder_Customer`       |            | `CreateBridge` | `BRG_SalesOrder` | |
|         |       | `BFX_RDV`  | `rdv.LNK_SalesOrder_ShipToAddress`  |            | `CreateBridge` | `BRG_SalesOrder` | |
|         |       | `BFX_RDV`  | `rdv.LNK_SalesOrderLine_SalesOrder` |            | `CreateBridge` | `BRG_SalesOrder` | |

The created `BRG_Product` Bridge table allows querying the Product information and its Category and Model information through a single table compared to the 5 table join necessary when querying the Hub and Link tables.

> ![NOTE]
> Note that the Bridge table needs to be joined to any Link Satellites tracking effectiveness of relationships as well as any relevant Satellite to provide effectiveness and validity contexts for the query.
> More information on interpreting the BRG and PIT constructs are available here: @bimlflex-dimensional-model-from-data-vault

The metadata for the trial process should now include 2 Bridge tables and 2 Point In Time tables.

### Building PIT and BRG Tables

Once the attributes sheet is populated with the required metadata, the PIT and BRG objects will be added by BimlFlex to the Objects sheet. Click the `Get All Entities` button to reload the metadata and review the objects in the Objects sheet.

The PIT and BRG Tables are included in the `Generate Scripts` function in BimlFlex. They are also included in the generated SSDT project for the Data Vault database.

Configure the `Script Options` in BimlStudio to only create the Object Types for BRG and PIT. save choice by clicking Commit. This allows the creation of only the table scripts for the BRG and PIT tables in the Generate Scripts function.

Run the table create script in SQL Server Management Studio to create the new BRG and PIT tables.

### Adding Default Values Hub records

BimlFlex will use a null default value placeholder for PIT and BRG entities with no corresponding Data Vault entity record, allowing for inner joins in more scenarios.

Scrips for these placeholder records are created through the `Generate Script`, `Data Vault Default Insert Script`. This will generate SQL insert scripts for all relevant entities. Deploy these to the Data Vault database to simplify the required queries.

The script is also part of the SSDT Database project for the RDV database, in the form of a Post Deployment script.

Run the placeholder create script in SQL Server Management Studio to create the placeholder values.

### Creating PIT and BRG Stored Procedures

Use the `Generate Scripts`, `Business Vault Procedure Script` option in BimlStudio to create the scripts for the PIT and BRG procedures.

They are also included in the generated SSDT project for the Data Vault database.

These stored procedures needs to be created in the Data Vault database.

At the end of the generated SQL script there are execute statements included. It is possible to populate the Bridge and Point In Time tables by either running these Stored Procedures directly, or by generating and running the SSIS packages for them as described below.

Run the Stored Procedure create script in SQL Server Management Studio to create the BRG and PIT Stored Procedures.

### Building the PIT and BRG load packages

Once the metadata for the PIT and BRG objects is available in BimlStudio there are also Batches generated for executing the PIT and BRG stored procedures.

The default name for these are built out of the Data Vault load name with either PIT or BRG added, in the trial demo case the following Batch packages are added to the Load Data Vault SSIS project:

* `LOAD_BFX_RDV_BRG_Batch`
* `LOAD_BFX_RDV_PIT_Batch`

These batches allow easy scheduling and orchestration of the Stored Procedure execution through SSIS.