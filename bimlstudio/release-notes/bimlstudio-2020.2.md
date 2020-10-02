# BimlStudio 2020 R2 Release Notes

Significant changes between BimlStudio 2020 R1 and BimlStudio 2020 R2

## SSIS

* Fixed project parameters so that the `Sensitive` attribute is namespaced.
* Added padding stripping to the encrypted value for package connections and package parameters.
* Fixed an issue where sometimes connection managers were incorrectly emitting encrypted property, depending on if it was project or package based.

* ## BimlStudio Improvements

* Fixed image for group icons for Triggers in BimlStudio.
* Fixed an issue where the default 32-bit Bimlc.exe path was being populated incorrectly in the Project Settings pane.

## Azure Data Factory

* Fixed an issue where empty `AdditionalColumn` collections were emitted in the JSON.
* Prevent default value for `MaxConcurrentConnections` property being emitted for sources and sinks.
* Fixed to ensure that `PolyBaseSettings` output matches assets generated in ADF.
* Added new `CopyCommand` functionality to `AzureSqlDataWarehouseSinkNodes`.
* Added `Avro` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`.
* Added `Binary` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`.
* Added `Delimited Text` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`.
* Added `JSON` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`.
* Added `Orc` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`.
* Added `Parquet` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`.
* Added support for `Snowflake` linked services, datasets, and copy sources.
* Added support for `GoogleCloudStorage` linked services, datasets, and copy sources.
* Added support for `AzureFileStorage` linked services, datasets, and copy sources.
* Added support for `SharePointOnlineList` linked services, datasets, and copy sources.
* Added support for `AzureMlService` linked services.
* Fixed an issue where DatasetSchema would not emit as an empty collection, despite being required by ADF.
* Changed `Type` property in `DatasetSchemaElement` to `DataType` for uniformity purposes.
* Added DatasetSchema functionality to all datasets.
* Changed connection string emission in linked services to avoid using `SecureString` pattern and instead depend on Azure to parse the sensitive properties.

## Tabular

* Fixed `DataCategory` emission in SSAS Tabular emitter that was causing a compiler crash.

## BimlFlex Projects

* Fixed an issue where sometimes Azure blob linked services were generated with empty runtime names, causing BimlStudio to error out.
* Added `Landing Area` as a BimlFlex Integration Stage.
* Fixed an issue where a source file has candidate object type set to Satellite and does not have a connection to a Hub candidate then duplicate validation errors were being reported.