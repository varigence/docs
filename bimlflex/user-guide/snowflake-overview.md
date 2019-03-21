---
uid: bimlflex-snowflake-overview
title: Snowflake Overview
---
# Snowflake Overview

Snowflake is a cloud data warehouse platform provided by Snowflake Computing Inc.

BimlFlex supports Snowflake as a target data warehouse platform and provides load patterns that use the BimlFlex metadata to create the required ETL and ELT for loading a Data Warehouse in Snowflake.

BimlFlex uses Snowflake best practice approaches to loading and managing the Snowflake data warehouse.

This includes using the BimlFlex optimal load pattern for Snowflake to extract the data and land it in Snowflake stage, then use the Snowflake COPY command to process the data.

BimlFlex uses SQL Server SSIS packages for extraction of source data and orchestration. BimlFlex provides a custom SSIS component for loading data into Snowflake using SSIS. This allows the processing and logic in the generated packages to be easier to manage.