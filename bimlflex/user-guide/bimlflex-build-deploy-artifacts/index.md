---
uid: bimlflex-build-solution-overview
title: BimlFlex Build Solution Overview
summary: BimlFlex build solution overview including project setup, options, and generating DDL
---
# Development, Build & Deployment Overview

[!include[Build](../includes/_incl-header-build-process.md)]

This section describes how implement development best-practices, how to configure a BimlStudio Project for use with BimlFlex, and how to 'build' the metadata into deployable artifacts along with a guide for generating the Data Definition Language (DDL) for creating target data structures.

The build process in BimlStudio uses the BimlFlex metadata, expands this into BimlScript and then compiles this code to produce the relevant output and support scripting.

The resulting output can then be deployed to the designated environment, for example to Azure Data Factory.

## BimlStudio Project Setup

* [Setting Up a BimlStudio Project for BimlFlex](xref:bimlflex-setup-bimlstudio-project)

## Managing Data Structures

* [Using SQL Server Data Tools (SSDT) projects](xref:bimlflex-ssdt-project)
* [Generating DDL in BimlStudio](xref:bimlflex-generating-ddl)

## Build Options

* [BimlStudio Build Process](xref:bimlflex-build-bimlstudio-project)
* [Building Using the Command Line](xref:bimlflex-command-line-build)

## Development Approaches

* [Working on BimlFlex with multiple developers or teams](xref:bimlflex-concurrent-development)
* [Working with Continuous Integration (CI) and Continuous Delivery (CD)](xref:bimlflex-continuous-integration-and-delivery)