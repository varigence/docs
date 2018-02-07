# HTTP

```xml
<Biml xmlns:Pamlico="http://schemas.mariner.com/pamlico" xmlns="http://schemas.varigence.com/biml.xsd">
	<!-- Creates an HTTP connection with a certificate.  Note the password in this file is in plaintext.  -->
	<Connections>
		<HttpConnection Name="MyHttpConnection" ClientCertificateFileName="CertConnection" Domain="varigence.com" Password="p@ssw0rd" ServerUrl="https://server.varigence.com" UserName="varigence" />
	</Connections>
</Biml>
```
