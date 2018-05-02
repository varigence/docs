# WMI Data Reader

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <!-- Gets WMI information about the local logical disk and write it to a file specified by WmiFileConnection -->
                <WmiDataReader Name="WMI Data Reader Task" ConnectionName="WmiConnection" OverwriteDestination="OverwriteDestination">
                    <DirectInput>SELECT FreeSpace, DeviceId, Size, SystemName, Description FROM Win32_LogicalDisk</DirectInput>
                    <FileOutput ConnectionName="WmiFileConnection" />
                </WmiDataReader>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
