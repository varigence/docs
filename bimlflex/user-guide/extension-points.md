# Extension Points

Extension Points are used to extend the default functionality of BimlFlex using standard Biml code. It can extend and override many different areas of the BimlFlex framework.

Extension Points have four key components:

* Extension Point directives that control what is injected and where
* Inheritance options code that defines any object inheritance
* Custom code that implements the required behavior
* Input and output path variables for connecting the Extension Point in the Ssis package.

![Extension Points Sample Code](images/bimlflex_ss_v5_extension_points_sample_code.png "Extension Points Sample Code")

Extension Points are created in BimlStudio. In the BimlFlex Ribbon tab there are several Extension Point areas with a large number of different Extension Points available. Each Extension Point template will generate a code block that targets a specific point of the project. 

![BimlFlex Ribbon UI](images/bimlflex_ss_v5_bimlflex_ui_tab.png "BimlFlex Ribbon UI")

Creating an Extension Point file and applying the required target attribute is all that is needed for it to be included into the project. when BimlFlex builds the solution any Extension Point code is injected into the resulting Packages.

The Extension Points are saved as Biml files in the BimlStudio Project and should be treated as source code for the solution.

## Default BimlFlex behaviour

Note that there are many features and functions built into BimlFlex that don't require Extension Points. Parameters, custom source queries with joins and filters, inherited tables and columns, data type expansions etc are all available without the need for Extension Points.

## Extension Point Targets

Below is an example of where Extension Points can be added to the ETL structure. The red dots indicate injection points.

![Extension Points Injection Points](images/bimlflex_ss_v5_extension_points_sample_flow.png "Extension Points Injection Points")

It is also possible to completely override the main container with an Extension Point. This can be used with pre-existing, bespoke packages. By importing the existing package into BimlStudio the Biml code version of the same package can be injected into the Extension Point.

## Extension Point Directives

Special attention should be paid when editing the directives of an extension point because a user must have them correctly defined before they will be able to test the output of their biml code. The purpose of a directive is to indicate to the compiler exactly what the purpose of the Biml code is that you are writing and where it should be injected. To write a directive simply insert the appropriate line of code between the following tags <#@ #>

The following table outlines the attributes of these directives.

|Extension Point Directive Attribute|Attributes Description|
|--- |--- |
|bundle|File name of the bundle being used|
|extensionpoint|Key work defining the type of extension point|
|target|The name of the object that the extension point will be applied to|

The next directive is the property directive which is specific to the type of object you are trying to modify. Below is a table with the attribute definitions.

|Property Directive Attribute|Attributes Description|
|--- |--- |
|name|Name of the entity this extension point targets: "sourceTable", "targetTable", "connection" etc.|
|type|This is the entity type: "string", "BimlFlexModelWrapper.ObjectsWrapper", "BimlFlexModelWrapper.ConnectionsWrapper", etc.|

## Extension Point Inheritance Code

Here we will describe how a BimlFlex extension point can inherit the attributes and related items from an object that we are trying to modify. This is useful because, in some cases, properties relating to a certain object are required as part of what is needed to effectively do what we want to in an extension point.

Below are two of the required directives that need to be in place in order to use inheritance.

```biml
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper"  #>
<#@ import namespace="Varigence.Biml.Flex"  #>
```
```

A small block of BimlScript code will enable us to gain access to the items we need. A BimlScript is a piece of C\# that is injected into a Biml file that gives us the ability to use Biml in a programmatic way. We will use C# methods to create variables that contain the objects and information we need.

First, we will need to write the first line that will allow us to obtain a copy of the targeted object. This is done by entering the following line.

```biml
<# CustomOutput.ObjectInherit = true; #>
```

Next, we will declare the variables we need to hold our information and use methods to obtain the objects of interest in this example. First, create a variable by using the var keyword and then giving the variable an appropriate name. In this example, we will get the source connection of a given table and add it as the value of the variable. Because we have already added the table as a property in our directive we can reference it directly.

```biml
<# var sourceConnection = EntityHelper.GetSourceConnection(table); #>
```

From here if we want to pull out any of the information about the object, we can insert it directly into our biml code using the following tags: <#= #>. This will take the value stored in any variable, convert it to a string and insert in place of where the original BimlScript tags were.

For example:

```biml
<#=sourceConnection.Name#>
```

## Output Path and Input Path Variables - Optional

Output path variables hold the name of the current task that you are modifying. The input path variable contains the previous task’s name in the control flow or data flow so that the task you are working on can reference the previous item in your biml code and remain attached.

These two path variables are required when using extension points that either completely replaces tasks or when you are inserting a new task into an existing data flow or control flow.

If you are replacing or modifying a task at the end of a data flow or control flow then an output path variable is not required. In a similar fashion if you are replacing or modifying the first task in a control flow or data flow then an input path variable is not required.

We will see more examples of where we need to declare an output/input path variable later on.

```biml
<# CustomOutput.OutputPathName = @"TaskName/SequenceContainerName"; #>
```

## Extension Points Examples

This section of the document covers the biggest variation of how extension points are used. However, there is a fairly exhaustive list of extension points available within BimlFlex. Here we will mainly be looking at demonstrating why a certain type of extension point will be used in a solution.

### Project Based

Project based extension points are helpful, particularly because, depending on the type of solution being implemented, the Project at hand will require items that are not practical to maintain in metadata such as script files and bespoke project parameters. Generally, it is quite useful to have these items centralised within Biml code.

#### Project Parameter

Including parameters with extension points, allows greater reusability and logical separation in our solutions. Because of this, the project parameter extension point is useful for storing parameter definitions for high-level project parameters to do with databases and connections. This is important to note because, over the lifespan of a given data warehouse solution, there is a high chance of needing to repurpose the output of BimlFlex.

#### Extension Point Target

The extension point target, in this case, will be to point to the name of the project we are adding a parameter to.

#### Example/default Extension Point code generated from BimlStudio

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" #>

<Parameter Name="ServerName" DataType="String" IsRequired="true">localhost</Parameter>
<Parameter Name="UserName" DataType="String" IsRequired="true">varigence</Parameter>
<Parameter Name="UserPassword" DataType="String" IsRequired="true">P@ssw0rd!</Parameter>
```

### Project Script File

As mentioned, one of the advantages of using extension points is to centralise code in Biml. This is relevant for script tasks as it is for any other complex ETL tasks.

For more information on how to implement a custom script task in Biml use the following resource.
[https://www.varigence.com/Documentation/Language/Element/AstTaskScriptProjectNode](https://www.varigence.com/Documentation/Language/Element/AstTaskScriptProjectNode)

#### Extension Point Target

The target attribute of the extension point is the project that the script task belongs to.

#### Example/default Extension Point code generated from BimlStudio

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectScriptFile" #>
<#@ property name="project" type="BimlFlexModelWrapper.ProjectsWrapper" #>

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
    <File Path="ScriptMain.cs">
      using System;
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

## Connection Based

Connection based extension points are useful when adjustments are required to a connection, that is not part of the standard connection that can be implemented through the metadata connections in BimlFlex excel. There are a variety of scenarios where this may be required from Dynamic connection strings to Connections that are derived from custom components.

### Connection Expression

Connection expressions are useful for creating dynamic connections, particularly when the connection string or source that we are connecting to is not known until runtime. For instance, a flat file connection may need to connect to a file which contains a date stamp in the name. Here just like in SSIS, we can enter in the expression we require for this functionality.

#### Extension Point Target

The target, in this case, is the name of a pre-existing connection that is in a solution.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionExpression" target="ConnectionName" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper"  #>

<Expressions>
  <Expression ExternalProperty="ConnectionString">"Dsn=SRC_ODBC;Uid=" + @[$Project::UserName] + ";Pwd=" + @[$Project::UserPassword] + ";"
  </Expression>
</Expressions>
```

### Batch Based

Batch based extension points are generally only different from the other types of extension points in that their purpose for being implemented will be quite different than that say, of a package extension point or a project extension point. Batch extension points focus more on the processing of groups of files or data sources prior or post data load. We will see examples of this in the section to follow.

#### Parameter Bindings

Parameter bindings as in regular SSIS are used to gain access to a given parent parameter. In the same way, we can create these bindings in the following examples

#### Extension Point Target

The target will be the name of the batch that a user is trying to modify.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ParameterBindings" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<ParameterBindings>
  <ParameterBinding Name="SnapshotDate" VariableName="User.SnapshotDate" />
</ParameterBindings>
```

For further information on creating parameter bindings in Biml see the following resources.
[https://www.varigence.com/Documentation/Language/Element/AstVariableParameterMappingNode](https://www.varigence.com/Documentation/Language/Element/AstVariableParameterMappingNode)

### Batch Variable

Batch variables are fairly common, particularly if there are child packages that intend to inherit these variables. In terms of how the variables are defined these are effectively the same as any other package variable.

#### Extension Point Target

The target is the name of the batch package.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchVariable"  #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper"  #>

<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```

For further resources on how to create variables in Biml, see the following resources
[https://www.varigence.com/Documentation/Language/Element/AstVariableNode](https://www.varigence.com/Documentation/Language/Element/AstVariableNode)

### Batch Package Configurations

This is another example where the differences in code between regular package configurations and batch configurations are minimal. Below is an example of how to implement batch level package configurations.

#### Extension Point Target

The target is the name of the batch package

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPackageConfigurations"  #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper"  #>

<# CustomOutput.ObjectInherit = true; #>
<PackageConfiguration Name="LOAD_MY_Configurations">
  <ExternalFileInput ExternalFilePath="C:\Varigence\Configurations\MY_BATCH_Configurations.dtsConfig" FileUsageType="ExistingFile" RelativePath="false" />
</PackageConfiguration>
```

For more on how to create batch configurations in Biml see the following resources.
[https://www.varigence.com/Documentation/Language/Element/AstPackageConfigurationNode](https://www.varigence.com/Documentation/Language/Element/AstPackageConfigurationNode)

### Batch Connection

Sometimes it is useful to add references in a batch package to a connection order to make a connection available to a given batch. This example will show how this can be implemented via extension point.

#### Extension Point Target

The extension point target is the name of the batch package we are trying to modify.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchConnection"  #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper"  #>

<Connection ConnectionName="MY_SOURCE" />
```
For more on how to create connection references in Biml see the following resources.

[https://www.varigence.com/Documentation/Language/Element/AstConnectionReferenceNode](https://www.varigence.com/Documentation/Language/Element/AstConnectionReferenceNode)

### Batch PreProcess

Batch pre-process extension is used when there is a need to perform an overall process prior to executing a large set of packages. For instance, this can be to prepare a source data set or arrange a sequence of files before extraction. Either way, there is a wide variety of application for this particular extension point.

#### Extension Point Target

The extension point target is the name of the Batch.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPreProcess"  #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper"  #>

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

For more information on how to develop packages tasks in Biml see the following resources.

[https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks](https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks)

### Batch Post Process

Similar to the pre-process extension point in BimlFlex, the post-process extension point is useful for large operations or tasks that require processing items after a load has completed. Examples of this could be moving process files, archiving processed flat files or uploading data to and external source after a load has completed. Again, a number of applications here are many and varied.

#### Extension Point Target

The extension point target is the name of the batch package.

#### Example Extension Point code

```biml
<#@ extension** bundle="BimlFlex.bimlb" extensionpoint="BatchPostProcess"  #>
<#@ property** name="batch" type="BimlFlexModelWrapper.BatchesWrapper"  #>

<Container Name="SEQC - Post Process" ConstraintMode="Parallel">
  <PrecedenceConstraints>
    <Inputs>
      <Input OutputPathName="SEQC - Main.Output" EvaluationOperation="Constraint" EvaluationValue="Success"/>
    </Inputs>
  </PrecedenceConstraints>
  <Tasks>
    <ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
    <DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD\_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
    <Parameters>
      <Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
      </Parameters>
    </ExecuteSQL>
  </Tasks>
</Container>
```

For more information on how to develop SSIS tasks in Biml see the following resources.
[https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks](https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks)

## Object Based

Object base extension points are generally used for making adjustments to packages that load only one table in its execution. This particular segment of extension points contains the most variety in terms of what is available in extension points as this where most of the modifications are needed. Not only do we have the ability to modify what happens before and after a load, but we have the ability to adjust and add sequence containers for a particular purpose within the data flow itself.

### Object Script File

The object script file extension point is mainly used because it allows us an easier way to centralise our script tasks in Biml code whilst not having to hold its entire definition with the package templates. This then can be referenced from the BimlFlex code that manages the generation of SSIS packages.

#### Extension Point Target

The target of this extension point is the name of the table object that is the source of this package.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectScriptFile" #>
<#@ property name="project" type="BimlFlexModelWrapper.ProjectsWrapper" #>

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
    <File Path="ScriptMain.cs">
      using System;
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

For more information on how to define a script project in Biml, see the following resources.
[https://www.varigence.com/Documentation/Language/ChildCollection/AstRootNode/ScriptProjects](https://www.varigence.com/Documentation/Language/ChildCollection/AstRootNode/ScriptProjects)

### Package Variable

This extension point will be used to define new variables in a given package on the object level. It should be noted that the way a user defines a package, in this case, is no different to how a batch package variable is defined, is it simply the way in which the extension point is targeted that is different.

#### Extension Point Target

The extension point target is the name of the source table object

#### Example Extension Point code

```biml
<#@ extension** bundle="BimlFlex.bimlb" extensionpoint="PackageVariable"  #>

<#@ property** name="table" type="BimlFlexModelWrapper.ObjectsWrapper"  #>

<Variable Name="TenantCode" DataType="String">UNK</Variable>
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
```

For more information on how to implement package variables in Biml see the following resources.
[https://www.varigence.com/Documentation/Language/Element/AstVariableNode](https://www.varigence.com/Documentation/Language/Element/AstVariableNode)

### Package Parameter

Package parameters can be implemented through extension points also, this is generally done when there is a bespoke parameter required for a particular purpose. The parameters defined in packages are usually used in conjunction with other extension points that make use of these parameters later in the ETL pattern.

#### Extension Point Target

The target is the source object name.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageParameter"  #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper"  #>

<Parameter Name="BatchId" DataType="String"></Parameter>
<Parameter Name="BatchInstanceId" DataType="String">0</Parameter>
```

For more on how to code these items in Biml please see the following resources.
[https://www.varigence.com/Documentation/Language/Element/AstParameterNode](https://www.varigence.com/Documentation/Language/Element/AstParameterNode)

### Override SQL

The Override SQL extension point is a more common extension point that is used to fully replace the select statement used in a source component. This is useful for scenarios where more complex source queries are required.

#### Extension Point Target

The target is the source object name.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideSql"  #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper"  #>

<# CustomOutput.ObjectInherit = false; #>
  SELECT DISTINCT
     [PropertyId]
    ,[EnterpriseId]
    ,CONVERT(INT, ISNULL([MemberId], - 1)) AS [MemberId]
  FROM
    [dbo].[MyTable]
```

For more on how to code these items in Biml please see the following resources.
[https://www.varigence.com/Documentation/Language/Element/AstDirectResourceNode](https://www.varigence.com/Documentation/Language/Element/AstDirectResourceNode)

### Override Main

The Override Main extension point is used for completely replacing the main sequence container of an object package. The reason this can be useful to a user is in scenarios where it is easier to take a pre-existing package, convert this into Biml code through the BimlStudio import package tool and insert that new Biml code into the Override Main extension point. This way we can easily add an existing package to BimlFlex and also centralise the code for a given BI solution, which helps with maintainability.

Figure 9, Override Main Extension Point

#### Extension Point Target

The target is the source object name.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="OverrideMain" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<Tasks>
  <Dataflow Name="DFT - Load MySource" DelayValidation="true">
    <Transformations>
      <OleDbSource Name="OLE\_SRC - MySource" ConnectionName="MySourceConnection">
        <DirectInput>SELECT * FROM [dbo].[MySourceTable]</DirectInput>
      </OleDbSource>
      <OleDbDestination Name="OLE\_DST - MyTarget" ConnectionName="MyTargetConnection">
        <InputPath OutputPathName="OLE\_SRC - MySource.Output" />
        <ExternalTableOutput Table="\[dbo\].\[MySourceTable\]" />
      </OleDbDestination>
    </Transformations>
  </Dataflow>
</Tasks>
```

For more on how to code these items in Biml please see the following resources.
[https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks](https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks)

### Pre Dataflow

As the name suggests this extension point is used for scenarios where a user needs to insert logic just before the data flow begins. In some scenarios when we use connection expressions or dynamic variables that change over multiple executions, it is useful to have the ability to add custom logic just before the data flow begins. Note that if this extension point is used, it will make it the first task in the control flow for the main sequence container as so the output pathname variable will need to be included.

#### Extension Point Target

The target is the name of the source object.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreDataFlow" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<#@ property name="precedenceConstraint" type="String"  #>
<# CustomOutput.ObjectInherit = false; #>

  <ExecuteSQL Name="SQL - Get CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="SingleRow">

  <# if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
    <PrecedenceConstraints>
      <Inputs>
        <Input OutputPathName="<#=precedenceConstraint #>" />
      </Inputs>
    </PrecedenceConstraints>
  <# } #>

  <Results>
    <Result Name="0" VariableName="User.CurrentModifiedDate" />
  </Results>

  <DirectInput>EXEC [ssis].[GetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.Table.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>

  <Parameters>
    <Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
    <Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
  </Parameters>

  <# CustomOutput.OutputPathName = @"SQL - Get CurrentModifiedDate.Output"; #>

</ExecuteSQL>
```

For more on how to code these items in Biml please see the following resources.
[https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks](https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks)

### Post Dataflow

Similar to the Pre-Dataflow task, the post data flow tasks purpose is to add logic to the main sequence container just after the data flow task has ended. Again, if we are using connection expressions or variables that change after each execution it is helpful to be able to add additional logic at this location.

#### Extension Point Target

The target is the name of the source object.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostDataFlow" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="precedenceConstraint" type="String"  #>
<# CustomOutput.ObjectInherit = false; #>

<ExecuteSQL Name="SQL - Set CurrentModifiedDate" ConnectionName="BimlCatalog" ResultSet="None">
  <# if (!string.IsNullOrEmpty(precedenceConstraint)) {#>
    <PrecedenceConstraints>
      <Inputs>
        <Input OutputPathName="<#=precedenceConstraint #>" />
      </Inputs>
    </PrecedenceConstraints>
  <# } #>

  <DirectInput>EXEC [ssis].[SetConfigVariable] 'MY_SRC', 'MY_SRC.dbo.Table.CurrentModifiedDate', 'CurrentModifiedDate', @VariableValue, @ExecutionID</DirectInput>

  <Parameters>
    <Parameter Name="@VariableValue" VariableName="User.CurrentModifiedDate" Length="-1" DataType="String" />
    <Parameter Name="@ExecutionID" Direction="Input" DataType="Int64" VariableName="User.ExecutionID" />
  </Parameters>

</ExecuteSQL>
```

For more on how to code these items in Biml please see the following resources.
[https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks](https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks)

### PreProcess

The pre-process extension point is located before the main container in the control flow. This is a fairly common extension point mainly because it is helpful to have logic that can be added where we may need to do some work in order to obtain the data that we want to load. This is the case in scenarios where we must download flat files or run some SQL code to help prepare the data we want to load. Note that because this extension point encloses the new logic inside a sequence container, input and output path variables are not required.

#### Extension Point Target

The target is the source object name.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PreProcess" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<# CustomOutput.ObjectInherit = false; #>

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

For more on how to code these items in Biml please see the following resources.
[https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks](https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks)

### Post Process

The post process extension point is useful for custom logic that needs to be applied after the end of the main execution of a given package. Scenarios that require archiving or uploading of data to a different location are typical cases for when this extension point is used.

Note that because this extension point encloses the new logic inside a sequence container, input and output path variables are not required.

#### Extension Point Target

The target is the source object name.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PostProcess" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<# CustomOutput.ObjectInherit = false; #>

<ExecuteSQL Name="SQL - Set SnapshotDate" ConnectionName="BimlCatalog" ResultSet="None">
  <DirectInput>EXEC [ssis].[SetConfigVariable] 'LOAD_DATAMART', 'LOAD_DATAMART.SnapshotDate', 'SnapshotDate', @VariableValue</DirectInput>
  <Parameters>
    <Parameter Name="@VariableValue" VariableName="User.SnapshotDate" Length="-1" DataType="String" />
  </Parameters>
</ExecuteSQL>
```

For more on how to code these items in Biml please see the following resources.
[https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks](https://www.varigence.com/Documentation/Language/ChildCollection/AstContainerTaskBaseNode/Tasks)

### Source Override

A source override extension point is similar to the override SQL extension point, but this is used when we want to completely replace the source component rather than adjust or replace the source query.

Remember that when the source component is changed in this fashion, consideration should be made to the columns and datatypes that are expected in the remainder of the data flow. The extension point assumes that the changes made using this extension point align with the rest of the data flow.

#### Extension Point Target

The target is the source object name.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceOverride" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper"  #>
<# CustomOutput.ObjectInherit = false; #>

<OleDbSource Name="OLE_SRC - MyTable" ConnectionName="MY_SRC" CommandTimeout="0" ValidateExternalMetadata="false">
  <DirectInput>SELECT [Code], [Name] FROM [dbo].[MyTable]</DirectInput>
    <Columns>
      <Column SourceColumn="Name" TargetColumn="MyTableName" />
      <Column SourceColumn="Code" TargetColumn="MyTableCode" />
    </Columns>
  <# CustomOutput.OutputPathName = @"OLE_SRC - MyTable.Output"; #>
</OleDbSource>
```

The following is a resource on how to define an OLEDB Source in BimlCode.
[https://varigence.com/Documentation/Language/Element/AstOleDbSourceNode](https://varigence.com/Documentation/Language/Element/AstOleDbSourceNode)

### Source Parameter

A source parameter extension point is used for when we want to use a predefined parameter as a parameter to be mapped to our source component.

#### Extension Point Target

The target is the source object name.

#### Example Extension Point code

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceParameter" #>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<# CustomOutput.ObjectInherit = false; #>

<Parameter Name="Parameter0" VariableName="User.LastModifiedDate" />
<Parameter Name="Parameter1" VariableName="User.CurrentModifiedDate" />
```

For information on Biml code used in this extension point please see the following resources.
[https://www.varigence.com/Documentation/Language/Element/AstVariableParameterMappingNode](https://www.varigence.com/Documentation/Language/Element/AstVariableParameterMappingNode)

### Source Pipeline

This extension point is used for inserting a data flow or multiple data flow tasks into the standard ETL data flow. Note here that the final data flow task that you define will need to have the name in the value of the OutputPathName variable. This extension point is mainly useful for adding custom data flow transformations to the existing data flow.

#### Extension Point Target

The target is the source object name.

#### Example/default Extension Point code generated from BimlStudio

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourcePipeline" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<DataConversion Name="DCV - Convert MyColumn">
  <Input OutputPathName="<#=inputPath #>" />
  <Columns>
    <Column SourceColumn="MyColumn" TargetColumn="cnv\_MyColumn" DataType="String" Length="100" />
  </Columns>
  <# CustomOutput.OutputPathName = @"DCV - Convert MyColumn.Output"; #>
</DataConversion>
```

For information on Biml code used in this extension point please see the following resources.
[https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations](https://www.varigence.com/Documentation/Language/ChildCollection/AstDataflowTaskNode/Transformations)