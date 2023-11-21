# Switching Build Types for Biml Files

Switching the build type of a Biml file controls whether the file provides only metadata to the compilation process, or if it will produce compiled output. Files marked as Reference are used for metadata or as transformers. Files marked as Live will produce compiled output for the objects they contain.

## Note

The build type for a Biml file is part of the project settings. A file can be marked Live in one project, and as an Reference in another.

<!--They can also be marked differently in the same project, by using <a href="025_ProjectConfigurations.html">Project Configurations</a>.-->

You can switch a Biml file's Biml type by doing one of the following:

* From the Project View, right click on the file, select "Mist Action", and then choose the desired type from the context menu to change the type.

![Context Menu - Switch Biml Type](https://varigencecom.blob.core.windows.net/walkthroughs/015_Step01-2.png)

* If a file is already using the reference action, from the Logical View, right click the file under the BimlScript Library, and then click "Convert to Live BimlScript."

![Project View - Drag and Drop](https://varigencecom.blob.core.windows.net/walkthroughs/015_Step02-2.png)