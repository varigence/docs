---
uid: bimlflex-snowflake-implementation-adf
title: Snowflake Implementation with ADF
---

# Implementing Snowflake Using Azure Data Factory with BimlFlex

Accompanying our most recent video upload, [BimlFlex - Implement Snowflake using Azure Data Factory](https://www.youtube.com/watch?v=COGIHSjAdSg&feature=youtu.be), we seek to show BimlFlex users just how effortless the process of using Snowflake with Azure Data Factory can be.

As our primary focus in this tutorial is Snowflake implementation with Azure Data Factory, note that our connection settings remain standard as per our previously uploaded feature highlight videos.

![Azure Data Factory Automation Pattern](images\bimlflex-diagram-adf-automation.png "Azure Data Factory Automation Pattern")

Referencing the above infographic, regardless of source data, we'll be using Azure Data Factory copy command to ingest and land the source data in Azure Blob Storage as a parquet file.
Using Snowflake stored procedure code will allow one to call the function bridge to load the data into the Snowflake database and/or persistent staging area.
With the source data being held in a Snowflake database, again using ADF and a function bridge, the data can then effectively be processed into data marts or data vaults.

BimlFlex code maintains 100% standard Snowflake stored procedure code, which allows a user to stage the output of this process using other standard orchestration tools, including Snowflake load commands.

Another feature specific to BimlFlex that allows users to embrace full functionality of Snowflake is the ability to load parallel data.
Anyone working in an environment that sees source data generating at different intervals may wish to create parallel processes.
This allows users to load said data in similarly structured timing, or to process a large batch in one computing warehouse while simultaneously processing smaller batches in a second warehouse.

Varigence recognizes that Data Vault 2.0 embraces the concept of parallel loading as a new methodology for the smart and intelligent logistical handling of information, and strives to include this agility in all of our BimlFlex processes.

## How to Configure Snowflake in BimlFlex

Within BimlFlex 2020 users are provided with a number of metadata samples, with specific focus on Snowflake within Azure Data Factory.
Loading the sample metadata from within Bimlflex is as simple as selecting the snapshot from a dropdown menu.

*insert img002*

As with all of our examples, the data is pointed at AdventureWorksLT 2012, and the imported sample metadata modeled some build point tables, breach tables, and on top of those built data mart tables, and dimensions and facts.

### [Links Only](#tab/youtube-links)

> [!TIP] 
> Please see other videos specifically created to demonstrate the construction of data mart and data vaults here:  
> [YouTube: How to Configure Azure Data Factory Landing Area](https://www.youtube.com/watch?v=czmK6R2Y-9c "How to Configure Azure Data Factory Landing Area")  
> [YouTube: Configure Snowflake Project](https://www.youtube.com/watch?v=yPWKs65JSFo "Configure Snowflake Project")  
> [YouTube: Business Data Vault Model](https://www.youtube.com/watch?v=JZT8rDBMhmI "Business Data Vault Model")  

### [ADF Landing](#tab/youtube-adf-landing)

![YouTube: How to Configure Azure Data Factory Landing Area](https://www.youtube.com/watch?v=czmK6R2Y-9c "How to Configure Azure Data Factory Landing Area")

### [Configure Snowflake](#tab/youtube-configure-snowflake)

![YouTube: Configure Snowflake Project](https://www.youtube.com/watch?v=yPWKs65JSFo "Configure Snowflake Project")

### [Business Vault](#tab/youtube-business-data-vault)

![YouTube: Business Data Vault Model](https://www.youtube.com/watch?v=JZT8rDBMhmI "Business Data Vault Model")

***

The configuration settings for the remainder of the process are as such:

**Connection Level** - source system is enabled for the cloud

**Staging / Landing Environment** - set for Blob Storage configuration with Azure Data Factory linked services

**System Type** - configured for Snowflake Data Warehouse

**Integration Template** - set to Azure Data Factory Source - Target

**Linked Service Type** - Snowflake

*Of note,* within Azure Data Factory, the "linked service type" for Snowflake does not actually exist. However, when this option is selected, BimlFlex automatically knows to use the function bridge specifically created to load data into Snowflake. The simplicity of these settings, paired with the intelligence of BimlFlex to execute the appropriate functions, greatly streamlines the process of converging any solution into Snowflake.

BimlFlex also allows users the opportunity to configure batches, assign batches to different compute warehouses, or adjust scaling up or down, prior to building out your solution.

**Output**

The metadata has been loaded. The solution has been built. The output has been deployed to Azure Data Factory and Snowflake.

*insert img003*

Now viewing your solution, which may or may not consist of multiple compute warehouses targeting different batches, a user may adjust any of the following: scaling up, scaling down, or view copy commands including completions or errors. Any files in error will be moved to an error folder or archived, and on the next run, those files will have already been processed and moved to an appropriate folder.

BimlFlex provides a number of easily configurable parameters for your solution, including but not limited to: high watermark lookups, log row counts, create a Snowflake stage, or process a data vault. Users are also provided the option to simultaneously process their source data and their resulting data vault, again referencing the parallelism provided by Data Vault 2.0. This parallelism allows users to process their files completely from end-to-end, beginning with extraction, staging, processing a persistent stage, to loading a data vault. With parallel processing the user is focusing on more files in less time, allowing your data and resources to all perform as expeditiously as possible. 

At this final stage of your solution, users are also able to run data vault code independently from source staging,  access batches to run the data vault code, or load breach tables and pointing time tables to monitor performance, while your data marts sit atop your solution.

BimlFlex supports the entire workflow of Snowflake within Azure Data Factory. 

**Snowflake Code**

Snowflake code within BimlFlex contains all deployed tables, stage queries, dimensions, fact tables, and data vaults using a table script that can be implemented into any source control tools preferred by the user to deploy Snowflake. 

All BimlFlex code is compiled into 100% Snowflake stored procedures. As such, users have the ability to run all code using whatever orchestration framework they desire, straight into their solution, with no vendor locking issues whatsoever.
