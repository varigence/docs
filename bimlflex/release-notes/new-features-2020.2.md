---
uid: new-features-2020.2
name: New Features in BimlFlex 2020 R2
---
# New Features in BimlFlex 2020.2 Update

## Breaking Changes

The Excel add-in location has been updated. The location of the add-in must be updated in the Excel file. This is automatically done when the `BimlFlex.xlsx` file is opened from BimlStudio. BimlStudio also has an upgrade function available in the Excel Metadata Editor dropdown that allows manual upgrades of existing Excel files. If the `BimlFlex.xlsx` file is opened directly from Excel or from the Windows file explorer it will display an error message similar to this:

`file:///C:/Program Files/Varigence/BimlFlex/5.0/BimlFlexAddin.vsto did not succeed.`

Open the `BimlFlex.xlsx` file from BimlStudio to upgrade the add-in location, or upgrade the Excel file from the advanced options in the BimlFlex ribbon UI, in the Excel Metadata Editor dropdown to allow it to work as expected. Once the Excel file is upgraded it can be opened directly from Excel or the Windows file explorer again.

Documentation providing a step-by-step walkthrough for this process can be found [here](xref:excel-metadata-addin)

## Feature Highlights

- New features and behaviors for BimlFlex Accelerator
- BimlFlex App Help Sidebar Navigation

### BimlFlex Accelerator

The BimlFlex Accelerator has undergone numerous changes to improve user experience and functionality, including:

- Connection point handles now show upon selection of entities
- Context menu appears on paths when location is selected
- Path calculation updated to support multiple connection points between entities
- Drag and drop behavior updated to add references between connection points
- Ellipses outside of nodes added to match application stylings
- Relationship modeling default grid layout now adds the relationships between entities, with smaller connectors
- Merged UOW now uses material modals
- UOW drag now only highlights valid targets

For additional documentation regarding the new behaviors for the BimlFlex Accelerator, please see: **insert link to BFX Accelerator documentation here**

### BimlFlex App Help Sidebar Navigation

BimlFlex now features sidebar Help sections for the following editor screens:

- Accelerator
- Schema Mapping
- Column Mapping Diagram

The Help section sidebar navigation also features links to BimlFlex documentation for technical assistance and walkthroughs for features relevant to the page in which Help is being accessed.
