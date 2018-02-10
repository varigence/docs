#### Mist User Guide
##### New Features in 3.0

Mist 3.0 is a major update, which includes the following new features and enhancements:

* **Support for SQL Server 2012 SSIS**
* Import packages into Mist and Biml
* SSIS Project Deployment Model
* Emmit SSIS Packages
* **MSBuild Integration & Build Configurations**<br>
Mist now uses a MSBuild-based build system, enabling complete control over builds from the command line and within Mist.
* Additionally, Mist 3.0 introduces build configurations, which let you customize builds by:
	* Controlling whether built Biml files are treated as source or metadata.
	* Assigning pre and post build events.
	* Building other configurations before and after the build, thus enabling chaining.
* Build configurations can be created using Mist's new designer or by authoring them in Mist's XML editor. Learn more about build configurations [here]("http://www.varigence.com/documentation/mist/240_ConfigurationFilesGuide.html").
* **Import Tables**
* Import Foreign Key Options
	* Reference Columns with Create and Check Constraint
	* Reference Columns with Create and No Check Constraint
	* Reference Columns with Do Not Create Constraint
	* Regular Columns
* Import Views Options
	* Import views as views
	* Import views as tables
* Bug Fixes
* **Import Packages**
	* Added 2012 Package Support
	* Bug Fixes
* **Biml Language**
	* Table Columns - Added Audit Enum to SCD Type
* **All New Project View**
	* Enhanced Source Control Integration
	* Folder add, edit and delete
	* View unsaved items
	* Discard Unsaved Changes by each biml file
	* Added Mist actions for live and referenced files
	* Added Build Options previously only in logical view
	* Add root folders to projects for code and metadata reuse
	* Added the following items to the context menu:
		* Open
		* View in BimlScript Designer
		* Execute BimlScript
		* Mist Action
		* Discard Unsaved Changes
		* Build Asset
		* Build Asset & Run
		* Build Asset & Open in BIDS
		* Include Descendents in Project
		* Open in Windows Explorer
		* Delete
		* Lock
		* Remove Missing Items
		* Persist Path As
* **Ribbon**
* Added Import Tab
* Added Build & Deploy Tab
* **Improved Build Performance**<br>
Build times are 10-20% ?faster than previous releases.
* **Subscriptions**<br>
In addition to purchasing Mist, you can now subscribe to Mist at a low monthly rate. See your options at the [Varigence store]("https://varigence.com/store/").
* **Other**
	* Enhanced Find and Replace
	* Side-by-Side Install
	* Bug Fixes
