---
uid: metadata-editors-overview
title: Metadata Editors Overview
summary: Overview of BimlFlex metadata editors with links to BimlFlex tour, dashboard, and editors
---
# BimlFlex App Overview

## Introducing the BimlFlex App

The BimlFlex App allows users to add and update all the metadata required to automate complex data warehousing solutions without ever writing a single line of code.

Developing data solutions is not always easy, and may need many specific designs and modifications to fully meet requirements. To be able to manage this complexity in a streamlined way, BimlFlex provides a variety of editors, configurations, overrides and design features.

A quick overview of the User Interface elements that make up the BimlFlex App is provided in our [BimlFlex Tour](xref:bimlflex-tour), which demonstrates what features are available and how to navigate to them.

## BimlFlex App Components

### Overviews

| <div style="width:150px">App Feature</div> | Description |
| --------- | ----------- |
|[Dashboard](xref:bimlflex-dashboard) | The dashboard provides a quick view of the metadata in the version and contains the most common tasks and navigation options.|
|[Operational Reports](xref:bimlflex-operational-reports) | Operational Reporting screens allow users to see the status of their package runs at a high level and to drill down into details and view errors in failing packages.|

### Scope Selection

| <div style="width:150px">App Feature</div> | Description |
| --------- | ----------- |
|[Customers](xref:bimlflex-application-customers) | Customers provide a way to separate different organizations that can each define their own designs and versions thereof.|
|[Versions](xref:bimlflex-application-versions) | The Versions module is used to manage versions of the Metadata and BimlFlex versions for the active customer. Versions allow for changes in metadata or versions over time.|

### Editors

The BimlFlex App contains many editors to make managing the design of your data solution as easy as possible. An overview of the editing functionality covered by the App is provided below.

| <div style="width:150px">App Feature</div> | Description |
| --------- | ----------- |
|[Connection Editor](xref:bimlflex-application-connections) | BimlFlex Connections provide the information required to connect to data sources. It also acts as containers for objects and allows setting overrides. Additionally, it has metadata to identify the integration stage along with package execution settings.|
|[Batch Editor](xref:bimlflex-app-batches) | BimlFlex Batches group and help to define an ETL/ELT workload. They are used by Projects to set execution grouping.|
|[Project Editor](xref:bimlflex-application-projects) | BimlFlex Projects group and help to define an ETL/ELT workload. They specify the primary orchestration engine (SSIS or ADF) and define the Connections for the Source to Target pipeline.|
|[Object Editor](xref:bimlflex-object-editor) | BimlFlex Objects closely mirror a Relational Database table, though not every Object will translate as a table one-for-one due to BimlFlex having the ability to process flat files, Excel documents and, via use of Extensions Points, APIs calls.|
|[Column Editor](xref:bimlflex-column-editor) | The Column Editor is used to manage how BimlFlex interacts with all Columns in the BimlFlex process.|
|[Attribute Editor](xref:bimlflex-attribute-editor) | Attributes are used to conditionally override Configurations and Settings. They can also be used to extend the metadata model for bespoke coding requirements.|

### Conventions and Configuration

| <div style="width:150px">App Feature</div> | Description |
| --------- | ----------- |
|[Configurations](xref:bimlflex-configurations) | The Configurations module is used to manage configurations which drive the behavior of the BimlFlex product. By changing them the produced artifacts can adapt to support requirements for file locations, naming conventions, data conventions etc. The Configuration defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors.|
|[Settings](xref:bimlflex-settings) | The Settings module is used to manage metadata and framework settings in the BimlFlex App. By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc. Align these settings with the organizations best practices and environmental requirements.|
|[Data Type Mappings](xref:bimlflex-data-type-mappings) | BimlFlex Data Type Mappings provide the ability to map Data Types from a source system to another more standardized data type. This can be either a conversion of the Data Type entirely, such as a int to a bigint, the expansion of an existing Data Type, such as nvarchar(13) to nvarchar(20), or the combination of both, such as char(1) to nvarchar(10).|
