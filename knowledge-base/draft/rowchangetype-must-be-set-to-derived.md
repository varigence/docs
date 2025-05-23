---
uid: kb-rowchangetype-must-be-set-to-derived
title: RowChangeType must be set to Derived for the Hub Attribute in order to make generated SQL work.
summary: Describes how to add the schema name to the front of PSA layer objects.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
From Case [BIMLFlex - Data Vault Infer Link Hub and RowChangeType](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=ed773f1d-12af-ee11-a569-000d3a19f253)

**Problem**

When InferLinkHub is enabled and RowChangeType is not set to "Derived" for the Hub Attribute, the generated SQL is not valid.   
\--> Why does RowChangeType have to be set to "Derived" for the Hub Attribute in order for InferLinkHub to generate valid SQL?   
 

**Cause**

It was by design that the Hub Attribute for RowChangeType had to be set to "Derived" in order for the SQL to be valid  
\--> What is the design that dictated this? And why does it make sense that we don't require that anymore?  
\--> From what is the RowChangeType derived in this scenario?

**Solution**  
Please update to version 2024R1 or later. The logic requiring RowChangeType for the Hub Attribute to be "Derived" when InferLinkHub was enabled was removed in 2024R1.  
  
If it is not possible to update to 2024 R1 or later, valid SQL can be generated by generated by navigating to the RowChangeType configuration and setting the RowChangeType for the Hub Attribute to be "Derived." This should be considered a temporary solution until it is feasible to update.

**Conclusion**

New versions of BimlFlex contain improvements to logic such as this one in addition to powerful new features and vital bug fixes. For this reason, Varigence promotes the practice of updating BimlFlex whenever a new version is available.