#### Mist User Guide
##### New Features in 3.1

Mist 3.1 begins our move to a steady, and more frequent, update schedule. Mist 3.1's goals include fixing remaining usability issues and implementing targeted features:
* **Connections**
	* Connection string builder dialog added for SQL Server
* **Context Menu and UI Consistency Improvements**
	* Available BimlScript Transformers are now listed in the context menus for every object in Mist. They can be executed for that object directly from the context menu
	* In any context menu where an annotation can be added, we now let the user navigate to any annotations that are already on the item
	* Audit was performed of all context menus in Mist to improve consistency and add features
	* Context menus were added throughout the package designer and package details grids
	* *Context Menu Details*
		* All data grids now support a Copy Selection command via context menu
		* Fixed missing type icons, inability to select group items in the Partition, Aggregation, and Calculation data grids, added context menus in the cube editors and script project data grids
		* The Find Results context menu now has commands for Go to Next Location and Go to Previous Location, which matches Visual Studio
		* Additionally, the error list context menu now has an icon for the copy command
		* The References list, Output control, and Recent document context menus have been updated with commands and icons, where appropriate
		* Improvements to context menu tooltips: word wrapping and limited width, and so separators appear correctly
		* Rename command is now enabled in context menu for table column and package project parameter
		* BimlScript Designer Input Editor's context menu now has undo / redo commands
* **Project and Logical View**
	* In Project View, selecting a file and typing ctrl-c, ctrl-v now copies and pastes the file
	* In Project View, right-click and copy will add the name of the file to the text copy and paste buffer
	* In Project View, Context Menu no longer strips out the first underscore in asset's name
	* In Logical View, "Add Root Folder" is disabled in the logical context menu
* **Project Designer**
	* Textboxes now extend the width of the designer
	* The command line options textbox is now multi-line. It accepts returns and a vertical scroll-bar will appear as needed
* **Biml**
	* Biml files produced during import tables or import packages dialogs are now auto-formatted
	* Biml files and Mist project files are now saved in UTF-8 format
* **BimlScript: Language, Formatting, and Intelliprompt** 
	* Added BimlScript annotation directive, including updates to intelliprompt to support it
	* Fixed autocomplete errors with BimlScript directives where an extra '=' would be added in some cases
	* Fixed some other minor Biml Intellisense issues
	* Added error squiggles to BimlScript code editor
	* Intellisense autocomplete list for tier property is now sorted numerically, not alphabetically
	* Intelliprompt no longer activates when declaring variables and within lambda expressions
	* In BimlScript Library Designer's Input Editor, the context menu's Format Biml command now performs the same operation as the Format Document ribbon button
* **Package Designer**
	* Variable type items in Add Variable context menu are now sorted in ascending order, but with Empty as the first type listed
	* Various consistency fixes based on a full audit of all details panes
	* New ability to move Toolbox items to other groups within the Toolbox - stored in user settings
	* When deleting a package, if the user pressed cancel in the confirmation dialog, we previously cleared aspects of the package UI
	* The SendMail Package Details designer now display working UI for attachments
* **Script Tasks / Components**
	* Undo, ctrl-z now works in the Script Code Editor
	* The Script Source and Transformation Components now include boilerplate code for public override void CreateNewOutputRows() in Main.cs
	* ScriptComponentSource/Transformation/Destination now display ribbon buttons in package designer
	* Source Script Project: Context menus added for Output Buffers
	* Mist no longer crashes when changing the OutputBuffer Name in a biml File
* **Focus / Navigation**
	* An icon now appears to the left of a property grid identifier, indicating the control that contains the property grid's selected item.
	* The property grid title's background now becomes a light pink color if the selected item is not in a designer.
	* Added tooltip text when property grid's selected item has pink background
	* Added pink shading and icon display to the Annotations tool window
* **Infrastructure**
	* Notifications, of changes to files outside of Mist, have been improved for Windows 8 and SVN Revert
	* Exceptions produced on load of plugins are handled better and reported in detail to the user
	* SyntaxEditor context menu items are no longer disabled after a project is built (using the Build ribbon button or Build & Run)
	* Context menus now clear when build is running
	* AstTableNode.GetTableSQL() now works on a lowered AST
	* References to abstract types are no longer broken by built-in lowering transformers
* **Setup**
	* Mist can now be installed side by side with older versions
* **Miscellaneous**
	* Adding a Table View in Mist now adds the view portion to the table