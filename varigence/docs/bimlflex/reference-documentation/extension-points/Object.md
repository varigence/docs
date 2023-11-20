---
title: BimlFlex App Definition for Object
description: Documentation of functionality within BimlFlex for the Object Extension Point category
tags: [BimlFlex, Reference]
---

# Object Extension Points

The Object category has the following available Extension Points defined.
  
## Package Variable

Configure additional package variables or override default BimlFlex variables

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the variable will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageVariable" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Variables can also be added to all the packages for the Batch using the PackageVariable combined with CustomOutput.ObjectInherit = true; -->
`<# 	CustomOutput.ObjectInherit = true; #>`
<Variable Name="TenantCode" DataType="String">UNK</Variable>
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```

## Package Configurations

Add PackageConfigurations if you have unselected Use Project Deployment

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the configurations will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageConfigurations" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPackageConfigurationNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Use PackageConfigurations to add a Configurations if you have unselected Use Project Deployment in the BimlStudio project.
When using Package Deployment instead of Project Deployment you might need to specify additional configurations. Configurations can also be added to the Batch using the PackageConfigurations combined with CustomOutput.ObjectInherit = true; -->
`<# 	CustomOutput.ObjectInherit = true; #>`
<#	var configurationPath = table.GetConfigurationValue("ConfigurationPath");
configurationPath = string.IsNullOrEmpty(configurationPath) ? @"C:\Varigence\Configurations" : configurationPath; #>
<PackageConfiguration Name="LOAD_MY_Configurations">
	<ExternalFileInput ExternalFilePath="`<#=configurationPath#>`\MY_BATCH_Configurations.dtsConfig" FileUsageType="ExistingFile" RelativePath="false" />
</PackageConfiguration>
```

## Package Parameter

Configure parameter bound values to the package

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the parameter will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageParameter" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstParameterNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is adding a PackageParameter to the package. PackageParameter is normally combined with a ParameterBindings Extension Point -->
`<# 	CustomOutput.ObjectInherit = true; #>`
<Parameter Name="BatchId" DataType="String"></Parameter>
<Parameter Name="BatchInstanceId" DataType="String">0</Parameter>
```

## Package Add Connection Reference

Configure additional Connection references to the object package

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the connection will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageAddConnection" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Connection.AstConnectionReferenceNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- Note that the connection must be a valid connection defined within the BimlFlex metadata. Connections can be added manually if required. -->
`<# 	CustomOutput.ObjectInherit = true; #>`
<Connection ConnectionName="MY_SOURCE" />
```

## Create SQL

Configure override Create DDL for an Object.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the Object to which the SQL will be added. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="CreateSql" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

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

## Pre Create SQL

Configure SQL that will be executed prior to the Create DDL for a object

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreCreateSql" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

ALTER TABLE [awlt].[Account] DROP CONSTRAINT [PK_awlt_Account] WITH ( ONLINE = OFF )
GO

```

## Post Create SQL

Configure SQL that will be executed after the Create DDL for a object

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostCreateSql" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

ALTER TABLE [awlt].[Account] ADD CONSTRAINT [PK_awlt_Account] PRIMARY KEY CLUSTERED
(
	[AccountCodeAlternateKey] ASC,
	[FlexRowEffectiveFromDate] ASC
) ON [PRIMARY]
GO

```

## Source Create SQL

Configure override Create DDL for a source object, like a view.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceCreateSql" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

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

## Override SQL

Override the source query SQL generated by BimlFlex

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideSql" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`


`<#	CustomOutput.ObjectInherit = false; #>`
SELECT DISTINCT [PropertyId]
	,[EnterpriseId]
	,CONVERT(INT, ISNULL([MemberId], - 1)) AS [MemberId]
FROM [dbo].[MyTable]
```

## Root Add

Add element to the root of the BimlFlex project

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the root elements will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="RootAdd" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.AstRootNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- RootAdd is normally combined with the other extension points. An example will be adding a PreProcess that reads data and saves the output into a cache file to be used in a custom lookup in SourcePipeline.
The example below demonstrates adding the required connection and file format.-->
`<# 	CustomOutput.ObjectInherit = true; #>`
<#	var sourceConnection = table.GetSourceConnection();
	var sourceConnectionType = sourceConnection.ConnectionType;
	var sourceDatabase = table.GetSourceCatalog();
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceQualifiedName = table.GetSourceQualifiedName(sourceConnection);
	var sourceSchemaQualifiedName = table.GetSourceSchemaQualifiedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();
	var sourceDisplayName = table.GetSourceDisplayName(sourceConnection); #>
<Connections>
	<CacheConnection Name="<#=sourceSsisSafeScopedName#>" PersistFileConnectionName="<#=sourceSsisSafeScopedName#>`_File" RawFileFormatName="`<#=sourceSsisSafeScopedName#>" />
	<FileConnection Name="`<#=sourceSsisSafeScopedName#>`_File" FilePath="C:\Varigence\`<#=sourceSsisSafeScopedName#>`.caw" />
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

## Override Main

Completely override the main Data Flow (SEQC - Main)

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideMain" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

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

## Override Initialize

Override the initializing of staging tables

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Data Flow element will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideInitialize" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<#	var initializeConnection = table.GetInitializeConnection();
	var initializeScopedName = table.GetInitializeScopedName(initializeConnection, "SRC");
	var initializeSchemaQualifiedName = table.GetInitializeSchemaQualifiedName(initializeConnection, "SRC");
	var initializeSsisSafeScopedName = initializeScopedName.MakeSsisSafe().MakeFileSafeName();
#>
<ExecuteSQL Name="SQL - Initialize `<#=initializeSsisSafeScopedName#>`" ConnectionName="<#=initializeConnection.Name#>" ResultSet="None">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<DirectInput>DELETE FROM `<#=initializeSchemaQualifiedName#>` --WHERE 1=2</DirectInput>
`<# 	CustomOutput.OutputPathName = @"SQL - Initialize " + initializeSsisSafeScopedName + ".Output"; #>`
</ExecuteSQL>
```

## Override Merge

Override the Merge statement of target tables

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideMerge" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

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

## Data Flow Override

Override the Data Flow

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
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DataflowOverride" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`


`<# 	CustomOutput.ObjectInherit = false; #>`
<Dataflow Name="DFT - Load MySource" DelayValidation="true">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
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
`<# 	CustomOutput.OutputPathName = @"DFT - Load MySource.Output"; #>`
```

## Data Flow Properties

Configure logic that will be inject

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Data Flow element will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DataflowProperties" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPropertyExpressionNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<Expression ExternalProperty="SsisBufferTempStoragePath">@[User::SsisBufferTempStoragePath]</Expression>
<Expression ExternalProperty="SsisBLOBTempStoragePath">@[User::SsisBLOBTempStoragePath]</Expression>

```

## Pre Data Flow

Configure logic that will be injected before the main Data Flow

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Data Flow element will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreDataflow" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<!-- NOTE: You must add CustomOutput.OutputPathName with the last task to connect it with the Data Flow -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<ExecuteSQL Name="SQL - Get CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="SingleRow">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<Results>
		<Result Name="0" VariableName="User.CurrentModifiedDate" />
	</Results>
	<DirectInput>EXEC [ssis].[GetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.EJTable.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
		<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
	</Parameters>
`<# 	CustomOutput.OutputPathName = @"SQL - Get CurrentModifiedDate.Output"; #>`
</ExecuteSQL>
```

## Post Data Flow

Configure logic that will be injected after the main Data Flow

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the Data Flow element will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostDataflow" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<ExecuteSQL Name="SQL - Set CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="None">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.EJTable.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
		<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
	</Parameters>
</ExecuteSQL>
```

## Pre Tasks

Configure logic that will be injected before all the Tasks in the main Data Flow

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
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreTasks" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
<!-- NOTE: You must add CustomOutput.OutputPathName with the last task to connect it with the Data Flow -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<ExecuteSQL Name="SQL - Get CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="SingleRow">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<Results>
		<Result Name="0" VariableName="User.CurrentModifiedDate" />
	</Results>
	<DirectInput>EXEC [ssis].[GetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.EJTable.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
		<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
	</Parameters>
`<# 	CustomOutput.OutputPathName = @"SQL - Get CurrentModifiedDate.Output"; #>`
</ExecuteSQL>
```

## Post Tasks

Configure logic that will be injected after all the Tasks in the main Data Flow

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostTasks" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<ExecuteSQL Name="SQL - Set CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="None">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.EJTable.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
		<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
	</Parameters>
</ExecuteSQL>
```

## Pre Process

Configure logic that will be injected before the main Object process

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreProcess" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
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

## Target Pre Process

Configure logic that will be injected before the main Object process using Source and Target table as parameter

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
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetPreProcess" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
	</Parameters>
</ExecuteSQL>
```

## Post Process

Configure logic that will be injected after the main Object process

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostProcess" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
	</Parameters>
</ExecuteSQL>
```

## Target Post Process

Configure logic that will be injected after the main Object process using Source and Target table as parameter

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
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetPostProcess" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
	<DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
	<Parameters>
		<Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
	</Parameters>
</ExecuteSQL>
```

## Get Parameter

Configure override to retrieve parameter values

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="GetParameter" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`


`<# 	CustomOutput.ObjectInherit = true; #>`
<#	var sourceConnection = table.GetSourceConnection();
	var sourceConnectionType = sourceConnection.ConnectionType;
	var sourceDatabase = table.GetSourceCatalog();
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceQualifiedName = table.GetSourceQualifiedName(sourceConnection);
	var sourceSchemaQualifiedName = table.GetSourceSchemaQualifiedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();
	var sourceDisplayName = table.GetSourceDisplayName(sourceConnection);
#>
`<#	if (table.GetParameters().Any()) { #>`
	<ExecuteSQL Name="SQL - Get LastModified" ConnectionName="BimlCatalog" ResultSet="SingleRow">
		<Results>
			<Result Name="0" VariableName="User.CurrentModifiedDate" />
		</Results>
		<DirectInput>EXEC [ssis].[GetConfigVariable] '`<#=sourceConnection.Name#>`', '`<#=table.Name#>`.LastModifiedDate', 'LastModifiedDate', @VariableValue, @ExecutionID</DirectInput>
		<Parameters>
			<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
			<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
		</Parameters>
		`<# CustomOutput.OutputPathName = @"SQL - Get LastModified.Output"; #>`
	</ExecuteSQL>
`<#	} #>`
```

## Set Parameter

Configure override to publish parameter values

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the process will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SetParameter" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<# 	CustomOutput.ObjectInherit = true; #>`
<#	var sourceConnection = table.GetSourceConnection();
	var sourceConnectionType = sourceConnection.ConnectionType;
	var sourceDatabase = table.GetSourceCatalog();
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceQualifiedName = table.GetSourceQualifiedName(sourceConnection);
	var sourceSchemaQualifiedName = table.GetSourceSchemaQualifiedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();
	var sourceDisplayName = table.GetSourceDisplayName(sourceConnection);
#>
`<#	if (table.GetParameters().Any()) { #>`
	<ExecuteSQL Name="SQL - Set LastModified" ConnectionName="BimlCatalog" ResultSet="None">
		<DirectInput>EXEC [ssis].[SetConfigVariable] '`<#=sourceConnection.Name#>`', '`<#=table.Name#>`.LastModifiedDate', 'LastModifiedDate', @VariableValue, @ExecutionID</DirectInput>
		<Parameters>
			<Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
			<Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
		</Parameters>
		`<# CustomOutput.OutputPathName = @"SQL - Set LastModified.Output"; #>`
	</ExecuteSQL>
`<#	} #>`
```

## Source Override

Configure override for the Object source transformation node

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
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceOverride" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- NOTE: The type of source override must be consistent to the connection type. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<OleDbSource Name="OLE_SRC - MyTable" ConnectionName="MY_SRC" CommandTimeout="0" ValidateExternalMetadata="false">
	<DirectInput>SELECT [Code], [Name] FROM [dbo].[MyTable]</DirectInput>
	<Columns>
		<Column SourceColumn="Name" TargetColumn="MyTableName" />
		<Column SourceColumn="Code" TargetColumn="MyTableCode" />
	</Columns>
`<# 	CustomOutput.OutputPathName = @"OLE_SRC - MyTable.Output"; #>`
</OleDbSource>
```

## Source SQL

Configure override for the Object Source SQL

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceSql" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

`<# 	CustomOutput.ObjectInherit = false; #>`
"EXECUTE [dbo].[MyProcedure] @MyParameter = '" + @[User::MyParameter] + "'"
```

## Source Parameter

Configure parameters for the Object source transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the parameter will be added |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceParameter" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableParameterMappingNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
`<#	CustomOutput.ObjectInherit = false; #>`
<Parameter Name="Parameter0" VariableName="User.LastModifiedDate" />
<Parameter Name="Parameter1" VariableName="User.CurrentModifiedDate" />
```

## Source Pipeline

Configure pipeline logic that will be injected after the source transformation node

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
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourcePipeline" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
`<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>`
</DataConversion>
```

## Source Error Handling

Configure pipeline logic that will be injected on error of the source transformation node

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

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceErrorHandling" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
</DataConversion>
```

## Source Error Handling Configuration

Configure Error Handling configuration logic that will be injected in the source transformation node

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
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceErrorHandlingConfiguration" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any valid ErrorHandling for the source component. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<ErrorHandling ErrorRowDisposition="RedirectRow" TruncationRowDisposition="IgnoreFailure" />
```

## Source File Archive Override

Configure control flow logic that will override the SC_FILE_ARCHIVE script task call. You might also need to add a ProjectScriptFile.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceFileArchiveOverride" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

<FileSystem Name="FST - YOUR FILE ARCHIVE" Operation="MoveFile" OverwriteDestination="true">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<VariableOutput VariableName="User.ArchivePath" />
	<VariableInput VariableName="User.SourceFullFilePath" />
	`<# 	CustomOutput.OutputPathName = @"FST - YOUR FILE ARCHIVE.Output"; #>`
</FileSystem>
```

## Source Property

Configure additional properties that will be added to source transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceProperty" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Transformation.Destination.AstOdbcDestinationNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
`<#	CustomOutput.ObjectInherit = false; #>`
BindCharColumnAs="true" ExposeCharColumnsAsUnicode="false"
```

## Source File Loop Expression

Configure expressions that will be added to source ForEachFileLoop transformation

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceFileLoopExpression" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPropertyExpressionNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
`<#	CustomOutput.ObjectInherit = false; #>`
<Expression PropertyName="Directory">@[$Project::ImportPath]</Expression>
```

## Staging Target Pipeline

Configure pipeline logic that will be injected into the source to staging package before the Staging target destination node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StagingTargetPipeline" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
`<#	CustomOutput.ObjectInherit = false; #>`
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
`<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>`
</DataConversion>
```

## Persistent Staging Target Pipeline

Configure pipeline logic that will be injected into the source to staging package before the Persistent Staging target destination node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PersistentTargetPipeline" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
`<#	CustomOutput.ObjectInherit = false; #>`
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
`<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>`
</DataConversion>
```

## Staging Initial Target Pipeline

Configure pipeline logic that will be injected into the source to staging package before the Staging Initial target destination node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="StagingInitialTargetPipeline" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
`<#	CustomOutput.ObjectInherit = false; #>`
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
`<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>`
</DataConversion>
```

## Persistent Staging Initial Target Pipeline

Configure pipeline logic that will be injected into the source to staging package before the Persistent Staging Initial target destination node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PersistentInitialTargetPipeline" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
`<#	CustomOutput.ObjectInherit = false; #>`
<DataConversion Name="DCV - Convert MyColumn">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
`<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>`
</DataConversion>
```

## Lookup SQL

Override the default generated Lookup SQL

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup SQL will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup SQL will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupSql" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Transformation.AstLookupNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
`<#	CustomOutput.ObjectInherit = false; #>`
SELECT	 SRC.[MyTableCode]
		,SRC.[MyTableKey]
		,SRC.[FlexRowHashType1] AS [lkpFlexRowHashType1]
FROM	[dim].[MyTable] SRC
WHERE	SRC.[TenantCode] <> 'UNK'
```

## Lookup Cache

Configure a cache file for the Lookup SQL

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup cache will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup cache will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupCache" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstContainerTaskBaseNode_Tasks -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Control Flow. -->
`<#	CustomOutput.ObjectInherit = false; #>`
<#	var sourceConnection = table.GetSourceConnection();
	var sourceScopedName = table.GetSourceScopedName(sourceConnection);
	var sourceSsisSafeScopedName = sourceScopedName.MakeSsisSafe();
#>
<Dataflow Name="DFT - CACHE `<#=sourceSsisSafeScopedName#>`">
	<Transformations>
		<OleDbSource Name="OLE_SRC - Select `<#=sourceSsisSafeScopedName#>`" ConnectionName="<#=sourceConnection#>">
			<DirectInput>SELECT 	 SRC.[MyTableCode]
		,SRC.[MyTableKey]
		,SRC.[FlexRowHashType1] AS [lkpFlexRowHashType1]
FROM 	[dim].[MyTable] SRC
WHERE	SRC.[TenantCode] <> 'UNK'</DirectInput>
		</OleDbSource>
		<Cache Name="CT - `<#=sourceSsisSafeScopedName#>`" ConnectionName="MyTableCache">
			<InputPath OutputPathName="OLE_SRC - Select `<#=sourceSsisSafeScopedName#>`.Output" />
		</Cache>
	</Transformations>
</Dataflow>
```

## Lookup Parameter

Configure a parameter for the Lookup SQL used by Lookup Cache

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup parameter will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup parameter will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupParameter" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstVariableParameterMappingNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
`<#	CustomOutput.ObjectInherit = false; #>`
<Parameter Name="Parameter1" VariableName="User.CurrentModifiedDate" />
```

## Lookup Join

Configure a Join statement that will be added to the Lookup SQL

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the source object to which the lookup Join will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the target object to which the lookup Join will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="LookupJoin" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Transformation.AstLookupNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
`<#	CustomOutput.ObjectInherit = false; #>`
INNER JOIN [dbo].[MyJoinTable] LKP
	ON	SRC.[MyTableCode] = LKP.[MyTableCode]
```

## Target Override

Configure override for the Object target transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the override will be added |
inputPath | String | Contains the output path of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetOverride" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- NOTE: The type of target override must be consistent with the connection type. -->
<#	var targetConnection = table.GetTargetConnection();
	var targetScopedName = table.GetTargetScopedName(targetConnection);
	var targetSsisSafeScopedName = targetScopedName.MakeSsisSafe();
#>
`<# 	CustomOutput.ObjectInherit = false; #>`
<OleDbDestination Name="OLE_DST - `<#=targetSsisSafeScopedName#>`" ConnectionName="<#=targetConnection#>" MaximumInsertCommitSize="500000" BatchSize="500000" CheckConstraints="false">
	<InputPath OutputPathName="<#=inputPath#>" />
	<ExternalTableOutput Table="[dbo].[MyTable]" />
</OleDbDestination>
```

## Target Pipeline

Configure pipeline logic that will be injected before the target transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
sourceTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
targetTable | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
inputPath | String | Contains the output path of the preceding task |
thread | String | Contains the thread number of the preceding task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetPipeline" #>`
`<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="inputPath" type="String" #>`
`<#@ property name="thread" type="String" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstDataflowTaskNode_Transformations -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- This can be any anything defined within the SSIS Data Flow. -->
`<# 	CustomOutput.ObjectInherit = false; #>`
<DataConversion Name="DCV - Convert MyColumn`<#=thread #>`">
	<InputPath OutputPathName="<#=inputPath #>" />
	<Columns>
		<Column SourceColumn="MyColumn" TargetColumn="cnv_MyColumn" DataType="String" Length="100" />
	</Columns>
`<# 	CustomOutput.OutputPathName = @"DCV - Convert MyColumn" + thread + ".Output"; #>`
</DataConversion>
```

## Target Property

Configure additional properties that will be added to target transformation node

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the property will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="TargetProperty" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Transformation.Destination.AstOdbcDestinationNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
`<#	CustomOutput.ObjectInherit = false; #>`
KeepNulls="true" KeepIdentity="false"
```

## Reload From PSA Where SQL

Add a `WHERE` clause to the PSA reload package. Currently this cannot be parameterized.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the SQL will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ReloadFromPsaWhereSql" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

`<#	CustomOutput.ObjectInherit = false; #>`
WHERE [MyColumn] = 1

```

## Delete Initialize Raw File Data Flow Override

Configure pipeline logic that will override the Delete Initialize Raw File Data Flow

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteInitializeRawFileDataflowOverride" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

<#
var tableObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage);
var stageConnection = tableObject.Project.StageConnection.RelatedItem;
var sourceSsisSafeScopedName = tableObject.SsisSafeScopedName;
var columns = tableObject.Columns;
var primaryKeyColumns = columns.GetIndexPrimaryKeyColumns("DEL");
var sourceColumns = columns.Where(c => primaryKeyColumns.Contains(c.ColumnName));
#>
`<#	CustomOutput.ObjectInherit = false; #>`
<Dataflow Name="DFT - Initialise Raw File ExtensionPoint">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<Transformations>
		<OleDbSource Name="OLE_SRC - `<#=sourceSsisSafeScopedName#>`" ConnectionName="<#=tableObject.SourceConnection.Name#>" CommandTimeout="0" ValidateExternalMetadata="true" >
			<DirectInput>
				SELECT [MyColumn] FROM	`<#=tableObject.SourceSchemaQualifiedName#>` ORDER BY [MyColumn]
			</DirectInput>
			<Columns>
				<Column SourceColumn="MyColumn" TargetColumn="MyColumn" SortKeyPosition="1" />
			</Columns>
		</OleDbSource>
		<RawFileDestination Name="RTF_DST - Initialise Raw Output File">
			<InputPath OutputPathName="OLE_SRC - `<#=sourceSsisSafeScopedName#>`.Output" />
			<FileFromVariableOutput VariableName="User.SourceRawFilePath"/>
		</RawFileDestination>
	</Transformations>
</Dataflow>
```

## Delete Detect Data Flow Override

Configure pipeline logic that will override the Delete Detect Data Flow

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteDetectDataflowOverride" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

<#
var tableObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage);
var stageConnection = tableObject.Project.StageConnection.RelatedItem;
var sourceSsisSafeScopedName = tableObject.SsisSafeScopedName;
var columns = tableObject.Columns;
var primaryKeyColumns = columns.GetIndexPrimaryKeyColumns("DEL");
var sourceColumns = columns.Where(c => primaryKeyColumns.Contains(c.ColumnName));
#>
`<#	CustomOutput.ObjectInherit = false; #>`
<Dataflow Name="DFT - Detect Deletes ExtensionPoint" >
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<Transformations>
		<!-- Insert Your Logic Here-->
	</Transformations>
`<# 	CustomOutput.OutputPathName = @"DFT - Detect Deletes ExtensionPoint.Output"; #>`
</Dataflow>
```

## Delete Detect Raw File Override

Override the Raw File Format use by the Delete Detection process

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteDetectRawFileOverride" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`

<#
var tableObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage);
var stageConnection = tableObject.Project.StageConnection.RelatedItem;
var sourceSsisSafeScopedName = tableObject.SsisSafeScopedName;
var columns = tableObject.Columns;
var primaryKeyColumns = columns.GetIndexPrimaryKeyColumns("DEL");
var sourceColumns = columns.Where(c => primaryKeyColumns.Contains(c.ColumnName));
#>
`<#	CustomOutput.ObjectInherit = false; #>`
<RawFileFormat Name="rawDEL_`<#=sourceSsisSafeScopedName#>`" LogicalDisplayFolder="Raw">
	<Columns>
	<#	var i = 1;
		foreach(var sourceColumn in sourceColumns) {
			var applyDataTypeMappingStg = table.GetConfigurationValue("ApplyDataTypeMappingStg") == "Y" ? true : false;
			var bimlDataType = applyDataTypeMappingStg
				? sourceColumn.GetMappedDataTypeBiml()
				: sourceColumn.GetDataTypeBiml();
			#>
		<Column Name="<#=sourceColumn.ColumnName#>" `<#=bimlDataType#>` IndexPosition="<#=i #>" />
	`<#	i ++; #>`
	`<#	} #>`
	</Columns>
</RawFileFormat>
```

## Delete Detect Apply Psa Override

Override the SQL that is used by the Delete Detection Persistent Staging process

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteDetectionApplyPsa" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

`<#	CustomOutput.ObjectInherit = true; #>`
<#
var psaIntegrationStage = "PSA";
var stagingTable = new TableObject(table, "STG", "STG");
var persistentTable = new TableObject(table, "PSA", "PSA");
var tableConfigurations = new TableConfigurations(table, "STG");
var psaTableConfigurations = new TableConfigurations(table, "PSA");
var enableEndDatePsa = tableConfigurations.EnableEndDatePsa;
var enableEndDateDv = tableConfigurations.DvEndDateSatellite;
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
	var sqlCompareMultiActiveKeys = multiActiveKey.GetSqlToBk(stagingTable.StartDelimiter, stagingTable.EndDelimiter, "PSA", "DV");
	sqlPsaSelectMultiActiveKeys += $"\n\t\t\t\t,{sqlCompareMultiActiveKeys}";
	sqlPsaSatSelectMultiActiveKeys += $"\n\t\t\t\t,{sqlCompareMultiActiveKeys} AS {sd}{multiActiveKey.GetColumnName()}{ed}";
	sqlPsaCompareMultiActiveKeys += $"\n\t\t\tAND\t{sqlCompareMultiActiveKeys} = {sqlCompareMultiActiveKeys.Replace("PSA.", "DEL.")}";
}
#>
<ExecuteSQL Name="SQL - Insert Deleted Into Persistent Staging" ConnectionName="<#=stagingConnection.Name #>" ResultSet="None">
	`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
	`<#	} #>`
	<DirectInput>DECLARE @`<#=tableConfigurations.RowEffectiveFromDateValue#>` DATETIME2(7)
SELECT @`<#=tableConfigurations.RowEffectiveFromDateValue#>` = ISNULL(MAX(`<#=tableConfigurations.QualifiedRowEffectiveFromDate#>`), GETDATE()) FROM `<#=deleteTableSchemaQualifiedName#>`

DECLARE @RowsInDelTable INT
SELECT @RowsInDelTable = CASE WHEN EXISTS (SELECT 1 FROM `<#=deleteTableSchemaQualifiedName#>`) THEN 1 ELSE 0 END
IF @RowsInDelTable = 1
BEGIN
	BEGIN TRANSACTION [`<#=stagingTable.Id.Replace("-", "")#>`]
		BEGIN TRY
		;WITH currentList AS
		(
			SELECT *
			FROM
			(
				SELECT
					`<#=psaPkList #>`
					,`<#=qualifiedRowChangeType #>`
					,ROW_NUMBER() OVER (PARTITION BY `<#=psaPkList #>` ORDER BY `<#=qualifiedEffectiveFromDate #>` DESC) as rn
				FROM `<#=persistentQualifiedName #>`
			) cur
			WHERE rn = 1 AND `<#=qualifiedRowChangeType #>` &lt;&gt; 'D'
		)

		INSERT INTO `<#=persistentQualifiedName #>`
					(`<#=persistentTable.InsertColumnsList#>`)
		SELECT `<#=persistentTable.InsertColumnsList.Replace($"PSA.{qualifiedRowChangeType}", $"CONVERT(VARCHAR(1), 'D') AS {qualifiedRowChangeType}").Replace($"PSA.{tableConfigurations.QualifiedRowEffectiveFromDate}", $"@{tableConfigurations.RowEffectiveFromDateValue} AS {tableConfigurations.QualifiedRowEffectiveFromDate}")#>`
		FROM `<#=persistentQualifiedName #>` PSA
		INNER JOIN currentList CL `<#=currentListJoinClause #>`
		LEFT OUTER JOIN `<#=deleteTableSchemaQualifiedName #>` DEL
			`<#=joinClause #>`
		`<#=whereClause #>``<# if (enableEndDatePsa){ #>`
		UPDATE ODS
		SET	 `<#=tableConfigurations.QualifiedRowEffectiveToDate#>` = @`<#=tableConfigurations.RowEffectiveFromDateValue#>``<# if (isCurrent != "IGN"){ #>`,`<#=tableConfigurations.QualifiedRowIsCurrent#>` = 0
		`<#} #>`
		FROM	`<#=persistentQualifiedName #>` ODS
		INNER JOIN
		(
			SELECT	 `<#=groupByClause#>`
					,MIN(PSA.`<#=tableConfigurations.QualifiedRowEffectiveFromDate#>`) AS `<#=tableConfigurations.QualifiedRowEffectiveFromDate#>`
					,@`<#=tableConfigurations.RowEffectiveFromDateValue#>` AS `<#=tableConfigurations.QualifiedRowEffectiveToDate#>`
			FROM	 `<#=persistentQualifiedName #>` PSA
			LEFT OUTER JOIN `<#=deleteTableSchemaQualifiedName #>` DEL
				`<#=joinClause #>`
			WHERE PSA.`<#=tableConfigurations.QualifiedRowEffectiveToDate#>` = '9999-12-31'
				`<#=whereClause #>`
			GROUP BY `<#=groupByClause #>`
		) SRC
		`<#=joinClause.Replace("PSA.", "ODS.").Replace("DEL.", "SRC.") #>`
			AND	ODS.`<#=tableConfigurations.QualifiedRowEffectiveFromDate#>` = SRC.`<#=tableConfigurations.QualifiedRowEffectiveFromDate#>`
			AND	ODS.`<#=qualifiedRowChangeType #>` &lt;&gt; 'D'

		`<#} #>`

		COMMIT TRANSACTION [`<#=stagingTable.Id.Replace("-", "")#>`]
	END TRY
	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT;
		SELECT @ErrorMessage = ERROR_MESSAGE(), @ErrorSeverity = ERROR_SEVERITY(), @ErrorState = ERROR_STATE();
		RAISERROR ( @ErrorMessage, @ErrorSeverity, @ErrorState	 );
		ROLLBACK TRANSACTION [`<#=stagingTable.Id.Replace("-", "")#>`]
	END CATCH
		END
	</DirectInput>
</ExecuteSQL>
```

## Delete Detect Apply Dv Override

Override the SQL that is used by the Delete Detection Data Vault process

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DeleteDetectionApplyDv" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`

`<# CustomOutput.ObjectInherit = true; #>`
<#
var psaIntegrationStage = "PSA";
var stagingTable = new TableObject(table, "STG", "STG");
var persistentTable = new TableObject(table, "PSA", "PSA");
var tableConfigurations = new TableConfigurations(table, "STG");
var psaTableConfigurations = new TableConfigurations(table, "PSA");
var enableEndDatePsa = tableConfigurations.EnableEndDatePsa;
var enableEndDateDv = tableConfigurations.DvEndDateSatellite;
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
	var sqlCompareMultiActiveKeys = multiActiveKey.GetSqlToBk(stagingTable.StartDelimiter, stagingTable.EndDelimiter, "PSA", "DV");
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
	var dvConnection = satellite.Connection.RelatedItem;
	var satelliteTable = new TableObject(satellite, "DV", "SAT");
	var hubTable = new TableObject(hubPk.Object.RelatedItem, "DV", "HUB");
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
			var linkHubTable = new TableObject(targetLinkHubColumn.Object.RelatedItem, "DV", "HUB");
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
			var lsatHubTable = new TableObject(mappedHubObject, "DV", "HUB");
			//linkHubJoin = $"\n\t\tINNER JOIN {lsatHubTable.QualifiedName} LHUB\n\t\t\tON\tHUB.[{linkHubColumn.GetColumnName()}] = LHUB.[{lsatHubTable.GetPrimaryKey().GetColumnName()}]";
			//psaKeyJoin = $"\tON\tLHUB.[{lsatHubTable.BusinessKey.GetColumnName()}] = ";
		} else if (satelliteObjectType == "LSAT" && mappedHubObject != null) {
			var lsatHubTable = new TableObject(mappedHubObject, "DV", "HUB");
			linkHubJoinSk = $"\n\t\tINNER JOIN {lsatHubTable.QualifiedName} LHUB\n\t\t\tON\tHUB.{lsatHubTable.PrimaryKeyQualifiedName} = LHUB.{lsatHubTable.PrimaryKeyQualifiedName}";
			linkHubJoinBk = $"\n\t\tAND\tLHUB.{lsatHubTable.IntegrationKeyQualifiedName} = PSA.{stagingTable.IntegrationKeyQualifiedName}";
		hubAlias = "LHUB";
		} else {
			linkHubJoinBk = $"\n\t\tAND HUB.{hubTable.IntegrationKeyQualifiedName} = PSA.{stagingTable.IntegrationKeyQualifiedName}";
			hubAlias = "HUB";
		}
#>
<ExecuteSQL Name="SQL - Insert Deleted Into `<#=satellite.ObjectName.MakeSsisSafe()#>`" ConnectionName="<#=dvConnection.Name #>" ResultSet="None">
	`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
	`<#	} #>`
	<DirectInput>DECLARE @`<#=satelliteConfigurations.RowEffectiveFromDateValue#>` DATETIME2(7)
SELECT @`<#=satelliteConfigurations.RowEffectiveFromDateValue#>` = ISNULL(MAX(`<#=tableConfigurations.QualifiedRowEffectiveFromDate#>`), GETDATE()) FROM `<#=deleteTableDatabaseQualifiedName#>`

DECLARE @RowsInDelTable INT
SELECT @RowsInDelTable = CASE WHEN EXISTS (SELECT 1 FROM `<#=deleteTableDatabaseQualifiedName#>`) THEN 1 ELSE 0 END
IF @RowsInDelTable = 1
BEGIN
	BEGIN TRANSACTION [`<#=stagingTable.Id.Replace("-", "")#>`]
		BEGIN TRY
		;WITH currentList AS
		(
			SELECT *
			FROM
			(
				SELECT
					`<#=satellitePk.GetColumnName() #>`
					,`<#=qualifiedRowChangeType #>`
					,ROW_NUMBER() OVER (PARTITION BY `<#=satellitePk.GetColumnName() #>` ORDER BY `<#=qualifiedEffectiveFromDate #>` DESC) as rn
				FROM `<#=satelliteTable.QualifiedName #>`
			) cur
			WHERE rn = 1 AND `<#=qualifiedRowChangeType #>` &lt;&gt; 'D'
		)
			INSERT INTO `<#=satelliteTable.QualifiedName #>`
					(`<#=satelliteTable.InsertColumnsList.Replace("SAT.", "")#>`)
			SELECT	 `<#=satelliteTable.InsertColumnsList.Replace($"SAT.{qualifiedRowChangeType}", $"CONVERT(VARCHAR(1), 'D') AS {qualifiedRowChangeType}").Replace($"SAT.{satelliteConfigurations.QualifiedRowEffectiveFromDate}", $"@{satelliteConfigurations.RowEffectiveFromDateValue} AS {satelliteConfigurations.QualifiedRowEffectiveFromDate}")#>`
			FROM	 `<#=hubTable.QualifiedName #>` HUB
			INNER JOIN `<#=satelliteTable.QualifiedName #>` SAT
			ON		HUB.[`<#=hubPk.GetColumnName()#>`] = SAT.[`<#=satellitePk.GetColumnName() #>`]`<#=linkHubJoinSk #>`
			AND EXISTS (
				SELECT 1 FROM (
						SELECT	 `<#if (!string.IsNullOrEmpty(linkPsaBk)) {#>``<#=linkPsaBk #>``<#} else {#>``<#=stagingTable.IntegrationKey.GetSqlToBk(sd, ed, "PSA", "DV")#>` AS `<#=stagingTable.IntegrationKeyQualifiedName#>`
		`<#} #>``<#=sqlPsaSatSelectMultiActiveKeys #>`
					FROM	`<#=deleteTableDatabaseQualifiedName #>` PSA ) AS DEL
				WHERE
				`<#if ( !string.IsNullOrEmpty(linkPsaBk)) {#>``<#=lsatJoinTest #>``<#} else {#>` DEL.`<#=stagingTable.IntegrationKeyQualifiedName#>` = `<#=hubAlias #>`.`<#=stagingTable.IntegrationKeyQualifiedName#>`
		`<#} #>``<#=sqlCompareMultiActiveKeys.Replace("TGT.", "SAT.").Replace("SRC.", "DEL.") #>`
			)
			INNER JOIN currentList CL ON CL.[`<#=satellitePk.GetColumnName()#>`] = SAT.[`<#=satellitePk.GetColumnName() #>`]

	COMMIT TRANSACTION [`<#=stagingTable.Id.Replace("-", "")#>`]
END TRY
	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT;
		SELECT @ErrorMessage = ERROR_MESSAGE(), @ErrorSeverity = ERROR_SEVERITY(), @ErrorState = ERROR_STATE();
		RAISERROR ( @ErrorMessage, @ErrorSeverity, @ErrorState	 );
		ROLLBACK TRANSACTION [`<#=stagingTable.Id.Replace("-", "")#>`]
	END CATCH
END
	</DirectInput>
</ExecuteSQL>
`<# } #>`
```

## Azure Pre Archive Stage

Configure pipeline logic that will be injected before the blobs are archived

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AzurePreArchiveStage" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`


<#	var sourceObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(table, sourceObject.TargetConnection.IntegrationStage, "TGT");
	var persistentConnection = sourceObject.IsPersistent ? sourceObject.PersistentConnection : sourceObject.ProjectStageConnection;
	persistentConnection = new[] {"AZB", "AZDLS"}.Contains(persistentConnection.ConnectionType) ? sourceObject.ProjectTargetConnection : persistentConnection;
#>
`<#	CustomOutput.ObjectInherit = true; #>`
<ExecuteSQL Name="SQL - AzurePreArchiveStage" ConnectionName="<#=persistentConnection.Name#>">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<Parameters>
		<Parameter Name="0" VariableName="User.ExecutionID" DataType="Int64" />
	</Parameters>
	<DirectInput>EXEC `<#=targetObject.SystemType.StoredProcedureName(sourceObject, targetObject.Schema, targetObject.StartDelimiter, targetObject.EndDelimiter)#>` ?</DirectInput>
`<# 	CustomOutput.OutputPathName = @"SQL - AzurePreArchiveStage.Output"; #>`
</ExecuteSQL>
```

## Azure Post Archive Stage

Configure pipeline logic that will be injected after the blobs are archived

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
table | BimlFlexModelWrapper.ObjectsWrapper | Contains all information related to the object to which the pipeline will be added |
precedenceConstraint | String | Contains the Precedence Constraint of the preceding task unless it is the first task |


### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
ObjectInherit | Boolean | If CustomOutput.ObjectInherit = true then the Extension Point will be applied to all the Objects associated with the batch. |
OutputPathName | String | You must add CustomOutput.OutputPathName with the last task to connect it with the next Data Flow task. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="AzurePostArchiveStage" #>`
`<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>`
`<#@ property name="precedenceConstraint" type="String" #>`


<#	var sourceObject = new TableObject(table, table.Connection.RelatedItem.IntegrationStage, "SRC");
	var targetObject = new TableObject(table, sourceObject.TargetConnection.IntegrationStage, "TGT");
	var persistentConnection = sourceObject.IsPersistent ? sourceObject.PersistentConnection : sourceObject.ProjectStageConnection;
	persistentConnection = new[] {"AZB", "AZDLS"}.Contains(persistentConnection.ConnectionType) ? sourceObject.ProjectTargetConnection : persistentConnection;
#>
`<#	CustomOutput.ObjectInherit = true; #>`
<ExecuteSQL Name="SQL - AzurePreArchiveStage" ConnectionName="<#=persistentConnection.Name#>">
`<#	if (!string.IsNullOrEmpty(precedenceConstraint)) {#>`
	<PrecedenceConstraints>
		<Inputs>
			<Input OutputPathName="<#=precedenceConstraint #>" />
		</Inputs>
	</PrecedenceConstraints>
`<#	} #>`
	<Parameters>
		<Parameter Name="0" VariableName="User.ExecutionID" DataType="Int64" />
	</Parameters>
	<DirectInput>EXEC `<#=targetObject.SystemType.StoredProcedureName(sourceObject, targetObject.Schema, targetObject.StartDelimiter, targetObject.EndDelimiter)#>` ?</DirectInput>
`<# 	CustomOutput.OutputPathName = @"SQL - AzurePreArchiveStage.Output"; #>`
</ExecuteSQL>
```

