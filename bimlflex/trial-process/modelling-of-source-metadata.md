# Modelling of source Metadata

## Supporting Videos

TODO: Coming Soon

## Supporting BimlFlex Documentation

- [Implementation Guides](../user-guide/index.md)

## Modelling of source Metadata

Once the source system metadata has been imported in to BimlFlex it is possible to model it in the Excel-based metadata management application.

Modelling through metadata management is the way to tweak the process to match business requirements and allows BimlFlex to automatically generate the required Sql structures and SSIS packages for the Etl process.

## Detailed Steps

The following detailed steps walks through the options for modelling of source Metadata as recommended for the trial

### Reviewing keys

BimlFlex has 3 types of keys managed through metadata:

- Primary Key
- Business Key
- Alternate Business Key

A Primary Key is used to define the grain of the table, same way as a primary key normally works. For a staging and persistent staging load the primary key is used to differentiate between a new row and an update to an already loaded row. When generating table scripts from BimlFlex the defined primary key columns will be used to build the staging and persistent staging primary keys. The default behavior is to generate the Primary Key together with the `RowEffectiveFrom` column.

A source table can have multiple columns in the Primary Key definition.

A Business Key is the key describing the business entity stored in the table. It is used in Data Vault modelling to describe the Core Business Concept or Enterprise Wide Business Key candidate that will be used to model and load Hubs. The Business Key can be the same as the Primary Key or it can be derived from a combination of attributes. The Business Key is always a string representation so the default creation behavior in BimlFlex is to apply the `FlexToBk()` expression to convert the source column data types to a string. The import metadata function can derive a Business Key from either the Primary Keys or the Unique Constraints from the source.

Sample constraints from a Staging table create script to illustrate Primary Key and Business Key definitions:

```sql
-- Constraints
,CONSTRAINT [PK_AWLT_Address] PRIMARY KEY CLUSTERED
(
  [AddressID] Asc, [FlexRowEffectiveFromDate] ASC) WITH(PAD_INDEX = OFF,IGNORE_DUP_KEY = OFF) ON "default"
,CONSTRAINT [UK_AWLT_Address]  UNIQUE NONCLUSTERED
(
  [Address_BK] Asc, [FlexRowEffectiveFromDate] ASC) WITH(PAD_INDEX = OFF,IGNORE_DUP_KEY = OFF) ON "default"
)
```

An Alternate Business Key is used as a backup of the source Primary Key when the primary key definition needs to be changed in the modelling process. If there are Primary Key columns defined as derived columns that aren't persisted into the Persistent Staging layer BimlFlex will use the Alternate Business Key instead.

### Applying Data Type Mappings, expansion

Source system data types can be expanded to be more accommodating. This enhances resiliency in the load process when the source system data types change.
The Data Type Mapping feature is [described in a separate document and video](applying-data-type-mappings.md)

For the trial process, add the default Data Type Mappings to the `AWLT` record source

### Defining Business Keys

Defining Business Keys to use for Data Vault modelling is a Business Analysis phase in the implementation. finding the correct Business Key definition relies on business process and source system knowledge as well as source system data profiling. For cross system key matching in Data Vault extensive analysis across all candidate sources. Defining the Business Key is a more straightforward exercise. For a given source table there can be only one Business Key column. For scenarios with multiple source keys the columns are concatenated with a separator character to build a single Business Key. This maps to the Business Key column in the Data Vault Hub tables and allows the Data Vault model to adhere to the pattern.

BimlFlex provides an expression to concatenate and separate columns into the Business Key using the `FlexToBk(Column1, Column2, Column 3)` function. This can be applied in SSIS for SSIS load patterns and in Sql for Sql patterns. The trial uses the SSIS pattern and will implement the expression in a derived column in the generated SSIS packages.

The concatenation character used with multiple columns is defined in the configuration using the `ConcatenatorBusinessKey` key. The default concatenation character is `~`.

BimlFlex also provides a set of shortcut codes for accessing specific data when building the Business Key. An example is the `@@rs` record source shortcut that injects the current record source code in to the Business Key. This is commonly used when there is key overlap between source system with different meaning. This can be when the same codes mean different things and, more commonly, when synthetic keys are used that are commonly reused, such as number sequences.

For the trial process, add the `@@rs` shortcut to all Business Keys that were created by the import metadata process. For the Address table that would be changing the `FlexToBk(AddressID)` to `FlexToBk(@@rs, AddressID)`

### Defining Relationships

Source system relationships describe the metadata so that the correct load patterns can be used. For Data Vault, relationships help the Accelerator build out Link constructs between entities. When a metadata import is performed, BimlFlex will add any constraints defined in the source. This information is maintained in the `ReferenceTable` and `ReferenceColumnName` columns in the Columns sheet in the metadata. The chosen reference column must be a Primary Key in the related table.
Relationships are also present in the Data Vault and Dimensional model to describe relationships between Data Vault entities such as Hubs and Satellites as well as Facts and Dimensions to define load patterns.

For the trial process, maintain the relationships between the source FK's and PK's. Review the relationship definitions in the columns tab.

### Defining object related Metadata

The objects tab contains the tables from the `AdventureWorks LT` source system as well as any Data Warehouse tables created and accelerated. The metadata can be modelled and tweaked in several ways on the object and table level.

The main approaches are:

- Renaming columns and providing naming guidelines to the accelerator
- Tweaking the load pattern used by filtering, joining and grouping the data queried from the source.

#### Naming conventions

Using the naming override to define names in the Data Vault layer

`ObjectAlias`
`ModelOverrideName`
`ModelOverrideShortName`
`ModelGrouping`
`ModelObjectType`

#### Naming guidelines

Grouping entities
TODO: Coming soon

#### Load Pattern Tweaks

`CreateSql`

Overrides the object creation script. Can be used to completely override the object creation. This is useful for views that are used in the Data Warehouse where the definition of these views are required to be maintained in the metadata. Since the automatic object creation is dynamic and accommodates any changes to the metadata it is recommended to only use the CreateSql functionality when needed.

In the trial process there are abstraction layer views for the dimensional model defined in the CreateSql metadata. This is used later in the process.

`OverrideSql`

Overrides the source Sql Select statement for the object. Can be used to completely override the select statement. This is useful for scenarios where the required select statement is too complex to be built automatically from the rest of the metadata. Since the automatic Sql creation is dynamic and accommodates any changes to the metadata it is recommended to only use the OverrideSql functionality when needed.

The OverrideSql functionality is not used in the trial process.

`JoinSql`

the `JoinSql` function allows the addition of join statements to the generated source query. This is useful for gathering additional data into the query, either for adding columns or for allowing additional filter conditions. A common use case is for Business Keys to be joined in when modelling a Data Vault on Business Keys rather than technical keys.

In the trial process there are 2 derived tables that use the JoinSql function to derive different types of addresses and maintaining them as separate entities in the staging layer and Data Vault.

`WhereSql`

The `WhereSql` function allows the addition of where statements to the generated source query. This is useful for filtering. Note that load parameters are added automatically to the Where clause when using the parameters function so there is no need to manually inject them in to the Where clause through the WhereSql functionality.

In the trial process there are filtering added to 2 derived tables to filter only certain types of addresses.

`GroupBySql`

The `GroupBySql` function allows the addition of Group By statements to the generated source query.

In the trial process the GroupBySql functionality is not used.

### Defining columns related metadata

TODO: Coming Soon

### Applying load parameters

TODO: Coming Soon
