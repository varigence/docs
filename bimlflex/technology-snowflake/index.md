---
uid: bimlflex-snowflake-index
title: BimlFlex Snowflake overview
summary: Overview of BimlFlex support for Snowflake
---
# Using BimlFlex with Snowflake

Snowflake is a cloud data warehouse platform ('Snowflake') provided by Snowflake Computing Inc. Snowflake is one of the target solutions that BimlFlex supports.

BimlFlex supports Snowflake as both a source and a target data warehouse platform and provides load patterns that use the BimlFlex metadata to create the required ETL and ELT for loading a Data Warehouse in Snowflake.

BimlFlex uses Snowflake's best practice approaches to loading and managing the Snowflake data warehouse. This includes using the BimlFlex optimal load pattern for Snowflake to extract the data and land it in the Snowflake stage, then use the Snowflake COPY command to process the data.

> [!TIP]
> Additional Resources:  
> [Snowflake Website](https://www.snowflake.com/)  
> [Snowflake Documentation](https://docs.snowflake.com/)

## Implementing ADF pipelines to Snowflake

* [Working with BimlFlex on Snowflake](xref:bimlflex-snowflake-implementation)
* [AFD on Snowflake](xref:bimlflex-snowflake-implementation-adf)
