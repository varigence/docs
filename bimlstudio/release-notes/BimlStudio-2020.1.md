# BimlStudio 2019 R1 Release Notes

Significant changes between BimlStudio 2018 R3 and BimlStudio 2019 R1

## SSIS
* Fixed issue in `ScriptComponents` where they were not emitting the right Version number, causing build errors in SSIS.
* Added Direction property to `OLEDB Source` parameters.
* Fixed a typo where the word "will" was displayed as "WILL" in a few object descriptions.
* Improved logging for all components, conectionmanagers and containers.
* Fixed bug where `SsisDataTypeOverride` properties were not being used in column nodes.
* Fixed bug where `ExportColumn Task` columns had an invalid reference id. 
* Fixed casing issue on emission of VersionGUID for SSIS Projects
* Fixed issue where Flat File definitions did not support the use of brace-wrapped shorthand as in the SSDT designer. For example: {CRLF} in place of /r/n
* Fixed bug in `AdoNetConnection`, `AnalysisServices`, `ExcelConnection`, `OdbcConnection`, `OleDbConnection`, `OracleConnection` and `SqlServerPdwConnection` nodes where `RetainSameConnection` property was not being correctly emitted.
* Added support for `Teradata ODBC` provider
* Added root guard to XSD parsing to prevent root_ID column from being added to simple `XML Source` column collections.
* Improved `SMOConnection` support.
* Fixed bug that prevented packages with `CDCSplitter` components from building.


## BimlStudio Improvements
* Fixed bug where Extension file changes are triggering background reprocessing, even when background processing is suspended.
* Removed command properties that were erroneously showing in the property grid.
* Made the "Suspend Background Processing" feature persist across project close and reopen.
* Fix for error when building a subset of the project (multi-select in logical view with right-click build). It incorrectly used the value of IsCleanOutputFolderEnabled for EnableBimlFlex.
* Added an error when the BimlFlex.bimlb default bundle cannot be found.
* Updated all references of 2019 to 2020.
* Changed BimlFlex project creation defaults in BimlStudio
* Fixed issue where renaming Bundle Extensions failed.
* Build now fails on BSPCAP failure.
* Fix to ensure that a lack of BimlFlex feature licensing does not cause BimlStudio to crash
* Improved intellisense emitter to follow redirects in .NET framework documentation files when presenting summary info for external types

## Azure Data Factory
* Added full ARM template emission support when building your Data Factories.
* Added Mapping Dataflow support including all transformations.
* Added support for `SapTable` linked services, datasets, and copy sources.
* Added support for `SalesforceServiceCloud` linked services, datasets, and copy sources.
* Added support for `MicrosoftAccess` linked services, datasets, and copy sources.
* Added support for `Informix` linked services, datasets, and copy sources.
* Added support for `CommonDataServiceForApps` linked services, datasets, and copy sources.
* Added support for `AzureSqlMI` linked services, datasets, and copy sources.
* Corrected name length limit for ADF pipelines to 140 characters
* Fixed typo in description for `ReadBehavior` enumeration.
* Changed the data type enumeration for Stored Procedure parameters from being `System.DbType` to be valid values accepted by ADF.
* Added in the `SsisLogLocation`, `PackageLocation`, `AccessCredential` and `ExecutionCredential` child nodes to the ExecuteSSIS activity
* Added various specialized `PartitionSettings` child nodes to the appropriate Copy Source nodes. Affected nodes are `OracleSource`, `NetezzaSource`, `SapSource`, `TeradataSource`.
* Added generic `PartitionSettings` node to other Copy Source nodes.
* Added support for `AzureDataExplorerCommand` activities.
* Added `ConnectionString` property to `SapHana` linked services.
* Added `Filesystem`, `VirtualNetworkId` and `Subnet` properties to `HdInsight` Linked services.
* Renamed `Schema` to `DatasetSchema` for the `SchemaElement`, as it clashed with the schema property that is used more frequently.
* Fix for bug where `Tenant` property of Gen1 ADLS linked services was erroneously triggering a validation error, even though it was configured.
* Fixed bug where KVS Linked Service references were not emitting correctly in json.
* Fixed typo by renaming ADF assets from `Magneto` to `Magento`.
* Fixed issue where some properties that could be configured either in line or by Key Vault secret were being treated as required, when neither were actually required.
* Added validation to the `ConsumerSecret` property in `QuickBooks` linked services.
* Added support for Integration Runtimes.
* Added support for `ExecuteDataflow` activities.
* Fixed bug where linked service connection strings that had sub properties that were stored in an Azure Key Vault, were still being emitted as secure strings.
* Added `FunctionKeyKVS` property to `AzureFunction` linked services.
* Ensure that Dataset and LinkedService collections do not emit if they are empty, inside of web request payloads.

## Command Line Builds

* Multiple bundle extension targets can be listed and separated by comma or semicolon.
* Fixed issue so that paths specified for both MSBuild and Bimlc will run correctly when they contain spaces.

## Project Settings

* Added “ADF Build Mode” property to specify arm template, json files, or no output when building ADF assets.
* Added Bimlc.exe as a build option.
* Adding separate field to enter extra Bimlc.exe command line options in project settings.
* For new all new projects, 2017 is the default version for SqlServer and SSIS.

## BimlFlex Projects

* Prevent filtering out preview nodes for diagram menu options
* Complete overhaul of Schema Graphs.
* Deprecated the Upgrade utility for upgrading BimlFlex bundles. That functionality is now handled through the installer.

## Installer

* Added the ability to create and validate license keys directly in the installer.
* Improved handling of unavailable features. Users can now force install features that were previously unavailble due to their environment right clicking on the feature and selecting the 'force install' option.
* We now support headless installations, configurable through the command line.
* Added a comprehensive breakdown of product features by screen.
* Added richer logging capabilities to aid in diagnosing any installation issues.
* Added the capability to manage your BimlFlex environment, whether that is upgrading your bunlde, your BimlFlex database, or the BimlCatalog database.

