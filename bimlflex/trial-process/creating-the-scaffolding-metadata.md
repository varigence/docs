# Creating the scaffolding metadata

## Supporting Videos

![Creating Sample Metadata](https://www.youtube.com/watch?v=YJTrhoQW6qw)

## Supporting BimlFlex Documentation

- [Initial Setup and Configuration](../user-guide/initial-setup-and-configuration.md)

## Opening the Excel metadata editor

The first time the Excel metadata editor requests data from a new customer it will ask if sample metadata should be created. Creating the sample metadata will create the scaffolding for the trial process.

Scaffolding metadata was created as part of [Creating and Configuring a BimlFlex project](creating-and-configuring-a-bimlflex-project.md). This documentation describes how to recreate it by creating a new customer.

It is also possible to reload metadata from a specific point in the trial process by [using the prepared trial metadata](using-prepared-trial-metadata.md)

## Detailed Steps

The following detailed steps walks through the creation of the BimlFlex scaffolding metadata

### Generating the scaffolding metadata

For a new customer, click the `Get All Entities` button in the BimlFlex tab in the Excel Metadata editor. Create the sample metadata by clicking the button in the dialog.

The trial process assumes the connections and database names are all kept as the default names. The connection strings to the databases on the connections sheet should be updated to match the SQL Server used for the data warehouse. It is recommended to use Integrated Security.
