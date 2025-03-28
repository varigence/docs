---
uid: bimlflex-reference-documentation-version-entity
title: BimlFlex Definition for Versions
summary: Documentation of functionality within BimlFlex for Versions
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Versions

The Version concept supports management of changes in metadata over time. These changes are managed in Versions.
    A Version is part of a Customer, and a Customer can contain many (one or more) versions of the metadata.

## Overview
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Name | The name of the selected Version.|
|Is Current | Identifier that defines if the Version is current. Only current Versions are visible in the BimlFlex version selection.|
|Effective From Date | The date / time the Version is active from (validity period).|
|Effective To Date | The date / time the Version is active to (validity period).|
|Comments | Optional free-format notes about the Version.|
|Created On | The date / time the Version has been created.|
|Last Cloned On | The most recent date / time the Version was cloned.|
|Last Merged On | The most recent date / time the Version was merged.|

## References
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this Version belongs to.|

