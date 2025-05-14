---
uid: kb-assembly-name-directive-with-custom-library-locks-the-target-dll
title: Assembly Name Directive with Custom Library Locks the Target DLL
summary: Workaround on how to avoid a file lock on the DLL when included in an assembly name directive
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue

When a user includes an assembly name directive, the program locks the target DLL, even after the Biml file is closed.

An example of an assembly name directive is:  
  
<#@ assembly name = "..\\MyCustom.dll" #>  
  
There is an issue where there is a file lock on the DLL when included in an assembly name directive, as depicted above.   
 

# Cause

For typical DLLs, a file lock is not (generally) an issue. However, it can be an inconvenience for users who choose to use custom DLLs. Unfortunately with .NET it is impossible to unload a DLL that has already been loaded into a process. [This article](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/assemblies-gac/how-to-load-and-unload-assemblies) published by Microsoft confirms this limitation.   
 

# Resolution

The only way to architect a solution, in order to avoid the file lock issue, is to create a separate app domain, load all of the DLLs, and then, after the program has finished running, destroy the separate app domain.

Any communication between Visual Studio and the Biml compiler would have to be through cross-app domain communication channels, which are both heavy and slow. Varigence has attempted implementation of this process, but during internal testing, the process was discovered to be far too cumbersome and slow to be an acceptable solution for the large majority of Biml users.

One potential workaround for a small DLL would be to reference each code file in the DLL via a code directive (rather than an assembly directive) in the Biml files. However, for larger DLLs, this workaround is hardly viable. 

Thankfully, the number of users who implement custom DLLs is relatively small. Due to the way that .NET is designed, there is currently nothing that can be done to improve this issue.