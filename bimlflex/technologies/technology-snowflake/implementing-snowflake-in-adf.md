---
uid: bimlflex-snowflake-implementation-adf
title: Snowflake Implementation with ADF
summary: Guidance on how to implement Snowflake using Azure Data Factory for cloud based data warehouse solutions within BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---

# Implementing Snowflake Using Azure Data Factory

BimlFlex has established an intuitive process to implement Snowflake using Azure Data Factory (ADF) for cloud based data warehousing solutions, as demonstrated in the video below.

![BimlFlex - Implement Snowflake using Azure Data Factory](https://youtu.be/COGIHSjAdSg?list=PL6X4GHZ-hkyS81S5uTjfG2zICm4F98mHz "Implement Snowflake Using Azure Data Factory")

## Architecture

![Azure Data Factory Automation Architecture](../../static/img/bimlflex-diagram-adf-automation.png "Azure Data Factory Automation Architecture")

Regardless of source data, this example will utilize ADF copy commands to ingest and land (stage) the source data in Azure Blob Storage, as a parquet file.

BimlFlex will provide logic to map the resulting files so that the generated Snowflake Stored Procedure code can load the data into the Snowflake tables.

With the source data being held in a Snowflake database, again using Azure Data Factory and function bridge, the data can then effectively be processed into Data Marts or Data Vaults.

### Implement Snowflake using Azure Data Factory

> [!NOTE]
> The example is intended to follow the guide for [Creating a Landing Area](xref:bimlflex-adf-landing-area#configure-a-landing-area-by-example).

The following video walks through the common steps and considerations for deploying an Azure Data Factory for Snowflake.

![BimlFlex - Implement Snowflake using Azure Data Factory](https://www.youtube.com/watch?v=COGIHSjAdSg?rel=0&autoplay=0 "BimlFlex - Implement Snowflake using Azure Data Factory")

> [!NOTE]
> Additional BimlFlex documentation regarding the implementation of Snowflake in Azure Data Factory can be referenced [here](xref:bimlflex-snowflake-configuration-overview).

## How to Configure Snowflake in BimlFlex

Detailed prerequisites on working with Snowflake and BimlFlex are provided in the [Snowflake configuration overview](xref:bimlflex-snowflake-configuration-overview) section. The below information assumes this configuration has been completed.

### Snowflake Samples

BimlFlex provides a number of metadata samples, including samples that have a specific focus on Snowflake within Azure Data Factory in this example.

Loading the sample metadata from within BimlFlex is as simple as selecting the snapshot from the *Load Sample Metadata* dropdown menu on the BimlFlex **Dashboard**.

![Snowflake Data Vault ADF Selection](../../static/img/snowflake-data-vault-adf.png "Snowflake Data Vault ADF Selection")

> [!NOTE]
>More information on the specific creation of Data Marts and Data Vaults:
>
>* [Data Vault Templates](xref:bimlflex-data-vault-index)
>* [Data Mart Templates](xref:bimlflex-data-delivery-index)

As with all examples the data here is pointed at AdventureWorksLT 2012. The imported sample metadata will have modeled point in time (PIT) tables and bridge tables, and on top of those, built Data Mart tables, and Dimension- and Fact tables.

### BimlFlex Standard Connections

The connection settings remain standard as per previously uploaded BimlFlex featured videos, and should be configured as follows from within the BimlFlex **Connections** menu:

* *Source System* is cloud enabled
* *Staging / Landing Environment* is configured for Blob Storage configured with ADF linked services

![Standard Connection Settings](../../static/img/connection-settings-1.png "Standard Connection Settings 1")

* *System Type* is configured for Snowflake Data Warehouse
* *Linked Service Type* is configured for Snowflake

![Standard Connection Settings 2](../../static/img/connection-settings-2.png "Standard Connection Settings 2")

> [!NOTE]
> Within Azure Data Factory the "Linked Service Type" for Snowflake does not actually exist. However, when this option is selected, BimlFlex automatically knows to use the function bridge specifically created to load data into Snowflake

* *Integration Template* is configured for ADF Source -> Target

![Standard Connection Settings 3](../../static/img/connection-settings-3.png "Standard Connection Settings 3")

The simplicity of selecting settings, paired with the intelligence of BimlFlex to execute the appropriate functions, greatly streamlines the process of converging any solution into Snowflake.

Prior to building out a solution BimlFlex also allows the opportunity to configure batches, assign batches to different compute warehouses, or adjust scaling up or down, from within the BimlFlex **Batches** menu.

![Configuring Batches Prior to Solution](../../static/img/batches-menu.png "Configuring Batches Prior to Solution")

## Output

BimlFlex will provide all necessary Snowflake code, such as table, queries, and procedures definitions.

Depending on the selected **Integration Template**, BimlFlex will also generate supporting orchestration artifacts in either SSIS or ADF. But, because the data logistics themselves are running fully on Snowflake using Stored Procedures, it is possible to use third party orchestration approaches or tools to direct the overall process.

![Snowflake Source Code](../../static/img/snowflake-source-code.png "Snowflake Source Code")

The output has been configured for Snowflake, deployed to Azure Data Factory, and visualized as such:  

![Snowflake Solution Output](../../static/img/snowflake-solution-output.png "Snowflake Solution Output")

Having now generated a solution, which may or may not consist of multiple compute warehouses targeting different batches, the following options may be adjusted:

* Scale up or scale down
* View copy commands including completions or errors.
* Suspend a solution

![Completions and Errors in Solution](../../static/img/completions-and-errors-output.png "Completions and Errors in ADF")

>[!NOTE]
> Any files in error will be moved to an error folder or archived. On the next run those files will have already been processed and moved to an appropriate folder.

>[!TIP]
>For additional videos relating to BimlFlex and Snowflake integration, see:
>
>* [Configure Snowflake Project](https://www.youtube.com/watch?v=yPWKs65JSFo&t=1s)
>* [Snowflake Source to Stage](https://www.youtube.com/watch?v=9y5sGkPrfWU)
>* [Snowflake Parallel Loading with Integration Keys](https://www.youtube.com/watch?v=_bQ4lact0Tw)
>
>For additional documentation regarding Snowflake configuration please refer to the [Snowflake Configuration Overview](xref:bimlflex-snowflake-configuration-overview).
