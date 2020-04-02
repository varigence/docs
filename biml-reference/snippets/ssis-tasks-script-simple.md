# Script (Simple)

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Linear">
            <Tasks>
                <!-- A simple script project that runs a script which is specified in the Script Project named 
                        "Simple Task Script Project" -->
                <Script Name="Script Task" LoggingMode="Enabled">
                    <ScriptTaskProjectReference ScriptTaskProjectName="Simple Task Script Project"  />
                </Script>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
