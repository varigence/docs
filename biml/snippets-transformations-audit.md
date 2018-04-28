# Audit

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="My Package" ConstraintMode="Parallel">
            <Tasks>
                <Dataflow Name="My Dataflow Task">
                    <Transformations>
                        <OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments">
                            <DirectInput>select * from DimFrequency</DirectInput>
                        </OleDbSource>

                        <!-- Add a version ID audit column to the DimFrequency table -->
                        <Audit Name="Audit Transformation">
                            <Audits>
                                <Audit AuditType="VersionId" Name="VersionAudit" />
                            </Audits>
                        </Audit>
                    </Transformations>
                </Dataflow>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
