This document outlines the metadata and framework configurations available in BimlFlex.

These configurations drive the behavior of the product. 

By changing them the produced artifacts can adapt to support requirements for file locations, naming conventions, data conventions etc.

The Configuration defaults are the Varigence recommended values and there is no need to change or configure unless there is a requirement to change specific behaviors. Align these settings with the organizations best practices and environmental requirements.

The Configurations are available in the Configurations sheet in the BimlFlex Excel Add-in.

![Configurations Sheet](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_excel_configurations_sheet.png "Configurations Sheet")

### Metadata column overview

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Key</td><td>the Configuration Key, the internal key BimlFlex refers to, cannot be changed</td></tr>
<tr><td>Configuration Value</td><td>the Configured Value, can be updated to support a different design pattern or behaviour</td></tr>
<tr><td>Configuration Datatype</td><td>the data type the configuration Value uses. Needs to be a valid data type definition</td></tr>
<tr><td>Configuration Default</td><td>the Configuration Key’s Default Value</td></tr>
<tr><td>Configuration Grouping</td><td>BimlFlex Internal Grouping of configurations</td></tr>
<tr><td>Configuration Order</td><td>BimlFlex Internal Ordering of configurations</td></tr>
<tr><td>SSIS Expression</td><td>the SSIS Expression used to derive the value. Needs to be a valid SSIS Expression. Uses the shorthand @@this to define the current entity</td></tr>
<tr><td>Is Nullable</td><td>Defines If the attribute is nullable Valid Enumeration {Empty, Y, N}</td></tr>
<tr><td>Staging Attribute</td><td>Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}</td></tr>
<tr><td>Hub Attribute</td><td>Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}</td></tr>
<tr><td>Satellite Attribute</td><td>Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}</td></tr>
<tr><td>Link Attribute</td><td>Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}</td></tr>
<tr><td>Dim Attribute</td><td>Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}</td></tr>
<tr><td>Fact Attribute</td><td>Valid Enumeration {Ignore, Derived, Source, Default, Target, Hash}</td></tr>
<tr><td>Description</td><td>An optional description for custom attributes or definitions. The default configurations are described in this document</td></tr>
<tr><td>Is Deleted</td><td>Flag to set if a custom attribute has been entered but is now no longer needed and should be considered deleted.  Valid Enumeration {Empty, Y, N}</td></tr>
</tbody>
</table>
<br>

## Standard configurations

### RowEffectiveFromDate

#### Description

The **RowEffectiveFromDate** defines the start of time for timelines in the data warehouse. The `DateTime2(7)` datatype supports a wider range of dates than traditional DateTime meaning starting on 1 Jan 0001 will support most use cases. If a specific start DateTime for timelines is needed, such as to support an existing design template, this can be updated to support it. Unless there is a good reason to change it, it is recommended to keep the default.

The SSIS Expression is used in the Staging and Persistent Staging loads to derive the RowEffectiveFromDate from the `@[User::ParentBatchStartTime]` variable. This is inserted into the Data Flow to give each row its effectiveness date. The default configuration is to use the start date time of the parent Batch for this column.

An example of implementation usage for the configuration default is in the Default constraint of this table creation script for the Address staging table from the AdventureWorks LT Source:

```

IF NOT EXISTS (SELECT * FROM sys.default_constraints WHERE [parent_object_id] = OBJECT_ID(N'[AWLT].[Address]') AND [name] = 'DF_Address_FlexRowEffectiveFromDate')

ALTER TABLE [AWLT].[Address] ADD CONSTRAINT [DF_Address_FlexRowEffectiveFromDate] DEFAULT ('0001-01-01 00:00:00.000') FOR [FlexRowEffectiveFromDate]
```

#### Example

See defaults

#### Valid Value 

Depends on configuration attribute

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Key</td><td>RowEffectiveFromDate</td></tr>
<tr><td>Configuration Value</td><td>FlexRowEffectiveFromDate</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="DateTime2" Scale="7"</td></tr>
<tr><td>Configuration Default</td><td>0001-01-01 00:00:00.000</td></tr>
<tr><td>Ssis Expression</td><td>@[User::ParentBatchStartTime]</td></tr>
<tr><td>Staging Attribute</td><td>Derived</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Derived</td></tr>
<tr><td>Hub Attribute</td><td>Source</td></tr>
<tr><td>Satellite Attribute</td><td>Source</td></tr>
<tr><td>Link Attribute</td><td>Source</td></tr>
</tbody>
</table>
<br>

### RowEffectiveToDate

#### Description

The **RowEffectiveToDate** defines the end of time for timelines in the data warehouse. The DateTime2(7) datatype supports a wider range of dates than traditional DateTime meaning ending on 31 Dec 9999 will support most use cases. If a specific start DateTime for timelines is needed, such as to support an existing design template, this can be updated to support it. Unless there is a very good reason to change it, it is recommended to keep the default.

The SSIS Expression is used in the Staging and Persistent Staging loads to derive the RowEffectiveToDate from the ```(DT_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"``` expression. This is inserted into the Data Flow to give each row its end date. The default configuration is to use the end of timeline definition.

An example of implementation usage for the configuration default is in the Default constraint of this table creation script for the Address staging table from the AdventureWorks LT Source:

```
IF NOT EXISTS (SELECT * FROM sys.default_constraints WHERE [parent_object_id] = OBJECT_ID(N'[AWLT].[Address]') AND [name] = 'DF_Address_FlexRowEffectiveToDate')

ALTER TABLE [AWLT].[Address] ADD CONSTRAINT [DF_Address_FlexRowEffectiveToDate] DEFAULT ('9999-12-31') FOR [FlexRowEffectiveToDate]
```

#### Example

See defaults

#### Valid Value 

Depends on configuration attribute

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowEffectiveToDate</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="DateTime2" Scale="7"</td></tr>
<tr><td>Configuration Default</td><td>9999-12-31</td></tr>
<tr><td>Ssis Expression</td><td>(DT\_DBTIMESTAMP2, 7)"9999-12-31"</td></tr>
<tr><td>Staging Attribute</td><td>Derived</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Derived</td></tr>
<tr><td>Satellite Attribute</td><td>Derived</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowLastSeenDate</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="DateTime2" Scale="7"</td></tr>
<tr><td>Ssis Expression</td><td>(DT\_DBTIMESTAMP2, 7)"1900-01-01"</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowStartDate</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="DateTime2" Scale="7"</td></tr>
<tr><td>Configuration Default</td><td>1900-01-01</td></tr>
<tr><td>Ssis Expression</td><td>(DT\_DBTIMESTAMP2, 7)GETDATE()</td></tr>
<tr><td>Dim Attribute</td><td>Derived</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowEndDate</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="DateTime2" Scale="7"</td></tr>
<tr><td>Ssis Expression</td><td>(DT\_DBTIMESTAMP2, 7)"9999-12-31 00:00:00.000"</td></tr>
<tr><td>Satellite Attribute</td><td>Derived</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowAuditId</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="Int64"</td></tr>
<tr><td>Ssis Expression</td><td>@[User::ExecutionID]</td></tr>
<tr><td>Staging Attribute</td><td>Derived</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Derived</td></tr>
<tr><td>Hub Attribute</td><td>Derived</td></tr>
<tr><td>Satellite Attribute</td><td>Derived</td></tr>
<tr><td>Link Attribute</td><td>Derived</td></tr>
<tr><td>Dim Attribute</td><td>Derived</td></tr>
<tr><td>Fact Attribute</td><td>Derived</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowChangeType</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="1"</td></tr>
<tr><td>Configuration Default</td><td>I</td></tr>
<tr><td>Ssis Expression</td><td>(DT\_STR,10,1252)"I"</td></tr>
<tr><td>Staging Attribute</td><td>Derived</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Derived</td></tr>
<tr><td>Satellite Attribute</td><td>Source</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowRecordSource</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="10"</td></tr>
<tr><td>Configuration Default</td><td>FLX</td></tr>
<tr><td>Ssis Expression</td><td>(DT\_STR,10,1252)"@@this"</td></tr>
<tr><td>Staging Attribute</td><td>Derived</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Derived</td></tr>
<tr><td>Hub Attribute</td><td>Source</td></tr>
<tr><td>Satellite Attribute</td><td>Source</td></tr>
<tr><td>Link Attribute</td><td>Source</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowSourceId</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="Int32"</td></tr>
<tr><td>Configuration Default</td><td>-1</td></tr>
<tr><td>Ssis Expression</td><td>true</td></tr>
<tr><td>Staging Attribute</td><td>Derived</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Derived</td></tr>
<tr><td>Satellite Attribute</td><td>Source</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowIsCurrent</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="Boolean"</td></tr>
<tr><td>Configuration Default</td><td>1</td></tr>
<tr><td>Ssis Expression</td><td>true</td></tr>
<tr><td>Staging Attribute</td><td>Derived</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Derived</td></tr>
<tr><td>Satellite Attribute</td><td>Derived</td></tr>
<tr><td>Dim  Attribute</td><td>Derived</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowIsDeleted</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="Boolean"</td></tr>
<tr><td>Configuration Default</td><td>(DATEPART("ms", GETDATE())%2)==1?TRUE:FALSE</td></tr>
<tr><td>Ssis Expression</td><td>false</td></tr>
<tr><td>IsNullable</td><td>Y</td></tr>
<tr><td>Staging Attribute</td><td>Derived</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Derived</td></tr>
<tr><td>Satellite Attribute</td><td>Source</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowIsInferred</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="Boolean"</td></tr>
<tr><td>Configuration Default</td><td>1</td></tr>
<tr><td>Ssis Expression</td><td>false</td></tr>
<tr><td>IsNullable</td><td>Y</td></tr>
<tr><td>Dim Attribute</td><td>Derived</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowHash</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="80"</td></tr>
<tr><td>Configuration Default</td><td>000000000000000000000000000000000000000 000000000000000000000000000000000000000</td></tr>
<tr><td>Ssis Expression</td><td>[vck@@this1]+[vck@@this2]</td></tr>
<tr><td>IsNullable</td><td>Y</td></tr>
<tr><td>Staging Attribute</td><td>Hash</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Hash</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowHashKey</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="40"</td></tr>
<tr><td>Configuration Default</td><td>000000000000000000000000000000000000000</td></tr>
<tr><td>Ssis Expression</td><td>[vck@@this1]</td></tr>
<tr><td>IsNullable</td><td>Y</td></tr>
<tr><td>Staging Attribute</td><td>Hash</td></tr>
<tr><td>Persistent Staging Attribute</td><td>Hash</td></tr>
</tbody>
</table>
<br>

### RowHashSat

#### Description

The **RowHashSat** defines the expression used to derive a satellite attribute hash. The default hashing mechanism uses the Varigence Custom SSIS Components

#### Example

```
[@@this1]
```

#### Valid Value 

A valid SSIS Expression and data type

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowHashSat</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="40"</td></tr>
<tr><td>Configuration Default</td><td>000000000000000000000000000000000000000</td></tr>
<tr><td>Ssis Expression</td><td>[vck@@this1]</td></tr>
<tr><td>IsNullable</td><td>Y</td></tr>
<tr><td>Dim Attribute</td><td>Hash</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowHashType1</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="40"</td></tr>
<tr><td>Configuration Default</td><td>000000000000000000000000000000000000000</td></tr>
<tr><td>Ssis Expression</td><td>[vck@@this1]</td></tr>
<tr><td>IsNullable</td><td>Y</td></tr>
<tr><td>Dim Attribute</td><td>Hash</td></tr>
</tbody>
</table>
<br>

### RowHashType2

#### Description

The **RowHashType2** defines the expression used to derive a backward hash. The default hashing mechanism uses the Varigence Custom SSIS Components

#### Example

```
[vck@@this1]
```

#### Valid Value 

A valid SSIS Expression and data type

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowHashType2</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="40"</td></tr>
<tr><td>Configuration Default</td><td>000000000000000000000000000000000000000</td></tr>
<tr><td>Ssis Expression</td><td>[vck@@this1]</td></tr>
<tr><td>IsNullable</td><td>Y</td></tr>
<tr><td>Dim Attribute</td><td>Hash</td></tr>
</tbody>
</table>
<br>

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

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FlexRowLoadSequence</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="Int32"</td></tr>
</tbody>
</table>
<br>

### RootPath

#### Description

The **RootPath** defines the default Root Path folder of the BimlFlex solution.

#### Example

```
C:\Varigence\BimlFlex
```

#### Valid Value 

A valid path

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>C:\Varigence\BimlFlex</td></tr>
</tbody>
</table>
<br>

### ImportPath

#### Description

The **ImportPath** defines the default folder path for file import.

#### Example

```
C:\Varigence\Import
```

#### Valid Value 

A valid path

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>C:\Varigence\Import</td></tr>
</tbody>
</table>
<br>

### ExportPath

#### Description

The **ExportPath** defines the default folder path for file exports.

#### Example

```
C:\Varigence\Export
```

#### Valid Value 

A valid path

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>C:\Varigence\Export</td></tr>
</tbody>
</table>
<br>

### UseBimlCatalog

#### Description

The **UseBimlCatalog** defines whether or not to use the BimlFlex Catalog database for SSIS package orchestration and logging.

#### Example

```
Y
```

#### Valid Value 

Enumeration {Y,N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>Y</td></tr>
</tbody>
</table>
<br>

### ConfigurationPath

#### Description

The **ConfigurationPath** key defines the default path for configurations

#### Example

```
C:\Varigence\Configurations
```

#### Valid Value 

A valid path

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>C:\Varigence\Configurations</td></tr>
</tbody>
</table>
<br>

### 7ZipPath

#### Description

The **7ZipPath** key defines the file path/location of the 7-Zip application that is used for zipping/compression of files. The 7-zip executables are needed for zip-related operations. The 7-Zip application is open source and available to use without license cost.

More information and downloads: <http://www.7-zip.org/download.html>

#### Example

```
C:\Program Files\7-Zip
```

#### Valid Value 

A valid path to the 7-Zip executable

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>C:\Program Files\7-Zip</td></tr>
</tbody>
</table>
<br>

### AzCopyPath

#### Description

The **AzCopyPath** key defines the file path/location of the AzCopy application used to copy files to Azure storage.

#### Example

```
C:\Program Files (x86)\Microsoft SDKs\Azure\AzCopy
```

#### Valid Value 

A valid path to the AzCopy executable

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>C:\Program Files (x86)\Microsoft SDKs\Azure\AzCopy</td></tr>
</tbody>
</table>
<br>

### KeyEndsWith

#### Description

The **KeyEndsWith** key defines the text the metadata import uses to identify key columns that aren’t technically identified as keys in the source. Add any source specific key identifiers to enable automatic identification of key columns.

#### Example

```
Id,Code,No,Key,Cd
```

#### Valid Value 

Any valid comma separated list of SQL or SSIS Strings

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>Id,Code,No,Key</td></tr>
</tbody>
</table>
<br>

### SuffixOrPrefixColumn

#### Description

The **SuffixOrPrefixColumn** key defines the behaviour when defining column names. Use Suffix or Prefix to define if the column identifiers are added after or before the column names in the solution.

#### Example

```
S for Suffix will generate Entity_SK
P for Prefix Will generate SK_Entity
```

#### Valid Value 

Enumeration {P, S}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>S</td></tr>
</tbody>
</table>
<br>

### SuffixOrPrefixObject

#### Description

The **SuffixOrPrefixObject** key defines the behaviour when defining object names. Use Suffix or Prefix to define if the object identifiers are added after or before the object names in the solution.

#### Example

```
S for Suffix Will generate Entity_HUB
P for Prefix Will generate HUB_Entity
```

#### Valid Value 

Enumeration {P, S}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>P</td></tr>
</tbody>
</table>
<br>

### UseRecordSourceAsAppend

#### Description

The **UseRecordSourceAsAppend** Key specifies if the record source should be appended to the object name

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### UseRecordSourceAsSchema

#### Description

The **UseRecordSourceAsSchema** Key specifies if the record source should be used as the schema for objects. As an example, the default behaviour means a source table called Product from the record source AWLT will be created as AWLT.Product in the Staging Area

#### Example

```
Y
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>Y</td></tr>
</tbody>
</table>
<br>

### UseColumnModelOverride

#### Description

The **UseColumnModelOverride** Key specifies if the model override for column should be used instead of the source names for columns in the Staging and Persisted Staging areas. The recommended, and default behaviour, is to use source names for Staging and only use override names in the Data Vault/later layers.

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### UseObjectModelOverride

#### Description

The **UseObjectModelOverride** Key specifies if the model override for objects should be used instead of the source names for objects in the Staging and Persisted Staging areas. The recommended, and default behaviour, is to use source names for Staging and only use override names in the Data Vault/later layers.

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### HashBusinessKey

#### Description

The **HashBusinessKey** Key specifies if the Business Key should be hashed. This is implemented by default for Data Vault regardless of setting but can be specified for other modelling approaches.

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### ConcatenatorBusinessKey

#### Description

The **ConcatenatorBusinessKey** Key specifies the value to use as filler between business keys when concatenating them. Single business keys are created from multiple source columns through concatenation to maintain a single business key. When concatenating it is important to be able to distinguish between similarly formed inputs. E.g. concatenating ABC and DEF without the concatenator will make it the same as AB + CDEF (`ABCDEF`). The concatenator will maintain the two as different and distinct entities (`ABC~DEF` vs. `AB~CDEF`). Using a concatenator is required to maintain data integrity but the value can be configured to support an existing process, design pattern or specific requirement.

#### Example

```
~
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>~</td></tr>
</tbody>
</table>
<br>

### BusinessKeyNullValue

#### Description

The **BusinessKeyNullValue** Key specifies the defined value to use for null values in the business key.

#### Example

```
~NULL~
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>

### AppendBusinessKey

#### Description

The **AppendBusinessKey** Key specifies the string to append to the Business Key Columns. Prefixing or suffixing is specified by the SuffixOrPrefixColumn configuration

#### Example

```
BK = BusinessKeyColumnName_BK
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>BK</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="40"</td></tr>
</tbody>
</table>
<br>

### AppendSurrogateKey

#### Description

The **AppendSurrogateKey** Key specifies the string to append to the Surrogate Key Columns. Prefixing or suffixing is specified by the SuffixOrPrefixColumn configuration

#### Example

```
SK = KeyColumnName_SK
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>SK</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="AnsiString" Length="40"</td></tr>
</tbody>
</table>
<br>

### AppendRecordSource

#### Description

The **AppendRecordSource** Key specifies if the Record source should be appended to object names

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### AppendSchemaDm

#### Description

The **AppendSchemaDm** Key specifies if the Schema should be appended in the Data Mart layer

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### AppendSchemaRdv

#### Description

The **AppendSchemaRdv** Key specifies if the Schema should be appended in the Data Vault layer

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### AppendSchemaPsa

#### Description

The **AppendSchemaPsa** Key specifies if the Schema should be appended for the Persistent Staging layer when colocated in the Staging database

#### Example

```
ods
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>ods</td></tr>
</tbody>
</table>
<br>

### AppendSchemaStg

#### Description

The **AppendSchemaStg** Key specifies if the source schema should be appended to the object name. this is useful for when a source has multiple schemas with the same object name repeated across these schemas. To be able to distinguish between them in the Staging Area the schema name needs to be added. The default process disregards the schema for simplicity in the naming. An example where this might be needed is when loading all tables from the WideWorldImporters demo database where the same table name is repeated across multiple schemas.

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### AppendDomain

#### Description

Should Domain be addedf

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### DisplayDatabaseNameStg

#### Description

Should the Database name be added to the Staging Layer

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### DisplaySchemaNameStg

#### Description

Should the source schema name be added to the Staging Layer

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### LookupCachePath

#### Description

The **LookupCachePath** Key specifies the path for cache files for the lookup process when it is using external persistence of cache data.

#### Example

```
C:\Varigence\Cache
```

#### Valid Value 

Any valid and safe path

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>C:\Varigence\Cache</td></tr>
</tbody>
</table>
<br>

### DisplayDatabaseNameRdv

#### Description

The **DisplayDatabaseNameRdv** Key specifies if the database name should be added to the Rdv layer

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### DisplaySchemaNameRdv

#### Description

The **DisplaySchemaNameRdv** Key specifies if the source schema name should be added to the Rdv Layer

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### LookupAddFilterTable

#### Description

The **LookupAddFilterTable** Key specifies if table filter should be added to the lookup

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### DisplayDatabaseNameDm

#### Description

The **DisplayDatabaseNameDm** Key specifies if the objects database name should be displayed in the Data Mart.

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### LookupTablePattern

#### Description

The **LookupTablePattern** Key specifies the lookup naming convention used for SSIS table lookup.

#### Example

```
lkp.ReferenceColumnName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>"lkp." + column.Name.MakeSsisSafe</td></tr>
</tbody>
</table>
<br>

#### DisplaySchemaNameDm

#### Description

The **DisplaySchemaNameDm** Key specifies if the objects schema name should be displayed in the Data Mart.

#### Example

```
N
```

#### Valid Value 

Enumeration {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### DmAppendDim

#### Description

The **DvAppendDim** Key specifies the string to append to Dimension objects in the Data Mart. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
DIM = DIM_DimensionEntityName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>DIM</td></tr>
</tbody>
</table>
<br>

### DmAppendFact

#### Description

The **DvAppendFact** Key specifies the string to append to Fact objects in the Data Mart. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
FACT = FACT_FactEntityName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>FACT</td></tr>
</tbody>
</table>
<br>

### DmAppendExternal

#### Description

The **DvAppendExternal** Key specifies the string to append to External objects in the Data Mart. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
EXT = EXT_ExternalEntityName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>EXT</td></tr>
</tbody>
</table>
<br>

### DmAppendStaging

#### Description

The **DvAppendStaging** Key specifies the string to append to Staging objects in the Data Mart. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
STAGE = STAGE_DimensionEntityName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>STAGE</td></tr>
</tbody>
</table>
<br>

### DvAppendBridge

#### Description

The **DvAppendBridge** Key specifies the string to append to Bridge objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
BRD = BRD_BridgeEntityName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>BRD</td></tr>
</tbody>
</table>
<br>

### DvAppendHub

#### Description

The **DvAppendHub** Key specifies the string to append to Hub objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
HUB = HUB_EntityName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>HUB</td></tr>
</tbody>
</table>
<br>

### DvAppendLink

#### Description

The **DvAppendLink** Key specifies the string to append to Link objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
LNK = LNK_LinkName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>LNK</td></tr>
</tbody>
</table>
<br>

### DvAppendLinkSatellite

#### Description

The **DvAppendLinkSatellite** Key specifies the string to append to Link Satellite objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
LSAT = LSAT_LinkName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>LSAT</td></tr>
</tbody>
</table>
<br>

### DvAppendReference

#### Description

The **DvAppendReference** Key specifies the string to append to Reference objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
REF = REF_ReferenceEntityName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>REF</td></tr>
</tbody>
</table>
<br>

### DvAppendSatellite

#### Description

The **DvAppendSatellite** Key specifies the string to append to Satellite objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
SAT = SAT_EntityName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>SAT</td></tr>
</tbody>
</table>
<br>

### DvPreviewSchema

#### Description

The **DvPreviewSchema** Key specifies the default schema to use for Data Vault Accelerator generated preview objects

#### Example

```
pdv
```

#### Valid Value 

Any valid and safe SQL schema name

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>pdv</td></tr>
</tbody>
</table>
<br>

### DvDefaultSchema

#### Description

The **DvDefaultSchema** Key specifies the default schema to use for Data Vault objects

#### Example

```
rdv
```

#### Valid Value 

Any valid and safe SQL schema name

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>rdv</td></tr>
</tbody>
</table>
<br>

### DvAppendPointInTime

#### Description

The **DvAppendPointInTime** Key specifies the string to append to Point in time objects. Prefixing or suffixing is specified by the SuffixOrPrefixObject configuration

#### Example

```
PIT = PIT_EntityEventName
```

#### Valid Value 

Any valid and safe SQL and SSIS String

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>PIT</td></tr>
</tbody>
</table>
<br>

### DvSnapshotFromDate

#### Description

The **DvSnapshotFromDate** Key specifies the Data Vault Snapshot from/start date

#### Example

```
0001-01-01 00:00:00.000
```

#### Valid Value 

Any valid and safe SQL and SSIS date datatype and date expression

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>SnapshotFromDate</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="DateTime2" Scale="7"</td></tr>
<tr><td>Configuration Default</td><td>0001-01-01 00:00:00.000</td></tr>
</tbody>
</table>
<br>

### DvSnapshotToDate

#### Description

The **DvSnapshotToDate** Key specifies the Data Vault Snapshot to/end date

#### Example

```
9999-12-31 00:00:00.000
```

#### Valid Value 

Any valid and safe SQL and SSIS date datatype and date expression

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>SnapshotToDate</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="DateTime2" Scale="7"</td></tr>
<tr><td>Configuration Default</td><td>9999-12-31 00:00:00.000</td></tr>
</tbody>
</table>
<br>

### DvSnapshotIncremental

#### Description

The **DvSnapshotIncremental** Key specifies if the Data Vault Snapshot feature should provide incremental snapshots.

#### Example

```
Y
```

#### Valid Value 

Enumerator {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>Y</td></tr>
</tbody>
</table>
<br>

### DvSnapshotLastModifiedDate

#### Description

The **DvSnapshotLastModifiedDate** Key specifies the Data Vault Snapshot last modified date

#### Example

```
0001-01-01 00:00:00.000
```

#### Valid Value 

Any valid and safe SQL and SSIS datatype and expression

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>LastModifiedDate</td></tr>
<tr><td>Configuration Datatype</td><td>DataType="DateTime2" Scale="7"</td></tr>
<tr><td>Configuration Default</td><td>0001-01-01 00:00:00.000</td></tr>
</tbody>
</table>
<br>

### EnableRollbackStg

#### Description

The **EnableRollbackStg** Key specifies if the Staging Area should accommodate the orchestration rollback feature. This will roll back a failed previous load when identified by the orchestration engine. Note that the Staging Area is truncated on load using the normal load pattern making rollback here irrelevant.

#### Example

```
N
```

#### Valid Value 

Enumerator {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### EnableRollbackPsa

#### Description

The **EnableRollbackPsa** Key specifies if the Persistent Staging Area should accommodate the orchestration rollback feature. This will roll back a failed previous load when identified by the orchestration engine.

#### Example

```
N
```

#### Valid Value 

Enumerator {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### EnableRollbackRdv

#### Description

The **EnableRollbackRdv** Key specifies if the Raw Data Vault should accommodate the orchestration rollback feature. This will roll back a failed previous load when identified by the orchestration engine.

#### Example

```
N
```

#### Valid Value 

Enumerator {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### EnableInitialRecordRdv

#### Description

The **EnableInitialRecordRdv** Key specifies if the Raw Data Vault should produce initial records for entities. This is useful when an unbroken timeline is needed to support equijoins, inner joins on Hubs/Links to Sats regardless of the effectiveness dates used. With this configuration set to No, a satellite load of a new business key will only add a single row to the Raw Data Vault table. The effectiveness will be from the batch load date time to end of time. With the configuration set to Yes the Satellite load process will add 2 rows, the additional one will be a zero or ghost row with an effectiveness from start of time to the batch load date time.

#### Example

```
N
```

#### Valid Value 

Enumerator {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>N</td></tr>
</tbody>
</table>
<br>

### EnableEndDateRdv

#### Description

The **EnableEndDateRdv** Key specifies if the Raw Data Vault should end date loaded information. This is useful to simplify reads out of the Data Vault. The end dating will change the end data of the previous row to the load date of the new row and the new row will have an end date equal to the end of time specification. The process will also maintain a isCurrent flag for rows meaning it is trivial to derive the current valid set of data. The end dating process adds time and effort to the load processing time and can therefore be configured if needed. Setting this to No can potentially increase performance when loading in to the Data Vault.

#### Example

```
N
```

#### Valid Value 

Enumerator {Y, N}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>Y</td></tr>
</tbody>
</table>
<br>

### SsisMaxConcurrentExecutables

#### Description

The **SsisMaxConcurrentExecutables** Key specifies the number of SSIS control flow executables that can run in parallel. The default value of -1 translates to the number of logical processors plus 2 concurrent tasks. This value can be tweaked to optimise performance in certain scenarios.

#### Example

```
10
```

#### Valid Value 

A valid Integer value

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>-1</td></tr>
</tbody>
</table>
<br>

### SsisEngineThreads

#### Description

The **SsisEngineThreads** Key specifies the SSIS property with the same name. this defines the number of engine threads SSIS will use. This value can be tweaked to optimise performance in certain scenarios.

#### Example

```
10
```

#### Valid Value 

A valid Integer value

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>10</td></tr>
</tbody>
</table>
<br>

### SsisMaximumInsertCommitSize

#### Description

The **SsisMaximumInsertCommitSize** Key specifies the SSIS property with the same name. this defines the maximum insert commit size to use in a bulk operation. This value can be tweaked to optimise performance in certain scenarios.

#### Example

```
2147483647
```

#### Valid Value 

A valid integer value

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>2147483647</td></tr>
</tbody>
</table>
<br>

### SsisRowsPerBatch

#### Description

The **SsisRowsPerBatch** Key specifies the SSIS property with the same name. this defines the number of rows to use in a bulk operation. This value can be tweaked to optimise performance in certain scenarios.

#### Example

```
500000
```

#### Valid Value 

A valid integer value

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>500000</td></tr>
</tbody>
</table>
<br>

### SsisValidateExternalMetadata

#### Description

The **SsisValidateExternalMetadata** Key specifies if the SSIS component should validate the external metadata against the cached information. Setting this to false can be useful if the source metadata should be disregarded due to temporary changes or similar scenarios

#### Example

```
True
```

#### Valid Value 

Boolean Enumerator {True False}

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>true</td></tr>
</tbody>
</table>
<br>

### SsisDelayValidation

#### Description

The **SsisDelayValidation** Key specifies if the Ssis component should delay metadata validation. This is useful when the source or reference is not always available and there is a need to delay validation until later

#### Example

```
True
```

#### Valid Value 

Boolean Enumerator {True, False}

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>true</td></tr>
</tbody>
</table>
<br>

### SsisCheckConstraints

#### Description

The **SsisCheckConstraints** Key specifies if the destination transformation should check constraints when writing to source. By default, this is disabled to enable faster transfers. Within Staging, Persistent Staging and Data Vault layers’ constraints should not be enforced as it makes the solution less flexible and disallows parallel and out of sequence loading.

#### Example

```
False
```

#### Valid Value 

Boolean Enumerator {True, False}

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>false</td></tr>
</tbody>
</table>
<br>

### SsisCommandTimeout

#### Description

The **SsisCommandTimeout** Key specifies the command timeout to use for SSIS tasks

#### Example

```
10
```

#### Valid Value 

A valid Integer value

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>0</td></tr>
</tbody>
</table>
<br>

### SsisDefaultBufferMaxRows

#### Description

Defines the Maximum number of rows used in a task buffer. The default used is 10,000 rows

#### Example

```
10000
```

#### More information

<https://msdn.microsoft.com/en-us/library/ms141031.aspx>

#### Valid Value 

A valid Integer value

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>10000</td></tr>
</tbody>
</table>
<br>

### SsisDefaultBufferSize

#### Description

Define the default size of the buffer that the task uses, by setting the DefaultBufferSize property. The default buffer size is 10 megabytes, with a maximum buffer size of 2\^31-1 bytes.

#### Example

```
10485760
```

#### More information

<https://msdn.microsoft.com/en-us/library/ms141031.aspx>

#### Valid Value 

A valid positive Integer value up to 2\^31-1 bytes.

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td>10485760</td></tr>
</tbody>
</table>
<br>

### SsisBufferTempStoragePath

#### Description

Defines the part where SSIS will store temporary buffer data if needed when processing a package. The default location (defined by the TMP/TEMP environment variables) is used if this key is empty.

#### Example

```
E:\FastDisk\Folder\
```

#### Valid Value 

A valid path.

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>

### SsisBLOBTempStoragePath

#### Description

Defines the part where SSIS will store temporary BLOB data if needed when processing a package. The default location (defined by the TMP/TEMP environment variables) is used if this key is empty.

#### Example
```
E:\FastDisk\Folder\
```

#### Valid Value 

A valid path.

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>

### AzureDestStorageAccountName

#### Description

The Destination Storage Account Name used when writing to an Azure storage container.

#### Valid Value 

A valid Account Name. Account names are unique across Azure, and contains 3-24 lowercase characters and numbers

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>

### AzureDestStorageAccountKey

#### Description

The Destination Account Key used when writing to an Azure storage container.

#### Valid Value 

A valid Account Key.

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>

### AzureDestContainerName

#### Description

The Destination Container Name used for writing to an Azure storage container.

#### Valid Value 

A valid Azure Container Name. container names are 3-63 lowercase alphanumeric and dash

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>

### AzureSourceStorageAccountName

#### Description

The Source Storage Account Name used for sourcing from an Azure storage container.

#### Valid Value 

A valid Account Name. Account names are unique across Azure, and contains 3-24 lowercase characters and numbers

####  Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>

### AzureSourceStorageAccountKey

#### Description

The Source Container Account Key used for sourcing from an Azure storage container.

#### Valid Value 

A valid Azure Storage Account Key.

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>

### AzureSourceContainerName

#### Description

The Source Container Name used for sourcing from an Azure storage container.

#### Valid Value 

A valid Azure Container Name. container names are 3-63 lowercase alphanumeric and dash

#### Default Metadata information

<table class="ItemList">
<thead>
<tr><th>Key</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td>Configuration Value</td><td></td></tr>
</tbody>
</table>
<br>