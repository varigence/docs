# Data Profiling

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <!-- Get column statistics on the Response column from the SurveyResponses DB -->
                <DataProfiling Name="Data Profiling Task" OverwriteDestination="true" >
                    <FileOutput ConnectionName="ProfileFile" />
                    <ProfileRequests>
                        <ColumnPatternProfileRequest ConnectionName="AdoNetConnection" Name="Column Stats" Column="Response" TableName="dbo.SurveyResponses" />
                    </ProfileRequests>
                </DataProfiling>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
