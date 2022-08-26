---
uid: bimlflex-data-mart-dimension-pattern
title: BimlFlex Dimension Table Pattern
summary: Documentation of the way BimlFlex deploys Dimension Table structures and data logistics
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Dimension Loading Pattern

The Dimension Load Pattern is configured in the metadata in a Data Mart project. The load has a Source Object, normally an abstraction view, a staging table or a Data Vault construct.

The source object has an Integration Key set that is used for Dimension Lookups

The target Dimension Object can be cloned from the Source Object. The target has an additional Sequence Identified (Identity Column) added as the Primary Key of the Dimension.

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