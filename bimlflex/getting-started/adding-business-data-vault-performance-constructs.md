---
uid: bimlflex-getting-started-adding-business-data-vault-performance-constructs
title: Adding the Business Data Vault Model
---
# Adding the Business Data Vault Model

![Business Data Vault Model -center](https://www.youtube.com/watch?v=JZT8rDBMhmI?rel=0&autoplay=0 "Business Data Vault Model")

The `Point in Time` (PIT) and `Bridge` (BRG) structures are used in Data Vault to make the Data Vault easier to query and to improve query performance.

* Point in Time, PIT, tables are used to create timelines for all changes in all or some Satellites attached to a business entity in a Hub
* Bridge, BRG, tables are used to link business entities in Hubs, through their link tables, into easy to query constructs

## Point in Time introduction

For insert-only Data Vault solutions, the Point in Time constructs provide a convenient way to recreate timelines and end date records so that timeline-sensitive queries are easier to create. This is useful when a Hub has multiple Satellites attached and there is a requirement to query data from several of these Satellites for an event DateTime.

> [!NOTE]
> Example:
> A Sales Order has a sale event DateTime when the sale occurred. The customer involved is identified through a link between the SalesOrder Hub and the Customer Hub. The Customer has a Satellite with demographic information as well as Satellites for marketing and promotions data, geographic/address information and loyalty status. All these satellites have individual timelines and finding the relevant rows from each table for the sale event time can require a complex query. The Point In Time table would pre-calculate these timelines so that the query becomes more straightforward.

## Bridge introduction

The Bridge constructs allow multiple Links surrounding a Hub to be combined in one table, minimizing the required joins.

> [!NOTE]
> Example:
> A Sales Order Core Business Concept is stored in a Hub. This has several separate Link table relationships to Hubs for Customer, Shipping Address, Billing Address, Product, Marketing Campaign, Store etc. A query to gather attributes from multiple attached Satellites from the linked entities would need to join from the main Hub to the Links to the related Hubs to Satellites or Point In Time tables for each related entity. This rapidly becomes a large number of joins. The Bridge table pre-calculate the joins and allows for more straightforward queries.

BimlFlex implements these artifacts using tables for data storage, Stored Procedures for loading and SSIS packages for orchestration.

The PIT and Bridge objects are created in the BimlFlex App using Hub objects as the starting point. From the BimlFlex App, navigate to a Hub that is going to be used as a starting point. Click the `Create PIT` or `Create Bridge` buttons to show the creation dialog.

Once the PIT and BRG artifacts are created they are visible in the objects list and their tables, load stored procedures and SSIS orchestration packages can be created in BimlStudio.

## Building PIT and BRG Tables

The PIT and BRG Tables are included in the `Generate Scripts` function in BimlFlex. They are also included in the generated SSDT project for the Data Vault database.

Configure the `Script Options` in BimlStudio to only create the Object Types for BRG and PIT. Save choice by clicking Commit. This allows the creation of only the table scripts for the BRG and PIT tables in the Generate Scripts function.

Run the table create script in SQL Server Management Studio to create the new BRG and PIT tables.

## Adding Default Values Hub records

BimlFlex will use a null default value placeholder for PIT and BRG entities with no corresponding Data Vault entity record, allowing for inner joins in more scenarios.

Scrips for these placeholder records are created through the `Generate Script`, `Data Vault Default Insert Script`. This will generate SQL insert scripts for all relevant entities. Deploy these to the Data Vault database to simplify the required queries.

The script is also part of the SSDT Database project for the RDV database, in the form of a Post Deployment script.

Run the placeholder create script in SQL Server Management Studio to create the placeholder values.

## Creating PIT and BRG Stored Procedures

Use the `Generate Scripts`, `Business Vault Procedure Script` option in BimlStudio to create the scripts for the PIT and BRG procedures.

They are also included in the generated SSDT project for the Data Vault database.

These stored procedures need to be created in the Data Vault database.

## Building the PIT and BRG load packages

Once the metadata for the PIT and BRG objects has been loaded in BimlStudio there will be Batches generated for executing the PIT and BRG stored procedures.

The default name for these are built out of the Data Vault load name with either PIT or BRG added, in the trial demo case the following Batch packages are added to the Load Data Vault SSIS project:

* `LOAD_BFX_RDV_BRG_Batch`
* `LOAD_BFX_RDV_PIT_Batch`

These batches allow easy scheduling and orchestration of the Stored Procedure execution through SSIS.
