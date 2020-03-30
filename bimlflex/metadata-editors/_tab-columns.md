### Columns Tab - Action Buttons

![Columns Tab - Action Buttons](images/bimlflex-app-tab-columns-actions.png "Columns Tab - Action Buttons")

|Icon|Action|Description|Additional Dialog|
|-|-|-|-|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/add.svg" /></div>|<span class="nowrap-col m-5">Add</span>|[Add] will add a new `Column` and assign it to the current entity.  When adding an `Column` via this button [Connection] and [Object] will be pre-filled on the created dialog box.|[Add Column](#Add-Column-Dialog-Box)|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/save.svg" /></div>|Save||
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/archive-delete.svg" /></div>|<span class="nowrap-col m-5">Archive</span>|This will `hard delete` the selected `Attribute`.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore.|[Archive Column](#Archive-Attribute-Dialog-Box)|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/refresh.svg" /></div>|Refresh|||
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/composite-key.svg" /></div>|Integration Key||[Generate Derived Integration Key](#Generate-Derived-Integration-Key)|


### Additional Dialogs

[!include[Add Column Dialog Box](_dialog-add-column.md)]

[!include[Archive Column Dialog Box](_dialog-archive-column-list.md)]

[!include[Generate Derived Integration Key Dialog Box](_dialog-generate-derived-integration-key.md)]

### Columns Tab - Views

All `Columns` assigned to the current entity show here.  New items can be entered entered via the [Add] action button.  Existing items can be edited by double clicking the field needing adjustment.  All the views have the same [Navigational Transitions](#Attributes-Tab-Navigational-Transitions) to the `Column`.

#### Columns Tab Navigational Transitions
|Item|Action|Entity Documentation|
|-|-|-|
|Column Value|Navigate to [Columns Editor], selecting clicked `Column`|[[Columns Documentation]](columns.md)

#### Overview View

[//]: # (TODO: Section Description)

![Columns - Overview View](images/bimlflex-app-tab-columns-views-overview.png "Columns - Overview View")

#### Settings View

[//]: # (TODO: Section Description)

![Columns - Settings View](images/bimlflex-app-tab-columns-views-settings.png "Columns - Settings View")

#### Expressions View

[//]: # (TODO: Section Description)

![Columns - Expressions View](images/bimlflex-app-tab-columns-views-expressions.png "Columns - Expressions View")

#### Mappings View

[//]: # (TODO: Section Description)

![Columns - Mappings View](images/bimlflex-app-tab-columns-views-mappings.png "Columns - Mappings View")

#### Overrides View

[//]: # (TODO: Section Description)

![Columns - Overrides View](images/bimlflex-app-tab-columns-views-overrides.png "Columns - Overrides View")
