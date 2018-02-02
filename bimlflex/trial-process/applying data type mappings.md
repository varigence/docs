# Applying Data Type Mappings

[Back to overview](https://varigence.com/Documentation/BimlFlex/Article/Trial+Process+Overview)

**Supporting Videos**

<iframe width="853" height="480" src="https://www.youtube.com/embed/hGLYrPqOPwg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


**Supporting BimlFlex Documentation**

- [BimlFlex Documentation](https://varigence.com/Documentation/BimlFlex)

## Applying Data Type Mappings

Data Type Mappings is a BimlFlex feature that can expand the Data Types of the source to a larger data type that is more accommodating. This is done to accommodate changes in the source system without the need to update the Data Warehouse or the load process. The most common expansions are for short string representations that might be updated in the source. A Name field of 20 characters might be updated to 250 to accommodate longer customer names. An Integer might be updated to a Big Int when the source counter nears its max. By expanding incoming data it is possible to cater for these updates before they become a load issue.

Note that larger data types might require more database resources.

BimlFlex provides a rules engine for applying the expansions based on the Business Requirements. Based on the configuration BimlFlex can apply the expansions across all columns for a source and all tables and load patterns will take the new expanded type into consideration.

## Detailed Steps

The following detailed steps walks through the application of Data Type Mappings for the trial source data.

### Open and Refresh Metadata

Open the Excel Metadata Editor and click `Get All Entities` and `Get All Settings` to read all metadata from the repository.

### Review Data Type Mappings

The `Data Type Mappings` sheet contains the BimlFlex Data Type Mappings that can be used to expand data types for incoming data. Should a specific mapping approach be required, tweak the mappings sheet to match and publish the updated information to the repository.

### Apply Data Type Mappings

The Data Type Mappings are added to all columns for a specific `Record Source`. Choose the record source to apply to and click apply. The mappings will be added to all mappable columns.
Once the mapping has been applied the mapped data type will be defined in the Data Type mappings column in the columns sheet. The original data types will be maintained in the column data type definition. Creating table scripts from BimlStudio will use the applied data type mappings for the column definitions.
