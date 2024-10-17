---
uid: bimlstudio-release notes-2024-oct
name: BimlStudio Release Notes October
summary: Release Notes for BimlStudio October 2024
---

# Release Notes

Varigence is excited to release the October 2024 version of the BimlStudio Integrated Developer Environment!

## Installation

BimlStudio October 2024 is installed and upgraded through a single consolidated installer.

<!--
MANUALLY UPDATE BUILD NUMBER UPON RELEASE
-->

Build 24.2.4.0, release date: 16 Oct 2024

* [BimlStudio (64-bit) Setup](https://varigence.com/downloads/bimlstudiosetup_x64_24.2.124.0.exe)
* [BimlStudio (32-bit) Setup](https://varigence.com/downloads/bimlstudiosetup_x86_24.2.124.0.exe)


## Azure Data Factory

- Added support for the new SnowflakeV2 Linked Service. This is referenced with the 'Snowflake' element in Biml and the previous linked service is referenced with the 'SnowflakeLegacy' element
- Added support for the new MySqlV2 Linked Service. This is referenced with the 'MySql' element in Biml and the previous linked service is referenced with the 'MySqlLegacy' element
- Added support for the new PostgreSqlV2 Linked Service. This is referenced with the 'PostgreSql' element in Biml and the previous linked service is referenced with the 'PostgreSqlLegacy' element
- Added support for the new MariaDB Linked Service encoding, which was changed by the ADF team without preserving legacy support

## Script Components

- Updated Script component emission to use VSTAMajorVersion of 16 when targeting SQL Server Integration Services (SSIS) 2022 or later

## Metadata Import

- Fixed metadata import data type mapping when the source connection is parameterized
- Added import of views across all system types

## Multi-Factor Authentication (MFA) Improvements

- Improvements to BimlStudio MFA handling across app and helper APIs
- Added command line option to disable the token cache in BimlStudio builds for customers with restrictive MSAL policies

