# Send Mail

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <Package Name="FailureNotifier" ConstraintMode="Parallel">
            <Tasks>
                <!-- This Send Mail task notifies admin@varigence.com of a problem. -->
                <SendMail Name="Send Mail Task 2" ConnectionName="SmtpConnection2" FromLine="user@varigence.com" ToLine="admin@varigence.com" Subject="There is a problem" Priority="High">
                    <DirectInput>A package has unexpectedly failed! Please investigate.</DirectInput>
                </SendMail>
            </Tasks>
        </Package>
    </Packages>
</Biml>
```
