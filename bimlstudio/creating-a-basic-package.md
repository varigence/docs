# Creating a Basic Package

Packages provide data integration functionality. For more information on package properties, see the [Package Element](/documentation/biml/biml_Varigence.Languages.Biml.Task.AstPackageNode.html).

1. New packages can be created from the Home ribbon tab, or from the context menu for packages in the logical view. For this example, select the Package button on the Home tab of the ribbon bar.

    ![Home Tab - Add Package](https://varigencecom.blob.core.windows.net/images-mistdocumentation/030_Step01.png)

1. The package designer should be open on the left, if not Double-click the new package in the logical view to open the package designer.
1. Note the Package Details tool window, which allows you to edit the package properties. This tool window will update with an editor for any selected item on the package, including tasks and components. If the Package Details tool window is not visible, you can show it by selecting the View..Details item from the Home ribbon tab.
1. Change the name of the package using the name field of the Package Details tool window. For the tutorial, name the package "LoadCustomer".

    ![Package Details](https://varigencecom.blob.core.windows.net/images-mistdocumentation/030_Step04.png)

    The AutoCreateConfigurationsType property controls whether configurations are automatically generated for all database connections used in the package. Setting it to None turns generation off, while setting it to XML or SQL generates configurations of the related type at compile time.

1. After adding the package, you should [save the project](saving-a-project.md).
