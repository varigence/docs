---
uid: bimlflex-project-editor
title: Projects
summary: Documentation regarding the BimlFlex Projects editor, including editor fields, action buttons, field descriptions, setting options, and overrides.
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
# Project Editor

[!include[Projects](../includes/_incl-header-project.md)]

## Overview

The following sections describe the user interface elements of the **Project Editor**, and how they are used to author and manage BimlFlex **Projects**.

![BimlFlex Project Editor](../../static/img/bfx-projects-editor-overview.png "BimlFlex Project Editor")

> [!NOTE]
> Detailed descriptions of all **Project Editor** fields and options are available in the [Reference Documentation](xref:bimlflex-reference-documentation-project-entity).

## Project Tab

The **Project Tab** is the first tab in the **Project Editor**, and it is selected by default. The project tab focuses on general connection information and configuration. This tab is used to define and create the project itself.

### Action Buttons

|Icon|Action|Description|
|-|-|-|
|<div class="icon-col m-5"><img src="../../static/svg/save.svg" /></div>|Save|This will persist changes made to the **Project** modified in the designer. `Ctrl+S` can also be used as a shortcut.|
| <div class="icon-col m-5"><img src="../../static/svg/discard.svg" /></div> | Discard | This will discard any unsaved changes, and revert to last saved form.|
|<div class="icon-col m-5"><img src="../../static/svg/archive-delete.svg" /></div>|Archive|Archive will remove the **Project** from the active metadata repository, and move it to the metadata archive. Clicking **Archive** displays the [Archive Connection Dialog](#archive-project-dialog).|
|<div class="icon-col m-5"><img src="../../static/svg/duplicate-objects.svg" /></div>|Duplicate|This will create a duplicate of the selected **Project**.  A prompt will appear for creating a new **Project** using all of the selected **Project**'s current properties.|
|<div class="icon-col m-5"><img src="../../static/svg/import-metadata.svg" /></div>|<span class="nowrap-col m-5">Import Metadata</span>|This will bring up the **Metadata Importer**. Refer to the [Import Metadata](xref:bimlflex-concepts-importing-metadata) guide for more information.|
| <div class="icon-col m-5"><img src="../../static/svg/checkbox-indeterminate.svg" /></div> | Excluded | This will determine if the **Project** and all associated entities will be excluded from processing and validation along with the rest of the solution. This is designed to be paired with the `Use My Exclusions (Locally)` global setting to allow for multiple developers to work on different functional areas without deleting or globally excluding entities. |
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img style="filter: brightness(100%) contrast(95%) grayscale(100%);" src="../../static/img/bimlflex-action-switch.png" /></div>|Deleted|This will soft delete the currently selected **Project**. This will remove the **Project** and all associated entities from processing and validation. For information on how to add excluded or deleted items back to the scope, please read our [tips and tricks section](xref:bimlflex-tips-and-tricks-overview#restoring-an-excluded-or-deleted-entity).|

### Additional Dialogs

#### Archive Project Dialog

Confirmation box warning against the dangers of archiving.  You are required to confirm by both the check box and the *Ok* button.

![Archive Selected Project Dialog - mtb-20-image](../../static/img/bimlflex-dialog-archive-object.png "Archive Selected Project Dialog")

>[!WARNING]
> Archiving is a permanent removal of the selected entity from its associated table in the BimlFlex Database. The best practice is to first use the _deleted_ flag (soft delete) as an indication that the connection may need to be removed.

### Allowed Values

#### Integration Templates

[!include[Integration Templates](../../eference-documentation/static-data/_enum-integration-template.md)]

## Objects Tab

The **Objects Tab** provides quick access to all **Objects** included in the **Project**, as per the configuration **Connections**.

[!include[Objects Tab](../includes/_incl-tab-objects.md)]

## Attributes Tab

The **Attributes Tab** provides a view of any **Configurations** or **Settings** overrides that have been applied to the directly to the selected **Project**.

[!include[Attributes Tab](../includes/_incl-tab-attributes.md)]
