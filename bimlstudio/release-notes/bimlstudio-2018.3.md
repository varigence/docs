# BimlStudio 2018 r3 Release Notes

Significant changes between BimlStudio 2018 and BimlStudio 2018 r3

## Azure Data Factory Support



## SSIS

* Fixed error in XMLSource transformations where XSD with multiple root items and references to other complex items within complex items was not working correctly.
* Fixed issue where CastOperator was not working for DT_NUMERICs with more than 1 digit to the left of the decimal place.
* Fixed an issue where OleDbSource components were incorrectly being imported as TheobaldXtractSapSource components.
* Prevented Package duplicates from being added to the PackageProject node when importing an Ssis project.
* Fixed issue where importer for 2012 Sql Server compnents were not getting parsed correctly during import. 

## BimlStudio Bugs

* Fixed issue where clicking "Delete Unscripted" on top level items in he Logical View (eg Data Integration and Integration Services) did not actually do anything.


## SSAS

* Fix for SSAS emission bug where required children properties were not being emitted due to default check.


## BimlFlex Projects

* In Upgrade Assets utility, added the option to select Beta Release and Cumulative Update bundles.
* In Debug utility, fixed capitalization in file dialog.
* In Debug utility, fixed issue where zip was being split into multiple parts, even if the file size was under 5mb. 
* In Debug utility, removed spurious option to save the debug file as a .json file. 

## Project Settings and Command Line Options (CL)




## Bundles




## Misc


