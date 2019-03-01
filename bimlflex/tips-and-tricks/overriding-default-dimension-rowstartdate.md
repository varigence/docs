# Extension Point - Override the Default Row Start Date for Dimensions

This is an example where a Target Pipeline Extension Point is used to override the default `FlexRowStartDate` column derived value so that new rows are always valid from 1900-01-01. This allows direct joins on all dimension members for Type 2 attributes, even if the dimension data was late arriving.

Create the Extension Point in the project by choosing the `Data Mart` button in the `BimlFlex` ribbon tab, `Extension Points` group. In the drop down, choose `Data Warehouse Insert Pipeline`.

Add the target Batch name in the `target` definition. This will override all Dimension Loads with the new behavior.

If the `FlexRowStartDate` column name has been changed from the default, update to the new name in the derived column transformation.

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhInsertPipeline" target="LOAD_BFX_DM" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<# CustomOutput.ObjectInherit = true; #>
<DerivedColumns Name="DC - FlexRowStartDate Override">
    <InputPath OutputPathName="<#=inputPath #>" />
    <Columns>
        <Column Name="FlexRowStartDate" DataType="DateTime" Length="100" ReplaceExisting="true">(DT_DBTIMESTAMP2, 7)"1900-01-01 00:00:00.000"</Column>
    </Columns>
<# CustomOutput.OutputPathName = @"DC - FlexRowStartDate Override.Output"; #>
</DerivedColumns>
```