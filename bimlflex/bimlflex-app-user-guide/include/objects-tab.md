### Objects Tab - Action Buttons

![BimlFlex App - Batches - Objects Tab - Actions](images/bimlflex-app-batches-tab-objects-actions.png "BimlFlex App - Batches - Objects Tab - Actions")

![Add Action](images/bimlflex-app-action-add-enabled.png "Add Action")  - [Add] will add a new object to the `Batch`.  A [Add Object] 

**Add Object Dialog Box**  
![Add Object Dialog Box](images/bimlflex-app-dialog-add-object.png "Add Object Dialog Box")  

> [!TIP]
> See the [Objects documentation](objects.md) for further details on creating or editing and `Object`.

![Save Action](images/bimlflex-app-action-save-enabled.png "Save Action")  - [Save] will save the currently set of staged changes.  The [Save] button is will only enable if any `Object` has changes staged and there are no major validation issues with the current list of `Object` properties.

![Archive Action](images/bimlflex-app-action-archive-enabled.png "Archive Action")  - [Archive] will `hard delete` the selected `Object`.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore, if possible.

**Archive Object Dialog Box**  
![Archive Object Dialog Box](images/bimlflex-app-dialog-archive-object-list.png "Archive Object Dialog Box")  

>[!WARNING]
> Archiving is a permanent removal of the selected entity from it's associated table in the metadata database.  Best practice is to use the [Deleted] flag to `soft delete` a entity, and [Archive] should only be used in the case that you both:
>
> 1. The only fix to the current issue requires the [Archive] of the selected entity.
> 2. The full implications that the removing of the selected entity from the metadata system will cause.

![Refresh Action](images/bimlflex-app-action-refresh-enabled.png "Refresh Action")  - [Refresh] will trigger a refresh of the metadata for the selected list of `Objects`.

### Objects Tab - Views

The [Objects Tab] provide quick and easy access to all `Objects` associated with the selected `Batch`.  While the items in the list will not change, the views provide a quick concise view of various groupings of attributes.  General purpose and overview of each view will be outlined below but for further details on what all the individual property values represent please view the [Objects documentation](objects.md).

#### View: Overview

//TODO: Overview Description

![Overview View](images/bimlflex-app-batches-tab-objects-view-overview.png "Overview View")  

#### View: Model Overrides

//TODO: Model Overrides Description

![Overview View](images/bimlflex-app-batches-tab-objects-view-model-overrides.png "Overview View")  

#### View: Query Overrides

//TODO: Query Overrides Description

![Overview View](images/bimlflex-app-batches-tab-objects-view-query-overrides.png "Overview View")  

#### View: Dependencies

//TODO: Dependencies Description

![Overview View](images/bimlflex-app-batches-tab-objects-view-dependencies.png "Overview View")  