---
uid: bimlflex-data-type-mappings
title: BimlFlex Data Type Mappings
---
# Data Type Mappings Editor

BimlFlex **Data Type Mappings** provide the ability to map Data Types from a source system to another more standardized data type.  This can be either a conversion of the Data Type entirely, such as a `int` to a `bigint`, the expansion of an existing Data Type, such as `nvarchar(13)` to `nvarchar(20)`, or the combination of both, such as `char(1)` to `nvarchar(10)`.  

## Editor Overview

The following sections describe the UI elements of the Data Type Mappings Editor and how they are used to author and manage BimlFlex **Data Type Mappings**.

**Data Type Mappings Editor**  
<img src="images/bimlflex-app-data-type-mappings.png" style="border: 1px solid #CCC;" title="Data Type Mappings Editor" />

## Action Buttons

<br/>
<img src="images/bimlflex-app-data-type-mappings-actions.png" style="border: 1px solid #CCC;" title="AData Type Mapping Editor Action Buttons" />

|Icon|Action|Description|
|-|-|-|
|<div class="icon-col m-5"><img src="images/svg-icons/save.svg" /></div>|<span class="nowrap-col m-5">Save</span>|This will save the currently set of staged changes.  The **Save** button is only enabled if the **Data Type Mapping** has changes staged and there are no major validation issues with the current **Data Type Mapping** properties.|
|<div class="icon-col m-5"><img src="images/svg-icons/refresh.svg" /></div>|<span class="nowrap-col m-5">Refresh</span>|This will trigger a refresh of the metadata for the selected **Data Type Mapping**.|
|<div class="icon-col m-5"><img src="images/svg-icons/datatype-mappings.svg" /></div>|<span class="nowrap-col m-5">Apply Data Type Mappings</span>|Brings up the [Apply Data Type Mappings Dialog](#apply-data-type-mappings-dialog-box) to apply all **Data Type Mappings** to a specified `Record Source`.  Note that this is the complete set of **Data Type Mappings** and not just the record that was previously selected.|
|<div class="icon-col m-5"><img src="images/bimlflex-app-action-switch.png" /></div>|<span class="nowrap-col m-5">Deleted</span>|This will soft delete the currently selected **Data Type Mapping**.  This will remove the **Data Type Mapping** from all processing and it will be excluded from all validation.|

[//]: # (TODO: Find a switch SVG to use for Deleted)

## Additional Dialogs

[!include[Apply Data Type Mappings Dialog Box](_dialog-apply-data-type-mappings.md)]

## Fields

<br/>
<img src="images/bimlflex-app-data-type-mappings-fields.png" style="border: 1px solid #CCC;" title="Data Type Mappings Fields" />

|Field|Description|
|-|-|
| Data Type Mapping|Name of the **Data Type Mapping**.|
| Mapped To Data Type|The **Data Type Mapping** this type is mapped to.  If this value is populated then this **Data Type Mapping** will use the values specified by the *Mapped To Data Type*.
| Data Type | The type of data stored in this column using the [Unified System Types](#data-types).  Additional logic is required to cater for data types with a 'CustomType' like `hierarchyid`. |
| Default | The default value that should be used when a value is not received.  Be sure to verify that the value listed her is valid for the specified *Length*, *Precision* or *Scale*.|
| Length |Only applicable for a *Data Type* that requires a this specification.  If the **Data Type Mapping** does not have a *Mapped To Data Type* and *Is Master* then this value represents the value to be used when a column is created using this **Data Type Mapping**.  If the **Data Type Mapping** has a *Mapped To Data Type* then it is the maximum value that will included when mapping to the *Mapped To Data Type*.  Not that when there are multiple mappings for the same *Data Type* the lowest values are checked first.|
| Precision |Only applicable for a *Data Type* that requires a this specification.  If the **Data Type Mapping** does not have a *Mapped To Data Type* and *Is Master* then this value represents the value to be used when a column is created using this **Data Type Mapping**.  If the **Data Type Mapping** has a *Mapped To Data Type* then it is the maximum value that will included when mapping to the *Mapped To Data Type*.  Not that when there are multiple mappings for the same *Data Type* the lowest values are checked first.|
| Scale |Only applicable for a *Data Type* that requires a this specification.  If the **Data Type Mapping** does not have a *Mapped To Data Type* and *Is Master* then this value represents the value to be used when a column is created using this **Data Type Mapping**.  If the **Data Type Mapping** has a *Mapped To Data Type* then it is the maximum value that will included when mapping to the *Mapped To Data Type*.  Not that when there are multiple mappings for the same *Data Type* the lowest values are checked first.|
| Ordinal |This value is used to determine the default sort order when populating the navigation/value pane on the right side of the screen.|
| System Type | If unspecified the **Data Type Mapping** will be applied to all system types.  When specified, defines the *System Type* that is required in order to apply the **Data Type Mapping**.  This is commonly used to control the mapping of more complex data types such as Date and DateTime variants as syntax and functions differ from system to system. Must be a valid [System Type](#system-types).|
| SQL Source Expression |SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements. Example, `CONVERT(VARCHAR(27), @@this, 121)`|
| SSIS Dataflow Expression |The expression used to calculate the value of the derived column via SSIS.  SSIS expression syntax is used. Example, `(DT_DBTIMESTAMP2, 7)([DTM_@@this])` |
| ADF Dataflow Expression | The expression used to calculate the value of the derived column via ADF.  ADF expression syntax is used.|
| SQL Target Expression | The SQL expression used to extend target queries. Generally used for source type casting and case statements. Example, `CONVERT(VARCHAR(27), @@this, 121)`|
| SQL Target To String | This SQL expression is used when a datatype needs to be converted to a string.|
| SQL Target To Data Type | This SQL expression is used when a string datatype needs to be converted to another datatype.|
| Description |Optional metadata to provide description.|
| Column Alias |Maps to a **Columns** *Column Alias* field. Example, `DTM_@@this`|
| Is Master |If `true` this **Data Type Mapping** may be used as a *Mapped To Data Type*.|
| Convert Source Type |

[//]: # (TODO: Create or link to a Unified System Types guide. [unified-system-types.md])
[//]: # (TODO: Outline or link to configuration of a Data Type = 'CustomType'.)

[//]: # (TODO: Circle back and outline some examples of the follow: Proper use of[Mapped To Data Type], Examples of using proper and improper [DEFAULT], Example for each 'Expression', examples of each 'SQL' column, [Column Alias] usage, Ranged values and qualifying mapping i.e. [Length], [Precision], [Scale].  Once completed set an Anchor Link in the table above.)

[//]: # (### Detailed Examples)

[//]: # (Examples that can better communicate usage of more complex concepts are included below.  )

[//]: # (#### Ranged Values Detailed Examples)

[//]: # (TODO: Create a more detail example of [Length] usage and qualification.)

## Allowed Values

[!include[Data Types](_enum-data-type.md)]

[!include[System Types](_enum-system-type.md)]
