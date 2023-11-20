---
title: BimlFlex App Definition for Batches
description: Documentation of functionality within BimlFlex for Batches
tags: [BimlFlex, Reference]
---

# Batches

The BimlFlex [**Batch**](bimlflex-batch-editor) concept organises the data logistics workload (ETL/ELT) into groups. Batches are used by [**Projects**](bimlflex-project-editor) to execute workloads in steps, thus managing the overall order of execution. A Project must be associated to a Batch.

## Overview
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Name | The name of the Batch. This name must be unique in the scope of the selected Customer.|
|Number of Threads | The number of containers (groupings of data logistics processes) that can be executed in parallel within the Batch. The default is 0, which means evertyhing runs in a single container. Processes are grouped as containers into execution layers based on the topological sort and dependencies. Depending on the threads setting the containers will wait for each others to complete. Within each container / execution layer (e.g. a Sequence Container) multiple processes can be executed in parallel.|
|Use Orchestration | By default, BimlFlex provides with an orchestration framework that will control restartability of failed processes. Set this attribute to N if you would like to bypass the default behavior.|
|Use SSIS Express | Set this value to Y when extracting data from a Sql Server Express source connection. Note that with SSIS Express there is limited functionality.|
|Precendence Constraint | The evaluation criteria to start the next process in a Batch. This can be on Success or on Completion (disregarding the outcome) of the current executing process. The Precedence Constraint Completion setting forces BimlFlex to continue loading in case of individual failures. This setting applies to all processes in the batch.|
|Number of Containers | The number of containers (groupings) that can be executed within the Batch. This setting can be used to throttle the parallel processing within a batch. A higher number of containers will decrease the degree of parallelism in the execution of the data logistics processes within a batch.|
|Description | Free-format description of the Batch.|
|Trigger Name | Name of the Trigger, if ommitted the Batch name and Trigger Type will be concatenated.|
|Trigger Type | The tumbling window trigger and the schedule trigger.|
|Trigger Start Date | A date-time value. For basic schedules, the value of the startTime property applies to the first occurrence. For complex schedules, the trigger starts no sooner than the specified startTime value.|
|Trigger End Date | The end date and time for the trigger. The trigger does not execute after the specified end date and time. The value for the property can not be in the past.|
|Trigger Timezone | The time zone. For a list of supported time zones, see Create a trigger that runs a pipeline on a schedule.|
|Trigger Recurrence Every | The unit of frequency at which the trigger recurs. The supported values include minute, hour, day, week, and month.|
|Trigger Recurrence Unit | A positive integer that denotes the interval for the frequency value. The frequency value determines how often the trigger runs. For example, if the interval is 3 and the frequency is week, the trigger recurs every three weeks.|
|Trigger Delay | The amount of time to delay the start of data processing for the window.|
|Trigger Max Concurrency | The number of simultaneous trigger runs that are fired for windows that are ready.|
|Trigger Retry Count | The number of retries before the pipeline run is marked as Failed.|
|Trigger Retry Interval | The delay between retry attempts specified in seconds.|
|Trigger Runtime State | The current state of the trigger run time. Started, Stopped, Disabled|

## References
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this Batch belongs to.|
|Version | Reference to the Version that this Batch belongs to.|

