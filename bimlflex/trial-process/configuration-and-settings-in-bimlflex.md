# Configurations and Settings in BimlFlex

## Supporting Videos

![Configurations and Settings](https://www.youtube.com/watch?v= TODO ?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- @bimlflex-metadata-configurations
- @bimlflex-metadata-settings

## Configurations and Settings in BimlFlex

Once the project and metadata connection is defined it is possible to work with the metadata in the Excel-based metadata management application.

One of the key features in the metadata is the configuration of the BimlFlex framework. Most aspects can be configured, including naming conventions, metadata added to layers, hashing approaches, base Azure accounts and folder locations to use.

## Detailed Steps

The following detailed steps walks through the recommended configuration of the BimlFlex project for the trial.

### Open and Refresh Metadata

Open the Excel Metadata Editor and click the `Get All Settings` to read all configurations and settings from the repository.

### Review Configurations

The Configurations sheet contains the BimlFlex configurations for core metadata.

Here, metadata columns and data types as well as their default expressions are defined for the different layers.

While the trial process uses the default settings, architectural choices such as, if to use End Dating, if to include Deleted and Current Flags, if to include a Row Change Type indicator and how to derive it etc. are all specified in the Configurations sheet.

### Review Settings

The Settings Sheet contains configurable settings such as naming conventions used.

For the trial it is recommended to use a Hash Algorithm compatible with the `HASHBYTES()` function in SQL.

Verify that the `UseSqlCompatibleHash` setting in the settings sheet is set to `Y`

For the trial it is recommended to allow the Accelerator to accelerate Link Satellites.

Verify that the `DvAccelerateLinkSatellite` setting in the settings sheet is set to `Y`

If the values are updated, click `Set Current Sheet` on the BimlFlex Ribbon Tab to set the sheet in the database.

### Review Data Type Mappings

The Data Type Mappings sheet contains the BimlFlex Data Type Mappings that can be used to expand data types for incoming data.

In the trial process, the default Data Type Mappings are used.

### Review Versions

The Versions sheet contains the current Customer's available Versions. Enabled Versions are visible in the drop down when configuring the metadata connection.

Versions are used to work with different versions of the metadata for the same metadata Customer. In the trial process, a single, default version is used.
