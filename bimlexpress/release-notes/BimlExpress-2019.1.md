# BimlExpress 2019 R1 Release Notes

Significant changes between BimlExpress 2018 R3 and BimlExpress 2019 R1

## 2019 Support
* Added SqlServer 2019 support. 
* Added Visual Studio 2019 and SSIS 2019 support. 

## SSIS

* Removed NoXML validation for `SQL Server` index nodes as they can now have XML datatypes.
* Fixed bug where `Annotations` created on `OutputBuffer` columns were not being persisted.
* Fixed bug where `Container` property `TransactionOption` was being evaluated as an object rather than an `int32`.
* Fixed typo in `MergeJoin` error message.
* Added fix to correctly emit `BlobColumns` in `BufferWrapper.cs` for ScriptProjects. 
* Removed `Codepage` property from FlatFileFormat Columns, as the codepage gets set on the `FlatFileFormat` and is not configurable at the column level.
* Fixed bug in `GetQuerySchema()`, where column nodes were not correctly reading `ComputedText` and `IsNullable` properties.
