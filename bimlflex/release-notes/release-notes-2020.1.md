---
uid: bimlflex-release-notes-2020-r1
name: BimlFlex Release Notes 2020
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up before upgrading.  
> Please email support@bimlflex.com with any installation or upgrade issues.

## BimlFlex 2020

BimlFlex 2020 is installed and upgraded through a single consolidated installer.

## Latest Release

Build 5.0.64678.0, release date: 1 June 2020

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe)  
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe)  
    This installer includes the required runtime components for servers that will execute SSIS packages

<!-- TODO: await next release R2

## Build 20.2.nnn.0, release date: nn mmmm 2020

* Add: New Project settings for SSDT Project Control
* Add: ADF Flat File load support. More information on the ADF Flat File load process: [Flat File Source to Staging](xref:flat-file-source-to-staging)
* Update: A scenario where an SSIS load to Synapse blob storage staging file archive process would use the archive SAS Token to connect to the staging account has been addressed.
* Update: TODO: Add note on Delete detection change on tuples to named classes for customers who use existing bespoke scripts and biml scripts
* Update: Added additional delete detection functionality
  Read More on the updated delete functionality here: [TO DO](xref:TODO: Add link)
* Update: A scenario where the Data Vault Point In Time object creation would not allowed the object to be saved unless there were attribute datetime columns present has been addressed.
* Update: The layout in the Accelerator page has been updated and the source pane is now closed by default. Click the open arrow to open the source pane to view the active source objects.
* Update: The Accelerator and Data Vault process has several new optional configurations to better control Data Vault behavior.
  Read More on the updated delete functionality here: [TO DO](xref:TODO: Add link)
  This includes settings to control if individual source keys should be added to the Hubs and Links as attributes, if Link Satellites should use record source naming convention by default, if Link Satellite keys should e

The Following settings have been added to control the Data Vault Accelerator:

* TODO: ADD


The following settings have been added to the Ssdt group:

* SsdtIncludeExternalTables
* SsdtIncludeMasterKey
* SsdtIncludeCredential
* SsdtIncludeExternalDataSource
* SsdtIncludeExternalFileFormat
* SsdtOverwriteExternalTableDefaults
* SsdtDefaultMasterKey
* SsdtDefaultCredential
* SsdtDefaultExternalDataSource
* SsdtDefaultExternalFileFormat

The Existing Setting `SsdtOutputPath` has been moved to the Ssdt settings group

More information on these settings: [BimlFlex-generated SQL Server Data Tools Project](xref:bimlflex-ssdt-project)

Note that in the BimlFlex 2019 release the External Tables were always included, sometimes leading to issues with lacking Visual Studio support. Earlier BimlFlex 2020 releases removed these SSDT artifacts and applied creation of external tables as part of the load packages. This release adds control to the creation and additional defaults for dependency objects.

download links to this build:

* [bimlflexdevsetup_20.2.nnn.0.exe](https://varigence.com/downloads/bimlflexdevsetup_20.2.nnn.0.exe)
* [bimlflexruntimesetup_20.2.nnn.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_20.2.nnn.0.exe)

-->

## BimlFlex 2020 Feature Highlights

* Expanded support for Azure Data Factory
* Data Mappings visualizations and editor for BimlFlex App
* BimlCatalog Operational Reporting in BimlFlex App
* Restructure BimlCatalog for more agnostic logging
* Additional Extension Points for bespoke processing requirements
* Additional automation script creation for build and deployment
* Support for Microsoft Dynamics CRM as source in Azure Data Factory projects

### Expanded support for Azure Data Factory

BimlFlex now has full support for Azure Data Factory (ADF) workflows for Azure Synapse, Azure SQL DB and Snowflake target data warehouses.

This includes full support to build Azure ARM templates for direct deployment of the pipelines to Azure as well as json file generation for individual deployments and deployment through the ADF DevOps git integration.

More information on ADF here: [ADF Deployment Overview](xref:adf-deployment-overview)

### Data Mappings visualizations and editor for BimlFlex App

The BimlFlex App now supports Source to target data mapping visualizations and direct metadata manipulation. This allows easy visualization of the source to target mappings on a column level.

More information on the BimlFlex app here: [Metadata Editors Overview](xref:metadata-editors-overview)

### BimlCatalog Operational Reporting in BimlFlex App

The BimlFlex app has been updated with BimlCatalog Operational Reporting capabilities.

These reports allow direct access to the logging in the BimlCatalog from the app and help with both development and operational insights

More information on operational reporting here: [BimlFlex Operational Reports](xref:bimlflex-operational-reports)

### Restructure BimlCatalog for more agnostic logging

The BimlCatalog schema has been updated with agnostic table names.

Reporting views and Stored Procedures are unchanged.

ADF Stored Procedures have been updated to better support logging and orchestration.

More information on the BimlCatalog here: [BimlCatalog database](xref:bimlflex-setup-bimlcatalog-database-installation)

### Additional Extension Points for bespoke processing requirements

Several new Extension Points have been added to BimlFlex.

Many are targeting SQL Script processing, allowing better flexibility for cloud implementations and ADF workflows.

### Additional support script creation for build and deployment

BimlStudio now creates additional build and deploy scripts for easy automation.

When building a project, the output folder now contains the following two new folders with the new artifacts:

* `Build`  
    Automated build scripts and settings.  
    Separate build script for SSDT projects for scenarios like SSIS where there is a dependency on tables before build
* `Deploy`  
    PowerShell scripts for building SSDT Projects and deploying SSDT and SSIS Projects

### Support for Microsoft Dynamics CRM as source in Azure Data Factory projects

New Feature: BimlFlex support for cloud and On-Premises Microsoft Dynamics CR sources for Azure Data Factory projects.

This allows direct metadata import from Dynamics CRM into the BimlFlex metadata through the Metadata Import function in the BimlFlex App. Modeling and metadata management is performed as needed and the pipelines to load the data from the source is part of the created Azure Data Factory pipeline

### Changes to settings

The settings have been updated. New settings are available, some settings have been changed, renamed or reorganized.

> [!WARNING]
> Breaking Changes  
> For scenarios where a changed setting is used in Extension Points or referenced elsewhere (such as in an SSIS Catalog environment project parameter) the corresponding syntax change needs to be made to match the new names

#### New Settings

| Setting                 | Description |
| -------                 | ----------- |
| AzCopyLogLevel          | The log level for AzCopy v.10 logs. Available log levels are: NONE, DEBUG, INFO, WARNING, ERROR, PANIC, and FATAL |
| AzureArchiveContainer   | The Container Name to use for the archive process. This should be indicative of the purpose of the contents, such as "archive" |
| AzureArchiveAccountKey  | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureArchiveAccountName | The Azure Blob Storage Account Name to use for archiving data as files in blob storage. This is the default archive destination for the staging to archive file move process for BimlFlex solutions using Azure Synapse as destination. The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureArchiveSasToken    | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureStageContainer     | The Container Name to use for the staging process. This should be indicative of the purpose of the contents, such as "staging" |
| AzureStageAccountKey    | A Storage access key to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureStageAccountName   | The Azure Blob Storage Account Name to use for staging data as files in blob storage. This is the default destination for the source to staging file upload process for BimlFlex solutions using Azure Synapse as destination. The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureStageSasToken      | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureFunctionBridgeKey  | The default Azure Function Bridge Key to use |
| AzureFunctionBridgeName | The default Azure Function Bridge Name to use |
| AzurePolybaseSettings   | The default Azure PolyBase settings to use |
| AzureResourceGroup      | The default Azure Resource Group name to use |
| AzureErrorContainer     | The Container Name to use for the Error process. This should be indicative of the purpose of the contents, such as "error" |
| AzureErrorAccountKey    | A Storage access key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureErrorAccountName   | The Azure Blob Storage Account Name to use for error files in blob storage. This is the default Error location for BimlFlex solutions using Azure Synapse as destination. The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade |
| AzureErrorSasToken      | A Storage access SAS Token to use when accessing the Blob storage. Use a separate development environment and manage production keys outside the BimlFlex metadata |
| AzureSubscriptionId     | The default Azure SubscriptionId to use |
| DvSingleChangeSatellite | Satellite loaded with single change |
| SsisDb                  | The SSISDB database name to use |
| SsisFolder              | The SSIS Catalog folder name to use for generated Script files |
| SsisServer              | The SSIS Server name to use for generated Script files |
| DeleteDetectionApplyPsa | Use default process to insert detected deletes into the Persistent table. This can be overridden by the "DeleteDetectionApplyPsa" Extension Point. Use this together with the "DeleteDetectionEnabled" Setting |
| DeleteDetectionApplyDv | Use default process to insert detected deletes into the Data Vault Satellite tables. This can be overridden by the "DeleteDetectionApplyDv" Extension Point. Use this together with the "DeleteDetectionEnabled" Setting |
| PsaDeltaDetectionSql    | Should the delta detection for PSA load use SQL |
| PsaDeltaLateArriving    | Does the PSA load include late arriving deltas |
| PsaDeltaSingleChange    | Set this to "Y" if loading into PSA and the Delta only has single changes to each key. This will provide optimized ELT loads |
| PsaDeltaStageAllRows    | Should the Delta process stage all rows or compress row-changes |
| PsaEltDeltaIsDerived    | Set this to "Y" if loading into PSA and the Delta has already been derived in the file. This will provide optimized ELT loads |
| StageBypassPsaChecks    | Set to "Y" to bypass all Persistent Lookup and Checks and apply all records to Staging and Persistent Staging tables. |

#### Changed settings

| Old Key Name                   | New Key Name            |
| ------------                   | ------------            |
| AzureDestStorageAccountName    | AzureStageAccountName   |
| AzureDestStorageAccountKey     | AzureStageAccountKey    |
| AzureDestStorageSasToken       | AzureStageSasToken      |
| AzureDestContainerName         | AzureStageContainer     |
| AzureSourceStorageAccountName  | AzureErrorAccountName   |
| AzureSourceStorageAccountKey   | AzureErrorAccountKey    |
| AzureSourceStorageSasToken     | AzureErrorSasToken      |
| AzureSourceContainerName       | AzureErrorContainer     |
| AzureArchiveStorageAccountName | AzureArchiveAccountName |
| AzureArchiveStorageAccountKey  | AzureArchiveAccountKey  |
| AzureArchiveStorageSasToken    | AzureArchiveSasToken    |
| AzureArchiveContainerName      | AzureArchiveContainer   |

#### Changed defaults

| Setting        | Old Value | New Value |
| -------        | --------- | --------- |
| DvAppendBridge | BRD       | BRG       |

#### New Metadata Importer Settings

New Settings for metadata importer behavior control. The Metadata importer default settings are now controllable through Metadata Settings. This allows for metadata driven defaults for importer behavior. The new settings are listed below and correspond to the existing User Interface options.

| Setting                          | Description |
| -------                          | ----------- |
| ApplyNamingConvention            | Naming convention to use for objects and columns.  Case sensitive options are `None`, `PascalCase`, `camelCase`, `Proper_Case`, `Proper Case`, `UPPER_CASE` and `lower_case`. |
| InferIntegrationKeyFrom          | Where to infer the Integration Key from.  Case sensitive options are `None`, `PrimaryKey`, `UniqueKey`, `FirstColumn`, `IdentityColumn` and `ColumnName::[NameOfColumn]`.  When specifying `ColumnName`, a name needs to be added in the Import Metadata screen or specify `ColumnName::UID` to auto populate the column name field with `UID` |
| RetainExistingMetadata           | What existing Metadata should be retained when doing an import of existing data.  Should be specified as a comma-separated list and options are `Data Types`, `Column Orders`, `References`, and `All Other`.  I.e. specify `Column Orders, All Other` without the double quotes |
| KeyEndsWith                      | The strings that BimlFlex interprets as key identifiers.  For a source table with a column `ProductCategoryId` that links to a ProductCategory table, BimlFlex will create a Model Reference called `ProductCategory` as name |
| AppendIntegrationKey             | The string to append to Integration Keys |
| PadIntegrationKey                | Number of Characters to pad the Integration Key to |
| AddRecordSourceToIntegrationKey  | Import Metadata will add `@@rs` to Integration Keys if `Y` is specified |
| ChangeReferencesToIntegrationKey | Import Metadata will change References to Integration Keys if `Y` is specified |
| ImportViews                      | Should Views be imported when importing Metadata.  Options are `Y` and `N` |

## Build 5.0.64678.0, release date: 1 June 2020

* Update: Additional management of naming length constraint for source object names to shorten into Azure Data Factory name length limitations
* Update: Updates to included sample metadata

download links to this build:

* [bimlflexdevsetup_5.0.64678.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64661.0.exe)
* [bimlflexruntimesetup_5.0.64678.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64661.0.exe)

## Build 5.0.64661.0, release date: 4 May 2020

* Update: A scenario where the Build and Deploy scripts were not included in the Build output when the output folder was defined using a UNC path (\\\\server\\share\\folder) was addressed

download links to this build:

* [bimlflexdevsetup_5.0.64661.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64661.0.exe)
* [bimlflexruntimesetup_5.0.64661.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64661.0.exe)

## Build 5.0.64660.0, release date: 30 April 2020

* Update: Additional support for SSIS build scenarios for ETL loads to Data Vault

download links to this build:

* [bimlflexdevsetup_5.0.64660.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64660.0.exe)
* [bimlflexruntimesetup_5.0.64660.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64660.0.exe)

## Build 5.0.64659.0, release date: 27 April 2020

2020 Initial Release

* Includes updates identified through the preview phase

download links to this build:

* [bimlflexdevsetup_5.0.64659.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64659.0.exe)
* [bimlflexruntimesetup_5.0.64659.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64659.0.exe)

## Build 5.0.64613.0, release date: 07 April 2020

BimlFlex 2020 Preview

* Add: New Project settings dialog in BimlStudio. This allows easier access to control Build target and method as well as local project configurations.
* Update: The default build versions for new projects have been updated to SQL Server 2017
* Add: Support for SQL Server 2019 SSIS custom components. All custom components are now available in a SQL Server 2019 compatible version.
* Add: Support for COZYROC Excel+ Source component. Ingest data from an Excel source file using this new component. More information in the dedicated Excel source documentation here [BimlFlex COZYROC Excel Plus Source](xref:bimlflex-source-excel-plus)
* Add: Additional support for archiving files in Azure Data Lake Storage (Azure Blob storage with hierarchical namespaces). A new utility app is available to communicate with the blob storage in a supported format while awaiting similar support in AzCopy
* New Extension Points: `DvPreProcessSql`, `DvPostProcessSql` allows injection of SQL logic in the DV load SQL Stored Procedures.
* Update: Some `Generate Scripts` menu options have had their `By Source` suffix removed.

> [!NOTE]
> change in behavior for Settings descriptions
> The descriptions for all settings for all metadata customers will now be updated to the template descriptions on each update. Previously BimlFlex would maintain any custom descriptions. As the descriptions are updated as new features are added they must be maintained to properly reflect the current BimlFlex functionality. This is a change in behavior. If custom descriptions are maintained, please retain them outside the settings table before performing the update.

download links to this build:

* [bimlflexdevsetup_5.0.64613.0.exe](https://varigence.com/downloads/bimlflexdevsetup_5.0.64613.0.exe)
* [bimlflexruntimesetup_5.0.64613.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_5.0.64613.0.exe)
