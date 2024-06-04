---
uid: bimlflex-databricks-index
title: BimlFlex Databricks overview
summary: Overview of BimlFlex support for Databricks
---
# Using BimlFlex with Databricks

Databricks is a cloud data warehouse platform ('Databricks') provided by Databricks Computing Inc. Databricks is one of the target solutions that BimlFlex supports.

BimlFlex supports Databricks as both a source and a target platform, and provides load patterns that use the BimlFlex metadata to create the required ETL and ELT for loading a data warehouse in Databricks.

BimlFlex uses Databricks's best practice approaches to loading and managing the Databricks data warehouse. This includes using load pattern that are optimized for Databricks to extract the data, land it in the Databricks stage, and then use the Databricks COPY command to process the data.

> [!TIP]
> Please take note of these additional resources on working with Databricks:
>
> * [Databricks Website](https://www.databricks.com/)  
> * [Databricks Documentation](https://docs.databricks.com/)

## Implementing ADF pipelines to Databricks

* [Configuring BimlFlex for Databricks](xref:bimlflex-databricks-configuration-overview)
* [Designing ADF processes for Databricks](xref:bimlflex-databricks-implementation-adf)

## Unsupported Databricks Features and Known Issues

* [An overview of Databricks features that are not supported by BimlFlex](xref:bimlflex-databricks-unsupported-features)
