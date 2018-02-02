## Bundle 80118

* Update Snapshot capture to database and add-in
* Update add-in to default IsNotPersistent for derived BusinessKeys on Import Metadata
* Change file compression to limit in memory comperssion to 2GB. Larger files will be compressed using FileStream to accomodate .Net limit
* Change __Utility sheet in add-in dynamic. Note this will raise Excel warning "Microsoft Excel will permanently delete this sheet...". Click Delete button and continue.

## Bundle 80112

* Added Welcome documentation screen to BimlFlex Utility Application
* Added Release Notes screen to BimlFlex Utility Application

## Bundle 80109

* Added Set Parameter for SQL based stored procedures
* Added support for Azure Blob Storage based staging
* Update to optimize Azure Sql Data Warehouse generated code

## Bundle 71204

* Added additional logic to handle the `ParameterColumnExpression` with `ExecuteSqlOnSource`
* Update to rdv helper functions for Multi Active Key End Dating
* Update to accommodate a scenario where a Satellite exist with a Link and no Hub. This should not happen, but can  if the Data Vault is modelled incorrectly
* Update to `SqlDwSatEndDate` to update `RowIsCurrent`
* Added `BusinessKeyQualifiedName`, `BusinessKeyName`, `PrimaryKeyQualifiedName` and `PrimaryKeyName` to `TableObject`
* Update to PSA parameters for Azure Sql Data Warehouse and Satellite End Dates
* Update to check is initial load before Data Flow Task for dimension and fact Ssis loads
* Add Ordering to the Data Vault Accelerator

## Bundle 71116

* Update to End Dating of Multi Active Satellites
* Updates to row condensing script to accommodate change type if existing in data stream
* Refactor Data Mart Azure Data Warehouse Type 1 Sql logic and enable `SolveOrder` in Sql Batch
* Update to Data Type Mappings for `AnsiStringFixedLength` default mapping
* Add `User.DeleteImportFile` to variables passed to file archive script
* Add Parameters to Stored Procedure Data Mart scripts

## Bundle 71108

* Update to `RowChangeType` definition in Type 1 Azure Sql Data Warehouse code
* Refactor of `BEGIN CATCH` to re-use error Variables
* Added `DataVaultProvider` class for optimization of Data Vault Azure Sql Data Warehouse code
* Remove `IsInitialLoad` project parameter dependency. `IsInitialLoad` is now automatically set by querying the PSA for existing rows
* Updates to dependencies in the SQL create scripts
* Updates to Create Table Script
* Updates to references in Data Vault Accelerator Publish function
* Internal Replacing of Tables classes with `TableObject` class
* Update to INIT from PSA table name when STG and PSA database is the same database
* Rename rdv flatten files to correct case
* Refactor Azure Sql Data Warehouse `DataMart` class to correctly End Date Type 2 Dimensions
* Added setting to Delete Import File without archiving

## Bundle 71027

*	Update to Initialize Object name in `StagingTable` and `PersistentStaging` class
* Update to `MultiActiveKey` column transformation `TargetColumn` alias
* Update to configurations for PSA merge statement
* Update to Data Vault Accelerator for duplicate indexes being previewed

## Bundle 71025

* Added additional classes for Staging and Persistent Staging tables to simplify creation of Extension Points

## Bundle 71023

* Update to `SourceTable` and `TargetTable` classes

## Bundle 71020

* Update to LSAT Data Vault Accelerator and SQL Scripts
* Added `SourceTable`, `TargetTable` and `TableConfiguration` classes to simplify Extension Points

## Bundle 71016

* Added option to choose between Ssis optimized Hashing or Sql compatible Hashing in the configurations
* Added `[ ]` delimiters in SSIS to accommodate lookup columns that contain spaces
* Added `sourceIntegrationStage` variable to all Biml templates
* Update to Data Mart Inferred Member support for columns with spaces and when no dimensions are to be inferred
* Update to SSAS placeholder files for adding Analysis services Extension Points

## Bundle 71011

* Updated BimlFlex Utility Application to optionally redact Azure settings when exporting metadata
* Added logic for Ssis Expressions to be applied to files prior to data conversion
* Update to Data Vault Accelerator to add references to existing HUB if it already exists
* Update to BimlFlex Utility Application to allow filtering on Customer when creating a metadata export
* Update to BimlFlex Utility Application to allow automatic zipping of metadata export files
* Update to BimlFlex utility Application to always show changes to Connection Strings
* Update to accommodate issue with `ModelOverride` names in lookups and Data Vault Accelerator
* Update to Data Vault Accelerator logic to reuse existing Hubs when `ExcludeFromBuild` is set
* Update to indexes for PSA tables when `MultiActive` keys are used
* Potentially breaking change to Ssis Hashing Custom component. Use hashing compatible with Azure Sql Data Warehouse and other SQL based CHECKSUMS and HASHBYTES functions. When updating to using Sql compatible Hashing, all preexisting Data Vault surrogate keys will need to be updated and rehashed from the Business Key

## Bundle 70918

* Update to accommodate an issue with Duplicate Multi Active keys being created as Unique Keys
* Replaced `\r\n` with `\n` to simplify the Deploy Table Script
* Added logic to exclude any derived columns missing Ssis expressions for Ssis builds.
* Update to the Prefix/Suffix Logic in `GetSourceObjectName`
* Rename `UseColumnModelOverride` to `StageWithColumnModelOverride` in the configuration
* Rename `UseObjectModelOverride` to `StageWithObjectModelOverride` in the configuration

## Bundle 70913

* Update to Infer Hub lookup to use correct business key and error column
* Update to Lookup join to better accommodate differences between Sat and Lsat
* Update to Azure Sql Dw code where Decimal conversion could swap scale and precision
* Update to formatting of Point In Time Stored Procedures
* Update to `ExcludeFromBuild` when using `ObjectInheritance` to include the table for modeling
* Update to precedence constraints for File to Azure Sql Dw template
* Added support for ODBC parameterized queries as Expressions
* Updates to Object Model Overrides for Staging Layer

## Bundle 70912

* Updates to remove the need to emit Staging objects when using PolyBase and Azure Sql Data Warehouse projects
* Added optional `ProtectionLevel` to `CustomAttributes` to enable ability to compile for `EncryptSensitiveWithUserKey`
* Updates to BimlCatalog Orchestration to use Project Name when logging to accommodate duplicate package names  
* Added `ApplyLookupFilterRdv` to filter Ssis lookups by joining to the Staging layer. This minimizes memory usage for lookup components. This cross database join functionality requires the databases to be co-located or the tables to be in the same database
* Added Lookup Filter for Surrogate Key Dimensional LookupSql
* Added Foreign Keu Lookups for dimension surrogate key lookups
* Updates to `RowCount` Ssis Custom Component logic to add aggregate columns for source queries
* Added `RowCountSum` to the Metadata model and Add-in drop down for `CustomAttributes`
* Added validator to check that multiple source columns from a single source table aren't mapped to the same destination column

## Bundle 70906

* Updates to Satellite End Dating to use correct table alias

## Bundle 70905

* Breaking changes to the following Extension Points:
  * `LookupSql`
  * `LookupJoin`
  * `LookupParameter`
  * `LookupCache`

They now require `sourceTable` and `destinationTable` definitions

* Connection of RDV lookups to sourceTable

## Bundle 70904

* Added `MakeFileSafe` to accommodate `#` in table names for Oracle sources
* Added multi file import and load to PolyBase load pattern.
* Updates to UTF-8 Conversion
* Removal of 7-zip dependency. zipping component will now use embedded compression features to gzip files

## Bundle 70829

* Updates to BimlFlex configurations, now split into configurations and settings tables
* Updates to Custom Ssis Component signing

## Bundle 70824

* Added `CreateSql` and `OverrideSql` functionality to both database and Extension Points to support custom Sql Ddl object creation and custom Sql source queries
* BimlFlex Utility Application updated to support optional redaction of connection strings in metadata exports

## Bundle 70822

* Update to UTF-8 conversion to support extended characters previously resulting in overflows

## Bundle 70821

* Updates to support non-BimlFlex packages added to the BimlStudio project
* Updates to Primary Keys to support Heaps when loading files
* Updates to Mapped Source functionality to only hash mapped and/or derived columns
* Updates to `GetConfigurations` for Persistent Staging during Sql ELT
* Updates to Sql ELT Data Mart code for Azure Sql Data Warehouse
* Updates to Link lookups for Business Keys to match new Link Satellite process
* Additional Source Connection Validator added

## Bundle 70818

* Updates to Azure Sql Data Warehouse Hash Distribution keys for Persistent Staging
* Updates to LSAT Driving Key behavior for multiple Keys
* BimlFlex Utility Application updated with redaction of Sql login passwords
* Added Extension Point process for Blob Storage archiving using PowerShell
* Updated BimlFlex Utility Application to support deployment to Azure Sql Database
* Updates to Persistent Staging lookups when Staging and Persistent Staging are co-located in the same database

## Bundle 70807

* Updates to Sql Server CDC load functions
* Refactor of Data Mart process to create Type 1 and Type 2 Stored Procedures
* Updated formatting in BimlFlex Utility Application

## Bundle 70724 and earlier

**BimlFlex general**

* Added metadata model validators to the bundle
* Added initial support for toggle-able output of flat biml and ddl for entire BimlFlex solution on build
* Added BimlFlexJsonImporter to import customer metadata.
* Added Json MetadataPump and add DebugUserSettings to allow Varigence BimlFlex Support to simulate a user project
* Fixed an issue with IsNotPersistent logic
* Added BimlCatalogWrapper project for OpenSource
* Added support for same name for STG/PSA database
* Fixed an issue with Flat File template
* Fixed an issue with IsInitialLoad and Add Inferred Hubs from Sat and Links
* Fixed an issue with PSA Merge Alias for PrimaryKey Join
* Fixed an issue for PSA and IsNotPersistent

**Metadata Management**

* Added AllowCustomInput to the DropDowns that should be optional
* Added Delete entities with selection and update mdv procs.
* Fixed an issue with FlexToBk with @@rs length and Validators for ObjectInheritance
* Added support for multiple Multi-Active keys (MAK keys)
* Added Table CDC Object Types for SQL Server CDC Source objects
* Added modeling Support for Multi Active Satellites and Customer columns to MDV

**Infer Hub functionality**

* Added functionality to infer loading of Hubs from Link source tables
* Added check for InferHub configuration into SQL procedure creation

**Table creation scripts**

* Fixed CreateSql script to include Schema and PSA where in some instances they would be missing
* Fixed OverrideSql check for PSA INIT to ensure that the OverrideSql is not applied twice

**Data Type management**

* Added extended support for some SQL Datatypes such as Geometry and Geography
* Fixed CustomTypes in BimlDataType

**Data Vault Accelerator**

* Added CustomType logic to DataVault Accelerator
* Enable SchemaGraph documentation and Fix DV publish with saved user settings
* Fixed issue with DV Accelerator publish using stale but cached metadata database credentials

**Extension Points**

* Added PrePost Sql Extension Points. This allows for easier custom definitions for SQL scripts, such as for injecting compression definitions into table create scripts
* Fixed issue with PIT ExtensionPoint for LagSql

**DataTypeMappings**

* Added functionality to map data types into Staging and RDV. This enables expansion of data types to accommodate future source system changes
* Added Stored Procedure wcf.SetApplyDataTypeMappings to support DataTypeMappings
* Fixed DataTypeMappings when target columns exist
* Fixed DataType mappings for Source to Stage adding Data Conversion and Error Handling
* Added additional variables and fix data type mappings.

**Oracle Rdb support**

* Add initial support for Oracle Rdb
* Add IgnoreSchema for Oracle Rdb integration
* Add logic to exclude schema name from source queries for Oracle Rdb

**SSIS**

* Updates to Custom Components DLL names. Existing installations using legacy names should consider an upgrade to new names.
* Adding check for Sat cache directory and clean up
* Fix PSA INIT load Source thread
* Fixed SsisExpression for LSK columns to correctly use @@rs
* Added SQL Server CDC source component

**Azure SQL Data Warehouse**

* Fixed issue with SqlExpression for SQLDW

**File to Staging**

* Added File archiving to File to Stage Template

## BimlFlex Utility

**Initial Release of separate BimlFlex Support Utility Application**

* Has latest database definitions and BimlFlex Bundle files embedded

**Supports the following functions**

* Deploy BimlFlex metadata database to SQL Server
* Deploy BimlCatalog orchestration database to SQL Server
* Copy BimlFlex Bundle file to installation folders. Search for and replace BimlFlex Bundle files in project folders
* Read metadata for a Customer/Version from BimlFlex database and save to file for easy submission to Varigence BimlFlex Support team for issue resolution
