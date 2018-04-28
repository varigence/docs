# Named Set

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Cubes>
        <Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
            <MdxScripts>
                <MdxScript Name="MdxScript1" Default="true">
                    <MdxScriptItems>
                        <!-- Biml NamedSets allow you to specify a Type (dynamic or static) and a MdxScript. -->
                        <NamedSet Name="[Summary P&amp;L]" DisplayFolder="Sets" Type="Static">
                            <MdxScript>{
                                [Account].[Accounts].[Account Level 01].&amp;[47], -- Net Income
                                [Account].[Accounts].[Account Level 02].&amp;[48], -- Operating Profit
                                [Account].[Accounts].[Account Level 03].&amp;[49], -- Gross Margin
                                [Account].[Accounts].[Account Level 04].&amp;[50], -- Net Sales
                                [Account].[Accounts].[Account Level 05].&amp;[54], -- Discounts
                                [Account].[Accounts].[Account Level 05].&amp;[51], -- Gross Sales
                                [Account].[Accounts].[Account Level 05].&amp;[53], -- Returns
                                [Account].[Accounts].[Account Level 04].&amp;[55], -- Total Cost/Sales
                                [Account].[Accounts].[Account Level 03].&amp;[58], -- Operating Expense
                                [Account].[Accounts].[Account Level 02].&amp;[88], -- Other I/E
                                [Account].[Accounts].[Account Level 03].&amp;[93], -- Currency G/L
                                [Account].[Accounts].[Account Level 03].&amp;[91], -- Asset Sales G/L
                                [Account].[Accounts].[Account Level 03].&amp;[90], -- Interest Expense
                                [Account].[Accounts].[Account Level 03].&amp;[89], -- Interest Income
                                [Account].[Accounts].[Account Level 03].&amp;[92], -- Other Income
                                [Account].[Accounts].[Account Level 02].&amp;[94]  -- Taxes
                                }</MdxScript>
                        </NamedSet>
                    </MdxScriptItems>
                </MdxScript>
            </MdxScripts>
            <CubeDimensions>
                <CubeDimension Name="Account" DimensionName="DimAccount">
                    <Attributes>
                        <Attribute AttributeName="DimAccount.Account" />
                        <Attribute AttributeName="DimAccount.Account Number" />
                        <Attribute AttributeName="DimAccount.Account Type" />
                        <Attribute AttributeName="DimAccount.Accounts" />
                    </Attributes>
                </CubeDimension>
            </CubeDimensions>
        </Cube>
    </Cubes>
</Biml>
```
