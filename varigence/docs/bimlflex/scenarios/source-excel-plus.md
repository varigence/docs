---
title: BimlFlex COZYROC Excel Plus Source
description: Documentation on loading Excel source files using COZYROC Excel Plus SSIS Component within BimlFlex
tags: [BimlFlex, Conceptual]
---
# BimlFlex COZYROC Excel Plus Source

BimlFlex can load from Excel source files using the COZYROC Excel Plus SSIS Component

## Getting Started

To load an Excel source file through BimlFlex, first install the COZYROC custom component, then add the metadata for the source file as described below.

This source is available for Projects using the **SSIS: Source -> Target** Integration Template.

## Metadata

To control the load of Excel source data, use the following metadata settings.

### Connection

Add a new connection to the Excel file using the Connection Type **Custom Component** and System Type **COZYROC Excel File**

### Batches and Project

Add a separate Batch and a separate Project for the Excel file load. Set the Excel File Connection as the source for the Project.

### Object and Columns

Add the Object and Column information through the BimlFlex App.

### Worksheet

Use the Schema property of the source Object to specify the Worksheet where the Excel has the data to be extracted

Sample: `Sheet1`

### Column Names

Use the `FirstRowHasColumnName` property of the Source Object to specify if the Excel source table has headers that should be excluded from the import

Sample: `True`

### Table Range

Use the `OverrideSql` property of the source Object to specify the Excel table range to import

Sample: `1,1,5,-1`

This specifies the starting cell (1,1) and the range (column 1-5, whole table downwards)

### Connection String

Connection String and file specification. Uses standard COZYROC Excel Plus syntax for management of file location, recalculation, formats etc.

Sample: `ExcelFilePath=c:\BimlFlex\Import\MyExcelFile.xlsx;FormatType=Auto;​Recalculate=False;DateTimeFormat=;RetainSameConnection=True;`

## More Information

More information on the COZYROC Excel Plus SSIS source component can be found here: [https://www.cozyroc.com/ssis/excel-source](https://www.cozyroc.com/ssis/excel-source)
