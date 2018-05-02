---
uid: biml-release-notes
name: Biml Release Notes
---
# Biml Release Notes

**Release Date: July 15th, 2017**

## Breaking Changes from Previous Release

- Moved PathAnnotation from PrecedenceConstraints to TaskflowInputPath.
- Fixed issue in CallBimlScript property directives where all properties were required and marking them as required would create an error. To fix this, we apply all of the required properties first and then the optional properties in order of specification. Since required properties basically didn't work before, this shouldn't affect any actual code, but it should be called out as a potentially significant behavioral change.

## Biml Language

- Forced Transformers, Globals, and Extensions to never be Live to avoid potential issues with compilation with incorrect user settings.
- Added Biml language support for PermittedValues in AstMetadataModelPropertyNode.
- Added support for global includes in CallBimlScript target files.
- Added property to the global directive to disable the global include for CallBimlScript files, called ApplyToCallBimlScript.
- Update to allow project and package parameters to be used where ever variables are in SSIS.
- Modified ScriptComponent logic so that BlobColumns are created when needed rather than using Stringcolumns.
- Added mapping output from TextTemplating engine to permit line mappings from expanded BimlScripts to the source BimlScripts.
- Added the DisablePackageConfigurations property to packages. This is primarily for cases where imported packages reference package configurations but have them disabled.
- Added SsisDataTypeOverride functionality.
- Set default value for LogicalDisplay folder to empty string rather than null. This simplifies coding when LogialDisplayFolder is used as a lightweight intermediate metadata source.
- Changed BimlScriptDirectiveLanguage to include extensionpoint directive tokens.
- Added TargetSeverVersion to SqlServerDqsConnection for Ssis2016 and above.
- Added logging support to the DqsCleansing component.
- Made everything related to script projects into scope boundaries.
- Metadata Models
  - Added permitted values collections to metadata models.
  - Added IsUiEditorVisible to Metadata Model Properties.
  - Added support to metadata model relationships for specifying filtered lookups in the UI.
  - Entity IsUiEditorVisible

## Biml API

- Added ConvertExcelDateToDateTime method to DataTypeConversion.
- Changed all overloads of CallBimlScript* that product a dynamic object output to be called CallBimlScript*WithOutput. This is to avoid issues with VB not handling output parameters correctly.
- Added IsBackgroundCompilation property that can be accessed from BimlScripts. It lets you conditionalize things like popup dialogs or file writes to happen only when you're doing a real build or a manual execution.
- Added an extension method for easier access to connection string values.
- Added support for CustomOutput object in CallBimlScript and its relatives.
- Added CallBimlScriptContent to FlowTextTransformation so that BimlScript literals can easily be called.
- Added MakeSsisSafe extension method for strings.
- Fixed a logic error in AstTableNode.GetColumnComparisonList extension method when emitNullComparison is set to true.
- Fixed an issue where RootNode.GetTag() would not work on file updates within live BimlScripts.
- Added an AstDestinationTransformationNode abstract class – this is primarily useful for transformer targeting.
- Added MetadataModels, MetadataInstances, and OfflineSchemas properties to AstRootNode and TierFilteredAstRootNode.
- Fix for issue where GetBiml would not include some changes to collections that had been made programmatically.
- Added flat file extension method for generating table columns from flat file columns.
- Fixed issue where multi-type generics could not be used as arguments in CallBimlScript.
- Fixed issue where CallBimlScript files were not working with ObjectTag in Live BimlScript scenarios.
- Metadata Models
  - Fixed some issues with metadata model wrapper where property names and parent names were not being written to the validation items correctly.
  - Added instance information to dynamic objects for metadata validators.