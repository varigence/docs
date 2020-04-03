### Attributes Tab - Action Buttons  

<img
    src="images/bimlflex-app-tab-attributes-actions.png"
    class="border-image"
    title="Attributes Tab - Action Buttons"
/>

|Icon|Action|Description|
|-|-|-|
|<div class="icon-col m-5"><img src="images/svg-icons/add.svg" /></div>|<span class="nowrap-col m-5">Add</span>|**Add** will create a new **Attribute** and assign it to the current entity.  When adding an attribute via this button *Attribute Type*, along with the respective linked fields, will be pre-filled on the created [Add Attribute Dialog](#add-attribute-dialog-box). |
|<div class="icon-col m-5"><img src="images/svg-icons/edit.svg" /></div>|<span class="nowrap-col m-5">Edit</span>|**Edit** will open an [Edit Attribute Dialog](#edit-attribute-dialog-box) to edit the currently selected **Attribute**. After edits are complete ensure you click the **Save** button to confirm the changes.|
|<div class="icon-col m-5"><img src="images/svg-icons/archive-delete.svg" /></div>|<span class="nowrap-col m-5">Archive</span>| **Archive** will open an [Archive Attribute Dialog](#archive-attribute-dialog). This will permanently delete the selected **Attribute**. This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore.|

### Additional Dialogs  

[!include[Add Attribute Dialog](_dialog-add-attribute.md)]  

[!include[Edit Attribute Dialog](_dialog-edit-attribute.md)]  

[!include[Archive Attribute Dialog](_dialog-archive-attribute-list.md)]

### Attributes Tab - Table Descriptions  

All **Attributes** assigned to the current entity show here.  New items can be entered entered via the *Add* action button.  Existing items can be edited by clicking the *Value* field to select the **Attribute** and using the *Edit* action button.  Various [Navigational Transitions](#attributes-tab-navigational-transitions) are available on this form and outlined below.  

<img
    src="images/bimlflex-app-tab-attributes-table.png"
    class="border-image"
    title="Attributes Tab - Table Descriptions"
/>

#### Attributes Tab Navigational Transitions  

|Item|Action|Entity Documentation|
|-|-|-|
|Object Value|Navigate to **Objects Editor**, selecting clicked **Object**|[Objects Documentation](objects.md)
|Column Value|Navigate to **Columns Editor**, selecting clicked **Column**|[Columns Documentation](columns.md)
|Attribute Value|Navigate to **Attributes Editor**, selecting clicked **Attribute**|[Attributes Documentation](attributes.md)
