# Term Lookup

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
					
						<!-- Does a term lookup on SurveyResponses using the Response column in the JuniorSurveyResponses table as the external table where the terms are taken from -->
						<TermLookup Name="Term Lookup Transformation" AutoPassThrough="true"  CaseSensitiveTermLookup="false" ConnectionName="SportsData">
							<InputPath OutputPathName="SurveyResponses.Output" />
							<Columns>
								<Column SourceColumn="Response" InputColumnUsageType="Lookup" TargetColumn="Response" />
							</Columns>
							<ExternalReferenceTermTableColumnInput Table="JuniorSurveyResponses" Column="Response" />
						</TermLookup>
						
						<FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true" />
					</Transformations>
				</Dataflow>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
