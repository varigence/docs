---
uid: bimlflex-app-reference-documentation-Versions
title: BimlFlex App Definition for Versions
summary: Documentation of functionality within BimlFlex for Versions
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Versions

The BimlFlex [`Version`](xref:bimlflex-concepts-version) concept supports management of changes in metadata over time. These changes are managed in Versions.
    A Version is part of a BimlFlex [Customer](xref:bimlflex-concepts-customer), and a Customer can contain many (one or more) versions of the metadata.

## Overview
  
| Property | Description |
| --------- | ----------- |
|Name | The name of the selected Version.|
|IsCurrent | Identifier that defines if the Version is current. Only current Versions are visible in the selection.|
|EffectiveFromDate | The date / time the Version is active from (validity period).|
|EffectiveToDate | The date / time the Version is active to (validity period).|
|Comments | Optional free-format notes about the Version.|
|CreatedOn | The date / time the Version has been created.|
|LastClonedOn | The most recent date / time the Version was cloned.|
|LastMergedOn | The most recent date / time the Version was merged.|

## References
  
| Property | Description |
| --------- | ----------- |
|CustomerUID | Reference to the Customer that this Version belongs to.|

