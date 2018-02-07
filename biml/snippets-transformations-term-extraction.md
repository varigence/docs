# Term Extraction

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
					
						<!-- Extracts terms (noun/noun phrases) from the Response column that occur at least thrice.  Outputs the terms found for each row to the new ExtractedTerms column. -->
						<TermExtraction Name="Term Extraction Transformation" TermFrequencyThreshold="3" CaseSensitiveTermExtraction="false" TermExtractionColumn="Response" TermOutputColumn="ExtractedTerms" >
							<InputPath OutputPathName="SurveyResponses.Output" />
						</TermExtraction>
						
						<FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" Overwrite="true" />
						
					</Transformations>
				</Dataflow>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
