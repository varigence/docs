---
sidebar_position: 1
title: Overview
description: Delivering data using BimlFlex
tags: [BimlFlex, Reference]
---

# Delivering Data Marts

This implementation guide covers the modeling and implementation for delivering Data Marts, using Dimensional Models. Dimensional Models are Star Schema-based Fact- and Dimensions tables.

BimlFlex generated data logistics that can load Dimensions with new and updated Dimension member data according to defined Dimension Attribute types.

The Fact loading processes are performed once the Dimension are updated. The Fact load can either use existing keys, Smart Keys or do Dimension Member Key lookups in the load. This is defined in the metadata through the Data Mart modeling.

For Dimension relationships that use lookups, BimlFlex uses the Integration Key column and perform the lookup in the load based on the Integration Key and inserts the Dimension surrogate key in the Fact table.

The architecture can use existing keys from the underlying layers, or implement independent sequence identifier keys for the Dimension members.

## Data Marts Overview

* [Configuring a Data Mart solution in BimlFlex](bimlflex-data-mart-configuration)
* [Customizing Data Marts using overrides](bimlflex-data-mart-overrides)
* [Fact Data Loading Pattern](bimlflex-data-mart-fact-pattern)
* [Dimension Data Loading Pattern](bimlflex-data-mart-dimension-pattern)