# Extension Point - Discard Empty Rows

This is an example where a Source Pipeline Extension Point is used to discard all incoming rows where the Integration Key column value is empty. This was used in a scenario where a file was loaded with empty rows that needed to be discarded.

Any row with an empty Integration Key is discarded.

A row count of discarded rows is logged to the BimlCatalog as Exceptions

Create the Extension Point in the project by choosing the `Object` button in the `BimlFlex` ribbon tab, `Extension Points` group. In the drop down, choose `Source Pipeline`.

Add the source object name in the `target` definition. All other information will be derived automatically.

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourcePipeline" target="ConnectionName.SchemaName.FileName" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<!-- Will discard any row with an empty value in the Integration Key column and log the row count as an Exception (Type 8) in the BimlCatalog -->

<# var tgtTable = new TableObject(targetTable, "STG", "STG");  #>

<ConditionalSplit Name="CSPL - Discard Empty Rows">
    <InputPath OutputPathName="<#=inputPath #>" />
    <OutputPaths>
        <OutputPath Name="Discard">
            <Expression><#=tgtTable.IntegrationKeyName #> == &quot;&quot;</Expression>
        </OutputPath>
    </OutputPaths>
</ConditionalSplit>

<CustomComponent Name="FLX - Discarded <#= tgtTable.SourceSsisSafeScopedName #>" ComponentTypeName="Varigence.Ssis.RowCount, Varigence.Ssis<#=RootNode.ObjectTag["ComponentVersion"]#>, Culture=neutral, PublicKeyToken=e9fb56b2a63ffbab">
    <InputPaths>
        <InputPath OutputPathName="CSPL - Discard Empty Rows.Discard" HasSideEffects="true" ErrorOrTruncationOperation="" Identifier="RowCountInput"></InputPath>
    </InputPaths>
    <CustomProperties>
        <CustomProperty Name="RowCountObject" DataType="String" SupportsExpression="true"><#= tgtTable.SourceSsisSafeScopedName #></CustomProperty>
        <CustomProperty Name="RowCountType" DataType="Int32" TypeConverter="Varigence.Ssis.RowCountSerialize+RowCountTypeEnum, Varigence.Ssis<#=RootNode.ObjectTag["ComponentVersion"]#>, Culture=neutral, PublicKeyToken=e9fb56b2a63ffbab" UITypeEditor="">8</CustomProperty>
        <CustomProperty Name="RowCountSum" DataType="String" SupportsExpression="true"></CustomProperty>
    </CustomProperties>
    <Connections>
        <Connection Name="BimlCatalog" ConnectionName="BimlCatalog" />
    </Connections>
</CustomComponent>

<# CustomOutput.OutputPathName = @"CSPL - Discard Empty Rows.Default"; #>
```