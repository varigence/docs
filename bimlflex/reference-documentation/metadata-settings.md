---
uid: bimlflex-metadata-settings
title: BimlFlex Settings
---
# Metadata and framework settings

This document outlines the metadata and framework settings available in BimlFlex.

These settings drive the behavior of the BimlFlex product.

By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc.

Align these settings with the organizations best practices and environmental requirements.

## Metadata column overview

| Key                    | Value |
| ---------------------- | ----- |
| SettingKey             | the setting Key, the internal key BimlFlex refers to, cannot be changed. Is used in bespoke code |
| SettingValue           | the configured value, can be updated to support a different design pattern or behavior when needed |
| SettingDatatype        | the data type the Setting Value uses. Needs to be a valid data type definition |
| SettingDefault         | the default value, where applicable |
| SettingDisplayGrouping | BimlFlex internal grouping |
| SettingDisplayOrder    | BimlFlex internal ordering |
| Description            | Description of the setting. Settings have default descriptions |
| IsDeleted              | Flag to set if a setting should be considered deleted. Unused Settings should be left as is and not be deleted |

[!include[Metadata Settings List](_metadata_settings_export.md)]
