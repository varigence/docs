---
uid: bimlflex-app-reference-documentation-Batch
title: BimlFlex App Definition for Batch
summary: Documentation of functionality within BimlFlex for the Batch Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Batch Extension Points

The Batch category has the following available Extension Points defined.
  
## Parameter Bindings

Configure Parameter Bindings for an Execute Package Task. This only applies to SSIS deployments. The Extension Point configures parameters from the Batch package that can be sent to the individual process packages through the EPT task in the batch package.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the parameter binding will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ParameterBindings" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableParameterMappingNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is adding a ParameterBinding to a ExecutePackageTask. ParameterBindings is normally combined with a PackageParameter Extension Point -->
<ParameterBindings>
	<ParameterBinding Name="SnapshotDate" VariableName="User.SnapshotDate" />
</ParameterBindings>
```

## Batch Variable

Configure additional Variables for the Batch Package, or override default BimlFlex variables. This only applies to SSIS deployments.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the variables will be added |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchVariable" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```

## Batch Package Configurations

Add PackageConfigurations if you have unselected Use Project Deployment. This only applies to SSIS deployments.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the configurations will be added. |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | XXXX |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPackageConfigurations" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPackageConfigurationNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Use BatchPackageConfigurations to add a Configurations if you have unselected Use Project Deployment in the BimlStudio project. When using Package Deployment instead of Project Deployment you might need to specify additional configurations.
Configurations can also be added to the Batch using the PackageConfigurations combined with CustomOutput.ObjectInherit = true; -->
<# 	CustomOutput.ObjectInherit = true; #>
<PackageConfiguration Name="LOAD_MY_Configurations">
	<ExternalFileInput ExternalFilePath="C:\Varigence\Configurations\MY_BATCH_Configurations.dtsConfig" FileUsageType="ExistingFile" RelativePath="false" />
</PackageConfiguration>
```

## Batch Connection

Configure additional Connection references to the Batch package. This only applies to SSIS deployments.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the connection will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchConnection" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Connection.AstConnectionReferenceNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Note that the connection must be a valid connection defined using BimlFlex connection metadata. Connections can also be added manually in BimlStudio if required. -->
<Connection ConnectionName="MY_SOURCE" />
```

## Batch Pre Process

Configure logic that will be injected before the main Batch process

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPreProcess" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<Container Name="SEQC - Get SnapShotDate Parameters" ConstraintMode="Parallel">
	<Tasks>
		<ExecuteSQL Name="SQL - Get SnapshotDate" ConnectionName="BimlCatalog" ResultSet="SingleRow">
			<Results>
				<Result Name="0" VariableName="User.SnapshotDate" />
			</Results>
			<DirectInput>EXEC [ssis].[GetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue, @ExecutionID</DirectInput>
			<Parameters>
				<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
				<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
			</Parameters>
		</ExecuteSQL>
	</Tasks>
</Container>
```

## Batch Post Process

Configure logic that will be injected after the main Batch process. This only applies to SSIS deployments.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the Batch to which the batch process will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPostProcess" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<!-- The Batch postprocess needs to be connected to the relevant output from the preceding step, -->
<!-- the example below connects to the Main sequence container's standard output. -->
<Container Name="SEQC - Post Process" ConstraintMode="Parallel">
		<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="SEQC - Main.Output" EvaluationOperation="Constraint" EvaluationValue="Success"/>
		</Inputs>
	</PrecedenceConstraints>
	<Tasks>
		<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
			<DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
			<Parameters>
				<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
			</Parameters>
		</ExecuteSQL>
	</Tasks>
</Container>
```

