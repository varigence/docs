---
uid: bimlflex-app-reference-documentation-Configurations
title: BimlFlex App Definition for Configurations
summary: Documentation of functionality within BimlFlex for Configurations
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Configurations

The BimlFlex [`Configurations`](xref:configurations) allow for the creation and management of custom attributes which can assist in driving the behavior of the BimlFlex output.

## Overview
  
| Property | Description |
| --------- | ----------- |
|`ConfigurationKey` | The unique name of the selected configuration.|
|`ConfigurationValue` | This column contains the value to be returned when the configuration is accessed by the framework. This attribute allows you to define naming conventions custom to your environment.|
|`ConfigurationDataType` | The definition of the data type for a configuration being used in the solution output. Here you should enter the data type using the following format "DATATYPENAME".|
|`Length` | |
|`Precision` | |
|`Scale` | |
|`ConfigurationDefault` | The value that will used by the Configuration if no Configuration Value has been specified.|
|`ConfigurationGrouping` | The category the configuration belongs to.|
|`ConfigurationOrder` | An ordinal sequence for the Configuration.|
|`SqlSourceExpression` | SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements.<br><br>Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|`SqlTargetExpression` | SQL expression for this column is used to extend target queries. Generally used for source type casting and case statements.<br><br>Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|`SsisDataflowExpression` | This value specifies the expression used to calculate the value of the derived column. The SSIS expression syntax is used. Utilize the same syntax as the Derived Column.|
|`AdfCopyExpression` | This value specifies the expression used to calculate the value of the derived column. The ADF Copy Activity expression syntax is used. Utilize the same syntax as the Derived Column.|
|`AdfDataflowExpression` | This value specifies the expression used to calculate the value of the derived column. The ADF Dataflow expression syntax is used. Utilize the same syntax as the Derived Column.|
|`IsNullable` | This column allows to you define if the configuration value is able to be null without throwing an error when building BimlFlex solution. To make the configuration nullable simply enter "Y" otherwise "N" will set the configuration to be non-nullable.|
|`Description` | Option annotations for the Configuration.|

## References
  
| Property | Description |
| --------- | ----------- |
|`CustomerUID` | Reference to the Customer that this Configuration belongs to.|
|`VersionUID` | Reference to the Version that this Configuration belongs to.|
|`DataTypeId` | |
|`LandingAttributeId` | The landing attribute is used to control whether a configuration is applied to a landing environment of the solution architecture. Simply enter the name of the annotation to use when being referenced in the framework.|
|`StagingAttributeId` | The staging attribute is used to control whether a configuration is applied to a staging environment of the solution architecture. Simply enter the name of the annotation to use when being referenced in the framework.|
|`PersistentStagingAttributeId` | The staging attribute is used to control whether a configuration is applied to a staging environment of the solution architecture. Simply enter the name of the annotation to use when being referenced in the framework.|
|`HubAttributeId` | The hub attribute is used to control whether a configuration is applied to hubs when generating a data vault architecture. Simply enter the name of the annotation to use when being referenced in the framework.|
|`SatelliteAttributeId` | The satellite attribute is used to control when a configuration is applied to Satellites when generating a data vault architecture. Simply enter the name of the annotation to use when being referenced in the framework.|
|`LinkAttributeId` | The link attribute is used to control when a configuration is applied to links when generating a data vault architecture. Simply enter the name of the annotation to use when being referenced in the framework.|
|`DimAttributeId` | The dim attribute is used to control when a configuration is applied to dimensions when generating a data warehouse architecture. Simply enter the name of the annotation to use when being referenced in the framework.|
|`FactAttributeId` | The fact attribute is used to control when a configuration is applied to facts when generating a data warehouse architecture. Simply enter the name of the annotation to use when being referenced in the framework.|

