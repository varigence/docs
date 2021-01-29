---
uid: bimlflex-getting-started-building-integration-keys-for-data-vault
title: Building Integration Keys for Data Vault
summary: Documentation on defining integration keys in a data vault, with detailed steps for getting started
product: BimlFlex
type: Walkthrough
---
# Building Integration Keys for Data Vault

The Integration Key is the core information bearer in the Data Vault. It should ideally be an Enterprise Wide Business Key and directly map the same content across source systems. As that is rarely the case, special consideration is required to craft these Integration Keys from the contents of different source systems.

Integration Keys have a few predefined rules in BimlFlex:

* Integration Keys are always stored as a Unicode String. The default length is 100 characters but can be expanded when needed
* Integration Keys are always a concatenated representation of all relevant columns. The default concatenator character is `~`
* Integration Keys are Upper Cased by default. As the Integration Key is hashed and the default SQL Server database settings are for case insensitive databases this is a requirement to be able to accommodate the same key with different casings.
* All columns that are part of the Integration Key are by default accelerated and stored in unaltered form in a Satellite.

By using the `FlexToBk()` function it is possible to create the Integration Key from any source columns. The function allows using the `@@rs` shortcut to inject the current connections Record Source code in the Integration Key. This allows for easy differentiation between the same key value with different meanings from multiple sources.

The BimlFlex App provides an `Integration Key` button that will generate an Integration Key column from the selected source columns and add it to the metadata. It can optionally add the `@@rs` shortcut code and set the created key to the main Integration Key and Primary Key of the table.

For the getting started process, the Primary Keys of the source tables are used for most Integration Keys. As they are sequence keys (identity columns in the source) the record source code is added through the `@@rs` shortcut. For other sources where there are codes that can be used directly as Integration Keys, it is possible to just apply the `FlexToBk()` function. This is exemplified by the Culture entity.

> [!NOTE]
> Note that the Integration Keys have already been created as part of the previous steps. This page only highlights the required steps and the design process to create them. It also allows a review of the Keys before the creation of the Data Vault layer.

## Detailed Steps

The following steps walk through how to review the Integration Keys used in the getting started process.

### Open Metadata in BimlFlex App

Open the BimlFlex App

### Review already generated Integration Keys

The Import Metadata wizard created Integration Keys from the Primary Keys of the source.

Review the Objects page and the existing Integration keys to make sure they match. Apply the `@@rs` short-code to any Integration Key still missing it. Note that the derived Culture Integration Key does not use the `@@rs` code.
