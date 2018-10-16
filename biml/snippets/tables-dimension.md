# Dimension

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Tables>
        <!-- This sample creates a dimension with attributes, relationships, and hierarchies. -->
        <Dimension Name="DimProduct">
            <Columns>
                <Column Name="ProductID"/>
                <Column Name="ProductName" DataType="String" Length="50"/>
                <Column Name="CategoryName" DataType="String" Length="50"/>
                <Column Name="SubcategoryName" DataType="String" Length="50"/>
            </Columns>
            <Attributes>
                <Attribute Usage="Key" Name="ProductName">
                    <KeyColumns>
                        <KeyColumn ColumnName="ProductID"/>
                    </KeyColumns>
                    <NameColumn ColumnName="ProductName"/>
                </Attribute>
                <Attribute Name="Category Name">
                    <KeyColumns>
                        <KeyColumn ColumnName="CategoryName"/>
                    </KeyColumns>
                </Attribute>
                <Attribute Name="Subcategory Name">
                    <KeyColumns>
                        <KeyColumn ColumnName="SubcategoryName"/>
                    </KeyColumns>
                </Attribute>
            </Attributes>
            <Relationships>
                <Relationship Name="Category Name" ParentAttributeName="Subcategory Name" ChildAttributeName="Category Name"/>
                <Relationship Name="Subcategory Name" ParentAttributeName="ProductName" ChildAttributeName="Subcategory Name"/>
            </Relationships>
            <AttributeHierarchies>
                <Hierarchy Name="Categories">
                    <Levels>
                        <Level Name="Category Name" AttributeName="DimProduct.Category Name"/>
                        <Level Name="Subcategory Name" AttributeName="DimProduct.Subcategory Name"/>
                        <Level Name="ProductName" AttributeName="DimProduct.ProductName"/>
                    </Levels>
                </Hierarchy>
            </AttributeHierarchies>
        </Dimension>
    </Tables>
</Biml>
```
