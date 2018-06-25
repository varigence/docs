# BimlExpress 2018 Release Notes

Significant changes between BimlExpress 2017 and BimlExpress 2018

## New Features

* Added the Import Packages window to enable users to import existing SSIS packages and projects and convert them to Biml.
    The window is prepopulated with settings that are highly configurable to produce the desired results.
* Updates to BimlExpress project and manifest for compatibility
* Updated jquery in BimlExpress
* Ensure that all new Biml files are UTF-8 encoded, rather than ANSI encoded.
* Improved error meszage for unlicensed features in BimlExpress.

## Bug Fixes

* Fixed an issue where exceptions thrown by user BimlScripts might not show up correctly in the BE preview pane
* Fixed issue where Ctrl+S would not save Biml files
* Fixed `No path to BIDS devenv for Ssis2016 was found.` when trying build and open with 2016 target
* Fixed a potential race condition on file saving in BimlExpress
* Fixed an assembly resolution issue that was breaking script projects in BimlExpress OneDesigner scenarios
* Added the `ICollection<T>` interface to `TierFilteredVulcanCollection`. This results in a larger number of extension methods working as expected in Live preview mode in BimlExpress.

## SSIS

* Added a checkbox to Import Packages dialog box to allow users to hide package creation metadata in the imported package.
* Changed `AutoAdjustBufferSize` to `autoAdjustBufferSize` during SSIS 2016 emission.
* Fixed IsPac File emission to work correctly.
* Fixed bug where sensitive parameters were not getting saved to the Params file.
* Fixed bug where sensitive parameters were not getting encrypted for OleDbConnections.
* Added support for SSIS 2017.
* Updated to support and build Script Components for SSIS 2017.
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
