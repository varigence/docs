---
uid: bimlflex-app-batches
title: Batches
summary: Documentation regarding the BimlFlex Batches editor, including editor fields, action buttons, field descriptions, and setting options. 
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
# Batch Editor

BimlFlex **Batches** group and help to define an ETL/ELT workload.  They are used by **Projects** to set execution grouping.

## Editor Overview

The following sections describe the UI elements of the Batches Editor and how they are used to author and manage BimlFlex **Batches**.

**Batch Editor**

![BimlFlex - Batches Editor](images/bfx-batches-editor-overview.png "BimlFlex - Batches Editor")

<!--
<img
    src="images/bimlflex-app-editor-batches.png"
    title="Batches Editor"
/>
-->

## Details Tab

The **Details Tab** focuses on general batch information and configuration.  This tab is used to define and create the **Batch** itself.

### Details Tab - Action Buttons  

![BimlFlex Batches Editor - Action Buttons](images/bfx-batches-action-buttons.png "BimlFlex Batches Editor - Action Buttons")

<!--
<img
    src="images/bimlflex-app-editor-batches-actions.png"
    title="Batches Editor Actions"
/>
-->

|Icon|Action|Description|
|-|-|-|
| <div class="icon-col m-5"><img src="images/svg-icons/save.svg" /></div>| Save | This will save the current set of staged changes.  The **Save** button is will only enable if the **Batch** has changes staged and there are no major validation issues with the current **Batch** properties. |
| <div class="icon-col m-5"><img src="images/svg-icons/discard.svg" /></div>| Discard | This will **Discard** any unsaved changes and revert to last saved form. |
| <div class="icon-col m-5"><img src="images/svg-icons/archive-delete.svg" /></div> | Archive | This will hard delete the selected **Batch**.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore, if possible. Clicking **Archive** will create an [Archive Batch Dialog](#archive-batch-dialog-box). |
| <div class="icon-col m-5"><img src="images/svg-icons/duplicate-objects.svg" /></div> | Duplicate | This will create a duplicate of the selected **Batch**. A Duplicate Batch Dialog will appear asking for a name for the new **Batch**. A new **Batch** will be created using all of the selected **Batch's** current properties. |
| <img src="images/bimlflex-app-action-switch.png" /> | Deleted | This will soft delete the currently selected **Batch**.  This will remove the **Batch** from all processing and it will be excluded from all validation. |

[//]: # (TODO: Find a switch SVG to use for Deleted)

[!include[Restore Entities Tip](_tip-restore-entities.md)]

### Additional Dialogs

[!include[Archive Batch Dialog Box](_dialog-archive-batch-single.md)]

### Details Tab - Fields

<img
    src="images/bimlflex-app-editor-batches-fields.png"
    title="Batches Editor Fields"
/>

|Field|Description|
|-|-|
| Batch | The name of the BimlFlex **Batch**.  This is the value that will be appended by "_Batch" and used in the naming of the batch DTSX (SSIS) or Pipeline (ADF). |
| Precedence Constraint | BimlFlex **Batches** execute packages and the Precedence Constraint can be changed from Success to Completion to continue loading in case of individual failures. Must be a valid [Precedence Constraint](#precedence-constraints). |
| Threads | The default number of packages that can be executed in parallel within the **Batch**. Based on the topological sort and dependencies packages are grouped into execution layers. Within each layer (Sequence Container) multiple control flows pipelines can be executed in parallel. |
| Containers | The default number of sequence containers that can be executed within the **Batch**. Based on the topological sort and dependencies packages are grouped into execution layers. Within each layer (Sequence Container) multiple control flows pipelines can be executed in parallel. |
| Description | Optional metadata to provide description. |
| Use Ssis Express | Set this value to `true` when extracting data from a source that only has SQL Server Express installed. Note that with SSIS Express there is limited functionality. |
| Use Orchestration | BimlFlex comes with an orchestration framework that will control the ability to restart a failed batch. Set this attribute to `false` if you would like to bypass the default behavior. |

### Allowed Values

[!include[Precedence Constraints](_enum-precedence-constraint.md)]

## Objects Tab

The **Objects Tab** provides quick access to all **Objects** included in the **Batch**.  

[!include[Objects Tab](_tab-objects.md)]

## Attributes Tab

The **Attributes Tab** provides a view of any **Configurations** or **Setting** overrides that have been applied to the selected **Batch**.  

>[!NOTE]
> This is exclusive to the **Batch** level.  Additional overrides may be present on any grains higher or lower than the **Batch**.

[!include[Attributes Tab](_tab-attributes.md)]
