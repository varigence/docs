# Message Queue

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Packages>
		<Package Name="My Package" ConstraintMode="Linear">
			<Tasks>		
				<!-- Sending a message to the message queue specified in MsmqConnection -->
				<MessageQueue Name="Message Queue Task" MsmqConnectionName="MsmqConnection">
					<FileInput ConnectionName="MyMessageFile" />
				</MessageQueue>
			</Tasks>
		</Package>
	</Packages>
</Biml>
```
