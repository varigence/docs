# Clone Table

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Tables>
        <Table Name="SampleTable" ConnectionName="TableConnection">
            <Columns>
                <Column Name="Simple" DataType="Int32" IsNullable="false"/>
            </Columns>
        </Table>
        <!-- This CloneTable copies the SampleTable table above and includes an additional column. -->
        <CloneTable
            Name="SampleTableClone"
            CloneIndexes="false"
            CloneKeys="false"
            CloneStaticSources="false"
            NullClonedColumns="true"
            TableName="SampleTable"
            ConnectionName="TableConnection"
            >
            <Columns>
                <Column Name="ExtraColumn" DataType="Int32" />
            </Columns>
        </CloneTable>
    </Tables>
</Biml>
```
