---
uid: bimlflex-version-editor
title: Versions
summary: Documentation regarding the BimlFlex Versions editor, including editor fields, action buttons, field descriptions, setting options, and overrides.
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Version Editor

[!include[Versions](../includes/_incl-header-version.md)]

## Overview

<img class="icon-inline" src="../../static/svg/versions.svg" /> **Versions** can be found under Administration in the application menu.

![BimlFlex Versions Editor - Overview](../../static/img/bfx-versions-editor-overview.png "BimlFlex Versions Editor - Overview")

> [!NOTE]
> Detailed descriptions of all **Version Editor** fields and options are available in the [Reference Documentation](xref:bimlflex-reference-documentation-connection-entity).

## Action Buttons

The buttons in the command bar allow actions to be taken on the selected **Version**.

![BimlFlex Versions - Command Bar Buttons](../../static/img/bfx-versions-command-bar.png "BimlFlex Versions - Command Bar Buttons")

| Icon | Action | Description |
| ---- | ------ | ----------- |
| <div class="icon-col m-5" ><img src="../../static/svg/save.svg" /></div> | Save | This will save any changes displayed in the Versions form.  The **Save** button is only enabled if there are changes in the form. |
| <div class="icon-col m-5"><img src="../../static/svg/discard.svg" /></div> | Discard | This will **Discard** any unsaved changes and revert to last saved form. |
| <div class="icon-col m-5"><img src="../../static/svg/duplicate-objects.svg" /></div> | Duplicate | This will create a duplicate of the selected **Version**.  A Duplicate Parameter Dialog will appear asking for a *Version Name* and a new **Version** will be created using all of the selected **Version**'s current properties. Please note that the metadata itself will *not* be copied to the new version this way, for this feature please use the **Clone Version** option available in the [BimlFlex dashboard](xref:bimlflex-dashboard) |
| <div class="icon-col m-5" ><img style="filter: brightness(100%) contrast(95%) grayscale(100%);" src="../../static/img/bimlflex-action-switch.png" /></div> | Deleted | This will soft-delete the currently selected **Version**. This version will only be visible if *Show Deleted* is enabled in BimlFlex settings. |
