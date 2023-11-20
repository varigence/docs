---
title: Snowflake features not supported by BimlFlex
description: Overview of Snowflake features that are not supported by BimlFlex
---
# Unsupported Features

BimlFlex supports Snowflake as both a source and a target platform. However, this comes with certain limitations that may require additional modifications in the design metadata.

This page provides an overview of exceptions that Snowflake users should be aware of.

## Using Binary Data Types

BimlFlex for Snowflake does not support the use of binary data types for eithers sources or target. Due to the interaction with Azure Data Factory, the generated code will produce a technical error. This is because behind the scenes the binary value will be cast as a variant type.

To work around this issue, first and foremost the advice is to remove any binary data types from the data solution. If Snowflake is used as a source, then any binary data types need to be removed after metadata has been imported.

## Using Variant Data Types

BimlFlex for Snowflake does not allow a column to be set as a variant type. Users are advised to remove any variant data types from the solution after importing metadata.