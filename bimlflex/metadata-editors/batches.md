---
uid: batches
title: Batches
---
# Batches Editor

BimlFlex `Batches` group and help to define an ETL/ELT workload.  They are uses by `Projects` to set execution grouping.

## Editor Overview

The following sections describe the UI elements of the Batches Editor and how they are used to author and manage BimlFlex `Batches`.

**Batches Editor**  
![BimlFlex App - Batches](images/bimlflex-app-batches.png "BimlFlex App - Batches")

## Details Tab

The [Details Tab] focuses on general batch information and configuration.  This [Tab] is used to define and create the `Batch` itself.

### Details Tab - Action Buttons

![BimlFlex App - Batches - Details Tab - Actions](images/bimlflex-app-batches-details-actions.png "BimlFlex App - Batches - Details Tab - Actions")

|Icon|Action|Description|Additional Dialog|
|-|-|-|-|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/save.svg" /></div>|Save|This will save the currently set of staged changes.  The [Save] button is will only enable if the `Batch` has changes staged and there are no major validation issues with the current `Batch` properties.||
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/duplicate-objects.svg" /></div>|Duplicate|This will create a duplicate of the selected `Batch`.  A prompt will appear asking for a [New Name] and a new `Batch` will be created using all of the selected `Batch`'s current properties.||
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/archive-delete.svg" /></div>|Archive|This will `hard delete` the selected `Batch`.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore, if possible.|[Archive Batch](#Archive-Batch-Dialog-Box)
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/refresh.svg" /></div>|Refresh|This will trigger a refresh of the metadata for the selected `Batch`.||
|<div style="width:30px;height:30px;background:white"><img src="images/bimlflex-app-action-switch.png" /></div>|Deleted|This will `soft delete` the currently selected `Batch`.  This will remove the `Batch` from all processing and it will be excluded from all validation.||

[//]: # (TODO: Find a switch SVG to use for Deleted)

>[!WARNING]
> Archive:  
> Archiving is a permanent removal of the selected entity from it's associated table in the metadata database.  The best practice is to first use the [Deleted] flag to `soft delete` if you need to remove an entity.  [Archive] should only be used in the case that both:
>
> 1. The only fix to the current issue requires the [Archive] of the selected entity.
> 2. The full implications that the removing of the selected entity from the metadata system will cause.

### Additional Dialogs

[!include[Archive Batch Dialog Box](_dialog-archive-batch.md)]

>[!TIP]
>
> #### How To Restore A [Deleted] Entity
>
> A [Deleted] entity can be restored by flipping the [Deleted] flag back to `false`.  To view a [Deleted] entity go to your [BimlFlex Options] (1), enable [Show Deleted] (2) and click [Apply] (3).  This will now allow [Deleted] entities to appear.  Please ensure that the option is disabled again once the deleted member has been restored.  
>
> ![BimlFlex App - Enabled Deleted Entities](images/bimlflex-app-options-show-deleted.png "BimlFlex App - Enabled Deleted Entities")


### Details Tab - Fields

![BimlFlex App - Batches - Details Tab - Fields](images/bimlflex-app-batches-details-fields.png "BimlFlex App - Batches - Details Tab - Fields")


|Field|Description|Validation|
|-|-|-|
|[Batch]|The name of the BimlFlex `Batch`.  This is the value will be appended by '_Batch` and used in the naming of the batch DTSX (SSIS) or Pipeline (ADF).|String|
|[Precedence Constraint]|BimlFlex Batches execute packages and the Precedence Constraint can be changed from Success to Completion to continue loading in case of individual failures.|[Dropdown](#Precedence-Constraint-Dropdown)|
|[Threads]|The default number of packages that can be executed in parallel within the Batch. Based on the topological sort and dependencies packages are grouped into execution layers. Within each layer (Sequence Container) multiple control flows pipelines can be executed in parallel.|Integer|
|[Containers]|The default number of sequence containers that can be executed within the Batch. Based on the topological sort and dependencies packages are grouped into execution layers. Within each layer (Sequence Container) multiple control flows pipelines can be executed in parallel.|Integer|
|[Description]|Optional metadata to provide description.|String|
|[Use Ssis Express]|Set this value to `true` when extracting data from a source that only has SQL Server Express installed. Note that with SSIS Express there is limited functionality.|Boolean|
|[Use Orchestration]|BimlFlex comes with an orchestration framework that will control the ability to restart a failed batch. Set this attribute to `false` if you would like to bypass the default behavior.|Boolean|

### Constrained Lists

[!include[Precedence Constraint Constrained List](_enum-precedence-constraint.md)]

## Objects Tab

The [Objects Tab] provides quick access to all `Objects` included in the `Batch`.

[!include[Objects Tab](_tab-objects.md)]

## Attributes Tab

The [Attributes Tab] provides a view of any `Configurations` or `Settings` overrides that have been applied to the selected `Batch`.  

>[!NOTE]
> This is exclusive to the `Batch` level.  Additional overrides may be present on any grains higher or lower than the `Batch`.

[!include[Attributes Tab](_tab-attributes.md)]