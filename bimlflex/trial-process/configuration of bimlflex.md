# Configuration of BimlFlex

[Back to overview](https://varigence.com/Documentation/BimlFlex/Article/Trial+Process+Overview)

**Supporting Videos**

<iframe width="853" height="480" src="https://www.youtube.com/embed/yMDi0RaB9G8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


**Supporting BimlFlex Documentation**

- [Supporting BimlFlex Documentation](https://varigence.com/Documentation/BimlFlex/Article/Configurations)

## Configuration of BimlFlex

Once the project and metadata connection is defined it is possible to work with the metadata in the Excel-based metadata management application.
One of the key features in the metadata is the configuration of the BimlFlex framework. Most aspects can be configured, including naming conventions, metadata added to layers, hashing approaches and base accounts and locations to use.

## Detailed Steps
The following detailed steps walks through the recommended configuration of the BimlFlex project for the trial.

### Open and Refresh Metadata

Open the Excel Metadata Editor and click the `Get All Settings` to read all configurations from the repository.

### Review Configurations

The Configurations sheet contains the BimlFlex configurations.
For the Trial it is recommended to update the Hash Algorithm Collation to match the Hashbytes function in Sql   

`UseSqlCompatibleHash = Y`

Once the value is updated, click `Set Current Sheet` on the BimlFlex Ribbon Tab to set the value in the database.

### Review Data Type Mappings

The Data Type Mappings sheet contains the BimlFlex Data Type Mappings that can be used to expand data types for incoming data.

### Review Versions

The Versions sheet contains the current Customer Versions.