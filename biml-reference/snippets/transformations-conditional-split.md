# Conditional Split

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Parallel">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments" >
                            <DirectInput>select * from DimInstrument</DirectInput>
                        </OleDbSource>

                        <!-- Outputs the row to the CategoryOut output if the first three letters from the 
                                Category row are "PRE" -->
                        <ConditionalSplit Name="Conditional Split Transformation">
                            <InputPath OutputPathName="FedReserve.Output" />
                            <OutputPaths>
                                <OutputPath Name="CategoryOut">
                                    <Expression>SUBSTRING(Category, 1, 3) == "PRE"</Expression>
                                </OutputPath>
                            </OutputPaths>
                        </ConditionalSplit>
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
