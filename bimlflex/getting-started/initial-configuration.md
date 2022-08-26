---
uid: bimlflex-getting-started-initial-configuration
title: BimlFlex Initial Configuration
summary: Initial walkthrough of setting up BimlFlex to create project, connect database, and load sample metadata
varigenceProduct: BimlFlex
varigenceArticleType: Walkthrough
---
# Initial Configuration

Once the BimlFlex installation is completed, it is time to set up the environment for a BimlFlex project. The initial setup of BimlFlex include the steps to set up the full development environment:

* Connecting to the BimlFlex database
* Loading sample metadata (optional)
* Creating the BimlStudio project

## BimlFlex App

[!include[Dashboard](../metadata-editors/_incl-header-dashboard.md)]
[!include[BimlFlex](../metadata-editors/_incl-header-bimlflex-app.md)]

## Metadata Connection

To begin designing your data solution, start the BimlFlex App and configure it to connect to the BimlFlex database.

![BimlFlex App Setup Pane](images/bfx-new-connection.png "BimlFlex App Setup Pane")

Set up the Connection through the **Database Setup Pane**, which can be accessed from the **Database Settings Cog** in the top menu bar. The database setup pane contains options to specify connectivity to the BimlFlex database. The **Update Button** can be pressed to refresh the database contents when connection details have been modified.

Once connection has been established, a new [**Customer**](xref:bimlflex-concepts-customer) can be created. Or, an existing Customer and [**Version**](xref:bimlflex-concepts-version) can be selected.

### New Customer Creation

[!include[NewCustomer](../metadata-editors/_incl-header-new-customer.md)]

### Load Sample Metadata

[!include[Samples](_incl-header-samples.md)]

## BimlStudio Configuration

With the BimlFlex database available, and a new customer created, the metadata can be connected to via BimlStudio so that the metadata can be compiled into the various data solution artifacts - table scripts, procedures and data logistics processes.

Open the BimlStudio application and create a new, empty BimlFlex project.

> [!NOTE]
> BimlStudio and the BimlFlex Excel Add-in will prompt for a License Key the first time a new installation starts.
> If a trial key is required, please contact Varigence BimlFlex Support at [support@bimlflex.com](mailto:support@bimlflex.com).

### Creating the BimlFlex project

[!include[BimlFlexProject](../build-and-deployment/_incl-header-bimlstudio-project.md)]

### Connect to the BimlFlex Database

[!include[BimlFlexDatabaseConnection](../build-and-deployment/_incl-header-bimlstudio-connect.md)]

### BimlStudio Project Settings

[!include[BimlFlexProjectSettings](../build-and-deployment/_incl-header-bimlstudio-project-settings.md)]

#### Build Output

[!include[BimlFlexProjectSettings](../build-and-deployment/_incl-header-bimlstudio-project-build-output-settings.md)]

#### Target Versions

In the target version section, the correct versions of the technical environment can be specified. These settings will direct the Biml compiler to output the generated artifacts in a way that matches the version, so these settings should match the target architecture.

SQL and DDL

* SQL Server, this corresponds to the SQL Version to use for Scripts and SSDT Projects
* DDL Build Mode, always leave as None for BimlFlex projects. BimlFlex provides direct script options and SSDT Projects for DDL instead

Data Integration

* ADF Build Mode. ADF can be managed through multiple, separate JSON files or Azure ArmTemplate files
* SSIS, the SSIS Server version to build for
* Use Project Deployment, should the build spawn Project Deployment ready projects and packages. This is the preferred deployment methodology for SSIS since SQL Server 2012

SQL Server Analysis Services

* SSAS Multidimensional, not included in BimlFlex projects
* SSAS Tabular, not included in BimlFlex projects
