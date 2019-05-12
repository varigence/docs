---
uid: bimlflex-metadata-configurations
title: BimlFlex Configurations
---
# Metadata and framework configurations

This document outlines the metadata and framework configurations available in BimlFlex.

These configurations drive the behavior of the BimlFlex product.

By changing them the produced artifacts can adapt to support requirements for file locations, naming conventions, data conventions etc.

The Configuration defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors. Align these settings with the organizations best practices and environmental requirements.

## Metadata column overview

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Key            | The Configuration Key, the internal key BimlFlex refers to, cannot be changed |
| Configuration Value          | The Configured Value, can be updated to support a different design pattern or behavior. For column names, change the name here to adhere to the required naming convention |
| Configuration Data Type      | The data type the configuration uses. Needs to be a valid data type definition |
| Configuration Default        | The Configuration Key's Default Value |
| Configuration Grouping       | BimlFlex Internal Grouping of configurations |
| Configuration Order          | BimlFlex Internal Ordering of configurations |
| SSIS Expression              | The SSIS Expression used to derive the value. Needs to be a valid SSIS Expression. Uses the shorthand `@@this` to define the current entity |
| Is Nullable                  | Defines If the attribute is nullable Valid Enumeration {`Empty`, `Y`, `N`} |
| Staging Attribute            | Should the configuration be included in the staging layer, and if so, how should it be created. Valid Enumeration {`Ignore`, `Derived`, `Source`, `Default`, `Target`, `Hash`} |
| Persistent Staging Attribute | Should the configuration be included in the persistent staging layer, and if so, how should it be created. Valid Enumeration {`Ignore`, `Derived`, `Source`, `Default`, `Target`, `Hash`} |
| Hub Attribute                | Should the configuration be included in Hubs, and if so, how should it be created. Valid Enumeration {`Ignore`, `Derived`, `Source`, `Default`, `Target`, `Hash`} |
| Satellite Attribute          | Should the configuration be included in Satellites, and if so, how should it be created. Valid Enumeration {`Ignore`, `Derived`, `Source`, `Default`, `Target`, `Hash`} |
| Link Attribute               | Should the configuration be included in Links, and if so, how should it be created. Valid Enumeration {`Ignore`, `Derived`, `Source`, `Default`, `Target`, `Hash`} |
| Dim Attribute                | Should the configuration be included in Dimensions, and if so, how should it be created. Valid Enumeration {`Ignore`, `Derived`, `Source`, `Default`, `Target`, `Hash`} |
| Fact Attribute               | Should the configuration be included in Facts, and if so, how should it be created. Valid Enumeration {`Ignore`, `Derived`, `Source`, `Default`, `Target`, `Hash`} |
| Description                  | An optional description for custom attributes or definitions. The default configurations are described in this document|
| Is Deleted                   | Flag to set if a custom attribute has been entered but is now no longer needed and should be considered deleted. Unused Settings should be left as is and not be deleted. Valid Enumeration {`Empty`, `Y`, `N`} |

## Standard configurations

### RowEffectiveFromDate

The `RowEffectiveFromDate` defines the start of time for timelines in the data warehouse. The `DateTime2(7)` data type supports a wider range of dates than traditional DateTime meaning starting on 1 Jan 0001 will support most use cases. If a specific start DateTime for timelines is needed, such as to support an existing design template, this can be updated to support it. Unless there is a good reason to change it, it is recommended to keep the default.

The SSIS Expression is used in the Staging and Persistent Staging loads to derive the RowEffectiveFromDate from the `@[User::ParentBatchStartTime]` variable. This is inserted into the Data Flow to give each row its effectiveness date. The default configuration is to use the start date time of the parent Batch for this column.

For scenarios where the data warehouse load should derive the effective date time from the source, it is possible to override this expression either through the global setting in the configurations sheet, or through an override in the attributes sheet. Scenarios where the override would be of interest are CDC source loads, where BimlFlex will reuse the transaction datetime from the CDC mechanism and when multiple changes to a record are included in a single sourcing set. By overriding the RowEffectiveFromDate, it is possible to keep the timeline of the source rows and the grain of the source without key collisions.

An example of implementation usage for the configuration default is in the Default constraint of this table creation script for the Address staging table from the AdventureWorks LT Source:

```sql
IF NOT EXISTS (SELECT * FROM sys.default_constraints WHERE [parent_object_id] = OBJECT_ID(N'[AWLT].[Address]') AND [name] = 'DF_Address_FlexRowEffectiveFromDate')

ALTER TABLE [AWLT].[Address] ADD CONSTRAINT [DF_Address_FlexRowEffectiveFromDate] DEFAULT ('0001-01-01 00:00:00.000') FOR [FlexRowEffectiveFromDate]
```

#### Example

Default, derives from the Parent Batch Start Time variable:

```SsisExpression
@[User::ParentBatchStartTime]
```

SSIS Expression based, if it is the initial load, use the Parent Batch Start Time variable, else derive the Effective From Date based on two other columns. This is used in CDC-type loads.

```SsisExpression
@[User::IsInitialLoad]?@[User::ParentBatchStartTime]:DATEADD("ms", ([__$rownumber]-1) * 4, [__$start_dt])
```

#### Valid Value

Depends on configuration attribute

#### Default Metadata information

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Key            | `RowEffectiveFromDate` |
| Configuration Value          | `FlexRowEffectiveFromDate` |
| Configuration Data Type      | `DataType="DateTime2" Scale="7"` |
| Configuration Default        | `0001-01-01 00:00:00.000` |
| SSIS Expression              | `@[User::ParentBatchStartTime]` |
| Staging Attribute            | `Derived` |
| Persistent Staging Attribute | `Derived` |
| Hub Attribute                | `Source` |
| Satellite Attribute          | `Source` |
| Link Attribute               | `Source` |

### RowEffectiveToDate

The `RowEffectiveToDate` defines the end of time for timelines in the data warehouse. The DateTime2(7) data type supports a wider range of dates than traditional DateTime meaning ending on 31 Dec 9999 will support most use cases. If a specific start DateTime for timelines is needed, such as to support an existing design template, this can be updated to support it. Unless there is a very good reason to change it, it is recommended to keep the default.

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

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Value          | `FlexRowEffectiveToDate` |
| Configuration Data Type      | `DataType="DateTime2" Scale="7"` |
| Configuration Default        | `9999-12-31` |
| SSIS Expression              | `(DT_DBTIMESTAMP2, 7)"9999-12-31"`|
| Staging Attribute            | `Derived` |
| Persistent Staging Attribute | `Derived` |
| Satellite Attribute          | `Derived` |

### RowLastSeenDate

The `RowLastSeenDate` defines the default SSIS Expression used to derive the RowLastSeen attribute. This is an optional Data Vault mechanism for deriving when a row was last seen from the source. This approach is not recommended. Delete detection can be achieved using alternate approaches.

#### Example

```SsisExpression
(DT_DBTIMESTAMP2, 7)"1900-01-01"
```

#### Valid Value

A valid SSIS Expression and data type.

#### Default Metadata information

| Key                     | Value |
| ----------------------- | ----- |
| Configuration Value     | `FlexRowLastSeenDate` |
| Configuration Data Type | `DataType="DateTime2" Scale="7"` |
| SSIS Expression         | `(DT_DBTIMESTAMP2, 7)"1900-01-01"` |

### RowStartDate

The `RowStartDate` defines the start of time definition for a row in the data warehouse. This attribute is used to define the timeline in use, from start of time to end of time for Dimensions.

#### Example

```SsisExpression
(DT_DBTIMESTAMP2, 7)GETDATE()
```

#### Valid Value

A valid SQL, SSIS Expression and data type that defines a date time

#### Default Metadata information

| Key                     | Value |
| ----------------------- | ----- |
| Configuration Value     | `FlexRowStartDate` |
| Configuration Data Type | `DataType="DateTime2" Scale="7"` |
| Configuration Default   | `1900-01-01` |
| SSIS Expression         | `(DT_DBTIMESTAMP2, 7)GETDATE()` |
| Dim Attribute           | `Derived` |

### RowEndDate

The `RowEndDate` defines the end of time definition for a row in the data warehouse. This attribute is used to define the timeline in use, row start effective date to row end effective date for Dimension Type 2 attributes.

#### Example

```SsisExpression
(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"
```

#### Valid Value

A valid SQL, SSIS Expression and data type that defines a date time

#### Default Metadata information

| Key                     | Value |
| ----------------------- | ----- |
| Configuration Value     | `FlexRowEndDate` |
| Configuration Data Type | `DataType="DateTime2" Scale="7"` |
| SSIS Expression         | `(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"` |
| Dim Attribute           | `Derived` |

### RowAuditId

The `RowAuditId` defines the derivation pattern for the audit value for a row. The default derives the audit id from the ExecutionID user variable. This value will be added to all rows as the audit id, default column name: `[FlexRowAuditId]`

#### Example

```SsisExpression
@[User::ExecutionID]
```

#### Valid Value

A valid SSIS Expression and data type, attributes as per their enumerations

#### Default Metadata information

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Value          | `FlexRowAuditId` |
| Configuration Data Type      | `DataType="Int64"` |
| SSIS Expression              | `@[User::ExecutionID]` |
| Staging Attribute            | `Derived` |
| Persistent Staging Attribute | `Derived` |
| Hub Attribute                | `Derived` |
| Satellite Attribute          | `Derived` |
| Link Attribute               | `Derived` |
| Dim Attribute                | `Derived` |
| Fact Attribute               | `Derived` |

### RowChangeType

The `RowChangeType` defines the string representation of the change type when inserting new rows into the data warehouse.

Note that the current BimlFlex default does not include this flag, should the data warehouse need to track change type, add it to the architecture.

To capture changes and deletes, please add the required logic to derive these values from the source column that indicates the change type. This can be done either in the configurations sheet as a global configuration or in the attributes sheet as a local object override.

#### Example

Fixed value:

```SsisExpression
I
```

SSIS Expression for CDC-type loads. This derives the code based on another column:

```SsisExpression
[__$operation]==1?"D":[__$operation]==2?"I":"U"
```

#### Valid Value

A Valid SSIS Expression

#### Default Metadata information

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Value          | `FlexRowChangeType` |
| Configuration Data Type      | `DataType="AnsiString" Length="1"` |
| Configuration Default        | `I` |
| SSIS Expression              | `(DT_STR,10,1252)"I"` |
| Staging Attribute            | `Derived` |
| Persistent Staging Attribute | `Derived` |
| Satellite Attribute          | `Source` |

### RowRecordSource

The `RowRecordSource` defines the record source for the data. This is a required attribute for Data Vault sources and normally defined in the connections definition for external sources loaded into the Data Vault.

Note that the default max length for the record source code is 10 characters.

#### Example

```SsisExpression
(DT_STR,10,1252)"@@this"
```

#### Valid Value

A valid SSIS Expression

#### Default Metadata information

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Value          | `FlexRowRecordSource` |
| Configuration Data Type      | `DataType="AnsiString" Length="10"` |
| Configuration Default        | `FLX` |
| SSIS Expression              | `(DT_STR,10,1252)"@@this"` |
| Staging Attribute            | `Derived` |
| Persistent Staging Attribute | `Derived` |
| Hub Attribute                | `Source` |
| Satellite Attribute          | `Source` |
| Link Attribute               | `Source` |

### RowSourceId

The `RowSourceId` defines the sequence number of the data row within the set. This is used to identify all rows in order within a batch.

#### Example

```SsisExpression
-1
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Value          | `FlexRowSourceId` |
| Configuration Data Type      | `DataType="Int32"` |
| Configuration Default        | `-1` |
| SSIS Expression              | `true` |
| Staging Attribute            | `Derived` |
| Persistent Staging Attribute | `Derived` |
| Satellite Attribute          | `Source` |

### RowIsCurrent

The `RowIsCurrent` defines the current row flag for data in timelines, such as for satellites. The `RowIsCurrent` is the definition for how the current row is defined and derived in the data. The default configuration does not include the `IsCurrent` flag in staging and persistent staging, only in Dimensions.

The IsCurrent flag is an optional query helper attribute. It is used together with the `RowEndDate` attribute and it is possible to derive the `RowIsCurrent` value by interpreting the `RowEffectiveTo` attribute when available, or the latest `RowEffectiveFrom` date for the key when end dating is not used, in the query.

#### Example

```SsisExpression
true
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Value          | `FlexRowIsCurrent` |
| Configuration Data Type      | `DataType="Boolean"` |
| Configuration Default        | `1` |
| SSIS Expression              | `true` |
| Staging Attribute            | `Derived` |
| Persistent Staging Attribute | `Derived` |
| Satellite Attribute          | `Derived` |
| Dim Attribute                | `Derived` |

### RowIsDeleted

The `RowIsDeleted` defines the pattern to derive if a row is deleted or not.

This information is normally presented by the source as an additional attribute indicating that the row has been deleted.

For source systems with hard deletes and no mechanism to present these deleted, consider using the Delete Detection feature in BimlFlex: @bimlflex-delete-detection

The IsDeleted flag is an optional query helper attribute. It is used together with the `RowChangeType` attribute and it is possible to derive the `IsDeleted` value by interpreting the `RowChangeType` in the query.

#### Example

Fixed value expression:

```SsisExpression
false
```

SSIS Expression, derive the value based on a source column.

```SsisExpression
[__$operation]==1?TRUE:FALSE
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Value          | `FlexRowIsDeleted` |
| Configuration Data Type      | `DataType="Boolean"` |
| Configuration Default        | |
| SSIS Expression              | `false` |
| IsNullable                   | `Y` |
| Staging Attribute            | `Derived` |
| Persistent Staging Attribute | `Derived` |
| Satellite Attribute          | `Source` |

### RowIsInferred

The `RowIsInferred` defines if the row is inferred

#### Example

```SsisExpression
false
```

#### Valid Value

SSIS Expression and data type

#### Default Metadata information

| Key                     | Value |
| ----------------------- | ----- |
| Configuration Value     | `FlexRowIsInferred` |
| Configuration Data Type | `DataType="Boolean"` |
| Configuration Default   | `1` |
| SSIS Expression         | `false` |
| IsNullable              | `Y` |
| Dim Attribute           | `Derived` |

### RowHash

The `RowHash` defines the expression used to derive a full row hash.

#### Example

```SsisExpression
[vck@@this1]
000000000000000000000000000000000000000
```

#### Valid Value

A Valid SSIS Expression and data type

#### Default Metadata information

| Key                          | Value |
| ----------------------       | ----- |
| Configuration Value          | `FlexRowHash` |
| Configuration Data Type      | `DataType="AnsiString" Length="40"` |
| Configuration Default        | `000000000000000000000000000000000000000` |
| SSIS Expression              | `[vck@@this1]` |
| IsNullable                   | `Y` |
| Staging Attribute            | `Hash` |
| Persistent Staging Attribute | `Hash` |

### RowHashKey

The `RowHashKey` defines the expression used to derive a key hash.

#### Example

```SsisExpression
[vck@@this1]
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

| Key                          | Value |
| ---------------------------- | ----- |
| Configuration Value          | `FlexRowHashKey` |
| Configuration Data Type      | `DataType="AnsiString" Length="40"` |
| Configuration Default        | `000000000000000000000000000000000000000` |
| SSIS Expression              | `[vck@@this1]` |
| IsNullable                   | `Y` |
| Staging Attribute            | `Hash` |
| Persistent Staging Attribute | `Hash` |

### RowHashSat

The `RowHashSat` defines the expression used to derive a satellite attribute hash.

#### Example

```SsisExpression
[@@this1]
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

| Key                     | Value |
| ----------------------- | ----- |
| Configuration Value     | `FlexRowHashSat` |
| Configuration Data Type | `DataType="AnsiString" Length="40"` |
| Configuration Default   | `000000000000000000000000000000000000000` |
| SSIS Expression         | `[@@this1]` |
| IsNullable              | `Y` |
| Satellite Attribute     | `Hash` |

### RowHashType1

The `RowHashType1` defines the expression used to derive a row hash for type 1 attributes in a destination dimension.

#### Example

```SsisExpression
[vck@@this1]
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

| Key                     | Value |
| ----------------------- | ----- |
| Configuration Value     | `FlexRowHashType1` |
| Configuration Data Type | `DataType="AnsiString" Length="40"` |
| Configuration Default   | `000000000000000000000000000000000000000` |
| SSIS Expression         | `[vck@@this1]` |
| IsNullable              | `Y` |
| Dim Attribute           | `Hash` |

### RowHashType2

The `RowHashType2` defines the expression used to derive a row hash for type 2 attributes in a destination dimension.

#### Example

```SsisExpression
[vck@@this1]
```

#### Valid Value

A valid SSIS Expression and data type

#### Default Metadata information

| Key                     | Value |
| ----------------------- | ----- |
| Configuration Value     | `FlexRowHashType2` |
| Configuration Data Type | `DataType="AnsiString" Length="40"` |
| Configuration Default   | `000000000000000000000000000000000000000` |
| SSIS Expression         | `[vck@@this1]` |
| IsNullable              | `Y` |
| Dim Attribute           | `Hash` |

### RowLoadSequence

The `RowLoadSequence` defines the data type for the Load Sequence organizer.

#### Example

```SsisExpression
DataType="Int32"
```

#### Valid Value

A valid sortable integer data type

#### Default Metadata information

| Key                     | Value |
| ----------------------- | ----- |
| Configuration Value     | `FlexRowLoadSequence` |
| Configuration Data Type | `DataType="Int32"` |