---
sidebar_position: 6
title: Configurations
description: Documentation on the metadata and framework configurations available in BimlFlex with standard configurations and examples
tags: [BimlFlex, Reference]
---
# Configurations

This document outlines the [**Configurations**](../metadata-editors/configuration-editor) that are available in BimlFlex by default.

These configurations drive the behavior of the BimlFlex product, by adding **Columns** to **Objects** where they have been configured to apply to.

The default configuration values are recommended by Varigence, but these can be modified if there is a requirement to tweak specific behaviors or align to specific standards and conventions.

Existing configurations can be modified, and new ones can be added, using the [**Configuration Editor**](../metadata-editors/configuration-editor) in the BimlFlex App.



:::tip

Align the **Configuration** values to best match your organization's best practices, conventions and naming standards.

:::


## Default Configurations

The following default **Configurations** are made available by default in BimlFlex.

### RowAuditId

The `RowAuditId` intends to capture the execution instance id from the process that loads the object. Auditability is supported by querying this id in the BimlCatalog, so that additional information on the context in which the process was run can be viewed. The default derives the audit id from the ExecutionID user variable. This value will be added to all rows as the audit id, default column sidebar_position: 6
title: Configurations

#### Examples

SSIS:

```SsisExpression
@[User::ExecutionID]
```

ADF:

```SsisExpression
@[@{activity('LogExecutionStart').output.firstRow.ExecutionID}]
```

### RowChangeType

The `RowChangeType` defines the string representation of the change type (Insert, Update or Delete) when inserting new rows into the data solution.

Note that the BimlFlex default does not include this flag. Should the data solution need to track the change type, please add it to the design.

To capture changes and deletes, please add the required logic to derive these values from the source column that indicates the change type. This can be done either in the configurations sheet as a global configuration or in the attributes sheet as a local object override.

#### Examples

SSIS:

```SsisExpression
(DT_STR,1,1252)"I"
```

SSIS Expression for CDC-type loads. This derives the code based on another column:

```SsisExpression
[__$operation]==1?"D":[__$operation]==2?"I":"U"
```

ADF:

```SsisExpression
@{string('I')}
```

SQL Source Expression:

```sql
CASE WHEN TGT.@@this IS NULL THEN 'I' ELSE 'U' END
```

### RowEffectiveFromDate

The `RowEffectiveFromDate` is intended to represent the moment the record is loaded in the data solution, the time of arrival. It is typically used to represent the 'technical timeline' in a bi-temporal context.

By default this is configured as a `DateTime2(7)` data type. This high precision data type supports a wider range of dates compared to traditional date/time domain. If a specific start datetime for timelines is needed, such as to support an existing design template, this can be updated to support it.

Unless there is a good reason to change it, it is recommended to keep the default.

The default expressions are applied to the Staging and Persistent Staging loads, and derive the RowEffectiveFromDate from the start of the batch execution. This is inserted into the Data Flow to give each row its RowEffectiveFromDate timestamp. The default configuration is to use the start date time of the parent Batch for this column.

For scenarios where the data solution load should derive the effective date time from the source, it is possible to override this expression either through the global setting in the configurations sheet, or through an override in the attributes sheet. Scenarios where the override would be of interest are CDC source loads, where BimlFlex will reuse the transaction datetime from the CDC mechanism and when multiple changes to a record are included in a single sourcing set. By overriding the RowEffectiveFromDate, it is possible to keep the timeline of the source rows and the grain of the source without key collisions.

It is Varigence's recommendation though to maintain the RowEffectiveFromDate as a technical timelines, and apply any other timelines separate from this one.

An example of implementation usage for the configuration default is in the default constraint of this table creation script for the Address staging table from the AdventureWorksLT Source. This is configured by selecting the `Default` **Configuration Attribute Type** to apply for the staging area in the **Configuration Editor**.

```sql
IF NOT EXISTS (SELECT * FROM sys.default_constraints WHERE [parent_object_id] = OBJECT_ID(N'[AWLT].[Address]') AND [name] = 'DF_Address_FlexRowEffectiveFromDate')

ALTER TABLE [AWLT].[Address] ADD CONSTRAINT [DF_Address_FlexRowEffectiveFromDate] DEFAULT ('0001-01-01 00:00:00.000') FOR [FlexRowEffectiveFromDate]
```

#### Example

Derive the RowEffectiveFromDate from the Parent Batch Start Time variable using SSIS:

```SsisExpression
@[User::ParentBatchStartTime]
```

SSIS Expression based, if it is the initial load, use the Parent Batch Start Time variable, else derive the Effective From Date based on two other columns. This is used in CDC-type loads:

```SsisExpression
@[User::IsInitialLoad]?@[User::ParentBatchStartTime]:DATEADD("ms", ([__$rownumber]-1) * 4, [__$start_dt])
```

ADF:

```SsisExpression
@{formatDateTime(pipeline().parameters.BatchStartTime, 'yyyy-MM-dd HH:mm:ss.fffffff')}
```

SQL Source Expression:

```sql
SYSTIMESTAMP()
```

### RowEffectiveToDate

The `RowEffectiveToDate` defines the end of time for a timeline in the data solution. The DateTime2(7) data type supports a wider range of dates than traditional date/time meaning ending on 31 Dec 9999 will support most use cases. If a specific start date/time for timelines is needed, such as to support an existing design template, this can be updated to support it. Unless there is a very good reason to change it, it is recommended to keep the default.

The SSIS Expression is used in the Staging and Persistent Staging loads to derive the RowEffectiveToDate from the `(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"` expression. This is inserted into the Data Flow to give each row its end date. The default configuration is to use the end of timeline definition.

An example of implementation usage for the configuration default is in the default constraint of this table creation script for the Address staging table from the AdventureWorksLT Source:

```sql
IF NOT EXISTS (SELECT * FROM sys.default_constraints WHERE [parent_object_id] = OBJECT_ID(N'[AWLT].[Address]') AND [name] = 'DF_Address_FlexRowEffectiveToDate')

ALTER TABLE [AWLT].[Address] ADD CONSTRAINT [DF_Address_FlexRowEffectiveToDate] DEFAULT ('9999-12-31') FOR [FlexRowEffectiveToDate]
```

#### Example

Derive the RowEffectiveFromDate from the Parent Batch Start Time variable using SSIS:

```SsisExpression
(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"
```

ADF:

```SsisExpression
@{formatDateTime('9999-12-31 00:00:00.0000000', 'yyyy-MM-dd HH:mm:ss.fffffff')}
```

SQL Source Expression:

```sql
CONVERT(DATETIME2(7), '9999-12-31')
```

### RowEndDate

The `RowEndDate` is intended to be used in a Dimensional Model, where it defines the end time for a row. This attribute is used to define the expiry date for Dimension Type 2 attributes. This configuration is meant to be used in conjunction with the `RowStartDate` configuration.

#### Example

```SsisExpression
(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"
```

ADF:

```SsisExpression
@{formatDateTime('9999-12-31 00:00:00.0000000', 'yyyy-MM-dd HH:mm:ss.fffffff')}
```

SQL Source Expression:

```sql
CONVERT(DATETIME2(7), '9999-12-31')
```

### RowHash

The `RowHash` defines the expression used to derive a full row hash. This is controlled by BimlFlex code, and is not impacted by expressions. But the `Configuration Value` and `Configuration Data Type` can be modified to change the name and data type of the column that will hold the hash value.

### RowHashKey

The `RowHashKey` defines the expression used to derive a key hash. This is controlled by BimlFlex code, and is not impacted by expressions. But the `Configuration Value` and `Configuration Data Type` can be modified to change the name and data type of the column that will hold the hash value.

### RowHashSat

The `RowHashSat` defines the expression used to derive a satellite attribute hash (full row hash). This is controlled by BimlFlex code, and is not impacted by expressions. But the `Configuration Value` and `Configuration Data Type` can be modified to change the name and data type of the column that will hold the hash value.

### RowHashType1

The `RowHashType1` defines the expression used to derive a row hash for type 1 attributes in a destination Dimension object.

### RowHashType2

The `RowHashType2` defines the expression used to derive a row hash for type 2 attributes in a destination Dimension object.

### RowIsCurrent

The `RowIsCurrent` defines the current row flag for data as per the selected timeline. The `RowIsCurrent` is the definition for how the current row is defined and derived in the data. The default configuration does not include the `IsCurrent` flag in staging and persistent staging, only in Dimensions.

The IsCurrent flag is an optional query helper attribute. It is used together with the `RowEndDate` attribute and it is possible to derive the `RowIsCurrent` value by interpreting the `RowEffectiveTo` attribute when available, or the latest `RowEffectiveFrom` date for the key when end dating is not used, in the query.

#### Example

```SsisExpression
true
```

ADF:

```SsisExpression
@{bool(1)}
```

SQL Source Expression:

```sql
CONVERT(BIT, 1)
```

### RowIsDeleted

The `RowIsDeleted` defines the pattern to derive if a row is logically deleted or not. This information is normally presented by the source as an additional attribute indicating that the row has been deleted.

For source systems with hard deletes and no mechanism to present these deleted, consider using the Delete Detection feature in BimlFlex: [BimlFlex Delete Detection](../concepts/delete-detection)

The IsDeleted flag is an optional query helper attribute. It is used together with the `RowChangeType` attribute and it is possible to derive the `IsDeleted` value by interpreting the `RowChangeType` in the query.

#### Example

Fixed value expression:

```SsisExpression
false
```

SSIS Expression, derive the value based on a source column:

```SsisExpression
[__$operation]==1?TRUE:FALSE
```

ADF:

```SsisExpression
@{bool(0)}
```

SQL Source Expression:

```sql
CONVERT(BIT, 0)
```

### RowIsInferred

The `RowIsInferred` defines if the row is inferred.

#### Example

```SsisExpression
false
```

ADF:

```SsisExpression
@{bool(0)}
```

SQL Source Expression:

```sql
CONVERT(BIT, 0)
```

### RowLastSeenDate

The `RowLastSeenDate` applies the defined expression to derive the RowLastSeen attribute. It is intended as an optional Data Vault mechanism for deriving when a row was last seen from the source. This approach is not recommended. Delete detection can be achieved using alternate approaches.

#### Example

```SsisExpression
(DT_DBTIMESTAMP2, 7)"1900-01-01"
```

ADF:

```SsisExpression
@{formatDateTime(utcnow(), 'yyyy-MM-dd HH:mm:ss.fffffff')}
```

SQL Source Expression:

```sql
GETDATE()
```

### RowLoadSequence

The `RowLoadSequence` defines the data type for the Load Sequence organizer.

#### Example

```SsisExpression
DataType="Int32"
```

### RowRecordSource

The `RowRecordSource` defines the record source for the data. This is a required attribute for Data Vault sources and normally defined in the connections definition for external sources loaded into the Data Vault.

Note that the default max length for the record source code is 10 characters. This configuration can use the `@@rs` short code which represents the record source as specified in the **Connection** to which the **Object** belongs to.

#### Example

```SsisExpression
(DT_STR,10,1252)"@@rs"
```

ADF:

```SsisExpression
@@this
```

### RowRecordSourceFull

The `RowRecordSourceFull` defines the record source for the data. This is a required attribute for Data Vault sources and normally defined in the connections definition for external sources loaded into the Data Vault.

Note that the default max length for the record source code is 10 characters.

#### Example

```SsisExpression
(DT_STR,10,1252)"@@rs"
```

ADF:

```SsisExpression
@@this
```

### RowSourceId

The `RowSourceId` defines the sequence number of the data row within the set. This is used to identify all rows in order within a batch.

#### Example

Configuration default:

```SsisExpression
-1
```

### RowStartDate

The `RowStartDate` defines the start of time definition for a row in the data solution and is intended for data marts / dimensional models. This attribute is used to define the timeline in use, from start of time to end of time for Dimension objects.

#### Example

```SsisExpression
(DT_DBTIMESTAMP2, 7)GETDATE()
```

ADF:

```SsisExpression
@{formatDateTime('1900-01-01 00:00:00.0000000', 'yyyy-MM-dd HH:mm:ss.fffffff')}
```

SQL Source Expression:

```sql
CAST('1900-01-01' AS DATETIME2)
```
