---
uid: bimlflex-data-type-mappings
title: BimlFlex Data Type Mappings
---
# Data Type Mappings Editor

BimlFlex `Data Type Mappings` provide the ability to map Data Types from a source system to another more standardized data type.  This can be either a conversion of the Data Type entirely, such as a `int` to a `bigint`, the expansion of an existing Data Type, such as `nvarchar(13)` to `nvarchar(20)`, or the combination of both, such as `char(1)` to `nvarchar(10)`.  

## Editor Overview

The following sections describe the UI elements of the Data Type Mappings Editor and how they are used to author and manage BimlFlex `Data Type Mappings`.

**Data Type Mappings Editor**  
![BimlFlex App - Batches](images/bimlflex-app-data-type-mappings.png "BimlFlex App - Batches")

### Action Buttons

![BimlFlex App - Batches - Details Tab - Actions](images/bimlflex-app-data-type-mappings-actions.png "BimlFlex App - Batches - Details Tab - Actions")

|Icon|Action|Description|Additional Dialog|
|-|-|-|-|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/save.svg" /></div>|<span class="nowrap-col m-5">Save</span>|This will save the currently set of staged changes.  The [Save] button is will only enable if the `Batch` has changes staged and there are no major validation issues with the current `Batch` properties.||
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/refresh.svg" /></div>|<span class="nowrap-col m-5">Refresh</span>|This will trigger a refresh of the metadata for the selected `Data Type Mapping`.||
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/svg-icons/datatype-mappings.svg" /></div>|<span class="nowrap-col m-5">Apply Data Type Mappings</span>|Brings up the dialog box to apply all `Data Type Mappings` to a specified `Record Source`.  Note that this is the complete set of `Data Type Mappings` and not just the record that was previously selected.|[Apply Data Type Mappings](#Apply-Data-Type-Mappings-Dialog-Box)|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="images/bimlflex-app-action-switch.png" /></div>|<span class="nowrap-col m-5">Deleted</span>|This will `soft delete` the currently selected `Data Type Mapping`.  This will remove the `Data Type Mapping` from all processing and it will be excluded from all validation.||

[//]: # (TODO: Find a switch SVG to use for Deleted)

### Additional Dialogs

[!include[Apply Data Type Mappings Dialog Box](_dialog-apply-data-type-mappings.md)]

### Fields

![Data Type Mappings Fields](images/bimlflex-app-data-type-mappings-fields.png "Data Type Mappings Fields")


|Field|Description|Validation|Example|
|-|-|-|-|
|[Data Type Mapping]|Name of the `Data Type Mapping`.|String|
|[Mapped To Data Type]|The `Data Type Mapping` this type is mapped to.  If this value is populated then this `Data Type Mapping` will use the values specified by the [Mapped To Data Type].|Dropdown (Existing `Data Type Mappings`)|
|[Data Type]|The type of data stored in this column using the [[Unified System Types]](unified-system-types.md).  Additional logic is required to cater for data types with a 'CustomType' like [hierarchyid]|[Constrained-List](#Data-Type-Constrained-List)|
|[Default]|The DEFAULT value that should be used when a value is not received.  Be sure to verify that the value listed her is valid for the specified [Length], [Precision] or [Scale].|String|
|[Length]|Only applicable for a [Data Type] that requires a this specification.  If the `Data Type Mapping` does not have a [Mapped To Data Type] and [Is Master] then this value represents the value to be used when a column is created using this `Data Type Mapping`.  If the `Data Type Mapping` has a [Mapped To Data Type] then it is the maximum value that will included when mapping to the [Mapped To Data Type].  Not that when there are multiple mappings for the same [Data Type] the lowest values are checked first.|Integer||
|[Precision]|Only applicable for a [Data Type] that requires a this specification.  If the `Data Type Mapping` does not have a [Mapped To Data Type] and [Is Master] then this value represents the value to be used when a column is created using this `Data Type Mapping`.  If the `Data Type Mapping` has a [Mapped To Data Type] then it is the maximum value that will included when mapping to the [Mapped To Data Type].  Not that when there are multiple mappings for the same [Data Type] the lowest values are checked first.|Integer||
|[Scale]|Only applicable for a [Data Type] that requires a this specification.  If the `Data Type Mapping` does not have a [Mapped To Data Type] and [Is Master] then this value represents the value to be used when a column is created using this `Data Type Mapping`.  If the `Data Type Mapping` has a [Mapped To Data Type] then it is the maximum value that will included when mapping to the [Mapped To Data Type].  Not that when there are multiple mappings for the same [Data Type] the lowest values are checked first.|Integer||
|[Ordinal]|This value is used to determine the default sort order when populating the navigation/value pane on the right side of the screen.|Integer|
|[System Type]|If unspecified the `Data Type Mapping` will be used/applied to all system types.  When specified, defines the [System Type] that is required in order to apply the `Data Type Mapping`.  This is commonly used to control the mapping of more complex data types such as Date and DateTime variants as syntax and functions differ from system to system.|[Constrained-List](#System-Type-Constrained-List)|
|[SQL Source Expression]|SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements.|String|`CONVERT(VARCHAR(27), @@this, 121)`|
|[SSIS Dataflow Expression]|The expression used to calculate the value of the derived column via SSIS.  SSIS expression syntax is used.|String|`(DT_DBTIMESTAMP2, 7)([DTM_@@this])`|
|[ADF Dataflow Expression]|The expression used to calculate the value of the derived column via ADF.  ADF expression syntax is used.|String||
|[SQL Target Expression]|The SQL expression used to extend target queries. Generally used for source type casting and case statements.||`CONVERT(VARCHAR(27), @@this, 121)`|
|[SQL Target To String]|||
|[SQL Target To Data Type]|||
|[Description]|||
|[Column Alias]|||
|[Is Master]|If `true` this `Data Type Mapping` may be used as a [Mapped To Data Type].|Boolean|
|[Convert Source Type]||Boolean|

[//]: # (TODO: Get clarification on [Convert Source Type], [Column Alias], [SQL Source Expression], [SQL Target Expression], [SQL Target To Data Type] and [SQL Target To String].)
[//]: # (TODO: Create or link to a Unified System Types guide.)
[//]: # (TODO: Outline or link to configuration of a Data Type = 'CustomType'.)

[//]: # (TODO: Circle back and outline some examples of the follow: Proper use of [Mapped To Data Type], Examples of using proper and improper [DEFAULT], Example for each 'Expression', examples of each 'SQL' column, [Column Alias] usage, Ranged values and qualifying mapping i.e. [Length], [Precision], [Scale].  Once completed set an Anchor Link in the table above.)

[//]: # (### Detailed Examples)

[//]: # (Examples that can better communicate usage of more complex concepts are included below.  )

[//]: # (#### Ranged Values Detailed Examples)

[//]: # (TODO: Create a more detail example of [Length] usage and qualification.)

### Constrained Lists

[!include[Data Type Constrained List](_enum-data-type.md)]

[!include[System Type Constrained List](_enum-system-type.md)]
