# Callable BimlScript (Caller)

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <#foreach (var table in RootNode.Tables) { #>
            <#=CallBimlScript("..\\BimlScripts\\Callee.biml", table.Name, table.LateArriving) #>
        <# } #>
    </Packages>
</Biml>
```