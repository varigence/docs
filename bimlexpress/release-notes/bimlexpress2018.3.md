# BimlExpress 2018 R3 Release Notes

Significant changes between BimlExpress2018 R2 and BimlExpress2018 R3.

## Biml Express

* Fix so that BimlExpress works with old versions of Visual Studio, as some older versions were preventing users from importing dtsx packages, failing to register file edits, and failing to show the preview pane. 
* Improved Package Importer accuracy for BimlExpress.

## SSIS

* Fixed error in XMLSource transformations where XSD with multiple root items and references to other complex items within complex items was not working correctly.
* Fixed issue where CastOperator was not working for DT_NUMERICs with more than 1 digit to the left of the decimal place.
* Fixed an issue where OleDbSource components were incorrectly being imported as TheobaldXtractSapSource components.
* Prevented Package duplicates from being added to the PackageProject node when importing an Ssis project.
* Fixed issue where importer for 2012 Sql Server compnents were not getting parsed correctly during import. 
* Corrected bugs with rewiring control flow precendence constraints in LocalReplace transformers. 
* Added ability for DB2 to use SysCat schema when available.

