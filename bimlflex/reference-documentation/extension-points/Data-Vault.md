---
uid: bimlflex-app-reference-documentation-Data-Vault
title: BimlFlex App Definition for Data Vault
summary: Documentation of functionality within BimlFlex for the Data Vault Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Data Vault Extension Points

The Data Vault category has the following available Extension Points defined.
  
## Data Vault Source Override

Configure override for the Data Vault Source transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvSourceOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- NOTE: The type of source override must be consistent to the connection type. -->
<# 	CustomOutput.ObjectInherit = false; #>
<OleDbSource Name="OLE_SRC - MyTable" ConnectionName="MY_SRC" CommandTimeout="0" ValidateExternalMetadata="false">
	<DirectInput>SELECT [Code], [Name] FROM [dbo].[MyTable]</DirectInput>
	<Columns>
		<Column SourceColumn="Name" TargetColumn="MyTableName" />
		<Column SourceColumn="Code" TargetColumn="MyTableCode" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"OLE_SRC - MyTable.Output"; #>
</OleDbSource>
```

## Data Vault Source Pipeline Pre

Configure pipeline logic that will be injected after the Data Vault source transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvSourcePipelinePre" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>
</DataConversion>
```

## Data Vault Source Pipeline Post

Configure pipeline logic that will be injected after the Data Vault source transformations

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvSourcePipelinePost" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>
</DataConversion>
```

## Data Vault Target Pipeline Pre

Configure pipeline logic that will be injected before the target transformations

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvTargetPipelinePre" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>
</DataConversion>
```

## Data Vault Target Pipeline Post

Configure pipeline logic that will be injected before the target transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvTargetPipelinePost" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>
</DataConversion>
```

## Data Vault Target Override

Configure override for the Data Vault target transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvTargetOverride" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- NOTE: The type of target override must be consistent to the connection type. -->
<#	var targetConnection = table.GetTargetConnection();
	var targetScopedName = table.GetTargetScopedName(targetConnection);
	var targetSsisSafeScopedName = targetScopedName.MakeSsisSafe();
#>
<# 	CustomOutput.ObjectInherit = false; #>
<OleDbDestination Name="OLE_DST - <#=targetSsisSafeScopedName#>" ConnectionName="<#=targetConnection#>" MaximumInsertCommitSize="500000" BatchSize="500000" CheckConstraints="false">
	<InputPath OutputPathName="<#=inputPath#>" />
	<ExternalTableOutput Table="[dbo].[HUB_MyTable]" />
</OleDbDestination>
```

## Data Vault Pre Process SQL

Configure SQL to be injected at the start of the Data Vault stored procedure

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPreProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Post Process SQL

Configure SQL to be injected at the end of the Data Vault stored procedure

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPostProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Pre Source SQL

Configure SQL to be injected before the staging query in the Data Vault stored procedure

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Post Source SQL

Configure SQL to be injected after the staging query in the Data Vault stored procedure

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Pre Target SQL

Configure SQL to be injected before the target source query in the Data Vault stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPreTargetSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Post Target SQL

Configure SQL to be injected after the target insert query in the Data Vault stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPostTargetSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Pit Custom SQL

Configure custom SQL for the Data Vault PIT

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
RdvPitAddParameter | String | XXXX |
RdvPitLagSql | String | XXXX |
RdvPitDateWhereSql | String | XXXX |
RdvPitDateOverrideWhereSql | String | XXXX |
RdvPitHubWhereSql | String | XXXX |
RdvPitHubOverrideWhereSql | String | XXXX |
RdvPitSatWhereSql | String | XXXX |
RdvPitSatOverrideWhereSql | String | XXXX |
RdvPitDeleteWhereSql | String | XXXX |
RdvPitDeleteOverrideWhereSql | String | XXXX |
RdvPitSourceAddSelect | String | XXXX |
RdvPitTargetAddInsert | String | XXXX |
RdvPitTargetAddSelect | String | XXXX |
RdvPitColumnElements | String | XXXX |
RdvPitOverrideSql | String | XXXX |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPitSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- Use RdvPitSql combined the below samples to add additional logic to the PIT load procedure. -->
<#*
<# 	CustomOutput.ObjectInherit = false; #>
<# 	CustomOutput.RdvPitAddParameter = @"	,@TenantCode			VARCHAR(10) = NULL"; #>
<# 	CustomOutput.RdvPitLagSql = @"SET @Lag = -7"; #>
<# 	CustomOutput.RdvPitDateWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitDateOverrideWhereSql = @"WHERE [FlexRowEffectiveFromDate] > '1900-01-01'AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitDeleteWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitDeleteOverrideWhereSql = @"WHERE [FlexRowEffectiveFromDate] > '1900-01-01'AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitHubWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitHubOverrideWhereSql = @"WHERE [FlexRowEffectiveFromDate] > '1900-01-01'AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitSatWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitSatOverrideWhereSql = @"WHERE [FlexRowEffectiveFromDate] > '1900-01-01'AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitSourceAddSelect = @",l1.[TenantCode] "; #>
<# 	CustomOutput.RdvPitTargetAddInsert = @",[TenantCode] "; #>
<# 	CustomOutput.RdvPitTargetAddSelect = @",[TenantCode] "; #>
<# 	CustomOutput.RdvPitColumnElements = @"<Column Name=""TenantCode"" DataType=""AnsiString"" Length=""3"" IsNullable=""true"" />"; #>
<# 	CustomOutput.RdvPitOverrideSql = @"Add SQL here to completely override the PIT Code."; #>
*#>
```

## Data Vault Pit Pre Process SQL

Configure SQL to be injected before the Point In Time Query

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPitPreProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Pit Post Process SQL

Configure SQL to be injected after the Point In Time Query

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPitPostProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Bridge Custom SQL

Configure custom SQL for the Data Vault Bridge

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
RdvBridgeLagSql | String | XXXX |
RdvBridgeDateWhereSql | String | XXXX |
RdvBridgeDateOverrideWhereSql | String | XXXX |
RdvBridgeWhereSql | String | XXXX |
RdvBridgeOverrideWhereSql | String | XXXX |
RdvBridgeHubWhereSql | String | XXXX |
RdvBridgeHubOverrideWhereSql | String | XXXX |
RdvBridgeColumnSelect | String | XXXX |
RdvBridgeColumnInsert | String | XXXX |
RdvBridgeColumnElements | String | XXXX |
RdvBridgeOverrideSql | String | XXXX |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvBridgeSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- Use RdvBridgeSql combined the below samples to add additional logic to the Bridge load procedure. -->
<#*
<# 	CustomOutput.ObjectInherit = false; #>
<# 	CustomOutput.RdvBridgeColumnSelect = @"";#>
<# 	CustomOutput.RdvBridgeColumnInsert = @""; #>
<# 	CustomOutput.RdvBridgeDateWhereSql = @""; #>
<# 	CustomOutput.RdvBridgeDateOverrideWhereSql = @""; #>
<# 	CustomOutput.RdvBridgeWhereSql = @""; #>
<# 	CustomOutput.RdvBridgeOverrideWhereSql = @""; #>
<# 	CustomOutput.RdvBridgeHubWhereSql = @""; #>
<# 	CustomOutput.RdvBridgeHubOverrideWhereSql = @""; #>
<# 	CustomOutput.RdvBridgeOverrideWhereSql = @""; #>
<# 	CustomOutput.RdvBridgeColumnElements = @""; #>
<# 	CustomOutput.RdvBridgeOverrideSql = @"Add SQL here to completely override the BRIDGE Code."; #>
*#>
```

## Data Vault Bridge Pre Process SQL

Configure SQL to be injected before the Bridge Query

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvBridgePreProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Vault Bridge Post Process SQL

Configure SQL to be injected after the Bridge Query

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvBridgePostProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

