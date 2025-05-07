---
uid: kb-duplicates-in-pit-tables
title: Duplicates in PIT Tables
summary: "Errors occurred when trying to execute an SSIS package in Visual Studio: FlexToBk_Missing"
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
From Case [https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=0859b644-400d-ef11-9f89-000d3a1edd56](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=0859b644-400d-ef11-9f89-000d3a1edd56)

**Issue**

  
Duplicate items are appearing in Point-In-Time tables.

**Cause**

  
In rare circumstances, the PIT table process can become out of sync when multiples jobs are initiated.   
 

**Solution**

  
Truncate the affected PIT table(s) and reload them.  
 

**Conclusion**  
  
Varigence has plans to improve the user experience for PIT table functionality in the near future. We currently have an item in the backlog to develop a PIT verification which will notify the user if duplicate records end up in the PIT table.