# Memory usage in SSIS

SQL Server SSIS projects require memory to process data and load from source to target.

When the SSIS engine is running on the same server as the SQL Server engine the SSIS load process needs to contest with the database engine for memory. The default behavior and configuration for SQL Server is to use and hold on to as much memory as possible. This might lead to memory issues running SSIS Packages.

Apart from options to:

* increase total memory in the machine
* run SQL Server and SSIS on different machines
* configure SQL Server max memory usage to leave RAM available to SSIS
* optimize loads to minimize memory usage

the following considerations are also available in BimlFlex to affect memory usage

## Settings

use the BimlFlex settings metadata sheet to tweak the behavior of the created packages.

| SettingKey | SettingValue | Comment |
| --- | --- | --- |
| `DvUseCacheLookup` | default: `N` | Setting this to `Y` will configure the SSIS packages to use Cache Lookups for the Data Vault load. This will cache the lookup data to disk |
| `PsaUseCacheLookup` | default: `N` | Setting this to `Y` will configure the SSIS packages to use Cache Lookups for the PSA lookup in Source to Staging loads. This will cache the lookup data to disk |
| `SsisBufferTempStoragePath` | |
| `SsisBLOBTempStoragePath` | |
| `SsisDefaultBufferMaxRows` | default: `10000` | Start by setting AutoAdjust to `True` |
| `SsisDefaultBufferSize` | default: `10485760` | Start by setting AutoAdjust to `True` |
| `SsisMaximumInsertCommitSize` | default: `2147483647` | |
| `SsisRowsPerBatch` | default: `500000` | |
| `SsisAutoAdjustBufferSize` | default: `TRUE` | Allows SSIS to adjust buffer sizes as needed |

## 32 vs 64-bit runtime

When running the SSIS package, it can be executed by either the 32 or 64-bit version. The 64-bit version can address more memory so it is the recommended choice unless there is a specific, other requirement for the 32-bit engine.

## Debugging projects in Visual Studio

For larger projects, Visual Studio might run out of memory running the packages in debug mode. For these scenarios, consider running the packages using the `Start Without Debugging (Ctrl+F5)` option in Visual Studio.