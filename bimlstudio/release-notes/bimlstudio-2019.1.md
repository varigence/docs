# BimlStudio 2019 R1 Release Notes

Significant changes between BimlStudio 2018 R3 and BimlStudio 2019 R1

## SSIS
* Removed NoXML validation for `SQL Server` index nodes as they can now have XML datatypes.
* Fixed bug where `Annotations` created on `OutputBuffer` columns were not being persisted.
* Fixed bug where `Container` property `TransactionOption` was being evaluated as an object rather than an `int32`.

## Azure Data Factory
* Fixed the way that `tabularTranslator` is emitted in Copy activities. 
* Added support for `DynamicsAx` linked services, datasets, copy sources and copy sinks. 
* Added support for `CosmosDbMongoDb` linked services, datasets, copy sources and copy sinks. 
* Changed name `AzureDataLakeStore` linked services, datasets, copy sources and copy sinks to `AzureDataLakeStoreGen1`
* Added support for `AzureDataLakeStoreGen2` linked services, datasets, copy sources and copy sinks. 
* Fixed typo in the error message of `AzureDataLakeStoreGen1LinkedService` when no `ServicePrincipalKey` or `Service Principal Key Key Vault Secret` are set.
* 


## SSAS


## BimlFlex Projects
* Added "Extract DACPAC Folder" button to the Debug Utility. This allows the user to get the Dacpac folder from the bundle and save it where they please.


## Source Control
