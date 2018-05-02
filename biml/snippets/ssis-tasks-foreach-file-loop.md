# Foreach File Loop

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="Parent" ConstraintMode="Parallel">
            <Tasks>
                <!-- This ForEachFileLoop task uses a variable to communicate fully qualified paths to its FileSystem task. -->
                <ForEachFileLoop Name="Foreach File Loop 1" ConstraintMode="Parallel" Folder="C:\Orders" FileSpecification="*.*" ProcessSubfolders="true">
                    <Tasks>
                        <FileSystem Name="File System Task 1" Operation="MoveFile" OverwriteDestination="true">
                            <VariableInput VariableName="User.ForeachFilePath" />
                            <FileOutput ConnectionName="ArchiveConnection" />
                        </FileSystem>
                    </Tasks>
                    <Variables>
                        <Variable Name="ForeachFilePath" DataType="String"></Variable>
                    </Variables>
                    <VariableMappings>
                        <VariableMapping Name="Mapping" VariableName="User.ForeachFilePath" />
                    </VariableMappings>
                </ForEachFileLoop>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
