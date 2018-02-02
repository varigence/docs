# Using prepared trial metadata

[Back to overview](https://varigence.com/Documentation/BimlFlex/Article/Trial+Process+Overview)

**Supporting Videos**

*TODO: Comming Soon*

**Supporting BimlFlex Documentation**

*TODO: Comming Soon*

## Using prepared trial metadata

The BimlFlex database contains preloaded trial metadata in the archive tables. It is possible to restore the trial metadata from any point in the trial process and start from there.

## Detailed Steps

The following detailed steps walks through how to use the prepared trial metadata

### running stored procedures to restore trial metadata from archive

The trial metadata is stored in the archive tables and uses the standard BimlFlex archive and snapshot functionality to restore metadata.
The stored procedure that restores metadata is called

`TBA`

and is called through the following syntax

```sql
DECLARE @RC int
DECLARE @CustomerUID nvarchar(40)
DECLARE @VersionName nvarchar(50)
DECLARE @SnapshotName nvarchar(128)
DECLARE @UserName nvarchar(100)

-- TODO: Set parameter values here.

EXECUTE @RC = [archive].[SetRollbackSnapshot]
   @CustomerUID
  ,@VersionName
  ,@SnapshotName
  ,@UserName
GO

```

The following snapshots are available for restores:

|No | Name | Description               |
|---|------|-------------------------- |
|1  | Snapshot 1  | Snapshot of metadata for source to staging load for AdventureWorks LT |
|2  | Snapshot 2  | Snapshot of metadata for source to staging to persistent staging load for AdventureWorks LT |
|3  | Snapshot 3  | Snapshot of modelled metadata before acceleration of Data Vault objects |
|4  | Snapshot 4  | Snapshot of metadata after acceleration of Data Vault objects |
|5  | Snapshot 5  | Snapshot of metadata after adding Bridge and PIT Data Vault objects |
|6  | Snapshot 6  | tba |
|7  | Snapshot 7  | tba |
|8  | Snapshot 8  | tba |
|9  | Snapshot 9  | tba |
|1o  | Snapshot 10  | tba |
