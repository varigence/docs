---
uid: bimlflex-release-notes-2024-nov
name: BimlFlex Release Notes November
summary: Release Notes for BimlFlex November 2024
---

# Release Notes

Varigence is excited to release the November 2024 version of the BimlFlex platform for data solution automation!

> [!NOTE]
>
> - This is a major release and we recommend testing in a non-production environment before upgrading your production environment.
> - Please make sure databases and projects are backed up before upgrading.
> - Please email support@bimlflex.com with any installation or upgrade issues.


> [!IMPORTANT] 
> 
>**Important Update for BimlFlex 2024 Upgrade**
>
> If you are upgrading from a version prior to BimlFlex October 2024, please review the release notes for that version carefully, as it contains crucial information about breaking changes. 
> When upgrading to BimlFlex 2024, it is mandatory to upgrade the BimlCatalog across all your environments to ensure compatibility.
> This release introduces the new `SourceScopedName` and `TargetScopedName` parameters, which enhance runtime debugging capabilities, particularly within Azure Data Factory, addressing limitations related to pipeline name lengths.
> **Action Required**: All SSIS packages and ADF pipelines must be redeployed following the upgrade. This step is crucial for ensuring compatibility and taking full advantage of the new features.

<!--START:ONLINE-ONLY-->

## Installation

BimlFlex November 2024 is installed and upgraded through a single consolidated installer.

<!--\* MANUALLY UPDATE BUILD NUMBER UPON RELEASE -->

Build 24.3.102.0, release date: 18 Nov 2024

>

- [BimlFlex Developer Setup (64-bit)](https://varigence.com/downloads/bimlflexdevsetup_x64_24.3.102.0.exe). This installer includes all BimlFlex components for 64-bit
- [BimlFlex Developer Setup (32-bit)](https://varigence.com/downloads/bimlflexdevsetup_x86_24.3.102.0.exe). This installer includes all BimlFlex components for 32-bit
- [BimlFlex Runtime Setup (64-bit)](https://varigence.com/downloads/bimlflexruntimesetup_x64_24.3.102.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 64-bit
- [BimlFlex Runtime Setup (32-bit)](https://varigence.com/downloads/bimlflexruntimesetup_x86_24.3.102.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 32-bit
<!--END:ONLINE-ONLY-->

## New Features

- Introducing enhanced support for running multiple instances of the BimlFlex app, especially optimized for Citrix environments. This improvement boosts productivity and flexibility for users working across multiple sessions.

## Enhancements and New Settings

- Introduced a new setting `Projects By Record Source` that enables the segmentation of DataVault projects based on their respective record sources. This enhancement streamlines deployment for SSIS Projects, improving efficiency and organization.
- Introduced a new setting `Object Separator` that allows greater customization of how naming parts for objects are combined, particularly beneficial for the Accelerator. By default, an underscore is used to maintain naming consistency.
- Introduced a new setting `Column Separator` that allows greater customization of how naming parts for columns are combined, particularly beneficial for the Accelerator. By default, an underscore is used to maintain naming consistency.

## Bug Fixes


- Enhanced FilterMyProjects functionality to ensure seamless compatibility with Azure-hosted BimlFlex databases
- Improved the FlatFile Importer to support files without headers, ensuring all fields are correctly returned
- Enhanced the business diagram functionality to improve accuracy when managing batched edits and saves
- Enhanced LineariseString with Alias to correctly manage DataVault End Dating scenarios. This improvement ensures more accurate and reliable handling of end-dating processes
- Improved Business Model Actions in Kanban to ensure relevant actions are displayed at the appropriate times
- Corrected the HostIdentifier specified in Biml-generated SSIS Script tasks and components to be "160" for SSIS 2022 build targets.
