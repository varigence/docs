---
uid: bimlflex-release-notes-2023-r1
name: BimlFlex Release Notes 2023 R1
summary: Release Notes for BimlFlex 2023 R1
---

# Release Notes

Varigence is excited to release the 2023 R1 version of the BimlFlex platform for data solution automation!

> [!NOTE]
>
> * Please make sure databases and projects are backed up before upgrading.
> * Please email support@bimlflex.com with any installation or upgrade issues.

## Installation

BimlFlex 2023 R1 is installed and upgraded through a single consolidated installer.

<!--
MANUALLY UPDATE BUILD NUMBER UPON RELEASE
-->

Build 23.1.328.0, release date: 01 Jul 2023

>
* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup_22.3.207.0.exe). This installer includes all BimlFlex components
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup_22.3.207.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages


## Databricks Templates with Data Mesh Capability

### Databricks Linked Services Support

- **Feature**: Integration with Databricks Linked Services.
  
- **Description**: BimlFlex now offers native support for Databricks Linked Services, enabling a seamless connection to your existing Databricks cluster right from the BimlFlex platform.

- **Benefit**: This feature allows data engineers to easily integrate BimlFlex with their existing Databricks infrastructure. By doing so, you can take advantage of your current Databricks cluster for data processing tasks, thereby eliminating the need for additional inline processing resources and associated costs.

### Databricks Import Metadata Support

- **Feature**: Metadata Import from Databricks
- **Description**: BimlFlex now allows you to import metadata directly from Databricks. This feature enables pushdown processing capabilities, allowing you to generate Data Vault and Data Marts based on existing data lakehouse files that are mounted in Databricks.
- **Benefit**: This enhancement streamlines the data engineering process by eliminating the need to manually map or migrate metadata. It leverages Databricks' capabilities for efficient data processing, making it easier to create Data Vaults and Data Marts directly from your existing data lakehouse files.

### Databricks Data Vault Templates

- **Feature**: Databricks Data Vault Templates
- **Description**: Introduction of new templates designed to facilitate the implementation of Data Vault patterns within Databricks environments.
- **Benefit**: Simplifies and accelerates the process of setting up Data Vault architectures in Databricks, allowing data engineers to focus more on data integration and less on boilerplate code.

### Databricks Data Mart Templates

- **Feature**: Custom Data Mart Templates for Databricks
- **Description**: Introduces specialized Data Mart templates that are optimized for Databricks, offering seamless integration and enhanced performance. The existing DataMart feature has undergone a refactoring process to better align with the unique capabilities of Databricks.
- **Benefit**: Enables data engineers to leverage Databricks-specific optimizations for data warehousing, reducing the time and complexity involved in setting up Data Marts. The refactored feature ensures that you can make the most out of Databricks' advanced analytics and data processing capabilities.

### Databricks Notebooks Integration

- **Feature**: Integrated Databricks Notebooks.
- **Description**: Databricks notebooks, optimized for data processing tasks, are now seamlessly integrated into BimlFlex. These notebooks are stored and managed within source control repositories.
- **Benefit**: Data engineers can easily access, modify, and collaborate on Databricks notebooks directly from the Databricks Workspace, ensuring streamlined workflows and version-controlled data processing scripts.

### Delete Detection Databricks Templates

- **Feature**: Delete Detection Templates in Databricks
- **Description**: Introduces new templates within Databricks that are specifically designed to detect deletions in the source data. These templates automate the process of identifying and managing deleted records.
- **Benefit**: Simplifies data management by automatically handling source deletions, reducing manual intervention and ensuring data integrity within Databricks environments.

### Point In Time and Bridge Databricks Templates

- **Feature**: New Databricks Templates for Point-in-Time (PIT) and Bridge Patterns
- **Description**: Introduces specialized templates in Databricks that are designed to implement Point-in-Time (PIT) and Bridge data modeling patterns. These templates come pre-configured, enabling quick setup and deployment.
- **Benefit**: Simplifies the process of implementing PIT and Bridge patterns in your Databricks environment. These templates save time and reduce the risk of errors, allowing data engineers to focus on more complex tasks.

### Databricks Cluster Connection

- **Feature**: Configuration of Databricks Cluster Connection in BimlFlex.
- **Description**: BimlFlex now allows you to configure a connection to a Databricks cluster directly within the platform. This connection can be leveraged in Azure Data Factory pipelines as both a data source and a data target.
- **Benefit**: This feature simplifies the process of integrating Databricks into your data pipelines. By enabling a direct connection to Databricks clusters, data engineers can more easily orchestrate complex data workflows that require Databricks' advanced analytics capabilities, all while managing it from a single platform.

### Truncate and Drop Scripts in Biml Studio

- **Feature**: Toggleable Truncate and Drop Scripts
- **Description**: Biml Studio now allows developers to enable or disable the generation of truncate and drop scripts as part of the build process.
- **Benefit**: This feature provides data engineers with the flexibility to safely manage database objects in production environments, while still having the convenience of utility scripts for development and testing phases.

## Azure Data Factory (ADF) Enhancements

### Change Data Capture Support in ADF

- **Feature**: Integration of Change Data Capture (CDC) in Azure Data Factory Pipelines
- **Description**: This update introduces native support for Change Data Capture (CDC) within ADF pipelines. Now you can automatically capture changes in your source databases and reflect them in your data warehouse or lake in real-time.
- **Benefit**: The CDC support eliminates the need for batch processing or scheduled updates, enabling real-time data integration. This is particularly useful for data engineers who require up-to-the-minute data for analytics or reporting, thereby improving data freshness and reducing latency.

### Change Tracking Configuration Overrides

- **Feature**: Separate Configuration Overrides for ADF Variables
  - Allows distinct Configuration Override settings for `SET_INITIAL_QUERY` and `SET_CHANGE_QUERY`.
- **Description**: 
  - This feature enables you to set different Configuration Override values for the initial data load (`SET_INITIAL_QUERY`) and for tracking changes (`SET_CHANGE_QUERY`) in Azure Data Factory pipelines. This is particularly useful when you have different requirements for the initial load and subsequent data changes.
- **Benefit**: 
  - Gain fine-grained control over your change tracking process. You can now customize the `SET_CHANGE_QUERY` without affecting the `SET_INITIAL_QUERY`, making it easier to manage and optimize your data pipelines for specific use-cases.

### Decoupling Parameter Lookup Activity

- **Feature**: Decoupling of Parameter Activity from Main Processing in ADF Pipelines.
- **Description**: Introduces a new architecture that separates the Parameter Activity from the Main Processing pipeline. This separation allows for more modular design and ensures that the Main Processing pipeline is only triggered when there is actual data to process.
- **Benefit**: This feature significantly enhances operational efficiency by eliminating idle processing time. By ensuring that the Main Processing pipeline only runs when there's data to be processed, it optimizes resource utilization and helps in reducing operational costs.

### Batch Concurrency and File Archiving in ADF

- **Feature**: Control over Pipeline Concurrency and Intelligent File Archiving.
- **Description**: 
  - **Batch Concurrency**: Introduces a setting to limit the number of concurrent executions of a pipeline. This is especially useful when multiple files trigger the same pipeline in quick succession.
  - **File Archiving**: Adds the capability to archive source files after successful processing, with safeguards to prevent archiving files that haven't been processed yet.
- **Benefit**: 
  - **Batch Concurrency**: Ensures that if a pipeline is already running, additional triggers won't initiate new instances, thereby avoiding data duplication or overlap.
  - **File Archiving**: Eliminates the risk of archiving unprocessed files, ensuring that only successfully processed files are moved to the archive location.





5. **Parquet File Format Importer**: Added a new feature to import metadata information from parquet files.

6. **Database Variable Usage in SSDT**: Added the ability for the SSDT database projects created by the BimlFlex build process to utilize database variables for cross-database interactions.

7. **User Specified Pre/Post Deployment Scripts in SSDT**: Added the ability for users to specify pre/post deployment scripts in SSDT.

8. **Transaction to SAT and LSAT Templates**: Added the ability to use transactions in SAT and LSAT templates.

9. **ADF Batch Concurrency and ADF Archiving Source Files**: Added support for ADF Batch Concurrency and ADF Archiving Source Files.

10. **Loading Same Table from Two Different Projects**: Added the ability to load the same table from two different projects.

## Bug Fixes

1. **Naming Standards**: Resolved an issue with conflicting tenses in the flags on the Entities. The Exclude and Deleted flags now use consistent tenses.

2. **Parameter Editor**: Fixed an issue where selecting a Parent Node with only one value would change to an Editor instead of a list view, causing UI inconsistency.

3. **Attribute Editor**: Resolved an issue where Parent Node would show an Editor instead of a list view when there was only one record inside the parent node, leading to an inconsistent and confusing experience.

4. **Attribute Editor**: Fixed an issue where the Attribute Editor was not active after the [Save] button was clicked.

5. **DB2, SSIS**: Fixed issues with the `XML`, `TIMESTAMP( )`, and `DECIMAL( )` data types from DB2 in SSIS packages.

6. **Grids**: Fixed a formatting issue where selecting a Monaco Field would expand the column and change the column size formatting.

7. **Connection Editor**: Fixed an issue where switching from an Account key authentication method to Managed Identity in Linked Service would still contain the account key properties, including the secret name.

8. **Attribute Builder**: Fixed an issue where discarding a new attribute would cause an ng0100 error, ExpressionChangedAfterItHasBeenCheckedError.

9. **Tree Nav Tool Tips**: Fixed an issue where tool tips were obstructive and caused navigation issues.

10. **Delete Detection, Delta Is Derived**: Fixed an issue where PK uses BK but BK is not defined.

11. **Integration Key**: Fixed an issue where Record Source was added by default, even when the setting was disabled.

12. **Biml Table and Field Comments**: Fixed an issue where Biml was not reading or generating any table or field comments from source tables.

13. **Database**: Fixed an issue where a bad version number was being entered into the database.

14. **Audit Tables**: Fixed inconsistencies on RowEffectiveFromDate and RowEffectiveToDate columns.

15. **SSDT**: Fixed an issue where the output column mappings for the COZYROC Salesforce source did not line up with the actual output columns.

## Infrastructure Changes

1. **BimlFlex Runtime

Migration**: Migrated BimlFlex Runtime Components to its own repository and adjusted build pipelines to use it correctly.

2. **BimlFlexUX Migration**: Migrated BimlFlexUX to its own repository and adjusted build pipelines to use it correctly.

3. **Angular-HTML -> JSON Parser**: Created an Angular-HTML -> JSON parser.

## Bug Fixes

- **Naming Standards**: Resolved an issue with conflicting tenses in the flags on the Entities. The Exclude and Deleted flags now have consistent tenses.
- **Parameter Editor**: Fixed a UI inconsistency issue where selecting a Parent Node with only one value changes to an Editor instead of a list view.
- **Attribute Editor**: Fixed an issue where Parent Node would show an Editor instead of a list view when it contained only one record. This was causing an inconsistent and confusing experience.
- **Attribute Editor**: Resolved an issue where the Attribute Editor was not active after the [Save] Button was clicked.
- **Grids**: Fixed a formatting issue caused by Monaco fields when a field was selected.
- **Connection Editor**: Fixed an issue where switching from an Account key authentication method to Managed Identity resulted in incorrect JSON emission for the Linked Service.
- **DB2, SSIS**: Fixed issues with the `XML`,`TIMESTAMP( )`, and `DECIMAL( )` data types from DB2 in SSIS packages.
- **Attribute Builder**: Fixed an issue where discarding a new attribute caused an ng0100 error, ExpressionChangedAfterItHasBeenCheckedError.
- **Tree Nav Tool Tips**: Fixed an issue where tool tips were obstructive and caused navigation issues.
- **SetConnections**: Fixed an issue where more records than intended were removed from [app].[UserSettings].
- **Viewport Schema Printing**: Fixed an issue where schemas were cut off or not displayed with full details when printing the diagram in Accelerator/Schema Diagram/Data Lineage.
- **Integration Key**: Fixed an issue where the record source was added to the integration key by default, even when the setting was disabled.
- **Database**: Fixed an issue where a bad version number was being entered into the database.
- **Audit Tables**: Fixed inconsistencies on RowEffectiveFromDate and RowEffectiveToDate columns when a version was cloned vs. updating a record.
- **SSDT**: Fixed an issue where the output column mappings for the COZYROC Salesforce source did not line up with the actual output columns.

## New Features

- **Databricks Linked Services**: Added a new feature to support Databricks Linked Services. This allows customers to define a connection to their existing Databricks cluster and use their existing infrastructure.
- **Execute Pipeline Parameter**: Added an Extension Point to allow for the creation of a Parameter to be called and passed to the Execute Pipeline Activities in ADF Batches.
- **Databricks Connection Support**: Added support for Databricks connection in the App, allowing for the configuration of a Databricks cluster in the Connection screen.
- **Databricks Data Vault Templates**: Added Databricks Data Vault Templates.
- **Parquet File Format Importer**: Added a feature to import metadata information from parquet files.
- **Database Variable Usage in SSDT**: Added the use of database variables for cross-database interactions in SSDT database projects created by the BimlFlex build process.
- **User Specified Pre/Post Deployment Scripts in SSDT**: Added the ability for users to specify pre/post deployment scripts in SSDT.
- **Transaction to SAT and LSAT Templates**: Added a transaction to SAT and LSAT templates connected to DvUseTransactions.
- **ADF Batch Concurrency and ADF Archiving Source Files**: Added ADF Batch Concurrency and ADF Archiving source files.
- **Use Transaction to SAT and LSAT Templates**: Added the use of transactions to SAT and LSAT templates.

## Improvements

- **Loading Same Table from Two Different Projects**: Improved the ability to load the same table from two different projects, even when they have different connections.
- **Biml Table and Field Comments

**: Improved the handling of table and field comments from source tables in Biml. Now, Biml is capable of reading and generating table or field comments from source tables.
- **Databricks - Option to Toggle Off Truncate and Drop Scripts**: Added an option to toggle off truncate and drop scripts for Databricks tables for production deployment. This provides developers with more control and prevents unintentional data loss during production deployment.
- **Angular-HTML -> JSON Parser**: Developed a new Angular-HTML to JSON parser to enhance data processing capabilities.

## Known Issues

- **Snowflakes Procedure Settings**: Currently, Biml-generated procedures do not have the "Execute as owner" option. We are working on a solution to control this setting or use "execute as caller" instead.
- **Integration Key**: The record source is added to the integration key by default, even when the setting is disabled. We are working on a fix for this issue.
- **Biml Table and Field Comments**: Biml is currently not reading or generating table or field comments from source tables. We are working on enhancements to address this.
- **Database**: There is an issue where a bad version number is being entered into the database. We are working on a fix for this issue.
- **Audit Tables**: There are inconsistencies on RowEffectiveFromDate and RowEffectiveToDate columns when a version is cloned vs. updating a record. We are working on a fix for this issue.

Please note that this is a major release and we recommend testing in a non-production environment before upgrading your production environment. As always, please contact our support team if you encounter any issues or have any questions.