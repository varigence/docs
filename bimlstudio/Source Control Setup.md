<div class="LanguageTitle">Mist User Guide</div>
<div class="TopicHeader">Source Control Setup</div>
<p>Mist has the ability to work with projects that are stored in TFS and Subversion source control environments. To work with either source control environment, some additional setup is required.</p>
<h3>Subversion</h3>

<ol>
	<li>Install CollabNet&apos;s Subversion client, which can be downloaded from <a href="http://www.collab.net/downloads/subversion/">CollabNet Subversion downloads</a>.
	<ol>
		<li>Neither SlikSVN nor other Subversion clients are currently supported.</li>
	</ol>
	</li>
	<li>Install TortoiseSVN from <a href="http://tortoisesvn.net/downloads.html">TortoiseSVN downloads</a>.
	<ol>
		<li>Do <strong>not</strong> install the command line client tools when installing Tortoise SVN.</li>
	</ol>
	</li>
	<li>Ensure paths to svn.exe (installed with CollabNet&apos;s Subversion client) and tortoiseproc.exe (installed with TortoiseSVN) are in your 
	Path environment variable.</li>
	<li>Add your Mist project to your Subversion working copy.
		<ol>
			<li>If no working copy is present, then it must be created. See the 
			<a href="http://tortoisesvn.net/docs/nightly/TortoiseSVN_en/tsvn-dug-checkout.html">Tortoise documentation</a> for more information.</li>
	</ol>
	</li>
	<li>Open the project in Mist.</li>
</ol>

<h3>TFS</h3>

<ol class="Instructions">
	<li class="InstructionStep">Ensure tf.exe is available on the machine where Mist is installed.
	<ol>
		<li>tf.exe is not included in VS 2008 installations. It can be downloaded from the 
		<a href="http://www.microsoft.com/en-us/download/details.aspx?id=16338">Visual Studio Team System 2008 Team Explorer</a> package.</li>
		<li>tf.exe is included, by default, in VS 2010 installations.</li>
	</ol>
	
	</li>
	<li class="InstructionStep">Install the Team Foundation Server Power Tools, which can be downloaded from 
	<a href="http://msdn.microsoft.com/en-us/vstudio/bb980963.aspx">Visual 
	Studio Power Tools</a>.</li>
	<li class="InstructionStep">Add your Mist project to a TFS 
	workspace. 
		<ol>
			<li>To create a TFS workspace that contains your project, see the 
			MSDN documentation for 			<a href="http://msdn.microsoft.com/en-us/library/cc138512">Visual 
			Studio 2008</a> and
			<a href="http://msdn.microsoft.com/en-us/library/cc138514">Visual 
			Studio 2010</a> users.</li>
			<li>To add files and folders to TFS version control, see the
			<a href="http://msdn.microsoft.com/en-us/library/ms181392">MSDN 
			documentation</a>.</li>
			<li>For those just getting started with TFS, MSDN provides detailed documentation on how TFS works and how to use it.</li>
		</ol>
	</li>
	<li class="InstructionStep">Open the project in Mist.</li>
	<li class="InstructionStep">In Project View, right click on the project and select 
	<strong>Properties</strong>.<br>
	<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/1.png" alt="Project Context menu"/>
	</li>
	<li class="InstructionStep">In the Properties designer, press the <strong>Locate tf...
	</strong>button.<br>
	<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/2.png" alt="Locate tf button highlighted"/>
	</li>
	<li class="InstructionStep">Find tf.exe on your system and press <strong>Open</strong>. The path to tf.exe will be automatically inserted in the tf Path textbox.<br>
	<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/3.png" alt="Locate tf dialog box"/><br>
	<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/3a.png" alt="tf Path textbox"/>
	</li>
	<li class="InstructionStep">If your TFS enlistment requires logon credentials, press the 
	<strong>Change Credentials</strong> button.<br>
	<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/4.png" alt="Change Credentials button highlighted"/>
	</li>
	<li class="InstructionStep">Enter your username and password in the Credentials dialog box 
	and press <strong>OK</strong>.<br>
	<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/5.png" alt="Credentials dialog box"/>
	</li>
	<li class="InstructionStep">Click the <strong>Reload Project</strong> 
	button.<br>
	<img class="InstructionStepImage" src="https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/6.png" alt="Reload Project button highlighted"/>
	</li>
</ol>

