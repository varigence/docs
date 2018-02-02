**New Language Features**

- ODBC
     - ODBC connections are now supported, including modeling the connections and using them to import tables
     -  SSIS 2012 ODBC Source and ODBC Destination are now fully supported with native language tags (no more custom component tags)
	
- Attunity Oracle support
	- Oracle connections are now supported, including modeling the connections and using them to import tables
	- The Attunity Oracle Source and Oracle Destination components are now fully supported with native language tags (no more custom component tags)
	- Just like the Attunity components in BIDS/SSDT, Mist will dynamically check for the presence of the Oracle Data Access Components, and build only if they are present.

- BalancedDataDistributor
        - This is a component that is shipped by Microsoft as a separate download.  It is now fully supported with native language tags

- MultiFile and MultiFlatFile Connections
	- The HasMultipleFiles boolean property has been added to the existing FileConnection and FlatFileConnection nodes.  When present, the FilePath property will automatically accept wildcard syntax

- Extension Methods
	-  An overload of the AstNode.GetTag method was added to support case insensitive searching for tag annotations.
	- The GetBiml() extension method has been improved for use with AllMergedColumns in CloneTables.
	- The following Column and Table properties have been enhanced to provide more accurate results: Column.IsUsedInPrimaryKey, Table.HasIdentity, Table.PreferredKey.

- Miscellaneous
	- A new comment delimiter has been added to the BimlScript language.  Use <#* ... *#>.  This will prevent the enclosed code from being processed in any way.
	- Execute Package task can now specify Parameter Bindings
	- Script project assembly references can now include environment variables

**New UI Functionality**

- Backstage Splash
	- When Mist first opens, it presents a custom screen that is optimized for new and returning users.  Either select from an extensive list of recent files, or choose a new project template.  The more        
           traditional Backstage menu options are just a click away.

	-  Backstage
		- New
			- Beautifully rendered and extensible project template interface
			- Project Templates are now updated via RSS feed, which can be managed by Varigence or by the customer
			- Project Templates are now zip files instead of copied folders.  This enables easier deployment.

		- Open
			- Provides a variety of options for finding projects and files, including extensive history tracking
			- History is easily manageable and common files can be pinned for quick selection

		- Save
			- Files with unsaved changes are listed with options to save, discard changes, or review changes
			- Mist will work with your favorite change differencing tool to see the changes in unsaved files

		- Help
			- Provides a variety of options to get more information about Mist for solving your problems including: Get Started, Tutorials, Community Forums, and Latest News

		- Account
			- One location to get all of the information about your Mist version, plugins, product key, EULA, and more.
		
	- Customizability
		- All of our dynamically updating content is now based off of RSS, with a unified, multi-tier caching RSS Feed Manager.  Advanced users to override the feeds to support custom content for corporate  
                  deployments.

**Improved UI Functionality**

- General
	- Updated almost all Mist icons to be sharper and more Modern-UI friendly.
	- When no items are present in a tree or grid control, the message now identifies the parent by name for clarity
	- When no items are present in a tree or grid control, there is now an add button with a tooltip detailing the ways to add new items
	- Mist now starts in Logical View by default. It will subsequently remember window layout of the last run.
	- Added 32-bit to the title bar when running Mist in 32-bit mode. This parallels the 64-bit label.
	- Made it so that Execute Transformers context menu is hidden on script-generated assets.
	- Visibility of the grid details pane is now collapsed when multiple items in a datagrid are selected.
	- DataGrid row hightlight style is grey instead of blue when the control is not active.  This should clarify which controls have focus.
	- Dotted line around the perimeter of the control when you delete the last item is now removed.
		
- Tree Views
	- When you single-click an already focused tree item, it enters edit mode.
	- Expanding/collapsing a node will now ensure move it to the appropriate place within the scroll window.
	- Focus now remains consistent on expand/collapse.
	- Deleting an item now appropriately focuses the next item.
	- All trees that should be multi-select are now multi-select

- Designers
	- Package Designer
	- Breadcrumb zoom out no longer breaks node sizing
	- The package details area now contains a datagrid for package parameters, with appropriate context menus
	- When dropping a node into a package or container, the node will now always be on top (not placed underneath another node) and the obfuscation border should appear when appropriate
	- Resizing a nested node now triggers scrollbars in the package editor
	- Visual flickering when trying to move large containers and tasks is eliminated
	- Disabled nodes and containers now display a gray, partially opaque overlay.
	- Fixed minor margin and spacing issues with package details controls
	- Fixed issue where sometimes tasks would not appear on design surface until the breadcrumb root is pressed
	- Made resize handle for t-sql editor more easily visible
	- Buttons in the task dashboard in the package editor are now always clickable and always offer the option to create new items.
	- Fixed a Mist crash when setting the aggregate column operation in the aggregate component details editor.

- Table/Dimension/Fact Designers
	- Fixed broken drag/drop scenarios with snowflake columns from dimension columns to attributes.
	- Added multiselect support to all drag/drop operations
	- Whitespace padding has been added to the bottom of the Table Editor tree views to create an unambiguous drop zone for drag/drop operations
	- The focus is now set to the object created when a column is dropped.  This reduces confusion, especially when that item needs to be immediately deleted.

- Script Project Designer
	- Improved the naming of some script project context menu items.
	- Fixed the Add Connection Reference context menu in the Script Component Project Designer to always fire the necessary commands
	- Eliminated an intermittent Mist crashing issue with the script project worker thread.  This could only happen when Mist was already in the final stages of shutdown, but it was a bad experience.

- BimlCode Editor
	- Made it so that we don't list attributes in Biml intellisense that have already been used.
	- Improved autocomplete behavior around delimiters.
	- Added code highlighting for directive and .NET code blocks.
	- The BimlEditor now displays line numbers in the left margin. There's a user setting in the project designer to toggle the line numbers.
	- QuickInfo popup now is closed if you switch focus to a different application
	- A syntax editor's zoom percentage is now displayed in the right side of the status bar, past the line and column information.
	- Fixed a corner case that can produce a crash in QuickInfo tooltip generation.
	- Fixed an intermittent crash when pasting code in the BimlScript editor when clipboard has object data.

- BimlScript/Template Designer
	- Add the ability to cancel the preview.
	- Added a ribbon icon to toggle auto expansion of BimlScript in the Preview Expanded Biml.
	- TargetNode dropdown in template editor is now sorted
	- Fixed an intermittent crash in the BimlScript designer background thread when closing the project.
	- Fixed an issue where intelliprompt for Directives would sometimes offer the auto-complete options for the previous directive.
	
- Package Project Designer
	- Add Project Parameter context menu now works like Add Variable context menu, along with inline type selection.

- Tool Windows
	- Output Window
		- Keyboard can now be used to navigate the Output window.
		- Output window now scrolls as build output is produced (provided that the window is already scrolled to the bottom).
		- Output window now is selectable and has full context menu support.
	- Expressions Window
		- Added a scrollbar to the results pane on the Expression Builder dialog.

- Project View
	- Multi-selection keyboard and mouse interaction significantly improved
	- All Project View tree item properties now have descriptions in property grid.
	- Fixed over-aggressive treeview autoscrolling behavior.
	- Build and Duplicate commands are now multiselect with detailed options in context sub-menus.
	- Mist build actions can now be set via multi-select in property grid.
	- A setting has been provided to make the source control window stay open after using the source control functionality (such as an Update).
	- Root Folder Improvements
		- Added support for labels to Root folders in project view.
		- Renaming root folders is now fully supported.
		- Root Folders are now prevented from being moved into other root folders.
		- Add Existing, Copy/Paste, Include, and Include Descendants of Biml Files will now set BuildAction to Live for standard Biml files and to Reference for BimlScripts

- Logical View
	- Logical View now fully supports multi-select
	- Added Properties context menu item for all object types in LogicalTreeView.
	- Expanded Context Menu items that are active for BimlScript generated connections
	- Script projects can now be duplicated.
	- Logical view is now sorted by ScopedName and/or LogicalName where appropriate. This is particularly useful for tables, dimensions, and facts.
	- Fixed an issue with project view and logical view scrolling so that a drag doesn't get initiated in the middle of a scroll.
	- Fixed rename button in context menu for Biml Files in library.
	- Added 'Build' and 'Build and Open' for PackageProject nodes

****Build Engine****

- Performance
	- Massively improved performance of escape character handling in the literal strings for SSIS expressions.
	- Massive improvement to script project compilation by batching and precompiling all of the scripts used to generate the code behind files.

- BimlScript Processing
	- Fixed issue where negative tiers were not being handled as file references in live processing engine.
	- Tier 0 references to higher tiers now are fully supported during incremental processing.
	- Fixed issue where higher tier BimlScript couldn't see lower tier assets after equal or lower tier assets are changed in live processing engine.
	- When BimlScript or Biml file is changed from Live Mist Action to Reference it is now correctly removed from the in-memory model in the live processing engine.
	- Fixed a minor issue where setting debug=true in BimlScript would always result in a compiler error.
	- Fixed a Mist crash on Project reload when the project file was updated by subversion.

- Code Generation
	- Fixed an issue with VariableValueChanged event handler emission.
	- OLE DB Source component now has the correct description in documentation.
	- Targeted changes to script project binary code emission to prevent extra binary code elements from being created when roundtripping package through SSDT.
	- Packages with Text columns as source and destination now emit correctly (without an unnecessary NText conversion).
	- SSIS data flow path names are now scrubbed for invalid characters in task/component names
	- Attribute ordering on Package node in SSIS has been changed to avoid confusing SSDT when it tries to upgrade a Biml-generated package to SSIS2012.
	- Fixed underscore and other invalid character removal from automatically generated property names in script component code behind.
	- Added methods to correctly quote identifiers for each database SchemaProvider.
	- Updated command line documentation for hadron.exe for the buildOnly option.
	
- Name Management
	- Internal improvements to our NameGeneration framework
	- When editing an asset name in the property grid, the Biml file rename dialog no longer triggers unless the name actually changes value.
	- Improved file copy/paste and duplicate naming to put " - Copy" at the end.

- Validation
	- Added a warning validation for when Attribute Relationship name does not match the name of the child attribute.  This is to keep BIDS/SSDT from issuing a warning.
	- Fixed bug with over-aggressive Aggregate transformation diagnostic.
	- Fixed validator to prevent it from crashing the validation thread when a package or variable name is not set.
	- Added a build-time diagnostic to validate that input buffer column types in script components match the input columns to which they are wired in the dataflow.
	- Prevented sql parse exceptions from killing the validator thread.
	
****Import****

- Package Importer
	- SSIS Importer is now smarter when importing custom properties on custom components that contain lineage IDs
	- PersistFileConnection is now imported correctly for CacheConnections
	- When Importer creates an ImportedProjectConnection, it now sets CreateInProject = true
	- Importer now handles SynchronousInputId correctly for custom components in SSIS 2012
	- OleDbSource parameters are no longer imported when AccessMode doesn't support them, even if they are cached in the dtsx.
	- Importer no longer assumes that referenced project connections are always OLE DB.
	- SSIS script project import no longer assumes that the VSTAProject name does matches the class/csproj name in the script project code.  This arises when developers copy/paste code from other script  
          component instances.
	- Package import is now limited during trial

- Table Importer
	- Primary Keys are no longer imported twice (both as a Primary Key and Index)
	- Imported views now have the CREATE VIEW statement trimmed to match view definition expectations in Biml
	- Computed column attribute is no longer added when there are no Computed values.
	- Clustered indexes are no longer imported as non-clustered indexes.
	- Fixed an issue where multiple table imports could be running concurrently by the background services engine.
	- Made schema importer more resilient to errors loading the sql parser

****Installer****

- Improved support for side-by-side installations with other versions and bitnesses of Mist.
- No longer installing defunct CHM file.  All help is now online.
- Mist installer now advertises MIME type for mist project (mst files).

****Misc****

- Fix for intermittent crashing caused by Logitech gesture mouse.
- Annotation text within a package node is now trimmed to remove leading/trailing whitespace.
- Annotation data grid context will now add a new annotation rather than adding an annotation to the selected annotation.
- Fixed an issue where script component project template code was trying to be version agnostic, but BIDS/SSDT would reject the code pattern on roundtripping.
- New project dialog now focuses project name textbox by default.
- Added Ctrl+Shift+B keyboard shortcut for build.
- Reduced CPU usage of background services when Mist is idle.

