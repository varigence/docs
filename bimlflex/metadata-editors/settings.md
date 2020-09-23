---
uid: settings
title: Settings
---
# Settings

The **Settings Editor** is used to manage metadata and framework settings in the BimlFlex App. By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions, etc. Align these settings with the organizations best practices and environmental requirements.

<img class="icon-col m-5" src="images/svg-icons/settings.svg" /> **Settings** can be found under Administration in the application menu.

> [!TIP]
> The [Setting Reference Document](../reference-documentation/metadata-settings.md) serves as a complete guide for all settings available in the BimlFlex App.

<!--
TO DO: Update images of BimlFlex Setting Groups once finalized.
-->

## Settings Group

Settings within the BimlFlex app are organized into essential categories, **Setting Groups,** such as Azure, Core, DataVault, Snowflake, etc., with each category containing options within, relevant to its parent category.
Hovering the mouse pointer over individual settings will display tooltips relating to same, along with brief explanation(s) as to how settings will change a project.
<!--
TODO: Add image of floating tool tip
-->
The Settings Group also contains a global Search field.
The Search field contains a drop down menu of all settings, organized alphabetically by **Setting Group**, and allows users to search directly for specific settings.
Searching for a specific setting will automatically navigate the user to the respective **Setting Group** and highlight the specific option within, guiding the user to the exact location needed.
<!--
TODO: Add image of highlighted setting option when searched. Maybe an image of the search term in the search bar, and the option in the window highlighted
-->
When utilizing the Search bar, if a user hovers over a specific search term the tooltip relating to that setting will be displayed. The information displayed in the tooltip from the global search bar will the same as if the user hovered over the actual setting field, as referenced above.

> [!TIP]
> For users who are unsure of the *specific* setting they need, beginning a search with "*" will allow users to search setting descriptions as well as setting titles. This will assist in guiding users to their desired setting based on associated terminology used in their search.

When applicable, settings that involve editing SQL code will appear in a window that mirrors standard SQL input styling and syntax.
<!--
TODO: Add image of SQL Editor Window (Core -> Lookup Table Pattern)
-->

![BimlFlex App - Settings](images/bimlflex-app-settings.64566.png "BimlFlex App - Settings")

Settings that contain required values will be outlined in red and indicated as such.

## Command Bar Buttons

The buttons in the command bar allow actions to be taken on the setting that is active in the editor.

![BimlFlex App - Settings - Command Bar](images/bimlflex-app-settings-command-bar.64566.png "BimlFlex App - Settings - Command Bar")

|Icon|Action|Description|
|-|-|-|
|<div class="icon-col m-5"><img src="images/svg-icons/save.svg" /></div>|Save|This will save any changes displayed in the Settings editor. The **Save** button is only enabled if there are changes in the form. |
|<div class="icon-col m-5"><img src="images/svg-icons/refresh.svg" /></div>|Refresh|This will refresh the currently displayed **Setting**. Any pending changes will be removed. |

## Setting Editor

The **Settings Editor** is used to manage all **Settings**. The fields in the editor are defined in this table along with the validation rules.

|Field|Description|
|-|-|
| Setting Key | Used as a unique name for the setting. Setting Key cannot be changed once created. Setting Key is required. Setting Key must be unique. |
| Setting Value | The value applied to the associated Setting Key. |
| Setting Type | The type of data used by Setting Value. Must be a valid [Setting Type](#setting-types). |
| Setting Data Type | The type of data used by Setting Value. Must be a valid [Setting Type](#setting-types). |
| Setting Default | The default value for the Setting. |
| Display Grouping | The setting group used for organizing settings. |
| Description | The description is used to define the purpose and use of the Setting. |

## Setting Overrides

**Setting Overrides** are used to override Setting Values. Setting Overrides can be added and referenced in the Settings editor. All overrides applied to the Setting are listed in the Overrides section of the editor.

![BimlFlex App - Settings - Overrides](images/bimlflex-app-settings-overrides.64566.png "BimlFlex App - Settings - Overrides")

Clicking the links in the Overrides table will navigate to the item listed. To edit or delete the Setting Override, click the value in the Key column.

Setting Overrides are saved in BimlFlex as **Attributes**. The [Attributes Documentation](attributes.md) provides information on **Attributes** and how to manage them.

### Add a Setting Override

To add a setting override, click <img class="icon-col m-5" src="images/svg-icons/add.svg" /> Add in the top right of the Overrides section and fill out the Add Attribute form.

[!include[Add Attribute Dialog](_dialog-add-attribute.md)]

The Attribute fields are used as the Setting Override as defined in this table.
|Attribute Field Name|Setting Field Name|Description|
|-|-|-|
| Attribute Type || Defines the scope for when the override is applied. |
| Attribute || Defines the Setting field that will be overridden. The **SettingValue** should always be the Attribute being overridden. |
| Attribute Value | Setting Key | The Setting Key for the Setting that is being overridden. |
| Attribute Property | Setting Value | The override for the Setting field defined in Attribute. |
| Description || Description of the Setting Override |

### Edit or Delete a Setting Override

**Setting Overrides** are managed as **Attributes** in BimlFlex. To manage a setting override, click the value in the Key column of the Overrides table. The [Attributes Documentation](attributes.md) provides information on **Attributes** and how to manage them.

[!include[Setting Types](_enum-setting-type.md)]
