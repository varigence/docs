---
uid: kb-bitness-and-bimlstudio
title: Bitness and BimlStudio
summary: Description of an issue in which BimlStudio does not work with Visual Studio after upgrading SSIS.
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue

A script or SSIS package can be opened, built, and deployed manually from Visual Studio without issue, but not from BimlStudio. This difficulty may have appeared after upgrading SSIS.  
 

# Cause

The cause of this behavior is a mismatch between the bitness that Visual Studio (32-bit) uses and the installed BimlStudio (64-bit). Visual Studio is able to work with the newly installed 32-bit runtime, but the 64-bit BimlStudio does not see an SSIS runtime with which it can work.  
 

# Resolution

There are two ways to resolve this issue, detailed below.

### Method 1: Preferred Resolution

It is recommended to install the 64-bit SSIS runtime alongside the 32-bit runtime. This method offers the greatest compatibility with the existing 64-bit architecture while retaining the 32-bit SSIS runtime that works with Visual Studio.

### Method 2: Alternative Resolution

In certain scenarios, it may be necessary to install the 32-bit distribution of BimlStudio in order to achieve interoperability with SSIS and Visual Studio. Generally, if the 32-bit distribution is necessary in your environment, it will already be installed, and likely that this error would not appear.  
 

# Conclusion

The bitness of the SSIS runtime must match the bitness of the installed BIML compiler. Since the SSIS upgrade resources do not take Varigence product requirements into account, it may be necessary to install an additional SSIS runtime so that the Biml compiler will have access to the correct SSIS runtime.