# New Features in Mist 4.0 Update 1

## Mist Designers and Editors

- Connection Designer
  - Fixed an issue where update databases in connection editors would fail if a nonexistent database was already in the combobox text field
  - Several bug fixes, particularly around ADO.NET connections
- MetadataModel Designer
  - Fixed issue where metadata model editor wouldn't let you change the name of a relationship
- Project Designer
  - Fixed bug where project deployment checkbox in project editor would still be enabled with SSIS version targets that don't support project deployment
- Package Designer
  - Fixed package details editors for Merge and Merge Join where column data grids were not synching with Biml properly
- CubeProject and PackageProject Designer
  - Fixed not showing items in logical display folders
- Biml Editor
  - Fixed issue where syntax editor would automatically scroll to caret when .NET Quick Info sessions were requested
  - Added a completion list item for ``<#@ template tier"..." #>`` intelliprompt to inform user that any integer value can be used for tiers
  - Fixed outlining in BimlScript editor - now code nuggets and Biml elements are collapsible

## Mist Dialogs

- Logical View
  - Added tooltip to Broken Live BimlScript group to describe what it is for
  - Fixed bug with showing Broken Live BimlScripts when not actually broken - specifically when the error was due to an non-.NET code issue
  - Fixed issue where duplicating a transformer in the Logical View would crash Mist
  - Fixed bug where using Biml Editor as default logical view action would cause both Biml Editor and Visual Designer to be opened
  - Removed internal-use properties from property grid in logical view
  - Added new modes for default logical view action that also enable Biml Designer to be used
  - When creating new items in the logical view, that item is now automatically opened using whatever has been configured as the default logical view action
- Import Tables
  - Fixed issue where indexes, view info, and a handful of other items were being imported even when they were not supposed to be based on ImportOptions
  - Fixed issue where Oracle tables wouldn't import if ExcludeViews was set
- Find/Replace
  - Changed Find/Replace window so that it can also search the output pane of the Template Editor
  - Added an editable combo box to the Find/Replace window that retains history for search terms used in the current project session

## Other Mist UI

- Updated splash screen
- Switched output window to use a TextBox rather than a RichTextBox.  Warnings and errors are no longer colorized, but we avoid the huge performance issues and Unicode rendering problems associated with the WPF RichTextBox.
- Added support for upgrading Mist settings from build to build
- Improved IsDirty tracking on *.mst file
- Product key is now hidden in account control to prevent inadvertent key disclosure during demos or videos
- Fixed issue where "Open In Windows Explorer" from the MDI document tab would not work for BimlScript Designer windows
- Fixed a performance issue with interactive transformers
- Fixed issue with infinite loop reloading of files when there is use of side-effect-causing GetBiml in live scripts

## Biml Language

- Removed Table property from CdcSourceNode.  It is not used.
- Added AnalysisServicesConnectionInformation to all DBConnections for the purposes of SSAS Impersonation and other features
- Added support for new BufferMode and BufferMaxSize properties for Teradata Source and Teradata Destination in SSIS 2014
- Added DQS Cleansing Component and DQS Connection
- Added support for project level encryption and the ProjectPassword property on PackageProjects

## Biml API

- Added timeout support to all of the database providers and external data access methods
- Fixed issue where properties changed via API were not being reflected in GetBiml output
- Added GetDataTable support for most major DbConnection types
- Added AstRootNode convenience collections for FlatFileFormats, RawFileFormats, PackageProjects, and CubeProjects
- Fixed issue where AstRootNode convenience collections did not support name-based indexing in Live mode
- Fixed an issue where StructureEquals was producing incorrect results due to a missing negation operator in autogenerated code

## Biml Compiler

- Improved compiler version information in MSBuild and bimlc.exe
- Added ability to get machine code from bimlc.exe
- Added support for SsisExternalColumnsQueryTimeout option to globally override SSIS external metadata discovery time outs
- Fixed issue with output paths being dynamically created and references being broken in XmlSource node
- Fixed issue where MSBuild response files were not being saved with Unicode support.  MSBuild requires the BOM to identify Unicode, which File.WriteAllText does not use by default.
- Fixed issue where MSBuild would hang and peg the CPU if a built-in transformer framework failed
- Added package password handling to BimlDriver and BimlEngine MSBuild task
- Fixed a bug in AnalysisServicesProcessing emitter where parallel processing order would not be handled properly in some cases
- Changed compiler/msbuild option for SSIS encryption password from PackagePassword to the more inclusive SsisEncryptionPassword
- Added warning level option (/warn=0 or /p:Warn=0) so that warnings can be turned off
- Fixed nested includes so that class type members also can nest (i.e. `<#+ #>` blocks)

## BimlScript Errors/Warnings

- Added file name to errors/warnings created from BimlScript directives
- Added warning when build-only assets cannot be located
- Improved validation reporting in Metadata model dynamic objects
- Added an error for duplicate dataflow column nodes.  This usually arises with "reserved" column names "ErrorCode" and "ErrorText"
- Fixed issue where errors in nested includes were not being reported
- Added a warning and an automatic patch of import statements that use the old Hadron namespaces
- Fixed an issue where SSIS emitter was incorrectly producing a "not supported" error on some file resources
- Added support to ValidationItems to track if they were from .NET code nugget error or other error
- Fixed sorting of line and column fields in validation grid (numerical sorting instead of lexicographic sorting)

## Database Providers and Type Mappings

- Fixed a type mapping bug in XmlSource
- Fixed a bug for configurations of Oracle that do not supply IsByteSemantic with column metadata
- Fixed a few minor Teradata type mapping issues
- Fixed Oracle datatype mapping in decimals
- Significantly improved DatabaseProviderSelector to more closely match Mist 3.4.  Most notably, this will fix issues where ADO.NET connections were largely ignoring the provider setting
- Fixed a crash that can occur in an internal method for creating database connection strings when the provider type of the underlying connection cannot be detected.
- Fix for Oracle schema provider logic so that fallback will use OracleConnection type rather than Odbc connection
- Fixed data type mapping on import for XML column length and sysname

## SSIS Emission

- Fixed issue where Ssis2014 packages were not having their nodes sorted correctly
- Added support for EncryptAllWithUserKey and EncryptAllWithPassword to SsisEmitter
- Turned off an SSIS bug workaround in AdoNetDestination emitter for 2012+ since SSIS fixed it in the 2012 release
- Fixed CDC Source emitter to use the actual specified time out instead of a hardcoded value
- Fixed an issue with AdoNetSource emitter where it would not convert a WSTR with length greater than 4000 to an NTEXT
- Fixed bug in XmlSource where outputs were not being updated correctly - orphan objects that broke reference were being created
- Fixed minor issue with emission of corrupt packages when using PDW with a 2008 target
- Fixed issue with DataType emission in downlevel SSIS targets
- Fixed bugs in Odbc Source and Destination where properties were not being emitted with the correct notification or type translator settings
- Minor fixes for PDW and Teradata destination emission
- Added support for variables of DT_DISPATCH type in SSIS importer
- Fix for an SSIS expression evaluation error related to casting integers to date times
- Added emission of synthetic connection manager parameters to project manifest via the connection manager translators
- Fixed issue where script tasks in 2014 would ask to be upgraded by BIDS
- Fixed issue where synthetic types like (Web Servbive Type) in script project settings would produce bad code behind during build
- Fixed issue where ISPac files were losing unicode characters

## SSIS Import

- Fixed scrolling for large numbers of imported assets
- Applied file extension filters to file dialog boxes
- Fixed an issue where the LabeledFileSelector control would grow forever off the edge of the dialog
- Added a warnings and errors display on import
- Added a warning when placeholder connections are created for project connections imported from a DTSX file
- Fixed issue where CDC Source components were being imported as custom components
- Fixed issue where CDC Control task import was not correctly importing the StateVariable
- Prevented duplicate import of project connections referenced by packages
- Fixed issue where DTProj files without manifests were not being correctly imported
- Fixed issue where hex codes (for things like flat file delimiters) would not be properly imported
- Added option to automatically add a Biml annotation to imported SSIS object to indicate their source package
- Added option to add annotations to destination components with unmapped external columns
- Added feature where duplicate items in SSIS import are renamed, but a Biml annotation is added with the original name
- Added duplicate detection to script projects on SSIS import
- Added trimming of variable lists in script projects in importer
- Added error when trying to import DTS script tasks and components from 2005 packages
- Fixed an issue with import options default values when being used from the API
- Fixed issue where completely empty script tasks would import but not build (since SSIS fills in the missing files with defaults on completely empty scripts)