---
sidebar_position: 8
title: Managing Sensitive Data
description: Documentation regarding sensitive information management in SSIS, Visual Studio, and extension points
tags: [BimlFlex, Walkthrough]
---
# Sensitive Information Management in SSIS

SSIS Projects and SQL Server SSIS Catalog deployments support configuring project parameters as sensitive. This allows sensitive information, like passwords, to be managed more securely in SSIS. While Microsoft generally recommends using account based security there are some scenarios and sources that require management of sensitive data. This document highlights the BimlFlex configuration required to maintain password security in SSIS.

SSIS Catalog only supports some attributes as sensitive, such as the connection password so setting everything to sensitive won't work.

The following Extension Points will inject the password as a sensitive parameter that can be matched to a sensitive environment variable in the SSIS catalog.

Note that a development password needs to be maintained in the metadata-defined connection string. This connection string is used by BimlFlex and BimlStudio before the build is complete, such as for importing metadata.

## Using sensitive attributes in Visual Studio

There are special considerations for opening SSIS projects with sensitive parameters in Visual Studio. The default build configuration uses the SSIS setting `Don't Save Sensitive` for sensitive attributes. This matches the way the SQL Server SSIS Catalog configures projects. This will result in a warning when opening the project in Visual Studio. It is possible to configure the project to use protection level `Encrypt Sensitive with User Key` instead. This allows the sensitive information to be encrypted with the current user key and that user can then open the project without warnings.

Configure the Attribute Key `ProtectionLevel` with the Attribute Value `EncryptSensitiveWithUserKey` for the relevant project in the metadata attributes to apply this setting.

## Project Parameter Extension Point

Create a `Project Parameter` Extension Point with the connection string and the sensitive password parameter as a separate project parameter.

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" target="<Project_Name>_Project" #>

<!-- Normal Connection String and a separate password parameter set as IsSensitive. Rename the target and parameter names to match the environment -->

<Parameter Name="ConnectionName_ConnectionString" DataType="String" IsRequired="true">Connection String Here (e.g. Data Source=loadlhost;Initial Catalog=MyDatabaseName;Provider=SQLNCLI11;User ID=MyUserName;)</Parameter>
<Parameter Name="ConnectionName_Password" DataType="String" IsRequired="true" IsSensitive="true">Sensitive Password here (e.g. MyPa$$w0rd)</Parameter>
```

## Connection Expression Extension Point

Create a `Connection Expression` Extension Point with the connection string and the sensitive password parameter as a separate project parameter.

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ConnectionExpression" target="<ConnectionName>"#>
<#@ property name="connection" type="BimlFlexModelWrapper.ConnectionsWrapper" #>

<!-- Target the specific connection, override the two relevant attributes. Rename the target and parameter names to match the environment -->

<Expressions>
    <Expression ExternalProperty="ConnectionString">@[$Project::ConnectionName_ConnectionString]</Expression>
    <Expression ExternalProperty="Password">@[$Project::ConnectionName_Password]</Expression>
</Expressions>
```
