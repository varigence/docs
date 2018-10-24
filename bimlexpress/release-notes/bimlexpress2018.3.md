# BimlExpress 2018 Release Notes

Significant changes between BimlExpress2018 and BimlExpress2018r2

## Biml Express

* Fix so that BimlExpress works with old versions of Visual Studio, as some older versions were preventing users from importing dtsx packages, failing to register file edits, and failing to show the preview pane. 
* Improved Package Importer accuracy for BimlExpress.

## SSIS

* Fixed error in XMLSource transformations where XSD with multiple root items and references to other complex items within complex items was not working correctly.
* Fixed issue where CastOperator was not working for DT_NUMERICs with more than 1 digit to the left of the decimal place.
* Fixed an issue where OleDbSource components were incorrectly being imported as TheobaldXtractSapSource components.
* Prevented Package duplicates from being added to the PackageProject node when importing an Ssis project.

## SSAS

* Fix for SSAS emission bug where required children properties were not being emitted due to default check.

