# Standard Action

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Cubes>
        <Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
            <CubeDimensions>
                <CubeDimension Name="Geography" DimensionName="DimGeography">
                    <Attributes>
                        <Attribute AttributeName="DimGeography.Geography Key" />
                        <Attribute AttributeName="DimGeography.City" />
                        <Attribute AttributeName="DimGeography.Country" />
                        <Attribute AttributeName="DimGeography.Postal Code" />
                        <Attribute AttributeName="DimGeography.State-Province" />
                    </Attributes>
                    <Hierarchies>
                        <Hierarchy HierarchyName="DimGeography.Geography" />
                    </Hierarchies>
                </CubeDimension>
            </CubeDimensions>
            <Actions>
                <!--
                This is a sample Standard Action that has a MDX expression and caption. 
                Its Target is the cube's Geography dimension's City attribute.
                -->
                <Standard
                    Name="City Map"
                    Caption="&quot;View Map for &quot; + &#xD;&#xA;[Geography].[City].CurrentMember.Member_Caption + &quot;...&quot;"
                    CaptionIsMdx="true"
                    TargetType="AttributeMembers"
                    Target="Adventure Works.Geography.City"
                    >
                    <Expression>// URL for linking to MSN Maps
                        "http://maps.msn.com/home.aspx?plce1=" +

                        // Retrieve the name of the current city
                        [Geography].[City].CurrentMember.Name + "," +

                        // Append state-province name
                        [Geography].[State-Province].CurrentMember.Name + "," +

                        // Append country name
                        [Geography].[Country].CurrentMember.Name +

                        // Append region parameter
                        "&amp;regn1=" +

                        // Determine correct region parameter value
                        Case
                        When [Geography].[Country].CurrentMember Is
                        [Geography].[Country].&amp;[Australia]
                        Then "3"
                        When [Geography].[Country].CurrentMember Is
                        [Geography].[Country].&amp;[Canada]
                        Or
                        [Geography].[Country].CurrentMember Is
                        [Geography].[Country].&amp;[United States]
                        Then "0"
                        Else "1"
                        End
                    </Expression>
                </Standard>
            </Actions>
        </Cube>
    </Cubes>
</Biml>
```
