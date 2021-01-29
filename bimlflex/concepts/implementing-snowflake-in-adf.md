---
uid: bimlflex-snowflake-implementation-adf
title: Snowflake Implementation with ADF
summary: Guidance on how to implement Snowflake using Azure Data Factory for cloud based data warehouse solutions within BimlFlex
product: BimlFlex
type: Conceptual
---

# Implementing Snowflake Using Azure Data Factory with BimlFlex

BimlFlex has established an intuitive and effortless process to implement Snowflake using Azure Data Factory for cloud based data warehousing solutions, as demonstrated in the video below.

![BimlFlex - Implement Snowflake using Azure Data Factory](https://youtu.be/COGIHSjAdSg?list=PL6X4GHZ-hkyS81S5uTjfG2zICm4F98mHz "Implement Snowflake Using Azure Data Factory")

## Azure Data Factory with Snowflake Automation Architecture

![Azure Data Factory Automation Architecture](images\bimlflex-diagram-adf-automation.png "Azure Data Factory Automation Architecture")

Regardless of source data, this example will utilize Azure Data Factory copy commands to ingest and land the source data in Azure Blob Storage as a parquet file.
Using Snowflake stored procedure code will call the function bridge to load the data into the Snowflake database and/or persistent staging area.
With the source data being held in a Snowflake database, again using Azure Data Factory and function bridge, the data can then effectively be processed into data marts or data vaults.

## BimlFlex Features Utilizing Snowflake and Azure Data Factory

BimlFlex code maintains 100% standard Snowflake stored procedure code. This allows the output to be staged using any standard orchestration tools, including Snowflake load commands.

Specific to BimlFlex is the feature that allows users to embrace full functionality of Snowflake's ability to load parallel data.
Anyone working in an environment that sees source data generating at different intervals may wish to create parallel processes.
This allows the loading of said data in similarly structured timing, or to process a large batch in one computing warehouse while simultaneously processing smaller batches in secondary warehouses.

Varigence recognizes that Data Vault 2.0 embraces the concept of parallel loading as a new methodology for the smart and intelligent logistical handling of information, and strives to include this agility in all of our BimlFlex processes.

## How to Configure Snowflake in BimlFlex

BimlFlex 2020 automatically provides a number of metadata samples, with a specific focus on Snowflake within Azure Data Factory in this example.
Loading the sample metadata from within BimlFlex is as simple as selecting the snapshot from the *Load Sample Metadata* dropdown menu on the BimlFlex **Dashboard**.

![Snowflake Data Vault ADF Selection](images\snowflake-data-vault-adf.png "Snowflake Data Vault ADF Selection")

> [!NOTE]
>More information on the specific creation of data marts and data vaults:
>
>* BimlFlex Docs: [Data Vault Templates](xref:data-vault-templates)
>* BimlFlex Docs: [Data Mart Templates](xref:data-mart-templates)

As with all examples the data here is pointed at AdventureWorksLT 2012.
The imported sample metadata will have modeled point in time (PIT) tables and bridge tables, and on top of those, built data mart tables, and dimensions and facts.

## BimlFlex Standard Connections

The connection settings remain standard as per previously uploaded BimlFlex featured videos, and should be configured as follows from within the BimlFlex **Connections** menu:

* *Source System* is cloud enabled
* *Staging / Landing Environment* is configured for Blob Storage configured with ADF linked services

![Standard Connection Settings](images/connection-settings-1.png "Standard Connection Settings 1")

* *System Type* is configured for Snowflake Data Warehouse
* *Linked Service Type* is configured for Snowflake

![Standard Connection Settings 2](images/connection-settings-2.png "Standard Connection Settings 2")

> [!NOTE]
> Within Azure Data Factory the "Linked Service Type" for Snowflake does not actually exist. However, when this option is selected, BimlFlex automatically knows to use the function bridge specifically created to load data into Snowflake

* *Integration Template* is configured for ADF Source -> Target

![Standard Connection Settings 3](images/connection-settings-3.png "Standard Connection Settings 3")

The simplicity of selecting settings, paired with the intelligence of BimlFlex to execute the appropriate functions, greatly streamlines the process of converging any solution into Snowflake.

Prior to building out a solution BimlFlex also allows the opportunity to configure batches, assign batches to different compute warehouses, or adjust scaling up or down, from within the BimlFlex **Batches** menu.

![Configuring Batches Prior to Solution](images/batches-menu.png "Configuring Batches Prior to Solution")

## Solution Output

The metadata has been loaded.  
The solution has been built.  
The output has been configured for Snowflake, deployed to Azure Data Factory, and visualized as such:  

![Snowflake Solution Output](images/snowflake-solution-output.png "Snowflake Solution Output")

Having now generated a solution, which may or may not consist of multiple compute warehouses targeting different batches, the following options may be adjusted:

* Scale up or scale down
* View copy commands including completions or errors.
* Suspend a solution

![Completions and Errors in Solution](images/completions-and-errors-output.png "Completions and Errors in ADF")

>[!NOTE]
> Any files in error will be moved to an error folder or archived. On the next run those files will have already been processed and moved to an appropriate folder.

## Configurable Parameters

BimlFlex provides a number of easily configurable parameters for solutions, including but not limited to:

* High watermark lookups
* Log row counts
* Create a Snowflake stage
* Process a data vault

BimlFlex also provides the option to simultaneously process source data and their resulting data vault, again referencing the parallelism provided by Data Vault 2.0.
This parallelism allows the processing of files completely from end-to-end, beginning with extraction, staging, processing a persistent stage, to loading a data vault.
Parallel loading focuses on processing more files in less time, allowing your data and resources to all perform as expeditiously as possible.

At this final stage of a solution, there exists the ability to run data vault code independently from source staging, access batches to run the data vault code, or load bridge tables and point in time (PIT) tables to monitor performance, while your data marts sit atop your solution.

BimlFlex supports the entire workflow of Snowflake within Azure Data Factory.

## Snowflake Code Within BimlFlex

Snowflake code within BimlFlex contains all deployed tables, stage queries, dimensions, fact tables, and data vaults using a table script that can be implemented into any source control tools to deploy Snowflake.

All BimlFlex code is compiled into 100% Snowflake stored procedures.

![Snowflake Source Code](images/snowflake-source-code.png "Snowflake Source Code")

As a result, BimlFlex offers the ability to run all code using whatever orchestration framework desired by a user, straight into their solution, with no vendor locking issues whatsoever.

>[!TIP]
>For additional videos relating to BimlFlex and Snowflake integration, see:
>
>* BimlScript YouTube Channel: [Configure Snowflake Project](https://www.youtube.com/watch?v=yPWKs65JSFo&t=1s)
>* BimlScript YouTube Channel: [Snowflake Source to Stage](https://www.youtube.com/watch?v=9y5sGkPrfWU)
>* BimlScript YouTube Channel: [Snowflake Parallel Loading with Integration Keys](https://www.youtube.com/watch?v=_bQ4lact0Tw)
>
>For additional documentation regarding Snowflake configuration, see:
>
>* BimlFlex Docs: [Snowflake Overview](xref:snowflake-implementation)
>