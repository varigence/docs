<div class="LanguageTitle">Mist User Guide</div>
<div class="TopicHeader">Create an Expandable Transformer</div>
<p>Expandable Transformers are BimlScripts let you apply modifications across a large number of Biml objects.</p>
<ol class="Instructions">
    <li class="InstructionStep">
		To create an Expandable Transformer, you need a BimlScript. BimlScripts can be created from the Home ribbon tab, or from the context menu for packages in the logical view. For this example, select the BimlScript button on the Home tab of the ribbon bar.<br>
		<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-importingtableswithbimlscript/1.png" alt="Biml Script Ribbon Button"/>
	</li>
	<li class="InstructionStep">
		This creates a Biml file that's added in the Logical View under BimlScript Library.<br>
		<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-importingtableswithbimlscript/2.png" alt="BimlScript in Logical View"/>
	</li>
	<li class="InstructionStep">
		Double click on the Biml file to open the BimlScript designer.<br>
		<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-importingtableswithbimlscript/3.png" alt="BimlScript Designer"/>
	</li>
	<li class="InstructionStep">
		Enter your BimlScript in the Input editor. Remember that Expandable Transformers are intended to edit all Biml elements of a specific type.
	</li>
	<li class="InstructionStep">
		One possible use of Expandable Transformers is to add a variable to all packages in your project. To try this, you can copy and paste this BimlScript into the Input editor. Also, add a couple packages to your project so you can see the effect of the transformer. Note that you can also use this sample as a starting point for writing your Expandable Transformers.
		<pre class="brush: bimlscript;">
&lt;#@ template language="C#" hostspecific="True" addtoheadofcollections="True" #&gt;
&lt;#@ target mergemode="LocalMerge" type="Varigence.Languages.Biml.Task.AstPackageNode" exactmatch="true" #&gt;
&lt;#@ import namespace="Varigence.Languages.Biml.Task" #&gt;

&lt;Package&gt;
    &lt;Variables&gt;
        &lt;Variable Name="ID" DataType="UInt32"/&gt;
    &lt;/Variables&gt;
&lt;/Package&gt;		
</pre>
<ol>
<li>The first thing to notice is that all code fragments are surrounded by required &lt;# and #&gt; characters.</li>
<li>The first line is the required template directive. The language attribute dictates the language you're using; this example uses C#.</li>
<li>Import directives specify namespaces, and are analogous to the C# using statement or the VB.NET imports statement.</li>
<li>For transformers, you need to specify the type of Biml asset to change. That's accomplished using the target directive's type attribute. The example's target type is AstPackageNode, indicating the transformer 
can run on all Package nodes in the project.</li>
<li>The target directive's exactmatch attribute controls if the transformer should run only on Package nodes, 
as opposed to including any types derived from AstPackageNode. Because exactmatch is 
set to true, this transformer only runs on Package nodes.</li>
<li>The target directive's mergemode attribute controls how the specified changes are merged into the existing Biml. By specifying a mergemode of LocalMerge, the transformer will merge the specified variables with any variables that already exist in a Package.</li>
<li>The template directive's addtoheadofcollections attribute controls how the 
assets, declared within collections, are merged into a node's already existing 
collections. By setting this to true, the variable declared in the transformer will be inserted at the head of any Package's variables collection.</li>
</ol>
<br>
	</li>
	<li class="InstructionStep">
		While writing the script, you can click on the notification bar to save the BimlScript.<br>
		<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation/220_Step06.png" alt="BimlScript Notification Bar"/>
	</li>
    <li class="InstructionStep">
		To preview the transformer's output on a particular Package, select a Package from the Preview Target Node dropdown. Assuming the BimlScript has no errors, Preview Expanded BimlScript pane will display the new Biml that would result from running the transformer.<br>
		<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation/220_Step07.png" alt="BimlScript Preview"/>
	</li>
	<li class="InstructionStep">
		Once the output looks correct and you're ready to apply the changes, press the Expand button in the ribbon.<br>
		<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation/220_Step08.png" alt="BimlScript Ribbon Highlighted Expand button"/>
	</li>
	<li class="InstructionStep">
		The last step before applying the transformer is to select which assets to transform. Using the above sample, all Packages in the project are listed. You can check any package, or check Select All to apply the transform to all of them. When finished, click the Transform button to apply the transformer.<br>
		<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation/220_Step09.png" alt="Confirm items to Transform dialog"/>
	</li>
	<li class="InstructionStep">
		All transformed packages now include the ID variable that was defined in the Expandable Transformer.
	</li>
</ol>
