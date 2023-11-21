---
sidebar_position: 12
title: Dimensional Model Delivery
description: Overview of implementing a Dimensional Model based on a Data Vault
tags: [BimlFlex, Conceptual]
---
# Delivering a Dimensional Model based on Data Vault

Delivering a Dimensional Model, one or more Data Marts, that is created 'on top off' a Data Vault model in BimlFlex is not fundamentally different compared to doing this on a different underlying model.

BimlFlex supports [Point-In-Time](bimlflex-data-vault-concept-pit) (PIT) and [Bridge](bimlflex-data-vault-concept-bridge) constructs that assist in managing (join) performance and complexities, but in terms of defining the Dimensional Model itself the process is as per the chapter on [delivering Data Marts](bimlflex-data-delivery-index).

## Combining Data Vault Objects for Delivery

The way to define a Dimension- or Fact object based on a Data Vault in BimlFlex requires a proxy object to be defined in the **Connection** that houses the Data Vault model. This is the model that contains the **Objects** from both the 'Raw' and 'Business' Data Vault and any PIT and Bridge tables.

The proxy object is recommended to be given a name that distinguishes it from the Data Vault, for example using a 'dim' or 'fact' prefix. This 'source' object from the Dimensional Model perspective can be mapped to the target (Dimensional Model) object at **Column** level as per usual. Usually, this target object is **Cloned** from the proxy object to quick-start the column mappings.

The source object in this case is defined as a view or procedure that contains the joins and transformations to define the intended Dimension- or Fact object. In this view, the various Data Vault objects including PIT and Bridge objects can be used.

The standard Dimensional Model logic can be applied to manage the resulting data changes (via the view) as to how they are historized. Please refer to the [Dimensional Modelling sections](bimlflex-data-delivery-index) for more information about this.