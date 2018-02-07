# Character Map

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Packages>
		<Package Name="My Package" ConstraintMode="Parallel">
			<Tasks>		
				<Dataflow Name="My Dataflow Task">
					<Transformations>
						<OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments">
							<DirectInput>select * from DimFrequency</DirectInput>
						</OleDbSource>
						
						<!-- Makes characters uppercase for the DisplayName column -->
						<CharacterMap Name="Character Map Transformation">
							<Columns>
								<Column ReplaceExisting="true" SourceColumn="DisplayName">
									<MappingOptions>
										<MappingOption>Uppercase</MappingOption>
									</MappingOptions>
								</Column>
							</Columns>
						</CharacterMap>
					</Transformations>
				</Dataflow>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
