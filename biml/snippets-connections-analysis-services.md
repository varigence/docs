# Analysis Services

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Connections>
		<!-- This is a sample AnalysisServices connection that connects to a server running an Analysis Services database. -->
		<AnalysisServicesConnection 
			Name="AdvWorksCube" 
			Provider="MSOLAP" 
			Database="AdventureWorksCubeVulcan" 
			Server="localhost" 
			ConnectionString="Data Source=localhost;Initial Catalog=Adventure Works DW 2008;Provider=MSOLAP.4;Impersonation Level=Impersonate;" 
			/>
	</Connections>
</Biml>
```
