---
uid: bimlflex-metadata-static-values
title: BimlFlex Metadata Entity Static Values
summary: Documentation of the management of metadata values
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Metadata Types

BimlFlex has a number of internal static types that are used to classify metadata. They can also be referred to as an enumeration type (or enum) and represent the constant values that can be used in the App.

## Attribute Types

[!include[Attribute Types](static-data/_enum-attribute-type.md)]

## Change Types

[!include[Change Types](static-data/_enum-change-type.md)]

## Configuration Attributes

| Code | Value |
| ---- | ----- |
| IGN | Ignore |
| DER | Derived |
| SRC | Source |
| DEF | Default |
| TGT | Target |
| HSH | Hash |

## Connection Types

[!include[Change Types](static-data/_enum-connection-type.md)]

## Data Types

| Code | Value |
| ---- | ----- |
| AnsiString | AnsiString |
| AnsiStringFixedLength | AnsiStringFixedLength |
| Binary | Binary |
| Boolean | Boolean |
| Byte | Byte |
| Currency | Currency |
| Date | Date |
| DateTime | DateTime |
| DateTime2 | DateTime2 |
| DateTimeOffset | DateTimeOffset |
| Decimal | Decimal |
| Double | Double |
| Guid | Guid |
| Int16 | Int16 |
| Int32 | Int32 |
| Int64 | Int64 |
| Object | Object |
| SByte | SByte |
| Single | Single |
| String | String |
| StringFixedLength | StringFixedLength |
| Time | Time |
| UInt16 | UInt16 |
| UInt32 | UInt32 |
| UInt64 | UInt64 |
| VarNumeric | VarNumeric |
| Xml | Xml |
| hierarchyid | HierarchyId |
| geometry | Geometry |
| geography | Geography |
| smallmoney | SmallMoney |

## Parameter Data Types

| Code | Value |
| ---- | ----- |
| Boolean | Boolean |
| Byte | Byte |
| Char | Char |
| DateTime | DateTime |
| DBNull | DBNull |
| Decimal | Decimal |
| Double | Double |
| Empty | Empty |
| Int16 | Int16 |
| Int32 | Int32 |
| Int64 | Int64 |
| Object | Object |
| SByte | SByte |
| Single | Single |
| String | String |

## Integration Stages

[!include[Integration Stages](static-data/_enum-integration-stage.md)]

## Integration Templates

[!include[Integration Stages](static-data/_enum-integration-template.md)]

## Object Types

| Code | Value |
| ---- | ----- |
| TBL | Table |
| TBV | View |
| DIM | Dimension |
| DMV | Dimension View |
| FCT | Fact |
| FCV | Fact View |
| SAT | Satellite |
| LNK | Link |
| HUB | Hub |
| LSAT | Link Satellite |
| REF | Reference |
| PIT | Point In Time |
| BRG | Bridge |
| RSAT | Reference Satellite |
| FIL | Flat File |
| EXT | External |
| TCA | CDC All |
| TCL | CDC Last |
| TCT | Change Tracking |

## Model Object Types

| Code | Value |
| ---- | ----- |
| HUB | Hub |
| LNK | Link |
| SAT | Satellite |
| SAL | Same As Link |
| HAL | Hierarchy Link |
| REF | Reference |
| RSAT | Reference Satellite |
| IGN | Ignore |
| EXC | Exclude DV |

## System Types

[!include[Connection Types](static-data/_enum-system-type.md)]

## Attribute Keys

| Code | Value |
| ---- | ----- |
| SettingValue | SettingValue |
| IsDrivingKey | IsDrivingKey |
| CreateBridge | CreateBridge |
| CreatePIT | CreatePIT |
| DistributeRoundRobin | DistributeRoundRobin |
| DistributeReplicate | DistributeReplicate |
| RowStoreIndex | RowStoreIndex |
| RowCountSum | RowCountSum |
| ProtectionLevel | ProtectionLevel |
| SqlStartDelimiter | SqlStartDelimiter |
| SqlEndDelimiter | SqlEndDelimiter |
| SqlIgnoreSchema | SqlIgnoreSchema |
| SqlHashPattern | SqlHashPattern |
| SqlConcatenatePattern | SqlConcatenatePattern |
| SqlStringExtractPattern | SqlStringExtractPattern |
| SqlStringLoadPattern | SqlStringLoadPattern |
| SqlDateExtractPattern | SqlDateExtractPattern |
| SqlDateLoadPattern | SqlDateLoadPattern |
| SqlStringDataType | SqlStringDataType |
| SqlAnsiStringDataType | SqlAnsiStringDataType |

## Attribute Values

| Code | Value |
| ---- | ----- |
| EncryptSensitiveWithUserKey | EncryptSensitiveWithUserKey |

## Attribute Properties

| Code | Value |
| ---- | ----- |
| IsPrimaryHub,AddKey | IsPrimaryHub,AddKey |
| IsPrimaryHub | IsPrimaryHub |
| AddKey | AddKey |
