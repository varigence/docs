---
categories: [BimlFlex]
layout: post
published: false
summary: ThIn this webinar we look at how to easy it is to use BimlFlex to bring data into a Snowflake Data Warehouse. We focus on extracting data from a source and moving it to Snowflake Stage and then loading it into staging and persistent tables.
tags: [BimlFlex]
title: BimlFlex now support Snowflake Source to Staging
---
# BimlFlex now support Snowflake Source to Staging

In this webinar we look at how to easy it is to use BimlFlex to bring data into a Snowflake Data Warehouse.

We focus on extracting data from a source and moving it to Snowflake Stage and then loading it into staging and persistent tables.

## Snowflake

[Snowflake](https://www.snowflake.com/) is a SQL data warehouse built from the ground up for the cloud.

* Centralized, scale-out storage that expands and contracts automatically
* Independent compute clusters can read/write at the same time and resize instantly
* Automated backup across multiple availability zones & regions

## Introduction

Most data consolidation and Data Warehouse projects start with getting the data from disparate source systems into a central, available location. Snowflake is an excellent database, but to be able to query the data it needs to be loaded to the server. BimlFlex makes this a breeze with its data automagication features. BimlFlex allows metadata import from sources, straightforward modeling of the meta data and rapid building of load artifacts so that the data can be extracted from the source and uploaded to the Snowflake environment.

The modeler and developer workflow starts by pointing the metadata import tool to the source and extract information into the BimlFlex metadata repository. Once in the repository it is possible to model the metadata and apply business rules, transformations and accelerate out a Data Vault model. This webinar focuses on the process of loading the data from the source system to the Snowflake environment. Other webinars go through the metadata modeling scenarios and acceleration in more detail and upcoming webinars will focus on implementing a Data Vault layer in Snowflake on top of the Staging layer described here.

Snowflake is one possible destination for the data warehouse loads, BimlFlex supports other approaches, including loading to Microsoft SQL Server using ETL or ELT as well as loading to Microsoft Azure SQL Data Warehouse using ELT.

## BimlFlex Snowflake templates

The BimlFlex Snowflake template extracts source data and creates optimized flat files that are uploaded to Snowflake stage. The architect can choose parallelism and threading to make sure that the extraction process is as efficient as possible.

Once uploaded and available in Snowflake Stage, the data is loaded and persisted into a staging and persistent staging area.

BimlStudio allows the modeler to automatically create the table create scripts to rapidly create the required staging and persistent staging tables in the Snowflake system. Once they are created, BimlStudio can build the extract and load packages in SSIS to load the data from the source to the Snowflake system.

The load process follows the standard load patterns in BimlFlex, with configurable parallelism, orchestration, logging and auditing. The files are created and converted to the correct format. Once the files are available locally on the extract side they are compressed and uploaded using the Snowflake SnowSQL command line tool.

Once the files are uploaded and available in the file stage area, BimlFlex uses a custom Snowflake SSIS component to run through the multiple SQL commands required to load the data from the file into the database.

After the load is completed the staged file is removed and the successful completion of the load is logged.

## Watch the Webinar

<iframe width="853" height="480" src="https://www.youtube.com/embed/9y5sGkPrfWU?rel=0&autoplay=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
