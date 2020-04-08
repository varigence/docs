# New Features in BimlFlex 2018.1

## Azure Blob Storage-based staging and persisting

BimlFlex now has full support for Azure Blob Storage as a staging and file persistence for both Azure SQL Data Warehouse and SQL Server 2016+ scenarios. The blob-based solution architecture allows data extracts to be compressed into flat files and transferred to Azure based blob storage. This is accessed through External Table definitions and loaded in to the Data Warehouse using ELT based processes. The blob-based files are available to use in other processes such as Azure Data Lake Analytics and Machine Learning scenarios where the tool can access blob storage-based datasets directly.

## Full support for SQL Server CDC Sources

BimlFlex has added full SQL Server CDC source component support.

For sources using Microsoft SQL Server CDC, Change Data Capture, to derive deltas BimlFlex is now able to directly read only changed data.

Metadata modeling uses the base tables for metadata ingestion and modeling. For initial loads BimlFlex will read current state data from the base tables. For incremental loads BimlFlex will automatically derive deltas from the CDC tables.

## Data Type Mappings

The Data Type Mappings function allows for expansion of data types. This allows the source data types to be converted to a more accommodating type on load. This in turn allows for changes in the source datatypes without affecting the data warehouse. As an example, a source with a varchar(10) column can update that column to a longer string or it can update to `nvarchar` to support Unicode characters. either change would require a rebuild of the load process to accommodate the new data type. A Data Type Mapping to `nvarchar(100)` would negate that need and allow the changed data type to be loaded with little or no impact.

The Data Type Mappings behavior has a set of default expansion rules. These can be customized in the `DataTypeMappings` Sheet in the BimlFlex settings.

## Global Extension Points

Project Parameters might be used across multiple SSIS projects. This global target for parameters allows a single definition to be injected into all projects.

Use Extension Point `ProjectParameter` with target `@@global`:

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" target="@@global" #>
<Parameter Name="YourParameterName" DataType="String" IsRequired="true">DefaultParameterValue</Parameter>
```

More information on this is available in this video:

![BimlFlex - Parameterize Connections](https://www.youtube.com/watch?v=4V8v4Brbg7E?rel=0&autoplay=0)

## Visual Studio SQL Server Data Tools, SSDT, projects

All SQL artifacts are now added to a separate Visual Studio SQL Server Data Tools, SSDT, project. This project can be used to source control and maintain the databases and SQL artifacts that are part of the Data Warehouse. This can be used for deploying to databases through Visual Studio, to create dacpacs for scripted deployments or as part of a Continuous Integration, Continuous Delivery pipeline.

A configuration setting has been added to the Bundle options that controls the generation of the SSDT Project.

## BimlC.exe, command line Biml Compiler

BimlFlex projects can now be built using the BimlC Biml Compiler with settings files to control scope of build. This can be used for scripted deployments or as part of a Continuous Integration, Continuous Delivery. As an example it is commonly used to create SQL artifacts and deploying SQL databases and tables before SSIS packages are created.
A BimlFlex Build will include a reference to the `bimlc.exe` build command line expression and response file for scenarios where this should be automated at a later stage.

```batchfile
To replicate this build with bimlc.exe. Use the bimlc.resp file:
bimlc.exe @"C:\Path\Project\output\ProjectName.mst.bimlc.resp"
```

## BimlFlex support for SQL Server 2017

BimlFlex and BimlStudio now support SQL Server 2017 as a destination for both Data Warehouse and SSIS. BimlFlex custom SSIS components have been updated to support SSIS 2017.

## Metadata Snapshot management

BimlFlex Metadata management now has support to save and restore Snapshots of the current metadata. This is useful for versioning as well as rollback for rapid, agile development processes.

## Data Vault Modeling

### BimlFlex full support for insert only Data Vault implementations

BimlFlex Data Vault patterns now have full, end to end support for insert only Data Warehouses. This removes effective to dates, is current flags as well as the end dating logic to optimize for data warehouse load performance. As a query support construct, Point In Time tables can be used to derive full timelines when necessary.
To exclude end dating code, use the setting `EnableEndDateRdv`. Set to `"N"` for insert only scenarios.

## Data Vault Acceleration

### Controlled acceleration of Link Satellites

A setting has been added that control if the Data Vault Accelerator should create Link Satellites for generated Links. For some modeling approaches the effectiveness of a relationship is tracked in a Hub rather than a Link Satellite, in other scenarios the link satellite adds limited functionality. This setting controls the automatic acceleration of the Link Satellites.

The setting `DvAccelerateLinkSatellite` has been added to the `Settings` sheet. This controls if Link Satellites should be accelerated. This feature has a default value of `"N"`, meaning no Link Satellites will be accelerated unless it is updated to `"Y"`. Overrides can be created using attribute `SettingValue` definitions for specific source tables that should have a different setting to the defined default.

### Accelerating Same As Links

Added support for `Same As Links` in the Data Vault Accelerator

## Data Modeling

### BimlFlex support for `SelectBySql`

Metadata support for `SelectBySql` for `DISTINCT, TOP n` scenarios

### BimlFlex support for `OrderBySql`

Metadata support for `OrderBySql` for `ORDER BY Column` scenarios

## Performance Optimization

### BimlFlex build support for `AutoAdjustBufferSize`

BimlFlex now has support for conditional setting of `AutoAdjustBufferSize` to `true` or `false` for built SSIS Packages in supported SSIS versions

### BimlFlex updates to local caching and minification

BimlFlex now implements local caching and file minification to optimize performance

### Table Create script updates

Create table scripts now use `Page` compression as default
Create database scripts now create databases using simple recovery model

## Additional Features

### PSA table velocity profiling

BimlFlex now has, optional, added velocity profiling for PSA tables to track data change velocity.

### Default updates to Business Keys

The metadata import dialog now has support to add the connections Record Source to the creation of the Business Key as well as changing references from source constraints to Business Key defined relationships. This allows a more rapid and agile Data vault modeling approach. Any derived key is by default set to `IsNotPersistent` meaning they are not stored in PSA unless specifically configured for persistence.

### Parameters

Standard Parameter management through metadata has been updated to support parameter queries on source as well as additional columnar expressions. This is configured through metadata through  `ParameterColumnExpression` and `ExecuteSqlOnSource` etc.

### Initial load logic

BimlFlex will automatically check if the load is an initial load by querying the PSA or destination for existing records.
This removes the `IsInitialLoad` project parameter dependency. `IsInitialLoad` is now automatically set by the load process.

### Key hashing Option for SQL compatible Hashing

The BimlFlex custom SSIS Component used for in-stream hashing of keys has been updated to provide a configurable encoding. Configure the setting `UseSqlCompatibleHash` as `"Y"` to use hashing compatible with Azure SQL Data Warehouse and other SQL based CHECKSUMS and HASHBYTES functions using the `SHA1` hashing algorithm.

### SSIS Optimization

Added `ApplyLookupFilterRdv` to filter SSIS lookups by joining to the Staging layer. This minimizes memory usage for lookup components. This optional cross database join functionality requires the databases to be co-located or the tables to be in the same database

### Auditing and Logging

Added `RowCountSum` to the Metadata model and Add-in drop down for `CustomAttributes`

### Metadata management

Updated BimlFlex metadata configuration, BimlFlex now has separate management of configurations and settings in two separate sheets within the BimlFlex Excel based metadata editor.
The BimlFlex Excel metadata management plugin is now more lightweight with a performance optimized footprint. Schema preview is available in BimlStudio.

### Custom SQL Objects and queries

Added `CreateSql` and `OverrideSql` functionality to both Metadata and Extension Points to support custom SQL DDL object creation and custom SQL source queries

### Quick Parse

A `Quick Parse` option for BimlStudio has been added as an options to only load placeholder objects from metadata when modeling. This allows faster modeling in BimlFlex and uses less resources for representing packages in BimlStudio. Once Packages needs to be built, disable the `Quick Parse` setting and refresh the metadata to have BimlStudio populated with full fidelity objects.

### Split `Use My ConnectionStrings` and `Use My Exclusions`

In BimlStudio and BimlFlex Excel Metadata editor it is now possible to split `Use My ConnectionStrings` and `Use My Exclusions`. This allows a more granular control over user based settings in team based development scenarios.

### Added SsisAnnotations

All generated SSIS packages now have added `SsisAnnotations`
