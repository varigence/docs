---
title: Building the Example Project
description: How to build the example project
tags: [BimlStudio, Walkthrough]
---
# Building the Example Project

Building a project produces compiled output for each item included in an emittable file.

To build a project:

1. On the **Build & Deploy** tab, click the Build button.

    ![Home Ribbon - Build Button](https://varigencecom.blob.core.windows.net/images-mistdocumentation/012_Step01.png)

1. Using the 32-bit or 64-bit version of BimlStudio. For the example, choose the version that matches your BimlStudio installation.
    You can determine whether BimlStudio is running in 32-bit or 64-bit by looking in the title bar of theBimlStudioMist window. If you see [64-bit], then BimlStudio is running as a 64-bit process. Otherwise, it's running in 32-bit.

1. The build will start. You can see its progress in the Output tool window, normally located in the lower portion of the BimlStudio window.

1. Scroll to the bottom of the Output tool window to see the results of the build. You should see values similar to this:

    ![Output Window - Error Listing](https://varigencecom.blob.core.windows.net/images-mistdocumentation/012_Step04.png)

If the build completed with no errors, you can check the project's output folder to see what was produced.

From this point, you can create a cube within BimlStudio and build out its actions, KPIs, etc... When finished, rebuild the BimlStudio project to emit a dwproj that can be opened in Visual Studio for cube deployment.

## Download Solution

You can download the full solution from [here](https://www.varigence.com/downloads/adventureworksltsample.zip).
