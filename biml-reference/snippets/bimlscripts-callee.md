# Callable BimlScript (Callee)

```biml
<#@ property name="tableName" type="String" #>
<#@ property name="lateArriving" type="System.Boolean" #>
<#
    string lateArrivingString = "(LA)";
    string notLateArrivingString = "(not LA)";
#>
<Package Name="Building from <#=tableName#> <#= lateArriving ? lateArrivingString : notLateArrivingString #>" ConstraintMode="Linear" />
```
