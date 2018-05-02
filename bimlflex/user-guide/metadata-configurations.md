---
uid: bimlflex-metadata-configurations
title: Configurations
---
# Metadata and framework configurations in BimlFlex

This document outlines the metadata and framework configurations available in BimlFlex.

These configurations drive the behavior of the BimlFlex product.

By changing them the produced artifacts can adapt to support requirements for file locations, naming conventions, data conventions etc.

The Configuration defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors. Align these settings with the organizations best practices and environmental requirements.

The Configurations are available in the Configurations sheet in the BimlFlex Excel Add-in.

![Configurations Sheet](images/bimlflex-ss-v5-excel-configurations-sheet.png "Configurations Sheet")

## Metadata column overview

|Key|Value|
|--- |--- |
|Configuration Key|the Configuration Key, the internal key BimlFlex refers to, cannot be changed|
|Configuration Value|the Configured Value, can be updated to support a different design pattern or behaviour|
|Configuration Datatype|the data type the configuration Value uses. Needs to be a valid data type definition|
|Configuration Default|the Configuration Key’s Default Value|
|Configuration Grouping|BimlFlex Internal Grouping of configurations|
|Configuration Order|BimlFlex Internal Ordering of configurations|
|SSIS Expression|the SSIS Expression used to derive the value. Needs to be a valid SSIS Expression. Uses the shorthand @@this to define the current entity|
|Is Nullable|Defines If the attribute is nullable Valid Enumeration {Empty, Y, N}|
|Staging Attribute|Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}|
|Persistent Staging Attribute|Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}|
|Hub Attribute|Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}|
|Satellite Attribute|Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}|
|Link Attribute|Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}|
|Dim Attribute|Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}|
|Fact Attribute|Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}|
|Description|An optional description for custom attributes or definitions. The default configurations are described in this document|
|Is Deleted|Flag to set if a custom attribute has been entered but is now no longer needed and should be considered deleted. Valid Enumeration {Empty, Y, N}|

## Standard configurations

### RowEffectiveFromDate

#### Description

The **RowEffectiveFromDate** defines the start of time for timelines in the data warehouse. The `DateTime2(7)` datatype supports a wider range of dates than traditional DateTime meaning starting on 1 Jan 0001 will support most use cases. If a specific start DateTime for timelines is needed, such as to support an existing design template, this can be updated to support it. Unless there is a good reason to change it, it is recommended to keep the default.

The SSIS Expression is used in the Staging and Persistent Staging loads to derive the RowEffectiveFromDate from the `@[User::ParentBatchStartTime]` variable. This is inserted into the Data Flow to give each row its effectiveness date. The default configuration is to use the start date time of the parent Batch for this column.

An example of implementation usage for the configuration default is in the Default constraint of this table creation script for the Address staging table from the AdventureWorks LT Source:

```sql
IF NOT EXISTS (SELECT * FROM sys.default_constraints WHERE [parent_object_id] = OBJECT_ID(N'[AWLT].[Address]') AND [name] = 'DF_Address_FlexRowEffectiveFromDate')

ALTER TABLE [AWLT].[Address] ADD CONSTRAINT [DF_Address_FlexRowEffectiveFromDate] DEFAULT ('0001-01-01 00:00:00.000') FOR [FlexRowEffectiveFromDate]
```

#### Example

See defaults

#### Valid Value

Depends on configuration attribute

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Key|RowEffectiveFromDate|
|Configuration Value|FlexRowEffectiveFromDate|
|Configuration Datatype|DataType="DateTime2" Scale="7"|
|Configuration Default|0001-01-01 00:00:00.000|
|Ssis Expression|@[User::ParentBatchStartTime]|
|Staging Attribute|Derived|
|Persistent Staging Attribute|Derived|
|Hub Attribute|Source|
|Satellite Attribute|Source|
|Link Attribute|Source|

### RowEffectiveToDate

#### Description

The **RowEffectiveToDate** defines the end of time for timelines in the data warehouse. The DateTime2(7) datatype supports a wider range of dates than traditional DateTime meaning ending on 31 Dec 9999 will support most use cases. If a specific start DateTime for timelines is needed, such as to support an existing design template, this can be updated to support it. Unless there is a very good reason to change it, it is recommended to keep the default.

The SSIS Expression is used in the Staging and Persistent Staging loads to derive the RowEffectiveToDate from the `(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"` expression. This is inserted into the Data Flow to give each row its end date. The default configuration is to use the end of timeline definition.

An example of implementation usage for the configuration default is in the Default constraint of this table creation script for the Address staging table from the AdventureWorks LT Source:

```sql
IF NOT EXISTS (SELECT * FROM sys.default_constraints WHERE [parent_object_id] = OBJECT_ID(N'[AWLT].[Address]') AND [name] = 'DF_Address_FlexRowEffectiveToDate')

ALTER TABLE [AWLT].[Address] ADD CONSTRAINT [DF_Address_FlexRowEffectiveToDate] DEFAULT ('9999-12-31') FOR [FlexRowEffectiveToDate]
```

#### Example

See defaults

#### Valid Value

Depends on configuration attribute

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowEffectiveToDate|
|Configuration Datatype|DataType="DateTime2" Scale="7"|
|Configuration Default|9999-12-31|
|Ssis Expression|`(DT_DBTIMESTAMP2, 7)"9999-12-31"`|
|Staging Attribute|Derived|
|Persistent Staging Attribute|Derived|
|Satellite Attribute|Derived|

### RowLastSeenDate

#### Description

The **RowLastSeenDate** defines the default SSIS Expression used to derive the RowLastSeen attribute

#### Example

```
(DT_DBTIMESTAMP2, 7)"1900-01-01"
```

#### Valid Value

A valid SSIS expression and data type.

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowLastSeenDate|
|Configuration Datatype|DataType="DateTime2" Scale="7"|
|Ssis Expression|`(DT_DBTIMESTAMP2, 7)"1900-01-01"`|

### RowStartDate

#### Description

The **RowStartDate** defines the start of time definition for a row in the data warehouse. This attribute is used to define the timeline in use, from start of time to end of time.

#### Example

```
(DT_DBTIMESTAMP2, 7)GETDATE()
```

#### Valid Value

A valid SQL, SSIS Expression and data type that defines a date time

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowStartDate|
|Configuration Datatype|DataType="DateTime2" Scale="7"|
|Configuration Default|1900-01-01|
|Ssis Expression|`(DT_DBTIMESTAMP2, 7)GETDATE()`|
|Dim Attribute|Derived|

### RowEndDate

#### Description

The **RowEndDate** defines the end of time definition for a row in the data warehouse. This attribute is used to define the timeline in use, from start of time to end of time

#### Example

```
(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"
```

#### Valid Value

A valid SQL, SSIS Expression and data type that defines a date time

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowEndDate|
|Configuration Datatype|DataType="DateTime2" Scale="7"|
|Ssis Expression|`(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"`|
|Satellite Attribute|Derived|

### RowAuditId

#### Description

The **RowAuditId** defines the derivation pattern for the audit value for a row. The default derives the audit id from the ExecutionID user variable. This value will be added to all rows as the audit id, default column name: `[FlexRowAuditId]`

#### Example

```
@[User::ExecutionID]
```

#### Valid Value

A valid SSIS Expression and data type, attributes as per their enumerations

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowAuditId|
|Configuration Datatype|DataType="Int64"|
|Ssis Expression|`@[User::ExecutionID]`|
|Staging Attribute|Derived|
|Persistent Staging Attribute|Derived|
|Hub Attribute|Derived|
|Satellite Attribute|Derived|
|Link Attribute|Derived|
|Dim Attribute|Derived|
|Fact Attribute|Derived|

### RowChangeType

#### Description

The **RowChangeType** defines the string representation of the change type when inserting new rows into the data warehouse.

#### Example

```
I
```

#### Valid Value

A Valid SSIS Expression

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowChangeType|
|Configuration Datatype|DataType="AnsiString" Length="1"|
|Configuration Default|I|
|Ssis Expression|`(DT_STR,10,1252)"I"`|
|Staging Attribute|Derived|
|Persistent Staging Attribute|Derived|
|Satellite Attribute|Source|

### RowRecordSource

#### Description

The **RowRecordSource** defines the record source for the data. This is a required attribute for Data Vault sources and normally defined in the connections definition for external sources loaded into the Data Vault

#### Example

```
(DT_STR,10,1252)"@@this"
```

#### Valid Value

A valid SSIS Expression

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowRecordSource|
|Configuration Datatype|DataType="AnsiString" Length="10"|
|Configuration Default|FLX|
|Ssis Expression|`(DT_STR,10,1252)"@@this"`|
|Staging Attribute|Derived|
|Persistent Staging Attribute|Derived|
|Hub Attribute|Source|
|Satellite Attribute|Source|
|Link Attribute|Source|

### RowSourceId

#### Description

The **RowSourceId** defines the sequence number of the data row within the set. This is used to identify all rows in order within a batch.

#### Example

```
-1
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowSourceId|
|Configuration Datatype|DataType="Int32"|
|Configuration Default|-1|
|Ssis Expression|true|
|Staging Attribute|Derived|
|Persistent Staging Attribute|Derived|
|Satellite Attribute|Source|

### RowIsCurrent

#### Description

The **RowIsCurrent** defines the current row flag for timelined data, such as for satellites. The RowIsCurrent is the definition for how the current row is defined in the data.

#### Example

```
true
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowIsCurrent|
|Configuration Datatype|DataType="Boolean"|
|Configuration Default|1|
|Ssis Expression|true|
|Staging Attribute|Derived|
|Persistent Staging Attribute|Derived|
|Satellite Attribute|Derived|
|Dim Attribute|Derived|

### RowIsDeleted

#### Description

The **RowIsDeleted** defines the derivation pattern to if a row is deleted or not

#### Example

```
false
```

#### Valid Value

A valid SSIS expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowIsDeleted|
|Configuration Datatype|DataType="Boolean"|
|Configuration Default|`(DATEPART("ms", GETDATE())%2)==1?TRUE:FALSE`|
|Ssis Expression|false|
|IsNullable|Y|
|Staging Attribute|Derived|
|Persistent Staging Attribute|Derived|
|Satellite Attribute|Source|

### RowIsInferred

#### Description

The **RowIsInferred** defines if the row is inferred

#### Example

```
false
```

#### Valid Value

SSIS Expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowIsInferred|
|Configuration Datatype|DataType="Boolean"|
|Configuration Default|1|
|Ssis Expression|false|
|IsNullable|Y|
|Dim Attribute|Derived|

### RowHash

#### Description

The **RowHash** defines the expression used to derive a full row hash. The default uses the combination of a forward hash and a backwards hash to minimise the risk for hash collisions. The default hashing mechanism uses the Varigence Custom SSIS Components.

#### Example

```
[vck@@this1]+[vck@@this2]
000000000000000000000000000000000000000000000000000000000000000000000000000000
```

#### Valid Value

A Valid SSIS Expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowHash|
|Configuration Datatype|DataType="AnsiString" Length="80"|
|Configuration Default|000000000000000000000000000000000000000000000000000000000000000000000000000000|
|Ssis Expression|[vck@@this1]+[vck@@this2]|
|IsNullable|Y|
|Staging Attribute|Hash|
|Persistent Staging Attribute|Hash|

### RowHashKey

#### Description

The **RowHashKey** defines the expression used to derive a key hash. The default hashing mechanism uses the Varigence Custom SSIS Components.

#### Example

```
[vck@@this1]
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowHashKey|
|Configuration Datatype|DataType="AnsiString" Length="40"|
|Configuration Default|000000000000000000000000000000000000000|
|Ssis Expression|[vck@@this1]|
|IsNullable|Y|
|Staging Attribute|Hash|
|Persistent Staging Attribute|Hash|

### RowHashSat

#### Description

The **RowHashSat** defines the expression used to derive a satellite attribute hash. The default hashing mechanism uses the Varigence Custom SSIS Components

#### Example

```
[@@this1]
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowHashSat|
|Configuration Datatype|DataType="AnsiString" Length="40"|
|Configuration Default|000000000000000000000000000000000000000|
|Ssis Expression|[vck@@this1]|
|IsNullable|Y|
|Dim Attribute|Hash|

### RowHashType1

#### Description

The **RowHashType1** defines the expression used to derive a forward hash. The default hashing mechanism uses the Varigence Custom SSIS Components

#### Example

```
[vck@@this1]
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowHashType1|
|Configuration Datatype|DataType="AnsiString" Length="40"|
|Configuration Default|000000000000000000000000000000000000000|
|Ssis Expression|[vck@@this1]|
|IsNullable|Y|
|Dim Attribute|Hash|

### RowHashType2

#### Description

The **RowHashType2** defines the expression used to derive a backward hash. The default hashing mechanism uses the Varigence Custom SSIS Components

#### Example

```
[vck@@this1]
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowHashType2|
|Configuration Datatype|DataType="AnsiString" Length="40"|
|Configuration Default|000000000000000000000000000000000000000|
|Ssis Expression|[vck@@this1]|
|IsNullable|Y|
|Dim Attribute|Hash|

### RowLoadSequence

#### Description

The **RowLoadSequence** defines the data type for the Load Sequence organiser.

#### Example

```
DataType="Int32"
```

#### Valid Value

A valid sortable integer data type

#### Default Metadata information

|Key|Value|
|--- |--- |
|Configuration Value|FlexRowLoadSequence|
|Configuration Datatype|DataType="Int32"|