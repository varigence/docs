# Partition Editor

Use the Partitions editor to create and modify partitions, including storage and proactive caching settings, for each cube measure group.

![Partition Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition1.png)

Enter a partition's name, estimated rows count, and associated aggregation design in the partition's data grid row. Select a partition source (table name or query) and storage mode in the row's details area.

![Partitions](https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition2.png)

When using a query binding source, enter the query in the T-SQL Editor. Use the Preview Query button to see the query's result.

![Query Editor](https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition3.png)

Click on Advanced Storage Options... to open the Storage Options dialog and specify storage mode, proactive caching, cache settings, tracking tables, and incremental updates for the selected partition.

![Storage Options Dialog General](https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition4.png)

![Storage Options Dialog Notifications](https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition4a.png)

The partition editor's ribbon provides the following functions:

![Partition Ribbon](https://varigencecom.blob.core.windows.net/images-mistdocumentation-editoroverviews/Partition5.png)

Button | Description
--- | ---
Partition | Add a partition to a selected measure group.
Generate Default Partitions | Add a partition to each cube measure group lacking a partition.
