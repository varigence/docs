# Row Count

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="SurveyResponses" ConnectionName="SportsData">
                            <DirectInput>select * from SurveyResponses</DirectInput>
                        </OleDbSource>

                        <!-- Outputs the row count to the User.RowCount variable -->
                        <RowCount Name="Row Count Transformation" VariableName="User.RowCount">
                            <InputPath OutputPathName="SurveyResponses.Output" />
                        </RowCount>

                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true" />

                    </Transformations>
                </Dataflow>
            </Tasks>
            <Variables>
                <Variable Name="RowCount" DataType="Int32">0</Variable>
            </Variables>
        </Package>
    </Packages>
</Biml>
```
