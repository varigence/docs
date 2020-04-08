---
uid: bimlflex-source-excel-plus
title: BimlFlex COZYROC Excel Plus Source
---
# BimlFlex COZYROC Excel Plus Source

BimlFlex can load from Excel source files using the COZYROC Excel Plus SSIS Component

## Getting Started

To load an Excel source file through BimlFlex, first install the COZYROC custom component, then add the metadata for the source file as described below

## Metadata

To control the load of Excel source data, use the following metadata settings

Worksheet

Use the Schema property of the source Object to specify the Worksheet where the Excel has the data to be extracted

Sample: `Sheet1`

FirstRowHasColumnName

Use the `FirstRowHasColumnName` property of the source Object to specify if the Excel table has headers that should be excluded from the import

Sample: `True`

Use the `OverrideSql` property of the source Object to specify the Excel table range to import

Sample: `1,1,5,-1`

This specifies the starting cell (1,1) and the range (column 1-5, whole table downwards)

Connection String

Connection String and file specification. Uses standard COZYROC Excel Plus syntax for management of file location, recalculation, formats etc.

Sample: `ExcelFilePath=c:\BimlFlex\Import\MyExcelFile.xlsx;FormatType=Auto;​Recalculate=False;DateTimeFormat=;RetainSameConnection=True;`

## More Information

More information on the COZYROC Excel Plus SSIS source component can be found here: https://www.cozyroc.com/ssis/excel-source
