# Perspective

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Cubes>
		<Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
			<Perspectives>
				<!--
				This is a sample perspective for this Adventure Works cube. With Biml, it's easy to reference cube objects within the perspective. 
				-->
				<Perspective Name="Direct Sales" DefaultMeasureName="FactInternetSales.Internet Sales Amount">
					<Actions>
						<Action ActionName="Internet Details" />
					</Actions>
					<Calculations>
						<Calculation CalculationName="[Internet Gross Profit]" />
					</Calculations>
					<Kpis>
						<Kpi KpiName="Growth in Customer Base" />
					</Kpis>
					<MeasureGroups>
						<MeasureGroup CubeMeasureGroupName="Fact Internet Sales 1">
							<Measures>
								<Measure MeasureName="FactInternetSales.Internet Order Quantity" />
								<Measure MeasureName="FactInternetSales.Internet Tax Amount" />
								<Measure MeasureName="FactInternetSales.Internet Freight Cost" />
								<Measure MeasureName="FactInternetSales.Internet Standard Product Cost" />
								<Measure MeasureName="FactInternetSales.Internet Transaction Count" />
								<Measure MeasureName="FactInternetSales.Internet Extended Amount" />
							</Measures>
						</MeasureGroup>
					</MeasureGroups>
					<Dimensions>
						<Dimension CubeDimensionName="Sales Territory">
							<Attributes>
								<Attribute AttributeName="DimSalesTerritory.Sales Territory Region" />
								<Attribute AttributeName="DimSalesTerritory.Sales Territory Country" />
							</Attributes>
							<Hierarchies>
								<Hierarchy HierarchyName="DimSalesTerritory.Sales Territory" />
							</Hierarchies>
						</Dimension>
					</Dimensions>
				</Perspective>
			</Perspectives>
			<MdxScripts>
				<MdxScript Name="MdxScript1" Default="true">
					<MdxScriptItems>
						<CalculatedMember Name="[Internet Gross Profit]" FormatString="Currency" ParentDimensionName="Measures" AssociatedMeasureGroupName="Fact Internet Sales 1">
							<MdxScript>[Measures].[Internet Sales Amount] - [Measures].[Internet Total Product Cost]</MdxScript>
							<NonemptyBehaviors>
								<NonemptyBehavior MeasureName="FactInternetSales.Internet Sales Amount" />
								<NonemptyBehavior MeasureName="FactInternetSales.Internet Total Product Cost" />
							</NonemptyBehaviors>
						</CalculatedMember>
					</MdxScriptItems>
				</MdxScript>
			</MdxScripts>
			<CubeMeasureGroups>
				<CubeMeasureGroup Name="Fact Internet Sales 1" FactName="FactInternetSales">
					<Measures>
						<Measure MeasureName="FactInternetSales.Internet Sales Amount" />
						<Measure MeasureName="FactInternetSales.Internet Order Quantity" />
						<Measure MeasureName="FactInternetSales.Internet Extended Amount" />
						<Measure MeasureName="FactInternetSales.Internet Tax Amount" />
						<Measure MeasureName="FactInternetSales.Internet Freight Cost" />
						<Measure MeasureName="FactInternetSales.Internet Unit Price" />
						<Measure MeasureName="FactInternetSales.Internet Total Product Cost" />
						<Measure MeasureName="FactInternetSales.Internet Standard Product Cost" />
						<Measure MeasureName="FactInternetSales.Internet Transaction Count" />
					</Measures>
				</CubeMeasureGroup>
			</CubeMeasureGroups>
			<CubeDimensions>
				<CubeDimension Name="Sales Territory" DimensionName="DimSalesTerritory">
					<Attributes>
						<Attribute AttributeName="DimSalesTerritory.Sales Territory Region" />
						<Attribute AttributeName="DimSalesTerritory.Sales Territory Country" />
						<Attribute AttributeName="DimSalesTerritory.Sales Territory Group" />
					</Attributes>
					<Hierarchies>
						<Hierarchy HierarchyName="DimSalesTerritory.Sales Territory" />
					</Hierarchies>
				</CubeDimension>
			</CubeDimensions>
			<Actions>
				<DrillThrough Name="Internet Details" Caption="Drillthrough..." Default="false" Target="Adventure Works.Fact Internet Sales 1" TargetType="Cells"/>
				<DrillThrough Name="Finance Details" Target="Adventure Works.Fact Finance" Caption="Drillthrough..." Default="true" CaptionIsMdx="false" Invocation="Interactive" TargetType="Cells"/>
			</Actions>
			<Kpis>
				<Kpi Name="Growth in Customer Base" AssociatedMeasureGroupName="Fact Internet Sales 1" StatusGraphic="RoadSigns"/>
			</Kpis>
		</Cube>
	</Cubes>
</Biml>
```
