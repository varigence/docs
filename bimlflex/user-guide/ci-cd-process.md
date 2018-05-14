---
uid: bimlflex-ci-cd-process
title: Continuous Integration and Continuous Delivery
---
# Continuous Integration and Continuous Delivery

One core feature in using the BimlFlex Data Warehouse Automation solution is that it can be used in a CI/CD pipeline.

There are numerous approaches used for CI/CD and Data Warehouses have their special considerations compared to the more common web based or software development based CI/CD processes.

In this document the following approaches are discussed:

* Manual automation of build and deployment steps using command line scripts
* Automatic build and processing of changes through a build server pipeline

The manual scripted approach is a low cost entry into automation in that it doesn't rely on setting up and configuring build servers. It allows developers and testers to script and use the same process over and over again to deploy a solution.

The automated, build server-based approach takes a slightly different approach in that it builds an automatic deployment out of the contents of a source repository/source control project.

## Special considerations for Data Warehousing Automation

For a data warehouse it is not enough to make sure the structures and processes are in place for the 

## Special considerations for SSIS

A special note is warranted for solution using SSIS. SSIS can only create packages when the referenced tables are available. As such, a 2-step approach is needed. An initial build step that creates all required tables and a second step, running once the tables are available, that builds the SSIS packages. Once the packages are built they can be deployed to the SQL Server SSIS Catalog for testing and running.

## Scripted approach

Manual creation of build steps

BimlFlex can locally build out the SQL Server based SSDT project that contains the SQL artefacts used for the project. 

## Build server based approach

Microsoft's normal build command MsBuild.exe does currently not include the functionality to build out ispaq files from *.dtproj files directly. There are several options for building using Visual Studio through devenv.exe as well as creating custom tasks for msbuild to allow it to build the ispac files.
As the Biml compiler builds the ispaq file as part of the normal project build it is possible to skip this entire step and directly use the generated ispaq file. This allows the build and integration process to work smoothly even in environments that doesn't allow custom installations and configurations.

Note that this build command will create the ispac file in the `bin\Development` folder instead of the bin location used by the 

## Automate Building

Once a CI server is running it can either build files from sources or deploy compiled project files that have been checked in.  This presents itself as several choices:

* can build tools (such as BimlFlex) be installed and licensed on the build server/agent
* can the build server access the BimlFlex metadata repository database

There are pros for using a completely automated build

* Users can forget to compile the code or to check-in the compiled output which could mean that the code is up to date, but the output (ispac file) is not

TODO: Update
Build errors are valuable feedback to the developer.  After all, failing early is the point of CI in the first place!
Check-ins from other users could cause build errors, though this issue is mitigated by building on each check-in.  If you are building after multiple check-ins, building on this server ensures that all the code that is checked into source control actually builds.
Some Nuances for SSIS
For SSIS, building a project creates output (an .ispac file) in the bindevelopment directory.  While the rest of the visual studio-using world uses configurations of "debug" and
"release," the SSIS team decided to do it completely differently.  If you include other projects in your solution (like an nunit test project), the best thing to do is to add a "development" configuration to that project.

isdeploymentwizard example:

```batchfile
C:\Program Files\Microsoft SQL Server\130\DTS\Binn>isdeploymentwizard /S /SP:"C:\Varigence\Demo\output\EXT_AWLT\bin\EXT_AWLT_Project.ispac" /DS:localhost /DP:"/SSISDB/EDW/Projects/"
```