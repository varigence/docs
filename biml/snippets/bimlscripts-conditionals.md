# Conditionals

```xml
<#@ template language="C#" hostspecific="True" mergemode="LocalMerge" #>
<#@ import namespace="Varigence.Hadron.Extensions.DataTransformation" #>

<Container>
    <Tasks>
        <ExecuteSQL Name="Count Rows Inserted" ConnectionName="MyStagingDb" BypassPrepare="false" ResultSet="SingleRow">
            <Expressions>
                <#if (TargetNode.GetTag("TableType) == "Fact") || TargetNode.GetTag("TableType") == "Dim") {#>
                <Expression PropertyName="SqlStatementSource">"SELECT DISTINCT COUNT ('WarehouseId') As RowsInserted FROM MyTable</Expression>
                <#} else {#>
                <Expression PropertyName="SqlStatementSource">"SELECT COUNT(1) AS RowsInserted FROM MyTable</Expression>
                <#}#>
            </Expressions>
        </ExecuteSQL>
    </Tasks>
</Container>
```
