---
uid: bimlflex-build-process-header
title: BimlFlex build process
summary: Overview of the build process for BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

The [Build Process](xref:bimlflex-build-solution-overview) in BimlStudio uses the BimlFlex metadata, expands this into BimlScript and then compiles this code to produce the relevant output and support scripting.

The process will access the BimlFlex metadata through the framework, expand this into BimlScript and then compile the result into artifacts than can be deployed to the designated target environment.

The Build Process can be started from BimlStudio by clicking the 'hammer and anvil' icon in the top-left corner.

![Starting a Build](images/build-process-anvil.png "Starting a Build")

If the Build is successful, the output artifacts will be available in the target directory that was configured. The exact outputs vary depending on the BimlFlex configuration, but include (not limited to):

* SSIS Packages
* ARM templates and JSON files for ADF components
* SQL (Views, DDL, DML)
* SQL Server Data Tools (SSDT) Projects
* Deployment scripts in PowerShell

> [!TIP]
> The Varigence YouTube channel contains various introduction videos about using BimlFlex and BimlStudio. [This video](https://www.youtube.com/watch?v=qYu8pwqgAm0?rel=0&autoplay=0) provides an overview of how to build/compile sample metadata into data solution artifacts.
