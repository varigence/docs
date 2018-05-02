# Union All

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

                        <OleDbSource Name="JuniorSurveyResponses" ConnectionName="SportsData">
                            <DirectInput>select * from JuniorSurveyResponses</DirectInput>
                        </OleDbSource>

                        <!-- Does a union of the SurveyResponses and JuniorSurveyResponses to the flat file specified by FlatFileConnection. -->
                        <UnionAll Name="Union All Transformation">
                            <InputPaths>
                                <InputPath OutputPathName="SurveyResponses.Output" />
                                <InputPath OutputPathName="JuniorSurveyResponses.Output" />
                            </InputPaths>
                        </UnionAll>

                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" />

                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```