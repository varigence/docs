# Percentage Sampling

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
                        <!-- Outputs 20% of the rows, randomly, from the input -->
                        <PercentageSampling Name="Percentage Sampling Transformation" PercentageOfRows="20" />
                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" >

                            </FlatFileDestination>
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
