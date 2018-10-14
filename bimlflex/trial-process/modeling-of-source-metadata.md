# Modeling of Source Metadata

## Supporting Videos

![Modeling of source Metadata](https://www.youtube.com/watch?v= TODO ?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- @bimlflex-user-guide

## Modeling of source Metadata

Once the source system metadata has been imported in to BimlFlex it is possible to model it in the Excel-based metadata management application.

Modeling through metadata management is the way to tweak the process to match ingestion and business requirements and allows BimlFlex to automatically generate the required SQL structures and SSIS packages for the ETL process.

for a Data Vault based project, modeling the source metadata also affect the Accelerator behavior and the resulting Data Vault model.

## Detailed Steps

The following detailed steps walks through the options for modeling of source Metadata as recommended for the trial

### Reviewing keys

BimlFlex has 3 types of keys managed through metadata:

- Primary Key
- Business Key
- Alternate Business Key

A Primary Key is used to define the grain of the table, same way as a primary key normally works. For a staging and persistent staging load the primary key is used to differentiate between a new row and an update to an already loaded row. When generating table scripts from BimlFlex the defined primary key columns will be used to build the staging and persistent staging primary keys. The default behavior is to generate the Primary Key together with the `RowEffectiveFrom` column.

A source table can have multiple columns in the Primary Key definition.

A Business Key is the key describing the business entity stored in the table. It is used in Data Vault modeling to describe the Core Business Concept or Enterprise Wide Business Key candidate that will be used to model and load Hubs. The Business Key can be the same as the Primary Key or it can be derived from a combination of attributes. The Business Key is always a string representation so the default creation behavior in BimlFlex is to apply the `FlexToBk()` expression to convert the source column data types to a string. The import metadata function can derive a Business Key from either the Primary Keys or the Unique Constraints from the source.

An Alternate Business Key is used as a backup of the source Primary Key when the primary key definition needs to be changed in the modeling process. If there are Primary Key columns defined as derived columns that aren't persisted into the Persistent Staging layer BimlFlex will use the Alternate Business Key instead. This is the normal approach for a Data Vault model.

For the trial process using a Data Vault destination layer and using the Accelerator to accelerate the Data Vault objects, the source modeling will use the Business Keys to define the relationships. This allows the Accelerator to derive all Hubs, Links and Satellites based on the source metadata and the Business Key definitions used as well as their relationships. This will also use the defined Business Key as the single Primary key to allow the relationships to be defined in the metadata.

In the `Import Metadata` dialog, the option to redefine relationships based on Business Keys was used. This has created a Main Business Key per imported table, based on the Primary Key of the source. This has also been set as the Primary Key for the table. For each foreign key constraint an additional Business Key has been created. The related table and column data has been set between these Business Keys and the related main Business Key column. This will allow the BimlFlex Data Vault Accelerator to create Hubs and Links using the defined Business Keys without additional configuration.

### Applying Data Type Mappings, expansion of data types

Source system data types can be expanded to be more accommodating. This enhances resiliency in the load process when the source system data types change.
The Data Type Mapping feature is [described in a separate document and video](applying-data-type-mappings.md)

For the trial process, the default Data Type Mappings will be added in the next step, as a separate exercise.

### Defining Business Keys

Defining Business Keys to use for Data Vault modeling is a Business Analysis phase in the implementation. finding the correct Business Key definition relies on business process and source system knowledge as well as source system data profiling. For true cross-system key matching in Data Vault, extensive analysis across all candidate sources is normally needed. Defining the actual Business Key is a more straightforward exercise. For a given source table there can be only one main Business Key column. For scenarios with multiple source keys, these columns are concatenated with a separator character to build a single Business Key. This maps to the Business Key column in the Data Vault Hub tables and allows the Data Vault model to adhere to the pattern.

BimlFlex provides an expression to concatenate and separate columns into the Business Key using the `FlexToBk(@@rs, Column1, Column2, Column3)` function. This can be applied in SSIS for SSIS load patterns and in SQL for SQL patterns. The trial uses the SSIS pattern and will implement the expression in a derived column in the generated SSIS packages.

The concatenation character used with multiple columns is defined in the BimlFlex Settings using the `ConcatenatorBusinessKey` key. The default concatenation character is `~`.

BimlFlex also provides a shortcut code for accessing the current connections Record Source code when building the Business Key. Use the `@@rs` to inject the current record source code in to the Business Key. This is commonly used when there is key overlap between source system with different meaning. This can be when the same codes mean different things and, more commonly, when synthetic keys are used that are commonly reused, such as number sequences.

For the trial process, verify that the `@@rs` shortcut was added to all Business Keys by the import metadata process. For the Address table that would be `FlexToBk(@@rs, AddressID)`.

More information and considerations for Business Keys are available in the [Building Business Keys for Data Vault](building-business-keys-for-data-vault.md) section.

### Defining Relationships

Source system relationships describe the metadata so that the correct load patterns can be used. For Data Vault, relationships help the Accelerator build out Link constructs between entities. When a metadata import is performed, BimlFlex will add any constraints defined in the source. This information is maintained in the `ReferenceTable` and `ReferenceColumnName` columns in the Columns sheet in the metadata. The chosen reference column must be a Primary Key in the related table.
Relationships are also present in the Data Vault and Dimensional model to describe relationships between Data Vault entities such as Hubs and Satellites as well as Facts and Dimensions to define load patterns.

For the trial process, relationships are defined between the Business Key derived from the Foreign Key and the Business Key derived rom the Primary Key. Review the relationship definitions in the columns tab.

As an example, the Product source table has its own `Product_BK` column that is derived from the Primary Key and has a `SsisExpression` expression of `FlexToBk(@@rs,ProductID)`. This column is marked as the Business Key of the table (`BusinessKey` set to `Y`). It also has 2 derived Business Key columns that reference the 2 objects related to the Product, the ProductCategory and ProductModel.

These derived BK columns create the same Business Key value as their related table BK's and have the ReferenceTable and ReferenceColumnName mapped to these related tables Business Keys.

| ColumnName         | IsDerived | ModelReference  | SsisExpression                   | ReferenceTable                           | ReferenceColumnName |
| ----------         | --------- | --------------  | --------------                   | --------------                           | ------------------- |
| ProductCategory_BK | Y         | ProductCategory | FlexToBk(@@rs,ProductCategoryID) | AdventureWorksLT.SalesLT.ProductCategory | ProductCategory_BK  |
| ProductModel_BK    | Y         | ProductModel    | FlexToBk(@@rs,ProductModelID)    | AdventureWorksLT.SalesLT.ProductModel    | ProductModel_BK     |

This metadata and these relationships will allow BimlFlex to accelerate a Data Vault Hub table from the Product table based on the main Product_BK Business Key and Links to the ProductCategory and ProductModel entities as well as store all product attributes in satellites attached to the Product Hub.

### Defining object related Metadata

The objects tab contains the tables from the `AdventureWorksLT` source system as well as any Data Warehouse tables created and accelerated. The metadata can be modelled and tweaked in several ways on the object and table level.

Some main approaches are:

- Defining ObjectType definitions for Data Vault candidate object types.
- Renaming columns and providing naming guidelines to the accelerator
- Tweaking the load pattern used by filtering, joining and grouping the data queried from the source.
- Adding inherited objects that apply specific query logic

#### Create Inherited Tables

In the trial process, 2 inherited objects are defined and loaded in parallel to their parent object. These 2 objects showcase the inheritance feature as well as the Join and Where filter object options.

The Customer Address information in the AdventureWorksLT source is mapped through the many to many `SalesLT.CustomerAddress` table. This can be modelled as a Link relationship between The Customer and the Address entities. Either with a Link Satellite or as a Hub-Satellite in combination with the Link.

Another option from a modeling perspective is to view the address information as attributes attached to the Customer. This will create a less complex model with the address data instantiated as satellites attached to the Customer. The design decisions are a core part of the Data Vault process and depends on a range of considerations for Business Process, source data behavior and more. In the trial two different approaches are illustrated and loaded in parallel. Both the Link relationship based on the source data model and the attached attributes model based on associating the address data directly with a customer.

Add metadata details for the inherited tables to create two new entities.

Object metadata:

| Project | Connection | Schema | ObjectName | JoinSql | WhereSql | ObjectAlias | ModelObjectType | InheritFromObject | SameAsInherited | UseInheritedName |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXT_AWLT | AdventureWorksLT | SalesLT | CustomerMainOfficeAddress | `INNER JOIN SalesLT.CustomerAddress ca on ca.AddressID = a.AddressID INNER JOIN SalesLT.Customer c ON c.CustomerID = ca.CustomerID` | `WHERE ca.AddressType = 'Main Office'` | a | Satellite | SalesLT.Address | | Y |
| EXT_AWLT | AdventureWorksLT | SalesLT | CustomerShippingAddress |`INNER JOIN SalesLT.CustomerAddress ca on ca.AddressID = a.AddressID INNER JOIN SalesLT.Customer c ON c.CustomerID = ca.CustomerID` | `WHERE ca.AddressType = 'Shipping'` | a | Satellite | SalesLT.Address | | Y |

In this case the new objects inherit from the Address table, they select from the same source table but use different queries and load to different staging tables.

- They have `UseInheritedName` set to `Y` as the data will be loaded from the inherited table from the source (the main part of the query).
- They have `SameAsInherited` set to `N` as they will have other columns added through the join condition and will load to a different staging table.
- There are using a join clause to join through the CustomerAddress table to the Customer table
- They have Where clause filters applied to load different rows.
- The ModelObjectType is set to Satellite as these will be attributes associated with the Customer entity

Column Metadata

| Connection | Object | ColumnName | DataType | Length | Precision | Scale | Ordinal | ChangeType | IsPrimaryKey | IsBusinessKey | IsAltBusinessKey | IsIdentity | IsNullable | IsNotPersistent | | ExcludeFromModel | ModelOverrideName | ModelGrouping | ModelReference | DataTypeMapping | DefaultValue | SqlExpression | SsisExpression | IsDerived | SolveOrder | ReferenceTable | ReferenceColumnName |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AdventureWorksLT | SalesLT.CustomerMainOfficeAddress | Customer_BK | String | 100 | | | 1 | Key | Y | Y | | | | Y | | | | Customer | | | | FlexToBk(@@rs,CustomerID)|Y|0||AdventureWorksLT.SalesLT.Customer|Customer_BK|
|AdventureWorksLT|SalesLT.CustomerMainOfficeAddress|CustomerID|Int32||||2|Key|||Y||||||||||c.CustomerID|||0||
|AdventureWorksLT|SalesLT.CustomerMainOfficeAddress|AddressID|Int32||||3|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerMainOfficeAddress|AddressLine1|String|60|||4|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerMainOfficeAddress|AddressLine2|String|60|||5|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerMainOfficeAddress|City|String|30|||6|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerMainOfficeAddress|StateProvince|String|50|||7|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerMainOfficeAddress|CountryRegion|String|50|||8|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerMainOfficeAddress|PostalCode|String|15|||9|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerShippingAddress|Customer_BK|String|100|||1|Key|Y|Y||||Y||||Customer||||FlexToBk(@@rs,CustomerID)|Y|0||AdventureWorksLT.SalesLT.Customer|Customer_BK
|AdventureWorksLT|SalesLT.CustomerShippingAddress|CustomerID|Int32||||2|Key|||Y||||||||||c.CustomerID|||0||
|AdventureWorksLT|SalesLT.CustomerShippingAddress|AddressID|Int32||||3|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerShippingAddress|AddressLine1|String|60|||4|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerShippingAddress|AddressLine2|String|60|||5|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerShippingAddress|City|String|30|||6|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerShippingAddress|StateProvince|String|50|||7|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerShippingAddress|CountryRegion|String|50|||8|Type 1||||||||||||||||0||
|AdventureWorksLT|SalesLT.CustomerShippingAddress|PostalCode|String|15|||9|Type 1||||||||||||||||0||

- The column metadata contain the required columns and their data types.
- The joined column from the Customer table has an SQL expression applied.
- The derived Customer_BK has a FlexToBk() applied that uses the joined CustomerID column from the customer table.
- The derived Customer_BK has a reference to the main Customer table and its main BK. This allows the Data Vault accelerator to treat these tables as Satellite candidates.

These metadata operations will allow the address information to be loaded twice, and the tables will be candidates for different types of target objects for the Data Vault.

### Creating Roleplaying objects

The `SalesLT.ProductModelProductDescription` table is a candidate for a Link destination in the Data Vault. It is a relationship table that links models to descriptions based on their Culture. The ProductModelID is a Foreign Key to the ProductModel table and the ProductDescriptionID is a Foreign Key to the ProductDescription table. While it is possible to consider this a candidate for a logical fold as was applied to the Address tables this is also a primary candidate to introduce derived objects. The Culture field is part of the Primary Key but is not a reference to a separate table. The culture entity can be considered a Hub that should be part of the 3 way link built from the table. To create the Hub Culture from the source table the metadata will be changed to accommodate a derived Hub from the Culture data. It will not have any specific Satellite attributes or effectiveness readily available from this source but could be expanded upon with data from other sources in the future. The acceleration will create a HUB_Culture for the Business Key and a SAT_Culture_AWLT for the CultureCode field.

The Business Key creation in this case does not need to apply the Record Source Code, the Culture codes (ar, en, fr, he, th, zh-cht) are all good candidates for direct cross-system integration.

Worth noting on the Culture codes is that they are all lower-case and they are all fixed width strings. The Business key creation will by default upper-case and trim these codes. The original attribute value is stored in the Satellite.

Add a new Object with the following data in the Objects sheet:

| Project | Connection | Schema | ObjectName | ObjectType | IsNotPersistent | ExcludeFromBuild | ExcludeFromModel | ExcludeFromValidation | CreateSql | OverrideSql | FromSql | JoinSql | WhereSql | ObjectAlias | SelectBySql | GroupBySql | OrderBySql | ModelOverrideName | ModelOverrideShortName | ModelGrouping | ModelObjectType |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXT_AWLT | AdventureWorksLT | SalesLT | Culture | Table |  |  |  | Y |  | SELECT DISTINCT Culture AS CultureCode FROM SalesLT.ProductModelProductDescription |  |  |  |  |  |  |  |  |  |  | Hub |

Add the following in the Columns Sheet:

| Connection | Object | ColumnName | DataType | Length | Precision | Scale | Ordinal | ChangeType | IsPrimaryKey | IsBusinessKey | IsAltBusinessKey | IsIdentity | IsNullable | IsNotPersistent | ExcludeFromModel | ModelOverrideName | ModelGrouping | ModelReference | DataTypeMapping | DefaultValue | SqlExpression | SsisExpression | IsDerived | SolveOrder |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AdventureWorksLT | SalesLT.Culture | Culture_BK | String | 100 | | | 1 | Key | Y | Y | | | |  Y | | | | Culture | | | | FlexToBk(CultureCode) | Y | 0 |
| AdventureWorksLT | SalesLT.Culture | CultureCode | StringFixedLength | 6 | | | 2 | Key | | | Y |  | | | | | | | | | | | | 0 |

To define the 3 way relationship for the future Link, update the SalesLT.ProductModelProductDescription source table so that there is a Culture Business Key column has a reference to the Culture objects Business Key. Do this by selecting the Culture column and click the Generate Business Key button to generate a Business Key. In the dialog, change the Column Name to CultureCode_BK. Make sure the Add Record Source and IsBusinessKey checkboxes are both unselected.

Click Create to create the Business Key column. The newly created Business Key is added to the bottom of the sheet, scroll down and review the newly created Business Key. Add the reference to the Culture Table and Culture_BK column. Validate that the ModelReference is set to Culture.

The metadata Objects has now been expanded with 3 new derived objects using different approaches. It illustrates the flexibility of the metadata and model driven approach and also adds additional Object Types to illustrate the Data Vault acceleration options.

#### Naming conventions

Using the naming override to define names in the Data Vault layer

`ObjectAlias`

When tweaking the SQL source select query that is generated the ObjectAlias is the alias that will be used for the source object. this is useful for scenarios where a join condition is used. The Object Alias can be used in the join condition and other SQL operations. If the Join Condition is `INNER JOIN otherTable o on o.Key = OriginalTable.Key` Then the Object Alias can be used to refer to the main table.

`ModelOverrideName`

The Override names are used to rename source object names into the Data Vault.

A source system objects and columns might have names not suited for the Data Vault. Renaming them into the Data Vault allows the business meaning to be clearer.

Use this to translate source column names to business entity names. This will allow the Data Vault to use business names while the source to staging and persistent staging uses the source names. It is also possible to set the behavior of the name overrides so that they are applied to the staging process. In the trial, model override names are applied to the Sales Order source tables:

| Object Name      | ModelOverrideName |
| ---------------- | ----------------- |
| SalesOrderHeader | SalesOrder        |
| SalesOrderDetail | SalesOrderLine    |

This will override the names used in the Data Vault. This exemplifies the naming convenience in BimlFlex.

`ModelOverrideShortName`

TODO

`ModelGrouping`

The Model Grouping is used in agile Data Vault acceleration. This allows a subset of all objects to be included in an acceleration.

This feature is described in more detail in the Acceleration part of the Trial Process Documentation.

`ModelObjectType`

This defines how the Data Vault Accelerator will accelerate the entity. Define each model object as either a Hub, Satellite or Link Object type to allow the accelerator to build the expected destination object.

The imported Objects from the source are by default all defined as Hub candidates in the ObjectType column.

The 2 Address inherited objects were defined as Satellites, the added Culture object was derived as a Hub.

The rest of the Objects needs to be reviewed and updated to the proper ObjectType as defined below.

- Hub:
     A Hub object type contains it's own primary Core Business Concept entity and the Business Key is distinct and unique for each row in the table. This will accelerate a Hub object from the main Business Key, one or more satellites populated from the attributes columns and a Link relationship for each referenced table.
- Link:
    A Link object type is a many to many relationship type table that maps several Hub entities together. In the AdventureWorksLT source data the `SalesLT.CustomerAddress` can be seen as a potential Link Model Object Type candidate. It's Primary Key is made from 2 Foreign Keys that point to 2 Hub candidate tables. The accelerator can accelerate this to a Link and store the attributes in a Link Satellite if the ModelObjectType is set to Link for that object. The acceleration of Link Satellites is also controlled by the `DVAccelerateLinkSatellites` setting.
- Satellite:
    A Satellite object type is an object that is on the same grain as and describes entities in the primary Business Key table. These can be mapped as Satellite objects to the main table and all attributes in the table will be mapped to one or more satellites attached to the primary tables Hub.

Update the ModelObjectType of the Objects to match the following. This will allow the accelerator to accelerate the expected destination model from the source data:

| Object                         | ObjectType |
| ------------------------------ | ---------- |
| Address                        | Hub        |
| Customer                       | Hub        |
| CustomerAddress                | Link       |
| CustomerMainOfficeAddress      | Satellite  |
| CustomerShippingAddress        | Satellite  |
| Culture                        | Hub        |
| Product                        | Hub        |
| ProductCategory                | Hub        |
| ProductDescription             | Hub        |
| ProductModel                   | Hub        |
| ProductModelProductDescription | Link       |
| SalesOrderDetail               | Hub        |
| SalesOrderHeader               | Hub        |

#### Load Pattern Tweaks

`CreateSql`

Overrides the object creation script. Can be used to completely override the object creation. This is useful for views that are used in the Data Warehouse where the definition of these views are required to be maintained in the metadata. Since the automatic object creation is dynamic and accommodates any changes to the metadata it is recommended to only use the `CreateSql` functionality when needed.

In the trial process there are abstraction layer views for the dimensional model defined in the `CreateSql` metadata. This is used later in the process.

`OverrideSql`

Overrides the source SQL Select statement for the object. Can be used to completely override the select statement. This is useful for scenarios where the required select statement is too complex to be built automatically from the rest of the metadata. Since the automatic SQL creation is dynamic and accommodates any changes to the metadata it is recommended to only use the `OverrideSql` functionality when needed.

The `OverrideSql` functionality is used in the Culture object in the trial.

`JoinSql`

the `JoinSql` function allows the addition of join statements to the generated source query. This is useful for gathering additional data into the query, either for adding columns or for allowing additional filter conditions. A common use case is for Business Keys to be joined in when modeling a Data Vault on Business Keys rather than technical keys.

In the trial process there are 2 derived tables that use the `JoinSql` function to derive different types of addresses and maintaining them as separate entities in the staging layer and Data Vault.

`WhereSql`

The `WhereSql` function allows the addition of where statements to the generated source query. This is useful for filtering. Note that load parameters are added automatically to the Where clause when using the parameters function so there is no need to manually inject them in to the Where clause through the `WhereSql` functionality.

In the trial process there are filtering added to 2 derived tables to filter only certain types of addresses.

`GroupBySql`

The `GroupBySql` function allows the addition of Group By statements to the generated source query.

In the trial process the `GroupBySql` functionality is not used.

### Defining columns related metadata

#### DataType, Length, Precision and Scale

The source datatype of the column and its length, precision and scale as applicable to the type. For the trial all data types are kept as they are from the import and match the source. For the Data Warehouse the data types are expanded using the Data Type Mappings feature in the next step.

#### Ordinal

The order of the source columns. This is used to order the table definition and select statement. The trial keeps the order of the source.

#### ChangeType

The change type of the column. For source columns, use Key or Type 1. For Dimension attributes, define of the changes are tracked using Type 1 or Type 2 logic. Other types are relevant in certain scenarios, but not used in the trial at this stage. Hash Distribution Keys are used in Azure SQL Data Warehouse, Multi Active Keys in Multi Active satellites etc.

#### IsPrimaryKey

Marks the primary keys of the source table. For Data Vault acceleration, relationships and keys are modelled using the Business Keys instead of the source primary keys.

When Importing metadata for the trial, the `Change References to Business Keys` checkbox was checked. This changed the primary key definitions for the source tables to the derived Business Keys. As the trial mainly focuses on building a Data Vault, this is the expected behavior. Another column can only reference the Primary Key of a table.

#### IsBusinessKey

Marks the primary Business Key of the source table. For Hub candidate tables this is the column that will be accelerated to and populate the Business Key of the Hub.

#### IsAltBusinessKey

This alternate key column is used for the persistent staging table when the primary keys aren't being persisted.

The default behavior is to not persist any columns that can be directly derived from other columns. As the Business Keys are derived from other columns they are not persisted by default.

When the Primary Key definition is for a non-persisted key BimlFlex will use the Alternate Business Key for the grain of the Persistent Staging table.

#### IsIdentity

Defines if the column is an identity column.

Useful for destination Dimension tables where the Primary key is an identity column.

#### IsNullable

Defines if the column is nullable or not.

A general load recommendation is to treat all incoming attributes as nullable. This allows the data ingestion to succeed regardless of source data quality/nullability.

BimlFlex will automatically apply nullability to all Satellite attribute columns created through the accelerator.

#### IsNotPersistent

Defines if the column is not persistent and thus not stored in the persistent staging layer. Only applicable to columns that are derived and that can be rederived from the persistent staging layer.

#### ExcludeFromModel

Controls if the column should be completely excluded from the metadata model.

Excluding the column will remove it from the table definitions and the source select query. Use this for any imported columns that have been removed from the source, or for any other reason, should be excluded from the metadata model.

#### ModelOverrideName

The Override name to use for the accelerated column.

Use this to translate source column names to business entity names. This will allow the Data Vault to use business names while the source to staging and persistent staging uses the source names.

In the trial, a model override name is applied to the Product table. The `ThumbNailPhoto` column name does not match the naming convention used by the business analysts and a requirement has been presented to name it `ThumbnailPhoto` instead.

This changes the casing for the `N` in the name to `n` to match business naming conventions. The column will be staged using the original colimn name to match the source and will be accelerated to the business process-aligned name in the Data Vault.

Use the column ModelOverrideName to override the name to be used in the Data Vault.

| Object Name     | ColumnName     | ModelOverrideName |
| --------------- | -------------- | ----------------- |
| SalesLT.Product | ThumbNailPhoto | ThumbnailPhoto    |

This will override the names used in the Data Vault. This exemplifies the naming convenience in BimlFlex.

#### ModelGrouping

Is used by the Data Vault Accelerator to group columns into different Satellites and Links/Unit of Work.

Allows a single source table to populate multiple destination Satellites. Breaking attributes in to separate Satellites is used to manage different storage requirements or change rates.

The default naming convention accelerates Satellites with the same name as the primary Hub object. The `SalesLT.Customer` source table is of Object candidate type `Hub` so it will accelerate to a `HUB_Customer` for the Business Key and all attributes will be accelerated to a `SAT_Customer_AWLT`.

For the trial process, add `Password` to the `ModelGrouping` column for the `SalesLT.Customer` Objects `PasswordHash` and `PasswordSalt` columns. These 2 columns will be accelerated in to a separate Satellite named `SAT_Customer_Password_AWLT`.

This allows the password-related fields to be treated differently with ease.

BimlFlex also employs row compression on different change sets. This means that a change in the `Phone` column will result in a new row in the standard satellite and no change to the `Password` Satellite whereas an updated password generates a new row only in the `Password` Satellite.

For the Product Source table columns, add ModelGrouping information to the following columns, this will generate 3 satellites from the Product source table. This will be used to illustrate Point In Time tables later in the trial.

| Column Name                            | Model Grouping |
| -------------------------------------- | -------------- |
| SalesLT.Product.StandardCost           | Price          |
| SalesLT.Product.ListPrice              | Price          |
| SalesLT.Product.ThumbNailPhoto         | Thumbnail      |
| SalesLT.Product.ThumbnailPhotoFileName | Thumbnail      |
| SalesLT.Customer.PasswordHash          | Password       |
| SalesLT.Customer.PasswordSalt          | Password       |

These changes will demonstrate the model grouping feature and accelerate out several Satellites with their own storage options and rate of change management through the BimlFlex row compression feature. It will also allow the creation of Point In Time constructs later.

#### ModelReference

The Model Reference is a friendly name for the connection to another entity. BimlFlex uses this to drive the naming of Links from referenced tables. BimlFlex derives a default name for all reference columns by removing the suffix from the name.

As an example, the source column `ProductCategoryId` becomes `ProductCategory_BK` as the referencing business key and its ModelReference becomes `ProductCategory`.

#### DataTypeMapping

The Data Type Mapping template that should be applied to this column. Used for data type expansion through the Data Type Mappings feature.

More information: @bimlflex-data-type-mappings

This is applied in the next step of the trial process, [Applying Data Type Mappings](applying-data-type-mappings.md).

#### DefaultValue

The column default value. Applied on a database table definition level. Not used in the trial process.

#### SqlExpression

A SQL Expression applied to the column in the source query. This can be used to tweak the SQL query behavior. This is applied to the Customer columns in the derived address objects.

#### SsisExpression

An SSIS Expression applied to the column in a derived column transformation. This can be used to create derived columns using the SSIS derived columns features. It is used by BimlFlex to derive the Business Key contents using the `FlexToBk()` expression for all Business Key columns.

#### IsDerived

Defines if a column is derived or if it is present in the source data set.

#### SolveOrder

Used to define order of operations for dependency chains in derived columns. Used when an SSIS expression derives a column that is used in another derived column. BimlFlex adds these in separate derived column transformations in the defined solver order.

#### ReferenceTable

A reference from this table to another table. Used to model foreign key constraints. BimlFlex Data Vault accelerator uses these relationships to drive the generation of Link tables. The trial metadata uses the reference table and column information to define all metdata model relationships between entities through their Business Keys.

#### ReferenceColumnName

A reference from this table column to another table column. Used to model foreign key constraints. BimlFlex Data Vault accelerator uses these relationships to drive the generation of Link tables.

The referenced column needs to be the primary key of the referenced table.

#### TargetTable

The target table name for source to target mapping. A load project will load this source column to the defined target table. This is populated by the Data Vault Accelerator later.

#### TargetColumnName

The target column name for source to target mapping. A load project will load this source column to the defined target column. This is populated by the Data Vault Accelerator later.

#### ColumnAlias

The Alias the column should be given in the SQL Query. Can be used scenarios where the column is used in other operations such as for joins or derived values using an SSIS Expression.

#### FriendlyName

The friendly name for the Column, currently used as a descriptive field.

#### Description

Any freeform metadata description about the column.

#### DisplayFolder

The Display Folder for the Column, currently used as a descriptive field.

#### Comments

Any freeform metadata comments about the column.

#### IsDeleted

The `IsDeleted` flag is used to mark a row as soft-deleted from the metadata. By setting the flag to `Y` and then setting the current sheet the row is marked as deleted. It is possible to undelete rows by changing the `Show Deleted` setting in the Metadata Connection pane and getting the metadata. Any rows marked as deleted will appear in the sheet marked as deleted.

### Applying load parameters

Deriving a valid delta is one of the most important steps in the analysis of a source system.

For some sources there are change deltas presented for easy consumption, others have CDC enabled. Some sources have no concept of change tracking so the data warehouse architect needs to analyze change patterns and derive an alternate delta sourcing approach.

One common approach is to use a high watermark column that can serve as a parameter for loading. The columns max value at each load is stored in the parameters table in the BimlCatalog and that value is used as a query parameter on the next load.

BimlFlex has direct support for parameter management and can either use a simple single value for sources where the new value can be easily derived (such as for a database destination) or it can support source windowing by querying the high value directly from the source.

Load parameters are not part of the trial process.

More information on parameters is available here: @bimlflex-parameters