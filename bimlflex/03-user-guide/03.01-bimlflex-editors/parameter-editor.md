---
uid: bimlflex-parameter-editor
title: Parameters
summary: Documentation regarding the BimlFlex Parameter editor, including editor fields, action buttons, field descriptions, setting options, and overrides.
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
# Parameter Editor

[!include[Parameters](../includes/_incl-header-parameter.md)]

## Overview  

The following sections describe the User Interface elements of the Parameter Editor and how they are used to author and manage BimlFlex parameters.

![BimlFlex Parameter Editor - Grid View](../../static/img/bfx-parameters-overview.png "BimlFlex Parameter Editor - Grid View")

Parameters in BimlFlex are displayed in the [**Treeview**](xref:bimlflex-treeview). Selecting any parameter will open the editor.

![BimlFlex Parameter Editor](../../static/img/bfx-parameter-editor.png "BimlFlex Parameter Editor")

> [!NOTE]
> Detailed descriptions of all **Parameter Editor** fields and options are available in the [Reference Documentation](xref:bimlflex-reference-documentation-Connections).

## Action Buttons  

![BimlFlex Parameters Action Buttons](../../static/img/bfx-parameters-action-bar.png "BimlFlex Parameters Action Buttons")

|Icon|Action|Description|
|-|-|-|
| <div class="icon-col m-5"><img src="../../static/img/save.svg" /></div> | Save | This will save the currently set of staged changes.  The **Save** button is will only enable if the **Parameter** has changes staged and there are no major validation issues with the current **Parameter** properties.|
| <div class="icon-col m-5"><img src="../../static/img/discard.svg" /></div> | Discard | This will **Discard** any unsaved changes and revert to last saved form. |
|<div class="icon-col m-5"><img src="../../static/img/archive-delete.svg" /></div> | Archive | This will hard delete the selected **Parameter**.  This will result in the physical removal of the selected record from the BimlFlex Database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore, if possible. Clicking **Archive** creates an [Archive Parameter Dialog](#archive-parameter-dialog). |
| <div class="icon-col m-5"><img src="../../static/img/duplicate-objects.svg" /></div> | Duplicate | This will create a duplicate of the selected **Parameter**.  A [Duplicate Parameter Dialog](#duplicate-parameter-dialog) will appear asking for a *Parameter Name* and a new **Parameter** will be created using all of the selected **Parameter**'s current properties. |
| <img src="images/bimlflex-action-switch.png" /> | Deleted | This will soft delete the currently selected **Parameter**.  This will remove the **Parameter** and all associated entities from processing and validation. |

## Additional Dialogs  

[!include[Archive Parameter Dialog](../dialogs/_dialog-archive-parameter-single.md)]

[!include[Duplicate Parameter Dialog](../dialogs/_dialog-duplicate-parameter.md)]

## Allowed Values  

### Data Types

[!include[Data Types](../../07-reference-documentation/static-data/_enum-data-type.md)]
