# Report Action

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
	<Cubes>
		<Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
			<CubeDimensions>
				<CubeDimension Name="Product" DimensionName="DimProduct">
					<Attributes>
						<Attribute AttributeName="DimProduct.Category" />
						<Attribute AttributeName="DimProduct.Product" />
						<Attribute AttributeName="DimProduct.Class" />
						<Attribute AttributeName="DimProduct.Color" />
						<Attribute AttributeName="DimProduct.List Price" />
					</Attributes>
				</CubeDimension>
			</CubeDimensions>
			<Actions>
				<!--
				This is a sample Report Action that uses report format parameters and report parameters, with a MDX caption. 
				Its target is the cube's Product dimension's Category attribute.
				-->
				<Report 
					Name="Sales Reason Comparisons" 
					CaptionIsMdx="true" 
					Caption="&quot;Sales Reason Comparisons for &quot; + &#xD;&#xA;[Product].[Category].CurrentMember.Member_Caption + &quot;...&quot;" 
					Condition="// This action requires that both Reporting Services and the Reporting Services&#xD;&#xA;// sample reports be installed on the local machine." 
					ReportServer="Localhost" 
					Path="ReportServer?/AdventureWorks Sample Reports/Sales Reason Comparisons" 
					TargetType="AttributeMembers" 
					Target="Adventure Works.Product.Category"
					>
					<ReportFormatParameters>
						<ReportFormatParameter Name="RSCommand">Render</ReportFormatParameter>
						<ReportFormatParameter Name="RSFormat">Html40</ReportFormatParameter>
					</ReportFormatParameters>
					<ReportParameters>
						<ReportParameter Name="ProductCategory">UrlEscapeFragment( [Product].[Category].CurrentMember.UniqueName )</ReportParameter>
					</ReportParameters>
				</Report>
			</Actions>
		</Cube>
	</Cubes>
</Biml>
```
