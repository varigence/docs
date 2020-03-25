# BimlExpress 2020 R1 Release Notes

Significant changes between BimlExpress 2019 R1 and BimlExpress 2020 R1

## BimlExpress 
* Fixed issue with initial menu items not working after first click.
* Fixed bug where external file change would update active window rather than the correct file, if the edited file was not active.
* Fixed bug where sometimes the active document could have its contents replaced with the contents of a different edited document.
* Fix for a race condition that could cause BimlExpress to crash if files are opened very rapidly.
* Fix for issue where sometimes a file would not track as dirty and would not be able to be saved in the UI.
* Enable BimlStudio licensees to use their third party components in BimlExpress. 

## 2019 Visual Studio Support
* Improved background load of VS extension to get rid of slow down warning message.
* Removed following warning: "This extension was not loaded because it uses depracated synchronous autoload APIs" when starting BimlExpress in VS 16.3 or later.
* Solved issue where the first "previously open" code editor does not render correctly on startup.

## SSIS
* Fixed issue in `ScriptComponents` where they were not emitting the right Version number, causing build errors in SSIS.
* Added Direction property to `OLEDB Source` parameters.
* Fixed a typo where the word "will" was displayed as "WILL" in a few object descriptions.
* Improved logging for all components, conectionmanagers and containers.
* Fixed bug where `SsisDataTypeOverride` properties were not being used in column nodes.
* Fixed bug where `ExportColumn Task` columns had an invalid reference id. 
* Fixed casing issue on emission of VersionGUID for SSIS Projects
* Fixed issue where `Flat File` definitions did not support the use of brace-wrapped shorthand as in the SSDT designer. For example: {CRLF} in place of /r/n
* Fixed bug in `AdoNetConnection`, `AnalysisServices`, `ExcelConnection`, `OdbcConnection`, `OleDbConnection`, `OracleConnection` and `SqlServerPdwConnection` nodes where `RetainSameConnection` property was not being correctly emitted.
* Added support for `Teradata ODBC` provider
* Added root guard to XSD parsing to prevent root_ID column from being added to simple `XML Source` column collections.
* Improved `SMOConnection` support.
* Fixed bug that prevented packages with `CDCSplitter` components from building.



