---
sidebar_position: 7
title: Importing from the Sample Database
description: How to import from the sample database using BimlStudio
tags: [BimlStudio, Walkthrough]
---
# Importing from the Sample Database

BimlStudio provides an import capability. This allows you to pull existing schema and table definitions from a database into your model. These items are then imported as new objects in the model. Once imported, you can edit them as needed.

To import database assets, you first need to create a connection to the database. See [Creating a Connection](./creating-a-new-connection) for more information. Then, you then need to create a database asset. See [Creating a Database](./creating-a-new-database) for more information.

## Import Tables using BimlStudio Ribbon

1. Select the Import tab on the ribbon.
1. Click the Import Tables button.
    ![Import Tables Ribbon Button](/img/bimlstudio/005_Step02.png)
1. Select the connection to use for importing (AdventureWorksLT in this example). The connection state indicator will turn green to indicate a good connection.
1. Also select the project database to import the schemas and tables into (AdventureWorksLTDatabase in this example).
    ![Import Tables Connection Combo](/img/bimlstudio/005_Step03.png)
1. Select the schemas and tables that you would like to import. For this example, all tables (not views) for SalesLT schema should be selected.
1. Click **Import** to begin the import.
1. Once the import is complete, there will be 10 tables under the Tables folder in the logical view, as well as 1 schema under the Schema folder.
    ![Import Tables Connection Combo](/img/bimlstudio/005_Step04.png)
1. When it completes, save the project to persist your changes.

## Import Tables using BimlScript

BimlStudio allows you to import schema and table definitions from a database, along with updating your model with the current state of the definitions at each compile. To leverage the update capability, you will need to use BimlScript to author the import logic; the BimlScript is executed during each compile, obtaining the current state of schemas and tables.

You can import database assets by following these steps:

1. Select the Home tab in the ribbon and click the BimlScript button. You can also right click the Utilities folder and click **Add BimlScript**. This will open the **New Item** dialog, click **Add**.

    ![Biml Script Ribbon Button](/img/bimlstudio/005a_Step1.png)

1. This creates a BimlFile that's added in the Logical View under Library\Utilities.

1. The BimlFle should be open on the right, if not Double click on the BimlFile to open the BimlScript designer.

1. Enter your script in the **BimlScript Input Editor** pane. When executed, the script generates Biml for your imported assets. Clicking on the notification bar saves the script and displays the Biml, resulting from running the script, in the **Preview Expanded BimlScript** pane.

1. For importing assets from the AdventureWorksLT database, you can copy and paste this BimlScript into the **BimlScript Input Editor** pane. You can also use this sample as a starting point for writing your own import script.

``` biml
        `<#@ template language="C#" hostspecific="True" tier#>`
        `<# var importResult = ExternalDataAccess.GetDatabaseSchema(RootNode.DbConnections["AdventureWorksLT"], new[]{"SalesLT"}, null, ImportOptions.ExcludeForeignKey | ImportOptions.ExcludeColumnDefault | ImportOptions.ExcludeViews | ImportOptions.ExcludeIdentity);#>`

        <Biml xmlns="http://schemas.varigence.com/biml.xsd">
            <Schemas>
                `<#=importResult.SchemaNodes.GetBiml()#>`
            </Schemas>
            <Tables>
                `<#=importResult.TableNodes.GetBiml()#>`
            </Tables>
        </Biml>
```

    1.  The first thing to notice is that all code fragments are surrounded by required `<# and #>` characters.
    2.  The first line is the required template directive. The language parameter depends on the language you're using; this example uses C#.
    3.  The importResult variable returns a collection of type ImportResults. The property's getter uses RootNode, which is the root of the project tree; all assets in your project can be reached from RootNode. The Connections collection returns the _AdventureWorksLT_ connection and used by ExternalDataAccess.GetDatabaseSchema call method to perform the import.
    5.  Within the Biml element, the Schemas and Tables lists are populated by retrieving the SchemaNodes and TableNodes collections from the Results property and calling GetBiml, which converts the returned schema and table items into Biml.
    6.  To learn more about these functions, check out the Biml API documentation [here.](http://www.varigence.com/documentation/biml/api.html)
1. While writing the script, you can click on the notification bar to save the BimlScript and examine its output. The Update Preview ribbon button also refreshes the Output editor.

    ![Expanded BimlScript Output](/img/bimlstudio/005a_Step2.png)

1. Once the output looks correct, press the **Execute** button in the ribbon to import the assets into your model.
1. 