# Fuzzy Lookup

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
					
						<!-- Performs a fuzzy lookup on the Attribute column against the JuniorSurveyResponse DB, and outputs the corresponding Response column to NewResponse. -->
						<FuzzyLookup Name="Fuzzy Lookup Transformation" ConnectionName="SportsData" Exhaustive="true" >
							<ReferenceTableInput TableName="dbo.JuniorSurveyResponses" />
							<Inputs>
								<Column SourceColumn="Attribute" TargetColumn="Attribute"  />
							</Inputs>
							<Outputs>
								<Column SourceColumn="Response" TargetColumn="NewReponse"  />
							</Outputs>
							<InputPath OutputPathName="SurveyResponses.Output" />
						</FuzzyLookup>
						
						<FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true" />
						
					</Transformations>
				</Dataflow>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
