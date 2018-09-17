# BimlStudio 2018 r2 Release Notes

Significant changes between BimlStudio 2018 and BimlStudio 2018 r2

## Azure Data Factory Support

* `servicePrincipalId` property now correctly emits in `AzureDataLakeStore` Linked Services.
* Updated depracated `AzureStorage` Linked Service to the `AzureBlobStorage` and `AzureTableStorage` linked services.
* Added `Parameters` collection to `Copy` activity's sink/source datasets and emit them in the corresponding `outputs`/`inputs` collection of the `Copy` activity.
* Fixed escaping issue in Format nodes that were not correctly emitting escaped `rowDelimiter` and `columnDelimiter` values (ie \t or \n).
* Added more validation for ADF naming conventions for pipelines, activities, datasets, and the `folderPath` property of `BlobDatasets`.
* Added depracated `Script` property to `DatalakeUsqlActivities`.
* Added `None` to `CopyBehavior` enum. 
* Added the default value to pipeline parameters.
* Fixed bug where parameters with a null value were being rendered as 'undefined' in the emitted json. Now they correctly emit as null.
* Fixed bug where triggers were not emitting at all.
* Now generate `AdfAnnotations` collections for all pipelines, datasets, linkedServices and triggers.
* Added the `folder` property as `AdfFolder` to all pipelines and datasets.
* Added `UserProperties` collection to all activities.
* Fixed the way we display triggers in the `Logical View`.


## SSIS

* Fixed issue where setting the 'VersionGuid' property to all 0's was still generating a random Guid. User can now specify a Guid of all 0's. 
* Fixed ISPAC filename escaping issue.
* Changed default of `FileSystemOperationTask` enum to be `CopyFile`.


## BimlStudio Bugs

* Eliminated BimlStudio crash when encrypted settings could not be read from MUO file due to user profile change.
* If saving a resp file before having built a project, we will create the output folder, as this was causing BimlStudio to crash.


## Source Control

* Improved general performance of TFS commit and add operations.
* Disabled the included/excluded lists when the file compare tool is being launched and during the commit process.
* Fixed issue where occasionally the Operation Results banner would tell the user to click for more information when there was no more information to give. 


## BimlFlex Projects

* In debug utility, we now filter out source control folders (.git/$tf/.svn) when including the project directory in your zip.
* In debug utility, we now filter out documentation folder when including the project directory in your zip.
* In debug utility, we now additionally track the following versions and settings: Sql Server Version, DDL Build Mode, Ssas Multidimensional Version, Ssas Tabular Version, SSIS Version, Biml Engine 32/64 bit paths, and MsBuild 32/64 bit paths. 
* In debug utiltiy, no longer show the default BimlTemplate customer in the drop downs.
* The pre-selected customer/version in the debug utility match the configured customer/version in the bundle settings.
* In the debug utility, Added a tool tip to provide more information to the user about what connection string properties are being obfuscated and how to proceed in the event that there is still other information that they would like to hide.
* Added wait cursors to a few longer processes to help better communicate to the user that something is happening in the background.
* In debug utility, disabled the 'Save Metadata' button while the debugutility is attempting to establish a DB connection and generate customer/version lists.
* In debug utility, we now prevent duplicates from being added to the customer/version list.
* In debug utility, fixed a datarace where a user opened the utility with an invalid connection and attempted to correct the connection before the incorrect connection had finished timing out, causing the correct connection's customer/version list to be wiped out when it finally does time out.
* In debug utility, increased obfuscation of sensitive information when extracting metadata.
* Added multiselect for model groupings in the data vault accelerator options dialog box.
* Upgraded the DacFx framework so we can now deploy Dacpacs to Sql Server 2017.



## Project Settings and Command Line Options (CL)

* Added current working directory to the search path for ambiguous or relative paths. Now you can use relative paths for any property and we will resolve it with the working directory.
* Made TargetFrameworkVersion globally configurable through a command line build option with a default of 4.6.


## Bundles

* Target attribute in extension directive in bundles now supports lists of objects.
* Fixed extension points for empty target lists in bundles.


## Misc
* Added EULA agreement as first step in installer.

