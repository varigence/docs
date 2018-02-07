# Derived Columns

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Packages>
		<Package Name="My Package" ConstraintMode="Parallel">
			<Tasks>		
				<Dataflow Name="My Dataflow Task">
					<Transformations>
						<OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments">
							<DirectInput>select * from DimInstrument</DirectInput>
						</OleDbSource>
						
						<!-- Derives a new column, Domain, by stripping out the domain from email addresses specified in the Url column -->
						<DerivedColumns Name="Derived Columns Transformation">
							<Columns>
								<Column Name="Domain" DataType="AnsiString" Length="50">SUBSTRING(Url, 1, FINDSTRING(Url, "/", 2))</Column>
							</Columns>
						</DerivedColumns>
					</Transformations>
				</Dataflow>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
