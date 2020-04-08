---
uid: bimlflex-metadata-database-install
title: BimlFlex Metadata Database Install
---
# BimlFlex Metadata Database Install

BimlFlex Data Warehouse Automation solutions are driven off of the user's metadata. This metadata is stored in a metadata database, called BimlFlex by default. 

## Open the Project
In order to setup the metadata database, the user must already have a [BimlFlex project for BimlStudio](../build-solution/setup-bimlstudio-project.md) created. After that step is complete, the user can open BimlStudio and open their project. Notice on the main page there is a button to assist in getting your metadata database setup. 

<img 
    src="images/metadata-database-setup-btn.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

## Setting the Connection String
After clicking the button, the following dialog will pop up.

<img 
    src="images/metadata-database-setup-dialog.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

In this dialog the user can configure their connection strings to point at the database infrastructure of their choosing. 

>[!NOTE]
> Users can change the desired name of the databases from their defaults, **BimlFlex** and **BimlCatalog** respectively.

## Deployment

Once the user is ready to deploy, simply click *Deploy*. A dialog will pop up that updates the user on the progress of the deployment.

<img 
    src="images/installing-text.png" 
    class="border-image" 
    style="border: 1px solid #CCC;" 
    title="Apply Data Type Mappings Dialog Box" 
/>

Once this process is complete, the user can go to the database management tool of their choice, and view their created database.