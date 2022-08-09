---
uid: bimlflex-metadata-static-values-configuration-attribute-types
title: Configuration Attribute Types
summary: Documentation of the management of metadata values
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
<!--
Configuration Attribute Types
Header not included because it is used in different ways
-->
**Configuration Attribute Types** are the allowed values to configure the attribution of a **Configuration** to a specific area of the data solution architecture. This is defined using the [**Configuration Editor**](xref:bimlflex-configuration-editor) and governs the location in the data logistics process for which the **Configuration** is applied.

Each configuration property will allow a list of values to be selected, which impacts how the configuration is applied to the in-scope objects.

| Attribute Type  | Code | Description                          |
| --------------- | ---- | ------------------------------------ |
| Ignore          | IGN  | Ignore the configuration for the assigned area.|
| Derived         | DER  | Derive the configuration using the value specified in the appropriate *Expression* column. Which expression column will be used depends on the **Integration Template** used.|
| Source          | SRC  | Use the value as is available from the source object. This column needs to exist in the source and have the same name as specified by the *Configuration Value* column for the configuration*in the source object. |
| Default         | DEF  | Use the value specified in the `Configuration Default` field for the **Configuration**.|
| Target          | TGT  | Defined by the Target.|
| Hash            | HSH  | Apply hashing logic when loading the value.|
