Schemas group table assets.

#### Create a new schema:

1.  Begin by creating a new Connection. To review the steps for creating a connection, see the [Creating a Connection](Creating%20a%20New%20Connection) topic. For this example, create a connection named AdventureWorksLTDataMart using the following connection string:

    Provider=SQLNCLI11;Data Source=localhost;Initial Catalog=AdventureWorksLTDataMart;Integrated Security=SSPI;

    This connection points to a database that will be created later in the example project.  

2.  Next, create a new Database. To review the steps for creating a database, see the [Creating a Database](Creating%20a%20New%20Database) topic. For this example, name the database:  

    AdventureWorksLTDataMartDatabase

    Assign its connection property to

    AdventureWorksLTDataMart

3.  Go to the Home tab on the ribbon, and click the Schema button.  
    ![Database Button](https://varigencecom.blob.core.windows.net/images-mistdocumentation/005a_Step03.png)
4.  The **Schema Properties** should be open on the left, if not Double-click on the schema to open the designer for it.  

5.  Schemas require that you specify a database. For this example, use the AdventureWorksLTDataMartDatabase that was created above.  

6.  Change the Name value from Schema1 to AdventureWorksLTDataMartSchema to give the schema a meaningful name.  
    ![Finished Schema Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation/005a_Step06.gif)
7.  Save the project to persist your changes to the project files. See [Saving a Project](Saving%20a%20Project) for more information.
