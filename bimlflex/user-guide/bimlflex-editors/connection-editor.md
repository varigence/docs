---
uid: bimlflex-connection-editor
title: Connections
summary: Documentation regarding the BimlFlex Connection editor, including editor fields, action buttons, field descriptions, setting options, and overrides.
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
# Connection Editor

[!include[Connections](../includes/_incl-header-connection.md)]

## Overview

The following sections describe the User Interface elements of the **Connection Editor**, and how they are used to author and manage BimlFlex **Connections**. Detailed descriptions of each component is also available in the [reference documentation covering connections](xref:bimlflex-reference-documentation-connection-entity).

<img
    src="../../static/img/bimlflex-editor-connections.png"
    class="border-image"
    style="border: 1px solid #CCC;"
    title="Connections Editor"
/>

> [!NOTE]
> Detailed descriptions of all **Connection Editor** fields and options are available in the [Reference Documentation](xref:bimlflex-reference-documentation-connection-entity).

The **Connection Editor** contains four main tabs that can be used to modify connection details, as well as various properties and settings related to the **Objects** that are associated with the selected connection.

## Connection Tab

The **Connection Tab** is the first tab in the **Connection Editor**, and it is selected by default. The connection tab focuses on general connection information and configuration. This tab is used to define and create the connection itself.

### Action Buttons

| Icon | Action | Description |
|--- |--- |--- |
| <div class="icon-col m-5"><img src="../../static/svg/save.svg"/></div> | Save | This will persist changes made to the **Connection** modified in the designer. `Ctrl+S` can also be used as a shortcut.|
| <div class="icon-col m-5"><img src="../../static/svg/discard.svg" /></div> | Discard | This will Discard any unsaved changes, and revert to last saved form.|
|<div class="icon-col m-5"><img src="../../static/svg/archive-delete.svg" /></div> | Archive | Archive will remove the **Connection** from the active metadata repository, and move it to the metadata archive. Clicking **Archive** displays the [Archive Connection Dialog](#archive-connection-dialog).|
| <div class="icon-col m-5"><img src="../../static/svg/duplicate-objects.svg" /></div> | Duplicate | This will create a duplicate of the selected **Connection**.  A [Duplicate Connection Dialog](#duplicate-connection-dialog) will appear asking for a *Connection Name*. A new **Connection** will be created using most of the selected **Connection**'s current properties (except **Attributes** and **Parameters**).|
| <div class="icon-col m-5"><img src="../../static/svg/import-metadata.svg"/></div> | Import Metadata | Import Metadata using the configured connection details. For more information please refer to the [importing metadata section](xref:bimlflex-concepts-importing-metadata). |
| <img src="../../static/img/bimlflex-action-switch.png" /> | Cloud | When enabled, this allows the configuration of Linked Services. This only applies to Azure Data Factory (ADF) deployments.|
| <div class="icon-col m-5"><img src="../../static/svg/checkbox-indeterminate.svg" /></div> | Excluded | This will determine if the **Connection** and its associated entities will be excluded along with the rest of the solution. This is designed to be paired with the `Use My Exclusions (Locally)` global setting to allow for multiple developers to work on different functional areas without deleting or globally excluding entities. |
| <img src="../../static/img/bimlflex-action-switch.png" /> | Deleted | This will soft-delete the selected **Connection**.  This will remove the **Connection** and all associated entities from processing and validation.|

### Linked Services

**Connections** can be configured to be `cloud enabled` by modifying the *Cloud Selection* button on the top-right of the connection screen. This will show (or hide) the Linked Services details, which are required to deploy cloud-based solutions. For information on Linked Services and their configuration, please refer to [Configuring a Linked Service Connection](xref:create-linked-service-connection).

### Additional Dialogs

#### Archive Connection Dialog

When a connection is archived, BimlFlex will display a confirmation box warning against the dangers of archiving. Users are required to confirm by ticking the checkbox and then pressing the *Ok* button.

![Archive Connection Dialog -mtb-20-image](../../static/img/bimlflex-dialog-archive-connection-single.png "Archive Connection Dialog")

>[!WARNING]
> Archiving is a permanent removal of the selected entity from its associated table in the BimlFlex Database. The best practice is to first use the *Deleted* flag (soft delete) as an indication that the connection may need to be removed.

[!include[Duplicate Connection Dialog](../dialogs/_dialog-duplicate-connection.md)]

### Allowed Values

#### Integration Stages

[!include[Integration Stages](../../reference-documentation/static-data/_enum-integration-stage.md)]

#### Connection Types

[!include[Connection Types](../../reference-documentation/static-data/_enum-connection-type.md)]

#### System Types

[!include[Connection Types](../../reference-documentation/static-data/_enum-system-type.md)]

## Objects Tab

The **Objects Tab** provides quick access to all **Objects** associated with the **Connection**.

[!include[Objects Tab](../includes/_incl-tab-objects.md)]

## Attributes Tab

The **Attributes Tab** provides a view of any **Configuration** or **Setting** overrides that have been applied to the selected **Connection**.  

[!include[Attributes Tab](../includes/_incl-tab-attributes.md)]

## Parameters Tab

The **Parameters Tab** provides a view of any **Parameters** overrides that are associated with the selected **Connection** and its associated **Objects**.  

[!include[Parameters Tab](../includes/_incl-tab-parameters.md)]