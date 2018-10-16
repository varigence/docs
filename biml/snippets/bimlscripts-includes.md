# Includes

```biml
<#@ template language="C#" hostspecific="True" mergemode="LocalMerge"#>
<#@ import namespace="System.Data" #>
<#@ import namespace="Varigence.Languages.Biml.Transformation.Destination" #>
<!-- This includes the OurUtility.biml file to this Biml file.
        Including a file does not result in code generation, but brings in references.
        More akin to C# references than C #includes -->
<#@ include file="OurUtility.biml" #>

<!-- Biml/BimlScript code here -->
```
