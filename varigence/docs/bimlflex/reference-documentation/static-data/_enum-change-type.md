---
title: Change Types
description: Documentation of the management of metadata values
tags: [BimlFlex, Reference]
---
<!--
Change Types
Header not included because it is used in different ways
-->
**Change Types** are applied using the [**Column Editor**](../../metadata-editors/column-editor) and drive the behavior and purpose of the **Column** for the design and code generation process. The available change types are dependent on the way the **Connection** is used in a BimlFlex **Project**. Depending on the connection's **Integration Stage** some options may, or may not be, available.

The following options are available:

| Change Type         | Code | Description | Applies To |
| ------------------- | ---- | ----------- | ---------- |
| Update              | CHG  | Assigns the column to track the latest value assigned to the column. Also used as default for attribute columns. In Dimensional Modeling, this corresponds to a 'Type 1' column.| All integration stages, any column. |
| Key                 | KEY  | Indicates that the column is treated as a key value in downstream processing. It is part of the object's Primary Key definition for all intents and purposes.| All integration stages, any column. |
| Ignore              | IGN  | Assigns the column to be ignored from all processing. This means that the column will not appear in the object and any data logistics associated with it.| All integration stages, any column. |
| Track History       | HST  | Assigns the column to track historical changes for the column. In Dimensional Modeling, this corresponds to a 'Type 2' column. | Columns for an objects belonging to a connection with a `Data Mart` integration stage. |
| Change Data Capture | CDC  | Indicates this column is used for historization in Data Marts. | Columns for an objects belonging to a connection with a `Data Mart` integration stage. |
| Hash Distribution   | HDK  | Assigns the column to be used for hash distribution when using Synapse objects. | All integration stages, any column, but only when used for Synapse connections. |
| Transient           | TRS  | Assigns the column to be used in relevant data flow tasks, but not to persist the information. Used when a column value is needed for an expression but the value of the column itself is not needed to be persisted. | Any object used in a project with the `SQL Server Integration Services (SSIS)` integration template without pushdown processing enabled. |
| Exclude DV          | EXC  | Processes the column into the Staging Area and Persistent Staging Area (if configured), but does not process/accelerate the column into the Data Vault. | Columns for an objects belonging to a connection with a `Source System` integration stage, any object. |
| Link Reference      | REF  | Defines what columns will be used to define Surrogate Keys for the associated Link. These values will be pre-calculated (pre-hashed, if hashing is used) and saved in the Staging Area, but not in the Persistent Staging Area (if configured). Generated by BimlFlex during acceleration to map source columns to individual Link Surrogate Keys. | Columns for an objects belonging to a connection with a `Source System` integration stage, any object. |
| Link Degenerate     | DGA  | Assigns the column as part of the Unit of Work for a Link. The column will be included in the hashing of the Link's Surrogate Key, and will be added to the Data Vault Link object. This is also known as a dependent child key. | Columns for an objects belonging to a connection with a `Source System` integration stage, any object. |
| Link-Satellite Reference | LSR | Defines what columns will be used to define the Surrogate Keys for the target Link Satellite. These values will be pre-calculated (pre-hashed, if hashing is used) and saved in the Staging Area, but not in the Persistent Staging Area (if configured). Generated by BimlFlex during acceleration to map source columns to individual Link Surrogate Keys. | Columns for an objects belonging to a connection with a `Source System` integration stage, any object. |
| Stub Hub            | STH | Designates an object to be created as its own Hub using the Data Vault Accelerator, with a Link to the main Hub that will be created from the source object. The column on which Stub Hub is applied will be used as Business Key / Surrogate Key definition. | Columns for an objects belonging to a connection with `Source System` integration stage, any object. |
| Driving Key         | LDK | A Driving Key is a special column that is used in Data Vault to drive custom historization in Link Satellites. This occurs when changes in Link key values must trigger a change record in the Link Satellite. | Columns for an objects belonging to a connection with a `Data Vault` integration stage. |
| Multi Active Row    | MAK | Assigns the column to be a multi-active value for the associated object. Used to determine the grain of a Multi-Active Satellite. This column must also be part of the Primary Key, together with the Integration Key. | Columns for an objects belonging to a connection with `Source System` integration stage, any object. |
<!-- Hiding these until clarification is provided. These may be removed.>
| Hub Reference       | HRF | | TBD | TBD |
| Link Natural Key    | LNK | | TBD | TBD |
| Hub Natural Key     | HNK | | TBD | TBD |
| Multi Active Set    | MAS | Assigns the column to define a set for multi-activeness. Used when a set of rows are active and maintained as a unit for the Satellite. | Columns for an objects belonging to a connection with `Source System` integration stage, any object. |
-->