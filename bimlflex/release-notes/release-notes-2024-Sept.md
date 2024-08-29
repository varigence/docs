---
uid: bimlflex-release-notes-2024-Sept
name: BimlFlex Release Notes Sept 2024
summary: Release Notes for BimlFlex Sept 2024 September
---

# Release Notes

Varigence is excited to release the September 2024 version of the BimlFlex platform for data solution automation!

> [!NOTE]
>
> * Please make sure databases and projects are backed up before upgrading.
> * Please email support@bimlflex.com with any installation or upgrade issues.

> [!IMPORTANT]
> 
> **New Naming Convention for Release Notes**
>
> Varigence has implemented a new naming convention for all upcoming release notes. The first release of each new year will be named after the year alone (e.g., the first release of 2025 will be titled "BimlFlex 2025"). Subsequent releases within the same year will be named after the year and the month of the release. 
> This current release, expected to be "BimlFlex 2024 R2" will be named "BimlFlex September 2024." 
> This naming convention is designed to align with the release note structures of other popular applications, such as VS Code, Microsoft Office, and Adobe Creative Cloud.
> Users can verify their version number within the application to determine the corresponding release notes. 
>
> **Important Update for BimlFlex 2024 Upgrade**
>
> When upgrading to BimlFlex 2024, it is mandatory to also upgrade the BimlCatalog across all your environments. This update introduces the SourceScopedName and TargetScopedName parameters, enhancing runtime debugging capabilities, particularly within Azure Data Factory with limitations related to pipeline name lengths.
>
> **Action Required**: All SSIS packages and ADF pipelines must be redeployed following the upgrade. This step is crucial for ensuring compatibility and taking full advantage of the new features.

<!--START:ONLINE-ONLY-->
## Installation

BimlFlex September 2024 is installed and upgraded through a single consolidated installer.

<!-- MANUALLY UPDATE BUILD NUMBER UPON RELEASE -->
Build 24.1.348.0, release date: xx Sept 2024

>
* [BimlFlex Developer Setup (64-bit)](https://varigence.com/downloads/bimlflexdevsetup_x64_24.1.348.0.exe). This installer includes all BimlFlex components for 64-bit
* [BimlFlex Developer Setup (32-bit)](https://varigence.com/downloads/bimlflexdevsetup_x86_24.1.348.0.exe). This installer includes all BimlFlex components for 32-bit
* [BimlFlex Runtime Setup (64-bit)](https://varigence.com/downloads/bimlflexruntimesetup_x64_24.1.348.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 64-bit.
* [BimlFlex Runtime Setup (32-bit)](https://varigence.com/downloads/bimlflexruntimesetup_x86_24.1.348.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 32-bit.
<!--END:ONLINE-ONLY-->

## Sept 2024 - New Features

### Metadata Import

#### CSV Import 

Users can now import entities of any type from a CSV file. 

### Template Changes

#### schemachange

BimlFlex templates have been updated to incorporate schemachange (formerly "snowchange") functionality, futher enhancing its ability to manage Snowflake objects.

Additional information regarding schemachange can be found at the [Snowflake Labs GitHub](https://github.com/Snowflake-Labs/schemachange) and the [Snowflake Quickstart Guide](https://quickstarts.snowflake.com/guide/devops_dcm_schemachange_github/#0).

### Business Modelling

#### Batch Save Model

benefit of batch save model

## Sept 2024 - Enhancements and New Settings

### Installer File Enhancements

#### MFA Improvements

* Improvements to installer and BimlStudio

### Metadata Editors

#### Colum Mapping Grid Experience

* change

#### Navigation Guards 

* improvements

#### "and some other stuff" 

improvements

> [!NOTE]
>
> * This is a major release and we recommend testing in a non-production environment before upgrading your production environment.
> * As always, please contact our support team if you encounter any issues or have any questions.
