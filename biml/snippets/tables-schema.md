# Schema

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <!-- This example demonstrates referencing a database schema in a table. -->
    <Schemas>
        <Schema Name="mySchema" ConnectionName="TableConnection" />
    </Schemas>
    <Tables>
        <Table SchemaName="mySchema" Name="SampleTable" ConnectionName="TableConnection">
            <Columns>
                <Column Name="Simple" DataType="Int32" IsNullable="false"/>
            </Columns>
        </Table>
    </Tables>
</Biml>
```
