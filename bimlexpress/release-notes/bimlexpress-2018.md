# BimlExpress 2018 Release Notes

Significant changes between BimlExpress 2017 and BimlExpress 2018

## New Features

* Added the Import Packages window to enable users to import existing SSIS packages and projects and convert them to Biml.
    The window is prepopulated with settings that are highly configurable to produce the desired results.
* Updates to BimlExpress project and manifest for compatibility
* Updated jquery in BimlExpress
* Ensure that all new Biml files are UTF-8 encoded, rather than ANSI encoded.

## Bug Fixes

* Fixed an issue where exceptions thrown by user BimlScripts might not show up correctly in the BE preview pane
* Fixed issue where Ctrl+S would not save Biml files
* Fixed `No path to BIDS devenv for Ssis2016 was found.` when trying build and open with 2016 target
* Fixed a potential race condition on file saving in BimlExpress
* Fixed an assembly resolution issue that was breaking script projects in BimlExpress OneDesigner scenarios
* Added the `ICollection<T>` interface to `TierFilteredVulcanCollection`. This results in a larger number of extension methods working as expected in Live preview mode in BimlExpress.
