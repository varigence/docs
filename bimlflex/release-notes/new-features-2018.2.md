# New Features in BimlFlex 2018.2

## Snowflake-based staging and persisting

BimlFlex now has initial support for Snowflake as a staging and persistent staging engine.

This supports the SRC - STG - PSA process and includes the use of an SSIS Custom Task.  
This is work in progress and we are working with a customer in a private preview. This is in `BETA` at the moment and not for production use. Please contact support@bimlflex.com for more information if you are looking at using Snowflake with BimlFlex.

## Agile Data Vault Acceleration

The BimlFlex DataVault Accelerator now support a `ModelGrouping` feature. This allows a more agile and targeted acceleration approach.

Please read this blog post for more information. [Agile Data Vault Acceleration](https://www.varigence.com/Blog/Post/84)

## Insert only optimizations

The support for an insert only data warehouse has been optimized to allow for optimal performance. An insert only approach does not use Current flags or Effective To/End dates. This allows for inserts of new records without updating any existing records. It allows for faster load processes while delegating timeline construction to the query process.

## Validator updates

Several new metadata validators has been added to the modelling experience. The validators will highlight issues with the model that could impact build or load behavior.

## Salesforce source support

BimlFlex now has built in support for sourcing data from a Salesforce source using the COZYROC 3rd party custom SSIS source component.

## Same As and Hierarchy Link acceleration support

Support for Data Vault `Same As` and `Hierarchy` Links in the `ModelObjectType`, including the ability to specify naming convention in the Settings using `DvAppendSameAsLink` and `DvAppendHierarchyLink`

## Extension Point Updates

Several Extension Points have been added and updated to support more customization in load processes.

## Orchestration in UTC time zone

The Catalog orchestration has been updated to support UTC based times for data warehouse events as a configurable option. This allows the Data Warehouse architect to chose between using the local server date time and time zone or UTC time zone.

## Streamlined metadata import dialog

The import metadata dialog is now streamlined for BimlFlex users.
It allows creation of Business Keys from source table information and will also and change object relationships based on identified Business Keys. This allows a more agile modelling approach for Data Vault Scenarios.

A new `Proper_Case` naming override has been introduced in addition to existing naming conventions.

## Transient Change Type

A new column change type has been added. The transient column will be available in the data flow pipeline but not included in the target or hashing operations.

## Number of containers control in Batches

A new feature to control the number of sequence containers in batches has been added. This allows the data warehouse architect to control the load pattern in more detail.