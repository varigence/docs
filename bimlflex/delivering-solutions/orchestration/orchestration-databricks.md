---
uid: bimlflex-concepts-orchestration-databricks
title: BimlFlex Batch Orchestration
summary: Using BimlFlex batch orchestration to control failure scenario management, auditing, and logging of runs, with the BimlCatalog database
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Detailed Execution Logic

## 1. Begin the Execution Process
- Initiate the package execution routine.
- Initialize current date/time, environment, and configurations for logging and control decisions.
- Prepare to determine whether the package should proceed with execution, retry, or be skipped.

## 2. Lookup or Insert the Package Row
- Query the `[bfx].[Package]` table for the package using its name or identifier.
- If the package does not exist:
  - Insert a new record to register it.  
    This ensures metadata (retry limits, schedule, enabled/disabled status) is available for processing.

## 3. Check If the Package Is Enabled
- Check the `IsEnabled` flag from the package metadata.
- If not enabled:
  - Skip execution immediately.
  - Set execution status to **Canceled (C)**.
  - Set next load status to **Pending (P)** (indicating it can be considered for execution later).
  - Return control without further processing.
- If enabled:
  - Proceed to evaluate current or recent execution state.

## 4. Check for an Ongoing Execution
- Query the `[bfx].[Execution]` table for any active execution (`ExecutionID` is active).
- If an active execution exists:
  - Check if the retry limit has been reached:
    - Retry limit **NOT** reached:
      - Mark execution status as **Active (A)**.
      - Set next load status to **Pending (P)**.
      - Continue running the current process (assuming it's in progress or was interrupted).
    - Retry limit reached:
      - Force a fresh execution cycle.
      - Set execution status to **Executing (E)**.
      - Set next load status to **Canceled (C)**.
      - Optionally reset retry counters.
- If no active execution exists:
  - Retrieve the most recent execution’s `NextLoadStatus`.
  - If last next load status was **Retry (R)**:
    - Mark current execution as **Retry (R)**.
    - Set next load status to **Canceled (C)** (to trigger one more retry).
  - If last next load status was **Canceled (C)**:
    - Set both execution and next load status to **Canceled (C)** (skip reprocessing).
  - Otherwise:
    - Mark execution as **Executing (E)**.
    - Set next load status to **Canceled (C)** (normal start for new execution).

## 5. Insert or Update the Execution Log
- Insert or update a row in the `[bfx].[Execution]` table with:
  - Current execution timestamp.
  - Execution status (E, R, A, C).
  - Retry count (if applicable).
  - Next load status.
  - Contextual metadata (e.g., source system, job ID, triggered-by information).

## 6. Return Final Execution Context
- Return output variables:
  - `ExecutionID` — unique identifier for this execution instance.
  - `ExecutionStatus` — final determined execution state.
  - `NextLoadStatus` — next planned status for follow-up logic.

These outputs inform the subsequent process steps whether to proceed with extraction/transformation or not.
