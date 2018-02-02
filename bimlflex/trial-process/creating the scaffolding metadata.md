# Creating the scaffolding metadata

[Back to overview](https://varigence.com/Documentation/BimlFlex/Article/Trial+Process+Overview)

**Supporting Videos**

<iframe width="853" height="480" src="https://www.youtube.com/embed/YJTrhoQW6qw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


**Supporting BimlFlex Documentation**

- [Initial Setup and Cofiguration](https://varigence.com/Documentation/BimlFlex/Article/Initial+Setup+and+Configuration)

## Creating the scaffolding metadata

The first time the Excel metadata editor requests data from a new customer it will ask if sample metadata should be created. Creating the sample metadata will create the scaffolding for the trial process.
The scaffolding metadata was created as part of [Creating and Configuring a BimlFlex project](creating%20and%20configuring%20a%20bimlflex%20project.md). This documentation describes how to recreate it by creating a new customer.

It is also possible to reload metadata from a specific point in the trial process by [using the prepared trial metadata](using%20the%20prepared%20trial%20metadata.md)

## Detailed Steps

The following detailed steps walks through the creation of the BimlFlex scaffolding metadata`

### Creating the scaffolding metadata

For a new customer, click the `Get All Entities` button in the BimlFlex tab in the Excel Metadata editor. Create the sample metadata by clicking the button in the dialog.

The trial process assumes the connections and database names are all kept as the default names. The connection strings to the databases on the connections sheet should be updated to match the Sql Server used for the data warehouse. It is recommended to use Integrated Security.
