---
uid: bimlflex-release-notes-2022-r3
name: BimlFlex Release Notes 2022 R3
summary: Release Notes for BimlFlex 2022 R3
---

# Release Notes

Varigence is excited to release the 2022 R3 version of the BimlFlex platform for data solution automation!

> [!NOTE]
>
> * Please make sure databases and projects are backed up before upgrading.
> * Please email support@bimlflex.com with any installation or upgrade issues.

## Installation

BimlFlex 2022 R2 is installed and upgraded through a single consolidated installer.

<!--
MANUALLY UPDATE BUILD NUMBER UPON RELEASE
-->

Build 22.2.168.0, release date: 25 May 2022

>
* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe). This installer includes all BimlFlex components
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe). This installer includes the required runtime components for servers that will execute SSIS packages

## 2022 R3 - New Features

## 2022 R3 - Improvements

### Various Application Improvements

* TBD

### Connection Editor

* TBD

### Data Vault Accelerator

* TBD

### Business Modeling

* TBD

### Azure Data Factory (ADF)

* The 'Truncate Landing', or 'SQL_TRUNCATE_LND' Stored Procedure call in source-to-staging Execute Pipelines has been replaced by a 'Pre Copy Script', which has been added to the Copy Activity. This addresses a reported issue where Copy Activity timeout and retry values did not correctly work with the truncate step. The Copy Activity would populate the Landing Area, but upon retry this data was not truncated which resulted in duplicates. By adding the Pre Copy Script to perform the truncation, these operations are performed in a more functionally cohesive way.

>[!NOTE]
>For users that use the 'ADF Pre Copy Script' Extension Point, please make sure that this is updated to include the necessary truncate statements. The statement used is _@concat('TRUNCATE TABLE [',pipeline().parameters.TargetSchemaName,'].[',pipeline().parameters.TargetTableName,']')_.

### Salesforce

* TBD

### Mapping Data Flows

* TBD

### SSIS

* TBD

## 2022 R3 - Bug Fixes

### Various Application Fixes

* TBD

### Data Lineage Editor

* TBD

### Data Vault Accelerator

* TBD

### Schema Diagram

* TBD

### Connection Editor

* TBD

### Project Editor

* TBD

### ADF

* TBD

### Snowflake

* Fixed a bug where quotes were not added to column names in rare cases, leading to issues when using umlauts and similar special characters

### Salesforce

* TBD

### SSIS

* TBD

### Extension Points

* Added various Script Activity related Extension Points, including Snowflake Scale Up and Down, Snowflake Create Stage and the Staging Area and Data Vault processing. Additional information is found in the updated [Extension Point documentation](xref:bimlflex-concepts-extension-points)

## BimlStudio 2022 R2

* TBD