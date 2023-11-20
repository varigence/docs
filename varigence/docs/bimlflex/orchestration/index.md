---
title: Organizing data logistics orchestration using BimlFlex
description: Organizing data logistics orchestration using BimlFlex
tags: [BimlFlex, Reference]
---

# Data Logistics Orchestration

BimlFlex provides an orchestration framework that is automatically added to the generated output. This framework creates the necessary hooks and wrappers around each individual data logistics process to integrate with the [BimlCatalog](xref:bimlflex-components-overview#bimlcatalog-database) runtime repository.

The BimlCatalog keeps track of process execution, and directs the data logistics processes on handling exceptions. In practice, this means that each batch, pipeline, or SSIS package contains various calls to interface with the BimlCatalog.

>[!NOTE]
> Orchestration through BimlFlex may be implemented in different ways depending on the **Integration Template**, but always works the same.

## Technology Specific Implementations

* [Orchestration in SSIS](bimlflex-concepts-orchestration-ssis)

## Batch Orchestration

In BimlFlex, **Projects** are related to **Batches**. The batch defines the workflow that can be executed in the target environment, for example a 'batch' or 'master' pipeline or package. BimlFlex will automatically generate batch processes that call individual processes.

In some cases, especially for Azure Data Factory, 'sub-batches' will be generated to ensure the BimlFlex output stays within any technical limitations posed by Azure. For example, Azure Data Factory will have limitations on the number of components that are allowed for a given pipeline. BimlFlex will detect this, and make sure the output is compliant with ADF restrictions.
