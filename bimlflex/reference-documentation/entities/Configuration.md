---
uid: bimlflex-app-reference-documentation-Configurations
title: BimlFlex App Definition for Configurations
summary: Documentation of functionality within BimlFlex for Configurations
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Configurations

The BimlFlex [**Configurations**](xref:bimlflex-configurations) allow for the creation and management of custom attributes which can assist in driving the behavior of the BimlFlex output.

## Overview
  
| Property | Description |
| --------- | ----------- |
|Configuration Key | The unique name of the selected configuration.|
|Configuration Value | This column contains the value to be returned when the Configuration is accessed by the framework. This attribute allows you to define naming conventions custom to your environment.|
|Configuration Data Type | The definition of the data type for a Configuration being used in the solution output. Here you should enter the data type using the following format "DATATYPENAME".|
|Length | The length of the Configuration Column.|
|Precision | The precision of the Configuration Column.|
|Scale | The scale of the Configuration Column.|
|ConfigurationDefault | The value that will used by the Configuration if no Configuration Value has been specified.|
|Configuration Group | The category the Configuration belongs to.|
|Configuration Order | The ordinal sequence for the Configuration.|
|SQL Source Expression | SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements.<br><br>Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|SQL Target Expression | SQL expression for this column is used to extend target queries. Generally used for source type casting and case statements.<br><br>Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|SSIS Dataflow Expression | This value specifies the expression used to calculate the value of the derived column. The SSIS expression syntax is used. Utilize the same syntax as the Derived Column.|
|ADF Copy Expression | This value specifies the expression used to calculate the value of the derived column. The ADF Copy Activity expression syntax is used. Utilize the same syntax as the Derived Column.|
|ADF Dataflow Expression | This value specifies the expression used to calculate the value of the derived column. The ADF Dataflow expression syntax is used. Utilize the same syntax as the Derived Column.|
|Is Nullable | This column allows to you define if the configuration value is able to be null without throwing an error when building BimlFlex solution. To make the configuration nullable simply enter "Y" otherwise "N" will set the configuration to be non-nullable.|
|Description | Option annotations for the Configuration.|

## References
  
| Property | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this Configuration belongs to.|
|Version | Reference to the Version that this Configuration belongs to.|
|DataTypeId | The data type of the Configuration Column.|
|Landing Attribute | The Landing Attribute is used to control whether a Configuration is applied to a landing environment of the solution architecture.|
|Staging Attribute | The Staging Attribute is used to control whether a Configuration is applied to a staging environment of the solution architecture.|
|Persistent Staging Attribute | The Persistent Staging Attribute is used to control whether a Configuration is applied to a staging environment of the solution architecture.|
|Hub Attribute | The Hub Attribute is used to control whether a Configuration is applied to Hubs when generating a Data Vault solution.|
|Satellite Attribute | The Satellite Attribute is used to control when a Configuration is applied to Satellites when generating a Data Vault solution.|
|Link Attribute | The Link Attribute is used to control when a Configuration is applied to Links when generating a Data Vault solution.|
|Dimension Attribute | The Dimension Attribute is used to control when a Configuration is applied to Dimensions when generating a data warehouse solution.|
|Fact Attribute | The Fact Attribute is used to control when a Configuration is applied to Facts when generating a data warehouse solution.|

