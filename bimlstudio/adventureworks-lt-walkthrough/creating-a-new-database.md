---
uid: creating-a-new-database
title: Creating a New Database
summary: Documentation of how to create a new database in BimlStudio
product: BimlStudio
type: Blog
---
# Creating a New Database

Databases contain relational objects, such as tables, schemas, and views. Any relational object in a database automatically uses the database's connection.

## Create a new database

1. Go to the Home tab on the ribbon, and click the Database button.

    ![Database Button](https://varigencecom.blob.core.windows.net/images-mistdocumentation/004a_Step01.png)

1. The Database Properties should be open on the right, if not Double-click on the database to open the designer for it.

1. Databases require that you specify a connection. For this example, use the AdventureWorksLT connection.

1. Change the Name value from Database1 to AdventureWorksLTDatabase to give the database a meaningful name.

    ![Finished Database Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation/004a_Step04.gif)

1. Save the project to persist your changes to the project files. See [Saving a Project](saving-a-project.md) for more information.

## View Biml

If you right click the connection and click **View Biml** it should look similar to the following snippet.

``` biml
    <Biml xmlns="http://schemas.varigence.com/biml.xsd">
        <Databases>
            <Database Name="AdventureWorksLTDatabase" ConnectionName="AdventureWorksLT" />
        </Databases>
    </Biml>
```
