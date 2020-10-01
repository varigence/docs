---
uid: bimlexpress-release-notes-2017
name: BimlExpress Release Notes 2017
---

# BimlExpress 2017 Release Notes

## BimlExpress 2018

**Release Date: ???**

### Breaking Changes from Previous Release

???

### Major Features

- SSIS Package Importer

## BimlExpress 2017

**Release Date: July 15th, 2017**

### Breaking Changes from Previous Release

- Moved PathAnnotation from PrecedenceConstraints to TaskflowInputPath.
- Fixed issue in CallBimlScript property directives where all properties were required and marking them as required would create an error. To fix this, we apply all of the required properties first and then the optional properties in order of specification. Since required properties basically didn't work before, this shouldn't affect any actual code, but it should be called out as a potentially significant behavioral change.

### Major Features

- Expanded Biml Preview pane built into editor
- Biml global include files
- Improved Biml code editing experience
- New VSIX installer
- Improved VB Support
- Significantly improved runtime performance and reduced memory usage
- Multi-product support in product keys

### Platform

- Moved all DLLs to use .NET 4.6 rather than .NET 3.5
- All assemblies are now strong-named
- Updated EULA to cover frameworks including BimlFlex

### BimlExpress UI

- Improved Find/Replace within document
- Added option to disable autoformat in preview pane
- Significantly improved load time of existing Biml projects by eliminating upfront Biml file parsing.
- Fixed an issue where bulk opening multiple files and then closing them could cause a VS crash or an error when opening additional files
- Biml file icon is now registered by the add-in if it isn't already registered

### Biml Code Editor

- Fixed a large number of bugs
- Switched to better fonts for the completion list and quick info popup windows
- Improved quick info and code completion performance
- Improved automatic code insertions to enable a smoother coding workflow
- Fixed quick info and completion lists in include scenarios.
- Fixed completion lists in multi-line text nuggets.
- Made some additional properties Advanced to prevent them from showing up in intelliprompt completion lists
- Added preview mode of .NET intellisense for early adopters
- Fixed interaction between code editor and compare tool in VS

### Biml Language

- See [Biml Release Notes](xref:biml-release-notes)

### Biml API

- See [Biml Release Notes](xref:biml-release-notes)

### Database Providers and Type Mappings

- Added formal support for the DevArt MySql provider.
- Added formal support for Ingres ODBC and ADO.NET.
- Added formal support for SAS local data provider (e.g. sas7bdat files).
- Fixed issue where custom types from SQL Server were not being imported correctly.
- Added Db2 OLEDB provider.
- Added OpenEdge Odbc provider.
- Adding basic Excel ACE OLEDB support to GetDatabaseSchema.

### SSIS Components

- Added Biml elements for Azure Feature Pack, including:
  - Task details controls and images.
  - Models for connections and tasks.
  - SSIS emitters and importers.

### Visual Basic

- Updated BimlEngine so that dynamic objects will work with both VB and C#.
- Added VB code for metadata model dynamic objects.
- Removed default timeOut arguments for all of the external data access APIs and replaced them with explicit method overloads. This is primarily to better support VB, which does not handle overloads with default arguments as elegantly as C#.

### Table Import

- Fixed issue where identity information was not being imported properly from SQL Server tables.
- Added support for more custom types in SQL Server table imports.
- Cleaned up precision and scale settings on table import for types that don't support them.
- Added option to insert raw provider annotations into table import results.
- Fixed bug where importing multiple tables with the same name in different schemas wouldn't work in GetDatabaseSchema.

### Javascript Emission

- Added GetJson method with several variants to every Biml object and collection.

### Biml Validator

- Fixed issue where validator thread would be interrupted if a table had multiple keys with the same name but no assigned schema.
- Added a validator for AnalysisServicesProcessing task to ensure that the correct mix of properties is specified for each type of processing job.
- Updated SsisEmitter dataflow type mismatch error to actually list the mismatched types.
- Fixed an issue where user generated errors/warnings/notifications would not show up on initial project load in BimlStudio.

### GetBiml Updates

- Complete rewrite of GetBiml functionality that will have better performance and be more reliable.
- Fixed an issue with the emission of least qualified names for Biml object references.

### Package Updates

- Fixed static properties for several package tasks to match the latest options and data types.
- Fixing data types for some task nodes.
- Biml can be used to generate package parts.
- Package parts can now be referenced from Biml control flow.

### SSIS Emission

- Added support for SSIS annotations to packages, containers, event handlers, and data flows for SSIS 2012 and higher.
- Added support for dataflow and controlflow path annotations for SSIS 2012 and higher.
- Added error for SSIS 2016 and higher to not use the new virtual column names for errors: 'ErrorCode - Description', and 'ErrorColumn - Description'.
- Fixed an issue where BalancedDataDistributor output paths were not being placed into an exclusion group.
- Fixed issue where __$seqval column was being added incorrectly for CDC component outputs with CDC processing mode of Net.
- Fixed an issue where the Aggregate component would use the wrong data type when averaging certain column types.
- Fixed issue where package parameters with datetime type were not being emitted with the correct format into the project deployment manifest.
- Fixed issue where binary parameters were not being properly mapped in SQL queries (e.g. ExecuteSQL with parameters).
- Added support for the LEFT string operator to SSIS expression parsing.
- Added support for package configurations even when using project deployment model. This is not a recommended solution, but it is supported.
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

### Bug Fixes

- Fix for case insensitivity in VB within metadata dynamic object templates.
- Fixed issue where code directives inside includes were not being added to the parent file.
- Fixed issue where language selection in global includes would not apply to dynamic object code files.
- Fixed issue where any non-Biml files in the logical view would be removed by not deleted from the hard drive.
- Fixed issue where Bundle settings editor did not have a scrollbar.
- Fixed issue where failed builds would be reported as successful when running in Unicode support mode.
- Fixed issue where dataflow and control flow edges would not render on machines with some locale settings.
- Fixed partition source selector in partition editor.
- Fixed issue where items duplicated from a BimlScript object were not fully populated and could not be modified.
- Fixed issue where custom dataflow properties for custom components could have invalid types - particularly for System.Null.
- Fixed issue where error messages for code files would not show the correct filename and line number. Performance
- Improved performance of CallBimlScript by around 30X by adding caching when possible.
- Added caching of internal build information for ScriptTask Projects and Script Component Projects. This will massively increase build performance where the same script task or component is reused in many locations in a project (provided that the ProjectCoreName is also reused).
- Improved performance issue in the editor when there were large blocks of plain text.
