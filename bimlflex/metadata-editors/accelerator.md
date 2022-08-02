---
uid: bimlflex-data-vault-accelerator
title: Data Vault Accelerator
summary: Documentation regarding the BimlFlex Data Vault Accelerator, including videos, starting point, user interface, metadata requirements, and entity options
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
# Data Vault Accelerator

This guide provides information on using the BimlFlex **Data Vault Accelerator**, which can be used to simplify the delivery of data solutions that adopt the [**Data Vault**](xref:bimlflex-data-vault-index) modeling approach.

The Accelerator allows the modeler to create and modify the target Data Vault from available source **Objects** and other modeled entities, such as views.

Initially, the Accelerator will use the available source metadata to suggest an initial raw Data Vault. This provides a best-effort, but technical, representation of the (raw) Data Vault based on the references and constraints available in the source metadata. This initial technical Data Vault model can then be further modified and configured to complete the intended target Data Vault model.

The process for modifying the Data Vault towards the intended final result includes applying Business Names or [**Business Modeling**](xref:bimlflex-business-modeling, to provide the correct object names in the target model. This also involves defining additional Hub, Link, and Satellite objects, grouping and splitting objects, relationships, and/or columns as needed.

Multiple Links can be grouped together to create a single unit of work, or split back into multiple Links. Columns can be split into multiple Satellites, or grouped back into a single Satellite.

The Accelerator can be rerun as many times as necessary for incremental modeling and rapid (re)generation of the Data Vault model. In BimlFlex, changes to the model are recommended to be defined using the Accelerator as opposed to manually modifying the objects directly.

> [!NOTE]
> For a quick overview, please watch the [BimlFlex Data Vault Accelerator Introduction Video](https://www.youtube.com/watch?v=<placeholder>?rel=0&autoplay=0)

## Defining the Target Model

Before starting the Data Vault design process, it is important to have an understanding of the expected target model, as well as how the source data should be loaded into this target. BimlFlex supports this through the [**Business Modeling**](xref:bimlflex-business-modeling) feature. This helps define an initial model that is agnostic to the available data sources.

Ideally, this target Data Vault model has the following characteristics:

* Source agnostic
* Aligned with the business process
* Based on Core Business Concepts
* Describes events and transactions through the relationships between the Core Business Concepts

The Accelerator always (re)creates the Data Vault model using the source object metadata. This metadata is initially imported using the [**Metadata Importer**](xref:bimlflex-concepts-importing-metadata), or entered manually. This also includes objects that are specifically defined to act as source, such as **Staged Queries**.

This means that any modifications made to the source object, either via the Accelerator or by directly manipulating the object, are always stored against the source object. This is referred to as _source metadata decoration_. The Data Vault model is always generated based on the source object metadata.

Once changes are made, compare the accelerated metadata with the expected outcome, and tweak accordingly.

### Source Metadata Decoration

By enhancing the source object with additional Accelerator information, it is possible to load the Data Vault directly from the staged data from the source. This is used when the source representation somewhat matches the Data Vault Target model. An example is a source table with Product information that should be loaded to a Product Hub and a Product Satellite. By decorating the source object metadata with additional attributes, such as the Business Name, the Accelerator can create the Data Vault straight from the source. This is a straight-forward and convenient way to model and load the Data Vault without requiring additional metadata entities.

### Using Staged Queries

If the Data Vault modeling and load requirements are more complex, BimlFlex allows the use of a Staged Query object to load the Data Vault. This is often used when the source data needs to be manipulated before it is fit for loading to the Data Vault. Some examples where this is used could be when the data from multiple tables needs to be joined for a complete dataset for the Data Vault load, or when a source table contains multiple entities that should be split into multiple Data Vault loads.

## Accelerating the Data Vault

Based on the available source (and/or staged query) metadata, the Accelerator will show the resulting Data Vault model. When starting this process directly after importing the metadata, it is rare that the accelerated result will be sufficient for the final Data Vault model. The more tweaks will be made, the more the accelerated result will match the intended target model.

Because the Accelerator will always use the source object metadata to generate the Data Vault, it effectively provides a live preview of the design.

Once the Accelerator preview matches the model expectations the metadata can be published to the repository and become instantiated parts of the metadata set.

## Saving the Model

Saving the Accelerator Model will persist the layout and current state to the repository.

## Publishing the Model

Publishing the Accelerator Model will create the Data Vault Objects and instantiate the source to target mappings for each defined source object. The model must be published before the entities can be built and used in the Data Warehouse.

## Sample Workflow

This guide assumes that the BimlFlex environment has been set up and configured, source metadata has been imported and that the source-to-staging process has been defined. There are several sample metadata sets available for which a Data Vault model has been created. There is also a 'Sample 02 - MSSQL After Import' where only source metadata has been imported.

The following guide will take us through the Accelerator process end to end.

1. Start with sample `02 - MSSQL After Import`
1. Open the Accelerator, select objects to include in the Acceleration
1. Preview the Accelerated target model
1. Review and tweak the metadata
1. Publish the model to the metadata repository
1. Refresh the metadata into the BimlStudio project
1. Build and review the database and SSIS/ADF artifacts in BimlStudio

### User Interface

It is possible to select only a subset of objects, or filter the objects visible in the Acceleration. This is useful where the full set of source tables have been included but the Data Vault is modeled and built in an agile, iterative process. Starting to source and persist changes from the source without having to consider the Data Vault process means the Staging part of the solution can be completed sooner.

Constraining the Data Vault Acceleration to a subset allows for a more agile delivery where valuable parts of the solution can be put to good use as soon as they are done.

![Accelerator User Interface](images/bimlflex-app-accelerator-full-ui.png "Accelerator User Interface")

The Accelerator shows available source objects in the left-hand **Treeview** and a preview of the target Data Vault model in the content pane. The page has a toolbar with several interaction options available

| Icon | Description |
| ---- | ----------- |
| Search | Search through entities in the treeview |
| Filter funnel | Filter Funnel allows filtering contents in the **Treeview** based on Integration Stage and Record Source |
| Save | Save the current model view for later acceleration |
| Discard | Discard any changes being made to the model that has not yet been saved |
| Publish | Publish the previewed model to the repository to instantiate the entities into the metadata, allowing them to be used in load processes |
| Project | Select which Data Vault load project should be used when publishing |
| Settings | Quick View access to settings related to the Data Vault Accelerator |
| <img src="images/bimlflex-app-action-switch.png" /> Columns | Toggle to show all columns on the source or preview panes. |
| <img src="images/bimlflex-app-action-switch.png" /> Data Types | Toggle to show all data types in the source or preview panes. |
| <img src="images/bimlflex-app-action-switch.png" /> Expanded | Toggle to show expanded view (including Satellites) or the backbone of the model (only Hubs and Links) |
| Refresh Layout | Re-layout the diagram in the content pane |
| <div class="icon-col m-5"><img src="images/svg-icons/print.svg"/></div> | Download the diagram shown in the contents pane in `svg` format |

### Content mini-map

The content pane has an overview mini-map that shows the visible area in relation to the full model.

### Content layout

The objects in the preview can be laid out automatically or arranged manually by dragging the entities. The refresh layout button allows applying an automated layout to the contents.

To move the viewport perspective in the diagram pane, hold the `ctrl` or `space` button while clicking and dragging. To select multiple entities in the preview pane, click and drag a selection area with the mouse.

### Beginning Acceleration from the Objects Screen

Users may accelerate models for specific objects from the **Objects** Action Bar in BimlFlex, as opposed to navigating to the Accelerator option in the main navigation.

![Accelerate Option from Objects Action Bar](images/objects-accelerate-alternative.png "Accelerate Option from Objects Action Bar")

## Updating the Model to Meet Requirements

There are numerous options for manipulating the source metadata so that the Accelerator will produce the desired Data Vault model. Some of the common requirements include:

* Choosing the Integration Key used for the Hubs. By analyzing business processes and the source data it is possible to identify any Enterprise Wide Business Keys that aren't the technical source keys.
* Pulling disparate information stored in complex relationships in the source into a Satellite connected to the relevant Hub. For descriptive attributes, such as addresses, there is normally no need to maintain complex relationships from the source. An address could instead be modeled as an attribute of the entity with a location.
* Adjusting the grain in a Unit of Work, so that the correct Hubs are included in Links.
* Separating data into different Satellites based on rate of change, storage requirements or similar.
* Reviewing Driving Key relationships for Links.

## Model the target using the Accelerator

The BimlFlex Data Vault Accelerator applies the existing source metadata to create the target model. The modeler adds and updates the information in the Accelerator to allow the Accelerator to create the expected target model.

### Object Accelerator Type

Each source object in the model has a target Accelerator Type:

* Satellite
* Link
* Hub
* Link Satellite
* Reference
* Reference Satellite
* Exclude DV
* Same As Link
* Hierarchy Link

By default, each source table will be defined as a Hub Accelerator Type.

### Satellite Accelerator Type

An object that has a set of descriptive attributes for another Hub object can be defined and accelerated to a Satellite. The source object needs a defined Integration Key that has a relationship defined to the main Hub source object through the reference table/column metadata attribute.

### Link Accelerator Type

An object that mainly is used to describe relationships can be defined and accelerated to a Link table. The source object needs a defined primary Integration Key that will be the primary key of the Link table. The source object also needs columns defining each relationship to other source tables describing the related Hubs. Any attribute in the Link source table that is not a primary/relationship Integration Key will be accelerated to a default Link Satellite attached to the Link.

### Hub Accelerator Type

An object that describes a Core Business Concept can be defined and accelerated to a Hub table. The source object needs a defined primary Integration Key that will be the integration key of the Hub table. Any outgoing relationship from the source table to other tables can be defined using reference columns and will allow the Accelerator to create a Link table defining the relationship. Two or more relationships can be grouped together to form a single Link relationship instead of multiple separate Link tables. Any attributes that are not defining the Hub or relationships will be accelerated to a default Satellite attached to the Hub.

### Link Satellite Accelerator Type

An object that has a set of descriptive attributes for another Link object can be defined and accelerated to a Link Satellite. The source object needs a defined Integration Key that has a relationship defined to the main Link source object through the reference table/column metadata attribute.

### Reference Accelerator Type

An object that holds disconnected reference data can be Accelerated to a Reference table. The reference table does not contain a hashed primary key, instead relying on the defined Integration Key as the primary key.

### Reference Satellite Accelerator Type

An object that describes a Core Business Concept where no relationships should be instantiated can be defined and accelerated to a Reference Satellite table. The source object needs a defined primary Integration Key that will be the integration key of the Hub table. Any outgoing relationship from the source table to other tables will be ignored.Any attributes that are not defining the Hub will be accelerated to a default Satellite attached to the Hub.

### Exclude DV Accelerator Type

Any source object that should not be included in the Data Vault can be defined to be excluded from the Data Vault Accelerator.

### Same As Link Accelerator Type

An object that is used to describe a same-as relationship can be defined and accelerated to a Same As Link table. The source object needs a defined primary Integration Key that will be the primary key of the Link table. The source object also needs columns defining the two relationships to the source table describing the related Hub. Any attribute in the source table that is not a primary/relationship Integration Key will be accelerated to a default Link Satellite attached to the Link.

### Hierarchy Link Accelerator Type

An object that is used to describe a hierarchical relationship can be defined and accelerated to a Hierarchy Link table. The source object needs a defined primary Integration Key that will be the primary key of the Link table. The source object also needs columns defining the two relationships to the source table describing the related Hub. Any attribute in the source table that is not a primary/relationship Integration Key will be accelerated to a default Link Satellite attached to the Link.

## Acceleration Settings

All acceleration uses behaviors derived from the DataVault Settings. These settings are available in the Settings pages and can also be directly accessed from the Accelerator through the Settings Dialog

![Accelerator Settings](images/ss-bfx-21.1-accelerator-data-vault-settings.png "Accelerator Settings")

## Context Actions

There are modeling actions available on most of the tables and columns in the preview pane. By clicking on the header for an object or the on the column BimlFlex shows an ellipsis button that allows a context menu to be shown.

### Context Action for Satellite Objects

When clicking the object header for a Satellite the following actions might be available:

#### Remove RecordSource

When a Satellite has an automatic name that includes the connection Record Source, this action will remove the Record Source code from the Satellite name. Using the Record Source in the name allows for automatic source agnosticism in the Data Vault, removing it is a modeling choice.

#### Revert Split

If a source object has been split to load several Satellites, then split Satellites can have the slit reverted from the object context menu. This will restore the columns into the original Satellite.

### Context Action for Satellite Columns

When clicking a column for a Satellite the following actions might be available:

#### Exclude From DV

Choose this to exclude the column from the Data Vault load. The column will still be loaded from source to staging/persistent staging if applicable, but will be excluded from the Data Vault load.

#### Split Satellite

Choose this to slit one or more columns into its own Satellite. This allows maintaining multiple Satellites loaded from the same source object. Splitting Satellites allows control over different rates of change, different storage locations for target tables and context management.

### Context Action for Link Objects

When clicking the object header for a Link the following actions might be available:

#### Split Link

When two or more Links have been joined, it is possible to revert that action and 'split' the Links into individual relationships.

## Drag and Drop Actions

When dropping a Link object on top of another Link object that is created from the same source object, it is possible to join them together into a single Link, or Unit of Work. When joining the objects, the new Link name is specified in the dialog.

## Adjusting Model behavior

The **Model** attributes for Source Objects and Columns are used by the Data Vault Accelerator.

Updating this with target model information allows the Accelerator to generate the correct Data Vault model.

There are overrides for Objects as well as Columns

### Object Overrides

Double-clicking on a Data Vault Object in the preview opens a details pane that shows details about the target as well as about any source object mapping to the target.

It is possible to manage details about the target object, such as the related Business Entity.

It is possible to manage details about the source object, such as the related Business Entity as well as control the Business Name, Business Short Name and Business Grouping. These Business attributes control the behavior of the Accelerator and allows easy control of the generated target model.

### Object Business Entity

Allows the Accelerator to use a pre-defined Business Entity as the target definition. Use Business Modeling to define the Business Model that should be used and map source objects and columns to these targets to allow the Accelerator to use names and attribute definitions in the target model.

More detailed information on the Business Modeling is available here: [Business Modeling](xref:bimlflex-business-modeling)

### Object Business Name

When not using Business Modeling, add the expected target Business Name here. This will be used to drive target names. For a source object with Accelerator Type Hub, the Business Name will be used for the Hub name as well as the default Satellite name

Example: If a source system has an entity name of "GL002" and the actual business name is "GeneralLedger" the Accelerator will convert this to "HUB_GeneralLedger" and "SAT_GeneralLedger_<rs>" when the Business Name for the source object is defined as GeneralLedger.

### Object Business Short Name

The Business Short Name is used when naming Links from a Hub source object. The default 2-way Link Name is based on the 2 Hub source Objects Business names, or if present, Business Short Names. For a source Object with an outgoing relationship, the Accelerator will create a Link instantiating the relationship. For the AdventureWorksLT Product source object and its relationship to the Product Category, the default Link name generated is: `LNK_Product_ProductCategory`. Using a Business Short Name `Prd` for the Product will generate the shorter Link name `LNK_Prd_ProductCategory`.

The second part of the Link Name is generated from the Business Grouping or Business Reference attribute of the column generating the relationship. This is normally the relationship Integration Key that has the reference set to the related table. For the SalesLT.Product source table it is the `ProductCategory_BK` column for the relationship to the ProductCategory Hub source object.

Edit the related columns Business Reference or Business Grouping to reflect the expected name. The Business Reference attribute controls both the column name in the Link table and the Link Object name, the Business Grouping controls the Object name.

### Object Business Grouping

The Business Grouping is used to group related Objects together for Acceleration. The Filtering option in the **Treeview** allows the user to filter on defined Business Groupings. This allows for iterative modeling where a team works on a grouping at a time.
