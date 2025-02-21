---
uid: bimlflex-setup-bimlstudio-project
title: BimlFlex - Setup BimlStudio Project
summary: Guide to creating a BimlStudio project from within BimlFlex
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# BimlStudio Project Setup For BimlFlex

A BimlStudio project is used to build and generate the metadata configured in BimlFlex.

## Create the BimlStudio Project

[!include[BimlFlexProject](../includes/_incl-header-bimlstudio-project.md)]

## Connect to the BimlFlex Database

[!include[BimlFlexDatabaseConnection](../includes/_incl-header-bimlstudio-connect.md)]

## Building Assets

Once the user is content with the configuration of their metadata, they are ready to build their assets for the configured target architecture and technology. At this stage, the user should already have a [BimlFlex project for BimlStudio](xref:bimlflex-setup-bimlstudio-project) ready to go.

>[!NOTE]
> Any time a change is made in the metadata, it is required to build the project and deploy the generated artifacts to update the solution.

### Open the Project

Open the project by double clicking the `.mst` file in the Windows File Explorer or by opening BimlStudio and locating the `.mst` file in the dialog.

### Project Settings

[!include[BimlFlexProjectSettings](../includes/_incl-header-bimlstudio-project-settings.md)]

#### Build Output

[!include[BimlFlexProjectSettings](../includes/_incl-header-bimlstudio-project-build-output-settings.md)]
