# Sort

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear" >
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments">
                            <DirectInput>select * from DimInstrument</DirectInput>
                        </OleDbSource>
                        <!-- Sorts the rows based using the Category column as the sort key -->
                        <Sort Name="Sort Transformation" EliminateDuplicates="true" >
                            <Columns>
                                <Column Sort="true" SourceColumn="Category" />
                            </Columns>
                        </Sort>
                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" >
                        </FlatFileDestination>
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
