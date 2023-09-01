---
categories: [BimlFlex]
layout: post
published: false
summary: Discover how BimlFlex, a metadata-driven framework, can help you automate Change Data Capture (CDC) on Azure Data Factory (ADF), creating efficient, scalable, and reusable solutions with significantly less manual effort. Learn how to overcome common CDC implementation challenges, including full load or initial load and restarting CDC, and improve the overall efficiency of your data integration process.
tags: [BimlFlex],[Azure Data Factory], [Change Data Capture], [CDC], [metadata-driven], [data integration], [data automation]
title: Automating Change Data Capture on Azure Data Factory and Streamline Your Data Integration with BimlFlex
---

# Automating Change Data Capture on Azure Data Factory and Streamline Your Data Integration with BimlFlex

## Overview
[BimlFlex](https://www.varigence.com/BimlFlex) is a metadata-driven framework that enables customers to automate data integration solutions. One of the key areas where it can provide significant value is automating [Microsoft SQL Server Change Data Capture (CDC)](https://www.microsoft.com/en-us/sql-server) on [Azure Data Factory (ADF)](https://azure.microsoft.com/en-au/products/data-factory). By using BimlFlex, customers can create and deploy efficient, scalable, and reusable CDC solutions in ADF with significantly less to no manual effort, reducing errors and improving the overall efficiency of the process. In this blog post, we will discuss how BimlFlex can be used to automate CDC on ADF, the benefits of doing so, and provide a step-by-step guide for implementing CDC on ADF using BimlFlex.

## Supported Target Platforms
BimlFlex offers robust support for various target platforms. The platform currently supports a range of target platforms that enable customers to automate data integration solutions, including [Azure Synapse Analytics](https://azure.microsoft.com/en-au/products/synapse-analytics), [Snowflake](https://www.snowflake.com/en/), [Databricks](https://www.databricks.com/), [Azure SQL Database](https://azure.microsoft.com/en-us/products/azure-sql/database/), [Azure SQL Managed Instance](https://azure.microsoft.com/en-au/products/azure-sql/managed-instance), and [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server). BimlFlex generates all the necessary artifacts required for optimal CDC data integration, including data pipelines, data transformations, stored procedure and notebooks.

In addition to providing reliable and efficient CDC automation, BimlFlex integrates seamlessly with popular source control solutions like [GitHub](https://github.com/) and [Azure DevOps](https://azure.microsoft.com/en-us/products/devops/). This integration makes it easy for customers to manage and track changes to their artifacts, ensuring smooth collaboration and minimizing errors.

By providing support for multiple target platforms, BimlFlex offers customers the flexibility to choose the platform that best fits their needs, and to integrate with other services, like ADF, to create more comprehensive and efficient solutions. Whether you are using Azure Synapse Analytics for large-scale data warehousing or Microsoft SQL Server for on-premise applications, BimlFlex provides a powerful and versatile framework that streamlines CDC automation, making data integration more efficient and reliable.

## Requirements to Automate CDC on ADF
When implementing automation with BimlFlex for CDC on ADF, there are several things to consider to ensure the success of your data integration solution.

### Full Initial Load
When implementing Change Data Capture (CDC) on Azure Data Factory (ADF), it's important to consider the initial load of data from non-CDC tables. This involves capturing the Log Sequence Number (LSN) as a high watermark for the following delta or change data capture loads. The LSN is a unique identifier that SQL Server uses to track changes made to the database, making it crucial to capture accurately. By ensuring a successful initial load and accurate capture of LSN, you can improve the effectiveness and reliability of your CDC process.

### Overcoming Challenges with In-built CDC Functions 
One of the most common issues with built-in CDC functions is the potential failure of the `cdc.fn_cdc_get_all_changes_<capture_instance>` function when it returns no rows within the given from_lsn and to_lsn range. Instead of simply producing no rows, this can cause the entire pipeline to fail. To avoid this, it's important to check for any changes in the process before proceeding. If there are no changes, the pipeline can be exited, and if there are changes, the main activity can be called to ingest and process the delta. Once this is done, the last LSN should be captured and saved as the high watermark for the next load, ensuring a successful and reliable CDC process.

### Restarting CDC
In certain cases, you may need to restart CDC, such as when you need to compare and reload all data against your current dataset, which may occur when restoring your database or reinitializing change data capture on the source. To facilitate this process, BimlFlex offers the `PsaDeltaUseHashDiff` setting, which adds a `RowHashDiff` column that enables a full comparison when reinitializing CDC from the source. This feature can greatly simplify the restart process and ensure the accuracy and completeness of your data integration solutions.

## How BimlFlex Automate CDC for ADF
To handle the requirements of potential full reloads and the limitations of CDC functions in handling queries for no data returned, we separated the parameters (`GetParameter`) from the main activity (`Main Activity`). This separation ensures that the correct process - Initial Load, Delta Load or Full Reload - is determined based on the captured parameters, streamlining the process and avoiding potential errors. By doing so, the CDC automation process using BimlFlex becomes more efficient and reliable, resulting in greater productivity and accuracy. 

The following graphic illustrates the implementation of the `GetParameter` activity that handles all the logic to set the `__from_lsn`, `__to_lsn` and `IsFullLoad` variables.

### Lookup (Lkp__from_lsn)
This activity retrieves the previous load's high watermark value (__from_lsn) from the BimlCatalog or sets a default value '0x00000000000000000001' on `IsInitialLoad`.

### SetVariable (Set__from_lsn)
This activity sets the value of the __from_lsn variable to the value retrieved Lkp__from_lsn activity.
```c
@activity('Lkp__from_lsn').output.firstRow.VariableValue
```

### SetVariable (SetIsFullLoad)
The activity sets the value of the `IsFullLoad` variable. The expression evaluates if the `IsInitialLoad` parameter is set to `true` or if the high watermark value ( __from_lsn) variable is equal to '0x00000000000000000001' the default value. 
```c
@if(or(pipeline().parameters.IsInitialLoad, equals(variables('__from_lsn'), '0x00000000000000000001')), true, false)
```

### Script (Lkp__min_lsn)
This activity retrieves the minimum LSN value of `<capture_instance>` by running the sys.fn_cdc_get_min_lsn function. The default value of __min_lsn is `0x00000000000000000001`.
```sql
SELECT ISNULL(CONVERT(NVARCHAR(256), sys.fn_cdc_get_min_lsn ('<capture_instance>'), 1), '0x00000000000000000001') AS [__min_lsn]
```
### SetVariable (Set__min_lsn)
This activity sets the value of the __min_lsn variable to the value retrieved in the `Lkp__min_lsn` Script activity.
```c
@activity('Lkp__min_lsn').output.resultSets[0].rows[0].__min_lsn
```
### Script (Lkp__max_lsn)
This activity executes and retrieves the maximum value of __max_lsn by running the sys.fn_cdc_get_max_lsn function. The default value of __max_lsn is '0x00000000000000000001'.
```sql
SELECT ISNULL(CONVERT(NVARCHAR(256), sys.fn_cdc_get_max_lsn(), 1), '0x00000000000000000001') AS [__max_lsn]
```

### SetVariable (Set__max_lsn)
This activity sets the value of the __max_lsn variable to the value retrieved in the ` Lkp__max_lsn ` Script activity. 
```c
@activity('Lkp__max_lsn').output.resultSets[0].rows[0].__max_lsn
```

### Script (Lkp__to_lsn)
This activity retrieves the value of __to_lsn by running the sys.fn_cdc_map_time_to_lsn function. The value of __to_lsn is determined by the pipeline parameter BatchStartTime and a default value of '0x00000000000000000001'.
```c
@concat('SELECT ISNULL(CONVERT(NVARCHAR(256), sys.fn_cdc_map_time_to_lsn(''largest less than or equal'', ''', formatDateTime(pipeline().parameters.BatchStartTime, 'yyyy-MM-dd HH:mm:ss.fff'), '''), 1), ''0x00000000000000000001'') AS [__to_lsn]')
```

### SetVariable (Set__to_lsn)
This activity sets the value of the `__to_lsn` or next load high watermark. There is quite a lot going on, and it depends on the `SetIsFullLoad`, `Set__min_lsn`, `Set__max_lsn` and `Lkp__to_lsn` activities. This expression first checks whether the `IsFullLoad` variable is true and, if so, returns the value of the `__max_lsn` variable. If `IsFullLoad` is false, the expression evaluates if the `__to_lsn` value is '0x00000000000000000001', the expression returns the value of the `__min_lsn` variable. Otherwise, it returns the `__to_lsn` value.

```c
@if(variables('IsFullLoad'), variables('__max_lsn'), if(equals(activity('Lkp__to_lsn').output.resultSets[0].rows[0].__to_lsn, '0x00000000000000000001'), variables('__min_lsn'), activity('Lkp__to_lsn').output.resultSets[0].rows[0].__to_lsn))
```

### SetVariable (Reset__from_lsn):
This activity sets the value of the `__from_lsn` variable if the current high watermark value `__from_lsn` is  smaller than the low endpoint, `__min_lsn` of the capture instance variables.
```c
@if(less(activity('Lkp__from_lsn').output.firstRow.VariableValue, variables('__min_lsn')), variables('__min_lsn'), activity('Lkp__from_lsn').output.firstRow.VariableValue)
```

## Conclusion
The blog post discusses the benefits of using BimlFlex for automating CDC on ADF, which can save time, reduce errors and improve the overall efficiency of the process. It also outlines key considerations for implementing automation with BimlFlex for CDC on ADF, including full load or initial load, overcoming challenges with in-built CDC functions, and restarting CDC. The post also gives you a behind the scenes look at the generated output and explains how the GetParameter and Main Activity can be separated to ensure the correct process is being executed.

BimlFlex provides a powerful metadata-driven framework that simplifies the implementation of CDC on ADF, enabling customers to create scalable and reusable solutions. It also provides a step-by-step guide for implementing CDC on ADF using BimlFlex, ensuring a seamless and reliable process.

We encourage customers to try BimlFlex for themselves and take advantage of the benefits it provides. Additional resources are available for further learning, including the BimlFlex [documentation](https://docs.varigence.com/), webinars, and tutorials.

Contact us to take the next step. [Request Demo](https://varigence.com/BimlFlex#RequestDemo)
or simply email [sales@varigence.com](mailto:sales@varigence.com)
