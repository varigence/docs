# Foreign Key

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Tables>
        <Table Name="ProductModelProductDescription" ConnectionName="AdventureWorksLT2008" SchemaName="SalesLT" >
            <Columns>
                <!-- This sample demonstrates the use of ForeignKeys via TableReference columns. -->
                <TableReference ForeignKeyNameOverride="FK_ProductModelProductDescription_ProductModel_ProductModelID" TableName="SalesLT.ProductModel" Name="ProductModelID" />
                <TableReference ForeignKeyNameOverride="FK_ProductModelProductDescription_ProductDescription_ProductDescriptionID" TableName="SalesLT.ProductDescription" Name="ProductDescriptionID" />
                <Column Name="Culture" DataType="StringFixedLength" Length="6" />
                <Column Name="rowguid" DataType="Guid" Default="(newid())" />
                <Column Name="ModifiedDate" DataType="DateTime" Default="(getdate())" />
            </Columns>
            <Keys>
                <PrimaryKey Name="PK_ProductModelProductDescription_ProductModelID_ProductDescriptionID_Culture">
                    <Columns>
                        <Column ColumnName="ProductModelID" />
                        <Column ColumnName="ProductDescriptionID" />
                        <Column ColumnName="Culture" />
                    </Columns>
                </PrimaryKey>
            </Keys>
        </Table>
        <Table Name="ProductDescription" ConnectionName="AdventureWorksLT2008" SchemaName="SalesLT" >
            <Columns>
                <Column Name="ProductDescriptionID" />
                <Column Name="Description" DataType="String" Length="400" />
                <Column Name="rowguid" DataType="Guid" Default="(newid())" />
                <Column Name="ModifiedDate" DataType="DateTime" Default="(getdate())" />
            </Columns>
        </Table>
        <Table Name="ProductModel" ConnectionName="AdventureWorksLT2008" SchemaName="SalesLT" >
            <Columns>
                <Column Name="ProductModelID" />
                <Column Name="Name" DataType="String" Length="50" />
                <Column Name="CatalogDescription" DataType="Xml" IsNullable="true" />
                <Column Name="rowguid" DataType="Guid" Default="(newid())" />
                <Column Name="ModifiedDate" DataType="DateTime" Default="(getdate())" />
            </Columns>
        </Table>
    </Tables>
</Biml>
```
