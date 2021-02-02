---
uid: metadata-editors-overview
title: Metadata Editors Overview
summary: Overview of BimlFlex metadata editors with links to BimlFlex tour, dashboard, and editors
---
# Metadata Editors Overview

The Metadata Editors allow users to add and update all the Metadata required to automate complex data warehousing solutions. Along with the Modeling tools, they empower data developers to build an end-to-end data solution without ever writing a single line of code.

## BimlFlex Tour

A quick overview of the UI elements that make up an Entity Editor and how the features provides navigation and interaction.

[More about BimlFlex Tour](bimlflex-tour.md)

## Dashboard

The dashboard provides a quick view of the metadata in the version and contains the most common tasks and navigation options.

[More about the Dashboard](dashboard.md)

## Toolbar

The BimlFlex Toolbar holds links to most of the higher level system configurations. It also contains validations and notifications for ensuring the integrity of the Metadata.

[More about the Toolbar](toolbar.md)

## Connections Editor

BimlFlex **Connections** provide the information required to connect to data sources. It also acts as containers for objects and allows setting overrides. Additionally, it has metadata to identify the integration stage along with package execution settings.

[More about the Connections Editor](connections.md)

## Batches Editor

BimlFlex **Batches** group and help to define an ETL/ELT workload. They are used by **Projects** to set execution grouping.

[More about the Batches Editor](batches.md)

## Projects Editor

BimlFlex **Projects** group and help to define an ETL/ELT workload. They specify the primary orchestration engine (SSIS or ADF) and define the  **Connections** for the Source to Target pipeline.

[More about the Projects Editor](projects.md)

## Objects Editor

BimlFlex **Objects** closely mirror a Relational Database table, though not every **Object** will translate as a table 1 for 1 due to BimlFlex having the ability to process flat files, Excel documents and, via use of Extensions Points, APIs calls.

[More about the Objects Editor](objects.md)

## Columns Editor

The **Columns Editor** is used to manage how BimlFlex interacts with all **Columns** in the BimlFlex process.

[More about the Columns Editor](columns.md)

## Parameters Editor

**Parameters** for load queries are added either as metadata in the **Parameters** sheet or via Extension Points. For high watermark delta loads and similar simple parameters adding the **Parameter** to the metadata will generate and include all required logic to the load process.

[More about the Parameters Editor](parameters.md)

## Attributes Editor

**Attributes** are used to conditionally override **Configurations** and **Settings**. They can also be used to extend the metadata model for bespoke coding requirements.

[More about the Attributes Editor](attributes.md)

## Configurations

The **Configurations** module is used to manage configurations which drive the behavior of the BimlFlex product. By changing them the produced artifacts can adapt to support requirements for file locations, naming conventions, data conventions etc. The **Configuration** defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors.

[More about Configurations](configurations.md)

## Settings

The **Settings** module is used to manage metadata and framework settings in the BimlFlex App. By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc. Align these settings with the organizations best practices and environmental requirements.

[More about Settings](settings.md)

## Data Type Mappings

BimlFlex **Data Type Mappings** provide the ability to map Data Types from a source system to another more standardized data type. This can be either a conversion of the Data Type entirely, such as a int to a bigint, the expansion of an existing Data Type, such as nvarchar(13) to nvarchar(20), or the combination of both, such as char(1) to nvarchar(10).

[More about Data Type Mappings](data-type-mappings.md)

## Versions

The **Versions** module is used to manage versions of the Metadata and BimlFlex versions for the active customer. **Versions** allow for changes in metadata or versions over time.

[More about Versions](versions.md)

## Operational Reporting

Operational Reporting screens allow users to see the status of their package runs at a high level and to drill down into details and view errors in failing packages.

[More about Operational Reporting](operational-reports.md)
