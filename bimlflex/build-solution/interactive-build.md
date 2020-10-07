---
uid: bimlflex-interactive-build
title: BimlFlex Interactive Build
summary: Guide to building assets in BimlFlex whether Cube, SSIS, or Azure Data Factory
---
# BimlFlex Interactive Build

Once the user is happy with the configuration of their metadata, they are ready to build their assets, whether Cube, SSIS, or Azure Data Factory. The user should already have a [BimlFlex project for BimlStudio](setup-bimlstudio-project.md) ready to go.

>[!NOTE]
> Building the project is required before deploying, any time a change is made to the metadata.

## Open the Project

Open the project by double clicking the `.mst` file in the Windows File Explorer or by opening BimlStudio and locating the `.mst` file in the dialog.

## Project Settings

If this is the first time that the user has built their solution, they should check their project settings to ensure that the correct target versions are set.

<img 
    src="images/targetversionsettings.png" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

>[!NOTE]
> Users should also check that their output path is correctly configured. If one is not provided then the generated assets will be created in the `output` folder of the directory that contains the .mst file.

## Build the Project

In the application, navigate to the *Build & Deploy* tab and locate the build button.

<img 
    src="images/mainbuild.png" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

Users can also use the build button located in the toolbar.

<img 
    src="images/toolbarbuild.png" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

Once the project has built, the user can navigate to the project's output directory and examine their assets.

## Debugging

If the project fails to build, the user can examine the *Output* window at the bottom of the application. This window will display compiler error messages, as well as additional information, like the commands needed to replicate this build [in a command-line setting](command-line-build.md).
