# Fuzzy Grouping

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="SurveyResponses" ConnectionName="SportsData">
                            <DirectInput>select * from SurveyResponses</DirectInput>
                        </OleDbSource>

                        <!-- Does fuzzy grouping of the Response column.  -->
                        <FuzzyGrouping Name="Fuzzy Grouping Transformation" ConnectionName="SportsData"  Exhaustive="true" SimilarityScoreColumnName="Similarity" OutputKeyColumnName="OutputKey" InputKeyColumnName="InputKey" >
                            <Columns>
                                <Column MatchType="Fuzzy" SourceColumn="Response" GroupOutputAlias="GroupedOutput" TargetColumn="Response" SimilarityOutputAlias="SimilarityOutput" />
                            </Columns>
                        </FuzzyGrouping>

                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true" />

                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
