# BimlExpress 2018 Release Notes

Significant changes between BimlExpress2018 and BimlExpress2018 R2

## Biml Express

* Fixed an issue in BE where packages could not be imported until at least one Biml file had already been added.
* Updated logging to capture 'InitializeEditor' errors during the editor initialization. 
* Updated BimlExpress online projects to use the new global framework version setting mechanism

## SSIS

* Fixed issue where setting the 'VersionGuid' property to all 0's was still generating a random Guid. User can now specify a Guid of all 0's. 
* Fixed ISPAC filename escaping issue.
* Changed default of `FileSystemOperationTask` enum to be `CopyFile`.

