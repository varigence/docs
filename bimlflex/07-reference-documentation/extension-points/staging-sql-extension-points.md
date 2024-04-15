---
uid: bimlflex-reference-documentation-staging-sql-extension-points
title: BimlFlex Extension Points for Staging SQL
summary: Documentation of functionality within BimlFlex for the Staging SQL Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Staging SQL Extension Points

The Staging SQL category has the following available Extension Points defined.
  
## Persistent Staging Post SQL Call Process

Add After the Persistent Staging SQL Call

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PsaPostSqlCallProcess" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<#	var sourceObject = new TableObject(sourceTable, sourceTable.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(targetTable, targetTable.Connection.RelatedItem.IntegrationStage, "TGT");
#>
<#	CustomOutput.ObjectInherit = true; #>
<ExecuteSQL Name="SQL - PsaPreSqlCallProcess" ConnectionName="<#=targetObject.Connection.Name#>">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<Parameters>
		<Parameter Name="0" VariableName="User.ExecutionID" DataType="Int64" />
	</Parameters>
	<DirectInput>EXEC <#=targetObject.SystemType.StoredProcedureName(sourceObject, targetObject.Schema, targetObject.StartDelimiter, targetObject.EndDelimiter)#> ?</DirectInput>
<# 	CustomOutput.OutputPathName = @"SQL - PsaPreSqlCallProcess.Output"; #>
</ExecuteSQL>
```

## Persistent Staging Pre SQL Call Process

Add Before the Persistent Staging SQL Call

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PsaPreSqlCallProcess" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<#	var sourceObject = new TableObject(sourceTable, sourceTable.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(targetTable, targetTable.Connection.RelatedItem.IntegrationStage, "TGT");
#>
<#	CustomOutput.ObjectInherit = true; #>
<ExecuteSQL Name="SQL - PsaPreSqlCallProcess" ConnectionName="<#=targetObject.Connection.Name#>">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<Parameters>
		<Parameter Name="0" VariableName="User.ExecutionID" DataType="Int64" />
	</Parameters>
	<DirectInput>EXEC <#=targetObject.SystemType.StoredProcedureName(sourceObject, targetObject.Schema, targetObject.StartDelimiter, targetObject.EndDelimiter)#> ?</DirectInput>
<# 	CustomOutput.OutputPathName = @"SQL - PsaPreSqlCallProcess.Output"; #>
</ExecuteSQL>
```

## Persistent Staging SQL Call Override

Override the Persistent Staging SQL Call

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PsaSqlCallOverride" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<#	var sourceObject = new TableObject(sourceTable, sourceTable.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(targetTable, targetTable.Connection.RelatedItem.IntegrationStage, "TGT");
#>
<#	CustomOutput.ObjectInherit = true; #>
<ExecuteSQL Name="SQL - PsaPreSqlCallProcess" ConnectionName="<#=targetObject.Connection.Name#>">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<Parameters>
		<Parameter Name="0" VariableName="User.ExecutionID" DataType="Int64" />
	</Parameters>
	<DirectInput>EXEC <#=targetObject.SystemType.StoredProcedureName(sourceObject, targetObject.Schema, targetObject.StartDelimiter, targetObject.EndDelimiter)#> ?</DirectInput>
<# 	CustomOutput.OutputPathName = @"SQL - PsaPreSqlCallProcess.Output"; #>
</ExecuteSQL>
```

## Staging Post Source SQL

Configure SQL to be injected after the Source Query

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Post Stage SQL

Configure SQL to be injected after the Stage Query

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPostStageSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Pre Source SQL

Configure SQL to be injected before the Source Query

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Pre Stage SQL

Configure SQL to be injected before the Stage Query

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPreStageSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Post Source SQL

Configure SQL to be injected after the Source Temporary Table Query.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTablePostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Pre Source SQL

Configure SQL to be injected before the Source Temporary Table Query.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTablePreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Source Join SQL

Configure SQL to be injected as a Join clause into the first Source Temporary Table Source Query.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableSourceJoinSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Target Join SQL

Configure SQL to be injected as a Join clause into the first Source Temporary Table Target Query.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableTargetJoinSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Staging Temporary Table Truncate SQL

Specify a SQL statement that will override the TRUNCATE used in the Source Temporary Table Query for a given target Object.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the (source) object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the (target) object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableTruncateSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

