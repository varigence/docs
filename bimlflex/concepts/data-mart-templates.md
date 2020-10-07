---
uid: bimlflex-data-mart-templates
title: BimlFlex Data Mart Templates
summary: Documentation of the process to implement a Data Mart layer in BimlFlex including integration and load patterns, implementation scenarios, and loading data via Point in Time and Bridge tables
---
# Data Mart Templates

This document covers the process to implement a Data Mart layer using BimlFlex.

content include:

* Integration to Data Mart and related load patterns used in BimlFlex
* Implementation scenarios
* loading data out of Data Vault and into a Data Mart via Point in Time tables and Bridge tables.

## Integration to Data Mart

### Introduction

The metadata required to build the Data Mart is similar to any other source to staging project.

For on-premises loads it is possible to use either the ETL load pattern or the ELT load pattern. For cloud-based implementations, such as using Azure Data Factory (ADF) or targeting Azure Synapse or Snowflake, BimlFlex provides an in-database ELT pattern.

Sample metadata for Data Mart load scenarios for the supported project types is included in BimlFlex.

More information: [Load Sample Metadata](xref:bimlflex-getting-started-sample-metadata)

### Common Architectures and The Data Mart as a Whole

This implementation guide covers the modeling and implementation of star schema-based facts and dimensions.

BimlFlex will load Dimensions with new and updated Dimension member data and update according to the defined Dimension Attribute types.

The Fact loads are performed once the Dimension are updated. The Fact load can either use existing keys, Smart Keys or do Dimension Member Key lookups in the load. This is defined in the metadata through the Data Mart modeling. For Dimension relationships that use lookups, BimlFlex uses the Integration Key column and perform the lookup in the load based on the Integration Key and inserts the Dimension surrogate key in the Fact table.

The architecture can use existing keys from the underlying layers, or implement independent sequence identifier keys for the Dimension members.

#### Project Configuration

The Data Mart load pattern is configured in a separate project.

This project uses 3 main connections:

1. **Source Connection**, normally the Staging layer or Data Vault layer
1. **Target Stage Connection**, normally the Data Mart Layer. A staging layer for the Data Mart where delta loads are prepared before they are merged into the target. Only used for ETL patterns. ELT Stored Procedures uses internal staging.
1. **Target Connection**, The Data Mart connection. The target for the Facts and Dimension loads

#### BimlFlex Dimension Loading Pattern

The Dimension Load Pattern is configured in the metadata in a Data Mart project.

The load has a Source Object, normally an abstraction view, a staging table or a Data Vault construct.

The source object has an Integration Key set that is used for Dimension Lookups

The target Dimension Object can be cloned from the Source Object. The target has an additional Sequence Identified (Identity Column) added as the Primary Key of the Dimension.

#### Dimension ETL Patterns

The ETL Pattern is implemented in, and orchestrated through, SSIS.

**Dimension Load** ETL Pattern for Type 1 Dimensions, implemented in the SSIS package

1. SQL - Truncate target Data Mart Staging Table
1. SQL - Check for initial load by checking if there is data in the target table
1. DFT - Data Flow to Load Target Table
    1. SRC - Select from Source Object
    1. FLX - Row Count
    1. DC - Add Audit Columns
    1. FLX - Hash for Type 1 Attributes
    1. LKP - Lookup Surrogate Key
    1. DC - Derived Surrogate Defaults when needed
    1. DC - Insert Defaults if needed
    1. FLX - Row Count
    1. DST - Load Destination Staging Table, and Dimension Table at Initial Load
1. SQL - Merge Staged data into Target Table for non-initial loads

**Dimension Load** ETL Pattern for Type 2 Dimensions, implemented in the SSIS package

1. SQL - Truncate target Data Mart Staging Table
1. SQL - Check for initial load by checking if there is data in the target table
1. DFT - Data Flow to Load Target Table
    1. SRC - Select from Source Object
    1. FLX - Row Count
    1. DC - Add Audit Columns
    1. FLX - Hash for Type 1 Attributes
    1. FLX - Hash for Type 2 Attributes
    1. LKP - Lookup Surrogate Key
    1. DC - Derived Surrogate Defaults when needed
    1. CSPL - Split processing based on type of change (Type 1, Type 2, etc)
    1. DC - Insert/Update Defaults if needed, as per Change Type
    1. FLX - Row Count
    1. DST - Load Destination Staging Table, and Dimension Table at Initial Load
1. SQL - Merge Staged data into Target Table for non-initial loads

#### Dimension ELT Patterns

The ELT Pattern is implemented in SQL and orchestrated through SSIS or ADF as needed.

**Dimension Load** ELT Pattern for Type 1 Dimensions, implemented in a Stored Procedure

1. Select into initial temporary Stage
    Derive Attribute Hash as needed
1. Create Temporary Upsert Table from Stage and Target
1. Update any existing, changed rows
1. Insert any new rows

**Dimension Load** ELT Pattern for Type 2 Dimensions, implemented in a Stored Procedure

1. Select into initial temporary Stage
    Derive Attribute Hash as needed for Type 1 and Type 2 sets
    Derive Metadata as required
1. Insert new and Type 2 changed rows in target
1. End Date any Type 2 changes
    Dimensions have their rows Effective To and the next rows Effective From separated by a millisecond
1. Create Temporary Upsert Table from Stage and Target for Type 1 changes
1. Update any existing, changed Type 1 Attributes

### BimlFlex Fact Loading Pattern

The Fact Load Pattern is configured in the metadata in a Data Mart project.

The load has a Source Object, normally an abstraction view, a staging table or a Data Vault construct.

The source object has an Integration Key that is used As the Primary Key for the Fact table.

The target Fact Object can be cloned from the Source Object. The target has Dimension References for columns that should perform lookups for Integration Key Values to Sequence Identifiers for the Fact Table load.

**Fact Load** ETL Pattern, implemented in the SSIS package

1. SQL - Truncate target Data Mart Staging Table
1. SQL - Check for initial load by checking if there is data in the target table
1. DFT - Data Flow to Load Target Table
    1. SRC - Select from Source Object
    1. FLX - Row Count
    1. DC - Add Audit Columns
    1. DCV - Data Conversion  
        Convert to Data Type compatible with the lookup to the Dimension Integration Key for source Dimension Lookup columns
    1. LKP - Lookup for each mapped Dimension  
        Lookup based on source column value to Dimension Integration Key
        Return the Dimension Sequence Identifier/Primary Key
    1. FLX - Hash for Attribute changes
    1. DST - Load Destination Staging Table, and Dimension Table at Initial Load
1. SQL - Merge Staged data into Target Table for non-initial loads

**Fact Load** ELT Pattern, implemented in a Stored Procedure

1. Select into initial temporary Stage
    Derive Attribute Hash
    Derive Metadata as required
1. Create Change Upsert Table from Stage and Target for Type 1 changes
    Perform Current Key Lookup and Unknown Member -1 replacement for any Dimension reference based on Integration Key
1. Update existing rows from Change table
1. Create New Row Insert Table from Stage and Target for Type 1 changes
    Perform Current Key Lookup and Unknown Member -1 replacement for any Dimension reference based on Integration Key
1. Insert new rows in Target Fact Table
