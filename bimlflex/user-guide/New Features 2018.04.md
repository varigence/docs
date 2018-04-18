## New Features in BimlFlex 2018.04

### Data Type Mappings

The Data Type Mappings function allows for expansion of data types. This allows the source data types to be converted to a more accommodating type on load. This in turn allows for changes in the source datatypes without affecting the data warehouse. As an example, a source with a varchar(10) column can update that column to a longer string or it can update to nvarchar to support Unicode characters. either change would require a rebuild of the load process to accommodate the new data type. A Data Type Mapping to nvarchar(100) would negate that need and allow the changed data type to be loaded with little or no impact.

The Data Type Mappings behavior has a set of default expansion rules. These can be customized in the `DataTypeMappings` Sheet in the BimlFlex settings.

### Control creation of Link Satellites

A setting has been added that control if the Data Vault Accelerator should create Link Satellites for generated Links. For some modelling approaches the effectiveness of a relationship is tracked in a Hub rather than a Link Satellite, in other scenarios the link satellite adds limited functionality. This setting controls the automatic acceleration of the Link Satellites. 

The setting `DvAccelerateLinkSatellite` has been added to the `Settings` sheet. This controls if Link Satellites should be accelerated. This feature has a default value of ` N `, meaning no Link Satellites will be accelerated unless it is updated to ` Y `. Overrides can be created using attribute `SettingValue` definitions for specific source tables that should have a different setting to the defined default.

### Global Extension Points

Project Parameters are normally used across multiple Ssis projects. this global target for parameters allows a single defintition to be injected into all projects.

Use Extension Point `ProjectParameter` with target `@@global`:

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" target="@@global" #>
<Parameter Name="YourName" DataType="String" IsRequired="true">DefaultParameterValue</Parameter>
```

More information on this is available in this video

https://www.youtube.com/watch?v=4V8v4Brbg7E



****************************************************************************************************************



* Update: Split `Use My ConnectionStrings` and `Use My Exclusions` in BimlStudio and BimlFlex Excel Add-in configuration

* New: Add SsisAnnotations to all packages

SSDT projects

* Update: Add support for `AutoAdjustBufferSize` Ssis setting for supported SSIS versions

* Add: support for SQL Server 2017 custom SSIS components

* Add: support for `SelectBySql` for `DISTINCT, TOP n` scenarios

* Add: support for `OrderBySql` for `ORDER BY Column` scenarios

* New: Add `Quick Parse` option for BimlStudio options to only load placeholder objects when modelling

* New: Refactor Data Vault patterns to exclude end dating code when `EnableEndDateRdv` setting is set to `"N"`

* Performance update to BimlFlex to use local cache when no changes to metadata

* Performance update to minify Biml files in cache

* New: Use `Page` compression for tables as default

* New: Added velocity profiling for PSA tables


* Change: Change PIT stored procedure to only use SAT FromDate to support insert only Data Vault

* Fix: Adding support for Same As Links in the Data Vault Accelerator

* Fix: Adding support for Azure Blob Storage for Connections to support both Azure SQLDW and Azure SQL VM

* Update Snapshot capture to database and add-in

* Update add-in to default IsNotPersistent for derived BusinessKeys on Import Metadata

* Added Set Parameter for SQL based stored procedures
* Added support for Azure Blob Storage based staging

* Added additional logic to handle the `ParameterColumnExpression` with `ExecuteSqlOnSource`

* Update to check is initial load before Data Flow Task for dimension and fact Ssis loads


* Remove `IsInitialLoad` project parameter dependency. `IsInitialLoad` is now automatically set by querying the PSA for existing rows

* Potentially breaking change to Ssis Hashing Custom component. Use hashing compatible with Azure Sql Data Warehouse and other SQL based CHECKSUMS and HASHBYTES functions. When updating to using Sql compatible Hashing, all preexisting Data Vault surrogate keys will need to be updated and rehashed from the Business Key

* Added support for ODBC parameterized queries as Expressions


* Added `ApplyLookupFilterRdv` to filter Ssis lookups by joining to the Staging layer. This minimizes memory usage for lookup components. This cross database join functionality requires the databases to be co-located or the tables to be in the same database


* Updates to `RowCount` Ssis Custom Component logic to add aggregate columns for source queries

* Added `RowCountSum` to the Metadata model and Add-in drop down for `CustomAttributes`

* Updates to BimlFlex configurations, now split into configurations and settings tables

* Added `CreateSql` and `OverrideSql` functionality to both database and Extension Points to support custom Sql Ddl object creation and custom Sql source queries


### Automatic load from SQL Server CDC Source tables

* Added SQL Server CDC source component
