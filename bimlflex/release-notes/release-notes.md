---
uid: bimlflex-release-notes-2024-oct
name: BimlFlex Release Notes October
summary: Release Notes for BimlFlex October 2024
---

# Release Notes

Varigence is excited to release the October 2024 version of the BimlFlex platform for data solution automation!

> [!NOTE]
>
> - This is a major release and we recommend testing in a non-production environment before upgrading your production environment.
> - Please make sure databases and projects are backed up before upgrading.
> - Please email support@bimlflex.com with any installation or upgrade issues.

> [!IMPORTANT]
>
> **New Naming Convention for Release Notes**
>
> Varigence has implemented a new naming convention for all upcoming release notes. The first release of each new year will be named after the year alone (e.g., the first release of 2025 will be titled "BimlFlex 2025"). Subsequent releases within the same year will be named after the year and the month of the release.
> This current release, which would have been called "BimlFlex 2024 R2" under the previous naming convention, will be named "BimlFlex October 2024."
> This naming convention is designed to better communicate the timing of releases and to align with naming of other popular applications with multiple releases per year.
> Users can verify their version number within the application to determine the corresponding release notes.

> [!IMPORTANT] 
> 
>**Important Update for BimlFlex 2024 Upgrade**
>
> When upgrading to BimlFlex 2024, it is mandatory to also upgrade the BimlCatalog across all of your environments. This update introduces the SourceScopedName and TargetScopedName parameters, enhancing runtime debugging capabilities, particularly within Azure Data Factory with limitations related to pipeline name lengths.
>
> **Action Required**: All SSIS packages and ADF pipelines must be redeployed following the upgrade. This step is crucial for ensuring compatibility and taking full advantage of the new features.

<!--START:ONLINE-ONLY-->

## Installation

BimlFlex October 2024 is installed and upgraded through a single consolidated installer.

<!--\* MANUALLY UPDATE BUILD NUMBER UPON RELEASE -->

Build 24.2.124.0, release date: 16 Oct 2024

>

- [BimlFlex Developer Setup (64-bit)](https://varigence.com/downloads/bimlflexdevsetup_x64_24.2.124.0.exe). This installer includes all BimlFlex components for 64-bit
- [BimlFlex Developer Setup (32-bit)](https://varigence.com/downloads/bimlflexdevsetup_x86_24.2.124.0.exe). This installer includes all BimlFlex components for 32-bit
- [BimlFlex Runtime Setup (64-bit)](https://varigence.com/downloads/bimlflexruntimesetup_x64_24.2.124.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 64-bit
- [BimlFlex Runtime Setup (32-bit)](https://varigence.com/downloads/bimlflexruntimesetup_x86_24.2.124.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 32-bit
<!--END:ONLINE-ONLY-->

## Oct 2024 \* New Features

### Filter My Projects

In large BimlFlex solutions, developers focused on a subset of projects previously had to enable "Use My Exclusions (Locally)" and individually exclude each of the projects they did not want to see as part of the active metadata. This was time-consuming, both to apply and to remove when switching to different tasks. In this release, we have added the "Filter My Projects (Locally)" option to the BimlFlex metadata connection sidebar. This enables the user to very quickly check the projects that they are currently working with from a convenient tree view structure. Moreover, it does not rely on the "Excluded" feature which developers may want to use for longer-term exclusions.

### Snowflake schemachange

BimlFlex templates have been updated to incorporate schemachange (formerly "snowchange") functionality, futher enhancing its ability to manage Snowflake objects.

Additional information regarding schemachange can be found at the [Snowflake Labs GitHub](https://github.com/Snowflake-Labs/schemachange) and the [Snowflake Quickstart Guide](https://quickstarts.snowflake.com/guide/devops_dcm_schemachange_github/#0).

Enable the use of database variables for compatability with schemachange for dynamic cross-database interactions with the `Snowflake Use Database References` and `Snowflake Database Variable` settings.

### Business Modeling Save Paradigm

- Business modeling now enables the user to make changes across multiple kanban cards, dialog boxes, and side bars. These changes are kept pending and can be viewed in the Pending Entity Changes Summary dialog. All of the changes can be saved or discarded in bulk or individual changes can be reversed through the dialog. The save paradigm for Business Modeling now matches the other modeling screens such as Schema Diagram and Accelerator.

### Views

- Introduced support for `Persistent` and `Data Vault` views, including end-dating capabilities for current data, enabling efficient point-in-time querying.
- Introduced `Persistent Views` to enable querying or reloading historical data seamlessly.
- Added customizable settings for managing naming conventions of Persistent Views, including support for adding `WHERE` clauses for more refined data handling.

## Oct 2024 \* Enhancements and New Settings

### Installer Enhancements

#### Multi-Factor Authentication (MFA) Improvements

- Improvements to installer and BimlStudio
- Added command line option to disable the token cache in BimlStudio builds for customers with restrictive MSAL policies

### Metadata Editors

#### Column Editor

- Added Business Entity selector to improve Business Attribute mapping experience

#### Connection Editor

- Added support for Use System Trust Store for MySql linked services

#### Custom Attribute Editor

- Removed incorrect (none) options for custom attribute Columns, Overridden Settings, and Overridden Configurations

#### Object Editor

- Added Source File Filter property to provide additional filtering by name of files to process

#### Project Editor

- Added Persistent Landing Connection selector for Projects that use Pushdown Extraction with Source Connections that reference Azure Blob Storage or Azure Data Lake Store

### Modeling

#### Business Entity Editor

- Fixed an issue where naming conventions were being automatically applied for Business Entities even after manual editing

#### Business Attribute Editor and Grid

- Added support for reordering the assigned ordinals for Business Attributes on archive to ensure that the ordinals are contiguous. This mirrors the reordering functionality on Columns.

#### Accelerator

- Improved Accelerator DBType inference to include the specified Element, if any
- Enhanced Accelerator Type inference to use mapped Business Entity Object Types
- Fixed some cases where the Accelerator detected potential changes to publish despite the model semantics remaining the same
- Fixed an issue where the Accelerator was not creating LSATs for Links with some Business Subjects

### Shared Components

#### Pending Entity Changes Summary

- Added tabs for changes in the Accelerator that will be applied on Save versus Publish
- Included newly added entities to the pending changes list
- Improved formatting, especially for large numbers of pending changes

#### Column Mapping Grid Experience

- Many fields in entity grids that were not previously editable can now be edited inline
- Enhanced styling for added, edited, and validations

#### Navigation Guards

- Many instances of blocked navigation due to background changes have been resolved
- The navigation guard confirmation dialog box is now consistent with BimlFlex styling
- Fixed an issue where entity duplication would result in a navigation guard

#### Validators

- Added Column validator to ensure that TargetColumn is specified for columns with a change type of Hub Reference, Link Reference, or Link Satellite Reference
- Fixed BimlCatalog validator to always fire when BimlCatalog is deleted, \*\*even if 'Show Deleted' is enabled\*\*
- Previously, all Version not marked as IsCurrent were producing a global validation warning that polluted the validation list. This validation is now only shown in the context of the Version editor

#### Metadata Import

- Fixed metadata import data type mapping when the source connection is parameterized
- Added import of views across all system types

### Code Generation

#### Data Vault

- Fixed an issue where FlexRowHash was being incorrectly inserted in some generated stored procedures when PSA was disabled on the corresponding Objects
- Updated the `Point In Time` and `Bridge` artifacts to utilize MERGE statements, significantly improving the efficiency and performance of data loading processes
- Added setting `Bridge Add SurrogateKey` to toggle the use of a concatenated surrogate key in the `Bridge` table, comprising the Link keys. This is enabled by default to allow backward compatability
- Added setting `Pit Add SurrogateKey` to toggle the use of a concatenated surrogate key in the `PointInTime` table, comprising the Hub key and the RowEffectiveFromDate

#### Azure Data Factory

- Added support for the new SnowflakeV2 Linked Service. This is referenced with the 'Snowflake' element in Biml and the previous linked service is referenced with the 'SnowflakeLegacy' element
- Added support for the new MySqlV2 Linked Service. This is referenced with the 'MySql' element in Biml and the previous linked service is referenced with the 'MySqlLegacy' element
- Added support for the new PostgreSqlV2 Linked Service. This is referenced with the 'PostgreSql' element in Biml and the previous linked service is referenced with the 'PostgreSqlLegacy' element
- Added support for the new MariaDB Linked Service encoding, which was changed by the ADF team without preserving legacy support
- Added setting for Activity Limit to increase the number of activities in a single pipeline to up to 80, enabling more parallel calls, especially beneficial for batch pipelines

#### Script Components

- Updated Script component emission to use VSTAMajorVersion of 16 when targeting SQL Server Integration Services (SSIS) 2022 or later

#### System Column Placement

- Added support to control the placement of system columns relative to the defined table columns based on configurations. Choose whether system columns should be added before or after the table columns
- System columns can now be added before table columns to ensure compatibility with Snowflake's `CREATE OR ALTER TABLE` statements and to facilitate modifications of Data Vault Satellite structures
