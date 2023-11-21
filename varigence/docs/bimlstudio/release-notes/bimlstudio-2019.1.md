# BimlStudio 2019 R1 Release Notes

Significant changes between BimlStudio 2018 R3 and BimlStudio 2019 R1

## SSIS

* Removed NoXML validation for `SQL Server` index nodes as they can now have XML datatypes.
* Fixed bug where `Annotations` created on `OutputBuffer` columns were not being persisted.
* Fixed bug where `Container` property `TransactionOption` was being evaluated as an object rather than an `int32`.
* Fixed typo in `MergeJoin` error message.
* Added fix to correctly emit `BlobColumns` in `BufferWrapper.cs` for ScriptProjects. 
* Added SqlServer 2019 support. 
* Added SSIS 2019 support. 
* Removed `Codepage` property from FlatFileFormat Columns, as the codepage gets set on the `FlatFileFormat` and is not configurable at the column level.
* Fixed bug in `GetQuerySchema()`, where column nodes were not correctly reading `ComputedText` and `IsNullable` properties.

## BimlStudio Improvements
* Removed the live assets checkbox from the logical view as it was confusing and no longer valuable for modern users of BimlStudio.
* The validator is now suspended during background compilation to improve performance and prevent the temporary appearance of spurious errors.

## Azure Data Factory

* Fixed the way that `TabularTranslator` is emitted in Copy activities.
* Added support for `AzureDataExplorer` linked services, datasets, copy sources and copy sinks. 
* Added support for `SapOpenHub` linked services, datasets, and copy sources. 
* Added support for `REST` linked services, datasets, and copy sources. 
* Added support for `AzureFunction` linked services and activities. 
* Added support for `Delete` activities. 
* Added support for `DynamicsAx` linked services, datasets, and copy sources. 
* Added support for `CosmosDbMongoDb` linked services, datasets, copy sources and copy sinks.
* Added support for `OracleServiceCloud` linked services, datasets, and copy sources. 
* Added support for `Office365` linked services, datasets, and copy sources. 
* Added support for `GoogleAdWords` linked services, datasets, and copy sources. 
* Changed name `AzureDataLakeStore` linked services, datasets, copy sources and copy sinks to `AzureDataLakeStoreGen1`
* Added support for `AzureDataLakeStoreGen2` linked services, datasets, copy sources and copy sinks.
* Fixed typo in the error message of `AzureDataLakeStoreGen1LinkedService` when no `ServicePrincipalKey` or `ServicePrincipalKeyKVS` are set.
* Added `Pipeline` property to the `Trigger` base class. As Some triggers only allow one, rather than a collection of pipelines.
* Added `EventBasedTrigger` support.
* Added `EncryptedCredential` property to all linked services.
* Added support for `SetVariable` activity.
* Added support for `AppendVariable` activity.
* Added ability to emit json with nested arrays.
* Universally renamed `KeyVaultSecret` properties to `KVS` in order to aid with brevity and avoid naming collisions (e.g. `ServicePrincipalKeyKVS` is much more favorable to `ServicePrincipalKeyKeyVaultSecret`
* Added support for `DatabricksJar` activity.
* Added support for `DatabricksPython` activity.
* Placed a 40 activity limit on pipeline nodes.
* Changed `SqlServerLinkedServiceBase` linked service `StoredProcedureName` property to an attribute from a child.
* Changed all AuthenticationType enums to use the suffix AuthenticationType, as some were AuthType and some were AuthenticationMode.
* Changed port property from int to string for `AmazonRedshiftLinkedService` and `SparkLinkedService` nodes.
* Renamed `MachineLearningLinkedService` to `AzureMachineLearningLinkedService`.
* Added a KeyVaultSecret reference to all Connection String linked services to aid with sensitive properties like `Password` or `AccessKey`.
* Added `ModifiedDatetimeStart` and `ModifiedDatetimeEnd` properties to `Amazons3`, `FileShare` and `AzureBlob` Dataset nodes. 
* Added `NewClusterSparkEnvVars`, `NewClusterDriverNodeType`, `NewClusterInitScripts`, `NewClusterEnableElasticDisk` and `NewClusterCustomTags` properties to `AzureDatabricks` Linked Services.
* Added `ScriptActions`, `ZookeeperNodeSize`, `DataNodeSize`, and `HeadNodeSize` properties to `HdInsightOnDemand` Linked Services.
* Added `DependsOn` collection to `TumblingWindow` Triggers.
* Added custom validation to prevent both `SecretAccess` and `SecretAccessKVS` from being configured at the same time for `AmazonS3` Linked Services.
* Added custom validation to ensure that `RedirectRowSettings` are configured when `EnableSkipIncompatibleRow` is configured in Copy Activities.
* In some dataset types, we made the `FolderPath`property optional.
* Changed pipeline parameter datatype enum to match ADF rather than using `Db.Type`.
* Added pipeline `Variables` property, and linked them to the `SetVariable` and `AppendVariable` activities.
* Fixed a bug where nested arrays were not emitting correctly.
* Added support for `Webhook` activities.
* Added support for `Validation` activities.

## Bimlc.exe

* Fixed issue where `bimlc.resp` files were getting generated with the wrong flag syntax for `BuildDocumentation` setting.
* Improved messaging in help message around versioning.

## SSAS Tabular

* Made `DataCategory` into an extensible string field.
* Made `type` property required.

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

