#### Mist User Guide
##### Using Configuration Files

### Introduction

Mist 3.0 introduces configuration files as a new, powerful means of creating customized builds. This article explains what configurations files are, and how to:
* Generate default configurations
* Create custom configurations
* Use the Project View configuration

### Building in Mist

Prior to Mist 3.0, building a project required a user to assign an Emit Type to each Biml file in their project. Biml files that should produce compiled output for their assets were marked as emittables. Biml files that should provide metadata to the compilation process were marked as includes. A user would then store the mapping of Biml files to their emit types as a configuration. When building, the user would select which configuration they wanted to build. 

Starting with Mist 3.0, a user can leverage configurations to do far more than assign emit types to Biml files. Configurations allow users to control the order Biml files are built, refactor their build processes, execute commands before and after a build, and more.

To build a Mist project, select the ribbon's Build & Deploy tab. Within this tab, a user can choose a 32 or 64 bit build, select the desired build configuration, and begin a build by pressing the Build button.<br>
![Build & Deploy Ribbon](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/1.png)

When initiating a build, the selected configuration file is processed. Within each configuration file is a build configuration, describing which Biml files to compile and which Biml files should provide metadata. Thus, the emit type information that used to be stored solely in Project View has now been moved into configuration files. Adding this layer of indirection is what enables far more customized and powerful builds in Mist.

### Configuration Files

At its core, a configuration file is a [MSBuild](http://msdn.microsoft.com/en-us/library/dd393574.aspx) file with a bimlproj file extension. MSBuild is the Microsoft Build Engine, which includes an executable that uses MSBuild files to build applications, DLLs, and other .NET assemblies. MSBuild files are human-readable XML files that provide the build engine with the necessary information to build the desired assembly. 

Mist has extended MSBuild to use the Hadron compiler to build BI assets. The result is that users can leverage MSBuild's reliable and well supported build engine to create fully customizable builds. 

As aforementioned, configuration files list the Biml files to be built, along with associating each file with a build type. However, by leveraging MSBuild, it's also possible for configuration files to reference other configuration files during a build, or to execute arbitrary commands before and after a build occurs.

To make dealing with configurations easy, Mist provides a visual designer for setting typical configuration properties. Thus, there is no need to directly edit MSBuild files in a majority of cases. 

### Generating Default Configurations

Mist can auto generate configuration files that organize your project's Biml files in pre-determined ways. When generating default configurations, Mist adds four configuration files to your project:

**File Name** | **Description**
--- | ---
ddlconfig.bimlproj | Generates assets from all Biml files that contain Table, Schema, Database, and Connection assets.
etlconfig.bimlproj | Generates assets from all Biml files that contain Package and Connection assets. Biml files containing Schema and Database assets provide metadata.
build.bimlproj | Builds the Biml files in ddlconfig.bimlproj, followed by the Biml files in etlconfig.bimlproj.
all.bimlproj | Generates assets from all Biml files under the project's directory.

To better understand the contents of configurations, let's review an example 
from a sample Mist project. This project's logical view comprises of:<br>
![Logical View - Highlighted Assets](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/2.png)

The Biml files, that contain the yellow highlighted assets in the logical view, are only added to DDL configurations. The Biml files, that contain the green highlighted assets, are only added to ETL configurations. The Biml files, containing the blue highlighted assets, are added to DDL and ETL configurations.

#### Creating default configurations

Our sample project contains the following files:<br>
![Project View](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/3.png)

Notice that one configuration file is already included; Mist automatically adds a configuration file to all projects. 

To generate the default configurations, select the Build & Deploy ribbon tab and press the Generate Default Configurations button.<br>
![Build & Deploy Ribbon - Highlighted Default Configurations button](https://varigencecomstaging.blob.core.windows.net/images-mistdocumentation-configfilesguide/4.png)

Afterwards, four new files will be added to Project View:<br>
![Project View - Highlighted Configuration Files](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/5.png)

These are the newly generated configuration files. Double clicking on a configuration file opens it in the configuration designer.

#### The Configuration Designer

The configuration designer, displaying the ddlConfig.bimlproj file's contents, consists of 3 data grids and 2 text boxes.<br>
![ddlConfig Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/6.png)

##### Biml Wildcard Paths

Notice the Biml Wildcard Paths data grid in the center. In the configuration designer, each Biml file path is listed in its own row in this data grid.

To the left of each file path is an Build Action column. Each cell in the column provides a combo box that lets you choose Generate Assets or Provide Metadata for the Biml file's Build Action. These descriptions map directly to the Emittables and Includes groups from past Mist versions.

Remember that the listed Biml files contain the yellow and blue highlighted assets from the sample project's logical view. As explained, this configuration includes Biml files that contain DDL assets. 

Opening the etlConfig.bimlproj in the configuration designer shows the following:<br>
![etlConfig Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/7.png)

This configuration lists Biml files that include ETLs and related assets, which are the green and blue highlighted assets in the sample project's logical view.

Next, this is the configuration within the buildConfig.bimlproj file:<br>
![buildConfig Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/8.png)

First, notice that the Biml Wildcard Paths data grid is empty. That's because this configuration doesn't directly process any Biml files. Instead, it references other configuration files. 

##### Pre & Post Hadron Configuration Paths

Referencing other configuration files enables users to refactor their build process. In this example, the build configuration references the dllConfig.bimlproj and etlConfig.bimlproj files in the sole row in the data grid. If a user builds their project with this configuration, the build engine will examine this configuration and see that it references two other files. Then, it will open ddlConfig.bimlproj and attempt to build all the Biml files listed within it. Next, it will open etlConfig.bimlproj and attempt to build the Biml files it lists.

The semicolon that separates the two configuration paths is important syntax. For configurations paths and Biml wildcard paths, multiple file paths can be listed in the same row by separating them with a semicolon. The paths are processed from left to right. 

Notice that the row's Target cell is empty. The Target property is a MSBuild specific property and is discussed later in this article. It's typically not needed and can remain empty.

Note that configuration paths and Biml wildcard paths are not mutually exclusive; a configuration can contain both. In this case, the configuration paths in the Pre-Hadron data grid are processed before any of the files in the Biml wildcard paths data grid are built. The configuration paths in the Post-Hadron data grid are processed after the Biml wildcard paths.

Finally, the configuration within the allConfig.bimlproj file is as follows:<br>
![allConfig Designer](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/9.png)

###### Wildcards
As aforementioned, this configuration file contains all Biml files under the project directory and its subfolders. To accomplish this, two pieces of MSBuild syntax are used. The first is the asterisk character, used in *.biml. The asterisk means to add all files with the biml file extension. The double asterisk character indicates that MSBuild should look for Biml files in the FederalReserveHandsOnLab directory and subdirectories.

The asterisk and double asterisk characters are examples of wildcards. Wildcards are characters that can specify a group of items in an abstract way. Both Biml file paths and configuration paths can use wildcards.

To see additional examples of MSBuild syntax for specifying files, review [this](http://msdn.microsoft.com/en-us/library/ms171454.aspx) article.

##### Pre and Post Build Event Command Lines

The configuration designer also provides convenient access to MSBuild&apos;s build events. A [build event](http://msdn.microsoft.com/en-us/library/dd293582.aspx) is a command that MSBuild performs at a particular stage in the build process. The pre-build event occurs before the Mist build begins and the post-build event occurs after a build successfully ends.

The configuration designer allows users to enter build events via the Pre and Post build event command line text boxes. Each build event should be entered on its own line. The commands that can be executed include any commands that can be run from a Windows command prompt. Bear in mind that commands may depend on the Path environment variable to work correctly.

### Creating Custom Configurations

Default configurations can be useful in numerous scenarios, especially when serving as a starting point for a custom configuration. However, there are times when a user will want to start from scratch.

#### Creating configurations

To add a new configuration to your project, right click on any folder in Project 
View and select Add -&gt; New Configuration File.<br>
![New Configuration File Context Menu](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/10.png)

Use the New Configuration File dialog to name your configuration file and choose its location. Once done, press Save to create the file and add it to Project View.

#### Editing configurations

Interacting with the configuration designer is very easy. The Configuration ribbon contains buttons for adding Biml Wildcard Paths, Pre-Hadron Configuration Paths, and Post-Hadron Configuration Paths.<br>
![Configuration Ribbon Tab](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/11.png)

Additionally, you can drag and drop a Biml file from Project View onto the Biml Wildcard Paths data grid to create a new row with the Biml file's path in it. Similarly, you can drag and drop a configuration file from Project View to the Pre and Post Hadron Configuration Paths data grids to add a new row containing a path to the dropped configuration file.

Rows in these data grids can be deleted by selecting the row and pressing the delete key.

The configuration paths and Biml file paths can be edited by double clicking on the cell. You can use the cell's ellipses button to open a file dialog, for getting a file path. 

##### MSBuild Specifics
###### XML Editor

Along with the Configuration designer, Mist provides a second Configuration tab that holds a XML editor. The XML editor gives users complete power over a build configuration, leveraging all the capabilities of MSBuild. 

The configuration designer and its XML editor are synchronized. Any changes within the configuration file's autogenerated PropertyGroups and ItemGroups will overwrite values in the configuration designer. Likewise, any changes in the configuration designer will overwrite values within the configuration file's autogenerated PropertyGroups and ItemGroups.

This configuration file references the ddlConfig.bimlproj file by using a PreConfiguration item. When this configuration is built, MSBuild will execute the ddlConfig.bimlproj file, using a [MSBuild task](http://msdn.microsoft.com/en-us/library/7z253716.aspx). The PreConfiguration item's Targets metadata maps to the Target cell in the Pre-Hadron Configuration data grid. More information on MSBuild targets can be found [here](http://msdn.microsoft.com/en-us/library/ms171462.aspx).<br>
![Build Configuration in XML Editor](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/12.png)

This configuration file lists paths to the Biml files that will be compiled when building. The Sources element is for files whose assets should be generated when building; the element maps to the Generate Assets build action in the Configuration designer. The Includes element is for files whose assets should only be referenced, not generated, during compilation. This element maps to the Provide Metadata build action.<br>
![DDL Configuration in XML Editor](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/12a.png)

### Using the Project View Configuration

Although configuration files are useful and offer powerful customization options, there are times when they're unnecessary. Thus, Mist allows you to build your project without relying on configuration files. 

All Mist projects have a built-in "Project View" configuration. This configuration is the top item listed in the configurations dropdown in the Build & Deploy ribbon tab. When building with the Project View configuration, Mist automatically targets all Biml files included in your project. 

To control a Biml file's Mist Action, select the Biml file in Project View and then display the Property Grid tool window. Each Biml file has a Mist Action property, with values of Live and Reference.<br>
![BimlFile Property Grid](https://varigencecom.blob.core.windows.net/images-mistdocumentation-configfilesguide/13.png)

Biml files that have a Live mist action are treated as source files. Biml files that have a Reference mist action are treated as metadata files. Remember that you can use multi-select (via Ctrl+Click or Select+Click) to select multiple Biml files and set their Mist Actions simultaneously.