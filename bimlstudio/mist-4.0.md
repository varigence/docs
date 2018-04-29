# New Features in Mist 4.0

## BREAKING CHANGES

- RootNode.PackageProjects has now moved entirely into RootNode.Projects, including all namespaces.  This is done to better support other project types such as analysis services projects.  The mitigation is to change all instances of the <PackageProjects> tag to the <Projects> tag.
  - MITIGATION: If backwards compatibility with older versions of Mist is required, the PackageProjects/Projects element name can be conditionalized based on the tools version.
- Removed QuerySource and Destination.  These were abstractions that wrapped OleDbSource/AdoNetSource and OleDbDestination/AdoNetDestination in a single interface that offered the intersection of their features and automatically chose the correct component type to emit based on the referenced connection type.  These language elements were not particularly useful, were very narrowly used, and their removal will prevent unintentional use by new customers.
  - MITIGATION: Change any instances of QuerySource or Destination to the appropriate OleDbSource/AdoNetSource and OleDbDestination/AdoNetDestination
- All instances of the word Hadron have been removed from the project.  Practical implications include:
  - Hadron.exe is now bimlc.exe
  - Namespaces that included "Hadron" have 1:1 replacements with "Biml"
  - MITIGATION: Empty classes were added in the removed namespaces to prevent code with legacy namespace imports from breaking scripts
- AstDimensionNode and AstFactNode have been removed.  SSAS metadata is now added underneath the AnalysisMetadata element of table objects
- AnalysisServices connection property OverriddenConnectionString is renamed to ConnectionString.  The Provider property is removed as it is no longer needed

## Build Configurations

- Transformer frameworks are now much easier to use.  FrameworkSettings within a Mist project can now be selected from a dropdown in the Build Configuration (bimlproj) editor
- Auto-generated and default build configuration files now use $(MSBuildPath) instead of hardcoded absolute paths, which makes the files more portable among multiple developers
- Changed target version defaults to 2012 (from 2008) in command line compiler and MSBuild task

## General UI

- Changed Mist theme to have a more modern look and feel
- True MDI.  In previous versions of Mist, only a single asset could be opened for editing at a time.  In Mist 4.0, as many editor windows can be opened as system memory permits.
- All dialog boxes have been updated to use modern styling
- Save project dialog includes a list of all changed files
- Multiselect delete from logical view will now show just one confirmation dialog
- Added New Item Dialog for creating items in Logical View library or Project View
- The ability to zoom in/out has been added to every editor and tool window in Mist.  Zoom levels can be set via the zoom slider in the status bar or by holding the control key and scrolling the mouse wheel.  The zoom level can be reset by pressing control + 0 or by pressing control and clicking the mouse wheel
- Updated Getting started items on start page
- Small fix to Mist status bar to hide line and column info when not relevant
- Added notifications window as a central repository of all Mist notifications
- Added code to more aggressively terminate background threads for faster Mist process termination
- Fixed Biml utility file expansion so that it will also work if there is no BimlScript nuggets in a file
- Improved JumpList handling so that it matches what is shown in Mist recent and pinned items lists

## Ribbon

- Ribbon layout has been improved - especially in Home ribbon
- Refresh and Refresh All buttons for BimlScripts have been added to the Build ribbon, in addition to a Refresh option on context menus for Biml files and logical view assets.  This is particularly useful when external metadata has been changed and BimlScripts need to be re-executed
- A toggle button has been added to the Build ribbon to enable/disable the background processing of live BimlScripts.  This is useful in cases where a large number of changes need to be made to scripts that have long execution times
- Added file addition to ribbon
- Added UI and persistence support for Framework file selection in Project View and Config files.  Still need to add MSBuild pieces

## Logical View

- Added LogicalDisplayFolder property to all Biml root objects and library files
- Modified logical view to have groupings by Relational, SSIS, SSAS, Metadata, Library, Broken Live BimlScripts
- Added ability to convert to files from live Logical ViewReference biml script from Live
- Added ability to view common database file types in the Logical View library
- Added support for icon change when an object is stale from broken live BimlScript.  This still isn't working for subclasses of child items of root nodes
- Fixed issue where broken live BimlScript wouldn't show up in cases of schema binding overrides of root collections
- Added hierarchical filtering to logical view
- Added support for saving LogicalDisplayFolder that is set on file view models
- Added feature for default logical view open behavior override

## Table Import

- Table import is now much faster - up to 500X in some cases
- Table import UI is simplified

## Other File Types

- Added C#, VB, SQL, MDX, DAX, and Text Editors for the new file type support

## SSIS Emission

- SSIS 2014 support
- New Tasks and Components
  - CDC Control Task
  - CDC Source
  - CDC Splitter
  - PDW Destination
  - Teradata Source
  - Teradata Destination
- Added SSIS Path Annotations to dataflow and control flow paths
- Added support to SSIS emitter for emitting external columns without the corresponding output columns.  This is primarily used for database datatypes that are unsupported by SSIS.
- Changed DbType to DataType in column specifications
- Added emission of ISPAC files when targeting SSIS 2012 or higher and using project deployment model
- Fixed issue where a variable defined in an event handler could not be referenced from a descendent of that event handler.
- Fixed build crash when cache connections are used on lookups
- Improved emission of connection managers so that the individual connection properties are supplied, rather than just the connection string property
- Fixed code generation issue reported to support with the Fuzzy Lookup component
- Added support for the new AutoPassThroughInputColumns property on Fuzzy Lookup to give it a bit more flexibility
- Added ServerExecutionID to pre-defined variables list for packages in Mist
- Added support for expressions on project connections
- Added PackagePassword property to AstPackageNode for encryption support

## SSAS Emission

- Added support for Analysis Services projects (dwproj files).  Previously, these files were auto-generated with no support for customizations.  That option is still available, but now the projects can be fully customized
- Added new OutputCubeLabel property for cube aliasing
- Fixed issue where Delete option on perspective context menu was always disabled
- Added ability to specify an MdxFile by file path in the list of calculation objects
- Changed the Target property of a cube action to be an optional property
- Added an ID property to cube dimensions so that it can be explicitly set rather than always using the Name property
- Fixed issue where dimension attribute value column mappings were not being emitted

## Project View

- Better handling of files that are referenced from project file but don't exist on disk
- Prevented renaming of files to include invalid filename characters
- Prevented background change notifications from occurring when a file is not part of the project but is visible via the "Show All Files" Project View option.

## Designers

- ScriptProject
  - Fixed the expanded rendering of script projects within the logical view
  - Fixed issue where BimlScript generated script projects would have a growing list of blank files in the autogenerated collection
- Table
  - Added analysis metadata management to the core table designer with support for multiple analysis metadata objects on the same table.New approach to analysis metadata
- Package Editor
  - Fixed a crashing issue when trying to drag from a dataflow edge to a node
  - Fixed issue where clicking on package design surface would not de-select the selected node (which prevented switching focus back to the node)
  - Added a link to quickly open the Package Toolbox when the package design surface is empty
- Designers synchronizing with Biml code
  - Empty parent tags are now converted to self-closing when emptying a child collection or nulling a singleton child
  - Fixed XML emission of singleton children that have existing elements (usually because the object has properties set before it is added to the parent collection)

## Licensing

- Fix for issue where Mist would crash when entering an offline product key if a product key had never been previously entered.
- Fixed a spelling error on the license key page.
- Fixed issue where Mist can sometime crash when it has a license key that cannot be deserialized due to invalid UserData content
- Added ability to get machine code in account control
- Added retry button to product key entry dialog
- Converted all product key checking to be asynchronous

## SSIS Importer

- Added a new SSIS Importer dialog box that enables finer grained control of the import process
- Added ability to perform an SSIS import programmatically using .NET APIs from BimlScript (similar to table import capabilities)
- Added support for importing DTProj files, ISPAC files, and project deployed to a package catalog
- Added version auto-detector to package importer 
- Improvements to column mappings and reducing unnecessary property specifications.
- Fixed the importer for Fuzzy Lookup, which was basically broken for passthrough columns
- Fixed an issue where UnitSeparator (\x1F) would be incorrectly imported when used within flat file formats.
- Fixed an issue where custom log providers were not being imported

## Biml Language

- Directives
  - Added designerbimlpath to the template directive so that intelliprompt can be provided correctly on Biml fragments (that are later included or called)
  - Added code directive to reference C# or VB files with code directly from Biml files.  This enables a variety of scenarios around creating more complex and reusable .NET code for use within BimlScripts
  - Nested include files now work
- Other
  - Added ObjectTag property to all Biml API classes.  This is essentially a .NET Dictionaryt object that enables storage of .NET objects in a similar way to annotations in Biml.
  - Added support for external script project files in the language
  - Added GetPropertyValue method to all Biml API objects.  This provides another option to get object property values when doing dynamic code generation.
  - Added Parse methods to all Biml API objects.  This enables easy parsing of Biml code snippets to create Biml API objects.  It is the inverse of the GetBiml functionality.
  - ConstraintMode has been set to default to Parallel, so that it no longer needs to be specified for most package objects
  - Added BuildSettings object to AstRootNode to access build settings in a central location
  - Added FriendlyName convenience property to columns
  - Fixed Biml reference resolution code so that references are updated even when DisableAllChangedEventInfrastructure is set to true.  This is essential to enable the use of utility methods like IsUsedInPrimaryKey within live scripts on tables also imported within the live scripts
  - Added an IsDatabaseCharSetUnicode override property to Oracle connections

## Biml Code Editor

- Improved intelliprompt completion lists, especially around LINQ expressions
- Added Intelliprompt completion list the GetTag method that shows valid tag values for the target object type
- Added toggle buttons to filter intelliprompt completion lists
- Intelliprompt completion lists for file system navigation in include, code, and other directive file references
- Intelliprompt completion lists for namespaces in import directive
- Added hyperlinks in code files to quickly navigate to referenced include, code, and CallBimlScript files using control + click
- Fixed the issue where the quick info for the xmlns attribute of the Biml element would show as invalid
- Added intelliprompt for files referenced by code directives
- Added Find All shortcut binding to Ctrl-Shift-F
- Added pre-population of find terms with selected text and auto selection of find terms
- Fixed issue where switching to a different application and then back to Mist would cause code editor to lose focus

## BimlScript Errors/Warnings

- Fixed an issue with ValidationReporter where it would occasionally report line numbers into our temp files.  This usually happened with mismatched end braces
- Improved validator for SSIS data flow columns to show the duplicate column name when the same column is mapped multiple times
- Fixed an issue where transformer generated errors were not being reported correctly.  They previously appeared as Null Reference Exceptions because of an issue in the reporting mechanism.
- Fixed issue where wrong column name was being shown in Script Component column type mismatch errors
- Clarified error message when "Build and Run" or "Build and Execute" was performed without the correct version of SSIS installed

## Documentation

- Fixed spacing in table column documentation
- Fixes to documentation generator to handle illegal filesystem characters in asset names and to report the exception message on doc gen failure

## Metadata

- Added capability to create metadata models
- Added auto-generated metadata UI creation based on supplied metadata models
- Added dynamic object generation for easy and portable access to metadata through BimlScript code nuggets
- Added live metadata validation errors based on validators specified in the metadata models

## Offline Schemas

- Added ability to specify external metadata for use in building SSIS packages via offline schemas
- Added ability to use offline schema information in SSIS build process
- Added background tracking of offline schema information to ensure that it remains synchronized with both the packages in the Mist project and the external data sources
