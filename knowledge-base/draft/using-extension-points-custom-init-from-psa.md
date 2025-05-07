---
uid: kb-using-extension-points-custom-init-from-psa
title: "Using Extension Points: Custom Init From PSA"
summary: Describes a use case for extension points.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
Based on the case from [VGM](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=ba79ceb3-91a6-ee11-be37-000d3a195ae1) \[remove before publicaiton\]  
  
**Issue**

The user would like to execute an INIT\_FROM\_PSA package on a subset of their PSA data before the pipeline starts.

  
**Cause**  
The user's overnight Staging to Data Vault processing fails occasionally. Since they truncate their staging data after each run, they're at risk of losing data if they don't catch it in time. When they don't get to the data before the staging area is truncated, they must spend valuable time attempting to recover the data from the PSA so it can go through the integration process and become available to the business users.   
  
**Solution**  
In a scenario like this, we advise the user to create a ReloadFromPsaWhereSql Extension Point. Using that, the needed subset of data can be targeted with a WHERE statement.  
  
**Conclusion**

This is a great use case for an extension point. Extension points allow for custom logic to be injected into specific regions of the integration solution without modifying templates or metadata components directly. You can read more about when and how to use extension points in the [documentation](xref:bimlflex-concepts-extensionpoints).