# Merge Join

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="SurveyResponses" ConnectionName="SportsData">
                            <DirectInput>select * from SurveyResponses order by response, attribute, surveyid</DirectInput>
                        </OleDbSource>

                        <OleDbSource Name="SportDescription" ConnectionName="SportsData">
                            <DirectInput>select * from SportDescription order by sport</DirectInput>
                        </OleDbSource>

                        <!-- Performs a merge join on SurveyResponses and JuniorSurveyResponses, using Response and Sport as the Left/Right join keys respectively. -->
                        <MergeJoin Name="Merge Join Transformation" JoinType="InnerJoin" TreatNullsAsEqual="false" MaxBuffersPerInput="10" >
                            <LeftInputPath OutputPathName="SurveyResponses.Output"   >
                                <Columns>
                                    <Column SourceColumn="Response" SortKeyPosition="1" TargetColumn="Response" />
                                    <Column SourceColumn="Attribute" SortKeyPosition="2" />
                                    <Column SourceColumn="SurveyId" SortKeyPosition="3" />
                                </Columns>
                            </LeftInputPath>
                            <RightInputPath OutputPathName="SportDescription.Output" />
                            <JoinKeys>
                                <JoinKey LeftColumn="Response" RightColumn="Sport" />
                            </JoinKeys>
                        </MergeJoin>

                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true" />
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
