# Importing Source Metadata

## Supporting Videos

![Importing Trial Metadata](https://www.youtube.com/watch?v=lXTtWMMFnRg?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- [Importing Metadata](https://varigence.com/Documentation/BimlFlex/Article/Importing+Metadata)

## Import Trial Source Metadata

Importing metadata from database connections is an agile way to start modelling data from a source to a Data Warehouse.

By reading existing metadata instead of manually entering it or manually creating tables for the Data Warehouse it is possible to increase development speed and quality.

The Excel Metadata Editor provides a Ribbon Tab for working with the BimlFlex metadata.

To import metadata, the connection information to the source has to be valid. Validate the connection strings in the connections sheet.

A source extract process also needs a properly defined Batch. A Batch is the orchestration container used for load processes. For a source database extract, the normal starting point is that all in-scope tables will be loaded in a single Batch in a single Project.

A source extract process also needs a properly defined Project. A Project corresponds to an SSIS project.

Once the connections, batches and projects are validated, the metadata can be imported.

BimlFlex will read all specified metadata from the chosen connection into the Excel sheets.

The metadata import dialog provides a set of options for managing

- What to import
- Naming conventions
- Inferred metadata
- Options
- how to treat already imported Metadata
- If the Record Source code from the connection should be added to the Business Key. This is useful in the Data Vault modelling process in cases where unwanted data overlap might happen.
- If source relationships should be re-pointed to use the Business Keys instead of using the derived source constraints

Once all settings have been reviewed the import function will read the metadata from the source into the Excel sheets.
Tables are added to the Objects sheet. Columns are added to the Columns sheet.

Once validated the metadata can be written to the metadata repository.

## Detailed Steps

1. Open the BimlFlex project in BimlStudio.
1. Open the Excel Metadata Editor from the BimlFlex ribbon in BimlStudio.
    The Excel Metadata Editor provides a Ribbon Tab for working with the BimlFlex metadata.
1. Validate the metadata connection information.
1. To get the latest metadata, click the top part of the `Get All Entities` Button to load all sheets with the current data from the repository.
1. Validate the connection strings in the `Connections` sheet.
    The metadata import will use the connection to the AdventureWorksLT source database. This connection has been defined as an OleDb-based, SQL Server-type source with the `AWLT` Record Source code.
1. Validate the `Batches` and `Projects` sheets.
1. Click the Import Metadata button to display the dialog.
1. Choose `AdventureWorks LT` as the source and `EXT_AWLT` as the associated load project.
    BimlFlex will read all available metadata. Use the filtering options for large sources.
1. Deselect the `dbo` schema. Deselect the `import views` option to only import metadata from the tables in the `SalesLT` schema.
1. Check the `Add RecordSource(@@rs) to Business Key` option
1. Check the `Change References to Business Key` option
1. Click Import to read the metadata from the source into the Excel sheets.
    Tables are added to the `Objects` sheet. Columns are added to the `Columns` sheet.
1. To write the imported metadata to the repository, click the `Set Current Sheet` on the `Objects` sheet and on the `Columns` sheet. It is also possible to set all entities using the `Set All Entities` button.
1. To validate that all metadata is available, click get all entities to reload everything from the repository.
    The `Objects` sheet now shows all imported tables and the `Columns` sheet shows all columns for all tables.
1. In BimlStudio, click the `Refresh Metadata` button. This will read the new metadata from the database in to the logical view. The logical view will be populated with the tables and with SSIS projects and packages.