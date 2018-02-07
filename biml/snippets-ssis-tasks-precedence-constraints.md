# Precedence Constraints

```xml
<Packages>
		<Package Name="Rebuild Warehouse Schema" ConstraintMode="Parallel">
			<!-- A series of ExecutePackage tasks that are constrained with precedence constraints 
					specified in each task -->
			<Tasks>
				<ExecutePackage Name="Create Database">
					<Package PackageName="Create Database" />
				</ExecutePackage>
				<ExecutePackage Name="Create Tables">
					<PrecedenceConstraints>
						<Inputs>
							<Input OutputPathName="Create Database.Output" />
						</Inputs>
					</PrecedenceConstraints>
					<Package PackageName="Create Tables" />
				</ExecutePackage>
				<ExecutePackage Name="Create Scalar-valued Functions">
					<Package PackageName="Create Scalar-valued Functions" />
					<PrecedenceConstraints>
						<Inputs>
							<Input OutputPathName="Create Tables.Output" />
						</Inputs>
					</PrecedenceConstraints>
				</ExecutePackage>
				<ExecutePackage Name="Create Database Triggers">
					<Package PackageName="Create Database Triggers" />
					<PrecedenceConstraints>
						<Inputs>
							<Input OutputPathName="Create Scalar-valued Functions.Output" />
						</Inputs>
					</PrecedenceConstraints>
				</ExecutePackage>
			</Tasks>
		</Package>
	</Packages>
```
