---
sidebar_position: 4
title: Fact Pattern
description: Documentation of the way BimlFlex deploys Fact Table structures and data logistics
tags: [BimlFlex, Conceptual]
---

# Fact Table Loading Pattern

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