# Creating a Fact Table

Fact tables let you model the relational parts of a table, and the analytical aspects. If your fact is going to be exposed through an OLAP cube, this allows you to model all aspects of the measure group in the same editor. The relational features are modeled the same way for all table types, while the analytical features vary depending on the purpose of the table. For facts, you can model the properties that control how a Microsoft Analysis Services measure group will be emitted through the Dimension editor.

To create a fact, follow these steps:

1. Add a new table and rename it to FactSales. For more information about creating the relational portions of fact table using the designer, see [Creating a Basic Table](creating-a-basic-table.md).

2. To create the relational portion of the table, you will edit the Biml directly. Right click the in the logical view and choose View Biml.

3. Select all the contents of the Biml editor. You can do this by right-clicking in the Biml editor and clicking the Select All menu item. Then delete the contents by pressing the Delete key. Finally, paste in the following Biml:

```biml
        <Biml xmlns="http://schemas.varigence.com/biml.xsd">
            <Tables>
                <Table Name="FactSales" SchemaName="AdventureWorksLTDataMartDatabase.AdventureWorksLTDataMartSchema" LogicalDisplayFolder="AwDm">
                    <Columns>
                        <Column Name="SalesID" />
                        <TableReference TableName="DimDate" Name="OrderDateID" ForeignKeyNameOverride="FK_FactSales_DimDate_OrderDateID" ForeignKeyConstraintMode="DoNotCreate" />
                        <TableReference TableName="DimDate" Name="ShipDateID" ForeignKeyNameOverride="FK_FactSales_DimDate_ShipDateID" ForeignKeyConstraintMode="DoNotCreate" />
                        <TableReference TableName="DimDate" Name="DueDateID" ForeignKeyNameOverride="FK_FactSales_DimDate_DueDateID" ForeignKeyConstraintMode="DoNotCreate" />
                        <TableReference TableName="DimCustomer" Name="CustomerID" ForeignKeyNameOverride="FK_FactSales_DimCustomer_CustomerID" ForeignKeyConstraintMode="DoNotCreate" />
                        <TableReference TableName="DimProduct" Name="ProductID" ForeignKeyNameOverride="FK_FactSales_DimProduct_ProductID" ForeignKeyConstraintMode="DoNotCreate" />
                        <Column Name="SalesOrderNumber" DataType="String" Length="25" />
                        <Column Name="TaxAmount" DataType="Currency" />
                        <Column Name="Freight" DataType="Currency" />
                        <Column Name="OrderQty" DataType="Int16" />
                        <Column Name="UnitPrice" DataType="Currency" />
                        <Column Name="UnitPriceDiscount" DataType="Currency" />
                    </Columns>
                    <Keys>
                        <Identity Name="IK_FactSales">
                            <Columns>
                                <Column ColumnName="SalesID" />
                            </Columns>
                        </Identity>
                    </Keys>
                </Table>
            </Tables>
        </Biml>
```

1. To create the measures for this fact table, click **Measure Group** from the **Table Tools** ribbon, then click **Generate Measures**. This will populate the measures grid with default measures based on the columns defined in the table.

    ![Table Ribbon - Autogenerate Measures](https://varigencecom.blob.core.windows.net/images-mistdocumentation/010_Step06.gif)

1. The following measures should be generated:

    ![Fact Table Editor - Measures Data Grid](https://varigencecom.blob.core.windows.net/images-mistdocumentation/010_Step07.png)

1. Save the project to persist your changes.

Once a fact is created in the model, it will emit as a relational table. If it is referenced from a cube, it will also emit as an Analysis Services measure group.
