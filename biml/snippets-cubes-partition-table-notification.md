# Partition - Table Notification

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Cubes>
        <Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
            <CubeMeasureGroups>
                <CubeMeasureGroup Name="Fact Currency Rate" FactName="FactCurrencyRate">
                    <AggregationDesigns>
                        <AggregationDesign Name="Currency Rate AggregationDesign"/>
                    </AggregationDesigns>
                    <Partitions>
                        <!-- 
                        This partition has proactive caching enabled, with a SilenceInterval set.
                        Tracking tables are specified in the TableNotifications list.
                        -->
                        <Partition Name="Currency_Rates" EstimatedRows="14264" AggregationDesignName="Currency Rate AggregationDesign">
                            <ProactiveCaching Enabled="true" IsSilenceEnabled="true" SilenceInterval="PT10S">
                                <SqlServerTableNotificationProactiveCachingSource>
                                    <TableNotifications>
                                        <TableReference TableName="FactCurrencyRate" />
                                        <TableReference TableName="FactSalesQuota" />
                                    </TableNotifications>
                                </SqlServerTableNotificationProactiveCachingSource>
                            </ProactiveCaching>
                            <!-- The FactCurrencyRate table provides the source data for the partition. -->
                            <DsvTableSource TableName="FactCurrencyRate" />
                        </Partition>
                    </Partitions>
                </CubeMeasureGroup>
            </CubeMeasureGroups>
        </Cube>
    </Cubes>
</Biml>
```
