---
uid: bimlflex-release-notes
name: BimlFlex Release Notes
summary: Release Notes for the current version of BimlFlex
---

# Release Notes

Varigence is excited to release the 2022 R3 version of the BimlFlex platform for data solution automation!

> [!NOTE]
>
> * Please make sure databases and projects are backed up before upgrading.
> * Please email support@bimlflex.com with any installation or upgrade issues.

## Installation

BimlFlex 2022 R3 is installed and upgraded through a single consolidated installer.

<!--
MANUALLY UPDATE BUILD NUMBER UPON RELEASE
-->

Build 22.3.207.0, release date: 30 Mar 2023

>
* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe). This installer includes all BimlFlex components
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe). This installer includes the required runtime components for servers that will execute SSIS packages

>[!NOTE]
>Manual database installation and update scripts should be used to update BimlFlex and BimlCatalog databases that require `Multi-Factor Authentication` due to this reported issue: [Microsoft DacServices does not work with SqlClient 5.0](https://github.com/microsoft/DacFx/issues/126).
>
>
>* [BimlFlex Database Manual Deployment](https://varigence.com/downloads/manual-deploy-bimlflex.zip). This script includes all BimlFlex components for a manual database deployment.
>* [BimlCatalog Database Manual Deployment](https://varigence.com/downloads/manual-deploy-bimlcatalog.zip). This script includes all BimlCatalog components for a manual database deployment.

## 2022 R3 - New Features

<!--
### Triggers

Azure Data Factory *Triggers* are now supported in BimlFlex, for Projects that are configured to generate Azure Data Factory or Mapping Data Flows output. When a Project has either the `Azure Data Factory (ADF)` or `Azure Mapping Data Flows (ADF)` Integration Template, the Trigger option will become available in the Batch Editor for the Batch that is associated with the Project.

The Trigger feature supports Tumbling Window and Scheduled triggers to be created in ADF. Additional configurations that can be applied in the same editor are:

* Name
* Start- and End Date (timestamps)
* Recurrence
* Delay
* Concurrency
* Retry configuration
* Runtime state
-->

### Extension Points

* Added various Script Activity related Extension Points, including Snowflake Scale Up and Down, Snowflake Create Stage, Staging Area, and Data Vault processing. Additional information is found in the updated [Extension Point documentation](xref:bimlflex-concepts-extensionpoints)

### Connections

* BimlFlex now supports a new REST API and sFTP Linked Service that can be generated as part of a project's connection. Configuring these new types will support the generation of a corresponding Linked Service in ADF
* For file types, `parquet` is now available as a supported file connection
* A new **Display Folder** feature has been added to the **Connection Editor**. Using this feature will create a new top-level group (folder) in the **Treeview**, or add the connection to an existing top-level group

## 2022 R3 - Improvements

### Various Application Improvements

* Added improved support for metadata import from a DB2 source using OLEDB. This resolves a few known issues, most importantly a syntax problem related to a missing DATA_COMPRESSION statement
* Various metadata editor components of the BimlFlex Applicationnow have updated icons representing the technology that applies. For example, connections display an icon representing the system type they are configured for. **Projects** and **Batches** show an icon representing the integration template they are associated with. This provides an easy visual reminder of the technology used in the connection

### Azure Data Factory (ADF)

* The 'Truncate Landing', or 'SQL_TRUNCATE_LND' Stored Procedure call in source-to-staging Execute Pipelines has been replaced by a 'Pre Copy Script', which has been added to the Copy Activity. This addresses a reported issue where Copy Activity timeout and retry values did not correctly work with the truncate step. The Copy Activity would populate the Landing Area, but upon retry this data was not truncated which resulted in duplicates. By adding the Pre Copy Script to perform the truncation, these operations are performed in a more functionally cohesive way.

>[!NOTE]
>For users that use the 'ADF Pre Copy Script' Extension Point, please make sure that this is updated to include the necessary truncate statements. The statement used is _@concat('TRUNCATE TABLE [',pipeline().parameters.TargetSchemaName,'].[',pipeline().parameters.TargetTableName,']')_.

* The timeout value of the Script Activities as generated by BimlFlex has been updated to 30 minutes (formerly 10 minutes) by default. Various extension points have been added to allow users to override the Script Activities for more fine-grained configurations (see below)

* Two new Linked Service options have been added for Azure Data Factory. These can be defined using the **Connection Editor:** Rest API and sFTP. By selecting these system types and enabling `Cloud`, users can configure the details to generate these connections as Linked Services.

## 2022 R3 - Bug Fixes

### Various Application Fixes

* Fixed a bug that incorrectly triggered a validation warning when an object has more than one parameter defined
* Fixed a bug where changing the 'FromDate' or 'ToDate' in the **Version Editor** unintentionally disabled the ability to save

### Data Vault Accelerator

* Fixed a bug where sometimes columns that have been split into a different Satellite would still appear in the original Satellite
* Addressed an issue where the appending or removal of the Record Source column would not always perform the change. This happened very infrequently, but has now been consistently resolved

### Connection Editor

* Fixed a bug which prevented the [Temporal Table Pattern Name](xref:bimlflex-reference-documentation-setting-PsaTemporalTableName) to be correctly applied to the generated PSA tables when they are enabled for the SQL Server Temporal Table feature
* Fixed a bug where adding a new object from the **Connection Editor** incorrectly displayed mandatory fields
* Added some quality of life fixes in the **Connection Editor** related to guarding changes when switching forms. For example, unsaved changes are now properly detected when switching between a connection string and Azure Key Vault definition. Also, earlier saved changes that have been made redundant because a different configuration was selected are now consistently cleared. For example, switching between authentication modes or using key vaults. In exception cases, this metadata that was incorrectly retained and would sometimes lead to build issues
* Address an user interface issue where the 'navigate to object' button would not always navigate to the correct object

### Object Editor

* Fixed a bug where the SQL Source Expression was not correctly applied when generating Stored Procedures to load Data Mart objects

### Project Editor

* Fixed a bug where Snowflake for SSIS projects incorrectly displayed validation errors intended for Azure Data Factory projects

### ADF

* Fixed a bug where the generated Stored Procedures would not correctly use the database name as part of the fully qualified name for Managed Instances where all solution connections are defined in separate databases. Managed Instances support cross-query databases, and this bug prevented this for Staged Queries

### Snowflake

* Fixed a bug where quotes were not added to column names in rare cases, leading to issues when using umlauts and similar special characters. Special characters in column names should now work again
* In rare cases, when using the Pushdown Extraction feature in combination with Snowflake, some column names would not have double quotes. This only occurs in this combination, and has now been resolved

### Configurations

* Fixed a bug where configurations that have been set to 'default' would not correctly generate constraints for Staging Area and Persistent Staging Area objects

### BimlStudio

* Fixed a bug that would crash BimlStudio if any bundle other than the default BimlFlex.bimlb bundle would be used