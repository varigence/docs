# WMI Event Watcher

```xml
	<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Packages>
		<Package Name="Package1" ConstraintMode="Parallel">
			<Tasks>
				<!-- This WMI Event Watcher task listens for when the freespace on C:\ falls beneath 100 MB. -->
				<WmiEventWatcher Name="WMI Event Watcher Task 1" ConnectionName="WmiConnection1">
					<Expressions>
						<Expression PropertyName="WqlQuerySource">"SELECT * FROM __InstanceModificationEvent WITHIN 5 WHERE TargetInstance ISA \"Win32_LogicalDisk\" AND TargetInstance.Name=\"C:\" AND TargetInstance.FreeSpace &lt; " + (DT_WSTR, 50)@[User::FreeSpaceThreshold]</Expression>
					</Expressions>
					<DirectInput> </DirectInput>
				</WmiEventWatcher>
			</Tasks>
			<Variables>
				<Variable Name="FreeSpaceThreshold" DataType="Int64">104857600</Variable>
			</Variables>
		</Package>
	</Packages>
</Biml>
```
