# Lookup

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="SurveyResponses" ConnectionName="SportsData">
                            <Columns>
                                <Column SourceColumn="SurveyId" SortKeyPosition="1" />
                                <Column SourceColumn="Attribute" SortKeyPosition="2" />
                                <Column SourceColumn="Response" SortKeyPosition="3" />
                                <Column SourceColumn="NewResponse" SortKeyPosition="0" TargetColumn="NewResponse" />
                            </Columns>
                            <DirectInput>select * from SurveyResponses order by surveyid, attribute, response</DirectInput>
                        </OleDbSource>

                        <!-- Performs a lookup on JuniorSurveyResponses over the AttributeColumn, mapping the resulting Response column to NewResponse -->
                        <Lookup Name="Lookup Transformation" OleDbConnectionName="SportsData" NoMatchBehavior="IgnoreFailure" CacheMode="Partial">
                            <DirectInput>
                                select * from JuniorSurveyResponses
                            </DirectInput>
                            <Inputs>
                                <Column SourceColumn="Attribute" TargetColumn="Attribute"  />
                            </Inputs>
                            <Outputs>
                                <Column SourceColumn="Response" TargetColumn="NewResponse"  />
                            </Outputs>
                            <InputPath OutputPathName="SurveyResponses.Output" />

                        </Lookup>
                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true">
                            <Columns>
                                <Column SourceColumn="SurveyId" TargetColumn="SurveyId" />
                                <Column SourceColumn="Attribute" TargetColumn="Attribute" />
                                <Column SourceColumn="Response" TargetColumn="Response" />
                                <Column SourceColumn="NewResponse" TargetColumn="NewResponse" IsUsed="true" />
                            </Columns>
                        </FlatFileDestination>

                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
