---
uid: bimlflex-concepts-version
title: BimlFlex version concept
summary: Overview of the version concept in BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# BimlFlex Version Concept

BimlFlex supports management of changes in metadata over time. These changes are managed in `versions`.

A Version is part of a BimlFlex [Customer](xref:bimlflex-concepts-customer), and a Customer can contain many (one or more) versions of the metadata.

Versions can be used to manage changes in metadata, for example to contain certain releases for internal use. A common use-case in a DevOps context is to configure a 'development' version where the teams can work on, and a 'build' version that is deployed in a DevOps process / pipeline.

In the BimlFlex App, there are options to manage versions for a selected Customer. This can be done in the Administration section in the application. This is further detailed in the [Versions sections in the BimlFlex App documentation](xref:bimlflex-application-versions).

You can switch between Versions directly in the [BimlFlex Toolbar](xref:bimlflex-application-toolbar-icons-and-options), or in the [Database Settings](xref:bimlflex-application-database-settings) menu.

In addition to regular versioning as described in this section, BimlFlex internally also records history of changes within each version so that a full audit trail is always available.