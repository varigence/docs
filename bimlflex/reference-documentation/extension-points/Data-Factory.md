---
uid: bimlflex-app-reference-documentation-Data-Factory
title: BimlFlex App Definition for Data Factory
summary: Documentation of functionality within BimlFlex for the Data Factory Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Data Factory Extension Points

The Data Factory category has the following available Extension Points defined.
  
## External File Format

Configure the file format for PolyBase External Tables when using SSIS (does not apply to ADF Pipelines). This is used in SSIS for files that are uploaded to Blob Storage and then loaded through external tables into Synapse.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the Object to which the file format will be added. |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the Batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ExternalFileFormat" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website: https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPolyBaseSettingsNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This Extension Point overrides the 'Pre-copy script' property in the Sink definition of the targeted Copy Activity. -->
<!-- The below example populates a Pre-copy script. -->

<# 	CustomOutput.ObjectInherit = true; #>
<#	var sourceConnection = EntityHelper.GetSourceConnection(table);
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();#>
WITH
(
	LOCATION = '<#=sourceSsisSafeScopedName #>/'
	, DATA_SOURCE = dwhload_storage
	, FILE_FORMAT = pipe_zip_format
)
```

## ADF Get Parameter

Override the parameters that are retrieved from metadata, and how they behave in the ADF Pipeline. Note that this extension point replaces all paramaters.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the Object (e.g. table or file) to which the process will be added. |
dependency | String | Contains the dependency name for the previous activity. |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfGetParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="dependency" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineParameterNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point allows the manipulation of metadata parameters that are used in the data logistics, for example to create load windows or high-water mark values. -->
<!-- The most common use-case is to change the behaviour of the parameters that are already defined in the metadata. -->
<!-- In this case, the parameter code will be replaced by the contents of this Extension Point. -->

<!-- This extension point affects all Parameters that are added before the main 'Copy Data' activity in the targeted ADF Pipeline. -->
<!-- The below example shows how parameters (e.g. LkpLastLoadDate, LlkpNextLoadDate) are replaced by values retrieved from metadata. -->
<!-- Compared to the default template, this override uses a Lookup Activity to retrieve the target parameter value. -->

<# 
// Object inheritance is disabled for this extension point example.
// This means the target can be set either as individual object or parent objects (e.g. Batch-level), but that this extension will not be applied to any child objects.
CustomOutput.ObjectInherit = false;
#>

<#	
	var srcObj = new TableObject(table, table.Connection.RelatedItem.IntegrationStage, "SRC");
	var parameters = srcObj.Parameters;
  
	if (!parameters.Any()) return null; 
  
	foreach(var parameter in parameters){
		if (parameter.IsNotPersisted == "Y") continue;
    
		var srcDatasetType = srcObj.SourceDatasetType;
		var parameterColumn = parameter.Column.RelatedItem != null ? parameter.Column.RelatedItem.Name : "";
		parameterColumn = string.IsNullOrWhiteSpace(parameterColumn)
			? parameter.Object.RelatedItem != null ? parameter.Object.RelatedItem.Name + "." + parameter.ParameterName : parameter.ParameterName
			: parameterColumn;
		var parameterSourceElement = srcObj.SourceAdfSourceElement;
#>
	<Lookup Name="Lkp<#=parameter.ParameterName#>">
    	<<#=parameterSourceElement#> StoredProcedure="[adf].[GetConfigVariable]" DatasetName="BimlCatalog">
			<StoredProcedureParameters>
				<Parameter Name="SystemName" DataType="String" IsNull="false"><#=srcObj.SourceConnection.Name#></Parameter>
				<Parameter Name="ObjectName" DataType="String" IsNull="false"><#=parameterColumn#></Parameter>
				<Parameter Name="VariableName" DataType="String" IsNull="false"><#=parameter.ParameterName#></Parameter>
				<Parameter Name="VariableValue" DataType="String" IsNull="false"><#=parameter.ParameterDefault#></Parameter>
				<Parameter Name="ExecutionID" DataType="Int64">@activity(&apos;LogExecutionStart&apos;).output.firstRow.ExecutionID</Parameter>
			</StoredProcedureParameters>
		</<#=parameterSourceElement#>>
	</Lookup>
	<Lookup Name="Lkp<#=parameter.ParameterToName#>" FirstRowOnly="true">
		<Dependencies>
			<Dependency DependsOnActivityName="Lkp<#=parameter.ParameterName#>" />
		</Dependencies>
		<<#=parameterSourceElement#> DatasetName="<#=srcObj.SourceDatasetName#>">
			<Query><#=parameter.GetSourceParameterSql() #></Query>
		</<#=parameterSourceElement#>>
	</Lookup>
	<SetVariable Name="Set<#=parameter.ParameterName#>" VariableName="<#=parameter.ParameterName#>">
		<Dependencies>
			<Dependency Condition="Succeeded" DependsOnActivityName="Lkp<#=parameter.ParameterName#>"></Dependency>
		</Dependencies>
		<Value>
			@activity('Lkp<#=parameter.ParameterName#>').output.firstRow.VariableValue
		</Value>
	</SetVariable>	
	<SetVariable Name="Set<#=parameter.ParameterToName#>" VariableName="<#=parameter.ParameterToName#>">
		<Dependencies>
			<Dependency Condition="Succeeded" DependsOnActivityName="Set<#=parameter.ParameterName#>"></Dependency>
			<Dependency Condition="Succeeded" DependsOnActivityName="Lkp<#=parameter.ParameterToName#>"></Dependency>
		</Dependencies>
		<Value>
			@{if(contains(activity('Lkp<#=parameter.ParameterToName#>').output,'firstRow'), activity('Lkp<#=parameter.ParameterToName#>').output.firstRow.<#=parameter.ParameterToName#>, variables('<#=parameter.ParameterName#>'))}
		</Value>
	</SetVariable>
<# CustomOutput.OutputPathName = $"Set{parameter.ParameterToName}";
}
#>

```

## ADF Set Parameter

Override the parameters that are saved back to metadata, and how they behave in the ADF Pipeline. Note that this extension point replaces all parameters.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source Object (e.g. table or file) to which the process will be added. |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target Object to which the process will be added. |
dependency | String | Contains the dependency name for the previous activity. |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfSetParameter" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="dependency" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineParameterNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point allows the manipulation of metadata parameters that are used in the data logistics. -->
<!-- The most common use-case is to change the behaviour of the parameters that are already defined in the metadata. -->
<!-- In this case, the parameter code will be replaced by the contents on this Extension Point. -->

<!-- This extension point affects all Parameters that are referred to after the main 'Copy Data' activity in the targeted ADF Pipeline. -->
<!-- This can be used to control how parameter values are saved back into the BimlFlex repository database. -->
<!-- The below example shows how parameters (e.g. LOG_LastLoadDate) are replaced by values retrieved from metadata. -->
            
<# 	CustomOutput.ObjectInherit = true; #>

<#	var srcObj = new TableObject(sourceTable, sourceTable.Connection.RelatedItem.IntegrationStage, "SRC");
	var parameters = srcObj.Parameters;
	if (!parameters.Any()) return null; 
	foreach(var parameter in parameters) {
		if (parameter.IsNotPersisted == "Y") continue; 
		var parameterColumn = parameter.Column.RelatedItem != null ? parameter.Column.RelatedItem.Name : "";
		parameterColumn = string.IsNullOrWhiteSpace(parameterColumn)
			? parameter.Object.RelatedItem != null ? parameter.Object.RelatedItem.Name + "." + parameter.ParameterName : parameter.ParameterName
			: parameterColumn; #>
	<SqlServerStoredProcedure Name="EP_LOG_<#=parameter.ParameterName #>" LinkedServiceName="BimlCatalog" StoredProcedure="[adf].[SetConfigVariable]">
	<#	if (!string.IsNullOrEmpty(dependency)) {#>
		<Dependencies>
			<Dependency DependsOnActivityName="<#=dependency #>" />
		</Dependencies>
	<#	} #>
		<StoredProcedureParameters>
			<Parameter Name="SystemName" DataType="String" IsNull="false"><#=srcObj.SourceConnection.Name#></Parameter>
			<Parameter Name="ObjectName" DataType="String" IsNull="false"><#=parameterColumn#></Parameter>
			<Parameter Name="VariableName" DataType="String" IsNull="false"><#=parameter.ParameterName#></Parameter>
			<Parameter Name="VariableValue" DataType="String" IsNull="false">@activity('LKP_<#=parameter.ParameterToName #>').output.firstRow.<#=parameter.ParameterToName #></Parameter>
			<Parameter Name="ExecutionID" DataType="Int64" IsNull="false">@activity('LogExecutionStart').output.firstRow.ExecutionID</Parameter>
		</StoredProcedureParameters>
	</SqlServerStoredProcedure>
<#	} #>
```

## ADF Pre Copy Script

Configure a Pre Copy Script Attribute for the Sink property of a Copy Activity.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the (source) Object, from which the data will be copied in the Copy Activity. |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the (target) Object, which will act as the sink for the Copy Activity. |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the Batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPreCopyScript" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website: https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPreCopyScriptSinkBaseNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This Extension Point overrides the 'Pre-copy script' property in the Sink definition of the targeted Copy Activity. -->
<!-- The below example populates a Pre-copy script. -->

<!-- Assuming the Name property of the 'targetTable' variable is 'AWLT_SRC.SalesLT.Address' the output of the below code will be -->
<!-- <PreCopyScript>TRUNCATE TABLE AWLT_SRC.SalesLT.Address</PreCopyScript> -->
<!-- The <PreCopyScript> tags will be automatically added by BimlFlex. -->

TRUNCATE TABLE <#=targetTable.Name#>
```

## ADF Post Copy

Configure bespoke logic that will be applied immediately after the Copy Activity that is part of the 'MainActivity' IfCondition container, for the targeted individual process Execute Pipeline.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the Object for which the pipeline is created. |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added. |
dependency | String | Contains the name of the previous activity to manage dependencies. |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the Batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPostCopy" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="dependency" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point allows the addition of bespoke logic that will be applied immediately after the Copy Activity that is part of the 'MainActivity' IfCondition container, for the targeted individual process Execute Pipeline.-->
<!-- Please note that a Copy Activity is only relevant for source-to-staging type processes that receive and land data from external data sources. -->
<!-- In the Biml output, the location is specified as 'Placeholder for extensionpoint="AdfPostCopy"' -->
<!-- The below example shows 'Wait' step to be added after the main processing in the Pipeline has completed. -->

<#
// The following is an example of how BimlScript can be used for this extension point.
var outputPathName = "Wait For Ten Seconds Post Copy";
#>

<Wait Name="<#=outputPathName#>" WaitTimeInSeconds="10">
	<Dependencies>
		<Dependency Condition="Succeeded" DependsOnActivityName="<#=dependency#>"></Dependency>
	</Dependencies>
</Wait>

<#
// The output path name is set here, so that BimlFlex can connect this activity to the other generated components.
CustomOutput.OutputPathName = outputPathName;#>

```

## ADF Batch Pre Process

Configure logic that will be injected before the targeted main Batch Pipeline process.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information about the ADF (Batch) Pipeline to which the Extension Point content will be added. |
dependency | String | Contains the dependency name for the previous (incoming) activity. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfBatchPreProcess" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>
<#@ property name="dependency" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point allows the addition of bespoke logic to be added as the first step in the targeted (Batch) ADF Pipeline. -->
<!-- The logic is added after the LogExecutionStart, so that the BimlCatalog can still record the initiation of the running of the Pipeline. -->
<!-- The below example shows 'Wait' step to be added before the main processing in the Pipeline begins. -->

<Wait Name="Wait for Ten Seconds" WaitTimeInSeconds="10">
	<Dependencies>
		<Dependency Condition="Succeeded" DependsOnActivityName="<#=dependency#>"></Dependency>
	</Dependencies>
</Wait>

```

## ADF Batch Post Process

Configure logic that will be injected after the targeted main Batch Pipeline process.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information about the ADF (Batch) Pipeline to which the Extension Point content will be added. |
dependency | String | Contains the dependency name for the previous (incoming) activity. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfBatchPostProcess" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>
<#@ property name="dependency" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point allows the addition of bespoke logic to be added as the last step in the targeted (Batch) ADF Pipeline. -->
<!-- The below example shows 'Wait' step to be added after the main processing in the Pipeline has completed. -->

<Wait Name="Wait for Ten Seconds" WaitTimeInSeconds="10">
	<Dependencies>
		<Dependency Condition="Succeeded" DependsOnActivityName="<#=dependency#>"></Dependency>
	</Dependencies>
</Wait>

```

## ADF Batch Parameter

Configure ADF Batch Parameters.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information about the ADF (Batch) Pipeline to which the Parameter will be added. |
dependency | String | Contains the dependency name for the previous (incoming) activity. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfBatchParameter" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>
<#@ property name="dependency" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/api-reference/Varigence.Languages.Biml.Task.AstParameterNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point allows the addition of a Parameter to an existing Batch Pipeline. -->
<!-- A Batch Pipeline in the BimlFlex ADF deployment is a Pipeline that calls other Pipelines and is located in a 'Batch' folder in ADF. -->

<!-- The below example shows a Bimlscript Parameter code snippet, which will be added to the specific Batch Pipeline. -->

<Parameter Name="MyAdfParameter" DataType="Bool">false</Parameter>

```

## ADF Trigger

Configure a Trigger in Azure Data Factory. This can be linked to a Batch Pipeline process.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the Batch to which the Trigger will be added. |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the Batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfTrigger" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfScheduleTriggerNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- The below example adds a Schedule Trigger and connects it to a Batch Pipeline in Azure Data Factory. -->

<Schedule Name="ScheduleTriggerName" Frequency="Hour" Interval="1" Start="2021-01-01" End="2025-12-31">
	<Pipelines>
		<Pipeline PipelineName="01_<#=batch.Name #>_Batch">
			<Parameters>
				<Parameter Name="IsInitialLoad">false</Parameter>
			</Parameters>
		</Pipeline>
	</Pipelines>
</Schedule>

```

## Override ADF Linked Service

Configure a Linked Service in Azure Data Factory. This overrides the entire definition for a Linked Service. Target the connection and add the relevant Biml for the Linked Service.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains the connection for the Linked Service. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfLinkedService" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- The below example replaces the entire targeted Linked Service (Connection in BimlFlex) with the code below. -->

<SqlServer Name="<#=connection.Name#>"<# if (!string.IsNullOrWhiteSpace(connection.LS_Username)){#>Username="<#=connection.LS_Username#>"<# } #>
<# if (!string.IsNullOrWhiteSpace(connection.LS_Password)){#>Password="<#=connection.LS_Password#>"<# } #>
<# if (!string.IsNullOrWhiteSpace(connection.LS_ServicePrincipalId)){#>ServicePrincipalId="<#=connection.LS_ServicePrincipalId#>"<# } #>
<# if (!string.IsNullOrWhiteSpace(connection.LS_ServicePrincipalKey)){#>ServicePrincipalKey="<#=connection.LS_ServicePrincipalKey#>"<# } #>
<# if (!string.IsNullOrWhiteSpace(connection.LS_Tenant)){#>Tenant="<#=connection.LS_Tenant#>"<# } #>
<# if (!string.IsNullOrWhiteSpace(connection.LS_ConnectionString)){#>ConnectionString="<#=connection.LS_ConnectionString#>"<# } #>
<# if (!string.IsNullOrWhiteSpace(connection.LS_EncryptedCredential)){#>EncryptedCredential="<#=connection.LS_EncryptedCredential#>"<# } #>>
<# if (!string.IsNullOrWhiteSpace(connection.LS_PasswordKVS_StoreName) && !string.IsNullOrWhiteSpace(connection.LS_PasswordKVS_SecretName) ){#>
	<PasswordKVS <# if (!string.IsNullOrWhiteSpace(connection.LS_PasswordKVS_SecretVersion)){#>SecretVersion="<#=connection.LS_PasswordKVS_SecretVersion#>"<# } #>
		StoreName="<#=connection.LS_PasswordKVS_StoreName#>" Name="<#=connection.LS_PasswordKVS_SecretName#>">
	</PasswordKVS>
	<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.LS_ServicePrincipalKeyKVS_StoreName) && !string.IsNullOrWhiteSpace(connection.LS_ServicePrincipalKeyKVS_SecretName) ){#>
	<ServicePrincipalKeyKVS
		<# if (!string.IsNullOrWhiteSpace(connection.LS_ServicePrincipalKeyKVS_SecretVersion)){#>SecretVersion="<#=connection.LS_ServicePrincipalKeyKVS_SecretVersion#>"<# } #>
		StoreName="<#=connection.LS_ServicePrincipalKeyKVS_StoreName#>" Name="<#=connection.LS_ServicePrincipalKeyKVS_SecretName#>">
	</ServicePrincipalKeyKVS>
	<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.LS_ConnectionStringKVS_StoreName) && !string.IsNullOrWhiteSpace(connection.LS_ConnectionStringKVS_SecretName) ){#>
	<ConnectionStringKVS <# if (!string.IsNullOrWhiteSpace(connection.LS_ConnectionStringKVS_SecretVersion)){#>SecretVersion="<#=connection.LS_ConnectionStringKVS_SecretVersion#>"<# } #> StoreName="<#=connection.LS_ConnectionStringKVS_StoreName#>" Name="<#=connection.LS_ConnectionStringKVS_SecretName#>">
	</ConnectionStringKVS><# } #><# if (!string.IsNullOrWhiteSpace(connection.LS_ConnectVia_IntegrationRuntime) && connection.LS_ConnectVia_IntegrationRuntime != "AutoResolveIntegrationRuntime"){#><ConnectVia><IntegrationRuntime IntegrationRuntimeName="<#=connection.LS_ConnectVia_IntegrationRuntime#>" /></ConnectVia><# } #>
</SqlServer>

```

## Override ADF Dataset

Configure a Dataset in Azure Data Factory. This overrides the entire definition for a Dataset.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains the connection for the Linked Service. |
dataset | dynamic | Contains the connection for the Linked Service. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfDataset" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>
<#@ property name="dataset" type="dynamic" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfDataFactoryNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- The below example replaces the targeted Dataset (via the Connection Name in BimlFlex) with the code below. -->

<#
var datasetName = dataset.Name;
var datasetType = dataset.Type;
var datasetIntegrationStage = dataset.IntegrationStage;
var datasetTable = dataset.Table;
var datasetLinkedServiceName = dataset.LinkedServiceName;
var datasetLinkedServiceType = dataset.LinkedServiceType;
var datasetDatasetPrefix = dataset.DatasetPrefix;
var datasetProject = dataset.Project;
var datasetAdfFolder = dataset.AdfFolder;
var datasetLogicalDisplayFolder = dataset.LogicalDisplayFolder;
var datasetSystemType = dataset.SystemType;
var datasetConnectionType = dataset.ConnectionType;
var datasetDestContainer = dataset.DestContainer;
#>
<SqlServer Name="<#=datasetDatasetPrefix #>_<#=datasetLinkedServiceName#>" Schema="@dataset().TargetSchemaName" Table="@dataset().TargetTableName" LinkedServiceName="<#=datasetLinkedServiceName#>" AdfFolder="<#=datasetAdfFolder#>" LogicalDisplayFolder="<#=datasetLogicalDisplayFolder#>">
	<Parameters>
		<Parameter Name="TargetSchemaName" DataType="String">TargetSchemaNamePlaceholder</Parameter>
		<Parameter Name="TargetTableName" DataType="String">TargetTableNamePlaceholder</Parameter>
	</Parameters>
</SqlServer>

```

## Override ADF Copy Source

Configure a Copy Activity source in Azure Data Factory. This overrides the entire source definition for an ADF Copy Activity.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains the Object (e.g. source table) for which the source properties for the Copy Activity will be overridden. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfCopySource" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website: https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfCopyActivityNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->

<!-- This Extension Point overrides the entire 'Source' definition for the targeted Copy Activity in an ADF Pipeline. -->
<!-- Any other Source properties that may be defined using more specific Extension Point for the particular Copy Activity will be omitted. -->

<!-- The below example replaces the existing source properties for the Copy Activity with an Azure SQL Server connection containing a customer query. -->

<AzureSqlDatabaseSource DatasetName="SQLDB_AWLT_SRC">
	<Query>
		SELECT TOP 100 * FROM [SalesLT].[Address] 
	</Query>
	<Parameters>
		<Parameter Name="TargetSchemaName">@pipeline().parameters.TargetSchemaName</Parameter>
		<Parameter Name="TargetTableName">@pipeline().parameters.TargetTableName</Parameter>
	</Parameters>
</AzureSqlDatabaseSource>

```

## Override ADF Copy Sink

Configure a Copy Activity sink in Azure Data Factory. This overrides the entire sink definition for an ADF Copy Activity.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains the Object (e.g. table) for which the sink properties for the Activity Sink will be overridden. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfCopySink" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website: https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfCopyActivityNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->

<!-- This Extension Point overrides the entire 'Sink' definition for the targeted Copy Activity in an ADF Pipeline. -->
<!-- The below example replaces the existing sink properties for the Copy Activity with an specific Dataset and Parameters. -->

<AzureSqlDatabaseSink DatasetName="SQLDB_BFX_LND">
	<Parameters>
		<Parameter Name="TargetSchemaName">@pipeline().parameters.TargetSchemaName</Parameter>
		<Parameter Name="TargetTableName">@pipeline().parameters.TargetTableName</Parameter>
	</Parameters>
</AzureSqlDatabaseSink>

```

## Override ADF Staging Settings

Configure the Enable Staging property in the settings for an Copy Activity. This overrides the definition of the Enable Staging setting, including the targeted Linked Service.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains the Object for which the Copy Activity settings for 'Enable Staging' will be replaced or set. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfStagingSettings" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfCopyActivityNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point updates the Enable Staging property, which is part of the settings of a Copy Activity. -->

<StagingSettings LinkedServiceName="" Path="staging" />
```

## Override ADF Log Settings

Configure the Enable Logging property in the settings for an Copy Activity. This overrides the definition of the Enable Logging setting, including the targeted Linked Service.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains the Object for which the Copy Activity settings for 'Enable Logging' will be replaced or set. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfLogSettings" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfCopyActivityNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point updates the Enable Logging property, which is part of the settings of a Copy Activity. -->

<LogSettings LinkedServiceName="" LogLevel="Warning" EnableReliableLogging="true" Path="logging" />
```

## ADF Pipeline

Adds a bespoke Pipeline to an Azure Data Factory.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
instance | BimlFlexModelWrapper | The metadata instance of which the Azure Data Factory is part. There is no 'Data Factory' object in the metadata model that can directly be accessed, and the instance object allows for full access to all metadata to define the specific behaviour of the Pipeline that is added using this Extension Point. |
dataFactoryName | String | The Azure Data Factory name the Extension Point is applied to. E.g. where the Pipeline will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPipeline" #>
<#@ property name="instance" type="BimlFlexModelWrapper" #>
<#@ property name="dataFactoryName" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- This extension point allows the addition of a bespoke Pipeline to the specified Azure Data Factory. -->
<!-- The below example shows a Bimlscript Pipeline code snippet, which will be added to the Pipelines already generated by BimlFlex. -->
<!-- This example creates a 'master' batch by starting existing Batch pipelines in sequence. -->

<Pipeline Name="Main AWLT Orchestration" AdfFolder="01 Main AWLT Orchestration" LogicalDisplayFolder="01 Main AWLT Orchestration">
	<Parameters>
		<Parameter Name="IsInitialLoad" DataType="Bool">false</Parameter>
		<Parameter Name="OtherPipelineParameter" DataType="String">placeholder</Parameter>
	</Parameters>
	<Variables>
		<Variable Name="PipelineVariable" DataType="String">placeholder</Variable>
	</Variables>
	<Activities>
		<!-- Run Extract to Staging, PSA and Data Vault Pipeline -->
		<ExecutePipeline Name="01_EXT_AWLT_SRC_Batch" PipelineName="01_EXT_AWLT_SRC_Batch" WaitOnCompletion="true">
			<Parameters>
				<Parameter Name="IsInitialLoad">@pipeline().parameters.IsInitialLoad</Parameter>
			</Parameters>
		</ExecutePipeline>
		<!-- Run Delete Detection Pipeline -->
		<ExecutePipeline Name="01_EXT_AWLT_SRC_DEL_Batch" PipelineName="01_EXT_AWLT_SRC_DEL_Batch" WaitOnCompletion="true">
			<Dependencies>
				<Dependency DependsOnActivityName="01_EXT_AWLT_SRC_Batch" Condition="Succeeded"></Dependency>
			</Dependencies>
		</ExecutePipeline>
		<!-- Run Data Vault PIT and BRG Pipelines -->
		<ExecutePipeline Name="01_LOAD_BFX_RDV_BRG_Batch" PipelineName="01_LOAD_BFX_RDV_BRG_Batch" WaitOnCompletion="true">
			<Dependencies>
				<Dependency DependsOnActivityName="01_EXT_AWLT_SRC_DEL_Batch" Condition="Succeeded"></Dependency>
			</Dependencies>
		</ExecutePipeline>
		<ExecutePipeline Name="01_LOAD_BFX_RDV_PIT_Batch" PipelineName="01_LOAD_BFX_RDV_PIT_Batch" WaitOnCompletion="true">
			<Dependencies>
				<Dependency DependsOnActivityName="01_LOAD_BFX_RDV_BRG_Batch" Condition="Succeeded"></Dependency>
			</Dependencies>
		</ExecutePipeline>
		<!-- Run Data Mart Pipeline -->
		<ExecutePipeline Name="01_LOAD_BFX_DM_Batch" PipelineName="01_LOAD_BFX_DM_Batch" WaitOnCompletion="true">
			<Dependencies>
				<Dependency DependsOnActivityName="01_LOAD_BFX_RDV_PIT_Batch" Condition="Succeeded"></Dependency>
			</Dependencies>
		</ExecutePipeline>
	</Activities>
</Pipeline>

```

## ADF Integration Runtime

Adds a bespoke Integration Runtime to an Azure Data Factory.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
instance | BimlFlexModelWrapper | The metadata instance to which the Azure Data Factory belongs. There is no 'Data Factory' object in the metadata model that can directly be accessed, and the instance object allows for full access to all metadata to define the specific behaviour of the Integration Runtime that is added using this Extension Point. |
dataFactoryName | String | The Azure Data Factory name the Extension Point is applied to. E.g. where the Integration Runtime will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfIntegrationRuntime" #>
<#@ property name="instance" type="BimlFlexModelWrapper" #>
<#@ property name="dataFactoryName" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- The below example is adding two bespoke Integration Runtimes to the specified Azure Data Factory. -->

<LinkedSelfHostedIntegrationRuntime Name="MyLinkedSelfHostedIntegrationRuntime">
	<RbacAuthorization AuthorizationType="Rbac" ResourceId="/subscriptions/subscriptionid/resourcegroups/resourcegroupname/providers/Microsoft.DataFactory/factories/datafactoryname/integrationruntimes/integrationruntimename"></RbacAuthorization>
</LinkedSelfHostedIntegrationRuntime>
<SelfHostedIntegrationRuntime Name="MySelfHostedIntegrationRuntime">
</SelfHostedIntegrationRuntime>

```

## ADF Linked Service

Add a bespoke Linked Service to an Azure Data Factory.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
instance | BimlFlexModelWrapper | The metadata instance of which the Azure Data Factory is part. There is no 'Data Factory' object in the metadata model that can directly be accessed, and the instance object allows for full access to all metadata to define the specific behaviour of the Linked Service that is added using this Extension Point. |
dataFactoryName | String | The Azure Data Factory name the Extension Point is applied to. E.g. where the Linked Service will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfLinkedService" #>
<#@ property name="instance" type="BimlFlexModelWrapper" #>
<#@ property name="dataFactoryName" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- The below example is adding two bespoke Linked Services to the specified Azure Data Factory. -->

<AzureSqlDatabase ConnectionString="<connectionstring>" Name="MyAzureSqlDatabaseLinkedService">
</AzureSqlDatabase>
<AzureDataLakeStoreGen2 AccountKey="<MyAccountKey>" Name="MyAzureDataLakeStoreGen2LinkedService">
</AzureDataLakeStoreGen2>

```

## ADF Pre Process

Add an activity as the first step in the MainActivity IfCondition of an individual execute pipeline.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the activity will be added. |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the activity will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPreProcess" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<# 
// Object inheritance is enabled by default.
// This means the target can be set either as individual object or parent objects (e.g. Batch-level), and this extension will be applied to all child objects.
CustomOutput.ObjectInherit = true;

// The ADF Pre Process extension points targets an ADF Pipeline as the first entry point in the 'MainActivity' IfCondition.
// This extension point can be used to add an Activity using BimlScript syntax as the first one in the IfCondition.
// In the Biml output, the location is specified as <!-- Placeholder for extensionpoint="AdfPreProcess" -->.

// As it is the first activity in the IfCondition, there are no incoming dependencies.
// However, outgoing dependencies need to be connected so the CustomOutput.OutputPathName needs to be set for the extension point to be integrated properly.

// This extension point comes with input parameters 'sourceTable' and 'targetTable', which can be used in the logic.
// Their properties (e.g. sourceTable.Name) can be viewed using the BimlStudio Intellisense.
#>

<#
// The following is an example of how BimlScript can be used for this extension point.
var outputPathName = "Wait for Ten Seconds Pre Process";
#>
<Wait Name="<#=outputPathName#>" WaitTimeInSeconds="10"></Wait>
<# 

// The output path name is set here, so that BimlFlex can connect this activity to the other generated components.
CustomOutput.OutputPathName = outputPathName;#>

```

## ADF Post Process

Add bespoke logic as the last step in the 'MainActivity' IfCondition before any parameters are updated, for the targeted individual Execute Pipeline.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the activity will be added. |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the activity will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPostProcess" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode. -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com. -->

<!-- The ADF Post Process extension points targets an ADF Pipeline as the last part of the 'MainActivity' IfCondition before any parameters are updated.-->
<!-- This extension point can be used to add bespoke logic using BimlScript syntax as the last step in the IfCondition. -->
<!-- The parameters (load windows) are still updated after this extension point, in case there are failures. -->
<!-- In the Biml output, the location is specified as 'Placeholder for extensionpoint="AdfPostProcess"'. -->
<!-- The below example shows 'Wait' step to be added after the main processing in the Pipeline has completed. -->

<# 
// Object inheritance is enabled by default.
// This means the target can be set either as individual object or parent objects (e.g. Batch-level), and this extension will be applied to all child objects.
CustomOutput.ObjectInherit = true;
#>

<#
// The following is an example of how BimlScript can be used for this extension point.
var outputPathName = "Wait For Ten Seconds Post Process";
#>

<Wait Name="<#=outputPathName#>" WaitTimeInSeconds="10">
	<Dependencies>
		<Dependency Condition="Succeeded" DependsOnActivityName="<#=dependency#>"></Dependency>
	</Dependencies>
</Wait>
<# 

// Wrapping up
CustomOutput.OutputPathName = outputPathName;#>

```
