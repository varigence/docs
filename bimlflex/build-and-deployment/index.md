---
uid: bimlflex-build-solution-overview
title: BimlFlex Build Solution Overview
summary: BimlFlex build solution overview including project setup, options, and generating DDL
---
# BimlFlex Build & Deployment Overview

This section describes how to configure a BimlStudio Project for use with BimlFlex, and how to 'build' the metadata into deployable artifacts along with a guide for generating the Data Definition Language (DDL) for creating target data structures.

The build process in BimlStudio uses the BimlFlex metadata, expands this into BimlScript and then compiles this code to produce the relevant output and support scripting.

The resulting output can then be deployed to the designated environment, for example to Azure Data Factory.

## BimlStudio Project Setup

* [Setting Up a BimlStudio Project for BimlFlex](xref:bimlflex-setup-bimlstudio-project)

## Managing Data Structures

* [Using SQL Server Data Tools (SSDT) projects](xref:bimlflex-ssdt-project)
* [Generating DDL in BimlStudio](xref:bimlflex-generating-ddl)

## Build Options

* [BimlFlex Interactive Build](xref:bimlflex-interactive-build)
* [Building Using the Command Line](xref:bimlflex-command-line-build)