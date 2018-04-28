# Deploying Tables to SQL

When building and deploying a cube, newly created relational tables need to be deployed to a SQL database. A package, using SSIS ExecutePackage tasks, can accomplish this.

Begin by adding a package to the project. Refer to the first 4 steps in the [Creating a Package](Creating A Basic Package.md) topic to create a package and rename it to _BuildSchema_.

To deploy the tables to SQL:

1. Find the Toolbox tool window. Drag and drop an ExecutePackage task onto the designer surface.

1. In the Package Details tool window, choose the DimCustomer tab in the Table dropdown. Additionally, for clarity, rename this task to be DimCustomer.

    ![Package Details](https://varigencecom.blob.core.windows.net/images-mistdocumentation-deployingtables/deployingtables_2.gif)

1. Repeat steps 1 and 2 for the following tables:

    * DimDate
    * DimProduct
    * EtlLog
    * FactSales

    When finished, the package editor should look as follows:

1. To create a precedence constraint, drag a line from the bottom anchor of the DimCustomer ExecutePackage task to the top anchor of the DimDate ExecutePackage task.

    Start dragging from the bottom anchor of the DimCustomer task. While dragging, a blue line will follow the mouse cursor. Move the mouse cursor over the the DimCustomer task's top anchor and release.

1. Create edges so that the tasks are linked together as follows:

    ![Final Package](https://varigencecom.blob.core.windows.net/images-mistdocumentation-deployingtables/deployingtables_6.gif)

1. Ensure that your project settings have **Use Project Deployment** un-selected. For more information on Use Project Deployment, see [Configuring Project Settings](Configuring Project Settings.md).

    ![Project Deployment](https://varigencecom.blob.core.windows.net/images-mistdocumentation-deployingtables/deployingtables_6.png)

1. Right click on the package and select Build & Run. This executes the tasks in the package, deploying the tables to the AdventureWorksLTDataMart database.

## Alternative Deployment

You can also deploy the tables manually by selecting all the tables. 

1. Right click then **Copy SQL Script**, then **Drop and Create DDL**.

    ![Copy SQL Script](https://varigencecom.blob.core.windows.net/images-mistdocumentation-deployingtables/deployingtables_7.png)

2. The SQL will be in your clipboard and can be pasted into Microsoft SQL Server Management Studio and executed.
