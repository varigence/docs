---
uid: bimlflex-source-odata
title: BimlFlex OData Source
---
# BimlFlex OData Source

BimlFlex can use custom source components, such as OData to load data from bespoke sources

## Getting Started

OData is loaded through BimlFlex by adding a custom source connection and a custom source definition that matches the OData source format

This source is available for Projects using the **SSIS: Source -> Target** Integration Template.

The example below uses the publicly available Northwind OData v3 data source from [https://www.odata.org/odata-services/](https://www.odata.org/odata-services/)

## Metadata

To control the load of OData source data, use the following metadata settings

Start with Sample Metadata Set 01 - MSSQL Starting Point

### Connection

Add a new connection to the OData Source using the Connection Type **Script Source** and System Type **Microsoft SQL Server**

Sample Connection:

| Attribute         | Value |
| ----------------- | ----- |
| Name              | NWND_SRC |
| Integration Stage | Source System |
| Connection Type   | Script Source |
| System Type       | Microsoft SQL Server |
| Connection String | Embedded in the Connection in this example |
| DataBase          | NWND_SRC |
| Record Source     | nwnd |
| Persist History   | true |

The actual definition of this connection will be defined using the Extension Point below

### Batches and Project

Add a separate Batch and a separate Project for the OData load. Set the OData Connection as the source for the Project.

Batch Name: EXT_NWND_SRC

Project Name: EXT_NWND_SRC

### Object and Columns

Add the Object and Column information through the BimlFlex App.

Object Name:

* Products

<!-- * Suppliers TODO: review -->

Columns added as described in the OData service definition, with correct data types.

### Connection Definition Extension Point

Connection specification. Uses an Extension Point to connect to the OData Source.

This ConnectionOverride Extension Point adds the connection Object for the OData source.

Source, authentication etc. are all embedded in the ObjectData, for configurable options, add project parameters and inject them here.
This connection connects to odata.org to access a publicly available data set using OData v3 and the Northwind sample source

Sample Extension Point: `NWND_SRC_ConnectionOverride.biml`

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionOverride" target="NWND_SRC" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>

<!--
This ConnectionOverride Extension Point adds the connection Object for the OData source.
Source, authentication etc are all embedded in the ObjectData, for configurable options, add project parameters and inject them here.
This connection connects to odata.org to access a publicly available data set using Odata v3 and the Northwind sample source
-->

<CustomSsisConnection
    Name="NWND_SRC"
    CreationName="ODATA"
    ObjectData="&lt;ODataConnectionManager UserName=&quot;&quot; Url=&quot;https://services.odata.org/V3/Northwind/Northwind.svc&quot; ConnectionString=&quot;Service Document Url=https://services.odata.org/V3/Northwind/Northwind.svc;&quot; MicrosoftOnlineServicesAuth=&quot;False&quot; AuthType=&quot;WindowsAuthentication&quot; /&gt;"
/>
```

### Object Format Definition Extension Point

Sample Extension Point: `EXT_NWND_SRC_SourceOverride.biml`

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="SourceOverride" target="EXT_NWND_SRC"#>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>

<!--
This SourceOverride Extension Point dynamically creates the source component for the OData Objects based on the metadata.
The Object name is used as the CollectionName for the source and the columns are dynamically added to the definition.
Target is set to the Batch name and inheritance is switched on to apply to all objects in the Batch
-->

<#
CustomOutput.ObjectInherit = true;
TableObject sourceTable = new TableObject(table, table.Connection.RelatedItem.IntegrationStage, "SRC");
#>

<CustomComponent Name="OData Source" ComponentTypeName="Microsoft.OData" ContactInfo="OData Source Component;Microsoft Corporation; Microsoft SQL Server; © Microsoft Corporation; All Rights Reserved; http://www.microsoft.com/sql/support;0" UsesDispositions="true">
    <CustomProperties>
        <CustomProperty Name="CollectionName" DataType="String" SupportsExpression="true" Description="Name of the collection to be retrieved from the service."><#=sourceTable.ObjectName #></CustomProperty>
        <CustomProperty Name="DefaultStringLength" DataType="Int32" Description="The default maximum length for a string that has no maxlength specified in the schema.">255</CustomProperty>
        <CustomProperty Name="Query" DataType="String" SupportsExpression="true" Description="Query in the url."></CustomProperty>
        <CustomProperty Name="ResourcePath" DataType="String" SupportsExpression="true" Description="Resource path of the collection to be retrieved from the service."></CustomProperty>
        <CustomProperty Name="UseResourcePath" DataType="Boolean" SupportsExpression="true" Description="When set to true, use the resource path as requested collection; otherwise, use the collection name.">false</CustomProperty>
    </CustomProperties>
    <OutputPaths>
        <OutputPath Name="Output">
            <OutputColumns>
                <# foreach (var col in sourceTable.Columns.Where(c => c.IsDerived=="N")) { #>
                <OutputColumn Name="<#=col.ColumnName #>" <#=col.GetDataTypeBiml() #> ExternalMetadataColumnName="<#=col.ColumnName #>" ErrorOrTruncationOperation="Conversion" ErrorRowDisposition="FailComponent" TruncationRowDisposition="FailComponent" />
                <# } #>
            </OutputColumns>
            <ExternalColumns>
                <# foreach (var col in sourceTable.Columns.Where(c => c.IsDerived=="N")) { #>
                <ExternalColumn Name="<#=col.ColumnName #>"  <#=col.GetDataTypeBiml() #> />
                <# } #>
            </ExternalColumns>
        </OutputPath>
        <OutputPath Name="Error output" IsErrorOutput="true">
            <OutputColumns>
                <# foreach (var col in sourceTable.Columns.Where(c => c.IsDerived=="N")) { #>
                <OutputColumn Name="<#=col.ColumnName #>" <#=col.GetDataTypeBiml() #> />
                <# } #>
            </OutputColumns>
        </OutputPath>
    </OutputPaths>
    <Connections>
        <Connection Name="Connection" ConnectionName="<#=sourceTable.ConnectionName #>" />
    </Connections>
    <# CustomOutput.OutputPathName = @"OData Source.Output"; #>
</CustomComponent>
```

## More Information

Certain machines might get errors like the following running this sample:

OData Source Error: Cannot acquire a managed connection from the run-time connection manager.
Error: OData Source failed validation and returned error code 0xC020801F.

While there are several prerequisites and configurations needed based on the SSIS and Visual Studio version, such as if the OData components are pre-installed or not, these error messages might also stem from a mismatch in security configurations for the protocol used.

refer to the recommendations in this Microsoft documentation page for more information:

[TLS Issue with SSIS package while accessing OData Source like Dynamics AX Online](https://docs.microsoft.com/en-au/archive/blogs/dataaccesstechnologies/tls-issue-with-ssis-package-while-accessing-odata-source-like-dynamics-ax-online)
