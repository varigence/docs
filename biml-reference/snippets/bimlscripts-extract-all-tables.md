# Extract All Tables

```biml
<#@ template language="C#" hostspecific="true"#>
<#@ import namespace="System.Data" #>

<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <!-- Creates a new package for each table in the project -->
        <# foreach (var table in RootNode.Tables) { #>
            <Package Name="Extract <#=table.Name#>" ConstraintMode="Linear" AutoCreateConfigurationsType="None">
                <Tasks>
                    <Dataflow Name="Copy Data">
                        <Transformations>
                            <OleDbSource Name="Retrieve Data" ConnectionName="Source">
                                <DirectInput>SELECT * FROM <#=table.Name#></DirectInput>
                            </OleDbSource>
                            <OleDbDestination Name="Insert Data" ConnectionName="Target">
                                <ExternalTableOutput Table="<#=table.Name#>"/>
                            </OleDbDestination>
                        </Transformations>
                    </Dataflow>
                </Tasks>
            </Package>
        <# } #>

            <!-- Creates a new package that executes each of the packages created above -->
            <Package Name="Driver - Extract All" ConstraintMode="Linear" AutoCreateConfigurationsType="None">
                <Tasks>
                    <# foreach (var table in RootNode.Tables) { #>
                        <ExecutePackage Name="Extract <#=table.Name#>">
                            <Package PackageName="Extract <#=table.Name#>" />
                        </ExecutePackage>
                    <# } #>
                </Tasks>
            </Package>
    </Packages>
</Biml>
```
