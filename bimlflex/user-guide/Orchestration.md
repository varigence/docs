BimlFlex includes an Orchestration engine that controls failure scenario management, auditing and logging of runs. All Orchestration data is stored in the BimlCatalog database.

Batch Orchestration is controlled per Batch in the Batches metadata sheet.

### Legend

<table class="ItemList">
<thead>
<tr>
<th>Key</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><img src="https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_legend_red_dot.png" alt="Red Dot" /></td>
<td>The red dot indicates a placeholder for extensions.</td></tr>
<tr><td><img src="https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_legend_metadata_override.png" alt="Metadata Override" /></td>
<td>The blue dashed line box with diagonal grey lines depicts "Overrides" derived from metadata as per the following example.</td></tr>
<tr><td><img src="https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_legend_extension_point.png" alt="Connection" /></td>
<td>The blue dashed line box without diagonal grey lines specifies "Overrides" derived from an ExtensionPoint defined within the BimlStudio project.</td></tr>
<tr><td><img src="https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_legend_sub_process.png" alt="Sub Process" /></td><td>The orange dashed line box with diagonal grey lines depicts a subprocess that is described in a separate diagram as per the following example.</td></tr>
<tr><td><img src="https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_legend_control_flow_extension_point.png" alt="Control Flow Extension Point" /></td>
<td>The red dashed line box depicts a control flow ExtensionPoint that is either injected in the relevant position or in some cases overrides the original BimlFlex process.</td></tr>
</tbody>
</table>
<br>

## Orchestration

The following diagram illustrates the package control flow.

![Imported Metadata](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_orchestration_package_overview.png "Imported Metadata")

The Orchestration Framework enables packages to maintain process and data integrity in case of an error condition. If a Package or Batch fail the Orchestration manages what runs in the next sequence and can, optionally, handle rollback of inconsistent data.

The Orchestration Framework includes audit and performance logging.

### Package Segments

Every package is broken up into the following three main segments

#### SEQC – BimlFlex Package Start

The start sequence container holds the OnPreExecute event handler that controls the Orchestration path. The diagram below illustrates the event handler logic. 

![Imported Metadata](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_orchestration_package_start.png "Imported Metadata")

The following Stored Procedure is executed by the Start Event

```
EXEC [ssis].[LogExecution] 
    @ExecutionGUID, 
    @SourceGUID, 
    @PackageName, 
    @IsBatch, 
    @ParentSourceGUID,
    @ParentExecutionID,
    @ServerExecutionID,
    @ExecutionID, 
    @ExecutionStatus,
    @NextLoadStatus,
    @LastExecutionID, 
    @BatchStartTime
```

#### SEQC – BimlFlex Package Main

Package Main is where all the template specific logic is implemented.
More information on this process:
* [Source to Staging Templates](Source%20To%20Staging%20Templates)
* [Data Vault Templates](Data%20Vault%20Templates)
* [Data Mart Templates](Data%20Mart%20Templates)

#### SEQC – BimlFlex Package End

Log successful execution of the package and set the next run status to ‘P’ for process.
The following Stored Procedure is executed by the End Event

```
EXEC [ssis].[LogExecutionEnd] @ExecutionID, @IsBatch 
```

## Package Level Logging

###  Error Event Handler
Every package, including batches, has an OnError event handler configured. This is illustrated above as number 5 [OnError]

The Event Handler executes a stored procedure in the BimlCatalog database that logs the error

```
EXECUTE [ssis].[LogExecutionError] 
   @ExecutionID
  ,@IsBatch
  ,@ErrorCode
  ,@ErrorDescription
```
The Orcestration passes the ExecutionID, a Boolean, that identifies if the package is a batch or a child package as well as the error code and description.

### Execution Status

Two main status flags determine the process flow, ExecutionStatus and NextLoadStatus:

#### Execution Status Legend

<table class="ItemList">
<thead>
<tr>
<th>Code</th><th>Description</th>
</tr>
</thead>
<tbody>
<tr><td>E</td><td>Executing. Only one instance of the package can be running. If another instance is started it will be aborted by \[OnPreExecute\]</td></tr>
<tr><td>A</td><td>Aborted. If the package is executed while already running it gets aborted by \[OnPreExecute\] and set the status to 'A'.</td></tr>
<tr><td>F</td><td>Failure. If there is a failure in the package or child packages the \[OnError\] Event Handler is invoked and the status is set to 'F'</td></tr>
</tbody>
</table>

#### Next Load Status Legend

<table class="ItemList">
<thead>
<tr>
<th>Code</th><th>Description</th>
</tr>
</thead>
<tbody>
<tr><td>P</td><td>Process: The next time the package is executed it may start normally.  <img src="https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_orchestration_legend_onpreexecute.png" alt="Imported Metadata" width="30%"/></td></tr>
<tr><td>C</td><td> Cancel/Abort: The next time the package is executed it should be aborted or skipped.  <img src="https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_orchestration_legend_onpreexecute.png" alt="Imported Metadata" width="30%"/></td></tr>
<tr><td>R</td><td>Rollback: The next time the package is executed it should invoke the Rollback process if defined and execute.  <img src="https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_orchestration_legend_onerror.png" alt="Imported Metadata" width="30%"/></td></tr>
</tbody>
</table>

### Start logic 

Logs the start of execution. Checks the results of the previous execution before proceeding. 

### Rollback logic

Data and process integrity rollback for failed loads.

### End logging

Logging successfully completion.

### Error logging

Logs error condition and status as well as error code and description.

## Scenarios

Orchestration behavior at individual package level and batch level

### Package Level Success

If a single package makes it through the "**SEQC - BimlFlex Package Main**" container, the final container called "**SEQC - BimlFlex Package End**" will be invoked, this, in turn, executes the Execute SQL task "**SQL - Log Execution End**"

Where the logged execution id matches that of the successful package the ExecutionStatus will be set to ` S ` for success and the NextLoadStatus (the status that controls the actions of the next execution) is set to ` P ` for process.

This means that the package is ready for a normal run on the following execution and doesn’t need to perform a rollback.

### Batch Level Success

If all of the child packages in this batch successfully execute the result is similar to the success of an individual child package. After the main package sequence container, **"SEQC - BimlFlex Package End"** will be invoked, this, in turn, executes the Execute SQL task **"SQL - Log Execution End"**, setting the ` S ` and ` P ` for the ExecutionStatus and NextLoadStatus

### Package Level Failure

If a single package fails in the **"SEQC - BimlFlex Package Main"** container, meaning an error occurs, the OnError event handler will execute the execute SQL task called "**SQL - Log Execution Error**"

When the package is restarted the **OnPreExecute** event in the starting sequence container "**SEQC - BimlFlex Package Start**" will handle Orchestration. If rollback is enabled, the data from the previously failed execution of the package will be managed depending on what integration stage the package is used in.

### Batch Level Failure

Batch level failures manages Orchestration and rollback for entire load across all packages in the batch.

Batch package failures trigger the OnError event handler that run the execute SQL task "**SQL - Log Execution Error**". This time the parameter `@IsBatch` will be true. Within `[ssis].[LogExecutionError]` there will be a conditional check made on `@IsBatch`, where if it is true we will update the execution table to make the NextLoadStatus to be ` R ` for all packages of the same ExecutionID, prompting all packages in that batch to rollback on their next execution. 

Any configuration values associated with the failed ExecutionID are reverted to their previous values. 

Regular statements for updating the ExecutionStatus and NextLoadStatus in `[ssis].[Execution]` to ` F ` and ` R ` respectively and adding a row to the `[ssis].[ExecutionError]` table.

### Rollback

Rollback will remove partially loaded rows from the target tables. Depending on what integration stage the package are used in will determine what kind of roll back technique will be used.

* If the integration stage is Source the target table will be truncated.
* If the integration stage is not in the data warehouse, an ExecuteSQL task with a `DELETE` is executed on all records in the target table where the LastExecutionID is greater than the latest successful batch execution.
* If the integration stage is Source and the data is being persisted in a PSA environment, an ExecuteSQL task with a `DELETE` statement is executed on all records in the target table in Persisted Staging where the LastExecutionID is greater than the latest successful batch execution.
* If the integration stage is data vault (RDV/BDV) and the target tables are either a Satellite or Link Satellite, an update is executed on the table, setting the `RowEffectiveToDate` to `9999-12-31` and the `RowIsCurrent` to `true` where the `LastExecutionID` is greater than the latest successful batch execution.
* If the integration stage is in the data warehouse or data mart, the regular loading of data via hashed rows will detect the data that needs to be updated and will be synced as normal operation.

### Sample Execution Error workflow

The following illustrates the Orchestration of a main load sequence

![Main Sequence](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_orchestration_sample_main_sequence.png "Main Sequence")

An error condition in the second run will generate the following Status Flag updates for the run.

#### First Execution (Successful)

<table class="ItemList">
<thead>
<tr><th>Process</th><th>Task</th><th>Execution Status</th><th>Next Execution</th></tr>
</thead>
<tbody>
<tr><td>Start</td>  <td>PKG -&gt; Batch</td>       <td>E</td><td>C</td></tr>
<tr><td>Start</td>  <td>PKG -&gt; DIM Address</td> <td>E</td><td>C</td></tr>
<tr><td>Success</td><td>PKG -&gt; DIM Address</td> <td>S</td><td>P</td></tr>
<tr><td>Start</td>  <td>PKG -&gt; DIM Customer</td><td>E</td><td>C</td></tr>
<tr><td>Success</td><td>PKG -&gt; DIM Customer</td><td>S</td><td>P</td></tr>
<tr><td>Start</td>  <td>PKG -&gt; FACT Sales</td>  <td>E</td><td>C</td></tr>
<tr><td>Success</td><td>PKG -&gt; FACT Sales</td>  <td>S</td><td>P</td></tr>
<tr><td>Success</td><td>PKG -&gt; Batch</td>       <td>S</td><td>P</td></tr>
</tbody>
</table>

#### Second Execution (Failure)

<table class="ItemList">
<thead>
<tr><th>Process</th><th>Task</th><th>Execution Status</th><th>Next Execution</th></tr>
</thead>
<tbody>
<tr><td>Start</td>  <td>PKG -&gt; Batch</td>       <td>E</td><td>C</td></tr>
<tr><td>Start</td>  <td>PKG -&gt; DIM Address</td> <td>E</td><td>C</td></tr>
<tr><td>Success</td><td>PKG -&gt; DIM Address</td> <td>S</td><td>P</td></tr>
<tr><td>Start</td>  <td>PKG -&gt; DIM Customer</td><td>E</td><td>C</td></tr>
<tr><td>Failure</td><td>PKG -&gt; DIM Customer</td><td>F</td><td>R</td></tr>
<tr><td>Skipped</td><td>PKG -&gt; FACT Sales</td>  <td>S</td><td>P</td></tr>
<tr><td>Failure</td><td>PKG -&gt; Batch</td>       <td>F</td><td>R</td></tr>
<tr><td>Success</td><td>PKG -&gt; DIM Address</td> <td>S</td><td>C</td></tr>
</tbody>
</table>

In the above scenario, when the Batch is executed again, it will skip `DIM Address` and Rollback `DIM Customer` if the rollback process has been enabled.

### Rollback configuration

BimlFlex supports rollback for terminated or failed loads. 

Process management for failed loads and data integrity checks is an architecture and process decision. 

The rollback function is controlled per layer in the Configurations and all are disabled by default.

<table class="ItemList">
<thead>
<tr>
<th>ConfigurationKey</th><th>ConfigurationValue</th>
</tr>
</thead>
<tbody>
<tr><td>EnableRollbackStg</td><td>N</td></tr>
<tr><td>EnableRollbackPsa</td><td>N</td></tr>
<tr><td>EnableRollbackRdv</td><td>N</td></tr>
</tbody>
</table>