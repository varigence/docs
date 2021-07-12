---
uid: bimlflex-extension-point-definitions
title: BimlFlex Extension Point Definitions
summary: Documentation for the definitions of internal global extension points that control environment settings within BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Extension Point Reference Documentation

This page lists the available Extensions Point for each category. 

> [!NOTE]
> The Extension Point concept is explained in detail in the [Extension Point Concept](xref:bimlflex-concepts-extension-points) documentation.
   
## Extension Points

The overview of available Extension Points is available below.    
  
### Global

#### BimlFlex Global Settings

Internal Global Extension Point that control environment settings. This has been superseded by built-in BimlStudio features.

##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| CustomerUID | GUID | The Customer UID to use for the metadata connection |
| Version | String | The Version Name to use for the metadata connection |
| Server | String | The Server Name to use for the metadata connection |
| Database | String | The Database Name of the metadata database |
| UseWindowsAuthentication | Boolean | Should the metadata connection use Windows Authentication |
| Provider | String | Connection Provider to use |
| UserId | String | SQL Authentication User Id |
| Password | String | SQL Authentication Password |
| IsUserConnectionMode | Boolean | Should User Connection Mode be used |
| IsUserMode | Boolean | Should User Mode be used |
| IsQuickParse | Boolean | Should Quick Parse be used |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="GlobalSettings" #>

<#
CustomOutput.CustomerUID = GetBundleSetting("BimlFlex.bimlb", null, "CustomerUID");
CustomOutput.Version = GetBundleSetting("BimlFlex.bimlb", null, "Version");
CustomOutput.Server = GetBundleSetting("BimlFlex.bimlb", null, "Server");
CustomOutput.Database= GetBundleSetting("BimlFlex.bimlb", null, "Database");
CustomOutput.UseWindowsAuthentication = GetBundleSetting("BimlFlex.bimlb", null, "UseWindowsAuthentication");
CustomOutput.Provider = GetBundleSetting("BimlFlex.bimlb", null, "Provider");
CustomOutput.UserId = GetBundleSetting("BimlFlex.bimlb", null, "UserId");
CustomOutput.Password = GetBundleSetting("BimlFlex.bimlb", null, "Password");
CustomOutput.IsUserConnectionMode = GetBundleSetting("BimlFlex.bimlb", null, "IsUserConnectionMode");
CustomOutput.IsUserMode = GetBundleSetting("BimlFlex.bimlb", null, "IsUserMode");
CustomOutput.IsQuickParse = GetBundleSetting("BimlFlex.bimlb", null, "IsQuickParse");
#>
```

### Project

#### Project Parameter

Add additional parameters at Project level.
   
##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstParameterNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example configures parameters that will be used in combination with Connection Expressions-->
<Parameter Name="ServerName" DataType="String" IsRequired="true">localhost</Parameter>
<Parameter Name="UserName" DataType="String" IsRequired="true">varigence</Parameter>
<Parameter Name="UserPassword" DataType="String" IsRequired="true">P@ssw0rd!</Parameter>
```

#### Project Script File

Add a ScriptTask or ScriptComponent to the Project

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| project | BimlFlexModelWrapper.ProjectsWrapper | Contains all information related to the project to which the script will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectScriptFile" #>
<#@ property name="project" type="BimlFlexModelWrapper.ProjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.AstRootNode_ScriptProjects -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<ScriptTaskProject ProjectCoreName="SC_SAMPLE_SCRIPT" Name="SC_SAMPLE_SCRIPT">
	<AssemblyReferences>
		<AssemblyReference AssemblyPath="Microsoft.SqlServer.ManagedDTS.dll" />
		<AssemblyReference AssemblyPath="Microsoft.SqlServer.ScriptTask.dll" />
		<AssemblyReference AssemblyPath="System.dll" />
		<AssemblyReference AssemblyPath="System.AddIn.dll" />
		<AssemblyReference AssemblyPath="System.Data.dll" />
		<AssemblyReference AssemblyPath="System.Windows.Forms.dll" />
		<AssemblyReference AssemblyPath="System.Xml.dll" />
	</AssemblyReferences>
	<Files>
		<File Path="ScriptMain.cs">using System;
using System.Data;
using Microsoft.SqlServer.Dts.Runtime;
using System.Windows.Forms;

[Microsoft.SqlServer.Dts.Tasks.ScriptTask.SSISScriptTaskEntryPointAttribute]
public partial class ScriptMain : Microsoft.SqlServer.Dts.Tasks.ScriptTask.VSTARTScriptObjectModelBase
{
	#region VSTA generated code
	enum ScriptResults
	{
		Success = Microsoft.SqlServer.Dts.Runtime.DTSExecResult.Success,
		Failure = Microsoft.SqlServer.Dts.Runtime.DTSExecResult.Failure
	};
	#endregion

	public void Main()
	{
		MessageBox.Show("Sample Script File");
		Dts.TaskResult = (int)ScriptResults.Success;
	}
}
		</File>
	</Files>
</ScriptTaskProject>
```

### Connection

#### Connection Override

Configure Override for a Connection.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionOverride" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.AstRootNode_Connections -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is configuring an ODATA connection. -->
<CustomSsisConnection
	Name="Northwind"
	CreationName="ODATA"
	ObjectData="&lt;ODataConnectionManager UserName=&quot;&quot; Url=&quot;https://services.odata.org/V3/Northwind/Northwind.svc&quot; ConnectionString=&quot;Service Document Url=https://services.odata.org/V3/Northwind/Northwind.svc;&quot; MicrosoftOnlineServicesAuth=&quot;False&quot; AuthType=&quot;WindowsAuthentication&quot; /&gt;" />
```

#### Connection Expression

Configure Expressions for a Connection

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionExpression" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPropertyExpressionNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is configuring an expression to an ODBC connection. Note that we are referencing Project Parameters that also need to be configured.-->
<Expressions>
	<Expression ExternalProperty="ConnectionString">"Dsn=SRC_ODBC;Uid=" + @[$Project::UserName] + ";Pwd=" + @[$Project::UserPassword] + ";"</Expression>
</Expressions>
```

### Batch

#### Parameter Bindings

Configure parameter bindings for Package Execute Package Task

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the parameter binding will be added |

##### Sample Code

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

#### Batch Variable

Configure additional variables for the Batch or override default BimlFlex variables.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the variables will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchVariable" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```

#### Batch Package Configurations

Add PackageConfigurations if you have unselected Use Project Deployment

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the configurations will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | XXXX |

##### Sample Code

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

#### Batch Connection

Configure additional Connection references to the batch package

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the connection will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchConnection" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Connection.AstConnectionReferenceNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Note that the connection must be a valid connection defined using BimlFlex connection metadata. Connections can also be added manually in BimlStudio if required. -->
<Connection ConnectionName="MY_SOURCE" />
```

#### Batch Pre Process

Configure logic that will be injected before the main Batch process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |

##### Sample Code

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

#### Batch Post Process

Configure logic that will be injected after the main Batch process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the batch process will be added |

##### Sample Code

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

### Object

#### Package Variable

Configure additional package variables or override default BimlFlex variables

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the variable will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageVariable" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Variables can also be added to all the packages for the Batch using the PackageVariable combined with CustomOutput.ObjectInherit = true; -->
<# 	CustomOutput.ObjectInherit = true; #>
<Variable Name="TenantCode" DataType="String">UNK</Variable>
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```

#### Package Configurations

Add PackageConfigurations if you have unselected Use Project Deployment

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the configurations will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageConfigurations" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPackageConfigurationNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Use PackageConfigurations to add a Configurations if you have unselected Use Project Deployment in the BimlStudio project.
When using Package Deployment instead of Project Deployment you might need to specify additional configurations. Configurations can also be added to the Batch using the PackageConfigurations combined with CustomOutput.ObjectInherit = true; -->
<# 	CustomOutput.ObjectInherit = true; #>
<#	var configurationPath = table.GetConfigurationValue("ConfigurationPath");
configurationPath = string.IsNullOrEmpty(configurationPath) ? @"C:\Varigence\Configurations" : configurationPath; #>
<PackageConfiguration Name="LOAD_MY_Configurations">
	<ExternalFileInput ExternalFilePath="<#=configurationPath#>\MY_BATCH_Configurations.dtsConfig" FileUsageType="ExistingFile" RelativePath="false" />
</PackageConfiguration>
```

#### Package Parameter

Configure parameter bound values to the package

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the parameter will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstParameterNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is adding a PackageParameter to the package. PackageParameter is normally combined with a ParameterBindings Extension Point -->
<# 	CustomOutput.ObjectInherit = true; #>
<Parameter Name="BatchId" DataType="String"></Parameter>
<Parameter Name="BatchInstanceId" DataType="String">0</Parameter>
```

#### Package Add Connection Reference

Configure additional Connection references to the object package

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the connection will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageAddConnection" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Connection.AstConnectionReferenceNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Note that the connection must be a valid connection defined within the BimlFlex metadata. Connections can be added manually if required. -->
<# 	CustomOutput.ObjectInherit = true; #>
<Connection ConnectionName="MY_SOURCE" />
```

#### Create Sql

Configure override Create DDL for a object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="CreateSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

IF NOT EXISTS (
		SELECT *
		FROM sys.schemas
		WHERE NAME = N'awlt'
		)
	EXEC ('CREATE SCHEMA [awlt] AUTHORIZATION [dbo]')
GO

IF NOT EXISTS (
		SELECT *
		FROM sys.objects
		WHERE object_id = OBJECT_ID(N'awlt')
			AND type IN (N'U')
		)
	CREATE TABLE [awlt].[Account] (
		-- Columns Definition
		[AccountCodeAlternateKey] INT NOT NULL
		,[ParentAccountCodeAlternateKey] INT
		,[AccountDescription] NVARCHAR(50)
		,[AccountType] NVARCHAR(50)
		,[Operator] NVARCHAR(50)
		,[CustomMembers] NVARCHAR(300)
		,[ValueType] NVARCHAR(50)
		,[CustomMemberOptions] NVARCHAR(200)
		,[FlexRowEffectiveFromDate] DATETIME2(7) NOT NULL
		,[FlexRowEffectiveToDate] DATETIME2(7) NOT NULL
		,[FlexRowAuditId] BIGINT NOT NULL
		,[FlexRowRecordSource] VARCHAR(10) NOT NULL
		,[FlexRowSourceId] INT NOT NULL
		,[FlexRowIsCurrent] BIT NOT NULL
		,[FlexRowHash] VARCHAR(80)
		,[FlexRowHashKey] VARCHAR(40)
		-- Constraints
		,CONSTRAINT [PK_awlt_Account] PRIMARY KEY CLUSTERED (
			[AccountCodeAlternateKey] ASC
			,[FlexRowEffectiveFromDate] ASC
			) WITH (
			PAD_INDEX = OFF
			,IGNORE_DUP_KEY = OFF
			)
		ON "default"
		) ON "default"
		WITH (DATA_COMPRESSION = NONE)
GO
```

#### Pre Create Sql

Configure SQL that will be executed prior to the Create DDL for a object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreCreateSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

ALTER TABLE [awlt].[Account] DROP CONSTRAINT [PK_awlt_Account] WITH ( ONLINE = OFF )
GO
```

#### Post Create Sql

Configure SQL that will be executed after the Create DDL for a object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostCreateSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

ALTER TABLE [awlt].[Account] ADD CONSTRAINT [PK_awlt_Account] PRIMARY KEY CLUSTERED 
(
	[AccountCodeAlternateKey] ASC,
	[FlexRowEffectiveFromDate] ASC
) ON [PRIMARY]
GO
```

#### Source Create Sql

Configure override Create DDL for a source object, like a view.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceCreateSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- The below example is adding View Create statement to the project. -->
IF EXISTS (SELECT * from sys.objects WHERE object_id = OBJECT_ID(N'[aw].[dimProduct]') AND type IN (N'V'))
	DROP VIEW [aw].[dimProduct]
GO
CREATE VIEW [aw].[dimProduct]
AS
WITH [CategoryCTE]([ParentProductCategoryID], [ProductCategoryID], [Name]) AS 
(
	SELECT	 [ParentProductCategoryID]
			,[ProductCategoryID]
			,[Name]
	FROM	[aw].[SalesLT_ProductCategory]
	WHERE	[ParentProductCategoryID] IS NULL
	UNION ALL
	SELECT	 C.[ParentProductCategoryID]
			,C.[ProductCategoryID]
			,C.[Name]
	FROM	[aw].[SalesLT_ProductCategory] AS C
	INNER JOIN [CategoryCTE] AS BC 
		ON	BC.[ProductCategoryID] = C.[ParentProductCategoryID]
)

SELECT	 p.[ProductID] 
		,p.[Name] AS [ProductName]
		,p.[ProductNumber]
		,p.[Color]
		,p.[StandardCost]
		,p.[ListPrice]
		,p.[Size]
		,p.[Weight]
		,ccte.[ProductCategoryID] 
		,ccte.[Name] as [ProductCategoryName]
		,pc.[ParentProductCategoryID]
		,pc.[Name] AS [ParentProductCategoryName]
		,p.[ProductModelID]
		,pm.[Name] AS [ProductModel] 
		,pd.[Description] AS [ProductModelDescription]
		,p.[SellStartDate]
		,p.[SellEndDate]
		,p.[DiscontinuedDate]
FROM [aw].[SalesLT_Product] p 
INNER JOIN [aw].[SalesLT_ProductModel] pm 
	ON p.[ProductModelID] = pm.[ProductModelID] 
INNER JOIN [aw].[SalesLT_ProductModelProductDescription] pmx 
	ON pm.[ProductModelID] = pmx.[ProductModelID] 
INNER JOIN [aw].[SalesLT_ProductDescription] pd 
	ON pmx.[ProductDescriptionID] = pd.[ProductDescriptionID]
INNER JOIN [CategoryCTE] ccte
	ON	ccte.[ProductCategoryID] = p.[ProductCategoryID]
INNER JOIN [aw].[SalesLT_ProductCategory] AS pc 
	ON	pc.[ProductCategoryID] = ccte.[ParentProductCategoryID]
WHERE pmx.[Culture] = 'en'
```

#### Override Sql

Override the source query SQL generated by BimlFlex

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<#	CustomOutput.ObjectInherit = false; #>
SELECT DISTINCT [PropertyId]
	,[EnterpriseId]
	,CONVERT(INT, ISNULL([MemberId], - 1)) AS [MemberId]
FROM [dbo].[MyTable]
```

#### Root Add

Add element to the root of the BimlFlex project

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the root elements will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RootAdd" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.AstRootNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- RootAdd is normally combined with the other extension points. An example will be adding a PreProcess that reads data and saves the output into a cache file to be used in a custom lookup in SourcePipeline.
The example below demonstrates adding the required connection and file format.-->
<# 	CustomOutput.ObjectInherit = true; #>
<#	var sourceConnection = table.GetSourceConnection();
	var sourceConnectionType = sourceConnection.ConnectionType;
	var sourceDatabase = table.GetSourceCatalog();
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceQualifiedName = table.GetSourceQualifiedName(sourceConnection);
	var sourceSchemaQualifiedName = table.GetSourceSchemaQualifiedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();
	var sourceDisplayName = table.GetSourceDisplayName(sourceConnection); #>
<Connections>
	<CacheConnection Name="<#=sourceSsisSafeScopedName#>" PersistFileConnectionName="<#=sourceSsisSafeScopedName#>_File" RawFileFormatName="<#=sourceSsisSafeScopedName#>" />
	<FileConnection Name="<#=sourceSsisSafeScopedName#>_File" FilePath="C:\Varigence\<#=sourceSsisSafeScopedName#>.caw" />
</Connections>
	<FileFormats>
	<RawFileFormat Name="<#=ssisSafeScopedName#>">
		<Columns>
			<Column Name="MyTable_BK" DataType="AnsiString" Length="60" CodePage="1252" IndexPosition="1" />
			<Column Name="MyTable_SK" DataType="AnsiString" Length="40" CodePage="1252" />
		</Columns>
	</RawFileFormat> 
</FileFormats>
```

#### Override Main

Completely override the main Data Flow (SEQC - Main)

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideMain" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This option is added for flexibility, but not recommended, as it will be disconnected from the BimlFlex patterns. -->
<Tasks>
	<Dataflow Name="DFT - Load MySource" DelayValidation="true">
		<Transformations>
			<OleDbSource Name="OLE_SRC - MySource" ConnectionName="MySourceConnection">
				<DirectInput>SELECT * FROM [dbo].[MySourceTable]</DirectInput>
			</OleDbSource>
			<OleDbDestination Name="OLE_DST - MyTarget" ConnectionName="MyTargetConnection">
				<InputPath OutputPathName="OLE_SRC - MySource.Output" />
				<ExternalTableOutput Table="[dbo].[MySourceTable]" />
			</OleDbDestination>
		</Transformations>
	</Dataflow>
</Tasks>
```

#### Override Initialize

Override the initializing of staging tables

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Data Flow element will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideInitialize" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<#	var initializeConnection = table.GetInitializeConnection();
	var initializeScopedName = table.GetInitializeScopedName(initializeConnection, "SRC");
	var initializeSchemaQualifiedName = table.GetInitializeSchemaQualifiedName(initializeConnection, "SRC");
	var initializeSsisSafeScopedName = initializeScopedName.MakeSsisSafe().MakeFileSafeName();
#>
<ExecuteSQL Name="SQL - Initialize <#=initializeSsisSafeScopedName#>" ConnectionName="<#=initializeConnection.Name#>" ResultSet="None">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<DirectInput>DELETE FROM <#=initializeSchemaQualifiedName#> --WHERE 1=2</DirectInput>
<# 	CustomOutput.OutputPathName = @"SQL - Initialize " + initializeSsisSafeScopedName + ".Output"; #>
</ExecuteSQL>
```

#### Override Merge

Override the Merge statement of target tables

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideMerge" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- A scenario might be that you have an insert only fact and you might want to override the Merge to only insert and ignore updates. -->
MERGE [dim].[MyTable] AS TGT
USING [dim].[stage_MyTable] AS SRC
	ON TGT.[MyTableCode] = SRC.[MyTableCode]
--WHEN MATCHED
--	THEN
--		UPDATE
--		SET [MyTableCode] = SRC.[MyTableCode]
--			,[MyTableName] = SRC.[MyTableName]
--			,[FlexRowAuditId] = SRC.[FlexRowAuditId]
--			,[FlexRowHashType1] = SRC.[FlexRowHashType1]
--			,[FlexRowIsInferred] = SRC.[FlexRowIsInferred]
WHEN NOT MATCHED BY TARGET
	THEN
		INSERT (
			[MyTableCode]
			,[MyTableName]
			,[FlexRowAuditId]
			,[FlexRowHashType1]
			,[FlexRowIsInferred]
			)
		VALUES (
			SRC.[MyTableCode]
			,SRC.[MyTableName]
			,SRC.[FlexRowAuditId]
			,SRC.[FlexRowHashType1]
			,SRC.[FlexRowIsInferred]
			);
```

#### Data Flow Override

Override the Data Flow

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DataFlowOverride" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<# 	CustomOutput.ObjectInherit = false; #>
<Dataflow Name="DFT - Load MySource" DelayValidation="true">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<Transformations>
		<OleDbSource Name="OLE_SRC - MySource" ConnectionName="MySourceConnection">
			<DirectInput>SELECT * FROM [dbo].[MySourceTable]</DirectInput>
		</OleDbSource>
		<OleDbDestination Name="OLE_DST - MyTarget" ConnectionName="MyTargetConnection">
			<InputPath OutputPathName="OLE_SRC - MySource.Output" />
			<ExternalTableOutput Table="[dbo].[MyTargetTable]" />
		</OleDbDestination>
	</Transformations>
</Dataflow>
<# 	CustomOutput.OutputPathName = @"DFT - Load MySource.Output"; #>
```

#### Data Flow Properties

Configure logic that will be inject 

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Data Flow element will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DataFlowProperties" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPropertyExpressionNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<# 	CustomOutput.ObjectInherit = false; #>
<Expression ExternalProperty="SsisBufferTempStoragePath">@[User::SsisBufferTempStoragePath]</Expression>
<Expression ExternalProperty="SsisBLOBTempStoragePath">@[User::SsisBLOBTempStoragePath]</Expression>
```

#### Pre Data Flow

Configure logic that will be injected before the main Data Flow

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Data Flow element will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreDataFlow" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<!-- NOTE: You must add CustomOutput.OutputPathName with the last task to connect it with the Data Flow -->
<# 	CustomOutput.ObjectInherit = false; #>
<ExecuteSQL Name="SQL - Get CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="SingleRow">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<Results>
		<Result Name="0" VariableName="User.CurrentModifiedDate" />
	</Results>
	<DirectInput>EXEC [ssis].[GetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.EJTable.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
		<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
	</Parameters>
<# 	CustomOutput.OutputPathName = @"SQL - Get CurrentModifiedDate.Output"; #>
</ExecuteSQL>
```

#### Post Data Flow

Configure logic that will be injected after the main Data Flow

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Data Flow element will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostDataFlow" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<ExecuteSQL Name="SQL - Set CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="None">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.EJTable.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
		<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
	</Parameters>
</ExecuteSQL>
```

#### Pre Tasks

Configure logic that will be injected before all the Tasks in the main Data Flow

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreTasks" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<!-- NOTE: You must add CustomOutput.OutputPathName with the last task to connect it with the Data Flow -->
<# 	CustomOutput.ObjectInherit = false; #>
<ExecuteSQL Name="SQL - Get CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="SingleRow">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<Results>
		<Result Name="0" VariableName="User.CurrentModifiedDate" />
	</Results>
	<DirectInput>EXEC [ssis].[GetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.EJTable.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
		<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
	</Parameters>
<# 	CustomOutput.OutputPathName = @"SQL - Get CurrentModifiedDate.Output"; #>
</ExecuteSQL>
```

#### Post Tasks

Configure logic that will be injected after all the Tasks in the main Data Flow

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostTasks" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<ExecuteSQL Name="SQL - Set CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="None">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.EJTable.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
		<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
	</Parameters>
</ExecuteSQL>
```

#### Pre Process

Configure logic that will be injected before the main Object process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreProcess" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
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
```

#### Target Pre Process

Configure logic that will be injected before the main Object process using Source and Target table as parameter

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetPreProcess" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
	</Parameters>
</ExecuteSQL>
```

#### Post Process

Configure logic that will be injected after the main Object process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostProcess" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
	</Parameters>
</ExecuteSQL>
```

#### Target Post Process

Configure logic that will be injected after the main Object process using Source and Target table as parameter

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetPostProcess" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
	</Parameters>
</ExecuteSQL>
```

#### Get Parameter

Configure override to retrieve parameter values

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="GetParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = true; #>
<#	var sourceConnection = table.GetSourceConnection();
	var sourceConnectionType = sourceConnection.ConnectionType;
	var sourceDatabase = table.GetSourceCatalog();
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceQualifiedName = table.GetSourceQualifiedName(sourceConnection);
	var sourceSchemaQualifiedName = table.GetSourceSchemaQualifiedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();
	var sourceDisplayName = table.GetSourceDisplayName(sourceConnection);
#>
<#	if (table.GetParameters().Any()) { #>
	<ExecuteSQL Name="SQL - Get LastModified" ConnectionName="BimlCatalog" ResultSet="SingleRow">
		<Results>
			<Result Name="0" VariableName="User.CurrentModifiedDate" />
		</Results>
		<DirectInput>EXEC [ssis].[GetConfigVariable] '<#=sourceConnection.Name#>', '<#=table.Name#>.LastModifiedDate', 'LastModifiedDate', @VariableValue, @ExecutionID</DirectInput>
		<Parameters>
			<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
			<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
		</Parameters>
	</ExecuteSQL>
<#	} #>
```

#### Set Parameter

Configure override to publish parameter values

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SetParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<# 	CustomOutput.ObjectInherit = true; #>
<#	var sourceConnection = table.GetSourceConnection();
	var sourceConnectionType = sourceConnection.ConnectionType;
	var sourceDatabase = table.GetSourceCatalog();
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceQualifiedName = table.GetSourceQualifiedName(sourceConnection);
	var sourceSchemaQualifiedName = table.GetSourceSchemaQualifiedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();
	var sourceDisplayName = table.GetSourceDisplayName(sourceConnection);
#>
<#	if (table.GetParameters().Any()) { #>
	<ExecuteSQL Name="SQL - Set LastModified" ConnectionName="BimlCatalog" ResultSet="None">
		<DirectInput>EXEC [ssis].[SetConfigVariable] '<#=sourceConnection.Name#>', '<#=table.Name#>.LastModifiedDate', 'LastModifiedDate', @VariableValue, @ExecutionID</DirectInput>
		<Parameters>
			<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
			<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
		</Parameters>
	</ExecuteSQL>
<#	} #>
```

#### Source Override

Configure override for the Object source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceOverride" #>
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

#### Source Sql

Configure override for the Object Source SQL

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
"EXECUTE [dbo].[MyProcedure] @MyParameter = '" + @[User::MyParameter] + "'"
```

#### Source Parameter

Configure parameters for the Object source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the parameter will be added |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableParameterMappingNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<#	CustomOutput.ObjectInherit = false; #>
<Parameter Name="Parameter0" VariableName="User.LastModifiedDate" />
<Parameter Name="Parameter1" VariableName="User.CurrentModifiedDate" />
```

#### Source Pipeline

Configure pipeline logic that will be injected after the source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourcePipeline" #>
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

#### Source Error Handling

Configure pipeline logic that will be injected on error of the source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceErrorHandling" #>
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
</DataConversion>
```

#### Source Error Handling Configuration

Configure Error Handling configuration logic that will be injected in the source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceErrorHandlingConfiguration" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any valid ErrorHandling for the source component. -->
<# 	CustomOutput.ObjectInherit = false; #> 
<ErrorHandling ErrorRowDisposition="RedirectRow" TruncationRowDisposition="IgnoreFailure" />
```

#### Source File Archive Override

Configure control flow logic that will override the SC_FILE_ARCHIVE script task call. You might also need to add a ProjectScriptFile.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceFileArchiveOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<FileSystem Name="FST - YOUR FILE ARCHIVE" Operation="MoveFile" OverwriteDestination="true">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<VariableOutput VariableName="User.ArchivePath" />
	<VariableInput VariableName="User.SourceFullFilePath" />
	<# 	CustomOutput.OutputPathName = @"FST - YOUR FILE ARCHIVE.Output"; #>	
</FileSystem>
```

#### Source Property

Configure additional properties that will be added to source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceProperty" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Transformation.Destination.AstOdbcDestinationNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<#	CustomOutput.ObjectInherit = false; #>
BindCharColumnAs="true" ExposeCharColumnsAsUnicode="false"
```

#### Source File Loop Expression

Configure expressions that will be added to source ForEachFileLoop transformation

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceFileLoopExpression" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPropertyExpressionNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<#	CustomOutput.ObjectInherit = false; #>
<Expression PropertyName="Directory">@[$Project::ImportPath]</Expression>
```

#### Staging Target Pipeline

Configure pipeline logic that will be injected into the source to staging package before the Staging target destination node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StagingTargetPipeline" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<#	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```

#### Persistent Staging Target Pipeline

Configure pipeline logic that will be injected into the source to staging package before the Persistent Staging target destination node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PersistentTargetPipeline" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<#	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```

#### Staging Initial Target Pipeline

Configure pipeline logic that will be injected into the source to staging package before the Staging Initial target destination node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StagingInitialTargetPipeline" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<#	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```

#### Persistent Staging Initial Target Pipeline

Configure pipeline logic that will be injected into the source to staging package before the Persistent Staging Initial target destination node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PersistentInitialTargetPipeline" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<#	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```

#### Lookup Sql

Override the default generated Lookup SQL

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup SQL will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup SQL will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Transformation.AstLookupNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<#	CustomOutput.ObjectInherit = false; #>
SELECT	 SRC.[MyTableCode]
		,SRC.[MyTableKey]
		,SRC.[FlexRowHashType1] AS [lkpFlexRowHashType1]
FROM	[dim].[MyTable] SRC
WHERE	SRC.[TenantCode] <> 'UNK'
```

#### Lookup Cache

Configure a cache file for the Lookup SQL

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup cache will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup cache will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupCache" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<#	CustomOutput.ObjectInherit = false; #>
<#	var sourceConnection = table.GetSourceConnection();
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();
#>
<Dataflow Name="DFT - CACHE <#=sourceSsisSafeScopedName#>">
	<Transformations>
		<OleDbSource Name="OLE_SRC - Select <#=sourceSsisSafeScopedName#>" ConnectionName="<#=sourceConnection#>">
			<DirectInput>SELECT 	 SRC.[MyTableCode]
		,SRC.[MyTableKey]
		,SRC.[FlexRowHashType1] AS [lkpFlexRowHashType1]
FROM 	[dim].[MyTable] SRC
WHERE	SRC.[TenantCode] <> 'UNK'</DirectInput>
		</OleDbSource>
		<Cache Name="CT - <#=sourceSsisSafeScopedName#>" ConnectionName="MyTableCache">
			<InputPath OutputPathName="OLE_SRC - Select <#=sourceSsisSafeScopedName#>.Output" />
		</Cache>
	</Transformations>
</Dataflow>
```

#### Lookup Parameter

Configure a parameter for the Lookup SQL used by Lookup Cache

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup parameter will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup parameter will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupParameter" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableParameterMappingNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<#	CustomOutput.ObjectInherit = false; #>
<Parameter Name="Parameter1" VariableName="User.CurrentModifiedDate" />
```

#### Lookup Join

Configure a Join statement that will be added to the Lookup SQL

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup Join will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup Join will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupJoin" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Transformation.AstLookupNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<#	CustomOutput.ObjectInherit = false; #>
INNER JOIN [dbo].[MyJoinTable] LKP
	ON	SRC.[MyTableCode] = LKP.[MyTableCode]
```

#### Target Override

Configure override for the Object target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- NOTE: The type of target override must be consistent with the connection type. -->
<#	var targetConnection = table.GetTargetConnection();
	var targetScopedName = table.GetTargetScopedName(targetConnection);
	var targetSsisSafeScopedName = targetScopedName.MakeSsisSafe();
#>
<# 	CustomOutput.ObjectInherit = false; #>
<OleDbDestination Name="OLE_DST - <#=targetSsisSafeScopedName#>" ConnectionName="<#=targetConnection#>" MaximumInsertCommitSize="500000" BatchSize="500000" CheckConstraints="false">
	<InputPath OutputPathName="<#=inputPath#>" />
	<ExternalTableOutput Table="[dbo].[MyTable]" />
</OleDbDestination>
```

#### Target Pipeline

Configure pipeline logic that will be injected before the target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
| thread | String | Contains the thread number of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetPipeline" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>
<#@ property name="thread" type="String" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn<#=thread #>">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn" + thread + ".Output"; #>	
</DataConversion>
```

#### Target Property

Configure additional properties that will be added to target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetProperty" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Transformation.Destination.AstOdbcDestinationNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<#	CustomOutput.ObjectInherit = false; #>
KeepNulls="true" KeepIdentity="false"
```

#### Reload From PSA Where Sql

Add a `WHERE` clause to the PSA reload package. Currently this cannot be parameterized.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Sql will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ReloadFromPsaWhereSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<#	CustomOutput.ObjectInherit = false; #>
WHERE [MyColumn] = 1
```

#### Delete Initialize Raw File Data Flow Override

Configure pipeline logic that will override the Delete Initialize Raw File Data Flow

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteInitializeRawFileDataflowOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<#
var tableObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage);
var stageConnection = tableObject.Project.StageConnection.RelatedItem;
var sourceSsisSafeScopedName = tableObject.SsisSafeScopedName;
var columns = tableObject.Columns;
var primaryKeyColumns = columns.GetIndexPrimaryKeyColumns("DEL");
var sourceColumns = columns.Where(c => primaryKeyColumns.Contains(c.ColumnName));
#>
<#	CustomOutput.ObjectInherit = false; #>
<Dataflow Name="DFT - Initialise Raw File ExtensionPoint">
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<Transformations>
		<OleDbSource Name="OLE_SRC - <#=sourceSsisSafeScopedName#>" ConnectionName="<#=tableObject.SourceConnection.Name#>" CommandTimeout="0" ValidateExternalMetadata="true" >
			<DirectInput>
				SELECT [MyColumn] FROM	<#=tableObject.SourceSchemaQualifiedName#> ORDER BY [MyColumn]
			</DirectInput>
			<Columns>
				<Column SourceColumn="MyColumn" TargetColumn="MyColumn" SortKeyPosition="1" />
			</Columns>
		</OleDbSource>
		<RawFileDestination Name="RTF_DST - Initialise Raw Output File">
			<InputPath OutputPathName="OLE_SRC - <#=sourceSsisSafeScopedName#>.Output" />
			<FileFromVariableOutput VariableName="User.SourceRawFilePath"/>
		</RawFileDestination>
	</Transformations>
</Dataflow>
```

#### Delete Detect Data Flow Override

Configure pipeline logic that will override the Delete Detect Data Flow

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteDetectDataflowOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<#
var tableObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage);
var stageConnection = tableObject.Project.StageConnection.RelatedItem;
var sourceSsisSafeScopedName = tableObject.SsisSafeScopedName;
var columns = tableObject.Columns;
var primaryKeyColumns = columns.GetIndexPrimaryKeyColumns("DEL");
var sourceColumns = columns.Where(c => primaryKeyColumns.Contains(c.ColumnName));
#>
<#	CustomOutput.ObjectInherit = false; #>
<Dataflow Name="DFT - Detect Deletes ExtensionPoint" >
<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
<#	} #>
	<Transformations>
		<!-- Insert Your Logic Here-->
	</Transformations>
<# 	CustomOutput.OutputPathName = @"DFT - Detect Deletes ExtensionPoint.Output"; #>
</Dataflow>
```

#### Delete Detect Raw File Override

Override the Raw File Format use by the Delete Detection process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteDetectRawFileOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<#
var tableObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage);
var stageConnection = tableObject.Project.StageConnection.RelatedItem;
var sourceSsisSafeScopedName = tableObject.SsisSafeScopedName;
var columns = tableObject.Columns;
var primaryKeyColumns = columns.GetIndexPrimaryKeyColumns("DEL");
var sourceColumns = columns.Where(c => primaryKeyColumns.Contains(c.ColumnName));
#>
<#	CustomOutput.ObjectInherit = false; #>
<RawFileFormat Name="rawDEL_<#=sourceSsisSafeScopedName#>" LogicalDisplayFolder="Raw">
	<Columns>
	<#	var i = 1;
		foreach(var sourceColumn in sourceColumns) { 
			var applyDataTypeMappingStg = table.GetConfigurationValue("ApplyDataTypeMappingStg") == "Y" ? true : false;
			var bimlDataType = applyDataTypeMappingStg
				? sourceColumn.GetMappedDataTypeBiml()
				: sourceColumn.GetDataTypeBiml();
			#> 
		<Column Name="<#=sourceColumn.ColumnName#>" <#=bimlDataType#> IndexPosition="<#=i #>" />
	<#	i ++; #>
	<#	} #>
	</Columns>
</RawFileFormat>
```

#### Delete Detect Apply Psa Override

Override the SQL that is used by the Delete Detection Persistent Staging process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteDetectionApplyPsa" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<#	CustomOutput.ObjectInherit = true; #>
<#
var psaIntegrationStage = "PSA";
var stagingTable = new TableObject(table, "STG", "STG");
var persistentTable = new TableObject(table, "PSA", "PSA");
var tableConfigurations = new TableConfigurations(table, "STG");
var psaTableConfigurations = new TableConfigurations(table, "PSA");
var enableEndDatePsa = tableConfigurations.EnableEndDatePsa;
var enableEndDateRdv = tableConfigurations.DvEndDateSatellite;
var isCurrent = tableConfigurations.RowIsCurrent.PersistentStagingAttribute;
var deleteObjectNamePattern = tableConfigurations.DeleteObjectNamePattern;

var stagingConnection = stagingTable.Connection;
var stagingScopedName = stagingTable.ScopedName;
var stagingSchemaQualifiedName = stagingTable.SchemaQualifiedName;
var stagingObjectName = stagingTable.ObjectName;
var stagingQualifiedName = stagingTable.QualifiedName;

var deleteScopedName = deleteObjectNamePattern.Replace("@@this", stagingScopedName);

var sd = persistentTable.StartDelimiter;
var ed = persistentTable.EndDelimiter;
var persistentScopedName = persistentTable.ScopedName;
var persistentSchemaQualifiedName = persistentTable.SchemaQualifiedName;
var persistentQualifiedName = persistentTable.QualifiedName;
var persistentFullyQualifiedName = persistentSchemaQualifiedName == persistentQualifiedName ? $"{sd}{persistentTable.Database}{ed}.{persistentQualifiedName}" : persistentQualifiedName;

var qualifiedEffectiveFromDate = tableConfigurations.QualifiedRowEffectiveFromDate;
var qualifiedEffectiveToDate = tableConfigurations.QualifiedRowEffectiveToDate;
var qualifiedRowChangeType = tableConfigurations.QualifiedRowChangeType;
var indexPrimaryKeyColumns = table.GetIndexPrimaryKeyColumns(psaIntegrationStage);
var joinClause = "ON\t" + indexPrimaryKeyColumns.Select(s => "PSA." + sd + s + ed + " = DEL." + sd + s + ed)
				.Aggregate((current, next) => current + "\nAND\t" + next);
var currentListJoinClause = "ON\t" + indexPrimaryKeyColumns.Select(s => "PSA." + sd + s + ed + " = CL." + sd + s + ed)
				.Aggregate((current, next) => current + "\nAND\t" + next);
var sqlPsaSelectPk = indexPrimaryKeyColumns.Select(s => "PSA." + sd + s + ed)
				.Aggregate((current, next) => current + "\n\t\t," + next);
var whereClause = "WHERE\t" + indexPrimaryKeyColumns.Select(s => "DEL." + sd + s + ed + " IS NOT NULL").First();

var psaPkList = "\t" + indexPrimaryKeyColumns.Select(s => sd + s + ed)
				.Aggregate((current, next) => current + ", " + next);

var groupByClause = "\t" + indexPrimaryKeyColumns.Select(s => "PSA." + sd + s + ed)
				.Aggregate((current, next) => current + "\n," + next);

var deleteTable = RootNode.Tables[deleteScopedName];
var deleteTableDatabaseQualifiedName = deleteTable.DatabaseQualifiedName;
var deleteTableSchemaQualifiedName = deleteTable.SchemaQualifiedName;

var mappedHubObject = table.MetadataModelDynamicObject.Columns
		.Where(e => e.Object.RelatedItem == table && e.TargetColumn.RelatedItem != null && new []{"HUB"}.Contains(e.TargetColumn.RelatedItem.Object.RelatedItem.ObjectType))
		.Select(s => s.TargetColumn.RelatedItem.Object.RelatedItem).SingleOrDefault();
var mappedLinkColumns = table.MetadataModelDynamicObject.Columns
		.Where(e => e.Object.RelatedItem == table && e.TargetColumn.RelatedItem != null && new []{"LNK"}.Contains(e.TargetColumn.RelatedItem.Object.RelatedItem.ObjectType));

var mappedSatelliteObjects = table.MetadataModelDynamicObject.Columns
		.Where(e => e.Object.RelatedItem == table && e.TargetColumn.RelatedItem != null && new []{"LSAT","SAT"}.Contains(e.TargetColumn.RelatedItem.Object.RelatedItem.ObjectType))
		.Select(s => s.TargetColumn.RelatedItem.Object.RelatedItem).Distinct();
		
var sqlPsaMultiActiveKeys = stagingTable.Columns.Where(cl => cl.IsPrimaryKey == "Y" && cl.ChangeType == "MAK");
var sqlPsaCompareMultiActiveKeys = "";
var sqlPsaSelectMultiActiveKeys = "";
var sqlPsaSatSelectMultiActiveKeys = "";
foreach (var multiActiveKey in sqlPsaMultiActiveKeys)
{
	var sqlCompareMultiActiveKeys = multiActiveKey.GetSqlToBk(stagingTable.StartDelimiter, stagingTable.EndDelimiter, "PSA", "RDV");
	sqlPsaSelectMultiActiveKeys += $"\n\t\t\t\t,{sqlCompareMultiActiveKeys}";
	sqlPsaSatSelectMultiActiveKeys += $"\n\t\t\t\t,{sqlCompareMultiActiveKeys} AS {sd}{multiActiveKey.GetColumnName()}{ed}";
	sqlPsaCompareMultiActiveKeys += $"\n\t\t\tAND\t{sqlCompareMultiActiveKeys} = {sqlCompareMultiActiveKeys.Replace("PSA.", "DEL.")}";
}
#>
<ExecuteSQL Name="SQL - Insert Deleted Into Persistent Staging" ConnectionName="<#=stagingConnection.Name #>" ResultSet="None">
	<#	if (!string.IsNullOrEmpty(precedenceOutputPathName)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceOutputPathName #>" />
		</Inputs>
	</PrecedenceConstraints>
	<#	} #>
	<DirectInput>DECLARE @<#=tableConfigurations.RowEffectiveFromDateValue#> DATETIME2(7)
SELECT @<#=tableConfigurations.RowEffectiveFromDateValue#> = ISNULL(MAX(<#=tableConfigurations.QualifiedRowEffectiveFromDate#>), GETDATE()) FROM <#=deleteTableSchemaQualifiedName#>

DECLARE @RowsInDelTable INT
SELECT @RowsInDelTable = CASE WHEN EXISTS (SELECT 1 FROM <#=deleteTableSchemaQualifiedName#>) THEN 1 ELSE 0 END
IF @RowsInDelTable = 1 
BEGIN
	BEGIN TRANSACTION [<#=stagingTable.Id.Replace("-", "")#>]
		BEGIN TRY
		;WITH currentList AS
		(
			SELECT * 
			FROM
			(
				SELECT 
					<#=psaPkList #>
					,<#=qualifiedRowChangeType #>
					,ROW_NUMBER() OVER (PARTITION BY <#=psaPkList #> ORDER BY <#=qualifiedEffectiveFromDate #> DESC) as rn
				FROM <#=persistentQualifiedName #>
			) cur
			WHERE rn = 1 AND <#=qualifiedRowChangeType #> &lt;&gt; 'D'
		)
		
		INSERT INTO <#=persistentQualifiedName #>
					(<#=persistentTable.InsertColumnsList#>)
		SELECT <#=persistentTable.InsertColumnsList.Replace($"PSA.{qualifiedRowChangeType}", $"CONVERT(VARCHAR(1), 'D') AS {qualifiedRowChangeType}").Replace($"PSA.{tableConfigurations.QualifiedRowEffectiveFromDate}", $"@{tableConfigurations.RowEffectiveFromDateValue} AS {tableConfigurations.QualifiedRowEffectiveFromDate}")#>
		FROM <#=persistentQualifiedName #> PSA
		INNER JOIN currentList CL <#=currentListJoinClause #>
		LEFT OUTER JOIN <#=deleteTableSchemaQualifiedName #> DEL
			<#=joinClause #>
		<#=whereClause #><# if (enableEndDatePsa == "Y"){ #>
		UPDATE ODS
		SET	 <#=tableConfigurations.QualifiedRowEffectiveToDate#> = @<#=tableConfigurations.RowEffectiveFromDateValue#><# if (isCurrent != "IGN"){ #>,<#=tableConfigurations.QualifiedRowIsCurrent#> = 0
		<#} #>
		FROM	<#=persistentQualifiedName #> ODS
		INNER JOIN
		(
			SELECT	 <#=groupByClause#>
					,MIN(PSA.<#=tableConfigurations.QualifiedRowEffectiveFromDate#>) AS <#=tableConfigurations.QualifiedRowEffectiveFromDate#>
					,@<#=tableConfigurations.RowEffectiveFromDateValue#> AS <#=tableConfigurations.QualifiedRowEffectiveToDate#>
			FROM	 <#=persistentQualifiedName #> PSA
			LEFT OUTER JOIN <#=deleteTableSchemaQualifiedName #> DEL
				<#=joinClause #>
			WHERE PSA.<#=tableConfigurations.QualifiedRowEffectiveToDate#> = '9999-12-31'
				<#=whereClause #>
			GROUP BY <#=groupByClause #>
		) SRC
		<#=joinClause.Replace("PSA.", "ODS.").Replace("DEL.", "SRC.") #>
			AND	ODS.<#=tableConfigurations.QualifiedRowEffectiveFromDate#> = SRC.<#=tableConfigurations.QualifiedRowEffectiveFromDate#>
			AND	ODS.<#=qualifiedRowChangeType #> &lt;&gt; 'D'
		
		<#} #>
		
		COMMIT TRANSACTION [<#=stagingTable.Id.Replace("-", "")#>]
	END TRY
	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT;
		SELECT @ErrorMessage = ERROR_MESSAGE(), @ErrorSeverity = ERROR_SEVERITY(), @ErrorState = ERROR_STATE();
		RAISERROR ( @ErrorMessage, @ErrorSeverity, @ErrorState	 );
		ROLLBACK TRANSACTION [<#=stagingTable.Id.Replace("-", "")#>]
	END CATCH 
		END
	</DirectInput>
</ExecuteSQL>
```

#### Delete Detect Apply Rdv Override

Override the SQL that is used by the Delete Detection Raw Data Vault process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteDetectionApplyRdv" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<# CustomOutput.ObjectInherit = true; #>
<#
var psaIntegrationStage = "PSA";
var stagingTable = new TableObject(table, "STG", "STG");
var persistentTable = new TableObject(table, "PSA", "PSA");
var tableConfigurations = new TableConfigurations(table, "STG");
var psaTableConfigurations = new TableConfigurations(table, "PSA");
var enableEndDatePsa = tableConfigurations.EnableEndDatePsa;
var enableEndDateRdv = tableConfigurations.DvEndDateSatellite;
var isCurrent = tableConfigurations.RowIsCurrent.PersistentStagingAttribute;
var deleteObjectNamePattern = tableConfigurations.DeleteObjectNamePattern;

var stagingConnection = stagingTable.Connection;
var stagingScopedName = stagingTable.ScopedName;
var stagingSchemaQualifiedName = stagingTable.SchemaQualifiedName;
var stagingObjectName = stagingTable.ObjectName;
var stagingQualifiedName = stagingTable.QualifiedName;

var deleteScopedName = deleteObjectNamePattern.Replace("@@this", stagingScopedName);

var sd = persistentTable.StartDelimiter;
var ed = persistentTable.EndDelimiter;
var persistentScopedName = persistentTable.ScopedName;
var persistentSchemaQualifiedName = persistentTable.SchemaQualifiedName;
var persistentQualifiedName = persistentTable.QualifiedName;
var persistentFullyQualifiedName = persistentSchemaQualifiedName == persistentQualifiedName ? $"{sd}{persistentTable.Database}{ed}.{persistentQualifiedName}" : persistentQualifiedName;

var qualifiedEffectiveFromDate = tableConfigurations.QualifiedRowEffectiveFromDate;
var qualifiedEffectiveToDate = tableConfigurations.QualifiedRowEffectiveToDate;
var qualifiedRowChangeType = tableConfigurations.QualifiedRowChangeType;
var indexPrimaryKeyColumns = table.GetIndexPrimaryKeyColumns(psaIntegrationStage);
var joinClause = "ON\t" + indexPrimaryKeyColumns.Select(s => "PSA." + sd + s + ed + " = DEL." + sd + s + ed)
				.Aggregate((current, next) => current + "\nAND\t" + next);
var currentListJoinClause = "ON\t" + indexPrimaryKeyColumns.Select(s => "PSA." + sd + s + ed + " = CL." + sd + s + ed)
				.Aggregate((current, next) => current + "\nAND\t" + next);
var	sqlPsaSelectPk = indexPrimaryKeyColumns.Select(s => "PSA." + sd + s + ed)
				.Aggregate((current, next) => current + "\n\t\t," + next);
var whereClause = "WHERE\t" + indexPrimaryKeyColumns.Select(s => "DEL." + sd + s + ed + " IS NOT NULL").First();

var psaPkList = "\t" + indexPrimaryKeyColumns.Select(s => sd + s + ed)
				.Aggregate((current, next) => current + ", " + next);

var groupByClause = "\t" + indexPrimaryKeyColumns.Select(s => "PSA." + sd + s + ed)
				.Aggregate((current, next) => current + "\n," + next);

var deleteTable = RootNode.Tables[deleteScopedName];
var deleteTableDatabaseQualifiedName = deleteTable.DatabaseQualifiedName;
var deleteTableSchemaQualifiedName = deleteTable.SchemaQualifiedName;

var mappedHubObject = table.MetadataModelDynamicObject.Columns
		.Where(e => e.Object.RelatedItem == table && e.TargetColumn.RelatedItem != null && new []{"HUB"}.Contains(e.TargetColumn.RelatedItem.Object.RelatedItem.ObjectType))
		.Select(s => s.TargetColumn.RelatedItem.Object.RelatedItem).SingleOrDefault();
var mappedLinkColumns = table.MetadataModelDynamicObject.Columns
		.Where(e => e.Object.RelatedItem == table && e.TargetColumn.RelatedItem != null && new []{"LNK"}.Contains(e.TargetColumn.RelatedItem.Object.RelatedItem.ObjectType));

var mappedSatelliteObjects = table.MetadataModelDynamicObject.Columns
		.Where(e => e.Object.RelatedItem == table && e.TargetColumn.RelatedItem != null && new []{"LSAT","SAT"}.Contains(e.TargetColumn.RelatedItem.Object.RelatedItem.ObjectType))
		.Select(s => s.TargetColumn.RelatedItem.Object.RelatedItem).Distinct();
		
var sqlPsaMultiActiveKeys = stagingTable.Columns.Where(cl => cl.IsPrimaryKey == "Y" && cl.ChangeType == "MAK");
var sqlPsaCompareMultiActiveKeys = "";
var sqlPsaSelectMultiActiveKeys = "";
var sqlPsaSatSelectMultiActiveKeys = "";
foreach (var multiActiveKey in sqlPsaMultiActiveKeys)
{
	var sqlCompareMultiActiveKeys = multiActiveKey.GetSqlToBk(stagingTable.StartDelimiter, stagingTable.EndDelimiter, "PSA", "RDV");
	sqlPsaSelectMultiActiveKeys += $"\n\t\t\t\t,{sqlCompareMultiActiveKeys}";
	sqlPsaSatSelectMultiActiveKeys += $"\n\t\t\t\t,{sqlCompareMultiActiveKeys} AS {sd}{multiActiveKey.GetColumnName()}{ed}";
	sqlPsaCompareMultiActiveKeys += $"\n\t\t\tAND\t{sqlCompareMultiActiveKeys} = {sqlCompareMultiActiveKeys.Replace("PSA.", "DEL.")}";
}
#>
<#	 foreach(var satellite in mappedSatelliteObjects) { 
	var satellitePk = satellite.GetPrimaryKey();
	var satelliteObjectType = satellite.ObjectType;
	var hubPk = satellitePk.ReferenceColumn.RelatedItem;
	var hubObject = hubPk.Object.RelatedItem;
	var rdvConnection = satellite.Connection.RelatedItem;
	var satelliteTable = new TableObject(satellite, "RDV", "SAT");
	var hubTable = new TableObject(hubPk.Object.RelatedItem, "RDV", "HUB");
	var satelliteConfigurations = new TableConfigurations(satellite, "SAT");
		
	var satelliteConfigurationsQualifiedRowIsCurrent = satelliteConfigurations.RowIsCurrent.SatelliteAttribute == "IGN" ? "" : satelliteConfigurations.QualifiedRowIsCurrent;
	
	var sqlSatMultiActive = satellite.GetSqlSatMultiActive(satelliteTable.StartDelimiter, satelliteTable.EndDelimiter);
	var sqlMultiActiveKeys = sqlSatMultiActive.Item1;
	var sqlCompareMultiActiveKeys = sqlSatMultiActive.Item2;
	var qualifiedSurrogateKey = satelliteTable.StartDelimiter + satellitePk.GetColumnName() + satelliteTable.EndDelimiter;
	
	var qualifiedHubSurrogateKey = hubTable.StartDelimiter + hubPk.GetColumnName() + hubTable.EndDelimiter;
	var linkHubJoinSk = "";
	var linkHubJoinBk = "";
	var linkPsaBk = "";
	var psaKeyJoin = "";
	var lsatJoinTest = "";
	var hubAlias = "";
		
	if (satelliteObjectType == "LSAT" && mappedHubObject == null){ 
		var linkHubColumns = mappedLinkColumns.Where(s => s.TargetColumn.RelatedItem != null && s.TargetColumn.RelatedItem.Object.RelatedItem == hubObject && s.TargetColumn.RelatedItem.IsPrimaryKey != "Y");
		var iHub = 1;
		foreach(var linkHubColumn in linkHubColumns){
			var targetLinkColumn = linkHubColumn.TargetColumn.RelatedItem;
			var targetLinkHubColumn = targetLinkColumn.ReferenceColumn.RelatedItem;
			if (targetLinkHubColumn == null) continue;
			var linkHubTable = new TableObject(targetLinkHubColumn.Object.RelatedItem, "RDV", "HUB");
			//.Where(c => c.ReferenceColumn.RelatedItem != null && new []{"HUB"}.Contains(c.ReferenceColumn.RelatedItem.Object.RelatedItem.ObjectType) && c.Object.RelatedItem == hubObject);
				
			linkHubJoinSk += $"\n\t\tINNER JOIN {linkHubTable.QualifiedName} H{iHub}\n\t\t\tON\tHUB.{sd}{targetLinkColumn.GetColumnName()}{ed} = H{iHub}.{linkHubTable.PrimaryKeyQualifiedName}";
			linkHubJoinBk += $"\n\t\tAND\tH{iHub}.{linkHubTable.IntegrationKeyQualifiedName} = PSA.{sd}{linkHubColumn.GetColumnName()}{ed}";
			var linkPsaBkExpression = linkHubColumn.GetSqlToBk(sd, ed, "PSA", "PSA");
			linkPsaBk += $",{linkPsaBkExpression} AS {sd}{linkHubColumn.GetColumnName()}{ed}";
				
			lsatJoinTest += $"DEL.{sd}{linkHubColumn.GetColumnName()}{ed} = H{iHub}.{linkHubTable.IntegrationKeyQualifiedName} AND ";
			iHub ++;

		}
			lsatJoinTest = lsatJoinTest.Substring(0, lsatJoinTest.Length-4);


			linkPsaBk = linkPsaBk.Substring(1); 
			var lsatHubTable = new TableObject(mappedHubObject, "RDV", "HUB"); 
			//linkHubJoin = $"\n\t\tINNER JOIN {lsatHubTable.QualifiedName} LHUB\n\t\t\tON\tHUB.[{linkHubColumn.GetColumnName()}] = LHUB.[{lsatHubTable.GetPrimaryKey().GetColumnName()}]";
			//psaKeyJoin = $"\tON\tLHUB.[{lsatHubTable.BusinessKey.GetColumnName()}] = ";
		} else if (satelliteObjectType == "LSAT" && mappedHubObject != null) {
			var lsatHubTable = new TableObject(mappedHubObject, "RDV", "HUB");
			linkHubJoinSk = $"\n\t\tINNER JOIN {lsatHubTable.QualifiedName} LHUB\n\t\t\tON\tHUB.{lsatHubTable.PrimaryKeyQualifiedName} = LHUB.{lsatHubTable.PrimaryKeyQualifiedName}";
			linkHubJoinBk = $"\n\t\tAND\tLHUB.{lsatHubTable.IntegrationKeyQualifiedName} = PSA.{stagingTable.IntegrationKeyQualifiedName}";
		hubAlias = "LHUB";
		} else {
			linkHubJoinBk = $"\n\t\tAND HUB.{hubTable.IntegrationKeyQualifiedName} = PSA.{stagingTable.IntegrationKeyQualifiedName}";
			hubAlias = "HUB";
		}
#>
<ExecuteSQL Name="SQL - Insert Deleted Into <#=satellite.ObjectName.MakeSsisSafe()#>" ConnectionName="<#=rdvConnection.Name #>" ResultSet="None">
	<#	if (!string.IsNullOrEmpty(precedenceOutputPathName)) {#>
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceOutputPathName #>" />
		</Inputs>
	</PrecedenceConstraints>
	<#	} #>
	<DirectInput>DECLARE @<#=satelliteConfigurations.RowEffectiveFromDateValue#> DATETIME2(7)
SELECT @<#=satelliteConfigurations.RowEffectiveFromDateValue#> = ISNULL(MAX(<#=tableConfigurations.QualifiedRowEffectiveFromDate#>), GETDATE()) FROM <#=deleteTableDatabaseQualifiedName#>

DECLARE @RowsInDelTable INT
SELECT @RowsInDelTable = CASE WHEN EXISTS (SELECT 1 FROM <#=deleteTableDatabaseQualifiedName#>) THEN 1 ELSE 0 END
IF @RowsInDelTable = 1 
BEGIN
	BEGIN TRANSACTION [<#=stagingTable.Id.Replace("-", "")#>]
		BEGIN TRY
		;WITH currentList AS
		(
			SELECT * 
			FROM
			(
				SELECT 
					<#=satellitePk.GetColumnName() #>
					,<#=qualifiedRowChangeType #>
					,ROW_NUMBER() OVER (PARTITION BY <#=satellitePk.GetColumnName() #> ORDER BY <#=qualifiedEffectiveFromDate #> DESC) as rn
				FROM <#=satelliteTable.QualifiedName #>
			) cur
			WHERE rn = 1 AND <#=qualifiedRowChangeType #> &lt;&gt; 'D'
		)
			INSERT INTO <#=satelliteTable.QualifiedName #>
					(<#=satelliteTable.InsertColumnsList.Replace("SAT.", "")#>)
			SELECT	 <#=satelliteTable.InsertColumnsList.Replace($"SAT.{qualifiedRowChangeType}", $"CONVERT(VARCHAR(1), 'D') AS {qualifiedRowChangeType}").Replace($"SAT.{satelliteConfigurations.QualifiedRowEffectiveFromDate}", $"@{satelliteConfigurations.RowEffectiveFromDateValue} AS {satelliteConfigurations.QualifiedRowEffectiveFromDate}")#>
			FROM	 <#=hubTable.QualifiedName #> HUB
			INNER JOIN <#=satelliteTable.QualifiedName #> SAT
			ON		HUB.[<#=hubPk.GetColumnName()#>] = SAT.[<#=satellitePk.GetColumnName() #>]<#=linkHubJoinSk #>
			AND EXISTS (
				SELECT 1 FROM (
						SELECT	 <#if (!string.IsNullOrEmpty(linkPsaBk)) {#><#=linkPsaBk #><#} else {#><#=stagingTable.IntegrationKey.GetSqlToBk(sd, ed, "PSA", "RDV")#> AS <#=stagingTable.IntegrationKeyQualifiedName#>
		<#} #><#=sqlPsaSatSelectMultiActiveKeys #>
					FROM	<#=deleteTableDatabaseQualifiedName #> PSA ) AS DEL
				WHERE 
				<#if ( !string.IsNullOrEmpty(linkPsaBk)) {#><#=lsatJoinTest #><#} else {#> DEL.<#=stagingTable.IntegrationKeyQualifiedName#> = <#=hubAlias #>.<#=stagingTable.IntegrationKeyQualifiedName#>
		<#} #><#=sqlCompareMultiActiveKeys.Replace("TGT.", "SAT.").Replace("SRC.", "DEL.") #>
			) 
			INNER JOIN currentList CL ON CL.[<#=satellitePk.GetColumnName()#>] = SAT.[<#=satellitePk.GetColumnName() #>]
		
	COMMIT TRANSACTION [<#=stagingTable.Id.Replace("-", "")#>]
END TRY
	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT;
		SELECT @ErrorMessage = ERROR_MESSAGE(), @ErrorSeverity = ERROR_SEVERITY(), @ErrorState = ERROR_STATE();
		RAISERROR ( @ErrorMessage, @ErrorSeverity, @ErrorState	 );
		ROLLBACK TRANSACTION [<#=stagingTable.Id.Replace("-", "")#>]
	END CATCH 
END
	</DirectInput>
</ExecuteSQL>
<# } #>
```

#### Azure Pre Archive Stage

Configure pipeline logic that will be injected before the blobs are archived

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AzurePreArchiveStage" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<#	var sourceObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(table, sourceObject.TargetConnection.IntegrationStage, "TGT");
	var persistentConnection = sourceObject.IsPersistent ? sourceObject.PersistentConnection : sourceObject.ProjectStageConnection;
	persistentConnection = new[] {"AZB", "AZDLS"}.Contains(persistentConnection.ConnectionType) ? sourceObject.ProjectTargetConnection : persistentConnection;
#>
<#	CustomOutput.ObjectInherit = true; #>
<ExecuteSQL Name="SQL - AzurePreArchiveStage" ConnectionName="<#=persistentConnection.Name#>">
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
<# 	CustomOutput.OutputPathName = @"SQL - AzurePreArchiveStage.Output"; #>
</ExecuteSQL>
```

#### Azure Post Archive Stage

Configure pipeline logic that will be injected after the blobs are archived

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AzurePostArchiveStage" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<#	var sourceObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(table, sourceObject.TargetConnection.IntegrationStage, "TGT");
	var persistentConnection = sourceObject.IsPersistent ? sourceObject.PersistentConnection : sourceObject.ProjectStageConnection;
	persistentConnection = new[] {"AZB", "AZDLS"}.Contains(persistentConnection.ConnectionType) ? sourceObject.ProjectTargetConnection : persistentConnection;
#>
<#	CustomOutput.ObjectInherit = true; #>
<ExecuteSQL Name="SQL - AzurePreArchiveStage" ConnectionName="<#=persistentConnection.Name#>">
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
<# 	CustomOutput.OutputPathName = @"SQL - AzurePreArchiveStage.Output"; #>
</ExecuteSQL>
```

### Staging Sql

#### Staging Temporary Table Truncate Sql

Configure SQL to be override the TRUNCATE used in the Source Temporary Table Query.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableTruncateSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Staging Temporary Table Pre Source Sql

Configure SQL to be injected before the Source Temporary Table Query.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTablePreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Staging Temporary Table Source Join Sql

Configure SQL to be injected as a Join clause into the first Source Temporary Table Source Query.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableSourceJoinSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Staging Temporary Table Target Join Sql

Configure SQL to be injected as a Join clause into the first Source Temporary Table Target Query.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTableTargetJoinSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Staging Temporary Table Post Source Sql

Configure SQL to be injected after the Source Temporary Table Query.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgTempTablePostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Staging Pre Source Sql

Configure SQL to be injected before the Source Query

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Staging Post Source Sql

Configure SQL to be injected after the Source Query

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Staging Pre Stage Sql

Configure SQL to be injected before the Stage Query

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPreStageSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Staging Post Stage Sql

Configure SQL to be injected after the Stage Query

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StgPostStageSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

### Data Vault

#### Data Vault Source Override

Configure override for the Data Vault Source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Vault Source Pipeline Pre

Configure pipeline logic that will be injected after the Data Vault source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Vault Source Pipeline Post

Configure pipeline logic that will be injected after the Data Vault source transformations

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Vault Target Pipeline Pre

Configure pipeline logic that will be injected before the target transformations

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Vault Target Pipeline Post

Configure pipeline logic that will be injected before the target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Vault Target Override

Configure override for the Data Vault target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

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

#### Data Vault Pre Process Sql

Configure SQL to be injected at the start of the Data Vault stored procedure

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPreProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Post Process Sql

Configure SQL to be injected at the end of the Data Vault stored procedure

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPostProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Pre Source Sql

Configure SQL to be injected before the staging query in the Data Vault stored procedure

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPreSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Post Source Sql

Configure SQL to be injected after the staging query in the Data Vault stored procedure

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPostSourceSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Pre Target Sql

Configure SQL to be injected before the target source query in the Data Vault stored procedure

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPreTargetSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Post Target Sql

Configure SQL to be injected after the target insert query in the Data Vault stored procedure

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPostTargetSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Pit Custom Sql

Configure custom SQL for the Data Vault PIT

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| RdvPitAddParameter | String | XXXX |
| RdvPitLagSql | String | XXXX |
| RdvPitDateWhereSql | String | XXXX |
| RdvPitDateOverrideWhereSql | String | XXXX |
| RdvPitHubWhereSql | String | XXXX |
| RdvPitHubOverrideWhereSql | String | XXXX |
| RdvPitSatWhereSql | String | XXXX |
| RdvPitSatOverrideWhereSql | String | XXXX |
| RdvPitDeleteWhereSql | String | XXXX |
| RdvPitDeleteOverrideWhereSql | String | XXXX |
| RdvPitSourceAddSelect | String | XXXX |
| RdvPitTargetAddInsert | String | XXXX |
| RdvPitTargetAddSelect | String | XXXX |
| RdvPitColumnElements | String | XXXX |
| RdvPitOverrideSql | String | XXXX |

##### Sample Code

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

#### Data Vault Pit Pre Process Sql

Configure SQL to be injected before the Point In Time Query

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPitPreProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Pit Post Process Sql

Configure SQL to be injected after the Point In Time Query

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPitPostProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Bridge Custom Sql

Configure custom SQL for the Data Vault Bridge

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| RdvBridgeLagSql | String | XXXX |
| RdvBridgeDateWhereSql | String | XXXX |
| RdvBridgeDateOverrideWhereSql | String | XXXX |
| RdvBridgeWhereSql | String | XXXX |
| RdvBridgeOverrideWhereSql | String | XXXX |
| RdvBridgeHubWhereSql | String | XXXX |
| RdvBridgeHubOverrideWhereSql | String | XXXX |
| RdvBridgeColumnSelect | String | XXXX |
| RdvBridgeColumnInsert | String | XXXX |
| RdvBridgeColumnElements | String | XXXX |
| RdvBridgeOverrideSql | String | XXXX |

##### Sample Code

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

#### Data Vault Bridge Pre Process Sql

Configure SQL to be injected before the Bridge Query

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvBridgePreProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

#### Data Vault Bridge Post Process Sql

Configure SQL to be injected after the Bridge Query

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvBridgePostProcessSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
/* Add your SQL fragment here */
```

### Data Mart

#### Data Warehouse Source Override

Configure override for the Data Mart Source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Source Pipeline Pre

Configure pipeline logic that will be injected after the Data Mart source transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Source Pipeline Post

Configure pipeline logic that will be injected after the Data Mart source transformations

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Target Pipeline Pre

Configure pipeline logic that will be injected before the target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Target Pipeline Post

Configure pipeline logic that will be injected before the target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Target Override

Configure override for the Data Mart target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

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

#### Data Warehouse Insert Pipeline

Configure insert pipeline logic that will be injected before the target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Type 1 Pipeline

Configure type1 update pipeline logic that will be injected before the target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Type 2 Pipeline

Configure type2 insert pipeline logic that will be injected before the target transformation node

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Persistent Staging Pre Sql Call Process

Add Before the Persistent Staging Sql Call

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Persistent Staging Post Sql Call Process

Add After the Persistent Staging Sql Call

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Persistent Staging Sql Call Override

Override the Persistent Staging Sql Call

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Pre Sql Call Process

Add Before the Data Warehouse SQL Call

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Post Sql Call Process

Add After the Data Warehouse Sql Call

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

#### Data Warehouse Sql Call Override

Override the Data Warehouse SQL Call

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

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

### Azure

#### External File Format

Configure File Format for PolyBase External Tables

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the file format will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

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

#### Adf Pre Copy Script

Configure a Pre Copy Script Attribute in the Copy Activity.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfPreCopyScript" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>


```

#### Adf Post Copy

Configure a Post Copy Activity in the pipeline.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| dependency | String | Contains the dependency name for the previous activity |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

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

#### Adf Batch Pre Process

Configure logic that will be injected before the main Batch process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |
| dependency | String | Contains the dependency name for the previous activity |

##### Sample Code

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

#### Adf Batch Post Process

Configure logic that will be injected after the main Batch process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |
| dependency | String | Contains the dependency name for the previous activity |

##### Sample Code

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

#### Adf Batch Parameter

Configure ADF Batch Parameters

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |
| dependency | String | Contains the dependency name for the previous activity |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfBatchParameter" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>
<#@ property name="dependency" type="String" #>

<Parameter Name="MyAdfParameter" DataType="Bool">false</Parameter>
```

#### Adf Trigger

Configure a Trigger in Azure Data Factory.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the Trigger will be added |
##### Outputs

| Name | Type | Description |
| ---- | ---- | ----------- |
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AdfTrigger" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- Scheduled Trigger -->
	<Schedule Name="ScheduleTriggerName" Frequency="Hour" Interval="1" Start="2001-01-01" End="2020-12-31">
		<Pipelines>
			<Pipeline PipelineName="0_<#=batch.Name #>_Batch">
				<Parameters>
					<Parameter Name="IsInitialLoad">false</Parameter>
				</Parameters>
			</Pipeline>
		</Pipelines>
	</Schedule>
	
<!-- TumblingWindow Trigger -->
	<TumblingWindow Name="TumblingWindowTriggerName" Frequency="Hours" Interval="1" MaxConcurrency="1" RetryCount="3" RuntimeState="Stopped" Start="2001-01-01" End="2020-12-31">
		<Pipelines>
			<Pipeline PipelineName="0_<#=batch.Name #>_Batch">
				<Parameters>
					<Parameter Name="IsInitialLoad">false</Parameter>
				</Parameters>
			</Pipeline>
		</Pipelines>
	</TumblingWindow>
```

#### Override Adf Linked Service

Configure a Linked Service in Azure Data Factory. This overrides the entire definition for a Linked Service. Target the connection and add the relevant Biml for the Linked Service.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| connection | BimlFlexModelWrapper.AdfLinkedServicesWrapper | Contains the connection for the Linked Service |

##### Sample Code

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

#### Override Adf Dataset

Configure a Dataset in Azure Data Factory. This overrides the entire definition for a Dataset.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains the connection for the Linked Service |
| dataset | dynamic | Contains the connection for the Linked Service |

##### Sample Code

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

#### Override Adf Copy Source

Configure a Copy Source in Azure Data Factory. This overrides the entire definition for a Copy Source.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains the object entity for which the overridden Copy Activity Source will be created. |

##### Sample Code

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

#### Override Adf Copy Sink

Configure a Copy Sink in Azure Data Factory. This overrides the entire definition for a Copy Sink.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains the object entity for which the overridden Copy Activity Sink will be created. |

##### Sample Code

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

#### Override Adf Staging Settings

Configure a Staging Settings in Azure Data Factory. This overrides the entire definition for a Staging Settings.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains the object entity for which the overridden Copy Activity Staging Settings will be created. |

##### Sample Code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideAdfStagingSettings" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<StagingSettings LinkedServiceName="<#=connection.Name#>"  Path="staging" />
```
