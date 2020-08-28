# BimlStudio 2018.1 Release Notes

Significant changes between BimlStudio 2017 and BimlStudio 2018

## Azure Data Factory Support

Added support for all ADF version 2 items and is current as of 06/20/2018. This includes the ability to:

* Create all new V2 Linked Services
* Create all new V2 DataSets, Sources, and Sinks
* Create all new V2 Pipelines and Activities including control flow
* Create all new V2 Triggers


## BimlScript PreCompiled Assembly Package (BSPCAP) Files

* Added option to Build & Deploy ribbon to create new BimlScript PreCompiled Assembly Package (BSPCAP) files, which include the preprocessed binary assets for all of the BimlScript files in your project. This will avoid a significant amount of processing time in solutions with large codebases, both in interactive designer mode and for command line builds.
* Added support for BSPCAP files within Biml Bundles, where they achieve even greater performance savings.
* Added support to add BSPCAP files through all BimlStudio menus and via the command line as a source file. 


## BimlStudio UI Updates

* Improved styling in the Package Import dialog, by widening the file path textbox, adjusting the height of the file path textbox, and making the buttons uniform. Also eliminated unnecessary columns in the DTSX file path grid.
* Improved styling for Project Settings editor, by widening the buttons and increasing the height. Also applied the styling to be consistent with the rest of BimlStudio.
* Fixed button width on trial key dialog.
* Changed all BimlStudio "2017" references to "2018".
* In Package Import dialog, we now provide users the option to create an SSIS Import Options Json file, in order to save your SSIS import options for use with command line imports.
* Added support for guaranteeing that a Biml file's expansion result hasn't changed since the previous expansion, which can improve performance.
* Revamped the Debug utility in BimlFlex projects, now users are able to extract their metadata, while also zipping up their project directory, for aid in debugging through Varigence support.
* Changed "recent path" saving to help with more consistent saving of recent paths.
*	Fixed issue with a few dropdown boxes that did not expand on a click of the main area.
* Enable users to specify the SSDT path that they wish to use when opening their packages in SSDT.
* Added Editor tools for newly supported SSIS features.

## SSIS

* Added support for SSIS 2017.
* Updated to support and build Script Components for SSIS 2017.
* Added a checkbox to Import Packages dialog box to allow users to hide package creation metadata in the imported package.
* Changed `AutoAdjustBufferSize` to `autoAdjustBufferSize` during SSIS 2016 emission.
* Fixed ISPac File emission to work correctly.
* Fixed bug where sensitive parameters were not getting saved to the Params file.
* Fixed bug where sensitive parameters were not getting encrypted for OleDbConnections.
* Fixed issue of missing default values that broke SSIS emission for some components such as CDC Splitter, which would fail to load in SSIS when some default values were supplied.
* In imported packages, the tasks are ordered in a more logical and readable fashion that matches what the user would see in SSDT.
* In imported packages, the contents of Data Flow tasks are organized in a more logical and readable fashion, one that follows the flow of information through the pipeline.
* Exposed VersionGUID property on packages, so that user can specify a GUID, if it is not specified, then it is randomly generated as before.
* Added support for `Azure Blob Source` and `Azure Blob Destination` components.
* Added support for `Azure Data Lake Store Source` and `Azure Data Lake Store Destination` components.
* Added support for `HDFS File Source` and `HDFS File Destination` components.
* Added support for `Theobald Xtract Sap Source` components, for extracting data from SAP.
* Added support for `Azure Blob Download` tasks.
* Added support for `Azure Blob Upload` tasks.
* Added support for `Azure Data Lake Store File System` tasks.
* Added support for `Azure HDInsight Create Cluster` tasks.
* Added support for `Azure HDInsight Delete Cluster` tasks.
* Added support for `HDInsight Hive` tasks.
* Added support for `HDInsight Pig` tasks.
* Added support for `Hadoop Hive ` tasks.
* Added support for `Hadoop Pig` tasks.
* Added support for `Hadoop File System` tasks.
* Added support for `Azure Data Lake Store` connection managers.
* Added support for `Azure Storage` connection managers.
* Added support for `Hadoop` connection managers.
* Added support for `Azure HDinsight` connection managers.
* Added support for `Theobald Xtract Sap` connection managers, for extracting data from SAP.

## BimlStudio Bugs

* Fixed issue with extra `xmlns` declarations when expanding BimlScript files in BimlStudio.
* Fixed possible exception in drag and drop in BimlStudio.
* Fixed the uninstall survey link in the bootstrapper to point to the correct address (www.varigence.com).
* Fixed issue where BimlStudio’s "Format Document" functionality disrupted Annotation Tags with variable values.
* Fix for Null Reference Exception in `BimlTemplateLoader`.
* Fix for Biml files being parsed while unloaded for editing.
* Fixed issue where changes to the MsBuild paths, BimlEngine paths, and DiffViewer settings were not being tracked by BimlStudio.
* Fixed issue with new BimlFlex projects where 32 bit versions of BimlStudio were not finding the 64 bit BimlFlex.xlsx (for use with 64 bit Excel).

## Source Control

* Fixed bug where folders under source control were displaying as "checked-in", even when they contained files with pending changes.
* In the History tab, the number of changes was always being displayed as 1, now it accurately displays the correct number of changes that were pushed in a commit.
* More descriptive label for renames that displays the changed portion of the file path.
* Disabled the UI when committing to source control, in order to prevent undesired behavior.
* When launching the file comparison tool in the History tab, the commit history list box is now disabled, as changing your selection while the tool launched produced unpredictable results.
* In Project view context menus, disabled "Revert" command for newly added files.
* When launching the file comparison tool in the History tab, it is now done asynchronously, as we sometimes need to get information from a remote server, which caused the UI to lock.
* Fixed bug where new projects without a template were not being tracked as eligible for source control.
* For Svn, previously, in order to see the historical file contents, a version of the file had to still exist locally, now if the file has been completely deleted or renamed, we are still able to retrieve its contents from the server.
* For Git, fixed bug where commits were getting added to both "Outgoing" and "History", causing duplicates in the History tab.
* For Git, fixed bug that was preventing file comparisons.
* For Git, fixed bug where the push/sync commands would still fire after a failed fetch command.
* For TFS, Fixed bug where BimlStudio was not recognizing TFS projects that had a space in the file path.
* For TFS, improved error logging to help with diagnosis of issues.

## Tabular Support

* In `AstTabularRelationshipNode`, added a `SourceColumn` property with a schema binding of `TabularColumnName`.
* In `AstTabularRelationshipNode`, `TargetColumn` property now has a schema binding of `TargetTabularColumnName`.
* In `AstTabularModelNode`, `OutputModelLabel` property is changed to `OutputLabel`. Also added a `Relationships` property composed of a collection of `AstTabularRelationshipNodes`.
* Added ability to specify tabular column relationships at the model level, in addition to within the `AnalysisMetadata` section of a table.
* Now displays the correct names of the various assets in Tabular relationships and perspectives.
* Added documentation to the following Tabular enumerations: `InferRelationshipMode`, `TabularModelPermission`, `TabularRelationshipCardinality`, `TabularRelationshipFilterDirection`.
* Changed friendly type name from `TabularTableColumn` to `TabularColumn`
* Now setting correct values for `DeploymentServerDatabase` and `DeploymentServerCubeName` in the `smproj` file in all instances
* Now setting the name for roles correctly in all instances
* Fixed issue where underscores in asset names would not be displayed in the `CubeProject` and `PackageProject` designers
* Added descriptions to emitted SSAS Tabular roles based on Biml principal annotations
* Added DisplayFolder property to SSAS Tabular Table Columns

## Performance

* Fixed issue where an ICE would be generated on builds with warnings in some cases.
* Added the `tempPath` setting to the Biml compiler. This setting specifies the temporary path that will be used for intermediate assets during the build process.
* Removed memory leak due to repeated `xslt` transforms.
* Now auto-generating BimlC Response file on every build and placing it in the project directory.
* Reduced memory and eliminated Out Of Memory exceptions when creating ISPAC files for large SSIS projects.

## Provider Support

* Fixed data type mappings for Excel `GetDatabaseSchema()`.
* Added logging to `GetQuerySchema()` method.
* Added compression to SQL Server `GetDatabaseSchema()`.
* Change the DB2 provider to reference `SYSIBM` system tables instead of the `SYSCAT` views, as they are sometimes missing.
* Fixed Excel support in OLEDB connections in Biml.
* Fixed date datatype mapping in ACE OLEDB provider.
* Added custom type mappings to `ExternalDataAccess.GetQuerySchema()`.
* Fixed OleDb source and destination for `geography`, `geometry`, `hierarchyid`, and `image` data types.
* Fixed data type mappings in Flat File Source around `NTEXT` versus `nvarchar`.
* Fixed data type mappings in CDC Source.
* Fixed issue where ACE OLEDB provider was not being used when the connection string called for it.
* Fixed bug where setting “0” for `MaxInsertCommitSize` in OleDbDestination’s was defaulting to the default value. 

## Biml Language

* Added ColumnStore and ColumnStoreArchive to `TableCompressionType` enumeration.
* Fixed spelling errors in Biml documentation for `ProcessionOrder.Sequential`, `ProcessingOrder.Parallel`, and `ContainerConstraintMode.LinearOnSuccess`.
* Added correct schema binding for `TextQualifier` to fix the misspelling in the Biml language.
* Implemented `ICollection` interface for `TierFilteredVulcanCollection` to fix issue with Preview when using extension methods from `codefile`.
* Eliminated unnecessary and potentially buggy code for finding schema names of items based on being referenced rather than definitions, resulting in items unexpectedly emitting as `<AstNode>` in XML.
* Fixed Xml emitter for singleton references in Biml with multiple schema bindings, for example, in `AstLookupNodes`, all connection references were emitted as `OleDbConnectionName`, and now they are accurately emitted as either `OleDbConnectionName`, `CacheConnectionName`, or `CustomSSISConnectionName`.
* Improved Json emission.
* Fixed `EncryptSensitiveWithUserKey` emission issue.
* Fixed Issue where annotations on certain elements were being duplicated in the object model.

## Bundles

* Fixes for bundle toggle files settings and trial licensing
* Changed the name of `Visibility` bundle property to `File Entry Visibility` in order to avoid name conflict warning.
* Fixed issue where bundle settings overrides to toggled-off files would not always work.
* Added fix to clear bundle file cache when removing a bundle.
* Performance improvements for bundles to prevent recompilation of files that are guaranteed to not have changed.
* Fixed an issue with extension points that take dynamic objects using the wrong assembly version of those dynamic objects.
* Removed message about script components from the Setup Dialog.
* Small fix to clear bundle file cache when removing a bundle.

## Project Settings and Command Line Options (CL)

* Updated license key specification on command line to use the entered license key, even if it is not successfully saved to the registry. This will help in CL and automation scenarios where proxy accounts are used
* Ability to create `Bimlc` response files for command line compiling
* Added DDL Build mode options to project settings and CL options for selecting the type of DDL script emission to do for relational objects in the project
* Added an option in the Project Settings panel to create a `Bimlc` response file for use with `bimlc.exe`
* Set `IsCleanOutputFolderEnabled` to true by default for new projects
* Fix for bundle settings files not loading correctly when overridden on the command line
* Added `DdlBuildMode` property to Build Settings
* Fixed Bundle Settings on command line and MSBuild
* Fixed issue where documentation templates passed via the command line were not being used in the build process
* Fixed issue where 64 bit BimlStudio was not finding existing 32 bit BimlEngine dll, and vice versa

## BimlScript

* Fixed autocomplete bug with BimlScript `global/applytocallbimlscript` directive attribute, `active` was showing up twice in the autocompletion list, and `applytocallbimlscript` was not showing up at all
* Added caching timestamps so that extension points and CallBimlScripts that use dynamic objects can still be cached when neither the extension point nor the dynamic object schema has changed
* Fixed bug where passing in the parent item as null in a BimlScript object constructor was generating the wrong XML
* Added `Varigence.Biml.Flex` to the list of default namespaces for BimlScript code
* Fix to make global include files work with reference Biml files
* Updates to BimlDoc templates to have them align with what is used in the emitter defaults
* Small fix for intellisense in extension languages

## Miscellaneous

* Added PDF version of the EULA
