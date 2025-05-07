---
uid: kb-using-special-characters-in-bimlflex
title: Using Special Characters in BimlFlex
summary: How to resolve a "Reference to unknown entity" error.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue

The user has a Replace() function in their Dataflow Expression which is causing an error message that reads "Error:: Reference to undeclared entity 'comma'"  
 

# Cause

BimlFlex works by generating XML, then uses those XML files to generate scripts and files that build the specific solution. The user's search string includes the substring "&comma;" but comma isn't a predefined XML entity. When the parser sees the ampersand, it expects an XML entity (&amp; , &lt; , &gt; , &apos; , or &quot; ) but instead sees 'comma,' which results in an error.  
 

# Solution

Change "&comma;" to "&amp;comma;" and the "&amp;" substring will be replaced by the ampersand and BimlFlex will correctly render "&comma;" in the XML that is used to generate platform-specific scripts.  
 

# Conclusion

Varigence is always working hard to make our software more user friendly. Part of that includes removing the need for users to understand BimlFlex implementation details. Presently, it is important for users to know that BimlFlex relies on XML, so freeform text inputs should be checked for validity in the XML. This is generally only something a user might encounter when working with data that includes a markup language resembling XML, such as HTML.