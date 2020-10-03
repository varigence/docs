---
uid: bimlflex-release-notes
name: BimlFlex Release Notes
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up before upgrading.  
> Please email support@bimlflex.com with any installation or upgrade issues.

## BimlFlex 2020

BimlFlex 2020 is installed and upgraded through a single consolidated installer.

## Latest Release

Build 20.2.nnn.0, release date: nn mmmm 2020

## Breaking Changes

Upon updating to BimlFlex version 2020.2, users will be required to initiate a one-time manual update of the Excel Metadata Editor add-in.
Microsoft Excel has hardcoded the path to the add-in, and unfortunately, there is no preprogrammed workaround.

Documentation providing a step-by-step walkthrough for this process can be found [here](xref:excel-metadata-addin).

## Settings Changes

The Accelerator and Data Vault processes have several new optional configurations to better control Data Vault behavior.

* Added settings to control if individual source keys should be added to Hubs and Links as attributes.
* Added settings for if Link Satellites should use record source naming convention by default.
* The Existing Setting `SsdtOutputPath` has been moved to the Ssdt settings group.

Documentation regarding the updated delete functionality can be found here: [TO DO](xref:TODO: Add link).

The following setting has been added to control the Data Vault Accelerator:

* DvAppendLinkSatelliteRecordSource

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

More information on these settings: [BimlFlex-generated SQL Server Data Tools Project](xref:bimlflex-ssdt-project)

## Azure Data Factory (ADF)

* Added ADF Flat File load support. This includes Delimited, ORC, Avro, XML and binary files. More information on the ADF Flat File load process: [Flat File Source to Staging](xref:flat-file-source-to-staging).
* Scenarios where an SSIS load to Synapse blob storage staging file archive process used the archive SAS Token to connect to the staging account has been addressed.
* Fixed an error in the app for blob storage connections that created empty string names for the integration runtime.BimlStudio errors when attempting to create an integration runtime with an empty string as a name.
* Updated AKV linked services to use the actual url of the key vault.
* Fixed an issue with file column names in Blob Sources.
* Improved connection string emission to deviate from the SecureString pattern. This populates the appropriate subfields inside of Azure after deploying assets.
* Fixed an issue when deploying by ARM template, that caused the Azure Blob Storage authentication method to incorrectly register as Service Principal ID.
* Integration Runtimes can now pass into BLOB Storage and DataLakeStoreGen2 Linked Services.
* Fixed an issue with `Hash Column` of large Synapse Tables (greater than 500 columns).

## BimlFlex App Help Sidebar Navigation

BimlFlex now features sidebar Help sections for the following editor screens:

* Accelerator
* Schema Mapping
* Column Mapping Diagram

The Help section sidebar navigation also features links to BimlFlex documentation for technical assistance and walkthroughs for features relevant to the page in which Help is being accessed.

## UI Improvements

* Autoselect customers on database change.
* The layout in the Accelerator page has been updated so the source pane is closed by default. Click the open arrow to view the source pane and its active source objects.
* Improved entity and model border styling.
* Improved app navigation and user experience when creating a new entity.
* Enabled users to create PIT tables without datetime columns.
* Enabled users to specify modeling patterns with ELM set as the default methodology.
* Prevent navigation when there are pending configuration changes.

## BimlFlex Accelerator

* Updated so that Connection point handles are displayed upon selection of entities.
* Context menu appears on paths when location is selected.
* Path calculation is updated to support multiple connection points between entities.
* Drag and drop behavior is updated to add references between connection points.
* Ellipses outside of nodes added to match application stylings.
* Relationship modeling default grid layout now adds the relationships between entities, with smaller connectors.
* Merged UOW now uses material modals.
* UOW drag now only highlights valid targets.

## Delete Detection

* Added additional delete detection functionality to SSIS, ADF and MSSQL ELT processes.
* TODO: Add note on Delete detection change on tuples to named classes for customers who use existing bespoke scripts and biml scripts.

Read More on the updated delete functionality here: [TO DO](xref:TODO: Add link)

## Data Mart/Data Vault

* Added a fix to correctly calculate `FlexRowHashtype1` on fact tables by using source column data types.
* Fixed an issue where the `Clone` action would include 'Transient' (TRS) and 'Ignore' (IGN) columns, as these change types are to indicate no further processing.
* Resolved an issue where the Data Vault Point In Time object creation would not allow the object to be saved unless there were attribute datetime columns present.
* Fixed an issue with duplicate surrogate keys in STG table for REF tables.
* Ensured all references to bridge objects to use 'BRG' rather than 'BRD', to enforce uniformity.

## Providers

* Fixed an issue with `Oracle` import where `UNISTR()` was required.
* Fixed a metadata import issue for `MSOLEDBSQL` provider.

## BimlFlex DB

* Removed `ImportRequests` table from database.
* Updated the SP to force include customer and version entities in metadata push so metadata sets will work when no corresponding customer or version exists.

## BimlCatalog DB

* Resolved a `RowCount` stored procedure bug that resulted in orphaned open transactions.

## SQL Based ELT

* Fixed a bug where `End Date` would only generate an update for one record.
* Fixed an issue where `End Date` was retrieving the incorrect date.
* Fixed an issue where `FlexRowIsCurrent` was not populating with values.

## SSIS

* Resolved an issue where Blob Archive step in Ssis referred to the wrong account. Archive Staging step now refers to the correct staging account, container, and file.
* Fixed an issue where Type1 columns were generating in SSIS when none were present in the source.
* Added required SsisServer to $ssisExecutionParameter generation.
* Fixed HashTable parameter looping.

> [!NOTE]
> In BimlFlex 2019.1, External Tables were always included, which sometimes led to issues with lacking Visual Studio support.
> Earlier BimlFlex 2020 releases removed these SSDT artifacts and applied creation of External Tables as part of the load packages.
> The BimlFlex 2020.2 release adds control to the creation of, and additional defaults for, dependency objects.

<!--
Note that in the BimlFlex 2019 release the External Tables were always included, sometimes leading to issues with lacking Visual Studio support. Earlier BimlFlex 2020 releases removed these SSDT artifacts and applied creation of external tables as part of the load packages. This release adds control to the creation of, and additional defaults for, dependency objects.
--> 

## Download Links to BimlFlex 2020.2:

* [bimlflexdevsetup_20.2.nnn.0.exe](https://varigence.com/downloads/bimlflexdevsetup_20.2.nnn.0.exe)
* [bimlflexruntimesetup_20.2.nnn.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_20.2.nnn.0.exe)