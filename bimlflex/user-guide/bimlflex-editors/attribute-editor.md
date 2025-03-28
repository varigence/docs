---
uid: bimlflex-attribute-editor
title: Attributes
summary: Documentation regarding the BimlFlex Attribute editor, including editor fields, field descriptions, and data types. 
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Attribute Editor

[!include[Attributes](../includes/_incl-header-attribute.md)]

## Overview

![BimlFlex - Attribute Editor](../../static/img/bfx-attributes-editor-overview.png "BimlFlex - Attribute Editor")

> [!NOTE]
> Detailed descriptions of all **Attribute Editor** fields and options are available in the [Reference Documentation](xref:bimlflex-reference-documentation-entities-index).

## Action Buttons

![BimlFlex Attribute Editor - Action Buttons](../../static/img/bfx-attributes-action-buttons.png "BimlFlex Attribute Editor - Action Buttons")

| Icon | Action | Description |
|-|-|-|
| <div class="icon-col m-5"><img src="../../static/svg/add.svg"/></div> | Add | This will add an attribute to the current **Project**. |
| <div class="icon-col m-5"><img src="../../static/svg/filter-clear.svg"/></div> | Filter | This will allow users to search for existing **Attributes** based on key words and search terms. |
| <div class="icon-col m-5"><img src="../../static/svg/expanded.svg"/></div> | Collapse | This will allow users to collapse the existing **Attributes** pane. |
| <div class="icon-col m-5"><img src="../../static/svg/collapsed.svg"/></div> | Expand | This will allow users to expand the existing **Attributes** pane. |
| <div class="icon-col m-5"><img src="../../static/svg/save.svg"/></div> | Save | Saves any changes made in the form. The **Save** button is will only enabled if there are unsaved changes in the form and no major validation errors. |
| <div class="icon-col m-5"><img src="../../static/svg/discard.svg"/></div> | Discard | This will **Discard** any unsaved changes and revert to last saved form. |
| <div class="icon-col m-5"><img src="../../static/svg/archive-delete.svg"/></div> | Archive | This will hard delete the selected **Attribute**.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex Applicationand will require a Database Administrator to restore, if possible. Clicking **Archive** will create an [Archive Attribute Dialog](#archive-attribute-dialog). |
| <div class="icon-col m-5"><img src="../../static/svg/duplicate-objects.svg" /></div> | Duplicate | This will create a duplicate of the selected **Attribute**.  A [Duplicate Attribute dialog](#duplicate-attribute-dialog) will appear asking for a new name. A new **Attribute** will be created using all of the selected **Attribute's** properties. |
| <div class="icon-col m-5"><img src="../../static/img/bimlflex-action-switch.png" /></div> | Deleted | This will soft delete the currently selected **Attribute**.  This will remove the **Attribute** from processing and validation. |

## Attribute Editor Fields

The fields available in the **Attribute** form change depending on the selected [Attribute Type](#attribute-types). The `Attribute Type` defines the scope of the BimlFlex process that the **Attribute** is applied to.

<img src="../../static/img/attributes-fields.64566.png" title="{Entity Plural} Editor Fields"/>

### Defining Attribute Scope

These are the different fields required to define the scope of the **Attribute** in BimlFlex.

| Attribute Type (Scope) | Applies To |
|-|-|
| Batch | Batch |
| Column | Connection, Object, Column |
| Connection | Connection |
| Customer | Everything |
| Object | Connection, Object |
| Project | Project |

### Additional Dialogs

[!include[Archive Attribute Dialog](../dialogs/_dialog-archive-attribute-single.md)]

[!include[Duplicate Attribute Dialog](../dialogs/_dialog-duplicate-attribute.md)]

### Allowed Values

#### Attribute Types

[!include[Attribute Types](../../reference-documentation/static-data/_enum-attribute-type.md)]
