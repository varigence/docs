# Unpivot

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="SurveyResponses" ConnectionName="SportsData">
                            <DirectInput>select * from SurveyResponses order by surveyid, attribute, response</DirectInput>
                        </OleDbSource>

                        <Pivot Name="Pivot Transformation">
                            <InputPath OutputPathName="SurveyResponses.Output" />
                            <Inputs>
                                <Column SourceColumn="Response" PivotUsage="Output" />
                                <Column SourceColumn="Attribute" PivotUsage="Pivot" />
                                <Column SourceColumn="SurveyId" PivotUsage="Key" />
                            </Inputs>

                            <Outputs>
                                <Column SourceColumn="Response" PivotKeyValue="Name" TargetColumn="Name" />
                                <Column SourceColumn="Response" PivotKeyValue="Weight" TargetColumn="Weight" />
                                <Column SourceColumn="Response" PivotKeyValue="Sport" TargetColumn="Sport" />
                            </Outputs>
                        </Pivot>

                        <!-- After pivoting, this code performs an unpivot, so that the resulting data will be the same as the input
                                to the pivot (although the order may have changed).  -->
                        <Unpivot Name="Univot Transformation" PivotKeyValueColumnDataType="String" PivotKeyValueColumnName="Attribute" PivotKeyValueColumnLength="10" AutoPassThrough="false">
                            <InputPath OutputPathName="Pivot Transformation.Output" />
                            <Columns>
                                <Column PivotKeyValue="Name" SourceColumn="Name" TargetColumn="Response" />
                                <Column PivotKeyValue="Weight" SourceColumn="Weight" TargetColumn="Response" />
                                <Column PivotKeyValue="Sport" SourceColumn="Sport" TargetColumn="Response" />
                            </Columns>
                        </Unpivot>

                        <FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true" />
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
