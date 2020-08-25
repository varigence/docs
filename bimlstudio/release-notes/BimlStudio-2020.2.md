# BimlStudio 2020 R2 Release Notes

Significant changes between BimlStudio 2020 R1 and BimlStudio 2020 R2

## SSIS
 * Fixed project parameters so that the `Sensitive` attribute is namespaced.
 * Added padding stripping to the encrypted value for package connections and package parameters
 * Fixed issue where sometimes connection managers were incorrectly emitting encrypted property, depending on if it was project or package based.

## BimlStudio Improvements
 * Fixed image for group icons for Triggers in BimlStudio
 
## Azure Data Factory
 * Fixed issue where empty `AdditionalColumn` collections were emitted in the json.
 * Prevent default value for `MaxConcurrentConnections` property being emitted for sources and sinks.
 * Fix to ensure that `PolyBaseSettings` output matches assets generated in ADF.
 * Added new `CopyCommand` functionality to `AzureSqlDataWarehouseSinkNodes`.
 * Added `Avro` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`
 * Added `Binary` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`
 * Added `Delimited Text` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`
 * Added `Json` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`
 * Added `Orc` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`
 * Added `Parquet` format to the following ADF source and sink nodes: `AmazonS3`, `AzureBlobStorage`, `AzureDataLakeStorageGen1`, `AzureDataLakeStorageGen2`, `AzureFileStorage`, `FileSystem`, `FTP`, `GoogleCloudStorage`, `HDFS`, `HTTP`, and `SFTP`
 * Added support for `Snowflake` linked services, datasets, and copy sources.
 * Added support for `GoogleCloudStorage` linked services, datasets, and copy sources.
 * Added support for `AzureFileStorage` linked services, datasets, and copy sources.
 * Added support for `SharePointOnlineList` linked services, datasets, and copy sources.
 * Added support for `AzureMlService` linked services.
 * Fix to issue where DatasetSchema would not emit an empty collection, despite being required by ADF.
 * Changed `Type` property in `DatasetSchemaElement` to `DataType` for uniformity purposes.
 * Added DatasetSchema functionality to all datasets.
 
## Command Line Builds

## Project Settings

## BimlFlex Projects

## Installer

-----
