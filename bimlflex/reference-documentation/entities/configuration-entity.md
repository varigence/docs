---
uid: bimlflex-reference-documentation-configuration-entity
title: BimlFlex Definition for Configurations
summary: Documentation of functionality within BimlFlex for Configurations
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Configurations

The BimlFlex [**Configurations**](xref:bimlflex-configuration-editor) allow for the creation and management of custom attributes which can assist in driving the behavior of the BimlFlex output.

## Overview
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Configuration Key | The unique name of the selected configuration.|
|Configuration Value | This column contains the value to be returned when the configuration is accessed by the framework. This attribute allows you to define naming conventions custom to your environment.|
|Configuration Data Type | The definition of the data type for a configuration being used in the solution output. Here you should enter the data type using the following format "DATATYPENAME".|
|Length | The length of the column that is part of the configuration.|
|Precision | The precision of the column that is part of the configuration.|
|Scale | The scale of the column that is part of the configuration.|
|Configuration Default | The value that will used by the configuration if no **Configuration Value** has been specified.|
|Configuration Group | The category the configuration belongs to.|
|Configuration Order | The ordinal sequence for the configuration.|
|Sql Source Expression | SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements.<br><br>Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|Sql Target Expression | SQL expression for this column is used to extend target queries. Generally used for source type casting and case statements.<br><br>Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|Pushdown Source Expression | Pushdown Extraction SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements.<br><br>Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|Pushdown Target Expression | Pushdown Extraction SQL expression for this column is used to extend target queries. Generally used for source type casting and case statements.<br><br>Example: `CONVERT(VARCHAR(27), @@this, 121)`|
|Ssis Dataflow Expression | This value specifies the expression used to calculate the value of the derived column. The SSIS expression syntax is used. Utilize the same syntax as the Derived Column.|
|Adf Copy Expression | This value specifies the expression used to calculate the value of the derived column. The ADF Copy Activity expression syntax is used. Utilize the same syntax as the Derived Column.|
|Adf Dataflow Expression | This value specifies the expression used to calculate the value of the derived column. The ADF Dataflow expression syntax is used. Utilize the same syntax as the Derived Column.|
|Nullable | This column allows to you define if the configuration value is allowed to be null.|
|Description | Optional annotations for the configuration.|
|Internal | |

## References
  
| <div style="width:200px">Property</div> | Description |
| --------- | ----------- |
|Customer | Reference to the Customer that this configuration belongs to.|
|Version | Reference to the Version that this configuration belongs to.|
|Data Type | The data type of the column that is part of the configuration.|
|Landing Attribute | The Landing Attribute is used to control if a configuration is applied to the landing environment of the solution architecture.|
|Staging Attribute | The Staging Attribute is used to control if a configuration is applied to the staging environment of the solution architecture.|
|Persistent Staging Attribute | The Persistent Staging Attribute is used to control if a configuration is applied to a Persistent Staging component of the solution architecture.|
|Hub Attribute | The Hub Attribute is used to control if a configuration is applied to Data Vault Hub entities when generating a data solution that contains a Data Vault.|
|Satellite Attribute | The Satellite Attribute is used to control if a configuration is applied to Data Vault Satellite entities when generating a data solution that contains a Data Vault.|
|Link Attribute | The Link Attribute is used to control if a configuration is applied to Data Vault Link entities when generating a data solution that contains a Data Vault.|
|Dim Attribute | The Dimension Attribute is used to control when a configuration is applied to Dimension Tables when generating a data solution that contains Data Marts.|
|Fact Attribute | The Fact Attribute is used to control if a configuration is applied to Fact Tables when generating a data solution that contains Data Marts.|

