---
uid: bimlflex-app-reference-documentation-Staging-Sql
title: BimlFlex App Definition for Staging Sql
summary: Documentation of functionality within BimlFlex for the Staging Sql Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Staging Sql Extension Points

The Staging Sql category has the following available Extension Points defined.
  
## Staging Temporary Table Truncate Sql

Specify a SQL statement that will override the TRUNCATE used in the Source Temporary Table Query for a given target Object.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the (source) object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the (target) object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableTruncateSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Pre Source Sql

Configure SQL to be injected before the Source Temporary Table Query.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTablePreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Source Join Sql

Configure SQL to be injected as a Join clause into the first Source Temporary Table Source Query.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableSourceJoinSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Target Join Sql

Configure SQL to be injected as a Join clause into the first Source Temporary Table Target Query.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableTargetJoinSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Post Source Sql

Configure SQL to be injected after the Source Temporary Table Query.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTablePostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Pre Source Sql

Configure SQL to be injected before the Source Query

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Post Source Sql

Configure SQL to be injected after the Source Query

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Pre Stage Sql

Configure SQL to be injected before the Stage Query

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPreStageSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Post Stage Sql

Configure SQL to be injected after the Stage Query

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPostStageSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

