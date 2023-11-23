---
title: Customers
description: Overview of the BimlFlex Customer concept.
tags: [BimlFlex, Reference]
---
BimlFlex offers a flexible way to configure different functional areas which act as top-level groupings of metadata and models. These are referred to as [**Customers**](./_incl-header-customer).

Customers effectively provide a *multi-tenancy* setup that can be used to define different solutions, even within the same organization.

For example, if there is a requirement to deliver a solution for 'Finance' independent from 'Human Resources' these areas can be defined as separate customers in BimlFlex. Different Customers can also be created to look into different ways of deployment, for example when investigating a new technical target platform or data integration approach.

Within a Customer, all metadata is specific to the selected customer. So metadata that is imported or modified for a specific customer will not appear in a different one.

It is easy to switch between the selected customer in BimlFlex. This can be done from the [BimlFlex Toolbar](../metadata-editors/bimlflex-tour#bimlflex-toolbar).
