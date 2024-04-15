---
uid: bimlflex-reference-documentation-connection-extension-points
title: BimlFlex Extension Points for Connection
summary: Documentation of functionality within BimlFlex for the Connection Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Connection Extension Points

The Connection category has the following available Extension Points defined.
  
## Connection Expression

Configure Expressions for a Connection. This only applies to SSIS deployments.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added. |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionExpression" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>


<!-- The below example is configuring an expression to an ODBC connection. Note that we are referencing Project Parameters that also need to be configured.-->
<Expressions>
	<Expression ExternalProperty="ConnectionString">"Dsn=SRC_ODBC;Uid=" + @[$Project::UserName] + ";Pwd=" + @[$Project::UserPassword] + ";"</Expression>
</Expressions>
```

## Connection Override

Configure a custom override for a Connection. This only applies to SSIS deployments. Using this Extension Point, a Connection can be (re)configured by using any BimlScript compatible code.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionOverride" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>


<!-- The below example is configuring an ODATA connection. -->
<CustomSsisConnection
	Name="Northwind"
	CreationName="ODATA"
	ObjectData="&lt;ODataConnectionManager UserName=&quot;&quot; Url=&quot;https://services.odata.org/V3/Northwind/Northwind.svc&quot; ConnectionString=&quot;Service Document Url=https://services.odata.org/V3/Northwind/Northwind.svc;&quot; MicrosoftOnlineServicesAuth=&quot;False&quot; AuthType=&quot;WindowsAuthentication&quot; /&gt;" />
```

## Database Post Deployment

Add Post Deployment Script to SSDT Project.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DatabasePostDeployment" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>

SET NOCOUNT ON;
```

## Database Pre Deployment

Add Pre Deployment Script to SSDT Project.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DatabasePreDeployment" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>

SET NOCOUNT ON;
```

## Database Properties

Add Database Properties to SSDT Project.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DatabaseProperties" #>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>


<ModelCollation>1033,CS</ModelCollation>
<AnsiWarnings>False</AnsiWarnings>
<AnsiPadding>False</AnsiPadding>
```

