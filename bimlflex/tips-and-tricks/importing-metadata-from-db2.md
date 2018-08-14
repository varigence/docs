# Importing Metadata from DB2 Sources

Importing metadata from a DB2 source database requires the IBM OLE DB Provider for Db2 to be installed on the client machine. Once the driver is installed and the source connection is defined, the source tables are available to import through the BimlFlex import metadata wizard. As there are multiple versions of Db2 and multiple drivers available the template below might need to be updated to accommodate specific local requirements.

Sample Connection definition to connect to and allow metadata import from Db2:

| Metadata Column | Sample Value |
| --- | --- |
| Connection | `Your Connection Name` |
| ConnectionString | `ConnectionString here` |
| Catalog | `Database Name` |
| ConnectionType | `OLEDB` |
| SystemType | `DB2` |
| IntegrationStage | `Source` |

Sample Db2 connection string:

```
Data Source=<Data Source Name>;User ID=<User Id>;Password=<Password>;Initial Catalog=<Catalog/Database Name>;Provider=DB2OLEDB.1;Mode=Read;Use Early Metadata=True;Rowset Cache Size=0;Database Name=<Database Name>;Network Address=<Server Address>;Network Port=<Server Post>;Package Collection=DB2OLE;AutoCommit=False;
```