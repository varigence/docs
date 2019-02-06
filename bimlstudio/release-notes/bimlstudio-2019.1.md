# BimlStudio 2019 R1 Release Notes

Significant changes between BimlStudio 2018 R3 and BimlStudio 2019 R1

## SSIS
* Removed NoXML validation for `SQL Server` index nodes as they can now have XML datatypes.
* Fixed bug where `Annotations` created on `OutputBuffer` columns were not being persisted.
* Fixed bug where `Container` property `TransactionOption` was being evaluated as an object rather than an `int32`.

## Azure Data Factory
* Fixed the way that `TabularTranslator` is emitted in Copy activities. 
* Added support for `DynamicsAx` linked services, datasets, copy sources and copy sinks. 
* Added support for `CosmosDbMongoDb` linked services, datasets, copy sources and copy sinks. 
* Changed name `AzureDataLakeStore` linked services, datasets, copy sources and copy sinks to `AzureDataLakeStoreGen1`
* Added support for `AzureDataLakeStoreGen2` linked services, datasets, copy sources and copy sinks. 
* Fixed typo in the error message of `AzureDataLakeStoreGen1LinkedService` when no `ServicePrincipalKey` or `Service Principal Key Key Vault Secret` are set.
* Added `pipeline` property to the `Trigger` base class. As Some triggers only allow one, rather than a collection of pipelines.
* Added `EventBasedTrigger` support.
* Added `EncryptedCredential` property to all linked services.
* Added support for `SetVariable` activity.
* Added support for `AppendVariable` activity.
* Added ability to emit json with nested arrays.
* Universally renamed `KeyVaultSecret` properties to `KVS` in order to aid with brevity and avoid naming collisions (e.g. `ServicePrincipalKeyKVS` is much more favorable to `ServicePrincipalKeyKeyVaultSecret`
* Added support for `DatabricksJar` activity.
* Added support for `DatabricksPython` activity.
* Added support for `OracleServiceCloud` linked services, datasets, copy sources and copy sinks. 
* Added support for `Office365` linked services, datasets, copy sources and copy sinks. 
* Added support for `GoogleAdWords` linked services, datasets, copy sources and copy sinks. 
* Placed a 40 activity limit on pipeline nodes.

## Bimlc.exe
* Fixed issue where bimlc.resp files were getting generated with the wrong flag syntax for `BuildDocumentation` setting.
* Improved messaging in help message around versioning. 

## SSAS Tabular
* Made `DataCategory` into an extensible string field.

## BimlFlex Projects
* Added "Extract DACPAC Folder" button to the Debug Utility. This allows the user to get the Dacpac folder from the bundle and save it where they please.
