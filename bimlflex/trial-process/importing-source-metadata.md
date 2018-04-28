# Importing Source Metadata

[Back to overview](https://varigence.com/Documentation/BimlFlex/Article/Trial+Process+Overview)

**Supporting Videos**

- [Importing Source Metadata](https://varigence2.sharepoint.com/sites/Varigence/Shared%20Documents/BimlFlex/BimlFlex%20Trial/Videos/Importing%20Metadata/Importing%20Metadata.mp4?csf=1&e=f090728be4fd4f58845f4dadb352b2a5)

**Supporting BimlFlex Documentation**

- [Importing Metadata](https://varigence.com/Documentation/BimlFlex/Article/Importing+Metadata)

## Importing Source Metadata

Importing existing metadata from database connections is a fast and easy way to start modelling data from a source to a Data Warehouse. By reading existing metadata instead of manually entering it or manually creating tables for the Data Warehouse it is possible to increase development speed and quality.

The Excel Metadata Editor provides a Ribbon Tab for working with the BimlFlex metadata.
To import metadata, the connection information to the source has to be valid. Validate the connection strings in the connections sheet.
It also needs a properly defined Batch. A Batch is the orchestration container used for load processes.
It also needs a properly defined Project. A Project corresponds to an Ssis project.

Once the connections, batches and projects are validated the metadata can be imported.

BimlFlex will read all specified metadata from the chosen connection to the Excel sheets.

The metadata import dialog provides a set of options for managing
- What to import
- Naming conventions
- Inferred metadata   
- Options
- how to treat already imported Metadata

Once all settings have been reviewed the import function will read the metadata from the source into the Excel sheets.
Tables are added to the Objects sheet. Columns are added to the Columns sheet.

Once validated the metadata can be written to the metadata repository.

## Detailed Steps

1. Open the Excel Metadata Editor from BimlStudio.

The Excel Metadata Editor provides a Ribbon Tab for working with the BimlFlex metadata.

2. Validate the metadata connection information.

3. To get the latest metadata, click the top part of the Get All Entities Button to load all sheets with the data from the repository.

4. Validate the connection strings in the connections sheet.
The metadata import will use the connection to the AdventureWorksLT source database. This connection has been defined as a source and with the AWLT Record Source code.

5. Validate connections, batches and projects sheets.

6. Click the Import Metadata button to display the dialog.

7. Choose AdventureWorks LT as the source and EXT_AWLT as the destination project.

BimlFlex will read all available metadata.

8. Deselect the dbo schema. Deselect the import views option to only import metadata from the tables in the SalesLT schema.

9. Click Import to read the metadata from the source into the Excel sheets.
Tables are added to the Objects sheet. Columns are added to the Columns sheet.

10. To write the imported metadata to the repository, click the Set Current Sheet on the Objects Tab and on the Columns Tab.

11. To validate that all metadata is available, click get all entities to reload everything from the repository.

The Objects tab now shows all imported tables and the columns tab shows all columns for all tables.
