### Parameters Tab - Action Buttons

<img
    src="images/bimlflex-app-tab-parameters-actions.png"
    class="border-image"
    title="Parameters Tab - Action Buttons"
/>

|Icon|Action|Description|
|-|-|-|
|<div class="icon-col m-5" ><img src="images/svg-icons/add.svg" /></div>|<span class="nowrap-col m-5">Add</span>|**Add** will create a new **Parameter** and assign it to the current entity.  When adding an attribute via this button `Attribute Type`, along with the respective linked fields, will be pre-filled on the [Add Parameter Dialog](#Add-Parameter-Dialog-Box).|
|<div class="icon-col m-5" ><img src="images/svg-icons/edit.svg" /></div>|<span class="nowrap-col m-5">Edit</span>|**Edit** will open an [Edit Attribute Dialog](#Edit-Parameter-Dialog-Box) to edit the currently selected **Parameter**.  After edits are complete ensure you click the **Save** button to confirm the changes.|
|<div class="icon-col m-5" ><img src="images/svg-icons/archive-delete.svg" /></div>|<span class="nowrap-col m-5">Archive</span>|This will hard delete the selected **Parameter**.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore. Clicking **Archive** will create an [Archive Parameter Dialog](#Archive-Parameter-Dialog-Box).|

### Additional Dialogs

[!include[Add Parameter Dialog Box](_dialog-add-parameter.md)]

[!include[Edit Parameter Dialog Box](_dialog-edit-parameter.md)]

[!include[Archive Parameter Dialog Box](_dialog-archive-parameter-list.md)]

### Parameters Tab - Table Descriptions

All **Parameters** assigned to the current entity show here.  New items can be entered entered via the <img class="icon-inline" src="images/svg-icons/add.svg" /> **Add** action button.  Existing items can be edited by clicking the `Value` field to select the **Parameters** and using the <img class="icon-inline" src="images/svg-icons/edit.svg" /> **Edit** action button.  Various Navigational Transitions are available on this form and outlined below.

<img
    src="images/bimlflex-app-tab-parameters-table.png"
    class="border-image"
    title="Parameters Tab - Table Descriptions"
/>

#### Parameters Tab Navigational Transitions

|Item|Action|Entity Documentation|
|-|-|-|
|Column|Navigate to **Columns Editor**, selecting clicked **Column**|[Columns Documentation](columns.md)
|Name|Navigate to **Parameters Editor**, selecting clicked **Parameter**|[Parameters Documentation](parameters.md)
