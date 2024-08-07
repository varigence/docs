---
title: BimlFlex Settings Definition for InferIntegrationKeyFrom
description: Documentation of settings option within BimlFlex for InferIntegrationKeyFrom
tags: [BimlFlex, Reference]
---

# Infer Integration Key From

The convention to infer the `Integration Key` from. Case sensitive options are `None`, `PrimaryKey`, `UniqueKey`, `FirstColumn`, `IdentityColumn` and `ColumnName::[NameOfColumn]`.

When specifying `ColumnName`, a name needs to be added in the Import Metadata screen or specify `ColumnName::UID` to auto populate the column name field with `UID`

Notes:

* This setting is part of the *Model* settings category.
* The default value for this setting is `PrimaryKey`.
