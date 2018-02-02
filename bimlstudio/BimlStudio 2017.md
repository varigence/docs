####Significant changes between Mist 4.0 Update 1 and BimlStudio 2017####

**Breaking Changes**

- Moved PathAnnotation from PrecedenceConstraints to TaskflowInputPath.
- Clean output folder is now set to false by default in AstEngine's compiler settings.
- Fixed issue in CallBimlScript property directives where all properties were required and marking them as required would create an error. To fix this, we apply all of the required properties first and then the optional properties in order of specification. Since required properties basically didn't work before, this shouldn't affect any actual code, but it should be called out as a potentially significant behavioral change.

**BimlStudio Rebranding**

- Updated version to BimlStudio 2017 v5.0.
- Updated splash screens, logos, and color scheme to match Biml color scheme.
- Removed all instances of the text "Mist" from the product and all code. If you were using any unsupported Mist APIs, replace all instances of "Mist" with "BimlStudio".
- Updated BimlStudio version to 5.0 in the Registry.

**Major Features**

- Biml global includes
- Biml Bundles
- New source control UI including Git, Visual Studio Online, and Team Explorer Everywhere support
- Significant performance improvements
- New installer
- SSIS 2016 support
- SSAS Tabular Emission
- Usability enhancements throughout the UI
- Added multi-product support to license keys and better offline support

**Platform**

- Moved all DLLs and executables to use .NET 4.6 rather than .NET 3.5.
- Removed warnings from a couple of framework transformers.
- BimlStudio is now truly x86 or x64. This shouldn't be visible to end-users, but it was necessary to begin hosting HTML/JS/CSS controls natively in BimlStudio. The command line compiler is unaffected and remains AnyCPU.
- Updated EULA to cover frameworks including BimlFlex.

**Biml Bundles**

- User Interface
- Bundles are now shown in project and logical views.
- Bundle designer added.
- Wired up bundle settings editor.
- Biml Language
- Added the <#@ extension #> directive to customize BimlBundle extension points.
- Biml API
- Added extension and bundle related Call methods to FlowTextTransformation.
- Biml Code Editor
- Added intelliprompt for extension bundles and extension points. targets still need to be done.
- Added ability to specify templates to a command line build to support extension discovery.
- Added support for passing template files into builds so that bundles can use them to find extensions, among other benefits.
- Added support for passing bundles into builds.
- Added support for specifying that a framework or a transformer lives inside a bundle.
- Added initial support for bundle overrides.
- Added msbuild and command line inputs for BimlFrameworkBundleFilePath,TransformationScriptBundle, Bundles, BundleOverrides, and Templates.
- Fixed crashing issue when PluginDirectory doesn't exist. This only manifested in BimlOnline.
- Updated PathResolver to work with Bundles. There is some more stabilization and testing to do - especially around *BUNDLE* paths.
- Added support for Bundle setting management and serialization.
- Manifests
- Added icon support for EP categories in bundles.
- Added new file template support in bundles for Eps.
- Added the ability to split manifest files in two, including a common file and multiple variants for application specific bundle modes.
- Fixed an error in the new BimlFlexExcel MetadataInstance.biml file.
- Added MetadataInstanceName and MetadataModelName as properties inside of the bundle manifest.

**BimlFlex**

- Added Extension Point information to BimlFlex ribbon.
- Wired up icons for BimlFlex ribbon.
- Ribbon updates for SetupBimlFlex and Generate Scripts.

**Performance**

- Added lazy loading of collections to BimlStudio view models.  This will significantly reduce memory consumption for large projects.
- Improved performance of CallBimlScript by around 30X by adding caching when possible.
- Added caching of internal build information for ScriptTask Projects and Script Component Projects.  This will massively increase build performance where the same script task or component is reused in many locations in a project (provided that the ProjectCoreName is also reused).
- Added caching to dynamically generated metadata model class, which provides massive performance improvement for RelatedItem interrogation in large metadata instances.
- Memory improvements when closing documents.
- Improved performance issue in the editor when there were large blocks of plain text.

**Logical View**

- Fixed issue where generating the DropAndCreateDDL from BimlStudio context menu would crash Mist if the table had errors.
- Added persistence of logical view expansion state between invocations of BimlStudio.
- Added a new Bundle Extensions group to the Library of the Logical View.
- Fixed bugs with logical display folder calculations when files can jump between multiple filtered folders (Utilities, Transformers, Extensions).
- Added delete confirmation dialogs for measure groups and dimensions in the logical view.
- Adding "Delete Unscripted" to top-level Logical View nodes.

**Biml Code Editor**

- Fixed issue where opening a standalone Biml file could crash Mist.
- Fixed quick info and code completion in standalone Biml files.
- Improve selection highlighting syles in BimlEditor to make it easier to read.
- Fixed intelliprompt in include scenarios.
- Fixed intelliprompt in multi-line text nuggets.
- Made some additional properties Advanced to prevent them from showing up in intelliprompt completion lists.

**All Text Editors**

- Fixing issue where BimlStudio would open txt and csv files in an external editor when opened from the logical or project view.
- Added Cntrl+Shift+H key binding for Replace All.
- Added support for find/replace all to all text file types.
- Added support to find/replace all to work with multiple root folders.
- Added line/col status bar support for all text file types.
- Added a dialog that shows the number of occurrences replaced in a ReplaceAll operation.

**Other BimlStudio UI**

- To enable FIPS compliance, changed all internally used MD5 hashes to SHA1 hashes.
- Fixed sizing of the project converstion dialog box.
- Fixed an issue where Unicode characters were not being properly displayed in output window for MSBuild executions.
- Added the friendly type name of the candidate object in all multi-select confirmation dialogs (transformer and table import overwrite confirmation dialogs).
- Fixed issue where several ribbon buttons would not be disabled when a project is not loaded.
- Changed settings and recent files to save more frequently.
- Adding bundle manifest files as a supported BimlStudio miscellaneous text file type.
- Added support for Bundle settings and a settings editor in BundleEditor tab.
- Force Transformers, Globals, and Extensions to never be Live.

**Biml Language**

- Added Biml language support for PermittedValues in AstMetadataModelPropertyNode.
- Added support for global includes in CallBimlScript target files.
- New global directive to disable the global include for CallBimlScript files, called ApplyToCallBimlScript
- Added LinearOnCompletion and LinearOnSuccess constraint modes to packages
- Update to allow project and package parameters to be used whereever variables are in SSIS.
- Modified ScriptComponent logic so that BlobColumns are created when needed rather than using String columns.
- Added mapping output from TextTemplating engine to permit line mappings from expanded BimlScripts to the source BimlScripts.
- Added the DisablePackageConfigurations property to packages.  This is primarily for cases where imported packages reference package configurations but have them disabled.
- Added SsisDataTypeOverride functionality.
- Set default value for LogicalDisplay folder to empty string rather than null.  This simplifies coding when LogialDisplayFolder is used as a lightweight intermediate metadata source.
- Changed BimlScriptDirectiveLanguage to include extensionpoint directive tokens.
- Added TargetSeverVersion to SqlServerDqsConnection for Ssis2016 and above.
- Added logging support to the DqsCleansing component.
- Made everything related to script projects into scope boundaries.
- Metadata Models
 - Added permitted values collections to metadata models.
 - Added IsUiEditorVisible to Metadata Model Properties.
 - Added support to metadata model relationships for specifying filtered lookups in the UI.
 - Entity IsUiEditorVisible

**Biml API**

- Added ConvertExcelDateToDateTime method to DataTypeConversion.
- Changed all overloads of CallBimlScript* that product a dynamic object output to be called CallBimlScript*WithOutput. This is to avoid issues with VB not handling output parameters correctly.
- Added IsBackgroundCompilation property that can be accessed from BimlScripts. It lets you conditionalize things like popup dialogs or file writes to happen only when you're doing a real build or a manual execution.
- Added an extension method for easier access to connection string values.
- Added support for CustomOutput object in CallBimlScript and its relatives.
- Added CallBimlScriptContent to FlowTextTransformation so that BimlScript literals can easily be called.
- Added MakeSsisSafe extension method for strings.
- Fixed a logic error in AstTableNode.GetColumnComparisonList extension method when emitNullComparison is set to true.
- Fixed an issue where RootNode.GetTag() would not work on file updates within live BimlScripts.
- Added an AstDestinationTransformationNode abstract class - this is primarily useful for transformer targeting.
- Added MetadataModels, MetadataInstances, and OfflineSchemas properties to AstRootNode and TierFilteredAstRootNode.
- Fix for issue where GetBiml would not include some changes to collections that had been made programmatically.
- Added flat file extension method for generating table columns from flat file columns.
- Fixed issue where multi-type generics could not be used as arguments in CallBimlScript.
- Fixed issue where CallBimlScript files were not working with ObjectTag in Live BimlScript scenarios.
- Metadata Models
 - Fixed some issues with metadata model wrapper where property names and parent names were not being written to the validation items correctly.
 - Added instance information to dynamic objects for metadata validators.

**Database Providers and Type Mappings**

- Added formal support for the DevArt MySql provider.
- Added formal support for Ingres ODBC and ADO.NET.
- Added formal support for SAS local data provider (e.g. sas7bdat files).
- Fixed issue where custom types from SQL Server were not being imported correctly.

**SSIS Components**

- Added Biml elements for Azure Feature Pack, including:
 - Task details controls and images
 - Models for connections and tasks
 - SSIS emitters and importers

**Source Control**

- Added Git source control
- Added support for Team Explorer Everywhere
- Added support for Visual Studio Online source control authentication
- Moved source control objects to BimlStudioExtensions so that they can be open sourced in future
- Complete overhaul of source control UI

**Visual Basic**

- Updated BimlEngine so that dynamic objects will work with both VB and C#.
- Added VB code for metadata model dynamic objects.
- Removed default timeOut arguments for all of the external data access APIs and replaced them with explicit method overloads. This is primarily to better support VB, which does not handle overloads with default arguments as elegantly as C#.

**SSIS Import**

- Fixed an issue in the SSIS importer where an empty string ForcedExecutionValue might be set.
- Added support for a status object when import is run programmatically.
- Fixed issue where SSIS importer would not correctly detect the SSIS version in some cases.
- Fixed SSIS 2008R2 package emission issues.
- Fixed bugs with emitting SSIS annotations.
- Preventing crash in importer when component files cannot be read from inside of a ScriptComponent.

**Table Import**

- Fixed issue where identity information was not being imported properly from SQL Server tables.
- Added support for more custom types in SQL Server table imports.
- Cleaned up precision and scale settings on table import for types that don't support them.
- Added option to insert raw provider annotations into table import results.
- Fixed bug where importing multiple tables with the same name in different schemas wouldn't work in GetDatabaseSchema
- Added option to put imported tables into logical display folders based on database and schema

**SSAS Emission**

- Fixed an issue in SSAS role emission where the database write permission would be incorrectly set to Allowed instead of None.
- Fixed an issue where AnalysisServicesProcessing task was not being emitted with correct settings for Parallelism.
- Fixed an issue where database objects with special characters would not be correctly encoded in the DataSourceView during cube emission.
- Fixed issue where SSAS cube permissions were not being emitted in some cases.
- Fixed an issue where Calculations were not being emitted into SSAS cube perspectives.

**SSIS Emission**

- Added support for SSIS annotations to packages, containers, event handlers, and data flows for SSIS 2012 and higher.
- Added support for dataflow and controlflow path annotations for SSIS 2012 and higher.
- Added error for SSIS 2016 and higher to not use the new virtual column names for errors: 'ErrorCode - Description', and 'ErrorColumn - Description'.
- Fixed an issue where BalancedDataDistributor output paths were not being placed into an exclusion group.
- Fixed issue where __$seqval column was being added incorrectly for CDC component outputs with CDC processing mode of Net.
- Fixed an issue where the Aggregate component would use the wrong data type when averaging certain column types.
- Fixed issue where package parameters with datetime type were not being emitted with the correct format into the project deployment manifest.
- Fixed issue where binary parameters were not being properly mapped in SQL queries (e.g. ExecuteSQL with parameters).
- Added support for the LEFT string operator to SSIS expression parsing.
- Added support for package configurations even when using project deployment model.  This is not a recommended solution, but it is supported.
- Fixed an issue with permissions violations when deleting temp directories used in script project compilation in some corner cases.
- Added CachedComparisonFlags to input columns in SSIS emitter language definition.
- Fixed sorting of DTSX XML elements for 2012+.
- Fixed date mapping in ADO.NET Source.
- Fixed date and string mappings in OLEDB Source.
- Fixed date mapping in ADO.NET Destination.
- Fixed date and string mappings in OLEDB Destination.
- Fixed DontSaveSensitive support in OLEDB connection.
- Stopped emitting __$seqval as an external column in CDC Source when using an incompatible CDC Processing Mode.
- Fixed issue where format file references were being improperly emitted for BulkInsert tasks.
- Fixed issues with XmlSource where outputs were not being constructed correctly for unbounded elements.
- Fixed issue with CDC Control Task where emission would fail if StateConnection or StateName were not supplied.
- Fixes for SSIS Lookup type mappings for date and text.
- Fixed an issue where errors would be produced if you used a parameterized query in an SSIS component where the variable used to set the parameter contained an expression.
 - Fixed and NRE when parameters do not exist in an OLEDB source or lookup build.
- Updated emission properties to correctly handle SSIS 2008/2005 packages.
- Added XML escaping to SSIS emitter to fix 2012+ emission errors.
- Updates to SSISEmitter for 2016 support.

**Javascript Emission**

- Added GetJson method with several variants to every Biml object and collection.

**Command Line Tools**

- Changed the output path of the bimlproj that is autogenerated from the ProjectView so that it is no longer in temp and has a reasonable name.

**Biml Validator**

- Fixed issue where validator thread would be interrupted if a table had multiple keys with the same name but no assigned schema.
- Added a validator for AnalysisServicesProcessing task to ensure that the correct mix of properties is specified for each type of processing job.
- Updated SsisEmitter dataflow type mismatch error to actually list the mismatched types.
- Fixed an issue where user generated errors/warnings/notifications would not show up on initial project load in BimlStudio.

**Internal**

- All assemblies are now strong-named.
- Changed MSBuild configuration files (bimlproj) to use MSBuild version 4.0 by default.

**Documentation**

- Added support for building documentation to command line compiler and MSBuild.
- Added checkbox to ribbon for documentation build.
- Added documentation preview.
- Added new item templates for documentation files.
- Added CSS, HTML, and Javascript editor support to enable Documentation styles and templates.
- Added new command line and MSBuild options for tabular and documentation support.

**Provider Support**

- Added Db2 OLDEB provider.
- Added OpenEdge Odbc provider.
- Adding basic Excel ACE OLEDB support to GetDatabaseSchema.

**Stability Improvements**

- Fixed exception in BimlStudio that would occur sometimes with mouse-based copy/paste.
- Fixed exception crashing BimlStudio when writing settings files.
- Fixed an invalid cast exception that crashed BimlStudio, discovered through user crash logs.
- Fixed a crash issue due to UI thread mismatch in BimlStudio, discovered through user crash logs.
- Fixed crashing issue caused by an exception in confirmation dialogs, discovered through user crash logs.
- Fixed validation reporter bug that threw an exception when reporting messages that included guids.
- Fixing BimlStudio DockSite registration-related crashes on Forward/Back navigation.
- Fixing crashes when expanding templates into projects, discovered through user crash logs.
- Fixed issue with icon references that prevented complete uninstall.
- Changed some Linq collection Cast operations to OfType to avoid BimlStudio crashes.
- Updated RestProxy to work with transparent proxies that use LDAP credentials. This significantly improves the reliability of license checks and online content checks.
- Fixed issue with crashing metadata model property data grid due to missing CustomLength property on the property view model.
- Only referenced components in Offline Schema Items actually changed to make Component not required. This fixes some issues with transformers that cause the offline schema items to break.

**GetBiml Updates**

- Fixed GetBiml bug affecting singleton children.
- Fixed an issue with the emission of least qualified names for Biml object references.
- Added PropertiesToOverride support to new GetBiml method for when some properties need to emit children rather than attributes in SSIS emission.
- Fixed issue with SSAS GetBiml that was causing syntax errors.
- Adding forced GetBiml emission of required attributes.
- Fixed some code generation for GetBiml to support SSIS 2008/2005.

**UI Updates**

- Added code to activate BS error window when build fails.
- Updated new project screen styling and icons.
- Added icons for connecting to network in status bar and enable/diasable logging.
- Updated BimlScript ribbon tab with new icons.
- Added blue dot to Live Biml files in the Project View.
- Improved Project View tool tips for Biml files.
- Added button to delete analysis metadata objects in the table editor.
- Switched to using new icons for PackageProject, CubeProject, and TabularProject.
- Renamed "Generate Documentation" to "Build Documentation".

**Package Updates**

- Fixed static properties for several package tasks to match the latest options and data types
- Fixing data types for some task nodes
- Changed default SQL Server target version for new projects to 2014 and SSIS project deployment model

**Bug Fixes**

- Fixed issue where "Delete Unscripted" did not work for Connections in the Logical View.
- Fix for case insensitivity in VB within metadata dynamic object templates.
- Fixed issue where code directives inside includes were not being added to the parent file.
- Fixed issue where language selection in global includes would not apply to dynamic object code files.
- Fixed issue where any non-Biml files in the logical view would be removed by not deleted from the harddrive.
- Fixed issue where Bundle settings editor did not have a scrollbar.
- Fixed issue where failed builds would be reported as successful when running in unicode support mode.
- Fixed issue where dataflow and control flow edges would not render on machines with some locale settings.
- Fixed partition source selector in partition editor.
- Fixed issue where items duplicated from a BimlScript object were not fully populated and could not be modified.
- Fixed issue where custom dataflow properties for custom components could have invaid types - particularly for System.Null.
- Fixed issue where error messages for code files would not show the correct filename and line number

