---
uid: objects
title: Objects
---
# Objects Editor

[//]: # (TODO: Editor Intro)
BimlFlex `Objects` are the actual
closely mirror a representation of a Relational Database table.  T  They are uses by `Projects` to set execution grouping.

## Editor Overview

The following sections describe the UI elements of the [Objects Editor] and how they are used to author and manage BimlFlex `Objects`.

**Objects Editor**  
<img 
    src="images/bimlflex-app-editor-objects.png"  
    class="border-image image-width-100"  
    style="border: 1px solid #CCC;"  
    title="Objects Editor"  
/>

## Details Tab

The [Details Tab] focuses on general `Object` information and configuration.  This [Tab] is used to define and create the `Object` itself.

### Details Tab - Action Buttons

<img 
    src="images/bimlflex-app-editor-objects-actions.png" 
    class="border-image image-width-100" 
    style="border: 1px solid #CCC;" 
    title="Objects Editor Actions" 
/>

|Icon|Action|Description|Additional Dialog|
|-|-|-|-|
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/save.svg" /></div>|Save|This will save the currently set of staged changes.  The [Save] button is will only enable if the `Object` has changes staged and there are no major validation issues with the current `Object` properties.||
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/archive-delete.svg" /></div>|Archive|This will `hard delete` the selected `Object`.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore, if possible.|[Archive Object](#Archive-Object-Dialog-Box)|
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/clone-objects.svg" /></div>|Clone||[Clone Table](#Clone-Table-Dialog-Box)|
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/duplicate-objects.svg" /></div>|Duplicate|This will create a duplicate of the selected `Object`.  A prompt will appear asking for a [Target Table Name] and a new `Object` will be created using all of the selected `Object`'s current properties.|[Duplicate Table](#Duplicate-Table-Dialog-Box)|
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/refresh.svg" /></div>|Refresh|This will trigger a refresh of the metadata for the selected `Object`.||
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/accelerator.svg" /></div>|Accelerate||Modeling Tool: [[Data Vault Accelerator]](../modeling-tools/accelerator.md)|
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/schema-diagram.svg" /></div>|Diagram||Modeling Tool: [[Schema Diagram]](../modeling-tools/schema-diagram.md)|
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/svg-icons/target-mappings.svg" /></div>|Mapping||Modeling Tool: [[Column Mapping]](../modeling-tools/column-mapping.md)|
||Exclude|This will remove the `Object` and all associated entities from processing and validation.  This is designed to be paired with the [Use My Exclusions (Locally)] global setting to allow for multiple developers to work on different functional areas without deleting or globally excluding entities.||
|<div class="icon-col m-5" style="width:30px;height:30px;background:white"><img src="images/bimlflex-app-action-switch.png" /></div>|Deleted|This will `soft delete` the currently selected `Object`.  This will remove the `Object` and all associated entities from processing and validation.||

[//]: # (TODO: Find a switch SVG to use for Deleted)


>[!TIP]
>
> #### How To Restore An [Excluded] or [Deleted] Entity
>
> A [Deleted] or [Excluded] entity can be restored by flipping the appropriate flag back to `false`.  To view a [Deleted] or [Excluded] entity go to your [BimlFlex Options] (1), enable [Show Deleted] and/or [Show Excluded] (2) and click [Apply] (3).  This will now allow [Deleted] and/or [Exlcuded] entities to appear.  Please ensure that the option is disabled once the deleted member has been restored.  
>
> ![BimlFlex App - Enabled Deleted Entities](images/bimlflex-app-options-show-deleted.png "BimlFlex App - Enabled Deleted Entities")

### Additional Dialogs

[!include[Archive Object Dialog Box](_dialog-archive-object-single.md)]

[!include[Archive Object Dialog Box](_dialog-clone-table.md)]

[!include[Archive Object Dialog Box](_dialog-duplicate-table.md)]

### Details Tab - Standard Fields

[//]: # (TODO: Basic section purpose.)

<img 
    src="images/bimlflex-app-editor-objects-fields-table.png" 
    class="border-image image-width-100" 
    style="border: 1px solid #CCC;" 
    title="Objects Editor Fields" 
/>

|Field|Description|Validation|
|-|-|-|
|[Project]||Dropdown (Existing `Projects`)|
|[Connection]||Dropdown (Existing `Connections`)|
|[Schema]||String|
|[Object Name]||String|
|[Short Name]||String|
|[Object Type]||[Dropdown](#Object-Type-Contrained-List)|
|[Model Object Type]||[Dropdown](#Model-Object-Type-Contrained-List)|
|[Model Override Name]||String|
|[Model Override Short Name]||String|
|[Model Grouping]||String|
|[Exclude From Build]||3-State Checkbox|
|[Exclude From Validation]||3-State Checkbox|
|[Not Persistent]||Boolean|
|[Use Own Thread]||Boolean|
|[Threads]||Integer|
|[Description]||Long String|
|[Comments]||Long String|

### Constrained Lists

[!include[Object Type Constrained List](_enum-object-type.md)]

[!include[Model Object Type Constrained List](_enum-model-object-type.md)]

### Details Tab - SQL Overrides Fields

[//]: # (TODO: SQL Override section purpose.)

<img 
    src="images/bimlflex-app-editor-objects-fields-sql-overrides.png" 
    class="border-image image-width-100" 
    style="border: 1px solid #CCC;" 
    title="Objects Editor Fields" 
/>

|Field|Description|Validation|
|-|-|-|
|[From SQL]||Long String|
|[Object Alias]||String|
|[Join SQL]||Long String|
|[Where SQL]||Long String|
|[Override SQL]||Long String|
|[Select By SQL]||Long String|
|[Group By SQL]||Long String|
|[Order By SQL]||Long String|
|[Create SQL]||Long String|
|[Source Create SQL]||Long String|
|[Depends On Object]||Dropdown (Existing `Objects`)|
|[Inherit From Object]||Dropdown (Existing `Objects`)|
|[Same As Inherited]||Boolean|
|[Use Inherited Name]||Boolean|

## Columns Tab

The [Columns Tab] provides quick access to all `Columns` included in the `Object`.

[!include[Columns Tab](_tab-columns.md)]

## Attributes Tab

The [Attributes Tab] provides a view of any `Configurations` or `Settings` overrides that have been applied to the directly to the selected `Object`.  

>[!NOTE]
> This is exclusive to the `Object` level.  Additional overrides may be present on any grains higher or lower than the `Object`.

[!include[Attributes Tab](_tab-attributes.md)]

## Parameters Tab

The [Parameters Tab] provides a view of any `Parameters` that have been applied to the directly to the selected `Object`.  

>[!NOTE]
> This is exclusive to the `Object` level.  Additional overrides may be present on any grains higher or lower than the `Object`.

[!include[Parameters Tab](_tab-parameters.md)]