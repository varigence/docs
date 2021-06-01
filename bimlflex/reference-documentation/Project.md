---
uid: bimlflex-app-reference-documentation-Projects
title: BimlFlex App Definition for Projects
summary: Documentation of functionality within BimlFlex for Projects
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Projects

The BimlFlex [`Project`](xref:bimlflex-application-projects) concept defines a data logistics workload.<br><br>Projects specify the primary orchestration engine (SSIS or ADF) and define the [`Connections`](xref:bimlflex-application-connections) for the Source to Target pipeline.

## Overview
  
| Property | Description |
| --------- | ----------- |
|`Name` | The name of the Project. The Project Name must be unique for the selected Customer.|
|`PushdownProcessing` | |
|`ExcludeFromModel` | Enabled Exclude From Model will exclude the project from the BimlFlex solution, but still keep it available.|
|`Description` | Free-format additional documentation about the Project.|
