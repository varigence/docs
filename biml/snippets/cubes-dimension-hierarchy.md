# Dimension / Hierarchy

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Cubes>
        <!-- This is an example cube definition.  -->
        <Cube Name="FederalReserve" ConnectionName="FederalReserve">
            <!-- This is the measure group -->
            <CubeMeasureGroups>
                <CubeMeasureGroup Name="Rates" FactName="FactRate">
                    <Measures>
                        <Measure MeasureName="FactRate.Interest Rate" />
                        <Measure MeasureName="FactRate.Instrument Count" />
                    </Measures>

                    <!-- This is where the dimension binding to the fact table IDs are defined -->
                    <CubeDimensionBindings>
                        <CubeDimensionBinding CubeDimensionName="Instrument" FactColumnName="FactRate.InstrumentID" />
                        <CubeDimensionBinding CubeDimensionName="Date" FactColumnName="FactRate.DateID" />
                    </CubeDimensionBindings>
                    <Partitions>
                        <Partition Name="Rates">
                            <DsvTableSource TableName="FactRate" />
                        </Partition>
                    </Partitions>
                </CubeMeasureGroup>
            </CubeMeasureGroups>

            <!-- This is the definition of the cube dimensions -->
            <CubeDimensions>
                <CubeDimension Name="Instrument" DimensionName="DimInstrument">
                    <Attributes>
                        <Attribute AttributeName="DimInstrument.DimInstrumentKey" />
                        <Attribute AttributeName="DimInstrument.Instrument" />
                        <Attribute AttributeName="DimInstrument.Category" />
                        <Attribute AttributeName="DimInstrument.Maturity" />
                        <Attribute AttributeName="DimInstrument.Frequency" />
                        <Attribute AttributeName="DimInstrument.Status" />
                    </Attributes>
                    <Hierarchies>
                        <Hierarchy HierarchyName="DimInstrument.Instrument Hierarchy" />
                    </Hierarchies>
                </CubeDimension>
                <CubeDimension Name="Date" DimensionName="DimDate">
                    <Attributes>
                        <Attribute AttributeName="DimDate.Date" />
                        <Attribute AttributeName="DimDate.CalendarYear" />
                        <Attribute AttributeName="DimDate.CalendarSemester" />
                        <Attribute AttributeName="DimDate.CalendarQuarter" />
                        <Attribute AttributeName="DimDate.CalendarMonth" />
                        <Attribute AttributeName="DimDate.CalendarWeek" />
                        <Attribute AttributeName="DimDate.DayOfWeek" />
                        <Attribute AttributeName="DimDate.IsWeekend" />
                        <Attribute AttributeName="DimDate.IsHoliday" />
                    </Attributes>
                    <Hierarchies>
                        <Hierarchy HierarchyName="DimDate.MonthHierarchy" />
                        <Hierarchy HierarchyName="DimDate.WeekHierarchy" />
                    </Hierarchies>
                </CubeDimension>
            </CubeDimensions>

            <!-- An MdxScript for the cube that defines a calculated member -->
            <MdxScripts>
                <MdxScript Name="MdxScript" Default="true">
                    <MdxScriptItems>
                        <CalculatedMember Name="Average Interest Rate" ParentDimensionName="Measures" FormatString="Percent" AssociatedMeasureGroupName="Rates">
                            <NonemptyBehaviors>
                                <NonemptyBehavior MeasureName="FactRate.Interest Rate" />
                            </NonemptyBehaviors>
                            <MdxScript>([Measures].[Interest Rate] / [Measures].[Instrument Count]) / 100</MdxScript>
                        </CalculatedMember>
                    </MdxScriptItems>
                </MdxScript>
            </MdxScripts>
        </Cube>
    </Cubes>
</Biml>
```