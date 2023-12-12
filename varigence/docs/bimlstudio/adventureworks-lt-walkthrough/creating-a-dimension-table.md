---
id: creating-a-dimension-table
sidebar_position: 10
title: Creating a Dimension Table
description: Documentation of how to create a dimension table in BimlStudio
---
<head>
<meta name="varigenceProduct" content="BimlStudio"></meta>
<meta name="varigenceArticleType" content="Walkthrough"></meta>
</head>

# Creating a Dimension Table

Dimension tables let you model not only the relational parts of a table, but also the analytical aspects. If your dimension is going to be exposed through an OLAP cube, this allows you to model all aspects of the dimension in the same editor. The relational features are modeled the same way for all table types, while the analytical features vary depending on the purpose of the table. For dimensions, the dimension editor lets you model the properties that control how a Microsoft Analysis Services dimension will be emitted.

To create a dimension, follow these steps:

1.  Follow the directions from the [Creating a Basic Table](./creating-a-basic-table) topic to define the relational portion of the dimension, using this information:  
    **Table Name:** DimProduct
    **Schema:** AdventureWorksLTDataMartSchema
    **Keys:** IK_DimProduct (using column ProductID)
    **Indexes:** IX_DimProduct_ProductName (using column ProductName)
    **Columns:**

    <table>
    <tbody>
    <tr>
    <th>Name</th>
    <th>Data Type</th>
    <th>Length</th>
    <th>Nullable</th>
    </tr>
    <tr>
    <td>ProductID</td>
    <td>Int32</td>
    <td>No</td>
    </tr>
    <tr>
    <td>ProductName</td>
    <td>String</td>
    <td>50</td>
    <td>No</td>
    </tr>
    <tr>
    <td>Color</td>
    <td>String</td>
    <td>15</td>
    <td>Yes</td>
    </tr>
    <tr>
    <td>Size</td>
    <td>String</td>
    <td>5</td>
    <td>Yes</td>
    </tr>
    <tr>
    <td>StartDate</td>
    <td>Date</td>
    <td>No</td>
    </tr>
    <tr>
    <td>EndDate</td>
    <td>Date</td>
    <td>Yes</td>
    </tr>
    <tr>
    <td>CategoryName</td>
    <td>String</td>
    <td>50</td>
    <td>No</td>
    </tr>
    <tr>
    <td>SubcategoryName</td>
    <td>String</td>
    <td>50</td>
    <td>No</td>
    </tr>
    </tbody>
    </table>


    The table editor should look like this:

    ![Table Designer](/img/bimlstudio/007_Step02.png)
2.  To add the dimension attributes click **Dimension** on the **Table Tools** ribbon.
3.  The Attributes area lets you define the attributes that will appear in the OLAP dimension. You can populate this by dragging and dropping columns from the columns grid into the Attributes area. Drag the ProductID column to the Attributes area. Notice that when you select an attribute, you can view and edit all its properties in the Property Grid.
4.  Right click on the Product attribute to set the attribute usage to Key.  
5.  Rename the attribute to Product Name using the context menu or by pressing F2 with the attribute selected.
6.  Drag and drop the ProductName column to the Name Column folder item under the Product Name attribute.  
    ![Table Designer - Add Column to Attribute Name](/img/bimlstudio/007_Step06.gif)
7.  You can create additional attributes by using an Accelerator. On the Table Tools ribbon, Tables tab, click the Generate Attributes and Relationships split button. Choosing the Generate Attributes and Relationships menu item will automatically create attributes for appropriate columns from the table, and relationships for those attributes.  
8.  The attributes and relationships will be populated  

    Note that the accelerator populates a default set of relationships, ensuring that every attribute is related to the key.

    It's always a good idea to review the relationships to ensure they match your data. Attribute relationships are important to getting the best performance from Analysis Services.

9.  To adjust the relationships to reflect the data, locate the Category Name relationship in the Relationships area. Right click on the Parent folder and select Set Parent Attribute. Select the Subcategory Name attribute.  

    This creates a relationship chain that includes Product Name -> Subcategory Name -> Category Name.

10.  Next, you will add a hierarchy. Right click in the empty Hierarchies area, and select Add Hierarchy.  
    ![Context Menu - Add Hierarchy](/img/bimlstudio/007_Step10.gif)
11.  Rename the hierarchy to Categories. You can add levels to the hierarchy by right-clicking it and choosing Add Attributes from the context menu, or by dragging and dropping the attributes from the Attributes treeview. Add the following attributes (in order): Category Name, Subcategory Name, and Product Name. The Hierarchies area should look like this when you are finished:  
Drag and drop the attribute on the Hierarchy node (Categories) to add the attribute as a new level at the end. Dropping an attribute on an existing level will replace the level's associated attribute. You can also drag and drop levels within a hierarchy.

12.  Save the project to commit your changes.

Once a dimension is created in the model, it will emit as a relational table. If it is referenced from a cube, it will also emit as an Analysis Services dimension.

#### View Biml
If you right click the table and click **View Biml** it should look similar to the following snippet.

```biml
    <Biml xmlns="http://schemas.varigence.com/biml.xsd">
        <Tables>
            <Table Name="DimProduct" SchemaName="AdventureWorksLTDataMartDatabase.AdventureWorksLTDataMartSchema" LogicalDisplayFolder="AwDm">
                <Columns>
                    <Column Name="ProductID" DataType="Int32" IsNullable="false" />
                    <Column Name="ProductName" DataType="String" Length="50" IsNullable="false" />
                    <Column Name="Color" DataType="String" Length="15" IsNullable="true" />
                    <Column Name="Size" DataType="String" Length="5" IsNullable="true" />
                    <Column Name="StartDate" DataType="Date" IsNullable="false" />
                    <Column Name="EndDate" DataType="Date" IsNullable="true" />
                    <Column Name="CategoryName" DataType="String" Length="50" IsNullable="false" />
                    <Column Name="SubcategoryName" DataType="String" Length="50" IsNullable="false" />
                </Columns>
                <Keys>
                    <PrimaryKey Name="PK_DimProduct" Clustered="true">
                        <Columns>
                            <Column ColumnName="ProductID" />
                        </Columns>
                    </PrimaryKey>
                </Keys>
                <Indexes>
                    <Index Name="IX_DimProduct1">
                        <Columns>
                            <Column ColumnName="ProductName" />
                        </Columns>
                    </Index>
                </Indexes>
                <AnalysisMetadata>
                    <Dimension Name="DimDimProduct">
                        <Attributes>
                            <Attribute Name="Product" Usage="Key">
                                <KeyColumns>
                                    <SnowflakeKeyColumn ColumnName="ProductID" />
                                </KeyColumns>
                                <NameColumn ColumnName="ProductName" />
                            </Attribute>
                            <Attribute Name="Product Name">
                                <KeyColumns>
                                    <KeyColumn ColumnName="ProductName" />
                                </KeyColumns>
                            </Attribute>
                            <Attribute Name="Color">
                                <KeyColumns>
                                    <KeyColumn ColumnName="Color" />
                                </KeyColumns>
                            </Attribute>
                            <Attribute Name="Size">
                                <KeyColumns>
                                    <KeyColumn ColumnName="Size" />
                                </KeyColumns>
                            </Attribute>
                            <Attribute Name="Start Date">
                                <KeyColumns>
                                    <KeyColumn ColumnName="StartDate" />
                                </KeyColumns>
                            </Attribute>
                            <Attribute Name="End Date">
                                <KeyColumns>
                                    <KeyColumn ColumnName="EndDate" />
                                </KeyColumns>
                            </Attribute>
                            <Attribute Name="Category Name">
                                <KeyColumns>
                                    <KeyColumn ColumnName="CategoryName" />
                                </KeyColumns>
                            </Attribute>
                            <Attribute Name="Subcategory Name">
                                <KeyColumns>
                                    <KeyColumn ColumnName="SubcategoryName" />
                                </KeyColumns>
                            </Attribute>
                        </Attributes>
                        <Relationships>
                            <Relationship Name="Product Name" ParentAttributeName="Product" ChildAttributeName="Product Name" />
                            <Relationship Name="Color" ParentAttributeName="Product" ChildAttributeName="Color" />
                            <Relationship Name="Size" ParentAttributeName="Product" ChildAttributeName="Size" />
                            <Relationship Name="Start Date" ParentAttributeName="Product" ChildAttributeName="Start Date" />
                            <Relationship Name="End Date" ParentAttributeName="Product" ChildAttributeName="End Date" />
                            <Relationship Name="Category Name" ParentAttributeName="Product" ChildAttributeName="Category Name" />
                            <Relationship Name="Subcategory Name" ParentAttributeName="Category Name" ChildAttributeName="Subcategory Name" />
                        </Relationships>
                        <AttributeHierarchies>
                            <Hierarchy Name="Categories">
                                <Levels>
                                    <Level Name="Category Name" AttributeName="Category Name" />
                                    <Level Name="Subcategory Name" AttributeName="Subcategory Name" />
                                    <Level Name="Product Name" AttributeName="Product Name" />
                                </Levels>
                            </Hierarchy>
                        </AttributeHierarchies>
                    </Dimension>
                </AnalysisMetadata>
            </Table>
        </Tables>
    </Biml>
```
