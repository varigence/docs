# BimlExpress 2019 R1 Release Notes

Significant changes between BimlExpress 2018 R3 and BimlExpress 2019 R1


## SSIS
* Removed NoXML validation for `SQL Server` index nodes as they can now have XML datatypes.
* Fixed bug where `Annotations` created on `OutputBuffer` columns were not being persisted.
* Fixed bug where `Container` property `TransactionOption` was being evaluated as an object rather than an `int32`.
* Fixed typo in `MergeJoin` error message.
* Fixed bug where `DataStreamingDestination` and `BalancedDataDistributor` components were incorrectly classified as third party components, making them unavailable to BimlExpress users.
