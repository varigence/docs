# Foreign Key (Simple)

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Tables>
		<!-- TableReference automatically detects the primary key for a table and includes the correct column in your model
		For multiple column primary keys, see the MultipleColumnTableReference example
		-->
		<Table Name="SampleChild" ConnectionName="TableConnection">
			<Columns>
				<TableReference Name="ForeignKeyColumn" TableName="SampleParent" ForeignKeyNameOverride="FK_ForeignKey" />
			</Columns>
		</Table>
	</Tables>
</Biml>
```
