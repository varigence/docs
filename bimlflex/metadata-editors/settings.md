---
uid: settings
title: Settings
---
# Settings

The `Settings` module is used to manage metadata and framework settings in the BimlFlex App. By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc. Align these settings with the organizations best practices and environmental requirements.

<img class="icon-col m-5" style="width:20px; height:20px;background:#EEE;" src="images/svg-icons/settings.svg" /> `Settings` can be found under Administration in the application menu.

> [!TIP]
> The [Setting Reference Document](../reference-documentation/metadata-settings.md) serves as a complete guide for all settings available in the BimlFlex App.

![BimlFlex App - Settings](images/bimlflex-app-settings.64566.png "BimlFlex App - Settings")

## Command Bar Buttons

The buttons in the command bar allow actions to be taken on the setting that is active in the form.

![BimlFlex App - Settings - Command Bar](images/bimlflex-app-settings-command-bar.64566.png "BimlFlex App - Settings - Command Bar")

|Icon|Action|Description|
|-|-|-|
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/save.svg" /></div>|Save|This will save any changes displayed in the Settings form.  The [Save] button is only enabled if there are changes in the form. |
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/refresh.svg" /></div>|Refresh|This will refresh the currently displayed `Setting`. Any pending changes will be removed. |

## Setting Form

The `Settings` form is used to manage all `Settings`. The fields in the form are defined in this table along with the validation rules.

|Field|Description|Validation Rules|
|-|-|-|
| Setting Key | Used as a unique name for the setting. Setting Key cannot be changed once created. |Setting Key is required. Setting Key must be unique. |
| Setting Value | The value applied to the associated Setting Key. ||
| Setting Type | The type of data used by Setting Value. | Must be a valid [Setting Type](#setting-types). |
| Setting Data Type | The type of data used by Setting Value. | Must be a valid [Setting Type](#setting-types). |
| Setting Default | The default value for the Setting. ||
| Display Grouping | The setting group used for organizing settings. ||
| Description | The description is used to define the purpose and use of the Setting. ||

## Setting Overrides

`Setting Overrides` are used to override Setting Values. Setting Overrides can be added and referenced in the Settings form. All overrides applied to the Setting are listed in the Overrides section of the form. 

![BimlFlex App - Settings - Overrides](images/bimlflex-app-settings-overrides.64566.png "BimlFlex App - Settings - Overrides")

Clicking the links in the Overrides table will navigate to the item listed. To edit or delete the Setting Override, click the value in the Key column.

Setting Overrides are saved in BimlFlex as `Attributes`. The [Attributes Documentation](attributes.md) provides information on `Attributes` and how to manage them.

### Add a Setting Override

To add a setting override, click <img class="icon-col m-5" style="width:20px; height:20px;background:#EEE;" src="images/svg-icons/add.svg" /> Add in the top right of the Overrides section and fill out the Add Attribute form.

[!include[Add Attribute Dialog](_dialog-add-attribute.md)]

The Attribute fields are used as the Setting Override as defined in this table.
|Attribute field Name|Setting Field Name|Description|
|-|-|-|
|Attribute Type||Defines the scope for when the override is applied. |
|Attribute||Defines the Setting field that will be overridden. The `SettingValue` should always be the Attribute being overridden. |
|Attribute Value|Setting Key|The Setting Key for the Setting that is being overridden. |
|Attribute Property|Setting Value|The override for the Setting field defined in Attribute. |
|Description||Description of the Setting Override|

### Edit or Delete a Setting Override

`Setting Overrides` are managed as `Attributes` in BimlFlex. To manage a setting override, click the value in the Key column of the Overrides table. The [Attributes Documentation](attributes.md) provides information on `Attributes` and how to manage them.

[!include[Setting Types](_enum-setting-type.md)]
