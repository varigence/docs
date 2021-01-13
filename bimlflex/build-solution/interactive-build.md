---
uid: bimlflex-interactive-build
title: BimlFlex Interactive Build
summary: Guide to building assets in BimlFlex whether Cube, SSIS, or Azure Data Factory
---
# BimlFlex Interactive Build

Once content with the configuration of the metadata, users are ready to build their assets whether they be Cube, SSIS, or Azure Data Factory. The user should already have a [BimlFlex project for BimlStudio](xref:bimlflex-setup-bimlstudio-project) ready to go.

>[!NOTE]
> Building the project is required before deploying, any time a change is made to the metadata.

## Open the Project

To open the project, double click the appropriate `.mst` file in the Windows File Explorer or by opening BimlStudio and locating the `.mst` file within the dialog.

## Project Settings

If this is the first time a solution has been built, check the project settings to ensure that the correct target versions are set.
Project settings can be accessed by clicking *File* then *Project Settings*. 

<img 
    src="images/targetversionsettings.png" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

>[!NOTE]
> Ensure that the output path is correctly configured. If one is not provided, then the generated assets will be created in the `output` folder of the directory that contains the `.mst` file.

## Output Path

To access or configure the project's output path, click *File* then *Output Settings*. Select *Build* from the left side of the menu.

![BimlStudio - Output Path Selection](images/bs-build-output-path.png "BimlStudio - Output Path Selection")

The desired output path may be entered manually in the `Output Path` field.
Alternatively, click the *Browse...* button to locate and select the output folder from the path selection dialog that appears.

Select or deselect the `Clean Output Folder` option, as desired.
Cleaning the output folder will scrub the folder of any old files, so that the folder only contains assets related to the most recent build.

## Build the Project

In BimlStudio, navigate to the *Build & Deploy* tab and locate the build button in the ribbon menu.

<img 
    src="images/mainbuild.png"
    style="border: 1px solid #CCC;"
    title="Apply Data Type Mappings Dialog Box"
/>

Alternatively, a build button can also be accessed from the toolbar.

<img 
    src="images/toolbarbuild.png"
    style="border: 1px solid #CCC;"
    title="Apply Data Type Mappings Dialog Box"
/>

Once the project has built, its assets can be examined from within the project's output directory.

## Debugging

If the project fails to build, examine the *Output* window at the bottom of BimlStudio.
This window will display compiler error messages, and additional information such as the commands needed to replicate this build [in a command-line setting](xref:bimlflex-command-line-build).
