# Indexes

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Tables>
        <Table Name="SampleTable" ConnectionName="TableConnection">
            <Columns>
                <Column Name="Simple" DataType="Int32" />
            </Columns>
            <Indexes>
                <Index Name="IX_1" Clustered="false" Online="true" PadIndex="true" FillFactor="50" SortInTempdb="true">
                    <Columns>
                        <Column ColumnName="Simple" />
                    </Columns>
                </Index>
            </Indexes>
        </Table>
    </Tables>
</Biml>
```
