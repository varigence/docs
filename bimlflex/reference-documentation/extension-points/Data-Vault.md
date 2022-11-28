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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvSourceOverride" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvSourcePipelinePre" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvSourcePipelinePost" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvTargetPipelinePre" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvTargetPipelinePost" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvTargetOverride" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPreProcessSql" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPostProcessSql" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPreSourceSql" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPostSourceSql" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPreTargetSql" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPostTargetSql" #>
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
DvPitAddParameter | String | XXXX |
DvPitLagSql | String | XXXX |
DvPitDateWhereSql | String | XXXX |
DvPitDateOverrideWhereSql | String | XXXX |
DvPitHubWhereSql | String | XXXX |
DvPitHubOverrideWhereSql | String | XXXX |
DvPitSatWhereSql | String | XXXX |
DvPitSatOverrideWhereSql | String | XXXX |
DvPitDeleteWhereSql | String | XXXX |
DvPitDeleteOverrideWhereSql | String | XXXX |
DvPitSourceAddSelect | String | XXXX |
DvPitTargetAddInsert | String | XXXX |
DvPitTargetAddSelect | String | XXXX |
DvPitColumnElements | String | XXXX |
DvPitOverrideSql | String | XXXX |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPitSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- Use DvPitSql combined the below samples to add additional logic to the PIT load procedure. -->
<#*
<# 	CustomOutput.ObjectInherit = false; #>
<# 	CustomOutput.DvPitAddParameter = @"	,@TenantCode			VARCHAR(10) = NULL"; #>
<# 	CustomOutput.DvPitLagSql = @"SET @Lag = -7"; #>
<# 	CustomOutput.DvPitDateWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.DvPitDateOverrideWhereSql = @"WHERE [FlexRowEffectiveFromDate] > '1900-01-01'AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.DvPitDeleteWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.DvPitDeleteOverrideWhereSql = @"WHERE [FlexRowEffectiveFromDate] > '1900-01-01'AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.DvPitHubWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.DvPitHubOverrideWhereSql = @"WHERE [FlexRowEffectiveFromDate] > '1900-01-01'AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.DvPitSatWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.DvPitSatOverrideWhereSql = @"WHERE [FlexRowEffectiveFromDate] > '1900-01-01'AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.DvPitSourceAddSelect = @",l1.[TenantCode] "; #>
<# 	CustomOutput.DvPitTargetAddInsert = @",[TenantCode] "; #>
<# 	CustomOutput.DvPitTargetAddSelect = @",[TenantCode] "; #>
<# 	CustomOutput.DvPitColumnElements = @"<Column Name=""TenantCode"" DataType=""AnsiString"" Length=""3"" IsNullable=""true"" />"; #>
<# 	CustomOutput.DvPitOverrideSql = @"Add SQL here to completely override the PIT Code."; #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPitPreProcessSql" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvPitPostProcessSql" #>
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
DvBridgeLagSql | String | XXXX |
DvBridgeDateWhereSql | String | XXXX |
DvBridgeDateOverrideWhereSql | String | XXXX |
DvBridgeWhereSql | String | XXXX |
DvBridgeOverrideWhereSql | String | XXXX |
DvBridgeHubWhereSql | String | XXXX |
DvBridgeHubOverrideWhereSql | String | XXXX |
DvBridgeColumnSelect | String | XXXX |
DvBridgeColumnInsert | String | XXXX |
DvBridgeColumnElements | String | XXXX |
DvBridgeOverrideSql | String | XXXX |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvBridgeSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- Use DvBridgeSql combined the below samples to add additional logic to the Bridge load procedure. -->
<#*
<# 	CustomOutput.ObjectInherit = false; #>
<# 	CustomOutput.DvBridgeColumnSelect = @"";#>
<# 	CustomOutput.DvBridgeColumnInsert = @""; #>
<# 	CustomOutput.DvBridgeDateWhereSql = @""; #>
<# 	CustomOutput.DvBridgeDateOverrideWhereSql = @""; #>
<# 	CustomOutput.DvBridgeWhereSql = @""; #>
<# 	CustomOutput.DvBridgeOverrideWhereSql = @""; #>
<# 	CustomOutput.DvBridgeHubWhereSql = @""; #>
<# 	CustomOutput.DvBridgeHubOverrideWhereSql = @""; #>
<# 	CustomOutput.DvBridgeOverrideWhereSql = @""; #>
<# 	CustomOutput.DvBridgeColumnElements = @""; #>
<# 	CustomOutput.DvBridgeOverrideSql = @"Add SQL here to completely override the BRIDGE Code."; #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvBridgePreProcessSql" #>
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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DvBridgePostProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

