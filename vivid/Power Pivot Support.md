<div class="LanguageTitle">Vivid User Guide</div>

Vivid works against SSAS cubes and also Powerpivot cubes. The PowerPivot cube can either be hosted in SharePoint or embedded within the currently open Excel document.

### PowerPivot Pivot Table Editor

The Vivid Pivot Table Editor works in PowerPivot similarly to how it works against standard SSAS cubes.

While the pivot table editor/overly for standard SSAS cubes is almost identical to the pivot table editor/overlay for Powerpivot cubes, there are a few differences worth noting:

- Attributes can be dragged and placed in the Measures drop zone in the pivot table overlay. This will dynamically create a measure from the attribute. Either a "Sum of attribute" measure of "Count of attribute" measure, depending on the attribute. These are called "implicit measures" as they are implicitly created
- Right-clicking on an implicit measure in the pivot table overlay will show the "Summarize Values" context menu where you can change the summarization value for an implicit measure.

### PowerPivot Cleansing

PowerPivot stores much of its configuration directly in the Excel file. In order for non-Vivid users to have the best experience using PowerPivot, you should "cleanse" the workbook before sending it to them. The process of cleansing will save and close the workbook, so that it can be properly modified. Vivid gives you the ability to either keep the workbook closed, which is the default, or to have it reopen.

