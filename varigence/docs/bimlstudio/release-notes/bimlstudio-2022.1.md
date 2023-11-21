---
title: BimlStudio Release Notes 2022 R1
description: Release Notes for BimlStudio 2022 R1
---

# Release Notes

There have been significant changes implemented into BimlStudio 2022 R1 since the last major release, with a heavy focus on parity with Azure Data Factory.

## BimlStudio Improvements

### bimlc.exe

* Added support for improved and more robust product key caching.
* Alternate spelling of licenseKey (licenceKey) is now accepted as a command line argument.

### BimlFlex Projects

* Fixed bug where duplicating an Extension Point in BimlStudio created the duplicate in the wrong folder.
* Added the ability to connect to Azure SQL BimlFlex databases. Password, MFA, and Integrated connections now supported.
* Added the ability to deploy dacpacs directly to Azure SQL databases.

## Azure Data Factory

* Added support for `CustomEvents` triggers.
* Added `AzureCloudType` enum attribute to all Azure-based LinkedService nodes.
* Fixed bug where missing icons caused the app to crash for various LinkedServices.
* Added `EmitAsStringLiteral` property to *AstAdfDataflowParameterReferenceNodes*. This meta property is used to determine how values should be emitted.
* Added extended support for Dynamic Content so that parameters can be passed in to an ADF Pipeline or Mapping Data Flow and then evaluated at run time.
* Added connector support for:
    * AmazonS3Compatible as `LinkedService`, `Dataset`, `Source`
    * AzureDatabricksDeltaLake as `LinkedService`, `Dataset`, `Source`, `Sink`
    * MongoDbAtlas as `LinkedService`, `Dataset`, `Source`
    * OracleCloudStorage as `LinkedService`, `Dataset`, `Source`
    * AzureFileStorage as `Sink`

&nbsp;
* Added the following properties to `MachineLearningExecutePipeline` activities:

| Name | Property Type |  Data Type | Description |
|----------|:-------------:|:------:| -----|
| *MlPipelineEndpointId* | Attribute | String | The ID of the published ML pipeline endpoint. |
| *Version* | Attribute | String | The version of the endpoint.|

&nbsp;
&nbsp;

* Added the following property to `Custom` activities:

| Name | Property Type |  Data Type | Description |
|----------|:-------------:|:------:| -----|
| *AutoUserSpecification* | Attribute | String | Elevation level and scope for the user, default is nonadmin task. |

&nbsp;
&nbsp;

* Added the following properties to `SapOpenHub` LinkedServices:

| Name | Property Type |  Data Type | Description |
|----------|:-------------:|:------:| -----|
| *SystemId* | Attribute | String | SystemID of the SAP system where the table is located. |
| *MessageServer* | Attribute | String | The hostname of the SAP Message Server.|
| *MessageServerService* | Attribute | String | The service name or port number of the Message Server.|
| *LogonGroup* | Attribute | String | The Logon Group name for the SAP System.|

### Mapping Data Flow Support

* Added the following Inline Dataset Source support:
    * `Avro`
    * `Azure MySQL`
    * `Azure PostgreSQL`
    * `Azure SQL`
    * `Azure SQL MI`
    * `Delimited`
    * `Delta`
    * `Excel`
    * `JSON`
    * `Orc`
    * `Snowflake`
    * `SQL Server`
    * `Synapse`
    * `XML`

&nbsp;
* Added the following Inline Dataset Sink support:
    * `Avro`
    * `Azure MySQL`
    * `Azure PostgreSQL`
    * `Azure SQL`
    * `Azure SQL MI`
    * `Delimited`
    * `Delta`
    * `JSON`
    * `Orc`
    * `Snowflake`
    * `SQL Server`
    * `Synapse`

&nbsp;

* Added support for the following properties for Dataflow `Lookup` Transformations:

| Name | Property Type |  Data Type | Description |
|----------|:-------------:|:------:| -----|
| *MatchMultipleRows* |  Attribute | Bool | This specifies whether to return all matched rows on a lookup. |
| *BroadcastAction* | Attribute | BroadcastActionEnum | This specifies how to handle broadcasting. When using Fixed, make sure you specify if you want the input or lookup stream to be broadcast.|
| *MatchOn* | Attribute | String | Specifies matching behavior in the lookup stream. Only valid when MatchMultipleRows is set to false.|
| *SortConditions* | Child | Collection of SortColumnNodes | This is a collection of conditions that will be used for sorting.|

&nbsp;

* Added the following properties to `ExecuteDataflow` activities:

| Name | Property Type |  Data Type | Description |
|----------|:-------------:|:------:| -----|
| *ContinueOnError* | Attribute | Bool | Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. |
| *RunConcurrently* | Attribute | Bool | Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently.|
| *TraceLevel* | Attribute | TraceLevelEnum | Trace level setting used for data flow monitoring output. Supported values are: `coarse`, `fine`, and `none`.|

&nbsp;

* Added *LogicalDisplayFolder* property to dataflow nodes.
* Added the following to the *FormatSettings* property of Dataflow source nodes:
    * `TarGZipSettings`
    * `TarSettings`
    * `XmlSettings`

## AzureCosmosDB

* Added the following properties to `AzureCosmosDb` source nodes:

| Name | Property Type |  Data Type | Description |
|----------|:-------------:|:------:| -----|
| *DetectDateTime* | Attribute | Bool | Whether detect primitive values as datetime values.|
| *PageSize* | Attribute | Int | Specifies the allowed page size.|

&nbsp;
&nbsp;

* Added the following properties to `AzureCosmosDb` LinkedServices:

| Name | Property Type |  Data Type | Description |
|----------|:-------------:|:------:| -----|
| *Tenant* | Attribute | String | Tenant associated with service principal account.|
| *ServicePrincipalCredentialType* | Attribute | CredentialTypeEnum | Specifies what type of service principal credential will be used for authentication.|
| *ServicePrincipalId* | Attribute | String | Specifies the service principal ID to be used during authentication. |
| *ServicePrincipalCredential* |  Attribute | String | Specifies the service principal credential to be used during authentication. (Also supports *ServicePrincipalCredentialKVS*). |

* Removed the following properties from `AzureCosmosDb` source nodes:
    * *NestingSeparator*
    * *WriteBehavior*
