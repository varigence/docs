# Export Column

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
						<DerivedColumns Name="Derived Columns">
							<InputPath OutputPathName="FedReserve.Output" />
							<Columns>
								<Column DataType="String" Length="50" Name="FileLocation">"C:\\Users\\MyName\\Documents\\urls.txt"</Column>
							</Columns>
						</DerivedColumns>
						
						<!-- Exports the Url column to the file specified by FileLocation -->
						<ExportColumn Name="Export Column Transformation">
							<Columns>
								<Column FilePathColumn="FileLocation" ExtractColumn="Url" AllowAppend="true" />
							</Columns>
							<InputPath OutputPathName="Derived Columns.Output" />
						</ExportColumn>
					</Transformations>
				</Dataflow>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
