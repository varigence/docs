# Principal

```xml
<Biml xmlns:Pamlico="http://schemas.mariner.com/pamlico" xmlns="http://schemas.varigence.com/biml.xsd">
    <Principals>
        <!-- Creates a principal that has control access to the SurveyResponses table an R/W access to the 
                Federal Research cube -->
        <Principal Name="Admin" Type="SqlUser" ConnectionName="OleDbConnection">
            <Permissions>
                <TablePermission Action="Grant" Target="Control" TableName="dbo.SurveyResponses" />
                <CubePermission Process="true" CubeName="FederalReserve" Access="ReadWrite" DrillThroughAccess="DrillThroughAndLocalCube" />
            </Permissions>
        </Principal>
    </Principals>
</Biml>
```
