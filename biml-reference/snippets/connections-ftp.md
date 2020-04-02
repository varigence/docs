# FTP

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <!-- Creates an FTP connection to an FTP server at theFtpServer.com.  Note the password in this file is in plaintext, 
         so treat the file with care if placing the password in it. -->
    <Connections>
        <FtpConnection Name="MyFtpConnection" Password="p@ssw0rd" UserName="myUserName" ServerName="theFtpServer.com" />
    </Connections>
</Biml>
```
