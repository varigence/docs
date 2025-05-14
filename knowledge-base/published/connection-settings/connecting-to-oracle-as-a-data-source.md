---
uid: kb-connecting-to-oracle-as-a-data-source
title: Connecting to Oracle as a Data Source
summary: Guide on numerous ways to connect to an Oracle data source using Biml
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue

Despite the fact that the "SS" in SSIS stands for SQL Server, SSIS also supports using Oracle databases as a data source. However, setting up these connections can be difficult. There are currently four (4) different ways to connect to an Oracle data source using Biml: 

*   ADO.NET connection
    
*   OLEDb Connection
    
*   ODBC Connection
    
*   Attunity Oracle Connection  
     
    

# Resolution

See below for explanations on the different methods for connecting an Oracle data source.  
  
**Method 1: ADO.NET Connection**  
  
In order to connect using an ADO.NET connection, ensure that the Oracle Data Provider for .NET has first been installed.

**\*Note:** More information on the Oracle Data Provider for .NET can be found [here](https://www.oracle.com/database/technologies/appdev/dotnet/odp.html). 

Assuming that a working Oracle database and that the Data Provider has been installed, an ADO.NET Connection can be created, as such:   
  
<Connections>  
     <AdoNetConnection Name="AdoNetOracleConn" ConnectionString="Data Source=localhost:1522/orcl;User  
Id=userID;Password=XXXXX" Provider="Oracle.DataAccess.Client" />  
</Connections>  
  
Note that, depending on database setup, the ID, Password, and Data Source properties could all be different. This connection is now able to be referenced inside of AdoNet dataflow components.  
  
**Method 2: OLEDB Connection**  
  
Similar to the ADO.NET connection, the installation of Oracle Data Provider for .NET is required before proceeding.

As in Method 1, an OLEDB connection can then be created, as such:   
  
<Connections>  
     <OleDbConnection Name="OleDbOracleConn" ConnectionString="Provider=OraOLEDB.Oracle;Data  
Source=localhost:1522/orcl;User ID=user;Password=password" />  
</Connections>  
 

Note that, depending on the database setup, the User ID, Password, and Data Source properties could all be different. This connection is now able to be referenced inside of OLEDB dataflow components.   
  
**Method 3: ODBC Connection** 

  
In order to connect to an Oracle data source using an ODBC connection, the user must first have created an ODBC connection on their machine. An ODBC connection can be created following the below steps: 

1.  Search for ODBC Administrator and run as admin. 
2.  Click "Add." 
3.  Find the driver that corresponds to the Oracle database, and double-click it.
4.  Fill out the information as required for the subject database. 
5.  Click "Test Connection" to make sure that the connection was set up correctly.
6.  Click "OK."

Now that a working ODBC connection to the Oracle data source is confirmed, a connection can be set up in Biml like so:    
  
<Connections>  
     <OdbcConnection Name="OdbcOracleConn" ConnectionString="Dsn=odbcConnection;Uid=user;Pwd=password"  
/>  
</Connections>  
 

The DSN property referenced in the above connection string corresponds to the name that was set for the connection in the ODBC Administrator. The "UID" and "Pwd" properties correspond to the User ID and Password to connect to the Oracle database, respectively. 

This connection can now be referenced inside of ODBC dataflow components.   
  
**Method 4: Attunity Oracle Connection**  
  
In order to use Oracle dataflow components, the appropriate version of Attunity Oracle Connectors must be installed on the machine. The connector version must be compatible with the target version of SSIS for the subject project. 

The latest version of Attunity Oracle connector can be downloaded [here](https://www.microsoft.com/en-us/download/details.aspx?id=55179).

**\*Note:** Ensure that if the 64-bit version of BimlStudio is being used, the 64-bit version of Attunity Oracle connector is necessary. 

An Attunity Oracle connection can now created within Biml, as such:   
  
<Connections>  
     <OracleConnection Name="AttunityOracleConn" ConnectionString="Data Source=orcl;User  
ID=user;Password=password" />  
</Connections>  
  
Note that each property of the connection string will have a different value than depicted above, depending on the user's connection. 

This connection is now able to be referenced inside of Oracle dataflow components.