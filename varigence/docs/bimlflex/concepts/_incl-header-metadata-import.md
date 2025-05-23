---
title: Metadata Import
description: Overview of the BimlFlex Metadata Importer.
tags: [BimlFlex, Reference]
---
The BimlFlex platform provides a [**Import Metadata**](./importing-metadata), or metadata importer, feature that is accessible from the [**Connection Editor**](../metadata-editors/connection-editor) and [**Project Editor**](../metadata-editors/project-editor). The metadata importer connects to the data source using the defined connection, reads the data structures and populates the BimlFlex database with the corresponding metadata.

The [**Connection**](../metadata-editors/connection-editor) for which metadata will be imported must have a valid connection string, which points to the database of which the metadata should be imported.

![Import Metadata](/img/bimlflex/bimlflex-connection-editor-metadata-import.png "Import Metadata")

The import metadata feature can be used in any scenario where a schema is available, and there is a need to bring that metadata into a BimlFlex solution. If the data structure changes, the metadata can be imported again so that the model can be updated.

Importing metadata typically applies to connections that have been configured with the `Source System` [**Integration Stage**](../metadata-editors/connection-editor#integration-stages) - as a 'source connection'.



:::tip

The Varigence YouTube channel contains various introduction videos about using BimlFlex and BimlStudio. [This video](https://www.youtube.com/watch?v=ClMJcZPdSks?rel=0&autoplay=0) provides an overview of how to import data structures as metadata into the BimlFlex database.

:::

