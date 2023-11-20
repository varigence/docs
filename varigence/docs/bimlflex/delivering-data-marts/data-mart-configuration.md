---
title: BimlFlex Data Mart Configuration
description: Documentation of the process to implement a Data Mart layer in BimlFlex
tags: [BimlFlex, Conceptual]
---
# Configuring a Data Mart

The metadata required to build the Data Mart is similar to any other source to staging project.

For on-premises loads it is possible to use either the ETL load pattern or the ELT load pattern. For cloud-based implementations, such as using Azure Data Factory (ADF) or targeting Azure Synapse or Snowflake, BimlFlex provides an in-database ELT pattern.

Sample metadata for Data Mart load scenarios for the supported project types is included in BimlFlex.

More information: [Load Sample Metadata](bimlflex-sample-metadata)

## Project Configuration

The Data Mart load pattern is configured in a separate project.

This project uses 3 main connections:

1. **Source Connection**, normally the Staging layer or Data Vault layer
1. **Target Stage Connection**, normally the Data Mart Layer. A staging layer for the Data Mart where delta loads are prepared before they are merged into the target. Only used for ETL patterns. ELT Stored Procedures uses internal staging.
1. **Target Connection**, The Data Mart connection. The target for the Facts and Dimension loads
