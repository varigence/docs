---
uid: kb-populate-derived-key-using-sql-target-expression
title: Populate Derived Key Using SQL Target Expression
summary: Troubleshooting tips for SQL source and target Expressions when populating a derived column.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
This was sparked by a [case from Toronto Community Housing](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&forceUCI=1&pagetype=entityrecord&etn=incident&id=1209c979-30c5-ee11-907a-000d3a195b24). I expect it to help us in our discussion of application usability & content generation.

# Background

Sometimes, users want to add items into their Raw Data Vault that do not fit into the Data Vault methodology. Although Varigence tries to maximize the flexibility of its applications, there are constraints enforced on behalf of the application engine and the various data frameworks such as Raw Data Vault. 

# Issue

In this case, the user would like to add a column into their data vault tables that contains a sequential integer ordered by the EffectiveFromDate and the Business Key of the table (or tables, in the case of Link Tables).

# Resolution

BimlFlex does not have first-class support for adding non-Data Vault columns with custom logic into the Data Vault. Please review Data Vault documentation and reconsider how this data should stored and analyzed. 

**Conclusion**

The column that the user has proposed is actually based on a misunderstanding of the usage of Raw Data Vault. Raw Data Vaults are meant to hold source data in a stable, auditable structure that is able to grow and expand with the sources. The column that the user is trying to store is an analytical tool, which does not fit into the Raw Data Vault paradigm. If you'd like to slice the data by columns such as timestamp, it should be loaded into a dimensional model or other analytical tool and analyzed there. If time constraints exist, then a one-off query should be written and maintained by the user until a production-ready analytical model can be implemented.