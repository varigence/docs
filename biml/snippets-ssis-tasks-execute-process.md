# Execute Process

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Packages>
		<Package Name="My Package" ConstraintMode="Linear">
			<Tasks>		
				<!-- Executes the unzip process on a zipped document -->
				<ExecuteProcess Name="Execute Process Task" Executable="C:\BIN\unzip.exe" WorkingDirectory="C:\Public" StandardInputVariableName="User::CompressedInput" >
					<Variables>
						<Variable Name="CompressedInput" DataType="String">documents.zip</Variable>
					</Variables>
				</ExecuteProcess>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
