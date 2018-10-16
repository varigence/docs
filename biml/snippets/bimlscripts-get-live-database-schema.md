# Get Live Database Schema

```biml
<#@ template language="C#" hostspecific="true"#>
<#@ import namespace="System.Data" #>

<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <Packages>
        <!--  Connects to a live database, using standard ADO.NET, to create a set of packages 
                that correspond to the tables in that database. -->
        <#  var connectionStringBuilder = new System.Data.SqlClient.SqlConnectionStringBuilder("Server=localhost;Initial Catalog=Master;Integrated Security=SSPI;");

            var con = new System.Data.SqlClient.SqlConnection(connectionStringBuilder.ConnectionString);
            con.Open();
            var tblDatabases = con.GetSchema("Databases", new string[] { "SportsData" });

            foreach (System.Data.DataRow database in tblDatabases.Rows)
            {
                connectionStringBuilder.InitialCatalog = database["database_name"].ToString();

                var conTbl = new System.Data.SqlClient.SqlConnection(connectionStringBuilder.ConnectionString);
                conTbl.Open();

                var tblTables = conTbl.GetSchema(System.Data.SqlClient.SqlClientMetaDataCollectionNames.Tables);

                foreach (System.Data.DataRow table in tblTables.Rows)
                { #>
                    <Package Name="<#=table["table_name"]#>">
                        <!--  Your logic here -->
                    </Package>
                <# }

                conTbl.Close();
            }

            con.Close(); #>
    </Packages>
</Biml>
```
