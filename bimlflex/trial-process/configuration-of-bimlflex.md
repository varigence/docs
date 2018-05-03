# Configuration of BimlFlex

## Supporting Videos

![Configurations and Settings](https://www.youtube.com/watch?v=yMDi0RaB9G8)

## Supporting BimlFlex Documentation

@bimlflex-metadata-configurations

## Configurations and Settings in BimlFlex

Once the project and metadata connection is defined it is possible to work with the metadata in the Excel-based metadata management application.
One of the key features in the metadata is the configuration of the BimlFlex framework. Most aspects can be configured, including naming conventions, metadata added to layers, hashing approaches and base accounts and locations to use.

## Detailed Steps

The following detailed steps walks through the recommended configuration of the BimlFlex project for the trial.

### Open and Refresh Metadata

Open the Excel Metadata Editor and click the `Get All Settings` to read all configurations and settings from the repository.

### Review Configurations

The Configurations sheet contains the BimlFlex configurations for core metadata. Here metadata columns and data types are defined as well as if they are included in different layers.

### Review Settings

The Settings Sheet contains configurable settings such as naming conventions used.

For the Trial it is recommended to update the Hash Algorithm to match the `HASHBYTES()` function in SQL.

Update the `UseSqlCompatibleHash` setting in the settings sheet to `Y`

Once the value is updated, click `Set Current Sheet` on the BimlFlex Ribbon Tab to set the value in the database.

### Review Data Type Mappings

The Data Type Mappings sheet contains the BimlFlex Data Type Mappings that can be used to expand data types for incoming data.

### Review Versions

The Versions sheet contains the current Customer Versions. Enabled Versions are visible in the drop down when configuring the metadata connection.
