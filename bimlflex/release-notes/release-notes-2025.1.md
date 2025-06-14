---
uid: bimlflex-release-notes-2025-feb
name: BimlFlex Release Notes February
summary: Release Notes for BimlFlex February 2025
---

# Release Notes

Varigence is excited to release the February 2025 version of the BimlFlex platform for data solution automation!

> [!NOTE]
>
> - This is a major release and we recommend testing in a non-production environment before upgrading your production environment.
> - Please make sure databases and projects are backed up before upgrading.
> - Please email support@bimlflex.com with any installation or upgrade issues.


> [!IMPORTANT] 
> 
> We have consolidated the TableObject and TableConfigurations into a single object.
> If you have any `ExtensionPoints` that reference `new TableObject` or `TableConfigurations.` you will need to 
> replace `new TableObject` with `new ObjectViewModel` and `TableConfigurations.` with blank

<!--START:ONLINE-ONLY-->

## Installation

BimlFlex March 2025 is installed and upgraded through a single consolidated installer.

<!--\* MANUALLY UPDATE BUILD NUMBER UPON RELEASE -->

Build 25.1.100.0, release date: 15 Mar 2025

>

- [BimlFlex Developer Setup (64-bit)](https://download.varigence.com/downloads/bimlflexdevsetup_x64_25.1.100.0.exe). This installer includes all BimlFlex components for 64-bit
- [BimlFlex Developer Setup (32-bit)](https://download.varigence.com/downloads/bimlflexdevsetup_x86_25.1.100.0.exe). This installer includes all BimlFlex components for 32-bit
- [BimlFlex Runtime Setup (64-bit)](https://download.varigence.com/downloads/bimlflexruntimesetup_x64_25.1.100.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 64-bit
- [BimlFlex Runtime Setup (32-bit)](https://download.varigence.com/downloads/bimlflexruntimesetup_x86_25.1.100.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 32-bit
<!--END:ONLINE-ONLY-->

## New Features

- add text here

## Enhancements and New Settings

- add text here

## Bug Fixes

- add text here
