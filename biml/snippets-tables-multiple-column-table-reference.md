# Multiple Column Table Reference

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Tables>
		<!-- MultipleColumnTableReference: Columns must be part of the table's unique or primary key.
				Use MultipleColumnTableReferenceGroupName to group a set of columns into a single foreign key-->
		<Table Name="SampleChild" ConnectionName="TableConnection">
			<Columns>
				<MultipleColumnTableReference Name="Column1" ForeignColumnName="SampleParent.Column1" MultipleColumnTableReferenceGroupName="FK_MyForeignKey" />
				<MultipleColumnTableReference Name="Column2" ForeignColumnName="SampleParent.Column2" MultipleColumnTableReferenceGroupName="FK_MyForeignKey" />
			</Columns>
		</Table>
	</Tables>
</Biml>
```
