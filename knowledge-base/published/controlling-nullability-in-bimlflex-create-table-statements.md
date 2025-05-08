---
uid: kb-controlling-nullability-in-bimlflex-create-table-statements
title: Controlling Nullability in BimlFlex Create Table Statements
summary: "BimlFlex column nullability explained: control it automatically or via custom settings for precise CREATE TABLE statements."
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
Overview
--------

BimlFlex provides a default approach to nullability when generating **CREATE TABLE** statements. By default, non-key columns are allowed to be nullable to avoid data load failures. However, you can change this behavior and control nullability more precisely using the **Use User Null Assignment** setting in the **Core** settings. This article explains how the setting works and walks through examples illustrating each approach.

Default Behavior (Setting Disabled)
-----------------------------------

When **Use User Null Assignment** is _disabled_, BimlFlex applies these rules automatically:

1.  All key columns (columns marked as **IsPrimaryKey**, **IsIntegrationKey**, or **IsSourceKey**) are set to **NOT NULL**.
2.  All non-key columns are set to **NULL**.

This approach helps ensure that when you load data:

*   Primary and integration key columns must always have values.
*   Other columns can accept **NULL** values (avoiding potential load failures when source data contains unexpected **NULL**s).

### Example

Consider a table named **Address** with the following metadata:

ColumnName

IsPrimaryKey

IsIntegrationKey

IsSourceKey

IsNullable

Address\_BK

Y

Y

 

 

AddressID

 

 

Y

 

AddressLine1

 

 

 

 

AddressLine2

 

 

 

Y

ModifiedDate

 

 

 

 

And the following configuration columns:

ConfigurationKey

ConfigurationValue

IsNullable

RowEffectiveFromDate

RowEffectiveFromDate

 

RowAuditId

RowAuditId

 

RowRecordSource

RowRecordSource

 

RowHash

RowHash

 

With **Use User Null Assignment** disabled, BimlFlex generates:

    CREATE TABLE [awlt].[Address] (
        [Address_BK]           NVARCHAR(100)       NOT NULL, 
        [AddressID]            INT                 NOT NULL,
        [AddressLine1]         NVARCHAR(60)        NULL,
        [AddressLine2]         NVARCHAR(60)        NULL,
        [ModifiedDate]         DATETIME            NULL,
        [RowEffectiveFromDate] DATETIME2(7)        NOT NULL,
        [RowAuditId]           BIGINT              NULL,
        [RowRecordSource]      VARCHAR(10)         NULL,
        [RowHash]              VARBINARY(20)       NULL
    );
    

**Key columns**: **Address\_BK**, **AddressID**, and **RowEffectiveFromDate** are **NOT NULL**. **Non-key columns**: **AddressLine1**, **AddressLine2**, **ModifiedDate**, **RowAuditId**, **RowRecordSource**, and **RowHash** are **NULL**.

Custom Control (Setting Enabled)
--------------------------------

When **Use User Null Assignment** is _enabled_, BimlFlex respects the **IsNullable** attribute for each column. The rules become:

1.  All key columns (_IsPrimaryKey_, _IsIntegrationKey_, or _IsSourceKey_) remain **NOT NULL**.
2.  For non-key columns, BimlFlex sets them to **NOT NULL** if **IsNullable** = _No_, and to **NULL** if **IsNullable** = _Yes_.

### Example

Using the same metadata as above, but this time **Use User Null Assignment** is enabled. We see that:

*   **AddressLine2** is explicitly flagged as **IsNullable** = _Yes_.
*   Every other non-key column does not have **IsNullable** set (equivalent to _No_).

The resulting **CREATE TABLE** statement is:

    CREATE TABLE [awlt].[Address] (
        [Address_BK]           NVARCHAR(100)       NOT NULL, 
        [AddressID]            INT                 NOT NULL,
        [AddressLine1]         NVARCHAR(60)        NOT NULL,
        [AddressLine2]         NVARCHAR(60)        NULL,
        [ModifiedDate]         DATETIME            NOT NULL,
        [RowEffectiveFromDate] DATETIME2(7)        NOT NULL,
        [RowAuditId]           BIGINT              NOT NULL,
        [RowRecordSource]      VARCHAR(10)         NOT NULL,
        [RowHash]              VARBINARY(20)       NOT NULL
    );
    

Recommendations and Considerations
----------------------------------

*   **Recommendation**: We recommend keeping **Use User Null Assignment** _disabled_ unless you have a specific requirement to manage nullability at the column level.
*   **Data Source Changes**: If you enable this setting, you will need to monitor and manage nullability changes carefully. If the source system changes a column’s nullability, remember to update the metadata in BimlFlex accordingly before regenerating your data solution.
*   **Maintenance Overhead**: Enabling the custom control adds more manual steps and oversight. Confirm that your project requires this level of control before turning on **Use User Null Assignment**.

Summary
-------

BimlFlex allows you to control column nullability through a single setting in the **Core** settings:

*   **Disabled**: Automatically marks key columns as **NOT NULL** and all other columns as **NULL**.
*   **Enabled**: Marks key columns as **NOT NULL** and respects your **IsNullable** column settings for all other columns.

Unless you have strict requirements, keep the setting _disabled_ for simpler maintenance. If you do enable it, ensure your column metadata is accurate and kept up to date to avoid any discrepancies or data load failures.

* * *