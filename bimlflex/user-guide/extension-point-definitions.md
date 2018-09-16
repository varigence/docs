

# Extension Point Overview
TODO: Add content here


## BimlFlex Extension Points
TODO: Add content here

		

		
## Global




### BimlFlex Global Settings
Internal Global Extension Point that control environment settings. This has been superseded by built-in BimlStudio features.

#### Outputs
| Name | Type | Description |
|------|------|-------------|
| CustomerUID | GUID | XXXX |
| Version | String | XXXX |
| Server | String | XXXX |
| Database | String | XXXX |
| UseWindowsAuthentication | Boolean | XXXX |
| Provider | String | XXXX |
| UserId | String | XXXX |
| Password | String | XXXX |
| IsUserConnectionMode | Boolean | XXXX |
| IsUserMode | Boolean | XXXX |
| IsQuickParse | Boolean | XXXX |

#### Sample Code
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

		
## Project




### Project Parameter
Add additional parameters to Project


#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstParameterNode -->
<!-- The below example configures parameters that will be used in combination with Connection Expressions-->
<Parameter Name="ServerName" DataType="String" IsRequired="true">localhost</Parameter>
<Parameter Name="UserName" DataType="String" IsRequired="true">varigence</Parameter>
<Parameter Name="UserPassword" DataType="String" IsRequired="true">P@ssw0rd!</Parameter>
```


### Project Script File
Add a ScriptTask or ScriptComponent to the Project

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| project | BimlFlexModelWrapper.ProjectsWrapper | Contains all information related to the project to which the script will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectScriptFile" #>
<#@ property name="project" type="BimlFlexModelWrapper.ProjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstRootNode/ScriptProjects -->
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

		
## Connection




### Connection Expression
Configure Expressions for a Connection

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionExpression" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstPropertyExpressionNode -->
<!-- The below example is configuring an expression to an ODBC connection. Note that we are referencing Project Parameters that also need to be configured.-->
<Expressions>
	<Expression ExternalProperty="ConnectionString">"Dsn=SRC_ODBC;Uid=" + @[$Project::UserName] + ";Pwd=" + @[$Project::UserPassword] + ";"</Expression>
</Expressions>
```

		
## Batch




### Parameter Bindings
Configure parameter bindings for Package Execute Package Task

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the parameter binding will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ParameterBindings" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstVariableParameterMappingNode -->
<!-- The below example is adding a ParameterBinding to a ExecutePackageTask. ParameterBindings is normally combined with a PackacageParameter ExtensionPoint -->
<ParameterBindings>
    <ParameterBinding Name="SnapshotDate" VariableName="User.SnapshotDate" />
</ParameterBindings>
```


### Batch Variable
Configure additional variables for the Batch or override default BimlFlex variables.

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the variables will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchVariable" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstVariableNode -->
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```


### Batch Package Configurations
Add PackageConfigurations if you have unselected Use Project Deployment

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the configurations will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | XXXX |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPackageConfigurations" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstPackageConfigurationNode -->
<!-- Use BatchPackageConfigurations to add a Configurations if you have unselectd Use Project Deployment in the BimlStudio project. When using Package Deployment instead of Project Deployment you might need to specify additional configurations. 
Configurations can also be added to the Batch using the PackageConfigurations combined with CustomOutput.ObjectInherit = true; -->
<# 	CustomOutput.ObjectInherit = true; #>
<PackageConfiguration Name="LOAD_MY_Configurations">
	<ExternalFileInput ExternalFilePath="C:\Varigence\Configurations\MY_BATCH_Configurations.dtsConfig" FileUsageType="ExistingFile" RelativePath="false" />
</PackageConfiguration>
```


### Batch Connection
Configure additional Connection references to the batch package

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the connection will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchConnection" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstConnectionReferenceNode -->
<!-- Note that the connection must be a valid connection defined using BimlFlex connection metadata. Connections can also be added manually in BimlStudio if required. -->
<Connection ConnectionName="MY_SOURCE" />
```


### Batch Pre Process
Configure logic that will be injected before the main Batch process

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the process will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPreProcess" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
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


### Batch Post Process
Configure logic that will be injected after the main Batch process

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| batch | BimlFlexModelWrapper.BatchesWrapper | Contains all information related to the batch to which the batch process will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPostProcess" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
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

		
## Object




### Package Variable
Configure additional package variables or override default BimlFlex variables

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the variable will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageVariable" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstVariableNode -->
<!-- Variables can also be added to all the packages for the Batch using the PackageVariable combined with CustomOutput.ObjectInherit = true; -->
<#* 	CustomOutput.ObjectInherit = true; *#>
<Variable Name="TenantCode" DataType="String">UNK</Variable>
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```


### Package Configurations
Add PackageConfigurations if you have unselected Use Project Deployment

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the configurations will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageConfigurations" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstPackageConfigurationNode -->
<!-- Use PackageConfigurations to add a Configurations if you have unselectd Use Project Deployment in the BimlStudio project.
When using Package Deployment instead of Project Deployment you might need to specify additional configurations. Configurations can also be added to the Batch using the PackageConfigurations combined with CustomOutput.ObjectInherit = true; -->
<# 	CustomOutput.ObjectInherit = true; #>
<#	var configurationPath = table.GetConfigurationValue("ConfigurationPath");
configurationPath = string.IsNullOrEmpty(configurationPath) ? @"C:\Varigence\Configurations" : configurationPath; #>
<PackageConfiguration Name="LOAD_MY_Configurations">
	<ExternalFileInput ExternalFilePath="<#=configurationPath#>\MY_BATCH_Configurations.dtsConfig" FileUsageType="ExistingFile" RelativePath="false" />
</PackageConfiguration>
```


### Package Parameter
Configure parameter bound values to the package

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the parameter will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstParameterNode -->
<!-- The below example is adding a PackageParameter to the package. PackacageParameter is normally combined with a ParameterBindings ExtensionPoint -->
<Parameter Name="BatchId" DataType="String"></Parameter>
<Parameter Name="BatchInstanceId" DataType="String">0</Parameter>
```


### Package Add Connection Reference
Configure additional Connection references to the object package

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the connection will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageAddConnection" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstConnectionReferenceNode -->
<!-- Note that the connection must be a valid connection defined within the BimlFlex metadata. Connections can be added manually if required. -->
<#* 	CustomOutput.ObjectInherit = true; *#>
<Connection ConnectionName="MY_SOURCE" />
```


### Create Sql
Configure override Create DDL for a object

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Sql will be added |

#### Sample Code
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


### Pre Create Sql
Configure Sql that will be executed prior to the Create DDL for a object

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Sql will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreCreateSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

ALTER TABLE [awlt].[Account] DROP CONSTRAINT [PK_awlt_Account] WITH ( ONLINE = OFF )
GO
```


### Post Create Sql
Configure Sql that will be executed after the Create DDL for a object

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Sql will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostCreateSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

ALTER TABLE [awlt].[Account] ADD  CONSTRAINT [PK_awlt_Account] PRIMARY KEY CLUSTERED 
(
	[AccountCodeAlternateKey] ASC,
	[FlexRowEffectiveFromDate] ASC
) ON [PRIMARY]
GO
```


### Source Create Sql
Configure override Create DDL for a source object like a view.

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Sql will be added |

#### Sample Code
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


### Override Sql
Override the source query SQL generated by BimlFlex

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Sql will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<#	CustomOutput.ObjectInherit = false; #>
<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstDirectResourceNode -->
<!-- We recommend only using OverrideSql for exceptions as it is completely disconnected from the metadata layer. As a first step we recommend using JoinSql, WhereSql, and SqlExpression for customization. -->
SELECT DISTINCT [PropertyId]
	,[EnterpriseId]
	,CONVERT(INT, ISNULL([MemberId], - 1)) AS [MemberId]
FROM [dbo].[MyTable]
```


### Root Add
Add element to the root of the BimlFlex project

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the root elements will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RootAdd" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Index -->
<!-- RootAdd is normally combined with the other extension points. An example will be adding a PreProcess that reads data and saves the output into a cache file to be used in a custom lookup in SourcePipeline.
The example below demonstrates adding the required connection and file format.-->
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


### Override Main
Completely override the main Dataflow (SEQC - Main)

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideMain" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website.  https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- We have added this option for flexibility but do not recommend using it as it will be disconnected from our generated documentation. -->
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


### Override Initialize
Override the initializing of staging tables

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideInitialize" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
<ExecuteSQL Name="SQL - Initialize MyTable" ConnectionName="MySource" ResultSet="None">
	<DirectInput>DELETE FROM [dbo].[MyTable] WHERE [TenantCode] <> 'UNK'</DirectInput>
</ExecuteSQL>
```


### Override Merge
Override the Merge statement of target tables

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |

#### Sample Code
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


### Dataflow Properties
Configure logic that will be inject 

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Dataflow element will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DataFlowProperties" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://varigence.com/Documentation/Language/Element/AstPropertyExpressionNode -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<# 	CustomOutput.ObjectInherit = false; #>
<Expression ExternalProperty="SsisBufferTempStoragePath">@[User::SsisBufferTempStoragePath]</Expression>
<Expression ExternalProperty="SsisBLOBTempStoragePath">@[User::SsisBLOBTempStoragePath]</Expression>
```


### Pre Dataflow
Configure logic that will be injected before the main Dataflow

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Dataflow element will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreDataFlow" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
<!-- NOTE: You must add CustomOutput.OutputPathName with the last task to connect it with the Dataflow -->
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


### Post Dataflow
Configure logic that will be injected after the main Dataflow

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Dataflow element will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostDataFlow" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
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


### Pre Process
Configure logic that will be injected before the main Object process

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreProcess" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
<# 	CustomOutput.ObjectInherit = false; #>
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


### Post Process
Configure logic that will be injected after the main Object process

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostProcess" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
	</Parameters>
</ExecuteSQL>
```


### Get Parameter
Configure override to retrieve parameter values

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="GetParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
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


### Set Parameter
Configure override to publish parameter values

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SetParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
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


### Source Override
Configure override for the Object source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
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


### Source Sql
Configure override for the Object Source Sql

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<# 	CustomOutput.ObjectInherit = false; #>
"EXECUTE [dbo].[MyProcedure] @MyParameter = '" + @[User::MyParameter] + "'"
```


### Source Parameter
Configure parameters for the Object source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the parameter will be added |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<#	CustomOutput.ObjectInherit = false; #>
<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstVariableParameterMappingNode -->
<Parameter Name="Parameter0" VariableName="User.LastModifiedDate" />
<Parameter Name="Parameter1" VariableName="User.CurrentModifiedDate" />
```


### Source Pipeline
Configure pipeline logic that will be injected after the source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourcePipeline" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<# 	CustomOutput.ObjectInherit = false; #> 
<DataConversion Name="DCV - Convert MyColumn">
	<Input OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Source Error Handling
Configure pipeline logic that will be injected on error of the source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceErrorHandling" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<# 	CustomOutput.ObjectInherit = false; #> 
<DataConversion Name="DCV - Convert MyColumn">
	<Input OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
</DataConversion>
```


### Source File Archive Override
Configure control flow logic that will override the SC_FILE_ARCHIVE script task call. You might also need to add a ProjectScriptFile.

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
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


### Source Property
Configure additional properties that will be added to source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceProperty" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstOdbcDestinationNode -->
<#	CustomOutput.ObjectInherit = false; #>
BindCharColumnAs="true" ExposeCharColumnsAsUnicode="false"
```


### Source File Loop Expression
Configure expressions that will be added to source ForEachFileLoop transformation

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceFileLoopExpression" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://varigence.com/Documentation/Language/Element/AstPropertyExpressionNode -->
<#	CustomOutput.ObjectInherit = false; #>
<Expression PropertyName="Directory">@[$Project::ImportPath]</Expression>
```


### Staging Target Pipeline
Configure pipeline logic that will be injected into the source to staging package before the Staging target destination node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StagingTargetPipeline" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<#	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<Input OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Persistent Staging Target Pipeline
Configure pipeline logic that will be injected into the source to staging package before the Persistent Staging target destination node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PersistentTargetPipeline" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<#	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<Input OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Staging Initial Target Pipeline
Configure pipeline logic that will be injected into the source to staging package before the Staging Initial target destination node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StagingInitialTargetPipeline" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<#	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<Input OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Persistent Staging Initial Target Pipeline
Configure pipeline logic that will be injected into the source to staging package before the Persistent Staging Initial target destination node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PersistentInitialTargetPipeline" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<#	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<Input OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Lookup Sql
Override the default generated Lookup Sql

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup Sql will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup Sql will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupSql" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstLookupNode -->
<#	CustomOutput.ObjectInherit = false; #>
SELECT 	 SRC.[MyTableCode]
		,SRC.[MyTableKey]
		,SRC.[FlexRowHashType1] AS [lkpFlexRowHashType1]
FROM 	[dim].[MyTable] SRC
WHERE	SRC.[TenantCode] <> 'UNK'
```


### Lookup Cache
Configure a cache file for the Lookup Sql

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup cache will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup cache will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupCache" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks -->
<#	CustomOutput.ObjectInherit = false; #>
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis ControlFlow. -->
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


### Lookup Parameter
Configure a parameter for the Lookup Sql used by Lookup Cache

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup parameter will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup parameter will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupParameter" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstVariableParameterMappingNode -->
<#	CustomOutput.ObjectInherit = false; #>
<Parameter Name="Parameter1" VariableName="User.CurrentModifiedDate" />
```


### Lookup Join
Configure a Join statement that will be added to the Lookup Sql

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup Join will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup Join will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupJoin" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstLookupNode -->
<#	CustomOutput.ObjectInherit = false; #>
INNER JOIN [dbo].[MyJoinTable] LKP
	ON	SRC.[MyTableCode] = LKP.[MyTableCode]
```


### Target Override
Configure override for the Object target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- NOTE: The type of target override must be consistent to the connection type. -->
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


### Target Pipeline
Configure pipeline logic that will be injected before the target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
| thread | String | Contains the thread number of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetPipeline" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>
<#@ property name="thread" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn<#=thread #>">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn" + thread + ".Output"; #>	
</DataConversion>
```


### Target Property
Configure additional properties that will be added to target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetProperty" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstOdbcDestinationNode -->
<#	CustomOutput.ObjectInherit = false; #>
KeepNulls="true" KeepIdentity="false"
```

		
## Data Vault




### Raw Data Vault Source Override
Configure override for the Data Vault Source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvSourceOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
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


### Raw Data Vault Source Pipeline Pre
Configure pipeline logic that will be injected after the Data Vault source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvSourcePipelinePre" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Raw Data Vault Source Pipeline Post
Configure pipeline logic that will be injected after the Data Vault source transformations

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvSourcePipelinePost" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Raw Data Vault Target Pipeline Pre
Configure pipeline logic that will be injected before the target transformations

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvTargetPipelinePre" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Raw Data Vault Target Pipeline Post
Configure pipeline logic that will be injected before the target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvTargetPipelinePost" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Raw Data Vault Target Override
Configure override for the Data Vault target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvTargetOverride" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
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


### Raw Data Vault PIT Custom Sql
Configure custom Sql for the Data Vault PIT

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Sql will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| RdvPitAddParameter | Boolean | XXXX |
| RdvPitLagSql | String | XXXX |
| RdvPitHubWhereSql | String | XXXX |
| RdvPitSatWhereSql | String | XXXX |
| RdvPitSourceAddSelect | String | XXXX |
| RdvPitDeleteWhereSql | String | XXXX |
| RdvPitTargetAddInsert | String | XXXX |
| RdvPitTargetAddSelect | String | XXXX |
| RdvPitColumnElements | String | XXXX |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvPitSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- Use RdvPitSql combined the below samples to add additional logic to the PIT load procedure. -->
<#*
<# 	CustomOutput.RdvPitAddParameter = @"	,@TenantCode			VARCHAR(10) = NULL"; #>
<# 	CustomOutput.RdvPitLagSql = @"SET @Lag = -7"; #>
<# 	CustomOutput.RdvPitHubWhereSql = @"WHERE [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitSatWhereSql = @"WHERE [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitSourceAddSelect = @",l1.[TenantCode] "; #>
<# 	CustomOutput.RdvPitDeleteWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvPitTargetAddInsert = @",[TenantCode] "; #>
<# 	CustomOutput.RdvPitTargetAddSelect = @",[TenantCode] "; #>
<# 	CustomOutput.RdvPitColumnElements = @"<Column Name=""TenantCode"" DataType=""AnsiString"" Length=""3"" IsNullable=""true"" />"; #>
*#>
```


### Raw Data Vault Bridge Custom Sql
Configure custom Sql for the Data Vault BRIDGE

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Sql will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| RdvPitAddParameter | Boolean | XXXX |
| RdvPitLagSql | String | XXXX |
| RdvPitHubWhereSql | String | XXXX |
| RdvPitSatWhereSql | String | XXXX |
| RdvPitSourceAddSelect | String | XXXX |
| RdvPitDeleteWhereSql | String | XXXX |
| RdvPitTargetAddInsert | String | XXXX |
| RdvPitTargetAddSelect | String | XXXX |
| RdvPitColumnElements | String | XXXX |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RdvBridgeSql" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- Use RdvBridgeSql combined the below samples to add additional logic to the PIT load procedure. -->
<#*
<# 	CustomOutput.RdvBridgeAddParameter = @"	,@TenantCode			VARCHAR(10) = NULL #>
<# 	CustomOutput.RdvBridgeLagSql = @"SET @Lag = -7 #>
<# 	CustomOutput.RdvBridgeHubWhereSql = @"WHERE [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvBridgeSatWhereSql = @"WHERE [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvBridgeSourceAddSelect = @",l1.[TenantCode] "; #>
<# 	CustomOutput.RdvBridgeDeleteWhereSql = @"AND [FlexRowRecordSource] = 'AW'"; #>
<# 	CustomOutput.RdvBridgeTargetAddInsert = @",[TenantCode] "; #>
<# 	CustomOutput.RdvBridgeTargetAddSelect = @",[TenantCode] "; #>
<# 	CustomOutput.RdvBridgeColumnElements = @"<Column Name=""TenantCode"" DataType=""AnsiString"" Length=""3"" IsNullable=""true"" />"; #>
*#>
```

		
## Data Mart




### Data Warehouse Source Override
Configure override for the Data Mart Source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhSourceOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
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


### Data Warehouse Source Pipeline Pre
Configure pipeline logic that will be injected after the Data Mart source transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhSourcePipelinePre" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Data Warehouse Source Pipeline Post
Configure pipeline logic that will be injected after the Data Mart source transformations

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhSourcePipelinePost" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Data Warehouse Target Pipeline Pre
Configure pipeline logic that will be injected before the target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhTargetPipelinePre" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Data Warehouse Target Pipeline Post
Configure pipeline logic that will be injected before the target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhTargetPipelinePost" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<# 	CustomOutput.ObjectInherit = false; #>
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Data Warehouse Target Override
Configure override for the Data Mart target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhTargetOverride" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
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


### Data Warehouse Insert Pipeline
Configure insert pipeline logic that will be injected before the target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhInsertPipeline" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Data Warehouse Type 1 Pipeline
Configure type1 update pipeline logic that will be injected before the target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhType1Pipeline" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```


### Data Warehouse Type 2 Pipeline
Configure type2 insert pipeline logic that will be injected before the target transformation node

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
| inputPath | String | Contains the output path of the preceding task |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |
| OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Dataflow task. |

#### Sample Code
```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhType2Pipeline" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations -->
<!-- For examples and additional resources please also refer to http://bimlscript.com/ -->
<!-- This can be any anything defined within the Ssis DataFlow. -->
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>	
</DataConversion>
```

		
## PolyBase




### External File Format
Configure File Format for PolyBase External Tables

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the file format will be added |
#### Outputs
| Name | Type | Description |
|------|------|-------------|
| ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the ExtensionPoint will be applied to all the Objects associated with the batch. |

#### Sample Code
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