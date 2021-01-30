---
uid: creating-a-new-connection
title: Creating a New Connection
summary: Documentation of how to create a new connection in BimlStudio
product: BimlStudio
type: Forum
---
# Creating a New Connection

In BimlStudio, connections are defined once in a project and shared with all the objects that need to reference them. This allows you to easily update connections in a single location.

## Create a new connection

1. Go to the Home tab on the ribbon, and click the **Connection** button. The Connection button is a split button. Clicking the top half will create a new OLE DB connection, and clicking the bottom half will list all the available connection types.

    ![Connection Button](https://varigencecom.blob.core.windows.net/images-mistdocumentation/003_Step01.png)

1. Click the **OLE DB** menu item to create an OLE DB Connection. When the connection is created, it will appear in the Logical View under Connections.

    ![Logical View](https://varigencecom.blob.core.windows.net/images-mistdocumentation/003_Step02.png)

1. The connection designer should be open on the right, if not Double-click on the connection to open the designer for it.

1. OleDbConnections require that you provide a connection string. For this example, you can copy, paste and edit the following connection string: 

    `Provider=SQLNCLI11;Data Source=localhost;Integrated Security=SSPI;Initial Catalog=AdventureWorksLT2012;`

1. You can use the connection builder by following these steps:

    * Select a **Provider**
    * Specify a **Server**
    * Choose and **Authentication** method
    * Specify a **Database name** or click the **Update** link to get a list of available databases

    ![Connection Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation/003_Step03.png)

1. Change the Name value from OleDbConnection1 to AdventureWorksLT to give the connection a meaningful name. You will be prompted "Do you also want to rename the asset's Biml file?" click **Yes**

    ![Finished Connection Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation/003_Step05.png)

1. Save the project to persist your changes to the project files. See [Saving a Project](saving-a-project.md) for more information.

1. Once you've entered a connection string, you can click the **Test** button in the Connection Tools. Connections tab in order to validate it.

The connection string in the example above allows you to connect to the AdventureWorksLT database running on your local computer, using your Windows credentials. You will need to alter the connection string if you are using another server or a different authentication method.

[http://connectionstrings.com](http://connectionstrings.com) is a good website to determine what type of connection string you should use for various database systems.

## View Biml

If you right click the connection and click **View Biml** it should look similar to the following snippet.

```biml
    <Biml xmlns="http://schemas.varigence.com/biml.xsd">
        <Connections>
            <OleDbConnection Name="AdventureWorksLT" ConnectionString="Provider=SQLNCLI11;Data Source=localhost;Integrated Security=SSPI;Initial Catalog=AdventureWorksLT2012" />
        </Connections>
    </Biml>
```