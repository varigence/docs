# Script Task Project

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <ScriptProjects>
        <ScriptTaskProject ProjectCoreName="ST_19338c2d3c5d43d1b77d01b996ae1485" Name="Simple Task Script Project">
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
                <File Path="AssemblyInfo.cs">using System.Reflection;
using System.Runtime.CompilerServices;

[assembly: AssemblyTitle("ST_19338c2d3c5d43d1b77d01b996ae1485.csproj")]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyCompany("Varigence")]
[assembly: AssemblyProduct("ST_19338c2d3c5d43d1b77d01b996ae1485.csproj")]
[assembly: AssemblyCopyright("Copyright @ Varigence 2011")]
[assembly: AssemblyTrademark("")]
[assembly: AssemblyCulture("")]

[assembly: AssemblyVersion("1.0.*")]</File>
                <File Path="ScriptMain.cs">

using System;
using System.Data;
using Microsoft.SqlServer.Dts.Runtime;
using System.Windows.Forms;

    [System.AddIn.AddIn("ScriptMain", Version = "1.0", Publisher = "", Description = "")]
    public partial class ScriptMain : Microsoft.SqlServer.Dts.Tasks.ScriptTask.VSTARTScriptObjectModelBase
    {
        enum ScriptResults
        {
            Success = Microsoft.SqlServer.Dts.Runtime.DTSExecResult.Success,
            Failure = Microsoft.SqlServer.Dts.Runtime.DTSExecResult.Failure
        };

        public void Main()
        {
            if (Dts.Variables["User::TestVariable"].ReadOnly)
            {
                Dts.Events.FireError(0, "Simple Task Script Project", "Variable is readonly", string.Empty, 0);
            }

            Dts.TaskResult = (int)ScriptResults.Success;
        }
    }
                </File>
            </Files>
            <ReadOnlyVariables>
                <Variable Namespace="User" DataType="Int32" VariableName="TestVariable" />
            </ReadOnlyVariables>

            <ReadWriteVariables />
        </ScriptTaskProject>
    </ScriptProjects>
</Biml>
```
