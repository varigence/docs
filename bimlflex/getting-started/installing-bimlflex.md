---
uid: bimlflex-trial-installing-bimlflex
title: Installing BimlFlex
---
# Installing BimlFlex

The BimlFlex developer installation allows the installation of all components used in the BimlFlex framework:

* BimlStudio
* BimlFlex App
* BimlFlex Excel-based metadata editor
* SSIS Custom Components for SQL Server and Snowflake

Run the developer installation and choose to install all components on the developer machine. For complete functionality all components are required.

![Installing BimlFlex -center -50%](../user-guide/images/bimlflex-ss-v5-bimlflex-2019-installer-install.png)

The Excel-based metadata editor is a plugin for Microsoft Excel and will be visible as a separate tab in the Excel ribbon when the BimlFlex-enabled Excel workbook is opened from a BimlFlex project.

When installing it is important to match the Excel bitness version. Verify the Excel bitness version before starting the installation and only install the matching version of BimlFlex.

The first time BimlStudio or the BimlFlex Excel file is opened from a BimlFlex project it will ask for a license key. Add a BimlFlex-enabled license key to enable the application. The key is validated online and once validation completes it is possible to run the applications.

## Detailed Steps

The following detailed steps walks through the installation of BimlFlex

### Download BimlFlex

Use the link in the welcome or trial email to download the installer

### Check bitness of Microsoft Excel

> [!NOTE]
> Microsoft Excel is a prerequisite for installing and using the BimlFlex Excel-based Metadata Editor.

Check the bitness of the local installation of Microsoft Excel using the [Microsoft guidelines available here](https://support.office.com/en-us/article/About-Office-What-version-of-Office-am-I-using-932788B8-A3CE-44BF-BB09-E334518B8B19).

> [!WARNING]
> Install only the bitness version that match the installed Excel version.

### Install BimlFlex

Run the installer to install the applications.

* For BimlStudio, choose both 32 and 64 bit installation
* For the BimlFlex app, choose both 32 and 64 bit installation
* For the BimlFlex Excel-based metadata editor, choose the bitness version that matches your local Excel installation and install only that version.
* For the Custom components, install all available options for max compatibility

### Enter product key

Once BimlStudio or the BimlFlex Excel based metadata editor is started for the first time, enter a valid product key to activate the product.