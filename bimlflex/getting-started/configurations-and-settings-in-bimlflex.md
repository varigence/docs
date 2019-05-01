---
uid: bimlflex-trial-configurations-and-settings-in-bimlflex
title: Configurations and Settings in BimlFlex
---
# Configurations and Settings in BimlFlex

A key feature of BimlFlex is the comprehensive set of configurations and settings in the BimlFlex framework.

Most aspects can be configured, including naming conventions, metadata added to layers, hashing approaches, base Azure accounts and folder locations to use.

## Detailed Steps

The following detailed steps walks through the recommended configuration of the BimlFlex project for the getting started process.

Open the BimlFlex App and make sure it is connected to the expected Customer and Version.

### Review Configurations

Navigate to the Configurations page.

The Configurations page contains the BimlFlex configurations for core metadata.

Here, metadata columns and data types as well as their default expressions are defined for the data warehouse layers.

While the getting started process uses the default settings, architectural choices such as, if to use End Dating, if to include Deleted and Current Flags, if to include a Row Change Type indicator and how to derive it etc. are all specified in the Configurations sheet.

### Review Settings

Navigate to the Settings page.

The Settings page contains configurable settings such as naming conventions used.

For the getting started process it is recommended to use a Hash Algorithm compatible with the `HASHBYTES()` function in SQL.

Verify that the `UseSqlCompatibleHash` and `UseSqlCompatibleRowHash` settings in the settings page are set to `Y`

For the getting started process it is recommended to allow the Data Vault Accelerator to accelerate Link Satellites.

Verify that the `DvAccelerateLinkSatellite` setting in the settings sheet is set to `Y`

### Review Data Type Mappings

Navigate to the Data Type Mappings page.

The Data Type Mappings page contains the BimlFlex Data Type Mappings that can be used to expand data types for incoming data.

For the getting started process, the default Data Type Mappings are used.

### Review Versions

Navigate to the Versions page.

The Versions page contains the current Customer's available Versions. A given Customer can contain many versions.

Versions are used to work with different versions of the metadata for the same metadata Customer.

For the getting started process, a single, default version is used.