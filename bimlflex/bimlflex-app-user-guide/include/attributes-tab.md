### Attributes Tab - Action Buttons

![BimlFlex App - Batches - Attributes Tab - Actions](images/bimlflex-app-batches-tab-attributes-actions.png "BimlFlex App - Batches - Attributes Tab - Actions")

![Add Action](images/bimlflex-app-action-add-enabled.png "Add Action")  - [Add] will add a new `Attribute` to the `Batch`.  When adding an attribute via this button [Attribute Type] and [Batch] will automatically be auto populated on the associated dialog box.

**Add Attribute Dialog Box**  
![Add Object Dialog Box](images/bimlflex-app-dialog-add-attribute.png "Add Object Dialog Box")  

> [!TIP]
> See the [Attributes documentation](attributes.md) for further details on creating or editing and `Attribute`.

![Edit Action](images/bimlflex-app-action-edit-enabled.png "Edit Action")  - [Edit] will open a dialog box to edit the currently selected `Attribute`.  After edits are complete ensure you click the [Save] button to confirm the changes.

**Edit Attribute Dialog Box**  
![Add Object Dialog Box](images/bimlflex-app-dialog-edit-attribute.png "Add Object Dialog Box")  

> [!TIP]
> See the [Attributes documentation](attributes.md) for further details on creating or editing and `Attribute`.

![Archive Action](images/bimlflex-app-action-archive-enabled.png "Archive Action")  - This will `hard delete` the selected `Attribute`.  This will result in the physical removal of the selected record from the metadata database.  The data will no longer be accessible by the BimlFlex app and will require a Database Administrator to restore, if possible.

**Archive Attribute Dialog Box**  
![Archive Attribute Dialog Box](images/bimlflex-app-dialog-archive-attribute-list.png "Archive Attribute Dialog Box")  

>[!WARNING]
> Archiving is a permanent removal of the selected entity from it's associated table in the metadata database.  Best practice is to use the [Deleted] flag to `soft delete` a entity, and [Archive] should only be used in the case that you both:
>
> 1. The only fix to the current issue requires the [Archive] of the selected entity.
> 2. The full implications that the removing of the selected entity from the metadata system will cause.

### Attributes Tab - Table Descriptions

As mentioned above, only `Batch` level `Attributes` are shown.  All the [Key] or [Key] + [Value] pairs will be assigned to the currently selected `Batch` so the [Object] and [Column] properties will likely be blank.  Please refer to the [Attributes documentation](attributes.md) for further details field values and meanings.

![BimlFlex App - Batches - Attributes Tab - Table](images/bimlflex-app-batches-tab-attributes-table.png "BimlFlex App - Batches - Attributes Tab - Table")