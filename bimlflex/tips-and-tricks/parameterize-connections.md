# Parameterize Connections

SSIS Project Connections can be parameterized through BimlFlex.

Parameters are managed on a per project basis in SSIS. A Connection Manager can have properties, such as the connection string, defined by an expression. This expression can be defined as a Project Parameter or a combination of Project Parameters. These parameters can then be controlled through environment overrides in the SSIS catalog.

The following video shows an example of overriding the connection string property of the connection through an extension point and defining the Project parameter through another extension point that has the target set to `@@global` so that it is applied to all projects in the solution

## Identify Connections per Project
You can use this script to identify which `Project` reference the `Connection` you are adding an `ConnectionExpression` extension point for.

```biml
<#@ template language="C#" hostspecific="True" tier="99999"#>
<#	foreach(var project in RootNode.PackageProjects){
	   	var connections = new List<string>();
		foreach (var package in RootNode.Packages.Where(i=> i.PackageSubpath == project.ProjectSubpath)){
			foreach(var packageConnection in package.Connections.Where(c => c.Connection != null && !string.IsNullOrWhiteSpace(c.Connection.Name)).Select(c => c.Connection.Name).Distinct()){
				connections.Add(packageConnection);
			} #>
<# } #>
<#=project.Name #>
<#	foreach(var connection in connections.Distinct()) {#>
	<#=connection #>
<# } #>
	
<# } #>
```

More information:

* [Working with environments and the SSIS catalog](../user-guide/deployment-guide.md)
* [Working with sensitive settings in the SSIS catalog](using-sensitive-parameters-in-ssis-catalog.md)

## Video

![Parameterize Connections -center](https://www.youtube.com/watch?v=4V8v4Brbg7E?rel=0&autoplay=0)
