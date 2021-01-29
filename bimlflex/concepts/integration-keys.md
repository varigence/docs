---
uid: bimlflex-integration-keys-and-relationships
title: BimlFlex Integration Keys and Relationships
summary: Data Vault management of integration keys, relationships, business keys, examples, and how to accelerate in the Data Vault Accelerator
product: BimlFlex
type: Conceptual
---
# Integration Keys and Relationships

Integration Keys are a core concept in Data Vault modeling and allow the modeler to focus on defining entities and relationships based on the business process focused keys rather than the technical keys from the source system. This allows easier cross-system integration in the Data Vault.

The video starts with a short overview of the Integration Key concept and introduces the more pragmatic Integration Key concept as an alternative. Enterprise-Wide Business Keys that uniquely and distinctly identifies an entity or process are rare in real-world scenarios. Focusing on defining keys that are suitable for the Data Warehouse enables an agile implementation approach.

The BimlFlex development workflow allows the modeler to import metadata from a source system and automatically derive Integration Keys and relationships. Once these are defined and any other required metadata manipulations are defined it is possible to use BimlStudio to build the code required for the Data Warehouse implementation.

## Business Key or Integration Key

While the Enterprise-Wide Business Key is the design goal for a Data Vault based model it is rare to find these directly available in existing source systems. For an agile, pragmatic approach it is possible to instead focus on defining Integration Keys. These keys allow cross-system integration into the Data Vault. They allow modeling to ensure that no false-positive matches are created between systems and allow a later matching process using Same-As Links (`SAL`).

Once these keys are defined and available it is possible to match entities using rules or Master Data Management.

## Practical example of Integration Key matching or collisions

When different sources use the same keys or codes that have the same values but different meanings they are not possible to directly use as Integration Keys since that will implicitly match records that don't match the same business entity. BimlFlex allows the modeler to add the connection record source code to the key so that they uniquely identify the entity. This is done using the BimlFlex function `FlexToBk()` where BimlFlex automatically builds a concatenated string representation of the Integration Key from source fields and codes. In the case of a source having a ProductID key, the expression `FlexToBk(@@rs, ProductID)` will build a unique key for the Data Vault.

BimlFlex implements a single key modeling approach. Any Integration Key in the Data Warehouse is a single string representation of any source attribute. For keys with multiple parts they are concatenated using the configurable concatenator character using the `FlexToBk()` function. This allows any source system using any configuration to populate the Core Business Concept with values. As this is the only way to guarantee future integration with unknown sources it is enforced throughout BimlFlex. All attributes that are used to build the Integration Key are also by default stored in their source formats in the default Satellites.

## Object Relationships and Metadata References

References are used by BimlFlex to accelerate and build Links for Data Vault. They allow relationships to be defined in metadata. A column defined in the metadata can reference another objects Primary Key. These are used by BimlFlex to accelerate and build Links for Data Vault implementations.

A reference can only refer to another tables Primary Key. The Data Vault accelerator only builds a Data Vault based on the Integration Keys. In BimlFlex this means that the metadata uses the Integration Key column as both the Primary Key definition and the Integration Key definition for an Object.

The Import Metadata dialog can create Integration Keys and redefine the source relationships to Integration Keys relationships automatically. It is also possible to create and define them manually using the `Create Integration Key` function and the `Reference Table` and `Reference Column Name` fields.

## Preview and Accelerate Data Vault

Once the Integration Keys and relationships are defined in the metadata for the source system it is possible to use the Data Vault Accelerator in BimlFlex to preview and build the Data Vault.

Define the Accelerator options and preview the Data Vault to review the resulting model. refine the metadata and update the preview for any required tweaks and publish the metadata once it matches the required destination logical model.

## Watch the Webinar

![Building Integration Keys for Data Vault](https://www.youtube.com/watch?v=frzWIAW-Mhs?rel=0&autoplay=0)
