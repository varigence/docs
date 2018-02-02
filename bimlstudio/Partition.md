<div class="LanguageTitle">Mist User Guide</div>
<div class="TopicHeader">Partition Editor</div>
<p>Use the Partitions editor to create and modify partitions, including storage 
and proactive caching settings, for each cube measure group.</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition1.png" alt="Partition Designer"/>
<p>Enter a partition's name, estimated rows count, and associated aggregation 
design in the partition's data grid row. Select a partition source (table name 
or query) and storage 
mode in the row's details area.</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition2.png" alt="Partitions"/>
<p>When using a query binding source, enter the query in the T-SQL Editor. Use the 
Preview Query button to see the query's result.</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition3.png" alt="Query Editor"/>
<p>Click on Advanced Storage Options... to open the Storage Options dialog and 
specify storage mode, proactive caching, cache settings, tracking tables, and 
incremental updates for the selected partition.</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition4.png" alt="Storage Options Dialog General"/>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition4a.png" alt="Storage Options Dialog Notifications"/>
<p>The partition editor's ribbon provides the following functions:</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition5.png" alt="Partition Ribbon"/>
<table>
	<tr><th>Button</th><th>Description</th></tr>
	<tr><td>Partition</td><td>Add a partition to a selected measure group.</td></tr>
	<tr><td>Generate Default Partitions</td><td>Add a partition to each cube measure group lacking a partition.</td>
</table>

