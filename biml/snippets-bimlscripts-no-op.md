# No Op

```xml
<#@ template language="C#" hostspecific="True" mergemode="LocalMerge"#>
<#@ import namespace="Varigence.Hadron.Extensions.DataTransformation" #>

<!-- If Framework Transformer returns null or string.Empty then the transformer has no 
        effect on the target node.  This snippet shows an example of doing a check to see if 
        the framework transformer should be applied to this target node. -->
<#
if (TargetNode.Annotations["Exclude"] != null)
{
    return null;
}
#>

<!-- The rest of your framework transformer code here -->
```
