---
uid: bimlflex-concepts-integration-template
title: BimlFlex Integration Template concept
summary: Overview of the Integration Template concept in BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# BimlFlex Integration Template Concept

An **Integration Template** in BimlFlex drives which code generation patterns are applied to the design metadata. In other words, the Integration Template defines *how* the output will be generated.

The following integration templates are supported in BimlFlex:

| Value                            | Description                                                                |
| -------------------------------- | -------------------------------------------------------------------------- |
| SSIS: Source -> Target           | Use SSIS for orchestration using the `Source -> Target` pattern.           |
| ADF: Source -> Target            | Use ADF for orchestration using the `Source -> Target` pattern.            |
| SSIS: Source -> File Extract     | Use SSIS for orchestration using the `Source -> File` Extract pattern.     |
| SSIS: Source -> Zip File Extract | Use SSIS for orchestration using the `Source -> Zip File` Extract pattern. |
