# Static Source

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Tables>
        <Dimension Name="DimStatus" ConnectionName="FederalReserveInstruments">
            <!-- This sample demonstrates a static source in Biml.
                    Notice that there are the same number of ColumnValue elements in each ColumnValues list, for each Row. -->
            <Sources>
                <StaticSource Name="StaticSource">
                    <Rows>
                        <Row>
                            <ColumnValues>
                                <ColumnValue ColumnName="StatusID" Value="-1" />
                                <ColumnValue ColumnName="DisplayName" Value="N'Unknown'" />
                            </ColumnValues>
                        </Row>
                        <Row>
                            <ColumnValues>
                                <ColumnValue ColumnName="StatusID" Value="1" />
                                <ColumnValue ColumnName="DisplayName" Value="N'Active'" />
                            </ColumnValues>
                        </Row>
                        <Row>
                            <ColumnValues>
                                <ColumnValue ColumnName="StatusID" Value="2" />
                                <ColumnValue ColumnName="DisplayName" Value="N'Discontinued'" />
                            </ColumnValues>
                        </Row>
                    </Rows>
                </StaticSource>
            </Sources>
            <Columns>
                <Column Name="StatusID" />
                <Column Name="DisplayName" DataType="String" Length="32" />
            </Columns>
        </Dimension>
    </Tables>
</Biml>
```
