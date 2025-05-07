---
uid: kb-fixing-a-biml-generated-package-using-visual-studio
title: Fixing a Biml Generated Package Using Visual Studio
summary: How to diagnose missing or mismatched components in a faulty package, and also repair those same issues without having to notify the user
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue

BimlExpress or BimlStudio generates a faulty package. The user may access the project in Visual Studio, open the offending component, and the package will begin to work. SSIS is intelligent enough to determine what the missing or mismatched component is, and repair that same component "under the hood" without having to notify the user. Unfortunately this process is impractical to expect users to continuously open these packages in Visual Studio ever time a project is rebuilt.   
 

# Resolution

Providing the incorrectly generated package, and the package after Visual Studio has fixed it, will allow Varigence Support to assess the files and determine what BimlExpress or BimlStudio is doing incorrectly.   
  
In order to provide these files, the first step is to simply build the project as normal. Once completed, create a copy of the created package(s) and place them in a .zip file, named "Before." Next, open the (originally) problematic package in Visual Studio. In some cases, users may still need to open the troublesome component and let SSIS fix the mappings.   
  
Once the package is in a state where it will successfully deploy, save and exit Visual Studio. Now place the new working package(s) into another .zip file, now named "After."  
  
Both the Before.zip and After.zip can be shared as attachments with [Varigence Support](mailto:support@varigence.com) for assessment. Varigence Support will be able to compare the two DTSX files and determine wherein lies the issue with generating packages. By providing these two sets of files at the outset of creating a ticket, providing a meaningful response to a user will be great expedited.