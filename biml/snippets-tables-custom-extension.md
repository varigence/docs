# Custom Extension

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Tables>
		<!-- Custom Extensions are custom SSIS tasks which can run after table creation -->
		<Table Name="SampleChild" ConnectionName="TableConnection">
			<Columns>
				<Column Name="Column1" DataType="Int32"/>
			</Columns>
			<CustomExtensions>
				<CustomExtension Name="CustomExtension" ConstraintMode="Linear">
					<Tasks>
						<ExecuteSQL Name="SimpleTask" ConnectionName="TableConnection">
							<DirectInput>
								ALTER TABLE SampleChild ADD Column2 BIGINT NULL
							</DirectInput>
						</ExecuteSQL>
					</Tasks>
				</CustomExtension>
			</CustomExtensions>
		</Table> 
	</Tables>
</Biml>
```
