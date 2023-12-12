---
title: Connect to the BimlFlex database from BimlStudio
description: Connect to the BimlFlex database from BimlStudio
tags: [BimlFlex, Reference]
---
The BimlStudio project needs to access the metadata in the BimlFlex database in order to generate output.



:::note

The databases are created and updated through the [BimlFlex installer](../installation/installing-bimlflex). It is also possible to set up the databases from the BimlFlex ribbon tab in BimlStudio, or directly by using the **Setup BimlFlex Databases** button.
Additional information is available in the[BimlFlex database installation section](../installation/installing-metadata-database).

:::


To connect the BimlStudio project to the BimlFlex database, connectivity details to the metadata database need to be provided.

![Create New Project](/img/bimlflex/bs-new-project-screen-connectivity.png "Create New Project")

When the connectivity to the BimlFlex database is established, a customer and version can be selected from the drop-down lists. Selecting a customer and version here and saving the project will ensure the right output is generated.



:::tip

Connectivity from BimlStudio to the BimlFlex database can always be opened by clicking the **Open Bundle** option in the BimlFlex ribbon.

:::



:::danger

After updating a Customer or Version, close and re-open the application.

:::


When the BimlStudio project is associated with a customer and version, the metadata can be refreshed on an ongoing basis by clicking the **Refresh Metadata** option in the BimlFlex ribbon. This will reload the metadata, parse and validate it, and update the **Logical View** in BimlStudio.

The following properties are available to configure the metadata connection:

| Field | Description |
|------ | ----------- |
| Server | The address of the server where the BimlFlex database is hosted. |
| Authentication | The credentials used to access the server and database. |
| Database | The name of your BimlFlex Database. This dropdown list is populated with all databases available through the server connection. Clicking **Update** will refresh the list of available databases from the connection defined. |
| Customer | The BimlFlex Customer used to configure the project metadata. Click **Update** to refresh the dropdown with a list of Customers in the BimlFlex database. A new customer can be created with the **New Customer** button. |
| Version | The BimlFlex Metadata Version to be built and used for code generation in BimlStudio. Click **Update** to refresh the list of Versions in the BimlFlex database associated with the selected Customer. |
| Use My Connection Strings | Use the Connection Strings for the current user that were set while the `Use My Connection String` option was enabled. |
| Use My Exclusions | Use the Exclusions defined in the BimlFlex Metadata. |
| Use Quick Parse | Only load placeholder objects into the logical model. This allows for faster processing by not populating the full Biml representation in memory |
