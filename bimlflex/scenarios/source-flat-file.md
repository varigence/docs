---
uid: flat-file-source-to-staging
title: Flat File Source to Staging
summary: Documentation on loading a flat file source to staging from within BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Flat File Source to Staging

A common load scenario is to ingest plain text files into the data warehouse.

This document reviews the metadata configuration and considerations for standard flat files such as csv files. 

<!--
The different integration engines handle the file loads slightly differently so the document is separated into loading files through SQL Server Integration Services (SSIS) and Azure Data Factory (ADF)

## SQL Server Integration Services

TODO
-->

## Azure Data Factory

Add the source file metadata through the BimlFlex App

### Connection metadata

The Connection should be of Connection Type `FILE` and System Type `Flat File Delimited` or `Flat File Ragged Right`

The File Path attribute is the blob storage container where the files are located.

Catalog is the folder path in the container. Use a separate folder for each file so that the load process can easily find the correct file for the load. It is not possible to use wild cards in the file load process in ADF, so the normal load connection will always pick up all files in the source folder.

Define the blob storage account used through the ADF Linked Service definition. When using Azure Key Vault and Account Key authentication, copy the connection string to the account from the Azure Portal and add it as the Key Vault Secret for the Linked Service

The File Pattern should be left blank and the Connection String entry for the connection should be populated with a placeholder value.

### Batch

A single Batch per connection should be created. There is a one to one match between the Connection, the Object, the Batch and the Project in the ADF environment

### Project

A single Project per connection should be created. There is a one to one match between the Connection, the Object, the Batch and the Project in the ADF environment

The Project should be configured to use the File connection, the separate file Batch, the Target connections and the Integration Template for ADF `ADF: Source -> Target`

### Object

The Object is set to Object Type: `Flat File` and with the File settings matching the file format used.

### Columns

The columns are added as per the file specification. Add a derived Integration Key column for future load in to Data Vault.

## ADF Load Pipeline

With the connection and corresponding file metadata populated the Data Factory will include a batch and a pipeline to load the file contents from the source file to the target.
