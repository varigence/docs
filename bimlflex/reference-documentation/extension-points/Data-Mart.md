---
uid: bimlflex-app-reference-documentation-Data-Mart
title: BimlFlex App Definition for Data Mart
summary: Documentation of functionality within BimlFlex for the Data Mart Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Data Mart Extension Points

The Data Mart category has the following available Extension Points defined.
  
## Data Warehouse Source Override

Configure override for the Data Mart Source transformation node

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhSourceOverride" #>
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

## Data Warehouse Source Pipeline Pre

Configure pipeline logic that will be injected after the Data Mart source transformation node

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhSourcePipelinePre" #>
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

## Data Warehouse Source Pipeline Post

Configure pipeline logic that will be injected after the Data Mart source transformations

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhSourcePipelinePost" #>
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

## Data Warehouse Target Pipeline Pre

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhTargetPipelinePre" #>
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

## Data Warehouse Target Pipeline Post

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhTargetPipelinePost" #>
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

## Data Warehouse Target Override

Configure override for the Data Mart target transformation node

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhTargetOverride" #>
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

## Data Warehouse Insert Pipeline

Configure insert pipeline logic that will be injected before the target transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the Batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhInsertPipeline" #>
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

## Data Warehouse Type1 Pipeline

Configure type1 update pipeline logic that will be injected before the target transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the Batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhType1Pipeline" #>
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

## Data Warehouse Type2 Pipeline

Configure type2 insert pipeline logic that will be injected before the target transformation node

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhType2Pipeline" #>
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

## Data Warehouse Pre Process SQL

Configure SQL to be injected at the start of the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPreProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Post Process SQL

Configure SQL to be injected at the end of the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPostProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Pre Source SQL

Configure SQL to be injected before the staging query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Post Source SQL

Configure SQL to be injected after the staging query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Pre Type1 Delta SQL

Configure SQL to be injected before the Type1 delta query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPreType1DeltaSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Post Type1 Delta SQL

Configure SQL to be injected after the Type1 delta query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPostType1DeltaSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Pre Type1 Update SQL

Configure SQL to be injected before the Type1 update query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPreType1UpdateSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Post Type1 Update SQL

Configure SQL to be injected after the Type1 update query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPostType1UpdateSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Pre Type1 Insert SQL

Configure SQL to be injected before the Type1 insert query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPreType1InsertSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Post Type1 Insert SQL

Configure SQL to be injected after the Type1 insert query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPostType1InsertSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Pre Type2 Insert SQL

Configure SQL to be injected before the Type2 insert query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPreType2InsertSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Post Type2 Insert SQL

Configure SQL to be injected after the Type2 insert query in the Data Warehouse stored procedure

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
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPostType2InsertSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

## Data Warehouse Pre SQL Call Process

Add Before the Data Warehouse SQL Call

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPreSqlCallProcess" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>


<#	var sourceObject = new TableObject(sourceTable, sourceTable.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(targetTable, targetTable.Connection.RelatedItem.IntegrationStage, "TGT");
#>
<#	CustomOutput.ObjectInherit = true; #>
<ExecuteSQL Name="SQL - DwhPreSqlCallProcess" ConnectionName="<#=targetObject.Connection.Name#>">
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
<# 	CustomOutput.OutputPathName = @"SQL - DwhPreSqlCallProcess.Output"; #>
</ExecuteSQL>
```

## Data Warehouse Post SQL Call Process

Add After the Data Warehouse SQL Call

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhPostSqlCallProcess" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>


<#	var sourceObject = new TableObject(sourceTable, sourceTable.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(targetTable, targetTable.Connection.RelatedItem.IntegrationStage, "TGT");
#>
<#	CustomOutput.ObjectInherit = true; #>
<ExecuteSQL Name="SQL - DwhPostSqlCallProcess" ConnectionName="<#=targetObject.Connection.Name#>">
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
<# 	CustomOutput.OutputPathName = @"SQL - DwhPostSqlCallProcess.Output"; #>
</ExecuteSQL>
```

## Data Warehouse SQL Call Override

Override the Data Warehouse SQL Call

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhSqlCallOverride" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>


<#	var sourceObject = new TableObject(sourceTable, sourceTable.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(targetTable, targetTable.Connection.RelatedItem.IntegrationStage, "TGT");
#>
<#	CustomOutput.ObjectInherit = true; #>
<ExecuteSQL Name="SQL - DwhSqlCallOverride" ConnectionName="<#=targetObject.Connection.Name#>">
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
<# 	CustomOutput.OutputPathName = @"SQL - DwhSqlCallOverride.Output"; #>
</ExecuteSQL>
```

