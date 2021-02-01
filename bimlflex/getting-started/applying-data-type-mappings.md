---
uid: bimlflex-getting-started-applying-data-type-mappings
title: Applying Data Type Mappings
summary: Documentation on applying data type mappings to expand data types of the source to more accommodating types, with detailed steps and setting options
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# Applying Data Type Mappings

Data Type Mappings is a BimlFlex feature that expands the Data Types of the source to a larger data type that is more accommodating. This is done to accommodate changes in the source system without the need to update the Data Warehouse or the load process. The most common expansions are for short string representations that might be updated in the source. A Name field of 20 characters might be updated to 250 to accommodate longer customer names, or it might be changed from `varchar` to `nvarchar` to accommodate international characters. An `integer` might be updated to `big int` when the source counter nears its max. By expanding incoming data it is possible to cater for these future changes before they become a load issue.

>[!NOTE]
> Note that larger data types might require more database resources.

BimlFlex provides a rules engine for applying the expansions based on the Business Requirements. Based on the configuration, BimlFlex can apply the expansions across all columns for a source and all tables and load patterns will take the new expanded type into consideration.

The expanded data types will be used in the source to staging load and the new data types will be used in both Staging and Persistent Staging. When the Data Vault accelerator is run on the source metadata the Satellite attributes will inherit the expanded data types from the source definition.

## Detailed Steps

The following detailed steps walks through the application of Data Type Mappings for the trial source data

### Open BimlFlex App

Open the BimlFlex app and connect to the correct Customer and Version

### Review Data Type Mappings

The `Data Type Mappings` page contains the BimlFlex Data Type Mappings that can be used to expand data types for incoming data. Should a specific mapping approach be required, tweak the mapping details on the mappings page to match the data warehouse requirements.

### Apply Data Type Mappings

The Data Type Mappings are added to all columns for a specific `Record Source`

On the home page, click `Apply Data Type Mappings` in the Actions pane

Leave the settings as default

Choose the record source to apply to and click apply. The mappings will be added to all mappable columns.

Once the mapping has been applied the mapped data type will be defined in the Data Type mappings attribute of the column.

The original data types will be maintained in the column data type definition. Creating table scripts from BimlStudio will use the applied data type mappings for the column definitions.
