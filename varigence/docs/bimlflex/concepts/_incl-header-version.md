---
title: Versions
description: Overview of the BimlFlex Version concept.
tags: [BimlFlex, Reference]
---
BimlFlex supports management of changes in metadata over time. These changes are managed in [**Versions**](bimlflex-version-concept-header).

A version is part of a BimlFlex [Customer](bimlflex-concepts-customer), and a Customer can contain zero, one or more versions of the metadata.

Versions can be used to manage changes in metadata, for example to develop certain releases for internal use. A common use-case in a DevOps context is to configure a 'development' version where the teams can work on, and a 'build' version that is deployed in a DevOps process / pipeline.

Additional information on how versions are used in a concurrent development and DevOps context is available in the [build and deployment sections](bimlflex-concurrent-development).

In the [BimlFlex App](metadata-editors-overview), there are options to manage versions for a selected Customer. This can be done in the Administration section in the application, using the [Version Editor](bimlflex-version-editor).

You can switch between versions directly in the [BimlFlex Toolbar](xref:bimlflex-tour#bimlflex-toolbar), or in the [Database Settings](bimlflex-application-database-settings) menu.

In addition to regular versioning as described in this section, BimlFlex internally also records history of changes within each version so that a full audit trail is always available.
