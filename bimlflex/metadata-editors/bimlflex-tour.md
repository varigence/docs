---
uid: bimlflex-tour
title: BimlFlex Tour
---
# BimlFlex Tour  

The following sections describe the UI elements that make up an Entity Editor and how the features provide navigation and interaction.  

[//]: # (TODO: Maybe snip a starting window?)

[!include[BimlFlex Tool Bar](_incl-toolbar.md)]

## BimlFlex Menu  

The BimlFlex Menu provide quick navigation to the available editors and modeling tools.  The menu is dynamic and automatically expands and hides based on the current size of the application window.  If the menu is hidden you can use the button annotated below to open.  

**BimlFlex Menu**  
<img 
    src="images/bimlflex-app-menu.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="BimlFlex Menu" 
/>

## BimlFlex Metadata Editor Layout  

The BimlFlex Metadata Editors are provided to give a streamlined and intuitive way to enter and manage your metadata.  The available features may vary from editor to editor but they all use the same layout.  What follows is a quick tour of the various editor elements and how they function.  For detailed information of the available the features reference the relevant documentation for the appropriate editor.  

**Editor Layout**  
![BimlFlex Editor](images/bimlflex-app-editor.png "BimlFlex Editor")  


## Breadcrumb Navigation Elements  

BimlFlex features a breadcrumb navigation to easily raise your view to a higher context when needed.  The entities shown in the breadcrumbs will depend on the entity that is being viewed and the navigation path that was used.  Elements are provided to select either the associated parent entity or to navigate without filter context to a parent element editor.  

**Breadcrumb Navigation Elements**  
![Breadcrumb Navigation Elements](images/bimlflex-app-breadcrumbs.png "Breadcrumb Navigation Elements")  

## Editor Action Buttons  

The Editor Action Buttons provide quick access to common useful features managing the collection of the associated entity type.  As noted previously, available actions can vary from editor to editor but the ability to [Add] and [Collapse/Expand] are generally ubiquitous across them all.  

**Editor Action Buttons**  
<img 
    src="images/bimlflex-app-editor-actions.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="BimlFlex Editor Action Buttons" 
/>

|Icon|Action|Description|
|-|-|-|-|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/add.svg"/></div>|<span class="nowrap-col m-5">Add</span>|[Add] will create a new entity to be added to the [Entity List].  Once the required information is entered click [Save Action Button] in the [Tab/Form Action Buttons] to add the new entity to the list.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/validate.svg"/></div>|<span class="nowrap-col m-5">Validate</span>|Perform a validation pass across the associated entity.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/filter-clear.svg"/></div>|<span class="nowrap-col m-5">Clear Filters</span>|[Clear Filters] will remove any filter context that was previously entered of passed through.  This is handy when you want to manage `Settings` and `Parameters` across multiple `Projects`.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/expanded.svg"/></div>|<span class="nowrap-col m-5">Collapse</span>|[Collapse] will cycle through the the various supported modes the Entity List can have.  Options are [Full Panel], [Split Panels] and [Hidden].|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/collapsed.svg"/></div>|<span class="nowrap-col m-5">Expand</span>|[Expand] will cycle through the the various supported modes the Entity List can have.  Options are [Hidden], [Split Panels] and [Full Panel].|

## Entity List  

The entity list enumerates all of the available entities for the current filter context.  When and editor is opened through the BimlFlex Menu the default action is to open without and filter context, exposing all the the given entity type.  When an editor is opened via a [Navigation Transition] generally a context for the entities `Project` or `Connection` is applied, but ultimately may vary based on the transitional context.  The amount and availability of the the columns is determined by the editor being used.  

**Entity List - Single Column**  
<img 
    src="images/bimlflex-app-editor-list-single.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Entity List - Single Column" 
/>

**Entity List - Multi Column**  
<img 
    src="images/bimlflex-app-editor-list-multi.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Entity List - Multi Column" 
/>

|Icon|Action|Description|
|-|-|-|-|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/hamburger.svg"/></div>|<span class="nowrap-col m-5">Filter</span>||
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/sort-desc.svg"/></div>|<span class="nowrap-col m-5">Sort Descending</span>|When shown the column is currently sorting in descending order.  Click to switch to ascending order.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/sort-asc.svg"/></div>|<span class="nowrap-col m-5">Sort Ascending</span>|When shown the column is currently sorting in ascending order.  Click to switch to descending order.|

> [!TIP]
> All of the columns support the ability for filters but the button is hidden by default.  To show the button mouse over the field you would like to filter.  

## Tab/Form Action Buttons  

The [Tab/From Action Buttons] list the actions available within the currently selected entity.  All [Action Buttons] are context specific to the currently selected [Tab] if tab navigation function is provided the the selected editor.  As the list to large to enumerate and goes past the scope of the guide, refer to the document for the appropriate editor to view all availed actions along with their descriptions.  Many buttons feature context sensitivity and only enable/disable when appropriate.

**Tab/Form Action Buttons Example**  
![Tab/Form Action Buttons Example](images/bimlflex-app-form-actions.png "Tab/Form Action Buttons Example")  

## Tab List  

If the selected editor supports them, [Tabs] are used to switch between managing of the selected parent entity (Details Tab) and managing of the associated child entities.  
  
**Tab List Example**  
![Tab List Example](images/bimlflex-app-form-tabs.png "Tab List Example")  

## Tab/Form Content  

The [Tab/Form Content] area is where all the metadata for the associated entity is represented.  Layouts can vary depending on the editor being used but generally falls into one of 3 categories: [Field List], [Table], or [Multiple Views].  

### Field List

A [Field List] provides a series of context sensitive fields.  BimlFlex will dynamically hide and expose fields depending on the current properties of the selected entity.  Additionally BimlFlex provides field level validations with the ability to highlight misconfigured metadata.

**Fields Content**  
![Fields Content](images/bimlflex-app-form-fields.png "Fields Content")  

#### Long Text String Field

The long text string field can be resized by dragging the adjustment corner in the field. It also include an editor dialog with enhanced features for when a lot of information needs to be entered. The editor dialog is accessed by clicking the <img class="icon-col m-5" style="width:20px; height:20px;background:#EEE;" src="images/svg-icons/edit.svg"/> icon when the long text string field is in focus.

<img 
    src="images/dialog-editor-button.64566.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Editor Dialog Button" 
/>

The editor dialog will open with the text from the long text string field. The editor dialog features include:

- Text suggestions based on entered text
- Tab auto complete
- Scroll preview
- Line numbers

<img 
    src="images/dialog-editor.64566.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Editor Dialog" 
/>

When changes are complete, click the [Ok] button to keep the changes that have been made. Click [Cancel] to discard the changes that have been made and close the editor.

### Table  

Table content is provided when an entity features some complex logic and should be edited through a dialog box.  New items can be entered entered via the [Add] button on the [Tab/Form Action Buttons].  Existing items can be edited by selecting and existing proper, by clicking a non hyperlinked field and then using the [Edit] button on the [Tab/Form Action Buttons].  The same filter as sort functions that are provided on the [Entity List] are available on these content types.

**Table Content**  
![Table Content](images/bimlflex-app-form-table.png "Table Content")

### Multiple Views  

When [Multiple Views] are used, an oval selector will appear listing out alternative views.  The active view is highlighted and can be changed by clicking another available option.  The alternate views only change what properties of an entity are visible/editable and will not filter, remove or resort the underlining list of entities.  Values can be edited by double-clicking the desired property.  

**Multiple Views Content**  
![Multiple Views Content](images/bimlflex-app-form-views.png "Multiple Views Content")  

## Navigational Transitions

BimlFlex features the ability to jump directly to another entity whenever it is referenced from a calling table or form.  Click the light blue value will allow you to navigate directly to the the object referenced in the associated editor.

![Multiple Views](images/bimlflex-app-form-navigational-transitions.png "Multiple Views")  
