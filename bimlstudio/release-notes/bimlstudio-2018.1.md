# BimlStudio 2018.1 Release Notes

Significant changes between BimlStudio 2017 and BimlStudio 2018

## Azure Data Factory Support

* Create all new V2 Linked Services


## BimlStudio UI Updates

* Improved styling in the Package Import dialog, by widening the file path textbox, adjusting the height of the file path textbox, and making the buttons uniform. Also eliminated unnecessary columns in the DTSX file path grid.


## SSIS

* Added support for SSIS 2017.

## BimlStudio Bugs

* Fixed issue with extra `xmlns` declarations when expanding BimlScript files in BimlStudio.


## Source Control

* Fixed bug where folders under source control were displaying as "checked-in", even when they contained files with pending changes.


## Tabular Support

* In `AstTabularRelationshipNode`, added a `SourceColumn` property with a schema binding of `TabularColumnName`.


## Performance

* Fixed issue where an ICE would be generated on builds with warnings in some cases.

## Provider Support

* Fixed data type mappings for Excel `GetDatabaseSchema()`.


## Biml Language

* Added ColumnStore and ColumnStoreArchive to `TableCompressionType` enumeration.


## Bundles

* Fixes for bundle toggle files settings and trial licensing


## Project Settings and Command Line Options (CL)

* Updated license key specification on command line to use the entered license key, even if it is not successfully saved to the registry. This will help in CL and automation scenarios where proxy accounts are used


## BimlScript

* Fixed autocomplete bug with BimlScript `global/applytocallbimlscript` directive attribute, `active` was showing up twice in the autocompletion list, and `applytocallbimlscript` was not showing up at all


## Miscellaneous

* Added PDF version of the EULA
