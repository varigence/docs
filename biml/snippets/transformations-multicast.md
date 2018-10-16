# Multicast

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments">
                            <DirectInput>select * from DimInstrument</DirectInput>
                        </OleDbSource>

                        <!-- Distributes the input to two outputs, MultiOut0 and MultiOut1 -->
                        <Multicast Name="Multicast Transformation">
                            <OutputPaths>
                                <OutputPath Name="MultOut0" />
                                <OutputPath Name="MultOut1" />
                            </OutputPaths>
                        </Multicast>

                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection">
                            <InputPath OutputPathName="Multicast Transformation.MultOut0" />

                        </FlatFileDestination>
                        <FlatFileDestination Name="OutputFile2" ConnectionName="FlatFileConnection2">
                            <InputPath OutputPathName="Multicast Transformation.MultOut1" />
                        </FlatFileDestination>
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
