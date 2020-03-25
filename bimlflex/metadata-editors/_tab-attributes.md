### Attributes Tab - Action Buttons

![BimlFlex App - Batches - Attributes Tab - Actions](images/bimlflex-app-tab-attributes-actions.png "BimlFlex App - Batches - Attributes Tab - Actions")

|Icon|Action|Description|Additional Dialog|
|-|-|-|-|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/add.svg" /></div>|Add|[Add] will add a new `Attribute` and assign it to the current entity.  When adding an attribute via this button [Attribute Type], along with the respective linked fields, will be pre-filled on the created dialog box.|[Add Attribute](#Add-Attribute-Dialog-Box)|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/edit.svg" /></div>|Edit|[Edit] will open a dialog box to edit the currently selected `Attribute`.  After edits are complete ensure you click the [Save] button to confirm the changes.|[Edit Attribute](#Edit-Attribute-Dialog-Box)|
|<div style="width:30px;height:30px;background:white"><img src="images/svg-icons/archive-delete.svg" /></div>|Archive|This will `hard delete` the selected `Attribute`.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore.|[Archive Attribute](#Archive-Attribute-Dialog-Box)|

>[!WARNING]
> Archive:  
> Archiving is a permanent removal of the selected entity from it's associated table in the metadata database.  The best practice is to first use the [Deleted] flag to `soft delete` if you need to remove an entity.  [Archive] should only be used in the case that both:
>
> 1. The only fix to the current issue requires the [Archive] of the selected entity.
> 2. The full implications that the removing of the selected entity from the metadata system will cause.

### Additional Dialogs

[!include[Add Attribute Dialog Box](_dialog-add-attribute.md)]

[!include[Edit Attribute Dialog Box](_dialog-edit-attribute.md)]

[!include[Archive Attribute Dialog Box](_dialog-archive-attribute.md)]

### Attributes Tab - Table Descriptions

All `Attributes` assigned to the current entity show here.  New items can be entered entered via the [Add] action button.  Existing items can be edited by clicking the [Value] field to select the `Attribute` and using the [Edit] action button.  Various [Navigational Transitions](#Attributes-Tab-Navigational-Transitions) are available on this form and outlined below.

![BimlFlex App - Batches - Attributes Tab - Table](images/bimlflex-app-tab-attributes-table.png "BimlFlex App - Batches - Attributes Tab - Table")

#### Attributes Tab Navigational Transitions
|Item|Action|Entity Documentation|
|-|-|-|
|Object Value|Navigate to [Objects Editor], selecting clicked `Object`|[[Objects Documentation]](objects.md)
|Column Value|Navigate to [Columns Editor], selecting clicked `Column`|[[Columns Documentation]](columns.md)
|Attribute Value|Navigate to [Attributes Editor], selecting clicked `Attribute`|[[Attributes Documentation]](attributes.md)