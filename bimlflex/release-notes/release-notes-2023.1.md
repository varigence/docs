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


## Databricks Templates with Data Mesh, Data Vault and Data Mart Capability

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

## New Documentation Feature

### Overview
Introducing the BimlFlex Documentation generator, a comprehensive tool designed to streamline the creation and deployment of your documentation.

### Initialization
- **Setup**: Learn how to set up the BimlFlex Documentation generator.
- **Files**: Understand the core files generated, including:
  - `bundle.js`: The main JavaScript file.
  - `bundleInfo.json`: Metadata about the `bundle.js`.
  - `editor.worker.js`: Assists with real-time editing.
  - `index.html`: The primary display file.
  - `metadata.bundle.js`: Contains information about the documentation's structure.

### Deployment Methods
- **File System Deployment**: Access documentation offline directly from your local system.
- **Web Server Deployment**: Deploy on servers like Microsoft's IIS or Nginx.
- **Cloud Platforms**: Use platforms like Netlify, GitHub Pages, Vercel, or Firebase for hosting.
- **Integration with Jira**: Embed your documentation within a Jira page using an iframe.

## BimlFlex Application Improvements

### Parquet File Format Importer

- **Feature**: Metadata Import from Parquet Files
- **Description**: Introduces a new capability to automatically import metadata information directly from Parquet files into your data pipeline.
- **Benefit**: Simplifies the data ingestion process by eliminating manual metadata configuration, thereby accelerating data pipeline development and reducing the risk of errors.

### SQL Server Data Tools

- **Feature**: Database Variables in SSDT Projects
- **Description**: The BimlFlex build process now allows SSDT database projects to use database variables, facilitating cross-database interactions without hardcoding database names.
- **Benefit**: This feature enhances modularity and promotes best practices by allowing data engineers to manage cross-database interactions more efficiently.

- **Feature**:  Added functionality to specify pre and post-deployment scripts in SSDT.
- **Description**: Users can now specify custom scripts to run before or after the deployment process in SSDT, offering more control over the deployment lifecycle.
- **Benefit**: The added flexibility in specifying pre and post-deployment scripts enables data engineers to automate tasks like data validation or cleanup, thereby streamlining the deployment process.

### Transaction Support in Satellite and Link Satellite Templates

- **Feature**: Transactional Integrity in SAT and LSAT Templates
- **Description**: Introduces transactional capabilities into Satellite (SAT) and Link Satellite (LSAT) templates. This feature ensures that data operations are either fully committed or rolled back in the event of errors such as timeouts.
- **Benefit**: Enhances data consistency and reliability by applying an all-or-nothing approach to data changes. This prevents partial updates that could lead to data inconsistencies, thereby improving the robustness of your ETL pipelines.

### Loading Same Table from Two Different Projects

- **Feature**: Multi-Project Table Loading
- **Description**: Introduces the capability to load a single table from multiple projects. This feature accommodates different data pipelines that may need to populate the same table.
- **Benefit**: Provides flexibility in data ingestion by allowing the same table to be loaded from different projects, each with its own schedule and triggers. This enables more dynamic and responsive data workflows, catering to various data sources and operational requirements.

## Bug Fixes

- **Parameter Editor**: Fixed an issue where selecting a Parent Node with only one value would change to an Editor instead of a list view, causing UI inconsistency.

- **Attribute Editor**: Resolved an issue where Parent Node would show an Editor instead of a list view when there was only one record inside the parent node, leading to an inconsistent and confusing experience.

- **Attribute Editor**: Fixed an issue where the Attribute Editor was not active after the [Save] button was clicked.

- **DB2, SSIS**: Fixed issues with the `XML`, `TIMESTAMP( )`, and `DECIMAL( )` data types from DB2 in SSIS packages.

- **Grids**: Fixed a formatting issue where selecting a Monaco Field would expand the column and change the column size formatting.

- **Connection Editor**: Fixed an issue where switching from an Account key authentication method to Managed Identity in Linked Service would still contain the account key properties, including the secret name.

- **Delete Detection, Delta Is Derived**: Fixed an issue where PrimaryKey uses IntegrationKey but IntegrationKey is not defined.

- **Integration Key**: Fixed an issue where Record Source was added by default, even when the setting was disabled.

- **Table and Column Comments**: Fixed an issue where BimlFlex was not reading or generating any table or column comments from source tables.

- **Audit Tables**: Fixed inconsistencies on RowEffectiveFromDate and RowEffectiveToDate columns.

## New Settings 

### Azure Data Factory

- **Data Factory Location**: Defines the geographical location of the Azure Data Factory instance and its data operations.
- **Delete Source Files**: Option to delete source files post-processing.
- **OnError Source Files**: Option to move source files to a specified error container if an error occurs during processing.
- **Archive Source Files**: Option to move source files to a specified archive container post-processing.
- **Copy Behavior**: Sets the data transfer method from source to destination in Azure Copy Activity, particularly when destination already has data files.
- **Is Recursive**: Determines if the Copy Activity should recurse into sub-folders of the source directory when reading files.
- **Source Settings**: Controls how data is read, including query timeout, partitioning for parallel reads, and fault tolerance. Enhances data extraction control and optimization.
- **Enable Logging**: Logs detailed events from Azure Data Factory scripts or activities when enabled. Facilitates troubleshooting and performance optimization.
- **Execution Timeout**: Sets the wait time in minutes for the script block execution operation to complete before it times out in Azure Script Activity.
- **Log Settings**: Customizes log capture and storage during script execution. Assists in identifying errors and debugging processes in data pipelines.
- **Retry Attempts**: Sets the maximum duration for Azure Script Activity to run. Default is 7 days. Format is D.HH:MM:SS.
- **Retry Interval**: Sets the interval in seconds between each retry attempt for Azure Script Activity.
- **Secure Input**: When enabled, input from Azure Script Activity will not be captured in Azure Data Factory logging.
- **Secure Output**: When enabled, output from Azure Script Activity will not be captured in Azure Data Factory logging.

### Data Vault
- **Apply Data Type Mapping DV:** Determines if the Data Type Mappings are applied to the Raw Data Vault. This function allows for the expansion of data types.
- **Apply Lookup Filter DV:** Optimizes memory usage by determining if the SSIS Lookup checks for existing rows by applying a filter condition joining the staging table to the destination table in Staging-to-Data Vault processes.
- **Uniform Change Type:** Prevents duplication and preserves attribute history by treating all source inserts and updates alike. No new record is added if `RowChangeType` is the only difference.
- **Zero Key Expression:** Overrides the default SQL expression to generate Zero keys in Data Vault insert scripts. Use with caution as altering this expression may affect data consistency.
- **Add Zero Keys:** Automatically uses a Zero Key for Link Keys when the key column is empty, ensuring all records are linked even if some key data is missing.
- **Column Naming Convention:** Sets the naming convention for Columns in the Data Vault Accelerator.
- **Create Satellite Views:** Generates easy-to-use DataVault satellite views that include effectivity timelines and current statuses for simpler data analysis over time.
- **Current View Suffix:** Sets the prefix for `Current` satellite views. Default is `_CURR`.
- **ELT Delta Is Derived:** Optimizes ELT loads for scenarios like streams or insert-only transaction source tables by enabling if loading into Data Vault and the Delta has already been derived.
- **Effectivity View Suffix:** Sets the prefix for `Effectivity` satellite views. Default is `_EFDT`.
- **Prefix View Name:** Sets the prefix for `Current` (CURR) and `Effectivity` (EFDT) satellite views.
- **Schema Bridge:** Overrides the Default Schema used in the `Create Bridge` dialog.
- **Schema Point In Time:** Overrides the Default Schema used in the `Create Point In Time` dialog.
- **Append Schema:** Determines if the schema is appended to the names of accelerated Data Vault objects.
- **Display Database Name:** Determines if the database name is displayed in the Data Vault.
- **Display Schema Name:** Determines if the schema name is displayed in the Data Vault.

### Databricks

- **Add Create Catalog**  Enables the inclusion of `CREATE CATALOG IF NOT EXISTS` statement in table creation scripts.
- **Add Drop Notebooks**  Generates notebooks that drop all existing tables in the workspace. Recommended for development environments only.
- **Add Sql Comments**  Includes user-defined metadata as SQL comments in `CREATE TABLE` scripts.
- **Add Truncate Notebooks**  Generates notebooks that truncate all existing tables in workspace. Recommended for development environments only.
- **Append Notebook Name**  Appends a specified string to generated Databricks Notebooks.
- **Build Output Path**  Specifies the folder for creating Databricks files upon build.
- **Copy Format Options**  Customizes properties of the file format used during the COPY INTO operation.
- **Copy Options**  Customizes `COPY_OPTION` for the COPY INTO operation.
- **Data Time Zone**  Sets the time zone for loading timestamps in notebooks without altering original data.
- **Display Time Zone**  Sets the time zone for displaying timestamps in notebooks without altering original data.
- **Notebook Path**  Specifies the folder containing Databricks files for runtime.
- **Repository Name**  Identifies the Repository containing Databricks files for runtime.
- **Retry Attempts**  Defines the number of retry attempts for re-running failed Databricks Notebook Activity.
- **Retry Interval**  Specifies the wait time before retrying a failed Databricks Notebook Activity.
- **Secure Input**  Protects sensitive data passed into Databricks Notebook by masking input values.
- **Secure Output**  Secures the output of Databricks Notebook Activity, hiding it from activity logs.
- **Table Properties**  Defines properties for creating tables in Databricks using CREATE TABLE statement.
- **Timeout**  Sets maximum wait time for Azure Data Factory to complete Databricks Notebook Activity.
- **Use Global Parameters**  Determines if Azure Data Factory will call Databricks Notebooks using Global arameters.
- **Use Managed Tables**  Decides if table creation scripts should use `Unity Catalog` or `LOCATION` clause.
- **Use Temporary Views**  Allows notebooks to use `CREATE OR REPLACE TEMPORARY VIEW` SQL statement for quicker data access.
- **Use Unity Catalog**  Specifies if table creation scripts should use `Unity Catalog` or `LOCATION` clause.

### Documentation

- **Hide Footer**: This setting allows you to control the visibility of the footer div in the HTML template when the documentation is in preview mode.
- **Hide Header**: This setting enables you to determine the visibility of the header div in the HTML template during preview mode of the documentation.
- **HTML Template Path**: This setting provides an option to specify the path to a replacement HTML file that will serve as the foundation for the generated documentation.
- **Include Connection Schema Diagrams**: This setting decides whether or not to include schema diagrams in the documentation for each connection.
- **Include Object Lineage Diagrams**: This setting determines if lineage diagrams should be included in the documentation for each object.
- **Item Settings JSON**: This setting allows you to specify JSON code that can be used to customize the settings for each item in the documentation.
- **Property Display Mode**: This setting controls which properties are shown for each entity based on their values in the generated documentation for a BimlFlex project.
- **Property Order**: This setting allows you to determine the order in which properties are displayed for each entity in the generated documentation for a BimlFlex project.

### Business Modeling
- **Attribute Naming Convention** Introducing a new setting to specify the naming convention for attributes in your business model. You can now select from predefined conventions such as `PascalCase`, `camelCase`, `UPPER_CASE`, `lower_case`, and more.
- **Attribute Technical Naming Convention** We've added a setting that allows you to define the technical naming convention for attributes in your business model. Choose from options like `PascalCase`, `camelCase`, `UPPER_CASE`, `lower_case`, among others.
- **Entity Naming Convention** We have a new setting that specifies the naming convention used for entities in your business model. Select from predefined conventions such as `PascalCase`, `camelCase`, `UPPER_CASE`, `lower_case`, and more.
- **Entity Technical Naming Convention** Our latest update includes a setting that specifies the technical naming convention used for entities in your business model. You can choose from predefined conventions like `PascalCase`, `camelCase`, `UPPER_CASE`, `lower_case`, etc.


### Snowflake
- **Add Sql Comments** Enable this new setting to include user-defined metadata as SQL comments in your `CREATE TABLE` scripts. This will allow you to add descriptive information or notes directly in your SQL code for better understanding and readability.
- **Clean Output Path** We have added a new setting that specifies whether the output folder for the SnowDT (Snowflake Data Tools) project should be cleared during the build process. This can help you maintain a clean workspace by removing outdated or unnecessary files.
- **Execute As** This new setting allows you to choose how to execute commands in Snowflake: as the `CALLER` initiating the operation, or as the `OWNER` of the object being accessed. This provides more control and flexibility over command execution in Snowflake.

### SQL Server Data Tools
- **Clean Output Path** This setting allows you to decide if the output folder for your SSDT (SQL Server Data Tools) project should be cleared during the build process.
- **Solution Name** With this setting, you can specify the SSDT Solution Name used when the 'Use Database References' feature is enabled. This aids in better organization and identification of your project within your development environment.
- **Use Database References** This setting enables SSDT (SQL Server Data Tools) database projects to use database variables, allowing for more dynamic cross-database interactions. It promotes modularity and removes the need to hardcode database names.
- **Visual Studio Version** This setting lets you specify the version of Visual Studio you are using or targeting for your project.

### Staging
- **Staged Object Configurations** Choose how to handle the `StagingAttribute` for each object. Options include `Derived`, `Source`, and `Inherit`. This setting allows you to override the default behavior for greater customization.
- **Delta Is Derived** Determines if a PSA table already receives a data delta. Enable this if loading into PSA and the delta has already been derived earlier.
- **Delta Use Hash Diff** Enable this option to use Hash Diff comparisons for Change Data Capture and Change Tracking sources. This method provides a more robust way to identify and capture only the changes, but may increase load time.

> [!NOTE]
>
> * This is a major release and we recommend testing in a non-production environment before upgrading your production environment. 
> * As always, please contact our support team if you encounter any issues or have any questions.