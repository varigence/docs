### Columns Tab - Action Buttons

<img
    src="images/bimlflex-app-tab-columns-actions.png"
    class="border-image"
    title="Columns Tab - Action Buttons"
/>

|Icon|Action|Description|
|-|-|-|
|<div class="icon-col m-5"><img src="images/svg-icons/add.svg" /></div>|<span class="nowrap-col m-5">Add</span>|**Add** will open an [Add Column Dialog](#Add-Column-Dialog-Box) for creating a new **Column** and assign it to the current entity.  When adding an **Column** via this button **Connection** and **Object** will be pre-filled on the created dialog box.|
|<div class="icon-col m-5"><img src="images/svg-icons/save.svg" /></div>|Save|This will save the currently set of staged changes.  The **Save** button is only enabled if the **Column** has changes staged and there are no major validation issues with the current **Column** properties.|
|<div class="icon-col m-5"><img src="images/svg-icons/archive-delete.svg" /></div>|<span class="nowrap-col m-5">Archive</span>|This will hard delete the selected **Attribute**.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore.|[Archive Column](#Archive-Attribute-Dialog-Box)|
|<div class="icon-col m-5"><img src="images/svg-icons/refresh.svg" /></div>|Refresh|This will trigger a refresh of the metadata for the selected **Columns**.||
|<div class="icon-col m-5"><img src="images/svg-icons/composite-key.svg" /></div>|Integration Key|This will bring up the dialog to create an `Integration Key`.|[Generate Derived Integration Key](#Generate-Derived-Integration-Key)|


### Additional Dialogs  

[!include[Add Column Dialog Box](_dialog-add-column.md)]  

[!include[Archive Column Dialog Box](_dialog-archive-column-list.md)]  

[!include[Generate Derived Integration Key Dialog Box](_dialog-generate-derived-integration-key.md)]  

### Columns Tab - Views  

All **Columns** assigned to the current entity show here.  New items can be entered entered via the <img class="icon-inline" src="images/svg-icons/add.svg" /> **Add** action button.  Existing items can be edited by double clicking the field needing adjustment.  All the views have the same links to the **Column**.  

#### Columns Tab Navigational Transitions  

|Item|Action|Entity Documentation|
|-|-|-|
|Column Value|Navigate to **Columns Editor**, selecting clicked **Column**|[Columns Documentation](columns.md)

#### View: Overview  

The **Overview** is available to give quick access to the more physical properties of the **Columns** relating to the selected entity.  These are representations of the physical `Source System` and represent the raw definitions of the object in it's original form.  Quick access is also provided for the various keys used across the separate **Integration Layers** or **Integration Stages**.  

<img
    src="images/bimlflex-app-tab-columns-views-overview.png"
    class="border-image"
    title="Columns - Overview View"
/>

#### View: Settings  

The **Settings** view allows for quick access to all the boolean and flag properties associated with the **Columns**.  In addition to the keys the ability to flag database concepts (such as `IDENTITY` or `NULL`), persistence, whether or not the **Column** is `Derived`, and the ability to flag as `Excluded` or `Deleted`.  

<img
    src="images/bimlflex-app-tab-columns-views-settings.png"
    class="border-image"
    title="Columns - Settings View"
/>

#### View: Expressions  

The **Expressions** view allows you to quickly view and manage all the expressions that may be used in the `CAST`, `CONVERT`, or general transformations that may be performed on any given **Column**.  All values in this view are used to determine the `ETT`/`ELT` logic and transformation dataflow.  

<img
    src="images/bimlflex-app-tab-columns-views-expressions.png"
    class="border-image"
    title="Columns - Expressions View"
/>

#### View: Mappings  

The **Mappings** view shows the references and targets associated with the **Columns**.  References are the equivalent of a Foreign Key in a Relational Database, though the enforcement of an actual constraint is configurable.  References control how and where other tables relate to each other.  Targets are the the **Object** and **Column** that the entity will populate in the associated **Project's Target Connection**.  It is recommended that you use the [Data Vault Accelerator](..\modeling-tools\accelerator.md) or the [Schema Diagram](..\modeling-tools\schema-diagram.md) to populate these fields.  This view is intended as easy way to reference and maintain previously entered metadata.  

<img
    src="images/bimlflex-app-tab-columns-views-mappings.png"
    class="border-image"
    title="Columns - Mappings View"
/>

#### View: Overrides  

The **Overrides** view is available to allow for quick management of modeled metadata from the [Data Vault Accelerator](..\modeling-tools\accelerator.md) or the [Schema Diagram](..\modeling-tools\schema-diagram.md).  This view is intended as easy way to reference and maintain previously entered metadata.  

<img
    src="images/bimlflex-app-tab-columns-views-overrides.png"
    class="border-image"
    title="Columns - Overrides View"
/>
