# Script Component Project

```xml
<!-- This is Script Component Project that accesses Azure DataMarket data, pulls the data down 
		and stores it as new rows in the table.  -->
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<ScriptProjects>
		<ScriptComponentProject ProjectCoreName="SC_2bca370105ff4883a705860bac68cfba" Name="LoadCrimeDataFeed">
	<AssemblyReferences>
		<AssemblyReference AssemblyPath="Microsoft.SqlServer.DTSPipelineWrap.dll" />
		<AssemblyReference AssemblyPath="Microsoft.SqlServer.DTSRuntimeWrap.dll" />
		<AssemblyReference AssemblyPath="Microsoft.SqlServer.PipelineHost.dll" />
		<AssemblyReference AssemblyPath="Microsoft.SqlServer.TxScript.dll" />
		<AssemblyReference AssemblyPath="System.dll" />
		<AssemblyReference AssemblyPath="System.Data.dll" />
		<AssemblyReference AssemblyPath="System.Windows.Forms.dll" />
		<AssemblyReference AssemblyPath="System.Xml.dll" />
		<AssemblyReference AssemblyPath="System.Core, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089, processorArchitecture=MSIL, Custom=null" />
		<AssemblyReference AssemblyPath="System.Data.Services, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089, processorArchitecture=MSIL, Custom=null" />
		<AssemblyReference AssemblyPath="System.Data.DataSetExtensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089, processorArchitecture=MSIL, Custom=null" />
		<AssemblyReference AssemblyPath="System.Data.Services.Client, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089, processorArchitecture=MSIL, Custom=null" />
	</AssemblyReferences>
	<OutputBuffers>
		<OutputBuffer Name="ODataOutput" IsSynchronous="false">
			<Columns>
				<Column Name="ROWID" DataType="Int32" />
				<Column Name="State" DataType="String" Length="20" />
				<Column Name="City" DataType="String" Length="50" />
				<Column Name="Year" DataType="Int32" />
				<Column Name="Population" DataType="Int32" />
				<Column Name="PropertyCrime" DataType="Int32" />
				<Column Name="Burglary" DataType="Int32" />
				<Column Name="LarcenyTheft" DataType="Int32" />
				<Column Name="MotorVehicleTheft" DataType="Int32" />
				<Column Name="Arson" DataType="Int32" />
			</Columns>
		</OutputBuffer>
	</OutputBuffers>
	<Files>
		<File Path="AssemblyInfo.cs">using System.Reflection;
using System.Runtime.CompilerServices;

//
// General Information about an assembly is controlled through the following 
// set of attributes. Change these attribute values to modify the information
// associated with an assembly.
//
[assembly: AssemblyTitle("SC_2bca370105ff4883a705860bac68cfba.csproj")]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyCompany("Varigence")]
[assembly: AssemblyProduct("SC_2bca370105ff4883a705860bac68cfba.csproj")]
[assembly: AssemblyCopyright("Copyright @ Varigence 2011")]
[assembly: AssemblyTrademark("")]
[assembly: AssemblyCulture("")]
//
// Version information for an assembly consists of the following four values:
//
//      Major Version
//      Minor Version 
//      Build Number
//      Revision
//
// You can specify all the values or you can default the Revision and Build Numbers 
// by using the '*' as shown below:

[assembly: AssemblyVersion("1.0.*")]</File>
		<File Path="main.cs"> /* Microsoft SQL Server Integration Services Script Component
*  Write scripts using Microsoft Visual C# 2008.
*  ScriptMain is the entry point class of the script.*/

using System;
using System.Data;
using System.Linq;
using System.Net;
using Microsoft.SqlServer.Dts.Pipeline.Wrapper;
using Microsoft.SqlServer.Dts.Runtime.Wrapper;
	
[Microsoft.SqlServer.Dts.Pipeline.SSISScriptComponentEntryPointAttribute]
public class ScriptMain : UserComponent
{
	public override void PreExecute()
	{
		
		base.PreExecute();
		/*
			Add your code here for preprocessing or remove if not needed
		*/
	}

	public override void PostExecute()
	{
		base.PostExecute();
	

		/*
			Add your code here for postprocessing or remove if not needed
			You can set read/write variables here, for example:
			Variables.MyIntVar = 100
		*/
	}
	
	public override void CreateNewOutputRows()
	{
		var context = InitializeDataSource();
		
			int skip = 0;
			const int take = 100;
	
		while (true)
		{
			var rows = context.CityCrime.Skip(skip).Take(take);
			
			if (rows.Count() == 0)
			{
				break;
			}
			
			foreach (var row in rows)
			{
				this.ODataOutputBuffer.AddRow();
				this.ODataOutputBuffer.Arson = row.Arson;
				this.ODataOutputBuffer.Burglary = row.Burglary;
				this.ODataOutputBuffer.City = row.City;
				this.ODataOutputBuffer.LarcenyTheft = row.LarcenyTheft;
				this.ODataOutputBuffer.MotorVehicleTheft = row.MotorVehicleTheft;
				this.ODataOutputBuffer.Population = row.Population;
				this.ODataOutputBuffer.PropertyCrime = row.PropertyCrime;
				this.ODataOutputBuffer.ROWID = row.ROWID; 
				this.ODataOutputBuffer.State = row.State;
				this.ODataOutputBuffer.Year = row.Year;
			}  
		
			skip += take;
		}
	}
	
	private datagovCrimesContainer InitializeDataSource()
	{
		
		var context =
				new  datagovCrimesContainer(
					new Uri("https://api.datamarket.azure.com/Data.ashx/data.gov/Crimes/"));
		
		context.Credentials = new NetworkCredential(Variables.UserName, Variables.AccountKey);
		
		return context;
	}
}
	
</File>
	</Files>
	<ReadOnlyVariables>
		<Variable Namespace="User" DataType="String" VariableName="UserName" />
		<Variable Namespace="User" DataType="String" VariableName="AccountKey" />
	</ReadOnlyVariables>
</ScriptComponentProject>
	</ScriptProjects>
</Biml>
```
