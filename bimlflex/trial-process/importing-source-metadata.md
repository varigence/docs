# Importing Source Metadata

## Supporting Videos

![Importing Trial Metadata](https://www.youtube.com/watch?v=uv1aB0psMzc?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- [Importing Metadata](https://varigence.com/Documentation/BimlFlex/Article/Importing+Metadata)

## Import Trial Source Metadata

Importing existing metadata from database connections is a fast and easy way to start modelling data from a source to a Data Warehouse. By reading existing metadata instead of manually entering it or manually creating tables for the Data Warehouse it is possible to increase development speed and quality.

The Excel Metadata Editor provides a Ribbon Tab for working with the BimlFlex metadata.

To import metadata, the connection information to the source has to be valid. Validate the connection strings in the connections sheet.

It also needs a properly defined Batch. A Batch is the orchestration container used for load processes.

It also needs a properly defined Project. A Project corresponds to an SSIS project.

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

1. Validate the metadata connection information.

1. To get the latest metadata, click the top part of the Get All Entities Button to load all sheets with the data from the repository.

1. Validate the connection strings in the connections sheet.

    The metadata import will use the connection to the AdventureWorksLT source database. This connection has been defined as a source and with the `AWLT` Record Source code.

1. Validate Connections, Batches and Projects sheets.

1. Click the Import Metadata button to display the dialog.

1. Choose `AdventureWorks LT` as the source and `EXT_AWLT` as the destination project.

    BimlFlex will read all available metadata. Use the filtering options for large sources.

1. Deselect the `dbo` schema. Deselect the `import views` option to only import metadata from the tables in the `SalesLT` schema.

1. Click Import to read the metadata from the source into the Excel sheets.

    Tables are added to the `Objects` sheet. Columns are added to the `Columns` sheet.

1. To write the imported metadata to the repository, click the `Set Current Sheet` on the `Objects` sheet and on the `Columns` sheet.

1. To validate that all metadata is available, click get all entities to reload everything from the repository.

    The `Objects` sheet now shows all imported tables and the `Columns` sheet shows all columns for all tables.
