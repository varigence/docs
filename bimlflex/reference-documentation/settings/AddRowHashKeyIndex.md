---
uid: bimlflex-app-reference-documentation-setting-AddRowHashKeyIndex
title: BimlFlex Settings Definition for AddRowHashKeyIndex
summary: Documentation of settings option within BimlFlex for AddRowHashKeyIndex
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Add Row Hash Key Index

Enable to add a unique, non-clustered constraint on the FlexRowHashKey and EffectiveFromDate columns in staging tables. The FlexRowHashKey is the hash value covering the Integration Key.



Example:



CONSTRAINT [UK_\<schema\>_\<table\>_FlexRowHashKey] UNIQUE NONCLUSTERED<br/>(<br/>  [FlexRowHashKey] Asc,[FlexRowEffectiveFromDate] Asc) WITH (PAD_INDEX = OFF,IGNORE_DUP_KEY = OFF) ON "default"<br/>)

Notes:

* This setting is part of the *Staging* settings category.
* The default value for this setting is `N`.
