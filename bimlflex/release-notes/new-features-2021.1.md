---
uid: bimlflex-2021-r1-new-features
name: New Features in BimlFlex 2021 R1
---
# New Features in BimlFlex 2021 R1

## Feature Highlights

* New feature: Business Modelling
* Added support for Salesforce connector
* Added support for Azure PostgreSQL connector
* User Interface Improvements for all BimlFlex Visual Editors
* Preview of Azure Data Factory Mapping Data Flows

### New feature: Business Modelling

Business Modelling has been added to BimlFlex.
This new feature allows for the definition of an information model in BimlFlex.
Users can design a holistic model that describes the business' data, while avoiding bias from already existing systems and data structures.

Business Modeling within BimlFlex seeks to preserve the essence of this process: collaboration, discussion, and interaction, while simultaneously digitizing the team experience.

Business Models can be created using predefined Ensemble Logical Modeling (ELM) or Party & Party Role (PPR) approaches, or by defining a custom set of classifications and labels.
For example, by defining types such as Subjects, People, Events or Places.
These types of Business Model objects are represented as 'cards' on the model design board.

Business Models can be mapped to the data sources in BimlFlex to forward-engineer the data solution from there.

More information on Business Modeling here: [Business Modelling in BimlFlex](xref:business-modeling)

### Added Support for Salesforce Connector

BimlFlex now supports Salesforce (SFDC) as a source connection or as a dataset.
Additional metadata samples have also been added for either Azure Data Factory or SSIS solutions.

More information on importing Salesforce metadata here: [Connecting to a Salesforce REST API](xref:source-salesforce-rest-api)

### Added Support for AzurePostgreSQL Connector

BimlFlex now supports on-prem and Azure PostgreSQL as a Source connection.
Azure PostgreSQL Linked Service is now deployable, as well as SSIS component `Connection` using Intellisoft PostgreSQL OLEDB.
Querying views, indexes, and column metadata can be performed through 'Generate SQL' command.

### User Interface Improvements for all BimlFlex Visual Editors

The visual editors within BimlFlex have all been overhauled.
This has resulted in increase of responsiveness across all areas, as well as improvements in consistency and ease-of-use for all visual editors, including the Data Vault Accelerator, the Schema Diagram, and the new Business Modelling feature.

### Preview of Azure Data Factory Mapping Data Flows

As of the 2021 release, generating the data logistics in native Mapping Data Flows for Azure Data Factory is available in preview.
This is especially geared towards Delta Lake use-cases.

Delta Lake is an open-source storage layer that can be used ‘on top off’ Azure Data Lake Gen2, where it provides transaction control (Atomicity, Consistency, Isolation and Durability, or 'ACID') features to the data lake.

This supports a 'Lake House' style architecture, which is gaining traction because it offers opportunities to work with various kinds of data in a single environment.
For example, combining semi- and unstructured data or batch- and streaming processing.
This means various use-cases can be supported by a single infrastructure.

Microsoft has made Delta Lake connectors available for Azure Data Factory (ADF) pipelines and Mapping Data Flows (or simply ‘Data Flows’).
Using these connectors, you can use your data lake to 'act' as a typical relational database for delivering your target models while at the same time use the lake for other use-cases.

Even better, using Data Flows can use integration runtimes for the compute without requiring a separate cluster that hosts Delta Lake.
This is the inline feature and makes it possible to configure an Azure Storage Account (Azure Data Lake Gen2) and use the Delta Lake features without any further configuration.

In the preview version, it is possible to deploy your solution using the 'Azure Data Flow' Integration Template against new 'Azure Data Lake Store' connections combined with the new 'Delta Lake' System Type.
