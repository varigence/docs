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
* Loading the Sample Metadata (optional)
* Creating the BimlStudio project

## BimlFlex App

[!include[Dashboard](../metadata-editors/_incl-header-dashboard.md)]
[!include[BimlFlex](../metadata-editors/_incl-header-bimlflex-app.md)]

## Metadata Connection

To begin designing your data solution, start the BimlFlex App and configure it to connect to the BimlFlex database.

![BimlFlex App Setup Pane](images/bfx-new-connection.png "BimlFlex App Setup Pane")

Set up the Connection through the **Database Setup Pane**, which can be accessed from the **Database Settings Cog** in the top menu bar. The database setup pane contains options to specify connectivity to the BimlFlex database. The **Update** button can be pressed to refresh the database contents when connection details have been modified.

Once connection has been established, a new [**Customer**](xref:bimlflex-concepts-customer) can be created. Or, an existing Customer and [**Version**](xref:bimlflex-concepts-version) can be selected.

### New Customer Creation

[!include[NewCustomer](../metadata-editors/_incl-header-new-customer.md)]

## BimlStudio Configuration

Open the BimlStudio Application and create a new, empty BimlFlex project.

BimlStudio and BimlFlex Excel Add-in will prompt for a License Key the first time a new installation starts.

If a trial key is required, please contact Varigence BimlFlex Support at [support@bimlflex.com](mailto:support@bimlflex.com).

### Video Walkthrough

![BimlFlex Initial Configuration](https://www.youtube.com/watch?v=qhDTwv-jYKc?rel=0&autoplay=0)

### Creating the BimlFlex project

From the start page, create a new **BimlFlex Project**

![Create New Project](images/new-bs-project-screen.png "Create New Project")

Options for creating a new BimlFlex Project. Place the project in a suitable folder, the folder will contain source code for the project and should be managed through a source control system.

![New BimlFlex Project](images/bfx-my-first-project.png "New BimlFlex Project")

Once the project is created, it is possible to open it from the folder by opening the project file, or by opening the project from BimlStudio.

![Empty Project](images/bs-new-project-screen.png "Empty Project")

### Connect to the BimlFlex Database

The BimlFlex project in BimlStudio communicate with the BimlFlex BimlFlex database.

The databases are created and updated through the BimlFlex installer. It is also possible to set up the databases from the BimlFlex ribbon tab in BimlStudio.

More information, creating the database through the installer: [Installing BimlFlex](xref:bimlflex-setup-installing-bimlflex)

More information, creating the database through BimlStudio: [BimlFlex Metadata Database Installation](xref:bimlflex-setup-metadata-database-installation)

### BimlStudio Project Settings

The BimlStudio project options include settings such as the target SQL Server, SSIS versions, project, or package deployments for SSIS. Most of these are optional to change, but the target version and deployment method needs to be correct for the packages to open correctly in Visual Studio and run correctly on the destination SSIS server.

![BimlStudio Project Configuration](images/bimlstudio-vid-v5-project-settings.gif "BimlStudio Project Configuration")

#### Biml Engine

The Engine to use (bimlc.exe/MSBuild) as well as their respective paths and options.

#### Build

Output locations and options for built artifacts.

#### Target Versions

The target versions to use. Update these to match the target architecture.

SQL and DDL

* SQL Server, this corresponds to the SQL Version to use for Scripts and SSDT Projects
* DDL Build Mode, always leave as None for BimlFlex projects. BimlFlex provides direct script options and SSDT Projects for DDL instead

Data Integration

* ADF Build Mode, ADF can be managed through multiple, separate .json files or Azure ArmTemplate files
* SSIS, the SSIS Server version to build for
* Use Project Deployment, should the build spawn Project Deployment ready projects and packages. This is the preferred deployment methodology for SSIS since SQL Server 2012

SQL Server Analysis Services

* SSAS Multidimensional, not included in BimlFlex projects
* SSAS Tabular, not included in BimlFlex projects

#### Options

Generic Editor options

#### Externals

Paths and arguments to external tools

Once all settings are completed, restart BimlStudio and reopen the BimlFlex project to load the metadata.
