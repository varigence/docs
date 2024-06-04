---
uid: bimlflex-reference-documentation-global-extensionpoints
title: BimlFlex Extension Points for Global
summary: Documentation of functionality within BimlFlex for the Global Extension Point category
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Global Extension Points

The Global category has the following available Extension Points defined.
  
## BimlFlex Global Settings

Internal Global Extension Point that control environment settings. This has been superseded by built-in BimlStudio features.

### Outputs

| <div style="width:150px">Name</div> | Type | Description |
| :--------- | :----------- | :----------- |
| CustomerUID | GUID | The Customer UID to use for the metadata connection |
| Version | String | The Version Name to use for the metadata connection |
| Server | String | The Server Name to use for the metadata connection |
| Database | String | The Database Name of the metadata database |
| UseWindowsAuthentication | Boolean | Legacy for backward compatibility should the metadata connection use Windows Authentication |
| Authentication | String | SQL Server authentication method to connect to metadata database. |
| Provider | String | Connection Provider to use |
| UserId | String | SQL Authentication User Id |
| Password | String | SQL Authentication Password |
| IsUserConnectionMode | Boolean | Should User Connection Mode be used |
| IsUserMode | Boolean | Should User Mode be used |
| IsQuickParse | Boolean | Should Quick Parse be used |

### Template

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="GlobalSettings" #>
<#
CustomOutput.CustomerUID = GetBundleSetting("BimlFlex.bimlb", null, "CustomerUID");
CustomOutput.Version = GetBundleSetting("BimlFlex.bimlb", null, "Version");
CustomOutput.Server = GetBundleSetting("BimlFlex.bimlb", null, "Server");
CustomOutput.Database= GetBundleSetting("BimlFlex.bimlb", null, "Database");
CustomOutput.Authentication = GetBundleSetting("BimlFlex.bimlb", null, "Authentication");
CustomOutput.Provider = GetBundleSetting("BimlFlex.bimlb", null, "Provider");
CustomOutput.UserId = GetBundleSetting("BimlFlex.bimlb", null, "UserId");
CustomOutput.Password = GetBundleSetting("BimlFlex.bimlb", null, "Password");
CustomOutput.IsUserConnectionMode = GetBundleSetting("BimlFlex.bimlb", null, "IsUserConnectionMode");
CustomOutput.IsUserMode = GetBundleSetting("BimlFlex.bimlb", null, "IsUserMode");
CustomOutput.IsQuickParse = GetBundleSetting("BimlFlex.bimlb", null, "IsQuickParse");
#>
```

