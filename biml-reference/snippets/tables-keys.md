# Keys

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Tables>
        <Table Name="SalesOrderDetail" ConnectionName="AdventureWorksLT2008" SchemaName="SalesLT" >
            <Columns>
                <TableReference ForeignKeyNameOverride="FK_SalesOrderDetail_SalesOrderHeader_SalesOrderID" TableName="SalesLT.SalesOrderHeader" Name="SalesOrderID" />
                <Column Name="SalesOrderDetailID" />
                <Column Name="OrderQty" DataType="Int16" />
                <Column Name="UnitPrice" DataType="Currency" />
                <Column Name="UnitPriceDiscount" DataType="Currency" Default="((0.0))" />
                <Column Name="LineTotal" DataType="Decimal" Precision="38" Scale="6" />
                <Column Name="rowguid" DataType="Guid" Default="(newid())" />
                <Column Name="ModifiedDate" DataType="DateTime" Default="(getdate())" />
            </Columns>
            <Keys>
                <!-- This sample demonstrates using the three types of keys.
                        Identity Keys combine a Primary Key and Identity Together in one combination -->
                <Identity Name="IK_SalesOrderDetail">
                    <Columns>
                        <Column ColumnName="SalesOrderDetailID" />
                    </Columns>
                </Identity>
                <UniqueKey Name="AK_SalesOrderDetail_rowguid">
                    <Columns>
                        <Column ColumnName="rowguid" />
                    </Columns>
                </UniqueKey>
                <PrimaryKey Name="PK_SalesOrderDetail_SalesOrderID_SalesOrderDetailID">
                    <Columns>
                        <Column ColumnName="SalesOrderID" />
                        <Column ColumnName="SalesOrderDetailID" />
                    </Columns>
                </PrimaryKey>
            </Keys>
        </Table>
    </Tables>
</Biml>
```
