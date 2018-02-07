# Execute SQL

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Packages>
		<Package Name="Package1" ConstraintMode="Parallel">
			<Tasks>
				<!-- This Execute SQL task processes a query in the SqlQuery variable.
					It also returns a full result set and stores it in the Result variable. -->
				<ExecuteSQL Name="Execute SQL Task 1" ConnectionName="AdventureWorks" ResultSet="Full">
					<VariableInput VariableName="User.SqlQuery" />
					<Variables>
						<Variable Name="SqlQuery" DataType="String">select ProductID, LocationID, Shelf, BINARY_CHECKSUM, Quantity
							from AdventureWorks.Production.ProductInventory
							where Quantity &lt; 100</Variable>
						<Variable Name="Result" DataType="Object"></Variable>
					</Variables>
					<Results>
						<Result Name="Result" VariableName="User.Result" />
					</Results>
				</ExecuteSQL>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
