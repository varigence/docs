---
uid: batches
title: Batches
---
# Batches 

`Batches` group and help define an ETL/ELT workload.  They are uses by `Projects` to set execution grouping.

## Panel Overview

**Batches Panel**  
![BimlFlex App - Batches](images/bimlflex-app-batches.png "BimlFlex App - Batches")

### Batch Navigation

This area allows for basic navigation and the creation of new `Batches`.

**Batch Navigation Pane**  
![BimlFlex App - Batches - Navigation](images/bimlflex-app-batches-navigation.png "BimlFlex App - Batches - Navigation")

[Add](images/svg-icons/add.svg)

|Icon|Action|Description|
|-|-|-|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/add.svg" /></div>|Add Action|[Add] will start a new to the `Batch` in the [Details Tab].  Once the required information is entered click [Save Action Button] to add the new `Batch` to the list.|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/expanded.svg" /></div>|Collapse Action|[Collapse] will hide the [Batch Navigation Pane].|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/collapsed.svg" /></div>|Expand Action|[Expand] will reveal the [Batch Navigation Pane] after it has been hidden.|

Below the Navigation Action Buttons are a list of `Batches` available for selection.  The highlighted `Batch` indicates the `Batch` that is currently selected.

### Action Buttons

[Action Buttons] list the actions available within the currently selected [Tab].  All [Action Buttons] are context specific to the currently selected [Tab].  Functions of each of the [Action Buttons] are outlined in their appropriate section(s) below.

**Tab Action Buttons**  
![BimlFlex App - Batches - Actions](images/bimlflex-app-batches-actions.png "BimlFlex App - Batches - Actions")

### Tabs

[Tabs] can be used to switch between maintenance of the select `Batch` or provide multiple views of an associated `Object` or `Attribute`.  

**Tabs**  
![BimlFlex App - Batches - Tabs](images/bimlflex-app-batches-tabs.png "BimlFlex App - Batches - Tabs")

#### Tab - Single Form w/Fields or Table

Some [Tabs] only have a single view with either a list of fields of a table with a list of associated entities.  These [Fields] or [Tables] are context dependant and are outlined in the appropriate section(s) below.  Regardless of whether a [Table] or [Field] is displayed, either can be edited from the viewing form.  [Fields] can often be edited by simply clicking in the selected field while a [Table] requires a user to double-click on the value the user wants to edit.

**Single Form**  
![BimlFlex App - Batches - Single Form](images/bimlflex-app-batches-tabs-single-form-and-fields.png "BimlFlex App - Batches - Single Form")

#### Tab - Form w/Views

When a [Tab] has multiple views that may be used, an oval selector will appear listing out alternative views.  The active view is highlighted and can be changed by clicking another available option.  The alternate views only change what properties of an entity are visible/editable and will not filter, remove or resort the underlining list of entities.  As with a [Single Form], tables values can be edited by double-clicking the desired property.

**Form w/Views**  
![BimlFlex App - Batches - Form with Views](images/bimlflex-app-batches-tabs-subforms-and-tables.png "BimlFlex App - Batches - Form with Views")

## Details Tab

The [Details Tab] focuses on general batch information and configuration.  This [Tab] is used to define and create the `Batch` itself.

### Details Tab - Action Buttons

![BimlFlex App - Batches - Details Tab - Actions](images/bimlflex-app-batches-tab-details-actions.png "BimlFlex App - Batches - Details Tab - Actions")


|Icon|Action|Description|
|-|-|-|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/save.svg" /></div>|Save|This will save the currently set of staged changes.  The [Save] button is will only enable if the `Batch` has changes staged and there are no major validation issues with the current `Batch` properties.|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/duplicate-objects.svg" /></div>|Duplicate|This will create a duplicate of the selected `Batch`.  A prompt will appear asking for a [New Name] and a new `Batch` will be created using all of the selected `Batch`'s current properties.|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/archive-delete.svg" /></div>|Archive|This will `hard delete` the selected `Batch`.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore, if possible.|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/refresh.svg" /></div>|Refresh|This will trigger a refresh of the metadata for the selected `Batch`.|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/switch.svg" /></div>|Deleted|This will `soft delete` the currently selected `Batch`.  This will remove the `Batch` from all processing and it will be excluded from all validation.|


**Archive Batch Dialog Box**  
![Archive Batch Dialog Box](images/bimlflex-app-dialog-archive-batch.png "Archive Batch Dialog Box")  

>[!WARNING]
> Archiving is a permanent removal of the selected entity from it's associated table in the metadata database.  Best practice is to use the [Deleted] flag to `soft delete` a entity, and [Archive] should only be used in the case that you both:
>
> 1. The only fix to the current issue requires the [Archive] of the selected entity.
> 2. The full implications that the removing of the selected entity from the metadata system will cause.

![Refresh Action](images/bimlflex-app-action-refresh-enabled.png "Refresh Action")  - This will trigger a refresh of the metadata for the selected `Batch`.

![Deleted Action](images/bimlflex-app-action-deleted-off.png "Deleted Action")  - This will `soft delete` the currently selected `Batch`.  This will remove the `Batch` from all processing and it will be excluded from all validation.

>[!NOTE]
> A [Deleted] entity can be restored by flipping the [Deleted] flag back to `false`.  To view a [Deleted] entity go to your [BimlFlex Options] (1), enable [Show Deleted] (2) and click [Apply] (3).  This will now allow [Deleted] entities to appear.  Please ensure that the option is disabled again once the deleted member has been restored.  
>
> ![BimlFlex App - Enabled Deleted Entities](images/bimlflex-app-options-show-deleted.png "BimlFlex App - Enabled Deleted Entities")

### Details Tab - Fields

![BimlFlex App - Batches - Details Tab - Fields](images/bimlflex-app-batches-tab-details-fields.png "BimlFlex App - Batches - Details Tab - Fields")

[Batch]  
[Precedence Constraint]  
[Threads]  
[Containers]  
[Description]  
[Use Ssis Express]  
[Use Orchestration]  

## Objects Tab

The [Objects Tab] provides quick access to all `Objects` included in the `Batch`.

[!include[Objects Tab](include\objects-tab.md)]

## Attributes Tab

The [Attributes Tab] provides a view of any `Configurations` or `Settings` overrides that have been applied to the selected `Batch`.  

>[!NOTE]
> This is exclusive to the `Batch` level.  Additional overrides may be present on any grains higher or lower than the `Batch`.

[!include[Attributes Tab](include\attributes-tab.md)]