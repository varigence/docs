---
title: BimlFlex App Definition for Connection
description: Documentation of functionality within BimlFlex for the Connection Extension Point category
tags: [BimlFlex, Reference]
---

# Connection Extension Points

The Connection category has the following available Extension Points defined.
  
## Connection Override

Configure a custom override for a Connection. This only applies to SSIS deployments. Using this Extension Point, a Connection can be (re)configured by using any BimlScript compatible code.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionOverride" #>`
`<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.AstRootNode_Connections -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is configuring an ODATA connection. -->
<CustomSsisConnection
	Name="Northwind"
	CreationName="ODATA"
	ObjectData="&lt;ODataConnectionManager UserName=&quot;&quot; Url=&quot;https://services.odata.org/V3/Northwind/Northwind.svc&quot; ConnectionString=&quot;Service Document Url=https://services.odata.org/V3/Northwind/Northwind.svc;&quot; MicrosoftOnlineServicesAuth=&quot;False&quot; AuthType=&quot;WindowsAuthentication&quot; /&gt;" />
```

## Connection Expression

Configure Expressions for a Connection. This only applies to SSIS deployments.

### Parameters

| <div style="width:150px">Name</div> | Type | Description |
| --------- | ----------- |
connection | BimlFlexModelWrapper.ConnectionsWrapper | Contains all information related to the connection to which the connection expression will be added. |

### Template

```biml
`<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionExpression" #>`
`<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>`

<!-- You can find more details on the Varigence website. https://docs.varigence.com/biml/language-reference/Varigence.Languages.Biml.Task.AstPropertyExpressionNode -->
<!-- For examples and additional resources, please also refer to http://bimlscript.com -->
<!-- The below example is configuring an expression to an ODBC connection. Note that we are referencing Project Parameters that also need to be configured.-->
<Expressions>
	<Expression ExternalProperty="ConnectionString">"Dsn=SRC_ODBC;Uid=" + @[$Project::UserName] + ";Pwd=" + @[$Project::UserPassword] + ";"</Expression>
</Expressions>
```

