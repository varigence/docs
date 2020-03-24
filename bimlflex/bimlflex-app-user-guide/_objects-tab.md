### Objects Tab - Action Buttons

![BimlFlex App - Batches - Objects Tab - Actions](images/bimlflex-app-tab-objects-actions.png "BimlFlex App - Batches - Objects Tab - Actions")

|Icon|Action|Description|Additional Dialog|
|-|-|-|-|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/add.svg" /></div>|Add|[Add] will add a new `Object` to the `Batch`.|[Add Object]|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/save.svg" /></div>|Save|[Save] will save the currently set of staged changes.  The [Save] button is will only enable if any `Object` has changes staged and there are no major validation issues with the current list of `Object` properties.||
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/archive-delete.svg" /></div>|Archive|[Archive] will `hard delete` the selected `Object`.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore, if possible.|[Archive Objects]|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/refresh.svg" /></div>|Refresh|[Refresh] will trigger a refresh of the metadata for the selected list of `Objects`.||

>[!WARNING]
> Archive:  
> Archiving is a permanent removal of the selected entity from it's associated table in the metadata database.  The best practice is to first use the [Deleted] flag to `soft delete` if you need to remove an entity.  [Archive] should only be used in the case that both:
>
> 1. The only fix to the current issue requires the [Archive] of the selected entity.
> 2. The full implications that the removing of the selected entity from the metadata system will cause.

### Additional Dialogs

**Add Object Dialog Box**  
![Add Object Dialog Box](images/bimlflex-app-dialog-add-object.png "Add Object Dialog Box")  

**Archive Object Dialog Box**  
![Archive Object Dialog Box](images/bimlflex-app-dialog-archive-object-list.png "Archive Object Dialog Box")  

### Objects Tab - Views

The [Objects Tab] provide quick and easy access to all `Objects` associated with the selected entity.  While the items in the list will not change, the views provide a quick concise view of various groupings of attributes.  General purpose and overview of each view will be outlined below.

> [!TIP]
> See the [[Objects Documentation]](objects.md) for further details on creating or editing and `Object` along with details on individual property values.

#### View: Overview

The [Overview] is available to give quick access to the more physical properties of the `Objects` relating to the selected entity.  These are representations of the physical `Source System` and represent the raw definitions of the object in it's original form.  

![Overview View](images/bimlflex-app-tab-objects-view-overview.png "Overview View")  

#### View: Model Overrides

//TODO: Model Overrides Description

![Overview View](images/bimlflex-app-tab-objects-view-model-overrides.png "Overview View")  

#### View: Query Overrides

//TODO: Query Overrides Description

![Overview View](images/bimlflex-app-tab-objects-view-query-overrides.png "Overview View")  

#### View: Dependencies

//TODO: Dependencies Description

![Overview View](images/bimlflex-app-tab-objects-view-dependencies.png "Overview View")  