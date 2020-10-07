---
uid: bimlcatalog-database
title: BimlCatalog database
summary: Documentation on the BimlCatalog database, including deployment options, parameter values, orchestration, and reporting
---
# BimlCatalog database

The BimlCatalog database contains the orchestration and run time information needed to properly load the data warehouse. It logs audit information and errors from processes and provides orchestration for batches in case failures occur, mid load.

> [!IMPORTANT]
> The BimlCatalog database contains crucial data for the data warehouse auditing, logging and orchestration. It is important to back up and maintain a disaster recovery policy that matches the organizational requirements for this database.

## Deploying the BimlCatalog Database

The database is created through the BimlFlex installer or through the `Setup BimlFlex` menu option in the BimlFlex Ribbon UI in BimlStudio.

* See the Installation Guide: [Installing BimlFlex](xref:bimlflex-installing-bimlflex) for deploying the database
* See this guide for information regarding how to deploy after installation: [BimlFlex Metadata Database Installation](xref:bimlflex-metadata-database-installation)

## Parameter values

BimlCatalog allows for tracking of a variety of parameter values. These can be parameters that are used in packages, pipelines, SSIS projects, and more. This provides the user with a central location to handle parameter values.

## Orchestration

All orchestration information is maintained within the BimlCatalog database tables. This includes Azure Data Factory pipelines and SSIS Packages and Tasks.

## BimlCatalog Approach

The BimlCatalog database is open, queryable and can be interacted with by the data warehousing team. It also provides an abstraction layer through Stored Procedures for interacting with the data.

## Reporting Views

For reporting there are views provided that simplifies querying information about the loads

## Dashboard

A Power BI Dashboard is [available in the repository](https://github.com/varigence/BimlCatalog/tree/master/BimlCatalogReporting/PowerBI) that displays an overview as well as more detailed information about the executions logged in the BimlCatalog database.

## Maintaining the BimlCatalog database

The amount of detailed data stored in the BimlCatalog database can be maintained through the following Stored Procedures:

* `[ssis].[ArchiveAll]`

This stored procedure calls the following individual administrative tasks

* `EXEC [ssis].[ArchiveRowAudit]`
* `EXEC [ssis].[ArchiveRowCount]`
* `EXEC [ssis].[ArchiveTaskExecution]`
* `EXEC [ssis].[ArchiveAuditLog]`
* `EXEC [ssis].[ArchiveConfigVariable]`

The number of days used for data retention for the different tables are specified in the configuration table in the database:

* `[admin].[Configurations]`

These are the default retention periods for the tables:

| ConfigurationKey             | ConfigurationValue |
| ---------------------------- | -----------------: |
| ConfigVariablePeriod         | 120 |
| AuditLogRetentionPeriod      | 120 |
| RowAuditRetentionPeriod      | 30 |
| RowCountRetentionPeriod      | 90 |
| TaskExecutionRetentionPeriod | 30 |

## Maintaining the BimlCatalog database using SQL Server Agent

The following sample script creates a weekly maintenance job that runs the `[ssis].[ArchiveAll]` stored procedure. If the database name has been changed from the default BimlCatalog, please update the script task to target the new name.

```sql
BEGIN TRANSACTION
DECLARE @ReturnCode INT
SELECT @ReturnCode = 0

IF NOT EXISTS (SELECT name FROM msdb.dbo.syscategories WHERE name=N'Maintenance' AND category_class=1)
BEGIN
EXEC @ReturnCode = msdb.dbo.sp_add_category @class=N'JOB', @type=N'LOCAL', @name=N'Maintenance'
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback

END

DECLARE @jobId BINARY(16)
EXEC @ReturnCode =  msdb.dbo.sp_add_job @job_name=N'BFX - Maintenance',
        @enabled=1,
        @notify_level_eventlog=0,
        @notify_level_email=0,
        @notify_level_netsend=0,
        @notify_level_page=0,
        @delete_level=0,
        @description=N'BimlFlex Maintenance.',
        @category_name=N'Maintenance',
        @owner_login_name=N'sa', @job_id = @jobId OUTPUT
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback

EXEC @ReturnCode = msdb.dbo.sp_add_jobstep @job_id=@jobId, @step_name=N'BFX - BimlCatalog - ssis.ArchiveAll',
        @step_id=1, 
        @cmdexec_success_code=0,
        @on_success_action=1,
        @on_success_step_id=0,
        @on_fail_action=2,
        @on_fail_step_id=0,
        @retry_attempts=0,
        @retry_interval=0,
        @os_run_priority=0, @subsystem=N'TSQL',
        @command=N'EXEC  [ssis].[ArchiveAll]',
        @database_name=N'BimlCatalog',
        @flags=0
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
EXEC @ReturnCode = msdb.dbo.sp_update_job @job_id = @jobId, @start_step_id = 1
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback

DECLARE @sheduleId UNIQUEIDENTIFIER = NEWID()

EXEC @ReturnCode = msdb.dbo.sp_add_jobschedule @job_id=@jobId, @name=N'Weekly Sundays at Midnight',
        @enabled=1,
        @freq_type=8,
        @freq_interval=1,
        @freq_subday_type=1,
        @freq_subday_interval=0,
        @freq_relative_interval=0,
        @freq_recurrence_factor=1,
        @active_start_date=20190101,
        @active_end_date=99991231,
        @active_start_time=0,
        @active_end_time=235959,
        @schedule_uid=@sheduleId
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
EXEC @ReturnCode = msdb.dbo.sp_add_jobserver @job_id = @jobId, @server_name = N'(local)'
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
COMMIT TRANSACTION
GOTO EndSave
QuitWithRollback:
    IF (@@TRANCOUNT > 0) ROLLBACK TRANSACTION
EndSave:
GO
```
