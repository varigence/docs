---
uid: bimlflex-release-notes-2022-r2
name: BimlFlex Release Notes 2022 R2
summary: Release Notes for BimlFlex 2022 R2
---

# Release Notes

Varigence is excited to release the 2022 R2 version of the BimlFlex platform for data solution automation!

> [!NOTE]
>
> * Please make sure databases and projects are backed up before upgrading.
> * Please email support@bimlflex.com with any installation or upgrade issues.

## Installation

BimlFlex 2022 R2 is installed and upgraded through a single consolidated installer.

<!--
MANUALLY UPDATE BUILD NUMBER UPON RELEASE
-->

Build 22.2.165.0, release date: 25 May 2022

>
* [BimlFlex Developer Setup](https://varigence.com/downloads/bimlflexdevsetup.exe). This installer includes all BimlFlex components
* [BimlFlex Runtime Setup](https://varigence.com/downloads/bimlflexruntimesetup.exe). This installer includes the required runtime components for servers that will execute SSIS packages

## 2022 R2 - New Features

### Pushdown Extraction

With the 2022 R2 release, it is now possible to use the new [**Pushdown Extraction** feature](https://www.varigence.com/Blog/Post/112) to integrate data without requiring a separate Landing step or Copy Activity. This feature can be considered when a 'source' operational system shares the technical environment with the data solution. For example, when the 'source' is located on the same database server as the data solution. In scenarios such as these, it can be efficient to make sure _all_ processing occurs in this environment. This way, the data does not have to 'leave' the environment to be processed.

This feature can be helpful for example when your database servers hosts multiple applications, or when you are using a Snowflake tenant for multiple applications.

Many of the BimlFlex sample configurations have been updated to include examples of how pushdown extraction can be used.

### Script Activity

Support for [Azure Data Factory Script Activity](https://www.varigence.com/Blog/Post/113) has been added as part of the 2022 R2 release. The Script Activity provides a versatile way to execute SQL statements against the configured connection. BimlFlex now uses the Script Activity in many patterns that previously used Lookup or Stored Procedure Activities. While this is not a functional difference, it makes the resulting pipelines easier to understand and debug, if required.

The use of Script Activities is not supported for Salesforce and Dynamics connections at the time of release. These data sets must still be connected to using either Lookup or Stored Procedure activities, until ADF supports the use of Script Activities for these connection types.

A major advantage of using Script Activities is broader support for connection types such as Snowflake. Our patterns have been updated to use the Script Activity instead of the proprietary Azure Function Bridge solution that was in place up to this release.

> [!IMPORTANT]
> The use of the Script Activity in combination with Self Hosted Integration Runtimes requires the runtime to be upgraded to v15.5 or higher. If using a lower version of Self Hosted Integration Runtime, upgrading is required to correctly execute the pipelines.

## 2022 R2 - Improvements

### Various Application Improvements

* Added the automatic installation of `vcredist` to the application installer. In rare cases, this caused some errors during a clean installation
* Added `archive` tables to all Execution and Audit tables to improve performance and reduce deadlocks. The default archive threshold is `30 days`, but can be configured in the application
* Reconfigured metadata samples 41 (Synapse Dynamics ADF Solution) and 43 (Synapse Salesforce SSIS Solution) to have example 'high water mark' parameters for data delta selection
* Added validation warnings for pushdown processing when Azure SQL connections in a **Project** that have `pushdown` checked are configured to have different databases. Pushdown processing can only work if the involved connections all point to the same database
* Upon successful conclusion of a metadata import the application will now navigate to a **Schema Diagram** of the imported tables

### Connection Editor

* Ensured that all **Connection Editor** validators in the BimlStudio validation framework are also available in the BimlFlex app
* Changed the styling of ADF tabs for Connection String and Azure Key Vault to better convey a 'one or the other' selection

### Data Vault Accelerator

* Added the ability to define a "Stub Hub" using the Data Vault Accelerator. This will allow users to generate a "placeholder" Hub by modifying **Column** properties (*ChangeType* set to `Stub Hub`)

### Business Modeling

* Added data entry validators on the **Business Attribute Editor** to prevent entering impossible combinations of fields

### Azure Data Factory (ADF)

* Added feature to connect ADF Post Copy Extension Point to subsequent Activities, if present. For example, the setting of parameters

### Salesforce

* Improvements made to the Salesforce metadata import process, especially in regard to custom **Objects**

### Mapping Data Flows

* Enabled [connectivity to data sources that are not directly supported by Mapping Data Flows](https://www.varigence.com/Blog/Post/108). When configuring a connection that is not natively supported, BimlFlex allows the user to define a 'Landing step' for the **Connection**. This directs the Mapping Data Flows templates to include an initial Copy Activity to 'land' the data before processing it further using Mapping Data Flows
* Enabled [custom file paths for Delta Lake **Connections**](https://www.varigence.com/Blog/Post/110). This is supported by using a file path in the container definition, or by using the new File Path component which has been added to the Delta Lake **Connection** screen
* Added the ability to differentiate PSA/ODS **Object** names from STG **Object** names, so that both object types can be loaded into the same data lake container. Previously, using the same container for PSA and STG objects would cause conflicts in writing the data
* Added [support for **Parameters** for Mapping Data Flow templates](https://www.varigence.com/Blog/Post/109), enabling the configuration of load windows and filters
* Added [support for **Derived Columns** in Mapping Data Flows templates](https://www.varigence.com/Blog/Post/107). This enables our users to incorporate complex bespoke logic using the data flows expression language, which will then be incorporated into the corresponding generated data flows

### SSIS

* Added a setting to use `Use Custom Components` that will remove all SSIS Custom Components from all SSIS templates in favor of native components
* Added an SSIS Extension Point at the Data Flow level to control For Each Loop Container (FELC) properties

## 2022 R2 - Bug Fixes

### Various Application Fixes

* Fixed an issue where certain tooltips would not be displayed when hovering over the BimlFlex user interface component
* Fixed a bug where saving items in the app would sometimes generate a constraint error
* Fixed a bug where tree view navigation container would sometimes obscure objects, or clip elements from view
* Fixed a bug where imported metadata sometimes did not use local connection strings, when configured to do so
* Fixed a bug that would sometimes prompt the user for unsaved changes, but did not actually clear the changes when accepting
* Fixed an issue in the generated BimlScript where the Dynamics `ServicePrincipalCredentialKVS` XML was missing a closing tag, causing build errors in some cases
* Fixed a bug that prevented correct export of metadata when connections strings are obfuscated. This would report a failure dialog stating 'Extracted Metadata empty, extraction failed'
* Fixed a bug where **Columns** and *DataTypes* would sometimes reset when saving an **Object**
* Fixed a bug where `Use My Exclusions` did not exclude **Column**, **Connection**, **Object**, or **Project** entities even though these were marked as excluded
* Removed 'Data Warehouse SQL by Source' option from the BimlFlex Bundle options for code generation. Functionally, all data warehouse SQL emission is now controlled by the 'Data Warehouse SQL' option
* Fixed various small issues related to Multi-Factor Authentication (MFA), which mitigates certain known issues in the installer and DACPAC deployment
* Fixed a bug where the Azure Function Bridge failed due to listing soft-deleted blob containers. The listing will now only include and copy actual files
* Fixed a bug where Data Type Mappings were not applied to Delete process landing tables
* Fixed a bug where the Oracle CLOB datatype was not properly generated in BimlScript
* Fixed application-wide instances of navigation icon(s) overlapping column text
* Fixed a bug that produced an incorrect error message when creating a new **Customer** and **Version** in the BimlCatalog in some cases
* Changed the **Snapshot** feature to include everything, including `excluded` or `deleted` items. This makes it possible to consistently create a snapshot, and then after a rollback, include the previously excluded items again

### Data Lineage Editor

* Fixed a bug where removing a relationship or reference prevented the ability to save the metadata

### Data Vault Accelerator

* Fixed a bug where the logic for naming an Implicit Link unintentionally changed between 2021 R1 and 2022 R1. The 'Business Subject' on the relationship building column defines the Link table name
* Fixed a bug that replicated a Source Object in the side panel when updating the 'Business Name.' This was only a front-end replication of the fields, but while not impacting any metadata, this caused undue confusion

### Schema Diagram

* Fixed a bug where creating a relationship to a non-Integration Key column drew a line but did nothing else. It is now no longer possible to draw a relationship where this is not supported
* Fixed a bug where columns that could not be used to create a reference were allowed to be connected
* Fixed a bug where selecting 'Show Related' from the context menu would only show outgoing relationships

### Connection Editor

* Fixed a bug where clicking `refresh` did not prompt a check for unsaved changes
* Fixed a bug where changing **Customer** or **Version** did not prompt a check for unsaved changes
* Fixed a bug where when selecting `DB2` as **System Type** did not display a DB2 Linked Service option. DB2 is now selectable as Linked Service and the corresponding Linked Service code is generated accordingly
* Fixed a bug that cleared all existing **Connection** fields when modifying a **Connection** by adding an Azure Key Vault. Previously entered details are now properly retained while configuring a connection
* Fixed a bug where **Test Connection** would report failure, despite connecting successfully. This occurred for some non-SQL Server connections
* Fixed issues in the **Connection String Builder** dialog where connection strings were not interpreted correctly
* Fixed a bug where **Connection String Builder** dialog used previously saved values instead of the current entered values
* Fixed a bug where a Landing **Connection** was able to select itself as a `Polybase Connection`. This is incorrect and not possible anymore
* Fixed a bug where **[+] New Connection** did not pre-populate the **Integration Stage**
* Fixed a bug where saving a record would change or reset the view from the current tree view nav selection
* Fixed a bug where switching between **Linked Service Connection String** and **Azure Key Vault** did not prompt a check for unsaved changes
* Because of known issues using Integration Runtimes other than the default `AutoResolveIntegrationRuntime`, this feature has been disabled. Only the default `AutoResolveIntegrationRuntime` may be used to define a **Connection** Linked Service. Modification should be made either in ADF after deployment, or by updating the ARM template after build

### Project Editor

* Fixed a bug where **Add New Connection** did not immediately display a newly created **Connection** as a selection option for the **Project**
* Removed the `Data Views` **Integration Template**. This was a superfluous template that has now been deprecated

### ADF

* Fixed a bug where default values for ADF pipeline parameters were not correctly generated. While this did not cause issues when running batch processes, it made debugging or running individual pipelines harder than it needed to be. Parameter default values are now set with correct values for every pipeline
* Ensured correct operation of the `Stage With Model Override Name` setting for ADF for **Objects** and **Columns**
* Ensured that `Stage With Business Name` now correctly uses the 'Business Name' at **Object** and **Column** level
* Fixed a bug where parameters for the Data Mart generated the 'GET' tasks, but not the 'SET' tasks in some scenarios

### Snowflake

* Resolved an issue when calls made from ADF to Snowflake sometimes resulted in a timeout and process failure. As part of this solution, the Snowflake calls have been replaced by the new [ADF Script Activity](https://www.varigence.com/Blog/Post/113). Previously, calls to Snowflake were handled by the Azure Function Bridge. Timeouts have also been increased to 10 minutes
* Known issues in ADF prevent the use of Connection String Key Vaults to store the entire Snowflake connection string. Because of this, the option to configure Snowflake connections to use a Key Vault for the connection string have been disabled. This is a known issue in Azure Data Factory that has been reported. The consequence is that a Snowflake connection _must_ be configured using a manual connection string in BimlFlex. It is still possible to configure a Key Vault to store the password only

### Salesforce

* Fixed a bug where where the app indicated 'Import metadata successful', even though this failed in reality. Accurate success or failure messages are now displayed when working with Salesforce metadata
* Addressed an issue where users would get a 'Runtime Error' when using Snowflake components. To resolve this issue, users should redeploy the necessary runtime components

### SSIS

* Fixed a bug where the `Process Subfolders` SSIS setting was not consistently applied to the Delete processes. SSIS Delete processes now correctly traverse subfolders / subdirectories

### Extension Points

* Fixed an issue where targeting _implicitly_ named **Batches**, such as the Raw Data Vault batches, did to work. Users can now correctly target Batch pipelines by their name in all cases

## BimlStudio 2022 R2

* The BimlStudio 'Copy SQL Script' takes in 'Column Business Name' into consideration when the `Stage Column Business Name` setting is enabled
* Fixed a bug in the Debug Utility dialog where if 'Obfuscate Connection Strings' was enabled, 'Save Metadata to File' would produce an 'Extraction Failed' error
* Added caching to the 'Generate Script Options' dialog to remember the user's last selected 'Script Type' selection
* Improvements made for caching product keys that are entered in the Command Line, so as to not be re-entered on each build. This is particularly relevant for virtual environments