---
uid: bimlflex-app-reference-documentation-Columns
title: BimlFlex App Definition for Columns
summary: Documentation of functionality within BimlFlex for Columns
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Columns

The BimlFlex [`Column`](xref:columns) concept contains the components of an [Column](xref:objects).Columns define the detailed information to transform and map data from source to target.<br><br>Columns within BimlFlex are displayed in a hierarchical tree view on the left side navigation menu. The total number of Columns within a Project will be displayed next to the Project name in parentheses. The total number of Columns within an individual Object will similarly be displayed next to the Object name. 
	<br><br>Selecting a Project will display a secondary list of all Columns within, organized by Object.
The user may navigate to any Column by selecting it from the displayed list.

## Overview
  
| Property | Description |
| --------- | ----------- |
|`Name` | Name of the Column within the Object. For any column other than the source we recommend using CamelCase. For ORACLE we recommend UPPERCASE separated by underscores.|
|`Length` | This value specifies the length parameter for the column data type. Set to -1 to indicate MAX length.<br><br>This property applies only to column types that support a length specification, such as String and Binary types.|
|`Precision` | This value specifies the precision parameter for the column data type. Precision is the number of digits stored for a numeric value. This property applies only to column types that support precision, such as Decimal.|
|`Scale` | This value specifies the scale parameter for the column data type. Scale is the number of digits to the right of the decimal point in a numeric value. This property applies only to column types that support precision, such as Decimal.|
|`Ordinal` | This value specifies the length parameter for the column type associated with this column. Set to -1 to indicate MAX length.<br><br>This property applies only to column types that support a length specification, such as String and Binary types.|
|`IsPrimaryKey` | |
|`IsIntegrationKey` | |
|`IsSourceKey` | |
|`IsIdentity` | |
|`IsNullable` | |
|`IsNotPersistent` | |
|`ExcludeFromModel` | |
|`BusinessName` | |
|`BusinessGrouping` | |
|`BusinessReference` | |
|`DefaultValue` | |
|`SqlSourceExpression` | |
|`SqlTargetExpression` | |
|`DataflowExpression` | |
|`DataflowDataType` | |
|`IsDerived` | |
|`SolveOrder` | |
|`ColumnAlias` | |
|`FriendlyName` | |
|`Description` | |
|`Comments` | |

## References
  
| Property | Description |
| --------- | ----------- |
|`ObjectUID` | |
|`CustomerUID` | Reference to the Customer that this Column belongs to.|
|`VersionUID` | Reference to the Version that this Column belongs to.|
|`DataTypeId` | |
|`ChangeTypeId` | |
|`DataTypeMappingUID` | |
|`ReferenceColumnUID` | |
|`TargetColumnUID` | |
|`BusinessAttributeUID` | |

