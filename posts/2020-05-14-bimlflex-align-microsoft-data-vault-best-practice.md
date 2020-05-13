---
categories: [BimlFlex]
layout: post
published: false
summary: Best Practices for Deploying Data Vault on Azure Synapse 
tags: [BimlFlex]
uid: best-practices-for-deploying-data-vault-on-azure-synapse
title: Best Practices for Deploying Data Vault on Azure Synapse
---

# Best Practices for Deploying Data Vault on Azure Synapse

## Introduction

Microsoft published a guide of good practices for deploying a Data Vault solution on an ![Azure Synapse](https://azure.microsoft.com/en-au/resources/deploying-data-vault/) platform.
This white paper demonstrate how BimlFlex aligns with the best practices. It assumes the reader has some knowledge of the Data Vault 2.0 and Azure Synapse.

## 1. Follow the Rules

### Microsoft
They are there for a reason, don’t modify the method’s rules until at least you’ve had a chance to use, appreciate and understand them

### BimlFlex
TODO:

## 2. Use Views to Express Interface Contracts

### Microsoft
These construct a decoupled system and improve flexibility

### BimlFlex
TODO:

## 3. Forward Only Migration

### Microsoft
There is only one way for a Data Warehouse schema to travel and that is forwards

### BimlFlex
TODO:

## 4. Version Control

### Microsoft
Use Azure Repos (Git) just like any other project

### BimlFlex
TODO:

## 5. Distribution

### Microsoft
How should Data Vault tables be distributed across nodes

### BimlFlex
TODO:

## 6. Automation

### Microsoft
How to improve productivity and quality through using patterns and automation tools

### BimlFlex
TODO:

## 7. Use a Persistent Staging Layer

### Microsoft
To hold a history of data feeds, improve flexibility and provide a way to recover from errors

### BimlFlex
TODO:

## 8. Inserting records into Azure SQL Data Warehouse

### Microsoft
Hint: don’t use SQL Merge

### BimlFlex
TODO:

## 9. Optimize Resource Class

### Microsoft
Don’t use SMALLRC

### BimlFlex
TODO:

## 10. Update statistics after each major update

### Microsoft
When you perform each load cycle it is good practice to ensure that statistics are updated so that the Data Vault performs at its best.

### BimlFlex
If your SQL pool doesn't have AUTO_CREATE_STATISTICS configured, we recommend you enable this property. You can also use the BimlFlex metadata to generate the statements `CREATE STATISTICS [<#=ObjectName#>_<#=ColumnName#>] ON [<#=SchemaName#>].[<#=ObjectName#>]([<#=ColumnName#>]);`.
