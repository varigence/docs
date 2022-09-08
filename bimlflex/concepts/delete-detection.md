---
uid: bimlflex-concepts-delete-detection
title: BimlFlex Delete Detection
summary: Documentation on BimlFlex delete detection mechanism for detection of hard deleted keys from a source system
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Delete Detection

[!include[DeleteDetection](_incl-header-delete-detection.md)]

## Implementing Delete Detection

### Enabling Delete Detection

At a high level, Delete Detection can be implemented in two ways:

* Enabling the **Enable Delete Detection** (global), and *exclude* **Projects** and / or **Objects** using the **Overrides**. Or alternatively,
* Disabling the **Enable Delete Detection** setting and *include* the **Projects** and / or **Objects** that should have delete detection applied

Enabling Delete Detection allows the creation of the Delete Detection load process for the in-scope objects.

Additional settings control if the identified delete rows are loaded into PSA and Data Vault targets. Unless a separate, bespoke, process is used for delete record processing it is recommended to allow BimlFlex to autogenerate the process.

* Apply Delete Detection PSA
* Apply Delete Detection RDV

Enabling the above 'Apply' patterns will create ('ELT' / 'load') Stored Procedures and call these once the source extract and delete detection has finished.

### Naming Conventions

Enabling delete detection will create new Landing and Staging Area tables that are dedicated to delete detection. By default, these will be named as `<RecordSourceAsSchema>.land_<TableName>_DEL` and `<RecordSourceAsSchema>.<TableName>_DEL`.

The name used is controlled by the following settings. These settings are part of the [**Staging Naming**](xref:bimlflex-app-reference-documentation-settings-index#staging-naming) settings group.

* The [**Append Name Landing**](xref:bimlflex-app-reference-documentation-setting-AppendNameLanding) setting.  The default value is: `land`.  This appends to the Delete **Object** name
* The [**Delete Object Name Pattern**](xref:bimlflex-app-reference-documentation-setting-DeleteObjectNamePattern) setting.  The default value is: `@@this_DEL`.  This pattern creates the **Object** name, using the `@@this` shorthand code with the `_DEL` suffix
* The [**Delete Schema Name Pattern**](xref:bimlflex-app-reference-documentation-setting-DeleteSchemaNamePattern).  The default value is `@@rs`.  The `@@rs` code is the Record Source as defined in the **Connection** to which the object belongs

### Capturing Delete Detection Outcomes

The metadata column for the delete specifications is defined through the [**Row Change Type**](xref:bimlflex-metadata-configurations#rowchangetype) **Configuration**.

This configuration can be customized so that the delete information can be derived as needed. For example, it is possible to reuse a source delete flag for data sets that provide this status information. In other cases, the way the delete record is recorded can be defined.

The Row Change Type works the same way as any other [**Configuration**](xref:bimlflex-configuration-editor) in BimlFlex, and to an extent this is configurable in BimlFlex. The defaults are:

* `I` for a newly detected key / record. This is the default value for the Row Change Type
* `U` for a detected update related to an existing key / record
* `D` for a detected delete

By default, the **Row Change Type** is not applied to any specific area. When global settings to enable delete detection are used, the configuration can be defined to apply to certain areas of the solution.

If specific objects are configured for delete detection these will need to be accompanied by a specific **Row Change Type** configuration.

> [!IMPORTANT]
> For delete detection to work correctly, the **Row Change Type** configuration must be applied to the object that has been configured for delete detection.

### Overriding Delete Patterns Using Extension Points

When using the Apply Delete Detection function it is possible to also use the **Delete Detect Apply Psa** and **Delete Detect Apply Rdv Override** Extension Points to override the generated apply stored procedure.
