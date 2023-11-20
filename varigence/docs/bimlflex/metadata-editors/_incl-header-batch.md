---
title: Batches
description: Overview of the BimlFlex Batch concept.
tags: [BimlFlex, Reference]
---
BimlFlex [**Batches**](bimlflex-batch-editor) group and help to define a data logistics workload. They are used by [**Projects**](bimlflex-project-editor) to set execution grouping. A project is always associated to a batch, and a batch can be reference by more than one project. In a new BimlFlex solution, batches are often the second component to be defined. This is so that projects can reference them when they are created.

Batches are generated into data logistics 'batch' processes that, in turn, start multiple individual processes. Which processes are included in the batch depends on the project(s) that are associated with it. In typical BimlFlex solutions, a batch is configured to process source data into the staging layer and Data Vault (if configured). A separate batch usually processes the data for deliver using Data Marts.

The degree of parallelism for executing the individual processes can be managed through the batch configuration.

Batches are created and modified using the [**Batch Editor**](bimlflex-batch-editor) in the [BimlFlex App](metadata-editors-overview).
