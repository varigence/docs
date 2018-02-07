# Calculated Member

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Cubes>
		<Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
			<MdxScripts>
				<MdxScript Name="MdxScript1" Default="true">
					<MdxScriptItems>
						<!--
						This calculated member specifies a MdxScript and references a cube measure group.
						-->
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
						<Measure MeasureName="FactInternetSales.Internet Total Product Cost" />
					</Measures>
				</CubeMeasureGroup>
			</CubeMeasureGroups>          
		</Cube>
	</Cubes>
</Biml>
```
