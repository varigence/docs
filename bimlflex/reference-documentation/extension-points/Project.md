---
uid: bimlflex-app-reference-documentation-Project
title: BimlFlex App Definition for Project
summary: Documentation of functionality within BimlFlex for the Project Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Project Extension Points

The Project category has the following available Extension Points defined.
  
## Project Parameter

Add additional parameters to a Project. This only applies to SSIS deployments.
### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" #>
<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstParameterNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example configures parameters that will be used in combination with Connection Expressions-->
<Parameter Name="ServerName" DataType="String" IsRequired="true">localhost</Parameter>
<Parameter Name="UserName" DataType="String" IsRequired="true">varigence</Parameter>
<Parameter Name="UserPassword" DataType="String" IsRequired="true">P@ssw0rd!</Parameter>
```

## Project Script File

Add a ScriptTask or ScriptComponent to a Project. This only applies to SSIS deployments.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
project | BimlFlexModelWrapper.ProjectsWrapper | Contains all information related to the project to which the script will be added |

### Template

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

