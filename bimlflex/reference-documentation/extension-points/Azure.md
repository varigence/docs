---
uid: bimlflex-app-reference-documentation-Azure
title: BimlFlex App Definition for Azure
summary: Documentation of functionality within BimlFlex for the Azure Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Azure Extension Points

The Azure category has the following available Extension Points defined.
  
## External File Format

Configure File Format for PolyBase External Tables

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the file format will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ExternalFileFormat" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

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

## Adf Get Parameter

Configure override to retrieve parameter values

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
dependency | String | Contains the dependency name for the previous activity |


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


<# 	CustomOutput.ObjectInherit = false; #>
<#	var srcObj = new TableObject(table, table.Connection.RelatedItem.IntegrationStage, "SRC");
	var parameters = srcObj.Parameters;
	if (!parameters.Any()) return null; 
	foreach(var parameter in parameters){
		if (parameter.IsNotPersisted == "Y") continue;
		var srcDatasetType = srcObj.SourceDatasetType;
		var parameterColumn = parameter.Column.RelatedItem != null ? parameter.Column.RelatedItem.Name : "";
		parameterColumn = string.IsNullOrWhiteSpace(parameterColumn)
			? parameter.Object.RelatedItem != null ? parameter.Object.RelatedItem.Name + "." + parameter.ParameterName : parameter.ParameterName
			: parameterColumn;
		var parameterSourceElement = srcObj.SourceAdfSourceElement; #>
	<Lookup Name="LKP_<#=parameter.ParameterName #>">
		<Dependencies>
			<Dependency Condition="Succeeded" DependsOnActivityName="<#=dependency#>"></Dependency>
		</Dependencies>
			<<#=srcObj.CatalogDatasetElement #> StoredProcedure="[adf].[GetConfigVariable]" DatasetName="BimlCatalog">
			<StoredProcedureParameters>
				<Parameter Name="SystemName" DataType="String" IsNull="false"><#=srcObj.SourceConnection.Name#></Parameter>
				<Parameter Name="ObjectName" DataType="String" IsNull="false"><#=parameterColumn#></Parameter>
				<Parameter Name="VariableName" DataType="String" IsNull="false"><#=parameter.ParameterName#></Parameter>
				<Parameter Name="VariableValue" DataType="String" IsNull="false"><#=parameter.ParameterDefault#></Parameter>
				<Parameter Name="ExecutionID" DataType="Int64">@activity(&apos;LogExecutionStart&apos;).output.firstRow.ExecutionID</Parameter>
			</StoredProcedureParameters>
		</<#=srcObj.CatalogDatasetElement #>>
	</Lookup>
	<Lookup Name="LKP_<#=parameter.ParameterToName #>" FirstRowOnly="true">
		<Dependencies>
			<Dependency DependsOnActivityName="LKP_<#=parameter.ParameterName #>" />
		</Dependencies>
		<<#=parameterSourceElement#> DatasetName="<#=srcObj.SourceDatasetName #>">
			<Query><#=parameter.GetSourceParameterSql() #></Query>
		</<#=parameterSourceElement#>>
	<# CustomOutput.OutputPathName = $"LKP_{parameter.ParameterToName}"; #>
	</Lookup>
<#	} #>

```

## Adf Set Parameter

Configure override to publish parameter values

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
dependency | String | Contains the dependency name for the previous activity |


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

## Adf Pre Copy Script

Configure a Pre Copy Script Attribute in the Copy Activity.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPreCopyScript" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


```

## Adf Post Copy

Configure a Post Copy Activity in the pipeline.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
dependency | String | Contains the dependency name for the previous activity |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPostCopy" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="dependency" type="String" #>


<Wait Name="Wait for Ten Seconds" WaitTimeInSeconds="10">
	<Dependencies>
		<Dependency Condition="Succeeded" DependsOnActivityName="<#=dependency#>"></Dependency>
	</Dependencies>
</Wait>

```

## Adf Batch Pre Process

Configure logic that will be injected before the main Batch process

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |
dependency | String | Contains the dependency name for the previous activity |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfBatchPreProcess" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>
<#@ property name="dependency" type="String" #>


<Wait Name="Wait for Ten Seconds" WaitTimeInSeconds="10">
	<Dependencies>
		<Dependency Condition="Succeeded" DependsOnActivityName="<#=dependency#>"></Dependency>
	</Dependencies>
</Wait>

```

## Adf Batch Post Process

Configure logic that will be injected after the main Batch process

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |
dependency | String | Contains the dependency name for the previous activity |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfBatchPostProcess" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>
<#@ property name="dependency" type="String" #>


<Wait Name="Wait for Ten Seconds" WaitTimeInSeconds="10">
	<Dependencies>
		<Dependency Condition="Succeeded" DependsOnActivityName="<#=dependency#>"></Dependency>
	</Dependencies>
</Wait>

```

## Adf Batch Parameter

Configure ADF Batch Parameters

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |
dependency | String | Contains the dependency name for the previous activity |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfBatchParameter" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>
<#@ property name="dependency" type="String" #>


<Parameter Name="MyAdfParameter" DataType="Bool">false</Parameter>

```

## Adf Trigger

Configure a Trigger in Azure Data Factory.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the Trigger will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfTrigger" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfScheduleTriggerNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is adding a Schedule Trigger to the Azure Data Factory for a Batch and adds a Batch Pipeline to the Trigger -->

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

## Override Adf Linked Service

Configure a Linked Service in Azure Data Factory. This overrides the entire definition for a Linked Service. Target the connection and add the relevant Biml for the Linked Service.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
connection | BimlFlexModelWrapper.AdfLinkedServicesWrapper | Contains the connection for the Linked Service |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfLinkedService" #>
<#@ property name="connection" type="BimlFlexModelWrapper.AdfLinkedServicesWrapper" #>


<SqlServer Name="<#=connection.Name#>"
	<# if (!string.IsNullOrWhiteSpace(connection.Username)){#>Username="<#=connection.Username#>"<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.Password)){#>Password="<#=connection.Password#>"<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.ServicePrincipalId)){#>ServicePrincipalId="<#=connection.ServicePrincipalId#>"<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.ServicePrincipalKey)){#>ServicePrincipalKey="<#=connection.ServicePrincipalKey#>"<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.Tenant)){#>Tenant="<#=connection.Tenant#>"<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.ConnectionString)){#>ConnectionString="<#=connection.ConnectionString#>"<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.LogicalDisplayFolder)){#>LogicalDisplayFolder="<#=connection.LogicalDisplayFolder#>"<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.EncryptedCredential)){#>EncryptedCredential="<#=connection.EncryptedCredential#>"<# } #>
>
	<# if (!string.IsNullOrWhiteSpace(connection.PasswordKVS_StoreName) && !string.IsNullOrWhiteSpace(connection.PasswordKVS_SecretName) ){#>
	<PasswordKVS
		<# if (!string.IsNullOrWhiteSpace(connection.PasswordKVS_SecretVersion)){#>SecretVersion="<#=connection.PasswordKVS_SecretVersion#>"<# } #>
		StoreName="<#=connection.PasswordKVS_StoreName#>" Name="<#=connection.PasswordKVS_SecretName#>"
	>
	</PasswordKVS>
	<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.ServicePrincipalKeyKVS_StoreName) && !string.IsNullOrWhiteSpace(connection.ServicePrincipalKeyKVS_SecretName) ){#>
	<ServicePrincipalKeyKVS
		<# if (!string.IsNullOrWhiteSpace(connection.ServicePrincipalKeyKVS_SecretVersion)){#>SecretVersion="<#=connection.ServicePrincipalKeyKVS_SecretVersion#>"<# } #>
		StoreName="<#=connection.ServicePrincipalKeyKVS_StoreName#>" Name="<#=connection.ServicePrincipalKeyKVS_SecretName#>"
	>
	</ServicePrincipalKeyKVS>
	<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.ConnectionStringKVS_StoreName) && !string.IsNullOrWhiteSpace(connection.ConnectionStringKVS_SecretName) ){#>
	<ConnectionStringKVS
		<# if (!string.IsNullOrWhiteSpace(connection.ConnectionStringKVS_SecretVersion)){#>SecretVersion="<#=connection.ConnectionStringKVS_SecretVersion#>"<# } #>
		StoreName="<#=connection.ConnectionStringKVS_StoreName#>" Name="<#=connection.ConnectionStringKVS_SecretName#>"
	>
	</ConnectionStringKVS>
	<# } #>
	<# if (!string.IsNullOrWhiteSpace(connection.ConnectVia_IntegrationRuntime) && connection.ConnectVia_IntegrationRuntime != "AutoResolveIntegrationRuntime"){#><ConnectVia><IntegrationRuntime IntegrationRuntimeName="<#=connection.ConnectVia_IntegrationRuntime#>" /></ConnectVia><# } #>
</SqlServer>

```

## Override Adf Dataset

Configure a Dataset in Azure Data Factory. This overrides the entire definition for a Dataset.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains the connection for the Linked Service |
dataset | dynamic | Contains the connection for the Linked Service |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfDataset" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>
<#@ property name="dataset" type="dynamic" #>


<#
var datasetName = dataset.Name;
var datasetType = dataset.Type;
var datasetIntegrationStage = dataset.IntegrationStage;
var datasetTable = dataset.Table;
var datasetLinkedService = dataset.LinkedService;
var datasetLinkedServiceName = dataset.LinkedServiceName;
var datasetLinkedServiceType = dataset.LinkedServiceType;
var datasetDatasetPrefix = dataset.DatasetPrefix;
var datasetProject = dataset.Project;
var datasetAdfFolder = dataset.AdfFolder;
var datasetLogicalDisplayFolder = dataset.LogicalDisplayFolder;
var datasetSystemType = dataset.SystemType;
var datasetConnectionType = dataset.ConnectionType;
var datasetrowEffectiveFromDate = dataset.rowEffectiveFromDate;
var datasetrowEffectiveFromDateValue = dataset.rowEffectiveFromDateValue;
var datasetDestContainer = dataset.DestContainer;
#>
<SqlServer Name="<#=datasetDatasetPrefix #>_<#=datasetLinkedServiceName#>" Schema="@dataset().TargetSchemaName" Table="@dataset().TargetTableName" LinkedServiceName="<#=datasetLinkedServiceName#>" AdfFolder="<#=datasetAdfFolder#>" LogicalDisplayFolder="<#=datasetLogicalDisplayFolder#>">
	<Parameters>
		<Parameter Name="TargetSchemaName" DataType="String">TargetSchemaNamePlaceholder</Parameter>
		<Parameter Name="TargetTableName" DataType="String">TargetTableNamePlaceholder</Parameter>
	</Parameters>
</SqlServer>

```

## Override Adf Copy Source

Configure a Copy Source in Azure Data Factory. This overrides the entire definition for a Copy Source.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains the object entity for which the overridden Copy Activity Source will be created. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfCopySource" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<SqlServer
	Name="<#=connection.Name#>"
	ConnectionString="<#=connection.ConnectionString#>"
	Username="uid"
	Password="pwd">
	<ConnectVia IntegrationRuntime="RuntimeName" />
</SqlServer>

```

## Override Adf Copy Sink

Configure a Copy Sink in Azure Data Factory. This overrides the entire definition for a Copy Sink.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains the object entity for which the overridden Copy Activity Sink will be created. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfCopySink" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<SqlServer
	Name="<#=connection.Name#>"
	ConnectionString="<#=connection.ConnectionString#>"
	Username="uid"
	Password="pwd">
	<ConnectVia IntegrationRuntime="RuntimeName" />
</SqlServer>

```

## Override Adf Staging Settings

Configure a Staging Settings in Azure Data Factory. This overrides the entire definition for a Staging Settings.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains the object entity for which the overridden Copy Activity Staging Settings will be created. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfStagingSettings" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<StagingSettings LinkedServiceName="<#=connection.Name#>" Path="staging" />
```

## Adf Pipeline

Add a bespoke Pipeline to an Azure Data Factory.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
instance | BimlFlexModelWrapper | The metadata instance of which the Azure Data Factory is part. |
dataFactoryName | String | The Azure Data Factory name the Extension Point is applied to. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPipeline" #>
<#@ property name="instance" type="BimlFlexModelWrapper" #>
<#@ property name="dataFactoryName" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml-reference/language-reference/Varigence.Languages.Biml.DataFactory.AstAdfPipelineNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is adding a bespoke Pipeline to the specified Azure Data Factory -->

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

