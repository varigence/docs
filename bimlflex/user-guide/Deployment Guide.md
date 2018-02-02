Modern versions of SQL Server (2012-) supports project configurations and deployments to the SSIS Catalog. This document details how to use the project deployment model in BimlFlex and how to align that deployment to the SSIS Catalog environments for variable assignments. This can be used to populate passwords and connection strings for connections and inject them when the package is running on the SSIS Server

BimlFlex also supports the legacy package based deployment and its configuration approach. 

It is a recommendation to:

* Use a modern, supported version of SQL Server
* Use the project configuration model
* Deploy the solutions to the SSIS Catalog
* Use Environments to configure connection strings and other parameters and configurations.

## Validating the Catalog in the target server

A catalog needs to be created if the catalog node in Management Studio is empty for the target server. The mandated name for the Catalog and corresponding database is SSISDB.

![Create Catalog](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_create_catalog.png "Create Catalog")

Once a catalog is available it is possible to create a folder for the projects. Multiple projects can be deployed to the same folder. The folder provides a common set of environments for all its projects.

In general, it makes sense to deploy all projects related to the Data Warehouse to the same folder so that they can share all connection string and other configuration information. It is possible to test deploy new versions to a separate folder if there is no separate test environment.

![Create Environment](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_create_environment_1.png "Create Environment")

For each folder, it is possible to create one or more Environments. The environments can be for testing/production distinction for jobs or for different sets of configurations needed.

![Create Environment](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_create_environment_2.png "Create Environment")

Variables can be defined in the environment once it is created. These normally correspond to the parameters and connection strings defined in the SSIS project. Retaining names across the locations makes it easy to know what is what. The default name for a connection string in the SSIS project, when defined as a parameterized connection manager is

```<connection name>_ConnectionString```

in this case, the default name for the source is

```AdventureWorksLT_ConnectionString```

By naming the environment variable the same it is easier to match them up later.

![Environment Properties](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_environment_properties.png "Environment Properties")

Once the variables are defined the SSIS Project needs to be deployed for the connection to be configured.

## Custom SSIS Components used in BimlFlex

BimlFlex uses several custom SSIS components in the generated packages. These components are specific to the SQL server version used and need to align with both the SQL Server and the Project versions that are deployed. This is part of the installation and setup process and assumed installed on the destination server for the process described in this document.

If the project is deployed using the wrong Visual Studio SSIS Target Server/Version specification there will be errors when running these components.

## Project deployment for SQL Server 2016 using the catalog

As a demonstration project, a new BimlStudio project called Demo located in the c:\\Varigence\\ folder will be used. The project will create a folder called Demo for the BimlStudio project contents.

This project will have a single integration to read from the AdventureWorks LT source to the Staging Database.

The approach assumes a SQL Server version that supports SSIS Catalog (2012-) and in the document SQL Server 2016 is used.

1. Before deployment, a Catalog must be available in the target SQL Server instance.
2. Once the required metadata is created BimlStudio will build the SSIS Project.
3. Once the build is successful it will be deployed to the SSIS Catalog.
4. Once deployed an environment will be used to override connection strings
5. Once configured SQL Server agent will be used to schedule a batch for a specific environment, using the environments connection strings.

## Create and build a Demo project

### Step 1, Create Project

From BimlStudio a project called Demo is created in the `C:\Varigence\Demo` folder.

The project is configured to match the target destination

![BimlStudio Project Properties](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_bimlstudio_project_configuration.png "BimlStudio Project Properties")

SSIS 2016 is used in the demo. The Project deployment checkbox is checked so connection strings for the whole project can be maintained through SSIS Catalog environments.

### Step 2, metadata editor

Every time a new empty customer is created in BimlFlex the Excel Metadata editor will ask if sample metadata should be created.

![Sample Metadata](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_excel_create_sample_metadata.png "Sample Metadata")

As the demo source is one of the sample sources it is possible to take a shortcut through the sample metadata. Once the sample metadata is created it can directly connect to the AdventureWorks LT Source to get the required source metadata.

### Step 3, load metadata

Load the metadata for all tables in scope from the AdventureWorksLT source system

![Get Metadata](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_excel_import_metadata.png "Get Metadata")


### Step 4, push metadata

Push all metadata from Excel to the metadata database and refresh it into BimlStudio


![Set All Metadata](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_excel_set_all_ui.png "Set All Metadata")

![Refresh Metadata](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_refresh_metadata.png "Refresh Metadata")

### Step 5, create databases and tables

Create all DW databases and tables from the BimlStudio generated scripts output.

![Create Table Scripts](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_create_table_scripts.png "Create Table Scripts")

### Step 6, define project parameters

Define project parameters and connection expressions for all relevant connections in the BimlStudio solution.

There are many ways of maintaining the connection strings and required configurations in SSIS and SQL Server. BimlStudio provides several easy ways to manage and maintain whatever is chosen for an environment. For this demo, deployment is done to the catalog and a Catalog environment variable is used to define the connection string. For the parameterised connection string to be available in the generated SSIS project it first needs to be defined through an Extension Point. The approach needs one Extension Point for the Project parameter and one for the connection string parameterisation.

![Project Parameter Code](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_extension_points_create_project_parameter_code.png "Project Parameter Code")

The project parameter target is the SSIS project it will be used in. In this case, the `EXT_AWLT_Project` where project parameters will be used to define connection strings

![Connection Expression Code](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_extension_points_create_connection_expression_code.png "Connection Expression Code")

The connection expression connects the target property, in this case, the target connection manager `AdventureWorksLT` and the ConnectionString property with the defined Project parameter.

When the project is opened in Visual Studio the project connection manager can be verified as parameterized to use the project parameter.

Extension Point files should be named using a consistent naming convention. These files form part of the source code for the project itself and need to be maintained as such. The contents of the Extension Point files are not maintained in the metadata database.

## Step 7, build the projects in BimlStudio

Build command buttons

![Build Project](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_build_ui.png "Build Project")

## Step 8, review the generated SSIS Projects

The default destination for the output is a folder called output in the project folder. In this case `C:\Varigence\Demo\Output\`

This location can be defined and changed in the project settings.

![Build Output Folder](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_build_output_folder.png "Build Output Folder")

Once the build completes there will be a number of folders for the complete solution in the output folder. The folders in the screenshot above contain:

* BFX\_ODS, an SSIS project to create all tables defined in the BFX\_ODS database
* BFX\_STG, an SSIS project to create all tables defined in the BFX\_STG database
* Database, SSIS Projects to create all databases in the solution
* Documentation, generated documentation for the solution
* EXT\_AWLT, the generated SSIS project to source the data from the AdventureWorks LT source to the Staging and Persistent Staging databases
* PackageConfigurations, dtsConfig files for projects that use PackageConfigurations
* Schema, SSIS projects to create all Schemas defined in the databases

The EXT\_AWLT folder is named after the project name in the metadata and contains all packages defined in the project.

In the EXT\_AWLT folder (and in all SSIS folders) are both the SSIS project with the individual dtsx files and a sub folder called bin that holds the compiled .ispac deployment file.

It is possible to deploy either the ispac file or the project to the catalog. Ispac files are great for automated deployment and command type approaches. Opening the project in Visual Studio allows manual, visual review, manual running of the process and manual deployment from Visual Studio to a destination Catalog.

## Deploying the generated ispac file to the Catalog

The full deployment process is documented here: 
* [https://msdn.microsoft.com/en-us/library/hh213290.aspx](https://msdn.microsoft.com/en-us/library/hh213290.aspx)
* [https://msdn.microsoft.com/en-us/library/hh231102.aspx](https://msdn.microsoft.com/en-us/library/hh231102.aspx)

for ispac files when there is a requirement to automate the deployment using command line tools in an automated fashion. This can be done either through a locally set up deployment pipe or through automation tools for server based automated deployments.

When deploying to the catalog the projects are deployed into folders. This means it is easy to organize projects. It also means different versions can be deployed to different folders if there is a need to maintain different sets of packages on the same server for testing.

There are 3 main ways of deploying to the Catalog:

1. Through the isdeploymentwizard.exe command line tool (using the ispac file)
2. Through Visual Studio (using the SSIS project)
3. Through Management Studio (using the ispac file)

## Deploying through the command line 

From the command prompt, run `isdeploymentwizard.exe` from the `%ProgramFiles%\Microsoft SQL Server\130\DTS\Binn`. Folder (Note the path is SQL Server version specific) with the required parameters for either interactive or silence deployments


![Deployment Options for SSIS](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_ssis_deployment_options_ui.png "Deployment Options for SSIS")

For this example, to deploy the generated ispac quietly to the local server EDW folder run:

```
C:\Program Files\Microsoft SQL Server\130\DTS\Binn>isdeploymentwizard /S /SP:"C:\Varigence\Demo\output\EXT_AWLT\bin\EXT_AWLT_Project.ispac" /DS:localhost /DP:"/SSISDB/EDW/Projects/"
```

The Visual Studio deploy wizard review dialog also provides the command line parameters it uses in case there is a need to mimic its behavior.

For automated deployments, this would normally be defined through a script file or a deployment tool.

## Opening the project in Visual Studio 2015 and deploying to the Catalog

BimlStudio generates SSIS projects but not solutions. The default behavior for a project file (`.dtproj`) is not associated with Visual Studio SQL Server Data Tools for Business Intelligence so in a new environment it will need to be opened from Visual Studio or the extension needs to be associated to open with SSDT BI.

An option to consider is to create an empty Visual Studio Solution in the output folder and add all projects to this solution for easy access to all artifacts from one location.

Once the project is opened in Visual Studio the packages can be reviewed and tested.

For Visual Studio, it is important to match the Visual Studio version to the destination SQL Server. Visual Studio 2010 and 2012 can work with and deploy to SQL Server 2012, Visual Studio 2013 works with SQL Server 2014 and Visual Studio 2015 can be configured to work with SQL Server 2012-2016.

Since the default behavior in Visual Studio 2015 is to work with SQL Server 2016 it is common for issues to occur when deploying to earlier versions of SQL Server.

![SSDT UI](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_ssdt_batch_ui.png "SSDT UI")

![Target Server Version](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_ssdt_targetserverversion_ui.png "Target Server Version")

Once the project is ready to be deployed to the SSIS catalog either use the Deploy option from the Project menu can be chosen, or right-click on the project in Solution explorer and Deploy.

## Reviewing the project in the Catalog

Once the project is deployed to the target server and the chosen folder it is available for review through SQL Server Management Studio

![Catalog Contents](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_catalog_contents.png "Catalog Contents")

## Configuring the Environment and connecting the project to it

Once the project is in the Catalog it can be configured.


![Configure Catalog](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_catalog_configure.png "Configure Catalog")

For the environment to be available to the project it needs to be associated

From the configuration dialog, the project can be configured directly and associated with an environment. Enable the project to be configured from the created environment.

![Associate Environment to Project](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_catalog_associate_environment_to_project.png "Associate Environment to Project")

From the references tab, add a reference to the Local Folder Prod Environment.

Once the reference is added, configure the parameters to be overridden from the environment.

![Environment Variable](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_catalog_environment_variable_override.png "Environment Variable")

Once the project is configured to use an environment it will always require an environment specification to run, both through SQL Server Agent and the Catalog

![Parameter Required](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_catalog_parameter_required.png "Parameter Required")

## Creating an Agent job and configure it to run the batch with a configured environment

Once the project is configured and ready to be scheduled a SQL Server Agent Job can be created to run the projects batch package.

When configuring the job, specify the environment it will use when running.

![Agent Configuration](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_management_studio_catalog_configure_agent_environment_variable.png "Agent Configuration")

Specifying the environment through the Agent job also means different scheduled jobs can be run using different environment configurations.

As an example, a scheduled job every 2 minutes for incremental loads can use one environment and another agent job running once a day for full loads can use another environment with different variable values configured.

## Closing remarks

There are many ways to configure and run projects for SSIS using package or project configurations, the Catalog or other storage mechanisms, using environments or other configuration mechanisms etc.

For a new SQL Server project, it is recommended to use the project deployment methodology and the SSIS catalog with environments as described here.

This document used the Management Studio UI to detail the steps, there are ways to script this that works better in an automated deploy pipeline.

Once the environment is set up and project configured it is not necessary to reconfigure when new deploys are made. So, this setup is normally a one-time exercise.

There are many other considerations with regards to SSIS deployments and Catalog configurations, such as security definitions for environments, that have been considered out of scope for this guide.