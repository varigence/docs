---
uid: bimlflex-app-reference-documentation-Batches
title: BimlFlex App Definition for Batches
summary: Documentation of functionality within BimlFlex for Batches
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Batches

The BimlFlex [Batch](xref:bimlflex-app-batches) concept organises the data logistics workload (ETL/ELT) into groups. Batches are used by Projects to execute workloads in steps, thus managing the overall order of execution.

## Overview
  
| Property | Description |
| --------- | ----------- |
|`Name` | The name of the Batch. This name must be unique in the scope of the selected Customer.|
|`NoOfThreads` | The number of containers (groupings of data logistics processes) that can be executed in parallel within the Batch. The default is 0, which means evertyhing runs in a single container. Processes are grouped as containers into execution layers based on the topological sort and dependencies. Depending on the threads setting the containers will wait for each others to complete. Within each container / execution layer (e.g. a Sequence Container) multiple processes can be executed in parallel.|
|`UseOrchestration` | By default, BimlFlex provides with an orchestration framework that will control restartability of failed processes. Set this attribute to N if you would like to bypass the default behavior.|
|`UseSsisExpress` | Set this value to Y when extracting data from a Sql Server Express source connection. Note that with SSIS Express there is limited functionality.|
|`PrecedenceConstraint` | The evaluation criteria to start the next process in a Batch. This can be on Success or on Completion (disregarding the outcome) of the current executing process. The Precedence Constraint Completion setting forces BimlFlex to continue loading in case of individual failures. This setting applies to all processes in the batch.|
|`NoOfContainers` | The number of containers (groupings) that can be executed within the Batch. This setting can be used to throttle the parallel processing within a batch. A higher number of containers will decrease the degree of parallelism in the execution of the data logistics processes within a batch.|
|`Description` | Free-format description of the Batch.|
