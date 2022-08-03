---
uid: bimlflex-application-versions
title: Versions
summary: Documentation regarding the BimlFlex Versions editor, including editor fields, action buttons, field descriptions, setting options, and overrides.
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Version Editor

The **Version Editor** is used to manage versions of the metadata and BimlFlex versions for the active customer. The [Version Concept](xref:bimlflex-concepts-version) allows for capturing changes in metadata and managing versions over time.

> [!NOTE]
> Detailed descriptions of all **Version Editor** fields and options are available in the [Reference Documentation](xref:bimlflex-app-reference-documentation-Connections).

## Overview

<img class="icon-inline" src="images/svg-icons/versions.svg" /> **Versions** can be found under Administration in the application menu.

![BimlFlex Versions Editor - Overview](images/bfx-versions-editor-overview.png "BimlFlex Versions Editor - Overview")

## Action Buttons

The buttons in the command bar allow actions to be taken on the selected **Version**.

![BimlFlex Versions - Command Bar Buttons](images/bfx-versions-command-bar.png "BimlFlex Versions - Command Bar Buttons")

| Icon | Action | Description |
| ---- | ------ | ----------- |
| <div class="icon-col m-5" ><img src="images/svg-icons/save.svg" /></div> | Save | This will save any changes displayed in the Versions form.  The **Save** button is only enabled if there are changes in the form. |
| <div class="icon-col m-5"><img src="images/svg-icons/discard.svg" /></div> | Discard | This will **Discard** any unsaved changes and revert to last saved form. |
| <div class="icon-col m-5"><img src="images/svg-icons/duplicate-objects.svg" /></div> | Duplicate | This will create a duplicate of the selected **Version**.  A Duplicate Parameter Dialog will appear asking for a *Version Name* and a new **Version** will be created using all of the selected **Version**'s current properties. Please note that the metadata itself will *not* be copied to the new version this way, for this feature please use the **Clone Version** option available in the [BimlFlex dashboard](xref:bimlflex-dashboard) |
| <div class="icon-col m-5" ><img style="filter: brightness(100%) contrast(95%) grayscale(100%);" src="images/bimlflex-app-action-switch.png" /></div> | Deleted | This will soft-delete the currently selected **Version**. This version will only be visible if *Show Deleted* is enabled in BimlFlex settings. |
