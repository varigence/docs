# Data Conversion

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Parallel">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments" >
                            <DirectInput>select * from DimInstrument</DirectInput>
                        </OleDbSource>

                        <!-- Converts the datatype of the Category column to StringFixedLength -->
                        <DataConversion Name="Data Conversion Transformation">
                            <Columns>
                                <Column SourceColumn="Category" DataType="StringFixedLength" />
                            </Columns>
                        </DataConversion>
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
