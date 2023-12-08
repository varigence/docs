---
uid: creating-a-new-schema
title: Creating a New Schema
summary: How to create a new schema in BimlStudio
varigenceProduct: BimlStudio
varigenceArticleType: Walkthrough
---
# Creating a New Schema

Schemas group table assets.

## Create a new schema

1. Begin by creating a new Connection. To review the steps for creating a connection, see the [Creating a Connection](xref:creating-a-new-connection) topic. For this example, create a connection named AdventureWorksLTDataMart using the following connection string:

    `Provider=SQLNCLI11;Data Source=localhost;Initial Catalog=AdventureWorksLTDataMart;Integrated Security=SSPI;`

    This connection points to a database that will be created later in the example project.

1. Next, create a new Database. To review the steps for creating a database, see the [Creating a Database](xref:creating-a-new-database) topic. For this example, name the database:

    `AdventureWorksLTDataMartDatabase`

    Assign its connection property to

    `AdventureWorksLTDataMart`

1. Go to the Home tab on the ribbon, and click the Schema button.

    ![Database Button](https://varigencecom.blob.core.windows.net/images-mistdocumentation/005a_Step03.png)

1. The **Schema Properties** should be open on the left, if not Double-click on the schema to open the designer for it.

1. Schemas require that you specify a database. For this example, use the AdventureWorksLTDataMartDatabase that was created above.

1. Change the Name value from Schema1 to AdventureWorksLTDataMartSchema to give the schema a meaningful name.

    ![Finished Schema Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation/005a_Step06.gif)

1. Save the project to persist your changes to the project files. See [Saving a Project](xref:saving-a-project) for more information.
