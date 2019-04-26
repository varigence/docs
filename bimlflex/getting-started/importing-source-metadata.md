---
uid: bimlflex-trial-importing-source-metadata
title: Importing Source Metadata
---
# Importing Source Metadata

Importing metadata from database connections is a convenient and agile way to start modeling data from a source to a Data Warehouse.

By reading existing metadata instead of manually entering it or manually creating tables for the Data Warehouse it is possible to increase development speed and quality.

The BimlFlex App provides an import metadata function for connections.

Click the Connections page in the app and click the source connection `AWLT_SRC`. In the page, click the `Import Metadata` button to start the metadata importer.

Validate the settings, unselect the `Import Views` to only import metadata from the `SalesLT` tables. The remaining settings are left as defaults.

BimlFlex will read all specified metadata from the chosen connection into the BimlFlex metadata repository.

The metadata import dialog provides a set of options for managing

* What tables and views import
* Naming conventions to apply
* Integration Key inference
* how to treat already imported Metadata
* If the Record Source code from the connection should be added to the Integration Key. This is useful in the Data Vault modeling process in cases where unwanted data overlap might happen
* If source relationships should be re-pointed to use the Integration Keys instead of using source constraints. Useful in Data Vault modeling to allow relationships to be built using derived Integration Keys

## Detailed Steps

1. Open the BimlFlex project in the BimlFlex app
1. Validate the `Connections`, `Batches` and `Projects` pages to allow the metadata import to proceed
1. Navigate to the `AWLT_SRC` source connection
1. Click the Import Metadata button to display the dialog
1. Select the `SalesLT` schema in the schema explorer. Deselect the `import views` option to only import metadata from the tables in the `SalesLT` schema
1. Click `Import Metadata` to read the metadata from the source into the metadata repository
    Tables are added to the `Objects` page. Columns are added to the `Columns` page
1. In BimlStudio, click the `Refresh Metadata` button. This will read the new metadata from the database in to the logical view. The logical view will be populated with the tables and with SSIS projects and packages.