---
uid: bimlflex-metadata-settings
title: Settings
---
# Metadata and framework settings in BimlFlex

This document outlines the metadata and framework settings available in BimlFlex.

These Settings drive the behavior of the BimlFlex product.

By changing settings, the produced artifacts can adapt to specific requirements for file locations, naming conventions, data conventions etc.

The Settings defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors. Align these settings with the organizations best practices and environmental requirements.

The Settings are available in the Settings sheet in the BimlFlex Excel Add-in.

![Settings Sheet -center -50%](images/bimlflex-ss-v5-excel-settings-sheet.png "Settings Sheet")

## Metadata column overview

| Key | Value |
| --- | ----- |
| SettingKey             | the Setting Key, the internal key BimlFlex refers to, cannot be changed |
| SettingValue           | the Configured Value, can be updated to support a different design pattern or behaviour when needed|
| SettingDatatype        | the data type the Setting Value uses. Needs to be a valid data type definition |
| SettingDefault         | the Setting Key’s Default Value|
| SettingDisplayGrouping | BimlFlex Internal Grouping |
| SettingDisplayOrder    | BimlFlex Internal Ordering |
| Description            | An optional description. The default settings are described in this document|
| Is Deleted             | Flag to set if a setting should be considered deleted. Unused Settings should be left as is and not deleted |

## Standard Settings

| SettingKey | SettingValue | SettingDataType | SettingDefault | SettingDisplayGrouping | SettingDisplayOrder | Description | 
| ---------- | ------------ | --------------- | -------------- | ---------------------- | ------------------- | ----------- | 
| AzureDestStorageAccountName |  |  |  | Azure | 1 |  |
| AzureDestStorageAccountKey |  |  |  | Azure | 2 |  |
| AzureDestContainerName |  |  |  | Azure | 3 |  |
| AzureSourceStorageAccountName |  |  |  | Azure | 4 |  |
| AzureSourceStorageAccountKey |  |  |  | Azure | 5 |  |
| AzureSourceContainerName |  |  |  | Azure | 6 |  |
| AzureArchiveStorageAccountName |  |  |  | Azure | 7 |  |
| AzureArchiveStorageAccountKey |  |  |  | Azure | 8 |  |
| AzureArchiveContainerName |  |  |  | Azure | 9 |  |
| AzCopyPath | C:\Program Files (x86)\Microsoft SDKs\Azure\AzCopy |  |  | Azure | 20 |  |
| AzCopyConcurrency | 2 |  |  | Azure | 21 |  |
| AzCopyEnabled | Y |  |  | Azure | 22 |  |
| AzureExternalFileFormat |  |  |  | Azure | 23 |  |
| DmAppendDim | DIM |  |  | DataMart | 1 |  |
| DmAppendExternal | EXT |  |  | DataMart | 2 |  |
| DmAppendFact | FACT |  |  | DataMart | 3 |  |
| DmInferDim | N |  |  | DataMart | 4 |  |
| DisplayDatabaseNameDm | N |  |  | DataMart | 5 |  |
| DisplaySchemaNameDm | N |  |  | DataMart | 6 |  |
| AppendSchemaDm | N |  |  | DataMart | 7 |  |
| DmAppendStaging | STAGE |  |  | DataMart | 8 |  |
| ApplyLookupFilterDm | Y |  |  | DataMart | 9 |  |
| DvAppendBridge | BRD |  |  | DataVault | 1 |  |
| DvAppendHub | HUB |  |  | DataVault | 2 |  |
| DvAppendLink | LNK |  |  | DataVault | 3 |  |
| DvAppendLinkSatellite | LSAT |  |  | DataVault | 4 |  |
| DisplayDatabaseNameRdv | N |  |  | DataVault | 5 |  |
| DisplaySchemaNameRdv | N |  |  | DataVault | 6 |  |
| AppendSchemaRdv | N |  |  | DataVault | 7 |  |
| DvInferLinkHub | N |  |  | DataVault | 8 |  |
| DvUseCacheLookup | N |  |  | DataVault | 11 |  |
| DvPreviewSchema | pdv |  |  | DataVault | 12 |  |
| DvAppendPointInTime | PIT |  |  | DataVault | 13 |  |
| DvDefaultSchema | rdv |  |  | DataVault | 14 |  |
| DvAppendReference | REF |  |  | DataVault | 15 |  |
| DvAppendSatellite | SAT |  |  | DataVault | 16 |  |
| AppendSurrogateKey | SK | DataType="AnsiString" Length="40" |  | DataVault | 18 |  |
| ApplyDataTypeMappingRdv | Y |  |  | DataVault | 19 |  |
| ApplyLookupFilterRdv | Y |  |  | DataVault | 20 |  |
| DvUseSequenceKeys | N | DataType="Int32" |  | DataVault | 21 |  |
| DvUseHubKeyedInstances | N |  |  | DataVault | 22 |  |
| DvAccelerateLinkSatellite | N |  |  | DataVault | 23 |  |
| DvAccelerateLinkEffectiveSatellite | Y |  |  | DataVault | 24 |  |
| ConcatenatorBusinessKey | ~ |  |  | Main | 1 |  |
| 7ZipPath | C:\Program Files\7-Zip |  |  | Main | 4 |  |
| ArchivePath | C:\Varigence\Archive |  |  | Main | 5 |  |
| RootPath | C:\Varigence\BimlFlex |  |  | Main | 10 |  |
| LookupCachePath | C:\Varigence\Cache |  |  | Main | 11 |  |
| ExportPath | C:\Varigence\Export |  |  | Main | 12 |  |
| ImportPath | C:\Varigence\Import |  |  | Main | 13 |  |
| ConfigurationPath | C:\Varigence\Configurations |  |  | Main | 14 |  |
| KeyEndsWith | Id,Code,No,Key |  |  | Main | 15 |  |
| LookupTablePattern | lkp.@@this |  |  | Main | 20 |  |
| HashBusinessKey | N |  |  | Main | 21 |  |
| LookupAddFilterTable | N |  |  | Main | 22 |  |
| BusinessKeyNullValue | NVL |  |  | Main | 23 |  |
| BusinessKeyToUpper | Y |  |  | Main | 24 |  |
| UseSqlCompatibleHash | Y |  |  | Main | 25 |  |
| ArchiveImport | Y |  |  | Main | 30 |  |
| ZipArchiveImport | Y |  |  | Main | 31 |  |
| DeleteImportFile | N |  |  | Main | 32 |  |
| UseBimlCatalog | Y |  |  | Main | 33 |  |
| HashAlgorithm | SHA1 |  |  | Main | 34 |  |
| HashBinary | N |  |  | Main | 35 |  |
| HashLongStrings | Y |  |  | Main | 36 |  |
| ZipOutputFile | Y |  |  | Main | 38 |  |
| AppendBusinessKey | BK | DataType="AnsiString" Length="40" |  | NameConvention | 1 |  |
| StageWithColumnModelOverride | N |  |  | NameConvention | 2 |  |
| StageWithObjectModelOverride | N |  |  | NameConvention | 3 |  |
| UseRecordSourceAsAppend | N |  |  | NameConvention | 4 |  |
| AppendDomain | N |  |  | NameConvention | 5 |  |
| SuffixOrPrefixObject | P |  |  | NameConvention | 6 |  |
| SuffixOrPrefixColumn | S |  |  | NameConvention | 7 |  |
| UseRecordSourceAsSchema | Y |  |  | NameConvention | 8 |  |
| AppendProcedureName | flex_ |  |  | NameConvention | 9 |  |
| EnableRollbackRdv | N |  |  | Orchestration | 1 |  |
| EnableRollbackStg | N |  |  | Orchestration | 2 |  |
| EnableRollbackPsa | N |  |  | Orchestration | 3 |  |
| EnableEndDateRdv | N |  |  | Orchestration | 4 |  |
| SnowflakeConfigFile | %USERPROFILE%\.snowsql\config |  |  | Snowflake | 1 |  |
| SnowflakeConnection | bimlflex_db |  |  | Snowflake | 2 |  |
| SnowSqlPath | C:\Program Files\Snowflake SnowSQL |  |  | Snowflake | 3 |  |
| SsisBufferTempStoragePath |  |  |  | Ssis | 1 |  |
| SsisBLOBTempStoragePath |  |  |  | Ssis | 2 |  |
| SsisCommandTimeout | 0 |  |  | Ssis | 3 |  |
| SsisMaxConcurrentExecutables | -1 |  |  | Ssis | 4 |  |
| SsisEngineThreads | 10 |  |  | Ssis | 5 |  |
| SsisDefaultBufferMaxRows | 10000 |  |  | Ssis | 6 |  |
| SsisDefaultBufferSize | 10485760 |  |  | Ssis | 7 |  |
| SsisMaximumInsertCommitSize | 2147483647 |  |  | Ssis | 8 |  |
| SsisRowsPerBatch | 500000 |  |  | Ssis | 9 |  |
| SsisCheckConstraints | false |  |  | Ssis | 10 |  |
| SsisAutoAdjustBufferSize | true |  |  | Ssis | 11 |  |
| SsisDelayValidation | true |  |  | Ssis | 12 |  |
| SsisValidateExternalMetadata | true |  |  | Ssis | 13 |  |
| ObjectNamePattern |  |  |  | Staging | 1 |  |
| SchemaNamePattern |  |  |  | Staging | 2 |  |
| DisplayDatabaseNameStg | N |  |  | Staging | 3 |  |
| DisplaySchemaNameStg | N |  |  | Staging | 4 |  |
| AppendRecordSource | N |  |  | Staging | 5 |  |
| AppendSchemaStg | N |  |  | Staging | 6 |  |
| AppendSchemaPsa | ods |  |  | Staging | 7 |  |
| ApplyDataTypeMappingStg | Y |  |  | Staging | 8 |  |
| PsaUseCacheLookup | N |  |  | Staging | 9 |  |
| PsaTruncateIfHasRows | N |  |  | Staging | 10 |  |
| PsaMergeAllRows | N |  |  | Staging | 11 |  |
| EnableEndDatePsa | N |  |  | Staging | 12 |  |
| DisableStgPsaOnly | N |  |  | Staging | 15 |  |
| DeleteDetectionEnabled | N |  |  | Staging | 20 |  |
| DeleteObjectNamePattern | @@this_DEL |  |  | Staging | 21 |  |
| DeleteSchemaNamePattern | @@rs |  |  | Staging | 22 |  |

## Detailed Description of all Settings and their vaules

The following lists the settings and their impact on the behaviour of the solution

## Azure

Azure specific settings

### AzureDestStorageAccountName

The Azure Blob Storage Account Name to use for staging data as files in blob storage. This is the default destination for the source to staging file upload process for BimlFlex solutions using Azure SQL Data Warehouse as destination.

The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade.

### AzureDestStorageAccountKey

A Storage acccess key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata.

### AzureDestContainerName

The Container Name to use for the destination process. This should be indicative of the purpose of the contents, such as `Staging`

### AzureSourceStorageAccountName

The Azure Blob Storage Account Name to use for using files in blob storage as a source. This is the default source for non-standard load process for BimlFlex solutions using Azure SQL Data Warehouse as destination.

The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade.

### AzureSourceStorageAccountKey

A Storage acccess key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata.

### AzureSourceContainerName

The Container Name to use for the source process. This should be indicative of the purpose of the contents, such as `Source`

### AzureArchiveStorageAccountName

The Azure Blob Storage Account Name to use for archiving data as files in blob storage. This is the default archive destination for the staging to archive file move process for BimlFlex solutions using Azure SQL Data Warehouse as destination.

The Account Name is visible in the Azure Portal as the main name of the Storage Account. It is also detailed in the Settings, Access Keys blade.

### AzureArchiveStorageAccountKey

A Storage acccess key to use when accessing the Blob storage. use a separate development environment and manage production keys outside the BimlFlex metadata.

### AzureArchiveContainerName

The Container Name to use for the archive process. This should be indicative of the purpose of the contents, such as `Archive`

### AzCopyPath

The file path to the local installation of the AzCopy Command. If installed in a non-default location, update this setting to match.

### AzCopyConcurrency

Specify the number of concurrent operations to start

### AzCopyEnabled

Should the generated files be uploaded using AzCopy as part of the SSIS Packages. Disable if the solution uses an alternative file management process. 

### AzureExternalFileFormat

The External File Format defintion to use.

## DataMart

Data Mart specific settings

### DmAppendDim

The Object name to append to dimensions, such as `DIM`.

### DmAppendExternal


### DmAppendFact



### DmInferDim



### DisplayDatabaseNameDm



### DisplaySchemaNameDm



### AppendSchemaDm



### DmAppendStaging



### ApplyLookupFilterDm


## DataVault

Data Vault specific settings

### DvAppendBridge

### DvAppendHub

### DvAppendLink



### DvAppendLinkSatellite



### DisplayDatabaseNameRdv



### DisplaySchemaNameRdv



### AppendSchemaRdv



### DvInferLinkHub



### DvUseCacheLookup



### DvPreviewSchema



### DvAppendPointInTime



### DvDefaultSchema



### DvAppendReference



### DvAppendSatellite



### AppendSurrogateKey



### ApplyDataTypeMappingRdv



### ApplyLookupFilterRdv



### DvUseSequenceKeys



### DvUseHubKeyedInstances



### DvAccelerateLinkSatellite



### DvAccelerateLinkEffectiveSatellite

## Main

Generic settings

### ConcatenatorBusinessKey



### 7ZipPath



### ArchivePath



### RootPath



### LookupCachePath



### ExportPath



### ImportPath



### ConfigurationPath



### KeyEndsWith



### LookupTablePattern



### HashBusinessKey



### LookupAddFilterTable



### BusinessKeyNullValue



### BusinessKeyToUpper



### UseSqlCompatibleHash



### ArchiveImport



### ZipArchiveImport



### DeleteImportFile



### UseBimlCatalog



### HashAlgorithm



### HashBinary



### HashLongStrings



### ZipOutputFile

Should the created output file be zipped.

## NameConvention

Naming convention specific settings

### AppendBusinessKey

The string to append to Business Keys.

### StageWithColumnModelOverride

when defining a Model Override name for a column, setting this to `Y` will use the override name as the staging column name

### StageWithObjectModelOverride

when defining a Model Override name for an object, setting this to `Y` will use the override name as the staging table name

### UseRecordSourceAsAppend

The `UseRecordSourceAsAppend` Key specifies if the record source should be appended to the object name.

### AppendDomain

TODO: Add explanation

### SuffixOrPrefixObject

The `SuffixOrPrefixObject` key defines the behavior when naming objects.

Use Suffix or Prefix to define if the object identifiers are added befoer or after the object names in the solution.

`S` for Suffix Will generate `Entity_HUB`
`P` for Prefix Will generate `HUB_Entity`

### SuffixOrPrefixColumn

The `SuffixOrPrefixColumn` key defines the behaviour when defining column names. Use Suffix or Prefix to define if the column identifiers are added after or before the column names in the solution.

`S` for Suffix will generate `Entity_BK`
`P` for Prefix Will generate `BK_Entity`

### UseRecordSourceAsSchema

Should the Record Source be used as the schema name for staging and persistent staging tables.

Example: Source table `SalesLT.Product` from the Adventureworks LT source is staged in table `AWLT.Product`. This groups all souce tables from each source together in a separate schema.

### AppendProcedureName

## Orchestration

Orchestration specific settings

### EnableRollbackRdv

Should the orchestration engine rollback committed changes to the RDV when failed loads are detected.

### EnableRollbackStg

Should the orchestration engine rollback committed changes to the Staging database when failed loads are detected.

### EnableRollbackPsa

Should the orchestration engine rollback committed changes to the PSA when failed loads are detected.

### EnableEndDateRdv

## Snowflake

Snowflake specific settings

### SnowflakeConfigFile

The location of the Snowflake configuration file.

More information: [https://docs.snowflake.net/manuals/user-guide/snowsql-config.html#snowsql-config-file](https://docs.snowflake.net/manuals/user-guide/snowsql-config.html#snowsql-config-file)

### SnowflakeConnection

The named connection name for the Snowflake connection for SnowSQL.

More information: [https://docs.snowflake.net/manuals/user-guide/snowsql-start.html#using-named-connections](https://docs.snowflake.net/manuals/user-guide/snowsql-start.html#using-named-connections)

### SnowSqlPath

The path to the local installation of the Snowflake SnowSQL CLI Client tool.

More information: [https://docs.snowflake.net/manuals/user-guide/snowsql.html](https://docs.snowflake.net/manuals/user-guide/snowsql.html)

## Ssis

SSIS specific settings

### SsisBufferTempStoragePath

The Buffer Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill buffer data to disk, update this value to a location with enough space and speed for the load to succeed.

### SsisBLOBTempStoragePath

The Blob Temporary Storage Path that SSIS uses to spool temporary data to disk when it runs out of memory. Defaults to the TEMP environmental variable. That normally means the user context temporary storage location on the C: drive. If the data flows spill Blobs to disk, update this value to a location with enough space and speed for the load to succeed.

### SsisCommandTimeout

SSIS Command Timeout to use. Override the value here to change the default SSIS behavior.

### SsisMaxConcurrentExecutables

Max number of concurrent SSIS executables to employ. Override the value here to change the default SSIS behavior.

### SsisEngineThreads

Max number of SSIS engine threads to employ. Override the value here to change the default SSIS behavior.

### SsisDefaultBufferMaxRows

SSIS Data Flow configuration for Default Buffer Max Rows for supported destinations. Override the value here to change the default SSIS behavior.

### SsisDefaultBufferSize

SSIS Data Flow configuration for Default Buffer Size for supported destinations. Override the value here to change the default SSIS behavior.

### SsisMaximumInsertCommitSize

SSIS Data Flow configuration for Maximum Insert Commit Size for supported destinations. Override the value here to change the default SSIS behavior.

### SsisRowsPerBatch

SSIS Data Flow configuration for Rows Per Batch for supported destinations. Override the value here to change the default SSIS behavior.

### SsisCheckConstraints

SSIS Destination configuration for checking constraints. Defaults to `False` as that is recommended for data warehouse destinations.

### SsisAutoAdjustBufferSize

SSIS Auto Adjust Buffer Size configuration for supported SQL Server versions.

### SsisDelayValidation

Should generated SSI packages use delayed validation for metadata validation.

### SsisValidateExternalMetadata

Should generated SSI packages validate external metadata.

## Staging

Staging specific settings

### ObjectNamePattern

Specific override behavior for the object name for staging tables etc. Use short codes such as `@@this` and `@@rs` for easy access to the BimlFlex object model.

### SchemaNamePattern

Specific override behavior for the schema name for staging tables etc. Use short codes such as `@@this` and `@@rs` for easy access to the BimlFlex object model.

### DisplayDatabaseNameStg

Controls if the source database name should be included in the generated SSIS package name.
E.g. the default `EXT_AWLT_Customer` package name would be named `EXT_AWLT_AdventureWorksLT2012_Customer` when set to `Y`

### DisplaySchemaNameStg

Controls if the source schema name should be included in the generated SSIS package name.
E.g. the default `EXT_AWLT_Customer` package name would be named `EXT_AWLT_SalesLT_Customer` when set to `Y`

### AppendRecordSource

Should the Record Source Code from the connection be appended to the staging object name. This code is normally used as the schema name but can be tweaked to match a specific naming convention.

### AppendSchemaStg

Should the source Schema be appended to the object name in the staging layer. The default naming convention is to name tables using the Record Source and object name. The AdventureWorks LT Source table `SalesLT.Product` is normally staged in the `AWLT.Product` table. For sources with multiple schemas, enable this to distinguish between tables. For the product table the new staging table name would be `AWLT.SalesLT_Product`

### AppendSchemaPsa

The naming convention to add to the PSA objects when Staging and Persistent Staging are co-located in the same database.

### ApplyDataTypeMappingStg

Should the Data Type mappings that are applied to source tables be used in the Staging and Persistent Staging databases. As the Data Type mapping function is normally used to accommodate changes in the source this setting should normally be set to `Y`

### PsaUseCacheLookup

Should the PSA lookup cache the data to disk in SSIS. Use this if it is not possible to use the normal lookup behaviour due to memory contraints.

### PsaTruncateIfHasRows

Should the PSA table be truncated if it already has rows loaded. For normal PSA behaviour this should be set to `N`. for specific requirements where previously loaded rows should be discarded, set this to `Y`

### PsaMergeAllRows

TODO: Add description

### EnableEndDatePsa

Set to `Y` to enable end dating of rows in the PSA. This will allow timelines to be maintained in the PSA area. Using end dating is a more expensive process but allows queries to directly reuse complete effective dataes for each row. Disable this to use an insert-only approach for the PSA for optimised load performance.

### DisableStgPsaOnly

Set to `Y` to disable the staging layer and only persist changes to the PSA layer directly.

### DeleteDetectionEnabled

Should BimlFlex apply a separate key load pattern that will enable detection of hard deletes in the source.

### DeleteObjectNamePattern

the name to use for the Delete objects when using Delete detection. `@@this_DEL` will us the current object name (table name) and append `_DEL` at the end. Update this to use a specific naming convention for delete tables.

### DeleteSchemaNamePattern

The name to use for the Delete objects schema when using Delete detection. `@@rs` uses the Record Source of the connection as schema. (This is the same default behaviour as for the Staging tables). Update this to use a specific schema for delete tables.


***********************************************************************************
### RootPath

#### Description

The **RootPath** defines the default Root Path folder of the BimlFlex solution.

#### Example

```
C:\Varigence\BimlFlex
```

#### Valid Value

A valid path

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|C:\Varigence\BimlFlex|

### ImportPath

#### Description

The **ImportPath** defines the default folder path for file import.

#### Example

```
C:\Varigence\Import
```


The **ExportPath** defines the default folder path for file exports.

### UseBimlCatalog

The **UseBimlCatalog** defines whether or not to use the BimlFlex Catalog database for SSIS package orchestration and logging.

#### Example

```
Y
```

#### Valid Value

Enumeration {Y,N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|Y|

### ConfigurationPath

#### Description

The **ConfigurationPath** key defines the default path for configurations

#### Example

```
C:\Varigence\Configurations
```

#### Valid Value

A valid path

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|C:\Varigence\Configurations|

### 7ZipPath

#### Description

The **7ZipPath** key defines the file path/location of the 7-Zip application that is used for zipping/compression of files. The 7-zip executables are needed for zip-related operations. The 7-Zip application is open source and available to use without license cost.

More information and downloads: <http://www.7-zip.org/download.html>

#### Example

```
C:\Program Files\7-Zip
```

#### Valid Value

A valid path to the 7-Zip executable

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|C:\Program Files\7-Zip|

### AzCopyPath

#### Description

The **AzCopyPath** key defines the file path/location of the AzCopy application used to copy files to Azure storage.

#### Example

```
C:\Program Files (x86)\Microsoft SDKs\Azure\AzCopy
```

#### Valid Value

A valid path to the AzCopy executable

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|C:\Program Files (x86)\Microsoft SDKs\Azure\AzCopy|

### KeyEndsWith

#### Description

The **KeyEndsWith** key defines the text the metadata import uses to identify key columns that aren’t technically identified as keys in the source. Add any source specific key identifiers to enable automatic identification of key columns.

#### Example

```
Id,Code,No,Key,Cd
```

#### Valid Value

Any valid comma separated list of SQL or SSIS Strings

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|Id,Code,No,Key|

### SuffixOrPrefixColumn

#### Description

The **SuffixOrPrefixColumn** key defines the behaviour when defining column names. Use Suffix or Prefix to define if the column identifiers are added after or before the column names in the solution.

#### Example

```
S for Suffix will generate Entity_SK
P for Prefix Will generate SK_Entity
```

#### Valid Value

Enumeration {P, S}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|S|

### SuffixOrPrefixObject

#### Description

The **SuffixOrPrefixObject** key defines the behaviour when defining object names. Use Suffix or Prefix to define if the object identifiers are added after or before the object names in the solution.

#### Example

```
S for Suffix Will generate Entity_HUB
P for Prefix Will generate HUB_Entity
```

#### Valid Value

Enumeration `{P, S}`

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|P|

### UseRecordSourceAsAppend

#### Description

The **UseRecordSourceAsAppend** Key specifies if the record source should be appended to the object name

#### Example

```
N
```

#### Valid Value

Enumeration `{Y, N}`

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### UseRecordSourceAsSchema

#### Description

The **UseRecordSourceAsSchema** Key specifies if the record source should be used as the schema for objects. As an example, the default behaviour means a source table called Product from the record source AWLT will be created as AWLT.Product in the Staging Area

#### Example

```
Y
```

#### Valid Value

Enumeration `{Y, N}`

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|Y|

### UseColumnModelOverride

#### Description

The **UseColumnModelOverride** Key specifies if the model override for column should be used instead of the source names for columns in the Staging and Persisted Staging areas. The recommended, and default behaviour, is to use source names for Staging and only use override names in the Data Vault/later layers.

#### Example

```
N
```

#### Valid Value

Enumeration `{Y, N}`

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### UseObjectModelOverride

#### Description

The **UseObjectModelOverride** Key specifies if the model override for objects should be used instead of the source names for objects in the Staging and Persisted Staging areas. The recommended, and default behaviour, is to use source names for Staging and only use override names in the Data Vault/later layers.

#### Example

```
N
```

#### Valid Value

Enumeration `{Y, N}`

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### HashBusinessKey

#### Description

The **HashBusinessKey** Key specifies if the Business Key should be hashed. This is implemented by default for Data Vault regardless of setting but can be specified for other modelling approaches.

#### Example

```
N
```

#### Valid Value

Enumeration `{Y, N}`

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### ConcatenatorBusinessKey

#### Description

The **ConcatenatorBusinessKey** Key specifies the value to use as filler between business keys when concatenating them. Single business keys are created from multiple source columns through concatenation to maintain a single business key. When concatenating it is important to be able to distinguish between similarly formed inputs. E.g. concatenating ABC and DEF without the concatenator will make it the same as AB + CDEF (`ABCDEF`). The concatenator will maintain the two as different and distinct entities (`ABC~DEF` vs. `AB~CDEF`). Using a concatenator is required to maintain data integrity but the value can be configured to support an existing process, design pattern or specific requirement.

#### Example

```
~
```

#### Valid Value

any valid string value usable for string parsing

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|~|

### BusinessKeyNullValue

#### Description

The **BusinessKeyNullValue** Key specifies the defined value to use for null values in the business key.

#### Example

```
~NULL~
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|NVL|

### AppendBusinessKey

#### Description

The **AppendBusinessKey** Key specifies the string to append to the Business Key Columns. Prefixing or suffixing is specified by the SuffixOrPrefixColumn configuration

#### Example

```
BK = BusinessKeyColumnName_BK
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|Datatype|
|--- |--- |--- |
|Configuration Value|BK|DataType="AnsiString" Length="40"|

### AppendSurrogateKey

#### Description

The **AppendSurrogateKey** Key specifies the string to append to the Surrogate Key Columns. Prefixing or suffixing is specified by the SuffixOrPrefixColumn configuration

#### Example

```
SK = KeyColumnName_SK
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|Datatype|
|--- |--- |--- |
|Configuration Value|SK|DataType="AnsiString" Length="40"|

### AppendRecordSource

#### Description

The **AppendRecordSource** Key specifies if the Record source should be appended to object names

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### AppendSchemaDm

#### Description

The **AppendSchemaDm** Key specifies if the Schema should be appended in the Data Mart layer

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### AppendSchemaRdv

#### Description

The **AppendSchemaRdv** Key specifies if the Schema should be appended in the Data Vault layer

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### AppendSchemaPsa

#### Description

The **AppendSchemaPsa** Key specifies if the Schema should be appended for the Persistent Staging layer when colocated in the Staging database

#### Example

```
ods
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|ods|

### AppendSchemaStg

#### Description

The **AppendSchemaStg** Key specifies if the source schema should be appended to the object name. this is useful for when a source has multiple schemas with the same object name repeated across these schemas. To be able to distinguish between them in the Staging Area the schema name needs to be added. The default process disregards the schema for simplicity in the naming. An example where this might be needed is when loading all tables from the WideWorldImporters demo database where the same table name is repeated across multiple schemas.

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### AppendDomain

#### Description

Should Domain be added

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### DisplayDatabaseNameStg

#### Description

Should the Database name be added to the Staging Layer

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### DisplaySchemaNameStg

#### Description

Should the source schema name be added to the Staging Layer

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### LookupCachePath

#### Description

The **LookupCachePath** Key specifies the path for cache files for the lookup process when it is using external persistence of cache data.

#### Example

```
C:\Varigence\Cache
```

#### Valid Value

Any valid and safe path

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|C:\Varigence\Cache|

### DisplayDatabaseNameRdv

#### Description

The **DisplayDatabaseNameRdv** Key specifies if the database name should be added to the Rdv layer

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### DisplaySchemaNameRdv

#### Description

The **DisplaySchemaNameRdv** Key specifies if the source schema name should be added to the Rdv Layer

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### LookupAddFilterTable

#### Description

The **LookupAddFilterTable** Key specifies if table filter should be added to the lookup

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### DisplayDatabaseNameDm

#### Description

The **DisplayDatabaseNameDm** Key specifies if the objects database name should be displayed in the Data Mart.

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### LookupTablePattern

#### Description

The **LookupTablePattern** Key specifies the lookup naming convention used for SSIS table lookup.

#### Example

```
lkp.ReferenceColumnName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|"lkp." + column.Name.MakeSsisSafe|

#### DisplaySchemaNameDm

#### Description

The **DisplaySchemaNameDm** Key specifies if the objects schema name should be displayed in the Data Mart.

#### Example

```
N
```

#### Valid Value

Enumeration {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### DmAppendDim

#### Description

The **DvAppendDim** Key specifies the string to append to Dimension objects in the Data Mart. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
DIM = DIM_DimensionEntityName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|DIM|

### DmAppendFact

#### Description

The **DvAppendFact** Key specifies the string to append to Fact objects in the Data Mart. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
FACT = FACT_FactEntityName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FACT|

### DmAppendExternal

#### Description

The **DvAppendExternal** Key specifies the string to append to External objects in the Data Mart. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
EXT = EXT_ExternalEntityName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|EXT|

### DmAppendStaging

#### Description

The **DvAppendStaging** Key specifies the string to append to Staging objects in the Data Mart. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
STAGE = STAGE_DimensionEntityName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|STAGE|


### DvAppendBridge

#### Description

The **DvAppendBridge** Key specifies the string to append to Bridge objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
BRD = BRD_BridgeEntityName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|BRD|

### DvAppendHub

#### Description

The **DvAppendHub** Key specifies the string to append to Hub objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
HUB = HUB_EntityName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|HUB|

### DvAppendLink

#### Description

The **DvAppendLink** Key specifies the string to append to Link objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
LNK = LNK_LinkName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|LNK|

### DvAppendLinkSatellite

#### Description

The **DvAppendLinkSatellite** Key specifies the string to append to Link Satellite objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
LSAT = LSAT_LinkName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|LSAT|

### DvAppendReference

#### Description

The **DvAppendReference** Key specifies the string to append to Reference objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
REF = REF_ReferenceEntityName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|REF|

### DvAppendSatellite

#### Description

The **DvAppendSatellite** Key specifies the string to append to Satellite objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
SAT = SAT_EntityName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|SAT|

### DvPreviewSchema

#### Description

The **DvPreviewSchema** Key specifies the default schema to use for Data Vault Accelerator generated preview objects

#### Example

```
pdv
```

#### Valid Value

Any valid and safe SQL schema name

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|pdv|

### DvDefaultSchema

#### Description

The **DvDefaultSchema** Key specifies the default schema to use for Data Vault objects

#### Example

```
rdv
```

#### Valid Value

Any valid and safe SQL schema name

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|rdv|

### DvAppendPointInTime

#### Description

The **DvAppendPointInTime** Key specifies the string to append to Point in time objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
PIT = PIT_EntityEventName
```

#### Valid Value

Any valid and safe SQL and SSIS String

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|PIT|

### DvSnapshotFromDate

#### Description

The **DvSnapshotFromDate** Key specifies the Data Vault Snapshot from/start date

#### Example

```
0001-01-01 00:00:00.000
```

#### Valid Value

Any valid and safe SQL and SSIS date datatype and date expression

#### Default Metadata information

|Key|Value|Datatype|Default|
|--- |--- |--- |--- |
|Configuration Value|SnapshotFromDate|DataType="DateTime2" Scale="7"|0001-01-01 00:00:00.000|

### DvSnapshotToDate

#### Description

The **DvSnapshotToDate** Key specifies the Data Vault Snapshot to/end date

#### Example

```
9999-12-31 00:00:00.000
```

#### Valid Value

Any valid and safe SQL and SSIS date datatype and date expression

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|SnapshotToDate|
|Configuration Datatype|DataType="DateTime2" Scale="7"|
|Configuration Default|9999-12-31 00:00:00.000|

### DvSnapshotIncremental

#### Description

The **DvSnapshotIncremental** Key specifies if the Data Vault Snapshot feature should provide incremental snapshots.

#### Example

```
Y
```

#### Valid Value

Enumerator {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|Y|

### DvSnapshotLastModifiedDate

#### Description

The **DvSnapshotLastModifiedDate** Key specifies the Data Vault Snapshot last modified date

#### Example

```
0001-01-01 00:00:00.000
```

#### Valid Value

Any valid and safe SQL and SSIS datatype and expression

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|LastModifiedDate|
|Configuration Datatype|DataType="DateTime2" Scale="7"|
|Configuration Default|0001-01-01 00:00:00.000|

### EnableRollbackStg

#### Description

The **EnableRollbackStg** Key specifies if the Staging Area should accommodate the orchestration rollback feature. This will roll back a failed previous load when identified by the orchestration engine. Note that the Staging Area is truncated on load using the normal load pattern making rollback here irrelevant.

#### Example

```
N
```

#### Valid Value

Enumerator {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### EnableRollbackPsa

#### Description

The **EnableRollbackPsa** Key specifies if the Persistent Staging Area should accommodate the orchestration rollback feature. This will roll back a failed previous load when identified by the orchestration engine.

#### Example

```
N
```

#### Valid Value

Enumerator {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### EnableRollbackRdv

#### Description

The **EnableRollbackRdv** Key specifies if the Raw Data Vault should accommodate the orchestration rollback feature. This will roll back a failed previous load when identified by the orchestration engine.

#### Example

```
N
```

#### Valid Value

Enumerator {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### EnableInitialRecordRdv

#### Description

The **EnableInitialRecordRdv** Key specifies if the Raw Data Vault should produce initial records for entities. This is useful when an unbroken timeline is needed to support equijoins, inner joins on Hubs/Links to Sats regardless of the effectiveness dates used. With this configuration set to No, a satellite load of a new business key will only add a single row to the Raw Data Vault table. The effectiveness will be from the batch load date time to end of time. With the configuration set to Yes the Satellite load process will add 2 rows, the additional one will be a zero or ghost row with an effectiveness from start of time to the batch load date time.

#### Example

```
N
```

#### Valid Value

Enumerator {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|N|

### EnableEndDateRdv

#### Description

The **EnableEndDateRdv** Key specifies if the Raw Data Vault should end date loaded information. This is useful to simplify reads out of the Data Vault. The end dating will change the end data of the previous row to the load date of the new row and the new row will have an end date equal to the end of time specification. The process will also maintain a isCurrent flag for rows meaning it is trivial to derive the current valid set of data. The end dating process adds time and effort to the load processing time and can therefore be configured if needed. Setting this to No can potentially increase performance when loading in to the Data Vault.

#### Example

```
N
```

#### Valid Value

Enumerator {Y, N}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|Y|

### SsisMaxConcurrentExecutables

#### Description

The **SsisMaxConcurrentExecutables** Key specifies the number of SSIS control flow executables that can run in parallel. The default value of -1 translates to the number of logical processors plus 2 concurrent tasks. This value can be tweaked to optimise performance in certain scenarios.

#### Example

```
10
```

#### Valid Value

A valid Integer value

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|-1|

### SsisEngineThreads

#### Description

The **SsisEngineThreads** Key specifies the SSIS property with the same name. this defines the number of engine threads SSIS will use. This value can be tweaked to optimise performance in certain scenarios.

#### Example

```
10
```

#### Valid Value

A valid Integer value

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|10|

### SsisMaximumInsertCommitSize

#### Description

The **SsisMaximumInsertCommitSize** Key specifies the SSIS property with the same name. this defines the maximum insert commit size to use in a bulk operation. This value can be tweaked to optimise performance in certain scenarios.

#### Example

```
2147483647
```

#### Valid Value

A valid integer value

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|2147483647|

### SsisRowsPerBatch

#### Description

The **SsisRowsPerBatch** Key specifies the SSIS property with the same name. this defines the number of rows to use in a bulk operation. This value can be tweaked to optimise performance in certain scenarios.

#### Example

```
500000
```

#### Valid Value

A valid integer value

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|500000|

### SsisValidateExternalMetadata

#### Description

The **SsisValidateExternalMetadata** Key specifies if the SSIS component should validate the external metadata against the cached information. Setting this to false can be useful if the source metadata should be disregarded due to temporary changes or similar scenarios

#### Example

```
True
```

#### Valid Value

Boolean Enumerator {True False}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|true|

### SsisDelayValidation

#### Description

The **SsisDelayValidation** Key specifies if the Ssis component should delay metadata validation. This is useful when the source or reference is not always available and there is a need to delay validation until later

#### Example

```
True
```

#### Valid Value

Boolean Enumerator {True, False}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|true|

### SsisCheckConstraints

#### Description

The **SsisCheckConstraints** Key specifies if the destination transformation should check constraints when writing to source. By default, this is disabled to enable faster transfers. Within Staging, Persistent Staging and Data Vault layers’ constraints should not be enforced as it makes the solution less flexible and disallows parallel and out of sequence loading.

#### Example

```
False
```

#### Valid Value

Boolean Enumerator {True, False}

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|false|

### SsisCommandTimeout

#### Description

The **SsisCommandTimeout** Key specifies the command timeout to use for SSIS tasks

#### Example

```
10
```

#### Valid Value

A valid Integer value

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|0|

### SsisDefaultBufferMaxRows

#### Description

Defines the Maximum number of rows used in a task buffer. The default used is 10,000 rows

#### Example

```
10000
```

#### More information

<https://msdn.microsoft.com/en-us/library/ms141031.aspx>

#### Valid Value

A valid Integer value

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|10000|

### SsisDefaultBufferSize

#### Description

Define the default size of the buffer that the task uses, by setting the DefaultBufferSize property. The default buffer size is 10 megabytes, with a maximum buffer size of 2\^31-1 bytes.

#### Example

```
10485760
```

#### More information

<https://msdn.microsoft.com/en-us/library/ms141031.aspx>

#### Valid Value

A valid positive Integer value up to 2\^31-1 bytes.

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|10485760|

### SsisBufferTempStoragePath

#### Description

Defines the part where SSIS will store temporary buffer data if needed when processing a package. The default location (defined by the TMP/TEMP environment variables) is used if this key is empty.

#### Example

```
E:\FastDisk\Folder\
```

#### Valid Value

A valid path.

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value||

### SsisBLOBTempStoragePath

#### Description

Defines the part where SSIS will store temporary BLOB data if needed when processing a package. The default location (defined by the TMP/TEMP environment variables) is used if this key is empty.

#### Example
```
E:\FastDisk\Folder\
```
