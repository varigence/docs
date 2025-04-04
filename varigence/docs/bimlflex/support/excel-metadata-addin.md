---
sidebar_position: 4
title: Excel Metadata Add-In
description: Documentation regarding the need to update the BimlFlex Excel File Add-in
tags: [BimlFlex, Reference]
---

# Excel File Migration Error within BimlFlex 2020 R2 Update

## Restructured Versioning

With the upcoming R2 release of BimlFlex and BimlStudio, Varigence has restructured the naming convention for new versions of Biml applications moving forward.

The new update will be labeled as version 20.2, indicating 2020 as the release year and .2 to indicate the second update within that year.

All Varigence products will adhere to this same naming convention to provide users clarity on versions both currently installed and upcoming.

Along with changes to version labelling come changes to the BimlFlex and BimlStudio installation paths.

Dropping the former "5.0" directory from previous installations `(C:\Program Files\Varigence\BimlFlex\5.0)`, files will now be kept in the parent directory of the above path, `(C:\Program Files\Varigence\BimlFlex)`.

When users choose to update to Version 20.2 it will not be possible to maintain side-by-side versions, as programs with database dependencies do not fare will with such assemblies. Users must lock-in one version to install.

## Known Issue for Excel Metadata Editor

One known feature that breaks upon installation is the Excel Metadata Editor Add-In .xlsx file. Excel has hardcoded the path to this add-in and this must be updated for the Excel add-in to work.

Users will be required to take one of three options in order to resolve this Excel File Migration Error.

This Metadata Editor update process will only need to be completed once, subsequent to the upgrade to BimlFlex 20.2.

## Resolution Methods

### Method 1: Automatic Upgrade

Perhaps the most common method used to access the Excel Metadata Editor is through the "Excel Metadata Editor" button in BimlStudio in the BimlFlex ribbon.

![Excel Metadata Editor Ribbon Button](/img/bimlflex/001.png "Excel Metadata Editor Ribbon Button")

Click the top half of the "Excel Metadata Editor" button and a dialogue box will pop up advising users to "Upgrade BimlFlex.xlsx." Click "Upgrade" and the new path will be automatically updated in the Excel file.

![Upgrade BimlFlex.xlsx](/img/bimlflex/002.png "Upgrade BimlFlex.xlsx")

Users will be advised when the upgrade is successful and be given the option to then open the Metadata Editor in Excel, as usual.

![Open in Excel?](/img/bimlflex/003.png "Open in Excel?")

### Method 2: Basic Path Selection

For users who have performed a standard installation of BimlFlex with no changes to the location of the installed files, click the down-carrot button within the "Excel Metadata Editor" ribbon button to bring up additional installation options.

![Upgrade BimlFlex Excel File](/img/bimlflex/004.png "Upgrade BimlFlex.xlsx")

Select "Upgrade BimlFlex Excel File" from the dropdown menu. This will prompt a dialogue box requiring the user to select the location of the `BimlFlex.xlsx` file. The default location for this document is `C:\Program Files\Varigence\BimlFlex`. For users who have modified the location of any install files, select the location specific to your machine.

Once the file is selected, users will get the same dialogue boxes seen above.

Click "Upgrade" to update the BimlFlex.xlsx file and a subsequent dialogue box will advise that the upgrade was successful with the option to open the Metadata Editor in Excel.

### Method 3: Advanced Path Selection

For users who have modified their environment, changed the location of the installed files, or if the above two methods for whatever reason failed to upgrade the BimlFlex.xlsx file, this method will ensure detection and upgrade of the require .xlsx, .vsto, and .dll file paths, as determined by the user.

![Advanced BimlFlex Excel File Upgrade](/img/bimlflex/005.png "Advanced BimlFlex Excel File Upgrade")

Click "Advanced BimlFlex Excel File Upgrade" from the down-carrot menu within Excel Metadata Editor button in the BimlStudio ribbon. This will prompt a dialogue box to appear with selection fields requiring the user to enter the path to the three file types mentioned above.

The default file paths for these files (for a default, English, 64-bit installation) are:

XLSX: `C:\Program Files\Varigence\BimlFlex\BimlFlex.xlsx`

VSTO: `C:\Program Files\Varigence\BimlFlex\BimlFlexAddin.vsto`

DLL: `C:\Program Files\Varigence\BimlFlex\BimlFlexAddin.dll`

However, if users use a different bitness, have a localized version of Office installed, have altered their environments or the location of files, the file paths selected may be different.

Browse and select the file paths according to the local machine configuration using the ellipses on the right.

![Upgrade BimlFlex Excel Spreadsheet - Complete](/img/bimlflex/007.png "Upgrade BimlFlex Excel Spreadsheet - Complete")

Once all paths have been selected, click "Upgrade." Another dialogue box will again confirm the upgrade for BimlFlex.xlsx specifically. Click "Upgrade" again.

![Upgrade BimlFlex.xlsx](/img/bimlflex/002.png "Upgrade BimlFlex.xlsx")

### Opening Metadata Editor Without BimlStudio

Users who choose to open and edit metadata within Excel without navigating through the BimlStudio ribbon button will be met with a "Customization Failed to Load" error, and will need to correct the Metadata Editor Add-in by way of any of the three above-referenced methods.

Example error message from Excel when the Add-in has not yet been updated:

![Open BimlFlex.xlsx error](/img/bimlflex/bimlflex-ss-v20.2-bimlflex-excel-upgrade-error.png "Open BimlFlex.xlsx error")
