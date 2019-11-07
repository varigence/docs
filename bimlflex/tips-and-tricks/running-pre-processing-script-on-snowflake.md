# Executing custom scripts on Snowflake using BimlFlex

The following example uses the custom Snowflake components to call a Snowflake database to run custom scripts.

This is an example Batch Pre-processing Extension Point that injects the correct Snowflake component at the start of the Batch execution and calls the specified Stored Procedure.

The Target on line 1 needs to match the target batch where the pre-processign should happen. The `SnowflakeSqlStatement` expression should contain the required Snowflake SQL Statement.

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPreProcess" target="YOUR_BATCH_NAME" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<#   var ssisVersion = RootNode.BuildSettings.SsisVersion.ToString();
    var componentVersion = ssisVersion == "Ssis2008R2" ? ".2008, Version=1.5.0.0"
        : ssisVersion == "Ssis2012" ? ".2012, Version=2.0.0.0"
        : ssisVersion == "Ssis2014" ? ".2014, Version=3.0.0.0"
        : ssisVersion == "Ssis2016" ? ".2016, Version=4.0.0.0"
        : ssisVersion == "Ssis2017" ? ".2017, Version=5.0.0.0"
        : ssisVersion == "Ssis2019" ? ".2017, Version=6.0.0.0"
        : ".2005, Version=1.0.0.0";
    var targetServerVersion = ssisVersion == "Ssis2008R2" ? "90"
        : ssisVersion == "Ssis2012" ? "110"
        : ssisVersion == "Ssis2014" ? "120"
        : ssisVersion == "Ssis2016" ? "130"
        : ssisVersion == "Ssis2017" ? "140"
        : ssisVersion == "Ssis2019" ? "150"
        : "80";
#>

<Container Name="SEQC - Snowflake BatchPreProcess" ConstraintMode="Parallel">
    <Tasks>
        <CustomTask Name="SFLSQL - CALL flex_WW_VW_WW_STAGE" CreationName="Varigence.Ssis.Snowflake.SnowflakeSql, Varigence.Ssis.Snowflake<#=componentVersion #>, Culture=neutral, PublicKeyToken=e9fb56b2a63ffbab" TaskContact="">
            <Expressions>
                <Expression ExternalProperty="SnowflakeSqlStatement">"CALL \"rdv\".\"flex_RS_ENTITY_STAGE\"();"</Expression>
            </Expressions>
            <ObjectData>&lt;InnerObject&gt;
            &lt;SnowflakeAccount Type="8" Value="User::SnowflakeAccount" /&gt;
            &lt;SnowflakeDatabase Type="8" Value="User::SnowflakeDatabase" /&gt;
            &lt;SnowflakePassword Type="8" Value="User::SnowflakePassword" /&gt;
            &lt;SnowflakeRegion Type="8" Value="User::SnowflakeRegion" /&gt;
            &lt;SnowflakeSchema Type="8" Value="User::SnowflakeSchema" /&gt;
            &lt;SnowflakeSqlStatement Type="8" Value="" /&gt;
            &lt;SnowflakeUser Type="8" Value="User::SnowflakeUser" /&gt;
            &lt;SnowflakeWarehouse Type="8" Value="User::SnowflakeWarehouse" /&gt;
            &lt;TargetServerVersion Type="3" Value="<#=targetServerVersion #>" /&gt;
            &lt;/InnerObject&gt;</ObjectData>
        </CustomTask>
    </Tasks>
</Container>
```
