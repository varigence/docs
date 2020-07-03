---
uid: change-data-capture-source-to-staging
title: Change Data Capture Source to Staging
---
# Change Data Capture Source to Staging

Microsoft SQL Server provides a feature to capture information about changes in tables called Change Data Capture (CDC). This runs on the source server, monitors the defined table for changes and present a list of those identified changes in a separate table. SQL Server provides a set of functions that allows extraction of the change records as well as metadata about the change.

More information on CDC from Microsoft Docs: [About Change Data Capture (SQL Server)](https://docs.microsoft.com/en-us/sql/relational-databases/track-changes/about-change-data-capture-sql-server?view=sql-server-ver15)

BimlFlex allows easy integration of CDC source objects using the `SSIS: Source -> Target` integration template.

CDC is enabled on the source database as well as on the individual tables that should be included. Once CDC has been enabled the capture process reads the SQL Server log and applies the changes detected to the change tables. CDC refers to these tables and their corresponding functions as the Capture Instance. In the documentation the capture instance name defaults to `cdc.SchemaName_TableName_CT` pattern. For the SalesLT.Product table in AdventureWorksLT that becomes `cdc.SalesLT_Product_CT`

The changes in the change table are only persisted in the database for a configurable, limited, amount of time. It is important that the load process can extract all data out of the change tables before the changes are purged, so make sure the time interval allows for any issues to be resolved, including time for weekend and holidays.

For an existing table, there is data already present in the base table that needs to be loaded before incremental changes can be loaded from the change table. BimlFlex uses the project parameter `IsInitialLoad` to indicate if the source should read from the base table or the change table.

CDC provides 2 functions to get the data in the change table, getAllChanges and getNetChanges. These provides either all available changes in the change table or only the last one. Depending on requirements from the business analysis the object load should be configured with the one or the other. Each Object in the CDC BimlFlex project has an object type of either `CDC All` or `CDC Last` that will use the corresponding `cdc.fn_cdc_get_all_changes_<capture_instance>` or `cdc.fn_cdc_get_net_changes_<capture_instance>` function when loading.

## Project Configuration

A CDC Project is defined as a normal project with the `SSIS: Source -> Target` integration template.

The CDC specification itself is defined on the included objects. For each object in the table, define its Object Type as either `CDC All` or `CDC Last` to activate the CDC functionality in the Project.

If there are other objects that are not CDC from the source, they need to be added to a separate project. Only CDC objects can be in the CDC project.

## Object Metadata

The Metadata required for the object load is imported from the base tables. The required additional metadata for the change tracking tables is derived automatically by BimlFlex. Additional modeling metadata for Data Vault acceleration is added as normal to the source objects and does not affect the CDC load process.

## Parameters

The CDC Process uses an automatically created high watermark parameter for loading that equates to the last loaded max LSN and its corresponding mapped date time.

## Configuration Overrides and Considerations

The CDC Process uses several SSIS DataFlow Expression overrides for the metadata columns used. 

| Column | SSIS DataFlow Override |
| ------ | ---------------------- |
| RowChangeType | `[__$operation]==1?"D":[__$operation]==2?"I":"U"` |
| RowEffectiveFromDate | `@[User::IsInitialLoad] ? @[User::ParentBatchStartTime] : DATEADD("ns", ([__$rownumber]-1) * 100, (DT_DBTIMESTAMP2, 7)[__$start_dt])` |
| RowIsDeleted | `[__$operation]==1?TRUE:FALSE` |

These configuration overrides reuse the CDC metadata for the target load. The RowEffectiveFromDate column is populated with the identified change datetime from the CDC process and the RowChangeType and RowIsDeleted columns are derived from the CDC Operation

## Considerations for re-synchronization of CDC loads

The initial load function assumes a clean load from the source system to an empty target. The non-initial loads rely on the change tables for loading only changes identified in the CDC process and that are available in the change tracking tables. If the source process experiences outages there might be a need to resynchronize the data. This id currently implemented through a bespoke process that would require both a custom initial load and a custom delete detection load from the base table.

## Additional CDC Notes

The process that capture changes from the SQL Server log has a delay between when the change is introduced in the source table and when it is extracted from the log and added to the change table. This might need additional consideration in certain integration scenarios.

The timestamps applied to the changes are derived from the collection process. For multiple rapid changes to a table there might be several change table rows with the same effective from datetime. The order of these rows is available in the change tracking table. BimlFlex uses that to order changes and to give each row a unique RowEffectiveFromDate value.

For performance reasons the row hash is not stored in the CDC tables, this allows for faster inserts of the initial load and the identified changes. Since the changes are identified and managed by the CDC process there is never any need to compare the changes delivered from the change tracking tables to the PSA tables - by definition they are always changes to existing rows.
