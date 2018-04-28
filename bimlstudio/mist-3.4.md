# New Features in Mist 3.4

ist 3.4 is another successful short release cycle that delivers powerful new features - less than 6 weeks after Mist 3.3.

## Mist UI Changes

- Added a forward/back button in the quick access toolbar.  Forward and back can also be accessed with Alt-Left/Alt-Right, mouse buttons, or touch gestures.  History is maintained for 15 items by default.
- Added a search box to Project View which enables search/filtering by file name
- Fix for missing root folders on project load
- Added context menu commands for new sql generation extension methods (see below)
- Copy Biml context menu item now on all objects.  This will give you the raw Biml for any object, even if it is live scripted.
- Changed the default on logical view to remove empty folders/groups when a search is active
- Fixed a Mist crash when broken transformers are run from context menu.
- Improvements to licensing and activation - especially in offline scenarios.
- Added "View in BimlScript designer" to all logical view root items, which enables you to more easily see expanded Biml for live scripted objects

## Package Editor

- Entirely new Compact Mode that can be toggled with a new ribbon button and which is saved as a project setting.
- ~20% performance improvement in Package Editor load time for big packages.

## BimlEditor Changes

- Added highlighting of matching delimiters (XML tags, code nuggets, multiline comments, braces, parentheses, etc.)
- Added highlighting of other instances of the currently selected text
- Fixed intelliprompt to work better with code in included files
- Added indentation guides, which are on by default.

## Language and Compiler Changes

- Added SurrogateKey as an option for table column ScdType.
- File group modeling is now available on databases.  Tables and indexes can be assigned to file groups explicitly
- FilterPredicate has been added to AstIndexNode to support filtered indexes
- Added DefaultConstraintName to AstTableColumnBaseNode to support naming the default constraint.  This is especially useful for source controlled DBs
- Added new properties for Package emission (VersionMajor, VersionMinor, VersionBuild, CreatorName, CreatorComputerName, CreatedDate).
- Added support for DataflowOverrides, which provide functionality for changing much of the default options that the compiler sets on output paths and columns.
- Fix to enable Text and NText in FlatFileFormats
- Fixed custom component emitter bug reported in forums.
- Fixed bug with custom log provider emission

## Extension Methods

- Added extension methods to string for XmlEscape and XmlUnescape
- Added GetColumnCompareList and GetColumnAssignmentList methods on table for easier construction of complex sql queries
- New extension methods to get CreateAndDropDdl for relational object types
- New extension methods to get SELECT, INSERT, UPDATE, and DELETE query templates for tables

## Package Importer

- Importer enhanced to use DataflowOverrides
- Added support to importer to disable import of SSIS descriptions as annotations.  These are now on by default.
- Lookup parameterized queries now import only if cache mode != full
