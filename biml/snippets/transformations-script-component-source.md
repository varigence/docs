# Script Component Source

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My New Package" ConstraintMode="Linear">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <!-- Creates an input based on a script code defined in "My Script Component Project" -->
                        <ScriptComponentSource ProjectCoreName="SC_eb1debcd2374468ebccbbfad4fbe5976" Name="Script Component Source Transformation">
                            <ScriptComponentProjectReference ScriptComponentProjectName="My Script Component Project" />

                        </ScriptComponentSource>
                        <ImportColumn Name="Import Column Transformation">
                            <InputPath OutputPathName="Script Component Source.Output0" />
                            <Columns>
                                <Column SourceColumn="FileName" TargetColumn="FileName" />

                                </Columns>
                        </ImportColumn>
                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection">
                            <InputPath OutputPathName="Import Column Transformation.Output" />

                        </FlatFileDestination>
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
