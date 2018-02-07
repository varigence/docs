# Execute SQL Parameters

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Packages>
		<Package Name="Package1" ConstraintMode="Parallel">
			<Variables>
				<Variable Name="etlp_BatchId" DataType="Int32" EvaluateAsExpression="false"  InheritFromPackageParentConfigurationString="User::etlp_BatchId" >0</Variable>
				<Variable Name="etlp_PackageLogId" DataType="Int32"  >0</Variable>
				<Variable Name="etlp_BatchName" DataType="String"  >Test Batch</Variable>
			</Variables>
			<Tasks>
				<!--  
				In this Execute SQL task, the query uses the ? character to indicate parameters. 
				The actual parameters are listed in the Parameters list. 
				-->
				<ExecuteSQL Name="SQL LogPackageEnd">
					<DirectInput>EXEC etlp.LogPackageEnd ?,?,?</DirectInput>
					<Parameters>
						<Parameter Name="0" VariableName="User.etlp_PackageLogId" />
						<Parameter Name="1" VariableName="User.etlp_BatchId" />
						<Parameter Name="2" VariableName="User.etlp_EndBatchAudit" />
					</Parameters>
				</ExecuteSQL>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
