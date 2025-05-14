---
uid: kb-bimlflex-performance-issues-when-using-serverless-databases-for-metadata
title: BimlFlex Performance Issues when using Serverless Databases for Metadata
summary: A place to start if you use BimlFlex with a serverless metadata database and are experiencing performance issues.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# **Issue**

The user is experiencing performance degradation when working with a serverless metadata database.  
 

# **Cause** 

The performance issues are likely either due to the choice of serverless architecture, the region in which the database is deployed, or both.

1.  **Serverless Architecture**  
      
    Serverless database architectures have a well-known issue with latency, especially after cold starts. In order to keep costs low, a large collection of customers will each have their own storage, but share a pool of compute that attaches to their storage on an as-needed basis. The process of allocating a compute resource, attaching it to your storage, and initializing can be quite slow. Additionally, many caches (both data and execution plans) will be wiped out when new compute is assigned. This reassignment of compute happens whenever any service is auto-paused due to inactivity or when Azure detects that compute needs to be automatically scaled up.  
      
    [Microsoft documentation](https://learn.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview?view=azuresql&tabs=general-purpose) notes: "The latency to auto-resume and auto-pause a serverless database is generally an order of 1 minute to auto-resume." In other words, after an auto-pause delay expires, expect the server to be non-responsive for 1 minute before it makes any attempt to service queries. Users on the Azure forums also report sometimes pausing a database before the auto-pause delay has elapsed.  
     
2.  **Region**  
      
    Is the database server provisioned in the Azure region that is optimal for the majority of your users? The latency of communications with a distant data center can become noticeable, especially for operations that initiate a larger number of database transactions. As you can see in [Microsoft documentation](https://learn.microsoft.com/en-us/azure/networking/azure-network-latency?tabs=Europe%2CNorwaySweden), latency between clients and database servers can vary by over 50X if switched from the highest latency server region to the lowest latency for a given client location.  
    There are a few [online tools](https://www.azurespeed.com/Azure/Latency) that will quickly measure latency from a browser to various Azure regions. Be aware that this is not a Microsoft tool and that Varigence cannot vouch for its security or accuracy.  
     

# **Solution**

There are various options based on what investigation yields. Moving the metadata to an on-premises database is the most certain way to reduce latency and improve performance. If that is not an option, consider moving to an architecture that more closely resembles the traditional on-prem paradigm where resources are less likely to be shared and re-assigned during inactivity, such as using SQL Server on an Azure virtual machine. Another possible remedy for poor performance in a serverless setting is relocating the database to a data center that is more conveniently located for most of its users.  
  

# **Conclusion**

Generally, the compute tier itself is not the performance bottleneck when using a serverless metadata database with BimlFlex. Rather than trying to increase performance by increasing the available compute resources, we suggest lowering latency by reducing the amount of connection management Azure is doing behind the scenes and/or shortening the distance that information needs to travel between your users and the data center.