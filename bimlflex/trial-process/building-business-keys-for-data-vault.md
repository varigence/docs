# Building Business Keys for Data Vault

## Supporting Videos

TODO: Coming Soon

## Supporting BimlFlex Documentation

@bimlflex-user-guide

## Business Keys in Data Vault

The Business Key is the core information bearer in the Data Vault. It should ideally be an Enterprise Wide Business Key and directly map the same content across source systems. As that is rarely the case, special considerations are required to craft these Business Keys from the contents of different source systems.

Business Keys have a few predefined rules in BimlFlex:

- Business Keys are always stored as a Unicode String. The default length is 100 characters but can be expanded when needed
- Business Keys are always a concatenated representation of all relevant columns. The default concatenator character is `~`
- Business Keys are Upper Cased by default. As the Business Key is hashed and the SQL Server default database settings are for case insensitive databases this is a requirement to be able to accommodate the same key with different casings.
- All columns that are part of the Business Key are by default accelerated and stored in unaltered form and data type in a Satellite.

By using the `FlexToBk()` function it is possible to create the Business Key from any source columns. The function allows using the `@@rs` shortcut to inject the current connections Record Source code in the Business Key. This allows for easy differentiation between the same key value with different meaning from multiple sources.

BimlFlex Excel provides a `Generate Business Key` button that will create a Business Key column from the selected source columns and add it to the metadata. It can optionally add the `@@rs` short code and set the created key to the main Business Key of the table.

For the trial process, the Primary Keys of the source tables are used. As they are sequence keys the record source code is added through the `@@rs` shortcut. For other sources where there are codes that can be used directly as Business Keys it is possible to just apply the `FlexToBk()` function.

## Detailed Steps

The following detailed steps walks through how to tweak Business Keys for the trial.

### Open and Refresh Metadata

Open the Excel Metadata Editor and click `Get All Entities` and `Get All Settings` to read all metadata from the repository.

### Review already generated Business Keys

The Import Metadata wizard created Business Keys from the Primary Keys of the source.

### Update the Business Keys

Review the existing business keys to make sure they match. Apply the `@@rs` short code to any business key still missing it.
