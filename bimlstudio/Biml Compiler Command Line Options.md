<div class="LanguageTitle">Mist User Guide</div>
<div class="TopicHeader">Hadron Compiler Options</div>
<p>The following Hadron Compiler options are sorted alphabetically.</p>
<table>
	<tr><th>Option</th><th>Addl. Flags</th><th>Purpose</th><th>Example</th></tr>
	<tr><td>--buildOnly</td><td>-b</td><td>Only the asset with the specified scoped name is emitted.</td><td></td></tr>
	<tr><td>--buildOnlyWithDependencies</td><td></td><td>Only the asset with the specified scoped name, and its dependencies, are emitted.</td><td></td></tr>
	<tr><td>--cleanOutputFolder</td><td></td><td>Delete all files in the output folder before compilation.</td><td></td></tr>
	<tr><td>--help</td><td>-h  -?</td><td>Show help.</td><td></td></tr>
	<tr><td>--include</td><td>-i</td><td>Specify a Biml file that needs to be included to build source Biml files.</td><td>
		-i i1.biml -s s1.biml</td></tr>
	<tr><td>--option</td><td>-o</td><td>Additional compiler options that can passed to BimlScripts.</td><td></td></tr>
	<tr><td>--packageConfigurationPath</td><td></td><td>Specify the path for SSIS Xml Package Configuration files.</td><td></td></tr>
	<tr><td>--responseFiles</td><td>-r  -@</td><td>Specify a response file for compilation.</td><td></td></tr>
	<tr><td>--source</td><td>-s</td><td>Specify a Biml file to compile and emit.</td><td>
		-i i1.biml -s s1.biml</td></tr>
	<tr><td>--targetPath</td><td>-t</td><td>Specify the output directory for the generated files.</td><td></td></tr>
	<tr><td>--transformationScriptResourceAssembly</td><td></td><td>Specify a custom resource assembly with Transformer BimlScript files.</td><td></td></tr>
	<tr><td>--transformationScriptSettings</td><td></td><td>Specify a custom Transformer BimlScript settings file.</td><td></td></tr>
	<tr><td>--version</td><td>-v</td><td>Set a version for SQL/SSIS/SSAS. Versions may be prefixed with Sql/Ssis/Ssas.</td><td>--version=Ssas2008</td></tr>
	<tr><td>--warnAsError</td><td></td><td>Treat warnings as errors during build, causing compilation to fail.</td><td></td></tr>
	<tr><td>--workflowPath</td><td>-w</td><td>Specify the directory containing Hadron workflow files.</td><td></td></tr>
</table>


