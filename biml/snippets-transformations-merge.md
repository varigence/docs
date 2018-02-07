# Merge

```xml
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
							</Columns>
							<DirectInput>select * from SurveyResponses order by surveyid, attribute, response</DirectInput>
						</OleDbSource>
						
						<OleDbSource Name="JuniorSurveyResponses" ConnectionName="SportsData">
							<Columns>
								<Column SourceColumn="SurveyId" SortKeyPosition="1" />
								<Column SourceColumn="Attribute" SortKeyPosition="2" />
								<Column SourceColumn="Response" SortKeyPosition="3" />
							</Columns>
							<DirectInput>select * from JuniorSurveyResponses order by surveyid, attribute, response</DirectInput>
						</OleDbSource>

						<!-- Merges SurveyResponses and JuniorSurveyResponses outputs -->
						<Merge Name="Merge Transformation">
							<LeftInputPath OutputPathName="SurveyResponses.Output" />
							<RightInputPath OutputPathName="JuniorSurveyResponses.Output" />
						</Merge>
						<FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" />
					</Transformations>
				</Dataflow>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
