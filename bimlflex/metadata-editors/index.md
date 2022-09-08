---
uid: metadata-editors-overview
title: Metadata Editors Overview
summary: Overview of BimlFlex metadata editors with links to BimlFlex tour, dashboard, and editors
---
# BimlFlex App Overview

[!include[Connections](_incl-header-bimlflex-app.md)]

A quick overview of the User Interface elements that make up the BimlFlex App is provided in our [BimlFlex Tour](xref:bimlflex-tour), which demonstrates what features are available and how to navigate to them.

## BimlFlex App Components

### Overviews

| <div style="width:150px">App Feature</div> | Description |
| --------- | ----------- |
|[Dashboard](xref:bimlflex-dashboard) | The dashboard provides a quick view of the metadata in the version and contains the most common tasks and navigation options.|
|[Customers](xref:bimlflex-application-customers) | Customers provide a way to separate different organizations that can each define their own designs and versions thereof.|

### Editors

The BimlFlex App contains many editors to make managing the design of your data solution as easy as possible. An overview of the editing functionality covered by the App is provided below.

| <div style="width:150px">App Feature</div> | Description |
| --------- | ----------- |
|[Connection Editor](xref:bimlflex-connection-editor) | BimlFlex Connections provide the information required to connect to data sources. It also acts as containers for objects and allows setting overrides. Additionally, it has metadata to identify the integration stage along with package execution settings.|
|[Batch Editor](xref:bimlflex-batch-editor) | BimlFlex Batches group and help to define an ETL/ELT workload. They are used by Projects to set execution grouping.|
|[Project Editor](xref:bimlflex-project-editor) | BimlFlex Projects group and help to define an ETL/ELT workload. They specify the primary orchestration engine (SSIS or ADF) and define the Connections for the Source to Target pipeline.|
|[Object Editor](xref:bimlflex-object-editor) | BimlFlex Objects closely mirror a Relational Database table, though not every Object will translate as a table one-for-one due to BimlFlex having the ability to process flat files, Excel documents and, via use of Extensions Points, APIs calls.|
|[Column Editor](xref:bimlflex-column-editor) | The Column Editor is used to manage how BimlFlex interacts with all Columns in the BimlFlex process.|
|[Attribute Editor](xref:bimlflex-attribute-editor) | Attributes are used to conditionally override Configurations and Settings. They can also be used to extend the metadata model for bespoke coding requirements.|
|[Configuration Editor](xref:bimlflex-configuration-editor) | The Configurations module is used to manage configurations which drive the behavior of the BimlFlex product. By changing them the produced artifacts can adapt to support requirements for file locations, naming conventions, data conventions etc. The Configuration defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors.|

### Administration

| <div style="width:150px">App Feature</div> | Description |
| --------- | ----------- |
|[Settings](xref:bimlflex-setting-editor) | The Settings module is used to manage metadata and framework settings in the BimlFlex App. By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc. Align these settings with the organizations best practices and environmental requirements.|
|[Data Type Mappings](xref:bimlflex-data-type-mappings) | BimlFlex Data Type Mappings provide the ability to map Data Types from a source system to another more standardized data type. This can be either a conversion of the Data Type entirely, such as a int to a bigint, the expansion of an existing Data Type, such as nvarchar(13) to nvarchar(20), or the combination of both, such as char(1) to nvarchar(10).|
|[Versions](xref:bimlflex-version-editor) | The Versions module is used to manage versions of the Metadata and BimlFlex versions for the active customer. Versions allow for changes in metadata or versions over time.|
|[Operational Reports](xref:bimlflex-operational-reports) | Operational Reporting screens allow users to see the status of their package runs at a high level and to drill down into details and view errors in failing packages.|

### Modeling

The Modeling features provides graphical tools for users to accomplish a range of data modeling tasks in an intuitive interface. Each tool provides views and actions that make sense in the context of the specific tool.

| <div style="width:150px">App Feature</div> | Description |
| --------- | ----------- |
|[Accelerator](xref:bimlflex-data-vault-accelerator) | The Data Vault Accelerator provides a quick-start opportunity with a best effort, technical modeling of Data Vault constructs out of the source metadata. It is configurable and provides a preview that can be rerun as many times as necessary so that the initial Data Vault modeling can be completed faster than through manual metadata modeling.|
|[Schema Diagram](xref:bimlflex-schema-diagram) | The Schema Diagram provides an entity relation view of any set of metadata based on the integration stage. It allows a user to get an overview of what the metadata looks like in an easy to understand view. It also helps the developer to execute the most common actions on the data in a graphical interface.|
|[Data Lineage](xref:bimlflex-data-lineage) | The Data Lineage Diagram provides an view of one or more relationships at column level. It allows a user to get a quick view of mappings and lineage in a graphical interface. It allows the developer to easily add or remove mappings using column drag and drop. It also provides some of the most common actions that make sense in the context of data mapping.|
|[Business Modeling](xref:bimlflex-business-modeling) | Design a holistic model that describes the business' data, while avoiding bias from already existing systems and data structures. Traditionally, this process involves a team of IT and business representatives collaborating in a series of workshops to define the business' Core Business Concepts (CBC), how they are described and how they interact with each other. The Business Modeling feature seeks to preserve the essence of this process: collaboration, discussion, and interaction, while simultaneously digitizing the team experience.|
