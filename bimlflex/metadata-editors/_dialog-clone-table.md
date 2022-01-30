#### Clone Table Dialog

The [Clone Table] function is provided to allow for quick generation of **Dimensions** and **Facts**.
 This is designed to be used on manually created view, generally deriving from the **Data Vault**, that has been transformed to the desired end state.
 Once that view has been imported enter your [Target Schema], choose your *Target Object Type*, set your [Clone Table Options](#clone-table-options) and click <img class="icon-inline" src="images/svg-icons/save.svg" /> **Save**.
 Please refer to the links below for details on creating a **Data Mart**.

![Clone Table Dialog - mtb-20-image](images/bimlflex-app-dialog-clone-table.png "Clone Table Dialog")

##### Clone Table Options

| Option                     | Description                                                                                                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overwrite Existing         | When enabled if the **Object** or associated **Columns** already exist, the **Object** and/or **Columns** will be overridden with current settings.  When disabled only not existing entities will be created.                                                        |
| Add Target Column Mappings | This will automatically map the appropriate **Target Columns** required to build the table.                                                                                                                                                                           |
| Add Identity Column        | Adds an **IDENTITY** column to be used as the **Surrogate Key** (SK) for the cloned table.  This is common among **Dimensions** to support **Type 2** (or history tracking) values.  Generally not used when building a **Fact** unless there is a specific use case. |

> [!NOTE]
> For more details on building a **Data Mart** see the associated link(s).
>
> Getting Started:  
> [Dimensional Model](xref:bimlflex-getting-started-dimensional-model)
>
> Concepts:  
> [Data Mart Templates](xref:bimlflex-data-delivery-index)
