---
uid: kb-delete-customer-from-bimlflex
title: Delete Customer From BimlFlex
summary: How to delete a defunct customer from the BimlFlex app entirely
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
inspo: [https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=2e83d5b9-a2bf-ee11-92bd-6045bdb65878](https://varigence-prod.crm.dynamics.com/main.aspx?appid=5e76663e-a3c2-ee11-907a-000d3a9eadbe&pagetype=entityrecord&etn=incident&id=2e83d5b9-a2bf-ee11-92bd-6045bdb65878)  
 

# **Issue**

The user has Customers that they would like removed from the BimlFlex app entirely. It may be prudent to remove unused or abandoned data solutions (Customers or Versions) from time to time so that team members are not confused by a cluttered name space. This article describes how entire Customers can be deleted from the metadata database. Versions should be marked as "Deleted" using the "Versions" editor in BimlFlex, which is safer than deleting from the database.  
 

# **Cause**

Since a Customer represents a full metadata solution in BimlFlex, Customers could become defunct for a number of reasons. For example, a development team may no longer use the platforms configured in that Customer's metadata. In another case, an organization may have chosen to sell or wind down a business unit, so their data solution no longer requires support. Regardless of the reason(s) prompting the removal of a Customer, the process remains the same.  
 

# Solution 

This process has the potential to be destructive if used improperly and users should be careful to double check inputs and take a backup of the metadata database before beginning. 

The stored procedure to delete a Customer is wcf.SetDeleteCustomerVersion and it can be used as follows:

DECLARE @RC int  
DECLARE @CustomerUID nvarchar(40)  
DECLARE @VersionName nvarchar(128)  
DECLARE @UserName nvarchar(100)  
DECLARE @ForceDelete bit  
DECLARE @DeleteArchive bit  
DECLARE @DeleteVersion bit  
DECLARE @DeleteCustomer bit 

\-- TODO: Set parameter values here. 

EXECUTE @RC = \[wcf\].\[SetDeleteCustomerVersion\]  
   @CustomerUID  
  ,@VersionName  
  ,@UserName  
  ,@ForceDelete  
  ,@DeleteArchive  
  ,@DeleteVersion  
  ,@DeleteCustomer  
GO

CustomerUID is the customer to delete, or use VersionName if the desired outcome is to only remove a Version and not the whole Customer.  
UserName is the user who will be put into the audit table for this action.  
DeleteVersion and DeleteCustomer indicate which items are being deleted. Set DeleteCustomer to 1.  
DeleteArchive also removes the customer from the archive tables, which means that the information will be removed forever. There is no way to recover the information if you enable DeleteArchive. Only use this procedure if it is certain that the information associated with a Customer will not be needed again. As always, be sure to create a backup of your metadata database before removing anything.  
 

# **Conclusion**

The BimlFlex Customer represents a top-level set of models and metadata. Metadata and models imported into one Customer will not be available to other Customers until they are imported or added separately. Please read more about [Customers](xref:bimlflex-customer-concept-header). and [Versions](xref:bimlflex-version-concept-header) in Documentation.