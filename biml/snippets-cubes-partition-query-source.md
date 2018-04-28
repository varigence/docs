# Partition - Query Source

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Connections>
        <Connection Name="AdventureWorksDW2008" ConnectionString="Data Source=(local);Initial Catalog=AdventureWorksDW2008;Provider=SQLNCLI10.1;Integrated Security=SSPI;" />
    </Connections>
    <Cubes>
        <Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
            <CubeMeasureGroups>
                <CubeMeasureGroup Name="Fact Internet Sales 1" FactName="FactInternetSales">
                    <Partitions>
                        <!-- This Biml partition uses a Query Source to specify the query and SQL connection that provide data for the partition. -->
                        <Partition Name="Internet_Sales_2004" EstimatedRows="32265">
                            <ProactiveCaching />
                            <QuerySource ConnectionName="AdventureWorksDW2008">
                                <Query>SELECT [dbo].[FactInternetSales].[ProductKey],[dbo].[FactInternetSales].[OrderDateKey],[dbo].[FactInternetSales].[DueDateKey]
                                    FROM [dbo].[FactInternetSales]
                                    WHERE OrderDateKey &gt;= '20040101' AND OrderDateKey &lt;= '20041231'</Query>
                            </QuerySource>
                        </Partition>
                    </Partitions>
                </CubeMeasureGroup>
            </CubeMeasureGroups>
        </Cube>
    </Cubes>
</Biml>
```
