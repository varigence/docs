---
uid: bimlflex-command-line-build
title: Building Using the Command Line
summary: Guide to building solutions involving CI/CD for automated processes, using response files, Biml Compiler, and MsBuild
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---

# Building Using the Command Line

A frequent scenario in BimlFlex solutions involve Continuous Integration and Continuous Delivery (CI/CD) and other automated processes that simply will not work with manually building your project in the app or in BimlStudio. In order to remedy this situation, BimlFlex supports automated builds that use both `MsBuild.exe` and `bimlc.exe`, the biml compiler. In this article each approach will be discussed.

> [!TIP]
> Please see our article on [ADF Continuous Integration and Continuous Delivery](xref:bimlflex-adf-continuous-integration-and-continuous-delivery) for more examples of the automated build process.

## Response Files

A **Response File**, or a *resp file* is a file that contains command line arguments that get parsed and passed into the program that is being run. Having a resp file gives the user a convenient and trackable place to store the command line arguments for a specific build. Both `bimlc.exe` and `MsBuild.exe` have their own specific response files that are generated by BimlStudio using the current project settings and BimlFlex settings. In order to generate these files, simply build the project manually in BimlStudio. Examine the Output window in order to obtain the commands needed for a command-line build.

## Using the Biml Compiler

For a `bimlc.exe` build, take note of the following text in the output window:

```console
bimlc.exe @"$$\DemoProject\output\DemoProject.mst.bimlc.resp"
```

>[!NOTE]
> The $$ represents the base path.

In order to run run this build in an automated scenario, using `bimlc.exe`, simply pass in the command above. The `.bimlc.resp` file is generated based off the project's settings. You can manually edit these fields yourself in the file, or change the project settings in BimlStudio and rebuild your project. 

## Using MsBuild

For an `MsBuild.exe` build, take note of the following text in the output window:

```console
C:\WINDOWS\Microsoft.NET\Framework64\v4.0.30319\msbuild.exe @"$$/DemoProject/output/DemoProject.mst.resp"
```

In order to run run this build in an automated scenario, using `MsBuild.exe`, simply pass in the command above. The `.resp` file is generated based off the project's settings. You can manually edit these fields yourself in the file, or change the project settings in BimlStudio and rebuild your project.