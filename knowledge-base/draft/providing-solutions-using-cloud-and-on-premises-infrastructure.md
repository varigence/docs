---
uid: kb-providing-solutions-using-cloud-and-on-premises-infrastructure
title: Providing Solutions Using Cloud and On-Premises Infrastructure
summary: Describes a scenario in which a user may want to add an on-premises data warehouse in parallel to the cloud data warehouse.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
This is based on [the case from capgemini](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=abe10e70-fc5d-ef11-bfe2-6045bdfe0bfa) \[remove before publication\]   
  
**Problem**

The user is adding an on-premises data warehouse to supplement their existing cloud infrastructure. They want to know the best way to implement this in the context of their existing cloud solution.  
 

**Cause**

Some new sources contain data that is prohibited by law from being loaded into cloud systems, so the user must set up an additional on-premises data warehouse to hold the new data.   
 

**Solution**

Before moving forward with the new on-premises data warehouse, you must decide whether new on-prem projects will be created in the same Customer as your cloud projects or if they will be created in a new Customer.

**Creating a New Customer**  
Creating a new Customer for your on-prem projects would be better if you expect them to be relatively isolated from the cloud work and you also expect to build and deploy them on a different cadence than the cloud projects. This new Customer would provide you with maximum deployment flexibility and faster build times. However, it would make it more difficult to migrate cloud projects to be on-prem in the future, and it would also make it more difficult to model a data movement between the on-prem and cloud systems (if that is a potential goal). Both of those issues can be overcome, it's just that it's a bit more work in the BimlFlex app, since some of your metadata would need to be duplicated in or migrated to that new Customer when the need arises.

**Using the Same Customer**  
Alternatively, if you add the on-prem projects into the existing Customer where the cloud projects already exist, you could migrate the cloud projects to on-prem in the future just by changing project metadata and potentially doing a few entity duplications. You could also create projects that could move data between on-prem and cloud without having to duplicate any of the metadata for either project. The downside is that your builds will be larger and change management would be potentially more complex, especially if your release/deployment cadences for on-prem vs cloud are not aligned. These issues can also be mitigated, for instance by having multiple versions or local exclusions where you exclude the projects for the deployment target you are not currently working with.  
 

After this decision point, everything is the same between both approaches.  
 

**Conclusion**

Ultimately, the method you choose depends on the specific details of your situation. The factors to consider are the amount of interaction you expect to take place between on-prem and cloud systems and the speed with which you expect to migrate your cloud infrastructure to on-premises or vice versa. It's really just a question of whether forking off into a new Customer makes development, maintenance, and deployment easier or not given your expected roadmap. There should be no technical difficulty providing solutions using either cloud or local infrastructure, even within the same BimlFlex Customer.