<div class="LanguageTitle">Vivid User Guide</div>

<div class="LanguageTitle">Vivid User Guide</div>

Vivid enables you to add new items to the pivot table editor.

### Calculations

To add a calculation:

- Click in the Measures section of the pivot table editor where you want the calculation to reside. This determines which measure group and display folder the calculation belongs to.
- Right click the measure group, measure, or display folder where you want the calculation to be created, and select Add Calculation. You can also click Add Item on the Vivid tab in the ribbon. The Vivid Calculations Editor opens.

![Add Calculation](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-1.png )

###### **The context menu with the Add Calculation item.**

- Specify the name of the calculation and enter the MDX formula for the calculation. The formula box has MDX auto-completion, and measures and attributes from the pivot table editor can also be dragged and dropped onto it.

![Calculation Editor](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-2.png)

###### **The Vivid Calculations Editor**

- Click Commit to save your calculation into the pivot table editor or Cancel to disregard the changes. The calculation will now persist in the report when the report is saved.

### Named Sets

To add a named set:

1. Click in the Dimensions and Named Sets section of the pivot table editor where you want the named set to reside. This determines which dimension and display folder the named set belongs to.
2. Right click the dimension, member, or display folder where you want the named set to be created, and select Add Named Set or click Add Item on the Vivid tab in the ribbon.

![Add Named Set menu item](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-3.png)

###### **The Context menu with the Add Named Set menu item.**

The Vivid Named Set Editor opens.

![Named Set Editor](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-4.png)

###### **The Vivid Named Set Editor.**

1. Specify the name of the named set and give the MDX formula for the named set. The formula box has MDX auto-completion, and measures and attributes from the pivot table editor can also be dragged and dropped onto it.
2 Click OK to save your named set into the pivot table editor or Cancel to discard the changes. The named set will now persist in the report when the report is saved.

### Display Folders

- Right click in the pivot table editor where you want the display folder to be created and select Add Folder, or click in the Pivot Table Editor where you want the display folder to be created, and select Add Item. Add Display Folder on the Vivid tab in the ribbon.

![Add Folder](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-5.png)

###### **The Context menu with the "Add Folder" menu item.**

- In the Add Display Folder dialog box, specify the name of the display folder that you want to create.

![Display Folder dialog](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-6.png )

###### **The Add Display Folder dialog box.**

The display folder appears in the pivot table editor in the specified location.

![New Folder](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-7.png )

### Editing Items in the Pivot Table Editor

All of the items in the pivot table, except levels, can be edited. Which attributes are editable depends on the item type.

<table class="standardTable" >
<tr>
<td>Measure</td>
<td>Name and formula are editable</td>
</tr>
<tr>
<td>Attribute</td>
<td>Name and formula are editable</td>
</tr>
<tr>
<td>Calculation</td>
<td>Name and formula are editable</td>
</tr>
<tr>
<td>Named Set</td>
<td>Name and formula are editable</td>
</tr>
<tr>
<td>Measure Group</td>
<td>Name is editable</td>
</tr>
<tr>
<td>Dimension</td>
<td>Name is editable</td>
</tr>
<tr>
<td>Hierarchy</td>
<td>Name is editable</td>
</tr>
<tr>
<td>Level</td>
<td>Not editable</td>
</tr>
<tr>
<td>Virtual Dimension</td>
<td>Name and member hierarchies are editable</td>
</tr>
</table>

<br />

To edit an item:

- Right click the item that you want to edit, and select Edit on the context menu. (You can also click an item to select it and then select Edit Item on the ribbon.)

![Edit](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-8.png )

###### **The Edit item on the Vivid Pivot Table context menu.**

The related Vivid editor opens.

![New Calculation](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-9.png )

###### **The Vivid Perspective Editor is one of several editors available from the Vivid Pivot Table context menu.**

1. Make the desired changes.
2. Click Commit.

### Hiding Items in the Pivot Table Editor

You can hide any individual item in the pivot table editor except levels, which are deleted along with their hierarchy.

To hide an item in the pivot table editor, right click the item that you want to hide, and select Hide in the context menu. (You can also click an item to select it and then select Delete Item on the ribbon.)

![Hide](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-10.png)

###### **The Context menu with the "Hide" menu item.**

### Restoring Hidden Items to the Pivot Table Editor

![Show hidden](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-11.png)

###### **The Show Hidden button in the ribbon**

To restore an item that was previously hidden in the pivot table editor, first select Show Hidden from the ribbon. Previously hidden items will appear in the pivot table editor, but they will be grayed out. 

![Restore Hidden](https://varigencecom.blob.core.windows.net/walkthroughs/AddingCNSD-12.png)

###### **The pivot table editor Restore Mode toggle and context menu with the Restore menu item.**

To restore a hidden item, right click the item and select Restore on the context menu, or click the item to select it, and then click Restore  on the Vivid tab in the ribbon. 

Only items that exist on the server can be restored. Named sets, calculations, and display folders that were created in Vivid cannot be restored.
