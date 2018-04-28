# File System

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <!-- Copies a file from the local file system, from c:\public to c:\public\copy -->
                <FileSystem Name="File System Task" Operation="CopyFile" OverwriteDestination="true">
                    <ExternalFileInput ExternalFilePath="c:\public\document.txt" />
                    <ExternalFileOutput ExternalFilePath="c:\public\copy\document.txt" />
                </FileSystem>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
