# Script Command

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Cubes>
        <Cube Name="Adventure Works" ConnectionName="AdvWorksCube">
            <MdxScripts>
                <MdxScript Name="MdxScript1" Default="true">
                    <MdxScriptItems>
                        <!--
                        Biml ScriptCommands have names along with MdxScripts blocks.
                        When multiple calculations are defined in a MdxScriptItems collection, their order matters.
                        -->
                        <ScriptCommand Name="Calculate">
                            <MdxScript>/*-- Aggregate leaf data -----------------------------------------------*/
                                Calculate</MdxScript>
                        </ScriptCommand>
                        <ScriptCommand Name="Alter Cube">
                            <MdxScript>
                                /*-- Set default member for the Destination Currency cube dimension ----*/
                                Alter Cube
                                CurrentCube
                                Update Dimension [Destination Currency].[Destination Currency],
                                Default_Member = [Destination Currency].[Destination Currency].[US Dollar]</MdxScript>
                        </ScriptCommand>
                        <ScriptCommand Name="Scope">
                            <MdxScript>
                                /*-- Set language property for the Destination Currency cube dimension --*/
                                Scope
                                (

                                [Destination Currency].[Destination Currency Code].Members,
                                [Destination Currency].[Destination Currency].[Destination Currency].Members

                                )</MdxScript>
                        </ScriptCommand>
                    </MdxScriptItems>
                </MdxScript>
            </MdxScripts>
            <CubeDimensions>
                <CubeDimension Name="Destination Currency" DimensionName="DimDestinationCurrency">
                    <Attributes>
                        <Attribute AttributeName="DimDestinationCurrency.Destination Currency" />
                        <Attribute AttributeName="DimDestinationCurrency.Destination Currency Code" />
                        <Attribute AttributeName="DimDestinationCurrency.Locale" />
                    </Attributes>
                </CubeDimension>
            </CubeDimensions>
        </Cube>
    </Cubes>
</Biml>
```
