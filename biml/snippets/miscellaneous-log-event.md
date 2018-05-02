# Log Event

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <ExecuteSQL>

                </ExecuteSQL>
                <ExecuteSQL Name="ESQL_Enabled" ConnectionName="OleDbConnection" LoggingMode="Enabled">
                    <!--  This defines two log providers.  One that will output to a SQL Server database.
                            The other to the Windows Event Log. -->
                    <LogProviders>
                        <SqlServerLogProvider Name="MyOleDbConnection" ConnectionName="OleDbConnection" />
                        <WindowsEventLogProvider Name="WindowsEventLog" />
                        </LogProviders>
                        <LogEvents>
                        <LogEvent EventName="ExecuteSQLExecutingQuery">
                            <EventColumns>
                            <EventColumn>Computer</EventColumn>
                            <EventColumn>Operator</EventColumn>
                            </EventColumns>
                        </LogEvent>
                        </LogEvents>
                    <DirectInput>SELECT * FROM INFORMATION_SCHEMA.TABLES</DirectInput>
                </ExecuteSQL>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
