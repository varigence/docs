---
sidebar_position: 3
title: BimlFlex 2023 R1 Preview Release Notes
description: Release Notes for BimlFlex 2023 R1 Preview
---

# Preview Release Notes

Varigence is excited to release the 2023 R1 Preview version of the BimlFlex platform for data solution automation!



:::note


* Please make sure databases and projects are backed up before upgrading.
* Please email support@bimlflex.com with any installation or upgrade issues.

:::


## Installation

BimlFlex 2023 R1 Preview is installed and upgraded through a single consolidated installer.

<!--
MANUALLY UPDATE BUILD NUMBER UPON RELEASE
-->

Build 23.1.457.0, release date: 13 Oct 2023


* [BimlFlex Developer Setup (64-bit)](https://download.varigence.com/downloads/bimlflexdevsetup_x64_23.1.457.0.exe). This installer includes all BimlFlex components for 64-bit
* [BimlFlex Developer Setup (32-bit)](https://download.varigence.com/downloads/bimlflexdevsetup_x86_23.1.457.0.exe). This installer includes all BimlFlex components for 32-bit
* [BimlFlex Runtime Setup (64-bit)](https://download.varigence.com/downloads/bimlflexruntimesetup_x64_23.1.457.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 64-bit.
* [BimlFlex Runtime Setup (32-bit)](https://download.varigence.com/downloads/bimlflexruntimesetup_x86_23.1.457.0.exe). This installer includes the required runtime components for servers that will execute SSIS packages for 32-bit.

## Installer File Enhancements

* Split installers into 32-bit and 64-bit versions for smaller size and increased flexibility
* Added support for MSI installation, if the bundled EXE installer is not supported by group policy
* Removed large locale-specific PAK files from Chromium browser host, as they are not required for customer workflows
* Changed "Add/Remove Programs" entries to list each installed application separately, rather than condensing them under the Setup Bundle executable. This means that BimlFlex Dev, BimlFlex Runtime, and BimlStudio installers no longer corrupt each others' installations.
* Added MFA support in dacpac deployment in the installer
* When testing a connection string for database deployment in BimlFlex Dev Installer, if the database is not present, the connection to the server will be validated for a new database deployment
* Added BimlFlex SSIS Snowflake CustomComponents for SQL 2022
* Updated AzureFunctionBridge to the latest version of Azure Functions

## 2023 R1 - New Features

### Databricks Integration and Templates

BimlFlex has been updated to incorporate Databricks functionality, enhancing its capabilities in data management and processing. The integration of these two solutions results in a robust environment for data management, providing users with a seamless and efficient means to unlock the potential of their data, whether its architecture be Data Mesh, Data Vault, or Data Mart.

#### Linked Services Support

* **Feature**: Integration with Databricks Linked Services
* **Description**: Added native support for Databricks Linked Services, enabling a seamless connection to existing Databricks clusters from the BimlFlex platform.
* **Benefit**: This feature allows data engineers to easily integrate BimlFlex with their existing Databricks infrastructure. Eliminate the need for additional inline processing resources and associated costs by taking advantage of current Databricks clusters for data processing tasks.

#### Import Metadata Support

* **Feature**: Metadata Import from Databricks
* **Description**: BimlFlex now allows the import of metadata directly from Databricks. This feature enables pushdown processing capabilities, allowing the generation of Data Vault and Data Marts based on existing data lakehouse files mounted in Databricks.
* **Benefit**: Streamline the data engineering process by eliminating the need to manually map or migrate metadata. This feature leverages Databricks' capabilities for efficient data processing, making it easier to create Data Vaults and Data Marts directly from your existing data lakehouse files.

#### Data Vault Templates

* **Feature**: Databricks Data Vault Templates
* **Description**: Introduction of new templates designed to facilitate the implementation of Data Vault patterns within Databricks environments.
* **Benefit**: Simplifies and accelerates the process of setting up Data Vault architectures in Databricks, allowing data engineers to focus more on data integration and less on boilerplate code.

#### Data Mart Templates

* **Feature**: Custom Data Mart Templates for Databricks
* **Description**: Introduces specialized Data Mart templates that are optimized for Databricks, offering seamless integration and enhanced performance. The existing Data Mart feature has been refactored to better align with the unique capabilities of Databricks.
* **Benefit**: Enables data engineers to leverage Databricks-specific optimizations for data warehousing, reducing the time and complexity involved in setting up Data Marts. The refactored feature ensures that users can make the most out of Databricks' advanced analytics and data processing capabilities.

#### Delete Detection Templates

* **Feature**: Delete Detection Templates in Databricks
* **Description**: Introduces new templates within Databricks that are specifically designed to detect deletions in source data. These templates automate the process of identifying and managing deleted records.
* **Benefit**: Simplifies data management by automatically handling source deletions, reducing manual intervention, and ensuring data integrity within Databricks environments.

#### Point In Time and Bridge Templates

* **Feature**: New Databricks Templates for Point-in-Time (PIT) and Bridge Patterns
* **Description**: Introduces specialized templates in Databricks that are designed to implement Point-in-Time (PIT) and Bridge data modeling patterns. These templates come pre-configured to enable quick setup and deployment.
* **Benefit**: Simplifies the process of implementing PIT and Bridge patterns in Databricks environments. These templates save time and reduce the risk of errors, allowing data engineers to focus on more complex tasks.

#### Notebooks Integration

* **Feature**: Integrated Databricks Notebooks
* **Description**: Databricks notebooks, optimized for data processing tasks, are now seamlessly integrated into BimlFlex. These notebooks are stored and managed within source control repositories.
* **Benefit**: Data engineers can easily access, modify, and collaborate on Databricks notebooks directly from the Databricks Workspace, ensuring streamlined workflows and version-controlled data processing scripts.

#### Cluster Connection

* **Feature**: Configuration of Databricks Cluster Connection in BimlFlex.
* **Description**: BimlFlex now allows the configuration of a connection to a Databricks cluster directly within the platform. This connection can be leveraged in Azure Data Factory pipelines as both a data source and target.
* **Benefit**: This feature simplifies the process of integrating Databricks into data pipelines. By enabling a direct connection to Databricks clusters, data engineers can more easily orchestrate complex data workflows that require Databricks' advanced analytics capabilities, all while managing it from a single platform.

#### Truncate and Drop Scripts in BimlStudio

* **Feature**: Toggleable Truncate and Drop Scripts
* **Description**: BimlStudio now allows developers to enable or disable the generation of truncate and drop scripts as part of the build process for BimlFlex projects.
* **Benefit**: This feature provides data engineers with the flexibility to safely manage database objects in production environments while still having the convenience of utility scripts for development and testing phases.

### Azure Data Factory (ADF)

* Added **Native Support for Change Data Capture (CDC)** in ADF Pipelines, allowing automatic capture of changes in source databases and real-time reflection in data warehouses or lakes. This eliminates the need for batch processing, providing real-time data integration that enhances data freshness and reduces latency for data engineers requiring up-to-the-minute data for analytics or reporting.
* Added **Separate Change Tracking Configuration Overrides for ADF Variables** to allow for `SET_INITIAL_QUERY` (initial data load) and `SET_CHANGE_QUERY` (change tracking). This provides fine-grained control over data pipelines, allowing users to tailor the `SET_CHANGE_QUERY` to specific use-cases without impacting the `SET_INITIAL_QUERY`, facilitating more efficient management and optimization.
* Added **Decoupling of Parameter Activity from Main Processing** in ADF Pipelines, which introduces a modular architecture that triggers the Main Processing pipeline only when there's actual data to process. This approach eliminates idle processing time, optimizes resource utilization, and reduces operational costs.
* Added control over **Pipeline Concurrency and Intelligent File Archiving**. This allows users to limit concurrent pipeline executions and archive files only after successful processing, preventing data duplication and ensuring that only processed files are archived.

### BimlFlex Documentation Generator

The BimlFlex Documentation generator is a comprehensive new tool designed to streamline the creation and deployment of organization-specific documentation for its data solutions.

Documentation can be generated as the following core files, which collectively support the documentation generation process:

* `bundle.js`: The main JavaScript file
* `bundleInfo.json`: Metadata about the `bundle.js`
* `editor.worker.js`: Assists with real-time editing
* `index.html`: The primary display file
* `metadata.bundle.js`: Contains information about the documentation's structure

Once generated, documentation can be deployed through the following methods:

* **File System Deployment**: Access documentation offline directly from your local system
* **Web Server Deployment**: Deploy on servers like Microsoft's IIS or Nginx
* **Cloud Platforms**: Use platforms like Netlify, GitHub Pages, Vercel, or Firebase for hosting
* **Integration with Jira**: Embed your documentation within a Jira page using an iframe

See the [Documentation Generation User Guide](https://docs.varigence.com/bimlflex/docs-gen) for more information.

### Metadata Import

* **Parquet File Format Importer** now allows automatic metadata import from Parquet files, streamlining data ingestion by eliminating manual metadata configuration, thus accelerating data pipeline development and minimizing the risk of errors.
* **Flat File Format Importer** now enables automatic metadata import from flat files, simplifying data ingestion by eliminating manual metadata configuration, thus expediting data pipeline development and reducing the risk of errors.
* **Database Schema Importer** now has added support for importing Streams. Additionally, the user interface has been refactored to enable improved import performance, schema and object name filtering at the server level, post-import filtering of schema and objects on the client-side, and improved use of screen real estate.

### Metadata Editor Diagrams

BimlFlex metadata editors which utilize model-diagrammed visualizations (Accelerator, Schema Diagram, Data Lineage) have been upgraded to include:

* Column to column edges, rather than all being connected at the object level
* Edges now grouped when pointed to the same column
* Edge rerouting on drag
* Colors on Schema Diagram
* Edge routing handlers are more indicative of how to be interacted with
* Edge arrow styles
* Added logical entity groupings (SATS/HUBS, LINKS/LSATS, etc.)
* Added new diagram display options, available in all graphical metadata editors:
  * Zoom controls
  * Toggles now live in dropdown menus
  * Overall change to graph style
  * Removed dropdown arrow on object. Users cannot individually hide the columns on certain objects when 'Show Columns' is active (this is a regression).

### Diagrams Embedded in Object Editor Tabs

The Object editor screen has added tabs for Schema Diagram, Accelerator, and Data Lineage where applicable. This enables visual inspection and editing of objects and their related entities without having to leave the Object editor. The tabs host the full-featured modeling diagrams with presets configured to maximize productivity.

### SQL Server Data Tools

* Added **Database Variables in SSDT projects** to promote modularity and best practices by facilitating efficient management of cross-database interactions without the need for hardcoded database names.
* Added functionality to specify **Pre and Post-deployment Scripts in SSDT**, granting users greater control over the deployment lifecycle. This added flexibility allows data engineers to automate tasks like data validation or cleanup, streamlining the deployment process.
* Added **Transactional Integrity** into Satellite (SAT) and Link Satellite (LSAT) templates, ensuring data operations are either fully committed or rolled back in case of errors such as timeouts. This enhances data consistency and reliability by adopting an all-or-nothing approach to data changes, preventing partial updates and improving ETL pipeline robustness.
* Added **Multi-Project Table Loading**, the capability to load a single table from multiple projects. This enhancement offers greater flexibility in data ingestion by accommodating different data pipelines that may need to populate the same table. It enables each project to have its own schedule and triggers, promoting dynamic and responsive data workflows to cater to various data sources and operational requirements.

### Excel Add-In

* Added MFA support to enhance user security by adding an additional layer of verification, safeguarding sensitive data and Biml projects.

### BimlStudio Build and Customization

* Huge performance improvements on project loading and build.
* Added DesignerBimlPath to all Extension Point templates for improved intellisense capabilities. This improvement provides users with more intelligent and error-resistant Biml code suggestions and streamlined development.
* Default Build Engine for new projects changed to Bimlc.exe. This offers faster compilation times, better resource utilization, and increased build stability.
* Added encrypted Token Cache for Multi-Factor Authentication (MFA) when using Active Directory Interactive, which prevents the user from having to revalidate via MFA on every build or import operation.

## 2023 R1 - Enhancements and New Settings

### Azure Data Factory

* **Data Factory Location**: Defines the geographical location of the Azure Data Factory instance and its data operations
* **Delete Source Files**: Option to delete source files post-processing
* **OnError Source Files**: Option to move source files to a specified error container if an error occurs during processing
* **Archive Source Files**: Option to move source files to a specified archive container post-processing
* **Copy Behavior**: Sets the data transfer method from source to destination in Azure Copy Activity, particularly when destination already has data files
* **Is Recursive**: Determines if the Copy Activity should recurse into sub-folders of the source directory when reading files
* **Source Settings**: Controls how data is read, including query timeout, partitioning for parallel reads, and fault tolerance. Enhances data extraction control and optimization
* **Enable Logging**: Logs detailed events from Azure Data Factory scripts or activities when enabled. Facilitates troubleshooting and performance optimization
* **Execution Timeout**: Sets the wait time in minutes for the script block execution operation to complete before it times out in Azure Script Activity
* **Log Settings**: Customizes log capture and storage during script execution. Assists in identifying errors and debugging processes in data pipelines
* **Retry Attempts**: Sets the maximum duration for Azure Script Activity to run. Default is 7 days. Format is D.HH:MM:SS
* **Retry Interval**: Sets the interval in seconds between each retry attempt for Azure Script Activity
* **Secure Input**: When enabled, input from Azure Script Activity will not be captured in Azure Data Factory logging
* **Secure Output**: When enabled, output from Azure Script Activity will not be captured in Azure Data Factory logging

### Data Vault

* **Apply Data Type Mapping DV**: Determines if the Data Type Mappings are applied to the Raw Data Vault. This function allows for the expansion of data types
* **Apply Lookup Filter DV**: Optimizes memory usage by determining if the SSIS Lookup checks for existing rows by applying a filter condition joining the staging table to the destination table in Staging-to-Data Vault processes
* **Uniform Change Type**: Prevents duplication and preserves attribute history by treating all source inserts and updates alike. No new record is added if `RowChangeType` is the only difference
* **Zero Key Expression**: Overrides the default SQL expression to generate Zero keys in Data Vault insert scripts. Use with caution as altering this expression may affect data consistency
* **Add Zero Keys**: Automatically uses a Zero Key for Link Keys when the key column is empty, ensuring all records are linked even if some key data is missing
* **Column Naming Convention**: Sets the naming convention for Columns in the Data Vault Accelerator
* **Create Satellite Views**: Generates easy-to-use DataVault satellite views that include effectivity timelines and current statuses for simpler data analysis over time
* **Current View Suffix**: Sets the prefix for `Current` satellite views. Default is `_CURR`
* **ELT Delta Is Derived**: Optimizes ELT loads for scenarios like streams or insert-only transaction source tables by enabling if loading into Data Vault and the Delta has already been derived
* **Effectivity View Suffix**: Sets the prefix for `Effectivity` satellite views. Default is `_EFDT`
* **Prefix View Name**: Sets the prefix for `Current` (CURR) and `Effectivity` (EFDT) satellite views
* **Schema Bridge**: Overrides the Default Schema used in the `Create Bridge` dialog
* **Schema Point In Time**: Overrides the Default Schema used in the `Create Point In Time` dialog
* **Append Schema**: Determines if the schema is appended to the names of accelerated Data Vault objects
* **Display Database Name**: Determines if the database name is displayed in the Data Vault
* **Display Schema Name**: Determines if the schema name is displayed in the Data Vault

### Databricks

* **Add Create Catalog**: Enables the inclusion of `CREATE CATALOG IF NOT EXISTS` statement in table creation scripts
* **Add Drop Notebooks**: Generates notebooks that drop all existing tables in the workspace. Recommended for development environments only
* **Add Sql Comments**: Includes user-defined metadata as SQL comments in `CREATE TABLE` scripts
* **Add Truncate Notebooks**: Generates notebooks that truncate all existing tables in workspace. Recommended for development environments only
* **Append Notebook Name**: Appends a specified string to generated Databricks Notebooks
* **Build Output Path**: Specifies the folder for creating Databricks files upon build
* **Copy Format Options**: Customizes properties of the file format used during the COPY INTO operation
* **Copy Options**: Customizes `COPY_OPTION` for the COPY INTO operation
* **Data Time Zone**: Sets the time zone for loading timestamps in notebooks without altering original data
* **Display Time Zone**: Sets the time zone for displaying timestamps in notebooks without altering original data
* **Notebook Path**: Specifies the folder containing Databricks files for runtime
* **Repository Name**: Identifies the Repository containing Databricks files for runtime
* **Retry Attempts**: Defines the number of retry attempts for re-running failed Databricks Notebook Activity
* **Retry Interval**: Specifies the wait time before retrying a failed Databricks Notebook Activity
* **Secure Input**: Protects sensitive data passed into Databricks Notebook by masking input values
* **Secure Output**: Secures the output of Databricks Notebook Activity, hiding it from activity logs
* **Table Properties**: Defines properties for creating tables in Databricks using CREATE TABLE statement
* **Timeout**: Sets maximum wait time for Azure Data Factory to complete Databricks Notebook Activity
* **Use Global Parameters**: Determines if Azure Data Factory will call Databricks Notebooks using Global parameters
* **Use Managed Tables**: Decides if table creation scripts should use `Unity Catalog` or `LOCATION` clause
* **Use Temporary Views**: Allows notebooks to use `CREATE OR REPLACE TEMPORARY VIEW` SQL statement for quicker data access
* **Use Unity Catalog**: Specifies if table creation scripts should use `Unity Catalog` or `LOCATION` clause

### Documentation

* **Hide Footer**: This setting allows you to control the visibility of the footer div in the HTML template when the documentation is in preview mode
* **Hide Header**: This setting enables you to determine the visibility of the header div in the HTML template during preview mode of the documentation
* **HTML Template Path**: This setting provides an option to specify the path to a replacement HTML file that will serve as the foundation for the generated documentation
* **Include Connection Schema Diagrams**: This setting decides whether or not to include schema diagrams in the documentation for each connection
* **Include Object Lineage Diagrams**: This setting determines if lineage diagrams should be included in the documentation for each object
* **Item Settings JSON**: This setting allows you to specify JSON code that can be used to customize the settings for each item in the documentation
* **Property Display Mode**: This setting controls which properties are shown for each entity based on their values in the generated documentation for a BimlFlex project
* **Property Order**: This setting allows you to determine the order in which properties are displayed for each entity in the generated documentation for a BimlFlex project

### Business Modeling

* **Attribute Naming Convention**: Introducing a new setting to specify the naming convention for attributes in your business model. You can now select from predefined conventions such as `PascalCase`, `camelCase`, `UPPER_CASE`, `lower_case`, and more
* **Attribute Technical Naming Convention**: We've added a setting that allows you to define the technical naming convention for attributes in your business model. Choose from options like `PascalCase`, `camelCase`, `UPPER_CASE`, `lower_case`, among others
* **Entity Naming Convention**: We have a new setting that specifies the naming convention used for entities in your business model. Select from predefined conventions such as `PascalCase`, `camelCase`, `UPPER_CASE`, `lower_case`, and more
* **Entity Technical Naming Convention**: Our latest update includes a setting that specifies the technical naming convention used for entities in your business model. You can choose from predefined conventions like `PascalCase`, `camelCase`, `UPPER_CASE`, `lower_case`, etc

### Snowflake

* **Add Sql Comments**: Enable this new setting to include user-defined metadata as SQL comments in your `CREATE TABLE` scripts. This will allow you to add descriptive information or notes directly in your SQL code for better understanding and readability
* **Clean Output Path**: We have added a new setting that specifies whether the output folder for the SnowDT (Snowflake Data Tools) project should be cleared during the build process. This can help you maintain a clean workspace by removing outdated or unnecessary files
* **Execute As**: This new setting allows you to choose how to execute commands in Snowflake: as the `CALLER` initiating the operation, or as the `OWNER` of the object being accessed. This provides more control and flexibility over command execution in Snowflake

### SQL Server Data Tools

* **Clean Output Path**: This setting allows you to decide if the output folder for your SSDT (SQL Server Data Tools) project should be cleared during the build process
* **Solution Name**: With this setting, you can specify the SSDT Solution Name used when the 'Use Database References' feature is enabled. This aids in better organization and identification of your project within your development environment
* **Use Database References**: This setting enables SSDT (SQL Server Data Tools) database projects to use database variables, allowing for more dynamic cross-database interactions. It promotes modularity and removes the need to hardcode database names
* **Visual Studio Version**: This setting lets you specify the version of Visual Studio you are using or targeting for your project

### Staging

* **Staged Object Configurations**: Choose how to handle the `StagingAttribute` for each object. Options include `Derived`, `Source`, and `Inherit`. This setting allows you to override the default behavior for greater customization
* **Delta Is Derived**: Determines if a PSA table already receives a data delta. Enable this if loading into PSA and the delta has already been derived earlier
* **Delta Use Hash Diff**: Enable this option to use Hash Diff comparisons for Change Data Capture and Change Tracking sources. This method provides a more robust way to identify and capture only the changes, but may increase load time

## 2023 R1 - Bug Fixes and Various Improvements

### Connection Editor

* Fixed an issue where switching from an Account key authentication method to Managed Identity in Linked Service would still contain the account key properties, including the secret name

### Parameter Editor

* Fixed an issue where selecting a Parent Node with only one value would change to an Editor instead of a list view, causing UI inconsistency

### Attribute Editor

* Resolved an issue where Parent Node would show an Editor instead of a list view when there was only one record inside the parent node, leading to an inconsistent and confusing experience
* Fixed an issue where the Attribute Editor was not active after the [Save] button was clicked

### Grids

* Fixed a formatting issue where selecting a Monaco Field would expand the column and change the column size formatting
* Pivoted to using standard text areas in grids for Monaco fields with full Monaco experience only in popup dialog
* Improved dirty field checks across all grids, especially for Monaco fields
* Improved disabled cell logic across all grids

### SSIS / DB2

* Fixed issues with the `XML`, `TIMESTAMP( )`, and `DECIMAL( )` data types from DB2 in SSIS packages

### Delete Detection

* Fixed an issue where PrimaryKey uses IntegrationKey but IntegrationKey is not defined

### Integration Key

* Fixed an issue where Record Source was added by default, even when the setting was disabled

### Table and Column Comments

* Fixed an issue where BimlFlex was not reading or generating any table or column comments from source tables

### Audit Tables

* Fixed inconsistencies on RowEffectiveFromDate and RowEffectiveToDate columns

### Form Field Logic

* No longer working from model stored in DB. Uses form field values instead

### Entity Folders

* Added Entity Folders to the Project hierarchy and a project grid control to display projects inside the folders

### UI Labels

* Improved labels (such as Retention Settings) to include the unit of measurement (e.g. Days) and changed Exclude to Excluded to align with other options

### Touch Mode

* Improved interface while in touch mode to make tree views easier to use with bigger touch targets

### Tooltips

* Standardized tooltip delay at 1100 ms.
* Moved margin outside of the overlay so that tooltip would immediately disappear when moving mouse away from label

### Prepopulated Fields

* Added smarter field prepopulation when creating new Parameters and Custom Attributes

## Excel Add-in

* Fixed ability to list databases when using multi-factor authentication
* Fixed issue where add-in would fail to cache login information for non-Windows authentication.



:::note


* This is a major release and we recommend testing in a non-production environment before upgrading your production environment.
* As always, please contact our support team if you encounter any issues or have any questions.

:::

