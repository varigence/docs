---
uid: bimlstudio-2023-r1
name: BimlStudio Release Notes 2023 R1
summary: Release Notes for BimlStudio 2023 R1
---

# Release Notes

Varigence is excited to release the 2023 R1 version of the BimlStudio Integrated Developer Environment!

## Installation

BimlStudio 2023 R1 is installed and upgraded through a single consolidated installer.

<!--
MANUALLY UPDATE BUILD NUMBER UPON RELEASE
-->

Build 23.1.432.0, release date: 14 Sep 2023

* [BimlStudio (64-bit) Setup](https://varigence.com/downloads/bimlstudiosetup_x64_23.1.432.0.exe)
* [BimlStudio (32-bit) Setup](https://varigence.com/downloads/bimlflexruntimesetup_x86_23.1.432.0.exe)


# BimlStudio

## Installer File Enhancements

* Split installers into 32-bit and 64-bit versions for smaller size and increased flexibility
* Added support for MSI installation, if the bundled EXE installer is not supported by group policy
* Changed "Add/Remove Programs" entries to list each installed application separately, rather than condensing them under the Setup Bundle executable. This means that BimlFlex Dev, BimlFlex Runtime, and BimlStudio installers no longer corrupt each others' installations.

## 2023 R1 - New Features

### Azure Data Factory (ADF)

* Added support for using ADF expressions on any property that supports expressions across all of ADF functionality. Data type specific validation still works when expressions are not used
* Added new timeout and logging options for script activity
* Added Databricks linked service node
* Added RawDataType, RawLength, RawPrecision, and RawScale properties to ADF Dataset Schema columns to enable the user fine-grained control over data types in their physical schemas
* Added support for Global Parameters
* Added support for Pipeline Settings

### SSIS

* Added EscapeQualifier to Flat File Destination
* Added SSIS 2022 emission

### Tabular

* Added support for explicitly setting compatibility levels and improved logic for autodetecting compatibility level based on target settings
* Added support for measures to Tabular perspectives
* Added support for calculated columns and calculated table columns
* Added Formula property to Tabular Table Partitions to support calculated partitions
* Added support for Display Folders
* Added support for IsKey and IsUnique to tabular columns
* Added support for Calculation Groups

## Metadata Import

* Added schema import from Databricks
* Added support for Multi-Factor authentication both in import UI and in programmatic import APIs

# Logging

Added ability for BST main window to refresh logging manager when the registered default is changed by BimlScript code

## 2023 R1 - Bug Fixes and Various Improvements

### BimlEditor

* Improved intellisense code completion and quick info for code files that reference other code files

### Azure Data Factory (ADF)

* Fixed unannounced breaking changes, including ScriptLines in mapping dataflows
* Fixed bug when Execution Activities had their Retry count set to 0
* Fixed issue where Trigger Runtime Frequencies were not being set correctly in some cases for Minutes, Hours, and Months

### Dataflow Mappings

* Fixed issue with conditional split stream names being incorrect in some cases
* Fixed issue with conditional split where default stream was not being handled correctly
* Eliminated trailing commas and unencoded newline and tab characters throughout dataflow script emission, because they are illegal in the Dataflow script DSL

### SSAS

* Fixed validators to avoid spurious error when schema was not supplied for an SSAS-only view

### SSIS

* Improved handling of temp folders for script building in Biml code generation and for SSIS Script tasks/components
* Fixed 2019 and 2022 emission for Oracle and Teradata components and connection managers

### Tabular

* Hardening tabular validators against null reference exceptions
* Fixed emission of Tabular roles that contained special characters in their names

## Build Enhancements

* Fixed issue where Clean Output Folder would not always empty the output folder
* Default Build Engine for new projects changed to Bimlc.exe. Also added a more descriptive warning for token acquisition failures when running old MSBuild

## Source Control

* Updated Git integration to work with Azure DevOps, including additional authentication types
