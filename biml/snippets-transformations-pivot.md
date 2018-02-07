# Pivot

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
					
						<!-- Performs a pivot transformation on the SurveyResponse database -->  
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
							
						<FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true" />
					</Transformations>
				</Dataflow>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
