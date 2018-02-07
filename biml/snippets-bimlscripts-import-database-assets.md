# Import Database Assets

```xml
<!-- This sample demonstrates BimlScript that imports schemas and tables using a connection to AdventureWorksLT. -->

<#@ template language="C#" hostspecific="True"#>
<#@ import namespace="Varigence.Languages.Biml.Connection" #>
<#@ import namespace="Varigence.Hadron.Extensions" #>
<#@ import namespace="Varigence.Hadron.Extensions.SchemaManagement" #>

<#+ public ImportResults Results
	{ 
		get 
		{	
			return ((AstOleDbConnectionNode)RootNode.Connections["AdventureWorksLT"]).ImportDB();
		}
	}
#>  
	
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Schemas>
		<#=Results.SchemaNodes.GetBiml()#>
	</Schemas>
	<Tables> 
		<#=Results.TableNodes.GetBiml()#>
	</Tables>
</Biml>
```
