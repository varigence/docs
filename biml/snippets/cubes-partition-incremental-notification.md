# Partition - Incremental Notification

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Cubes>
        <Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
            <CubeMeasureGroups>
                <CubeMeasureGroup Name="Fact Finance" FactName="FactFinance">
                    <Partitions>
                        <!-- 
                        This partition has proactive caching enabled. 
                        Incremental updates are also enabled, showing how a polling query or processing query can be specified. 
                        -->
                        <Partition Name="Finance" EstimatedRows="39409" StorageMode="Holap">
                            <ProactiveCaching Enabled="true">
                                <IncrementalNotificationProactiveCachingSource>
                                    <IncrementalProcessingNotifications>
                                        <IncrementalProcessingNotification>
                                            <Query><!-- Insert SQL here --></Query>
                                            <ProcessingQuery></ProcessingQuery>
                                        </IncrementalProcessingNotification>
                                    </IncrementalProcessingNotifications>
                                </IncrementalNotificationProactiveCachingSource>
                            </ProactiveCaching>
                            <DsvTableSource TableName="FactFinance" />
                        </Partition>
                    </Partitions>
                </CubeMeasureGroup>
            </CubeMeasureGroups>
        </Cube>
    </Cubes>
</Biml>
```
