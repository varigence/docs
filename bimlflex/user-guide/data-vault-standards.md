---
uid: bimlflex-data-vault-standards
title: BimlFlex Data Vault Standards
---
# Data Vault Templates

## Abstract

This document consolidates and outlines the various Data Vault implementation standards and explain how to configure BimlFlex to achieve the desired outcomes. 

> [!NOTE]
> We collated information from public content and this document is intended to supplement other published standards.
> Varigence provides a course that combines your preferred Data Vault approach with implementation guides using BimlFlex.

## Data Vault Core Constructs

### Core Business Model

Before we dive into the Data Vault standards and implementation, we recommend creating a high-level map of your business or at least the business area in scope. This is also referred to as a Business Ontology, as discussed in "The Elephant in the Fridge" by John Giles or Ensemble Logical Model as taught by Genesee Academy. 

As a bare minimum, a map, model or diagram of core business entities and relationships is required before trying to use our accelerator to transform your source into a Data Vault. Build a conceptual model based on business processes using business terminology, which can be achieved by the `technical` not basing the model on any existing source system. 


> [!IMPORTANT]
> It is highly recommended to have a `Core Business Model` in place before using the Data Vault Accelerator for optimal results.

> [!NOTE]
> We are adding additional support to create `Core Business Models` in an upcoming version of BimlFlex.

#### Hash Key

* A `hash` of the `Integration Key`.
* This is not a compulsory field for Data Vault however currently compulsory in BimlFlex. We will support a no hash implementation option in all our ELT (SQL) templates.
* Support for all major hash algorithms with `SHA1` the default. Other options can be implemented by changing the `HashAlgorithm` setting to one of the following values `MD5`, `SHA1`, `SHA256`, `SHA512`.
* Previous SSIS versions of BimlFlex created a different hash for Unicode so now we have `UseSqlCompatibleHash` and `UseSqlCompatibleRowHash` for backward compatibility that can be ignored for new implementations. 
* Support for `binary` and `text` hash depending on your requirements and can be configured by changing the `HashBinary` setting.
* We added a performance setting `AddRowHashKeyIndex` that will add an index to the `Staging` table on the `RowHashKey` to improve the Hub ETL SSIS packages.

| SettingKey                            | SettingValue | 
| DvUseHashKeys                         | `Y` | 
| HashBinary                            | `Y` | 
| HashAlgorithm                         | `SHA1` | 
| UseSqlCompatibleHash                  | `Y` | 
| UseSqlCompatibleRowHash               | `N` | 
| AddRowHashKeyIndex                    | `Y` |  

### Hubs

Consist of a distinct list of `Business Keys` defined as `Integration Key` in BimlFlex. 

> [!IMPORTANT]
> Hubs are the core building block of the Data Vault and should reflect the **Core Business Concept** or CBC. 
> The implementation team should ensure that Hubs are identified and mapped to the **Core Business Model**

> [!NOTE]
> BimlFlex make use of a concatenated key to simplify implementation and allow for single key integration and is required when choosing a Data Vault implementation without using Hash Keys. 
> There is an option ` DvUseHashKeys` in an upcoming version to integrate without a `SID` or `HASH` which is very performant for modern data warehouse solutions like `Snowflake` and `Azure SQL Data Warehouse`.


#### Integration Key Defined
* A concatenation of the key parts creating a single column for integration and optimise the performance of multi-column joins.
* In an upcoming release will add the `DvAccelerateHubKeys` setting to also include the key parts in the Hub.
* The `FlexToBk` helper method can be used to concatenate keys using a comma-delimited list of columns across supported implementation technologies.
* The global parameter for RecordSource is @@rs referring to the originating source system, not source object, of the data can be added to the keys to make IntegrationKeys unique across sources.
* As an example the metadata expression for the `Customer` will look like this `FlexToBk(@@rs,CustomerID)`
* BimlFlex provides an option to add the @@rs to all keys on import `Add Record Source (@@rs) To Integration Key` and on the `Columns` tab for the `Objects` in the app.
* The column name will be derived by combing the `Object.ModelOverrideName` if specified otherwise the `Object.ObjectName` and the `AppendIntegrationKey` setting either before or after the name depending on the `SuffixOrPrefixColumn` setting.
* Deriving the value of the concatenated key depends on two settings, the `IntegrationKeyNullValue` that is used as a null replacement and `IntegrationKeyToUpper` to specify if the derived value should be cast to `UPPER CASE` or left in its original case. When integrating case sensitive systems, this requires consideration.
* As an example the above will be implemented as follows `UPPER(COALESCE(CustomerID, 'NVL'))`
* It is recommended to use a wide Unicode String datatype to allow new sources that might not adhere to the assumed datatype of the Hub Integration key.


#### Integration Key Settings

| SettingKey                            | SettingValue | 
| AppendIntegrationKey                  | `BK` | 
| SuffixOrPrefixColumn                  | `P` | 
| IntegrationKeyNullValue               | `NVL` | 
| IntegrationKeyToUpper                 | `Y` |  


#### Hub System Column Configuration

> [!NOTE]
> BimlFlex implement all system columns using `Configurations` and a matrix allowing users options for granular configuration. 
> It is possible to override the global configuration for specific projects or objects using `Custom Attributes`. 


**Load Date Time Stamp**
* ConfigurationKey `RowEffectiveFromDate`. The ConfigurationValue can be renamed based on your naming conventions.

**Record Source**
* ConfigurationKey `RowRecordSource`. The ConfigurationValue can be renamed based on your naming conventions.
* Use the `RecordSource` value defined on the source connection. This gives the same value for the system, and we plan to add an option in an upcoming release to supplement this value with the full name of the source object.

**Audit Id**
* ConfigurationKey `RowAudit`. The ConfigurationValue can be renamed based on your naming conventions.
* Used to tie the ETL batch together with and orchestration key. Currently this requires the BimlCatalog database to enrich the SSIS runtime metadata. We are looking to decouple this for modern data warehouse solutions and have a light or zero-logging option.


### Links

### Satellites

### Link Satellites

### Reference Tables

### Point in Time

### Bridge


