
# Metadata Repository

BimlFlex metadata is entered using our robust Excel Add-in and is persisted in a database called BimlFlex. For the purpose of the framework we focus mostly on using technical metadata. Technical metadata represents information that describes how to access the data and includes things such as datatype, the name of the data in the enterprise information system, and other information that describes the way the native enterprise information system identifies the meta object.

## Metadata Model

Predefined Extensible Model designed to create complex metadata models and data mapping scenarios. The model describes the schema that will be used to store our metadata.

## Metadata Instance

* Instances store metadata in the format we described in our model.
* Allows easy access to the metadata during development.
* More useful in this format than raw metadata (e.g. in an excel file)
* The properties are more accessible than using annotations.
* It’s much faster to develop and to build.

## Metadata Entities

A metadata model describes what will be used to store the metadata that is subsequently authored by end users.  It can be thought of as a database schema and provides the ability to create a general purpose Entity/Relationship model.
Below is an outline of the properties and relationships for each entity type. Note that later we use the metadata model to structure our metadata instance.

### Versions Entity

Provide selected Customer and Version details to metadata instance

#### Properties

| Attribute | Description |
|-----------|-------------|
| CustomerUID | Selected Customer Guid |
| Customer | Selected Customer Name |
| VersionUID | Selected Version Guid |
| IsCurrent | Flag that defines if the Version is current. Only current Versions are visible in the Versions Drop Down |
| Comments | Optional Comments |
| DatabaseVersion | Current version of the BimlFlex database. |

### Connections Entity

Configure connection attributes for both Databases and Files. The ConnectionType attribute allows you to define any of the supported types however some may require Extension Point overrides.

#### Properties

| Attribute | Description |
|-----------|-------------|
| ConnectionString | Connection string to be used for this connection. Please note that the ConnectionString will only be parsed by BimlStudio when you build the solution or manually test it. |
| Catalog | Database name that the connection points to. When defining an Excel file this will be the worksheet name. If you have an environment where the production database is named differently to other environments we recommend using the production name. Example: AdventureWorks (Production) vs AdventuerWorks_DEV (Development) |
| PersistHistory | Determines whether to track history when defining a connection with an IntegrationStage = "PSA" for Persistent Staging Area. If this is not set and a PSA connection is configured then the database becomes a ODS without history. This is very useful to create an ODS by merely importing the source metadata. |
| Server | Name of the host server the connection points to. Generally this is omitted as defining it in the ConnectionString is sufficient.  |
| Provider | Defined the type of connection provider used in this connection. When using ADO.NET connections other than MSSQL this is a required field. |
| RecordSource | Abbreviation to uniquely identify the source system. This attribute is compulsory for all defined IntegrationStage = "SRC"(source). Required attribute for modelling Data Vault in particular.  |
| StartDelimiter | Derived value from [meta].[SystemType] table. The column starting delimiter used by the DBMS when performing a query. |
| EndDelimiter | Derived value from [meta].[SystemType] table. The column ending delimiter used by the DBMS when performing a query. |
| IgnoreSchema | Derived value from [meta].[SystemType] table. If this is set to "Y" then the source query will omit the schema. |
| SqlHashPattern | This value specifies the SQL Hash Pattern used by the SQL ELT pattern. |
| SqlConcatenantePattern | This value specifies the SQL Concatenate Pattern used to concatenate Business Keys by the SQL ELT pattern. |
| SqlStringExtractPattern | This value specifies the SQL Pattern used by the extract process to standardize strings. |
| SqlStringLoadPattern | This value specifies the SQL Pattern used by the load process to standardize strings. |
| SqlDateExtractPattern | This value specifies the SQL Pattern used by the extract process to standardize dates. |
| SqlDateLoadPattern | This value specifies the SQL Pattern used by the load process to standardize dates. |
| SqlStringDataType | This value specifies the SQL DataType for Strings used by the load process to standardize strings. |
| SqlAnsiStringDataType | This value specifies the SQL DataType for AnsiStrings used by the load process to standardize strings. |
| SystemType | Defines the connections system type. Depending on the type the relevant source and target components will be chosen. Below is a list of the current possible SystemTypes. For a full up to date list please refer to the [meta].[SystemType] table in the [BimlFlex] database. |
| ConnectionType | Defines the connections type. This list will mirror the different types of connections that can be defined in Biml. Below is a list of the current possible ConnectionTypes. The list should be extended to include PDW. |
| IntegrationStage | Defines the connections data warehouse layer or stage. This is an important attribute as it is used to determine what template get applied to its related objects. An example would be that the relevant source to staging Biml template will search for objects that relates to a connection with an IntegrationStage set to "SRC". The [meta].[IntegrationStage] table is an internal framework type (enum) and should be changed or added too only in consultation with Varigence. Below is a list of the current possible IntegrationStages. |
| FilePattern | If this is a file connection, this value is the pattern of applicable files in file path e.g. "*.csv" |
| FilePath | If this is a file connection, this path of the source file. The Biml template will use this attribute in a <ForEachFileLoop> to load all files that match the FilePattern. |
| NoOfThreads | The default number of threads that SSIS can use to split the load when loading data when this connection is used. The amount of threads can be redefined at the object level. Currently this attribute is only used in the SRC – STG template along with the Balance Data Distributor to allow greater parallelism. Only define a value greater than zero if the Server has enough CPU and Memory to accommodate additional threads. |
| ExcludeFromModel | Entering Y into this column will determine if the objects associated with this connection's metadata will be excluded along with the rest of the BimlFlex solution. |
| ExcludeFromBuild | Entering Y into this column will determine if the objects associated with this connection's will be built along with the rest of the solution when the BimlFlex solution is being compiled.  |
| ExcludeFromValidation | Entering Y into this column will determine if the objects associated with this connection's metadata will be validated along with the rest of the BimlFlex solution. |
| Description | Optional metadata to provide description. |
| ConnectionUID | The GUID for the Connection from BimlFlex database used to provide the package id. |

### Batches Entity

Batches define a ETL workload. Batches is used in combination with Projects to 

#### Properties

| Attribute | Description |
|-----------|-------------|
| PackageSubpath | Internal attribute that is used for building the packages into the same project folder. |
| NoOfThreads | The default number of packages that can be executed in parallel within the Batch. Based on the topological sort and dependencies packages are grouped into execution layers. Within each layer (Sequence Container) multiple control flows pipelines can be executed in parallel. |
| UseSsisExpress | Set this value to Y when extracting data from a source that only has Sql Server Express install. Note that with SSIS Express there is limited functionality. |
| UseOrchestration | BimlFlex comes with an orchestration framework that will control restartability. Set this attribute to N if you would like to bypass the default behavior. |
| PrecedenceConstraint | BimlFlex Batches execute packages and the Precedence Constraint can be changed from Success to Completion to continue loading in case of individual failures. |
| NoOfContainers | The default number of sequence containers that can be executed within the Batch. Based on the topological sort and dependencies packages are grouped into execution layers. Within each layer (Sequence Container) multiple control flows pipelines can be executed in parallel. |
| Description | Optional metadata to provide description. |
| BatchUID | The GUID for the Batch from BimlFlex database used to provide the package id. |

### Projects Entity

Projects define the integration configuration between source and target. Specify the Connections for the project and attach the project to a Batch.

#### Properties

| Attribute | Description |
|-----------|-------------|
| ProjectSubpath | Internal attribute that is used for building the packages into the same project folder. |
| IntegrationTemplate | Name of Integration template to apply. Below is a list of the current possible Integration Templates. Currently this is a place holder for future separation of ETL logic. |
| ExcludeFromModel | Entering Y into this column will determine if the objects associated with this project's metadata will be excluded along with the rest of the BimlFlex solution. |
| ExcludeFromBuild | Entering Y into this column will determine if the objects associated with this project's will be built along with the rest of the solution when the BimlFlex solution is being compiled.  |
| ExcludeFromValidation | Entering Y into this column will determine if the objects associated with this project's metadata will be validated along with the rest of the BimlFlex solution. |
| Description | Optional metadata to provide description. |
| ProjectUID | The GUID for the Project from BimlFlex database used to provide the package id. |

### Objects Entity

Object define the header information for both database tables and views and file structures.

#### Properties

| Attribute | Description |
|-----------|-------------|
| Schema | Schema to which this object belongs or is meant to belong, is set in this field. |
| ObjectName | Name of Object (Table, View). Best practice is to use CamelCase. During the import of source metadata we provide options to convert name with under_scores to CamelCase and vice versa. |
| ObjectType | This field is used to setup object type. This field refers to ObjectTypes enumerator. Below is a list of the current possible Object Types. |
| ModelObjectType | This column is used to define which model object this object is defined to be. For instance if this object is defining a HUB LINK or SAT this is where we can make this distinction. The framework will interpret the type when importing metadata from source and can be overridden after additional analysis. Please note that this attribute is only relevant when using BimlFlex to generate a Raw Data Vault model. |
| IsNotPersistent | Defines an Override to the Persistent Staging Connection defined as part of the Project Entity. A good example of usage would be where the source system audits changes effectively and/or the source object size discourage persistence. Note that setting it to "Y" will exclude the object from being persisted. |
| ExcludeFromModel | Entering Y into this column will determine if this object's metadata will be excluded along with the rest of the BimlFlex solution. |
| ExcludeFromBuild | Entering Y into this column will determine if this object will be built along with the rest of the solution when the BimlFlex solution is being compiled.  |
| ExcludeFromValidation | Entering Y into this column will determine if this object's metadata will be validated along with the rest of the BimlFlex solution. |
| CreateSql | Create SQL statement which can be used deploy a view onto the database.  |
| OverrideSql | Query used to override the source component. |
| FromSql | If the source select FROM clause requires customization is where it can be entered. Important if using this attribute it must include the ObjectAlias if defined. <br/>Example:<br/>`FROM @@this src WITH (NOLOCK)` |
| JoinSql | If the source select requires a JOIN this is where it can be entered. Example:<br/>`INNER JOIN [SalesLT].[CustomerAddress] ca ON src.[AddressID] = ca.[AddressID] AND ca.[AddressType] = 'Main Office'`<br/>The query is limited to 1000 characters.<br/>								 |
| WhereSql | If the source select requires a WHERE clause this is where it can be entered.  Note that defining a Parameter on the object will be appended to the statement. <br/>Example:<br/>`WHERE [Culture] = 'en'` |
| ObjectAlias | Defines an alias (short name) for the Object. This is relevant in conjunction with the `JoinSql` and/or `WhereSql` attributes. Generally "src" is used as a default |
| SelectBySql | If the source select requires a `DISTINCT` or `TOP N` clause this is where it can be entered. The field is limited to 1000 characters. |
| GroupBySql | If the source select requires a `GROUP BY` clause this is where it can be entered. The field is limited to 1000 characters. |
| OrderBySql | If the source select requires an `ORDER BY` clause this is where it can be entered. The field is limited to 1000 characters. |
| ModelGrouping | This column categories objects per subject area. This grouping can be used in the Data Vault Accelerator for constrained acceleration. |
| ModelOverrideName | This column contains the actual table name users want the object to appear as after the solution is deployed. This is better described with and example. Let’s say you have a source system with cryptic names like GL002 and the actual business name is GeneralLedger. By defining a value and generating a Data Vault using the BimlFlex Accelerator the result would be [HUB_GeneralLedger], [SAT_GeneralLedger] |
| ModelOverrideShortName | This column contains the short table name users want the object to appear as after the solution is deployed. As per the `ModelOverrideName`, but is used in naming Links and Link Satellites. As an example if there is a link between the `GeneralLedger` and `ChartOfAccounts` the name will be `[LNK_GeneralLedger_ChartOfAccounts]`. Defining values here the name could be `[LNK_GL_COA]`, providing flexibility when modelling. |
| InheritFromObject | This column contains a reference to the object that column metadata should inherited from unless it has its own column metadata. This object will use the inferred from object name in the source query. |
| SameAsInherited | Defines if the InheritFromObject is the same object. Entering Y into this column will instruct BimlFLex to reuse the inherited tables for loading. |
| UseInheritedName | Defines if the InheritFromObject has the same object. Entering Y into this column will instruct BimlFLex to reuse the inherited tables ObjectName for loading. |
| DependOnObject | This column contains a dependency reference to the object that defines the precedence for execution solve order.  |
| FriendlyName | Business Friendly name of object. |
| Description | The object described in business context. Often referred to as business metadata. |
| Comments | Generic comments for use by the Analyst and Modelers to keep notes related to the object |
| FlatFileType | The FlatFileType provides options for the type of flat file row format that will be used. |
| CodePage | This value specifies the code page to use for character and string manipulation of non-Unicode text. |
| IsColumnNamesInFirstDataRow | This value specifies whether more descriptive column names are provided in the first data row to replace the column names specified in the Flat File Format Columns collection. |
| DataRowsToSkip | This value specifies how many data rows to skip before beginning to product data. |
| TextQualifer | This value specifies which character is used to identify contiguous blocks of text in a flat file. Column delimiters within blocks of contiguous text will be ignored and treated as text data. |
| RowDelimiter | This value specifies the delimiter to use to segregate rows. |
| ColumnDelimiter | This value specifies the delimiter string that will be used to mark the end of this column. |
| LastColumnDelimiter | This value specifies the delimiter to use for column header rows. |
| IsUnicode | This value specifies whether Unicode character and string manipulation will be used. |
| SolveOrder | Internal column calculating the order in which the objects will be loaded based on References. |
| SolveOrderReverse | Internal column calculating the order in which the objects will be loaded based on References in reverse. |
| UseOwnThread | Objects will be executed within the Batch based on Topological sort order and then alphabetical. If you would like the object to be executed in its own thread at the start of the respective execution container set this attribute to "true"  |
| NoOfThreads | At the object level, this is where we can define the amount of threads that we want the load to be distributed across in the SSIS package. |
| ObjectUID | The GUID for the Object from BimlFlex database used to provide the package id. |

### Columns Entity

Columns define the detailed information to transform and map data from source to target.

#### Properties

| Attribute | Description |
|-----------|-------------|
| ColumnName | Name of the column within the table. For any column other than the source we recommend using CamelCase. For ORACLE we recommend UPPERCASE separated by underscores. |
| ColumnAlias | Alias for the column. Generally used in conjunction with SqlExpression. |
| FriendlyName | Business Friendly name of column. |
| Description | The column described in business context. Often referred to as business metadata. |
| ChangeType | This value specifies the slowly changing dimension type for the column.<br/>Below is a list of the current possible Change Types.<br/>								 |
| DataType | This value specifies the type of the data stored in this column using the unified type system.<br/>Additional logic is required to cater for datatypes with a CustomType like `hierarchyid`.<br/>Below is a list of the current possible Data Types.<br/>								 |
| Length | (Set to -1 to indicate MAX length) This value specifies the length parameter for the column type associated with this column. This property applies only to column types that support a length specification, such as String and Binary types.<br/>								 |
| Precision | This value specifies the precision parameter for the column type associated with this column. Precision is the number of digits stored for a numeric value. This property applies only to column types that support precision, such as Decimal.<br/>								 |
| Scale | This value specifies the scale parameter for the column type associated with this column. Scale is the number of digits to the right of the decimal point in a numeric value. This property applies only to column types that support precision, such as Decimal.<br/>								 |
| Ordinal | Order of that the columns is defined in or should be defined when creating the target objects. It is recommended that the Business and Primary Keys is defined as the top ordinals. Ordinal is used in ascending order and we recommend starting at Ordinal - 1. |
| ModelOverrideName | This column contains the business column name users want the object to appear as after the solution is deployed. This is better described with and example. Let’s say you have a source system with cryptic names like GL002 and the actual business name is GeneralLedgerCode. By defining a value and generating a Data Vault using the BimlFlex Accelerator the resulting column will be [GeneralLedgerCode] |
| DataTypeMapping | xxxxx |
| ModelGrouping | This attribute is used to group columns into their own satellites. Example would be if you have a customer table that has a column "LastLoginDate" that changes very frequently you might want to model this in a separate satellite. All columns with the same ModelGrouping will be generated into separate satellites. It is also used to define a Unit Of Work on Links |
| ModelReference | This attribute is used multiple table references. Example would be the SalesOrder table with a ShippingAddress and BillingAddress reference to the Address table. Two links will be created with the ModelReference forming part of the name. This attribute is autogenerated by our schema import and can be overridden. |
| ModelDataType | xxxxx |
| ModelLength | xxxxx |
| ModelPrecision | xxxxx |
| ModelScale | xxxxx |
| DefaultValue | This value specifies a default value for the column using Transact-SQL constant expression syntax.<br/>								 |
| DisplayFolder | Place holder at the moment. Planning to use this when defining Analysis Services metadata. |
| Comments | Generic comments for use by the Analyst and Modelers to keep notes related to the column. |
| SsisExpression | This value specifies the expression used to calculate the value of the derived column. The SSIS expression syntax is used. Utilize the same syntax as the Derived Column.<br/>								 |
| SqlExpression | SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements. <br/>Example: <br/>`CONVERT(VARCHAR(27), @@this, 121)`<br/>								 |
| SsisDataType | This attribute is used to overwrite the datatype for the `SsisExpression`. |
| SolveOrder | This attribute is used when defining `SsisExpressions` that need to be parsed in a specific order. Example would be if you want to split a very complex calculation up into multiple expressions that is derived in a specific sequence. |
| IsPrimaryKey | "Y" if this column is the primary key of the object. The PRIMARY KEY uniquely identifies each record in a database table. Primary keys must contain UNIQUE values. A primary key column cannot contain NULL values. |
| IsBusinessKey | "Y" if this column is the business key of the object. Note that the framework allows only one business key per object. If the object has multiple columns that makes up the business key define a derived concatenated column. |
| IsAltBusinessKey | "Y" if this column is the alternate business key of the object. This is generally defined if the object has multiple columns as the business key and a derived concatenated business key has been defined. |
| IsIdentity | "Y" if this column is the identity column of the object |
| IsNullable | "Y" if this column is the allow NULL (empty) values |
| IsDerived | "Y" if the value in this column is derived during the ETL process. This is generally set in conjunction with the `SsisExpression` attribute. |
| IsNotPersistent | Defines an Override to the Persistent Staging Connection defined as part of the Project Entity. A good example of usage would be where derived columns should not be persisted. Note that setting it to "Y" will exclude the column from being persisted. |
| ExcludeFromModel | Entering Y into this column will determine if this column will be built along with the rest of the solution when the BimlFlex solution is being compiled.  |

### CustomAttributes Entity

CustomAttributes are used to capture attributes that are sparsely used in the framework and to overwrite Configurations. Customers can also use this to extend our metadata model for bespoke coding requirements.

#### Properties

| Attribute | Description |
|-----------|-------------|
| AttributeKey | The attribute key is a unique name that we give each custom attribute so when we are generating our solution we can pin point one of many custom attributes for one object.  |
| AttributeValue | This column contains the value to be returned when the custom attribute accessed by the framework. |
| AttributeProperty | This column contains the default value for the custom attribute if it is not specified in the AttributeValue. |
| AttributeType | Internal column specifying the relationship associated with this attribute. |
| Description | Optional metadata to provide description. |

### Parameters Entity

Parameters are used to add `WHERE` logic to the source queries. For very complex logic use the `GetParameter` and `SetParameter` Extension Points

#### Properties

| Attribute | Description |
|-----------|-------------|
| ParameterName | This attribute specify the name of the parameter being used in the package. This will be the name [VariableName] in the [ssis].[ConfigVariable] table in the BimlCatalog database. |
| ParameterOperator | This attribute define a operator to be used when retrieving our parameter value. Example is `>=` that will translate to the where clause as `[ParameterName] >= ?` |
| ParameterDefault | Here you can define the default value that the parameter contains the first time the package is executed. Example would be for a numeric field `0` and a date `1900-01-01` |
| ParameterDataType | Here we define the data type for a parameter being used in the solution packages. Here you should enter the data type using the following format DATATYPENAME |
| ParameterSql | In this column, we define an aggregate that we want to use when retrieving our parameter value after the load. The placeholder "@@this" is replaced with the parameter name and inserted into the SQL aggregation. <br/>Eg: `MAX(@@this)` and `CONVERT(VARCHAR(19), MAX(@@this), 120)` for dates.<br/>								 |
| ParameterToName | This attribute specify the name of the parameter being used in the package. Use this attribute to define a from and to variable on a column. |
| ParameterToOperator | This attribute define an operator to be used in combination with ParameterToName |
| ExecuteSqlOnSource | Specify if the `ParameterSql` should be executed on the source connection to retrieve the next load value. |
| ParameterColumnExpression | In this column, we can define an override to be used instead of the ColumnName. Sometimes we need to use a column that was joined from another table to determine change like the LastModifiedDate. Normally this table join will use an<br/>alias and we can then override the WHERE clause here. EG. e.[LastModifiedDate] or e.@@this.<br/>								 |
| ParameterSqlExpression | In this column, we can define more complex scenarios like `(ISNULL(@@this, GETDATE()) > ? OR ISNULL(@@this, GETDATE()) <= ?)`.<br/>								 |
| ParameterOverride | In this column we define an override for the default parameter definition. It will override the ? in the following clause to whatever was defined. `WHERE [ColumnName] = ?`. |
| ParameterOrdinal | If we are defining multiple parameters for the same object, we use this column to choose the order in which they are applied in SQL statements. |
| Description | Optional metadata to provide a description. |
| IsProjectParameter | xxxxx |
| IsNotPersisted | "Y" if this parameter is not to be persisted in [BimlCatalog].[ssis].[ConfigVariable] table. |

### DataTypeMappings Entity

xxxxx

#### Properties

| Attribute | Description |
|-----------|-------------|
| Mapping | xxxxx |
| DataType | This value specifies the type of the data stored in this column using the unified type system.<br/>Additional logic is required to cater for datatypes with a CustomType like `[hierarchyid]`.<br/>Below is a list of the current possible Data Types. |
| FromLength | xxxxx |
| ToLength | xxxxx |
| Length | xxxxx |
| Precision | xxxxx |
| Scale | xxxxx |
| Ordinal | xxxxx |
| DefaultValue | xxxxx |
| SystemType | Defines the mappings system type. Depending on the type the relevant source mapping will be chosen. Below is a list of the current possible SystemTypes. For a full up to date list please refer to the [meta].[SystemType] table in the [BimlFlex] database. |
| SsisExpression | This value specifies the expression used to calculate the value of the derived column. The SSIS expression syntax is used. Utilize the same syntax as the Derived Column.<br/>								 |
| SqlExpression | SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements. <br/>Example: <br/>`CONVERT(VARCHAR(27), @@this, 121)`<br/>								 |
| ColumnAlias | Alias for the column. Generally used in conjunction with SqlExpression. |
| Description | The column described in business context. Often referred to as business metadata. |
| IsMaster | "Y" if the value in this column can be mapped to. |
| MappedToDataType | This value specifies the type of the data stored in this column using the unified type system.<br/>Additional logic is required to cater for datatypes with a CustomType like `[hierarchyid]`.<br/>Below is a list of the current possible Data Types. |
| MappedToLength | Length of the DataType being mapped to |
| MappedToPrecision | Precision of the DataType being mapped to |
| MappedToScale | Scale of the DataType being mapped to |
| MappedToDefaultValue | Default of the DataType being mapped to |
| MappedToSsisExpression | This value specifies the expression used to calculate the value of the derived column. The SSIS expression syntax is used. Utilize the same syntax as the Derived Column.<br/>								 |
| MappedToSqlExpression | SQL expression for this column is used to extend source queries. Generally used for source type casting and case statements. <br/>Example: <br/>`CONVERT(VARCHAR(27), @@this, 121)`<br/>								 |
| MappedToColumnAlias | Alias for the column. Generally used in conjunction with `SqlExpression`. |
| MappedToDescription | The column described in business context. Often referred to as business metadata. |

### Configurations Entity

Configurations allows for customizing the default behavior of BimlFlex. Many of the configurations can be used to switch functionality on or off depending on preference or requirements.

#### Properties

| Attribute | Description |
|-----------|-------------|
| ConfigurationKey | The configuration key is a unique name that we give each configuration so when we are generating our solution we can pin point one of many configurations. |
| ConfigurationValue | This column contains the value to be returned when the configuration is accessed by the framework. This attribute allows you to define naming conventions custom to your environment. |
| ConfigurationDataType | Here we define the data type for a configuration being used in the solution packages. Here you should enter the data type using the following format "DATATYPENAME" |
| ConfigurationDefault | If the ConfigurationValue has not been specified, this column will store the default value to be used instead.  |
| ConfigurationOrder | This is what we used to control the order in which configuration settings are loaded into the BimlFlex solution and create on the target tables where relevant. |
| SqlExpression | This column is used when using a configuration to create a new based derived column using the SQL based templates. For example, this SQL expression will be used to obtain the current date. GETUTCDATE() |
| SsisExpression | This column is used when using a configuration to create a new derived column to be added into the dataflow of a particular package.<br/>For example, this SSIS expression will be used to obtain the current date. `(DT_DBDATE)GETUTCDATE()`<br/>								 |
| IsNullable | This column allows to you define if the configuration value is able to be null without throwing an error when building BimlFlex solution. To make the configuration nullable simply enter "Y" otherwise "N" will set the configuration to be non-nullable. |
| StagingAttribute | The staging attribute is used to control whether a configuration is applied to a staging environment of the solution architecture. Simply enter the name of the annotation to use when being referenced in the framework.  |
| PersistentStagingAttribute | The staging attribute is used to control whether a configuration is applied to a staging environment of the solution architecture. Simply enter the name of the annotation to use when being referenced in the framework. |
| HubAttribute | The hub attribute is used to control whether a configuration is applied to hubs when generating a data vault architecture. Simply enter the name of the annotation to use when being referenced in the framework. |
| SatelliteAttribute | The satellite attribute is used to control when a configuration is applied to Satellites when generating a data vault architecture. Simply enter the name of the annotation to use when being referenced in the framework. |
| LinkAttribute | The link attribute is used to control when a configuration is applied to links when generating a data vault architecture. Simply enter the name of the annotation to use when being referenced in the framework. |
| DimAttribute | The dim attribute is used to control when a configuration is applied to dimensions when generating a data warehouse architecture. Simply enter the name of the annotation to use when being referenced in the framework. |
| FactAttribute | The fact attribute is used to control when a configuration is applied to facts when generating a data warehouse architecture. Simply enter the name of the annotation to use when being referenced in the framework. |
| Description | Optional metadata to provide description. |
| IsDeployed | This attribute is currently a place holder. |
| IsInternal | This attribute is currently a place holder. |    

## Metadata Static Types

BimlFlex has a number of internal static types that can also be referred to as nn enumeration type or an enum that define a set of constants.

### AttributeTypes

| Code | Value |
|------|-------|
| COL | Column |
| OBJ | Object |
| PRJ | Project |
| CON | Connection |
| CUS | Customer |
| BAT | Batch |

### ChangeTypes

| Code | Value |
|------|-------|
| CHG | Type 1 |
| HST | Type 2 |
| FIX | Fixed |
| KEY | Key |
| MAK | Multi Active Key |
| IGN | Ignore |
| EXC | Exclude DV |
| REF | Link Reference |
| CDC | Change Data Capture |
| ALT | Alternate |
| HDK | Hash Distribution |
| DGA | Link Degenerate |
| TRS | Transient |

### ConfigurationAttributes

| Code | Value |
|------|-------|
| IGN | Ignore |
| DER | Derived |
| SRC | Source |
| DEF | Default |
| TGT | Target |
| HSH | Hash |

### ConnectionTypes

| Code | Value |
|------|-------|
| OLEDB | OLEDB |
| ADONET | ADONET |
| FILE | FILE |
| ODBC | ODBC |
| TD | TERADATA |
| ORA | ORACLE |
| PDW | Microsoft APS |
| AZB | Azure Blob Storage |
| AZDLS | Azure Data Lake Store |
| SFLSTG | Snowflake Stage |
| AST | Analysis Services Tabular |
| ASM | Analysis Services Multi Dimensional |
| MDS | Microsoft MDS |
| OLESQL | OLEDB SQL Based ELT |
| ADOSQL | ADONET SQL Based ELT |
| ODBCSQL | ODBC SQL Based ELT |
| OLECDC | OLEDB CDC |
| CUSTOM | Custom Component |

### DataTypes

| Code | Value |
|------|-------|
| AnsiString | AnsiString |
| AnsiStringFixedLength | AnsiStringFixedLength |
| Binary | Binary |
| Boolean | Boolean |
| Byte | Byte |
| Currency | Currency |
| Date | Date |
| DateTime | DateTime |
| DateTime2 | DateTime2 |
| DateTimeOffset | DateTimeOffset |
| Decimal | Decimal |
| Double | Double |
| Guid | Guid |
| Int16 | Int16 |
| Int32 | Int32 |
| Int64 | Int64 |
| Object | Object |
| SByte | SByte |
| Single | Single |
| String | String |
| StringFixedLength | StringFixedLength |
| Time | Time |
| UInt16 | UInt16 |
| UInt32 | UInt32 |
| UInt64 | UInt64 |
| VarNumeric | VarNumeric |
| Xml | Xml |
| hierarchyid | HierarchyId |
| geometry | Geometry |
| geography | Geography |
| smallmoney | SmallMoney |

### ParameterDataTypes

| Code | Value |
|------|-------|
| Boolean | Boolean |
| Byte | Byte |
| Char | Char |
| DateTime | DateTime |
| DBNull | DBNull |
| Decimal | Decimal |
| Double | Double |
| Empty | Empty |
| Int16 | Int16 |
| Int32 | Int32 |
| Int64 | Int64 |
| Object | Object |
| SByte | SByte |
| Single | Single |
| String | String |

### IntegrationStages

| Code | Value |
|------|-------|
| SRC | Source |
| STG | Staging |
| PSA | Persistent Staging |
| INT | Intermediate |
| DWH | Data Warehouse |
| RDV | Raw Data Vault |
| BDV | Business Data Vault |
| DM | Data Mart |
| MDS | Master Data Services |
| EXP | File Export |

### IntegrationTemplates

| Code | Value |
|------|-------|
| S2T_SSIS | Source -> Target |
| S2T_ADF | ADF Source -> Target |
| S2FIL | Source -> File Extract |
| S2ZIP | Source -> Zip File Extract |

### ObjectTypes

| Code | Value |
|------|-------|
| TBL | Table |
| TBV | View |
| DIM | Dimension |
| DMV | Dimension View |
| FCT | Fact |
| FCV | Fact View |
| SAT | Satellite |
| LNK | Link |
| HUB | Hub |
| LSAT | Link Satellite |
| REF | Reference |
| PIT | Point In Time |
| BRG | Bridge |
| RSAT | Reference Satellite |
| FIL | Flat File |
| EXT | External |
| TCA | CDC All |
| TCL | CDC Last |
| TCT | Change Tracking |

### ModelObjectTypes

| Code | Value |
|------|-------|
| HUB | Hub |
| LNK | Link |
| SAT | Satellite |
| SAL | Same As Link |
| HAL | Hierarchy Link |
| REF | Reference |
| RSAT | Reference Satellite |
| IGN | Ignore |
| EXC | Exclude DV |

### PrecedenceConstraints

| Code | Value |
|------|-------|
| Success | Success |
| Completion | Completion |

### SystemTypes

| Code | Value |
|------|-------|
| FF_DEL | File Delimited |
| FF_RAG | File Ragged Right |
| MSSQL | SQL Server |
| ORA | Oracle |
| DB2 | DB2 |
| EXCEL | Excel |
| MYSQL | MySql |
| TD | Teradata |
| SQLDW | Azure SQLDW |
| SQLDB | Azure SQLDB |
| PDW | SQL Server PDW |
| SFLDW | Snowflake DW |
| PGR | PostgreSQL |
| ORARDB | Oracle RDB |
| CRSFDC | COZYROC Salesforce |

### FlatFileTypes

| Code | Value |
|------|-------|
| Delimited | Delimited |
| FixedWidth | FixedWidth |
| RaggedRight | RaggedRight |

### Delimiters

| Code | Value |
|------|-------|
| CRLF | CRLF |
| CR | CR |
| LF | LF |
| Semicolon | Semicolon |
| Comma | Comma |
| Tab | Tab |
| VerticalBar | VerticalBar |
| UnitSeparator | UnitSeparator |
| LF | LF |

### Booleans

| Code | Value |
|------|-------|
| Y | Y |
| N | N |

### AttributeKeys

| Code | Value |
|------|-------|
| SettingValue | SettingValue |
| IsDrivingKey | IsDrivingKey |
| CreateBridge | CreateBridge |
| CreatePIT | CreatePIT |
| DistributeRoundRobin | DistributeRoundRobin |
| DistributeReplicate | DistributeReplicate |
| RowStoreIndex | RowStoreIndex |
| RowCountSum | RowCountSum |
| ProtectionLevel | ProtectionLevel |
| SqlStartDelimiter | SqlStartDelimiter |
| SqlEndDelimiter | SqlEndDelimiter |
| SqlIgnoreSchema | SqlIgnoreSchema |
| SqlHashPattern | SqlHashPattern |
| SqlConcatenantePattern | SqlConcatenantePattern |
| SqlStringExtractPattern | SqlStringExtractPattern |
| SqlStringLoadPattern | SqlStringLoadPattern |
| SqlDateExtractPattern | SqlDateExtractPattern |
| SqlDateLoadPattern | SqlDateLoadPattern |
| SqlStringDataType | SqlStringDataType |
| SqlAnsiStringDataType | SqlAnsiStringDataType |

### AttributeValues

| Code | Value |
|------|-------|
| EncryptSensitiveWithUserKey | EncryptSensitiveWithUserKey |

### AttributeProperties

| Code | Value |
|------|-------|
| IsPrimaryHub,AddKey | IsPrimaryHub,AddKey |
| IsPrimaryHub | IsPrimaryHub |
| AddKey | AddKey |