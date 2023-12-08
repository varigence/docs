---
sidebar_position: 1
title: Overview
description: Overview of BimlFlex support for Snowflake
---
# Using BimlFlex with Snowflake

Snowflake is a cloud data warehouse platform ('Snowflake') provided by Snowflake Computing Inc. Snowflake is one of the target solutions that BimlFlex supports.

BimlFlex supports Snowflake as both a source and a target platform, and provides load patterns that use the BimlFlex metadata to create the required ETL and ELT for loading a data warehouse in Snowflake.

BimlFlex uses Snowflake's best practice approaches to loading and managing the Snowflake data warehouse. This includes using load pattern that are optimized for Snowflake to extract the data, land it in the Snowflake stage, and then use the Snowflake COPY command to process the data.



:::tip

Please take note of these additional resources on working with Snowflake:

* [Snowflake Website](https://www.snowflake.com/)  
* [Snowflake Documentation](https://docs.snowflake.com/)

:::


## Implementing ADF pipelines to Snowflake

* [Configuring BimlFlex for Snowflake](./snowflake-configuration)
* [Designing ADF processes for Snowflake](./implementing-snowflake-in-adf)

## Unsupported Snowflake Features and Known Issues

* [An overview of Snowflake features that are not supported by BimlFlex](./unsupported-snowflake-features)
