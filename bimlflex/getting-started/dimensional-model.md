---
uid: bimlflex-getting-started-dimensional-model
title: Data Mart Dimensional Model
summary: Documentation providing general architecture and detailed steps to create a dimensional model 
product: BimlFlex
type: Walkthrough
---
# Data Mart Dimensional Model

![Implementing Data Vault to Data Mart Model](https://www.youtube.com/watch?v=UKq-libt3xg?rel=0&autoplay=0 "Implementing Data Vault to Data Mart Model")

The dimensional model, Data Mart, is optimized for analytical tools, end-user queries, and for building models for Analysis Services cubes and tabular models.

This type of layer has many names, Information Mart, Data Mart, Kimball Model, Dimensional Model, Reporting Layer, Semantic Layer. They can be either Raw, without business rules applied, or refined with any number of filters, rules, and data processing steps applied. BimlFlex allows the rapid creation of any of these constructs by applying a metadata-driven modeling and generation process.

The getting started process follows the general dimensional approach of building Fact tables that contain metrics and connections to Dimension members and Dimension tables that contain descriptive attributes.

While the Raw Data Vault is loaded with uninterpreted data, the Dimensional model normally requires that a set of Business rules are applied to the data so that it is fit for the required analytical purpose. In the process of creating the end to end solution, it is common to also create raw versions of these artifacts that are used to refine the business rules used to create the final model.

In this process, both Fact and Dimensional source views are created, based either on the staging tables or the raw Data Vault or on the Point In Time and Bridge tables in the Data Vault layer. These are used to populate a dimensional model in a Data Mart as a presentation/reporting layer.

Querying the Data Vault layer can be made easier by utilizing the Point In Time and Bridge tables. To also include relevant contextual data it is necessary to join from these constructs to any Satellite that contains effectiveness information as well as the metrics or attributes needed. By using the time slice information in the Satellites the relevant record for the event date-time is added to the dimensional model.

## Architecture

The Dimensional model is created in the BimlFlex metadata in the form of a source to target mappings set of objects and columns. The source is generally implemented as a view on top of the existing staging or Data Vault constructs. For Data Vault, this includes tables from the Raw Data Vault, Business Vault constructs, Point In Time and Bridge tables and any extra required interpretation views and abstraction views that are required to feed the dimensional model.

For the getting started process, a set of views are provided in the sample metadata and used as the source objects for the dimensional model.

## Detailed Steps

The following detailed steps walk through the creation of the Dimensional Model from Data Vault

### Creating the source views for the dimensional model

The views used as sources for the dimensional model can either be managed and source controlled through the BimlFlex metadata or through the SQL Server Data Tools project for the databases. Use the approach most compatible with the deployment pipeline used.

Sample source views are included in the Sample Metadata.

Review the sample metadata for the architecture of choice. All Data Mart source objects have their corresponding source objects defined with source SQL definitions for their respective source view. These views are included in the scripts and database projects.

### Creating the destination metadata through the Clone Table feature

The BimlFlex App provides a `Clone Table` metadata creation tool for creating the destination dimension and fact tables.

Select the source object in the Objects page and click the `Clone Table` button. Choose the object type (Fact or Dimension), define a destination schema and table name and, for Dimensions, choose to add an Identity Column to the destination. Checking the `Add Target Column Mappings` will populate the source to target column mappings between the source and destination objects.

### Adding Fact to Dimension relationships and Dimensional key lookups

One feature of the Dimensional implementation is the use of integer sequence numbers as primary keys. The Data Vault layer uses the hash of the Integration Key as the primary key for entities. Some analytical tools prefer integer keys for primary keys and Fact to Dimension relationships. BimlFlex provides a value-to-key lookup function that will use the standard SSIS lookup transformation to translate the value from the source to the key used in the dimension.

This mapping is done for dimensions that have the primary key defined as an identity column. A dimension without an Identity column primary key is assumed to be a smart key that doesn't require a lookup.

The Dimension object has an Integration Key and a Primary Key, the lookup will compare against the Integration Key value and replace it with the Primary Key value.

The Fact table source has the corresponding lookup value (the same value as the Integration Key in the Dimension). When cloning the source object to the Fact object this column is included and is mapped from the source to the Fact table destination.

The metadata imported from the views will not have any relationships defined as these are not provided by the views. The target Facts and Dimensions will not have any relationships defined. Add the relationships between the target fact and the target dimension objects in the BimlFlex App schema diagram.

Adding the relationship between the Fact table Integration Key and the Dimension allows BimlFlex to also update the used keys, their data types and names so that the lookup functionality works as expected.

### Building the dimensional model SQL artifacts

With the metadata defined, refresh the metadata in BimlStudio and create the SQL Artifacts through the Generate scripts option or the SSDT project build.

The source views and destination tables will be included in the table script. Run the script in the Data Warehouse database.

Should the source views be managed through SSDT, deploy them as normal through Visual Studio or the sample deployment scripts.

### Building the dimensional model SSIS load project

Once the metadata is complete and refreshed in the BimlStudio project and the tables and source views are available it is possible to build the load project. This is built, tested and deployed in the same way as the already created source extraction and Data Vault load projects.

The Data Mart project is separate to the Source to Staging and Data Vault Load project. Add the project to the Visual Studio solution if needed.

Once the Batch package has been run the dimensional model in the Data Mart will be available for querying.

### Querying the Data Mart

Use a reporting or analytics tool to query the Dimensional Model to analyze the data or query the model with these sample queries:

```sql
-- Sample Dimensional Query for Fact and Dimensions:
USE BFX_DM
GO

SELECT *
FROM fact.SalesOrder fact
INNER JOIN Dim.Date orderdate ON orderdate.DateKey = fact.OrderDate_DateKey
INNER JOIN Dim.Date shipdate ON shipdate.DateKey = fact.ShipDate_DateKey
INNER JOIN dim.Customer dimcustomer ON dimcustomer.CustomerKey = fact.CustomerKey

-- Sample Dimensional Query for Fact and Dimensions, get total sales per order month:
USE BFX_DM
GO

SELECT
    orderdate.[Year]
  , orderdate.[MonthName]
  , SUM(fact.TotalDue) AS TotalDue
FROM fact.SalesOrder fact
INNER JOIN Dim.Date orderdate ON orderdate.DateKey = fact.OrderDate_DateKey
GROUP BY
    orderdate.[Year]
  , orderdate.[MonthName]
ORDER BY
    orderdate.[Year]
  , orderdate.[MonthName]
```
