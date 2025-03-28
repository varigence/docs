---
sidebar_position: 5
title: Installing the BimlCatalog Database
description: Detailed instructions on the installation of the BimlCatalog through BimlFlex installer or through BimlStudio
tags: [BimlFlex, Walkthrough]
---
# BimlCatalog Database

The BimlCatalog database ('BimlCatalog') contains the orchestration and run time information needed to properly load the data solution. It logs audit information and errors from processes and provides orchestration for batches in case failures occur, mid load.



:::danger

The BimlCatalog database contains crucial data for the data warehouse auditing, logging and orchestration. It is important to back up and maintain a disaster recovery policy that matches the organizational requirements for this database.

:::


The BimlCatalog requires a SQL Server to be installed into. This can be an Azure SQL Database, a Managed Instance or a SQL Server database that is accessible through a Self-Hosted Integration Runtime. Using the deployment assets it is possible to deploy the BimlCatalog in a database that contains other objects as well, but the best practice and most common approach is to deploy the BimlCatalog into its own dedicated database.

## Installation

There are various different methods used to install the BimlCatalog:

* Using the BimlFlex installer, or
* Install the BimlCatalog via BimlStudio, or
* Installing the BimlCatalog via the command line

### Installing the BimlCatalog Database using the Installer

#### Enable the Database Installation

On the first pane of the installation process, there is the option to setup and install the BimlCatalog databases. Check this box before continuing.

![Setup BimlFlex Button](/img/bimlflex/bfxinstalldbs.png "Setup BimlFlex Button")

#### Setting the Connection Strings

Proceed through the setup until the "Install or Upgrade BimlFlex Databases" screen is reached. This represents the location(s) of the BimlFlex databases to be installed.

Click `Test` to test the target connection and ensure that it is valid. `Test` will change to `Valid` once confirmed.  
Once a working connection string has been validated, click the `Add` button to finalize the database configuration.

![Configure Connection](/img/bimlflex/bfx-install-test.png "Configure Connection")

![Valid Connection](/img/bimlflex/bfx-install-valid.png "Valid Connection")

![Valid Connection Added](/img/bimlflex/bfx-install-added.png "Valid Connection Added")

The desired installation location is now saved and will be used to install the database.



:::danger

It is important to back up any databases prior to an upgrade.

:::


Before finalizing the BimlCatalog upgrade or installation, examine the *Pending Actions* list. Ensure that there is a pending action that corresponds to the desired database installation.

Press `Upgrade` or `Install` to finalize the database installation or upgrade.

### Installing the BimlCatalog Database from BimlStudio

#### Open the Project in BimlStudio

Alternatively, it is also possible to install the databases from the BimlFlex project in BimlStudio.

In order to setup the databases, first create a [BimlFlex project for BimlStudio](../build-and-deployment/setup-bimlstudio-project). When the BimlFlex project is opened in BimlStudio, the metadata database setup option is available in the BimlFlex Ribbon.

![Setup BimlFlex Button](/img/bimlflex/metadata-database-setup-btn.png "Setup BimlFlex Button")  

#### Setting the Connection String

Set up the databases through the **Setup BimlFlex** dialog.

![Setup BimlFlex Dialog](/img/bimlflex/metadata-database-setup-dialog.png "Setup BimlFlex Dialog")

Configure the connection string to point to the database instance where the database should be created.



:::note

Change the name of the databases from its default, **BimlCatalog**, as needed.

:::


#### Deployment

Click **Deploy** to deploy the databases

![Deploying BimlFlex Databases](/img/bimlflex/installing-text.png "Deploying BimlFlex Databases")

Once setup completes, configure the BimlFlex Project and BimlFlex App metadata connections to use the new **BimlFlex** database. Configure The project and the Operational Reports to use the **BimlCatalog** database.

### Command Line/Terminal-Based Installation

To deploy the databases using the Microsoft `SqlPackage.exe` application (https://docs.microsoft.com/en-us/sql/tools/sqlpackage), or a similar task/process, the following process can be used.

The BimlFlex metadata database and BimlCatalog orchestration and auditing databases are delivered as dacpac files, with a pre-upgrade script for upgrades of existing databases. The dacpac and pre-upgrade script files can be extracted from BimlStudio.

Open a BimlFlex project in BimlStudio, navigate to the BimlFlex Ribbon UI tab, click the Debug Utilities option, click Extract DACPAC Folder button.

Once the dacpacs and scripts are available, it is possible to deploy them to a target using the `SqlPackage.exe` application.

Note that any existing database must be updated by first running the corresponding `BimlFlex_PreDacpac_Deployment.sql` or `BimlCatalog_PreDacpac_Deployment.sql` script.

## BimlCatalog Contents

### Parameter values

The BimlCatalog allows for tracking of a variety of parameter values. These can be parameters that are used in packages, pipelines, SSIS projects, and more. This provides the user with a central location to handle parameter values.

### Orchestration

All orchestration information is maintained within the BimlCatalog database tables. This includes Azure Data Factory pipelines and SSIS Packages and Tasks.

### BimlCatalog Approach

The BimlCatalog database is open, and can be queried by the data team. It also provides an abstraction layer through Stored Procedures for interacting with the data.

### Reporting Views

For reporting there are views provided that simplifies querying information about the data logistics. Some of these are available from the [BimlFlex App](../metadata-editors), and additional reporting can be found as part of the open source [BimlFlex Community Repository](https://github.com/varigence/BimlCatalog/).

Specifically, a Power BI Dashboard is [available in the BimlFlex Community Repository](https://github.com/varigence/BimlCatalog/tree/master/BimlCatalogReporting/PowerBI) that displays overview statistics as well as more detailed information about the data logistics executions recorded in the BimlCatalog database.

## Maintenance

### Maintaining the BimlCatalog database

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

### Maintaining the BimlCatalog database using SQL Server Agent

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
