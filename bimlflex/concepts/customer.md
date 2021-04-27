---
uid: bimlflex-concepts-customer
title: BimlFlex customer concept
summary: Overview of the customer concept in BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# BimlFlex Customer Concept

BimlFlex offers a flexible way to configure different functional areas which act as top-level groupings of metadata and models. These are referred to as `Customers`.

Customers effectively provide a *multi-tenancy* setup that can be used to define different solutions within the same organisation.

For example, if there is a requirement to deliver a solution for Finance indepdenent from Human Resources these areas can be defined as separate Customers in BimlFlex. Different Customers can also be created to look into different ways of deployment, for example when investigating a new technical target platform or data integration approach.

Within a Customer, all metadata is specific to the selected Customer. So metadata that is imported or modified for a specific Customer will not appear in a different one.

It is easy to switch between the selected Customer in BimlFlex. This can be done from the [BimlFlex Toolbar](xref:bimlflex-application-toolbar-icons-and-options).
