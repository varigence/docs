---
uid: bimlflex-includes-parameters-tab
title: Parameters Tab
summary: Documentation regarding the Parameters Tab
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
### Action Buttons

All **Parameters** assigned to the current entity show here.  New items can be entered entered via the <img class="icon-inline" src="../../static/svg/edit.svg" /> **Edit** action button.  Various [navigational transitions](#navigational-transitions) are available on this form and outlined below.

|Icon|Action|Description|
|-|-|-|
|<div class="icon-col m-5" ><img src="../../static/svg/add.svg" /></div>|<span class="nowrap-col m-5">Add</span>|**Add** will create a new **Parameter** and assign it to the current entity.  When adding an attribute via this button `Attribute Type`, along with the respective linked fields, will be pre-filled on the [Add Parameter Dialog](#add-parameter-dialog).|
| <div class="icon-col m-5"><img src="../../static/svg/save.svg" /></div>           | <span class="nowrap-col m-5">Save</span>    | **Save** will save the currently set of staged changes.  The **Save** button is only enabled if any **Object** has changes staged and there are no major validation issues with the current list of **Object** properties.                                                                                                                                              |
| <div class="icon-col m-5"><img src="../../static/svg/discard.svg" /></div> | Discard | This will **Discard** any unsaved changes and revert to last saved form.|

When checking a single **Parameter** in the overview two additional options will become visible. When selecting two or more parameters only the Archive option will be visible.

| Icon| Action| Description|
| ----| ----- | ---------- |
|<div class="icon-col m-5" ><img src="../../static/svg/archive-delete.svg" /></div>|<span class="nowrap-col m-5">Archive</span>|**Archive** will hard delete the selected **Parameter**.  This will result in the physical removal of the selected record from the BimlFlex database.  The data will no longer be accessible by the BimlFlex Applicationand will require a Database Administrator to restore. Clicking **Archive** will create an [Archive Parameter Dialog](#archive-parameter-dialog).|
|<div class="icon-col m-5" ><img src="../../static/svg/edit.svg" /></div>|<span class="nowrap-col m-5">Edit</span>|**Edit** will open an [Edit Parameter Dialog](#edit-parameter-dialog) to edit the currently selected **Parameter**.  After edits are complete, be sure to click the **Save** button to confirm the changes.|

### Additional Dialogs

#### Add Parameter Dialog

Creates a **Parameter** and associates it with the current entity.  Once entry is finished ensure that the <img class="icon-inline" src="../../static/svg/save.svg" /> **Save** button is clicked.

![Add Parameter Dialog - mtb-20-image](../../static/img/bimlflex-dialog-add-parameter.png "Add Parameter Dialog")

#### Edit Parameter Dialog

Edit the selected **Parameter**.  Once entry is finished ensure that the <img class="icon-inline" src="../../static/svg/save.svg" /> **Save** button is clicked.

![Edit Parameter Dialog -mtb-20-image](../../static/img/bimlflex-dialog-edit-parameter.png "Edit Parameter Dialog")

#### Archive Parameter Dialog

Confirmation warning against the dangers of archiving.  You are required to confirm by both the check box and the *Ok* button.

![Archive Multiple Parameters Dialog - mtb-20-image](../../static/img/bimlflex-dialog-archive-parameter-list.png "Archive Multiple Parameters Dialog")

>[!WARNING]
> Archiving is a permanent removal of the selected entity from its associated table in the BimlFlex Database. The best practice is to first use the *Deleted* flag (soft delete) as an indication that the connection may need to be removed.

### Parameters Tab View

The **Parameters Tab View** provides a different way to review the properties of the **Parameters** associated with the selected entity.
#### Overview

<img
    src="../../static/img/bimlflex-tab-parameters-table.png"
    class="border-image"
    style="border:1px solid #CCC;"
    title="Parameters Tab - Table Descriptions"
/>

#### Parameters Tab Table Components

| Component        | Type                 | Description                        |
| ---------------- | -------------------- | ---------------------------------- |
| Object           | Value                | The name of the **Object** within the current Source **Connection**. See [Objects Documentation](xref:bimlflex-object-editor).|
| Column           | Value                | The name of the **Column** within the current entity. See [Columns Documentation](xref:bimlflex-column-editor).|
| Parameter        | Navigational Value   | The name of the **Parameter** that is being applied to the selected entity. See [Parameters Documentation](xref:bimlflex-parameter-editor).  |
| Operator         | Value                | Operator to use in the **Parameter** when applied to the source **Column**. |
| Default          | Date                 | The parameter load value to use for the first load.          |
| Data Type        | Value                | The data type to use for the **Parameter**.  Must be a valid data type. See [Valid Data Types](xref:bimlflex-metadata-static-values#data-types). |

##### Navigational Transitions

From the **Parameters Tab**, it is possible to navigate directly to the following areas of BimlFlex:

|Item|Action|
|-|-|
|Object|Navigate to [**Object Editor**](xref:bimlflex-object-editor), by clicking <img class="icon-inline" src="../../static/svg/navigate.svg style="width: 18px"/> |
|Column|Navigate to [**Column Editor**](xref:bimlflex-column-editor), by clicking <img class="icon-inline" src="../../static/svg/navigate.svg style="width: 18px"/> |
|Name|Navigate to [**Parameter Editor**](xref:bimlflex-parameter-editor), selecting the clicked **Parameter**|
