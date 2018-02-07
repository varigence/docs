# KPI

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Cubes>
		<Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
			<CubeMeasureGroups>
				<CubeMeasureGroup Name="Fact Finance" FactName="FactFinance"/>
			</CubeMeasureGroups>
			<Kpis>
				<!--
				This is a sample KPI that has MDX expressions for Goal, Status, Trend, and Value. 
				Its AssociatedMeasureGroupName property references the cube's Fact Finance measure group.
				-->
				<Kpi 
					Name="Operating Profit" 
					ParentKpiName="Net Income" 
					AssociatedMeasureGroupName="Fact Finance" 
					TrendGraphic="StatusArrow" 
					StatusGraphic="TrafficLight"
					>
					<Goal>
						// Account 48 = Operating Profit | Scenario 2 = Budget
						( [Account].[Accounts].&amp;[48], [Scenario].[Scenario].&amp;[2], [Measures].[Amount] )
					</Goal>
					<Status>
						Case
						When KpiValue( "Operating Profit" ) / KpiGoal( "Operating Profit" ) &gt;= .95
						Then 1
						When KpiValue( "Operating Profit" ) / KpiGoal( "Operating Profit" ) &lt;  .95
						And
						KpiValue( "Operating Profit" ) / KpiGoal( "Operating Profit" ) &gt;= .85
						Then 0
						Else -1
						End
					</Status>
					<Trend>
						Case
						When (
						KpiValue( "Operating Profit" )
						-
						(
						KpiValue( "Operating Profit" ),
						ParallelPeriod
						(
						[Date].[Fiscal].[Fiscal Year],
						1,
						[Date].[Fiscal].CurrentMember
						)
						)
						)
						/
						(
						KpiValue( "Operating Profit" ),
						ParallelPeriod
						(
						[Date].[Fiscal].[Fiscal Year],
						1,
						[Date].[Fiscal].CurrentMember
						)
						) &gt;.03
						Then 1
						Else -1
						End
					</Trend>
					<Value>
						// Account 48 = Operating Profit | Scenario 1 = Actual
						( [Account].[Accounts].&amp;[48], [Scenario].[Scenario].&amp;[1], [Measures].[Amount] )
					</Value>
				</Kpi>
			</Kpis>
		</Cube>
	</Cubes>
</Biml>
```
