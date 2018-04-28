# Mist User Guide

## Configuring Project Settings

The project settings editor lets you control project-wide configuration options.

1. Open the project settings editor by double-clicking the project node in the Logical View.

![Logical View - Project Settings](https://varigencecom.blob.core.windows.net/images-mistdocumentation/013_Step01.png)

2. See the table below for an explanation of the settings on this page.
3. Save the project after changing settings to commit the updates.

Project Setting | Description
--- | ---
 | **General**
Hadron Path | The path to the 32-bit version of the Hadron compiler.
64-bit Hadron Path | The path to the 64-bit version of the Hadron compiler.
Extra Command Line Options | Allows additional compiler settings to be passed to the Hadron compiler. See [Hadron Compiler Command Line Options TODO: Add](index.md) for details on the available options.
Generate Response File | Creates a response file, based on the current project settings, that can be used for command line builds.
 | **Source Control**
tf Path | The path to the Team Foundation executable. This is only needed if you are using Team Foundation Server for source control.
 | **Versions**
SQL Server | Specifies the version of the SQL Server relational database to target.
SSAS | Specifies the version of SQL Server Analysis Services to target.
SSIS | Specifies the version of SQL Server Integration Services to target.
 | **Errors and Warning**
Warn As Error | Causes Hadron to treat warnings as errors during the compilation process, so that the build fails if any warnings are encountered.
 | **Output**
Clean Output Folder | Causes the compiler to remove old items from the output folder.
Output Path | Specifies the path where the compiled assets from the project will be stored. This can be a fully qualified path, or a relative path  from the project directory.