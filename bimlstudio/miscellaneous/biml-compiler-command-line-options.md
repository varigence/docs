# Biml Compiler (bimlc.exe) Options

The following Hadron Compiler options are sorted alphabetically.

Option | Addl. Flags | Purpose | Example
--- | --- | --- | ---
--bimlDocSchemaGraphProfile | -sgp | The Biml files that will be used to compute JSON that is supplied to the documentation schema graph functionality. These files enable the user to customize the way projects are rendered in the schema graph. To include more than one file, include a separate --bimlDocSchemaGraphProfile option for each file or directory | --bimlDocSchemaGraphProfile=bdsgp.biml
--buildDocumentation | | Attempt to build documentation for the solution.
--buildOnly | -b | Only the asset with the specified scoped name is emitted. |
--buildOnlyWithDependencies | | Only the asset with the specified scoped name, and its dependencies, are emitted. |
--bundle | | Biml bundle to include in the compilation | --bundle=VALUE
--bundleSetting | | Biml bundle setting file to apply to the corresponding Biml bundle file. | --bundleSetting=VALUE
--cleanOutputFolder | | Delete all files in the output folder before compilation. |
--displayMachineCode | | Display the machine code for the machine. This code can be provided to Varigence to generate an offline product key for use behind firewalls or in other scenarios where this machine will be disconnected from the internet for prolonged periods of time. |
--ddlBuildMode | | The method or methods that should be used to emit the DDL for relational objects defined in the project. Options include None, SsisPackages, SingleSqlFile, and MultipleSqlFiles. Multiple values can be specified when separated by commas. | --ddlBuildMode=SsisPackages,SingleSqlFile 
--docOutputPath | | Specify the path at which the documentation will be generated. The default is 'documentation'. | --docOutputPath=VALUE
--docSettings | | Specify a settings.bimldoc file that will determine how fields are rendered in the generated documentation. | --docSettings=VALUE
--docTemplate | | Specify a template.bimldoc file that will determine the style of the generated documentation. | --docTemplate=VALUE
--help | -h  -? | Show help. |
--importSsis | | Import SSIS assets and write them to Biml files using the options specified in the JSON file residing at the importSsisOptionsPath location. To disable, use --importSsis- |
--importSsisOptionsPath | | Location of the JSON file that specifies all options for an SSIS import. | 
--include | -i | Specify a Biml file that needs to be included to build source Biml files. | -i i1.biml -s s1.biml
--licenseKey | | Provide the license key provided by Varigence to activate the Biml Compiler. You only need to run Biml Compiler with this option once per user login. | --licenseKey=VALUE
--option | -o | Additional compiler options that can passed to BimlScripts. |
--packageConfigurationPath | | Specify the path for SSIS Xml Package Configuration files. |
--responseFiles | -r  -@ | Specify a response file for compilation. |
--ssisDeploymentModel | | The deployment model used by SSIS. Acceptable values are Package or Project | --ssisDeploymentModel=Package
--ssisEncryptionPassword | | A global setting for the password that should be used for all password-based encryption in generated SSIS packages and projects. | 
--ssisExternalColumnsQueryTimeout | | A global setting for the timeout in seconds that should be used when connecting to external data sources to extract external column metadata for SSIS data flows. Specifying zero indicates no timeout. Specifying no value will result in using the time out specified in the connection string (or the default for that database provider). | 
--source | -s | Specify a Biml file to compile and emit. | -i i1.biml -s s1.biml
--targetPath | -t | Specify the output directory for the generated files. |
--targetBimlScriptPrecompiledAssemblyPackagePath | | The file path where a BimlScript PreCompiled Assembly Package (BSPCAP) for the Biml Script file specified in this build will be written. |
--tempPath | | Specifies the temp path that will be used for intermediate assets during the build process. | 
--template | -p | The XML files or directories which need to be included to process the template XML file. To include more than one file or directory, include a separate --template option for each file or directory. | --template=Sample.xml
--transformationScriptBundle | | Advanced Feature: Specify a custom resource assembly with additional Transformer BimlScript files to run during build. Path is relative to the Biml Compiler installation directory. Default: CustomTransformations.dll | --transformationScriptBundle=VALUE
--transformationScriptResourceAssembly | | Specify a custom resource assembly with Transformer BimlScript files. |
--transformationScriptSettings | | Specify a custom Transformer BimlScript settings file. |
--version | -v | Set a version for SQL/SSIS/SSAS. Versions may be prefixed with Sql/Ssis/Ssas. | --version=Ssas2008
--warn | | Specifies the level of warnings that will be displayed. 0 will cause all warnings to be suppressed. | --warn=0
--warnAsError | | Treat warnings as errors during build, causing compilation to fail. |
--workflowPath | -w | Specify the directory containing Hadron workflow files. |
