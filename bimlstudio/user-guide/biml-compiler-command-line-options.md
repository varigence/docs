# Hadron Compiler Options

The following Hadron Compiler options are sorted alphabetically.

Option | Addl. Flags | Purpose | Example
--- | --- | --- | ---
--buildOnly | -b | Only the asset with the specified scoped name is emitted. |
--buildOnlyWithDependencies | | Only the asset with the specified scoped name, and its dependencies, are emitted. |
--cleanOutputFolder | | Delete all files in the output folder before compilation. |
--help | -h  -? | Show help. |
--include | -i | Specify a Biml file that needs to be included to build source Biml files. | -i i1.biml -s s1.biml
--option | -o | Additional compiler options that can passed to BimlScripts. |
--packageConfigurationPath | | Specify the path for SSIS Xml Package Configuration files. |
--responseFiles | -r  -@ | Specify a response file for compilation. |
--source | -s | Specify a Biml file to compile and emit. | -i i1.biml -s s1.biml
--targetPath | -t | Specify the output directory for the generated files. |
--transformationScriptResourceAssembly | | Specify a custom resource assembly with Transformer BimlScript files. |
--transformationScriptSettings | | Specify a custom Transformer BimlScript settings file. |
--version | -v | Set a version for SQL/SSIS/SSAS. Versions may be prefixed with Sql/Ssis/Ssas. | --version=Ssas2008
--warnAsError | | Treat warnings as errors during build, causing compilation to fail. |
--workflowPath | -w | Specify the directory containing Hadron workflow files. |
