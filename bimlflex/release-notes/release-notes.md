---
uid: bimlflex-release-notes-2020-r2
name: BimlFlex Release Notes 2020 R2
summary: release notes for BimlFlex 2020 R2
---
# Release Notes

> [!NOTE]
> Please make sure databases and projects are backed up before upgrading.  
> Please email support@bimlflex.com with any installation or upgrade issues.

## BimlFlex 2020 R2

BimlFlex 2020 R2 is installed and upgraded through a single consolidated installer.

## Latest Release

Build 20.2.469.0, release date: 17 Nov 2021

* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup_20.2.469.0.exe)  
    This installer includes all parts of BimlFlex
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup_20.2.469.0.exe)  
    This installer only includes the required runtime components for servers that will execute SSIS packages

## Breaking Changes

### Excel Add-in Updated

The Excel add-in location has been updated. The location of the add-in must be updated in the Excel file. This is automatically done when the `BimlFlex.xlsx` file is opened from BimlStudio. BimlStudio also has an upgrade function available in the Excel Metadata Editor dropdown that allows manual upgrades of existing Excel files. If the `BimlFlex.xlsx` file is opened directly from Excel or from the Windows file explorer it will display an error message similar to this:

`file:///C:/Program Files/Varigence/BimlFlex/5.0/BimlFlexAddin.vsto did not succeed.`

Open the `BimlFlex.xlsx` file from BimlStudio to upgrade the add-in location, or upgrade the Excel file from the advanced options in the BimlFlex ribbon UI, in the Excel Metadata Editor dropdown to allow it to work as expected. Once the Excel file is upgraded it can be opened directly from Excel or the Windows file explorer again.

Additional documentation providing a step-by-step walkthrough for this process: [Excel Metadata Add-in](xref:excel-metadata-addin)

The default installation location has been updated. Previous installations placed the application files in a version-number-based sub-folder under the Program Files\Varigence installation. This version removes the version-number sub-folder. For scenarios where the path is used the process should be updated to reflect the new path.

## Possible Breaking Changes

### New Setting SSIS HASH NULL VALUE REPLACEMENT

The addition of the **Setting** *SSIS HASH NULL VALUE REPLACEMENT* now allows for SSIS and SQL based ELT to output identical BK and HASH values.
This adjusts the logic used in generating the Derived Column Expression for BKs in SSIS to now use the *SSIS HASH NULL VALUE REPLACEMENT*, instead of an empty string `""` (prior logic).

For new projects it is recommended that both *HASH NULL VALUE REPLACEMENT* and *SSIS NULL VALUE REPLACEMENT* be set to identical values to ensure full SQL hashing compatibility.
Having the same value in both **Settings** will ensure the both SSIS and SQL Based ELT with generate identical BK and hash values.

For existing projects using SSIS, it is recommended that the *SSIS NULL VALUE REPLACEMENT* is left blank to ensure backwards compatibility with any null values hashed in SSIS previously.

> [!IMPORTANT]
> For existing projects using SSIS, it is recommended that the *SSIS NULL VALUE REPLACEMENT* is left blank to ensure backwards compatibility with any null values hashed in SSIS previously.
> Using a value other than blank will alter the previous routine used by SSIS to generate a BK.
> The below table shows a few examples of what SSIS would generate if the `NVL` was used over prior logic :
>
> | Example Key Type                   | Prior BK | Prior Hash                               | New BK   | New Hash                                 |
> | ---------------------------------- | -------- | ---------------------------------------- | -------- | ---------------------------------------- |
> | NULL Single Column BK              |          | DA39A3EE5E6B4B0D3255BFEF95601890AFD80709 | NVL      | A018884EE5E8C82BAF141388E4F41592D0E68C95 |
> | Two Column Composite BK, both NULL | ~        | 9452A87FAA0073A5238C5BF8FBCAE0BFB2A7512D | NVL~NVL  | 057581A6D1D619E3554F286F585360E902227988 |
> | Two Column Composite BK, one NULL  | awlt~    | 95647A96D1AF1657941526742915B61C6B3DB171 | awlt~NVL | CFB3E059BC75F656C7AE17D2B285760CDC9495F2 |

## 2020 R2 New Features

* New features and behaviors for BimlFlex Accelerator.
* New BimlFlex in-app Help Sidebar added to all metadata editor screens.
* Improved UI for Editor screens.
* Global navigation to transition between Projects, Connections, Objects, and Columns in a single click.
* Enhanced support for ADF and Snowflake.
* New customer scenarios for cloud-only users.
* Improved delete detection.
* Substantially improved load performance within the BimlFlex App.

## Settings Changes

A new setting group called `Azure Copy` has been added that allows more control over the Copy Activity in ADF pipelines. It is now possible to have fine grained control over the copy activity settings as well as over the way the Copy Activity uses Bulk Insert or PolyBase as copy method. The staging and logging settings for the Copy Activity are exposed as separate settings, allowing control over staging and logging settings. The location definition for these settings uses LinkedServiceName="@@this" by default. This will use the PolyBase landing connection as defined in the projects source connection.

A new setting, `SsisHashNullValue`, has been added to the Core settings group. This allows control of the Null Value replacement string that is used in the SSIS packages call to the Hashing custom component. This value is left blank for backwards compatibility with previous behavior. For full SQL hash compatibility, consider using the same null-value replacement as for the `HashNullValue` setting. For backwards compatibility with existing data hashed through the SSIS components, leave it blank.

The Accelerator and Data Vault processes have several new optional configurations to better control Data Vault behavior.

* Added settings to control if individual source keys should be added to Hubs and Links as attributes.
* Added settings for if Link Satellites should use record source naming convention by default.
* The Existing Setting `SsdtOutputPath` has been moved to the SSDT settings group.
* Toggle setting added to display backbone (Hubs and Links only) for accelerated models.
* Toggle setting added to display datatypes for columns for both source models and accelerated models.
* The `AzureStagingSettings` has been renamed `AzureCopyStagingSettings`

Additional documentation regarding the updated delete functionality: [BimlFlex Delete Detection](xref:bimlflex-concepts-delete-detection)

The following setting has been added to control the Data Vault Accelerator:

* DvAppendLinkSatelliteRecordSource

The following settings have been added to the SSDT group:

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

The following settings have been added to the Azure Copy group:

* AzureCopyRetryAttempts
* AzureCopyRetryInterval
* AzureCopyTimeout
* AzureCopySecureInput
* AzureCopySecureOutput
* AzureCopyDataIntegrationUnits
* AzureCopyParallelCopies
* AzureCopyValidateDataConsistency
* AzureCopyMethod
* AzurePolybaseSettings
* AzureCopyEnableStaging
* AzureCopyStagingSettings
* AzureCopyEnableLogging
* AzureCopyLogSettings

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

More information regarding BimlFlex's handling of ARM Template emissions: [ARM Templates within BimlFlex](xref:bfx-arm-templates)

## BimlFlex App Help Sidebar Navigation

BimlFlex now features sidebar Help sections for the following editor screens:

* Accelerator
* Schema Mapping
* Column Mapping Diagram

The Help section sidebar navigation also features links to BimlFlex documentation for technical assistance and walkthroughs for features relevant to the page in which Help is being accessed.

## UI Improvements

* Auto select customers on database change.
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
* The Delete Detection Object Model has been updated. For implementations that use bespoke Delete Detection Scripts, certain attributes will need to be updated to correctly refer to the new object model.

Additional documentation regarding the updated delete functionality: [BimlFlex Delete Detection](xref:bimlflex-concepts-delete-detection)

<!--
## Business Modeling

* BimlFlex now features the ability to use a business modeling approach to Data Vault modeling.

Read More on the exciting new Business Modeling functionality here: [Business Modeling in BimlFlex](xref:business-modeling)
-->

## Data Mart/Data Vault

* Added a fix to correctly calculate `FlexRowHashtype1` on fact tables by using source column data types.
* Fixed an issue where the `Clone` action would include 'Transient' (TRS) and 'Ignore' (IGN) columns, as these change types are to indicate no further processing.
* Resolved an issue where the Data Vault Point In Time object creation would not allow the object to be saved unless there were attribute datetime columns present.
* Fixed an issue with duplicate surrogate keys in STG table for REF tables.
* Ensured all references to bridge objects to use 'BRG' rather than 'BRD', to enforce uniformity.

## Providers

* Fixed an issue with `Oracle` import where `UNISTR()` was required.
* Fixed a metadata import issue for `MSOLEDBSQL` provider.

## Dynamics CRM

* Fixed an issue where **Parameters** would not retrieve from an Entity with >= ~50,000 records.
* Added the ability to override the `<fetch/>` XML statement of a **Parameter** through *PARAMETER SQL*.
* Added the ability to automatically generate the `<fetch/>` XML statement of a **Parameter** by leaving *PARAMETER SQL* blank.

## BimlFlex DB

* Removed `ImportRequests` table from database.
* Updated the SP to force include customer and version entities in metadata push so metadata sets will work when no corresponding customer or version exists.

## BimlCatalog DB

* Resolved a `RowCount` stored procedure issue that resulted in orphaned open transactions.

## SQL Based ELT

* Fixed an issue where `End Date` would only generate an update for one record.
* Fixed an issue where `End Date` was retrieving the incorrect date.
* Fixed an issue where `FlexRowIsCurrent` was not populating with values.
* Added additional logic for RowAuditId. For a solution where RowAuditId is set to derived for target Data Vault objects, the load Stored Procedures will now correctly derive the required syntax, regardless of any additional settings.

## SSIS

* Resolved an issue where Blob Archive step in Ssis referred to the wrong account. Archive Staging step now refers to the correct staging account, container, and file.
* Fixed an issue where Type1 columns were generating in SSIS when none were present in the source.
* Added required SsisServer to $ssisExecutionParameter generation.
* Fixed HashTable parameter looping.
* Fixed an issue where using certain date *DATA TYPES* would result in a delta in the PSA when none was present.

> [!NOTE]
> In BimlFlex 2019.1, External Tables were always included, which sometimes led to issues with lacking Visual Studio support.
> Earlier BimlFlex 2020 releases removed these SSDT artifacts and applied creation of External Tables as part of the load packages.
> The BimlFlex 2020 R2 release adds control to the creation of, and additional defaults for, dependency objects.

<!--
Note that in the BimlFlex 2019 release the External Tables were always included, sometimes leading to issues with lacking Visual Studio support. Earlier BimlFlex 2020 releases removed these SSDT artifacts and applied creation of external tables as part of the load packages. This release adds control to the creation of, and additional defaults for, dependency objects.
-->

## Tree view navigation

The modeling pages Accelerator, Schema Diagram and Column Mapping have a new tree view navigation. This allows better control over what objects are visible and co-located in the navigation list.

## Download Links to this Build

* [bimlflexdevsetup_20.2.469.0.exe](https://varigence.com/downloads/bimlflexdevsetup_20.2.469.0.exe)
* [bimlflexruntimesetup_20.2.469.0.exe](https://varigence.com/downloads/bimlflexruntimesetup_20.2.469.0.exe)
