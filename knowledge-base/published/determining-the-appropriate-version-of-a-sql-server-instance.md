---
uid: kb-determining-the-appropriate-version-of-a-sql-server-instance
title: Determining the Appropriate Version of a SQL Server Instance
summary: Guide to helping users determine the correct SQL Server instance to connect BimlStudio to
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue 

In Project Settings of BimlStudio, users are required to specify the version of SQL Server Instance that the project or package is to target. There are many cases where a user may be uncertain how to determine the version of the SQL Server instance that needs to be connected to.   
 

# Resolution

Below will detail the two methods of using either an SQL Query or SSMS Properties to confirm which SQL Server Instance is being used. 

**Method 1: SQL Query**  
  
The most convenient way to determine the current version of the SQL Server Instance is to open up SQL Server Management Studio (SSMS), or whichever tool might be used to query the database. Once connected to the subject database instance, use the following query:   
  
SELECT @@version  
  
The results will display something similar to below:   
  
![SQL Query](../static/img/kb-determining-the-appropriate-version-of-a-sql-server-instance-img1.png "SQL Query")
  
The SQL Server version that needs to be targeted in BimlStudio is SQL Server 2016, as indicated in the result above.   
  
**Method 2: SSMS Properties**  
  
The alternative method to determine the proper SQL Server Instance is to open SSMS (or Enterprise Manager) and connect to the desired database client. Once connected, right-click on the instance and select "P_roperties_" from the context menu.    
  
![SSMS Properties](../static/img/kb-determining-the-appropriate-version-of-a-sql-server-instance-img2.png "SSMS Properties")
  
After selecting "_Properties_," the version number will be displayed in the following window:   
  
![SSMS Properties Version](../static/img/kb-determining-the-appropriate-version-of-a-sql-server-instance-img3.png "SSMS Properties Version") 
  
The window will display a build number, as opposed to a yearly version number (i.e. SQL Server 2017 or SQL Server 2014). In order to determine which yearly version this build number corresponds to, please reference [this chart](https://buildnumbers.wordpress.com/sqlserver/%c2%a0).