<div class="LanguageTitle">Mist User Guide</div>
<div class="TopicHeader">Using Configuration Files</div>
<h3>Introduction</h3>
<p>
Mist 3.0 introduces configuration files as a new, powerful means of creating customized builds. This article explains what configurations files are, and how to:
</p>
<ul>
<li>Generate default configurations</li>
<li>Create custom configurations</li>
<li>Use the Project View configuration</li>
</ul>

<h3>Building in Mist</h3>
<p>
Prior to Mist 3.0, building a project required a user to assign an Emit Type to each Biml file in their project. Biml files that should produce compiled output for their assets were marked as emittables. Biml files that should provide metadata to the compilation process were marked as includes. A user would then store the mapping of Biml files to their emit types as a configuration. When building, the user would select which configuration they wanted to build. 
</p>
<p>Starting with Mist 3.0, a user can leverage configurations 
to do far more than assign emit types to Biml files. Configurations allow users 
to control the order Biml files are built, refactor their build processes, 
execute commands before and after a build, and more.</p>
<p>To build a Mist project, select the ribbon&apos;s Build &amp; Deploy 
tab. Within this tab, a user can choose a 32 or 64 bit build, select the desired 
build configuration, and begin a build by pressing the Build button.</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/1.png" alt="Build & Deploy Ribbon"/>
<p>
When initiating a build, the selected configuration file is processed. Within each configuration file is a build configuration, describing which Biml files to compile and which Biml files should provide metadata. Thus, the emit type information that used to be stored solely in Project View has now been moved into configuration files. Adding this layer of indirection is what enables far more customized and powerful builds in Mist.
</p>
<h3>Configuration Files</h3>
<p>
At its core, a configuration file is a 
<a href="http://msdn.microsoft.com/en-us/library/dd393574.aspx">MSBuild</a> file with a bimlproj file extension. MSBuild is the Microsoft Build Engine, which includes an executable that uses MSBuild files to build applications, DLLs, and other .NET assemblies. MSBuild files are human-readable XML files that provide the build engine with the necessary information to build the desired assembly. 
</p>
<p>
Mist has extended MSBuild to use the Hadron compiler to build BI assets. The result is that users can leverage MSBuild&apos;s reliable and well supported build engine to create fully customizable builds. 
</p>
<p>
As aforementioned, configuration files list the Biml files to be built, along with associating each file with a build type. However, by leveraging MSBuild, it&apos;s also possible for configuration files to reference other configuration files during a build, or to execute arbitrary commands before and after a build occurs.
</p>
<p>
To make dealing with configurations easy, Mist provides a visual designer for setting typical configuration properties. Thus, there is no need to directly edit MSBuild files in a majority of cases. 
</p>
<h3>Generating Default Configurations</h3>
<p>
Mist can auto generate configuration files that organize your project&apos;s Biml files in pre-determined ways. When generating default configurations, Mist adds four configuration files to your project:
</p>
<table style="width: 100%">
	<tr>
		<td style="width: 280px"><strong>File Name</strong></td>
		<td><strong>Description</strong></td>
	</tr>
	<tr>
		<td style="width: 280px">ddlconfig.bimlproj</td>
		<td>Generates assets from all Biml files that contain Table, Schema, Database, 
		and Connection assets.</td>
	</tr>
	<tr>
		<td style="width: 280px">etlconfig.bimlproj</td>
		<td>Generates assets from all Biml files that contain Package and 
		Connection assets. Biml files containing Schema and Database assets 
		provide metadata.</td>
	</tr>
	<tr>
		<td style="width: 280px">build.bimlproj</td>
		<td>Builds the Biml files in ddlconfig.bimlproj, followed by the Biml 
		files in etlconfig.bimlproj.</td>
	</tr>
	<tr>
		<td style="width: 280px">all.bimlproj</td>
		<td>Generates assets from all Biml files under the project&apos;s directory.</td>
	</tr>
</table>
<p>To better understand the contents of configurations, let's review an example 
from a sample Mist project. This project's logical view comprises of:<p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/2.png" alt="Logical View - Highlighted Assets"/>
<p>The Biml files, that contain the yellow highlighted assets in the logical view, are only added to DDL 
configurations. The Biml files, that contain the green highlighted assets, are only added to ETL 
configurations. The Biml files, containing the blue highlighted assets, are 
added to DDL and ETL configurations.</p>
<h4>Creating default configurations</h4>
<p>
Our sample project contains the following files: </p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/3.png" alt="Project View"/>
<p>
Notice that one configuration file is already included; Mist automatically adds 
a configuration file to all projects. 
</p>
<p>
To generate the default configurations, select the Build &amp; Deploy ribbon tab and press the Generate Default Configurations button.
</p>
<img class="InstructionStepImage" src="https://varigencecomstaging.blob.core.windows.net/images-mistdocumentation-configfilesguide/4.png" alt="Build & Deploy Ribbon - Highlighted Default Configurations button"/>
<p>
Afterwards, four new files will be added to Project View:
</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/5.png" alt="Project View - Highlighted Configuration Files"/>
<p>
These are the newly generated configuration files. Double clicking on a configuration file opens it in the configuration designer. 
</p>
<h4>The Configuration Designer</h4>
<p>The configuration designer, displaying the ddlConfig.bimlproj file&apos;s contents, consists of 3 data grids and 2 text boxes.</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/6.png" alt="ddlConfig Designer"/>
<h5>Biml Wildcard Paths</h5>
<p>
Notice the Biml Wildcard Paths data grid in the center. In the configuration designer, each Biml file path is listed in its own row in this data grid. 
</p>
<p>
To the left of each file path is an Build Action column. Each cell in the column provides a combo box that lets you choose 
Generate Assets or Provide Metadata for the Biml file&apos;s Build Action. These 
descriptions map directly to the Emittables and Includes groups from past Mist versions.
</p>
<p>
Remember that the listed Biml files contain the yellow and blue highlighted assets 
from the sample project's logical view. As explained, this configuration 
includes Biml files that contain DDL assets. 
</p>
<p>
&nbsp;</p>
<p>Opening the etlConfig.bimlproj in the configuration designer shows the following:</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/7.png" alt="etlConfig Designer"/>
<p>This configuration lists Biml files that include ETLs and related assets, 
which are the green and blue highlighted assets in the sample project's logical view.</p>
<p>&nbsp;</p>
<p>Next, this is the configuration within the buildConfig.bimlproj file:</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/8.png" alt="buildConfig Designer"/>
<p>
First, notice that the Biml Wildcard Paths data grid is empty. That&apos;s because this configuration doesn&apos;t directly process any Biml files. Instead, it references other configuration files. 
</p>
<h5>Pre & Post Hadron Configuration Paths</h5>
<p>
Referencing other configuration files enables users to refactor their build process. In this example, the build configuration references the dllConfig.bimlproj and etlConfig.bimlproj files in the sole row in the data grid. If a user builds their project with this configuration, the build engine will examine this configuration and see that it references two other files. Then, it will open ddlConfig.bimlproj and attempt to build all the Biml files listed within it. Next, it will open etlConfig.bimlproj and attempt to build the Biml files it lists.
</p>
<p>
The semicolon that separates the two configuration paths is important syntax. For configurations paths and Biml wildcard paths, multiple file paths can be listed in the same row by separating them with a semicolon. The paths are processed from left to right. 
</p>
<p>
Notice that the row&apos;s Target cell is empty. The Target property is a MSBuild specific property and is discussed later in this article. It&apos;s typically not needed and can remain empty.
</p>
<p>
Note that configuration paths and Biml wildcard paths are not mutually exclusive; a configuration can contain both. In this case, the configuration paths in the Pre-Hadron data grid are processed before any of the files in the Biml wildcard paths data grid are built. The configuration paths in the Post-Hadron data grid are processed after the Biml wildcard paths.
</p>
<p>
&nbsp;</p>
<p>
Finally, the configuration within the allConfig.bimlproj file is as follows:
</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/9.png" alt="allConfig Designer"/>
<h6>Wildcards</h6>
<p>
As aforementioned, this configuration file contains all Biml files under the project directory and its subfolders. To accomplish this, two pieces of MSBuild syntax are used. The first is the asterisk character, used in *.biml. The asterisk means to add all files with the biml file extension. The double asterisk character indicates that MSBuild should look for Biml files in the FederalReserveHandsOnLab directory and subdirectories.
</p>
<p>
The asterisk and double asterisk characters are examples of wildcards. Wildcards are characters that can specify a group of items in an abstract way. Both Biml file paths and configuration paths can use wildcards.
</p>
<p>
To see additional examples of MSBuild syntax for specifying files, review 
<a href="http://msdn.microsoft.com/en-us/library/ms171454.aspx">this</a> article.
</p>
<h5>
Pre and Post Build Event Command Lines
</h5>
<p>
The configuration designer also provides convenient access to MSBuild&apos;s build events. A 
<a href="http://msdn.microsoft.com/en-us/library/dd293582.aspx">build event</a> is a command that MSBuild performs at a particular stage in the build process. The pre-build event occurs before the Mist build begins and the post-build event occurs after a build successfully ends. 
</p>
<p>
The configuration designer allows users to enter build events via the Pre and Post build event command line text boxes. Each build event should be entered on its own line. The commands that can be executed include any commands that can be run from a Windows command prompt. Bear in mind that commands may depend on the Path environment variable to work correctly.
</p>
<h3>
Creating Custom Configurations
</h3>
<p>
Default configurations can be useful in numerous scenarios, especially when serving as a starting point for a custom configuration. However, there are times when a user will want to start from scratch.
</p>
<h4>
Creating configurations
</h4>
<p>
To add a new configuration to your project, right click on any folder in Project 
View and select Add -&gt; New Configuration File. 
</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/10.png" alt="New Configuration File Context Menu"/>
<p>
Use the New Configuration File dialog to name your configuration file and choose its location. Once done, press Save to create the file and add it to Project View.
</p>
<h4>
Editing configurations
</h4>
<p>
Interacting with the configuration designer is very easy. The Configuration ribbon contains buttons for adding Biml Wildcard Paths, Pre-Hadron Configuration Paths, and Post-Hadron Configuration Paths.
</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/11.png" alt="Configuration Ribbon Tab"/>
<p>
Additionally, you can drag and drop a Biml file from Project View onto the Biml Wildcard Paths data grid to create a new row with the Biml file&apos;s path in it. Similarly, you can drag and drop a configuration file from Project View to the Pre and Post Hadron Configuration Paths data grids to add a new row containing a path to the dropped configuration file.
</p>
<p>
Rows in these data grids can be deleted by selecting the row and pressing the delete key.
</p>
<p>
The configuration paths and Biml file paths can be edited by double clicking on the cell. You can use the cell&apos;s ellipses button to open a file dialog, for getting a file path. 
</p>
<h5>MSBuild Specifics</h5>
<h6>XML Editor</h6>
<p>
Along with the Configuration designer, Mist provides a second Configuration tab that holds a XML editor. The XML editor gives users complete power over a build configuration, leveraging all the capabilities of MSBuild. 
</p>
<p>
The configuration designer and its XML editor are synchronized. Any changes within the configuration file&apos;s 
autogenerated PropertyGroups and ItemGroups will overwrite values in the configuration designer. Likewise, any changes in the configuration designer will overwrite values within the configuration file&apos;s 
autogenerated PropertyGroups and ItemGroups.
</p>
<p>
This configuration file references the ddlConfig.bimlproj file by using a 
PreConfiguration item. When this configuration is built, MSBuild will execute the ddlConfig.bimlproj file, 
using a <a href="http://msdn.microsoft.com/en-us/library/7z253716.aspx">MSBuild 
task</a>. The PreConfiguration item's Targets metadata maps to the Target cell 
in the Pre-Hadron Configuration data grid. More information on MSBuild targets 
can be found <a href="http://msdn.microsoft.com/en-us/library/ms171462.aspx">
here</a>.</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/12.png" alt="Build Configuration in XML Editor"/>
<p>
This configuration file lists paths to the Biml files that will be compiled when building. 
The Sources element is for files whose assets should be generated when building; 
the element maps to the Generate Assets build action in the Configuration 
designer. The Includes element is for files whose assets should only be 
referenced, not generated, during compilation. This element maps to the Provide 
Metadata build action.</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/12a.png" alt="DDL Configuration in XML Editor"/>
<h3>Using the Project View Configuration</h3>
<p>
Although configuration files are useful and offer powerful customization options, there are times when they&apos;re unnecessary. Thus, Mist allows you to build your project without relying on configuration files. 
</p>
<p>
All Mist projects have a built-in &quot;Project View&quot; configuration. This configuration is the top item listed in the configurations dropdown in the Build & Deploy ribbon tab. When building with the Project View configuration, Mist automatically targets all Biml files included in your project. 
</p>
<p>
To control a Biml file&apos;s Mist Action, select the Biml file in Project View and then display the Property Grid tool window. Each Biml file has a 
Mist Action property, with values of Live and Reference. 
</p>
<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/13.png" alt="BimlFile Property Grid"/>
<p>
Biml files that have a Live mist action are treated as source files. Biml files 
that have a Reference mist action are treated as metadata files. Remember that you can use multi-select (via Ctrl+Click or Select+Click) to select multiple Biml files and set their 
Mist Actions simultaneously.
</p>
