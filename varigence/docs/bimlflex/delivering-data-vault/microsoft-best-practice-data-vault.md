---
title: Best Practices for Deploying Data Vault on Azure Synapse
description: Documentation on Microsoft Azure Best Practices for Azure Synapse, with attention on interface contracts, forward only migration, version control, and distribution
tags: [BimlFlex, Conceptual]
---
# Best Practices for Deploying Data Vault on Azure Synapse

## Introduction

Microsoft published a white paper on practices for deploying a Data Vault solution on an [Azure Synapse](https://azure.microsoft.com/en-us/resources/deploying-data-vault/) platform.

This white paper demonstrate how BimlFlex aligns with these best practices. It assumes the reader has some knowledge of the Data Vault 2.0 and Azure Synapse.

## 1. Follow the Rules

### Microsoft

They are there for a reason, don’t modify the method’s rules until at least you’ve had a chance to use, appreciate and understand them

### BimlFlex

The Data Vault implementation rules are fully automated in BimlFlex, creating the Data Vault in BimlFlex will automatically create a solution that adhere to the rules.

Settings are available to change the behavior across optional configurations, such as naming conventions used.

For implementations that need to tweak certain implementation guidance, BimlFlex provides an extensive Extension Points framework that allows changes to default patterns and overrides for certain functionality.

## 2. Use Views to Express Interface Contracts

### Microsoft

These construct a decoupled system and improve flexibility

### BimlFlex

BimlFlex allow for complete separation of concern using view-based abstraction layers for a decoupled implementation.

These interface views can be stored in the BimlFlex metadata and are automatically included in the generated output. This allows complete separation of the layers within the implementation. Source extracts and Data Vault loads are completely separated with separate metadata definitions.

BimlFlex also allows direct, metadata-driven implementation of source to Data Vault without complete separation. As the implementation is generated from the metadata, it can be seen as a single workflow with a single implementation pattern. This allows direct generation of the full source to Data Vault in a single set of metadata.

## 3. Forward Only Migration

### Microsoft

There is only one way for a Data Warehouse schema to travel and that is forwards

### BimlFlex

BimlFlex allows full control of the metadata and the schema change approach. The automatically generated SQL Server Data Tools allow for easy schema compare, synchronization and forward migration.

Forward-only migration is easily implemented through updating metadata and defining the current state at each deliverable, allowing the automated deployment to migrate forward through full automation.

## 4. Version Control

### Microsoft

Use Azure Repos (Git) just like any other project

### BimlFlex

BimlFlex has full support for source control, including Azure DevOps (Azure Repos) and git. Source control is built into the BimlStudio development environment and the generated output artifacts can be source controlled and deployed through Azure DevOps pipelines.

The BimlFlex metadata is fully versioned in the repository database.

All output artifacts (such as SQL Server Data Tools projects and Azure Data Factory code) can be both version controlled and deployed through the standard Azure DevOps CI/CD approach.

## 5. Distribution

### Microsoft

How should Data Vault tables be distributed across nodes

### BimlFlex

Distribution design is by default automated in BimlFlex, allowing the modeler and implementer to focus on understanding the data and the business requirements. When distribution needs to be managed, such as co-locating data across a common distribution, BimlFlex has full support for defining the distribution key and distribution approach used. For the Data Vault, this includes co-locating the Hub and Satellite records by distributing on the Key used as well as easily allowing header and detail type data sets to use a common distribution key.

For scenarios that require round robin or replicate-type distribution, BimlFlex allows this to easily be defined directly in the metadata through the BimlFlex App.

## 6. Automation

### Microsoft

How to improve productivity and quality through using patterns and automation tools

### BimlFlex

BimlFlex is a data warehouse and Data Vault automation tool. Organizations use BimlFlex to dramatically increase performance through full automation using BimlFlex.

## 7. Use a Persistent Staging Layer

### Microsoft

To hold a history of data feeds, improve flexibility and provide a way to recover from errors

### BimlFlex

BimlFlex allows fully automated creation and loading of a Persistent Staging Layer for all data. This is also configurable, both to define what entities are persisted, if they save all history or only maintain the latest version of each row (like an Operational Data Store) as well as where it is implemented. BimlFlex allows easy creation of the Persistent Staging Layer in Blob storage, in Azure Data Lake store or directly in Azure Synapse.

## 8. Inserting records into Azure SQL Data Warehouse

### Microsoft

Hint: don’t use SQL Merge

### BimlFlex

BimlFlex automates the ELT SQL code for both performance and Synapse compatibility. The default architecture is an insert-only Data Vault (that doesn't use SQL Merge statements). It is also possible to define end-dating for some or all tables as required. This will update existing rows when new rows are added, still without using SQL Merge statements.

BimlFlex recommends using Point in Time tables to maintain timelines instead of end-dating individual Satellites in the Data Vault. These are automatically created through the BimlFlex App and the table definitions and the load code is automatically generated.

## 9. Optimize Resource Class

### Microsoft

Don’t use SMALLRC

### BimlFlex

BimlFlex allows complete control of the user used for processing. BimlFlex uses standard definitions for the execution, allowing creation and definition of one or more users that can be placed in any resource class. Each Batch can be run by a separate user in a separate Resource Class if needed.

For execution from Azure Data Factory the user is easily configured in the Linked Service design page in BimlFlex. The Linked Service can use a connection definition from Azure Key Vault through SQL Authentication, Managed Identity or Service Principal, combining maximum security with configuration flexibility.

## 10. Update statistics after each major update

### Microsoft

When you perform each load cycle it is good practice to ensure that statistics are updated so that the Data Vault performs at its best.

### BimlFlex

It is recommended that the Azure Synapse SQL pool have AUTO_CREATE_STATISTICS configured.

It is also possible to use the BimlFlex metadata and the Extension Points framework to generate Create and Update statements through automation code:

```biml
CREATE STATISTICS [<#=ObjectName#>_<#=ColumnName#>] ON [<#=SchemaName#>].[<#=ObjectName#>]([<#=ColumnName#>]);
```

This can be generated as a separate statement or added to a process pipeline to be automatically executed after each processing step is completed.
